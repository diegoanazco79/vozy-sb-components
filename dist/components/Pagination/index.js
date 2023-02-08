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
exports.VzPagination = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ArrowIcon_1 = __importDefault(require("../../assets/icons/ArrowIcon"));
require("./styles.scss");
;
var VzPagination = function (_a) {
    var id = _a.id, classNames = _a.classNames, currentPage = _a.currentPage, totalPages = _a.totalPages, loadingData = _a.loadingData, connectorText = _a.connectorText, onPageChange = _a.onPageChange;
    var leftButtonValidation = (0, react_1.useMemo)(function () { return (currentPage === 1 || loadingData || totalPages === 0); }, [currentPage, totalPages, loadingData]);
    var rightButtonValidation = (0, react_1.useMemo)(function () { return (currentPage === totalPages || loadingData || totalPages === 0); }, [currentPage, totalPages, loadingData]);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: classNames || '' }, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ id: "".concat(id, "-prev-page"), className: "pagination-nav-left-arrow ".concat(leftButtonValidation ? 'pagination-nav-left-arrow-disabled' : 'pagination-nav-left-arrow-active'), disabled: leftButtonValidation, onClick: function () { return onPageChange(currentPage - 1); } }, { children: (0, jsx_runtime_1.jsx)(ArrowIcon_1.default, {}) })), (0, jsx_runtime_1.jsxs)("span", __assign({ className: 'pagination-nav-text' }, { children: [currentPage, " ", ' ', connectorText, " ", ' ', totalPages] })), (0, jsx_runtime_1.jsx)("button", __assign({ id: "".concat(id, "-next-page"), className: "pagination-nav-right-arrow ".concat(rightButtonValidation ? 'pagination-nav-left-arrow-disabled' : 'pagination-nav-right-arrow-active'), disabled: rightButtonValidation, onClick: function () { return onPageChange(currentPage + 1); } }, { children: (0, jsx_runtime_1.jsx)(ArrowIcon_1.default, {}) }))] })));
};
exports.VzPagination = VzPagination;
exports.VzPagination.defaultProps = {
    id: 'vz-pagination',
    connectorText: 'of',
    classNames: ''
};
