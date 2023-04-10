import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
// import PropTypes from 'prop-types'

const SharedLayout = props => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

// SharedLayout.propTypes = {}

export default SharedLayout;
