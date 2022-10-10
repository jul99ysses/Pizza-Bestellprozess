class Ingredient {
    constructor(ingredientName, ingredientPrice) {
        this._ingredientPrice = ingredientPrice;
        this._ingredientName = ingredientName;
    }

    get ingredientPrice() {
        return this._ingredientPrice;
    }

    get ingredientName() {
        return this._ingredientName;
    }

    toString() { 
        return this._ingredientName + " (" + this._ingredientPrice + "€) ";
        // using templating
        // return `${this._ingredientName}(${this._ingredientPrice})`;
    } 
}