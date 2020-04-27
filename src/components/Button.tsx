import styled from "@emotion/styled";

export const Button = styled.button`
  width: 100%;
  border: 0;
  outline: 0;
  cursor: pointer;
  padding: 13px 15px;
  border-radius: 5px;
  background-color: #b45bff;
  color: white;
`;

export const BigButton = styled(Button)`
  font-size: 18px;
  font-weight: 700;
`;

export const LoginButton = styled(BigButton)`
  margin-bottom: 10px;
`;

export const TextButton = styled.a`
  color: rgb(100, 100, 100);
  text-align: center;
  margin-top: 20px;
`;

export const TextButtonWrap = styled.div`
  display: flex;
  * {
    margin-right: 10px;
  }
  *: last-child {
    margin-right: 0;
  }
`;
