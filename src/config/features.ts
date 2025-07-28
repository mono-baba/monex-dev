export interface FeatureConfig {
  name: string
  title: string
  description: string
  keywords: string
  ogImage: string
  ogUrl: string
  twitterCard?: string
  twitterSite?: string
  // 追加のスタイルとスクリプトの設定
  additionalStyles?: string[]
  additionalScripts?: string[]
}

// Feature名の定数定義（一括変更用）
export const FEATURE_NAMES = {
  DOCOMO_COOPERATION: "docomo-cooperation",
  EXAMPLE_FEATURE: "example-feature"
} as const

function createFeatureConfig(featureName: string, config: Omit<FeatureConfig, 'name' | 'ogImage' | 'ogUrl' | 'twitterCard' | 'twitterSite' | 'title'> & { title: string }): FeatureConfig {
  return {
    ...config,
    name: featureName,
    title: `${config.title} | マネックス証券`,
    ogImage: `https://info.monex.co.jp/image/feature/${featureName}/sns_1200-630.png`,
    ogUrl: `https://info.monex.co.jp/feature/${featureName}/index.html`,
    twitterCard: "summary_large_image",
    twitterSite: "@MonexJP",
    // additionalStylesのパスを自動生成
    additionalStyles: config.additionalStyles?.map(fileName => 
      `/style/feature/${featureName}/${fileName}`
    ),
    // additionalScriptsのパスを自動生成
    additionalScripts: config.additionalScripts?.map(fileName => 
      `/javascript/feature/${featureName}/${fileName}`
    )
  }
}

const features = [
  {
    name: FEATURE_NAMES.DOCOMO_COOPERATION,
    title: "ドコモとマネックスの機能連携について",
    description: "より便利に使いやすく！「dカード®」によるクレカ積立サービスをはじめとしたNTTドコモとの機能連携の概要や提供時期など最新の情報をご案内いたします。",
    keywords: "NTTドコモ,マネックス証券,機能連携,資本業務提携,提携・協業",
    additionalStyles: ["style.css"],
    additionalScripts: ["function.js"]
  },
  {
    name: FEATURE_NAMES.EXAMPLE_FEATURE,
    title: "サンプル機能ページ",
    description: "これはサンプルのfeatureページです。新しい機能の説明を記載します。",
    keywords: "サンプル,テスト,新機能",
    additionalStyles: [],
    additionalScripts: ["function.js"]
  }
]

export const featureConfigs: Record<string, FeatureConfig> = features.reduce(
  (acc, { name, ...config }) => ({
    ...acc,
    [name]: createFeatureConfig(name, config)
  }),
  {}
)

export function getFeatureConfig(featureName: string): FeatureConfig {
  const config = featureConfigs[featureName]
  if (!config) {
    throw new Error(`Feature config not found for: ${featureName}`)
  }
  return config
}