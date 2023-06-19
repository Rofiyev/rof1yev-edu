import {
  Button,
  Flex,
  useColorMode,
  Box,
  Container,
  Text,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";
import logoWhite from "../../assets/logo-white.png";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun, FaBars, FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useRouter } from "next/router";
import Link from "next/link";
import { IHeader_Props } from "./Header.props";

export default function Header({
  showSidebar,
  toggleSidebar,
}: IHeader_Props): JSX.Element {
  const reouter = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg={colorMode !== "dark" ? "gray.50" : "gray.900"}
      pos={"fixed"}
      width={"100%"}
      zIndex={"100"}
    >
      <Container maxW={"container.xl"}>
        <Flex align={"center"} justify={"space-between"}>
          <Flex align={"center"}>
            <Button
              colorScheme="gray"
              variant="ghost"
              display={{ base: "grid", xl: "none" }}
              placeItems={"center"}
              p={"1"}
              onClick={() => toggleSidebar(!showSidebar)}
            >
              <FaBars />
            </Button>
            <Flex
              align={"center"}
              cursor={"pointer"}
              onClick={() => reouter.push("/")}
            >
              <Image
                src={logoWhite}
                width={75}
                height={75}
                alt="Logo"
                style={{
                  filter:
                    colorMode !== "dark" &&
                    `invert(100%) sepia(0%) saturate(7500%) hue-rotate(234deg) brightness(116%) contrast(103%)`,
                }}
              />
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                Rof1yev
              </Text>
            </Flex>
          </Flex>
          <Flex gap={"10px"}>
            <Button
              colorScheme="gray"
              variant="ghost"
              display={{ sm: "none", md: "grid" }}
              placeItems={"center"}
              p={"1"}
            >
              <Link href={`mailto: rofiyevdilshod@gmail.com`}>
                <MdEmail />
              </Link>
            </Button>
            <Button
              onClick={toggleColorMode}
              colorScheme="gray"
              variant="ghost"
              display={"grid"}
              placeItems={"center"}
              p={"1"}
              border={1}
            >
              {colorMode !== "dark" ? <BsMoonStarsFill /> : <FaSun />}
            </Button>
            <Button
              colorScheme="teal"
              variant="solid"
              display={{ base: "grid", md: "none" }}
              placeItems={"center"}
              p={"1"}
            >
              <FaArrowRight />
            </Button>
            <Button
              colorScheme="teal"
              variant="outline"
              display={{ base: "none", md: "block" }}
            >
              Kirish
            </Button>
          </Flex>
        </Flex>
      </Container>
      <Divider />
    </Box>
  );
}