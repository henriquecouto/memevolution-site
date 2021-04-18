import styled, { DefaultTheme } from "styled-components";
import { motion, TargetAndTransition } from "framer-motion";

const lineContentIncrement = 50;

export const bulletActivatedStyle = (
  theme: DefaultTheme
): TargetAndTransition => ({
  scale: 1.3,
  backgroundColor: theme.palette.primary.main,
  boxShadow: `0px 0px 15px ${theme.palette.primary.alternative}`,
});

export const lineActivatedStyle = (
  theme: DefaultTheme
): TargetAndTransition => ({
  backgroundColor: theme.palette.primary.main,
});

export const contentActivatedStyle = (
  theme: DefaultTheme
): TargetAndTransition => ({
  scale: 1.1,
});

export const Bullet = styled(motion.div)`
  margin: ${(props) => props.theme.spacing.small}px;
  width: ${(props) => props.theme.spacing.default}px;
  height: ${(props) => props.theme.spacing.default}px;
  background-color: ${(props) => props.theme.palette.white};
  border-radius: ${(props) => props.theme.radius.default}px;
`;

export const Line = styled(motion.div)<{ height?: number }>`
  width: ${(props) => props.theme.spacing.small / 3}px;
  background-color: ${(props) => props.theme.palette.white};
  margin-right: ${(props) => props.theme.spacing.default}px;
  margin-left: ${(props) => props.theme.spacing.default}px;
  min-height: 200px;
  height: ${(props) => (props.height || 0) + lineContentIncrement}px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const Content = styled(motion.div)`
  position: absolute;
  left: ${(props) => props.theme.spacing.large}px;
  top: ${lineContentIncrement / 2}px;
  bottom: ${lineContentIncrement / 2}px;

  & > :first-child {
    position: inherit;
    max-width: 100vw;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Title = styled.span`
  ${(props) => props.theme.typography.h2};
  color: ${(props) => props.theme.palette.white};
  position: absolute;
  left: ${(props) => props.theme.spacing.large}px;
  width: 100%;
  white-space: nowrap;
`;
