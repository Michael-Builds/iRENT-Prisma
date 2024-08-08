import React from "react"
import Landing from "./Public/Landing"
import Footer from "./Public/Footer"
import About from "./About"

const Home = () => {
  return (
    <div className="h-full w-full">
      <Landing />
      <About/>
      <Footer />
    </div>
  )
}

export default Home
