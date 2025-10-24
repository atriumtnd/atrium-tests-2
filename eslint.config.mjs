// eslint.config.mjs (raiz)
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginImport from "eslint-plugin-import";

export default [
  // Ignorar pastas geradas
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.next/**",
      "**/.turbo/**",
      "**/build/**",
      "**/coverage/**",
    ],
  },

  // Regras base para JS
  {
    files: ["**/*.{js,cjs,mjs,jsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.node, ...globals.browser },
    },
    ...js.configs.recommended,
    plugins: { import: pluginImport },
    settings: { "import/resolver": { typescript: true } },
    rules: { "no-unused-vars": "warn" },
  },

  // Regras para TS/TSX
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["./tsconfig.base.json"],
        tsconfigRootDir: import.meta.dirname,
        ecmaVersion: 2022,
        sourceType: "module",
      },
      globals: { ...globals.node, ...globals.browser },
    },
    plugins: {
      import: pluginImport,
      "@typescript-eslint": tseslint.plugin, // 👈 registra o plugin aqui
    },
    settings: { "import/resolver": { typescript: true } },
    rules: {
      "@typescript-eslint/consistent-type-imports": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", ["parent", "sibling", "index"], "object"],
          alphabetize: { order: "asc", caseInsensitive: true },
          "newlines-between": "always",
        },
      ],
    },
  },
];
