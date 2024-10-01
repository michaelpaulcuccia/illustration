"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const ImageContainerWrapper = styled.div`
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  pointer-events: none;
  z-index: 1;

  h1 {
    font-size: 3rem;
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
    margin: 10px 0;
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    pointer-events: auto;

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }
`;

const FullImageContainer = ({ image, headline, subHead, href }) => (
  <ImageContainerWrapper>
    <Image src={image} alt={headline} layout="fill" objectFit="cover" />
    <TextOverlay>
      {headline && <h1>{headline}</h1>}
      {subHead && <h2>{subHead}</h2>}
      {href && (
        <Link href={href} passHref>
          <button>Learn More</button>
        </Link>
      )}
    </TextOverlay>
  </ImageContainerWrapper>
);

export default FullImageContainer;
