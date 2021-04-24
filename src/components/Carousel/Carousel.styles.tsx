import { motion } from "framer-motion";
import styled from "styled-components";

export const ContentWrapper = styled.div<{ width: number }>`
  display: flex;
  height: 300px;
  width: ${(props) => props.width}px;
  overflow: hidden;
  scroll-behavior: smooth;
`;

export const CarouselWrapper = styled.div`
  position: relative;
`;

export const ArrowLeftWrapper = styled(motion.div)`
  position: absolute;
  top: 50%;
  padding: ${(props) => props.theme.spacing.small}px;
`;

export const ArrowRightWrapper = styled(ArrowLeftWrapper)`
  right: 0;
`;
