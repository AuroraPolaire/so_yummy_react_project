import FollowUs from 'components/FollowUs/FollowUs';
import Nav from 'components/Nav/Nav';
import SubscribeForm from 'components/SubscribeForm/SubscribeForm';
import React from 'react';
// import PropTypes from 'prop-types'

const Footer = props => {
  return (
    <div>
      <Nav />
      <FollowUs />
      <SubscribeForm />
    </div>
  );
};

// Footer.propTypes = {}

export default Footer;
