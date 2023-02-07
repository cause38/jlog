import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 1px solid var(--border3);
  background: var(--bg-element1);
  padding: 10px;
  border-radius: 5px;
  color: var(--text1);
  width: 100%;
  max-width: 100%;
`;

const Input = ({type, name, id, className, placeholder, value, onChange}) => {
  return (
    <>
      <StyledInput
        type={type}
        name={name}
        id={id}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
