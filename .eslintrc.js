module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // extends: "standard-with-typescript",
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
  },
  "plugins": [
    "@typescript-eslint"
  ],
  rules: {
    semi: "off",
    "@typescript-eslint/semi": "error",
    "no-extra-semi": "warn",
    curly: "warn",
    quotes: ["error", "single", { "allowTemplateLiterals": true }],
    eqeqeq: "error",
    // indent: "off",
    // "@typescript-eslint/indent": ["warn", "space", { "SwitchCase": 2 } ],
    "@typescript-eslint/no-floating-promises": "error"
  },
}
