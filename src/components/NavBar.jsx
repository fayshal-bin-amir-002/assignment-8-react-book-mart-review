import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="container mx-auto">
            <div className="navbar justify-between items-center bg-base-100 py-6 lg:py-12 fixed top-0 z-10 bg-opacity-90 container mx-auto">
                <div className=" w-auto">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 space-y-3 z-[1] p-2 shadow bg-base-100 rounded-box w-36">
                            <li><NavLink to="/" className={({ isActive }) => isActive ? 'bg-transparent text-[#23BE0A] border border-[#23BE0A]' : ''}>Home</NavLink></li>
                            <li><NavLink to="/lited-books" className={({ isActive }) => isActive ? 'bg-transparent text-[#23BE0A] border border-[#23BE0A]' : ''}>Listed Books</NavLink></li>
                            <li><NavLink to="/pages-to-read" className={({ isActive }) => isActive ? 'bg-transparent text-[#23BE0A] border border-[#23BE0A]' : ''}>Pages to Read</NavLink></li>
                            <li><NavLink to="/favourite-books" className={({ isActive }) => isActive ? 'bg-transparent text-[#23BE0A] border border-[#23BE0A]' : ''}>Favourite Books</NavLink></li>
                            <li><NavLink to="/reader-review" className={({ isActive }) => isActive ? 'bg-transparent text-[#23BE0A] border border-[#23BE0A]' : ''}>Reader Review</NavLink></li>
                            <button className="btn bg-[#23BE0A] text-white text-lg font-semibold">Sign In</button>
                            <button className="btn bg-[#59C6D2] text-white text-lg font-semibold">Sign Up</button>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl font-bold">Book Mart</a>
                </div>
                <div className=" w-auto hidden lg:flex">
                    <ul className="menu menu-horizontal gap-3 text-lg font-base">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? 'bg-transparent text-[#23BE0A] border border-[#23BE0A]' : ''}>Home</NavLink></li>
                        <li><NavLink to="/lited-books" className={({ isActive }) => isActive ? 'bg-transparent text-[#23BE0A] border border-[#23BE0A]' : ''}>Listed Books</NavLink></li>
                        <li><NavLink to="/pages-to-read" className={({ isActive }) => isActive ? 'bg-transparent text-[#23BE0A] border border-[#23BE0A]' : ''}>Pages to Read</NavLink></li>
                        <li><NavLink to="/favourite-books" className={({ isActive }) => isActive ? 'bg-transparent text-[#23BE0A] border border-[#23BE0A]' : ''}>Favourite Books</NavLink></li>
                        <li><NavLink to="/reader-review" className={({ isActive }) => isActive ? 'bg-transparent text-[#23BE0A] border border-[#23BE0A]' : ''}>Reader Review</NavLink></li>
                    </ul>
                </div>
                <div className=" w-auto space-x-4 hidden lg:flex">
                    <button className="btn bg-[#23BE0A] text-white text-lg font-semibold">Sign In</button>
                    <button className="btn bg-[#59C6D2] text-white text-lg font-semibold">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;