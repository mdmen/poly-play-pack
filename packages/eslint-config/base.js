import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import turboConfig from 'eslint-config-turbo/flat';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['**/.idea/', '**/.turbo/', '**/.assetpack/', '**/dist/'] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  ...turboConfig,
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
];
