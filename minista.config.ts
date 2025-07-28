import { defineConfig } from "minista"

export const DIR = "docomo-cooperation"

export default defineConfig({
  assets: {
    outDir: `style/feature/${DIR}`,
    bundle: {
      outName: "style",
      // CSSのminify化を無効にする
      minify: false,
    },
  },
  beautify: {},
  // Viteのビルド設定でもminify化を無効にする
  vite: {
    build: {
      minify: false,
      cssMinify: false,
    }
  }
})
