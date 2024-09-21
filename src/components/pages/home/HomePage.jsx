"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Percent } from "@phosphor-icons/react";

// local
import { Image1, Image2, Image3, Image4 } from "../../../../public/image";
import { WelcomeCard, CardPromotion } from "@/components/container/Card";

const HomePage = () => {
  // set default di 1 atau halaman 1
  const [activeItem, setActiveItem] = useState(1);
  // menangani jika menu carousel di klik dan akan mengubah nilai activeItem
  const handleItemClick = (itemNumber) => {
    setActiveItem(itemNumber);
  };

  // kondisi jika carousel di swap
  const carouselRef = useRef(null);
  useEffect(() => {
    const carousel = carouselRef.current;
    // console.log(carousel);
    if (!carousel) return;

    const updateActiveItem = () => {
      const scrollPosition = carousel.scrollLeft;
      const itemWidth = carousel.offsetWidth;
      const newActiveItem = Math.round(scrollPosition / itemWidth) + 1;

      setActiveItem(newActiveItem);
    };

    carousel.addEventListener("scroll", updateActiveItem);
    return () => carousel.removeEventListener("scroll", updateActiveItem);
  }, []);

  return (
    <>
      {/* <!-- bisa ga --> */}
      <div className="relative">
        <div className="carousel w-full rounded-lg bg-color-dark" ref={carouselRef}>
          <div id="item1" className="carousel-item w-full">
            <Image src={Image3} alt="image1" width="auto" height="auto" className="w-full" />
            {/* <Image src="/image/sample.jpg" alt="image1" width="auto" height="auto" /> */}
          </div>
          <div id="item2" className="carousel-item w-full">
            <Image src={Image4} alt="image1" width="auto" height="auto" className="w-full" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <Image src={Image1} alt="image1" width="auto" height="auto" className="w-full" />
          </div>
          <div id="item4" className="carousel-item w-full">
            <Image src={Image2} alt="image1" width="auto" height="auto" className="w-full" />
          </div>
        </div>
        {/* menu carousel dan welcome card */}
        <div className="absolute bottom-0 left-10 right-10">
          <div className="flex w-full justify-center gap-2 py-2">
            {[1, 2, 3, 4].map((item) => (
              <a
                key={item}
                href={`#item${item}`}
                className={`rounded-full ${activeItem === item
                  ? "bg-color-secondary"
                  : "bg-color-primary"
                  } hover:bg-color-secondary w-4 h-4`}
                onClick={() => handleItemClick(item)}
              ></a>
            ))}
          </div>
          <WelcomeCard />
        </div>
      </div>
      <div className="mt-7 bg-black text-white p-5 flex items-center justify-center gap-2">
        <Percent size={32} weight="bold" />
        <div className="text-xl">
          TODAY'S <span className="font-bold">SPECIAL OFFER</span>
        </div>
      </div>
      {/* <div className="flex gap-2">
        <CardPromotion />
      </div> */}
      <div>
      
      </div>
    </>
  );
};

export default HomePage;
