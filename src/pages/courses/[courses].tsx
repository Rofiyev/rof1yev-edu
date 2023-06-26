import { Content } from "@/components";
import { courses_data } from "@/config";
import Layout from "@/layout/Layout";
import SEO from "@/layout/seo/SEO";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState, Fragment } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BiMoviePlay, BiTimer } from "react-icons/bi";
import { GiLevelEndFlag } from "react-icons/gi";
import { LuLanguages } from "react-icons/lu";
import { TbCertificate } from "react-icons/tb";
import { FaInfinity, FaChalkboardTeacher } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { IoPeopleSharp } from "react-icons/io5";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { MdTimer, MdOutlineDescription } from "react-icons/md";
import { ICourses } from "@/interface";
import TabsComponents from "@/components/tabs/Tabs";

const icons: React.ReactElement[] = [
  <BiMoviePlay />,
  <BiTimer />,
  <GiLevelEndFlag />,
  <LuLanguages />,
  <TbCertificate />,
  <FaInfinity />,
];

export default function Home() {
  const { query, push } = useRouter();
  const [pageTitle, setPageTitle] = useState<string>("");
  const [data, setData] = useState<ICourses[] | never[]>([]);
  const { colorMode } = useColorMode();

  const filter = () => {
    courses_data.map((item) =>
      item.slug === query.courses ? setPageTitle(item.title) : ""
    );
    courses_data.map((item) =>
      item.slug === query.courses ? setData([item]) : ""
    );
  };

  useEffect(filter, [query.courses]);

  return (
    <SEO title={pageTitle}>
      <Layout>
        <Content>
          <Box minH={"100vh"}>
            {data.map((item) => (
              <Fragment key={item.id}>
                <Card display={"flex"} direction={{ sm: "column", md: "row" }}>
                  <Box width={{ sm: "100%", md: "63%" }}>
                    <CardBody>
                      <Heading
                        fontFamily={"inherit"}
                        fontWeight={"bold"}
                        fontSize={"x-large"}
                        mb={"3"}
                      >
                        {item.title}
                      </Heading>
                      <Text textAlign={"justify"}>{item.description}</Text>
                      <Divider display={"block"} my={"2"} />
                      <Flex
                        justify={"space-between"}
                        flexWrap={"wrap"}
                        gap={"10px"}
                      >
                        <Text display={"flex"} alignItems={"center"}>
                          Daraja: &nbsp;
                          {[...Array(item.level)].map((_) => (
                            <AiFillStar color="#ffbf00" />
                          ))}
                        </Text>
                        <Text display={"flex"} alignItems={"center"}>
                          <IoPeopleSharp fontSize={"18px"} /> &nbsp;
                          O'quvchilar: &nbsp; {item.students} ta
                        </Text>
                        <Text display={"flex"} alignItems={"center"}>
                          <MdTimer fontSize={"18px"} /> &nbsp; Oxirgi yangilish:{" "}
                          {item.update_date}
                        </Text>
                      </Flex>
                    </CardBody>
                  </Box>
                  <Box
                    width={{ sm: "100%", md: "35%" }}
                    position={{ sm: "static", md: "relative" }}
                  >
                    <Card
                      shadow={"dark-lg"}
                      position={{ sm: "static", md: "absolute" }}
                      p={"4"}
                      mt={"4"}
                      style={{ border: "1px solid rgba(255,255,255,0.16)" }}
                      bg={colorMode === "dark" ? "#1a202c" : "#fff"}
                    >
                      <CardHeader
                        p={"0"}
                        display={"flex"}
                        justifyContent={"center"}
                      >
                        <LazyLoadImage
                          src={item.image_link}
                          alt="HTML"
                          effect="blur"
                          style={{ borderRadius: "8px" }}
                        />
                      </CardHeader>
                      <CardBody p={"0"} my={"4"}>
                        <Flex justify={"space-between"} mb={"4"}>
                          <Text fontSize={"x-large"}>{item.newPrice}</Text>
                          <Text fontSize={"x-large"}>
                            <del>${item.price}</del>
                          </Text>
                        </Flex>
                        <Button
                          variant={"solid"}
                          colorScheme="teal"
                          onClick={() =>
                            push(`/security/free?lessonId=${item.lesson_ID}`)
                          }
                          w={"full"}
                          h={"55px"}
                        >
                          Kursni ko'rish
                        </Button>
                      </CardBody>
                      <CardFooter
                        p={"0"}
                        display={"flex"}
                        flexDirection={"column"}
                        gap={"10px"}
                      >
                        {item.courses_info.map((item_2, i) => (
                          <Fragment key={item_2.key}>
                            <Box
                              display={"flex"}
                              justifyContent={"space-between"}
                            >
                              <Box
                                display={"flex"}
                                justifyContent={"space-between"}
                              >
                                <Text
                                  fontSize={"large"}
                                  display={"flex"}
                                  alignItems={"center"}
                                  gap={"8px"}
                                >
                                  <Icon fontSize={"2xl"}>{icons[i]}</Icon>
                                  {item_2.key}
                                </Text>
                              </Box>
                              <Text fontSize={"large"}>{item_2.value}</Text>
                            </Box>
                            <Divider display={"block"} />
                          </Fragment>
                        ))}
                      </CardFooter>
                    </Card>
                  </Box>
                </Card>
                <Box mt="6" width={{ sm: "100%", md: "62%" }}>
                  <TabsComponents item={item} />
                </Box>
              </Fragment>
            ))}
          </Box>
        </Content>
      </Layout>
    </SEO>
  );
}
