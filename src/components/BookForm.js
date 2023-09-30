import React from 'react';

function BookDiv() {
  return (
    <>
      <div className="contanier">
        <h2>ADD NEW BOOK</h2>
        <form>
          <input type="text" placeholder="Book Title..." className="input-book" />
          <input type="text" placeholder="Book Author..." className="input-author" />
          <select className="select-cata">
            <option value="Category" selected>
              Category
            </option>
            <option value="Fiction">Fiction</option>
            <option value="General">General</option>
            <option value="Amazing">Amazing</option>
          </select>
          <button type="button" className="addbtn">
            ADD BOOK
          </button>
        </form>
      </div>
    </>
  );
}

export default BookDiv;
