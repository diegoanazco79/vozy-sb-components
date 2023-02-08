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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VzSteps = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ArrowIcon_1 = __importDefault(require("../../assets/icons/ArrowIcon"));
require("./styles.scss");
;
var VzSteps = function (_a) {
    var id = _a.id, steps = _a.steps, separatorCharacter = _a.separatorCharacter, className = _a.className, selectedStep = _a.selectedStep, onClickStep = _a.onClickStep;
    var Separator = (0, react_1.useMemo)(function () { return (separatorCharacter
        ? (0, jsx_runtime_1.jsx)("span", __assign({ className: 'step-text mx-2' }, { children: separatorCharacter }))
        : (0, jsx_runtime_1.jsx)(ArrowIcon_1.default, { className: 'step-arrow-icon mx-2' })); }, [separatorCharacter]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ id: id, className: "vz-steps-wrapper ".concat(className) }, { children: steps === null || steps === void 0 ? void 0 : steps.map(function (step, idx) {
            var stepLabel = (step === null || step === void 0 ? void 0 : step.label) || step;
            var shownStep = (step === null || step === void 0 ? void 0 : step.shownLabel) || step;
            return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'd-flex align-items-center' }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ id: "".concat(id, "-").concat(stepLabel), className: "step-text ".concat(stepLabel !== selectedStep ? '' : 'step-text__selected'), onClick: function () { return onClickStep(step); } }, { children: shownStep })), idx !== (steps.length - 1) && Separator] }), idx));
        }) })));
};
exports.VzSteps = VzSteps;
