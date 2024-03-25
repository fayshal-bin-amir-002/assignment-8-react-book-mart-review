import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";


const SingleBookCard = ({ book }) => {

    const { bookId, bookName, author, image, rating, category, tags } = book;

    return (
        <Link to={`/book-details/${bookId}`} className="card bg-base-100 shadow-xl lg:hover:scale-105 duration-300">
            <figure className="px-10 pt-10 h-[400px] w-full">
                <img src={image} alt="book" className="rounded-xl w-full h-full object-cover" />
            </figure>
            <div className="card-body">
                <div className='flex items-center gap-3'>
                    {
                        tags.map((tag, idx) => <p key={idx}
                        className='text-[#23BE0A] font-medium bg-[#23BE0A0D] px-4 py-2 rounded-full max-w-max'>{tag}</p>)
                    }
                </div>
                <h2 className="card-title font-bold text-2xl">{bookName}</h2>
                <p className='font-medium opacity-80'>By : {author}</p>
                <div className='divider my-2'></div>
                <div className="flex items-center justify-between opacity-80 font-medium">
                    <p>{category}</p>
                    <p className='flex items-center gap-2 justify-end'>{rating} <FaRegStar /></p>
                </div>
            </div>
        </Link>
    );
};

SingleBookCard.propTypes = {
    book: PropTypes.object.isRequired
};

export default SingleBookCard;