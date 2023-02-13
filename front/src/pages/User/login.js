import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import {Role, Name} from 'atoms';
import axios from 'axios';
import styled from 'styled-components';
import Input from 'components/Input';
import Button from 'components/Button';
import logo from 'assets/logo.png';
import useForm from 'hooks/useForm';

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useRecoilState(Name);
  const [role, setRole] = useRecoilState(Role);
  const [joinMode, setJoinMode] = useState(false);
  const [form, setForm] = useForm({
    email: '',
    name: '',
    password: '',
  });

  useEffect(() => {
    if (name && name !== '') {
      alert('이미 로그인 되어 있습니다.');
      navigate('/');
    }
  }, []);

  const handleLogin = e => {
    e.preventDefault();

    const data = {
      email: form.email,
      password: form.password,
    };

    if (!joinMode) {
      axios
        .post('/login', data)
        .then(res => {
          if (res.data.success) {
            const accessToken = res.data.user.token;
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            setName(res.data.user.name);
            setRole(res.data.user.role);
            sessionStorage.setItem('name', res.data.user.name);
            sessionStorage.setItem('role', res.data.user.role);
            alert(`로그인 완료!🎉`);
            navigate('/');
          } else {
            alert(res.data.msg);
          }
        })
        .catch(error => console.log('error:', error));
    }
  };

  const handleJoin = () => {
    if (joinMode) {
      axios
        .post('/register', form)
        .then(res => {
          if (res.data.success) {
            alert(`${res.data.user.name}님 안녕하세요! \n가입이 완료되였습니다🎉`);
            setJoinMode(false);
          } else {
            alert(res.data.msg);
          }
        })
        .catch(error => console.log('error:', error));
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
      <form onSubmit={e => handleLogin(e)}>
        <InputBox>
          <Input type="text" name="email" placeholder="email@email.com" onChange={e => setForm(e)} />
          {joinMode && <Input type="text" name="name" placeholder="이름" onChange={e => setForm(e)} />}
          <Input type="password" name="password" placeholder="비밀번호" onChange={e => setForm(e)} />
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
