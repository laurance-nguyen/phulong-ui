module.exports = {
  extends: ['custom/react-internal', 'plugin:storybook/recommended'],
  rules: {
    'import/no-default-export': 'off',
    'unicorn/filename-case': 'off',
    'consistent-type-definitions': {
      defaultOptions: 'type',
    },
  },
};
