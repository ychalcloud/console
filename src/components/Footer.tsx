import React from "react";
import styled from "@emotion/styled";

const Footer: React.FC = () => (
  <FooterContainer>
    <Menu>이용 약관</Menu>
    <Menu>개인 정보 처리 방침</Menu>
    <Copyright>ⓒ A Cloud Platform. All rights reserved.</Copyright>
  </FooterContainer>
);

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  background: #f4f4f4;
`;

const Menu = styled.a`
  font-size: 14px;
  font-weight: 300;
  padding: 0 10px;
  &: first-of-type {
    margin-left: 10px;
  }
`;

const Copyright = styled(Menu)`
  margin-left: auto;
`;

export default Footer;
