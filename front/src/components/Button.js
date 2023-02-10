import React from 'react';
import {Link} from 'react-router-dom';
import styled, {css} from 'styled-components';
import {VscArrowLeft} from 'react-icons/vsc';

const Button = ({type, id, className, text, onClick, target, to, theme}) => {
  return (
    <>
      {to ? (
        <StyledLink to={to} id={id} className={className} onClick={onClick} target={target}>
          {text}
        </StyledLink>
      ) : (
        <StyledButton type={type} id={id} className={className} onClick={onClick} theme={theme}>
          {text === '나가기' ? (
            <>
              <div className="svg-box">
                <VscArrowLeft />
              </div>
              {text}
            </>
          ) : (
            text
          )}
        </StyledButton>
      )}
    </>
  );
};

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;
  padding: 7px 10px;
  border-radius: 3px;
  background: var(--primary1);
  color: var(--button-text);
  font-weight: bold;
  ${props =>
    props.theme === 'none' &&
    css`
      background: none;
      color: var(--text1);
      svg {
        fill: var(--text1);
      }
    `};

  &:hover {
    opacity: 0.9;
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;
  padding: 7px 10px;
  border-radius: 3px;
  background: var(--primary1);
  color: var(--button-text);
  font-weight: bold;
  ${props =>
    props.theme === 'none' &&
    css`
      background: none;
      color: var(--text1);
      svg {
        fill: var(--text1);
      }
    `};

  &:hover {
    opacity: 0.9;
  }
`;

export default Button;
