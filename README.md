# eslint-config
This is a configuration for ESLint created by Hamid FzM, and it is intended to be used for React or NextJS projects that utilize TypeScript.

If you are working on a NextJS project, then please use the `@hamidfzm/eslint-config/next` configuration.
## Install
You can install this configuration using either npm or yarn. Here are the commands:

### npm
```sh
npm install --save-dev @hamidfzm/eslint-config
```

### yarn
```sh
yarn add -D @hamidfzm/eslint-config
```

## Usage
To use this configuration, you need to add an extends property in your `.eslintrc.js` file with the value of `@hamidfzm`. Here's an example:

```js
module.exports = {
  extends: '@hamidfzm',
};
```

Additionally, if you want to use Prettier, you can add a `.prettierrc.js` file with your desired settings. Here's an example:

```js
module.exports = {
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
};
```
