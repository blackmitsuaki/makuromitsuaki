import React from "react";
import Head from "next/head";

const Layout = ({ title = "何これエロい", children }) => {
  return (
    <div>
      <Head>
        <title>{title}| 真黒光昭</title>
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/favicons/favicon.ico"
        />
      </Head>
      {children}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          font-family: "Noto Sans JP", sans-serif;
        }
      `}</style>
    </div>
  );
};

export { Layout };
