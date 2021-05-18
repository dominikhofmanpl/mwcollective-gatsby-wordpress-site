import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import ReactHtmlParser, {  } from 'react-html-parser'

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeaderMain from "../components/headermain"

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  const featuredImage = {
    fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: post.featuredImage?.node?.alt || ``,
  }

  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />

      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <HeaderMain 
            height="75vh"
            // HeaderImage={data.pageBy.subpageFields.subpageCover.sourceUrl}
            pageTitle={parse(post.title)}
            pageDescription={post.excerpt}>               
        </HeaderMain>

        {!!post.blogtext.blogContent && (
          <section itemProp="articleBody" className="px-36 py-8">{ReactHtmlParser(post.blogtext.blogContent)}</section>
        )}

        <hr />

        <nav className="px-36 mont-black border-0 py-6">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            border: 0
          }}
        >
          <li>
            {previous && (
              <Link to={previous.uri} rel="prev">
                ← {parse(previous.title)}
              </Link>
            )}
          </li>

          <li>
            {next && (
              <Link to={next.uri} rel="next">
                {parse(next.title)} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpPost(id: { eq: $id }) {
      id
      title
      blogtext {
        blogContent
      }
      excerpt
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }

    # this gets us the previous post by id (if it exists)
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }

    # this gets us the next post by id (if it exists)
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
