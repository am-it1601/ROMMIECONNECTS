import Image from "next/image";
import Navbar from "./_components/Navbar";
import Footer from "./_components/footer";
import img from "../public/img.jpeg";
import hero1 from "../public/hero1.png";
import hero2 from "../public/hero2.png";
import hero3 from "../public/hero3.png";
import hero4 from "../public/hero4.png";
import hero5 from "../public/hero5.png";
import hero6 from "../public/hero6.png";
import banner from "../public/banner.png";
import banner2 from "../public/banner2.png";
import apple from "../public/apple.webp";
import {
  CustomBanner,
  CustomBoat,
  CustomButton,
  CustomHousingGrid,
  CustomSearchButton,
  GridTemplate,
  ThreeCols,
  TopButton,
} from "./_components/shared";
import { AlertOctagon, ArrowRight } from "lucide-react";
import { Slider } from "./_components/slider/slider";

export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="relative w-full">
          <div className="absolute flex flex-col top-[40%] left-[50%] md:text-wrap gap-5 leading-snug  text-center text-white  transform -translate-x-[50%]  text-wrap ">
            <span className="text-6xl  max-sm:text-sm font-extrabold">
              Find your room or roommate
            </span>
            <span className="text-3xl  max-sm:text-sm">
              And post your room with{" "}
              <span className="text-primary">RoomieConnects!</span>
            </span>
          </div>
          <div className=" bg-transparent absolute z-10 bottom-24 left-[15%] max-sm:left-0 ">
            <div className="flex gap-4 items-center justify-between max-sm:hidden">
              <CustomButton />
            </div>
          </div>
          <div className=" absolute bottom-0 flex items-center justify-between  left-[50%] top[50%] w-[65%]  md:flex-wrap md:translate-y-3/4 md:gap-5  -translate-x-1/2 -translate-y-1/2 z-20  bg-white rounded-full py-4 px-2 shadow-lg">
            <CustomSearchButton />
          </div>
          <div className="grid grid-cols-3 auto-rows-[200px] max-sm:grid-rows-4">
            <div className="row-span-2">
              <Image
                src={hero1}
                alt="img"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="row-span-2">
              <Image
                src={hero2}
                alt="img"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="row-span-2">
              <Image
                src={hero3}
                alt="img"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="row-span-2 row-start-3">
              <Image
                src={hero4}
                alt="img"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="row-span-2 row-start-3">
              <Image
                src={hero5}
                alt="img"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="row-span-2 row-start-3">
              <Image
                src={hero6}
                alt="img"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-[100px] flex items-center justify-center gap-4 max-w-screen-2xl m-auto ">
          <span>Trending Searches : </span>
          <div className="flex items-center justify-center gap-3">
            <span className="bg-[#F5F5F5] rounded-full p-2 px-4">
              Karachi, Pakistan
            </span>
            <span className="bg-[#F5F5F5] rounded-full p-2 px-4">
              Karachi, Pakistan
            </span>
            <span className="bg-[#F5F5F5] rounded-full p-2 px-4">
              Karachi, Pakistan
            </span>
          </div>
          <span className="bg-primary p-2 rounded-full ">
            <ArrowRight color="white" />
          </span>
        </div>

        <section className="p-3 mt-10 mb-10 max-w-screen-2xl m-auto">
          <h2 className="text-3xl font-bold my-4">Browse by Property type</h2>
          <GridTemplate />
        </section>
        <section className="p-3 mt-20 mb-10 max-w-screen-2xl m-auto">
          <h2 className="text-3xl font-bold my-4">Top Rated Housing </h2>
          <CustomHousingGrid />
        </section>
        <section className="p-3 mt-20 mb-10 max-w-screen-2xl m-auto">
          <CustomBanner img={banner} />
        </section>

        <div className="bg-[#FF65224D]">
          <section className="p-3 mt-10 py-16 max-w-screen-2xl m-auto ">
            <h2 className="text-3xl max-sm:text-2xl font-bold my-4 mb-10 text-center">
              Why our solution is always best
            </h2>
            <ThreeCols img={hero2} />
          </section>
        </div>

        {/* how its works div */}
        <div className="p-3 mt-20 mb-10 max-w-screen-2xl m-auto ">
          <div>
            <h1 className="text-5xl max-sm:text-3xl text-primary text-center my-10 font-bold">
              How it works
            </h1>
            <p className=" text-gray-500 text-center w-[50%] max-sm:w-[90%] m-auto mt-5 leading-[30px] ">
              An online trading journal app for professional stock market
              traders who want to win at their investment game and know their
              trading details like the back of their hand.
            </p>
          </div>
        </div>

        <section className="p-3 mt-20 mb-10 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-10 h-[400px] shadow-xl rounded-lg flex items-center justify-center flex-col">
              <div className="h-[80px] w-[80px] bg-[#FCEDE6] rounded-full">
                <span className="flex items-center justify-center h-full">
                  <AlertOctagon size={40} color="#FF6522" />
                </span>
              </div>
              <div>
                <p className="text-primary font-semibold text-2xl my-5 text-center">
                  Lorem Ispum Dollar
                </p>
                <p className=" text-gray-400 text-center w-[80%] mx-auto mt-5">
                  An online trading journal app for professional stock market
                  traders who want to win at their in
                </p>
              </div>
            </div>

            <div className="p-10 h-[400px] shadow-xl rounded-lg flex items-center justify-center flex-col">
              <div className="h-[80px] w-[80px] bg-[#FCEDE6] rounded-full">
                <span className="flex items-center justify-center h-full">
                  <AlertOctagon size={40} color="#FF6522" />
                </span>
              </div>
              <div>
                <p className="text-primary font-semibold text-2xl my-5 text-center">
                  Lorem Ispum Dollar
                </p>
                <p className=" text-gray-400 text-center w-[80%] mx-auto mt-5">
                  An online trading journal app for professional stock market
                  traders who want to win at their in
                </p>
              </div>
            </div>

            <div className="p-10 h-[400px] shadow-xl rounded-lg flex items-center justify-center flex-col">
              <div className="h-[80px] w-[80px] bg-[#FCEDE6] rounded-full">
                <span className="flex items-center justify-center h-full">
                  <AlertOctagon size={40} color="#FF6522" />
                </span>
              </div>
              <div>
                <p className="text-primary font-semibold text-2xl my-5 text-center">
                  Lorem Ispum Dollar
                </p>
                <p className=" text-gray-400 text-center w-[80%] mx-auto mt-5">
                  An online trading journal app for professional stock market
                  traders who want to win at their in
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* slider */}
      <section className="p-3 mt-10 pt-10 max-w-screen-2xl m-auto ">
        <h1 className="text-5xl max-sm:text-3xl text-primary text-center my-10 font-bold">
          What Our Clients Say
        </h1>
        <p className="text-center text-gray-400 ">
          Get to know about our clients and what they say about our service.
        </p>
        <Slider />
      </section>

      {/*  */}
      <section className=" bg-[#FAFAFA] pb-20 pt-5">
        <div className="pt-5">
          <h1 className="text-3xl max-sm:text-3xl text-primary text-center  font-bold">
            Free
          </h1>
          <h1 className="text-3xl max-sm:text-3xl text-center  font-bold">
            Download now!
          </h1>
          <div className="flex items-center justify-center gap-3 mt-4">
            <Image src={apple} alt="" width={180} height={180} />
            <Image src={apple} alt="" width={180} height={180} />
          </div>
        </div>
      </section>
      <TopButton />

      <Footer />
    </>
  );
}
