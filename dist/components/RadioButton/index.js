"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VzRadioButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@coreui/react");
var Label_1 = require("../Label");
require("./styles.scss");
/**
 * This component rendering a input radiobutton with a right label.
*/
var VzRadioButton = function (_a) {
    var id = _a.id, label = _a.label, checked = _a.checked, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.labelClassName, labelClassName = _c === void 0 ? '' : _c, disabled = _a.disabled, onChange = _a.onChange;
    return ((0, jsx_runtime_1.jsx)(react_1.CFormCheck, { id: id, name: id, className: "vz-radio-button ".concat(className), type: "radio", label: (0, jsx_runtime_1.jsx)(Label_1.VzLabel, { type: 'default', label: label, className: labelClassName }), checked: checked, onChange: onChange, disabled: disabled }));
};
exports.VzRadioButton = VzRadioButton;
