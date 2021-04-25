import { motion } from "framer-motion";
import styled from "styled-components";
import background from "../../assets/images/background.png";

export const BackgroundWrapper = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100vh;
`;

export const Content = styled(motion.div)`
  margin: auto;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: url(${background});
  overflow: hidden;
  & > div {
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    --webkit-backdrop-filter: blur(10px);
  }
`;
