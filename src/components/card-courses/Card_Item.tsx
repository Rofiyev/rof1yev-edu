import {
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  Button,
  Text,
  CardFooter,
  CardBody,
  Box,
  Stack,
  Divider,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import image from "@/assets/css.png";

export default function Card_Item(): JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <SimpleGrid
      spacing={3}
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
    >
      <Card p={"4"}>
        <CardHeader p={"0"} display={"flex"} justifyContent={"center"}>
          <LazyLoadImage
            src={image.src}
            alt="HTML"
            effect="blur"
            height={image.height}
            width={image.width}
          />
        </CardHeader>
        <CardBody p={"0"} mt={"6"}>
          <Heading size="md" fontWeight={"500"} textAlign={"center"}>
            HTML Darslari
          </Heading>
        </CardBody>
        <Divider
          my={"6"}
          borderColor={
            colorMode === "dark" ? "rgb(255,255,255,0.2)" : "rgb(0,0,0,0.2)"
          }
        />
        <CardFooter
          p={"0"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Button variant={"outline"} colorScheme="teal">
            Batafsil
          </Button>
          <Text fontSize={"large"}>
            <sup>
              <del>20$</del>
            </sup>
            &nbsp; Bepul
          </Text>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
}
