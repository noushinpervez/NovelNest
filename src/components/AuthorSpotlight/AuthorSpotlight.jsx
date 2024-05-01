import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const AuthorSpotlight = () => {
    const books = useLoaderData();

    const authors = [];

    books.forEach(book => {
        if (!authors.includes(book.author)) {
            authors.push(book.author);
        }
    });

    const getAuthorInfo = (author) => {
        let totalBooks = 0;
        let totalRating = 0;
        const categories = [];

        books.forEach(book => {
            if (book.author === author) {
                totalBooks++;
                totalRating += book.rating;

                if (!categories.includes(book.category)) {
                    categories.push(book.category);
                }
            }
        });

        const avgRating = totalBooks > 0 ? (totalRating / totalBooks).toFixed(2) : 0;

        return { totalBooks, avgRating, categories };
    };

    return (
        <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-center my-6 lg:my-8 h-24 bg-gradient flex items-center justify-center rounded-2xl">Author Spotlight</h3>
            {
                authors.map(author => (
                    <div key={ author } className="border border-textColor/15 rounded-2xl p-6 flex flex-col lg:flex-row gap-6 justify-between lg:items-center text-textColor/80 font-medium text-base hover:bg-hover hover:shadow-xl mb-32">
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-xl lg:text-2xl text-textColor mb-4">{ author }</h3>
                            <p>Total Books: { getAuthorInfo(author).totalBooks }</p>
                            <p>Average Rating: { getAuthorInfo(author).avgRating }</p>
                            <p>Categories: { getAuthorInfo(author).categories.join(", ") }</p>
                        </div>
                        <div className="carousel carousel-center max-w-md space-x-4 bg-gradient p-4 rounded-box">
                            {
                                books.filter(book => book.author === author).slice(0, 7).map((book, index) =>
                                (
                                    <div key={ index } className="carousel-item">
                                        <Link to={ `/${book.bookId}` }>
                                            <img src={ book.image } alt={ `Book Cover ${index}` } className="h-60 rounded-box" />
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AuthorSpotlight;