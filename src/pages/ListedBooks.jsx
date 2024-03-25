import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {

    const [tab, setTab] = useState(0);

    const handleSort = (e) => {
        console.log(e.target.value);
    }

    return (
        <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-center mb-5 lg:mb-9 py-4 lg:py-8 bg-[#1313130D] rounded-2xl">Books</h2>
            <div className="my-4 lg:my-8 text-center">
                <select className="select select-bordered bg-[#23BE0A] text-white text-xl w-full max-w-[200px]" onChange={() => handleSort(event)}>
                    <option value='all'>Sort By</option>
                    <option value='rating'>Rating</option>
                    <option value='page'>Number of pages</option>
                    <option value='year'>Publisher Year</option>
                </select>
            </div>
            <div role="tablist" className="tabs tabs-lifted tabs-lg lg:w-2/6 mb-4 lg:mb-8">
                <Link to='' onClick={()=>setTab(0)} className={`tab ${tab===0?'tab-active':''}`}>Read Books</Link>
                <Link to="wishlist-books" onClick={()=>setTab(1)} className={`tab ${tab===1?'tab-active':''}`}>Wishlist Books</Link>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;