import { Flex } from "@chakra-ui/react";
import { Footer, Header, Loader, Sidebar } from "../components";
import { Layout_Props } from "./Layout.props";
import { useEffect, useRef, useState } from "react";

export default function Layout({ children }: Layout_Props): JSX.Element {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = (val: boolean) => setShowSidebar(val);

  return (
    <>
      <Header toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
      <Flex>
        <Sidebar showSidebar={showSidebar} />
        <Flex ml={{ sm: "0px", xl: "300px" }} direction={"column"} flex={"1"}>
          {children}
          <Footer />
        </Flex>
      </Flex>
    </>
  );
}
