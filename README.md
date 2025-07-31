# Minista Project

マネックス証券の特設ページを構築するためのMinistaプロジェクトです。

## 概要

このプロジェクトはReact + TypeScript + Ministaを使用して、特設ページの静的サイトを生成します。

## 開発環境のセットアップ

```bash
npm install
```

## 開発サーバーの起動

```bash
npm run dev
```

## ビルド

```bash
npm run build
```

ビルドされたファイルは`dist/`ディレクトリに出力されます。

## プレビュー

```bash
npm run preview
```

## プロジェクト構成

```
src/
├── assets/          # CSS/画像などのアセット
│   ├── nisa-fulluse/ # NISA特設ページのスタイル
│   └── ...
├── components/      # Reactコンポーネント
│   ├── FeatureHead/ # 共通ヘッダーコンポーネント
│   ├── nisa-fulluse/ # NISA特設ページのコンポーネント
│   └── ...
└── pages/           # ページファイル
    └── feature/
        └── nisa-fulluse/ # NISA特設ページ
```

## 設定

### minista.config.ts

現在の設定では`nisa-fulluse`ディレクトリのCSSのみをビルド対象としています。

```typescript
export const DIR = "nisa-fulluse"
```

別のディレクトリをビルドする場合は、この`DIR`変数を変更してください。

### CSS出力

CSSは以下のパスに出力されます：
- `dist/style/feature/nisa-fulluse/style.css`

### 注意事項

- `FeatureHead`コンポーネントでは手動でのCSSリンクは削除されており、minista.configの設定により自動的にCSSが挿入されます
- CSSのminify化は無効になっています
- ビルド時にはViteの設定でminify化も無効になっています

## 開発時の注意点

1. 新しい特設ページを作成する場合は、`minista.config.ts`の`DIR`変数を適切に設定してください
2. CSSの重複読み込みを避けるため、`FeatureHead`コンポーネントでは手動でのCSSリンクは行わないでください
3. 各特設ページのコンポーネントは`src/components/[feature-name]/`ディレクトリに配置してください