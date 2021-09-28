module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "simple-import-sort", "unused-imports"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],

  // add your custom rules here
  rules: {
    // Import / export rules
    "import/order": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "unused-imports/no-unused-imports": "error",

    "no-console": "error",

    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/no-explicit-any": "error",
  },
  overrides: [
    // Specific rules for unit tests files
    {
      files: ["./src/**/*.spec.ts"],
      env: {
        jest: true,
      },
    },
  ],
}
