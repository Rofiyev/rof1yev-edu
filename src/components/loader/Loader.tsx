import SEO from "@/layout/seo/SEO";
import { Box, Spinner, useColorMode } from "@chakra-ui/react";

export default function Loader(): JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <SEO title="Rof1yev - Online Education">
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"100vh"}
        bg={colorMode !== "dark" ? "gray.50" : "gray.900"}
      >
        <Spinner size="xl" color="#38a169" label="" thickness="5px" />
      </Box>
    </SEO>
  );
}
