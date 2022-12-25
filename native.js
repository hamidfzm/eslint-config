const sharedRules = require("./shared/rules");
const sharedPlugins = require("./shared/plugins");

module.exports = {
  root: true,
  extends: ["eslint:recommended", "@react-native-community"],
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: sharedPlugins,
  rules: sharedRules,
  globals: {
    React: "writable",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // Node.js builtins.
              [`^(${require("module").builtinModules.join("|")})(/|$)`],
              // Packages. `react` related packages come first.
              ["^react", "^@?\\w"],
              ["^next", "^@?\\w"],
              // Internal packages.
              ["^(@src)(/.*|$)"],
              // Side effect imports.
              ["^\\u0000"],
              // Parent imports. Put `..` last.
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              // Other relative imports. Put same-folder imports and `.` last.
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              // Style imports.
              ["^.+\\.s?css$"],
            ],
          },
        ],
      },
    },
  ],
};
