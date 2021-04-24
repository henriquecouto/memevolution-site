import styled from "styled-components";

export const TagWrapper = styled.div<{ color: string }>`
  height: 50px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.color};
  width: min-content;
  padding-left: ${(props) => props.theme.spacing.default}px;
  padding-right: ${(props) => props.theme.spacing.default}px;
  border-radius: ${(props) => props.theme.radius.small}px;
`;
