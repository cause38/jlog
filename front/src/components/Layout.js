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
  width: 100%;
  min-height: 100vh;

  .inner {
    --padding: 20px;
    max-width: calc(1760px + var(--padding) * 2);
    margin: 0 auto;
    padding: 30px var(--padding);
  }
`;

const Main = styled.main`
  width: 100%;
  min-height: calc(100vh - 125px);

  &:has(.center-box) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Layout = ({children}) => {
  return (
    <StyledLayout>
      <Header />
      <Main className="inner">{children || <Outlet />}</Main>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
