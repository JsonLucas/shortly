import { UseCase } from "..";
import { CreateLinkInputDTO, GenericLinkDTO, ILink } from "../../domain/interface/link";
import { Link } from "../../domain/link/entity/link";
import { ILinkGateway } from "../../domain/link/gateway/link.gateway";

export class CreateLinkUseCase implements UseCase<CreateLinkInputDTO, GenericLinkDTO> {
    private constructor(private readonly linkGateWay: ILinkGateway){ }

    public static create(linkGateWay: ILinkGateway) {
        return new CreateLinkUseCase(linkGateWay);
    }

    async execute (linkDTO: CreateLinkInputDTO): Promise<GenericLinkDTO> {
        const link = Link.create({ ...linkDTO, id: 0 });

        const createdLink = await this.linkGateWay.save(link);
        const output = this.presentOutput(createdLink);

        return output;
    }

    private presentOutput(input: ILink) {
        const output = Link.with(input);
        return { id: output.id };
    }
}