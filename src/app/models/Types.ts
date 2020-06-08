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

    export class ProfessionalExperience {
        constructor(public ID: number, public Company: string, public Experiences: Array<Types.Experience>) {}
    }

    export class Experience {
        constructor(public ID: number, public Project: string, public Description: string) {}
    }

    export class Course {
        constructor(public ID: number, public Course: string, public Institution: string, public FinishDate: string, public CertificationURL?: string) {}
    }
}