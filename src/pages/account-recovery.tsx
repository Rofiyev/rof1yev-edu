import { Content } from "@/components";
import { IAuth } from "@/interface";
import Layout from "@/layout/Layout";
import SEO from "@/layout/seo/SEO";
import {
  Box,
  CardBody,
  Card,
  useColorMode,
  Flex,
  Text,
  VStack,
  FormControl,
  Input,
  Button,
  Stack,
  HStack,
  Progress,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";

export default function AccountRecovery(): JSX.Element {
  const { colorMode } = useColorMode();
  const [isLogin, setIsLogin] = useState<Boolean>(true);

  function getData(
    values: { email: string; password: string },
    resetForm: Function
  ) {
    if (values) {
      setTimeout(() => {
        console.log(values);

        resetForm();
      }, 1000);
    }
  }

  const initialValues: IAuth = {
    email: "",
    password: "",
  };

  return (
    <SEO title="Rof1yev | Parolni tiklash">
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
              <Card
                width={{ sm: "100%", md: "65%", xl: "500px" }}
                shadow={"sm"}
                mt={"4"}
                bg={colorMode === "dark" ? "rgba(45, 55, 72, 0.5)" : "gray.50"}
              >
                <CardBody p={"5"}>
                  <Progress
                    my={"3"}
                    hasStripe
                    value={45}
                    colorScheme={
                      colorMode !== "dark" ? "blackAlpha" : "gray"
                    }
                    isAnimated
                  />
                  <Text fontSize={"xx-large"}>
                    Parolni tiklash{" "}
                    <Box color={"green.500"} as={"span"}>
                      !
                    </Box>
                  </Text>
                  <Text fontSize={"medium"}>
                    Parolni tiklash uchun elektron pochta manzilingizni
                    kiriting.
                  </Text>
                  <Box mt={"3"}>
                    <Formik
                      initialValues={initialValues}
                      onSubmit={(values, { resetForm }) =>
                        getData(values, resetForm)
                      }
                    >
                      {({ errors, touched }) => (
                        <Form>
                          <VStack spacing={4} align="flex-start">
                            <FormControl
                              isInvalid={!!errors.email && touched.email}
                            >
                              <Field
                                as={Input}
                                id="email"
                                name="email"
                                type="text"
                                variant="filled"
                                height="55px"
                                placeholder="Email manzilingiz"
                                _focusVisible={{
                                  outlineColor: "#31895a",
                                }}
                              />
                            </FormControl>
                            <Button
                              type="submit"
                              colorScheme="green"
                              width={"full"}
                              size={"lg"}
                            >
                              Boshlash
                            </Button>
                          </VStack>
                        </Form>
                      )}
                    </Formik>
                    <Text my={"2"} textAlign={"center"} fontSize={"medium"}>
                      Yoki ijtimoiy tarmoq orqali kiring
                    </Text>
                    <HStack width={"100%"}>
                      <Button
                        colorScheme="red"
                        rightIcon={<AiFillGoogleCircle />}
                        width={"50%"}
                        variant={"outline"}
                      >
                        Google
                      </Button>
                      <Button
                        colorScheme="gray"
                        rightIcon={<AiFillGithub />}
                        width={"50%"}
                        variant={"outline"}
                      >
                        GitHub
                      </Button>
                    </HStack>
                  </Box>
                </CardBody>
              </Card>
            </Flex>
          </Box>
        </Content>
      </Layout>
    </SEO>
  );
}
