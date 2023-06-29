import { Content } from "@/components";
import { courses_data } from "@/config";
import SEO from "@/layout/seo/SEO";
import {
  Accordion,
  AccordionItem,
  Box,
  Card,
  CardHeader,
  Flex,
  Heading,
  AccordionPanel,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Loyaut from "@/layout/Layout";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Home(): JSX.Element {
  const { query } = useRouter();
  const videos = useSelector(({ videos }) => videos.videos);
  const [watch, setWatch] = useState<string>(
    videos[0]?.snippet?.resourceId?.videoId
  );
  console.log(videos);

  function titlePage() {
    return courses_data.filter((item) => item.lesson_ID == query?.lessonId);
  }

  return (
    <SEO title={titlePage()[0]?.title}>
      <Loyaut sidebar={false}>
        <Content>
          <Flex direction={{ sm: "column", xl: "row" }} gap={"20px"}>
            <Box m={"0"} width={{ sm: "100%", xl: "70%" }} height={"70vh"}>
              <Card p={"0"} pos={"sticky"} top={"10px"}>
                <CardHeader>
                  <iframe
                    width={"100%"}
                    height={"515px"}
                    style={{ borderRadius: "4px" }}
                    src={`https://www.youtube.com/embed/${watch}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </CardHeader>
              </Card>
            </Box>
            <Box
              width={{ sm: "100%", xl: "30%" }}
              height={"80vh"}
              overflowY={"scroll"}
              css={{
                "::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              <Heading
                fontSize={"x-large"}
                letterSpacing={"1px"}
                fontFamily={"inherit"}
              >
                {titlePage()[0]?.title}
              </Heading>
              <Accordion defaultIndex={[0]} allowToggle mt={"4"}>
                <AccordionItem border={"none"}>
                  {/* <Box
                    p={"3"}
                    bg={
                      colorMode === "dark"
                        ? "whiteAlpha.100"
                        : "rgba(237, 242, 247, 0.5)"
                    }
                    borderRadius={"6px"}
                  >
                    <AccordionButton
                      gap={"10px"}
                      _hover={{ background: "transparant" }}
                    >
                      <AccordionIcon />
                      <Box as="span" flex="1" textAlign="left">
                      </Box>
                    </AccordionButton>
                  </Box> */}
                  <Box mt={"4"}>
                    {videos?.map((item: any) => (
                      <Box
                        key={item.id}
                        _hover={{ background: "#393f49" }}
                        borderRadius={"4px"}
                        cursor={"pointer"}
                        p={"2"}
                        onClick={() =>
                          setWatch(item.snippet?.resourceId?.videoId)
                        }
                      >
                        <AccordionPanel py={2}>
                          <Flex align={"center"} gap={"10px"}>
                            <BsFillPlayCircleFill fontSize={"18px"} />
                            {item?.snippet?.title.slice(
                              0,
                              item?.snippet?.title.lastIndexOf("||")
                            )}
                          </Flex>
                        </AccordionPanel>
                      </Box>
                    ))}
                  </Box>
                </AccordionItem>
              </Accordion>
            </Box>
          </Flex>
        </Content>
      </Loyaut>
    </SEO>
  );
}
