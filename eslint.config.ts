import { FlatCompat } from "@eslint/eslintrc";
 
import css from "@eslint/css";
import { tailwindSyntax } from "@eslint/css/syntax";
import { Linter } from "eslint";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig: Linter.Config[] = [
 
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  ...compat.extends("plugin:tailwindcss/recommended"),
  {
    files: ["**/*.{js,ts,jsx,tsx,css,json,md,mdx,yml,yaml}"],
    plugins: {
      css,
    },
    language: "css/css",
    languageOptions: {
      customSyntax: tailwindSyntax,
    },
    rules: {
      "react/jsx-no-literals": "error",
    },
    settings: {
      tailwindcss: {
        callees: ["twMerge", "createTheme"],
        classRegex: "^(class(Name)|theme)?$",
      },
    },
  },
];

export default eslintConfig;
