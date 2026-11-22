import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Barra de navegação; o menu hambúrguer é controlado pelo estado menuAberto
function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  function alternarMenu() {
    setMenuAberto(!menuAberto);
  }

  function fecharMenu() {
    setMenuAberto(false);
  }

  // Renderização condicional: o Bootstrap mostra o menu com a classe "show"
  let classeMenu = 'collapse navbar-collapse';
  if (menuAberto) {
    classeMenu = 'collapse navbar-collapse show';
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={fecharMenu}>Gerenciamento de Tributos</Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={menuAberto}
          aria-label="Toggle navigation"
          onClick={alternarMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={classeMenu} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end onClick={fecharMenu}>Início</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/atividade-3" onClick={fecharMenu}>Atividade 3</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sandbox" onClick={fecharMenu}>Campo de Testes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/paleta" onClick={fecharMenu}>Paleta de Cores</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login" onClick={fecharMenu}>Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
