
class BookModel {
    #booksList;

    constructor() {
        this.#booksList = [];
    }

    getData(endPoint, callback) {
        fetch(endPoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                this.#booksList = data.konyv;
                // console.log(this.#booksList);
                callback(this.#booksList);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    setData(endPoint, callback) {
        fetch(endPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.#booksList),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    getBooks() {
        return this.#booksList;
    }

    modBook(book) {
        console.log("mod " + book.id);
        console.log(book);
    }

    delBook(book) {
        console.log("del " + book.id);
        console.log(this.#booksList.splice(book.x, 1));
    }

    buyBook(book) {
        console.log("buy " + book.id);
    }
}

export default BookModel;