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

export const saveReadBook = (book) => {
    const storedBook = getData();
    const isExist = storedBook.find((sb) => sb.bookId === book.bookId);
    if (!isExist) {
        storedBook.push(book);
        localStorage.setItem('read', JSON.stringify(storedBook));
        alert('Read book');
    }
    else {
        alert("Already book readed");
    }
}

export const saveWishlistBook = (book) => {
    const localBooks = getData();
    const localWishBooks = getWishlistBook();
    const isExist = localBooks.find((lb) => lb.bookId === book.bookId);
    const isWishExist = localWishBooks.find((lwb) => lwb.bookId === book.bookId);
    if (isExist) {
        alert('You have Read the book book');
    }
    else if(isWishExist) {
        alert('already added in wishlist');
    }
    else {
        alert('added in wishlist');
        localWishBooks.push(book);
        localStorage.setItem('wish', JSON.stringify(localWishBooks));
    }
}