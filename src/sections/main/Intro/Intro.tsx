import IntroBlock from "./IntroBlock";
import LearnBtn from "./LearmBtn";

const Intro = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-0.5 md:px-6 relative z-30">
      <div className="container">
        <div className="w-full md:max-w-[50%] flex flex-col gap-10 z-30">
          <IntroBlock />
          <div className="flex text-center justify-center mt-20 sm:mt-0 sm:justify-start">
            <LearnBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
