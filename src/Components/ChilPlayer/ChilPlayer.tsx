import { usePlayer } from "@/context/PlayerContext";
import { FC } from "react";
import AnimationEqualize from "./Components/AnimationEqualize";
import FooterPlayer from "./Components/FooterPlayer";
import PlayStopBtn from "./Components/PlayStopBtn";
import VolumeBtn from "./Components/VolumeBtn";
import styles from "./stylePlayer.module.scss";

interface PlayerProps {
  videoId: string;
}

const ChilPlayer: FC<PlayerProps> = () => {
  const {
    isPlaying,
    volume,
    title,
    togglePlay,
    setVolume,
    isLoading,
    videoId,
  } = usePlayer();

  return (
    <div
      className={`${styles.playerWrapper} ${isPlaying ? styles.playing : ""}`}
    >
      <div className={styles.glow}></div>
      <div className={styles.underBg}></div>

      <div className={styles.content}>
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
        <AnimationEqualize isPlaying={isPlaying} />

        <div
          id="yt-player"
          className="absolute -left-[9999px] -top-[9999px] w-0 h-0"
        />
      </div>
    </div>
  );
};

export default ChilPlayer;
