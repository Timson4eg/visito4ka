import "./CvBtn.scss";

const CvBtn = () => {
  return (
    <button className="text-white text-6xl absolute bottom-20 right-20 font-inter px-10 py-2 rounded-lg z-50 shake-vertical shake-vertical ">
      <div className="under-bg"></div>
      <div className="glow"></div>
      <span className="content">Cv</span>
    </button>
  );
};

export default CvBtn;
