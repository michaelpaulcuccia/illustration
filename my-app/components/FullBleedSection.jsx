import React from "react";
import styled from "styled-components";

const COLORS = {
  default: "#ffffff",
  gray: "#264644",
  blueBlend: "linear-gradient(90deg, #433274 0, #433274 50%, #045da3 100%)",
};

const StyledFullBleedSection = styled.div`
  width: 100%;
  padding: 20px 0;
  background: ${({ bgColor }) =>
    bgColor === "gray"
      ? COLORS.gray
      : bgColor === "blueBlend"
      ? COLORS.blueBlend
      : COLORS.default};
`;

export default function FullBleedSection({ bgColor = "default", children }) {
  return (
    <StyledFullBleedSection bgColor={bgColor}>
      {children}
    </StyledFullBleedSection>
  );
}
