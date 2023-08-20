
import './App.css';
import HomePage from './components/pages/home/HomePage';
// import "./index"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from './components/pages/Portfolio/Portfolio';
import Blog from './components/pages/Blog/Blog';
import Contact from './components/pages/Contact/Contact';
import About from './components/pages/About/About';
import Header from './components/common/Header';
import Footer from './components/common/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path='/' element={ <HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
