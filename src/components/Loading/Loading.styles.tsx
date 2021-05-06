import { motion } from "framer-motion";
import styled from "styled-components";

export const LoadingWrapper = styled(motion.div)`
  background-color: ${(props) => props.theme.palette.background.main};
  display: flex;
  align-items: center;
  margin: auto;
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
`;

export const LoadingGif = styled.img``;

export const LoadingTextWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.spacing.default}px;
`;
