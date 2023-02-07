import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';
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
      <StyledHeaderInner className="inner">
        <h1>
          <StyledLogoLink to="/">
            <StyledLogoImg src={logo} alt="jlog" /> log
          </StyledLogoLink>
        </h1>
        <StyledUserWrap>
          <StyledDarkmode type="button" onClick={() => setDarkMode(!darkmode)}>
            {darkmode ? <BsFillMoonStarsFill /> : <BsSunFill />}
          </StyledDarkmode>
          <StyledLogin to="/login">Login</StyledLogin>
          <StyledProfileWrap>
            <StyledProfileImg src={logo} alt={'user-profile'} />
          </StyledProfileWrap>
        </StyledUserWrap>
      </StyledHeaderInner>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  height: 65px;
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px;
`;

const StyledHeaderInner = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoLink = styled(Link)`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  font-family: cursive;
  font-weight: 400;
  font-size: clamp(20px, 3vw, 24px);
`;

const StyledLogoImg = styled.img`
  height: 2.5vw;
  max-height: 40px;
  min-height: 30px;
`;

const StyledDarkmode = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: var(--text4);
`;

const StyledUserWrap = styled.div`
  display: flex;
  gap: 10px;
  height: 30px;
`;

const StyledLogin = styled(Link)`
  height: 100%;
  line-height: 30px;
  padding: 0 15px;
  border-radius: 5vw;
  background-color: var(--bg-element5);
  color: var(--text4);
`;

const StyledProfileWrap = styled.div`
  display: none;
`;

const StyledProfileImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
