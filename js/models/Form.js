class Form {
  static getChosenPizza() {
    const selectedSalami = document.getElementById("salamipizza").checked;
    const selectedMargharita = document.getElementById("margharita").checked;
    const selectedGemuese = document.getElementById("gemuesepizza").checked;
    const selectedHawaii = document.getElementById("hawaii").checked;
    let pizza;
    if (selectedSalami) {
      pizza = new Pizza("Salamipizza", 10);
    } else if (selectedMargharita) {
      pizza = new Pizza("Margharita", 8);
    } else if (selectedGemuese) {
      pizza = new Pizza("Gemuesepizza", 5);
    } else if (selectedHawaii) {
      pizza = new Pizza("Hawaiipizza", 7);
    }
    return pizza;
  }

  static getChosenExtraIngredients() {
    const selectedMais = document.getElementById("mais").checked;
    const selectedSchinken = document.getElementById("schinken").checked;
    const selectedOliven = document.getElementById("oliven").checked;
    const selectedKapern = document.getElementById("kapern").checked;
    let listOfIngredients = [];
    if (selectedMais) {
      let ingredient = new Ingredient("Mais", 1);
      listOfIngredients.push(ingredient);
    }
    if (selectedSchinken) {
      let ingredient = new Ingredient("Schinken", 1.2);
      listOfIngredients.push(ingredient);
    }
    if (selectedOliven) {
      let ingredient = new Ingredient("Oliven", 0.6);
      listOfIngredients.push(ingredient);
    }
    if (selectedKapern) {
      let ingredient = new Ingredient("Kapern", 0.1);
      listOfIngredients.push(ingredient);
    }
    return listOfIngredients;
  }
}
