import React from 'react'
import LogoBackground from '../../assets/bg_logo.svg'

const AboutWorkers = ({name, description, aboutimage}) => (
    <div className="grid grid-cols-1 md:grid-cols-2 my-12 lg:px-24">
        <div className="flex flex-col my-auto" data-aos="fade-right">
            <h2 className="mont-black my-3" style={{
                fontSize: `1.8rem`
            }}>{name}</h2>
            <p className="inriasans-reg my-5" style={{
                width: `80%`,
                lineHeight: `1.6rem`
            }}>
                {description}
            </p>
        </div>
        <img src={aboutimage} alt="zdjęcie" data-aos="fade-left" className="mx-auto my-4 md:my-auto md:w-48 lg:w-auto"/>
    </div>
)

export default AboutWorkers