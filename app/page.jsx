import Image from "next/image";

import sedanIcon from "@/public/icon-sedans.svg";
import suvIcon from "@/public/icon-suvs.svg";
import luxuryIcon from "@/public/icon-luxury.svg";

const carList = [
  {
    id: 0,
    bgAccent: "bg-bright-orange",
    textAccent: "text-bright-orange",
    active:
      "hover:bg-bright-orange hover:text-inherit focus:bg-bright-orange focus:text-inherit",
    icon: sedanIcon,
    title: "Sedans",
    description:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
  },
  {
    id: 1,
    bgAccent: "bg-dark-cyan",
    textAccent: "text-dark-cyan",
    active:
      "hover:bg-dark-cyan hover:text-inherit focus:bg-dark-cyan focus:text-inherit",
    icon: suvIcon,
    title: "SUVs",
    description:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
  },
  {
    id: 2,
    bgAccent: "bg-very-dark-cyan",
    textAccent: "text-very-dark-cyan",
    active:
      "hover:bg-very-dark-cyan hover:text-inherit focus:bg-very-dark-cyan focus:text-inherit",
    icon: luxuryIcon,
    title: "Luxury",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
  },
];

export default function App() {
  return (
    <main className="flex max-w-max flex-col overflow-hidden rounded-md md:h-[500px] md:flex-row ">
      <h1 className="sr-only">Preview Card Component</h1>
      {carList.map((item) => {
        return (
          <section
            key={item.id}
            className={`${item.bgAccent} mx-auto flex max-w-xs flex-col p-12`}
          >
            <Image src={item.icon} alt="" />
            <h2 className="my-8 font-heading text-4xl uppercase text-very-light-gray">
              {item.title}
            </h2>
            <p>{item.description}</p>
            <button
              className={`${item.textAccent} ${item.active} mt-8 max-w-max rounded-full border-2 border-very-light-gray bg-very-light-gray px-8 py-2 md:mt-auto`}
            >
              Learn More
            </button>
          </section>
        );
      })}
    </main>
  );
}
