import { useLoaderData } from "react-router-dom";

const AuthorSpotlight = () => {
    const books = useLoaderData();

    const authors = [];

    books.forEach(book => {
        if (!authors.includes(book.author)) {
            authors.push(book.author);
        }
    });

    return (
        <div>
            { authors.map(author => (
                <div key={ author } className="border border-textColor/15 rounded-2xl p-6 flex flex-col lg:flex-row gap-3 lg:gap-6 justify-between items-center text-textColor/80 font-medium text-base hover:bg-hover hover:shadow-xl">
                    <h3 className="font-bold text-xl lg:text-2xl">{ author }</h3>
                    <div className="carousel carousel-center max-w-md h-60 space-x-4 bg-gradient p-4 rounded-box">
                        { books.map((book, index) => (
                            book.author === author && // Filter books by author
                            <div key={ index } className="carousel-item">
                                <img src={ book.image } alt={ `Book Cover ${index}` } className="rounded-box" />
                            </div>
                        )) }
                    </div>
                </div>
            )) }
        </div>
    );
};

export default AuthorSpotlight;