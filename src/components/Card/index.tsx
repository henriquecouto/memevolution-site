import { FC } from "react";
import * as S from "./Card.styles";

const Card: FC = ({ children }) => {
  return <S.CardWrapper>{children}</S.CardWrapper>;
};

export default Card;
