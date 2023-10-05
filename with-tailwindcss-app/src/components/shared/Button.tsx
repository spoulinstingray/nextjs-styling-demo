import { ButtonHTMLAttributes, HTMLProps } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type TypographyProps = HTMLProps<HTMLSpanElement>;

export const PrimaryButton = (props: ButtonProps) => {
  return (
    <button
      className="flex cursor-pointer items-center justify-center rounded-md bg-primary p-2 transition hover:bg-primaryHover disabled:cursor-not-allowed disabled:bg-primaryDisabled disabled:hover:bg-primaryDisabled"
      {...props}
    />
  );
};

export const SecondaryButton = (props: ButtonProps) => {
  return (
    <button
      className="flex cursor-pointer items-center justify-center rounded-md bg-secondary p-2 transition hover:bg-secondaryHover disabled:cursor-not-allowed disabled:bg-secondaryDisabled disabled:hover:bg-secondaryDisabled"
      {...props}
    />
  );
};

export const ButtonTypography = ({ children }: TypographyProps) => {
  return <span className="p-2 text-lg">{children}</span>;
};
