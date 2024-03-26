import PropTypes from 'prop-types';
import { BsCalendar } from "react-icons/bs";
import { RiGroupLine } from "react-icons/ri";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { Link } from "react-router-dom";

const ListedBook = ({ book }) => {
    const { image, tags, bookId, bookName, author, category, rating, yearOfPublishing, publisher, totalPages } = book;

    return (
        <div className="border border-textColor/15 rounded-2xl p-6 flex flex-row gap-6 items-center text-textColor/80 font-medium text-base hover:bg-hover hover:shadow-xl book-card">
            <div className="h-60 bg-gradient rounded-2xl flex items-center justify-center py-7 px-12 w-1/4">
                <img className="object-contain h-full w-full move" src={ image } alt="" />
            </div>
            <div className="w-full flex flex-col gap-4">
                <h3 className="font-bold text-2xl text-textColor">{ bookName }</h3>
                <p>by { author } (Author)</p>
                <div className="flex flex-row items-center gap-4">
                    <p className="py-2 text-textColor font-bold">Tags</p>
                    <div className="flex gap-3 mt-2">
                        {
                            tags.map((tag, idx) => (<li key={ `${bookId}-${idx}` } className="li-tags">#{ tag }</li>))
                        }
                        <div className="flex items-center gap-2">
                            <BsCalendar className="h-4 w-4" /><p className="py-2">Publishing Year { yearOfPublishing }</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="flex flex-row items-center gap-2">
                        <RiGroupLine className="h-4 w-4" />
                        <p className="text-textColor/60">Publisher { publisher }</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <HiOutlineDocumentReport className="h-4 w-4" />
                        <p className="text-textColor/60">Print Length { totalPages } Pages</p>
                    </div>
                </div>
                <div className="border w-full border-textColor/15 my-1"></div>
                <div className="flex flex-row items-center gap-3">
                    <p className="text-category bg-categoryBg px-5 py-2 rounded-full border border-category">Genre { category }</p>
                    <p className="text-rating bg-ratingBg px-5 py-2 rounded-full border border-rating">Rating { rating }</p>
                    <Link to={ `/${bookId}` } className="text-neutral-50 bg-primaryColor text-lg font-medium hover:shadow-2xl hover:bg-primaryColor rounded-full py-2 px-5">View Details</Link>
                </div>
            </div>
        </div>
    );
};

ListedBook.propTypes = {
    book: PropTypes.object
}

export default ListedBook;