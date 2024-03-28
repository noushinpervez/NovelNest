const getStoredReadBooks = () => {
    const storedReadBooks = localStorage.getItem('read-books');

    if (storedReadBooks) {
        return JSON.parse(storedReadBooks);
    }
    return [];
};

const saveReadBooks = bookId => {
    const storedReadBooks = getStoredReadBooks();
    const existsReadList = storedReadBooks.find(id => id === bookId);

    if (!existsReadList) {
        storedReadBooks.push(bookId);
        localStorage.setItem('read-books', JSON.stringify(storedReadBooks));
    }
};

const getStoredWishlistBooks = () => {
    const storedWishlistBooks = localStorage.getItem('wishlist-books');

    if (storedWishlistBooks) {
        return JSON.parse(storedWishlistBooks);
    }
    return [];
};

const saveWishlistBooks = bookId => {
    const storedReadBooks = getStoredReadBooks();
    const existsReadList = storedReadBooks.find(id => id === bookId);
    
    const storedWishlistBooks = getStoredWishlistBooks();
    const existsWishlist = storedWishlistBooks.find(id => id === bookId);

    if (!existsWishlist && !existsReadList) {
        storedWishlistBooks.push(bookId);
        localStorage.setItem('wishlist-books', JSON.stringify(storedWishlistBooks));
    }
};

export { saveReadBooks, getStoredReadBooks, saveWishlistBooks, getStoredWishlistBooks };