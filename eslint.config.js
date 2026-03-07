import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import pluginSecurity from "eslint-plugin-security";

export default defineConfig([
  {
    ignores: ['node_modules', 'dist'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
        ...globals.node, // إضافة الـ globals الخاصة بـ Node
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
  pluginSecurity.configs.recommended, // إضافة إعدادات الـ security plugin
]);