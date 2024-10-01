import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

const StyledFullBleedSection = styled.div`
  width: 100%;
  padding: 20px 0;
  background: ${({ bgColor }) =>
    bgColor === "gray"
      ? COLORS.gray
      : bgColor === "blueBlend"
      ? COLORS.blueBlend
      : COLORS.white};
`;

const ContentWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  background: ${({ bgColor }) =>
    bgColor === "gray"
      ? COLORS.gray
      : bgColor === "blueBlend"
      ? COLORS.blueBlend
      : COLORS.white};
`;

const TextContainer = styled.div`
  color: ${({ bgColor }) =>
    bgColor === "gray" || bgColor === "blueBlend"
      ? COLORS.white
      : COLORS.black};
`;

export default function FullBleedSection({ bgColor = "white", children }) {
  return (
    <StyledFullBleedSection bgColor={bgColor}>
      <ContentWrapper bgColor={bgColor}>
        <TextContainer bgColor={bgColor}>{children}</TextContainer>
      </ContentWrapper>
    </StyledFullBleedSection>
  );
}
