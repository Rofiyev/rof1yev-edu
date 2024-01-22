import { Content } from "@/components";
import Layout from "@/layout/Layout";
import SEO from "@/layout/seo/SEO";
import { Box, Flex, Text } from "@chakra-ui/react";
import fon_react from "../assets/reactjs.png";
import Image from "next/image";

export default function Resources(): JSX.Element {
  return (
    <SEO title="Rof1yev | Manbalar">
      <Layout>
        <Content>
          <Box pos={"relative"} width="100%" minHeight="100vh">
            <Box
              style={{
                width: "800px",
                height: "120vh",
                position: "fixed",
                zIndex: "-1",
                top: "-1%",
                right: "-20%",
              }}
            >
              <Image
                src={fon_react.src}
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
                <Flex>
                  <Text
                    fontSize={"xx-large"}
                    fontWeight={"bold"}
                    color={"purple.800"}
                    borderBottom={"3px solid #2A4365"}
                  >
                    Foydali&nbsp;
                  </Text>
                  <Text
                    fontSize={"xx-large"}
                    fontWeight={"bold"}
                    letterSpacing={2}
                  >
                    Manbalar
                  </Text>
                </Flex>
                <Text fontSize={"large"} fontWeight={"400"}>
                  ITga oid ma'lumotlar va platformamizdagi loyihalarning kod
                  manbalari.
                </Text>
              </Flex>
              <br />
            </Box>
          </Box>
        </Content>
      </Layout>
    </SEO>
  );
}
