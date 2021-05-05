import { motion, useTransform, useViewportScroll } from "framer-motion";
import { transparentize } from "polished";
import { FC, useEffect } from "react";
import { useTheme } from "styled-components";

import * as S from "./Background.styles";

const Background: FC = ({ children }) => {
  const theme = useTheme();
  const { scrollYProgress } = useViewportScroll();
  const padding = useTransform(
    scrollYProgress,
    [0, 1],
    [theme.spacing.large, 0]
  );

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 1],
    [theme.radius.large, 0]
  );

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    [
      transparentize(0.25, theme.palette.background.main),
      transparentize(0.1, theme.palette.background.main),
    ]
  );

  useEffect(() => {
    window.scroll({ top: 0 });
  }, []);

  return (
    <S.BackgroundWrapper style={{ padding }}>
      <S.Content style={{ borderRadius }}>
        <motion.div style={{ backgroundColor }}>{children}</motion.div>
      </S.Content>
    </S.BackgroundWrapper>
  );
};

export default Background;
