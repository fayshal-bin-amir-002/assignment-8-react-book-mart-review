import { useEffect, useState } from "react";
import SingleFvrtBook from "../components/SingleFvrtBook";
import { getFvrtBook } from "../utilities/localStorage";

const FavouriteBooks = () => {

    const [displayBooks, setDisplayBooks] = useState([]);

    useEffect(() => {
        const books = getFvrtBook();
        setDisplayBooks(books);
    }, [displayBooks]);

    if(displayBooks.length === 0) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center"><p className="text-3xl lg:text-5xl font-semibold text-red-400">No book added in favourite list</p></div>
        )
    }

    return (
        <div className="mb-12 lg:mb-24">
            {
                displayBooks.map((book) => <SingleFvrtBook key={book.bookId} book={book}></SingleFvrtBook>)
            }
        </div>
    );
};

export default FavouriteBooks;