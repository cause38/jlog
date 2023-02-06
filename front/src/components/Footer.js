import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  height: 60px;
  line-height: 60px;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="inner">© 2023 Park Jinju. All Rights Reserved.</div>
    </StyledFooter>
  );
};

export default Footer;
