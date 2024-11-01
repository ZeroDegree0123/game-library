import React, { StrictMode } from "react";
// import { ChakraProvider } from "@chakra-ui/react";
// import { Provider } from "@/components/ui/provider";
// import { ColorModeProvider } from "@/components/ui/color-mode";
import { Theme } from "@chakra-ui/react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <Theme appearance="dark">
        <App />
      </Theme>
    </ChakraProvider>
  </StrictMode>
);
