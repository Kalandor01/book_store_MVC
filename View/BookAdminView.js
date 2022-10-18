
class BookAdminView {
    #book
    #row
    #modButton
    #delButton

    constructor(book, pElement, x) {
        this.#book = book;
        this.#book.x = x;
        console.log(this.#book);
        pElement.append(`<tr>
        <td>${this.#book.id}</td>
        <td>${this.#book.title}</td>
        <td>${this.#book.author}</td>
        <td>${this.#book.price}</td>
        <td><button id="mod${this.#book.id}">Edit</button></td>
        <td><button id="del${this.#book.id}">Delete</button></td>
        </tr>`);

        this.#row = pElement.children("tr:last-child");
        this.#modButton = $(`#mod${this.#book.id}`);
        this.#delButton = $(`#del${this.#book.id}`);


        this.#modButton.on("click", () => {
            this.clickModButtonEvent();
        })

        this.#delButton.on("click", () => {
            this.clickDelButtonEvent();
        })
    }

    clickModButtonEvent() {
        window.dispatchEvent(
            new CustomEvent("mod", {detail:(this.#book)})
        );
    }

    clickDelButtonEvent() {
        window.dispatchEvent(
            new CustomEvent("del", {detail:(this.#book)})
        );
    }
}

export default BookAdminView;