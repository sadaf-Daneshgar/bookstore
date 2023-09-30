import { configureStore } from '@reduxjs/toolkit';

import BooksReducer from './books/bookSlice';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    ArrayBooks: BooksReducer,
    categoryArrays: categoriesReducer,
  },
});

export default store;
