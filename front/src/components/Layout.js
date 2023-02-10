import React from 'react';
import {Outlet, useLocation} from 'react-router';
import Header from './Header';
import Footer from './Footer';
import styled, {css} from 'styled-components';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
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
  --padding: 20px;
  --paddingY: 30px;
  ${props =>
    props.theme === 'none' &&
    css`
      --padding: 0;
      --paddingY: 0;
    `}
  max-width: calc(1760px + var(--padding) * 2);
  margin: 0 auto;
  padding: var(--paddingY) var(--padding);

  &:has(.center-box) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Layout = ({children}) => {
  const {pathname} = useLocation();

  return (
    <StyledLayout>
      {pathname === '/write' ? (
        <>
          <Main theme="none">{children || <Outlet />}</Main>
        </>
      ) : (
        <>
          <Header />
          <Main>{children || <Outlet />}</Main>
          <Footer />
        </>
      )}
    </StyledLayout>
  );
};

export default Layout;
