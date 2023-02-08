"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
;
var ArrowIcon = function (_a) {
    var className = _a.className, style = _a.style;
    return ((0, jsx_runtime_1.jsx)("svg", __assign({ className: className, style: style, width: '11', height: '7', viewBox: '0 0 11 7', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, { children: (0, jsx_runtime_1.jsx)("path", { d: 'M1 1L5.5 5.5L10 1', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' }) })));
};
ArrowIcon.defaultProps = {
    className: '',
    style: {}
};
exports.default = ArrowIcon;
