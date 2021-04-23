import {
  Children,
  cloneElement,
  forwardRef,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import * as S from "./Carousel.styles";

interface CarouselProps {
  items: Array<ReactElement>;
  itemsToRender?: number;
}

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  ({ items, itemsToRender = 3 }, ref) => {
    const itemRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [itemWidth, setItemWidth] = useState(0);
    const [contentWidth, setContentWidth] = useState(0);
    const [actualPosition, setActualPosition] = useState(0);

    const scrollToLast = () => {
      const newActualPosition = itemWidth * (items.length - itemsToRender);
      carouselRef.current?.scrollTo({ left: newActualPosition });
      setActualPosition(newActualPosition);
    };

    const scrollToFirst = () => {
      const newActualPosition = 0;
      carouselRef.current?.scrollTo({ left: newActualPosition });
      setActualPosition(newActualPosition);
    };

    const scrollToNext = () => {
      const newActualPosition = actualPosition + itemWidth;
      if (newActualPosition > itemWidth * (items.length - itemsToRender)) {
        scrollToFirst();
        return;
      }
      carouselRef.current?.scrollTo({ left: newActualPosition });
      setActualPosition(newActualPosition);
    };

    const scrollToPrevious = () => {
      const newActualPosition = actualPosition - itemWidth;
      if (newActualPosition < 0) {
        scrollToLast();
        return;
      }
      carouselRef.current?.scrollTo({ left: newActualPosition });
      setActualPosition(newActualPosition);
    };

    const scrollToNextCallback = useCallback(scrollToNext, [
      actualPosition,
      itemWidth,
      itemsToRender,
      items.length,
      scrollToNext,
    ]);

    useEffect(() => {
      if (itemRef.current?.clientWidth && !contentWidth) {
        setItemWidth(itemRef.current?.clientWidth);
        setContentWidth(itemRef.current?.clientWidth * itemsToRender);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemRef.current?.clientWidth, itemsToRender]);

    useEffect(() => {
      const max = 15000,
        min = 8000,
        random = Math.floor(Math.random() * (max - min + 1) + min);
      const interval = setInterval(scrollToNextCallback, random);
      return () => clearInterval(interval);
    }, [scrollToNextCallback]);

    return (
      <div ref={ref}>
        <S.ContentWrapper ref={carouselRef} width={contentWidth}>
          {Children.map(items, (item) => cloneElement(item, { ref: itemRef }))}
        </S.ContentWrapper>
        <button onClick={scrollToPrevious}>previous</button>
        <button onClick={scrollToNext}>next</button>
      </div>
    );
  }
);

export default Carousel;
