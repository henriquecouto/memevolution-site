import { useTransform, useViewportScroll } from "framer-motion";
import { useState } from "react";
import Carousel from "../../components/Carousel";
import Timeline from "../../components/Timeline";
import Meme from "../../entities/Meme";

import * as S from "./Timeline.styles";
import Modal from "../../components/Modal";
import MemeItem from "./MemeItem";
import MemeModalContent from "./MemeModalContent";
import { useTimeline } from "../../stores/Timeline";

const TimelineView = () => {
  const { years, loadByCategory } = useTimeline();
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
          <MemeModalContent
            data={modalState.meme}
            handleModal={handleModal}
            listSame={loadByCategory(modalState.meme?.category.id || "")}
          />
        )}
      </Modal>
      <Timeline
        items={years.map(({ name, values }) => ({
          title: name,
          content: (
            <Carousel
              items={
                values?.map((item, index) => (
                  <MemeItem
                    key={index}
                    memeInfo={{
                      ...item,
                      address: item.address,
                    }}
                    onClick={handleModal(true, item)}
                  />
                )) || []
              }
            />
          ),
        }))}
      />
    </S.TimelineWrapper>
  );
};

export default TimelineView;
