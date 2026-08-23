export class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        return `Name: ${this.name}, Age: ${this.age} years old.`;
    }
}