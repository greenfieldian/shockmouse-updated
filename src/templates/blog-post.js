import React from 'react'
import Box from '@spraoi/base/Box';
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Section from './../components/Section';
import { renderRichText } from "gatsby-source-contentful/rich-text"


import * as postStyles from "./post.module.css"



class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    

    return (
      <Section sx={{ textAlign: [null, null, 'center'] }}>
      <Box>
        <div className={postStyles.blog_post_container}>
          <div className="mt-5 container">
            <h1 className='blog-post-headline'>{post.title}</h1>
            <div className="blog-post-meta">
              <p
                style={{
                  display: 'block',
                }}
              >
                {post.postDate}
              </p>
            </div>
            <hr></hr>
            <div className={postStyles.text_container}>
                <div className={postStyles.post_body}>{renderRichText(post.body)}</div>
            </div>
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
      body {
        raw
      }
    }
  }
`
