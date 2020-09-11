module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/ban-ts-ignore": 0,
    "no-var": 1,
    "@typescript-eslint/no-array-constructor": 1,
    "@typescript-eslint/camelcase": 1,
    "@typescript-eslint/no-use-before-define": 0,
    "prefer-const": 1,
    "@typescript-eslint/no-inferrable-types": 1,
    "@typescript-eslint/no-this-alias": 1,
    "@typescript-eslint/no-unused-vars": 1,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-empty-function": 0,
    "no-console": 0,
    "@typescript-eslint/no-non-null-assertion": 0
  }
};
