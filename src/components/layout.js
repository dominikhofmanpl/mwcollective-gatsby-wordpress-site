import React from "react"
import Footer from "./footer"
import Navbar from "./navbar"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Layout = ({ children }) => {
  AOS.init()

  return (
    <>
      <div style={{
        width: `100vw`,
        overflowY: `hidden`,
        background: `linear-gradient(90deg, #ffffff 82.5%, rgba(224,207,191, .5) 17.5%)`,
        backgroundPosition: `auto 20vh`
      }}>
      <Navbar></Navbar>
        {/* <div style={{
          width: `15rem`,
          height: `100%`,
          backgroundColor: `#E0CFBF`,
          opacity: `.4`,
          position: 'absolute',
          right: `0`,
          top: `44.5vh`
        }} data-aos="fade-right"></div> */}
        <main style={{
          position: `relative`,
          zIndex: `5`,
          overflowY: `hidden`
        }}>{children}</main>
        <div style={{
            position: `relative`,
            zIndex: `10`
          }}>
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}

export default Layout
