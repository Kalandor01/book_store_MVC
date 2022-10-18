import BooksAdminView from "../View/BooksAdminView.js";
import BookModel from "../Model/BookModel.js";

class BookController {
    #BookModel
    #BooksView

    constructor() {
        this.#BookModel = new BookModel();
        this.#BookModel.getData("../data.json", this.getBooksData);
    }

    getBooksData(bookList) {
        console.log(bookList);
        /* this.#BooksView = */new BooksAdminView(bookList, "main");

        $(window).on("mod", (evt) => {
            console.log("mod " + evt.detail);
            this.#BookModel.modData(evt.detail);
        })
    }
}

export default BookController;