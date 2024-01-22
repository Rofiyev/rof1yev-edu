import {
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorMode,
  Stack,
  Skeleton,
} from "@chakra-ui/react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import {
  BsJournalBookmarkFill,
  BsCheckLg,
  BsFillPlayCircleFill,
  BsPlayCircle,
} from "react-icons/bs";
import { MdOutlineDescription } from "react-icons/md";
import { TfiFaceSmile } from "react-icons/tfi";
import { ICourses } from "@/interface";
import { useState, useEffect } from "react";
import { getData } from "@/API";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { courses_data } from "@/config";
import { setVideos } from "@/redux/slice/videos";
import { useDispatch } from "react-redux";
import { Fragment } from "react";

const tabsData: { title: string; icon: JSX.Element }[] = [
  {
    title: "Tavsif",
    icon: (
      <MdOutlineDescription fontSize={"18px"} style={{ marginRight: "5px" }} />
    ),
  },
  {
    title: "Dastur",
    icon: (
      <BsJournalBookmarkFill fontSize={"18px"} style={{ marginRight: "5px" }} />
    ),
  },
  {
    title: "Sharh",
    icon: <AiFillStar fontSize={"18px"} style={{ marginRight: "5px" }} />,
  },
  {
    title: "Mentor",
    icon: (
      <FaChalkboardTeacher fontSize={"18px"} style={{ marginRight: "5px" }} />
    ),
  },
];

interface ITabs {
  item: ICourses;
}

export default function TabsComponents({ item }: ITabs): JSX.Element {
  const [serverData, setServerData] = useState<any[]>([]);
  const [lessonID] = useState<string>(item.lesson_ID);
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();

  const getVideoPlayerLists = async () => {
    const res = await getData(lessonID);
    if (res.succes) {
      const data = res.data.items;
      setServerData(data);
      dispatch(setVideos(data));
    }
  };

  useEffect(() => {
    getVideoPlayerLists();
  }, []);

  return (
    <>
      <Tabs colorScheme="purple" isFitted>
        <TabList>
          {tabsData.map((item) => (
            <Tab key={item.title}>
              {item.icon} {item.title}{" "}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel>
            <Heading
              fontSize={"xx-large"}
              letterSpacing={"1px"}
              fontFamily={"inherit"}
              color={"purple.500"}
            >
              Ma'lumot
            </Heading>
            <Text my={"2"}>{item.info}</Text>
            <br />
            <Heading
              fontSize={"xx-large"}
              letterSpacing={"1px"}
              fontFamily={"inherit"}
              color={"purple.500"}
            >
              Nimani o'rganasiz
            </Heading>
            <Box mt={"2"}>
              {item.learning.map((data, i) => (
                <Flex key={i} direction={{ sm: "column", md: "row" }}>
                  <Flex gap={"6px"} align={"center"} width={"40%"}>
                    {i % 2 === 0 && (
                      <>
                        <BsCheckLg />
                        <Text>{item.learning[i]}</Text>
                      </>
                    )}
                  </Flex>
                  <Flex gap={"6px"} align={"center"}>
                    {i % 2 === 0 && (
                      <>
                        <BsCheckLg />
                        <Text>{item.learning[i + 1]}</Text>
                      </>
                    )}
                  </Flex>
                </Flex>
              ))}
            </Box>
            <Box>
              <Heading
                fontSize={"xx-large"}
                letterSpacing={"1px"}
                fontFamily={"inherit"}
                mt={"6"}
                mb={"2"}
                color={"purple.500"}
              >
                Talablar
              </Heading>
              {item.demand.map((text) => (
                <Flex key={text} gap={"10px"} align={"center"}>
                  <Box
                    width={"9px"}
                    height={"9px"}
                    borderRadius={"full"}
                    bg={"white"}
                  ></Box>
                  <Text>{text}</Text>
                </Flex>
              ))}
            </Box>
          </TabPanel>
          <TabPanel>
            <Heading
              fontSize={"xx-large"}
              letterSpacing={"1px"}
              fontFamily={"inherit"}
              mb={"4"}
              color={"purple.500"}
            >
              Kurs Dasturi
            </Heading>
            {serverData.length <= 0 ? (
              <Stack mt={"2"}>
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
              </Stack>
            ) : (
              <Accordion defaultIndex={[0]} allowMultiple allowToggle mt={"4"}>
                <AccordionItem border={"none"}>
                  <Box
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
                        #1. {item.title}
                      </Box>
                    </AccordionButton>
                  </Box>
                  <Box mt={"4"}>
                    {serverData.map((item, i) => (
                      <Fragment key={i}>
                        <AccordionPanel py={2}>
                          <Flex align={"center"} gap={"10px"}>
                            <BsFillPlayCircleFill fontSize={"18px"} />
                            {item?.snippet?.title.slice(
                              0,
                              item?.snippet?.title.lastIndexOf("||")
                            )}
                          </Flex>
                        </AccordionPanel>
                      </Fragment>
                    ))}
                  </Box>
                </AccordionItem>
              </Accordion>
            )}
          </TabPanel>
          <TabPanel>
            <Heading
              fontSize={"xx-large"}
              letterSpacing={"1px"}
              fontFamily={"inherit"}
              color={"purple.500"}
            >
              Sharhlar
            </Heading>
            <Box display={"grid"} placeItems={"center"} height={"200px"}>
              <Flex align={"center"} flexDirection={"column"} gap={"10px"}>
                <TfiFaceSmile fontSize={"3rem"} />
                <Text fontSize={"xl"}>Mavjud Emas!</Text>
              </Flex>
            </Box>
          </TabPanel>
          <TabPanel>
            <Heading
              fontSize={"xx-large"}
              letterSpacing={"1px"}
              fontFamily={"inherit"}
              color={"purple.500"}
            >
              Mentor
            </Heading>
            <Flex mt="4" gap="15px" align={"center"}>
              <LazyLoadImage
                src={"https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs"}
                alt="Mentor Image"
                effect="blur"
                style={{ borderRadius: "50%" }}
                width={"150px"}
                height={"150px"}
              />
              <Box width={"full"}>
                <Text fontSize={"xl"} fontWeight={"bold"}>
                  Samar Badriddinov
                </Text>
                <Text fontSize={"md"}>
                  Software Engineer & Coding instructor
                </Text>
                <Flex mt={"2"} gap={"15px"}>
                  <Text display={"flex"} align={"center"} gap={"6px"}>
                    <AiFillStar color="#553C9A" fontSize={"18px"} /> 4.8 Reyting
                  </Text>
                  <Text display={"flex"} align={"center"} gap={"6px"}>
                    <IoPeopleSharp color="#553C9A" fontSize={"18px"} /> 0
                  </Text>
                  <Text display={"flex"} align={"center"} gap={"6px"}>
                    <BsPlayCircle color="#553C9A" fontSize={"18px"} />#
                    {courses_data.length} Kurslar
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
