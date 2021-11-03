import Box from '@spraoi/base/Box';
import React from 'react';
import ContactCTA from '../../components/ContactCTA';
import LinkList from '../../components/LinkList';
import Section from '../../components/Section';

const Perspectives = () => {
  const articles = useArticles();

  return (
    <>
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
          perspectives. We love to share our thoughts on the insurance
          marketplace, technology and&nbsp;life.
        </Box>
      </Section>
      <Section sx={{ px: [null, null, 7] }}>
        <LinkList
          items={articles
            .filter((article) => !article.frontmatter.isAnnouncement)
            .map((article) => ({
              link: `/perspectives${article.fields.slug}`,
              subText: (
                <>
                  {article.frontmatter.datePublished}
                </>
              ),
              title: article.frontmatter.title,
            }))}
          titleAs="h2"
        />
      </Section>
      <ContactCTA />
    </>
  );
};

export default Perspectives;
