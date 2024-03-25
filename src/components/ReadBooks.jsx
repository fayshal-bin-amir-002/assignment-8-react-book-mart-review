import { getData } from "../utilities/localStorage";
import SingleReadBooks from "./SingleReadBooks";

const ReadBooks = () => {

    const books = getData();

    return (
        <div className="mb-12 lg:mb-24">
            {
                books.map((book) => <SingleReadBooks key={book.bookId} book={book}></SingleReadBooks>)
            }
        </div>
    );
};

export default ReadBooks;