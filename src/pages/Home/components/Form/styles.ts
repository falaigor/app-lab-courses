import { styled } from "../../../../styles";

export const FormContainer = styled("form", {
  background: "$gray800",
  borderRadius: "4px",
  border: "2px solid $gray700",
  maxWidth: "390px",
  width: "100%",
  height: "100%",
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  h2: {
    marginBottom: "1.5rem",
  },

  button: {
    marginTop: "1.5rem",
  },

  input: {
    backgroundColor: "$gray900",
    padding: "1rem",
    color: "$gray100",
    borderRadius: "4px",
    border: "2px solid $gray900",
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
  },
});
