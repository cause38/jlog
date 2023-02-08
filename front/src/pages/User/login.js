import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import {Token, Role, Name} from 'atoms';
import API from 'config';
import styled from 'styled-components';
import Input from 'components/Input';
import Button from 'components/Button';
import logo from 'assets/logo.png';

const Login = () => {
  const navigate = useNavigate();
  const [token, setToken] = useRecoilState(Token);
  const [name, setName] = useRecoilState(Name);
  const [role, setRole] = useRecoilState(Role);
  const [joinMode, setJoinMode] = useState(false);
  const [form, setForm] = useState({
    email: '',
    name: '',
    password: '',
  });

  useEffect(() => {
    if (token && token !== '') {
      alert('이미 로그인 되어 있습니다.');
      navigate('/');
    }
  }, []);

  const handleLogin = e => {
    e.preventDefault();

    const url = API.login;
    const param = {
      email: form.email,
      password: form.password,
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(param),
    };

    if (!joinMode) {
      fetch(url, options)
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            alert(`로그인 완료!🎉`);
            setToken(data.user.token);
            setName(data.user.name);
            setRole(data.user.role);
            sessionStorage.setItem('token', data.user.token);
            sessionStorage.setItem('name', data.user.name);
            sessionStorage.setItem('role', data.user.role);
            navigate('/');
          } else {
            alert(data.msg);
          }
        })
        .catch(error => console.log('error:', error));
    }
  };

  const handleJoin = () => {
    if (joinMode) {
      const url = API.register;
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
      <form onSubmit={e => handleLogin(e)}>
        <InputBox>
          <Input type="text" name="email" placeholder="email@email.com" onChange={handleForm} />
          {joinMode && <Input type="text" name="name" placeholder="이름" onChange={handleForm} />}
          <Input type="password" name="password" placeholder="비밀번호" onChange={handleForm} />
        </InputBox>
        <ButtonBox>
          <Button type="button" text="회원가입" onClick={handleJoin} />
          {!joinMode ? (
            <Button type="submit" text="로그인" onClick={e => handleLogin(e)} />
          ) : (
            <Button type="button" text="뒤로가기" onClick={() => setJoinMode(false)} />
          )}
        </ButtonBox>
      </form>
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
