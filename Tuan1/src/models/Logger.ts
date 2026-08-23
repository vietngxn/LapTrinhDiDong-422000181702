export class Logger {
    private static instance: Logger;
    private logs: string[] = [];

    private constructor() {}

    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    log(message: string): void {
        const timestamp = new Date().toLocaleTimeString();
        const formattedMessage = `[${timestamp}] ${message}`;
        console.log(formattedMessage);
        this.logs.push(formattedMessage);
    }

    getLogs(): string[] {
        return this.logs;
    }
}
