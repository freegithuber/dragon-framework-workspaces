/*
 * https://eslint.bootcss.com/docs/rules/
 * https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules
 * https://typescript-eslint.io/rules/
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  globals: {},
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }], // 限定箭头函数格式
    'class-methods-use-this': 'off', // 允许存在没有使用this关键字的类非静态方法
    'import/extensions': [ // 允许使用import文件类型
      'error',
      'ignorePackages',
      {
        js: 'ignorePackages',
        jsx: 'ignorePackages',
        ts: 'ignorePackages',
        tsx: 'ignorePackages',
      },
    ],
    'max-classes-per-file': ['error', 100], // 限定文件中包含的类的最大数量
    'max-len': ['error', { code: 150, tabWidth: 2 }], // 允许代码最大长度150字符，TAB宽度2空格
    'no-else-return': 'off', // 允许在 else 前有 return 语句
    'no-lonely-if': 'off', // 允许 if 单独存在
    'no-mixed-operators': 'off', // 允许混合使用不同的操作符
    'no-multi-assign': 'off', // 允许使用连续赋值：const a = b = c = 5;
    'no-param-reassign': ['error', { props: false }], // 允许对函数参数再赋值：(object) => { object.value = 0; }
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }], // 仅允许在 for 循环中使用 ++、-- 运算符
    'no-prototype-builtins': 'off', // 允许直接使用 Object.prototypes 内置属性
    'no-restricted-syntax': ['error', 'WithStatement'], // 允许带声明的语法：for (const e of elements)
    'no-underscore-dangle': 'off', // 允许标识符中有悬空下划线
    'no-unused-vars': ['error', { args: 'none' }], // 允许存在未使用的对象
    'object-curly-newline': ['error', { consistent: true }], // 强制要求花括号内换行符格式
    'padded-blocks': [ // 限制代码是否能有空行
      'error', { classes: 'always', blocks: 'never', switches: 'never' }, { allowSingleLineBlocks: true },
    ],
    'prefer-destructuring': ['error', { object: false, array: false }], // 不强制要求使用对象和数组解构
    '@typescript-eslint/ban-types': ['error', { types: { object: false } }], // 允许使用 object 类型
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 要求在导出函数和类的公共类方法上显式返回和参数类型
    '@typescript-eslint/no-require-imports': 'off', // 允许使用 import 语句之外的模块导入语句：require('module')
    '@typescript-eslint/no-this-alias': 'off', // 允许使用 this 别名
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }], // 允许存在未使用的对象
    '@typescript-eslint/no-var-requires': 'off', // 允许使用：const moment = require('moment'); 形式的 require 语句
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
