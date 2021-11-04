require('babel-register');

module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "import",
    "jest"
  ],
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "env": {
    "node": true,
    "jest": true
  },
  "extends": [
    "airbnb-base"
  ],
  "rules": {
    "jest/no-focused-tests": 2,
    "jest/no-identical-title": 2,
    "camelcase": 0,
    "no-restricted-syntax": 0,
    "guard-for-in": 0,
    "no-return-await": 0,
    "no-param-reassign": 0,
    "no-await-in-loop": 0,
    "no-nested-ternary": 0,
    "no-plusplus": 0,
    "no-bitwise": 0,
    "max-len": 0,
  },
  "settings": {
    "import/resolver": {
      "babel-module": {}
    }
  }
}