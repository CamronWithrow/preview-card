import Image from "next/image";

import sedanIcon from "../public/icon-sedans.svg";
import suvIcon from "../public/icon-suvs.svg";
import luxuryIcon from "../public/icon-luxury.svg";

const carList = [
  {
    id: 0,
    icon: sedanIcon,
    title: "Sedans",
    description:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
  },
  {
    id: 1,
    icon: suvIcon,
    title: "SUVs",
    description:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
  },
  {
    id: 2,
    icon: luxuryIcon,
    title: "Luxury",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
  },
];

export default function App() {
  return (
    <main className="flex flex-col md:flex-row">
      <h1 className="sr-only">Preview Card Component</h1>
      {carList.map((item) => {
        return (
          <section key={item.id}>
            <Image src={item.icon} alt="" />
            <h2 className="font-heading uppercase">{item.title}</h2>
            <p>{item.description}</p>
            <button>Learn More</button>
          </section>
        );
      })}
    </main>
  );
}
