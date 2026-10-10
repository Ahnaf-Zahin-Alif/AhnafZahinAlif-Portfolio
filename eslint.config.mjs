import nextPlugin from "@next/eslint-plugin-next";
import tsEslint from "typescript-eslint";

const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**", "out/**", "build/**"],
  },
  ...tsEslint.configs.recommended,
  nextPlugin.configs["core-web-vitals"],
];

export default eslintConfig;
