import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead"
import BookDetails from "../pages/BookDetails";
import ReadBooks from "../components/ReadBooks";
import WishlistBooks from "../components/WishlistBooks";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/lited-books",
                element: <ListedBooks></ListedBooks>,
                children: [
                    {
                        index: true,
                        element: <ReadBooks></ReadBooks>
                    },
                    {
                        path: "wishlist-books",
                        element: <WishlistBooks></WishlistBooks>
                    }
                ]
            },
            {
                path: "/pages-to-read",
                element: <PagesToRead></PagesToRead>
            },
            {
                path: "/book-details/:id",
                element: <BookDetails></BookDetails>
            }
        ]
    },
]);

export default router;