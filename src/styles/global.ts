import { createGlobalStyle } from "styled-components";
import "./fonts/Roboto/stylesheet.css";
import "./fonts/RussoOne/stylesheet.css";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
  }
`;

export default GlobalStyle;
