import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/page-layout/navbar/NavBar';
import Home from './components/pages/Home/Home';
import Contact from './components/pages/Contact/Contact';
// Add other page imports...

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
