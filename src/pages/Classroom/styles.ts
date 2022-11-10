import { styled } from "@/styles";

export const ClassroomContainer = styled("section", {
  display: "flex",
});

export const ClassroomWrapper = styled("div", {
  flex: "1",
});

export const AsideBar = styled("aside", {
  maxWidth: "22rem",
  width: "100%",
  background: "$gray800",
  padding: "1.25rem",
  borderLeft: "1px solid $gray700",

  ".title": {
    fontSize: "1.8rem",
    fontWeight: "600",
    padding: "1.2rem 0",
    borderBottom: "1px solid $gray500",
    marginBottom: "2rem",
    display: "block",
  },

  ".classroom-title": {
    gridArea: "title",
  },

  ".classroom-complete": {
    gridArea: "complete",
    display: "flex",
    alignItems: "center",
  },

  ".classroom-type": {
    border: "2px solid $green500",
    color: "$green500",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gridArea: "type",
  },

  ul: {
    listStyle: "none",
  },

  li: {
    display: "grid",
    gridTemplateAreas: `
    'complete type'
    'title title'`,
  },
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
