// eslint.config.mjs (RAIZ)
import js from "@eslint/js";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import importPlugin from "eslint-plugin-import";

const IGNORE = [
  "**/node_modules/**",
  "**/.next/**",
  "**/dist/**",
  "**/.turbo/**",
  "**/coverage/**",
];

export default [
  // Ignora pastas geradas
  { ignores: IGNORE },

  // Regras base JS
  js.configs.recommended,

  // Config para TS/JS nos apps e packages
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        // Se você quiser checagem com tsconfig, adicione "project" aqui depois:
        // project: ["./tsconfig.base.json", "apps/*/tsconfig.json", "packages/*/tsconfig.json"],
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      import: importPlugin,
    },
    // Pega as regras recomendadas do plugin TS + suas adições
    rules: {
      ...tsPlugin.configs.recommended.rules,
      // Organização de imports (ajuste a gosto)
      "import/order": [
        "error",
        {
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
          groups: [["builtin", "external"], ["internal"], ["parent", "sibling", "index"]],
        },
      ],
    },
    settings: {
      // Faz o plugin de import resolver paths TS do monorepo
      "import/resolver": {
        typescript: {
          project: ["./tsconfig.base.json", "apps/*/tsconfig.json", "packages/*/tsconfig.json"],
        },
      },
    },
  },
];
