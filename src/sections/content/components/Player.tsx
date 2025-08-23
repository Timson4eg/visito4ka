import FooterPlayer from "@/Components/ChilPlayer/Components/FooterPlayer";
import PlayStopBtn from "@/Components/ChilPlayer/Components/PlayStopBtn";
import StatusAnimation from "@/Components/ChilPlayer/Components/StatusAnimation";
import VolumeBtn from "@/Components/ChilPlayer/Components/VolumeBtn";
import { usePlayer } from "@/context/PlayerContext";

const Player = () => {
  const {
    isPlaying,
    volume,
    title,
    togglePlay,
    setVolume,
    isLoading,
    videoId,
    thumbnail,
  } = usePlayer();
  return (
    <div
      className="block bg-cover bg-center relative  h-full min-h-[160px] sm:min-h-0 px-12"
      style={{
        backgroundImage: thumbnail ? `url(${thumbnail})` : "none",
      }}
    >
      <div className=" backdrop-blur-xs  absolute inset-0  bg-black/10 z-0 flex text-center justify-center flex-col">
        <div className="flex text-center justify-center flex-col p-10">
          <div className="flex gap-3 ">
            <PlayStopBtn togglePlay={togglePlay} isPlaying={isPlaying} />
            <VolumeBtn volume={volume} onChangeVolume={setVolume} />
          </div>
          <FooterPlayer
            title={title}
            videoId={videoId}
            isPlaying={isPlaying}
            isLoadingTitle={isLoading}
          />
          <div className="?text-center justify-center flex">
            <StatusAnimation isPlaying={isPlaying} />
          </div>
        </div>
      </div>
      <div
        id="yt-player"
        className="absolute -left-[9999px] -top-[9999px] w-0 h-0"
      />
    </div>
  );
};

export default Player;
