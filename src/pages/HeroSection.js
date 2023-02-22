import "../styles/herosection.css";

export const HeroSection = () => {
  return (
    <div className="hero min-h-screen hero-container-all">
      <div className="hero-overlay bg-opacity-0">
      </div>
      <div className="hero main-title text-right text-neutral-content">
        <div className="max-w-md flex-end">
          <h1 className="mb-5 text-5xl font-bold">
            Una nuova App di Messaggistica!
          </h1>
          <p className="mb-5 text-xl">
            Fai <strong className="text-xl italic font-mono volare-text">volare</strong> i tuoi messaggi... Inizia una chat con chi vuoi, quando vuoi e dove vuoi!
          </p>
          <button className="btn btn-primary btn-generic text-sm">Scopri di più</button>
        </div>
      </div>
    </div>
  );
}

