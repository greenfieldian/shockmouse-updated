import Box from '@spraoi/base/Box';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import ContactCTA from '../../components/ContactCTA';
import Icon from '../../components/Icon';
import Section from '../../components/Section';
import LinkList from '../../components/LinkList';
import IconFigure from '../../components/IconFigure';

const CustomerExperienceSolutionsPage = ({ location: { pathname } }) => (
  <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Digital | Shockmouse Media</title>
        <link name="description" content="" />
    </Helmet>
    <Section sx={{ textAlign: [null, null, 'center'] }}>
      <Box as="h1" sx={{ fontSize: [5, null, null, 6] }}>
        Digital
      </Box>
      <Box
        as="p"
        sx={{
          fontSize: 4,
          lineHeight: 1,
          maxWidth: 'maxWidths.paragraphWidest',
          mt: 5,
          mx: 'auto',
        }}
      >
        Having experienced every stage in digital, we’re able to analyze, build and deploy digital solutions that help you stay agile amongst your competitors.

      </Box>
    </Section>
    <Section sx={{ px: [0, null, 7] }}>
      <Box
        as="ul"
        sx={{
          display: 'grid',
          gridColumnGap: [null, null, 5],
          gridRowGap: [null, null, 5],
          gridTemplateColumns: [
            '1fr 1fr',
            null,
            '1fr 1fr 1fr',
            'repeat(6, 1fr)',
          ],
        }}
      >
        {[
          { svg: 'ruler', text: 'Standardize' },
          { svg: 'repeat', text: 'Repeat' },
          { svg: 'observer', text: 'Observe' },
          { svg: 'scale', text: 'Measure' },
          { svg: 'sliders', text: 'Experiment' },
          { svg: 'stairs', text: 'Scale' },
        ].map((item, i) => (
          <IconFigure
            key={item.text}
            as="li"
            iconWidth="2.5rem"
            size="8.5rem"
            svg={item.svg}
            sx={{
              bg: `accentScale.${i}`,
              borderRadius: [0, null, 2],
              boxShadow: 0,
              color: 'offWhite',
              width: '100%',
            }}
            text={item.text}
          />
        ))}
      </Box>
    </Section>
    <Section sx={{ textAlign: [null, null, 'center'] }}>
      <h2>Core Functions</h2>
      <Box
        as="p"
        sx={{
          lineHeight: 2,
          maxWidth: 'maxWidths.paragraphWider',
          mt: 0,
          mx: 'auto',
        }}
      >

      </Box>
    </Section>
    <Section sx={{ px: [0, null, 7] }}>
      <Box
        as="ul"
        sx={{
          display: 'grid',
          gridColumnGap: 5,
          gridRowGap: ['1px', null, 5],
          gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
        }}
      >
        {[
          {
            description: (
              <>
                Assessing your current technology ecosystem, we look for optimization opportunities within maximum impact. Harnessing the power of the cloud, we work with you to build, deploy and manage lightweight solutions that are cost effective and provide long-term scalability value.   
              </>
            ),
            svg: 'pie-chart',
            title: <>Cloud Architecture</>,
          },
          {
            description: (
              <>
                Cyberattacks are more sophisticated, and costly than ever. Smart leaders understand that cyberattacks aren’t a possibility—they’re inevitable. We help organizations identify and prioritize critical assets, make build-or-buy decisions, and build capabilities to neutralize threats. 
              </>
            ),
            svg: 'gear',
            title: 'DevOps & Security',
          },
          {
            description: (
              <>
                User experience is paramount to business success, both digitally and otherwise. We harness proven UX methodologies to analyze and rebuild digital interfaces to improve experiences for customers and internal stakeholders alike.
              </>
            ),
            svg: 'thief',
            title: 'UX/UI',
          },
          {
            description: (
              <>
                Content is quickly becoming a major asset to all organizations. Smart leaders understand the value content creation brings to a business. Through tailormade solutions, we help plan, develop and publish content, minimizing unnecessary deployment friction.
              </>
            ),
            svg: 'scale',
            title: 'Content Management',
          },
        ].map((item, i) => (
          <Box
            key={item.svg}
            as="li"
            sx={{
              bg: 'white',
              borderRadius: [null, null, 2],
              boxShadow: 3,
              display: 'flex',
              flexDirection: 'column',
              p: [6, null, null, 7],
            }}
          >
            <Icon
              svg={item.svg}
              sx={{
                bg: `accentScale.${i}`,
                borderRadius: '50%',
                color: 'offWhite',
                height: '4rem',
                p: '1rem',
                width: '4rem',
              }}
            />
            <Box as="h3" sx={{ mt: 5 }}>
              {item.title}
            </Box>
            <Box
              as="p"
              sx={{ color: 'text.subtle', fontSize: 2, lineHeight: 2, mt: 4 }}
            >
              {item.description}
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
    
    <Section sx={{ textAlign: [null, null, 'center'] }}>
      <h2>Technology Partners</h2>
      <Box
          as="p"
          sx={{
            lineHeight: 2,
            maxWidth: 'maxWidths.paragraphWider',
            mt: 4,
            mx: 'auto',
          }}
        >
          We've developed partnerships with nearly every major CRM, analytics, development and digital experience partner. Here are a few of the many solutions providers we work with on a daily basis.
        </Box>
      <Section sx={{ px: [null, null, 7] }}>
        <LinkList
          items={[
            {
              icon: 'aws-partner',
              link:
                'https://aws.amazon.com/partners/consulting/',
              title: 'AWS Consulting Partner',
            },
            {
              icon: 'hubspot-logo',
              link:
                'https://ecosystem.hubspot.com/marketplace/solutions',
              title: 'Hubspot Solutions Partner',
            },
            {
              icon: 'salesforce-partner',
              link:
                'https://partners.salesforce.com/',
              title: 'Salesforce Consulting Partner',
            },
            {
              icon: 'wp-engine-partner',
              link:
                'https://wpengine.com/partners/agencies/',
              title: 'WP Engine Agency Partner',
            },
            {
              icon: 'zapier-partner',
              link:
                'https://zapier.com/experts',
              title: 'Zapier Integration Partner',
            },
          ]}
          split
          titleAs="h3"
        />
      </Section>
    </Section>
    <ContactCTA />
  </>
);

CustomerExperienceSolutionsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default CustomerExperienceSolutionsPage;
