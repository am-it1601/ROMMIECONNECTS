"use client";
import hero1 from "../../public/img1.png";
import hero2 from "../../public/img2.png";
import hero3 from "../../public/img-3.png";
import hero4 from "../../public/img-4.png";
import hero5 from "../../public/img-5.png";
import boat1 from "../../public/boat1.png";
import boat2 from "../../public/boat2.png";
import boat3 from "../../public/boat3.png";
import boat4 from "../../public/boat4.png";
import banner from "../../public/banner.png";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import {
  BadgePercent,
  ChevronLeft,
  ChevronRight,
  Gem,
  Heart,
  Lightbulb,
  MapPinned,
  ShieldCheck,
} from "lucide-react";
export function CustomButton() {
  const [activeButton, setActiveButton] = useState(null);

  const buttons = [
    { icon: "home", title: "Home" },
    { icon: "car", title: "Car" },
    { icon: "boat", title: "Boat" },
    { icon: "restaurant", title: "Restaurant" },
    { icon: "flight", title: "Flight" },
    { icon: "uber", title: "Uber Ride Sharing" },
    { icon: "lyft", title: "Lyft Ride Sharing" },
  ];

  const handleClick = (index: any) => {
    setActiveButton(index);
  };

  return (
    <div className="flex gap-8 items-center justify-between">
      {buttons.map((button, index) => (
        <button
          key={button.title}
          className={` text-white font-bold py-2 px-5 text-2xl rounded-full  ${
            activeButton === index ? "bg-primary" : ""
          }`}
          onClick={() => handleClick(index)}
        >
          <i className={`fas fa-${button.icon} mr-2`}></i>

          {button.title}
        </button>
      ))}
    </div>
  );
}

export function CustomSearchButton() {
  return (
    <div className="flex items-center justify-between gap-4 px-4 w-full ">
      <div className="flex gap-4">
        <div className=" border-r-2 border-gray-300">
          <input type="text" placeholder="select" className=" p-3 " />
        </div>
        <div className=" border-r-2 border-gray-300">
          <input type="text" placeholder="location" className=" p-3" />
        </div>
        <div className=" border-r-2 border-gray-300">
          <input type="date" placeholder="date" className=" p-3" />
        </div>
      </div>
      <div>
        <button className="text-white bg-primary font-medium py-2 px-5 text-2xl rounded-full ">
          search
        </button>
      </div>
    </div>
  );
}

// product card
export const ProductCard = ({ img }: any) => {
  return (
    <div>
      <Image
        src={img}
        alt="img"
        className="h-[300px] w-full rounded-lg overflow-hidden object-cover"
      />
      <div className="bg-white">
        <p>location</p>
        <a href="#">
          <h3 className="mt-0.5 text-xl text-gray-900 font-semibold">
            Roommate
          </h3>
        </a>
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          2 Bedrooms | 2 Bathrooms | 1 Garden
        </p>
      </div>
    </div>
  );
};
export function CustomHousingGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {[hero1, hero2, hero3, hero4].map((img, index) => {
        return <ProductCard key={index} img={img} />;
      })}
    </div>
  );
}
export function CustomBoat() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {[boat1, boat2, boat3, boat4].map((img, index) => {
        return <ProductCard key={index} img={img} />;
      })}
    </div>
  );
}

// Banner
export function CustomBanner({ img }: any) {
  return (
    <div className="relative">
      <Image
        src={img}
        alt="img"
        className="h-[320px] w-full rounded-lg overflow-hidden object-cover"
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-between px-6 max-sm:flex-col max-md:flex-col max-sm:p-4 max-sm:justify-around">
        <p className="text-white text-3xl max-sm:text-sm ">
          List your House on <br /> RoomiConnects and open <br /> your door to
          rental income
        </p>
        <button className="cursor-pointer inline-flex items-center rounded-full px-6 py-2 text-lg font-semibold text-white bg-primary max-sm:text-xs">
          List your House
        </button>
      </div>
    </div>
  );
}

export const GridTemplate = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 md:grid-rows-6 gap-x-5 gap-y-12 ">
      <div className="md:row-span-3">
        <Image
          src={hero1}
          alt="img"
          className="h-full w-full rounded-lg overflow-hidden object-cover "
        />
        <p className="text-center py-1">Roommates </p>
      </div>
      <div className="md:col-span-2  bg-white p-6 md:row-span-6 rounded-sm">
        <Image
          src={hero2}
          alt="img"
          className="h-full w-full object-cover overflow-hidden rounded-md"
        />
        <p className="text-center py-1 text-2xl font-semibold">
          Vacation Rentals{" "}
        </p>
      </div>
      <div className="md:row-span-3 md:col-start-4 md:row-start-1 rounded-sm">
        <Image
          src={hero3}
          alt="img"
          className="h-full w-full object-cover overflow-hidden rounded-md"
        />
        <p className="text-center py-1">Student Shared housing </p>
      </div>
      <div className="md:row-span-3 md:row-start-4 rounded-sm">
        <Image
          src={hero5}
          alt="img"
          className="h-full w-full object-cover overflow-hidden rounded-md"
        />
        <p className="text-center py-1">Military housing </p>
      </div>
      <div className="md:row-span-3 md:col-start-4 md:row-start-4 rounded-sm">
        <Image
          src={hero4}
          alt="img"
          className="h-full w-full object-cover overflow-hidden rounded-md"
        />
        <p className="text-center py-1">Corporate housing </p>
      </div>
    </div>
  );
};

export const ThreeCols = ({ img }: any) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-white p-6 h-[200px] rounded-md overflow-hidden">
          <div className="flex items-center justify-between  relative">
            <div className="flex flex-col gap-y-3">
              <span>
                <Heart color="#FF6522" fill="#FF6522" size={30} />
              </span>
              <p className="text-lg font-semibold">Comfortable</p>
            </div>
            <span className="text-gray-400 text-3xl font-semibold absolute right-0 top-0">
              01
            </span>
          </div>
          <p className=" text-gray-300 my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            varius pretium orci a aliquet.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-white p-6 h-[200px] rounded-md overflow-hidden">
          <div className="flex items-center justify-between relative">
            <div className="flex flex-col gap-y-3">
              <span>
                <ShieldCheck color="#FF6522" size={30} />
              </span>
              <p className="text-lg font-semibold">Extra security</p>
            </div>
            <span className="text-gray-400 text-3xl font-semibold right-0 top-0 absolute">
              02
            </span>
          </div>
          <p className=" text-gray-300 my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            varius pretium orci a aliquet.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-white p-6 h-[200px] rounded-md overflow-hidden">
          <div className="flex items-center justify-between relative">
            <div className="flex flex-col gap-y-3">
              <span>
                <Gem color="#FF6522" size={30} />
              </span>
              <p className="text-lg font-semibold">Luxury</p>
            </div>
            <span className="text-gray-400 text-3xl font-semibold right-0 top-0 absolute">
              03
            </span>
          </div>
          <p className=" text-gray-300 my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            varius pretium orci a aliquet.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-white p-6 h-[200px] rounded-md overflow-hidden">
          <div className="flex items-center justify-between relative">
            <div className="flex flex-col gap-y-3">
              <span>
                <BadgePercent color="#FF6522" size={30} />
              </span>
              <p className="text-lg font-semibold">Best price</p>
            </div>
            <span className="text-gray-400 text-3xl font-semibold right-0 top-0 absolute">
              04
            </span>
          </div>
          <p className=" text-gray-300 my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            varius pretium orci a aliquet.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-white p-6 h-[200px] rounded-md overflow-hidden">
          <div className="flex items-center justify-between relative">
            <div className="flex flex-col gap-y-3">
              <span>
                <MapPinned color="#FF6522" size={30} />
              </span>
              <p className="text-lg font-semibold">Strategic location</p>
            </div>
            <span className="text-gray-400 text-3xl font-semibold right-0 top-0 absolute">
              05
            </span>
          </div>
          <p className=" text-gray-300 my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            varius pretium orci a aliquet.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-white p-6 h-[200px] rounded-md overflow-hidden">
          <div className="flex items-center justify-between relative">
            <div className="flex flex-col gap-y-3">
              <span>
                <Lightbulb color="#FF6522" fill="#FF6522" size={30} />
              </span>
              <p className="text-lg font-semibold">Efficient</p>
            </div>
            <span className="text-gray-400 text-3xl font-semibold right-0 top-0 absolute">
              06
            </span>
          </div>
          <p className=" text-gray-300 my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            varius pretium orci a aliquet.
          </p>
        </div>
      </div>
    </>
  );
};

export const Slider = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  const handleDotClick = (idx: any) => {
    setIndex(idx);
  };

  return (
    <section className="section">
      <div className="section-center bg-earth bg-no-repeat bg-center ">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position;
          if (personIndex === index) {
            position = "activeSlide";
          } else if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          } else {
            position = "nextSlide";
          }

          return (
            <article className={position} key={id}>
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          );
        })}
        <div className="dots">
          {people.map((_, idx) => (
            <span
              key={idx}
              className={idx === index ? "!bg-[#034679]" : ""}
              onClick={() => handleDotClick(idx)}
            ></span>
          ))}
        </div>
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <ChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};
