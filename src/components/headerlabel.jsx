import React from 'react'
import { Link } from 'react-scroll'
import LogoMWC from '../images/logo.png'
import Button from './button'

const HeaderLabel = ({ pageTitle, pageDescription, buttonLabel, location, slugaction }) => {
    return (
    <div className="my-auto mx-auto flex flex-col sm:p-8 md:p-0">
        <div className="grid grid-cols-2">
          <img src={LogoMWC} alt="Logo MWCollective" style={{
            width: `6rem`
          }}/>
          <p className={`inriasans-reg ${location} my-auto`}>
            studio projektowe MWCollective
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className={`mont-black ml-auto my-5 ${location}`} style={{
            fontSize: `3rem`
          }}>{pageTitle}</h1>
          <p className={`inriasans-reg ml-auto my-5 pb-5 ${location}`} style={{
            width: `20rem`
          }}>
          {pageDescription}
          </p>
          { buttonLabel ? <Button label={buttonLabel} 
                  location={location}
                  slugaction={slugaction}></Button> : null}
        </div>
    </div>
    )
}

export default HeaderLabel