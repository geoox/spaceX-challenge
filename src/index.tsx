import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";

import App from "./components/app";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ChakraProvider>
        <CSSReset />
        <App />
      </ChakraProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
