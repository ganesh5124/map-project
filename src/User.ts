import { faker } from '@faker-js/faker';

export class User {
    name!: string;
    location!: {
        lat: number;
        lng: number;
    };
    
    markerContent() : string {
        return `name ${this.name}`
    }
    constructor( ) {
        this.name = faker.name.firstName('male'),
        this.location = {
            lat : parseFloat(faker.address.latitude()),
            lng : parseFloat(faker.address.longitude()),
        }
     }

}
