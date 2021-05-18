import React from 'react'
import AboutIcon from '../../assets/about-icon.svg'
import PortfolioItem from './portfolioitem'
import ServicesImage1 from '../../images/projects.jpg'

const PortfolioIndex = () => {
    return (
        <div className="flex flex-col py-16 px-24">
            <div className="flex flex-col">
                <img className="my-5 mx-auto" src={AboutIcon} alt="" srcset="" style={{
                    width: `4rem`
                }}/>
                <h2 className="mont-black mx-auto my-1" style={{
                    fontSize: `1.5rem`
                }}>Nasze realizacje</h2>
                <p className="inriasans-reg mx-auto md:w-96 my-5 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at molestie nunc. Etiam nisl felis, tristique viverra ullamcorper quis, hendrerit congue nulla. Ut malesuada imperdiet diam et fermentum. Nam dictum aliquam nulla.</p>
            </div>
            <div className="grid grid-cols-2 py-16">
                <PortfolioItem 
                    projectImage={ServicesImage1}
                    titleProject="Nowoczesna łazienka"
                    categoryProject="Łazienka">
                </PortfolioItem>
                <PortfolioItem 
                    projectImage={ServicesImage1}
                    titleProject="Nowoczesna łazienka"
                    categoryProject="Łazienka">
                </PortfolioItem>
                <PortfolioItem 
                    projectImage={ServicesImage1}
                    titleProject="Nowoczesna łazienka"
                    categoryProject="Łazienka">
                </PortfolioItem>
            </div>
        </div>
    )
}

export default PortfolioIndex