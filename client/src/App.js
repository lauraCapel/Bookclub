import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import './App.css';
import Bookclubsearch from './Views/Bookclubsearch';
import Bookclub from './Views/Bookclub';
import Navbar from "./components/Navbar";


function App() {
  // make sure intital state is an empty array
  const [bookClubs, setBookClubs] = useState([]);
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
  



  return (
    <div className="App">
    APP
      <div className="content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Bookclubsearch />} />
          <Route path="/Bookclub/:id" element={<Bookclub />} />
        </Routes>
      </div>
        
      
      
    </div>
  );
}

export default App;
