import { HTMLProps } from "react";
import styled from "styled-components";

type ButtonProps = HTMLProps<HTMLButtonElement>;

// We can pass props directly inside of the css, such as "disabled" here. The theme is also passed in the props, which makes
// it easy to access its values when defining style behaviors.
export const PrimaryButton = styled.button<ButtonProps>`
  all: unset;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 10px;

  color: black;

  border-radius: 5px;
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.primaryDisabled : theme.colors.primary};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  transition: 0.2s;

  :hover {
    background-color: ${({ disabled, theme }) =>
      disabled ? theme.colors.primaryDisabled : theme.colors.primaryHover};
  }
`;

// We can also easily override styles of another styled component, making it easy to compose styles and inherit from similar components.
export const SecondaryButton = styled(PrimaryButton)`
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.secondaryDisabled : theme.colors.secondary};

  :hover {
    background-color: ${({ disabled, theme }) =>
      disabled ? theme.colors.secondaryDisabled : theme.colors.secondaryHover};
  }
`;

export const ButtonTypography = styled.span`
  all: unset;

  color: black;
  font-weight: 600;
  font-size: 20px;
`;

// Instead of blindly aiming for a span inside the button component, we can instead refer to the css that will be created
// by styled components for the typography and use that variable instead to apply styling.
export const TypographyButton = styled(PrimaryButton)`
  && > ${ButtonTypography} {
    padding: 25px;
  }
`;
