"use client";
import React from "react";
import styled from "styled-components";
import FullBleedSection from "../../components/FullBleedSection";
import ContentWrapper from "../../components/ContentWrapper";

// Styled components for the layout
const LayoutWrapper = styled.div`
  width: 100%;
`;

export default function Layout() {
  return (
    <LayoutWrapper>
      <FullBleedSection bgColor="blueBlend">
        <ContentWrapper>Blue</ContentWrapper>
      </FullBleedSection>

      <FullBleedSection>
        <ContentWrapper>White</ContentWrapper>
      </FullBleedSection>

      <FullBleedSection bgColor="gray">
        <ContentWrapper>Gray</ContentWrapper>
      </FullBleedSection>
    </LayoutWrapper>
  );
}
