import { useEffect, useState } from "react";
import { useLoaderData, Link, Outlet } from "react-router-dom";
import { getStroredReadBooks } from "../../Utility/localstorage";
import ListedBook from "./ListedBook";

const ListedBooks = () => {
    const books = useLoaderData();

    const [readList, setReadList] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        const storedBookIds = getStroredReadBooks();

        if (books.length > 0) {
            const booksRead = [];

            for (const id of storedBookIds) {
                const book = books.find(book => book.bookId === id);

                if (book) {
                    booksRead.push(book);
                }
            }
            setReadList(booksRead);
        }
    }, [books]);

    return (
        <div>
            <h3 className="text-3xl font-bold text-center my-6">Books</h3>
            <div role="tablist" className="tabs tabs-lifted tabs-lg">
                <Link to="" onClick={ () => setTabIndex(0) } role="tab" className={ `tab ${tabIndex === 0 ? 'tab-active' : ''}` }>Read Books</Link>
                <Link to="wishlist" onClick={ () => setTabIndex(1) } role="tab" className={ `tab ${tabIndex === 1 ? 'tab-active' : ''}` }>Wishlist Books</Link>
            </div>
            <Outlet></Outlet>
            <div className="grid grid-cols-1 gap-6">
                {
                    readList.map(book => <ListedBook key={ readList.bookId } book={ book }></ListedBook>)
                }
            </div>
        </div>
    );
};

export default ListedBooks;