import Box from '@spraoi/base/Box';
import React from 'react';
import { graphql } from 'gatsby'
import { Link } from 'gatsby';
import get from 'lodash/get'
import ContactCTA from '../../components/ContactCTA';
import Section from '../../components/Section';

class Insights extends React.Component {
  
  render() {

  const posts = get(this, 'props.data.allContentfulBlogPost.edges')

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Company Insights | Shockmouse Media</title>
        <link name="description" content="" />
      </Helmet>
      <Section sx={{ textAlign: [null, null, 'center'] }}>
        <h1>Company Insights</h1>
        <Box
          as="p"
          sx={{
            fontSize: 4,
            lineHeight: 1,
            maxWidth: 'maxWidths.paragraphWider',
            mt: 5,
            mx: 'auto',
          }}
        >
          We are a team of individuals with various backgrounds and
          perspectives. We love to share our thoughts on the business, technology and&nbsp;life.
        </Box>
      </Section>
      <Section sx={{ px: [null, null, 7] }}>
        <Box>
          <div className="container">
            {/*<h2 className="section-headline">Recent articles</h2>*/}
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug} className="blog-item">
                    <Link to={`/insights/${node.slug}`}>
                      <Box
                      as="p"
                      sx={{
                        fontSize: 4,
                        lineHeight: 1,
                        maxWidth: 'maxWidths.paragraphWider',
                        mt: 5,
                        mx: 'auto',
                      }}
                      >
                      {node.title}
                      </Box>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </Box>
      </Section>
      <ContactCTA />
    </>
  );
  }
};

export default Insights;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [postDate], order: DESC }) {
      edges {
        node {
          title
          slug
          subtitle {
            subtitle
          }
        }
      }
    }
  }
`