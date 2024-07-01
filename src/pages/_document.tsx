import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "@/theme";

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head>
        <meta name="google-site-verification" content="TWhx17k6Q6zi64nwcE1mT0QBcnOPl-ARF1TRx_lWQVA" />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
