import React from 'react'

// pages/_document.js
import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Google Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
