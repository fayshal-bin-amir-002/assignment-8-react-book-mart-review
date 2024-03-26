import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen gap-6 lg:gap-12 flex-col flex justify-center items-center">
            <p className="text-3xl lg:text-5xl font-semibold text-red-500">Page not found!!!</p>
            <Link to="/" className="btn bg-[#23BE0A] text-white text-lg font-semibold">Go Back</Link>
        </div>
    );
};

export default ErrorPage;