import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStroredReadBooks } from "../../Utility/localstorage";
import ListedBook from "./ListedBook";

const ReadBooks = () => {
    const books = useLoaderData();

    const [readList, setReadList] = useState([]);

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
        <div className="grid grid-cols-1 gap-6 mt-8 mb-32">
            {
                readList.map((book, idx) => <ListedBook key={ `${readList.bookId}-${idx}` } book={ book }></ListedBook>)
            }
        </div>
    );
};

export default ReadBooks;