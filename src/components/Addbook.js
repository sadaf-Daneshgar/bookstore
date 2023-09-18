import React from 'react';
import './navbar.css';

function AddBook() {
  return (
    <>
      <div className="bookcont">
        <div className="books-info">
          <span className="book-cata">Action</span>
          <h3 className="book-title">The Hunger Games</h3>
          <p className="book-author">Suzanne Collins</p>
          <button type="button" className="btn" id="commit">
            Comments
          </button>
          <button type="button" className="btn" id="remove">
            Remove
          </button>
          <button type="button" className="btn" id="edit">
            Edit
          </button>
        </div>
        <div className="compelet">
          <span className="precent">64%</span>
          <h5>completed</h5>
        </div>
        <div className="current-part">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <h4>Chapter 17</h4>
          <button type="button" className="upd-btn">
            UPDATE PROGRESS
          </button>
        </div>
      </div>

      {/* add book part */}

      <div className="contanier">
        <h2>ADD NEW BOOK</h2>
        <div className="cont">
          <input type="text" placeholder="Book Tilte" className="input" />
          <select className="select-cata">
            <option selected>Category</option>
            <option>Fiction</option>
            <option>Genral</option>
            <option>Amazing</option>
          </select>
          <button type="button" className="addbtn">
            ADD BOOK
          </button>
        </div>
      </div>
    </>
  );
}

export default AddBook;
