import Box from '@spraoi/base/Box';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import ContactCTA from '../../components/ContactCTA';
import Icon from '../../components/Icon';
import IconFigure from '../../components/IconFigure';
import Section from '../../components/Section';
// import ArrowLink from '../../components/ArrowLink';

const MachineLearningSolutionsPage = ({ location: { pathname } }) => (
  <>
    <Section sx={{ pb: 0, textAlign: [null, null, 'center'] }}>
      <Box as="h1" sx={{ fontSize: [5, null, null, 6] }}>
        Advisory & Transformation
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
        Re-vamped IT infrastructure. Customer-centric initiaves. We build long-term value through bold strategies and thoughtful execution.
      </Box>
      {/*<Box
        as={Link}
        sx={{
          '&:hover': {
            '&>span': { transform: 'translateX(5px)' },
            color: 'accentDark',
            textDecoration: 'underline',
          },
          color: 'text.link',
          cursor: 'pointer',
          display: 'inline-flex',
          fontSize: 4,
          mt: 6,
          mx: 'auto',
        }}
        to="/case-studies"
      >
        Read more about our Case Studies
        <Icon
          as="span"
          svg="right-arrow"
          sx={{
            display: ['none', null, 'block'],
            ml: 5,
            mt: 1,
            transition: 'transform 0.2s',
            width: '1.5rem',
          }}
        />
        </Box>*/}
      {/* <ArrowLink link="/about-us" sx={{ mt: 6, display: 'inline-block' }}>
        Read more about our Case Studies
      </ArrowLink> */}
    </Section>
    {/*<Section sx={{ px: [0, null, 7] }}>
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
    </Section>*/}
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
                ​​Our corporate transformation capabilities are tailor-made for tackling operational, financial and technology challenges head on. We come at it with a growth driven mindset – applying data analysis and modeling to each function for opportunities to optimize costs, operations, and value. Then, we coordinate a comprehensive strategy – working alongside you to get it done.   
              </>
            ),
            svg: 'pie-chart',
            title: <>Corporate Transformation</>,
          },
          {
            description: (
              <>
                IT systems are only as valuable as their implementation and costs allow. It no longer makes sense to take a one-size-fits-all approach. We specialize in transforming high-cost, low-return enterprise systems to agile, scalable and cost-effective business solutions. 
              </>
            ),
            svg: 'gear',
            title: 'IT Strategies',
          },
          {
            description: (
              <>
                Customers are a businesses most valuable asset, but have long been forgotten in the boardroom. We bring the customer back into the decision making process. Through analytics and personal connection, we develop a clear roadmap that aligns with core customer needs. Then, we help you implement.
              </>
            ),
            svg: 'thief',
            title: 'Customer Experience',
          },
          {
            description: (
              <>
                The role and responsibilities of financial leaders has changed dramatically over the last few years. Financial leaders have transformed from purely financial advisors, to company wide strategic leaders. We combine our deep financial expertise with exclusive tools to help the core team members maximize value.
              </>
            ),
            svg: 'scale',
            title: 'Financial Analysis',
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
      <h2>Additional Touchpoints</h2>
      <Box
        as="p"
        sx={{
          lineHeight: 2,
          maxWidth: 'maxWidths.paragraph',
          mt: 4,
          mx: 'auto',
        }}
      >
        We continue to extend models available within the Barrel framework.
        Below are others we have developed with&nbsp;clients.
      </Box>
    </Section>
    <Section sx={{ px: [0, null, 7] }}>
      <Box
        as="ul"
        sx={{
          display: 'grid',
          gridRowGap: ['1px', null, 5],
          gridTemplateColumns: '1fr',
        }}
      >
        {[
          {
            description: (
              <>
                Reviews over 100 data points related to the policy holder to
                predict lapse propensity and provide insight into relevant
                retention measures.
              </>
            ),
            title: 'Process Optimization',
          },
          {
            description: (
              <>
                Reviews new business and service transactions for inconsistency
                at the individual advisor or institution level.
              </>
            ),
            title: 'Business Model Change',
          },
          {
            description: (
              <>
                Reviews disbursements and claims payments to identify patterns
                indicating operational inconsistencies.
              </>
            ),
            title: <>Employee Engagement</>,
          },
        ].map((item, i) => (
          <Box
            key={`model-${i}`}
            as="li"
            sx={{
              alignItems: 'center',
              bg: 'white',
              borderRadius: [null, null, 2],
              boxShadow: 3,
              display: [null, null, null, 'grid'],
              gridColumnGap: 7,
              gridTemplateColumns: '2fr 3.7fr',
              p: [6, null, null, 7],
            }}
          >
            <Box
              as="h3"
              /* sx={{
                textAlign: [null, null, null, 'right'],
                whiteSpace: [null, null, null, 'nowrap'],
              }} */
            >
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
    <ContactCTA />
  </>
);

MachineLearningSolutionsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default MachineLearningSolutionsPage;
