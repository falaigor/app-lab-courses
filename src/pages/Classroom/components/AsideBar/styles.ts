import { styled } from "@/styles";

export const AsideBarContainer = styled("aside", {
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
