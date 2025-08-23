import { useBacgroundPlayer } from "@/hooks/player/useBacgroundPlayer";
import { usePlaying } from "@/hooks/player/usePlaying";
import { useTitleSong } from "@/hooks/player/useTitleSong";
import { useVolme } from "@/hooks/player/useVolume";
import { useYouTube } from "@/hooks/player/useYouTube";
import React, { FC, useState } from "react";
import { PlayerContext } from "./PlayerContext";

const PlayerProvider: FC<{ videoId?: string; children: React.ReactNode }> = ({
  videoId,
  children,
}) => {
  console.log(videoId);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentVideoId, _setCurrentVideoId] = useState("xAR6N9N8e6U");
  const { playerRef, isReady } = useYouTube(currentVideoId);
  const { title, isLoading } = useTitleSong({ isReady, playerRef });
  const { volume, handleSetVolume } = useVolme(playerRef);
  //
  const { isPlaying, togglePlay } = usePlaying({ playerRef, isReady });
  const { thumbnail, isLoading: isLoadingBg } = useBacgroundPlayer({
    isReady,
    playerRef,
  });

  //title

  return (
    <PlayerContext.Provider
      value={{
        isPlaying, //state player
        volume, //stateVolume
        title, //title track
        videoId: currentVideoId, // id youtube
        togglePlay, //handle
        setVolume: handleSetVolume,
        isLoading: isLoading,
        thumbnail,
        isLoadingBg,
        //handleVolume
        //   setVideo: handleSetVideo, // handle
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
