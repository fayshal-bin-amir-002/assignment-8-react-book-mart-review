import { useOutletContext } from "react-router-dom";
import { getWishlistBook } from "../utilities/localStorage";
import SingleWishlistBook from "./SingleWishlistBook";
import { useEffect, useState } from "react";

const WishlistBooks = () => {

    

    const sorting = useOutletContext();

    const [displayBook, setDisplayBook] = useState([]);

    useEffect(() => {

        const books = getWishlistBook();
        setDisplayBook(books);

        if (sorting === 'rating') {
            const newBooks = books.sort((a, b) => b.rating - a.rating);
            setDisplayBook(newBooks);
        }
        else if (sorting === 'page') {
            const newBooks = books.sort((a, b) => b.totalPages - a.totalPages);
            setDisplayBook(newBooks);
        }
        else if (sorting === 'year') {
            const newBooks = books.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setDisplayBook(newBooks);
        }
        else {
            setDisplayBook(books);
        }
    }, [sorting]);

    if(displayBook.length === 0) {
        return (
            <p className="text-2xl lg:text-4xl font-semibold text-red-400">No book added in wishlist</p>
        )
    }

    return (
        <div className="mb-12 lg:mb-24">
            {
                displayBook.map((book) => <SingleWishlistBook key={book.bookId} book={book}></SingleWishlistBook>)
            }
        </div>
    );
};

export default WishlistBooks;