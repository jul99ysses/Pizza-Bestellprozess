class Order {
  constructor() {
    this.pizzas = [];
  }

  addPizza(pizza) {
    this.pizzas.push(pizza);
  }

  removeLastPizza() {
    this.pizzas.pop();
  }

  getTotalSum() {
    let totalSum = 0;
    for (let pizza of this.pizzas) {
      totalSum += pizza.getTotalPrice();
    }
    return totalSum.toFixed(2);
  }

  toHtml() {
    const head = "<thead><th>Gericht<th>Kosten</th></thead>";

    // pizzas
    let rows = "";
    for (const pizza of this.pizzas) {
      rows += "<tr><td>" + pizza.toHtml() + "</td><td>" + pizza.getTotalPrice().toFixed(2) + "€</td></tr>"
    }
    // final Sum
    rows += "<tr><td> Summe </td><td>" + this.getTotalSum() + "€</td></tr>";

    const body = "<tbody>" + rows + "</tbody>";
    const html = "<table>" + head + body + "</table>";
    return html;
  }
}
