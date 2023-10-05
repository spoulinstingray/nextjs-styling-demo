import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../components/globalstyles";
import { theme } from "../components/themes";

// Here we apply the global styles that we want for things like html and body elements. We also pass which theme we want
// to use here, which makes it easy to implement a toggle for dark and light mode for example.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
