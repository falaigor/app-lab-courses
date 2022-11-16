import { styled } from "../../styles";

export const HeaderContainer = styled("section", {
  backgroundColor: "$gray800",
  width: "100%",
  height: "4.5rem",
  display: "flex",
  alignItems: "center",
  borderBottom: "2px solid $gray700",
});

export const HeaderWrapper = styled("header", {
  maxWidth: "80rem",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  margin: "0 auto",
});
