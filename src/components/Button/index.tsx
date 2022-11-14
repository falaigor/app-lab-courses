import { ButtonHTMLAttributes, ReactNode } from "react";
import { styled } from "../../styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <ButtonStyle {...rest}>{children}</ButtonStyle>;
};

const ButtonStyle = styled("button", {
  backgroundColor: "$green500",
  padding: "1rem",
  color: "$gray100",
  borderRadius: "4px",
  border: "0",
  fontSize: "0.9rem",
  margin: "0.25rem 0",
  cursor: "pointer",
  textTransform: "uppercase",
  fontWeight: "600",

  "&:hover": {
    backgroundColor: "$green300",
    outline: "$green300",
    transition: "all 0.2s ease",
  },
});
