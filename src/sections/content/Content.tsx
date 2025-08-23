import Expirince from "./components/Expirience";
import LinksBtn from "./components/LinksBtn";
import Player from "./components/Player";
import Portfolio from "./components/Portfolio";
import Profile from "./components/Profile";
import TechStack from "./components/TechStack";

const Content = () => {
  return (
    <section className=" text-white mt-28 mb-28 ">
      <div className="container mx-auto max-w-7xl px-4 mt-1 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch [&>*]:min-w-0">
          <div className="md:col-span-8">
            <Profile />
          </div>
          <div className="md:col-span-4 flex flex-col space-y-5">
            <LinksBtn />
            <div className="flex-1">
              <Player />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min  [&>*]:min-w-0">
          <div className="md:col-span-6">
            <Expirince />
          </div>
          <div className="md:col-span-6">
            <TechStack />
          </div>
        </div>

        <Portfolio />
      </div>
    </section>
  );
};

export default Content;
