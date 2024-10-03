"use client";
import React from "react";
import FullBleedSection from "../../components/FullBleedSection";
import Carousel from "../../components/Carousel";

const items = [
  {
    image: "/images/abstract.jpg",
    headline: "This is an Overlay Text",
    subHead: "With a subheadline text",
    href: "/newPage",
  },
  {
    image: "/images/blueblocks.jpg",
    headline: "Another Overlay Text",
    subHead: "With some other text",
    href: "/otherPage",
  },
  {
    image: "/images/particle.jpg",
    headline: "Chip Overlay Text",
    subHead: "A new subheadline text",
    href: "/chipPage",
  },
];

export default function Layout() {
  return (
    <>
      <FullBleedSection bgcolor="coal">
        <Carousel items={items} />
      </FullBleedSection>

      <FullBleedSection>White</FullBleedSection>

      <FullBleedSection bgcolor="gray">Gray</FullBleedSection>
      <FullBleedSection bgcolor="blueBlend">Blue Blend</FullBleedSection>
    </>
  );
}
