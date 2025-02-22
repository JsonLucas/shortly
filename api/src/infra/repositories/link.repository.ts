import { PrismaClient } from "@prisma/client";
import { CreateVisitationDTO, ILink, Ranking, UpdateLinkInputDTO } from "../../domain/interface/link";
import { Link } from "../../domain/link/entity/link";
import { ILinkGateway } from "../../domain/link/gateway/link.gateway";

export class LinkRepository implements ILinkGateway {
    private constructor(private readonly prisma: PrismaClient) { }

    public static create(prisma: PrismaClient) {
        return new LinkRepository(prisma);
    }

    async save(link: Link): Promise<Link> {
        const { fullUrl, shortUrl, userId } = link;
        const createdLink = await this.prisma.urls.create({ data: { fullUrl, shortUrl, userId } });
        return Link.with(createdLink);
    }

    async update(link: UpdateLinkInputDTO): Promise<Link> {
        const { id, fullUrl, shortUrl } = link;
        const updatedLink = await this.prisma.urls.update({ data: { fullUrl, shortUrl }, where: { id } });
        return Link.with(updatedLink);
    }

    async saveVisitation(visitation: CreateVisitationDTO): Promise<Link> {
        const { urlId, ip } = visitation;
        const { url } = await this.prisma.visitations.upsert({
            where: { ip },
            update: {
                updatedAt: new Date(),
            },
            create: {
                ip,
                urlId
            },
            include: {
                url: true
            }
        });
    
        return Link.with(url);
    }

    async getAll(): Promise<Link[]> {
        const links = await this.prisma.urls.findMany();

        return links.map((item) => Link.with(item));
    }

    async getRanking(): Promise<Ranking[]> { //ajustar essa query pra pegar o número de urls que esse usuário encurtou
        return await this.prisma.$queryRaw`SELECT 
            l.id, 
            l.fullUrl, 
            l.shortUrl, 
            COUNT(v.ip) AS visitCount, 
            l.userId, 
            u.name, 
            (SELECT COUNT(*) FROM urls WHERE userId = l.userId) AS linkCount
        FROM urls AS l
        LEFT JOIN users AS u ON l.userId = u.id
        LEFT JOIN visitations AS v ON l.id = v.urlId
        GROUP BY l.id, l.userId, u.name
        ORDER BY visitCount DESC 
        LIMIT 5;
        `;
    }

    async getById(id: number): Promise<Link | null> {
        const link = await this.prisma.urls.findUnique({ where: { id } });
        if (!link) return null;

        return Link.with(link);
    }

    async getByUserId(userId: number): Promise<Link[]> {
        const links = await this.prisma.urls.findMany({ where: { userId } });

        return links.map((item) => Link.with(item));
    }

    async getByShorten(shortUrl: string): Promise<Link | null> {
        const link = await this.prisma.urls.findUnique({ where: { shortUrl } });
        if(!link) return null;

        return Link.with(link);
    }

    async remove(id: number): Promise<Link> {
        const removed = await this.prisma.urls.delete({ where: { id } });
        return Link.with(removed);
    }
}