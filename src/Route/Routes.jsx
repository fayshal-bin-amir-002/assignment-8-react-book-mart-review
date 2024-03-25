import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead"

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/lited-books",
                element: <ListedBooks></ListedBooks>
            },
            {
                path: "/pages-to-read",
                element: <PagesToRead></PagesToRead>
            }
        ]
    },
]);

export default router;