import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import Category from './components/category';
import BookDiv from './components/BookForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <BookList />
              <BookDiv />
            </>
          )}
        />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
