var path = require('path');

module.exports = {
  "env": {
    "browser": true,
    "jest": true,
    "node": true
  },
  "extends": "airbnb",
  "rules": {
    "linebreak-style": ["off", process.env.NODE_ENV === 'production' ? "unix" : "windows"],
    "function-paren-newline": ["error", "consistent"],
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-for": "off",
    "max-len": [2, 160],
    "no-tabs": 0,
    "object-curly-newline": ["error", { "consistent": true }],
    "react/no-typos": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/destructuring-assignment": "off",
    "no-multiple-empty-lines": "off",
    "implicit-arrow-linebreak": "off",
    "operator-linebreak": "off",
    "import/no-absolute-path": "off"
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "allowImportExportEverywhere": true
  },
  "settings": {
    "import/resolver": {
      "parcel": {
        "rootDir": "src"
      }
    }
  },
};

