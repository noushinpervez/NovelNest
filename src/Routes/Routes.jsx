import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../Home/Home";
import ListedBooks from "../components/ListedBooks/ListedBooks";
import PagesRead from "../components/PagesRead/PagesRead";
import BookDetails from "../components/BookDetails/BookDetails";
import ReadBooks from "../components/ListedBooks/ReadBooks";
import WishlistBooks from "../components/ListedBooks/WishlistBooks";
import AuthorSpotlight from "../components/AuthorSpotlight/AuthorSpotlight";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/lists",
                loader: () => fetch('/book.json'),
                element: <ListedBooks></ListedBooks>,

                children: [
                    {
                        index: true,
                        element: <ReadBooks></ReadBooks>,
                    },
                    {
                        path: "wishlist",
                        element: <WishlistBooks></WishlistBooks>,
                    }
                ],
            },
            {
                path: "/statistics",
                loader: () => fetch('/book.json'),
                element: <PagesRead></PagesRead>,
            },
            {
                path: "/author-spotlight",
                loader: () => fetch('/book.json'),
                element: <AuthorSpotlight></AuthorSpotlight>,
            },
            {
                path: "/:bookId",
                loader: () => fetch('/book.json'),
                element: <BookDetails></BookDetails>,
            },
        ],
    },
]);