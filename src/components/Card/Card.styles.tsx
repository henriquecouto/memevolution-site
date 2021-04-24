import styled from "styled-components";
import { motion } from "framer-motion";

export const CardWrapper = styled(motion.div)`
  margin: ${(props) => props.theme.spacing.small}px;
  width: max-content;
  background-color: ${(props) => props.theme.palette.background.alternative};
  border-radius: ${(props) => props.theme.radius.small}px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
