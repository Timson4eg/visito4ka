import { RefObject, useEffect, useState } from "react";

type useTitleSongProps = {
  isReady: boolean;
  playerRef: RefObject<YT.Player | null>;
};

export function useBacgroundPlayer({ isReady, playerRef }: useTitleSongProps) {
  const [thumbnail, setThumbnail] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!playerRef.current || !isReady) return;

    const data = playerRef.current.getVideoData();

    if (data?.title) {
      setThumbnail(`https://img.youtube.com/vi/${data.video_id}/hqdefault.jpg`);
    }
    setIsLoading(false); // закончили "загрузку"
  }, [isReady]);

  return {
    thumbnail,
    isLoading,
  };
}
