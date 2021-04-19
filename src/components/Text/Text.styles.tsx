import styled from "styled-components";
import parserPropName from "../../utils/parserPropName";
import { TextColorOptions, TextTypeOptions } from "./Text.types";

interface ITextWrapper {
  type: TextTypeOptions;
  color: TextColorOptions;
}

export const TextWrapper = styled.span<ITextWrapper>`
  ${(props) => props.theme.typography[props.type]};
  color: ${(props) => parserPropName(props.theme.palette, props.color)};
`;
