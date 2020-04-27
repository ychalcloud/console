import styled from "@emotion/styled";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 50px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
`;

export const InputLabel = styled.span`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  font-size: 16px;
  border: 0;
  outline: 0;
  border-bottom: 2px solid rgb(180, 180, 180);
  padding: 8px 0;
  transition: border-color 0.2s linear;
  & :focus {
    border-color: black;
  }
`;

export const BigInput = styled(Input)`
  font-size: 24px;
`;
