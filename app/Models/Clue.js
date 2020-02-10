export default class Clue {
    constructor(data) {
        this.description = data.description
        this.cost = data.cost
        this.category = data.category
        this.answer = data.answer
    }

    get Template() {
        return `<li>${this.description}</li>`
    }
}