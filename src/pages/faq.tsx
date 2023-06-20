import { Content } from "@/components";
import Layout from "@/layout/Layout";
import SEO from "@/layout/seo/SEO";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Card,
  CardBody,
  Flex,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import fon_quations from "../assets/quations.png";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { quationsData } from "@/config";

export default function FAQ(): JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <SEO title="Rof1yev | FAQ">
      <Layout>
        <Content>
          <Box pos={"relative"} width="100%">
            <Box
              style={{
                width: "800px",
                height: "100vh",
                position: "fixed",
                zIndex: "-1",
                top: "6%",
                right: "-20%",
              }}
            >
              <Image
                src={fon_quations.src}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                  opacity: "0.3",
                }}
                layout="fill"
                alt="Fon"
              />
            </Box>
            <Box>
              <Flex direction={"column"}>
                <Text
                  fontSize={"xx-large"}
                  fontWeight={"bold"}
                  color={"green.500"}
                >
                  Savollar&nbsp;
                </Text>
                <Text fontSize={"large"} fontWeight={"400"}>
                  Ko'p beriladigan savollarga javob.
                </Text>
              </Flex>
              <Card
                mt={"4"}
                bg={
                  colorMode === "dark"
                    ? "rgba(45, 55, 72, 0.5)"
                    : "whiteAlpha.100"
                }
              >
                <CardBody paddingX={"5"} paddingY={"5"}>
                  <Accordion
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"10px"}
                    allowToggle
                    defaultIndex={[0]}
                  >
                    {quationsData.map(({ answer, quation, id }) => (
                      <AccordionItem key={id} border={"none"}>
                        {({ isExpanded }) => (
                          <>
                            <Box
                              _hover={{
                                bg:
                                  colorMode === "dark"
                                    ? "rgba(53, 66, 88, 0.7)"
                                    : "rgba(237, 242, 247, 0.5)",
                              }}
                              bg={
                                colorMode === "dark"
                                  ? "whiteAlpha.100"
                                  : "rgba(237, 242, 247, 0.5)"
                              }
                              borderRadius={"6px"}
                            >
                              <AccordionButton display={"flex"} gap={"10px"}>
                                {isExpanded ? (
                                  <Flex
                                    borderRadius={"full"}
                                    bg={
                                      colorMode === "dark"
                                        ? "white"
                                        : "gray.700"
                                    }
                                    height={"5"}
                                    width={"5"}
                                    align={"center"}
                                    justify={"center"}
                                  >
                                    <MinusIcon
                                      fontSize="12px"
                                      color={
                                        colorMode === "dark"
                                          ? "gray.700"
                                          : "white"
                                      }
                                    />
                                  </Flex>
                                ) : (
                                  <Flex
                                    borderRadius={"full"}
                                    bg={
                                      colorMode === "dark"
                                        ? "gray.700"
                                        : "transparent"
                                    }
                                    height={"5"}
                                    width={"5"}
                                    border={
                                      colorMode === "dark"
                                        ? "1px solid #fff"
                                        : "1px solid #354258"
                                    }
                                    align={"center"}
                                    justify={"center"}
                                  >
                                    <AddIcon fontSize="10px" />
                                  </Flex>
                                )}
                                <Box as="span" flex="1" textAlign="left">
                                  {quation}
                                </Box>
                              </AccordionButton>
                            </Box>
                            <AccordionPanel pb={4}>{answer}</AccordionPanel>
                          </>
                        )}
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardBody>
              </Card>
            </Box>
          </Box>
        </Content>
      </Layout>
    </SEO>
  );
}
