import Box from '@spraoi/base/Box';
import PropTypes from 'prop-types';
import React from 'react';
import ContactCTA from '../../components/ContactCTA';
import Icon from '../../components/Icon';
import Section from '../../components/Section';
import { Helmet } from 'react-helmet';

const ServicesPage = ({ location: { pathname } }) => (
  <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Marketing & Sales | Shockmouse Media</title>
        <link name="description" content="" />
    </Helmet>
    <Section sx={{ textAlign: [null, null, 'center'] }}>
      <Box as="h1" sx={{ fontSize: [5, null, null, 6] }}>
        Marketing & Sales
      </Box>
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
        Through strong operational structures, technology systems and management support, we enable your sales and marketing staff to do what they do best - create customer journeys that lead to lasting relationships.
      </Box>
    </Section>
    {/* <Section sx={{ maxWidth: ['100%', null, null, '50%'], px: [0, null, 7] }}>
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
            'repeat(3, 1fr)',
          ],
        }}
      >
        {[
          // { svg: 'pen-and-pad', text: 'Third Party Administration' },
          { svg: 'database', text: 'Data' },
          { svg: 'sigma', text: 'Integration' },
          { svg: 'light-bulb', text: 'Innovation' },
          // { svg: 'open', text: 'Build, Operate, Transfer' },
        ].map((item) => (
          <IconFigure
            key={item.text}
            as="li"
            iconWidth="2.5rem"
            size="8.5rem"
            svg={item.svg}
            sx={{
              bg: 'primary',
              borderRadius: [0, null, 2],
              boxShadow: 3,
              color: 'white',
              px: 5,
              width: '100%',
            }}
            text={item.text}
          />
        ))}
      </Box>
    </Section>
    <Section sx={{ textAlign: [null, null, 'center'] }}>
      <h2>Offerings</h2>
      <Box
        as="p"
        sx={{
          lineHeight: 2,
          maxWidth: 'maxWidths.paragraphWide',
          mt: 4,
          mx: 'auto',
        }}
      >
        We provide technology strategy, management, design, development and
        deployment capabilities. When combined with the depth of our technology
        talent and domain expertise we can bring demonstrable
        change&nbsp;in&nbsp;weeks.
      </Box>
    </Section> */}
    <Section sx={{ px: [0, null, 7] }}>
      <Box
        as="ul"
        sx={{
          borderRadius: [0, null, 2],
          boxShadow: 3,
          display: 'grid',
          gridRowGap: '1px',
          gridTemplateColumns: '1fr',
          maxWidth: 'maxWidths.paragraphWider',
          mx: 'auto',
          overflow: 'hidden',
        }}
      >
        {[
          {
            description: (
              <>
                We work to automate the sales process so internal stakeholders can dedicate their time and energy to facilitating valuable, personal relationships with customers.
              </>
            ),
            title: <>Marketing & Sales Automation</>,
          },
          {
            description: (
              <>
                Studies have shown the importance of a well-developed customer journey. Providing customers with an adequate and fulfilling sales experience leads to greater conversions, and increased customer LTV. We work to develop customer journeys that meet the needs of internal stakeholders, while providing ultimate value to your customers.
              </>
            ),
            title: <>Customer Journey Architecture</>,
          },
          {
            description: (
              <>
                Customers today expect a connected and personalized service experience. Utilizing cloud resources, we develop omnichannel experiences that allow you to stay connected with your customers at every stage of their journey.
              </>
            ),
            title: <>Omnichannel Experiences</>,
          },
          {
            description: (
              <>
                For product makers and sellers, digital commerce is vital to current and future survival. Our team helps you navigate e-commerce through pricing strategies, omnichannel experiences and product information management.
              </>
            ),
            title: <>E-Commerce</>,
          },
          /* {
            description: (
              <>
                With our alliance partners, we can handle the entire value chain
                from quote through administration, in both D2C and
                agent-assisted models for flexibility as consumer behaviors
                evolve. Our integrated technology and TPA services include, but
                are not&nbsp;limited&nbsp;to:
                <Box
                  as="ul"
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    mt: [5, null, 2],
                  }}
                >
                  {[
                    'Customer support',
                    'Service center operations',
                    'UW decision management',
                    'Billing',
                    'Collections',
                    'Commissions',
                    'Reconciliations',
                    'Data feeds/reporting',
                    'Service level agreements',
                    'Agent-assisted phone sales',
                  ].map((service) => (
                    <Box
                      key={service}
                      as="li"
                      sx={{
                        bg: 'grays.0',
                        borderRadius: 1,
                        color: 'text.primary',
                        fontSize: 0,
                        letterSpacing: 2,
                        lineHeight: 1,
                        mr: 4,
                        mt: 4,
                        px: 4,
                        py: 3,
                        textTransform: 'uppercase',
                      }}
                    >
                      {service}
                    </Box>
                  ))}
                </Box>
              </>
            ),
            title: <>Third Party Administration&nbsp;Services</>,
          },
          {
            description: (
              <>
                For clients that want to minimize vendor lock-in, we offer
                technology development capabilities from the ground up with the
                option to transition it over to our clients using our build,
                operate and transfer service&nbsp;model.
              </>
            ),
            title: <>Build, Operate &amp; Transfer&nbsp;Services</>,
          }, */
        ].map((item, i) => (
          <Box
            key={`service-items-${i}`}
            as="li"
            sx={{ bg: 'white', p: [6, null, null, 7], ...item.sx }}
          >
            <Box as="h3" sx={{ color: 'inherit' }}>
              {item.title}
            </Box>
            <Box
              as="p"
              sx={{
                color: 'text.subtle',
                fontSize: 2,
                lineHeight: 2,
                mt: 4,
                ...item.paragraphSx,
              }}
            >
              {item.description}
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
    <Section sx={{ textAlign: [null, null, 'center'] }}>
      <Box
        as="p"
        sx={{
          lineHeight: 2,
          maxWidth: 'maxWidths.paragraphWide',
          mt: 4,
          mx: 'auto',
        }}
      >
        We have the ability to accelerate the innovation agenda through our
        teams and solutions using our proven methodology. Our integrated
        analytical and engineering talent can deliver results
        in&nbsp;two&#8209;week&nbsp;sprints.
      </Box>
    </Section>
    <Section>
      <Icon
        svg="development-methodology"
        sx={{
          bg: 'primary',
          borderRadius: 2,
          boxShadow: 3,
          maxWidth: 'maxWidths.paragraphWider',
          mx: 'auto',
          px: [6, null, 9],
          py: [6, null, null, 7],
          width: '100%',
        }}
      />
    </Section>
    <ContactCTA />
  </>
);

ServicesPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServicesPage;
