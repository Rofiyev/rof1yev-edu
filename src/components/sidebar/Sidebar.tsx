import { sidebarItem } from "@/config";
import {
  Box,
  useColorMode,
  Text,
  List,
  ListItem,
  ListIcon,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ImHome } from "react-icons/im";
import { RxDashboard } from "react-icons/rx";
import { FaFolderOpen } from "react-icons/fa";
import { LuContact } from "react-icons/lu";
import { ISidebar_Props } from "./Sidebar.props";
import { IconType } from "react-icons/lib";

const socials_icons: IconType[] = [
  ImHome,
  RxDashboard,
  FaFolderOpen,
  LuContact,
];

export default function Sidebar({ showSidebar }: ISidebar_Props): JSX.Element {
  const { colorMode } = useColorMode();
  const { onOpen, onClose } = useDisclosure();
  const { asPath, push } = useRouter();

  return (
    <Box
      width={"300px"}
      height={`100vh`}
      pos={"fixed"}
      top={"0"}
      left={{ sm: showSidebar ? "-100%" : "0%", xl: "0%" }}
      transition={"all 0.3s ease-in-out"}
      bg={colorMode !== "dark" ? "gray.50" : "gray.900"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      zIndex={"10"}
    >
      <List spacing={3} p={"5"} pt={"32"}>
        {sidebarItem.map((item) => (
          <ListItem
            key={item.id}
            display={"flex"}
            alignItems={"center"}
            p={4}
            cursor={"pointer"}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
            borderRadius={"md"}
            bg={
              (asPath === item.route && colorMode === "light"
                ? "gray.100"
                : "") ||
              (asPath === item.route && colorMode === "dark" ? "gray.700" : "")
            }
            onClick={() => push(`${item.route}`)}
          >
            <ListIcon
              as={socials_icons[item.id - 1]}
              color={colorMode !== "dark" ? "#1a202c" : "whiteAlpha.700"}
            />
            {item.text}
          </ListItem>
        ))}
      </List>
      <Text textAlign={"center"}>@Rof1yev - Online Education</Text>
    </Box>
  );
}
