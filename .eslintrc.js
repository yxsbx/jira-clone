/** @type {import('eslint').Linter.Config} */

module.exports = {
  root: true,
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/consistent-type-imports": "off",
  },
};
