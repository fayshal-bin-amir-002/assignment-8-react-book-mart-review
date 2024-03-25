import useGetBooks from "../utilities/useGetBooks";
import SingleBookCard from "./SingleBookCard";

const Books = () => {

    const books = useGetBooks();
    
    return (
        <div className="mb-12 lg:mb-24">
            <h2 className="text-3xl lg:text-5xl font-bold text-center mb-5 lg:mb-9">Books</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                {
                    books.map((book) => <SingleBookCard key={book.bookId} book={book}></SingleBookCard>)
                }
            </div>
        </div>
    );
};

export default Books;