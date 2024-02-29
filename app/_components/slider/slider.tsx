/* eslint-disable @next/next/no-img-element */
"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import data from "./data";
import Image from "next/image";
import img from "../../../public/user.png";
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
      <div className="section-center bg-earth bg-no-repeat bg-center  ">
        {people.map(
          (
            person: { id: any; image: any; name: any; title: any; quote: any },
            personIndex: number
          ) => {
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
              <article className={`${position}`} key={id}>
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <div className="rounded-full relative left-[50%] -translate-x-1/2 translate-y-[20px] bottom-0 object-fill ">
                  <div className="bg-white h-[120px] w-[120px] overflow-hidden rounded-full m-auto">
                    <img
                      src={image}
                      alt="img"
                      className="h-full w-full object-cover overflow-hidden"
                    />
                  </div>
                </div>
              </article>
            );
          }
        )}
        <div className="dots">
          {/* {people.map((obj: any, idx: React.Key | null | undefined) => (
            
            // <button
            //   className="group relative inline-flex items-center justify-center mb-2 mr-2 text-sm font-medium text-gray-900 rounded-full"
            //   onClick={() => handleDotClick(idx)}
            //   key={idx}
            // >
            //   <span className="relative transition-all ease-in duration-200 h-4 w-4 rounded-full p-1 dark:bg-gray-900 group-hover:bg-opacity-0"></span>
            //   <div className="ease-in duration-300 opacity-0 group-hover:block group-hover:opacity-100 transition-all">
            //     <div className="ease-in-out duration-500 -translate-y-4 pointer-events-none transition-all group-hover:-translate-y-16 absolute left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-slate-300 before:-top-2">
            //       <div className="rounded-full h-[50px] w-[50px] ">
            //         <Image
            //           src={obj.image}
            //           alt="img"
            //           height={40}
            //           width={40}
            //           className="rounded-full h-[50px] w-[50px] object-fill"
            //         />
            //       </div>
            //     </div>
            //   </div>
            // </button>
          ))} */}

          {people.map((_: any, idx: React.Key | null | undefined) => (
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
