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
import {
  ArrowUp,
  BadgePercent,
  ChevronLeft,
  ChevronRight,
  Gem,
  Heart,
  HomeIcon,
  Lightbulb,
  MapPin,
  MapPinned,
  ShieldCheck,
  Star,
} from "lucide-react";
import { CustomSelect, DatePickerDemo } from "./client";
import Home from "../page";
import { Button } from "@/components/ui/button";
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
          className={` text-white font-bold py-2 px-5  p-bold-24 rounded-full  ${
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
    <div className="flex items-center justify-between gap-4 px-10 w-full ">
      <div className="flex gap-4">
        <div className=" flex items-center gap-2 border-r-2 ">
          <HomeIcon size={25} />
          <CustomSelect />
        </div>
        <div className=" border-r-2 border-gray-300 flex items-center gap-2">
          <MapPin size={25} />

          <input
            type="text"
            placeholder="search for location"
            className=" p-3 focus:outline-none"
          />
        </div>
        <DatePickerDemo />
      </div>
      <Button className="text-white bg-primary font-medium py-2 px-5 text-2xl rounded-full ">
        search
      </Button>
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
        <div className="flex items-start justify-start gap-2 py-2">
          <p className="mt-1 ">
            <MapPin size={18} />
          </p>
          <p className="p-regular-18 text-text_secondary ">Karachi, Pakistan</p>
        </div>
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
      <div>
        <Image
          src={hero1}
          alt="img"
          className="h-[300px] w-full rounded-lg overflow-hidden object-cover"
        />
        <div className="bg-white">
          <div className="flex items-start justify-start gap-2 py-2">
            <p className="mt-1 ">
              <MapPin size={18} />
            </p>
            <p className="p-regular-18 text-text_secondary ">
              Karachi, Pakistan
            </p>
          </div>
          <a href="#">
            <h3 className="mt-0.5  text-gray-900 p-bold-24 ">Roommate</h3>
          </a>
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-text_secondary p-regular-18 ">
            2 Bedrooms | 2 Bathrooms | 1 Garden
          </p>
          <div className=" py-2 flex gap-1 items-center justify-start mt-2">
            {[1, 2, 3, 4, 5].map((item, index) => {
              return (
                <Star
                  key={index}
                  size={18}
                  fill="#FFD600"
                  color="#FFD600"
                  className="border border-none"
                />
              );
            })}
          </div>
        </div>
      </div>{" "}
      <div>
        <Image
          src={hero1}
          alt="img"
          className="h-[300px] w-full rounded-lg overflow-hidden object-cover"
        />
        <div className="bg-white">
          <div className="flex items-start justify-start gap-2 py-2  ">
            <p className="mt-1 ">
              <MapPin size={18} />
            </p>
            <p className="p-regular-18 text-text_secondary ">
              Karachi, Pakistan
            </p>
          </div>
          <a href="#">
            <h3 className="mt-0.5  text-gray-900 p-bold-24">
              Student Shared housing
            </h3>
          </a>
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-text_secondary p-regular-18 ">
            2 Bedrooms | 2 Bathrooms | 1 Garden
          </p>
          <div className=" py-2 flex gap-1 items-center justify-start mt-2">
            {[1, 2, 3, 4, 5].map((item, index) => {
              return (
                <Star
                  key={index}
                  size={18}
                  fill="#FFD600"
                  color="#FFD600"
                  className="border border-none"
                />
              );
            })}
          </div>
        </div>
      </div>{" "}
      <div>
        <Image
          src={hero1}
          alt="img"
          className="h-[300px] w-full rounded-lg overflow-hidden object-cover"
        />
        <div className="bg-white">
          <div className="flex items-start justify-start gap-2 py-2">
            <p className="mt-1 ">
              <MapPin size={18} />
            </p>
            <p className="p-regular-18 text-text_secondary ">
              Karachi, Pakistan
            </p>
          </div>
          <a href="#">
            <h3 className="mt-0.5  text-gray-900  p-bold-24">
              Corporate housing
            </h3>
          </a>
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-text_secondary p-regular-18 ">
            2 Bedrooms | 2 Bathrooms | 1 Garden
          </p>
          <div className=" py-2 flex gap-1 items-center justify-start mt-2">
            {[1, 2, 3, 4, 5].map((item, index) => {
              return (
                <Star
                  key={index}
                  size={18}
                  fill="#FFD600"
                  color="#FFD600"
                  className="border border-none"
                />
              );
            })}
          </div>
        </div>
      </div>{" "}
      <div>
        <Image
          src={hero1}
          alt="img"
          className="h-[300px] w-full rounded-lg overflow-hidden object-cover"
        />
        <div className="bg-white">
          <div className="flex items-start justify-start gap-2 py-2">
            <p className="mt-1 ">
              <MapPin size={18} />
            </p>
            <p className="p-regular-18 text-text_secondary ">
              Karachi, Pakistan
            </p>
          </div>
          <a href="#">
            <h3 className="mt-0.5 p-bold-24 text-gray-900">Military housing</h3>
          </a>
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-text_secondary p-regular-18 ">
            2 Bedrooms | 2 Bathrooms | 1 Garden
          </p>
          <div className=" py-2 flex gap-1 items-center justify-start mt-2">
            {[1, 2, 3, 4, 5].map((item, index) => {
              return (
                <Star
                  key={index}
                  size={18}
                  fill="#FFD600"
                  color="#FFD600"
                  className="border border-none"
                />
              );
            })}
          </div>
        </div>
      </div>
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
        <p className="text-white h3-bold max-sm:text-sm ">
          List your House on <br /> RoomiConnects and open <br /> your door to
          rental income
        </p>
        <button className="cursor-pointer inline-flex items-center rounded-full px-6 py-2 p-semibold-20 text-white bg-primary ">
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
        <p className="text-center p-semibold-18   py-1">Roommates </p>
      </div>
      <div className="md:col-span-2  bg-white p-6 md:row-span-6 rounded-sm">
        <Image
          src={hero2}
          alt="img"
          className="h-full w-full object-cover overflow-hidden rounded-md"
        />
        <p className="text-center h4-medium py-1 text-2xl font-semibold">
          Vacation Rentals{" "}
        </p>
      </div>
      <div className="md:row-span-3 md:col-start-4 md:row-start-1 rounded-sm">
        <Image
          src={hero3}
          alt="img"
          className="h-full w-full object-cover overflow-hidden rounded-md"
        />
        <p className="text-center p-semibold-18  py-1">
          Student Shared housing{" "}
        </p>
      </div>
      <div className="md:row-span-3 md:row-start-4 rounded-sm">
        <Image
          src={hero5}
          alt="img"
          className="h-full w-full object-cover overflow-hidden rounded-md"
        />
        <p className="text-center p-semibold-18  py-1">Military housing </p>
      </div>
      <div className="md:row-span-3 md:col-start-4 md:row-start-4 rounded-sm">
        <Image
          src={hero4}
          alt="img"
          className="h-full w-full object-cover overflow-hidden rounded-md"
        />
        <p className="text-center p-semibold-18  py-1">Corporate housing </p>
      </div>
    </div>
  );
};

export const ThreeCols = ({ img }: any) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative">
        <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-white   p-6 h-[200px]  card rounded-md overflow-hidden">
          <div className="flex items-center justify-between relative hoverImg">
            <div className="flex flex-col gap-y-3">
              <span>
                <Heart color="#FF6522" fill="#FF6522" size={30} />
              </span>
              <p className="p-medium-20">Comfortable</p>
            </div>
            <span className="text-gray-400 text-3xl font-semibold absolute right-0 top-0 h4-medium">
              01
            </span>
          </div>
          <p className="text-gray-300 my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            varius pretium orci a aliquet.
          </p>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-1   p-6 h-[200px]  card rounded-md overflow-hidden text-white">
          <div className="flex items-center justify-between relative">
            <div className="flex flex-col gap-y-3">
              <span>
                <ShieldCheck color="#FF6522" size={30} />
              </span>
              <p className="p-medium-20 ">Extra security</p>
            </div>
            <span className="text-gray-400 text-3xl font-semibold right-0 top-0 absolute h4-medium">
              02
            </span>
          </div>
          <p className=" text-text_secondary  my-5 p-regular-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            varius pretium orci a aliquet.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 p-6 h-[200px]  card rounded-md overflow-hidden transition-all duration-300 ease-in-out ">
          <div className="flex items-center justify-between relative">
            <div className="flex flex-col gap-y-3">
              <span>
                <Gem color="#FF6522" size={30} />
              </span>
              <p className="p-medium-20">Luxury</p>
            </div>
            <span className="text-gray-400 text-3xl font-semibold right-0 top-0 absolute h4-medium">
              03
            </span>
          </div>
          <p className=" text-text_secondary my-5 p-regular-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            varius pretium orci a aliquet.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 p-6 h-[200px]  card  rounded-md overflow-hidden transition-all duration-300 ease-in-out ">
          <div className="flex items-center justify-between relative ">
            <div className="flex flex-col gap-y-3">
              <span>
                <BadgePercent color="#FF6522" size={30} />
              </span>
              <p className="p-medium-20 ">Best price</p>
            </div>
            <span className="text-gray-400 text-3xl font-semibold right-0 top-0 absolute h4-medium">
              04
            </span>
          </div>
          <p className=" text-text_secondary my-5 p-regular-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            varius pretium orci a aliquet.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 p-6 h-[200px]  card rounded-md overflow-hidden transition-all duration-300 ease-in-out ">
          <div className="flex items-center justify-between relative">
            <div className="flex flex-col gap-y-3">
              <span>
                <MapPinned color="#FF6522" size={30} />
              </span>
              <p className="p-medium-20">Strategic location</p>
            </div>
            <span className="text-gray-400 text-3xl font-semibold right-0 top-0 absolute h4-medium">
              05
            </span>
          </div>
          <p className=" text-text_secondary my-5 p-regular-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            varius pretium orci a aliquet.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 p-6 h-[200px]  card rounded-md overflow-hidden transition-all duration-300 ease-in-out ">
          <div className="flex items-center justify-between relative">
            <div className="flex flex-col gap-y-3">
              <span>
                <Lightbulb color="#FF6522" fill="#FF6522" size={30} />
              </span>
              <p className="p-medium-20">Efficient</p>
            </div>
            <span className="text-gray-400 text-3xl font-semibold right-0 top-0 absolute h4-medium">
              06
            </span>
          </div>
          <p className=" text-text_secondary my-5 p-regular-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            varius pretium orci a aliquet.
          </p>
        </div>
      </div>
    </>
  );
};
export const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        // Change 100 to your desired scroll position
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-14 z-50 bottom-16 bg-white px-2 py-3 rounded-lg shadow-lg ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <ArrowUp className="z-50" />
    </button>
  );
};
