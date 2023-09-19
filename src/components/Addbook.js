import React, { useState } from 'react';
import './navbar.css';

function AddBook() {
  const [newbook, setNewbook] = useState({
    title: '',
    author: '',
    category: 'Category',
  });

  const [books, setBooks] = useState([]);

  function AddbookHundle(e) {
    e.preventDefault();

    const newBook = {
      id: crypto.randomUUID(),
      title: newbook.title,
      author: newbook.author,
      category: newbook.category,
    };

    setBooks((currentBooks) => [...currentBooks, newBook]);

    setNewbook({
      title: '',
      author: '',
      category: 'Category',
    });
  }

  function DeleteBook(id) {
    setBooks((currentBooks) => currentBooks.filter((book) => book.id !== id));
  }

  return (
    <>
      <div className="book-list">
        {books.map((book) => (
          <div className="bookcont" key={book.id}>
            <div className="books-info">
              <span className="book-cata">{book.category}</span>
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">{book.author}</p>
              <button type="button" className="btn" id="commit">
                Comments
              </button>
              <button
                type="button"
                className="btn"
                id="remove"
                onClick={() => DeleteBook(book.id)}
              >
                Remove
              </button>
              <button type="button" className="btn" id="edit">
                Edit
              </button>
            </div>
            <div className="compelet">
              <span className="precent">
                64%
              </span>
              <h5>completed</h5>
            </div>
            <div className="current-part ">
              <p className="current-chapter">CURRENT CHAPTER</p>
              <h4>Chapter 17</h4>
              <button type="button" className="upd-btn">
                UPDATE PROGRESS
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add book part */}
      <div className="container">
        <h2>ADD NEW BOOK</h2>
        <div className="cont">
          <input
            type="text"
            placeholder="Book Title"
            className="input-book"
            value={newbook.title}
            onChange={(e) => setNewbook({ ...newbook, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Author name"
            className="input-author"
            value={newbook.author}
            onChange={(e) => setNewbook({ ...newbook, author: e.target.value })}
          />
          <select
            className="select-cata"
            value={newbook.category}
            onChange={(e) => setNewbook({ ...newbook, category: e.target.value })}
          >
            <option value="Category">Category</option>
            <option value="Fiction">Fiction</option>
            <option value="General">General</option>
            <option value="Amazing">Amazing</option>
          </select>
          <button type="button" className="addbtn" onClick={AddbookHundle}>
            ADD BOOK
          </button>
        </div>
      </div>
    </>
  );
}

export default AddBook;
