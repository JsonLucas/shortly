import { UseCase } from "..";
import { GenericLinkDTO, ILink, UpdateLinkInputDTO } from "../../domain/interface/link";
import { Link } from "../../domain/link/entity/link";
import { ILinkGateway } from "../../domain/link/gateway/link.gateway";

export class UpdateLinkUseCase implements UseCase<UpdateLinkInputDTO, GenericLinkDTO> {
    private constructor(private readonly linkGateWay: ILinkGateway){ }

    public static create(linkGateWay: ILinkGateway) {
        return new UpdateLinkUseCase(linkGateWay);
    }

    async execute (linkDTO: UpdateLinkInputDTO): Promise<GenericLinkDTO> {
        const updatedLink = await this.linkGateWay.update(linkDTO);
        const output = this.presentOutput(updatedLink);

        return output;
    }

    private presentOutput(link: ILink) {
        const output = Link.with(link);
        return { id: output.id };
    }
}