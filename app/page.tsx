"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Import components dynamically
const PricesDisplay = dynamic(() => import("./components/PricesDisplay"));
const TrendingCoins = dynamic(() => import("./components/TrendingCoins"));
const NavBar = dynamic(() => import("./components/NavBar"));
const GetStarted = dynamic(() => import("./components/GetStarted"));
const CarouselSec = dynamic(() => import("./components/CarouselSec"));

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Initial window width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isClient && <NavBar />}
      {windowWidth >= 550 ? (
        <div className="flex flex-col">
          <div className="flex flex-row w-full pl-8 pr-8">
            <div className="flex-grow">{isClient && <PricesDisplay />}</div>
            <div className="flex flex-col w-[25%] hidden lg:flex">
              {isClient && <GetStarted />}
              {isClient && <TrendingCoins />}
            </div>
          </div>

          <div>{isClient && <CarouselSec />}</div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="ml-4">{isClient && <PricesDisplay />}</div>
          <div className="mb-20">{isClient && <CarouselSec />}</div>
          <div className="flex flex-col w-full">
            <div className="mx-4 mb-4">{isClient && <GetStarted />}</div>
            {isClient && <TrendingCoins />}
          </div>
        </div>
      )}
    </>
  );
}
