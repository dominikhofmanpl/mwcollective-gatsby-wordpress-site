import React from 'react'
import LogoMWC from '../images/logo.png'
import Button from './button'

const HeaderLabel = ({ pageTitle, pageDescription }) => {
    return (
    <div className="my-auto mx-auto">
        <div className="grid grid-cols-2">
          <img src={LogoMWC} alt="Logo MWCollective" style={{
            width: `6rem`
          }}/>
          <p className="inriasans-reg ml-auto my-auto">
            studio projektowe MWCollective
          </p>
        </div>
        <h2 className="mont-black my-5" style={{
          fontSize: `3rem`
        }}>{pageTitle}</h2>
        <p className="inriasans-reg my-5 pb-5 ml-auto" style={{
          width: `20rem`
        }}>
        {pageDescription}
        </p>
    </div>
    )
}

export default HeaderLabel