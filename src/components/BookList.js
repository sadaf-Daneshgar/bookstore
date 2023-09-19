import React, { useState } from 'react';
import Book from './Book';

function BookList() {
  const [bookStatus, setBookStatus] = useState({});

  const listBooks = [
    {
      id: 1, category: 'general', bookTitle: 'Small Book 1', bookAuthor: 'Sadaf',
    },
    {
      id: 2, category: 'general', bookTitle: 'Small Book 2', bookAuthor: 'Sadaf',
    },
  ];

  const toggleBookStatus = (id) => {
    setBookStatus((prevStatus) => ({
      ...prevStatus,
      [id]: !prevStatus[id],
    }));
  };

  return (
    <>
      {listBooks.map((book) => (
        <Book
          key={book.id}
          category={book.category}
          bookTitle={book.bookTitle}
          bookAuthor={book.bookAuthor}
          isCompleted={bookStatus[book.id] || false}
          toggleStatus={() => toggleBookStatus(book.id)}
        />
      ))}
    </>
  );
}

export default BookList;
