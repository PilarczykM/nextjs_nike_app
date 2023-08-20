"use client";

import Image from "next/image";

import { Button, ShoeCard } from "@/components/index";
import { arrowRight } from "@/assets/icons";
import { bigShoe1 } from "@/assets/images";
import { shoes, statistics } from "@/constants/index";
import { useState } from "react";

const Hero = () => {
  const [bigShueImg, setBigShueImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col gap-10 max-container  justify-center min-h-screen"
    >
      {/* Left hero heading with statistics */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3 mr-4">Nike</span>
          Shose
        </h1>
        <p className="font-montserrat text-slate-gray text-lg left-8 mt-6 mb-14">
          Discover stylish Nike arrivals, quality confort, and innovation for
          your active life.
        </p>
        <Button label="Show now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((statistic, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">
                {statistic.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {statistic.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Image section with carousel */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero">
        <Image
          className="object-contain relative z-10"
          src={bigShueImg}
          width={610}
          height={500}
          alt="big shoe 1"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                shoe={shoe}
                changeBigShoeImage={(shueURL) => setBigShueImg(shueURL.bigShoe)}
                bigShoeImg={bigShueImg.src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
