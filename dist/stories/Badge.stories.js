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
exports.VozyBadge = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Badge_1 = require("../components/Badge");
exports.default = {
    title: 'Components/Badge',
    component: Badge_1.VzBadge,
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(Badge_1.VzBadge, __assign({}, args)); };
exports.VozyBadge = Template.bind({});
exports.VozyBadge.args = {
    type: 'neutral',
    text: 'Badge'
};
