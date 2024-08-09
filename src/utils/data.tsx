import { TfiRulerPencil } from "react-icons/tfi"
import { BsCheck2Square } from "react-icons/bs"
import { VscPaintcan } from "react-icons/vsc"
import { RiFacebookFill } from "react-icons/ri"
import { IoLogoLinkedin } from "react-icons/io5"
import { FaXTwitter } from "react-icons/fa6"
import { MdOutlineArrowForward } from "react-icons/md"
import { TbBeach } from "react-icons/tb"
import { PiBathtubLight } from "react-icons/pi"
import { GiDesk } from "react-icons/gi"
import { PiCompassToolBold } from "react-icons/pi"
import { LiaBathSolid } from "react-icons/lia"
import { IoBedOutline } from "react-icons/io5"
import { FaChartArea } from "react-icons/fa"
import { CiHeart } from "react-icons/ci"

export const aboutItems = [
  {
    id: 1,
    icon: <VscPaintcan size={22} />,
    desc: "Set dry signs spirit a kind First shall them windged creping",
  },
  {
    id: 2,
    icon: <BsCheck2Square size={22} />,
    desc: "He two face one moved dominion man you're likeness",
  },
  {
    id: 3,
    icon: <TfiRulerPencil size={22} />,
    desc: "Sea forth fill have divide be dominion from life for feven",
  },
]

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

export const people = [
  {
    id: 1,
    icon: <PiCompassToolBold size={40} />,
    title: "Creative Design",
    description:
      "Hac facilisi ac vitae consec tetu commod vel magna suspen disse on senectus pharetra magnfauc bed",
    buttonLabel: "Read More",
  },
  {
    id: 2,
    icon: <GiDesk size={40} />,
    title: "Experience Style",
    description:
      "Hac facilisi ac vitae consec tetu commod vel magna suspen disse on senectus pharetra magnfauc bed",
    buttonLabel: "Read More",
  },
  {
    id: 3,
    icon: <PiBathtubLight size={40} />,
    title: "Product Research",
    description:
      "Hac facilisi ac vitae consec tetu commod vel magna suspen disse on senectus pharetra magnfauc bed",
    buttonLabel: "Read More",
  },
  {
    id: 4,
    icon: <TbBeach size={40} />,
    title: "Affordable Price",
    description:
      "Hac facilisi ac vitae consec tetu commod vel magna suspen disse on senectus pharetra magnfauc bed",
    buttonLabel: "Read More",
  },
]
interface CardProps {
  icon: React.ReactNode
  title: string
  description: string
  buttonLabel: string
}

export const properties = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    type: "Apartment",
    header: "Luxury Apartment in the City",
    bathrooms: 2,
    bedrooms: 3,
    landsize: 120,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    type: "House",
    header: "Spacious Family Home",
    bathrooms: 3,
    bedrooms: 4,
    landsize: 250,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    type: "Villa",
    header: "Stunning Beachfront Villa",
    bathrooms: 4,
    bedrooms: 5,
    landsize: 400,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    type: "Villa",
    header: "Stunning Beachfront Villa",
    bathrooms: 4,
    bedrooms: 5,
    landsize: 400,
  },
]

export const CardComponent: React.FC<CardProps> = ({
  icon,
  title,
  description,
  buttonLabel,
}) => {
  return (
    <div className="w-full h-auto rounded-2xl bg-gray-800 px-8 py-10 text-center flex flex-col">
      <div className="flex justify-center mb-4">
        <div className="inline-flex items-center justify-center">{icon}</div>
      </div>
      <h1 className="font-semibold text-xl leading-7 tracking-tight text-white">
        {title}
      </h1>
      <p className="lg:text-lg text-sm leading-6 mt-4 mb-5 text-left text-gray-400 overflow-hidden overflow-ellipsis line-clamp-4">
        {description}
      </p>
      <div className="mt-auto flex justify-center">
        <button className="flex items-center gap-2 px-4 py-2 text-white rounded-full hover:text-primary transition-colors duration-300">
          {buttonLabel}
          <MdOutlineArrowForward size={20} />
        </button>
      </div>
    </div>
  )
}

export const PropertyCard = ({
  image,
  type,
  header,
  bathrooms,
  bedrooms,
  landsize,
}: any) => {
  return (
    <div className="relative shadow-lg group">
      <div className="relative h-72 w-full overflow-hidden cursor-pointer">
        <img
          src={image}
          alt={image}
          className="h-full w-full object-cover object-center rounded-xl transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 group-hover:scale-110"></div>
      </div>
      <div className="relative mt-4">
        <h3 className="text-sm font-medium text-gray-900">{type}</h3>
      </div>
      <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
        />
        <div className="relative flex items-center">
          <p className="text-lg font-semibold bg-white p-2 shadow-lg rounded-lg">
            <CiHeart size={20} className="text-red-500" />
          </p>
        </div>
      </div>
      <h1>{header}</h1>
    </div>
  )
}
