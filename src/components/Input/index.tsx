import { styled } from "../../styles";

interface InputProps {
  type: string;
  placeholder: string;
}

export const Input = ({ type, placeholder }: InputProps) => {
  return <InputStyle type={type} placeholder={placeholder} />;
};

const InputStyle = styled("input", {
  backgroundColor: "$gray900",
  padding: "1rem",
  color: "$gray100",
  borderRadius: "4px",
  borderColor: "$gray900",
  fontSize: "1rem",
  margin: "0.25rem 0",

  "&:placeholder": {
    color: "$gray300",
  },

  "&:focus": {
    border: "2px solid $green300",
    outline: "$green300",
  },

  "&:hover": {
    border: "2px solid $green300",
    outline: "$green300",
  },
});
