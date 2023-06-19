import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "@/theme";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <main className={`${poppins.className}`}>
      <CacheProvider>
        <ChakraProvider theme={theme}>
          <CSSReset />
          <ToastContainer toastStyle={{ backgroundColor: "crimson" }} />
          <Component {...pageProps} />
        </ChakraProvider>
      </CacheProvider>
    </main>
  );
}
