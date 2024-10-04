"use client";
import React from "react";
import Image from "next/legacy/image";
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
  align-items: flex-start;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  pointer-events: none;
  z-index: 1;

  h1 {
    font-size: 4rem;
    margin: 0 0 0 40px;
    letter-spacing: 1.25px;
  }

  h2 {
    font-size: 2.25rem;
    margin: 10px 0 0 40px;
    letter-spacing: 0.75px;
  }

  button {
    margin: 20px 0 0 40px;
    padding: 15px 25px;
    font-size: 1.2rem;
    background-color: #007aff;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    pointer-events: auto;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);

    &:hover {
      background-color: #005bb5;
    }
  }
`;

const FullImageContainer = ({ image, headline, subHead, href }) => (
  <ImageContainerWrapper>
    <Image
      src={image}
      alt={headline}
      layout="fill"
      objectFit="cover"
      priority
      style={{ borderRadius: "12px" }}
    />
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
