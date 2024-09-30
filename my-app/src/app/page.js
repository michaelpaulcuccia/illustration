"use client";
import React from "react";
import Image from "next/image";
import FullBleedSection from "../../components/FullBleedSection";
import ContentWrapper from "../../components/ContentWrapper";
import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 3rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  pointer-events: none;
  z-index: 1;
`;

export default function Layout() {
  return (
    <>
      <FullBleedSection bgColor="blueBlend">
        <ContentWrapper>
          <ImageContainer>
            <Image
              src="/images/servers.jpg"
              alt="Servers"
              layout="fill"
              objectFit="cover"
            />
            <TextOverlay>This is an Overlay Text</TextOverlay>
          </ImageContainer>
        </ContentWrapper>
      </FullBleedSection>

      <FullBleedSection>
        <ContentWrapper>White</ContentWrapper>
      </FullBleedSection>

      <FullBleedSection bgColor="gray">
        <ContentWrapper>Gray</ContentWrapper>
      </FullBleedSection>
    </>
  );
}
