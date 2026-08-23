import { Payment } from "./Payment";

export class CardPayment implements Payment {
    cardNumber: string;

    constructor(cardNumber: string) {
        this.cardNumber = cardNumber;
    }

    pay(amount: number): string {
        const maskedCard = `****-****-****-${this.cardNumber.slice(-4)}`;
        return `Paid $${amount} using Card ending in ${maskedCard}.`;
    }
}
