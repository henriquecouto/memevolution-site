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
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Fab from "../Fab";

import * as S from "./Carousel.styles";

interface CarouselComponentProps {
  items: Array<ReactElement>;
  itemsToRender?: number;
  isVisible: boolean;
}

const CarouselComponent = forwardRef<HTMLDivElement, CarouselComponentProps>(
  ({ items, itemsToRender = 3, isVisible }, ref) => {
    const itemRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [itemWidth, setItemWidth] = useState(0);
    const [contentWidth, setContentWidth] = useState(0);
    const [actualPosition, setActualPosition] = useState(0);
    const [enabledArrows, setEnabledArrows] = useState(false);

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
      scrollToNext,
      isVisible,
    ]);

    const enableArrows = () => setEnabledArrows(true);
    const disableArrows = () => setEnabledArrows(false);

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
      const interval = setInterval(
        () => isVisible && scrollToNextCallback(),
        random
      );
      return () => clearInterval(interval);
    }, [scrollToNextCallback, isVisible]);

    return (
      <S.CarouselWrapper
        onMouseEnter={enableArrows}
        onMouseLeave={disableArrows}
        ref={ref}
      >
        {JSON.stringify({ isVisible })}
        <S.ContentWrapper ref={carouselRef} width={contentWidth}>
          {Children.map(items, (item) => cloneElement(item, { ref: itemRef }))}
        </S.ContentWrapper>
        <S.ArrowLeftWrapper
          animate={
            enabledArrows ? { scale: 1, translateY: "-50%" } : { scale: 0 }
          }
          transition={{ delay: 0.5 }}
        >
          <Fab onClick={scrollToPrevious} variant="secondary">
            <FiChevronLeft />
          </Fab>
        </S.ArrowLeftWrapper>
        <S.ArrowRightWrapper
          animate={
            enabledArrows ? { scale: 1, translateY: "-50%" } : { scale: 0 }
          }
          transition={{ delay: 0.5 }}
        >
          <Fab onClick={scrollToNext} variant="secondary">
            <FiChevronRight />
          </Fab>
        </S.ArrowRightWrapper>
      </S.CarouselWrapper>
    );
  }
);

export default CarouselComponent;
