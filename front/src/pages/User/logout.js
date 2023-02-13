import React, {useEffect} from 'react';
import {Role, Name} from 'atoms';
import {useRecoilState} from 'recoil';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
  const navigate = useNavigate();
  const [name, setName] = useRecoilState(Name);
  const [role, setRole] = useRecoilState(Role);

  useEffect(() => {
    if (name && name !== '') {
      axios
        .post('/logout')
        .then(res => {
          if (res.data.success) {
            setName('');
            setRole('');
            alert(`로그아웃 완료!🎉`);
            navigate('/', {replace: true});
          } else {
            alert(res.data.msg);
          }
        })
        .catch(error => console.log('error:', error));
    } else {
      alert(`로그인되어 있지 않습니다`);
      navigate('/login');
    }
  }, []);
  return <></>;
};

export default Logout;
