import SEO from "@/layout/seo/SEO";
import { Box, Text } from "@chakra-ui/react";

export default function Home(): JSX.Element {
  return (
    <SEO title="HTML">
      <Box>
        <Text>Hello world!</Text>
      </Box>
    </SEO>
  );
}
