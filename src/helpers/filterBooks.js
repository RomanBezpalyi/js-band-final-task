const filterBooks = (books, title, price) => {
  let filteredBooks = [...books];
  if (title) {
    filteredBooks = filteredBooks.filter(book =>
      book.title.toLowerCase().includes(title.toLowerCase()),
    );
  }
  if (price !== 'Price') {
    filteredBooks =
      price === '30'
        ? filteredBooks.filter(book => book.price >= Number(price))
        : filteredBooks.filter(
            book =>
              book.price >= Number(price) && book.price < Number(price) + 15,
          );
  }

  return filteredBooks;
};

export default filterBooks;
