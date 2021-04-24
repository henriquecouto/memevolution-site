import { FC } from "react";
import { useTheme } from "styled-components";
import Text from "../Text";
import * as S from "./Tag.styles";

interface TagProps {
  children: string;
  color?: string;
}

const Tag: FC<TagProps> = ({ children, color }) => {
  const theme = useTheme();

  return (
    <S.TagWrapper color={color || theme.palette.secondary.main}>
      <Text>{children.toUpperCase()}</Text>
    </S.TagWrapper>
  );
};

export default Tag;
