import { UseCase } from "..";
import { GenericLinkDTO } from "../../domain/interface/link";
import { ILinkGateway } from "../../domain/link/gateway/link.gateway";

export class DeleteLinkUseCase implements UseCase<GenericLinkDTO, boolean> {
    private constructor(private readonly linkGateWay: ILinkGateway){ }

    public static create(linkGateWay: ILinkGateway) {
        return new DeleteLinkUseCase(linkGateWay);
    }

    async execute (linkDTO: GenericLinkDTO): Promise<boolean> {
        const deletedLink = await this.linkGateWay.remove(linkDTO.id);
        const output = deletedLink.id === linkDTO.id;

        return output;
    }
}