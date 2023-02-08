import {atom} from 'recoil';

export const Token = atom({
  key: 'token',
  default: sessionStorage.getItem('token'),
});

export const Role = atom({
  key: 'role',
  default: sessionStorage.getItem('role'),
});

export const Name = atom({
  key: 'name',
  default: sessionStorage.getItem('name'),
});
