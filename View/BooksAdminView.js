import BookAdminView from "./BookAdminView.js";

class BooksAdminView {
    #table
    #tbody
    #books

    constructor(booksList, parentElemName) {
        console.log("Reload books");
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

    #findBookView(book) {
        let bookIndex = -1;
        for (let x = 0; x < this.#books.length; x++)
        {
            if (this.#books[x].getBook() == book) {
                bookIndex = x;
                break;
            }
        }
        return bookIndex;
    }

    editBook(book) {
        let bookIndex = this.#findBookView(book);
        if (bookIndex != -1)
        {
            let bookElement = this.#books[bookIndex];
            bookElement.editMode();
        }
    }
}

export default BooksAdminView;