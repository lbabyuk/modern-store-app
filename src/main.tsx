import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import { Toaster } from "@/components/ui/toaster";
import "./index.css";
import App from "./App.tsx";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster />
      <App />
    </Provider>
  </StrictMode>
);
