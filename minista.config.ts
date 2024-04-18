import { defineConfig } from "minista"

export const DIR = "docomo-cooperation"

export default defineConfig({
  assets: {
    outDir: `style/feature/${DIR}`,
    bundle: {
      outName: "style",
    },
  },
  beautify: {},
})
