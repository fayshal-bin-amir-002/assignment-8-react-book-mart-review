import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = () => {
    return (
        <>
            <header className="h-20 lg:h-[110px] mb-4 lg:mb-8">
                <NavBar></NavBar>
            </header>
            <main className="container mx-auto px-5">
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default MainLayout;