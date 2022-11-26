import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./lib/styles/GlobalStyle";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle></GlobalStyle>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
