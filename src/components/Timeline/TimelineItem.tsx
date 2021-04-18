import {
  cloneElement,
  FC,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTheme } from "styled-components";

import * as S from "./Timeline.styles";
import { ITimelineItem } from "./Timeline.types";

interface TimelineItemProps {
  item: ITimelineItem;
}

const TimelineItem: FC<TimelineItemProps> = ({ item }) => {
  const theme = useTheme();

  const [onHover, setOnHover] = useState(false);
  const [contentHeight, setContentHeight] = useState<number | undefined>(
    undefined
  );
  const contentRef = useRef<HTMLElement>(null);

  const bulletActivatedStyle = onHover ? S.bulletActivatedStyle(theme) : {};
  const lineActivatedStyle = onHover ? S.lineActivatedStyle(theme) : {};
  const contentActivatedStyle = onHover ? S.contentActivatedStyle(theme) : {};

  useEffect(() => {
    setContentHeight(contentRef.current?.clientHeight);
  }, [contentRef.current?.clientHeight]);

  return (
    <S.Item
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <S.ItemHeaderWrapper>
        <S.Bullet
          animate={bulletActivatedStyle}
          transition={{ duration: 0.2 }}
        />
        <S.Title>{item.title}</S.Title>
      </S.ItemHeaderWrapper>
      <S.ContentWrapper>
        <S.Line
          height={contentHeight}
          animate={lineActivatedStyle}
          transition={{ delay: 0.2 }}
        />
        <S.Content
          animate={contentActivatedStyle}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {cloneElement(item.content, { ref: contentRef })}
        </S.Content>
      </S.ContentWrapper>
    </S.Item>
  );
};

export default TimelineItem;
