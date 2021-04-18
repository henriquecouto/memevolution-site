import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import standard from "./styles/themes/standard";
import { StrictMode } from "react";

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={standard}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);
