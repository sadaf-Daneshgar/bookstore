import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { removeBooks } from '../redux/books/bookSlice';

function BookList() {
  const [bookStatus, setBookStatus] = useState({});

  const booksList = useSelector((state) => state.ArrayBooks);

  const dispatch = useDispatch();

  const toggleBookStatus = (id) => {
    setBookStatus((prevStatus) => ({
      ...prevStatus,
      [id]: !prevStatus[id],
    }));
  };

  return (
    <>
      {booksList.map((booksDetails) => (
        <Book
          key={booksDetails.item_id}
          category={booksDetails.category}
          title={booksDetails.title}
          author={booksDetails.author}
          onDelete={() => dispatch(removeBooks(booksDetails.item_id))}
          isCompleted={bookStatus[booksDetails.item_id] || false}
          toggleStatus={() => toggleBookStatus(booksDetails.item_id)}
        />
      ))}
    </>
  );
}

export default BookList;
