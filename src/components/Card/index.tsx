import { FC } from "react";
import * as S from "./Card.styles";

const Card: FC = ({ children }) => {
  return <S.CardWrapper whileHover={{ scale: 1.1 }}>{children}</S.CardWrapper>;
};

export default Card;
