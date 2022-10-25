
class BasketModel {
    #items;

    constructor() {
        this.#items = [];
    }

    #findItem(fitem) {
        let itemIndex = -1;
        for (let x = 0; x < this.#items.length; x++)
        {
            if (this.#items[x].id == fitem.id) {
                itemIndex = x;
                break;
            }
        }
        return itemIndex;
    }

    addItem(item) {
        let itemIndex = this.#findItem(item);
        if (itemIndex == -1)
        {
            item.amount = 1;
            this.#items.push(item);
        }
        else
        {
            this.#items[itemIndex].amount++;
        }
    }

    decreaseItem(item) {
        let itemIndex = this.#findItem(item);
        if (itemIndex != -1)
        {
            let fitem = this.#items[itemIndex];
            if (fitem.amount > 1)
            {
                fitem.amount--;
            }
            else
            {
                this.removeItem(fitem);
            }
        }
    }

    removeItem(item) {
        let itemIndex = this.findItem(item);
        if (itemIndex != -1)
        {
            this.#items.splice(itemIndex, 1);
        }
    }

    getItems() {
        return this.#items;
    }
}

export default BasketModel;