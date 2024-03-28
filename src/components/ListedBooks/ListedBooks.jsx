import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { getStoredReadBooks, getStoredWishlistBooks } from "../../Utility/localstorage";

const ListedBooks = () => {
    const books = useLoaderData();

    const [tabIndex, setTabIndex] = useState(0);
    const [displayBooks, setDisplayBooks] = useState([]);
    const [readList, setReadList] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedReadBookIds = getStoredReadBooks();
        const storedWishlistBookIds = getStoredWishlistBooks();

        if (books.length > 0) {
            const booksRead = books.filter(book => storedReadBookIds.includes(book.bookId));
            const booksWishlist = books.filter(book => storedWishlistBookIds.includes(book.bookId));

            setReadList(booksRead);
            setWishlist(booksWishlist);
            setDisplayBooks(tabIndex === 0 ? booksRead : booksWishlist);
        }
    }, [books, tabIndex]);

    useEffect(() => {
        setDisplayBooks(tabIndex === 0 ? readList : wishlist);
    }, [tabIndex, readList, wishlist]);

    const handleBooksFilter = (sortBy) => {
        let sortedBooks = [...displayBooks];

        if (sortBy === 'rating') {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        }
        else if (sortBy === 'number-of-pages') {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        }
        else if (sortBy === 'publishing-year') {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }

        setDisplayBooks(sortedBooks);
    };

    return (
        <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-center my-6 h-24 bg-gradient flex items-center justify-center rounded-2xl">{ tabIndex === 0 ? "Read Books" : "Wishlist Books" }</h3>
            <div className="dropdown dropdown-bottom flex justify-center mb-14 mt-8">
                <div tabIndex={ 0 } role="button" className="btn-primary-white">Sort by<IoIosArrowDown className="h-5 w-5" /></div>
                <ul tabIndex={ 0 } className="dropdown-content z-[1] menu shadow bg-primaryColor text-neutral-50 rounded-box text-base">
                    <li><a onClick={ () => handleBooksFilter('rating') } className="w-full flex justify-center">Rating</a></li>
                    <li><a onClick={ () => handleBooksFilter('number-of-pages') } className="w-full flex justify-center">Number of pages</a></li>
                    <li><a onClick={ () => handleBooksFilter('publishing-year') } className="w-full flex justify-center">Publish year</a></li>
                </ul>
            </div>
            <div role="tablist" className="tabs tabs-lifted tabs-lg justify-start text-lg">
                <Link to="" onClick={ () => setTabIndex(0) } role="tab" className={ `tab ${tabIndex === 0 ? 'tab-active text-textColor/80' : 'text-textColor/50'}` }>Read Books</Link>
                <Link to="wishlist" onClick={ () => setTabIndex(1) } role="tab" className={ `tab ${tabIndex === 1 ? 'tab-active text-textColor/80' : 'text-textColor/50'}` }>Wishlist Books</Link>
                <span className="grow border-b border-textColor/15"></span>
            </div>
            <Outlet context={ displayBooks }></Outlet>
        </div>
    );
};

export default ListedBooks;