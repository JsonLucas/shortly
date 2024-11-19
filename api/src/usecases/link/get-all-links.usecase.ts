import { UseCase } from "..";
import { Link } from "../../domain/link/entity/link";
import { ILinkGateway } from "../../domain/link/gateway/link.gateway";

export class GetAllLinksUseCase implements UseCase<void, Link[]> {
    private constructor(private readonly linkGateWay: ILinkGateway){ }

    public static create(linkGateWay: ILinkGateway) {
        return new GetAllLinksUseCase(linkGateWay);
    }

    async execute (): Promise<Link[]> {
        const links = await this.linkGateWay.getAll();
        return links;
    }
}