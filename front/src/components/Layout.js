import React from 'react';
import {Outlet} from 'react-router';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;

const Layout = ({children}) => {
  return (
    <StyledLayout>
      <Header />
      <main>{children || <Outlet />}</main>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
