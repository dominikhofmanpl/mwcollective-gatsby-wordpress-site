import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import { AniLink } from "gatsby-plugin-transition-link";
import LogoMWC from '../images/logo.png'


const GET_NAV_OPTIONS = gql`
    query WpNavQuery {
        menu(id: "dGVybTo4NQ==") {
            menuItems {
                nodes {
                    id
                    label
                    path
                }
            }
        }
    }
`



const scrollFunction = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.backgroundColor = "white"
    document.getElementById("navbar").style.boxShadow = "4px 13px 29px 13px rgba(0,0,0,0.20);"
    document.getElementById("navbar").style.webkitBoxShadow = "4px 13px 29px 13px rgba(0,0,0,0.20);"
    document.getElementById("logo").style.visibility = "visible"
  } else {
    if (window.innerWidth > 768) {
        document.getElementById("navbar").style.backgroundColor = "rgb(0,0,0, .0)"
    } else if (window.innerWidth <= 768) {
        document.getElementById("navbar").style.backgroundColor = "white"
    }
    document.getElementById("navbar").style.boxShadow = "0"
    document.getElementById("navbar").style.webkitBoxShadow = "0"
    document.getElementById("logo").style.visibility = "hidden"
  }
}

const Navbar = () => {
    window.onscroll = function() {scrollFunction()};
    const [isOpen, setIsOpen] = useState(false);

    const { data, loading, error } = useQuery(GET_NAV_OPTIONS)

    if (loading) return 'Loading...'
    if (error) return 'Error'

    return (
        <div id="navbar" className="w-100 flex fixed z-10 px-36 bg-white md:bg-none" style={{
            width: `100vw`,
            zIndex: `10`,
            backgroundColor: `white`
        }}>
            <div className="flex flex-col md:flex-row" style={{
                width: `100vw`
            }}>
                <div className="mr-auto hidden md:block my-auto">
                    <img className="my-auto" id="logo" src={LogoMWC} style={{
                        height: `1.8rem`
                    }}/>
                </div>
                <div className="hidden md:block ml-auto">
                    <div className="flex flex-row ml-auto py-8">
                        {data.menu.menuItems.nodes.map(node => (
                            <div className="mx-4">
                                <AniLink paintDrip color="black" to={node.path}><p className="inriasans-reg uppercase">{node.label}</p></AniLink>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex-row block md:hidden bg-white py-12 w-auto" style={{
                backgroundColor: `white`
            }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="mx-auto block md:hidden bg-gray-900  items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >menu</button>
            {!isOpen ? (
                <div className="py-2 mx-auto">
                    <div className="flex flex-col py-8 mx-auto">
                        {data.menu.menuItems.nodes.map(node => (
                            <div className="mx-auto my-1 md:my-0">
                                <AniLink paintDrip color="black" to={node.path} onClick={() => setIsOpen(null)}><p className="inriasans-reg uppercase">{node.label}</p></AniLink>
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}
            </div>
        </div>
    )
}

export default Navbar