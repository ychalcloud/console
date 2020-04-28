import React from "react";
import styled from "@emotion/styled";

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
  BigInput,
  Select,
  BigSelect
} from "../components/Input";

import form from "../data/register.json";

const Register: React.FC = () => {
  return (
    <Container>
      <LoginBox>
        {/*<LogoImg src={Logo} />*/}
        <Header>회원가입</Header>
        <InputContainer>
          {form.map(input => {
            if (input.type === "select") {
              return (
                <InputWrap>
                  <InputLabel>{input.name}</InputLabel>
                  <BigSelect>
                    {input?.option?.map(option => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </BigSelect>
                </InputWrap>
              );
            }
            return (
              <InputWrap>
                <InputLabel>{input.name}</InputLabel>
                <BigInput id={input.id} type={input.type} />
              </InputWrap>
            );
          })}
        </InputContainer>
        <LoginButton>회원가입</LoginButton>
        <TextButtonWrap>
          <TextButton>로그인</TextButton>
        </TextButtonWrap>
      </LoginBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
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
  padding: 100px 20px;
`;

const LogoImg = styled.img`
  width: 70%;
  margin-bottom: 70px;
`;

export default Register;
