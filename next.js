module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'next'
    ],
    parserOptions: {
        sourceType: 'module',
    },
    env: {
        es6: true,
        node: true,
        browser: true,
        jest: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'simple-import-sort'],
    rules: {
        'react/prop-types': 'off',
        'eslint-comments/no-unlimited-disable': 'off',
        'react/react-in-jsx-scope': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'prettier/prettier': [
            'error',
            {singleQuote: true, tabWidth: 2, trailingComma: 'es5', useTabs: false},
        ],
        'prefer-arrow/prefer-arrow-functions': [
            'warn',
            {
                'disallowPrototype': true,
                'singleReturnOnly': false,
                'classPropertiesAllowed': false
            }
        ]
    },
    globals: {
        React: 'writable',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'simple-import-sort/imports': [
                    'error',
                    {
                        groups: [
                            // Node.js builtins.
                            [
                                `^(${require("module").builtinModules.join("|")})(/|$)`
                            ],
                            // Packages. `react` related packages come first.
                            ['^react', '^@?\\w'],
                            ['^next', '^@?\\w'],
                            // Internal packages.
                            ['^(@src)(/.*|$)'],
                            // Side effect imports.
                            ['^\\u0000'],
                            // Parent imports. Put `..` last.
                            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                            // Other relative imports. Put same-folder imports and `.` last.
                            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                            // Style imports.
                            ['^.+\\.s?css$'],
                        ],
                    },
                ],
            },
        },
    ],
};
