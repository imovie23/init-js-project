module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  extends: ["eslint:recommended", "airbnb/base", "plugin:prettier/recommended", "plugin:jest/recommended"],
  plugins: ["prettier", "jest"],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    semi: "off",
    "no-console": "off",
    "no-plusplus": "off",
    eqeqeq: "error",
    indent: ["error", 2, {SwitchCase: 1}],
    noParamReassign: "off",
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        semi: false,
        singleQuote: true,
        printWidth: 100
      }
    ],
  },
  overrides: [
    {
      files: 'packages/jest-types/**/*',
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
  ]
}
