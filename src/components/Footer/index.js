import Box from '@spraoi/base/Box';
import React from 'react';
import { Link } from 'gatsby';
import Icon from '../Icon';
import Section from '../Section';

const Footer = () => (
  <Box as="footer" sx={{ bg: 'primary', mt: 7 }}>
    <Section as="nav" sx={{ py: 8 }}>
      <Box
        sx={{
          alignItems: ['center', null, 'flex-start'],
          display: 'flex',
          flexDirection: ['column', null, 'row'],
          justifyContent: 'space-between',
          textAlign: ['center', null, 'left'],
        }}
      >
        {[
          {
            heading: 'Solutions & Innovation',
            links: [
              ['/business-advisory/', 'Advisory & Transformation'],
              ['/digital/', 'Digital'],
              ['/marketing-sales/', 'Marketing & Sales'],
            ],
          },
          {
            heading: 'Company',
            links: [
              ['/about-us/', 'About Us'],
              ['/insights/', 'Insights'],
              ['/careers/', 'Careers'],
              ['/contact/', 'Contact Us'],
            ],
          },
        ].map((item) => (
          <Box key={item.heading} sx={{ '&:first-of-type': { h2: { mt: 0 } } }}>
            <Box
              as="h2"
              sx={{ color: 'accent', fontSize: 4, mt: [7, null, 0] }}
            >
              {item.heading}
            </Box>
            <Box
              as="ul"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                mt: 5,
              }}
            >
              {item.links.map(([link, text]) => (
                <Box key={link} as="li" sx={{}}>
                  <Box
                    activeClassName="active"
                    as={Link}
                    partiallyActive
                    sx={{
                      '&.active, &:hover': { color: 'accentLight' },
                      color: 'accentDark',
                      display: 'block',
                      py: 3,
                    }}
                    to={link}
                  >
                    {text}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
        <Icon
          svg="relaunch-day"
          sx={{ display: ['none', null, null, 'block'] }}
          width="10rem"
        />
      </Box>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: ['column', null, 'row'],
          justifyContent: 'space-between',
          mt: 7,
        }}
      >
        <Link to="/">
          <Icon
            svg="logo-white"
            sx={{ color: 'offWhite', mt: 3, width: '10.25rem' }}
          />
        </Link>
        <Box
          sx={{
            bg: 'accentDark',
            content: ' ',
            display: ['none', null, null, 'block'],
            height: '1px',
            opacity: 0.2,
            width: '30rem',
          }}
        />
        <Box as="ul" sx={{ display: 'flex', mt: [4, null, null, 0] }}>
          {[
            {
              icon: 'linkedin',
              link: 'https://www.linkedin.com/company/shockmousemedia',
            },
            {
              icon: 'twitter',
              link: 'https://twitter.com/shockmousemedia',
            },
            {
              icon: 'facebook',
              link: 'https://www.facebook.com/shockmousemedia',
            },
            {
              icon: 'instagram',
              link: 'https://www.instagram.com/shockmousemedia',
            },
          ].map((item) => (
            <Box key={item.link} as="li" sx={{}}>
              <Box
                as="a"
                href={item.link}
                sx={{
                  '&:hover': { color: 'accentLight' },
                  color: 'accentDark',
                  display: 'block',
                  p: 4,
                  transition: 'color 0.2s',
                }}
              >
                <Icon svg={item.icon} sx={{ width: '1.5rem' }} />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Section>
  </Box>
);

export default Footer;
