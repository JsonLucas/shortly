import { UseCase } from "..";
import { Ranking } from "../../domain/interface/link";
import { ILinkGateway } from "../../domain/link/gateway/link.gateway";

export class GetRankingUseCase implements UseCase<void, Ranking[]> {
    private constructor(private readonly linkGateWay: ILinkGateway){ }

    public static create(linkGateWay: ILinkGateway) {
        return new GetRankingUseCase(linkGateWay);
    }

    async execute (): Promise<Ranking[]> {
        const links = await this.linkGateWay.getRanking();
        return links;
    }
}