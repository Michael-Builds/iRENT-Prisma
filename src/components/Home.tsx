import React from "react"
import Landing from "./Public/Landing"
import Footer from "./Public/Footer"
import About from "./About"
import Passion from "./MV"
import Properties from "./Properties"

const Home = () => {
  return (
    <div className="h-full w-full">
      <Landing />
      <About />
      {/* <Passion /> */}
      {/* <Properties />
      <Footer /> */}
    </div>
  )
}

export default Home
