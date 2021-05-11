import { FC } from "react";
import Text from "../../components/Text";
import Meme from "../../entities/Meme";
import MemeItem from "./MemeItem";

import * as S from "./Timeline.styles";

interface MemeModalContentProps {
  data: Meme;
  listSame: Array<Meme>;
  handleModal: (status: boolean, meme?: Meme) => () => void;
}

const MemeModalContent: FC<MemeModalContentProps> = ({
  data,
  handleModal,
  listSame,
}) => {
  const renderMeme = {
    image: <img src={data.address} alt={data.description} />,
    video: <iframe src={data.address} title={data.description} />,
  };

  return (
    <S.ModalWrapper>
      {renderMeme[data.type]}
      <S.ModalWrapperContent>
        <Text type="h2">{data.description || ""}</Text>
        <Text color="primary-alternative">{data.year.toString()}</Text>
        <S.MemesList>
          {listSame.map((item, index) => (
            <MemeItem
              key={index}
              memeInfo={item}
              onClick={handleModal(true, item)}
            />
          ))}
        </S.MemesList>
      </S.ModalWrapperContent>
    </S.ModalWrapper>
  );
};

export default MemeModalContent;
