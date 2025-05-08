module.exports = {
  root: true,
  extends: "airbnb-base",
  env: {
    browser: true,
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    allowImportExportEverywhere: true,
    sourceType: "module",
    requireConfigFile: false,
  },
  rules: {
    "import/extensions": ["error", { js: "always" }], // require js file extensions in imports
    // 'linebreak-style': ['error', 'windows'], // enforce unix linebreaks
    "linebreak-style": "off",
    "no-param-reassign": [2, { props: false }], // allow modifying properties of param
    "quotes": "off",
    "object-curly-spacing": "off",
    "implicit-arrow-linebreak": "off",
    "no-undef": "off",
    "object-curly-newline": "off",
    'no-inner-declarations': 'off',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    'quote-props': 'off',
    'eqeqeq': 'off',
    'prefer-const': 'off',
    'spaced-comment': 'off',
    'no-plusplus': 'off',
    'space-comment': 'off',
    'prefer-template': 'off',
    'no-console': 'off',
  },
};
