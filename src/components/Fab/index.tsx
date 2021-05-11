import { HTMLMotionProps } from "framer-motion";
import { FC } from "react";
import { useTheme } from "styled-components";

import * as S from "./Fab.styles";
import { FabVariant } from "./Fab.types";

interface FabProps {
  variant?: FabVariant;
}

const Fab: FC<HTMLMotionProps<"button"> & FabProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  const theme = useTheme();
  return (
    <S.FabWrapper
      whileHover={S.hoverStyle(theme, variant)}
      variant={variant}
      {...props}
    >
      {children}
    </S.FabWrapper>
  );
};

export default Fab;
