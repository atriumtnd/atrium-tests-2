// .eslintrc.cjs
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier"
  ],
  settings: {
    "import/resolver": {
      typescript: {
        // usa tsconfig da raiz + pacotes; funciona em monorepo
        project: ["./tsconfig.base.json", "apps/*/tsconfig.json", "packages/*/tsconfig.json"]
      }
    }
  },
  ignorePatterns: ["**/dist/**", "**/.next/**", "**/node_modules/**"],
};
