
class BookModel {
    #booksList;

    constructor() {
        this.#booksList = [];
    }

    getData(file, callback) {
        fetch(file, {
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

    modData() {
        console.log("moooddd");
    }
}

export default BookModel;