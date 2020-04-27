import React from "react";
import styled from "@emotion/styled";
import Logo from "../assets/logo.svg";

const Root: React.FC = () => {
  return (
    <Container>
      <LoginBox>
        <LogoImg src={Logo} />
        <InputContainer>
          <InputWrap>
            <InputLabel>이메일</InputLabel>
            <Input placeholder="support@acloudplatform.com"/>
          </InputWrap>
          <InputWrap>
            <InputLabel>비밀번호</InputLabel>
            <Input placeholder="P@ssw0rd!" />
          </InputWrap>
        </InputContainer>
        <LoginButton>로그인</LoginButton>
        <Button>회원가입</Button>
        <EctButton>비밀번호 찾기</EctButton>
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

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  padding: 20px;
`;

const LogoImg = styled.img`
  width: 90%;
  margin-bottom: 70px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 50px;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
`;

const InputLabel = styled.span`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  font-size: 24px;
  border: 0;
  outline: 0;
  border-bottom: 2px solid rgb(180, 180, 180);
  padding: 8px 0;
  transition: border-color 0.2s linear;
  & :focus {
    border-color: black;
  }
`;

const Button = styled.button`
  width: 100%;
  border: 0;
  outline: 0;
  cursor: pointer;
  font-size: 18px;
  padding: 10px;
  border: 2px solid black;
  background-color: white;
`;

const LoginButton = styled(Button)`
  background-color: black;
  color: white;
  margin-bottom: 20px;
`;

const EctButton = styled.a`
  color: rgb(100, 100, 100);
  text-align: center;
  margin-top: 20px;
`;

export default Root;
