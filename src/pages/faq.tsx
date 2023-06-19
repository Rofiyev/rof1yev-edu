import { Content } from "@/components";
import Layout from "@/layout/Layout";
import SEO from "@/layout/seo/SEO";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import fon_quations from "../assets/quations.png";

export default function FAQ() {
  return (
    <SEO title="Rof1yev | FAQ">
      <Layout>
        <Content>
          <Box pos={"relative"} width="100%" minHeight="100vh">
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
            </Box>
          </Box>
        </Content>
      </Layout>
    </SEO>
  );
}
