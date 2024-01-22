import { Content } from "@/components";
import Layout from "@/layout/Layout";
import SEO from "@/layout/seo/SEO";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  VStack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import email_img from "../assets/email.png";
import { Field, Form, Formik } from "formik";
import { IForm } from "@/interface";

export default function Contact(): JSX.Element {
  const toast = useToast();

  function getData(
    values: { name: string; email: string; messege: string },
    resetForm: Function
  ) {
    if (values.email && values.messege && values.name) {
      setTimeout(() => {
        console.log(values);
        resetForm();
        toast({
          title: "Muvaffaqiyatli yuborildi!",
          status: "success",
          duration: 1500,
          isClosable: true,
          position: "top-right",
        });
      }, 1000);
    }
  }

  const initialValues: IForm = {
    name: "",
    email: "",
    messege: "",
  };

  return (
    <SEO title="Rof1yev | Bog'lanish">
      <Layout>
        <Content>
          <Box pos={"relative"} width="100%" minHeight="80vh">
            <Box>
              <Flex>
                <Text
                  fontSize={"xx-large"}
                  fontWeight={"bold"}
                  color={"purple.700"}
                  borderBottom={"3px solid #2A4365"}
                >
                  Bog'lanish
                </Text>
              </Flex>
              <Flex direction={"column"}>
                <Text fontSize={"large"} fontWeight={"400"}>
                  Platformaga oid savol va takilf yozishingiz mumkin.
                </Text>
              </Flex>
            </Box>
            <Card mt={"4"}>
              <CardBody paddingX={"2"} paddingY={"5"}>
                <Flex justify={"space-around"} gap={"20px"}>
                  <Box width={{ sm: "100%", lg: "50%" }}>
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
                              isInvalid={!!errors.name && touched.name}
                            >
                              <FormLabel htmlFor="name">Ismingiz</FormLabel>
                              <Field
                                as={Input}
                                id="name"
                                name="name"
                                type="text"
                                variant="filled"
                                height="45px"
                                placeholder="Omar"
                                validate={(value: string) => {
                                  let error;
                                  if (!value) {
                                    error = "Ismingizni kiriting!";
                                  }
                                  return error;
                                }}
                              />
                              <FormErrorMessage>{errors.name}</FormErrorMessage>
                            </FormControl>
                            <FormControl
                              isInvalid={!!errors.email && touched.email}
                            >
                              <FormLabel htmlFor="email">
                                Email manzilingiz
                              </FormLabel>
                              <Field
                                as={Input}
                                id="email"
                                name="email"
                                type="text"
                                variant="filled"
                                height="45px"
                                placeholder="example@gmail.com"
                                validate={(value: string) => {
                                  let error;
                                  if (!value) {
                                    error = "Email manzilingizni kiriting!";
                                  }
                                  return error;
                                }}
                              />
                              <FormErrorMessage>
                                {errors.email}
                              </FormErrorMessage>
                            </FormControl>

                            <FormControl
                              isInvalid={!!errors.messege && touched.messege}
                            >
                              <FormLabel htmlFor="messege">
                                Taklifingiz
                              </FormLabel>
                              <Field
                                as={Textarea}
                                id="messege"
                                name="messege"
                                type="text"
                                variant="filled"
                                validate={(value: string) => {
                                  let error;
                                  if (!value) {
                                    error = "Xabaringizni qoldiring!";
                                  }
                                  return error;
                                }}
                              />
                              <FormErrorMessage>
                                {errors.messege}
                              </FormErrorMessage>
                            </FormControl>
                            <Button type="submit" colorScheme="purple">
                              Yuborish
                            </Button>
                          </VStack>
                        </Form>
                      )}
                    </Formik>
                  </Box>
                  <Box
                    width={{ sm: "0%", lg: "40%" }}
                    display={{ sm: "none", md: "block" }}
                  >
                    <Image
                      src={email_img.src}
                      width={400}
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
          </Box>
        </Content>
      </Layout>
    </SEO>
  );
}
