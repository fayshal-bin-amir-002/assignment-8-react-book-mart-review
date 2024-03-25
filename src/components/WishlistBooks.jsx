import { getWishlistBook } from "../utilities/localStorage";
import SingleWishlistBook from "./SingleWishlistBook";

const WishlistBooks = () => {

    const books = getWishlistBook();

    return (
        <div className="mb-12 lg:mb-24">
            {
                books.map((book) => <SingleWishlistBook key={book.bookId} book={book}></SingleWishlistBook>)
            }
        </div>
    );
};

export default WishlistBooks;