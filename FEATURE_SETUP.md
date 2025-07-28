# Feature Setup Guide

このプロジェクトでは、URLパスベースで異なるfeatureページを作成できます。

## 新しいfeatureの追加方法

### 1. feature設定の追加

#### Step 1: Feature名を定数に追加
`src/config/features.ts` の `FEATURE_NAMES` に新しいfeature名を追加：

```typescript
export const FEATURE_NAMES = {
  DOCOMO_COOPERATION: "docomo-cooperation",
  EXAMPLE_FEATURE: "example-feature",
  YOUR_NEW_FEATURE: "your-new-feature"  // 新しいfeature名を追加
} as const
```

#### Step 2: Feature設定を追加
同じファイルの `features` 配列に新しい設定を追加：

```typescript
const features = [
  // 既存の設定...
  {
    name: FEATURE_NAMES.YOUR_NEW_FEATURE,
    title: "新機能のタイトル",
    description: "新機能の説明文",
    keywords: "キーワード1,キーワード2,キーワード3",
    additionalStyles: ["style.css"],  // feature固有スタイルファイル名（/style/feature/${featureName}/配下）
    additionalScripts: [`/javascript/feature/${FEATURE_NAMES.YOUR_NEW_FEATURE}/function.js`]  // feature固有JavaScript（function.jsを含む）
  }
]
```

**注意**: 
- 以下の項目は`createFeatureConfig`関数により自動的に生成されます：
  - `title`: `${入力したtitle} | マネックス証券`
  - `ogImage`: `https://info.monex.co.jp/image/feature/${featureName}/sns_1200-630.png`
  - `ogUrl`: `https://info.monex.co.jp/feature/${featureName}/index.html`  
  - `twitterCard`: `"summary_large_image"`
  - `twitterSite`: `"@MonexJP"`

- 共通リソース（すべてのページで自動的に読み込まれる）：
  - **共通スタイル**: `/style/feature/common/base.css`, `/style/feature/common/parts.css`
  - **JavaScript**: `/javascript/js2_8/common/jquery-3.4.1.min.js`, `/javascript/feature/common/main.js`

- `additionalStyles`と`additionalScripts`で、feature固有のリソースを指定します：
  - **additionalStyles**: ファイル名のみ指定（自動的に`/style/feature/${featureName}/`配下のパスに変換）
  - **additionalScripts**: フルパスで指定（`/javascript/feature/${featureName}/function.js` を含む）

### 2. Featureページの作成

`src/pages/feature/${FEATURE_NAMES.YOUR_NEW_FEATURE}/index.tsx` を作成：

```tsx
import GlobalNavigation from "../../../components/GlobalNavigation"
import GlobalNavigationFooter from "../../../components/GlobalNavigationFooter"
// 他の必要なコンポーネントをインポート

export default function () {
  return (
    <>
      <GlobalNavigation />
      <main>
        {/* あなたのfeatureページのコンテンツ */}
      </main>
      <GlobalNavigationFooter />
    </>
  )
}
```

### 3. アセットディレクトリの作成

以下のディレクトリ構造を作成：

```
public/
├── image/feature/${FEATURE_NAMES.YOUR_NEW_FEATURE}/
│   ├── sns_1200-630.png (OG画像)
│   └── その他の画像ファイル
└── javascript/feature/${FEATURE_NAMES.YOUR_NEW_FEATURE}/
    └── function.js (feature固有のJavaScript)
```

## Feature名の一括変更

Feature名を変更したい場合は、`src/config/features.ts` の `FEATURE_NAMES` の値を変更するだけで、以下のすべての箇所が自動的に更新されます：

- URL パス (`/feature/${featureName}/`)
- OG画像パス (`/image/feature/${featureName}/sns_1200-630.png`)
- OG URL (`https://info.monex.co.jp/feature/${featureName}/index.html`)
- JavaScriptパス (`/javascript/feature/${featureName}/function.js`)
- 追加スタイルパス (設定している場合)

## URL構造

- トップページ: `http://localhost:5173/`
- Featureページ: `http://localhost:5173/feature/{feature-name}/`
  - 例: `http://localhost:5173/feature/docomo-cooperation/`
  - 例: `http://localhost:5173/feature/example-feature/`

## ビルドとプレビュー

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# ビルド結果のプレビュー
npm run preview
```

## 既存のfeature

- `docomo-cooperation`: ドコモとマネックスの機能連携ページ
- `example-feature`: サンプルfeatureページ

## ファイル構成

```
src/
├── config/
│   └── features.ts (feature設定)
├── pages/
│   ├── _global.tsx (共通レイアウト - URLベースで動的meta対応)
│   ├── index.tsx (トップページ - feature一覧)
│   └── feature/
│       ├── docomo-cooperation/
│       │   └── index.tsx
│       └── [feature-name]/
│           └── index.tsx
└── components/
    ├── docomo-cooperation/ (docomo-cooperation専用コンポーネント)
    └── [shared components] (共有コンポーネント)

public/
├── image/feature/
│   ├── common/ (共通画像)
│   └── [feature-name]/ (feature固有画像)
├── javascript/feature/
│   ├── common/ (共通JavaScript)
│   └── [feature-name]/ (feature固有JavaScript)
└── style/feature/
    ├── common/ (共通CSS)
    └── docomo-cooperation/
        ├── style.css (docomo-cooperation専用スタイル)
        └── components/ (docomo-cooperation専用コンポーネントスタイル)
```