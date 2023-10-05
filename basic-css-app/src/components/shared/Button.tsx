import { ButtonHTMLAttributes, PropsWithChildren } from "react";

import css from "./Button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const PrimaryButton = (props: ButtonProps) => {
  return <button className={`${css.button} ${css.primaryButton}`} {...props} />;
};

export const SecondaryButton = (props: ButtonProps) => {
  return (
    <button className={`${css.button} ${css.secondaryButton}`} {...props} />
  );
};

export const ButtonTypography = (props: PropsWithChildren) => {
  return <span className={css.buttonTypography} {...props} />;
};
