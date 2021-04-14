import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    palette: {
      primary: { main: string; alternative: string };
      secondary: { main: string; alternative: string };
      background: { main: string; alternative: string };
      white: string;
    };
    radius: { small: number; default: number; large: number };
    spacing: { small: number; default: number; large: number };
  }
}
