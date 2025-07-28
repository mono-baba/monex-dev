import type { GlobalProps } from "minista"
import { Head } from "minista"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { getFeatureConfig, featureConfigs } from "../config/features"

export default function ({ url, title, children }: GlobalProps) {
  // URLからfeature名を抽出
  const featureMatch = url.match(/\/feature\/([^\/]+)/)
  const featureName = featureMatch ? featureMatch[1] : null
  
  // feature設定を取得（featureページの場合のみ）
  const config = featureName && featureConfigs[featureName] 
    ? getFeatureConfig(featureName)
    : null
  
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
        {config && (
          <>
            <title>{config.title}</title>
            <meta name="description" content={config.description} />
            <meta name="keywords" content={config.keywords} />
            {config.twitterCard && <meta name="twitter:card" content={config.twitterCard} />}
            {config.twitterSite && <meta name="twitter:site" content={config.twitterSite} />}
            <meta
              property="og:title"
              content={config.title.replace(" | マネックス証券", "")}
            />
            <meta property="og:url" content={config.ogUrl} />
            <meta property="og:image" content={config.ogImage} />
            <meta property="og:site_name" content="マネックス証券" />
            <meta property="og:description" content={config.description} />
          </>
        )}

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
          src="/javascript/js2_8/common/jquery-3.7.1.min.js"
          defer
        ></script>
        <script
          type="text/javascript"
          src="/javascript/feature/common/main.js"
          defer
        ></script>
        
        {config?.additionalStyles?.map((style, index) => (
          <link
            key={`style-${index}`}
            rel="stylesheet"
            href={style}
            media="all"
          />
        ))}
        
        {config?.additionalScripts?.map((script, index) => (
          <script
            key={`script-${index}`}
            type="text/javascript"
            src={script}
            defer
          ></script>
        ))}
      </Head>
      <Header />
      {children}
      <Footer />
      <div className="l-overlay"></div>
    </>
  )
}
