/**
Write a program that takes a list of books, including their authors and publication years as input. The program
should then filter out all books that were published before 2010 and create a new array with the remaining
books, but with their author names capitalized.
 */

const books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951},
    { title: "To kill a Mockingbrid", author: "Harper Lee", year: 1960},
    { title: "1984", author: "George Orwell", year:1949},
    { title: "Pride and Prejudice", author: "Jane Austen", year: 2013},
    { title: "The greate Gatsby", author: "F. Scott Fitzgerald", year: 1925},
    { title: "The hobbit", author: "J.R.R Tolkien", year: 2037}
];

const filteredBooks = books.filter(book => book.year >= 2010);

const capitalizedAuthorBooks = filteredBooks.map(book => ({
    title: book.title,
    author: book.author.toUpperCase(),
    year: book.year
}));

console.log(capitalizedAuthorBooks);