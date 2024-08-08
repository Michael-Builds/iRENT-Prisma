"use client"
import React from "react"
import Agent from "../../public/images/agent.jpg"
import styles from "./page.module.css"
import Image from "next/image"
import { aboutItems } from "@/utils/data"

const About = () => {
  return (
    <section className="lg:h-full w-full flex lg:flex-row flex-col items-center p-6">
      {/* Left */}
      <div className=" w-full h-full lg:mt-12 -mt-16 justify-center lg:-mb-[20rem]">
        <div className={`${styles.image} relative overflow-hidden p-5 pe-0 `}>
          <div className="absolute top-0 left-0 w-full h-full transform -skew-x-20 z-1"></div>
          <Image
            className="w-96 md:w-full h-auto relative z-2 colored"
            src={Agent}
            alt="About Us"
          />
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:-mt-32 mt-8 h-full flex flex-col gap-4 justify-center lg:pl-32 lg:-mb-[20rem]">
        <h1
          className={`${styles.heading} mb-8 font-poppins 2xl:text-5xl lg:text-5xl text-3xl font-semibold text-alt`}
        >
          Living From <br /> The Team That Cares
        </h1>
        <p className="font-nunito text-alt lg:max-w-[70%] mb-4 max-sm:text-sm">
          Unto all set life creeping own set. Saw make multiply female watge deb
          all set life creeping own set. Saw make multiply female watge abund
          winged subdue dominion own night days second
        </p>
        <div className="mt-2 flex flex-col gap-3">
          {aboutItems.map((item, index) => {
            return (
              <div key={index} className="flex align-center gap-4">
                <p className="text-primary">{item.icon}</p>
                <p className="text-sm">{item.desc}</p>
              </div>
            )
          })}
        </div>
        <button
          className=" mt-6 outline-none cursor-pointer border-primary font-nunito bg-primary hover:bg-orange-600 transition-colors duration-300 text-white xl:w-[10rem] pt-3 pb-3 rounded-sm
            max-sm:flex max-sm:items-center max-sm:justify-center max-sm:w-[10rem] max-sm:ml-[6rem] max-sm:mt-4"
        >
          Read More
        </button>
      </div>
    </section>
  )
}

export default About
