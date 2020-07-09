(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/css/css.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/css/css.js ***!
  \**********************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\n\r\nvar conf = {\r\n    wordPattern: /(#?-?\\d*\\.\\d\\w*%?)|((::|[@#.!:])?[\\w-?]+%?)|::|[@#.!:]/g,\r\n    comments: {\r\n        blockComment: ['/*', '*/']\r\n    },\r\n    brackets: [\r\n        ['{', '}'],\r\n        ['[', ']'],\r\n        ['(', ')']\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '{', close: '}', notIn: ['string', 'comment'] },\r\n        { open: '[', close: ']', notIn: ['string', 'comment'] },\r\n        { open: '(', close: ')', notIn: ['string', 'comment'] },\r\n        { open: '\"', close: '\"', notIn: ['string', 'comment'] },\r\n        { open: '\\'', close: '\\'', notIn: ['string', 'comment'] }\r\n    ],\r\n    surroundingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' },\r\n        { open: '\\'', close: '\\'' }\r\n    ],\r\n    folding: {\r\n        markers: {\r\n            start: new RegExp(\"^\\\\s*\\\\/\\\\*\\\\s*#region\\\\b\\\\s*(.*?)\\\\s*\\\\*\\\\/\"),\r\n            end: new RegExp(\"^\\\\s*\\\\/\\\\*\\\\s*#endregion\\\\b.*\\\\*\\\\/\")\r\n        }\r\n    }\r\n};\r\nvar language = {\r\n    defaultToken: '',\r\n    tokenPostfix: '.css',\r\n    ws: '[ \\t\\n\\r\\f]*',\r\n    identifier: '-?-?([a-zA-Z]|(\\\\\\\\(([0-9a-fA-F]{1,6}\\\\s?)|[^[0-9a-fA-F])))([\\\\w\\\\-]|(\\\\\\\\(([0-9a-fA-F]{1,6}\\\\s?)|[^[0-9a-fA-F])))*',\r\n    brackets: [\r\n        { open: '{', close: '}', token: 'delimiter.bracket' },\r\n        { open: '[', close: ']', token: 'delimiter.bracket' },\r\n        { open: '(', close: ')', token: 'delimiter.parenthesis' },\r\n        { open: '<', close: '>', token: 'delimiter.angle' }\r\n    ],\r\n    tokenizer: {\r\n        root: [\r\n            { include: '@selector' },\r\n        ],\r\n        selector: [\r\n            { include: '@comments' },\r\n            { include: '@import' },\r\n            { include: '@strings' },\r\n            ['[@](keyframes|-webkit-keyframes|-moz-keyframes|-o-keyframes)', { token: 'keyword', next: '@keyframedeclaration' }],\r\n            ['[@](page|content|font-face|-moz-document)', { token: 'keyword' }],\r\n            ['[@](charset|namespace)', { token: 'keyword', next: '@declarationbody' }],\r\n            ['(url-prefix)(\\\\()', ['attribute.value', { token: 'delimiter.parenthesis', next: '@urldeclaration' }]],\r\n            ['(url)(\\\\()', ['attribute.value', { token: 'delimiter.parenthesis', next: '@urldeclaration' }]],\r\n            { include: '@selectorname' },\r\n            ['[\\\\*]', 'tag'],\r\n            ['[>\\\\+,]', 'delimiter'],\r\n            ['\\\\[', { token: 'delimiter.bracket', next: '@selectorattribute' }],\r\n            ['{', { token: 'delimiter.bracket', next: '@selectorbody' }]\r\n        ],\r\n        selectorbody: [\r\n            { include: '@comments' },\r\n            ['[*_]?@identifier@ws:(?=(\\\\s|\\\\d|[^{;}]*[;}]))', 'attribute.name', '@rulevalue'],\r\n            ['}', { token: 'delimiter.bracket', next: '@pop' }]\r\n        ],\r\n        selectorname: [\r\n            ['(\\\\.|#(?=[^{])|%|(@identifier)|:)+', 'tag'],\r\n        ],\r\n        selectorattribute: [\r\n            { include: '@term' },\r\n            [']', { token: 'delimiter.bracket', next: '@pop' }],\r\n        ],\r\n        term: [\r\n            { include: '@comments' },\r\n            ['(url-prefix)(\\\\()', ['attribute.value', { token: 'delimiter.parenthesis', next: '@urldeclaration' }]],\r\n            ['(url)(\\\\()', ['attribute.value', { token: 'delimiter.parenthesis', next: '@urldeclaration' }]],\r\n            { include: '@functioninvocation' },\r\n            { include: '@numbers' },\r\n            { include: '@name' },\r\n            ['([<>=\\\\+\\\\-\\\\*\\\\/\\\\^\\\\|\\\\~,])', 'delimiter'],\r\n            [',', 'delimiter']\r\n        ],\r\n        rulevalue: [\r\n            { include: '@comments' },\r\n            { include: '@strings' },\r\n            { include: '@term' },\r\n            ['!important', 'keyword'],\r\n            [';', 'delimiter', '@pop'],\r\n            ['(?=})', { token: '', next: '@pop' }] // missing semicolon\r\n        ],\r\n        warndebug: [\r\n            ['[@](warn|debug)', { token: 'keyword', next: '@declarationbody' }]\r\n        ],\r\n        import: [\r\n            ['[@](import)', { token: 'keyword', next: '@declarationbody' }]\r\n        ],\r\n        urldeclaration: [\r\n            { include: '@strings' },\r\n            ['[^)\\r\\n]+', 'string'],\r\n            ['\\\\)', { token: 'delimiter.parenthesis', next: '@pop' }]\r\n        ],\r\n        parenthizedterm: [\r\n            { include: '@term' },\r\n            ['\\\\)', { token: 'delimiter.parenthesis', next: '@pop' }]\r\n        ],\r\n        declarationbody: [\r\n            { include: '@term' },\r\n            [';', 'delimiter', '@pop'],\r\n            ['(?=})', { token: '', next: '@pop' }] // missing semicolon\r\n        ],\r\n        comments: [\r\n            ['\\\\/\\\\*', 'comment', '@comment'],\r\n            ['\\\\/\\\\/+.*', 'comment']\r\n        ],\r\n        comment: [\r\n            ['\\\\*\\\\/', 'comment', '@pop'],\r\n            [/[^*/]+/, 'comment'],\r\n            [/./, 'comment'],\r\n        ],\r\n        name: [\r\n            ['@identifier', 'attribute.value']\r\n        ],\r\n        numbers: [\r\n            ['-?(\\\\d*\\\\.)?\\\\d+([eE][\\\\-+]?\\\\d+)?', { token: 'attribute.value.number', next: '@units' }],\r\n            ['#[0-9a-fA-F_]+(?!\\\\w)', 'attribute.value.hex']\r\n        ],\r\n        units: [\r\n            ['(em|ex|ch|rem|vmin|vmax|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)?', 'attribute.value.unit', '@pop']\r\n        ],\r\n        keyframedeclaration: [\r\n            ['@identifier', 'attribute.value'],\r\n            ['{', { token: 'delimiter.bracket', switchTo: '@keyframebody' }],\r\n        ],\r\n        keyframebody: [\r\n            { include: '@term' },\r\n            ['{', { token: 'delimiter.bracket', next: '@selectorbody' }],\r\n            ['}', { token: 'delimiter.bracket', next: '@pop' }],\r\n        ],\r\n        functioninvocation: [\r\n            ['@identifier\\\\(', { token: 'attribute.value', next: '@functionarguments' }],\r\n        ],\r\n        functionarguments: [\r\n            ['\\\\$@identifier@ws:', 'attribute.name'],\r\n            ['[,]', 'delimiter'],\r\n            { include: '@term' },\r\n            ['\\\\)', { token: 'attribute.value', next: '@pop' }],\r\n        ],\r\n        strings: [\r\n            ['~?\"', { token: 'string', next: '@stringenddoublequote' }],\r\n            ['~?\\'', { token: 'string', next: '@stringendquote' }]\r\n        ],\r\n        stringenddoublequote: [\r\n            ['\\\\\\\\.', 'string'],\r\n            ['\"', { token: 'string', next: '@pop' }],\r\n            [/[^\\\\\"]+/, 'string'],\r\n            ['.', 'string']\r\n        ],\r\n        stringendquote: [\r\n            ['\\\\\\\\.', 'string'],\r\n            ['\\'', { token: 'string', next: '@pop' }],\r\n            [/[^\\\\']+/, 'string'],\r\n            ['.', 'string']\r\n        ]\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/css/css.js?");

/***/ })

}]);