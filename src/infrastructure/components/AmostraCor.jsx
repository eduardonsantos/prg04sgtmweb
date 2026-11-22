import PropTypes from 'prop-types';
import styles from './AmostraCor.module.css';

// Caixa com uma amostra de cor da paleta
function AmostraCor({ cor, texto }) {
  // Escolhe a classe da cor conforme a prop "cor"
  let classeCor = styles.caixaBranca;
  if (cor === 'azul') {
    classeCor = styles.caixaAzul;
  }
  if (cor === 'verde') {
    classeCor = styles.caixaVerde;
  }

  return (
    <div className={'p-4 text-center fs-5 rounded-3 shadow-sm ' + classeCor}>
      <p className="mb-0">{texto}</p>
    </div>
  );
}

AmostraCor.propTypes = {
  cor: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
};

export default AmostraCor;
