import React from 'react'
import HeaderLabel from './headerlabel'
import ReactHtmlParser, {  } from 'react-html-parser'

const HeaderCategory = ({pageTitle, pageDescription, height}) => {
    return (
        <header 
        style={{
            width: `100vw`, minHeight: `${height}`,
            overflowX: `hidden`
          }}>
                <div 
                data-aos="fade-left"
                className="text-right flex flex-col" style={{
                    width: `100%`,
                    height: `${height}`
                }}>
                <HeaderLabel
                    pageTitle={ReactHtmlParser(pageTitle)} 
                    pageDescription={ReactHtmlParser(pageDescription)}
                    location="mx-auto my-auto">
                </HeaderLabel>
            </div> 
        </header>
    )
}

export default HeaderCategory