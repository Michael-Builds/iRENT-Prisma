import { properties, PropertyCard } from "@/utils/data"
import React from "react"
import styles from "./page.module.css"

const Properties = () => {
  return (
    <div className="lg:h-full w-full p-12 flex flex-col">
      <h1
        className={`${styles.propheading} max-sm:mt-8 mb-8 font-poppins 2xl:text-5xl lg:text-5xl text-3xl max-sm:whitespace-nowrap font-semibold text-alt`}
      >
        Provide The <br /> Beautiful Apartment
      </h1>
      <div className="flex justify-center items-center mt-6 w-full h-full">
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 "
        >
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              image={property.image}
              type={property.type}
              header={property.header}
              bathrooms={property.bathrooms}
              bedrooms={property.bedrooms}
              landsize={property.landsize}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Properties
