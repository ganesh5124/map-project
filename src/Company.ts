import { faker } from "@faker-js/faker";

export class Company {
    CompanyName!: string;
    catchPhrase!: string;

    location!: {
        lat:number,
        log:number
    };

    constructor( ) {
        this.CompanyName = faker.company.name()
        this.catchPhrase = faker.company.catchPhrase()

        this.location = {
            lat : parseFloat(faker.address.latitude()),
            log : parseFloat(faker.address.longitude())
        }
    }
}