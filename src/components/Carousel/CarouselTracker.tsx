import { forwardRef, ReactElement } from "react";
import TrackVisibility from "react-on-screen";
import CarouselComponent from "./Carousel";

interface CarouselProps {
  items: Array<ReactElement>;
  itemsToRender?: number;
}

const Carousel = forwardRef<HTMLDivElement, CarouselProps>((props, ref) => (
  <TrackVisibility offset={200}>
    {({ isVisible }) => (
      <CarouselComponent isVisible={isVisible} {...props} ref={ref} />
    )}
  </TrackVisibility>
));

export default Carousel;
