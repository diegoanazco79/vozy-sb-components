"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncateText = void 0;
/**
 * Truncates the received text with the received maxLength
 */
var truncateText = function (text, maxLength) {
    if (!text || !maxLength)
        return '';
    return (text.length > maxLength) ? text.slice(0, maxLength) + '...' : text;
};
exports.truncateText = truncateText;
