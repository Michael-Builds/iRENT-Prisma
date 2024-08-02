"use client"
import Footer from "./Footer"
import NavBar from "./NavBar"

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <main className="flex-grow overflow-y-auto">{children}</main>
    </div>
  )
}

export default PublicLayout
