import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  main: {
    primaryColor: "#f5f5f5",
    secondaryColor: "#161A1E",
    highlight: "#2869F4",
    buttonStyle: {
      primary: "#303135",
    },
  },
  light: {
    primaryColor: "#020202",
    secondaryColor: "#fff",
  },
  fonts: ["Open Sans, sans-serif"],
  fontSizes: {
    small: ".865rem",
    medium: "2rem",
    large: "6vw",
  },
  screenDimensions: {
    mobile: "640px",
    tablet: "962px",
    desktop: "1024px",
  },
};

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
