import Destaque from '../components/Destaque.jsx';
import SobreProjeto from '../components/SobreProjeto.jsx';
import Avisos from '../components/Avisos.jsx';

function Home() {
  return (
    <main className="container my-4">
      <Destaque />
      <div className="row">
        <section className="col-12 col-md-8">
          <SobreProjeto />
        </section>
        <aside className="col-12 col-md-4">
          <Avisos />
        </aside>
      </div>
    </main>
  );
}

export default Home;
