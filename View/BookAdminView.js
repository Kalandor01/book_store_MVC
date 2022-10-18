class BookAdminView {
    #book
    #row
    #modButton
    #delButton

    constructor(book, pElement) {
        this.#book = book;
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
    }

    clickModButtonEvent() {
        window.dispatchEvent(
            new CustomEvent("mod", {detail:(this.#book.id)})
        );
    }
}

export default BookAdminView;