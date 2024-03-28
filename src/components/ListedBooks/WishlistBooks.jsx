import { useOutletContext } from "react-router-dom";
import ListedBook from "./ListedBook";

const WishlistBooks = () => {
    const displayBooks = useOutletContext();

    return (
        <div className="grid grid-cols-1 gap-6 mt-8 mb-32">
            {
                displayBooks.map((book, idx) => <ListedBook key={ `${displayBooks.bookId}-${idx}` } book={ book }></ListedBook>)
            }
        </div>
    );
};

export default WishlistBooks;