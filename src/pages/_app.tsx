import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "@/theme";
import { Poppins } from "next/font/google";
import NextNProgress from "nextjs-progressbar";
import { useState, useEffect } from "react";
import { Loader } from "@/components";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, shadesOfPurple } from "@clerk/themes";

const poppins = Poppins({ subsets: ["latin-ext"], weight: "500" });

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading((prev) => !prev);

    return () => setLoading((prev) => !prev);
  }, []);

  return (
    <main className={`${poppins.className}`}>
      <ClerkProvider
        appearance={{
          baseTheme: shadesOfPurple,
        }}
      >
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <CSSReset />
            <NextNProgress
              color="#B794F4"
              startPosition={0.3}
              stopDelayMs={200}
              height={3}
              showOnShallow={true}
            />
            {loading ? (
              <Loader />
            ) : (
              <Provider store={store}>
                <Component {...pageProps} />
              </Provider>
            )}
          </ChakraProvider>
        </CacheProvider>
      </ClerkProvider>
    </main>
  );
}
