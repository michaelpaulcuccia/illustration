import React from "react";
import styled from "styled-components";

const StyledContentWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
  background: #ffffff;
`;

export default function ContentWrapper({ children }) {
  return <StyledContentWrapper>{children}</StyledContentWrapper>;
}
