import Box from '@spraoi/base/Box';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import ContactCTA from '../../components/ContactCTA';
import Icon from '../../components/Icon';
import LinkList from '../../components/LinkList';
import Map from '../../components/Map';
import Section from '../../components/Section';
import landMap from '../../data/maps/land.json';

const AboutUsPage = ({ location: { pathname } }) => {

  return (
    <>
      <Section>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box as="p" sx={{ fontSize: 4, lineHeight: 1, mt: 5 }}>
          We're a business consulting firm leveraging technology to provide rapid growth to the organizations we serve. Our teams have the autonomy to move fast and do what's right for our clients, making us more personal and nimble than traditional consulting firms. Through our lean process, we're able to craft solutions that minimize waste, promoting long-term growth. 
          </Box>
          <Icon
            svg="team-spirit"
            sx={{
              display: ['none', null, null, 'block'],
              flexShrink: 0,
              ml: 7,
            }}
            width="14rem"
          />
        </Box>
      </Section>
      <Section sx={{ textAlign: [null, null, 'center'] }}>
        <h2>Reach</h2>
        <Box
          as="p"
          sx={{
            lineHeight: 2,
            maxWidth: 'maxWidths.paragraph',
            mt: 4,
            mx: 'auto',
          }}
        >
          Our reach spans the globe. With technicians and strategists spanning the country, we're able to connect on a local and global scale.
        </Box>
      </Section>
      <Section sx={{ display: [null, null, 'flex'], pt: 0 }}>
        <Box as="figure" sx={{ mr: [null, null, 6, 7], mt: 7, width: '100%' }}>
          <Map
            annotationColor="accentSecondary"
            geography={landMap}
            markers={[
              {
                annotationProps: { dx: 40, dy: 0 },
                annotationTextProps: { x: 10 },
                coordinates: [-86.7816, 36.1627],
                name: 'Nashville',
              }, 
              {
                annotationProps: { curve: 1, dx: -37, dy: -40 },
                annotationTextProps: { textAnchor: 'end', x: -10 },
                coordinates: [-87.909416, 43.041069],
                name: 'Milwaukee',
              },
              {
                annotationProps: { curve: 1, dx: -40, dy: 0 },
                annotationTextProps: { textAnchor: 'end', x: -10 },
                coordinates: [-96.796989, 32.776665],
                name: 'Dallas',
              },
            ]}
            projectionConfig={{
              center: [-98, 38],
              scale: 700,
            }}
            viewHeight={400}
            viewWidth={720}
          />
        </Box>
        <Box as="figure" sx={{ mt: 7, width: '100%' }}>
          <Map
            geography={landMap}
            markers={[
              {
                annotationProps: { dx: -40, dy: 0 },
                annotationTextProps: { textAnchor: 'end', x: -10 },
                coordinates: [0.1276, 51.5072],
                name: 'London',
              },
            ]}
            projectionConfig={{
              center: [8, 47],
              scale: 400,
            }}
            viewHeight={400}
            viewWidth={720}
          />
        </Box>
      </Section>
      {/*<Section sx={{ textAlign: [null, null, 'center'] }}>
        <h2>Founders</h2>
        <Box
          as="p"
          sx={{
            lineHeight: 2,
            maxWidth: 'maxWidths.paragraph',
            mt: 4,
            mx: 'auto',
          }}
        >
          Our founders are an accurate representation of our team, representing
          the confluence of Insurance subject matter expertise and Silicon
          Valley technological&nbsp;acumen.
        </Box>
      </Section>
      <Section
        as="ul"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: [null, null, 'center', 'space-between'],
          pt: 0,
        }}
      >
        {people
          .filter((p) => p.executive > 0 && p.active === 'y')
          .sort((a, b) => (a.executive > b.executive ? 1 : -1))
          .map((person) => (
            <Box
              key={person.id}
              as="li"
              sx={{ '&:nth-of-type(2)': { ml: [null, null, 7, 0] } }}
            >
              <Box
                key={person.id}
                as={Link}
                sx={{
                  '&:hover': {
                    '.founder-image': {
                      boxShadow: 2,
                      transform: 'scale(1.01)',
                    },
                    '.founder-name': { color: 'accentDark' },
                  },
                  alignItems: 'center',
                  display: 'flex',
                  mt: 7,
                }}
                to={`/people/${person.id}/`}
              >
                <Avatar
                  alt={`${person.givenName} ${person.familyName}`}
                  className="founder-image"
                  image={person.image}
                  size={['4rem', null, null, '7rem']}
                  sx={{
                    display: 'block',
                    transition: 'box-shadow 0.3s, transform 0.3s',
                  }}
                />
                <Box sx={{ ml: [4, null, null, 5] }}>
                  <Box
                    as="h3"
                    className="founder-name"
                    sx={{
                      color: 'accent',
                      fontSize: 3,
                      transition: 'color 0.2s',
                    }}
                  >
                    {person.givenName} {person.familyName}
                  </Box>
                  <Box
                    sx={{
                      color: 'text.subtle',
                      fontSize: 2,
                      fontWeight: 'semibold',
                      mt: 2,
                    }}
                  >
                    {person.position}
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Section>*/}
      <Section sx={{ textAlign: [null, null, 'center'] }}>
        <h2>Our Partners</h2>
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
      </Section>
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
      {/*
      <Section sx={{ pt: 0, px: [0, null, 7] }}>
        <Box
          sx={{
            alignItems: 'center',
            bg: 'white',
            borderRadius: [null, null, 2],
            boxShadow: 3,
            display: [null, null, null, 'flex'],
            justifyContent: 'space-between',
            mt: ['1px', null, 7],
            p: [6, null, null, 7],
          }}
        >
          <Icon
            svg="west-monroe-logo"
            sx={{
              flexShrink: 0,
              mb: [3, null, null, 0],
              mr: [null, null, null, 7],
            }}
            width={['10rem', null, null, '13rem']}
          />
          <Box>
            <h3>West Monroe Partners</h3>
            <Box as="p" sx={{ color: 'text.subtle', lineHeight: 2, mt: 4 }}>
              Spraoi and West Monroe Partners has developed a relationship
              focused on driving results in the industry. West Monroe Partners
              provides business domain experts to augment Spraoi&rsquo;s next
              generation technology&nbsp;capabilities.
            </Box>
          </Box>
        </Box>
          </Section>*/}
      <ContactCTA />
    </>
  );
};

AboutUsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default AboutUsPage;
