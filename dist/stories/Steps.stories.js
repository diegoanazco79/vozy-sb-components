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
exports.VozySteps = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Steps_1 = require("../components/Steps");
exports.default = {
    title: 'Components/Steps',
    component: Steps_1.VzSteps,
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(Steps_1.VzSteps, __assign({}, args)); };
exports.VozySteps = Template.bind({});
exports.VozySteps.args = {
    steps: ['Step-1', 'Step-2', 'Step-3'],
    selectedStep: 'Step-2'
};
