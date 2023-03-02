import "../styles/cards.css";
import { motion } from "framer-motion";

const cardVariants= {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

function CardAnimated({ text, hueA, hueB }) {
  const background = `linear-gradient(300deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container pt-12 pb-10"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card-information-container" variants={cardVariants}>
        {text}
      </motion.div>
    </motion.div>
  );
}

const info = [
  ["Scrivi un messaggio quando vuoi ⏱️ e da dove vuoi 🌏 ", 217, 300],
  ["Messaggi, audio, immagini, video... Flyer ✈️ non ha limiti di risoluzione!",300, 217 ],
  ["Non c'é meta che Flyer ✈️  non possa raggiungere 😎", 217, 300],
];

export const Cards = () => {
  return info.map(([text, hueA, hueB]) => (
    <CardAnimated text={text} hueA={hueA} hueB={hueB} key={text} />
  ));
}
