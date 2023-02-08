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
exports.VozyCheckbox = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Checkbox_1 = require("../components/Checkbox");
exports.default = {
    title: 'Components/Checkbox',
    component: Checkbox_1.VzCheckbox,
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(Checkbox_1.VzCheckbox, __assign({}, args)); };
exports.VozyCheckbox = Template.bind({});
exports.VozyCheckbox.args = {
    checked: true,
    label: 'Checkbox',
};
