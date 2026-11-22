import PropTypes from 'prop-types';

// Uma linha da tabela de usuários
function UserRow({ id, nome, email, ativo }) {
  // Renderização condicional do status
  let classeBadge = 'badge rounded-pill bg-secondary';
  let textoStatus = 'Inativo';
  if (ativo) {
    classeBadge = 'badge rounded-pill bg-success';
    textoStatus = 'Ativo';
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{nome}</td>
      <td>{email}</td>
      <td><span className={classeBadge}>{textoStatus}</span></td>
      <td className="text-nowrap">
        <div className="btn-group btn-group-sm" role="group" aria-label="Ações do usuário">
          <button type="button" className="btn btn-success">Editar</button>
          <button type="button" className="btn btn-danger">Excluir</button>
        </div>
      </td>
    </tr>
  );
}

UserRow.propTypes = {
  id: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  ativo: PropTypes.bool.isRequired,
};

export default UserRow;
