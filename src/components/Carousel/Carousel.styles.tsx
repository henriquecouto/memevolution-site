import styled from "styled-components";

export const ContentWrapper = styled.div<{ width: number }>`
  display: flex;
  height: 300px;
  width: ${(props) => props.width}px;
  overflow: hidden;
  scroll-behavior: smooth;
`;
