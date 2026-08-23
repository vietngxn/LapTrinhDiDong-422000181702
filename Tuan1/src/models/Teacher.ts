import { Person } from "./Person";

export class Teacher extends Person {
    subject: string;

    constructor(name: string, age: number, subject: string) {
        super(name, age);
        this.subject = subject;
    }

    introduce(): string {
        return `Hello, I am teacher ${this.name}, and I teach ${this.subject}.`;
    }
}
