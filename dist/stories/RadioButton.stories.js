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
exports.VozyRadioButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var RadioButton_1 = require("../components/RadioButton");
exports.default = {
    title: 'Components/RadioButton',
    component: RadioButton_1.VzRadioButton,
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(RadioButton_1.VzRadioButton, __assign({}, args)); };
exports.VozyRadioButton = Template.bind({});
exports.VozyRadioButton.args = {
    checked: true,
    label: 'RadioButton',
};
