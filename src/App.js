import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddBook from './components/Addbook';
import Category from './components/category';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<AddBook />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
