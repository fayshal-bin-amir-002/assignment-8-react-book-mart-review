import { useParams } from "react-router-dom";
import useGetBooks from "../utilities/useGetBooks";

const BookDetails = () => {

    const { id } = useParams();

    const books = useGetBooks();

    const book = books.find((b) => b.bookId === id);

    const { bookId, bookName, author, image, rating, category, tags, review, totalPages, publisher, yearOfPublishing } = book || {};
    

    return (
        <div rel="noopener noreferrer" className="my-8 lg:my-20 flex flex-col lg:flex-row gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
            <img src={image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-6 dark:bg-gray-500" />
            <div className="p-6 space-y-2 lg:col-span-6">
                <h3 className="text-2xl font-semibold sm:text-5xl group-hover:underline group-focus:underline">{bookName}</h3>
                <p className="text-lg lg:text-xl font-medium opacity-80">By : {author}</p>
                <div className="divider my-2"></div>
                <p className="text-lg lg:text-xl font-medium opacity-80">{category}</p>
                <div className="divider my-2"></div>
                <p><span className="font-bold">Review :</span> <span className="opacity-70">{review.slice(0, 500)}...</span></p>
                <div className='flex items-center gap-3'>
                    <p className="font-bold">Tag</p>
                    {
                        tags.map((tag, idx) => <p key={idx}
                        className='text-[#23BE0A] font-medium bg-[#23BE0A0D] px-4 py-2 rounded-full max-w-max'>{tag}</p>)
                    }
                </div>
                <div className="divider"></div>
                <div>
                    <div className="grid grid-cols-6">
                        <p className="col-span-3">hi</p>
                        <p className="col-span-3">hi</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;