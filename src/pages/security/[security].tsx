import { Content, Loader } from "@/components";
import { courses_data } from "@/config";
import SEO from "@/layout/seo/SEO";
import {
  AspectRatio,
  Box,
  Card,
  CardHeader,
  Flex,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Loyaut from "@/layout/Layout";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { getData } from "@/API";

export default function Home(): JSX.Element {
  const { query } = useRouter();
  const { colorMode } = useColorMode();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [watch, setWatch] = useState<string>("");

  const getVideoPlayerLists = async () => {
    const res = await getData(`${query.lessonId}`);
    if (res.succes && res.data.items !== undefined) {
      const data = res.data.items;
      setWatch(data[0].snippet?.resourceId?.videoId);
      setData(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getVideoPlayerLists();
  }, [query.lessonId]);

  function titlePage() {
    return courses_data.filter((item) => item.lesson_ID == query?.lessonId);
  }

  return (
    <SEO title={titlePage()[0]?.title}>
      <Loyaut sidebar={false}>
        <Content>
          {loading ? (
            <Loader />
          ) : (
            <Flex direction={{ sm: "column", xl: "row" }} gap={"10px"}>
              <Box m={"0"} width={{ sm: "100%", xl: "70%" }} maxHeight={"70vh"}>
                <Card p={"0"} pos={"sticky"} top={"10px"}>
                  <CardHeader>
                    <AspectRatio minW={"100%"} maxH={"500px"}>
                      <iframe
                        width={"100%"}
                        height={"100%"}
                        style={{ borderRadius: "4px" }}
                        src={`https://www.youtube.com/embed/${watch}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </AspectRatio>
                  </CardHeader>
                </Card>
              </Box>
              <Box
                width={{ sm: "100%", md: "80%", xl: "30%" }}
                maxH={{ sm: "50vh", lg: "70vh" }}
                marginX={"auto"}
                overflowY={{ sm: "auto", lg: "scroll" }}
                mt={{ sm: "10", xl: "0" }}
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
                <Box mt={"4"}>
                  {data?.map((item: any) => (
                    <Box
                      key={item.id}
                      _hover={{
                        background:
                          colorMode === "dark"
                            ? "whiteAlpha.100"
                            : "rgba(237, 242, 247, 0.5)",
                      }}
                      borderRadius={"4px"}
                      cursor={"pointer"}
                      p={"2"}
                      onClick={() =>
                        setWatch(item.snippet?.resourceId?.videoId)
                      }
                    >
                      <Box py={2} pl={"4"}>
                        <Flex align={"center"} gap={"10px"}>
                          <BsFillPlayCircleFill fontSize={"18px"} />
                          {item?.snippet?.title.slice(
                            0,
                            item?.snippet?.title.lastIndexOf("||")
                          )}
                        </Flex>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Flex>
          )}
        </Content>
      </Loyaut>
    </SEO>
  );
}
