import React from 'react'

const PortfolioItem = ({projectImage, titleProject, categoryProject}) => {
    return (
        <div className="mx-auto my-3" style={{
            width: `30vw`,
            height: `35vh`,
            backgroundImage: `url(${projectImage})`,
            backgroundSize: `cover`,
            backgroundPosition: `center center`
        }}>
            <div className="w-100 flex portfolio-item-label" style={{
                height: `100%`
            }}>
                <div className="flex flex-col mx-auto my-auto text-center text-white">
                    <h2 className="mont-semi uppercase">{titleProject}</h2>
                    <p className="inriasans-reg uppercase mt-2">{categoryProject}</p>
                </div>
            </div>
        </div>
    )
}

export default PortfolioItem