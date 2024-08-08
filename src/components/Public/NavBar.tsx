"use client"
import React, { useState } from "react"
import Logo from "../../../public/images/logo.png"
import { navigation } from "../../constants/data"
import Image from "next/image"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";

export default function NavBar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev)
  }

  return (
    <section className=" bg-white flex items-center justify-between max-sm:h-[4rem] 2xl:h-[4.5rem] lg:h-[5rem] p-4 font-quicksand shadow-lg z-10 w-full fixed">
      <div className="flex items-center gap-8">
        <Image
          src={Logo}
          alt="Logo"
          className="lg:h-[7rem] lg:w-[7rem] h-[5rem] w-[5rem] max-sm:-ml-2 m-3"
        />
        <div className="max-sm:hidden flex items-center gap-10">
          {navigation.map((item, index) => {
            return (
              <Link key={index} href={item.href} passHref>
                <p className="cursor-pointer hover:text-primary text-alt transition-colors duration-300">{item.name}</p>
              </Link>
            )
          })}
        </div>
      </div>
      <div className="max-sm:hidden flex items-center gap-6 lg:mr-8">
        <button className="bg-primary hover:bg-orange-600 cursor-pointer transition-colors duration-300 lg:w-24 lg:h-8 rounded-full text-white lg:text-sm">
          Visit
        </button>
      </div>
      <div className="lg:hidden md:hidden xl:hidden mr-2">
        <HiOutlineMenuAlt3 size={25} onClick={toggleDrawer} />
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </section>
  )
}

function Drawer({ isOpen, onClose }: any) {
  return (
    <div
      className={`fixed inset-0 z-20 transition-opacity duration-500 ${ isOpen  ? "bg-black bg-opacity-50 opacity-100" : "opacity-0 pointer-events-none" }`}>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform duration-500 transform ${ isOpen ? "translate-x-0" : "-translate-x-full" }`}>
        <div className="flex justify-end m-4">
          <IoCloseOutline size={20} onClick={onClose} className="cursor-pointer" />
        </div>
        <nav className="">
          {navigation.map((item, index) => (
           <Link key={index} href={item.href} passHref>
           <div className="px-4 py-4 hover:bg-gray-200">
             <p className="cursor-pointer text-sm">{item.name}</p>
           </div>
         </Link>
          ))}
        </nav>
        <div className="lg:hidden xl:hidden md:hidden flex items-center gap-6 ml-2 mt-4">
        <button className="bg-red-500 text-sm hover:bg-primary cursor-pointer transition-colors duration-300 w-24 h-8 rounded-full text-white lg:text-sm">
          Visit
        </button>
      </div>
      </div>
    </div>
  )
}
