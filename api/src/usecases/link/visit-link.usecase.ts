import { UseCase } from "..";
import { CreateVisitationDTO, GenericLinkDTO, ILink } from "../../domain/interface/link";
import { Link } from "../../domain/link/entity/link";
import { ILinkGateway } from "../../domain/link/gateway/link.gateway";

export class VisitLinkUseCase implements UseCase<CreateVisitationDTO, GenericLinkDTO> {
    private constructor(private readonly linkGateWay: ILinkGateway){ }

    public static create(linkGateWay: ILinkGateway) {
        return new VisitLinkUseCase(linkGateWay);
    }

    async execute (visitationDTO: CreateVisitationDTO): Promise<GenericLinkDTO> {
        const link = await this.linkGateWay.saveVisitation(visitationDTO);

        return this.presentOutput(link);
    }

    private presentOutput(link: ILink) {
        const output = Link.with(link);
        return { id: output.id };
    }
}