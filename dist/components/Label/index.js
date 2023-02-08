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
exports.VzLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@coreui/react");
require("./styles.scss");
/**
 * It returns a label element with the id, style, className, and label properties passed in.
 */
var VzLabel = function (_a) {
    var id = _a.id, style = _a.style, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.type, type = _c === void 0 ? 'default' : _c, _d = _a.label, label = _d === void 0 ? '' : _d;
    return ((0, jsx_runtime_1.jsx)(react_1.CFormLabel, __assign({ id: id, style: style, className: "vz-label vz-label-".concat(type, " ").concat(className) }, { children: label })));
};
exports.VzLabel = VzLabel;
