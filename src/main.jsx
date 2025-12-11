

import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { store } from "./redux/Slices/Store.jsx";
import { Toaster } from "react-hot-toast";
import "./global.css";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error('No root element found: add <div id="root"></div> in index.html');

createRoot(rootEl).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
