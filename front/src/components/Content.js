import React from 'react';
import styled from 'styled-components';

const Content = ({content}) => {
  return <StyledContent>{content}</StyledContent>;
};

const StyledContent = styled.div`
  white-space: pre-line;
`;

export default Content;
