import { Brand } from "../shared/brand.model";

export class Template {
    constructor(public _id: string,
        public name: string,
        public imageUrl: string,
        public description: string,
        public psdFileId?: string,
        public imageFileId?: string) { }
}