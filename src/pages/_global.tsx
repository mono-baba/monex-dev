import type { GlobalProps } from "minista"
import { Head } from "minista"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function ({ url, title, children }: GlobalProps) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1.0,maximum-scale=10.0,user-scalable=yes"
        />
        <meta name="format-detection" content="telephone=no" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>{title} | マネックス証券</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MonexJP" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="" />
        <meta property="og:description" content="" />

        <link
          rel="stylesheet"
          href="/style/feature/common/base.css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/style/feature/common/parts.css"
          media="all"
        />
        <script
          type="text/javascript"
          src="/javascript/js2_8/common/jquery-3.4.1.min.js"
        ></script>
        <script
          type="text/javascript"
          src="/javascript/feature/common/main.js"
        ></script>
      </Head>
      <Header />
      {children}
      <Footer />
      <div className="l-overlay"></div>
    </>
  )
}
