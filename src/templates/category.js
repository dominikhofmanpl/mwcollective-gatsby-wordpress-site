import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import ReactHtmlParser, {  } from 'react-html-parser'

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeaderMain from "../components/headermain"

const CategoryTemplate = ({ data: { category } }) => {
  return (
    <Layout>
      <Seo title={category.name} />

      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <HeaderMain 
            height="75vh"
            // HeaderImage={data.pageBy.subpageFields.subpageCover.sourceUrl}
            pageTitle={parse(category.name)}>               
        </HeaderMain>
      </article>
    </Layout>
  )
}

export default CategoryTemplate

export const catsQuery = graphql`
  query MyQuery(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current post by id
    category: wpCategory(id: { eq: $id }) {
        name
        posts {
            nodes {
                title
                id
            }
        }
    }
  }
`
