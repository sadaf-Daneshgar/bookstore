import React from 'react';
import PropTypes from 'prop-types';

function Book({
  category, bookTitle, bookAuthor, isCompleted, toggleStatus,
}) {
  return (
    <div className={`book-list ${isCompleted ? 'completed' : ''}`}>
      <div className="bookcont" key={bookTitle.id}>
        <div className="books-info">
          <div className="book-cata">{category}</div>
          <p className="book-title">{bookTitle}</p>
          <p className="book-author">{bookAuthor}</p>
          <button type="button" className="btn" id="commit">
            Comments
          </button>
          <button type="button" className="btn" id="delete">
            Remove
          </button>
          <button type="button" className="btn" id="edit">
            Edit
          </button>
        </div>
        <div className="compelet">
          <span className="precent">{isCompleted ? '100%' : '0%'}</span>
          <h5>{isCompleted ? 'completed' : 'not completed'}</h5>
        </div>
        <div className="current-part">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <h4>Chapter</h4>
          <button type="button" className="upd-btn" onClick={toggleStatus}>
            {isCompleted ? 'Mark as Incomplete' : 'Mark as Complete'}
          </button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  category: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  bookAuthor: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  toggleStatus: PropTypes.func.isRequired,
};

export default Book;
