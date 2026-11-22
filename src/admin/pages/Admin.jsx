import Header from '../../infrastructure/components/Header.jsx';
import UserTable from '../components/UserTable.jsx';

// Dados de exemplo (depois virão da API do Backend)
const usuarios = [
  { id: '001', nome: 'Ana Beatriz Souza', email: 'ana.souza@tributos.gov.br', ativo: true },
  { id: '002', nome: 'Carlos Eduardo Lima', email: 'carlos.lima@tributos.gov.br', ativo: true },
  { id: '003', nome: 'Fernanda Torres', email: 'fernanda.torres@tributos.gov.br', ativo: false },
  { id: '004', nome: 'João Pedro Almeida', email: 'joao.almeida@tributos.gov.br', ativo: true },
  { id: '005', nome: 'Marina Costa Ribeiro', email: 'marina.ribeiro@tributos.gov.br', ativo: true },
];

function Admin() {
  return (
    <>
      <Header titulo="Painel Administrativo" />
      <main className="container mb-4">
        <section id="usuarios">
          <h2>Usuários Cadastrados</h2>
          <UserTable usuarios={usuarios} />
        </section>
      </main>
    </>
  );
}

export default Admin;
