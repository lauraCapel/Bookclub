import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import './App.css';

import Navbar from "./components/Navbar";
import Bookclubsearch from './views/Bookclubsearch';
import Bookclub from './views/Bookclub';
import Booksearch from './views/Booksearch';
import Book from './views/Book';
import Error404View from './views/Error404View';
import Login from "./views/Login";



function App() {
  // make sure intital state is an empty array
  const [bookClubs, setBookClubs] = useState([]);
  const [books, setBooks] = useState([]);
  // state to store list of bookclubs
  // fetch bookclub back end
  useEffect(() => {
      getBookclubs();
  }, []);

  async function getBookclubs() {
      try {
          let response = await fetch("/bookclub");
          console.log(response);
          if (response.ok) {
          let bookClubs = await response.json();
          setBookClubs(bookClubs);
          } else {
              console.log(`Server error: ${response.status} ${response.statusText}`);
          }
      } catch (err) {
          console.log(`Server error: ${err.message}`);
      }
  };
  
  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    try {
        let response = await fetch("/books");
        console.log(response);
        if (response.ok) {
        let books = await response.json();
        setBooks(books);
        } else {
            console.log(`Server error: ${response.status} ${response.statusText}`);
        }
    } catch (err) {
        console.log(`Server error: ${err.message}`);
    }
};


  return (
    <div className="App">
      <div className="content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Bookclubs" element={<Bookclubsearch bookClubs={bookClubs} />} />
          <Route path="/Bookclub/:id" element={<Bookclub bookClubs={bookClubs} books={books} />} />
          <Route path="/Books" element={<Booksearch books={books} />} />
          <Route path="/Book/:id" element={<Book books={books} />} />
          <Route path="*" element={<Error404View />} />
        </Routes>
      </div>
        
      
      
    </div>
  );
}

export default App;
