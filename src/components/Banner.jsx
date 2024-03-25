import { Link } from "react-router-dom";
import BannerImg from "../assets/banner.png"

const Banner = () => {
    return (
        <div className="hero bg-[#1313130D] py-6 lg:py-20 lg:px-32 rounded-3xl mb-8 lg:mb-24">
            <div className="hero-content gap-6 justify-between flex-col lg:flex-row-reverse">
                <div className="lg:w-2/6">
                    <img src={BannerImg} className="w-full" />
                </div>
                <div className="lg:w-1/2">
                    <h1 className="text-3xl lg:text-5xl mb-6 lg:mb-12 font-bold">Books to freshen up your bookshelf</h1>
                    <Link to="/lited-books" className="btn bg-[#23BE0A] text-white text-lg font-semibold">View The List</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;