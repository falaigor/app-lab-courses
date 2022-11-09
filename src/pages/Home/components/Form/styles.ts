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
});
