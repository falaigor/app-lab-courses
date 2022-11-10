import { styled } from "@/styles";

export const CoursesContainer = styled("section", {
  maxWidth: "80rem",
  width: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",

  "div.description": {
    width: "50%",
    margin: "2.5rem 0",
  },

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
});

export const CoursesList = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",

  "@md": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});

export const CourseItem = styled("div", {
  padding: "2rem",
  borderRadius: "4px",
  backgroundColor: "$gray800",
  margin: "1rem",

  "h3, p": {
    margin: "1rem 0",
  },

  button: {
    width: "100%",
  },
});
