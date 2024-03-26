import { useEffect, useState } from "react";
import { getData } from "../utilities/localStorage";
import SingleReadBooks from "./SingleReadBooks";
import { useOutletContext } from "react-router-dom";

const ReadBooks = () => {

    // const books = getData();

    const sorting = useOutletContext();

    const [displayBook, setDisplayBook] = useState([]);

    useEffect(() => {

        const books = getData();
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

    return (
        <div className="mb-12 lg:mb-24">
            {
                displayBook.map((book) => <SingleReadBooks key={book.bookId} book={book}></SingleReadBooks>)
            }
        </div>
    );
};

export default ReadBooks;