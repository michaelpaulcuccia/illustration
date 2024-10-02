import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

const StyledFullBleedSection = styled.div`
  width: 100%;
  padding: 20px 0;
  background: ${({ bgcolor }) =>
    bgcolor === "gray"
      ? COLORS.gray
      : bgcolor === "blueBlend"
      ? COLORS.blueBlend
      : COLORS.white};
`;

const ContentWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  background: ${({ bgcolor }) =>
    bgcolor === "gray"
      ? COLORS.gray
      : bgcolor === "blueBlend"
      ? COLORS.blueBlend
      : COLORS.white};
`;

const TextContainer = styled.div`
  color: ${({ bgcolor }) =>
    bgcolor === "gray" || bgcolor === "blueBlend"
      ? COLORS.white
      : COLORS.black};
`;

export default function FullBleedSection({ bgcolor = "white", children }) {
  return (
    <StyledFullBleedSection bgcolor={bgcolor}>
      <ContentWrapper bgcolor={bgcolor}>
        <TextContainer bgcolor={bgcolor}>{children}</TextContainer>
      </ContentWrapper>
    </StyledFullBleedSection>
  );
}
