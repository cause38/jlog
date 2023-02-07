import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Input from 'components/Input';
import Button from 'components/Button';
import logo from 'assets/logo.png';

const Login = () => {
  const [joinMode, setJoinMode] = useState(false);
  const [form, setForm] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleLogin = () => {
    console.log('login');
  };

  const handleJoin = () => {
    if (joinMode) {
      const url = 'http://localhost:5000/api/register';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      };

      fetch(url, options)
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            alert(`${data.user.name}님 안녕하세요! \n가입이 완료되였습니다🎉`);
            setJoinMode(false);
          } else {
            alert(data.msg);
          }
        })
        .catch(error => console.log('error:', error));
    } else {
      setJoinMode(true);
    }
  };

  const handleForm = e => {
    const name = e.target.getAttribute('name');
    const value = e.target.value;
    setForm({...form, [name]: value});
  };

  return (
    <LoginBox className="center-box">
      <h2 className="hide">Login</h2>
      <LogoBox>
        <LogoImg src={logo} alt="jlog" /> log
      </LogoBox>
      <InputBox>
        <Input type="text" name="email" placeholder="email@email.com" onChange={handleForm} />
        {joinMode && <Input type="text" name="name" placeholder="이름" onChange={handleForm} />}
        <Input type="password" name="password" placeholder="비밀번호" onChange={handleForm} />
      </InputBox>
      <ButtonBox>
        <Button type="button" text="회원가입" onClick={handleJoin} />
        {!joinMode ? (
          <Button type="submit" text="로그인" onClick={handleLogin} />
        ) : (
          <Button type="button" text="뒤로가기" onClick={() => setJoinMode(false)} />
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
