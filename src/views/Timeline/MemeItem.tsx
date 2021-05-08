import { forwardRef, HTMLAttributes } from "react";
import Card from "../../components/Card";
import Tag from "../../components/Tag";
import Meme from "../../entities/Meme";

import * as S from "./Timeline.styles";

interface MemeItemProps {
  memeInfo: Meme;
}

const MemeItem = forwardRef<
  HTMLDivElement,
  MemeItemProps & HTMLAttributes<HTMLDivElement>
>(({ memeInfo, ...props }, ref) => (
  <S.CardWrapper {...props} ref={ref}>
    <Card>
      <S.ImageContent src={memeInfo.address} />
      <S.TagWrapper>
        <Tag color={memeInfo.category.color}>{memeInfo.category.name}</Tag>
      </S.TagWrapper>
    </Card>
  </S.CardWrapper>
));

export default MemeItem;
