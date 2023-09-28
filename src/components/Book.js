import React from 'react';
import PropTypes from 'prop-types';

function Book({
  category,
  title,
  author,
  onDelete,
  isCompleted,
  toggleStatus,
}) {
  return (
    <div className={`book-list ${isCompleted ? 'completed' : ''}`}>
      <div className="bookcont">
        <div className="books-info">
          <div className="book-cata">{category}</div>
          <p className="book-title">{title}</p>
          <p className="book-author">{author}</p>
          <div className="buttons">
            <span className="btn" id="commit">
              Comments
            </span>
            <div className="Line-2" />
            <button
              type="button"
              className="btn"
              id="delete"
              onClick={onDelete}
            >
              Remove
            </button>
            <div className="Line-2" />
            <span className="btn" id="edit">
              Edit
            </span>
          </div>
        </div>
        <div>
          <div className="circle" />
        </div>
        <div className="compelet">
          <span className="precent">{isCompleted ? '100%' : '0%'}</span>
          <h5>{isCompleted ? 'completed' : 'not completed'}</h5>
        </div>
        <div className="Line-1" />
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
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  toggleStatus: PropTypes.func.isRequired,
};

export default Book;
