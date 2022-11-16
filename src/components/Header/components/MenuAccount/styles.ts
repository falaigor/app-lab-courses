import { keyframes, styled } from "@/styles";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

export const AccountContainer = styled("div", {
  display: "flex",
  alignItems: "center",

  img: {
    width: "50px",
    height: "50px",
    border: "3px solid $gray500",
    borderRadius: "100%",
  },
});

export const DropdownMenuPortal = styled(DropdownMenu.Portal, {
  padding: 200,
});

export const DropdownMenuContent = styled(DropdownMenu.Content, {
  minWidth: 220,
  backgroundColor: "$gray500",
  opacity: 1,
  borderRadius: 6,
  margin: "0.25rem 2rem",
  padding: 5,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",

  willChange: "transform, opacity",
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
});

export const DropdownMenuItem = styled(DropdownMenu.Item, {
  all: "unset",
  fontSize: 13,
  lineHeight: 1,
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "0.25rem 0.875rem",
  position: "relative",
  userSelect: "none",
  cursor: "pointer",

  "&[data-disabled]": {
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    backgroundColor: "$blue300",
  },

  "&:hover": {
    backgroundColor: "$gray700",
  },

  svg: {
    paddingRight: "0.5rem",
  },
});

export const DropdownMenuSeparator = styled(DropdownMenu.Separator, {
  height: 1,
  margin: 5,
  backgroundColor: "$gray400",
  opacity: 0.3,
});

export const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 20,
  width: 20,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$gray300",
});
