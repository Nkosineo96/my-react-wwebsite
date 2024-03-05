
import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './pages/Footer';

function App() {
  return(
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );  
}

export default App;
