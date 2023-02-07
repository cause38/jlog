import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from 'assets/logo.png';
import {BsFillMoonStarsFill, BsSunFill} from 'react-icons/bs';

const Header = () => {
  const [darkmode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    const theme = darkmode ? 'dark' : 'light';
    body.setAttribute('data-theme', theme);
  }, [darkmode]);

  return (
    <StyledHeader>
      <HeaderInner className="inner">
        <h1>
          <LogoLink to="/">
            <LogoImg src={logo} alt="jlog" /> log
          </LogoLink>
        </h1>
        <UserWrap>
          <Darkmode type="button" onClick={() => setDarkMode(!darkmode)}>
            {darkmode ? <BsFillMoonStarsFill /> : <BsSunFill />}
          </Darkmode>
          <Login to={'/login'}>Login</Login>
          <ProfileWrap>
            <ProfileImg src={logo} alt={'user-profile'} />
          </ProfileWrap>
        </UserWrap>
      </HeaderInner>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  height: 65px;
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px;
`;

const HeaderInner = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  font-family: cursive;
  font-weight: 400;
  font-size: clamp(20px, 3vw, 24px);
`;

const LogoImg = styled.img`
  height: 2.5vw;
  max-height: 40px;
  min-height: 30px;
`;

const Darkmode = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: var(--text4);
`;

const UserWrap = styled.div`
  display: flex;
  gap: 10px;
  height: 30px;
`;

const Login = styled(Link)`
  height: 100%;
  line-height: 30px;
  padding: 0 15px;
  border-radius: 5vw;
  background-color: var(--bg-element5);
  color: var(--text4);
`;

const ProfileWrap = styled.div`
  display: none;
`;

const ProfileImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
