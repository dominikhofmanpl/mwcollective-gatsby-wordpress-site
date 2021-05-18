import React from 'react'
import HeaderLabel from './headerlabel'
import ReactHtmlParser, {  } from 'react-html-parser'

const HeaderMain = ({HeaderImage, pageTitle, pageDescription, height}) => {
    return (
        <header className="grid grid-cols-1 md:grid-cols-2" style={{
            width: `100vw`, minHeight: `${height}`
          }}>
            <div className="grid grid-cols-1" style={{
              width: `100%`,
              height: `${height}`,
              backgroundImage: `url(${HeaderImage})`,
              backgroundSize: `cover`
            }}></div>
                <div className="text-right flex flex-col" style={{
                    width: `100%`,
                    height: `${height}`
                }}>
                <HeaderLabel
                    pageTitle={ReactHtmlParser(pageTitle)} 
                    pageDescription={ReactHtmlParser(pageDescription)}>
                </HeaderLabel>
            </div>
        </header>
    )
}

export default HeaderMain