import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // Disable unused-vars for interfaces and type annotations
      "no-unused-vars": [
        "error",
        {
          args: "none", // Do not flag unused function arguments in interfaces
          varsIgnorePattern: "^_", // Ignore variables that start with an underscore (convention for unused variables)
        },
      ],
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
);
