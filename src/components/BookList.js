import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { removeBooks, fetchBooks } from '../redux/books/bookSlice';

function BookList() {
  const [bookStatus, setBookStatus] = useState({});

  const { booksList, isLoading, error } = useSelector(
    (state) => state.booksList,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const toggleBookStatus = (id) => {
    setBookStatus((prevStatus) => ({
      ...prevStatus,
      [id]: !prevStatus[id],
    }));
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="loading">Somthing wrong during fetching books</div>;
  }

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
