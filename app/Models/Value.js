export default class Question {
    constructor(data) {
        this.description = data.description
        this.cost = data.cost
        this.category = data.category

    }

    get Template() {
        return `<div className="col-12">
        
        </div>`
    }
}