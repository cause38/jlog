import React, {useEffect} from 'react';
import {Token, Role, Name} from 'atoms';
import {useRecoilState} from 'recoil';
import {useNavigate} from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const [token, setToken] = useRecoilState(Token);
  const [name, setName] = useRecoilState(Name);
  const [role, setRole] = useRecoilState(Role);

  useEffect(() => {
    if (token) {
      setToken('');
      setName('');
      setRole('');
      sessionStorage.setItem('token', '');
      sessionStorage.setItem('name', '');
      sessionStorage.setItem('role', '');
    }
    navigate('/', {replace: true});
  }, []);
  return <></>;
};

export default Logout;
