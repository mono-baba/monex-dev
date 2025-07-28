import { Head } from "minista"
import { getFeatureConfig } from "../../config/features"

interface FeatureHeadProps {
  featureName: string
}

const FeatureHead = ({ featureName }: FeatureHeadProps) => {
  const config = getFeatureConfig(featureName)
  
  return (
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,minimum-scale=1.0,maximum-scale=10.0,user-scalable=yes"
      />
      <meta name="format-detection" content="telephone=no" />
      <link rel="shortcut icon" href="/favicon.ico" />
      
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      <meta name="keywords" content={config.keywords} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@MonexJP" />
      <meta property="og:title" content={config.title.replace(" | マネックス証券", "")} />
      <meta property="og:url" content={config.ogUrl} />
      <meta property="og:image" content={config.ogImage} />
      <meta property="og:site_name" content="マネックス証券" />
      <meta property="og:description" content={config.description} />
      
      {/* 共通のCSS */}
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
      
      {/* Feature固有のCSS */}
      {config?.additionalStyles?.map((style, index) => (
        <link
          key={`style-${index}`}
          rel="stylesheet"
          href={style}
          media="all"
        />
      ))}
      
      {/* 共通のJavaScript */}
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
      
      {/* Feature固有のJavaScript */}
      {config?.additionalScripts?.map((script, index) => (
        <script
          key={`script-${index}`}
          type="text/javascript"
          src={script}
          defer
        ></script>
      ))}
    </Head>
  )
}

export default FeatureHead