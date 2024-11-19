export interface ILink {
    id: number
    fullUrl: string
    shortUrl: string
    createdAt?: Date
    updatedAt?: Date
    userId: number
}

export type Ranking = Pick<ILink, 'id' | 'fullUrl' | 'shortUrl'> & { visitCount: number };

export type CreateLinkInputDTO = Pick<ILink, 'fullUrl' | 'shortUrl' | 'userId'>;
export type UpdateLinkInputDTO = Pick<ILink, 'id' | 'fullUrl' | 'shortUrl'>;

export type CreateVisitationDTO = { urlId: number, ip: string };

export type GenericLinkDTO = Pick<ILink, 'id'>;