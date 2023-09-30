import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBooks } from '../redux/books/bookSlice';

function BookDiv() {
  const dispatch = useDispatch();
  const [newbooks, setNewbooks] = useState({
    title: '',
    author: '',
    category: 'Category',
  });

  function handleAddBtn(e) {
    e.preventDefault();

    const newBook = {
      item_id: crypto.randomUUID(),
      title: newbooks.title,
      author: newbooks.author,
      category: newbooks.category,
    };

    dispatch(addBooks(newBook));

    setNewbooks({
      title: '',
      author: '',
      category: 'Category',
    });
  }

  return (
    <>
      <div className="contanier">
        <h2>ADD NEW BOOK</h2>
        <div>
          <input
            className="input-book"
            type="text"
            placeholder="BOOK TITLE..."
            value={newbooks.title}
            onChange={(e) => setNewbooks({ ...newbooks, title: e.target.value })}
          />
          <input
            className="input-author"
            type="text"
            placeholder="Book Author..."
            value={newbooks.author}
            onChange={(e) => setNewbooks({ ...newbooks, author: e.target.value })}
          />
          <select
            className="select-cata"
            name="category"
            value={newbooks.category}
            onChange={(e) => setNewbooks({ ...newbooks, category: e.target.value })}
          >
            <option value="Category">Category</option>
            <option value="Fiction">Fiction</option>
            <option value="General">General</option>
            <option value="Amazing">Amazing</option>
          </select>
          <button type="button" className="addbtn" onClick={handleAddBtn}>
            ADD BOOK
          </button>
        </div>
      </div>
    </>
  );
}

export default BookDiv;
