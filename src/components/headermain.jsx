import React from 'react'
import HeaderLabel from './headerlabel'
import ReactHtmlParser, {  } from 'react-html-parser'

const HeaderMain = ({HeaderImage, pageTitle, pageDescription, height, calltoaction, slugaction, location}) => {
    return (
        <header 
        className="grid sm:grid-cols-1 lg:grid-cols-2 pt-32 md:pt-0 px-8 md:px-0" style={{
            width: `100vw`, minHeight: `${height}`,
            overflowX: `hidden`
          }}>
            <div className="hidden lg:block" style={{
              width: `100%`,
              height: `${height}`,
              backgroundImage: `url(${HeaderImage})`,
              backgroundSize: `cover`
            }}></div>
                <div 
                data-aos="fade-left"
                className="text-right flex flex-col" style={{
                    width: `100%`,
                    height: `${height}`
                }}>
                <HeaderLabel
                    pageTitle={ReactHtmlParser(pageTitle)} 
                    pageDescription={ReactHtmlParser(pageDescription)}
                    buttonLabel={calltoaction}
                    location={location}
                    slugaction={slugaction}>
                </HeaderLabel>
            </div> 
        </header>
    )
}

export default HeaderMain