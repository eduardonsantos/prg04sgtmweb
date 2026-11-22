function Atividade3() {
  return (
    <main className="container py-4">
      <h1 className="titulo-principal text-center">Atividade 03</h1>

      <h2 className="titulo-principal text-center h4 mt-4">Lista de Conteúdos</h2>
      <ul className="list-group mb-4">
        <li className="list-group-item">Html 5</li>
        <li className="list-group-item">Css 3</li>
        <li className="list-group-item">JavaScript</li>
      </ul>

      <h2 className="titulo-principal text-center h4">Imagem dinâmica</h2>
      <div className="text-center">
        <picture>
          <source media="(max-width: 700px)" srcSet="/assets/images/homem-400.png" />
          <source media="(max-width: 1050px)" srcSet="/assets/images/homem-700.png" />
          <img className="img-fluid" src="/assets/images/homem-1000.png" alt="Imagem flexivel funcional" />
        </picture>
      </div>
    </main>
  );
}

export default Atividade3;
