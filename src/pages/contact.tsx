import { Content } from "@/components";
import Layout from "@/layout/Layout";
import SEO from "@/layout/seo/SEO";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function Contact() {
  return (
    <SEO title="Rof1yev | Courses">
      <Layout>
        <Content>
          <Box pos={"relative"} width="100%" minHeight="80vh">
            <Box>
              <Flex direction={"column"}>
                <Text
                  fontSize={"xx-large"}
                  fontWeight={"bold"}
                  color={"green.500"}
                >
                  Bog'lanish
                </Text>
                <Text fontSize={"large"} fontWeight={"400"}>
                  Platformaga oid savol va takilf yozishingiz mumkin.
                </Text>
              </Flex>
            </Box>
          </Box>
        </Content>
      </Layout>
    </SEO>
  );
}
