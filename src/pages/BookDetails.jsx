import { useParams } from "react-router-dom";
import useGetBooks from "../utilities/useGetBooks";
import { saveReadBook, saveWishlistBook, saveFvrtBook } from "../utilities/localStorage";

const BookDetails = () => {

    const { id } = useParams();

    const books = useGetBooks();

    const book = books.find((b) => b.bookId === id);

    const { bookName, author, image, rating, category, tags, review, totalPages, publisher, yearOfPublishing } = book || {};

    const allTag = tags || [];

    const handleRead = (book) => {
        saveReadBook(book);
    }

    const handleWishlist = (book) => {
        saveWishlistBook(book)
    }

    const handleAddFvrt = (book) => {
        saveFvrtBook(book)
    }


    return (
        <div className="my-8 lg:my-20 flex flex-col lg:flex-row gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
            <img src={image} alt="" className="object-cover w-full h-76 rounded lg:h-[80%] lg:col-span-6 dark:bg-gray-500" />
            <div className="lg:p-6 space-y-2 lg:col-span-6">
                <h3 className="text-2xl font-semibold sm:text-5xl">{bookName}</h3>
                <p className="text-lg lg:text-xl font-medium opacity-80">By : {author}</p>
                <div className="divider my-2"></div>
                <p className="text-lg lg:text-xl font-medium opacity-80">{category}</p>
                <div className="divider my-2"></div>
                <p><span className="font-bold">Review :</span> <span className="opacity-70">{review}</span></p>
                <div className='flex items-center gap-3'>
                    <p className="font-bold">Tag</p>
                    {
                        allTag.map((tag, idx) => <p key={idx} className='text-[#23BE0A] font-medium bg-[#23BE0A0D] px-4 py-2 rounded-full max-w-max'>{tag}</p>)
                    }
                </div>
                <div className="divider"></div>
                <div>
                    <div className="grid grid-cols-6 mb-3">
                        <p className="col-span-3 opacity-70">Number of Pages:</p>
                        <p className="col-span-3 font-semibold">{totalPages}</p>
                    </div>
                    <div className="grid grid-cols-6 mb-3">
                        <p className="col-span-3 opacity-70">Publisher:</p>
                        <p className="col-span-3 font-semibold">{publisher}</p>
                    </div>
                    <div className="grid grid-cols-6 mb-3">
                        <p className="col-span-3 opacity-70">Year of Publishing:</p>
                        <p className="col-span-3 font-semibold">{yearOfPublishing}</p>
                    </div>
                    <div className="grid grid-cols-6 mb-4 lg:mb-8">
                        <p className="col-span-3 opacity-70">Rating:</p>
                        <p className="col-span-3 font-semibold">{rating}</p>
                    </div>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    <button className="btn bg-transparent border text-black text-lg font-semibold"
                    onClick={() => handleRead(book)}>Read</button>
                    <button className="btn bg-[#59C6D2] text-white text-lg font-semibold"
                    onClick={() => handleWishlist(book)}>Wishlist</button>
                    <button className="btn bg-[#23BE0A] text-white text-lg font-semibold"
                    onClick={() => handleAddFvrt(book)}>Add to Favourite</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;