import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import logo from 'assets/logo.png';
import {BsFillMoonStarsFill, BsSunFill} from 'react-icons/bs';
import {Role, Name} from 'atoms';
import {useRecoilState} from 'recoil';

const Header = () => {
  const navigate = useNavigate();
  const [darkmode, setDarkMode] = useState(false);
  const [name, setName] = useRecoilState(Name);
  const [role, setRole] = useRecoilState(Role);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.addEventListener('click', e => profileHide(e));
    return () => {
      document.removeEventListener('click', e => profileHide(e));
    };
  }, []);

  const profileHide = e => {
    if (!e.target.classList.contains('profile')) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    const body = document.querySelector('body');
    const theme = darkmode ? 'dark' : 'light';
    body.setAttribute('data-theme', theme);
  }, [darkmode]);

  const handleLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      navigate('/logout');
    }
  };

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
          {name ? (
            <ProfileWrap>
              <Profile onClick={() => setShowMenu(!showMenu)} className="profile">
                {name.slice(-1)}
              </Profile>
              <ProfileList display={showMenu ? 'flex' : 'none'} className="profile">
                {role ? (
                  <li>
                    <Link to="/write">글 작성</Link>
                  </li>
                ) : null}
                <li>
                  <Link to="/logout" onClick={handleLogout}>
                    로그아웃
                  </Link>
                </li>
              </ProfileList>
            </ProfileWrap>
          ) : (
            <Login to={'/login'}>Login</Login>
          )}
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
  position: relative;
`;

const Profile = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: var(--text4);
  background-color: var(--bg-element5);
`;

const ProfileList = styled.ul`
  display: ${props => props.display};
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  text-align: center;
  flex-direction: column;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 10px;
  background-color: var(--bg-element3);

  li {
    font-weight: bold;
    white-space: nowrap;
    &:hover {
      a {
        color: var(--primary1);
      }
    }
  }
`;
