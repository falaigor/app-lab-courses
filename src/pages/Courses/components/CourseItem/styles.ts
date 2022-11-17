import { styled } from "@/styles";

export const CourseItemContainer = styled("div", {
  padding: "2rem",
  borderRadius: "4px",
  backgroundColor: "$gray800",
  margin: "1rem",
  display: "flex",
  flexDirection: "column",

  "h3, p, a": {
    margin: "1rem 0",
  },

  img: {
    width: "100%",
  },

  a: {
    backgroundColor: "$green500",
    padding: "1rem",
    color: "$gray100",
    borderRadius: "4px",
    border: "0",
    fontSize: "0.9rem",
    cursor: "pointer",
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "600",

    "&:hover": {
      backgroundColor: "$green300",
      outline: "$green300",
      transition: "all 0.2s ease",
    },
  },
});
