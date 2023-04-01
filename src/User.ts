import { faker } from '@faker-js/faker';

export class User {
    name!: string;
    coordinate!: {
        lat: number;
        log: number;
    };


    constructor( ) {
        this.name = faker.name.firstName('male'),
        this.coordinate = {
            lat : parseFloat(faker.address.latitude()),
            log : parseFloat(faker.address.longitude()),
        }
     }

}
