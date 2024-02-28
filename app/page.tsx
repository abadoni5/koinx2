"use client";
import React, { useState, useEffect } from "react";
import {
  PricesDisplay,
  TrendingCoins,
  NavBar,
  Carousel,
  GetStarted,
  CarouselSec,
} from "./components";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <NavBar />
      {windowWidth >= 550 ? (
        <div className="flex flex-col">
          <div className="flex flex-row w-full pl-8 pr-8">
            <div className="flex-grow">
              <PricesDisplay />
            </div>
            <div className="flex flex-col w-[25%] hidden lg:flex">
              <GetStarted />
              <TrendingCoins />
            </div>
          </div>

          <div>
            <CarouselSec />
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="ml-4">
            <PricesDisplay />
          </div>
          <div className="mb-20">
            <CarouselSec />
          </div>
          <div className="flex flex-col w-full">
            <div className="mx-4 mb-4">
              <GetStarted />
            </div>
            <TrendingCoins />
          </div>
        </div>
      )}
    </>
  );
}
