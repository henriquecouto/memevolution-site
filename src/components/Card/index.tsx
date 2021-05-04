import { FC } from "react";
import * as S from "./Card.styles";

interface CardProps {
  disableMotion?: boolean;
}

const Card: FC<CardProps> = ({ children, disableMotion = false }) => {
  return (
    <S.CardWrapper whileHover={disableMotion ? {} : { scale: 1.1 }}>
      {children}
    </S.CardWrapper>
  );
};

export default Card;
