module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
        jest: true
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 12
    },
    rules: {
        'indent': ['error', 2], // enforce 2-space indentation
        'quotes': ['error', 'single'], // enforce single quotes
        'semi': ['error', 'always'], // require semicolons
        'comma-dangle': ['error', 'always-multiline'], // require trailing commas in multiline objects and arrays
        'no-unused-vars': 'warn', // warn about unused variables
        'no-console': 'off' // allow console.log statements
    }
};