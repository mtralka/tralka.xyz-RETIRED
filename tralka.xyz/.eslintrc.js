module.exports = {
  root: false,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier',
    'plugin:vue/vue3-recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-undef': 'off',
    'no-unused-vars': 'off',
  },
}
