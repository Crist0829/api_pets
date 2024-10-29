import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { Toaster } from "./components/ui/sonner.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <StrictMode>
      <Toaster richColors position="top-right" />
      <App />
    </StrictMode>
  </ThemeProvider>
);