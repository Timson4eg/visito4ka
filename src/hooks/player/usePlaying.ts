import { RefObject, useEffect, useState } from "react";

type usePlayingProps = {
  playerRef: RefObject<YT.Player | null>;

  isReady: boolean;
};

export function usePlaying({ playerRef, isReady }: usePlayingProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!playerRef.current || !isReady) return;

    const state = playerRef.current.getPlayerState();

    if (state === YT.PlayerState.PLAYING) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (!playerRef.current) return;

    const onStateChange = (event: YT.OnStateChangeEvent) => {
      if (event.data === YT.PlayerState.PLAYING) {
        setIsPlaying(true);
      } else if (
        event.data === YT.PlayerState.PAUSED ||
        event.data === YT.PlayerState.ENDED
      ) {
        setIsPlaying(false);
      }
    };

    playerRef.current.addEventListener("onStateChange", onStateChange);

    return () => {
      playerRef.current?.removeEventListener("onStateChange", onStateChange);
    };
  }, [isReady, playerRef]);

  return {
    isPlaying,
    togglePlay,
  };
}
