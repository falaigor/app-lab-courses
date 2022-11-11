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
    marginTop: "1rem",
    fontWeight: "600",
    lineHeight: "1.5rem",
    gridArea: "title",
  },

  ".classroom-status": {
    gridArea: "status",
    display: "flex",
    alignItems: "center",
    gap: "0.3rem",
    color: "$green300",
  },

  ".classroom-type": {
    border: "1px solid $green300",
    color: "$green300",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gridArea: "type",
    fontSize: "0.825rem",
    fontWeight: "600",
    textTransform: "uppercase",
  },

  ul: {
    listStyle: "none",
  },

  li: {
    display: "grid",
    padding: "1rem",
    border: "1px solid $gray500",
    borderRadius: "4px",
    gridTemplateAreas: `
    'status type'
    'title title'`,
    cursor: "pointer",
    margin: "1rem 0",

    "&:hover": {
      transition: "all 0.2s ease",
      backgroundColor: "$gray700",
    },

    "&.select": {
      transition: "all 0.2s ease",
      backgroundColor: "$green500",

      span: {
        color: "$white",
      },
    },
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

export const ClassroomAuthor = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  marginTop: "1.5rem",

  span: {
    fontSize: "1.275rem",
    fontWeight: "600",
  },
});

export const MaterialComplementary = styled("div", {
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
