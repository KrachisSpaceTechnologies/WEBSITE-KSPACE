import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import Innovation from './pages/Innovation';
import Careers from './pages/Careers';
import BookDemo from './pages/BookDemo';
import Contact from './components/contact';



function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/BookDemo" element={<BookDemo />} /> {/* New Route */}
            <Route path="/contact" element={<Contact />} /> {/* Add Contact Route */}
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
