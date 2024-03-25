import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { TbBrandPagekit } from "react-icons/tb";
import { Link } from 'react-router-dom';


const SingleReadBooks = ({ book }) => {

    const { bookId, bookName, author, image, rating, category, tags, totalPages, publisher, yearOfPublishing } = book;

    return (
        <div className='flex flex-col lg:flex-row gap-4 lg:gap-6 p-4 lg:p-6 border rounded-2xl mb-4 lg:mb-6'>
            <div className='h-[220px] lg:w-[20%]'>
                <img src={image} className='h-full w-full rounded-2xl object-cover' />
            </div>
            <div className='lg:w-[80%]'>
                <h3 className='text-xl lg:text-2xl font-bold mb-4'>{bookName}</h3>
                <p className='font-medium mb-4 opacity-80'>By : {author}</p>
                <div className='flex items-center flex-wrap gap-3 lg:gap-6 mb-4'>
                    <span className='flex flex-wrap items-center gap-3'>
                        <p>Tags</p>
                        {
                            tags.map((tag, idx) => <p key={idx}
                                className='text-[#23BE0A] font-medium bg-[#23BE0A0D] px-4 py-2 rounded-full max-w-max'>{tag}</p>)
                        }
                    </span>
                    <p className='flex items-center gap-3 opacity-80'><IoLocationOutline /><span>Year of Publishing: {yearOfPublishing}</span></p>
                </div>
                <div className='flex flex-wrap gap-3 lg:gap-6'>
                    <p className='flex items-center gap-2 opacity-60'><FaUsers /><span>Publisher: {publisher}</span></p>
                    <p className='flex items-center gap-2 opacity-60'><TbBrandPagekit /><span>Page {totalPages}</span></p>
                </div>
                <div className="divider w-full"></div>
                <div className='flex flex-wrap items-center gap-2 lg:gap-4'>
                    <p className='px-5 py-2 rounded-full text-[#328EFF] bg-[#328EFF26]'>Category: {category}</p>
                    <p className='px-5 py-2 rounded-full text-[#FFAC33] bg-[#FFAC3326]'>Rating: {rating}</p>
                    <Link to={`/book-details/${bookId}`} className='px-5 py-2 rounded-full text-white bg-[#23BE0A] font-medium text-lg'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

SingleReadBooks.propTypes = {
    book: PropTypes.object.isRequired
};

export default SingleReadBooks;