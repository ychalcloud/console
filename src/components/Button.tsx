import styled from "@emotion/styled";

export const Button = styled.button`
  width: 100%;
  border: 0;
  outline: 0;
  cursor: pointer;
  padding: 10px;
  border: 2px solid black;
  background-color: white;
`;

export const BigButton = styled(Button)`
  font-size: 18px;
  font-weight: 700;
`;

export const LoginButton = styled(BigButton)`
  background-color: black;
  color: white;
  margin-bottom: 20px;
`;

export const TextButton = styled.a`
  color: rgb(100, 100, 100);
  text-align: center;
  margin-top: 20px;
`;
