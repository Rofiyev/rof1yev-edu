import { Card_Item, Content } from "@/components";
import Layout from "@/layout/Layout";
import SEO from "@/layout/seo/SEO";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import fon_next from "../assets/nextjs.png";

export default function Courses(): JSX.Element {
  return (
    <SEO title="Rof1yev | Kurslar">
      <Layout>
        <Content>
          <Box pos={"relative"} width="100%" minHeight="100vh">
            <Box
              style={{
                width: "700px",
                height: "100vh",
                position: "fixed",
                zIndex: "-1",
                top: "8%",
                right: "-10%",
              }}
            >
              <Image
                src={fon_next.src}
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
              <Flex>
                <Text
                  fontSize={"xx-large"}
                  fontWeight={"bold"}
                  color={"green.500"}
                >
                  Barcha&nbsp;
                </Text>
                <Text
                  fontSize={"xx-large"}
                  fontWeight={"bold"}
                  letterSpacing={2}
                >
                  Kurslar
                </Text>
              </Flex>
              <br />
              <Card_Item />
            </Box>
          </Box>
        </Content>
      </Layout>
    </SEO>
  );
}
