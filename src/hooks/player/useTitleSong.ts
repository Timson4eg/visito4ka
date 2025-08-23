import { RefObject, useEffect, useState } from "react";

type useTitleSongProps = {
  isReady: boolean;
  playerRef: RefObject<YT.Player | null>;
};

export function useTitleSong({ isReady, playerRef }: useTitleSongProps) {
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!playerRef.current || !isReady) return;

    const data = playerRef.current.getVideoData();

    if (data?.title) {
      setTitle(data.title);
    }
    setIsLoading(false); // закончили "загрузку"
  }, [isReady]);

  return {
    title,
    isLoading,
  };
}
