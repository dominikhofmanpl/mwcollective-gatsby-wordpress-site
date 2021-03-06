import { Link } from 'gatsby'
import React from 'react'

const PortfolioItem = ({projectImage, titleProject, categoryProject, projectLink}) => {
    return (
        <Link to={`/portfolio/${projectLink}`}>
            <div className="md:mx-auto my-3 w-auto h-80 md:w-96 md:h-80" style={{
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
        </Link>
    )
}

export default PortfolioItem