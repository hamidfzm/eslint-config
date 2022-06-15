module.exports = {
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', disallowTypeAnnotations: false },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'no-restricted-syntax': [
      'error',
      {
        selector:
          "ImportDeclaration[source.value='react'][specifiers.0.type='ImportDefaultSpecifier']",
        message: 'Default React import not allowed',
      },
    ],
    'prefer-arrow-functions/prefer-arrow-functions': [
      'error',
      {
        classPropertiesAllowed: false,
        disallowPrototype: false,
        returnStyle: 'explicit',
        singleReturnOnly: false,
      },
    ],
    'max-lines': [
      'error',
      { max: 150, skipComments: true, skipBlankLines: true },
    ],
    'import/no-anonymous-default-export': ['error'],
}
