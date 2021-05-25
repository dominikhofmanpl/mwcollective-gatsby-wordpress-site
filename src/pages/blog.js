import React from 'react'
import HeaderMain from '../components/headermain'
import { gql, useQuery } from '@apollo/client'
import WorkersBox from '../components/aboutpage/workers'
import BlogPostsBox from '../components/blog/blogposts'
import Layout from '../components/layout'
import Loading from '../components/loading'

const GET_HEADER_PAGE = `
    subpageFields {
        subpageCover {
            sourceUrl
        }
        subpageTitle
        subpageDesc
    }
`
const GET_PAGE_INDEX = gql`
    query MyQuery {
        pageBy(uri: "blog") {
            ${GET_HEADER_PAGE}
        }
    }
`

const Blog = () => {
    const { data, loading, error } = useQuery(GET_PAGE_INDEX)

    if (loading) return <Loading></Loading>
    if (error) return 'Data error'

    return (
        <Layout>
            <HeaderMain 
                height="75vh"
                HeaderImage={data.pageBy.subpageFields.subpageCover.sourceUrl}
                pageTitle={data.pageBy.subpageFields.subpageTitle}
                pageDescription={data.pageBy.subpageFields.subpageDesc}>               
            </HeaderMain>
            <BlogPostsBox></BlogPostsBox>
        </Layout>
    )
}

export default Blog