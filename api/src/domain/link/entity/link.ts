import { ILink } from "../../interface/link";

export class Link {
    private constructor(private link: ILink){ }
    
    public static create({ id, fullUrl, shortUrl, userId }: ILink) {
        return new Link({
            id,
            fullUrl, 
            shortUrl, 
            userId
        });
    }

    public static with(link: ILink) {
        return new Link(link);
    }

    public get id() {
        return this.link.id;
    }

    public get shortUrl() {
        return this.link.shortUrl;
    }

    public get fullUrl() {
        return this.link.fullUrl;
    }

    public get userId() {
        return this.link.userId;
    }
}