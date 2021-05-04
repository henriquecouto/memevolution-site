import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(10px);
  --webkit-backdrop-filter: blur(10px);
  padding: ${(props) => props.theme.spacing.large}px;
  & > div {
    width: 100% !important;
    height: 100%;
    margin: 0;
  }
`;

export const FabWrapper = styled.div`
  position: absolute;
  right: ${(props) => props.theme.spacing.small}px;
  top: ${(props) => props.theme.spacing.small}px;
`;
