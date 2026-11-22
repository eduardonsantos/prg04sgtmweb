function Sandbox() {
  return (
    <main className="container py-4">
      <h1 className="titulo-principal text-center">Campo de Testes</h1>
      <p className="text-center">Aqui você pode testar!!!</p>

      <section id="bloco-audio" className="card shadow-sm mb-4">
        <div className="card-body">
          <h2 className="titulo-principal h4">Reprodução de Áudio</h2>
          <audio className="w-100" preload="metadata" controls>
            <source src="/assets/audio/background-music.mp3" type="audio/mpeg" />
            <p>Seu navegador não suporta áudio <a href="/assets/audio/background-music.mp3" type="audio/mpeg">Baixe o arquivo aqui</a></p>
          </audio>
        </div>
      </section>

      <section id="bloco-video" className="card shadow-sm">
        <div className="card-body">
          <h2 className="titulo-principal h4">Vídeo Incorporado</h2>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/4Y5DHDR3FYo?si=XaupXkPb8AHsnb-U"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Sandbox;
