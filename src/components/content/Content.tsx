import {
  Box,
  Text,
  Card,
  CardBody,
  Flex,
  useColorMode,
  Divider,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";
import codeImg from "../../assets/code.png";
import { LuAlarmClock } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { GiLevelEndFlag } from "react-icons/gi";
import { homeCardData } from "@/config";
import { Fragment } from "react";

const icons: JSX.Element[] = [
  <LuAlarmClock fontSize={"24px"} />,
  <Fragment></Fragment>,
  <SlLocationPin fontSize={"24px"} />,
  <Fragment></Fragment>,
  <GiLevelEndFlag fontSize={"24px"} />,
];

export default function Content() {
  const { colorMode } = useColorMode();

  return (
    <Box mt={"24"}>
      <Container maxW="container.xl">
        <Box p={{ sm: "0", md: "6" }}>
          <Card>
            <CardBody paddingX={'2'} paddingY={'5'}>
              <Flex justify={"space-between"} px={3} gap={"20px"}>
                <Box w={{ sm: "100%", lg: "75%" }}>
                  <Flex direction={{ sm: "column", md: "row" }}>
                    <Text
                      fontSize={{ sm: "x-large", md: "xx-large" }}
                      fontWeight={"bold"}
                      letterSpacing={2}
                      color={"green.500"}
                    >
                      Rof1yev&nbsp;
                    </Text>
                    <Text
                      fontSize={{ sm: "large", md: "xx-large" }}
                      fontWeight={"bold"}
                      letterSpacing={2}
                    >
                      - Dasturlash Kurslari
                    </Text>
                  </Flex>
                  <Text mt={"3.5"} fontSize={{ sm: "16px", md: "xl" }}>
                    Dasturlashga oid to'liq va amaliy kurslarga boy platformaga
                    xush kelibsiz. Bizda barcha kurslani boshlang'ichdan
                    mukammallikgacha o'rganishingiz mumkin.
                  </Text>
                  <Card
                    mt={"5"}
                    bg={colorMode === "dark" && "gray.800"}
                    style={{
                      border: colorMode === "dark" && "1px solid #393f49 ",
                      boxShadow:
                        colorMode === "light"
                          ? `0 1px 5px #cccccca8`
                          : `0 1px 5px #cccccc32`,
                    }}
                  >
                    <CardBody>
                      <Box display={{ sm: "block", md: "none" }}>
                        <Flex
                          justify={"space-between"}
                          direction={"column"}
                          gap={"20px"}
                        >
                          {homeCardData.map(({ id, text }) =>
                            text !== "" ? (
                              <Flex key={id} direction={"column"}>
                                <Flex justify={"space-between"} height="30px">
                                  <Text fontSize={"large"}>{text}</Text>
                                  <Text>{icons[id - 1]}</Text>
                                </Flex>
                              </Flex>
                            ) : (
                              <>
                                <Divider key={id} />
                              </>
                            )
                          )}
                        </Flex>
                      </Box>
                      <Box display={{ sm: "none", md: "block" }}>
                        <Flex justify={"space-between"}>
                          {homeCardData.map(({ id, text }) =>
                            text !== "" ? (
                              <Flex key={id} height="30px">
                                <Text
                                  display={"flex"}
                                  alignItems={"center"}
                                  gap={"6px"}
                                >
                                  {icons[id - 1]} {text}
                                </Text>
                              </Flex>
                            ) : (
                              <Box key={id}>
                                <Divider
                                  orientation="vertical"
                                  borderColor={
                                    colorMode === "dark" ? "#ccc" : "#222"
                                  }
                                />
                              </Box>
                            )
                          )}
                        </Flex>
                      </Box>
                    </CardBody>
                  </Card>
                </Box>
                <Box display={{ sm: "none", lg: "block" }}>
                  <Image
                    src={codeImg}
                    width={230}
                    height={120}
                    loading="lazy"
                    alt="Code image"
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Flex>
            </CardBody>
          </Card>
          <Flex
            mt={{ sm: "4", md: "24" }}
            align={"center"}
            justifyContent={"space-between"}
            px={"5"}
            gap={"30px"}
            flexDirection={{ sm: "column", md: "row" }}
            style={{ background: `url(${codeImg})` }}
          >
            <Flex align={"center"} direction={"column"}>
              <Box
                bg={colorMode === "light" ? "gray.100" : "gray.700"}
                width={"100px"}
                height={"100px"}
                borderRadius={"full"}
                p={"5"}
              >
                <svg
                  viewBox="0 0 50 50"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_200_7212)">
                    <path
                      fill={colorMode === "light" ? "#333" : "#fefefed8"}
                      d="M48.5348 6.61884H40.6819L25.4633 1.54587C25.1555 1.44331 24.8223 1.44575 24.516 1.5529L10.0421 6.61884H1.46519C0.656013 6.61884 0 7.27485 0 8.08402V41.1806C0 41.9898 0.656013 42.6458 1.46519 42.6458H14.7092V45.599H10.2907C9.48152 45.599 8.82551 46.255 8.82551 47.0642C8.82551 47.8733 9.48152 48.5293 10.2907 48.5293H39.7093C40.5185 48.5293 41.1745 47.8733 41.1745 47.0642C41.1745 46.255 40.5185 45.599 39.7093 45.599H35.2908V42.6457H48.5348C49.344 42.6457 50 41.9897 50 41.1806V8.08402C50 7.27475 49.3441 6.61884 48.5348 6.61884ZM16.9044 11.9512C24.7527 14.7045 24.644 14.6976 25 14.6976C25.3392 14.6976 25.2307 14.7045 33.0957 12.0783V15.9034L25 19.0174L16.9044 15.9034V11.9512ZM25.0115 4.48416L35.8114 8.08412L25.0115 11.6841L14.7259 8.08412L25.0115 4.48416ZM32.3603 45.599H17.6396V42.6457H32.3604V45.599H32.3603ZM47.0696 39.7154C40.612 39.7154 12.6863 39.7154 2.93037 39.7154V9.54921H10.0411L13.974 10.9257V16.9097C13.974 17.5159 14.3473 18.0596 14.9132 18.2772C24.6904 22.0472 24.6111 22.0525 25 22.0525C25.3887 22.0525 25.3138 22.0555 35.0868 18.2772C35.6527 18.0596 36.026 17.5159 36.026 16.9097V11.1015L38.9798 10.1169V18.3808C38.9798 19.1899 39.6359 19.846 40.445 19.846C41.2542 19.846 41.9102 19.1899 41.9102 18.3808V9.54921H47.0696V39.7154Z"
                    ></path>
                    <path
                      fill={colorMode === "light" ? "#333" : "#fefefed8"}
                      d="M13.2317 26.4768H7.348C6.53883 26.4768 5.88281 27.1328 5.88281 27.942V33.8257C5.88281 34.6349 6.53883 35.2909 7.348 35.2909H13.2317C14.0409 35.2909 14.6969 34.6349 14.6969 33.8257V27.942C14.6969 27.1328 14.0409 26.4768 13.2317 26.4768ZM11.7665 32.3605H8.81319V29.4072H11.7665V32.3605Z"
                    ></path>
                    <path
                      fill={colorMode === "light" ? "#333" : "#fefefed8"}
                      d="M19.1156 26.4768C18.3064 26.4768 17.6504 27.1328 17.6504 27.942C17.6504 28.7512 18.3064 29.4072 19.1156 29.4072H42.6505C43.4597 29.4072 44.1157 28.7512 44.1157 27.942C44.1157 27.1328 43.4597 26.4768 42.6505 26.4768H19.1156Z"
                    ></path>
                    <path
                      fill={colorMode === "light" ? "#333" : "#fefefed8"}
                      d="M42.6505 32.3604H19.1156C18.3064 32.3604 17.6504 33.0164 17.6504 33.8255C17.6504 34.6347 18.3064 35.2907 19.1156 35.2907H42.6505C43.4597 35.2907 44.1157 34.6347 44.1157 33.8255C44.1157 33.0164 43.4597 32.3604 42.6505 32.3604Z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_200_7212">
                      <rect width="50" height="50" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </Box>
              <Text mt={"2"}>Ro'yxatdan o'ting!</Text>
            </Flex>
            <Box
              width={"130px"}
              height={"100px"}
              display={{ sm: "none", md: "grid" }}
              placeItems={"center"}
            >
              <svg
                viewBox="0 0 142 21"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill={colorMode === "light" ? "#333" : "#fefefed8"}
                  d="M141.426 16.4065C141.926 16.1712 142.14 15.5753 141.905 15.0757L138.069 6.93391C137.834 6.43429 137.238 6.22007 136.738 6.45543C136.239 6.6908 136.025 7.28662 136.26 7.78624L139.669 15.0234L132.432 18.4327C131.932 18.6681 131.718 19.2639 131.954 19.7635C132.189 20.2632 132.785 20.4774 133.284 20.242L141.426 16.4065ZM1.32875 16.4463C1.80655 16.28 2.28247 16.1151 2.75656 15.9517L2.10479 14.0609C1.62876 14.225 1.15092 14.3905 0.671246 14.5575L1.32875 16.4463ZM5.57929 14.9886C6.53305 14.6666 7.47939 14.3506 8.41857 14.0407L7.79185 12.1414C6.8482 12.4528 5.89751 12.7702 4.93954 13.0937L5.57929 14.9886ZM11.2433 13.12C12.204 12.8108 13.1571 12.5081 14.1032 12.2119L13.5056 10.3033C12.5544 10.6011 11.5961 10.9054 10.6306 11.2161L11.2433 13.12ZM16.9439 11.3357C17.9067 11.0432 18.8622 10.7576 19.8107 10.479L19.247 8.56011C18.2925 8.84049 17.3312 9.12778 16.3626 9.42199L16.9439 11.3357ZM22.6773 9.65211C23.639 9.37988 24.5936 9.11497 25.5414 8.85738L25.0168 6.92739C24.0621 7.18686 23.1008 7.45364 22.1326 7.72773L22.6773 9.65211ZM28.4345 8.08847C29.4027 7.83706 30.3641 7.59349 31.319 7.35777L30.8396 5.41606C29.8768 5.65375 28.9077 5.89929 27.9318 6.15267L28.4345 8.08847ZM34.2147 6.66236C35.192 6.43437 36.1626 6.2148 37.1271 6.00363L36.6994 4.04991C35.7258 4.26306 34.7462 4.48465 33.7603 4.71467L34.2147 6.66236ZM40.0362 5.38852C41.0155 5.18889 41.9888 4.99814 42.9565 4.81625L42.5871 2.85066C41.6091 3.03448 40.6258 3.22719 39.6367 3.42882L40.0362 5.38852ZM45.8919 4.28882C46.8755 4.12036 47.8536 3.96126 48.8269 3.81148L48.5227 1.83475C47.5381 1.98627 46.5488 2.1472 45.5543 2.31752L45.8919 4.28882ZM51.7656 3.38564C52.7557 3.25117 53.7412 3.12652 54.7226 3.01168L54.4902 1.02523C53.4963 1.14153 52.4986 1.26773 51.4964 1.40384L51.7656 3.38564ZM57.6797 2.69419C58.6694 2.59757 59.6555 2.51106 60.6386 2.43464L60.4836 0.440655C59.4873 0.518103 58.488 0.605768 57.4854 0.703656L57.6797 2.69419ZM63.6042 2.23424C64.5967 2.17731 65.5868 2.13077 66.5749 2.0946L66.5018 0.0959389C65.4997 0.132616 64.4959 0.179806 63.4897 0.237519L63.6042 2.23424ZM69.5452 2.01702C70.5365 2.00156 71.5266 1.99659 72.5161 2.00209L72.5272 0.00211763C71.5236 -0.00346196 70.5194 0.00158417 69.514 0.0172675L69.5452 2.01702ZM75.4878 2.05013C76.4773 2.07662 77.4668 2.11359 78.4569 2.16103L78.5526 0.163319C77.5484 0.115211 76.5449 0.0777159 75.5413 0.0508469L75.4878 2.05013ZM81.4232 2.33428C82.4099 2.40223 83.3978 2.48053 84.3877 2.56917L84.5661 0.57714C83.5627 0.487288 82.5611 0.407905 81.5606 0.339004L81.4232 2.33428ZM87.346 2.86418C88.3265 2.97187 89.3095 3.08962 90.2955 3.21742L90.5526 1.23401C89.5538 1.10456 88.5579 0.985264 87.5643 0.876132L87.346 2.86418ZM93.2411 3.62766C94.2186 3.77316 95.1996 3.92839 96.1846 4.09336L96.515 2.12083C95.5182 1.95389 94.5252 1.79676 93.5356 1.64946L93.2411 3.62766ZM99.1105 4.60969C100.079 4.7892 101.052 4.97796 102.03 5.17596L102.427 3.21575C101.438 3.0156 100.455 2.82474 99.475 2.64318L99.1105 4.60969ZM104.947 5.79093C105.91 6.00174 106.878 6.22133 107.852 6.4497L108.309 4.50254C107.326 4.27196 106.348 4.05018 105.375 3.8372L104.947 5.79093ZM110.742 7.14894C111.699 7.38773 112.663 7.6348 113.633 7.89016L114.142 5.9561C113.164 5.69856 112.192 5.4493 111.225 5.20834L110.742 7.14894ZM116.512 8.66748C117.459 8.92957 118.413 9.19937 119.374 9.47687L119.929 7.55546C118.961 7.27589 118 7.00401 117.045 6.73983L116.512 8.66748ZM122.243 10.3226C123.185 10.606 124.134 10.8966 125.09 11.1944L125.685 9.28487C124.723 8.98516 123.768 8.69264 122.818 8.40732L122.243 10.3226ZM127.932 12.0941C128.875 12.3976 129.825 12.7078 130.782 13.0249L131.411 11.1263C130.449 10.8075 129.493 10.4954 128.544 10.1902L127.932 12.0941ZM133.597 13.9698C134.534 14.2884 135.478 14.6133 136.429 14.9446L137.087 13.0559C136.132 12.723 135.183 12.3965 134.241 12.0763L133.597 13.9698ZM139.24 15.9344C139.712 16.1024 140.186 16.2719 140.662 16.4429L141.338 14.5609C140.861 14.3891 140.385 14.2189 139.911 14.0502L139.24 15.9344Z"
                ></path>
              </svg>
            </Box>
            <Flex align={"center"} direction={"column"}>
              <Box
                bg={colorMode === "light" ? "gray.100" : "gray.700"}
                width={"100px"}
                height={"100px"}
                borderRadius={"full"}
                p={"5"}
              >
                <svg
                  viewBox="0 0 50 50"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill={colorMode === "light" ? "#333" : "#fefefed8"}
                    d="M48.4375 31.2495C47.575 31.2495 46.875 31.9495 46.875 32.812V43.7495H3.125V24.9995H20.3125C21.175 24.9995 21.875 24.2995 21.875 23.437C21.875 22.5745 21.175 21.8745 20.3125 21.8745H3.125V15.6245H20.3125C21.175 15.6245 21.875 14.9245 21.875 14.062C21.875 13.1995 21.175 12.4995 20.3125 12.4995H3.125C1.4 12.4995 0 13.8995 0 15.6245V43.7495C0 45.4745 1.4 46.8745 3.125 46.8745H46.875C48.6 46.8745 50 45.4745 50 43.7495V32.812C50 31.9495 49.3 31.2495 48.4375 31.2495Z"
                  ></path>
                  <path
                    fill={colorMode === "light" ? "#333" : "#fefefed8"}
                    d="M14.0625 31.2495H7.8125C6.95 31.2495 6.25 31.9495 6.25 32.812C6.25 33.6745 6.95 34.3745 7.8125 34.3745H14.0625C14.925 34.3745 15.625 33.6745 15.625 32.812C15.625 31.9495 14.925 31.2495 14.0625 31.2495Z"
                  ></path>
                  <path
                    fill={colorMode === "light" ? "#333" : "#fefefed8"}
                    d="M49.0531 7.93721L38.1156 3.24971C37.7187 3.08408 37.2781 3.08408 36.8813 3.24971L25.9438 7.93721C25.3719 8.18408 25 8.74971 25 9.37471V15.6247C25 24.2216 28.1781 29.2466 36.7219 34.1685C36.9625 34.306 37.2312 34.3747 37.5 34.3747C37.7688 34.3747 38.0375 34.306 38.2781 34.1685C46.8219 29.2591 50 24.2341 50 15.6247V9.37471C50 8.74971 49.6281 8.18408 49.0531 7.93721ZM46.875 15.6247C46.875 22.8403 44.4875 26.8122 37.5 30.9997C30.5125 26.8028 28.125 22.831 28.125 15.6247V10.406L37.5 6.38721L46.875 10.406V15.6247Z"
                  ></path>
                  <path
                    fill={colorMode === "light" ? "#333" : "#fefefed8"}
                    d="M43.1665 12.8404C42.4946 12.3091 41.5134 12.4122 40.9696 13.0841L36.0571 19.2279L34.1134 16.3216C33.629 15.6029 32.6571 15.4122 31.9477 15.8872C31.2321 16.3654 31.0352 17.3372 31.5134 18.0529L34.6384 22.7404C34.9165 23.156 35.3727 23.4122 35.8727 23.4372C35.8946 23.4372 35.9196 23.4372 35.9384 23.4372C36.4102 23.4372 36.8602 23.2247 37.1602 22.8497L43.4102 15.0372C43.9477 14.3622 43.8415 13.381 43.1665 12.8404Z"
                  ></path>
                </svg>
              </Box>
              <Text mt={"2"}>Kurni tanlang!</Text>
            </Flex>
            <Box
              width={"130px"}
              height={"100px"}
              display={{ sm: "none", md: "grid" }}
              placeItems={"center"}
            >
              <svg
                viewBox="0 0 142 21"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill={colorMode === "light" ? "#333" : "#fefefed8"}
                  d="M141.9 5.4354C142.141 4.9382 141.933 4.34023 141.435 4.0998L133.333 0.181752C132.836 -0.0586784 132.238 0.149478 131.997 0.646682C131.757 1.14389 131.965 1.74186 132.462 1.98229L139.664 5.46499L136.182 12.6671C135.941 13.1643 136.149 13.7623 136.647 14.0027C137.144 14.2432 137.742 14.035 137.982 13.5378L141.9 5.4354ZM140.671 4.05565C140.193 4.22197 139.718 4.38684 139.243 4.55026L139.895 6.44108C140.371 6.27699 140.849 6.11146 141.329 5.94448L140.671 4.05565ZM136.421 5.51337C135.467 5.83537 134.521 6.15132 133.581 6.46124L134.208 8.3605C135.152 8.04912 136.102 7.73171 137.06 7.40829L136.421 5.51337ZM130.757 7.382C129.796 7.69119 128.843 7.99387 127.897 8.29004L128.494 10.1987C129.446 9.90088 130.404 9.59659 131.369 9.28582L130.757 7.382ZM125.056 9.1663C124.093 9.45877 123.138 9.74431 122.189 10.0229L122.753 11.9418C123.707 11.6615 124.669 11.3742 125.637 11.08L125.056 9.1663ZM119.323 10.8498C118.361 11.1221 117.406 11.387 116.459 11.6446L116.983 13.5746C117.938 13.3151 118.899 13.0483 119.867 12.7742L119.323 10.8498ZM113.566 12.4135C112.597 12.6649 111.636 12.9085 110.681 13.1442L111.16 15.0859C112.123 14.8482 113.092 14.6027 114.068 14.3493L113.566 12.4135ZM107.785 13.8396C106.808 14.0676 105.837 14.2872 104.873 14.4983L105.301 16.452C106.274 16.2389 107.254 16.0173 108.24 15.7873L107.785 13.8396ZM101.964 15.1134C100.985 15.3131 100.011 15.5038 99.0435 15.6857L99.4129 17.6513C100.391 17.4675 101.374 17.2748 102.363 17.0731L101.964 15.1134ZM96.1081 16.2131C95.1245 16.3816 94.1464 16.5407 93.1731 16.6905L93.4773 18.6672C94.4619 18.5157 95.4512 18.3548 96.4457 18.1844L96.1081 16.2131ZM90.2344 17.1163C89.2443 17.2508 88.2588 17.3754 87.2774 17.4903L87.5098 19.4767C88.5037 19.3604 89.5014 19.2342 90.5036 19.0981L90.2344 17.1163ZM84.3203 17.8078C83.3306 17.9044 82.3445 17.9909 81.3614 18.0673L81.5164 20.0613C82.5127 19.9838 83.512 19.8962 84.5146 19.7983L84.3203 17.8078ZM78.3958 18.2677C77.4033 18.3246 76.4132 18.3712 75.4251 18.4073L75.4982 20.406C76.5003 20.3693 77.5041 20.3221 78.5103 20.2644L78.3958 18.2677ZM72.4548 18.4849C71.4635 18.5004 70.4734 18.5054 69.4839 18.4999L69.4728 20.4998C70.4764 20.5054 71.4806 20.5004 72.486 20.4847L72.4548 18.4849ZM66.5122 18.4518C65.5227 18.4253 64.5332 18.3884 63.5431 18.3409L63.4474 20.3386C64.4516 20.3867 65.4551 20.4242 66.4587 20.4511L66.5122 18.4518ZM60.5768 18.1677C59.5901 18.0997 58.6022 18.0214 57.6123 17.9328L57.4339 19.9248C58.4373 20.0147 59.4389 20.094 60.4394 20.1629L60.5768 18.1677ZM54.654 17.6378C53.6735 17.5301 52.6905 17.4123 51.7045 17.2845L51.4474 19.2679C52.4462 19.3974 53.4421 19.5167 54.4357 19.6258L54.654 17.6378ZM48.7589 16.8743C47.7814 16.7288 46.8004 16.5736 45.8154 16.4086L45.485 18.3811C46.4818 18.5481 47.4748 18.7052 48.4644 18.8525L48.7589 16.8743ZM42.8895 15.8923C41.921 15.7127 40.9481 15.524 39.9703 15.326L39.5734 17.2862C40.5617 17.4863 41.5454 17.6772 42.525 17.8588L42.8895 15.8923ZM37.0527 14.711C36.0897 14.5002 35.1217 14.2806 34.1479 14.0522L33.6913 15.9994C34.6744 16.23 35.6521 16.4518 36.625 16.6647L37.0527 14.711ZM31.2583 13.353C30.3005 13.1142 29.337 12.8671 28.3673 12.6118L27.858 14.5458C28.836 14.8034 29.808 15.0526 30.7745 15.2936L31.2583 13.353ZM25.4883 11.8345C24.5405 11.5724 23.5866 11.3026 22.6261 11.0251L22.071 12.9465C23.0386 13.226 23.9999 13.4979 24.9552 13.7621L25.4883 11.8345ZM19.7574 10.1793C18.8148 9.89593 17.8657 9.60536 16.9097 9.30757L16.3149 11.2171C17.277 11.5168 18.2325 11.8093 19.1816 12.0946L19.7574 10.1793ZM14.0682 8.40782C13.1249 8.10439 12.1749 7.79414 11.2177 7.47708L10.5888 9.37564C11.5513 9.69446 12.5068 10.0065 13.4558 10.3117L14.0682 8.40782ZM8.40259 6.53211C7.46565 6.21352 6.52179 5.8886 5.57071 5.55736L4.9129 7.44608C5.86849 7.7789 6.81699 8.10542 7.75873 8.42564L8.40259 6.53211ZM2.75983 4.56754C2.2878 4.39954 1.81398 4.23004 1.33833 4.05903L0.661668 5.94108C1.1393 6.11281 1.61514 6.28304 2.08923 6.45176L2.75983 4.56754Z"
                ></path>
              </svg>
            </Box>
            <Flex align={"center"} direction={"column"}>
              <Box
                bg={colorMode === "light" ? "gray.100" : "gray.700"}
                width={"100px"}
                height={"100px"}
                borderRadius={"full"}
                p={"5"}
              >
                <svg
                  viewBox="0 0 50 50"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_200_7247)">
                    <path
                      fill={colorMode === "light" ? "#333" : "#fefefed8"}
                      d="M48.5352 47.0703H42.0898V32.7148C42.0898 31.0994 40.7756 29.7852 39.1602 29.7852H36.9822C36.4083 27.2813 35.2658 25.1315 33.6366 23.5165C32.6112 22.5 31.419 21.7232 30.0969 21.2007C32.9308 18.7556 34.7803 14.5286 34.7803 10.7096C34.7803 7.24395 33.8162 4.52393 31.9149 2.62539C30.1951 0.907813 27.804 0 25 0C22.1961 0 19.8049 0.907813 18.085 2.62539C16.1837 4.52393 15.2196 7.24395 15.2196 10.7096C15.2196 14.5285 17.0691 18.7556 19.903 21.2007C18.581 21.7232 17.3888 22.5 16.3634 23.5165C14.7342 25.1315 13.5917 27.2814 13.0179 29.7852H10.8398C9.22441 29.7852 7.91016 31.0994 7.91016 32.7148V47.0703H1.46484C0.655859 47.0703 0 47.7262 0 48.5352C0 49.3441 0.655859 50 1.46484 50H48.5352C49.3441 50 50 49.3441 50 48.5352C50 47.7262 49.3441 47.0703 48.5352 47.0703ZM25 2.92969C27.1514 2.92969 30.5279 3.64482 31.5484 7.89658C30.0555 7.70674 29.2029 7.28496 28.5356 6.95479C27.8815 6.63115 27.1401 6.26426 26.2354 6.47168C25.5009 6.64004 24.9758 7.05439 24.4681 7.45518C23.5428 8.18555 22.1919 9.24941 18.2021 9.46484C18.6989 3.81416 22.6073 2.92969 25 2.92969ZM18.2969 12.3934C23.2722 12.1313 25.1305 10.6648 26.2833 9.75479C26.4502 9.62295 26.665 9.45352 26.798 9.37236C26.9156 9.42197 27.0892 9.50781 27.2364 9.58066C28.0972 10.0065 29.4486 10.6749 31.8469 10.871C31.8086 13.0279 31.0067 15.4202 29.6815 17.3051C28.3292 19.2287 26.6228 20.332 25 20.332C23.3772 20.332 21.6708 19.2287 20.3184 17.3051C19.2993 15.8556 18.5884 14.1055 18.2969 12.3934ZM24.2188 23.3398H25.7812C29.8465 23.3398 32.8119 25.7168 33.9625 29.7852H16.0375C17.1881 25.7168 20.1535 23.3398 24.2188 23.3398ZM10.8398 47.0703V32.7148H39.1602V47.0703H10.8398Z"
                    ></path>
                    <path
                      fill={colorMode === "light" ? "#333" : "#fefefed8"}
                      d="M25 40.5271C25.809 40.5271 26.4648 39.8713 26.4648 39.0623C26.4648 38.2532 25.809 37.5974 25 37.5974C24.191 37.5974 23.5352 38.2532 23.5352 39.0623C23.5352 39.8713 24.191 40.5271 25 40.5271Z"
                    ></path>
                  </g>
                </svg>
              </Box>
              <Text mt={"2"}>O'rganishni boshlang!</Text>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
