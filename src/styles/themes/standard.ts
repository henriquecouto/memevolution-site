import { DefaultTheme } from "styled-components";

const standard: DefaultTheme = {
  title: "standard",
  palette: {
    primary: { main: "#FF5722", alternative: "#FD7014" },
    secondary: { main: "#411E8F", alternative: "#310A5D" },
    background: { main: "#393E46", alternative: "#222831" },
    white: "#EEEEEE",
  },
  radius: { small: 15, default: 30, large: 50 },
  spacing: { small: 10, default: 30, large: 70 },
  typography: {
    h1: { fontSize: "100px", fontFamily: "Russo One" },
    h2: { fontSize: "34px", fontFamily: "Russo One" },
    subtitle: { fontSize: "24px", fontFamily: "Roboto", fontWeight: "normal" },
    body: { fontSize: "24px", fontFamily: "Russo One" },
  },
};

export default standard;
