export class EmailRequest {
    name: string;
    number: string;
    email: string;
    message: string;

    constructor (name: string, 
            number: string, 
            email: string, 
            message: string) {
        this.name = name;
        this.number = number;
        this.email = email;
        this.message = message;
    }
}