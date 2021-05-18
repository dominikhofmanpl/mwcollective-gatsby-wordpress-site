import React from 'react'
import { gql, useQuery } from '@apollo/client'
import AboutIcon from '../../assets/about-icon.svg'
import ReactHtmlParser, {  } from 'react-html-parser'

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
        <div className="grid grid-cols-2 py-16">
            <div className="flex flex-col mx-auto px-24 my-auto">
                <img className="my-5" src={AboutIcon} alt="" srcset="" style={{
                    width: `4rem`
                }}/>
                <h3 className="my-1 mont-black" style={{
                    fontSize: `1.5rem`
                }}>{titleSection}</h3>
                <p className="my-5 inriasans-reg">{ReactHtmlParser(contentSection)}</p>
            </div>
            <div className="flex flex-col">
                {data.pageBy.about_section_main.photosAboutContent.map(aboutPhoto => (
                    <img 
                        src={aboutPhoto.aboutPhoto.sourceUrl} 
                        className="mx-auto my-3" 
                        srcset="" 
                        style={{
                            width: `30vw`
                    }}/>
                ))}
            </div>         
        </div>
    )
}

export default AboutSection