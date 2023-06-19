import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: false,
  },
  colors: {
    darkModeColor: "#1A202C",
  },
  breakpoints: {
    sm: "300px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
});
export default theme;
