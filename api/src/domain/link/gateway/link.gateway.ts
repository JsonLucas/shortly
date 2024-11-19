import { CreateVisitationDTO, Ranking, UpdateLinkInputDTO } from "../../interface/link";
import { Link } from "../entity/link";

export interface ILinkGateway {
    save: (link: Link) => Promise<Link>
    update: (link: UpdateLinkInputDTO) => Promise<Link>
    getAll: () => Promise<Link[]>
    getRanking: () => Promise<Ranking[]>
    getById: (id: number) => Promise<Link | null>
    getByUserId: (userId: number) => Promise<Link[]>
    saveVisitation: (visitation: CreateVisitationDTO) => Promise<Link>
    remove: (id: number) => Promise<Link>
}