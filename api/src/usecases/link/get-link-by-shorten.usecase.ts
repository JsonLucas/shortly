import { UseCase } from "..";
import { ShortrenLinkDTO } from "../../domain/interface/link";
import { Link } from "../../domain/link/entity/link";
import { ILinkGateway } from "../../domain/link/gateway/link.gateway";

export class GetLinkByShortenUseCase implements UseCase<ShortrenLinkDTO, Link> {
    private constructor(private readonly linkGateWay: ILinkGateway){ }

    public static create(linkGateWay: ILinkGateway) {
        return new GetLinkByShortenUseCase(linkGateWay);
    }

    async execute (linkDTO: ShortrenLinkDTO): Promise<Link> {
        const link = await this.linkGateWay.getByShorten(linkDTO.shortUrl);
        if(!link) throw new Error('Link not found.');

        return Link.with(link);
    }
}