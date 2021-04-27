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
