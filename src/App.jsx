import { Routes, Route } from 'react-router-dom';
import Navbar from './infrastructure/components/Navbar.jsx';
import Footer from './infrastructure/components/Footer.jsx';
import Home from './infrastructure/pages/Home.jsx';
import Atividade3 from './infrastructure/pages/Atividade3.jsx';
import Sandbox from './infrastructure/pages/Sandbox.jsx';
import Paleta from './infrastructure/pages/Paleta.jsx';
import Login from './auth/pages/Login.jsx';
import Admin from './admin/pages/Admin.jsx';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/atividade-3" element={<Atividade3 />} />
          <Route path="/sandbox" element={<Sandbox />} />
          <Route path="/paleta" element={<Paleta />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
