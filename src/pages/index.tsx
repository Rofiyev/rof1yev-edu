import { Poppins } from "next/font/google";
import SEO from "@/layout/seo/SEO";
import Layout from "@/layout/Layout";
import { Content } from "@/components";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export default function Home(): JSX.Element {
  return (
    <SEO title={"Rof1yev - Online Education"}>
      <main className={`${poppins.className}`}>
        <Layout>
          <Content />
        </Layout>
      </main>
    </SEO>
  );
}
