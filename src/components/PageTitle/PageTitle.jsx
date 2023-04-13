import React from 'react';
import { Title } from './PageTitle.styled';
const PageTitle = ({ children, type }) => {
  return <Title type={type}>{children}</Title>;
};

export default PageTitle;
