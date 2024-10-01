"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FullImageContainer from "./FullImageContainer";

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const RadioButtonsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  gap: 10px;
`;

const RadioButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: ${({ isActive }) => (isActive ? "white" : "transparent")};
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ isActive }) =>
      isActive ? "white" : "rgba(255, 255, 255, 0.5)"};
  }
`;

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [items.length, handleButtonClick]);

  return (
    <CarouselWrapper>
      {items.map((item, index) =>
        index === activeIndex ? (
          <FullImageContainer
            key={index}
            image={item.image}
            headline={item.headline}
            subHead={item.subHead}
            href={item.href}
          />
        ) : null
      )}

      <RadioButtonsContainer>
        {items.map((_, index) => (
          <RadioButton
            key={index}
            isActive={index === activeIndex}
            onClick={() => handleButtonClick(index)}
          />
        ))}
      </RadioButtonsContainer>
    </CarouselWrapper>
  );
};

export default Carousel;
