import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      white: "#fff",
      gray900: "#09090A",
      gray800: "#121214",
      gray700: "#202024",
      gray500: "#323238",
      gray400: "#8D8D99",
      gray300: "#c4c4cc",
      gray100: "#e1e1e6",

      green800: "#015F43",
      green500: "#00875f",
      green300: "#00b37e",

      blue300: "#81D8F7",
      red500: "#F75A68",
      yellow800: "#FBA94C",
    },
  },
});
