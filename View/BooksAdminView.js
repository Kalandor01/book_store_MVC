import BookAdminView from "./BookAdminView.js";

class BooksAdminView {
    #table
    #tbody
    #books

    constructor(booksList, parentElemName) {
        let parentElem = $(parentElemName);
        parentElem.empty();
        parentElem.append(`<table><thead><tr>
        <th>ID</th>
        <th>Title</th>
        <th>Author</th>
        <th>Price</th>
        <th>Edit</th>
        <th>Delete</th>
        </tr></thead><tbody></tbody></table>`);
        this.#table = parentElem.children("table:last-child");
        this.#tbody = this.#table.children("tbody:last-child");

        this.#books = [];
        booksList.forEach((book, x) => {
            this.#books.push(new BookAdminView(book, this.#tbody, x));
        });
    }
}

export default BooksAdminView;