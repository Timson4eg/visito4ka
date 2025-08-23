import ChilPlayer from "@/Components/ChilPlayer/ChilPlayer";
import Intro from "./Intro/Intro";
import MainBackground from "./MainBackground";

const Main = () => {
  return (
    <section className="w-screen h-screen bg-black relative overflow-hidden px-5  px-0.5 md:px-28 ">
      <MainBackground />
      <div
        className="absolute z-500   bottom-[100px] left-1/2 -translate-x-1/2
           md:bottom-[100px] md:right-[100px] md:left-auto md:translate-x-0
        "
      >
        <ChilPlayer videoId="xAR6N9N8e6U" />
      </div>
      {/* <Header /> */}
      <Intro />
    </section>
  );
};

export default Main;
