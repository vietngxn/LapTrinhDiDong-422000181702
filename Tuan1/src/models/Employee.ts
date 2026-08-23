export class Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    getDetails(): string {
        return `${this.name} earns $${this.salary}/year`;
    }
}
