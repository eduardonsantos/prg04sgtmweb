import AmostraCor from '../components/AmostraCor.jsx';

function Paleta() {
  return (
    <main className="container py-4">
      <header className="text-center mb-4">
        <h1 className="titulo-principal">Identidade Visual - Tributos Municipais</h1>
      </header>

      <section className="mb-4">
        <h2 className="titulo-principal text-center h4">Cor Principal e Justificativa</h2>
        <p>A cor principal definida é o <strong>Azul</strong>, extraído do fundo da bandeira da cidade. Na psicologia das cores, o azul transmite confiança, profissionalismo, integridade</p>
      </section>

      <section className="mb-4">
        <h2 className="titulo-principal text-center h4">Tipo de Paleta</h2>
        <p>O sistema adota uma harmonia de <strong>Cores Análogas</strong>. Essa técnica combina o Azul principal com o Verde presente nas folhagens do brasão central. Por serem cores vizinhas</p>
      </section>

      <section>
        <h2 className="titulo-principal text-center h4">Amostras de Cores</h2>
        <div className="row g-3">
          <div className="col-12 col-md-4">
            <AmostraCor cor="azul" texto="Azul Principal (#0055A4)" />
          </div>
          <div className="col-12 col-md-4">
            <AmostraCor cor="verde" texto="Verde de Destaque (#228B22)" />
          </div>
          <div className="col-12 col-md-4">
            <AmostraCor cor="branca" texto="Branco Base (#FFFFFF)" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Paleta;
