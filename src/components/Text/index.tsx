import { FC } from "react";
import * as S from "./Text.styles";
import { TextColorOptions, TextTypeOptions } from "./Text.types";

interface TextProps {
  type?: TextTypeOptions;
  color?: TextColorOptions;
  children: string;
}

const Text: FC<TextProps> = ({ color = "white", type = "body", children }) => {
  return (
    <S.TextWrapper type={type} color={color}>
      {children}
    </S.TextWrapper>
  );
};

export default Text;
