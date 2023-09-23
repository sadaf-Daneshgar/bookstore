import { createSlice } from "@reduxjs/toolkit";

const initialState = { booksArray: [] };

const BookSlice = createSlice({
    name: 'Books',
    initialState,
    reducers: {
        addBooks(state, action){
            state.booksArray.push(action.payload)
        },
        removeBooks(state, action){
            state.booksArray.filter(books => books.id !== action.payload)
        }
    }
})

export const { addBooks, removeBooks } = BookSlice.actions;
export default BookSlice.reducer;
