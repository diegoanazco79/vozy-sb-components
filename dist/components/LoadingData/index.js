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
exports.VzLoadingData = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@coreui/react");
require("./styles.scss");
;
var VzLoadingData = function (_a) {
    var id = _a.id, classNames = _a.classNames, size = _a.size, style = _a.style, wrapperClassNames = _a.wrapperClassNames, wrapperStyle = _a.wrapperStyle;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "vz-loading-data ".concat(wrapperClassNames), style: wrapperStyle }, { children: (0, jsx_runtime_1.jsx)(react_1.CSpinner, { id: id, className: "vz-default-spinner ".concat(classNames), style: style, size: size }) })));
};
exports.VzLoadingData = VzLoadingData;
exports.VzLoadingData.defaultProps = {
    classNames: '',
    style: {},
    wrapperClassNames: '',
    wrapperStyle: {}
};
