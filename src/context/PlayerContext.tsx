import { createContext, useContext } from "react";

export interface AppContextType {
  isPlaying: boolean;
  volume: number;
  title: string;
  videoId: string | null;
  togglePlay: () => void;
  setVolume: (v: number) => void;
  isLoading: boolean;
  thumbnail: string;
  isLoadingBg: boolean;
  // setVideo: (id: string, title: string) => void;
  // сюда потом добавишь auth, theme и т.д.
}

export const PlayerContext = createContext<AppContextType | null>(null);

export const usePlayer = () => {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
};
