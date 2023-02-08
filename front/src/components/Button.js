import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.div`
  width: 100%;

  > .btn {
    width: 100%;
    padding: 7px 10px;
    border-radius: 3px;
    background: var(--primary1);
    color: var(--button-text);
    font-weight: bold;
  }
`;

const Button = ({type, id, className, text, onClick, target, to}) => {
  return (
    <>
      {to ? (
        <StyledButton>
          <Link to={to} id={id} className={className ? `btn ${className}` : 'btn'} onClick={onClick} target={target}>
            {text}
          </Link>
        </StyledButton>
      ) : (
        <StyledButton>
          <button type={type} id={id} className={className ? `btn ${className}` : 'btn'} onClick={onClick}>
            {text}
          </button>
        </StyledButton>
      )}
    </>
  );
};

export default Button;
