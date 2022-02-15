import Head from "next/head";
import { NextSeo } from "next-seo";

const SEO = ({ title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {description && <meta name="description" content={description} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NextSeo title={title} description={description} />
    </>
  );
};

export default SEO;
