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
exports.VozySwitch = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Switch_1 = require("../components/Switch");
exports.default = {
    title: 'Components/Switch',
    component: Switch_1.VzSwitch,
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(Switch_1.VzSwitch, __assign({}, args)); };
exports.VozySwitch = Template.bind({});
exports.VozySwitch.args = {};
