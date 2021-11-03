import React from 'react'
import Box from '@spraoi/base/Box';
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Section from './../components/Section';


class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Section sx={{ textAlign: [null, null, 'center'] }}>
      <Box>
        <div className="blog-post-container my-5">
          <div className="mt-5 container">
            <h1 className='blog-post-headline'>{post.title}</h1>
            <div className="blog-post-meta">
              <p className="blog-post-author">{post.author.name}</p>
              <p
                style={{
                  display: 'block',
                }}
              >
                {post.postDate}
              </p>
            </div>
            <hr></hr>
          </div>
        </div>
      </Box>
      </Section>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      author {
        name
      }
      title
      postDate(formatString: "MMMM Do, YYYY")
    }
  }
`
