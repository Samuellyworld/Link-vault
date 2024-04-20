import { ButtonPropType } from "@/types/components.types";
import { ButtonComponent, ButtonWrapper } from "./button.styles";

const Button: React.FC<ButtonPropType> = ({
  title,
  onClick,
  background,
  color,
  border,
  className,
  type
}) => {
  return (
    <ButtonWrapper>
      <ButtonComponent
        background={background}
        border={border}
        onClick={onClick}
        color={color}
        className={className}
        type={type === "submit" ? "submit" : "button"}
      >
        <p>{title}</p>
      </ButtonComponent>
    </ButtonWrapper>
  );
};

export default Button;