import React from 'react'
import AboutIcon from '../../assets/about-icon.svg'
import PortfolioItem from './portfolioitem'
import ServicesImage1 from '../../images/projects.jpg'
import { gql, useQuery } from '@apollo/client'
import { Link } from 'gatsby'
import LogoBackground from '../../assets/bg_logo.svg'

const GET_POSTS_WITH_CATEGORY = `
    posts(where: {categoryName: "Portfolio"}) {
        nodes {
            id
            title
            slug
            categories(first: 1) {
                    nodes {
                        name
                    }
                }
            }
        }
`

const GET_CATEGORIES = `
category(id: "dGVybTo3Mg==") {
    children {
        nodes {
            id
            name
            slug
        }
    }
}
`

const GET_CATEGORY_PORTFOLIO = gql`
    query MyQuery {
        ${GET_CATEGORIES}
        ${GET_POSTS_WITH_CATEGORY}
    }

`

const PortfolioIndex = () => {
    const { data, loading, error } = useQuery(GET_CATEGORY_PORTFOLIO)

    if (loading) return 'Loading...'
    if (error) return 'Data error...'

    return (
        <div className="flex flex-col py-12 lg:py-16 px-12 lg:px-24" style={{
            backgroundImage: `url(${LogoBackground})`,
            backgroundSize: `37.5rem auto`,
            backgroundRepeat: `no-repeat`,
            backgroundPositionX: `center`
        }}>
            <div className="flex flex-col">
                <img className="my-5 mx-auto" src={AboutIcon} alt="" srcset="" style={{
                    width: `4rem`
                }} data-aos="zoom-in"/>
                <h2 className="mont-black mx-auto my-1" style={{
                    fontSize: `1.5rem`
                }} data-aos="zoom-in">Nasze realizacje</h2>
                <p className="inriasans-reg mx-auto md:w-96 mt-8 mb-4 text-center" data-aos="zoom-in">Wybierz kategorię</p>
                <div className="grid grid-cols-4 mx-auto my-4" data-aos="zoom-in">
                    {data.category.children.nodes.map(node => (
                        <div data-aos="zoom-in"><Link to={`/realizacje/${node.slug}`}><p className="inriasans-reg uppercase">{node.name}</p></Link></div>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 py-4 lg:py-16">
                {data.posts.nodes.map(node => (
                    <PortfolioItem 
                        projectLink={node.slug}
                        projectImage={ServicesImage1}
                        titleProject={node.title}
                        categoryProject={node.categories.nodes.map(node => (
                            node.name
                        ))}>
                    </PortfolioItem>
                ))}
            </div>
        </div>
    )
}

export default PortfolioIndex