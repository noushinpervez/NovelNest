import Book from "./Book";
import { useEffect, useState } from "react";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('book.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    const [bookLength, setBookLength] = useState(6);
    
    return (
        <div className="mb-32">
            <h3 className="text-4xl font-bold text-center mb-9">Books</h3>
            <div className="grid grid-cols-3 gap-6">
                {
                    books.slice(0, bookLength).map(book => <Book key={ book.bookId } book={ book }></Book>)
                }
            </div>
            <div className={ `${bookLength === books.length && "hidden"} flex justify-center` }>
                <button onClick={ () => setBookLength(books.length) } className="btn-primary-dark mt-4">Show All</button>
            </div>
        </div>
    );
};

export default Books;