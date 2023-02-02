import Spline from "@splinetool/react-spline";

export function HeroSection() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-opacity-60">
        <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      </div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Una nuova App di Messagistica!
          </h1>
          <p className="mb-5">
            inizia una chat con chi vuoi, quando vuoi e da dove vuoi!
          </p>
          <button className="btn btn-primary">Scopri di più</button>
        </div>
      </div>
    </div>
  );
}

