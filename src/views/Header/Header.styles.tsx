import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.spacing.default}px;
`;

export const TitleWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Scroll = styled(motion.img)`
  position: absolute;
  height: 200px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
