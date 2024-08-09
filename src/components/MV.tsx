"use client"
import React from "react"
import Image from "next/image"
import Bg from "../../public/images/background.png"
import styles from "./page.module.css"
import { CardComponent, people } from "@/utils/data"

const Passion = () => {
  return (
    <div className="lg:h-full w-full relative lg:p-24 p-2">
      <div className="absolute inset-0">
        <Image
          src={Bg}
          alt="Background Image"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          quality={100}
          sizes="(max-width: 768px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      {/* Content */}
      <div className="relative text-white flex flex-col lg:h-full">
        <h1
          className={`${styles.mvpheading} max-sm:mt-8 mb-8 font-poppins 2xl:text-5xl lg:text-5xl text-3xl max-sm:whitespace-nowrap font-semibold text-white`}
        >
          Our Passion is <br /> People What's Yours?
        </h1>
        {/* Cards */}
        <ul
      role="list"
      className="mx-auto max-sm:p-6 mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8"
    >
      {people.map((person) => (
        <li key={person.id}>
          <CardComponent
            icon={person.icon}
            title={person.title}
            description={person.description}
            buttonLabel={person.buttonLabel}
          />
        </li>
      ))}
    </ul>
      </div>
    </div>
  )
}

export default Passion
