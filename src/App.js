import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookDiv from './components/BookForm';
import BookList from './components/BookList';
import Category from './components/category';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/category" element={<Category />} />
      </Routes>
      <BookDiv />
    </div>
  );
}

export default App;
