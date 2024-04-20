import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  // padding: 0.5rem;
  align-items: center;
  border-radius: 5.468px;
  border: 1.094px solid #a9a9a9;
  background: #fff;
  padding-inline: 1rem;
`;
export const Label = styled.p`
  font-weight: 400;
  font-size: 13px;
  opacity: 0.6;
  padding-top: 10px;
  font-family: var(--font-family-nista);
`;
export const BtnDiv = styled.div`
  padding-top: 1rem;
  width: 108%;
  margin-bottom: 1rem;
`;
export const LeftIcon = styled.div`
  padding-left: 0.3rem;
  //width: rem !important;
`;
export const AmountDiv = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 1rem;
`;
export const AmountStatus = styled.div`
  background: #fafffa !important;
  border-radius: 10px;
  font-family: Sora-SemiBold;
  padding: 10px;
  color: #409099;
`;
export const Input = styled.input`
  width: 100%;
  font-size: 14px;
  font-family: var(--font-family-nista);
  color: black;
  border: none;
  padding: 11px;
  outline: none;
  &::placeholder {
    opacity: 0.3;
    font-family: Sora-Regular !important;
    font-size: 11px !important;
  }
`;
export const Form = styled.div`
  width: 450px;
`;
export const ButtonWrap = styled.div`
  width: 105%;
  display: flex;
  gap: 0.2rem;
  margin-left: 0rem;
  margin-top: 1.5rem;
`;
export const Show = styled.div`
  cursor: pointer;
  color: #4e5152;
`;
export const ErrorText = styled.p`
  font-size: 12px;
  color: red;
  height: 30px !important;
`;