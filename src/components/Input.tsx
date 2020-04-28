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
  margin-bottom: 14px;
`;

export const Input = styled.input`
  font-size: 16px;
  border: 0;
  outline: 0;
  border: 1px solid rgb(180, 180, 180);
  padding: 13px 15px;
  border-radius: 5px;
  transition: border-color 0.2s linear;
  & :focus {
    border-width: 2px;
    border-color: #b45bff;
  }
`;

export const BigInput = styled(Input)`
  font-size: 24px;
`;

export const Select = styled.select`
  background: white;
  font-size: 16px;
  border: 0;
  outline: 0;
  border: 1px solid rgb(180, 180, 180);
  padding: 13px 15px;
   appearance: none;
  border-radius: 5px;
  transition: border-color 0.2s linear;
  & :focus {
    border-width: 2px;
    border-color: #b45bff;
  }
`;

export const BigSelect = styled(Select)`
  font-size: 24px;
`;
