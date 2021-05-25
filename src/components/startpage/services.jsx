import React from 'react'
import ServicesIcon from '../../assets/services-icon.svg'
import ServicesImage1 from '../../images/projects.jpg'
import { useQuery, gql } from '@apollo/client'
import ReactHtmlParser, {  } from 'react-html-parser'
import ServiceItem from './serviceitem'
import ServicesPhoto from './servicesphoto'
import LogoBackground from '../../assets/bg_logo.svg'

const GET_SERVICES = `
    servicesBox {
        iconService {
            sourceUrl
        }
        titleService
        contentService
    }
`

const GET_PHOTO_SERVICES = `
    photosServices {
        serviceImg {
            sourceUrl
        }
    }
`

const GET_SERVICES_BOX_ALL = gql`
    query MyQuery {
        pageBy(uri: "strona-glowna") {
            services_box {
                ${GET_SERVICES}
                ${GET_PHOTO_SERVICES}
            }        
        }
    }

`

const Services = () => {
    const { data, loading, error } = useQuery(GET_SERVICES_BOX_ALL)

    if (loading) return 'Loading...'
    if (error) return 'Data error..'

    return (
        <div id="oferta" className="grid grid-cols-1 md:grid-cols-2 py-4 lg:py-16" style={{
            backgroundImage: `url(${LogoBackground})`,
            backgroundSize: `37.5rem auto`,
            backgroundRepeat: `no-repeat`,
            backgroundPositionX: `5rem`
        }}>
            <div className="flex flex-col mx-auto px-12 lg:px-24 my-auto" data-aos="zoom-in">
                <img className="my-5" src={ServicesIcon} alt="" srcset="" style={{
                    width: `4rem`
                }}/>
                <h3 className="my-1 mont-black" style={{
                    fontSize: `1.5rem`
                }}>Oferta</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 py-12">
                    {data.pageBy.services_box.servicesBox.map(servicebox => (
                        <ServiceItem
                        key={servicebox.titleService}
                            serviceIcon={servicebox.iconService.sourceUrl}
                            serviceTitle={servicebox.titleService}
                            serviceDescription={ReactHtmlParser(servicebox.contentService)}
                        ></ServiceItem>
                    ))}
                </div>
            </div>
            <div className="flex flex-col" data-aos="fade-left">
                {data.pageBy.services_box.photosServices.map(photosService => (
                    <ServicesPhoto servicesImage={photosService.serviceImg.sourceUrl}></ServicesPhoto>
                ))}
            </div>
        </div>
    )
}

export default Services