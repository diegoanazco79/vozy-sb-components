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
exports.VzSwitch = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@coreui/react");
var Label_1 = require("../Label");
require("./styles.scss");
/**
 * This component rendering a input switch with a right/left label.
*/
var VzSwitch = function (_a) {
    var id = _a.id, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.labelClassName, labelClassName = _c === void 0 ? '' : _c, leftLabel = _a.leftLabel, _d = _a.labelLeftClassName, labelLeftClassName = _d === void 0 ? '' : _d, rightLabel = _a.rightLabel, _e = _a.labelRightClassName, labelRightClassName = _e === void 0 ? '' : _e, active = _a.active, disabled = _a.disabled, size = _a.size, onChange = _a.onChange;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "vz-switch-wrapper ".concat(className || '') }, { children: [leftLabel && ((0, jsx_runtime_1.jsx)(Label_1.VzLabel, { label: leftLabel, type: 'default', className: "".concat(labelClassName || '', " ").concat(labelLeftClassName || '', " mb-0 me-2") })), (0, jsx_runtime_1.jsx)(react_1.CFormSwitch, { id: id, checked: active, disabled: disabled, size: size, className: 'vz-toggle-switch', onChange: function (ev) { return onChange(ev.target.checked); } }), rightLabel && ((0, jsx_runtime_1.jsx)(Label_1.VzLabel, { label: rightLabel, type: 'default', className: "".concat(labelClassName || '', " ").concat(labelRightClassName || '', " mb-0") }))] })));
};
exports.VzSwitch = VzSwitch;
