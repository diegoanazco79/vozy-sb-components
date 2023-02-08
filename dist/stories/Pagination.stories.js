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
exports.VozyPagination = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Pagination_1 = require("../components/Pagination");
exports.default = {
    title: 'Components/Pagination',
    component: Pagination_1.VzPagination,
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(Pagination_1.VzPagination, __assign({}, args)); };
exports.VozyPagination = Template.bind({});
exports.VozyPagination.args = {
    currentPage: 1,
    totalPages: 10,
    loadingData: false
};
