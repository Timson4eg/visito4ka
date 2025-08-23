import { RefObject, useState } from "react";

export function useVolme(playerRef: RefObject<YT.Player | null>) {
  const [volume, setVolume] = useState(50);

  const handleSetVolume = (val: number) => {
    setVolume(val);
    if (playerRef.current) {
      playerRef.current.setVolume(val); // YouTube принимает 0–100
    }
  };

  return {
    volume,
    handleSetVolume,
  };
}
