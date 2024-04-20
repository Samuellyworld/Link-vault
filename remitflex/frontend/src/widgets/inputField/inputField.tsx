import { InputPropTypes } from "@/types/components.types";
import { Container, ErrorText, Input, InputContainer, Label } from "./inputField.styles";

const InputField: React.FC<InputPropTypes> = ({
  name,
  value,
  placeholder,
  onChange,
  disabled,
  leftIcon,
  label,
  isPassword,
  error,
  type
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer>
        {leftIcon && <>{leftIcon}</>}
        <Input
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          type={type}
        />
        {isPassword && null}
      </InputContainer>
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

export default InputField;