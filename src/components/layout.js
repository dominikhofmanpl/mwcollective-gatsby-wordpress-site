import React from "react"
import Footer from "./footer"
// import Navbar from "./navbar"

const Layout = ({ children }) => {
  return (
    <>
      <div style={{
        width: `100vw`,
        minHeight: `100vh`
      }}>
      {/* <Navbar></Navbar> */}
        {/* <div style={{
          width: `15rem`,
          height: `1000vh`,
          backgroundColor: `#E0CFBF`,
          opacity: `.4`,
          position: 'absolute',
          right: `0`
        }}></div> */}
        <main style={{
          position: `relative`,
          zIndex: `5`
        }}>{children}</main>
        <Footer style={{
          zIndex: 5
        }}></Footer>
      </div>
    </>
  )
}

export default Layout
