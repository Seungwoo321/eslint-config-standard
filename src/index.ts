/*! eslint-config-standard. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */

import type { TSESLint } from '@typescript-eslint/utils'
import * as pluginImport from 'eslint-plugin-import'
import pluginNode from 'eslint-plugin-n'
import pluginPromise from 'eslint-plugin-promise'
import stylistic from '@stylistic/eslint-plugin'
import stylisticJsx from '@stylistic/eslint-plugin-jsx'

const configs: {
  recommended: TSESLint.FlatConfig.ConfigArray,
  recommendedJsx: TSESLint.FlatConfig.ConfigArray
} = {
  recommended: [
    // Base
    {
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parserOptions: {
          ecmaFeatures: { jsx: true }
        }
      },
      rules: {
        'no-var': 'warn',
        'object-shorthand': ['warn', 'properties'],
        'accessor-pairs': [
          'error',
          {
            setWithoutGet: true,
            enforceForClassMembers: true
          }
        ],
        'array-callback-return': [
          'error',
          {
            allowImplicit: false,
            checkForEach: false
          }
        ],
        camelcase: [
          'error',
          {
            allow: ['^UNSAFE_'],
            properties: 'never',
            ignoreGlobals: true
          }
        ],
        'constructor-super': 'error',
        'default-case-last': 'error',
        'dot-notation': ['error', { allowKeywords: true }],
        eqeqeq: ['error', 'always', { null: 'ignore' }],

        'new-cap': [
          'error',
          {
            newIsCap: true,
            capIsNew: false,
            properties: true
          }
        ],

        'no-array-constructor': 'error',
        'no-async-promise-executor': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-class-assign': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': 'error',
        'no-const-assign': 'error',
        'no-constant-condition': ['error', { checkLoops: false }],
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-delete-var': 'error',
        'no-dupe-args': 'error',
        'no-dupe-class-members': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-useless-backreference': 'error',
        'no-empty': ['error', { allowEmptyCatch: true }],
        'no-empty-character-class': 'error',
        'no-empty-pattern': 'error',
        'no-eval': 'error',
        'no-ex-assign': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-boolean-cast': 'error',
        'no-fallthrough': 'error',
        'no-func-assign': 'error',
        'no-global-assign': 'error',
        'no-implied-eval': 'error',
        'no-import-assign': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-iterator': 'error',
        'no-labels': [
          'error',
          {
            allowLoop: false,
            allowSwitch: false
          }
        ],
        'no-lone-blocks': 'error',
        'no-loss-of-precision': 'error',
        'no-misleading-character-class': 'error',
        'no-prototype-builtins': 'error',
        'no-useless-catch': 'error',
        'no-multi-str': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-symbol': 'error',
        'no-new-wrappers': 'error',
        'no-obj-calls': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-proto': 'error',
        'no-redeclare': ['error', { builtinGlobals: false }],
        'no-regex-spaces': 'error',
        'no-return-assign': ['error', 'except-parens'],
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow-restricted-names': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-this-before-super': 'error',
        'no-throw-literal': 'error',
        'no-undef': 'error',
        'no-undef-init': 'error',
        'no-unexpected-multiline': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unneeded-ternary': ['error', { defaultAssignment: false }],
        'no-unreachable': 'error',
        'no-unreachable-loop': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true
          }
        ],
        'no-unused-vars': [
          'error',
          {
            args: 'none',
            caughtErrors: 'none',
            ignoreRestSiblings: true,
            vars: 'all'
          }
        ],
        'no-use-before-define': [
          'error',
          {
            functions: false,
            classes: false,
            variables: false
          }
        ],
        'no-useless-call': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-escape': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        'no-with': 'error',
        'one-var': ['error', { initialized: 'never' }],
        'prefer-const': ['error', { destructuring: 'all' }],
        'prefer-promise-reject-errors': 'error',
        'prefer-regex-literals': [
          'error',
          {
            disallowRedundantWrapping: true
          }
        ],
        'symbol-description': 'error',
        'unicode-bom': ['error', 'never'],
        'use-isnan': [
          'error',
          {
            enforceForSwitchCase: true,
            enforceForIndexOf: true
          }
        ],
        'valid-typeof': ['error', { requireStringLiterals: true }],
        yoda: ['error', 'never']

      }
    },
    // Style
    {
      plugins: {
        '@stylistic': stylistic
      },
      rules: {
        '@stylistic/array-bracket-spacing': ['error', 'never'],
        '@stylistic/arrow-spacing': ['warn', { before: true, after: true }],
        '@stylistic/block-spacing': ['error', 'always'],
        '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
        '@stylistic/comma-dangle': [
          'error',
          {
            arrays: 'never',
            objects: 'never',
            imports: 'never',
            exports: 'never',
            functions: 'never'
          }
        ],
        '@stylistic/comma-spacing': ['error', { before: false, after: true }],
        '@stylistic/comma-style': ['error', 'last'],
        '@stylistic/computed-property-spacing': [
          'error',
          'never',
          { enforceForClassMembers: true }
        ],
        '@stylistic/curly-newline': ['error', {
          multiline: true
        }],
        '@stylistic/dot-location': ['error', 'property'],
        '@stylistic/eol-last': 'error',
        '@stylistic/func-call-spacing': ['error', 'never'],
        '@stylistic/generator-star-spacing': ['error', { before: true, after: true }],
        '@stylistic/indent': [
          'error',
          2,
          {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            MemberExpression: 1,
            FunctionDeclaration: {
              parameters: 1,
              body: 1
            },
            FunctionExpression: {
              parameters: 1,
              body: 1
            },
            CallExpression: {
              arguments: 1
            },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            ignoreComments: false,
            ignoredNodes: [
              'TemplateLiteral *',
              'JSXElement',
              'JSXElement > *',
              'JSXAttribute',
              'JSXIdentifier',
              'JSXNamespacedName',
              'JSXMemberExpression',
              'JSXSpreadAttribute',
              'JSXExpressionContainer',
              'JSXOpeningElement',
              'JSXClosingElement',
              'JSXFragment',
              'JSXOpeningFragment',
              'JSXClosingFragment',
              'JSXText',
              'JSXEmptyExpression',
              'JSXSpreadChild'
            ],
            offsetTernaryExpressions: true
          }
        ],
        '@stylistic/key-spacing': [
          'error',
          {
            beforeColon: false,
            afterColon: true
          }
        ],
        '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
        '@stylistic/lines-between-class-members': [
          'error',
          'always',
          { exceptAfterSingleLine: true }
        ],
        '@stylistic/multiline-ternary': ['error', 'always-multiline'],
        '@stylistic/new-parens': 'error',
        '@stylistic/no-mixed-spaces-and-tabs': 'error',
        '@stylistic/no-multi-spaces': 'error',
        '@stylistic/no-extra-parens': ['error', 'functions'],
        '@stylistic/no-floating-decimal': 'error',
        '@stylistic/no-mixed-operators': [
          'error',
          {
            groups: [
              ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
              ['&&', '||'],
              ['in', 'instanceof']
            ],
            allowSamePrecedence: true
          }
        ],
        '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
        '@stylistic/no-tabs': 'error',
        '@stylistic/no-trailing-spaces': 'error',
        '@stylistic/no-whitespace-before-property': 'error',
        '@stylistic/object-curly-newline': [
          'error',
          {
            multiline: true,
            consistent: true
          }
        ],
        '@stylistic/object-curly-spacing': ['error', 'always'],
        '@stylistic/object-property-newline': [
          'error',
          {
            allowMultiplePropertiesPerLine: true
          }
        ],
        '@stylistic/operator-linebreak': [
          'error',
          'after',
          {
            overrides: {
              '?': 'before',
              ':': 'before',
              '|>': 'before'
            }
          }
        ],
        '@stylistic/padded-blocks': [
          'error',
          {
            blocks: 'never',
            switches: 'never',
            classes: 'never'
          }
        ],
        '@stylistic/quote-props': ['error', 'as-needed'],
        '@stylistic/quotes': [
          'error',
          'single',
          {
            avoidEscape: true,
            allowTemplateLiterals: false
          }
        ],
        '@stylistic/rest-spread-spacing': ['error', 'never'],
        '@stylistic/semi': ['error', 'never'],
        '@stylistic/semi-spacing': ['error', { before: false, after: true }],
        '@stylistic/space-before-blocks': ['error', 'always'],
        '@stylistic/space-before-function-paren': ['error', 'always'],
        '@stylistic/space-in-parens': ['error', 'never'],
        '@stylistic/space-infix-ops': 'error',
        '@stylistic/space-unary-ops': ['error', { words: true, nonwords: false }],
        '@stylistic/spaced-comment': [
          'error',
          'always',
          {
            line: {
              markers: ['*package', '!', '/', ',', '=']
            },
            block: {
              balanced: true,
              markers: ['*package', '!', ',', ':', '::', 'flow-include'],
              exceptions: ['*']
            }
          }
        ],
        '@stylistic/template-curly-spacing': ['error', 'never'],
        '@stylistic/template-tag-spacing': ['error', 'never'],
        '@stylistic/wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
        '@stylistic/yield-star-spacing': ['error', 'both']
      }
    },
    // Import
    {
      plugins: {
        import: pluginImport
      },
      rules: {
        'import/export': 'error',
        'import/first': 'error',
        'import/no-absolute-path': [
          'error',
          {
            esmodule: true,
            commonjs: true,
            amd: false
          }
        ],
        'import/no-duplicates': 'error',
        'import/no-named-default': 'error',
        'import/no-webpack-loader-syntax': 'error'
      }
    },
    // Node
    {
      plugins: {
        n: pluginNode
      },
      rules: {
        'n/handle-callback-err': ['error', '^(err|error)$'],
        'n/no-callback-literal': 'error',
        'n/no-deprecated-api': 'error',
        'n/no-exports-assign': 'error',
        'n/no-new-require': 'error',
        'n/no-path-concat': 'error',
        'n/process-exit-as-throw': 'error'
      }
    },
    // Promise
    {
      plugins: {
        promise: pluginPromise
      },
      rules: {
        'promise/param-names': 'error'
      }
    }
  ],
  recommendedJsx: [
    // Base
    {
      rules: {
        'jsx-quotes': ['error', 'prefer-single'],
        'react/jsx-boolean-value': 'error',
        'react/jsx-fragments': ['error', 'syntax'],
        'react/jsx-handler-names': 'error',
        'react/jsx-indent': ['error', 2, {
          checkAttributes: false,
          indentLogicalExpressions: true
        }],
        'react/jsx-key': ['error', {
          checkFragmentShorthand: true
        }],
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
        'react/jsx-no-undef': ['error', { allowGlobals: true }],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/no-children-prop': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-deprecated': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'error',
        'react/no-is-mounted': 'error',
        'react/no-string-refs': ['error', {
          noTemplateLiterals: true
        }],
        'react/no-unescaped-entities': ['error', {
          forbid: ['>', '}']
        }],
        'react/no-render-return-value': 'error',
        'react/require-render-return': 'error'
      }
    },
    // Style
    {
      plugins: {
        '@stylistic/jsx': stylisticJsx
      },
      rules: {
        '@stylistic/jsx/jsx-closing-bracket-location': ['error', 'tag-aligned'],
        '@stylistic/jsx/jsx-closing-tag-location': 'error',
        '@stylistic/jsx/jsx-curly-brace-presence': ['error', {
          props: 'never',
          children: 'never'
        }],
        '@stylistic/jsx/jsx-curly-newline': ['error', {
          multiline: 'consistent',
          singleline: 'consistent'
        }],
        '@stylistic/jsx/jsx-curly-spacing': ['error', {
          attributes: { when: 'never', allowMultiline: true },
          children: { when: 'never', allowMultiline: true }
        }],
        '@stylistic/jsx/jsx-equals-spacing': ['error', 'never'],
        '@stylistic/jsx/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
        '@stylistic/jsx/jsx-indent-props': ['error', 2],
        '@stylistic/jsx/jsx-pascal-case': ['error', { allowAllCaps: false }],
        '@stylistic/jsx/jsx-props-no-multi-spaces': 'error',
        '@stylistic/jsx/jsx-tag-spacing': ['error', {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
          beforeClosing: 'never'
        }],
        '@stylistic/jsx/jsx-wrap-multilines': ['error', {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'ignore',
          condition: 'ignore',
          logical: 'ignore',
          prop: 'ignore'
        }],
        '@stylistic/jsx/self-closing-comp': 'error'
      }
    }
  ]
}

export default { configs }
