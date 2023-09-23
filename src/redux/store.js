import { configureStore } from '@reduxjs/toolkit';

import BookSlice from './books/bookSlice';
import categoriesSlice from './categories/categoriesSlice';

const store = configureStore({
    reducer: {
        booksArray: BookSlice,
        categoryArrays: categoriesSlice,
    }
})

export default store;
