import BooksAdminView from "../View/BooksAdminView.js";
import BooksUserView from "../View/BooksUserView.js";
import BookModel from "../Model/BookModel.js";

class BookController {
    #file
    #bookModel

    constructor() {
        this.#file = "../data.json";
        this.#bookModel = new BookModel();
        $("#admin").on("click", ()=>{
            this.#bookModel.getData(this.#file, this.getBooksAdminData);
        });
        $("#public").on("click", ()=>{
            this.#bookModel.getData(this.#file, this.getBooksUserData);
        });

        $(window).on("mod", (evt) => {
            this.#bookModel.modBook(evt.detail);
            let books = this.#bookModel.getBooks();
            new BooksAdminView(books, "main");
        })

        $(window).on("del", (evt) => {
            this.#bookModel.delBook(evt.detail);
            let books = this.#bookModel.getBooks();
            new BooksAdminView(books, "main");
        })

        $(window).on("buy", (evt) => {
            this.#bookModel.buyBook(evt.detail);
            let books = this.#bookModel.getBooks();
            new BooksUserView(books, "main");
        })
    }

    getBooksAdminData(bookList) {
        console.log(bookList);
        new BooksAdminView(bookList, "main");
    }

    getBooksUserData(bookList) {
        console.log(bookList);
        new BooksUserView(bookList, "main");
    }
}

export default BookController;