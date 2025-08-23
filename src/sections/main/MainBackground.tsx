import bg from "../../assets/Bg.svg";

export const MainBackground = () => {
  return (
    <>
      <div className="absolute right-0 top-0 h-full w-full md:w-1/2 z-10 animate-light-on overflow-hidden">
        <img
          src={bg}
          alt="Background"
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>
      <div className="absolute right-0 top-0 h-full w-full md:w-[calc(50%+15px)] bg-gradient-to-l from-transparent to-black z-20" />
    </>
  );
};

export default MainBackground;
