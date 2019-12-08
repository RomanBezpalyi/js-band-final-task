import React from 'react';
import Header from '../components/Header';
import BookList from '../components/BookList';

const BooksPage = () => (
  <>
    <Header />
    <main className="main-content">
      <BookList />
    </main>
  </>
);

export default BooksPage;
