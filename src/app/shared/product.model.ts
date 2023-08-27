export class Product {
    constructor(
        public _id:string,
        public name:string,
        public description:string,
        public brand:string,
        public size:ProductSize,
        public marketPrice:number,
        public salePrice:number,
        public material:ProductMaterial,
        public type:ProductType,
        public imageUrl:string,
        public imageId:string,
            ){}
}

export enum ProductSize { 
    SMALL = 'SMALL',
    MEDIUM = 'MEDIUM',
    LARGE = 'LARGE'
}

export enum ProductType{
    A="A",
    B="B",
    C="C",
    D="D"
}

export enum ProductMaterial{
    A="A",
    B="B",
    C="C",
    D="D"
}