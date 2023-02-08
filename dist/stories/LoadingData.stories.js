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
exports.VozyLoadingData = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var LoadingData_1 = require("../components/LoadingData");
exports.default = {
    title: 'Components/LoadingData',
    component: LoadingData_1.VzLoadingData,
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(LoadingData_1.VzLoadingData, __assign({}, args)); };
exports.VozyLoadingData = Template.bind({});
exports.VozyLoadingData.args = {
    wrapperClassNames: 'justify-content-start'
};
