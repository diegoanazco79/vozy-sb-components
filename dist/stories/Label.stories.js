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
exports.VozyLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Label_1 = require("../components/Label");
exports.default = {
    title: 'Components/Label',
    component: Label_1.VzLabel,
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(Label_1.VzLabel, __assign({}, args)); };
exports.VozyLabel = Template.bind({});
exports.VozyLabel.args = {
    type: 'default',
    label: 'Type something...',
};
