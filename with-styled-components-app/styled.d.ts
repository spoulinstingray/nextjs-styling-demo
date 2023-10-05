import "styled-components";

// Defining custom theme values that will be used throughout the app
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryHover: string;
      primaryDisabled: string;
      secondary: string;
      secondaryHover: string;
      secondaryDisabled: string;
    };
  }
}
