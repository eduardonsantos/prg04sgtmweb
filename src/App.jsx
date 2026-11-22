import { Routes, Route } from 'react-router-dom';
import Navbar from './infrastructure/components/Navbar.jsx';
import Footer from './infrastructure/components/Footer.jsx';
import Home from './infrastructure/pages/Home.jsx';
import Login from './auth/pages/Login.jsx';
import Admin from './admin/pages/Admin.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
