import React from "react"
import LandingImage from "../../../public/images/landing.jpg"
import Image from "next/image"
import { FiPlay } from "react-icons/fi"
import { RiFacebookFill } from "react-icons/ri"
import { IoLogoLinkedin } from "react-icons/io5"
import { FaXTwitter } from "react-icons/fa6"
import styles from "./page.module.css"

export const socials = [
  {
    id: 1,
    title: "Facebook",
    icon: <RiFacebookFill size={22} />,
  },
  {
    id: 2,
    title: "LinkedIn",
    icon: <IoLogoLinkedin size={22} />,
  },
  {
    id: 3,
    title: "Twitter",
    icon: <FaXTwitter size={22} />,
  },
]

const Landing = () => {
  return (
    <div className="h-full mt-[4rem] w-full grid xl:grid-cols-2 grid-cols-1">
      {/* Left */}
      <div className="flex flex-col lg:flex-row lg:align-center lg:justify-center h-full w-full lg:-mt-2 2xl:-mt-16 2xl:-ml-0 lg:-ml-16 order-last sm:order-first max-sm:-mb-[11rem] max-sm:-mt-8">
        <div className="flex items-center gap-4 rotate-upwards max-sm:hidden">
          {socials.map((item, index) => (
            <div
              key={index}
              className="text-md text-alt flex align-center gap-2 cursor-pointer hover:text-primary transition-colors duration-300"
            >
              <p>{item.icon}</p>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <div className="flex lg:-ml-14 justify-center flex-col font-poppins max-sm:-mt-12 ">
          <p className="text-md font-bold 2xl:font-bold uppercase text-primary max-sm:text-center max-sm:text-alt max-sm:font-nunito">
            Beautiful investments
          </p>
          <h1 className={`lg:${styles.heading} mt-4 text-3xl max-sm:text-3xl md:text-5xl 2xl:text-7xl font-semibold text-alt max-sm:text-center max-sm:mb-4`}>
            Everyone Deserves the Opportunity of the Home
          </h1>
          <p className="mt-5 mb-5 text-alt font-nunito max-sm:text-center max-sm:m-2 ">
            Enim a, scelerisque aliquet vivamus neque diam sed at pede do laos
            orci. Potenti vel in sagittis nulla augue vitae et tempus torquent
            dicid Lacinia neque mus maleware poside
          </p>
          <button
            className="outline-none cursor-pointer border-primary font-nunito bg-primary hover:bg-orange-600 transition-colors duration-300 text-white xl:w-[10rem] pt-3 pb-3 rounded-sm
            max-sm:flex max-sm:items-center max-sm:justify-center max-sm:w-[10rem] max-sm:ml-[7rem] max-sm:mt-4"
          >
            View Properties
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col justify-center items-center text-center h-full w-full relative max-sm:-mt-8">
        <div className="d-shape-container relative w-full h-full overflow-hidden max-sm:hidden">
        <Image src={LandingImage} alt="Landing Page" fill />
        </div>
        {/* Play Button */}
        <div className={`${styles.animate} absolute left-0 xl:left-12 2xl:left-16 top-1/2 transform -translate-y-1/2 cursor-pointer bg-white shadow-xl w-24 h-24 p-2 rounded-full flex items-center justify-center max-sm:left-1/2 max-sm:top-1/2 max-sm:transform max-sm:-translate-x-1/2 max-sm:-translate-y-1/2`}>
          <div className={` bg-primary hover:bg-red-500 transition-colors duration-300 h-full w-full rounded-full text-white flex items-center justify-center`}>
            <FiPlay size={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
