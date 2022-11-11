import { styled } from "@/styles";

export const ClassroomContainer = styled("section", {
  display: "flex",
});

export const ClassroomWrapper = styled("div", {
  flex: "1",
});

export const ClassroomContent = styled("div", {
  padding: "2rem 2rem 0 2rem",

  footer: {
    marginTop: "2rem",
  },
});

export const ClassroomInfo = styled("div", {
  color: "$gray200",

  h1: {
    fontSize: "1.8rem",
    marginBottom: "1rem",
  },
});
