import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = () => {
    return (
        <>
            <header className="container mx-auto px-5">
                <NavBar></NavBar>
            </header>
            <main className="container mx-auto px-5">
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default MainLayout;