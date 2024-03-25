import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = () => {
    return (
        <>
            <header className="container mx-auto px-5 lg:px-28">
                <NavBar></NavBar>
            </header>
            <main className="container mx-auto px-5 lg:px-28">
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default MainLayout;