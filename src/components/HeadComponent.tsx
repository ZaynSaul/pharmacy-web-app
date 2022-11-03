import Head from "next/dist/shared/lib/head";

import React from "react";

const HeadComponent = ({ title }: any) => {
  return (
    <Head>
      <title>{title ? "Pharmacy -" + title : "Login"}</title>
      <meta name="description" content="Clinic Website" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadComponent;
