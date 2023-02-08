"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VzCheckbox = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@coreui/react");
var Label_1 = require("../Label");
var functions_1 = require("../../utils/functions");
require("./styles.scss");
var VzCheckbox = function (_a) {
    var id = _a.id, _b = _a.className, className = _b === void 0 ? '' : _b, label = _a.label, disabled = _a.disabled, checked = _a.checked, _c = _a.allowTruncate, allowTruncate = _c === void 0 ? false : _c, _d = _a.truncateLength, truncateLength = _d === void 0 ? 0 : _d, onChange = _a.onChange;
    return ((0, jsx_runtime_1.jsx)(react_1.CFormCheck, { id: id, className: "vz-checkbox ".concat(className), label: (0, jsx_runtime_1.jsx)(Label_1.VzLabel, { type: 'default', label: allowTruncate ? (0, functions_1.truncateText)(label, truncateLength) : label }), disabled: disabled, checked: checked, onChange: onChange }));
};
exports.VzCheckbox = VzCheckbox;
