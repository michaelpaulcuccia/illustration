"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Root = styled.div`
  background: black;
  color: white;
  min-height: 200vh;
`;

const FullScreenImageContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export default function Page() {
  return (
    <Root>
      Hello World
      <FullScreenImageContainer>
        <StyledImage src="/images/servers.jpg" layout="fill" alt="Servers" />
      </FullScreenImageContainer>
      <div>
        <p>Scroll down to see more content</p>
        <p>This is content below the image</p>
      </div>
    </Root>
  );
}
