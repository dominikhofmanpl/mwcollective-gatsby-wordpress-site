import React from 'react'
import HeaderMain from '../components/headermain'
import { gql, useQuery } from '@apollo/client'
import AboutSection from '../components/startpage/about'
import BrakeImage from '../components/brakeimage'
import Services from '../components/startpage/services'
import Layout from '../components/layout'
import ContactIndex from '../components/contact'
import ReactHtmlParser, {  } from 'react-html-parser'
import PortfolioIndex from '../components/portfolio/portfoliobox'
import Loading from '../components/loading'
import Seo from '../components/seo'

const GET_GENERAL_INFO = `
    generalSettings {
        title
        description
    }
`


const GET_HEADER_PAGE = `
    subpageFields {
        subpageCover {
            sourceUrl
        }
        subpageTitle
        subpageDesc
        callToActionName
        callToActionSlug
    }
`

const GET_ABOUT_SECTION = `
    about_section_main {
        aboutIconSection {
            sourceUrl
        }
        aboutTitleSection
        aboutContent
    }
`

const GET_BRAKE_IMAGE = `
    brake_image {
        brakeimage1 {
            sourceUrl
        }
        brakeimage2 {
            sourceUrl
        }
        brakeimage3 {
            sourceUrl
        }
    }
`

const GET_CONTACT_INFO = `
    contact_section {
        adres
        contactTelEmail
        openHours
    }
`

const GET_PAGE_INDEX = gql`
    query MyQuery {
        pageBy(uri: "strona-glowna") {
            ${GET_HEADER_PAGE}
            ${GET_ABOUT_SECTION}
            ${GET_BRAKE_IMAGE}
            ${GET_CONTACT_INFO}
        }
        ${GET_GENERAL_INFO}
    }
`

const Index = () => {
    const { data, loading, error } = useQuery(GET_PAGE_INDEX)

    if (loading) return <Loading></Loading>
    if (error) return 'Data error'

    return (
        <Layout isHomePage>
            <Seo title={data.generalSettings.title} description={data.generalSettings.description}></Seo>
            <HeaderMain 
                height="100vh"
                HeaderImage={data.pageBy.subpageFields.subpageCover.sourceUrl}
                pageTitle={data.pageBy.subpageFields.subpageTitle}
                pageDescription={data.pageBy.subpageFields.subpageDesc}
                calltoaction={data.pageBy.subpageFields.callToActionName}
                location="ml-auto"
                slugaction={data.pageBy.subpageFields.callToActionSlug}>               
            </HeaderMain>
            <Services></Services>
            <BrakeImage imageUrl={data.pageBy.brake_image.brakeimage1.sourceUrl}></BrakeImage>
            <PortfolioIndex></PortfolioIndex>
            <BrakeImage imageUrl={data.pageBy.brake_image.brakeimage2.sourceUrl}></BrakeImage>
            <AboutSection
                titleSection={data.pageBy.about_section_main.aboutTitleSection}
                contentSection={data.pageBy.about_section_main.aboutContent}>
            </AboutSection>
            <BrakeImage imageUrl={data.pageBy.brake_image.brakeimage3.sourceUrl}></BrakeImage>
            <ContactIndex
                address={ReactHtmlParser(data.pageBy.contact_section.adres)}
                telefonemail={ReactHtmlParser(data.pageBy.contact_section.contactTelEmail)}
                open_hours={ReactHtmlParser(data.pageBy.contact_section.openHours)}
            ></ContactIndex>
        </Layout>
    )
}

export default Index