import { Box, Container } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Content({ children }: IContent_Props) {
  return (
    <Box mt={"20"} overflowX={"hidden"} minHeight={"80vh"}>
      <Container maxW="container.xl">
        <Box p={{ sm: "0", md: "6" }}>{children}</Box>
      </Container>
    </Box>
  );
}

interface IContent_Props {
  children: ReactNode;
}
