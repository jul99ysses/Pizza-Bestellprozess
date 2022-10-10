class OrderController {

    constructor() {
        this.order = new Order();
    }

    addPizza() {
        const pizza = Form.getChosenPizza();

        // Error handling if no pizza was selected
        if (!pizza) {
          this.displayError();
          return;
        }
        this.hideError();
        const extraIngredients = Form.getChosenExtraIngredients();
        pizza.addExtraIngredients(extraIngredients);
        this.order.addPizza(pizza);
        this.displayOrder();
    }

    removeLastPizza() {
        this.order.removeLastPizza();
        this.displayOrder();
    }

    displayOrder() {
      const output = this.order.toHtml();
      const outputArea = document.getElementById("outputArea");
      outputArea.innerHTML = output;
    }

    hideError() {
      errorOutputArea.innerHTML = "";
    }

    displayError() {
      errorOutputArea.innerHTML = "Keine Pizza ausgewählt";
    }
}