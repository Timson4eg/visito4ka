import { PortfolioCard } from "@/constants/portfolioCard.constants";
import Card from "./Card";

const Portfolio = () => {
  return (
    <section className="relative block">
      <h2 className="title-xl">Portfolio</h2>

      <div className="absolute inset-0 z-10 bg-black/40 backdrop-blur-sm flex items-center justify-center pointer-events-none  rounded-[20px]">
        <span className="text-white text-4xl font-semibold select-none">
          Portfolio in progress
        </span>
      </div>

      {/* Контент портфолио под заглушкой */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch relative z-0">
        {PortfolioCard.map((card) => (
          <Card
            urlImg={card.urlImg}
            name={card.name}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
