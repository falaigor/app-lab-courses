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
  margin: "5rem 0 0 0",
  padding: "2rem",
});

export const HeroInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "40rem",
  gap: "1.5rem",
  justifyContent: "center",

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
