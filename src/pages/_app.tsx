import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "@/theme";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    </CacheProvider>
  );
}
