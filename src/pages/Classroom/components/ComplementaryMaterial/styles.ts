import { styled } from "@/styles";

export const ComplementaryMaterialContainer = styled("div", {
  display: "flex",
  borderRadius: "4px",
  backgroundColor: "$gray700",
  maxWidth: "30rem",
  margin: "2rem 0",
  cursor: "pointer",

  ".icon": {
    display: "flex",
    alignItems: "center",
    padding: "2rem 1.5rem",
    borderRadius: "4px 0 0 4px",
    backgroundColor: "$green500",
  },

  p: {
    lineHeight: "1.5rem",
    padding: "2rem 1.5rem",
  },

  span: {
    fontSize: "1.275rem",
    fontWeight: "600",
  },
});
