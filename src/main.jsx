import React from "react";
import ReactDOM from "react-dom/client";
import RoomProvider from "./context/RoomContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RoomProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </RoomProvider>
);
