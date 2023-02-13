import React from 'react';
import styled from 'styled-components';

const Content = ({content}) => {
  return <StyledContent>{content}</StyledContent>;
};

const StyledContent = styled.div`
  white-space: pre-line;
  font-size: 1.125rem;
  color: var(--text1);
  transition: color 0.125s ease-in 0s;
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

export default Content;
