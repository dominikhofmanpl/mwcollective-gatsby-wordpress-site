import React from 'react'
import { gql, useQuery } from '@apollo/client'
import BlogPost from './blogpost'
import ReactHtmlParser, {  } from 'react-html-parser'

const GET_BLOG_POSTS = gql`
    query MyQuery {
  posts {
    nodes {
      id
      title
      excerpt
      author {
        node {
          name
        }
      }
      uri
      date
      cover_blog_post {
        coverBlogPost {
          sourceUrl
        }
      }
    }
  }
}
`

const BlogPostsBox = () => {
    const { data, error, loading } = useQuery(GET_BLOG_POSTS)

    if (loading) return 'Loading...'
    if (error) return 'Error...'

    return (
        <div className="container px-24 py-16">
            {data.posts.nodes.map(node => (
                <BlogPost
                    key={node.id}
                    name={node.title}
                    description={ReactHtmlParser(node.excerpt)}
                    addedBy={node.author.node.name}
                    dateRelease={node.date}
                    bloghref={node.uri}
                    aboutimage={node.cover_blog_post.coverBlogPost.sourceUrl}>
                </BlogPost>
            ))}
        </div>
    )
}

export default BlogPostsBox