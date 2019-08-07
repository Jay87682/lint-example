module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "parser": "typescript-eslint-parser",
    "plugins": [
        "typescript"
    ],
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "rules": {
        "no-console": "off",
    }
};