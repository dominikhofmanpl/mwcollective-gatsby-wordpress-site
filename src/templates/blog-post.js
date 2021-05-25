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
            HeaderImage={post.cover_blog_post.coverBlogPost.sourceUrl}
            pageTitle={parse(post.title)}
            pageDescription={post.excerpt}>               
        </HeaderMain>

        {!!post.blogtext.blogContent && (
          <section itemProp="articleBody" className="px-4 md:px-16 lg:px-36 py-8">{ReactHtmlParser(`${post.blogtext.blogContent}`)}</section>
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
              <Link to={`/blog/${previous.slug}`} rel="prev">
                ← {parse(previous.title)}
              </Link>
            )}
          </li>

          <li>
            {next && (
              <Link to={`/blog/${next.slug}`} rel="next">
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
      cover_blog_post {
        coverBlogPost {
          sourceUrl
        }
      }
    }

    # this gets us the previous post by id (if it exists)
    previous: wpPost(id: { eq: $previousPostId }) {
      slug
      title
    }

    # this gets us the next post by id (if it exists)
    next: wpPost(id: { eq: $nextPostId }) {
      slug
      title
    }
  }
`
