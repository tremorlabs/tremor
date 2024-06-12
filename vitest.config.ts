import tsconfigPaths from "vite-tsconfig-paths"
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    include: ["src/utils/utils.spec.ts"],
  },
  plugins: [tsconfigPaths()],
})
