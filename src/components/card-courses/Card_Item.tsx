import {
  Card,
  CardHeader,
  Heading,
  Button,
  Text,
  CardFooter,
  CardBody,
  Divider,
  useColorMode,
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useRouter } from "next/router";
import { ICourses } from "@/interface";

export default function Card_Item({ data }: DatasType): JSX.Element {
  const { colorMode } = useColorMode();
  const router = useRouter();

  return (
    <Card p={"4"}>
      <CardHeader p={"0"} display={"flex"} justifyContent={"center"}>
        <LazyLoadImage
          src={data.image_link}
          alt="HTML"
          effect="blur"
          style={{ borderRadius: "8px" }}
        />
      </CardHeader>
      <CardBody p={"0"} mt={"4"}>
        <Heading size="md" fontWeight={"500"} textAlign={"center"}>
          {data.title}
        </Heading>
      </CardBody>
      <Divider
        my={"6"}
        borderColor={
          colorMode === "dark" ? "rgb(255,255,255,0.2)" : "rgb(0,0,0,0.2)"
        }
      />
      <CardFooter
        p={"0"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Button
          variant={"outline"}
          colorScheme="teal"
          onClick={() => router.push(`courses/${data.slug}`)}
        >
          Batafsil
        </Button>
        <Text fontSize={"large"}>
          <sup>
            <del>${data.price}</del>
          </sup>
          &nbsp; {data.newPrice}
        </Text>
      </CardFooter>
    </Card>
  );
}

interface DatasType {
  data: ICourses;
}
