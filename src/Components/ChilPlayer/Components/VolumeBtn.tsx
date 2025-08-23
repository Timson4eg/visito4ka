import { SlVolume1, SlVolume2, SlVolumeOff } from "react-icons/sl";

interface VolumeBtnProps {
  volume: number;
  onChangeVolume: (value: number) => void;
}

const VolumeBtn = ({ volume, onChangeVolume }: VolumeBtnProps) => {
  return (
    <div className="flex items-center gap-2 w-full">
      <span className="text-xs">
        {volume === 0 ? (
          <SlVolumeOff size={20} />
        ) : volume < 50 ? (
          <SlVolume1 size={20} />
        ) : (
          <SlVolume2 size={20} />
        )}
      </span>
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        className="w-full accent-gray-700"
        onChange={(e) => onChangeVolume(Number(e.target.value))}
      />
    </div>
  );
};

export default VolumeBtn;
