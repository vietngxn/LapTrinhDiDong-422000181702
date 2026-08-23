import { Book } from "./Book";
import { User } from "./User";

export class Library {
    books: Book[] = [];
    users: User[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    addUser(user: User): void {
        this.users.push(user);
    }

    getInventorySummary(): string {
        return `Library has ${this.books.length} books and ${this.users.length} registered users.`;
    }
}
