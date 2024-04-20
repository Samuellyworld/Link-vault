import styled from "styled-components";

interface ButtonWrapperProps {
  background?: string;
  border?: string;
  color?: string;
}
export const ButtonWrapper = styled.div`
  width: 100%;
`;
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 20px;

  p {
    margin-left: 0.5rem;
    margin-top: 0.1rem;
    margin-right: 0.5rem;
    gap: 10px !important;
  }
`;
export const ButtonComponent = styled.button<ButtonWrapperProps>`
  background: ${props =>
    props.background ? props.background : "linear-gradient(45deg, #409099, #84E681)"};
  border-radius: 5.468px;
  outline: none;
  width: 100%;
  text-align: center;
  cursor: pointer;
  font-family: var(--font-family-nista);
  border: ${props => (props.border ? props.border : "none")};
  padding: 10px 5px;

  p {
    color: ${props => (props.color ? props.color : "#fff")};
  }
  &:hover {
    background: ${props =>
      props.background ? props.background : "linear-gradient(to right, #409099, #84E681)"};
  }

  &.disabled-state {
    background: #ebebeb;
    cursor: not-allowed;
    border: solid 1px grey;

    p {
      color: black;
    }
  }
`;