import Box from '@spraoi/base/Box';
import PropTypes from 'prop-types';
import React from 'react';
import Section from '../../components/Section';
import Button from '@spraoi/base/Button';

import * as contactStyles from "../../styles/contact.module.css"


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
        <form name="contact-form" method="post" data-netlify="true" className={contactStyles.form}>
          <input type="hidden" name="form-name" value="contact-form" />
          <label for="firstName" className={contactStyles.inputlabel}>
            First name
            <input type="text" name="firstName" />
          </label>
          <label for="lastName" className={contactStyles.inputlabel}>
            Last name
            <input type="text" name="lastName" />
          </label>
          <label for="email" className={contactStyles.inputlabel}>
            Email
            <input type="email" name="email" />
          </label>
          <label for="phone" className={contactStyles.inputlabel}>
            Company
            <input type="text" name="company" />
          </label>
          <label for="message" className={contactStyles.label}>
            Message
            <textarea type="text" name="message" rows="4"/>
          </label>
          <Button type="submit" className={contactStyles.submit}>Submit</Button>
        </form>
    </Section>
  </>
);

Contact.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
