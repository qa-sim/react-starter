module.exports = {
  env: {
    browser: true, // Browser global variables like `window` etc.
    commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
    es6: true, // Enable all ECMAScript 6 features except for modules.
    jest: true, // Jest global variables like `it` etc.
    node: true, // Defines things like process.env when generating through node
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:testing-library/react',
  ],
  //parser: 'babel-eslint', // Uses babel-eslint transforms.
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: [
    'import', // eslint-plugin-import plugin. https://www.npmjs.com/package/eslint-plugin-import
    'extra-rules',
    'eslint-plugin-no-inline-styles',
  ],
  root: true, // For configuration cascading.
  rules: {
    semi: 0,
    'no-shadow': 0,
    'no-duplicate-imports': 'error',
    'no-unused-vars': 'error',
    '@typescript-eslint/no-shadow': 2,
    'no-console': ['error', { allow: ['warn', 'error'] }],
    '@typescript-eslint/no-explicit-any': 2,
    'import/no-named-as-default': 0,
    'require-await': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-const': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'no-nested-ternary': 'error',
    'no-dupe-else-if': 'error',
    'array-callback-return': 'error',
    eqeqeq: 'error',
    'no-else-return': 'error',
    'no-return-await': 'error',
    'react/jsx-key': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/forbid-prop-types': 'error',
    'react/no-array-index-key': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 'error',
    'react/require-default-props': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'extra-rules/no-commented-out-code': 'error',
    'no-inline-styles/no-inline-styles': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'index',
          'sibling',
          'parent',
          'internal',
        ],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // Detect react version
    },
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      // You can add Typescript specific rules here.
      // If you are adding the typescript variant of a rule which is there in the javascript
      // ruleset, disable the JS one.
      rules: {
        '@typescript-eslint/no-array-constructor': 'warn',
        'no-array-constructor': 'off',
      },
    },
  ],
}
