import { styled } from "../../styles";

export const HomePageContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  background: "url('/blur.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});

export const HomeWrapper = styled("div", {
  maxWidth: "80rem",
  margin: "0 auto",
  padding: "0 7rem",

  img: {
    width: "100%",
  },
});

export const HomeHero = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  margin: "5rem 0 0 0 ",
  padding: "2rem",
});

export const HeroInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "40rem",
  gap: "1.5rem",

  p: {
    lineHeight: "1.5rem",
  },

  h1: {
    fontSize: "2.5rem",
    fontWeight: "400",
  },

  span: {
    color: "$blue300",
    fontWeight: "600",
  },

  img: {
    width: "150px",
  },
});

export const HeroForm = styled("form", {
  display: "flex",
  flexDirection: "column",
  background: "$gray800",
  borderRadius: "4px",
  border: "2px solid $gray700",
  maxWidth: "390px",
  width: "100%",
  height: "100%",
  padding: "2rem",

  justifyContent: "space-between",
});
