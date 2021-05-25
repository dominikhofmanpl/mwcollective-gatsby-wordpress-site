import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import ReactHtmlParser, {  } from 'react-html-parser'

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeaderMain from "../components/headermain"

const PortfolioTemplate = ({ data: { portfolio } }) => {

  return (
    <Layout>
      <Seo title={portfolio.title}/>
      <HeaderMain 
          height="75vh"
          HeaderImage={portfolio.cover_blog_post.coverBlogPost.sourceUrl}
          pageTitle={parse(portfolio.title)}>               
      </HeaderMain>
        {!!portfolio.blogtext.blogContent && (
          <section itemProp="articleBody" className="px-4 md:px-16 lg:px-36 py-8">{ReactHtmlParser(portfolio.blogtext.blogContent)}</section>
        )}
    </Layout>
  )
}

export default PortfolioTemplate

export const pageQuery = graphql`
  query PortfolioById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current post by id
    portfolio: wpPost(id: { eq: $id }) {
      id
      title
      cover_blog_post {
        coverBlogPost {
          sourceUrl
        }
      }
      blogtext {
        blogContent
      }
    }
  }
`
