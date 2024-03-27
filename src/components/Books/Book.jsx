import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Book = ({ book }) => {
    const { image, tags, bookId, bookName, author, category, rating } = book;

    return (
        <Link to={ `/${bookId}` } className="contents">
            <div className="flex flex-col border border-textColor/15 rounded-2xl p-6 text-textColor/80 font-medium text-base gap-4 hover:bg-hover hover:shadow-xl book-card">
                <div className="h-60 bg-gradient rounded-2xl flex items-center justify-center p-8">
                    <img className="object-contain h-full w-full move" src={ image } alt="" />
                </div>
                <div className="flex gap-3 mt-2">
                    {
                        tags.slice(0, 3).map((tag, idx) => (<li key={ `${bookId}-${idx}` } className="li-tags">{ tag }</li>))
                    }
                </div>
                <h3 className="font-bold text-xl lg:text-2xl text-textColor flex-grow">{ bookName }</h3>
                <p>by { author } (Author)</p>
                <div className="border border-dashed border-textColor/15 my-1"></div>
                <div className="flex justify-between">
                    <p>{ category }</p>
                    <div className="flex items-center gap-2">
                        <p>{ rating }</p>
                        <CiStar />
                    </div>
                </div>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object
}

export default Book;