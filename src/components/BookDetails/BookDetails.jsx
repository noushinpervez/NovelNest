import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadBooks, saveWishlistBooks } from "../../Utility/localstorage";

const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();

    const book = books.find(book => book.bookId === parseInt(bookId));

    const [readBook, setReadBook] = useState([]);
    const [wishlistBook, setWishlistBook] = useState([]);

    const handleRead = book => {
        let addReadBook = [...readBook];

        if (!readBook.includes(book)) {
            addReadBook = [...readBook, book];
            setReadBook(addReadBook);
            saveReadBooks(parseInt(bookId));
            toast.success("Book added to Read list successfully");
        }
        else {
            toast.error("This book is already in your Read list");
        }
    }

    const handleWishlist = book => {
        let addWishlistBook = [...wishlistBook];

        if (!readBook.includes(book) && !wishlistBook.includes(book)) {
            addWishlistBook = [...wishlistBook, book];
            setWishlistBook(addWishlistBook);
            saveWishlistBooks(parseInt(bookId));
            toast.success("Book added to Wishlist successfully");
        }
        else {
            toast.error(`This book is already in your ${readBook.includes(book) ? 'Read list' : 'Wishlist'}.`);
        }
    }

    return (
        <div className="flex flex-row gap-12 text-textColor/80 font-medium text-base mt-12 mb-40">
            <div className="bg-gradient rounded-2xl flex items-center justify-center p-20 flex-1">
                <img className="object-contain h-0 min-h-full w-full" src={ book.image } alt="" />
            </div>
            <div className="h-fit flex-1">
                <h3 className="font-bold text-4xl text-textColor mb-4 text-justify">{ book.bookName }</h3>
                <p className="text-xl mb-6">by { book.author } (Author)</p>
                <div className="border border-textColor/15"></div>
                <p className="text-xl my-4">{ book.category }</p>
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
                                                    <p key={ `${bookId}-${idx}` }>{ reviewParagraph }</p>
                                                    { idx !== paragraphs.length - 1 && <br /> }
                                                </>))
                                        }
                                    </div></td>
                            </tr>
                            <tr>
                                <td className="text-textColor font-bold">Tags</td>
                                <td className="py-3">
                                    <div className="flex gap-3">
                                        {
                                            book.tags.slice(0, 5).map((tag, idx) => (<li key={ `${bookId}-${idx}` } className="li-tags">{ tag }</li>))
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