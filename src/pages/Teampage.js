import "../styles/teampage.css";
import Bianca from "../images/Bianca.jpeg";

export function Teampage() {
  return (
      <div className="team-container text-center">
        <h2 className="team-title ">
          Flyer<span className="s-flyers italic">S</span>
        </h2>
        {/* <h3>⏬️ Space to introduce our team 😎 ⏬️</h3>*/}
        <div className="avatar-about-container flex flex-row items-center mx-5">
          <div className="avatar mt-5">
            <div className="w-32 mask mask-hexagon">
              <img src={Bianca} alt="Avatar Bianca"/>
            </div>
          </div>
          <div className="about p-10 mt-5 text-left">
            <h3 className="name-avatar-title font-bold mb-2"> Bianca - Junior Full Stack Developer 🙌🏻</h3>
                <p>Determinata e curiosa fin da piccola, affronto sempre le sfide con grande entusiasmo, positività e un’incredibile voglia di fare. Così, dopo una formazione da storica dell’Arte, mi sono poi approcciata al mondo della programmazione, che è diventata ormai la mia principale passione. </p>
          </div>
        </div>
      </div>
  );
}
