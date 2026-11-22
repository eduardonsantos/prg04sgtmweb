import PropTypes from 'prop-types';
import UserRow from './UserRow.jsx';

// Tabela de usuários da página administrativa
function UserTable({ usuarios }) {
  return (
    <div className="table-responsive">
      <table id="tabela-usuarios" className="table table-striped table-hover align-middle">
        <caption>Contribuintes com acesso ao sistema</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(function (usuario) {
            return (
              <UserRow
                key={usuario.id}
                id={usuario.id}
                nome={usuario.nome}
                email={usuario.email}
                ativo={usuario.ativo}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

UserTable.propTypes = {
  usuarios: PropTypes.array.isRequired,
};

export default UserTable;
