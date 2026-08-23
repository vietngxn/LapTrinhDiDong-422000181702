import { Payment } from "./Payment";

export class CashPayment implements Payment {
    pay(amount: number): string {
        return `Paid $${amount} in Cash. No transaction fees applied.`;
    }
}
