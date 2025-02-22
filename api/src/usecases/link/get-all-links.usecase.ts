import { UseCase } from "..";
import { GetAllLinksDTO } from "../../domain/interface/link";
import { Link } from "../../domain/link/entity/link";
import { ILinkGateway } from "../../domain/link/gateway/link.gateway";

export class GetAllLinksUseCase implements UseCase<void, GetAllLinksDTO[]> {
    private constructor(private readonly linkGateWay: ILinkGateway){ }

    public static create(linkGateWay: ILinkGateway) {
        return new GetAllLinksUseCase(linkGateWay);
    }

    async execute (): Promise<GetAllLinksDTO[]> {
        const links = await this.linkGateWay.getAll();
        return this.formatOutput(links);
    }

    private formatOutput(links: Link[]): GetAllLinksDTO[]{
        return links.map((item) => {
            const { fullUrl, shortUrl, createdAt } = item;
            return { fullUrl, shortUrl, createdAt }
        });
    }
}