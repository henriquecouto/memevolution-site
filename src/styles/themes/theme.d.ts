import "styled-components";
import { CSSObject } from "styled-components";

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
    typography: {
      h1: CSSObject;
      h2: CSSObject;
      subtitle: CSSObject;
      body: CSSObject;
    };
  }
}
