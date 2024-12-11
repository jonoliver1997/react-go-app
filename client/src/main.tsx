import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider attribute="class">
      <ChakraProvider value={defaultSystem}>
        <App />
      </ChakraProvider>
    </ThemeProvider>
  </React.StrictMode>
);
