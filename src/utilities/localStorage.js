import { toast } from 'react-toastify';

export const getData = () => {
    let storedBook = localStorage.getItem('read');

    if (storedBook) {
        return JSON.parse(storedBook);
    }
    return [];
}

export const getWishlistBook = () => {
    let storedBook = localStorage.getItem('wish');

    if (storedBook) {
        return JSON.parse(storedBook);
    }
    return [];
}

export const getFvrtBook = () => {
    let storedBook = localStorage.getItem('fvrt');

    if (storedBook) {
        return JSON.parse(storedBook);
    }
    return [];
}

export const saveFvrtBook = (book) => {
    const storedBook = getFvrtBook();
    const isExist = storedBook.find((sb) => sb.bookId === book.bookId);
    if (!isExist) {
        storedBook.push(book);
        localStorage.setItem('fvrt', JSON.stringify(storedBook));
        toast.success("Book added in favourite list");
    }
    else {
        toast.error("Already added in favourite list!")
    }
}

export const saveReadBook = (book) => {
    const storedBook = getData();
    const isExist = storedBook.find((sb) => sb.bookId === book.bookId);
    if (!isExist) {
        storedBook.push(book);
        localStorage.setItem('read', JSON.stringify(storedBook));
        toast.success("Read the book");
    }
    else {
        toast.error("Already read the book!")
    }
}

export const saveWishlistBook = (book) => {
    const localBooks = getData();
    const localWishBooks = getWishlistBook();
    const isExist = localBooks.find((lb) => lb.bookId === book.bookId);
    const isWishExist = localWishBooks.find((lwb) => lwb.bookId === book.bookId);
    if (isExist) {
        toast.error('You have Read the book!');
    }
    else if (isWishExist) {
        toast.error('Already added in wishlist!');
    }
    else {
        localWishBooks.push(book);
        localStorage.setItem('wish', JSON.stringify(localWishBooks));
        toast.success("Book added in wishlist");
    }
}