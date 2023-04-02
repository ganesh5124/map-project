import { faker } from "@faker-js/faker";

export class Company {
    CompanyName!: string;
    catchPhrase!: string;

    location!: {
        lat:number,
        lng:number
    };
    markerContent():string {
        return `Company Name is ${this.CompanyName} and its phrase is ${this.catchPhrase}`
    }

    constructor( ) {
        this.CompanyName = faker.company.name()
        this.catchPhrase = faker.company.catchPhrase()

        this.location = {
            lat : parseFloat(faker.address.latitude()),
            lng : parseFloat(faker.address.longitude())
        }
    }
}