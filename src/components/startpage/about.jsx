import React from 'react'
import { gql, useQuery } from '@apollo/client'
import AboutIcon from '../../assets/about-icon.svg'
import ReactHtmlParser, {  } from 'react-html-parser'
import Button from '../button'
import LogoBackground from '../../assets/bg_logo.svg'

const GET_ABOUT_SECTION_PHOTO = gql`
    query MyQuery {
        pageBy(uri: "strona-glowna") {
            about_section_main {
                photosAboutContent {
                    aboutPhoto {
                        sourceUrl
                    }
                }
            }
        }
    }
`

const AboutSection = ({ titleSection, contentSection }) => {
    const { data, loading, error } = useQuery(GET_ABOUT_SECTION_PHOTO)

    if (loading) return 'Loading...'
    if (error) return 'Data error'

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 py-12" style={{
            backgroundImage: `url(${LogoBackground})`,
            backgroundSize: `37.5rem auto`,
            backgroundRepeat: `no-repeat`,
            backgroundPositionX: `right`
        }}>
            <div className="flex flex-col mx-auto py-4 lg:py-16 px-12 lg:px-24 my-auto" data-aos="fade-right">
                <img className="my-5" src={AboutIcon} alt="" srcset="" style={{
                    width: `4rem`
                }}/>
                <h3 className="my-1 mont-black" style={{
                    fontSize: `1.5rem`
                }}>{titleSection}</h3>
                <p className="my-8 inriasans-reg">{ReactHtmlParser(contentSection)}</p>
                <Button label="czytaj więcej o naszym zespole" location="mr-auto"></Button>
            </div>
            <div className="flex flex-col" data-aos="fade-left">
                {data.pageBy.about_section_main.photosAboutContent.map(aboutPhoto => (
                    <img 
                        src={aboutPhoto.aboutPhoto.sourceUrl} 
                        className="mx-auto my-4 md:my-auto md:w-48 lg:w-80" 
                        srcset="" 
                        />
                ))}
            </div>         
        </div>
    )
}

export default AboutSection