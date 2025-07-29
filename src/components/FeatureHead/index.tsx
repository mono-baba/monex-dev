import { Head } from "minista"

interface FeatureHeadProps {
  pageTitle: string
  pageDescription: string
  pageKeywords: string
  featureName: string
}

const FeatureHead = ({ pageTitle, pageDescription, pageKeywords, featureName }: FeatureHeadProps) => {
  return (
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,minimum-scale=1.0,maximum-scale=10.0,user-scalable=yes"
      />
      <meta name="format-detection" content="telephone=no" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>{pageTitle} | マネックス証券</title>
      <meta
        name="description"
        content={pageDescription}
      />
      <meta
        name="keywords"
        content={pageKeywords}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@MonexJP" />
      <meta
        property="og:title"
        content={pageTitle}
      />
      <meta
        property="og:url"
        content={`https://info.monex.co.jp/feature/${featureName}/index.html`}
      />
      <meta
        property="og:image"
        content={`https://info.monex.co.jp/image/feature/${featureName}/sns_1200-630.png`}
      />
      <meta property="og:site_name" content="マネックス証券" />
      <meta
        property="og:description"
        content={pageDescription}
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
        src={`/javascript/feature/${featureName}/function.js`}
      ></script>
    </Head>
  )
}

export default FeatureHead