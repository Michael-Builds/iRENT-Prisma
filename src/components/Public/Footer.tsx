"use client"
import { IoIosSend } from "react-icons/io"
import { contactInfo, getCurrentYear, importantLink } from "@/constants/data"
import { RiFacebookFill } from "react-icons/ri"
import { IoLogoLinkedin } from "react-icons/io5"
import { FaXTwitter } from "react-icons/fa6"

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

export default function Footer() {
  return (
    <footer className="footer ">
      <div className="flex flex-col lg:flex-row  items-center justify-between mb-4">
        {/* About Us */}
        <div className="flex flex-col gap-12 mb-4 lg:mb-0 max-sm:-ml-[9rem]">
          <h1 className="font-bold -mb-8 text-left text-xl">About Us</h1>
          <p className="max-w-[15rem] text-left text-sm">
            Heaven fruitful doesn't over lesser days appear creeping seasons so
            behold bearing days open
          </p>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col gap-12 mb-4 lg:mb-0 max-sm:-ml-[9rem]">
          <h1 className="font-bold -mb-8 text-left text-xl">Contact Info.</h1>
          <div className="flex flex-col gap-2">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex align-center gap-2 text-left text-sm"
              >
                <p>{item.title}:</p>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Important Links */}
        <div className="flex flex-col gap-12 mb-4 lg:mb-0 max-sm:-ml-[12.5rem]">
          <h1 className="font-bold -mb-8 text-left text-xl">Important Links</h1>
          <div className="flex flex-col gap-2">
            {importantLink.map((item, index) => (
              <div key={index} className="text-left text-sm cursor-pointer">
                <p className="hover:text-primary transition-colors duration-300">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Newsletter */}
        <div className="flex flex-col gap-12 max-sm:-ml-[8rem]">
          <h1 className="font-bold -mb-8 text-left text-xl">Newsletter</h1>
          <p className="max-w-[15rem] text-left text-sm">
            Heaven fruitful doesn't over lesser in days. Appear creeping seasons
            deve behold bearing days open
          </p>
          <div className="bg-white -mt-6 flex items-center justify-between h-10 pl-3 rounded-full">
            <input
              placeholder="Email Address"
              className="flex-grow text-sm text-gray-500 mr-2 outline-none border-none"
            />
            <div className="bg-primary h-full cursor-pointer w-14 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#b45e05] hover:scale-105">
              <IoIosSend size={25} className="text-white" />
            </div>
          </div>
        </div>
      </div>
      <hr className="max-sm:hidden"/>
      <div className="mt-6 flex flex-col max-sm:flex-col max-sm:items-center max-sm:justify-center items-center justify-between">
      <div className="flex items-center gap-2 text-sm max-sm:mb-4">
        <p className="whitespace-nowrap">Copyright © {getCurrentYear()}</p>
        <p className="whitespace-nowrap">All Rights Reserved</p>
      </div>
      <div className="flex items-center gap-4">
        {socials.map((item, index) => {
          return (
            <div
              key={index}
              className="text-md cursor-pointer hover:text-primary transition-colors duration-300"
            >
              {item.icon}
            </div>
          );
        })}
      </div>
    </div>
    </footer>
  )
}
