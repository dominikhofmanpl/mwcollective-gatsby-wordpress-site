import React from 'react'

const AboutWorkers = ({name, description, aboutimage}) => (
    <div className="grid sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-2 container my-12">
        <div className="flex flex-col my-auto">
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
        <img src={aboutimage} alt="zdjęcie"/>
    </div>
)

export default AboutWorkers