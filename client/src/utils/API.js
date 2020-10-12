import axios from "axios";

export default {
  // Gets searched books
  getBook: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  // Gets all saved books
  savedBooks: function () {
    return axios.get("/api/books").then(result => result.data);
  },
  // Saves searched book to database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData).then(result => result.data);
  },
  // Deletes a saved book with matching id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id).then(result => result.data);
  }
};
