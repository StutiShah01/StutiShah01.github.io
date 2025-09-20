import js from "@eslint/js";
import react from "eslint-plugin-react";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true }   // ← let ESLint parse JSX
      },
      globals: { ...globals.browser, ...globals.es2021 }
    },
    plugins: { react },
    rules: {
      "no-undef": "error",
      "no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off"
    },
    settings: { react: { version: "detect" } }
  }
];
