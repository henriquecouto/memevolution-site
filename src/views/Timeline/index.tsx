import { useTransform, useViewportScroll } from "framer-motion";
import Card from "../../components/Card";
import Carousel from "../../components/Carousel";
import Tag from "../../components/Tag";
import Timeline from "../../components/Timeline";

import * as S from "./Timeline.styles";

const renderMockedCarouselItem = () => (
  <div>
    <Card>
      <S.ImageContent src="https://cbncuritiba.b-cdn.net/cbn/wp-content/uploads/2019/05/meme.png" />
      <S.TagWrapper>
        <Tag color="#212121">Teste</Tag>
      </S.TagWrapper>
    </Card>
  </div>
);

const TimelineView = () => {
  const { scrollYProgress } = useViewportScroll();

  const translateY = useTransform(
    scrollYProgress,
    [0.5, 1],
    [window.outerHeight, 0]
  );

  return (
    <S.TimelineWrapper style={{ translateY }}>
      <Timeline
        items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => ({
          title: `ANY TITLE ${v}`,
          content: (
            <Carousel
              itemsToRender={4}
              items={[
                renderMockedCarouselItem(),
                renderMockedCarouselItem(),
                renderMockedCarouselItem(),
                renderMockedCarouselItem(),
                renderMockedCarouselItem(),
                renderMockedCarouselItem(),
              ]}
            />
          ),
        }))}
      />
    </S.TimelineWrapper>
  );
};

export default TimelineView;
