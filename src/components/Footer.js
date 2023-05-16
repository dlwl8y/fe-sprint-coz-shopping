import React from 'react';
import styled from 'styled-components';


const FooterFooter = styled.footer`
  width: 100vw;
  height: 58px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
`;

const FooterTextDiv = styled.div`
  font-size: 12px;
  color: #888888;
`;

function Footer() {
  return (
    <FooterFooter>
      <FooterTextDiv>
        개인정보 처리방침 | 이용 약관
      </FooterTextDiv>
      <FooterTextDiv>
        All rights reserved @ Codestates
      </FooterTextDiv>
    </FooterFooter>
  );
}

export default Footer;