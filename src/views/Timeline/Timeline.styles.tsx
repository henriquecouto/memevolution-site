import { motion } from "framer-motion";
import styled from "styled-components";

export const TimelineWrapper = styled(motion.main)`
  position: absolute;
  width: 90%;
  height: 90%;
  max-height: 80vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ImageContent = styled.img`
  min-width: 280px;
  height: 280px;
`;

export const TagWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const CardWrapper = styled.div`
  cursor: pointer;
`;

export const ModalWrapper = styled.div`
  display: flex;
  height: 100%;

  & > * {
    flex: 1;
    object-fit: contain;
  }
`;

export const ModalWrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing.large}px;
`;

export const MemesList = styled.div`
  padding: ${(props) => props.theme.spacing.small}px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  overflow-y: auto;
  overflow-x: hidden;
`;
