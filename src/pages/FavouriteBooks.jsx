import { useEffect, useState } from "react";
import SingleFvrtBook from "../components/SingleFvrtBook";
import { deleteFvrtBook, getFvrtBook } from "../utilities/localStorage";

const FavouriteBooks = () => {

    const [displayBooks, setDisplayBooks] = useState([]);

    useEffect(() => {
        const books = getFvrtBook();
        setDisplayBooks(books);
    }, []);

    if (displayBooks.length === 0) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center"><p className="text-3xl lg:text-5xl font-semibold text-red-400">No book added in favourite list</p></div>
        )
    }

    const handleDeteleFvrt = (book) => {
        deleteFvrtBook(book);
        const books = getFvrtBook();
        setDisplayBooks(books);
    }

    return (
        <div className="mb-12 lg:mb-24">
            {
                displayBooks.map((book) => <SingleFvrtBook key={book.bookId} book={book}
                handleDeteleFvrt={handleDeteleFvrt}></SingleFvrtBook>)
            }
        </div>
    );
};

export default FavouriteBooks;