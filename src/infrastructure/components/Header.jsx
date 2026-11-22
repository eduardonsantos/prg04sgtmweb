import PropTypes from 'prop-types';

// Cabeçalho de página (usado em Login e Admin)
function Header({ titulo }) {
  return (
    <header className="text-center my-4">
      <h1 className="text-primary">{titulo}</h1>
    </header>
  );
}

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default Header;
