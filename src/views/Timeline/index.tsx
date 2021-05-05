import { useTransform, useViewportScroll } from "framer-motion";
import { useState } from "react";
import Carousel from "../../components/Carousel";
import Timeline from "../../components/Timeline";
import { memesMock } from "../../mocks/memes";
import Meme from "../../entities/Meme";

import * as S from "./Timeline.styles";
import Modal from "../../components/Modal";
import MemeItem from "./MemeItem";
import MemeModalContent from "./MemeModalContent";

const TimelineView = () => {
  const { scrollYProgress } = useViewportScroll();

  const translateY = useTransform(
    scrollYProgress,
    [0.5, 1],
    [window.outerHeight, 0]
  );

  const [modalState, setModalState] = useState<{
    open: boolean;
    meme: Meme | undefined;
  }>({ open: false, meme: undefined });

  const handleModal = (status: boolean, meme?: Meme) => () => {
    setModalState((old) => ({ ...old, open: status, meme }));
  };

  return (
    <S.TimelineWrapper style={{ translateY }}>
      <Modal open={modalState.open} onClose={handleModal(false)}>
        {modalState.meme && (
          <MemeModalContent data={modalState.meme} handleModal={handleModal} />
        )}
      </Modal>
      <Timeline
        items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => ({
          title: `ANY TITLE ${v}`,
          content: (
            <Carousel
              items={Array.from(Array(10).keys())
                .map(() => memesMock)
                .map((item, index) => (
                  <MemeItem
                    key={index}
                    memeInfo={item}
                    onClick={handleModal(true, item)}
                  />
                ))}
            />
          ),
        }))}
      />
    </S.TimelineWrapper>
  );
};

export default TimelineView;
