import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { getStoredReadBooks } from '../../Utility/localstorage';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PropTypes from 'prop-types';

const PagesRead = () => {
    const books = useLoaderData();

    const [readList, setReadList] = useState([]);

    useEffect(() => {
        const storedBookIds = getStoredReadBooks();

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

    const colors = ["#8bd3c7", "#fd7f6f", "#7eb0d5", "#bd7ebe", "#beb9db", "#fdcce5", "#ffb55a", "#ffee65", "#b2e061"];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
            ${x + width / 2}, ${y}
            C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
            Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={ getPath(x, y, width, height) } stroke="none" fill={ fill } />;
    };

    return (
        <div className="mt-6 lg:mt-9 bg-rating/5 rounded-3xl lg:p-24 mb-16 lg:mb-24">
            {
                readList && readList.length > 0 && (
                    <ResponsiveContainer width="100%" height={ 480 }>
                        <BarChart
                            data={ readList }
                            margin={ {
                                top: 40,
                                right: 30,
                                left: 10,
                                bottom: 5,
                            } }>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="bookName" />
                            <YAxis />
                            <Tooltip />
                            <Legend width={ 130 } wrapperStyle={ { top: 50, right: 40, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' } } />
                            <Bar dataKey="totalPages" fill="#8884d8" shape={ <TriangleBar /> } label={ { position: 'top' } }>
                                { readList.map((entry, index) => (
                                    <Cell key={ `cell-${index}` } fill={ colors[index % 20] } />
                                )) }
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                )
            }
        </div>
    );
};

PagesRead.propTypes = {
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
}

export default PagesRead;