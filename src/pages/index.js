import React from 'react'
import HeaderMain from '../components/headermain'
import { gql, useQuery } from '@apollo/client'
import AboutSection from '../components/startpage/about'
import BrakeImage from '../components/brakeimage'
import Services from '../components/startpage/services'
import Layout from '../components/layout'

const GET_HEADER_PAGE = `
    subpageFields {
        subpageCover {
            sourceUrl
        }
        subpageTitle
        subpageDesc
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

const GET_PAGE_INDEX = gql`
    query MyQuery {
        pageBy(uri: "strona-glowna") {
            ${GET_HEADER_PAGE}
            ${GET_ABOUT_SECTION}
            ${GET_BRAKE_IMAGE}
        }
    }
`

const Index = () => {
    const { data, loading, error } = useQuery(GET_PAGE_INDEX)

    if (loading) return 'Loading...'
    if (error) return 'Data error'

    return (
        <Layout isHomePage>
            <HeaderMain 
                height="100vh"
                HeaderImage={data.pageBy.subpageFields.subpageCover.sourceUrl}
                pageTitle={data.pageBy.subpageFields.subpageTitle}
                pageDescription={data.pageBy.subpageFields.subpageDesc}>               
            </HeaderMain>
            <AboutSection
                titleSection={data.pageBy.about_section_main.aboutTitleSection}
                contentSection={data.pageBy.about_section_main.aboutContent}>
            </AboutSection>
            <BrakeImage imageUrl={data.pageBy.brake_image.brakeimage1.sourceUrl}></BrakeImage>
            <Services></Services>
            <BrakeImage imageUrl={data.pageBy.brake_image.brakeimage2.sourceUrl}></BrakeImage>
        </Layout>
    )
}

export default Index