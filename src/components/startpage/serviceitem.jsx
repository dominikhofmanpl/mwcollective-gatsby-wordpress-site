import React from 'react'

const ServiceItem = ({serviceIcon, serviceTitle, serviceDescription}) => {
    return (
        <div className="flex flex-col py-4 md:mr-4">
            <img src={serviceIcon} alt="" srcset="" style={{
                width: `4rem`
            }} className="my-3"/>
            <h3 className="mont-semi my-1">{serviceTitle}</h3>
            <p className="inriasans-reg my-3">{serviceDescription}</p>
        </div>
    )
}

export default ServiceItem