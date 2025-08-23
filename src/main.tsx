import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import PlayerProvider from "./context/PlayerProvider.tsx";
import "./style/index.css";
import "./style/reset.css";

createRoot(document.getElementById("root")!).render(
  <PlayerProvider>
    <App />
  </PlayerProvider>
);
