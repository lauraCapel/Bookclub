import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Bookclubsearch from './components/Bookclubsearch';
import Bookclub from './components/Bookclub';

function App() {
  return (
    <div className="App">
      APP
      <Routes>
        <Route path="/" element={<Bookclubsearch />} />
        <Route path="/Bookclub/:id" element={<Bookclub />} />
      </Routes>
    </div>
  );
}

export default App;
