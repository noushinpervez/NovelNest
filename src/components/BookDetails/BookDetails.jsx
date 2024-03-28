import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredWishlistBooks, getStoredReadBooks, saveReadBooks, saveWishlistBooks } from "../../Utility/localstorage";

const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();

    const book = books.find(book => book.bookId === parseInt(bookId));

    const isBookInReadList = bookId => {
        const storedReadBooks = getStoredReadBooks();
        return storedReadBooks.includes(bookId);
    };

    const isBookInWishlist = bookId => {
        const storedWishlistBooks = getStoredWishlistBooks();
        return storedWishlistBooks.includes(bookId);
    };

    const [readBook, setReadBook] = useState(getStoredReadBooks());
    const [wishlistBook, setWishlistBook] = useState(getStoredWishlistBooks());

    const handleRead = book => {
        const bookId = parseInt(book.bookId);

        if (!isBookInReadList(bookId)) {
            setReadBook(prevState => [...prevState, book]);
            saveReadBooks(bookId);
            toast.success('Book successfully added to your Read list!');
        }
        else {
            toast.error('Book already read!');
        }
    }

    const handleWishlist = book => {
        const bookId = parseInt(book.bookId);

        if (!isBookInReadList(bookId) && !isBookInWishlist(bookId)) {
            setWishlistBook(prevState => [...prevState, book]);
            saveWishlistBooks(bookId);
            toast.success('Book successfully added to your Wishlist!');
        }
        else {
            toast.error(`${isBookInReadList(bookId) ? 'Book already read!' : 'Already in your reading wishlist!'}`);
        }
    }

    return (
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 text-textColor/80 font-medium text-base mt-6 lg:mt-12 mb-16 lg:mb-40">
            <div className="bg-gradient rounded-2xl flex items-center justify-center p-20 flex-1">
                <img className="object-contain lg:h-0 min-h-full w-full" src={ book.image } alt="" />
            </div>
            <div className="h-fit flex-1">
                <h3 className="font-bold text-2xl lg:text-4xl text-textColor mb-4 text-justify">{ book.bookName }</h3>
                <p className="text-lg lg:text-xl mb-6">by { book.author } (Author)</p>
                <div className="border border-textColor/15"></div>
                <p className="text-lg lg:text-xl my-4">{ book.category }</p>
                <div className="border border-textColor/15 mb-6"></div>
                <div className="overflow-x-auto">
                    <table className="table-auto">
                        <tbody>
                            <tr>
                                <td className="pr-4 py-3 text-textColor font-bold align-top">Review</td>
                                <td className="text-textColor/70 py-3 text-justify">
                                    <div>
                                        {
                                            book.review.split('\n').map((reviewParagraph, idx, paragraphs) => (
                                                <>
                                                    <p key={ `bookreview${book.bookId}-${idx}` }>{ reviewParagraph }</p>
                                                    { idx !== paragraphs.length - 1 && <br /> }
                                                </>))
                                        }
                                    </div></td>
                            </tr>
                            <tr>
                                <td className="text-textColor font-bold align-top lg:align-middle py-3">Tags</td>
                                <td className="py-3">
                                    <div className="flex flex-col lg:flex-row gap-3">
                                        {
                                            book.tags.slice(0, 5).map((tag, idx) => (<li key={ `tag-${book.bookId}-${idx}` } className="li-tags">#{ tag }</li>))
                                        }
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="border border-textColor/15 my-6"></div>
                <div className="overflow-x-auto text-textColor/70">
                    <table className="table-auto">
                        <tbody>
                            <tr>
                                <td className="pr-16 py-2">Print Length</td>
                                <td className="text-textColor font-semibold">{ book.totalPages } Pages</td>
                            </tr>
                            <tr>
                                <td className="py-2">Publisher</td>
                                <td className="text-textColor font-semibold">{ book.publisher }</td>
                            </tr>
                            <tr>
                                <td className="py-2">Publishing Year</td>
                                <td className="text-textColor font-semibold">{ book.yearOfPublishing }</td>
                            </tr>
                            <tr>
                                <td className="py-2">Rating</td>
                                <td className="text-textColor font-semibold">{ book.rating }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mt-6 flex gap-4">
                    <a onClick={ () => handleRead(book) } className="btn-primary-white">Read</a>
                    <a onClick={ () => handleWishlist(book) } className="btn-primary-dark">Wishlist</a>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={ 3000 }
                limit={ 3 }
                hideProgressBar={ true }
                newestOnTop
                closeOnClick
                rtl={ false }
                pauseOnFocusLoss
                draggable
                pauseOnHover={ false }
                theme="light"
                transition={ Zoom }
            />
        </div >
    );
};

export default BookDetails;