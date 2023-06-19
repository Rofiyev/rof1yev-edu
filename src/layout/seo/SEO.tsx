import Head from "next/head";
import { SEO_Props } from "./SEO.props";

export default function SEO({
  children,
  title,
  author,
  description,
  keyword,
}: SEO_Props) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <title>{title}</title>

        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="keyword" content={keyword} />
        <meta name="author" content={author} />
        <meta name="description" content={description} />
        <link rel="shortcut icon" href={"/favicon.ico"} type="image/x-icon" />
      </Head>
      {children}
    </>
  );
}
