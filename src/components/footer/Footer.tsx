import { socialsIcons } from "@/config";
import {
  Box,
  useColorMode,
  Text,
  Flex,
  Container,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaTelegram, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const icons: React.JSX.Element[] = [
  <FaTelegram />,
  <RiInstagramFill />,
  <FaLinkedin />,
];

export default function Footer(): JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box bg={colorMode !== "dark" ? "purple.300" : "purple.900"}>
        <Divider />
        <Container maxW={"container.xl"}>
          <Flex
            align={"center"}
            py={"8px"}
            gap={"10px"}
            justify={"space-between"}
            direction={{ sm: "column", md: "row" }}
          >
            <Text fontSize={"1xl"} fontWeight={"normal"} textAlign={"center"}>
              © 2023 Rof1yev. Barcha huquqlar himoyalangan
            </Text>
            <Flex gap={"10px"}>
              {socialsIcons.map(({ title, link, id }) => (
                <Link key={id} href={link} target="_blank">
                  <IconButton
                    aria-label={title}
                    icon={icons[id - 1]}
                    borderRadius={"50%"}
                    boxShadow="sm"
                    p={"1"}
                  />
                </Link>
              ))}
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
