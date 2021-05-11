import styled, { DefaultTheme } from "styled-components";
import { transparentize } from "polished";
import { motion, TargetAndTransition } from "framer-motion";
import { FabVariant } from "./Fab.types";

export const hoverStyle = (
  theme: DefaultTheme,
  variant: FabVariant
): TargetAndTransition => ({
  scale: 1.1,
  backgroundColor: theme.palette[variant].main,
  boxShadow: `0px 0px 10px ${theme.palette.background.alternative}`,
  color: theme.palette.white,
});

export const FabWrapper = styled(motion.button)<{ variant: FabVariant }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  border: none;
  background-color: ${(props) =>
    transparentize(0.6, props.theme.palette[props.variant].main)};
  box-shadow: 0 0 10px 1px
    ${(props) =>
      transparentize(0.4, props.theme.palette.background.alternative)};
  color: ${(props) => transparentize(0.4, props.theme.palette.white)};
  font-size: ${(props) => props.theme.typography.body.fontSize};
`;
