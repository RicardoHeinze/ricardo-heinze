export module Types {
    export class MenuItem {
        constructor(public ID: number, public Name: string, public Route: string){}
    }

    export class CarouselItem {
        Route: string;
        
        constructor(public ID: number, public Name: string, public ImgURL: string){}
    }

    export class KnowledgeItem {
        constructor(public ID: number, public Name: string, public imgURL: string, public shortName: string) {}
    }
}