import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Wrapper } from 'components/theme/GlobalContainer';
import React from 'react';
import { Outlet } from 'react-router-dom';
// import PropTypes from 'prop-types'

const SharedLayout = props => {
  return (
    <div>
      <Wrapper>
        <Header />
        <Outlet />
      </Wrapper>
      <Footer />
    </div>
  );
};

// SharedLayout.propTypes = {}

export default SharedLayout;
