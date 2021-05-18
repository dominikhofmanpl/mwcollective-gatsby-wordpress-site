import React from 'react'

const ServicesPhoto = ({servicesImage}) => {
    return (
        <img src={servicesImage} className="mx-auto my-3" alt="" srcset="" style={{
            width: `30vw`
        }}/>
    )
}

export default ServicesPhoto