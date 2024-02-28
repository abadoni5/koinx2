"use client"
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Import components dynamically
const PricesDisplay = dynamic(() =>
  import("../components/PricesDisplay").then((mod) => mod.default)
);

// Import other components
const TrendingCoins = dynamic(() =>
  import("../components/TrendingCoins").then((mod) => mod.default)
);
const NavBar = dynamic(() =>
  import("../components/NavBar").then((mod) => mod.default)
);
const GetStarted = dynamic(() =>
  import("../components/GetStarted").then((mod) => mod.default)
);
const CarouselSec = dynamic(() =>
  import("../components/CarouselSec").then((mod) => mod.default)
);

export default function Home({ params }: { params: any }) {
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
            <div className="flex-grow">
              {isClient && <PricesDisplay token={params.token} />}
            </div>
            <div className="flex flex-col w-[25%] hidden lg:flex">
              {isClient && <GetStarted />}
              {isClient && <TrendingCoins />}
            </div>
          </div>
          <div>{isClient && <CarouselSec />}</div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="ml-4">
            {isClient && <PricesDisplay token={params.token} />}
          </div>
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
