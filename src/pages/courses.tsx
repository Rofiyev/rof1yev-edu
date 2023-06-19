import { Content } from "@/components";
import Layout from "@/layout/Layout";
import SEO from "@/layout/seo/SEO";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import fon_next from "../assets/nextjs.png";

export default function Courses() {
  return (
    <SEO title="Rof1yev | Courses">
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
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                eius facilis nobis ea impedit aperiam earum natus obcaecati hic
                harum! Libero nam minus ut modi, perferendis, placeat dolore,
                sunt porro asperiores qui natus? Eaque magni atque ab nemo!
                Asperiores voluptates ad impedit ullam sapiente laboriosam
                cumque unde labore reiciendis libero. Perspiciatis commodi quos
                veniam voluptas fugiat?
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                eius facilis nobis ea impedit aperiam earum natus obcaecati hic
                harum! Libero nam minus ut modi, perferendis, placeat dolore,
                sunt porro asperiores qui natus? Eaque magni atque ab nemo!
                Asperiores voluptates ad impedit ullam sapiente laboriosam
                cumque unde labore reiciendis libero. Perspiciatis commodi quos
                veniam voluptas fugiat?
              </Text>
            </Box>
          </Box>
        </Content>
      </Layout>
    </SEO>
  );
}
