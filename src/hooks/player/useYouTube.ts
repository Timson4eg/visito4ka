/// <reference types="youtube" />

import { useEffect, useRef, useState } from "react";

// Локальный тип окна (без global)
type YouTubeWindow = Window & {
  YT?: typeof YT;
  onYouTubeIframeAPIReady?: () => void;
};

export function useYouTube(videoId: string) {
  const playerRef = useRef<YT.Player | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const win = window as YouTubeWindow;

    if (!win.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    win.onYouTubeIframeAPIReady = () => {
      playerRef.current = new win.YT!.Player("yt-player", {
        videoId,
        events: {
          onReady: () => setIsReady(true),
        },
      });
    };
  }, [videoId]);

  return { playerRef, isReady };
}
