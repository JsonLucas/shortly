import { UseCase } from "..";
import { GenericLinkDTO } from "../../domain/interface/link";
import { Link } from "../../domain/link/entity/link";
import { ILinkGateway } from "../../domain/link/gateway/link.gateway";

export class GetLinkByIdUseCase implements UseCase<GenericLinkDTO, Link> {
    private constructor(private readonly linkGateWay: ILinkGateway){ }

    public static create(linkGateWay: ILinkGateway) {
        return new GetLinkByIdUseCase(linkGateWay);
    }

    async execute (linkDTO: GenericLinkDTO): Promise<Link> {
        const link = await this.linkGateWay.getById(linkDTO.id);
        if(!link) throw new Error('Link not found.');

        return Link.with(link);
    }
}