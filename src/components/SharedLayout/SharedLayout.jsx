import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
// import Loader from 'components/Loader/Loader';

const SharedLayout = props => {
  return (
    <>
      <Header />
      <Suspense fallback={<div></div>}>
        <Outlet />
        <Footer />
      </Suspense>
    </>
  );
};

export default SharedLayout;
