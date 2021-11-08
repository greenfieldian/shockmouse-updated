import Box from '@spraoi/base/Box';
import Button from '@spraoi/base/Button';
import Input from '@spraoi/base/Input';
import PropTypes from 'prop-types';
import React from 'react';
import TextArea from '@spraoi/base/TextArea';
import { FORM_ERROR } from 'final-form';
import { Field, Form as FinalForm } from 'react-final-form';
import { composeValidations, email, required } from '@spraoi/validations';
import Icon from '../../components/Icon';
import Section from '../../components/Section';
import config from '../../config.json';

const Contact = ({ location: { pathname } }) => (
  <>
    <Section
      sx={{
        display: [null, null, null, 'flex'],
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <Box as="h1" sx={{ color: 'text.primary' }}>
          Let&rsquo;s Talk
        </Box>
        <Box
          as="p"
          sx={{ fontSize: 4, lineHeight: 1, maxWidth: '30rem', mt: 4 }}
        >
          Whether it&rsquo;s about a business opportunity or a job inquiry,
          we&rsquo;d love to hear&nbsp;from&nbsp;you.
        </Box>
      </Box>
      <Box>
        <form name="contact-form" method="POST" data-netlify="true">
          <label for="firstName">
            First name
            <input type="text" name="firstName" />
          </label>
          <label for="lastName">
            Last name
            <input type="text" name="lastName" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </Box>
    </Section>
  </>
);

Contact.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
