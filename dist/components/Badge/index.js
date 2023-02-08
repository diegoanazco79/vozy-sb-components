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
exports.VzBadge = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@coreui/react");
var Label_1 = require("../Label");
require("./styles.scss");
;
var VzBadge = function (_a) {
    var id = _a.id, _b = _a.type, type = _b === void 0 ? 'neutral' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, text = _a.text, _d = _a.labelType, labelType = _d === void 0 ? 'default' : _d, labelClassName = _a.labelClassName;
    return ((0, jsx_runtime_1.jsx)(react_1.CBadge, __assign({ id: id, shape: 'rounded-pill', className: "vz-badge vz-badge-".concat(type, " ").concat(className) }, { children: (0, jsx_runtime_1.jsx)(Label_1.VzLabel, { label: text, type: labelType, className: "".concat(labelClassName || '', " m-0") }) })));
};
exports.VzBadge = VzBadge;
