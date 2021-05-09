import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import standard from "./styles/themes/standard";
import { StrictMode } from "react";
import FirebaseCategoryRepository from "./repositories/implementations/FirebaseCategoryRepository";

console.log(process.env)

const firebaseCategoryRepository = new FirebaseCategoryRepository();

(async () =>
console.log(await firebaseCategoryRepository.getAllCategories()))();

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={standard}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);
