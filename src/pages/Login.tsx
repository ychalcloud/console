import React from "react";
import styled from "@emotion/styled";
import Logo from "../assets/re-logo.svg";

import {
  BigButton,
  LoginButton,
  TextButton,
  TextButtonWrap
} from "../components/Button";
import {
  InputContainer,
  InputWrap,
  InputLabel,
  BigInput
} from "../components/Input";

const Login: React.FC = () => {
  return (
    <Container>
      <LoginBox>
        {/*<LogoImg src={Logo} />*/}
        <Header>콘솔 로그인</Header>
        <InputContainer>
          <InputWrap>
            <InputLabel>이메일</InputLabel>
            <BigInput placeholder="support@acloudplatform.com" />
          </InputWrap>
          <InputWrap>
            <InputLabel>비밀번호</InputLabel>
            <BigInput placeholder="P@ssw0rd!" type="password"/>
          </InputWrap>
        </InputContainer>
        <LoginButton>로그인</LoginButton>
        <TextButtonWrap>
          <TextButton>회원가입</TextButton>
          <TextButton>비밀번호 찾기</TextButton>
        </TextButtonWrap>
      </LoginBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  font-size: 36px;
  margin-bottom: 70px;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  padding: 20px;
`;

const LogoImg = styled.img`
  width: 70%;
  margin-bottom: 70px;
`;

export default Login;
