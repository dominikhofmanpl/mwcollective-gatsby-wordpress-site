import React from 'react'
import HeaderMain from '../components/headermain'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ReactHtmlParser, {  } from 'react-html-parser'
import { graphql } from 'gatsby'

const Portfolio = ({ data: { portfolio }}) => {
    return (
        <Layout>
            <Seo title={portfolio.title}></Seo>
            <article
                className="blog-post"
                itemScope
                itemType="http://schema.org/Article"
            >
                <HeaderMain 
                    height="75vh"
                    // HeaderImage={data.pageBy.subpageFields.subpageCover.sourceUrl}
                    pageTitle={ReactHtmlParser(portfolio.title)}>               
                </HeaderMain>
            </article>
        </Layout>
    )
}

export default Portfolio

export const portfolioQuery = graphql`
  query portfolioQueryWP (
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current post by id
    portfolio:  wpPost(
        categories: {nodes: {elemMatch: {name: {in: "Portfolio"}}}}
        id: {eq: $id}
    ) {
        id
        title
    }
  }
`