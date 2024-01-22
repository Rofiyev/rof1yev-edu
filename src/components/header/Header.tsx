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
import { UserButton, useUser } from "@clerk/nextjs";

export default function Header({
  showSidebar,
  toggleSidebar,
}: IHeader_Props): JSX.Element {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isSignedIn, isLoaded, user } = useUser();
  console.log(user);

  return (
    <Box
      bg={colorMode !== "dark" ? "purple.300" : "purple.900"}
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
              aria-label="Menu Icon"
            >
              <FaBars />
            </Button>
            <Flex
              align={"center"}
              cursor={"pointer"}
              onClick={() => router.push("/")}
            >
              <Image
                src={logoWhite}
                width={75}
                height={75}
                alt="Logo"
                style={{
                  filter:
                    colorMode !== "dark"
                      ? `invert(100%) sepia(0%) saturate(7500%) hue-rotate(234deg) brightness(116%) contrast(103%)`
                      : "",
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
              aria-label="Email Icon"
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
              aria-label="Mode Icon button"
            >
              {colorMode !== "dark" ? <BsMoonStarsFill /> : <FaSun />}
            </Button>

            {isLoaded ? (
              isSignedIn && <UserButton afterSignOutUrl="/" />
            ) : (
              <>
                <Button
                  colorScheme="teal"
                  variant="solid"
                  display={{ base: "grid", md: "none" }}
                  placeItems={"center"}
                  p={"1"}
                  aria-label="Exit Icon button"
                  onClick={() => router.push("/auth")}
                >
                  <FaArrowRight />
                </Button>
                <Button
                  colorScheme="teal"
                  variant="outline"
                  display={{ base: "none", md: "block" }}
                  onClick={() => router.push("/sign-in")}
                >
                  Kirish
                </Button>
              </>
            )}
          </Flex>
        </Flex>
      </Container>
      <Divider />
    </Box>
  );
}
