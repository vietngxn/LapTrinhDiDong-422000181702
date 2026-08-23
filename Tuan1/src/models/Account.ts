export class Account {
    readonly id: string;
    public owner: string;
    private balance: number;

    constructor(id: string, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }



    public getInfo(): string {
        return `Account ID: ${this.id}, Owner: ${this.owner}, Balance: $${this.balance}`;
    }
}
