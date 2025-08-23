import AnimatedText from "./AnimatedText";

const IntroBlock = () => {
  return (
    <div className="flex flex-col gap-5 mt-0 sm:mt-0 sm:gap-10">
      <AnimatedText
        text="Timur Nazipov"
        className=" text-white font-inter text-nowrap text-5xl  font-light xl:text-6xl  sm:text-4xl"
        tag="h1"
      />
      <AnimatedText
        text={"Software developer |\nFrontend"}
        className=" text-white font-inter text-3xl  xl:text-4xl sm:text-2xl"
        tag="h3"
      />
      <AnimatedText
        text="Frontend Developer focused on clean code and smooth user experiences."
        className=" text-2xl md:text-2xl py-4 sm:py-6 text-white font-grotesk font-light lg:text-xl"
        tag="p"
      />
    </div>
  );
};

export default IntroBlock;
