type CardPorops = {
  name: string;
  description: string;
  urlImg?: string;
};

import PlaceHolder from "@/assets/landscape-placeholder-svgrepo-com.svg";

const Card = ({ name, description, urlImg }: CardPorops) => {
  return (
    <article className=" rounded-xl bg-neutral-800/60 border border-white/10 overflow-hidden">
      <div>
        {urlImg ? (
          <img src={urlImg}></img>
        ) : (
          <img src={PlaceHolder} alt="Plug" />
        )}
      </div>
      <div className="p-4">
        <div className=" flex justify-between">
          <h3 className="text-2xl font-inter">{name}</h3>
          <button className=" rounded-lg text-sm bg-black px-4">link</button>
        </div>
        <p className="font-grotesk">{description}</p>
      </div>
    </article>
  );
};

export default Card;
