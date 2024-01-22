import { SignUp } from "@clerk/nextjs";
import { Content } from "@/components";
import Layout from "@/layout/Layout";
import SEO from "@/layout/seo/SEO";
import { Box, Flex } from "@chakra-ui/react";

export default function Page() {
  return (
    <SEO title="Rof1yev | Ro'yxatdan o'tish">
      <Layout>
        <Content>
          <Box pos={"relative"} width="100%" minHeight={"80vh"}>
            <Box
              style={{
                width: "800px",
                height: "100vh",
                position: "fixed",
                zIndex: "-1",
                top: "1%",
                left: "20%",
              }}
            >
              <svg
                viewBox="0 0 528 560"
                focusable="false"
                className="chakra-icon css-1mkysxb"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  filter: "blur(70px)",
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  opacity: "0.7",
                }}
              >
                <circle cx="71" cy="61" r="111" fill="#F56565"></circle>
                <circle cx="244" cy="106" r="139" fill="#ED64A6"></circle>
                <circle cy="291" r="139" fill="#ED64A6"></circle>
                <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936"></circle>
                <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B"></circle>
                <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78"></circle>
                <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1"></circle>
              </svg>
            </Box>
            <Flex
              justify={"space-between"}
              py={{ sm: "0", lg: "5" }}
              px={{ sm: "0", lg: "10" }}
            >
              <Box></Box>
              <SignUp />
            </Flex>
          </Box>
        </Content>
      </Layout>
    </SEO>
  );
}
