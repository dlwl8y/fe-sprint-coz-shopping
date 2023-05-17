import React from 'react';
import styled from 'styled-components';


const FooterContainer = styled.footer`
  width: 100vw;
  height: 58px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: sticky; */
  bottom: 0;
  background-color: #FFFFFF;
`;

const FooterTextDiv = styled.div`
  font-size: 12px;
  color: #888888;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterTextDiv>
        개인정보 처리방침 | 이용 약관
      </FooterTextDiv>
      <FooterTextDiv>
        All rights reserved @ Codestates
      </FooterTextDiv>
    </FooterContainer>
  );
}

export default Footer;