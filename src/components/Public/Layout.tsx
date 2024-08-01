"use client"
import Footer from "./Footer"
import NavBar from "./NavBar"

const PublicLayout = ({ children }: any) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default PublicLayout
