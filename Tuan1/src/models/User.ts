export class User {
    private name: string = ""

    constructor() {

    }


    getter() {
        return this.name
    }

    setter(name: string) {
        this.name = name
    }
}