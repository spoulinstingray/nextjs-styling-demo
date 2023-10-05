import { DefaultTheme } from "styled-components";

// Here we can create multiple themes, each with different values for the color properties and even different sections than
// colors, such as a screen size section if we wanted one.
export const theme: DefaultTheme = {
  colors: {
    primary: "#dddddd",
    primaryHover: "#cccccc",
    primaryDisabled: "#eeeeee",
    secondary: "#F5576C",
    secondaryHover: "#db4f61",
    secondaryDisabled: "#ffa9b1",
  },
};
