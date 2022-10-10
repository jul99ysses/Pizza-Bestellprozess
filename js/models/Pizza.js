class Pizza {
  constructor(pizzaName, pizzaPrice) {
    this.pizzaName = pizzaName;
    this._pizzaPrice = pizzaPrice;
    this._extraIngredients = [];
  }

  get pizzaPrice() {
    return this._pizzaPrice;
  }

  get extraIngredients() {
    return this._extraIngredients;
  }

  addExtraIngredient(ingredient) {
    this._extraIngredients.push(ingredient);
  }

  addExtraIngredients(ingredients) {
    for (let ingredient of ingredients) {
        this.addExtraIngredient(ingredient);
    }
  }

  getTotalPrice() {
      let price = this._pizzaPrice;
      for (let extraIngredient of this._extraIngredients) {
        price += extraIngredient.ingredientPrice;
      }
      return price;
  }

  toHtml() {
    let str = "<b>Pizza:</b> " + this.pizzaName + " (" + this._pizzaPrice  + "€)<br><b>Extrazutaten:</b>";

    // no extra ingredients
    if (this._extraIngredients.length === 0) str += " Keine";

    for (let extraIngredient of this._extraIngredients) {
        str += " " + extraIngredient.toString();
    }
    return str;
  }
}
