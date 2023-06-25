import { Content } from "@/components";
import Layout from "@/layout/Layout";
import SEO from "@/layout/seo/SEO";
import { Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <SEO title="HTML">
      <Layout>
        <Content>
          <Text>Hello world!</Text>
        </Content>
      </Layout>
    </SEO>
  );
}