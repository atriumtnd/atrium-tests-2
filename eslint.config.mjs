// eslint.config.mjs (RAIZ) — delega para a app
export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/.turbo/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
    ],
  },
  {
    files: ["app/**/*.{ts,tsx,js,jsx,cjs,mjs}"],
    extends: ["./app/eslint.config.mjs"],
  },
];
