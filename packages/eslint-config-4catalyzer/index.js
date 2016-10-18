module.exports = {
  extends: [
    'airbnb-base',
  ],
  parser: 'babel-eslint',
  rules: {
    'class-methods-use-this': 'off',
    'max-len': ['error', 79, {
      ignorePattern: ' // eslint-disable-line ',
    }],
    'no-mixed-operators': ['error', {
      groups: [
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
      allowSamePrecedence: false,
    }],
    'no-plusplus': 'off',
    'import/prefer-default-export': 'off',
  },
};
