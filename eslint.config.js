// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config')
const expoConfig = require('eslint-config-expo/flat')
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended')
// const jest = require('eslint-plugin-jest')

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: ['dist/*'],
  },
])
