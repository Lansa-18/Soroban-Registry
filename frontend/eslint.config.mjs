import js from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "coverage/**",
      "next-env.d.ts",
      "**/*.stories.*",
      "**/.storybook/**",
      "node_modules/**",
    ],
  },
  {
    rules: {
      // Unused vars: warn only, ignore _-prefixed identifiers
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "no-unused-vars": "off",
      // Allow 'any' — common in a codebase still being typed
      "@typescript-eslint/no-explicit-any": "warn",
      // Allow require() for CJS interop
      "@typescript-eslint/no-require-imports": "warn",
    },
  },
];

export default eslintConfig;
