import React from "react"
import { Link, graphql } from "gatsby"
import ReactHtmlParser, {  } from 'react-html-parser'
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeaderMain from "../components/headermain"
import PortfolioItem from "../components/portfolio/portfolioitem"
import HeaderCategory from '../components/headercategory'

const CategoryTemplate = ({ data: { category } }) => {
  return (
    <Layout>
      <Seo title={category.name} />
      <HeaderCategory
      pageTitle={ReactHtmlParser(category.name)}
      height="55vh"></HeaderCategory>
      <div className="grid grid-cols-1 md:grid-cols-2 py-16 px-4 lg:px-0">
        {category.posts.nodes.map(node => (
            <PortfolioItem
                projectImage={node.cover_blog_post.coverBlogPost.sourceUrl}
                titleProject={node.title}
                projectLink={node.slug}
                >
            </PortfolioItem>
        ))}
      </div>
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
                slug
                cover_blog_post {
                  coverBlogPost {
                    sourceUrl
                  }
                }
            }
        }
    }
  }
`
