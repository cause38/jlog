import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router';
import styled from 'styled-components';
import Input from 'components/Input';
import Button from 'components/Button';
import logo from 'assets/logo.png';

const Login = () => {
  const [joinMode, setJoinMode] = useState(false);
  const handleLogin = () => {};
  const handleJoin = () => {
    if (joinMode) {
    } else {
      setJoinMode(true);
    }
  };

  return (
    <LoginBox className="center-box">
      <h2 className="hide">Login</h2>
      <LogoBox>
        <LogoImg src={logo} alt="jlog" /> log
      </LogoBox>
      <InputBox>
        <Input type="text" name="id" placeholder="email@email.com" />
        <Input type="password" name="pw" placeholder="비밀번호" />
      </InputBox>
      <ButtonBox>
        <Button type="button" id="JoninBtn" text="회원가입" onClick={handleJoin} />
        {!joinMode ? (
          <Button type="submit" id="loginBtn" text="로그인" onClick={handleLogin} />
        ) : (
          <Button
            type="submit"
            id="loginBtn"
            text="로그인"
            onClick={<Button type="button" text="뒤로가기" onClick={setJoinMode(false)} />}
          />
        )}
      </ButtonBox>
    </LoginBox>
  );
};

export default Login;

const LoginBox = styled.div`
  display: flex;
  gap: 5px;
  padding: 20px 20px 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: var(--bg-element3);
  @media (min-width: 768px) {
    padding: 2vw 4vw;
  }
`;

const LogoBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  font-family: cursive;
  font-weight: 400;
  font-size: clamp(20px, 3vw, 24px);
`;

const LogoImg = styled.img`
  width: auto;
  height: 2.5vw;
  max-height: 40px;
  min-height: 30px;
`;

const InputBox = styled.div`
  display: flex;
  gap: 5px;
  margin: 20px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
`;
