import { defineConfig } from "minista"

export const DIR = "test"

export default defineConfig({
  assets: {
    outDir: `style/feature/${DIR}`,
    bundle: {
      outName: "style",
    },
  },
  beautify: {},
})
