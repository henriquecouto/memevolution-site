import { useTransform, useViewportScroll } from "framer-motion";
import Text from "../../components/Text";
import scroll from "../../assets/images/scroll.gif";

import * as S from "./Header.styles";

const Header = () => {
  const { scrollYProgress } = useViewportScroll();

  const scale = useTransform(scrollYProgress, [0, 0.5, 0.55], [1, 3, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  return (
    <S.HeaderWrapper>
      <S.TitleWrapper style={{ scale, opacity }}>
        <Text type="h1" color="primary-main">
          MEMEVOLUTION
        </Text>
        <Text>
          Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito
          paradis?
        </Text>
      </S.TitleWrapper>
      <S.Scroll src={scroll} style={{ opacity }} />
    </S.HeaderWrapper>
  );
};

export default Header;
