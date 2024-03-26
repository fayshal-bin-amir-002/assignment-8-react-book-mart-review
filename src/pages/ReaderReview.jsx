import { useState } from "react";
import { toast } from 'react-toastify';

const ReaderReview = () => {

    const [name, setName] = useState('');
    const [book, setBook] = useState('');
    const [review, setReview] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name.trim()==='' || book.trim()==='' || review.trim()==='') {
            toast.error("Missing data on input!!")
        }
        document.getElementById('my_modal_5').showModal();
    }

    return (
        <>
            <form onSubmit={() => handleSubmit(event)} className="my-8 lg:my-14 lg:w-1/2 mx-auto border border-[#59C6D2] rounded-xl border-opacity-60 p-4 lg:p-8 space-y-4 lg:space-y-6 bg-slate-50">
                <input onChange={(event)=>setName(event.target.value)} value={name} type="text" placeholder="Enter your name..." className="input input-bordered input-info w-full" required />
                <input onChange={(event)=>setBook(event.target.value)} value={book} type="text" placeholder="Type book name..." className="input input-bordered input-info w-full" required />
                <textarea onChange={(event)=>setReview(event.target.value)} value={review} className="border rounded-xl border-emerald-500 h-36 lg:h-52 w-full p-4 resize-none" placeholder="Type your review..." required></textarea>
                <div className="text-right">
                    <button type="submit" className="btn btn-success text-white text-lg">Submit Review</button>
                </div>
            </form>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello {name}</h3>
                    <p className="py-4">Thank you for your review</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};


export default ReaderReview;