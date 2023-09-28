import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/g5ahFOiYPc0zxZGYNqkm/books';

export const fetchBooks = createAsyncThunk('booksList/fetchBooks', async () => {
  const response = await axios.get(API_URL);
  const booksList = Object.keys(response.data).map((id) => ({
    item_id: id,
    ...response.data[id][0],
  }));
  return booksList;
});

export const addBooks = createAsyncThunk('booksList/addBooks', async (newBook) => {
  await axios.post(API_URL, newBook);
  return newBook;
});

export const removeBooks = createAsyncThunk(
  'booksList/removeBooks',
  async (bookID) => {
    await axios.delete(`${API_URL}/${bookID}`);
    return bookID;
  },
);

const initialState = {
  booksList: [],
  isLoading: false,
  error: null,
};

const BooksSlice = createSlice({
  name: 'booksList',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.booksList = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.booksList.push(action.payload);
      })
      .addCase(addBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(removeBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeBooks.fulfilled, (state, action) => {
        const itemId = action.payload;
        state.booksList = state.booksList.filter((book) => book.item_id !== itemId);
        state.isLoading = false;
      })
      .addCase(removeBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default BooksSlice.reducer;
