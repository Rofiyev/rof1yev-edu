import { Card_Item, Content } from "@/components";
import Layout from "@/layout/Layout";
import SEO from "@/layout/seo/SEO";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import fon_next from "../assets/nextjs.png";
import { courses_data } from "@/config";

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
              <SimpleGrid
                spacing={3}
                templateColumns="repeat(auto-fill, minmax(280px, 1fr))"
              >
                {courses_data.map((data) => (
                  <Card_Item key={data.id} data={data} />
                ))}
              </SimpleGrid>
            </Box>
          </Box>
        </Content>
      </Layout>
    </SEO>
  );
}
