import BasketModel from "../Model/BasketModel.js";
import BasketView from "../View/BasketView.js";

class BasketController {
    #model;

    constructor() {
        this.#model = new BasketModel();

        $("#basket").on("click", ()=>{
            this.showBasket();
        });
    }

    showBasket() {
        let items = this.#model.getItems();
        new BasketView(items, "main");
    }

    addItem(item) {
        this.#model.addItem(item);
    }

    decreaseItem(item) {
        this.#model.decreaseItem(item);
    }

    removeItem(item) {
        console.log(item);
        this.#model.removeItem(item);
    }
}

export default BasketController;