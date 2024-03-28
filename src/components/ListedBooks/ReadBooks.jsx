import { useOutletContext } from "react-router-dom";
import ListedBook from "./ListedBook";
import { IoIosArrowRoundForward } from "react-icons/io";
import { HashLink } from "react-router-hash-link";

const ReadBooks = () => {
    const displayBooks = useOutletContext();

    return (
        <div className="grid grid-cols-1 gap-6 mt-8 mb-32">
            {
                displayBooks.length === 0 ? (
                    <div className="flex flex-col items-center gap-8 h-fit">
                        <h3 className="font-bold text-xl lg:text-2xl text-center">No books added to your read list yet. Add books now!</h3>
                        <HashLink scroll={ (el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' }) } to="/#add-books" className="btn-primary-dark py-4">Add Books<IoIosArrowRoundForward className="w-6 h-6 move" /></HashLink>
                    </div>
                ) :
                    (
                        displayBooks.map((book, idx) => <ListedBook key={ `${displayBooks.bookId}-${idx}` } book={ book }></ListedBook>)
                    )
            }
        </div>
    );
};

export default ReadBooks;