import Spline from "@splinetool/react-spline";

export function HeroSection() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-opacity-60">
        <Spline scene="https://prod.spline.design/aCMlCOLalvjKK0GA/scene.splinecode" className="airplane"/>
      </div>
      <div className="hero main-title text-right text-neutral-content">
        <div className="max-w-md flex-end">
          <h1 className="mb-5 text-6xl font-bold">
            Una nuova App di Messagistica!
          </h1>
          <p className="mb-5 text-xl">
            Fai <strong className="text-xl italic font-mono volare-text">volare</strong> i tuoi messaggi... Inizia una chat con chi vuoi, quando vuoi e da dove vuoi!
          </p>
          <button className="btn btn-primary btn-generic btn-scopri-piu text-sm">Scopri di più</button>
        </div>
      </div>
    </div>
  );
}

