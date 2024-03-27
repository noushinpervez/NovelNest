import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishlistBooks } from "../../Utility/localstorage";
import ListedBook from "./ListedBook";

const WishlistBooks = () => {
    const books = useLoaderData();

    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedBookIds = getStoredWishlistBooks();

        if (books.length > 0) {
            const booksWishlist = [];

            for (const id of storedBookIds) {
                const book = books.find(book => book.bookId === id);

                if (book) {
                    booksWishlist.push(book);
                }
            }
            setWishlist(booksWishlist);
        }
    }, [books]);

    return (
        <div className="grid grid-cols-1 gap-6 mt-8 mb-32">
            {
                wishlist.map((book, idx) => <ListedBook key={ `${wishlist.bookId}-${idx}` } book={ book }></ListedBook>)
            }
        </div>
    );
};

export default WishlistBooks;