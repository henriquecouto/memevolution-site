import { transparentize } from "polished";
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
  
  body {
    height: 130vh;
    background-color: ${(props) => props.theme.palette.background.main};
    ::-webkit-scrollbar {
      display: none;
    }
  }
  
  *::-webkit-scrollbar {
    width: ${(props) => props.theme.spacing.small}px;
    height: ${(props) => props.theme.spacing.small}px;
  }

  *::-webkit-scrollbar-track {
    border-radius: ${(props) => props.theme.spacing.small}px;
    background: #0000;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: ${(props) => props.theme.spacing.small}px;
    background: ${(props) =>
      transparentize(0.6, props.theme.palette.primary.main)};
  }

  *::-webkit-scrollbar-thumb:hover {
    background: ${(props) =>
      transparentize(0, props.theme.palette.primary.main)};
  }
`;

export default GlobalStyle;
