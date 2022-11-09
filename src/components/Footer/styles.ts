import { styled } from "../../styles";

export const FooterContainer = styled("footer", {
  width: "100%",
  backgroundColor: "$gray900",
});

export const FooterWrapper = styled("div", {
  maxWidth: "80rem",
  width: "100%",
  height: "4.5rem",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  borderTop: "2px solid $gray700",
  justifyContent: "space-between",

  color: "$gray400",
  fontSize: "0.85rem",

  a: {
    color: "$gray400",
    textDecoration: "none",

    "&:hover": {
      color: "$gray300",
    },
  },
});
