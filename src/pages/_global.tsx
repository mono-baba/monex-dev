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
        <title>ドコモとマネックスの機能連携について | マネックス証券</title>
        <meta
          name="description"
          content="より便利に使いやすく！「dカード®」によるクレカ積立サービスをはじめとしたNTTドコモとの機能連携の概要や提供時期など最新の情報をご案内いたします。"
        />
        <meta
          name="keywords"
          content="NTTドコモ,マネックス証券,機能連携,資本業務提携,提携・協業"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MonexJP" />
        <meta
          property="og:title"
          content="ドコモとマネックスの機能連携について"
        />
        <meta
          property="og:url"
          content="https://info.monex.co.jp/feature/docomo-cooperation/index.html"
        />
        <meta
          property="og:image"
          content="https://info.monex.co.jp/image/feature/docomo-cooperation/sns_1200-630.png"
        />
        <meta property="og:site_name" content="マネックス証券" />
        <meta
          property="og:description"
          content="より便利に使いやすく！「dカード®」によるクレカ積立サービスをはじめとしたNTTドコモとの機能連携の概要や提供時期など最新の情報をご案内いたします。"
        />

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
        <link rel="stylesheet" href="/src/assets/style.css" media="all" />
        <script
          type="text/javascript"
          src="/javascript/js2_8/common/jquery-3.4.1.min.js"
        ></script>
        <script
          type="text/javascript"
          src="/javascript/feature/common/main.js"
        ></script>
        <script
          type="text/javascript"
          src="/javascript/feature/docomo-cooperation/function.js"
        ></script>
      </Head>
      <Header />
      {children}
      <Footer />
      <div className="l-overlay"></div>
    </>
  )
}
