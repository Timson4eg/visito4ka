import { SlControlPause, SlControlPlay } from "react-icons/sl";

interface IPlayStopBtnProps {
  togglePlay: () => void;
  isPlaying: boolean;
}

const PlayStopBtn = ({ togglePlay, isPlaying }: IPlayStopBtnProps) => {
  return (
    <button
      onClick={togglePlay}
      className="px-4 py-2 bg-transparent rounded-lg      border border-transparent
              hover:border hover:border-white
              hover:shadow-[0_0_5px_rgba(255,255,255,0.4)]
              transition"
    >
      {isPlaying ? <SlControlPause size={20} /> : <SlControlPlay size={20} />}
    </button>
  );
};

export default PlayStopBtn;
