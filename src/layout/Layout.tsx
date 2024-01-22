import { Flex } from "@chakra-ui/react";
import { Footer, Header, Sidebar } from "../components";
import { Layout_Props } from "./Layout.props";
import { useState } from "react";

export default function Layout({
  children,
  sidebar = true,
}: Layout_Props): JSX.Element {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = (val: boolean) => setShowSidebar(val);

  return (
    <>
      <Header toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
      <Flex>
        {sidebar && <Sidebar showSidebar={showSidebar} />}
        <Flex
          ml={{ sm: "0px", xl: sidebar ? "300px" : "0px" }}
          direction={"column"}
          flex={"1"}
        >
          {children}
          <Footer />
        </Flex>
      </Flex>
    </>
  );
}
