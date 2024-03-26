import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = () => {
    return (
        <>
            <header className="h-24 lg:h-[158px] mb-6 lg:mb-12">
                <NavBar></NavBar>
            </header>
            <main className="container mx-auto px-5">
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default MainLayout;