import React, { Children, isValidElement, cloneElement, useRef, useEffect, useState, useMemo, useReducer, useCallback, createContext, useContext } from 'react';
import styled, { keyframes, css, useTheme, createGlobalStyle } from 'styled-components';
import { space, flexbox, layout } from 'styled-system';
import get from 'lodash/get';
import noop from 'lodash/noop';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import { Link as Link$1, NavLink, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) {
    return get(theme, path, fallback);
}; };

var rotate = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled.svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1, templateObject_2, templateObject_3;

var Icon = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$2 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$3 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, space);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$1;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var sizes = {
    SM: "sm",
    MD: "md",
};
var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
var removePointerEvents = function (_a) {
    var disabled = _a.disabled, as = _a.as;
    if (disabled && as && as !== "button") {
        return "\n      pointer-events: none;\n    ";
    }
    return "";
};
var getButtonVariantProp = function (prop) { return function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants.PRIMARY : _b;
    return theme.button[variant][prop];
}; };
var StyledButton = styled.button(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"])), getButtonVariantProp("background"), getButtonVariantProp("border"), getButtonVariantProp("boxShadow"), getButtonVariantProp("color"), function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "max-content");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "0 16px" : "0 24px");
}, function (_a) {
    var isLoading = _a.isLoading;
    return (isLoading ? 0.5 : 1);
}, getButtonVariantProp("backgroundHover"), getButtonVariantProp("borderColorHover"), function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
}, getButtonVariantProp("backgroundActive"), getButtonVariantProp("boxShadowActive"), getDisabledStyles, removePointerEvents, space);
StyledButton.defaultProps = {
    fullWidth: false,
    type: "button",
};
var templateObject_1$2;

var Button = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, external = _a.external, isLoading = _a.isLoading, disabled = _a.disabled, props = __rest(_a, ["startIcon", "endIcon", "children", "external", "isLoading", "disabled"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    return (React.createElement(StyledButton, __assign({}, internalProps, props, { isLoading: isLoading, disabled: isDisabled }),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Button.defaultProps = {
    variant: variants.PRIMARY,
    size: sizes.MD,
    external: false,
    isLoading: false,
    disabled: false,
};

var IconButton = styled(Button)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
});
var templateObject_1$3;

var Icon$4 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$5 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$6 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$7 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$8 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$9 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M5 13.0022H16.17L11.29 17.8822C10.9 18.2722 10.9 18.9122 11.29 19.3022C11.68 19.6922 12.31 19.6922 12.7 19.3022L19.29 12.7122C19.68 12.3222 19.68 11.6922 19.29 11.3022L12.71 4.70217C12.32 4.31217 11.69 4.31217 11.3 4.70217C10.91 5.09217 10.91 5.72217 11.3 6.11217L16.17 11.0022H5C4.45 11.0022 4 11.4522 4 12.0022C4 12.5522 4.45 13.0022 5 13.0022Z" })));
};

var Icon$a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React.createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$c = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React.createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React.createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React.createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React.createElement("g", { mask: "url(#mask0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React.createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React.createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 24" }, props),
        React.createElement("path", { d: "M19.2 3H5.19995C4.09995 3 3.19995 3.9 3.19995 5V19C3.19995 20.1 4.09995 21 5.19995 21H19.2C20.3 21 21.2 20.1 21.2 19V5C21.2 3.9 20.3 3 19.2 3ZM19.2 19H5.19995V5H19.2V19Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M11.45 7.72021H6.44995V9.22022H11.45V7.72021Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M18.2 15.75H13.2V17.25H18.2V15.75Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M18.2 13.25H13.2V14.75H18.2V13.25Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M8.19995 18H9.69995V16H11.7V14.5H9.69995V12.5H8.19995V14.5H6.19995V16H8.19995V18Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M14.29 10.95L15.7 9.54L17.11 10.95L18.17 9.89L16.76 8.47L18.17 7.06L17.11 6L15.7 7.41L14.29 6L13.23 7.06L14.64 8.47L13.23 9.89L14.29 10.95Z", fill: "#1FC7D4" })));
};

var Icon$f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React.createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$k = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$l = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$o = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z" })));
};

var Icon$p = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("image", { width: "32", height: "32", href: "/images/goong/logo.png" })));
};

var Icon$r = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear)" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M149.813 139.861C144.738 112.406 165.591 87.0417 193.238 87.0417C217.636 87.0417 237.414 107.022 237.414 131.669V186.687C243.517 186.252 249.718 186.028 255.998 186.028C262.032 186.028 267.992 186.234 273.862 186.636V131.669C273.862 107.022 293.641 87.0417 318.039 87.0417C345.686 87.0417 366.539 112.406 361.464 139.861L349.509 204.532C390.538 222.627 421.562 254.056 421.562 293.548V317.442C421.562 349.919 400.293 377.11 370.56 395.466C340.595 413.965 300.058 424.962 255.998 424.962C211.939 424.962 171.401 413.965 141.436 395.466C111.703 377.11 90.4342 349.919 90.4342 317.442V293.548C90.4342 254.265 121.139 222.957 161.822 204.825L149.813 139.861ZM334.189 213.028L348.178 137.354C351.701 118.299 337.227 100.695 318.039 100.695C301.105 100.695 287.378 114.562 287.378 131.669V201.683C282.941 201.108 278.433 200.653 273.862 200.323C268.003 199.899 262.042 199.682 255.998 199.682C249.707 199.682 243.505 199.918 237.414 200.376C232.844 200.72 228.335 201.189 223.899 201.777V131.669C223.899 114.562 210.172 100.695 193.238 100.695C174.05 100.695 159.576 118.299 163.099 137.354L177.134 213.279C133.257 229.744 103.95 259.533 103.95 293.548V317.442C103.95 369.283 172.024 411.308 255.998 411.308C339.972 411.308 408.047 369.283 408.047 317.442V293.548C408.047 259.36 378.439 229.44 334.189 213.028Z", fill: "#633001" }),
        React.createElement("path", { d: "M408.047 317.442C408.047 369.283 339.972 411.308 255.998 411.308C172.024 411.308 103.95 369.283 103.95 317.442V293.548H408.047V317.442Z", fill: "#FEDC90" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M163.099 137.354C159.576 118.299 174.05 100.695 193.238 100.695C210.172 100.695 223.899 114.562 223.899 131.669V201.777C234.247 200.404 244.986 199.682 255.998 199.682C266.755 199.682 277.252 200.371 287.378 201.683V131.669C287.378 114.562 301.105 100.695 318.039 100.695C337.227 100.695 351.701 118.299 348.178 137.354L334.189 213.028C378.439 229.44 408.047 259.36 408.047 293.548C408.047 345.389 339.972 387.415 255.998 387.415C172.024 387.415 103.95 345.389 103.95 293.548C103.95 259.533 133.257 229.744 177.134 213.279L163.099 137.354Z", fill: "#D1884F" }),
        React.createElement("path", { d: "M213.762 286.722C213.762 300.86 206.199 312.322 196.868 312.322C187.538 312.322 179.974 300.86 179.974 286.722C179.974 272.583 187.538 261.122 196.868 261.122C206.199 261.122 213.762 272.583 213.762 286.722Z", fill: "#633001" }),
        React.createElement("path", { d: "M330.333 286.722C330.333 300.86 322.769 312.322 313.439 312.322C304.108 312.322 296.544 300.86 296.544 286.722C296.544 272.583 304.108 261.122 313.439 261.122C322.769 261.122 330.333 272.583 330.333 286.722Z", fill: "#633001" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "256", y1: "0", x2: "256", y2: "512", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#54DADE" }),
                React.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$s = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 15 2" }, props),
        React.createElement("path", { d: "M13.2 2L1.20004 2C0.650043 2 0.200043 1.55 0.200043 1C0.200043 0.45 0.650043 0 1.20004 0L13.2 0C13.75 0 14.2 0.45 14.2 1C14.2 1.55 13.75 2 13.2 2Z" })));
};

var Icon$t = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$u = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.43832 38.1153C2.43048 38.3002 2.42654 38.4857 2.42654 38.6718C2.42654 39.3754 2.48287 40.0702 2.59273 40.7545H2.42654V41.8317C2.42654 42.3575 2.45801 42.8784 2.51976 43.3937C3.7248 53.4491 16.4632 61.3609 32 61.3609C47.5368 61.3609 60.2752 53.4491 61.4802 43.3937C61.542 42.8784 61.5735 42.3575 61.5735 41.8317V40.7545H61.4073C61.5171 40.0702 61.5735 39.3754 61.5735 38.6718C61.5735 38.4857 61.5695 38.3002 61.5617 38.1153C61.1156 27.587 48.0511 19.1426 32 19.1426C15.9489 19.1426 2.88444 27.587 2.43832 38.1153ZM0.00951064 38.1153C0.229456 31.6916 4.24297 26.2955 9.82907 22.6067C15.6197 18.7827 23.4643 16.5034 32 16.5034C40.5358 16.5034 48.3803 18.7827 54.1709 22.6067C59.757 26.2955 63.7705 31.6916 63.9905 38.1153H64V41.8317C64 48.5003 59.9176 54.102 54.1709 57.8969C48.3803 61.7208 40.5358 64.0001 32 64.0001C23.4643 64.0001 15.6197 61.7208 9.82907 57.8969C4.08238 54.102 0 48.5003 0 41.8317V38.1153H0.00951064Z", fill: "#606063" }),
        React.createElement("path", { d: "M61.5734 41.832C61.5734 52.6177 48.3329 61.3612 32 61.3612C15.667 61.3612 2.42651 52.6177 2.42651 41.832V38.7405H61.5734V41.832Z", fill: "#BEBEBE" }),
        React.createElement("path", { d: "M61.5734 38.6718C61.5734 49.4575 48.3329 58.201 32 58.201C15.667 58.201 2.42651 49.4575 2.42651 38.6718C2.42651 27.8861 15.667 19.1426 32 19.1426C48.3329 19.1426 61.5734 27.8861 61.5734 38.6718Z", fill: "#FAF9FA" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 33.1548C6.97663 33.167 6.97661 33.1792 6.97661 33.1915C6.97661 34.0795 7.09495 34.9492 7.32173 35.794H6.97634V36.9377C6.97634 37.4425 7.01459 37.9414 7.08925 38.4332C8.21673 45.8588 17.6492 51.6547 29.1184 51.6547C40.5876 51.6547 50.0201 45.8588 51.1475 38.4332C51.2222 37.9414 51.2604 37.4425 51.2604 36.9377V35.794H50.9156C51.1362 34.9723 51.2542 34.127 51.2604 33.2641C51.2606 33.2399 51.2607 33.2157 51.2607 33.1915C51.2607 33.1792 51.2607 33.167 51.2606 33.1548C51.2309 25.0436 41.329 18.4744 29.1187 18.4744C16.9083 18.4744 7.00645 25.0436 6.97668 33.1548ZM4.55012 33.1548H4.5498V36.9377C4.5498 42.269 7.79116 46.6683 12.1963 49.5962C16.643 52.5518 22.632 54.2939 29.1184 54.2939C35.6048 54.2939 41.5937 52.5518 46.0405 49.5962C50.4456 46.6683 53.687 42.269 53.687 36.9377V33.2739C53.6872 33.2464 53.6872 33.2189 53.6872 33.1915C53.6872 27.8601 50.4459 23.4609 46.0408 20.533C41.594 17.5773 35.6051 15.8352 29.1187 15.8352C22.6322 15.8352 16.6433 17.5773 12.1965 20.533C7.80153 23.4542 4.56495 27.84 4.55012 33.1548Z", fill: "#633001" }),
        React.createElement("path", { d: "M51.2604 36.9379C51.2604 45.0659 41.3471 51.6549 29.1184 51.6549C16.8897 51.6549 6.97632 45.0659 6.97632 36.9379V33.4849H51.2604V36.9379Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M51.2604 33.1914C51.2604 41.3195 41.3471 47.9085 29.1184 47.9085C16.8897 47.9085 6.97632 41.3195 6.97632 33.1914C6.97632 25.0634 16.8897 18.4744 29.1184 18.4744C41.3471 18.4744 51.2604 25.0634 51.2604 33.1914Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6497 25.2371C13.6496 25.2493 13.6496 25.2615 13.6496 25.2737C13.6496 26.1618 13.7679 27.0315 13.9947 27.8762H13.6493V29.0199C13.6493 29.5248 13.6876 30.0237 13.7622 30.5154C14.8897 37.941 24.3222 43.737 35.7914 43.737C47.2605 43.737 56.693 37.941 57.8205 30.5154C57.8952 30.0237 57.9334 29.5248 57.9334 29.0199V27.8762H57.5886C57.8092 27.0545 57.9271 26.2092 57.9334 25.3464C57.9336 25.3222 57.9337 25.298 57.9337 25.2737C57.9337 25.2615 57.9337 25.2493 57.9336 25.2371C57.9038 17.1259 48.0019 10.5567 35.7916 10.5567C23.5813 10.5567 13.6794 17.1259 13.6497 25.2371ZM11.2231 25.2371H11.2228V29.0199C11.2228 34.3513 14.4641 38.7505 18.8693 41.6785C23.316 44.6341 29.3049 46.3762 35.7914 46.3762C42.2778 46.3762 48.2667 44.6341 52.7135 41.6785C57.1186 38.7505 60.36 34.3513 60.36 29.0199V25.3561C60.3601 25.3287 60.3602 25.3012 60.3602 25.2737C60.3602 19.9424 57.1189 15.5432 52.7137 12.6152C48.267 9.65961 42.2781 7.91748 35.7916 7.91748C29.3052 7.91748 23.3163 9.65961 18.8695 12.6152C14.4745 15.5364 11.2379 19.9222 11.2231 25.2371Z", fill: "#633001" }),
        React.createElement("path", { d: "M57.9334 29.0201C57.9334 37.1481 48.0201 43.7372 35.7913 43.7372C23.5626 43.7372 13.6493 37.1481 13.6493 29.0201V25.5671H57.9334V29.0201Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M57.9334 25.274C57.9334 33.402 48.0201 39.991 35.7913 39.991C23.5626 39.991 13.6493 33.402 13.6493 25.274C13.6493 17.1459 23.5626 10.5569 35.7913 10.5569C48.0201 10.5569 57.9334 17.1459 57.9334 25.274Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 17.3196C6.97663 17.3318 6.97661 17.344 6.97661 17.3563C6.97661 18.2443 7.09495 19.114 7.32173 19.9588H6.97634V21.1025C6.97634 21.6073 7.01459 22.1062 7.08925 22.598C8.21673 30.0236 17.6492 35.8195 29.1184 35.8195C40.5876 35.8195 50.0201 30.0236 51.1475 22.598C51.2222 22.1062 51.2604 21.6073 51.2604 21.1025V19.9588H50.9156C51.1362 19.1371 51.2542 18.2917 51.2604 17.4289C51.2606 17.4047 51.2607 17.3805 51.2607 17.3563C51.2607 17.344 51.2607 17.3318 51.2606 17.3196C51.2309 9.20843 41.329 2.63919 29.1187 2.63919C16.9083 2.63919 7.00645 9.20843 6.97668 17.3196ZM4.55012 17.3196H4.5498V21.1025C4.5498 26.4338 7.79116 30.833 12.1963 33.761C16.643 36.7166 22.632 38.4587 29.1184 38.4587C35.6048 38.4587 41.5937 36.7166 46.0405 33.761C50.4456 30.833 53.687 26.4338 53.687 21.1025V17.4387C53.6872 17.4112 53.6872 17.3837 53.6872 17.3563C53.6872 12.0249 50.4459 7.62568 46.0408 4.69775C41.594 1.74213 35.6051 0 29.1187 0C22.6322 0 16.6433 1.74213 12.1965 4.69775C7.80153 7.61896 4.56495 12.0047 4.55012 17.3196Z", fill: "#633001" }),
        React.createElement("path", { d: "M51.2604 21.1027C51.2604 29.2307 41.3471 35.8197 29.1184 35.8197C16.8897 35.8197 6.97632 29.2307 6.97632 21.1027V17.6497H51.2604V21.1027Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M51.2604 17.3562C51.2604 25.4842 41.3471 32.0733 29.1184 32.0733C16.8897 32.0733 6.97632 25.4842 6.97632 17.3562C6.97632 9.22822 16.8897 2.63916 29.1184 2.63916C41.3471 2.63916 51.2604 9.22822 51.2604 17.3562Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.214 18.272C12.214 20.9856 14.0269 23.4161 16.8871 25.0513L14.9054 28.7844L14.9059 28.7847H14.9054V38.2326C14.9054 39.4819 15.8366 40.4947 16.9853 40.4947C18.134 40.4947 19.0652 39.4819 19.0652 38.2326V30.7188L21.1972 26.7024C22.5605 27.0169 24.0238 27.1876 25.5468 27.1876C32.9103 27.1876 38.8796 23.196 38.8796 18.272C38.8796 13.3481 32.9103 9.35645 25.5468 9.35645C18.1833 9.35645 12.214 13.3481 12.214 18.272Z", fill: "url(#paint0_linear)" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8871 25.0513C16.5702 24.8701 16.2663 24.6792 15.9762 24.4793C13.6475 22.8741 12.2139 20.685 12.2139 18.272C12.2139 13.3481 18.1832 9.35641 25.5468 9.35641C32.9103 9.35641 38.8796 13.3481 38.8796 18.272C38.8796 23.1959 32.9103 27.1876 25.5468 27.1876C24.0238 27.1876 22.5604 27.0168 21.1972 26.7024L19.0652 30.7187V38.2325C19.0652 39.4819 18.134 40.4947 16.9853 40.4947C15.8366 40.4947 14.9054 39.4819 14.9054 38.2325V28.7847L16.8871 25.0513ZM12.7822 28.8244V38.2325C12.7822 40.7573 14.664 42.804 16.9853 42.804C19.3066 42.804 21.1884 40.7573 21.1884 38.2325V31.3375L22.2942 29.2544C23.3445 29.4135 24.433 29.4969 25.5468 29.4969C29.5564 29.4969 33.2881 28.4148 36.0865 26.5435C38.8503 24.6954 41.0028 21.836 41.0028 18.272C41.0028 14.708 38.8503 11.8486 36.0865 10.0005C33.2881 8.12923 29.5564 7.04712 25.5468 7.04712C21.5371 7.04712 17.8054 8.12923 15.007 10.0005C12.2432 11.8486 10.0907 14.708 10.0907 18.272C10.0907 21.4 11.738 23.9758 14.0266 25.8213L13.0813 27.6021C12.9912 27.7662 12.9192 27.9435 12.8685 28.1307C12.8064 28.3589 12.7783 28.5928 12.7822 28.8244Z", fill: "#633001" }),
        React.createElement("path", { d: "M16.3791 14.5156C16.3791 17.0663 19.3667 19.1341 23.0521 19.1341C26.7375 19.1341 29.7251 17.0663 29.7251 14.5156C29.7251 11.9648 26.7375 9.89697 23.0521 9.89697C19.3667 9.89697 16.3791 11.9648 16.3791 14.5156Z", fill: "#9E7200" }),
        React.createElement("path", { d: "M16.3792 12.5361H29.7251V14.5155H16.3792V12.5361Z", fill: "#9E7200" }),
        React.createElement("path", { d: "M16.3791 12.5361C16.3791 15.0868 19.3667 17.1546 23.0521 17.1546C26.7375 17.1546 29.7251 15.0868 29.7251 12.5361C29.7251 9.98529 26.7375 7.91748 23.0521 7.91748C19.3667 7.91748 16.3791 9.98529 16.3791 12.5361Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.52 11.9795L22.4008 10.6777C22.7983 10.4027 23.3062 10.4027 23.7036 10.6777L25.5845 11.9795C25.959 12.2388 25.959 12.8336 25.5845 13.0928L23.7036 14.3946C23.3062 14.6697 22.7983 14.6697 22.4008 14.3946L20.52 13.0928C20.1454 12.8336 20.1454 12.2388 20.52 11.9795Z", fill: "#9E7200" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1938 7.32218C18.7911 6.21664 20.8681 5.6084 23.0522 5.6084C25.2363 5.6084 27.3133 6.21664 28.9106 7.32218C30.4827 8.41029 31.8484 10.1975 31.8484 12.5363V14.5157C31.8484 16.8545 30.4827 18.6417 28.9106 19.7298C27.3133 20.8353 25.2363 21.4435 23.0522 21.4435C20.8681 21.4435 18.7911 20.8353 17.1938 19.7298C15.6217 18.6417 14.256 16.8545 14.256 14.5157V12.5363C14.256 10.1975 15.6217 8.41029 17.1938 7.32218ZM23.0522 7.91769C19.3668 7.91769 16.3792 9.9855 16.3792 12.5363V14.5157C16.3792 17.0664 19.3668 19.1343 23.0522 19.1343C26.7376 19.1343 29.7252 17.0664 29.7252 14.5157V12.5363C29.7252 9.9855 26.7376 7.91769 23.0522 7.91769Z", fill: "#633001" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "25.691", y1: "9.6549", x2: "25.691", y2: "40.2608", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#9F4A08" }),
                React.createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React.createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$v = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React.createElement("image", { width: 90, height: 90, href: "/images/goong/9.png" })));
};

var Icon$w = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React.createElement("image", { width: 90, height: 90, href: "/images/incubator/9.png" })));
};

var Icon$x = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React.createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React.createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React.createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$B = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 960 960" }, props),
        React.createElement("g", null,
            React.createElement("path", { fill: "#E8815D", d: "M725.8,788.9H234.2c-8.9,0-16.1-7.2-16.1-16.1V397.9c0-8.9,7.2-16.1,16.1-16.1h491.6c8.9,0,16.1,7.2,16.1,16.1\n\t\tv374.9C741.9,781.7,734.7,788.9,725.8,788.9z" }),
            React.createElement("path", { fill: "#F69B76", d: "M754.1,439H205.9c-8.9,0-16.1-7.2-16.1-16.1V296c0-8.9,7.2-16.1,16.1-16.1h548.2c8.9,0,16.1,7.2,16.1,16.1\n\t\tv126.9C770.2,431.8,763,439,754.1,439z" }),
            React.createElement("path", { fill: "#D83945", d: "M495.7,291.5h-20c-16.5,0-30-13.4-30-30v-6.2c0-16.5,13.4-30,30-30h20c16.5,0,30,13.4,30,30v6.2\n\t\tC525.7,278.1,512.3,291.5,495.7,291.5z" }),
            React.createElement("rect", { x: "409.7", y: "439", fill: "#D83945", width: "140.3", height: "349.9" }),
            React.createElement("rect", { x: "397.2", y: "279.9", fill: "#EA3D53", width: "165.3", height: "159.1" }),
            React.createElement("path", { fill: "#D83945", d: "M467.5,239.5l-89.3-57.7c-44.1-28.5-102.3,3.2-102.3,55.7l0,0c0,23.4,19,42.4,42.4,42.4H458\n\t\tc9.7,0,17.6-7.9,17.6-17.6v-8.1C475.5,248.3,472.5,242.7,467.5,239.5z M416.3,260.5H339c-9.4,0-17-7.6-17-17l0,0\n\t\tc0-30.8,34.1-49.3,59.9-32.6l41.9,27.1c4.6,2.9,6.8,8.6,5,14.1C427.1,257.3,421.8,260.5,416.3,260.5z" }),
            React.createElement("path", { fill: "#D83945", d: "M493,254.3v8.1c0,9.7,7.9,17.6,17.6,17.6h139.7c23.4,0,42.4-19,42.4-42.4l0,0c0-52.5-58.2-84.2-102.3-55.7\n\t\tL501,239.5C496,242.7,493,248.3,493,254.3z M539.7,252.1c-1.7-5.5,0.5-11.2,5-14.1l41.9-27.1c25.8-16.7,59.9,1.9,59.9,32.6l0,0\n\t\tc0,9.4-7.6,17-17,17h-77.3C546.7,260.5,541.3,257.3,539.7,252.1z" }))));
};

var Icon$C = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 585 492" }, props),
        React.createElement("defs", null,
            React.createElement("g", { id: "Layer0_0_FILL" },
                React.createElement("path", { fill: "#E5DDD6", stroke: "none", d: "\nM 413.95 364.55\nQ 413.45 364 413 363.55 412.6 363.2 412.3 362.9\nL 410.35 360.95 410.2 360.9\nQ 389.4 375.55 364.15 388.5 336.3 402.8 300.2 416.25 287.75 420.95 279.05 423.65 267.45 427.2 257.45 429.05 226.4 434.7 187.5 427.85 176.65 426 161.95 422.3 156.65 429.75 160.75 438\nL 213.2 488.9\nQ 219.5 491.3 222.35 491.2 229.7 490.75 232.15 489.4\nL 263.9 471.05\nQ 264.45 470.75 264.95 470.45 265.5 470.05 266 469.75\nL 273.35 465.3\nQ 285.35 458 297.1 450.4 298.45 449.55 299.9 448.65 308.4 443.15 316.55 437.75 373.25 400.65 417 367.35 415.475 365.95 413.95 364.55 Z" }),
                React.createElement("path", { fill: "#DC7B4A", stroke: "none", d: "\nM 450.2 341.15\nQ 456.5 335.9 462.45 330.8 462.8 330.5 463.1 330.3 465.3 328.35 467.5 326.5 461.85 328.9 458.7 330.3 452.7 332.9 442.7 338.05 432.1 343.55 427.15 346.9 422.75 349.95 414.7 356.95 412.15 359.2 410.35 360.95\nL 412.3 362.9\nQ 412.6 363.2 413 363.55 413.45 364 413.95 364.55 415.475 365.95 417 367.35 420.35 364.85 423.6 362.3\nL 449.6 341.7\nQ 449.65 341.55 449.75 341.45\nL 450.2 341.15 Z" }),
                React.createElement("path", { fill: "#E9E1DA", stroke: "none", d: "\nM 369.8 321.95\nQ 368.95 321.15 368.1 320.35 366.65 318.9 365.3 317.55 362.35 314.65 359.55 311.9 359.15 311.55 358.85 311.25 349.6 302.15 340.9 293.45 289.15 240.85 262.85 214.95 227.6 180.25 198.05 154.5 151.8 192 99.95 223.45 2.4 282.45 2.05 287.05 1.65 291.6 4.25 294.85\nL 62.6 347.7\nQ 68.75 351.5 79.9 344.05 90.95 336.65 110.05 336.65 131.65 336.65 147.7 349.8 149.9 351.6 152.1 353.75 154.45 356.05 156.5 358.5 169.55 374.15 169.55 395.05 169.55 413 162.95 421 162.4 421.6 161.95 422.3 176.65 426 187.5 427.85 226.4 434.7 257.45 429.05 267.45 427.2 279.05 423.65 287.75 420.95 300.2 416.25 336.3 402.8 364.15 388.5 389.4 375.55 410.2 360.9\nL 371 323.1\nQ 370.4 322.55 369.8 321.95\nM 275.55 253.5\nQ 276.85 254.45 278 255.6 278.45 256.1 278.85 256.55 278.9 256.55 279 256.6 279.05 256.7 279.15 256.75\nL 280.1 257.8\nQ 280.2 257.9 280.25 257.95 282.15 259.9 284 261.85 285.8 263.85 287.45 265.9 289.15 268.1 290.6 270.25 291.95 272.45 293 274.7 294.2 277 295.15 279.4 295.75 281.05 296.25 282.6\nL 296.55 283.5\nQ 296.55 283.65 296.65 283.8 296.65 283.95 296.7 284.15 297.4 286.55 297.8 288.85 297.85 289.35 297.95 289.95 298.15 291.65 298.25 293.55 298.4 295.85 298.15 298.2 297.95 300.55 297.65 302.75 297.3 305 296.95 307.1 296.5 309.25 295.95 311.4 295.35 313.5 294.65 315.5 294.05 317.55 293.4 319.6 292.6 321.75 291.8 323.8 291.25 325.15 290.65 326.5 290.35 327.15 290.05 327.85 289.2 329.85 288.3 331.85 287.75 332.9 287.3 333.95 286.55 335.35 285.8 336.85 284.75 338.85 283.45 340.7 282.55 342.05 281.55 343.4 280.2 345.1 278.85 346.8 277.4 348.45 275.95 350.1 274.35 351.65 272.85 353.2 271.25 354.7 269.6 356.2 267.9 357.6 266.15 359.1 264.45 360.45 262.6 361.85 260.8 363.1 258.95 364.4 257 365.6 255.1 366.85 254.1 367.45 253.15 368.05 252.1 368.55 251.15 369.2 250.1 369.65 249.1 370.2 247 371.15 244.8 372.2 242.7 373 240.5 373.85 238.3 374.6 236 375.25 235.35 375.4 234.5 375.55\nL 234.4 375.55 233.35 375.85\nQ 232.75 375.9 232.15 376.05 231.85 376.05 231.6 376.15 231.45 376.15 231.4 376.15 228.9 376.5 226.45 376.65 226.4 376.65 226.3 376.75\nL 226.25 376.75 226.25 376.8\nQ 225.45 378.55 223.75 379.05 222.3 379.7 220.25 379.65 220.15 379.55 220.1 379.55\nL 219.85 379.55\nQ 219.7 379.55 219.55 379.55 219.05 379.4 218.6 379.4 216.9 378.95 216.75 377.8 216.6 378.1 216.25 378.45 214.8 380 211.7 379.2 210 378.3 208.95 376.95 208.1 375.9 207.95 374.75 207 374.6 206 374.35 203.4 373.85 200.9 373.15 198.5 372.5 196 371.85 193.5 371 191.05 370.25 188.85 369.5 186.75 368.8 180.45 366.45 175.2 362.1 167.95 356 164.4 347.65 159.9 336.9 161.5 322.65 164.45 296.95 185.25 274.5 188.55 270.9 192.05 267.7 191.05 262.2 191.35 259.75 191.6 257.3 192.8 253.7 193.95 250.05 196.2 246.25 198.55 242.5 202.6 241.15 206.75 239.85 209.4 240.6 212.2 241.35 215 243.65\nL 215.9 240.3\nQ 215.25 239.6 214.2 238.9 206.55 233.3 198.1 235.55 193.7 236.9 190.1 243 186.45 249.35 188.4 259.65 186.45 249.35 190.1 243 193.7 236.9 198.1 235.55 206.55 233.3 214.2 238.9 215.25 239.6 215.9 240.3\nL 217.3 235.35\nQ 217.35 235.7 217.65 237.1 217.8 237.8 218.05 239.3 218.25 241 218.65 243.35 219.05 243.95 219.4 244.55 219.5 244.55 219.5 244.6\nL 219.5 244.65\nQ 220.15 245.7 220.6 246.7 221.25 247.9 221.6 249.2 226.9 247.1 232.5 245.85 257.4 240.1 273.45 251.85 273.55 251.95 273.6 251.95 274.65 252.7 275.55 253.5\nM 219.4 244.55\nQ 219.05 243.95 218.65 243.35 218.95 246.2 219.4 250 219.5 250.65 219.55 251.35 219.7 252.8 219.7 253.55 219.7 254.1 219.8 255 219.8 255.8 219.8 257 219.8 259.2 219.85 259.6 219.85 259.9 220.1 260.65 220.15 260.95 220.25 261.1\nL 220.85 260.2\nQ 221.1 259.8 221.4 259.45\nL 221.4 259.35 220.75 254.6 220.15 249.7\nQ 220.85 249.4 221.6 249.2 221.25 247.9 220.6 246.7 220.15 245.7 219.5 244.65\nL 219.5 244.6\nQ 219.5 244.55 219.4 244.55\nM 209.4 240.6\nQ 206.75 239.85 202.6 241.15 198.55 242.5 196.2 246.25 193.95 250.05 192.8 253.7 191.6 257.3 191.35 259.75 191.05 262.2 192.05 267.7 196.65 263.45 201.5 259.95 201.6 259.3 201.7 258.65\nL 202.05 259.6\nQ 202.35 259.35 202.75 259.15\nL 202.2 251.55 203.35 254.25 204.2 247.25 206.45 256.7\nQ 207.5 256 208.55 255.45\nL 211.25 245 213.25 250 215 243.65\nQ 212.2 241.35 209.4 240.6 Z" }),
                React.createElement("path", { fill: "#794210", stroke: "none", d: "\nM 276.8 308.7\nQ 276.25 308.65 274.2 308.5 272.7 308.4 272.25 308.4 269.9 308.5 268.35 309.85 267.7 310.5 266.8 312.05 265.65 314.15 265.4 315.65 264.95 317.85 265.95 319.8 266.65 321 267.85 322.25 268.15 322.55 268.85 323.15 269.35 323.7 269.6 324.1 269.75 324.4 269.9 324.8 270.05 325.1 270.2 325.6 270.65 327.25 271.4 328.75\nL 271.85 328.15\nQ 271.8 328.15 271.85 328.05 277.4 320.05 280.75 311.75 280.8 311.4 280.95 311.1 280.2 310.15 279.2 309.55 278.15 308.95 276.8 308.7\nM 257.55 275.45\nQ 256.7 274.55 255.65 273.8 254.65 273.15 253.65 272.9 252.45 272.6 250.7 273 248.2 273.65 246.4 275.3 244.55 277 243.95 279.3 243.8 279.75 243.65 280.8 243.5 281.7 243.35 282.15 242.85 284.3 241.55 285.95 241.25 286.4 241.15 286.4 240.95 286.7 240.95 287 240.8 287.35 240.8 287.95 240.85 289.8 241.4 291.6 241.7 292.65 242 293.25 242.85 294.45 244.4 295.25 245.25 295.6 245.95 295.7 247.05 295.85 248.05 295 248.65 294.65 249.65 293.6 250.5 292.85 252 291.95 253.8 290.95 254.35 290.5 256.7 288.9 258 286.25 259.2 283.8 259.35 280.75 259.35 278.8 258.9 277.55 258.45 276.4 257.55 275.45\nM 268.75 257.65\nQ 268.2 257.45 267.75 257.3 266.95 256.9 266 256.7\nL 261.55 255.75\nQ 261.4 255.75 261.25 255.75 262.45 256.25 263.2 256.45 265.2 257.45 266.7 258.35 268.15 259.2 270.7 261.3 273.55 263.55 274.95 264.95 277.45 267.55 279.8 271.2 281.1 273.5 283.45 278.05 284.55 280.05 284.85 281.1\nL 282.9 272.85\nQ 281.95 269.7 280.95 267.85 280.05 266.05 279.95 266.05 276.95 262.5 274.75 261\nL 272.55 259.6\nQ 272.3 259.45 272.1 259.35\nL 269 257.75\nQ 268.85 257.65 268.75 257.65 Z" }),
                React.createElement("path", { fill: "#DDDDDD", stroke: "none", d: "\nM 234.4 375.55\nL 234.5 375.55\nQ 233.95 375.45 233.6 375.4 232.85 375.4 231.45 375.25 229.95 375.25 229.4 375.25 228 375.2 226.3 374.9 226.3 375.75 226.25 376.75\nL 226.3 376.75\nQ 226.4 376.65 226.45 376.65 228.9 376.5 231.4 376.15 231.45 376.15 231.6 376.15 231.85 376.05 232.15 376.05 232.75 375.9 233.35 375.85\nL 234.4 375.55\nM 186.75 368.8\nQ 188.85 369.5 191.05 370.25 193.5 371 196 371.85 198.5 372.5 200.9 373.15 203.4 373.85 206 374.35 207 374.6 207.95 374.75 207.9 374 208.05 373.25\nL 209.1 371\nQ 208.25 371 207.35 371 206.2 371.1 205.15 371.1\nL 203.85 371\nQ 203.8 371 203.7 370.95 202.5 370.95 201.3 370.85 199.4 370.8 197.45 370.5 196.15 370.35 194.85 370.2 193.55 370.05 192.3 369.75 190.85 369.5 189.55 369.3 188.2 369.05 186.75 368.8 Z" }),
                React.createElement("path", { fill: "#EF5121", stroke: "none", d: "\nM 218.35 362.1\nL 218.25 362.1\nQ 218.65 364.3 218.65 366.45 218.65 368.05 218.5 369.6 218.35 371.25 218.05 372.85 217.95 373.15 217.9 373.4 217.6 375.1 217.3 376.3 217 377.1 216.75 377.7 216.7 377.7 216.75 377.8 216.9 378.95 218.6 379.4 219.05 379.4 219.55 379.55 219.7 379.55 219.85 379.55\nL 220.1 379.55\nQ 220.15 379.55 220.25 379.65 220.85 378.45 221.3 377.05 221.4 376.8 221.4 376.65 221.6 375.7 221.45 375.1 221.4 374.75 221.1 374 221 373.85 221 373.7 220.75 373.15 220.7 372.95 220.6 372.5 220.6 371.75 220.55 370.95 220.55 370.5 220.45 370.05 220.45 369.8 220.45 369.35 220.55 369.15 220.55 369.05 220.6 369 220.7 368.55 221.15 367.9 221.45 367.2 221.75 366.85 222.05 366.45 222.45 366.15\nL 222.05 365.6 220.3 362.8 218.35 362.1\nM 216.15 363.35\nQ 216 363.2 215.75 363.35 214.8 364.1 214.4 365.6 214.25 366.15 214.05 366.9 214.05 367.05 214.05 367.35 213.95 367.75 213.9 368.35 213.8 369.35 213.55 370.55 213.4 371 213.35 371.45 213.2 371.75 213.1 372.15 213.1 372.4 213.2 372.4\nL 213.35 372.4\nQ 213.95 372.35 214.2 372 214.25 371.9 214.35 371.75 214.5 371.45 214.55 371.1 214.7 370.65 214.8 370.35 214.85 370.2 214.85 370.05\nL 214.95 369.2\nQ 215.1 368.4 215.4 367.15 215.45 366.75 215.55 366.4 216.1 364.45 216.25 363.55 216.25 363.4 216.15 363.35\nM 220.3 352.25\nQ 220.25 352.2 220.15 352.2 219.95 351.95 219.95 352.05 219.8 351.95 219.55 352.05 219.35 352.1 218.8 352.05\nL 218.75 352.05\nQ 218.45 351.95 218.05 351.9\nL 217.3 351.75\nQ 216.55 351.6 215.85 351.65 215.15 351.75 214.85 351.8 214.4 351.8 213.8 351.75 213.35 351.75 213.05 351.65 212.6 351.8 212.15 351.95 211.75 352.1 211.4 352.5 211 352.8 210.75 352.8\nL 210.75 352.85\nQ 210.85 353.05 211.05 353.45 211.25 353.3 211.4 353.3 211.55 353.2 211.75 353.15 212.35 353 213.25 352.9 215.25 352.9 217.2 353.05 217.45 353.15 217.75 353.15 218.1 353.2 218.6 353.2 218.75 353.3 218.8 353.3 219.05 353.35 219.25 353.5 219.5 353.6 219.65 353.65\nL 219.7 353.75\nQ 219.85 353.8 220 353.8 220.75 354.35 221.1 354.95 221.25 355.15 221.4 355.45 221.4 355.7 221.45 356.2 221.7 357.1 222.2 358.9 222.2 358.8 222.3 358.65\nL 222.2 354.65\nQ 222.2 354.5 222.15 354.25\nL 222.15 353.95\nQ 222.15 353.9 222.05 353.75 222 353.45 221.9 353.15\nL 221.9 353\nQ 221 352.1 220.95 352.05 220.95 352.2 220.7 352.25 220.45 352.35 220.3 352.25\nM 221.4 261.25\nQ 221.7 261.15 221.85 260.8\nL 221.55 261 221.4 259.45\nQ 221.1 259.8 220.85 260.2\nL 220.25 261.1\nQ 220.3 261.55 220.3 261.7 220.45 262 220.75 261.75 221.25 261.3 221.4 261.25\nM 221.6 271.5\nQ 221.6 271.45 221.45 271.45 221.3 271.35 221.15 271.35 221.1 271.45 220.95 271.6 220.85 271.75 220.95 271.9 220.95 271.95 221.1 272.1 221.25 272.15 221.4 272.25 221.55 272.3 221.7 272.25 221.75 272.15 221.9 272.05 221.9 271.9 221.85 271.8 221.75 271.65 221.6 271.5\nM 220.85 268.55\nQ 220.75 268.45 220.7 268.55 220.6 268.45 220.55 268.55\nL 220.45 268.6\nQ 220.4 268.75 220.45 268.75\nL 220.7 268.95\nQ 220.85 269.05 220.95 268.95 221 268.9 221 268.7 221 268.6 220.85 268.55\nM 216.25 271.15\nQ 216.15 271.05 216.1 271.05 216.1 271 215.9 270.9 215.85 270.9 215.75 270.9\nL 215.7 270.9\nQ 215.55 270.9 215.45 271.05 215.3 271.2 215.4 271.3 215.45 271.45 215.6 271.6 215.6 271.75 215.85 271.8 216 271.8 216.15 271.8 216.3 271.65 216.3 271.5\nL 216.4 271.5\nQ 216.4 271.45 216.4 271.3 216.3 271.2 216.25 271.15\nM 213.75 271.5\nQ 213.5 271.35 213.2 271.35 212.9 271.35 212.65 271.45 212.45 271.6 212.45 271.9 212.45 272.15 212.45 272.4 212.6 272.7 212.95 272.9 213.35 273.15 213.65 273.05 213.95 273.15 214.2 272.9 214.35 272.75 214.35 272.45 214.35 272.25 214.2 271.95 214.05 271.65 213.75 271.5\nM 217.45 268.6\nQ 217.3 268.55 217.05 268.45 216.85 268.4 216.7 268.55 216.45 268.55 216.4 268.75 216.3 268.95 216.4 269.2 216.45 269.5 216.7 269.55 216.85 269.8 217.05 269.85 217.3 269.95 217.6 269.8 217.8 269.7 217.8 269.5 217.9 269.25 217.8 269.05 217.75 268.75 217.45 268.6 Z" }),
                React.createElement("path", { fill: "#F47940", stroke: "none", d: "\nM 217.2 353.05\nQ 215.25 352.9 213.25 352.9 212.35 353 211.75 353.15 211.55 353.2 211.4 353.3 211.25 353.3 211.05 353.45 212.95 356.55 213.9 359.6\nL 213.95 359.7\nQ 214.1 360.05 214.1 360.3\nL 210.6 367.75 209.1 371 208.05 373.25\nQ 207.9 374 207.95 374.75 208.1 375.9 208.95 376.95 210 378.3 211.7 379.2 214.8 380 216.25 378.45 216.6 378.1 216.75 377.8 216.7 377.7 216.75 377.7 217 377.1 217.3 376.3 217.6 375.1 217.9 373.4 217.95 373.15 218.05 372.85 218.35 371.25 218.5 369.6 218.65 368.05 218.65 366.45 218.65 364.3 218.25 362.1\nL 218.35 362.1 220.3 362.8\nQ 221.75 361.05 222.2 358.9 221.7 357.1 221.45 356.2 221.4 355.7 221.4 355.45 221.25 355.15 221.1 354.95 220.75 354.35 220 353.8 219.85 353.8 219.7 353.75\nL 219.65 353.65\nQ 219.5 353.6 219.25 353.5 219.05 353.35 218.8 353.3 218.75 353.3 218.6 353.2 218.1 353.2 217.75 353.15 217.45 353.15 217.2 353.05\nM 219.8 357.85\nQ 219.95 357.7 220 357.6 220.1 357.55 220.3 357.6 220.45 357.7 220.6 357.75 221.1 358.05 221.15 358.6 221.15 358.95 221.1 359.45 220.95 359.75 220.85 360.2 220.7 360.75 220.45 360.95 220.3 361.25 220 361.55 219.65 361.8 219.35 361.7 219.2 361.7 218.8 361.5\nL 216.1 360.15\nQ 215.75 360 215.6 359.85 215.4 359.6 215.3 359.45 215.4 359.3 215.45 359.2 215.7 358.95 216 358.95 216.3 358.95 216.7 359.1 216.9 359.2 217.5 359.4 218.05 359.55 218.25 359.6 218.5 359.6 218.9 359.3 219.55 358.95 219.8 358.2 219.85 357.9 219.8 357.85\nM 215.75 363.35\nQ 216 363.2 216.15 363.35 216.25 363.4 216.25 363.55 216.1 364.45 215.55 366.4 215.45 366.75 215.4 367.15 215.1 368.4 214.95 369.2\nL 214.85 370.05\nQ 214.85 370.2 214.8 370.35 214.7 370.65 214.55 371.1 214.5 371.45 214.35 371.75 214.25 371.9 214.2 372 213.95 372.35 213.35 372.4\nL 213.2 372.4\nQ 213.1 372.4 213.1 372.15 213.2 371.75 213.35 371.45 213.4 371 213.55 370.55 213.8 369.35 213.9 368.35 213.95 367.75 214.05 367.35 214.05 367.05 214.05 366.9 214.25 366.15 214.4 365.6 214.8 364.1 215.75 363.35\nM 215.9 240.3\nL 215.9 240.4\nQ 217.45 241.9 218.65 243.35 218.25 241 218.05 239.3 217.8 237.8 217.65 237.1 217.35 235.7 217.3 235.35\nL 215.9 240.3\nM 215.9 240.4\nL 215.9 240.3 215 243.65 213.25 250 211.25 245 208.55 255.45 207.3 260.4 206.45 256.7 204.2 247.25 203.35 254.25 202.2 251.55 202.75 259.15 202.9 261.55 202.05 259.6 201.7 258.65\nQ 201.6 259.3 201.5 259.95 201.3 262.8 201.45 265.7 201.6 267.65 201.9 269.55 202.3 271.6 202.8 273.6\nL 202.75 273.65\nQ 202.8 273.8 202.8 273.9 202.9 273.9 202.9 273.95\nL 203.05 273.95 203.1 274.05\nQ 203.2 274.05 203.25 274.1\nL 205.85 275.5\nQ 206 275.5 206.05 275.6 206.2 275.65 206.45 275.8 206.55 275.8 206.6 275.8 207.9 276.4 209.25 276.7 210.6 277.1 211.85 277.25 212.229296875 277.2974609375 212.75 277.3\nL 213.4 277.3\nQ 215.25 277.3 217 276.95 217.6 276.8 218.25 276.55 218.35 276.55 218.5 276.5 219.05 276.35 219.55 276.1\nL 219.8 275.95\nQ 219.95 275.9 220.1 275.8 220.85 275.45 221.45 275 221.85 274.8 222.15 274.5 222.65 274.1 223.2 273.65 223.9 273 224.85 272.05 225.25 271.6 225.65 271.15\nL 225.85 269.7 225.95 263.85 225.65 261.25 225.3 258.4 221.85 260.8\nQ 221.7 261.15 221.4 261.25 221.25 261.3 220.75 261.75 220.45 262 220.3 261.7 220.3 261.55 220.25 261.1 220.15 260.95 220.1 260.65 219.85 259.9 219.85 259.6 219.8 259.2 219.8 257 219.8 255.8 219.8 255 219.7 254.1 219.7 253.55 219.7 252.8 219.55 251.35 219.5 250.65 219.4 250 218.95 246.2 218.65 243.35 217.45 241.9 215.9 240.4\nM 208.95 260.25\nQ 209.2 260.2 209.5 260.25 210.7 260.2 211.9 260.85 213.4 261.75 213.95 263.25 214.25 263.75 214.25 264.3\nL 214.2 265.35 214.1 265.5\nQ 214.05 265.7 213.95 265.9 213.35 267.1 211.85 267.35\nL 211.7 267.35 211 267.4\nQ 209.95 267.4 208.9 266.8 207.9 266.2 207.35 265.5\nL 206.75 264.45\nQ 206.55 263.9 206.55 263.4\nL 206.85 261.9 206.85 261.85\nQ 207.3 260.8 208.35 260.4\nL 208.55 260.35\nQ 208.7 260.35 208.95 260.25\nM 217.05 268.45\nQ 217.3 268.55 217.45 268.6 217.75 268.75 217.8 269.05 217.9 269.25 217.8 269.5 217.8 269.7 217.6 269.8 217.3 269.95 217.05 269.85 216.85 269.8 216.7 269.55 216.45 269.5 216.4 269.2 216.3 268.95 216.4 268.75 216.45 268.55 216.7 268.55 216.85 268.4 217.05 268.45\nM 213.2 271.35\nQ 213.5 271.35 213.75 271.5 214.05 271.65 214.2 271.95 214.35 272.25 214.35 272.45 214.35 272.75 214.2 272.9 213.95 273.15 213.65 273.05 213.35 273.15 212.95 272.9 212.6 272.7 212.45 272.4 212.45 272.15 212.45 271.9 212.45 271.6 212.65 271.45 212.9 271.35 213.2 271.35\nM 216.1 271.05\nQ 216.15 271.05 216.25 271.15 216.3 271.2 216.4 271.3 216.4 271.45 216.4 271.5\nL 216.3 271.5\nQ 216.3 271.65 216.15 271.8 216 271.8 215.85 271.8 215.6 271.75 215.6 271.6 215.45 271.45 215.4 271.3 215.3 271.2 215.45 271.05 215.55 270.9 215.7 270.9\nL 215.75 270.9\nQ 215.85 270.9 215.9 270.9 216.1 271 216.1 271.05\nM 220.7 268.55\nQ 220.75 268.45 220.85 268.55 221 268.6 221 268.7 221 268.9 220.95 268.95 220.85 269.05 220.7 268.95\nL 220.45 268.75\nQ 220.4 268.75 220.45 268.6\nL 220.55 268.55\nQ 220.6 268.45 220.7 268.55\nM 221.45 271.45\nQ 221.6 271.45 221.6 271.5 221.75 271.65 221.85 271.8 221.9 271.9 221.9 272.05 221.75 272.15 221.7 272.25 221.55 272.3 221.4 272.25 221.25 272.15 221.1 272.1 220.95 271.95 220.95 271.9 220.85 271.75 220.95 271.6 221.1 271.45 221.15 271.35 221.3 271.35 221.45 271.45 Z" }),
                React.createElement("path", { fill: "#FDB47C", stroke: "none", d: "\nM 220 357.6\nQ 219.95 357.7 219.8 357.85 219.85 357.9 219.8 358.2 219.55 358.95 218.9 359.3 218.5 359.6 218.25 359.6 218.05 359.55 217.5 359.4 216.9 359.2 216.7 359.1 216.3 358.95 216 358.95 215.7 358.95 215.45 359.2 215.4 359.3 215.3 359.45 215.4 359.6 215.6 359.85 215.75 360 216.1 360.15\nL 218.8 361.5\nQ 219.2 361.7 219.35 361.7 219.65 361.8 220 361.55 220.3 361.25 220.45 360.95 220.7 360.75 220.85 360.2 220.95 359.75 221.1 359.45 221.15 358.95 221.15 358.6 221.1 358.05 220.6 357.75 220.45 357.7 220.3 357.6 220.1 357.55 220 357.6 Z" }),
                React.createElement("path", { fill: "#EC6C41", stroke: "none", d: "\nM 225.25 370.65\nL 223.65 368.2 222.45 366.15\nQ 222.05 366.45 221.75 366.85 221.45 367.2 221.15 367.9 220.7 368.55 220.6 369 220.55 369.05 220.55 369.15 220.45 369.35 220.45 369.8 220.45 370.05 220.55 370.5 220.55 370.95 220.6 371.75 220.6 372.5 220.7 372.95 220.75 373.15 221 373.7 221 373.85 221.1 374 221.4 374.75 221.45 375.1 221.6 375.7 221.4 376.65 221.4 376.8 221.3 377.05 220.85 378.45 220.25 379.65 222.3 379.7 223.75 379.05 225.45 378.55 226.25 376.8\nL 226.25 376.75\nQ 226.3 375.75 226.3 374.9 226.25 372.65 225.25 370.65\nM 223.5 370.4\nQ 223.6 370.5 223.65 370.65\nL 224.65 375.05 224.65 375.35\nQ 224.7 375.35 224.55 375.6\nL 224.4 376.15\nQ 224.35 376.5 224.2 376.75 224.05 376.95 223.8 377.1 223.65 377.1 223.6 377.1 223.3 377.05 223.2 376.75 223.1 376.75 223.1 376.65 223.05 376.45 222.95 375.75 222.9 375.4 222.75 374.45 222.65 374.3 222.65 374.15 222.5 373.45 222.45 373 222.35 372.35 222.35 371.85 222.45 371.3 222.5 371 222.75 370.55 223.1 370.35 223.3 370.25 223.5 370.4 Z" }),
                React.createElement("path", { fill: "#EF5029", stroke: "none", d: "\nM 223.65 370.65\nQ 223.6 370.5 223.5 370.4 223.3 370.25 223.1 370.35 222.75 370.55 222.5 371 222.45 371.3 222.35 371.85 222.35 372.35 222.45 373 222.5 373.45 222.65 374.15 222.65 374.3 222.75 374.45 222.9 375.4 222.95 375.75 223.05 376.45 223.1 376.65 223.1 376.75 223.2 376.75 223.3 377.05 223.6 377.1 223.65 377.1 223.8 377.1 224.05 376.95 224.2 376.75 224.35 376.5 224.4 376.15\nL 224.55 375.6\nQ 224.7 375.35 224.65 375.35\nL 224.65 375.05 223.65 370.65 Z" }),
                React.createElement("path", { fill: "#FCFEFF", stroke: "none", d: "\nM 198.2 333.45\nL 198.2 333.5\nQ 198.7 331.7 198.95 330.8 198.7 330.95 198.55 331.05 197.95 331.65 198.1 332.85 198.1 333.05 198.2 333.45\nM 233.5 316\nQ 233.5 316.1 233.5 316.15\nL 233.9 318.3\nQ 233.45 318.6 233.05 318.85 233.45 319.35 233.75 320.55 234.05 321.65 233.95 322.2 234.05 323.4 233.75 324.05 233.2 325 232.65 326.3 233.2 326.75 233.3 326.95 233.3 327.15 233 328.8\nL 232.65 330.2\nQ 232.75 330.65 233.2 331.35 233.65 332 233.65 332.45 233.65 332.6 233.05 332.9 232.5 333.15 232.5 333.35 232.5 333.55 233 334.9 233.45 336.35 233.45 337.15 233.45 337.75 233.15 338.2 232.65 338.8 232.35 339 231.3 340.35 231.4 342.45 231.55 347.55 229.4 347.8 228.45 347.85 228.05 347.95 227.35 347.95 227.45 348.9 227.45 349.05 227.6 349.65 227.65 350.1 227.65 350.3\nL 227.65 350.45\nQ 227.75 351 226.45 351.3 226.45 351.35 226.4 351.3 225.85 351.45 225.45 351.45 225.45 351.5 225.4 351.5\nL 225.15 351.6\nQ 225.25 352.65 224.1 353.15\nL 223.05 353.45\nQ 222.5 353.45 221.9 353.15 222 353.45 222.05 353.75 222.15 353.9 222.15 353.95\nL 222.15 354.25\nQ 222.2 354.5 222.2 354.65\nL 222.3 358.65\nQ 222.2 358.8 222.2 358.9 221.75 361.05 220.3 362.8\nL 222.05 365.6\nQ 237.6 361.05 250.95 350.3 248.95 349.45 247.3 349 245.65 348.55 244.9 348.3 242.3 347.55 240.2 345.55 238.65 344.2 238.2 342.8 237.7 341.55 237.5 339.25 237.45 337.95 237.35 336.9 237.3 335.05 237.2 333.65 237 329.1 236.4 324.7 235.95 320.35 234.7 317.95 234.35 317.2 233.5 316\nM 195.6 281.55\nQ 195.15 281.65 194.8 282.45 194.5 282.8 194.8 283.55 195 284.15 195.55 284.7 195.45 284.75 194.1 284.6 192.75 284.45 191.8 285.25 191.2 285.85 191.15 286.75 191.2 287.7 192.15 288.75 190.55 288.75 190 288.75 189.45 288.85 188.8 289.45 188.35 289.9 188.35 290.85 188.25 291.8 187.5 292.5 186.5 291.8 185.6 292.95 184.7 294.15 185.4 295.4 185.15 295.9 184.15 296 183.05 296.2 182.65 296.6 182.05 297.1 182.2 297.85 182.5 298.6 183.35 299.65 182.4 299.5 181.75 299.65 181 299.95 180.15 300.7 179.25 301.5 179.55 302.45 179.75 303.6 181.65 304.9 180.6 305.3 180.75 306.85 180.9 309.1 180.75 309.45 180.1 309.4 179.4 309.55 178.95 309.75 178.7 310 177.65 310.95 177.8 312 177.8 313.2 179.25 315.1 178.2 315.25 177.1 315.7 176.15 316.1 175.7 316.55 174.85 317.3 174.85 319.2 174.85 321.45 176.6 322.25 174.55 322.85 175.05 324.8 175.15 324.95 175.6 326.15 175.9 326.9 175.75 327.15 174.75 329.1 175.15 330.5 175.4 331.85 176.65 332.9 175.15 334.7 175 335 175 335.2 175.2 335.5 175.45 335.65 176.45 336.5 176.75 336.75 177.55 337.3 178.35 337.9 178.55 338.1 176.8 339.1 177.9 340.65 177.95 340.8 178.95 342 179.6 342.95 179.9 343.45 180.1 343.9 179.85 344.65 179.7 345.05 179.75 345.5 179.85 345.85 180 346.25 180.55 346.75 181.75 347.7 182.95 348.6 183.5 349.05 182.4 349.65 182.35 350.6 182.25 351.35 183.05 352.05 183.55 352.55 185.4 353.2 187.05 353.95 187.2 354.1 186.95 355 187.2 355.45 187.35 355.7 188.1 356.35 188.4 356.65 191.2 358.2\nL 192.35 360.6\nQ 193.7 361.95 194.8 362.1 195.45 362.1 197.05 361.95 196.6 363.05 196.8 363.5 196.9 363.7 197.8 364.55 200.7 367.3 202.9 365.05 202.95 365.15 202.8 365.65 202.8 366.25 202.75 366.45 203.05 367.35 203.8 367.65 204.35 367.9 204.7 367.95 204.85 367.95 205 367.95 207.9 367.95 210.6 367.75\nL 214.1 360.3\nQ 214.1 360.05 213.95 359.7\nL 213.9 359.6\nQ 212.95 356.55 211.05 353.45 210.85 353.05 210.75 352.85\nL 210.7 352.8\nQ 210.55 352.7 210.55 352.55\nL 210.45 352.55\nQ 208.95 352.1 208.35 351.6 207.95 351.2 207.3 349.95 206.6 348.85 205.85 348.45 203.55 347.5 202.95 347.1 202.05 346.6 201.85 345.2 201.6 343.7 200.3 342.35 199.1 341 199.1 340.55 199.1 340.05 199.8 338.5 200.55 336.9 200.55 336.75 200.55 336.5 199.35 335.2 198.7 334.55 198.5 334.15 198.8 334.9 199.25 336.1 198.8 336.5 198.2 336.75 198.1 336.85 198.05 336.85 197.35 337.15 197.05 337.45 195.45 338.95 195.85 340.65 196 341.7 196.9 343.1 197.3 343.6 197.75 344.2 196.6 345.25 196.15 345.85 195.55 346.75 195.75 347.7 195.7 347.5 195.45 347.05 194.95 346.3 194.85 345.95 194.25 344.5 195.6 343.9 195.3 343.6 195.1 343.3 192.9 340.85 192.65 339.7 192.3 337.9 194.8 335.5 195.25 335.15 195.9 334.7 196.5 334.25 197 334.6 195.3 333.35 195.45 332.25 195.6 331.55 196.35 330.8 197.15 330.1 198.1 330.15 198.4 330.2 199.1 330.35\nL 199.15 329.8\nQ 199.25 329.55 198.7 328.35 198.1 327.25 198.1 326.75 198.1 326.2 198.95 324.65 199.7 323.15 199.7 322.7 199.7 322.55 198.05 320.2 196.45 317.5 196.3 316.1 196.35 316 197.2 314 197.8 311.9 197.2 311.45 196.8 311.15 196.6 310.75 196.3052734375 311.0939453125 196.3 311.5 196.2953125 311.2890625 196.15 310.95 195.9 310.35 195.9 310.05 195.75 309.25 196.5 308.95 196.6 308.65 196.75 308.25 195.55 305.95 195.55 305.05 195.7 303.9 197.65 302.75 197.5 302.55 197.45 302.4 196.3 300.3 196.2 299.7 196.2 299.4 196.75 297.05\nL 197.2 294.7\nQ 197.3 294.35 196.5 292.8 195.85 291.25 195.85 291.15 195.85 291.1 197.5 289.45 199.25 287.65 199.25 287.45 199.15 286.7 198.7 284.9 198.25 283.1 198.35 282.9 198.25 282.2 198.65 281.9 198.85 281.7 199.5 281.4 200.1 281.05 199.95 279.85 199.65 279.75 199.35 279.75 198.95 279.75 198.4 280.05 197.95 280.35 197.75 280.8 197.3 281.65 197.2 281.7 196.2 281.4 195.6 281.55\nM 201.05 350.75\nQ 201.3 350.75 201.5 350.75 200.9 351.75 201.15 352.7 201.05 352.4 200.85 352.05 200.3 351.3 200.25 350.9 200.15 350.6 200.1 350.45 200.45 350.7 201.05 350.75 Z" }),
                React.createElement("path", { fill: "#F2F2F2", stroke: "none", d: "\nM 196.35 330.8\nQ 195.6 331.55 195.45 332.25 195.3 333.35 197 334.6 196.5 334.25 195.9 334.7 195.25 335.15 194.8 335.5 192.3 337.9 192.65 339.7 192.9 340.85 195.1 343.3 195.3 343.6 195.6 343.9 194.25 344.5 194.85 345.95 194.95 346.3 195.45 347.05 195.7 347.5 195.75 347.7 195.55 346.75 196.15 345.85 196.6 345.25 197.75 344.2 197.3 343.6 196.9 343.1 196 341.7 195.85 340.65 195.45 338.95 197.05 337.45 197.35 337.15 198.05 336.85 198.1 336.85 198.2 336.75 198.8 336.5 199.25 336.1 198.8 334.9 198.5 334.15 198.2 333.7 198.2 333.5\nL 198.2 333.45\nQ 198.1 333.05 198.1 332.85 197.95 331.65 198.55 331.05 198.7 330.95 198.95 330.8 199 330.5 199.1 330.35 198.4 330.2 198.1 330.15 197.15 330.1 196.35 330.8\nM 196.3 311.5\nQ 196.3052734375 311.0939453125 196.6 310.75 196.45 310.35 196.35 310 196.3 309.55 196.5 308.95 195.75 309.25 195.9 310.05 195.9 310.35 196.15 310.95 196.2953125 311.2890625 196.3 311.5\nM 196.75 308.25\nQ 196.9 307.9 197.15 307.55 196.65 305.45 197 305.2 197.3 305.05 197.95 305.2 198.2 305.2 198.4 305.2 198.5 305 198.7 304.85 198.7 304.75 198.7 304.7 198.65 304.55 197.65 302.75 195.7 303.9 195.55 305.05 195.55 305.95 196.75 308.25\nM 221.4 259.35\nQ 222.6 257.15 222.5 253.85 221.6 254.25 220.75 254.6\nL 221.4 259.35\nM 201.9 269.55\nQ 201.6 267.65 201.45 265.7 194.55 270.9 188.2 277.85 168.65 298.95 165.65 322.95 163.95 336.9 168.5 347.05 171.75 354.35 178.2 359.6 183.1 363.65 188.95 365.85 197.15 367.8 204.7 367.95 204.35 367.9 203.8 367.65 203.05 367.35 202.75 366.45 202.8 366.25 202.8 365.65 202.95 365.15 202.9 365.05 200.7 367.3 197.8 364.55 196.9 363.7 196.8 363.5 196.6 363.05 197.05 361.95 195.45 362.1 194.8 362.1 193.7 361.95 192.35 360.6\nL 191.2 358.2\nQ 188.4 356.65 188.1 356.35 187.35 355.7 187.2 355.45 186.95 355 187.2 354.1 187.05 353.95 185.4 353.2 183.55 352.55 183.05 352.05 182.25 351.35 182.35 350.6 182.4 349.65 183.5 349.05 182.95 348.6 181.75 347.7 180.55 346.75 180 346.25 179.85 345.85 179.75 345.5 179.7 345.05 179.85 344.65 180.1 343.9 179.9 343.45 179.6 342.95 178.95 342 177.95 340.8 177.9 340.65 176.8 339.1 178.55 338.1 178.35 337.9 177.55 337.3 176.75 336.75 176.45 336.5 175.45 335.65 175.2 335.5 175 335.2 175 335 175.15 334.7 176.65 332.9 175.4 331.85 175.15 330.5 174.75 329.1 175.75 327.15 175.9 326.9 175.6 326.15 175.15 324.95 175.05 324.8 174.55 322.85 176.6 322.25 174.85 321.45 174.85 319.2 174.85 317.3 175.7 316.55 176.15 316.1 177.1 315.7 178.2 315.25 179.25 315.1 177.8 313.2 177.8 312 177.65 310.95 178.7 310 178.95 309.75 179.4 309.55 180.1 309.4 180.75 309.45 180.9 309.1 180.75 306.85 180.6 305.3 181.65 304.9 179.75 303.6 179.55 302.45 179.25 301.5 180.15 300.7 181 299.95 181.75 299.65 182.4 299.5 183.35 299.65 182.5 298.6 182.2 297.85 182.05 297.1 182.65 296.6 183.05 296.2 184.15 296 185.15 295.9 185.4 295.4 184.7 294.15 185.6 292.95 186.5 291.8 187.5 292.5 188.25 291.8 188.35 290.85 188.35 289.9 188.8 289.45 189.45 288.85 190 288.75 190.55 288.75 192.15 288.75 191.2 287.7 191.15 286.75 191.2 285.85 191.8 285.25 192.75 284.45 194.1 284.6 195.45 284.75 195.55 284.7 195 284.15 194.8 283.55 194.5 282.8 194.8 282.45 195.15 281.65 195.6 281.55 196.2 281.4 197.2 281.7 197.3 281.65 197.75 280.8 197.95 280.35 198.4 280.05 198.95 279.75 199.35 279.75 199.65 279.75 199.95 279.85 199.85 279.25 199.55 278.45\nL 199.55 276.1\nQ 200.15 276.4 200.55 275.1 200.9 273.6 201.6 273.6 202.15 273.6 202.75 273.65\nL 202.8 273.6\nQ 202.3 271.6 201.9 269.55\nM 208.9 266.8\nQ 209.95 267.4 211 267.4 209.95 267.35 208.9 266.75 207.95 266.2 207.35 265.5 207.9 266.2 208.9 266.8\nM 280.25 257.95\nQ 281.65 259.45 282.85 261.15 284.3 263.3 285.4 265.7 286.65 268 287.45 270.3 287.45 270.55 287.55 270.7 288.25 272.75 288.75 275\nL 288.85 275.35\nQ 288.9 276.1 289.15 276.95 290.05 278.15 291.05 279.6 293 282.3 293.7 283.35 295.2 285.4 296.25 287.15 296.95 288.25 297.95 289.95 297.85 289.35 297.8 288.85 297.4 286.55 296.7 284.15 296.65 283.95 296.65 283.8 296.55 283.65 296.55 283.5\nL 296.25 282.6\nQ 295.75 281.05 295.15 279.4 294.2 277 293 274.7 291.95 272.45 290.6 270.25 289.15 268.1 287.45 265.9 285.8 263.85 284 261.85 282.15 259.9 280.25 257.95\nM 267.75 257.3\nQ 268.2 257.45 268.75 257.65 268.85 257.65 269 257.75\nL 272.1 259.35\nQ 272.3 259.45 272.55 259.6\nL 274.75 261\nQ 276.95 262.5 279.95 266.05 279.8 265.6 279.5 265.25 278.3 263.55 276.95 261.85 275.8 260.7 275.7 260.65 275.7 260.55 275.65 260.55 275.25 260.1 274.9 259.65 273.75 258.65 272.6 257.75 271.7 256.9 270.85 256.25 270.7 256.25 270.65 256.25 255.65 245.3 232.45 250.8 227.35 252 222.5 253.85 222.6 257.15 221.4 259.35\nL 221.4 259.45 221.55 261 221.85 260.8 225.3 258.4 225.65 261.25\nQ 228.8 259.9 233 258.8 241.85 256.4 248.45 256.15 254.45 255.9 256.3 255.75 258.95 255.45 261.55 255.75\nL 266 256.7\nQ 266.95 256.9 267.75 257.3 Z" }),
                React.createElement("path", { fill: "#FDB57D", stroke: "none", d: "\nM 209.25 276.7\nQ 209.95 277.1 210.4 277.25 211 277.4 211.9 277.4 212.321875 277.30625 212.75 277.3 212.229296875 277.2974609375 211.85 277.25 210.6 277.1 209.25 276.7\nM 225.45 272.1\nL 225.65 271.15\nQ 225.25 271.6 224.85 272.05 223.9 273 223.2 273.65 222.65 274.1 222.15 274.5 221.85 274.8 221.45 275 220.85 275.45 220.1 275.8 220.1 275.9 220.3 275.9 221.25 276.2 221.85 275.95 222.2 275.8 222.35 275.5 222.6 275.25 222.5 274.85 222.45 274.8 222.35 274.55\nL 222.35 274.4\nQ 222.6 274.1 222.95 273.9 223.1 273.8 223.5 273.6 224.05 273.35 224.2 273 224.35 272.85 224.55 272.55 224.8 272.15 225.1 272.1 225.25 272.05 225.45 272.1\nM 204.5 278.55\nQ 204.55 278.65 204.65 278.65 204.55 278.55 204.4 278.5 204.4 278.55 204.5 278.55\nM 204.8 278.7\nQ 204.95 278.8 205.1 278.8 204.95 278.7 204.85 278.7\nL 204.8 278.7\nM 204.8 276.2\nQ 204.85 276.2 205 276.25 205.15 276.25 205.4 276.35\nL 205.45 276.25\nQ 205.15 276.2 205.1 276.2\nL 204.85 276.1 204.8 276.2 Z" }),
                React.createElement("path", { fill: "#FFFFFF", stroke: "none", d: "\nM 202.9 261.55\nL 202.75 259.15\nQ 202.35 259.35 202.05 259.6\nL 202.9 261.55\nM 208.55 255.45\nQ 207.5 256 206.45 256.7\nL 207.3 260.4 208.55 255.45\nM 222.45 253.25\nQ 222.3 251.2 221.6 249.2 220.85 249.4 220.15 249.7\nL 220.75 254.6\nQ 221.6 254.25 222.5 253.85 222.45 253.55 222.45 253.25\nM 201.45 265.7\nQ 201.3 262.8 201.5 259.95 196.65 263.45 192.05 267.7 188.55 270.9 185.25 274.5 164.45 296.95 161.5 322.65 159.9 336.9 164.4 347.65 167.95 356 175.2 362.1 180.45 366.45 186.75 368.8 188.2 369.05 189.55 369.3 190.85 369.5 192.3 369.75 193.55 370.05 194.85 370.2 196.15 370.35 197.45 370.5 199.4 370.8 201.3 370.85 202.5 370.95 203.7 370.95 203.8 371 203.85 371\nL 205.15 371.1\nQ 206.2 371.1 207.35 371 208.25 371 209.1 371\nL 210.6 367.75\nQ 207.9 367.95 205 367.95 204.85 367.95 204.7 367.95 197.15 367.8 188.95 365.85 183.1 363.65 178.2 359.6 171.75 354.35 168.5 347.05 163.95 336.9 165.65 322.95 168.65 298.95 188.2 277.85 194.55 270.9 201.45 265.7\nM 209.5 260.25\nQ 209.2 260.2 208.95 260.25 208.7 260.35 208.55 260.35\nL 208.35 260.4\nQ 207.3 260.8 206.85 261.85\nL 206.85 261.9 206.55 263.4\nQ 206.55 263.9 206.75 264.45\nL 207.35 265.5\nQ 207.95 266.2 208.9 266.75 209.95 267.35 211 267.4\nL 211.7 267.35 211.85 267.35\nQ 213.35 267.1 213.95 265.9 214.05 265.7 214.1 265.5\nL 214.2 265.35 214.25 264.3\nQ 214.25 263.75 213.95 263.25 213.4 261.75 211.9 260.85 210.7 260.2 209.5 260.25\nM 209.85 265.05\nQ 209.8 264.65 209.85 264.35 210 264.05 210.4 264 210.75 263.9 211.15 264.15 211.55 264.3 211.7 264.75 211.85 265.05 211.75 265.35 211.55 265.6 211.25 265.7 210.85 265.75 210.45 265.6 210.1 265.4 209.85 265.05\nM 278 255.6\nQ 276.85 254.45 275.55 253.5 274.65 252.7 273.6 251.95 273.55 251.95 273.45 251.85 257.4 240.1 232.5 245.85 226.9 247.1 221.6 249.2 222.3 251.2 222.45 253.25 222.45 253.55 222.5 253.85 227.35 252 232.45 250.8 255.65 245.3 270.65 256.25 270.7 256.25 270.85 256.25 271.7 256.9 272.6 257.75 273.75 258.65 274.9 259.65 275.25 260.1 275.65 260.55 275.7 260.55 275.7 260.65 275.8 260.7 276.95 261.85 278.3 263.55 279.5 265.25 279.8 265.6 279.95 266.05 280.05 266.05 280.95 267.85 281.95 269.7 282.9 272.85\nL 284.85 281.1\nQ 284.9 281.2 284.9 281.25 284.9 281.3 284.9 281.35\nL 284.95 281.5\nQ 285.25 282.3 285.4 283.4 285.8 288.6 285.1 294.45 284.05 303 280.95 311.1 280.8 311.4 280.75 311.75 277.4 320.05 271.85 328.05 271.8 328.15 271.85 328.15\nL 271.4 328.75\nQ 270.65 329.85 269.8 330.95 266.55 335.2 262.6 339.55 257 345.55 250.95 350.3 237.6 361.05 222.05 365.6\nL 222.45 366.15 223.65 368.2\nQ 223.95 368.05 224.25 367.95 226.4 367.3 228.5 366.4 230.7 365.6 232.85 364.7 234.85 363.8 237 362.75 238.05 362.25 239.1 361.7 240.2 361.1 241.15 360.6 242.15 360.05 243.2 359.4 244.2 358.8 245.1 358.2 247 356.95 248.9 355.75 250.65 354.4 252.45 353.15 254.2 351.8 255.85 350.4 257.55 348.9 259.2 347.4 260.8 345.95 262.3 344.35 263.9 342.75 265.4 341.15 266.95 339.55 268.35 337.9 269.05 337.05 269.8 336.2 271.1 334.4 272.55 332.7 273.45 331.35 274.45 330 274.65 329.55 274.95 329.1 276.25 327.3 277.4 325.4 278.55 323.55 279.6 321.65 280.65 319.8 281.65 317.8 282.6 315.85 283.45 313.85 284.35 311.85 285.1 309.75 285.9 307.75 286.5 305.5 287.15 303.45 287.7 301.25 288.3 299.2 288.7 297.05 289 294.8 289.2 292.55 289.45 290.25 289.6 287.95 289.65 285.65 289.65 283.25 289.6 281.5 289.45 279.7 289.3 278.35 289.15 276.95 288.9 276.1 288.85 275.35\nL 288.75 275\nQ 288.25 272.75 287.55 270.7 287.45 270.55 287.45 270.3 286.65 268 285.4 265.7 284.3 263.3 282.85 261.15 281.65 259.45 280.25 257.95 280.2 257.9 280.1 257.8\nL 279.15 256.75\nQ 279.05 256.7 279 256.6 278.9 256.55 278.85 256.55 278.45 256.1 278 255.6 Z" }),
                React.createElement("path", { fill: "#E1CEBD", stroke: "none", d: "\nM 201.5 350.75\nQ 201.3 350.75 201.05 350.75 200.45 350.7 200.1 350.45 200.15 350.6 200.25 350.9 200.3 351.3 200.85 352.05 201.05 352.4 201.15 352.7 200.9 351.75 201.5 350.75 Z" }),
                React.createElement("path", { fill: "#EFA348", stroke: "none", d: "\nM 201.6 273.6\nQ 200.9 273.6 200.55 275.1 200.15 276.4 199.55 276.1\nL 199.55 278.45\nQ 199.85 279.25 199.95 279.85 200.1 281.05 199.5 281.4 198.85 281.7 198.65 281.9 198.25 282.2 198.35 282.9 198.25 283.1 198.7 284.9 199.15 286.7 199.25 287.45 199.25 287.65 197.5 289.45 195.85 291.1 195.85 291.15 195.85 291.25 196.5 292.8 197.3 294.35 197.2 294.7\nL 196.75 297.05\nQ 196.2 299.4 196.2 299.7 196.3 300.3 197.45 302.4 197.5 302.55 197.65 302.75 198.65 304.55 198.7 304.7 198.7 304.75 198.7 304.85 198.5 305 198.4 305.2 198.2 305.2 197.95 305.2 197.3 305.05 197 305.2 196.65 305.45 197.15 307.55 196.9 307.9 196.75 308.25 196.6 308.65 196.5 308.95 196.3 309.55 196.35 310 196.45 310.35 196.6 310.75 196.8 311.15 197.2 311.45 197.8 311.9 197.2 314 196.35 316 196.3 316.1 196.45 317.5 198.05 320.2 199.7 322.55 199.7 322.7 199.7 323.15 198.95 324.65 198.1 326.2 198.1 326.75 198.1 327.25 198.7 328.35 199.25 329.55 199.15 329.8\nL 199.1 330.35\nQ 199 330.5 198.95 330.8 198.7 331.7 198.2 333.5 198.2 333.7 198.5 334.15 198.7 334.55 199.35 335.2 200.55 336.5 200.55 336.75 200.55 336.9 199.8 338.5 199.1 340.05 199.1 340.55 199.1 341 200.3 342.35 201.6 343.7 201.85 345.2 202.05 346.6 202.95 347.1 203.55 347.5 205.85 348.45 206.6 348.85 207.3 349.95 207.95 351.2 208.35 351.6 208.95 352.1 210.45 352.55\nL 210.55 352.55\nQ 210.55 352.7 210.7 352.8\nL 210.75 352.85 210.75 352.8\nQ 211 352.8 211.4 352.5 211.75 352.1 212.15 351.95 212.6 351.8 213.05 351.65 213.35 351.75 213.8 351.75 214.4 351.8 214.85 351.8 215.15 351.75 215.85 351.65 216.55 351.6 217.3 351.75\nL 218.05 351.9\nQ 218.45 351.95 218.75 352.05\nL 218.8 352.05\nQ 219.35 352.1 219.55 352.05 219.8 351.95 219.95 352.05 219.95 351.95 220.15 352.2 220.25 352.2 220.3 352.25 220.45 352.35 220.7 352.25 220.95 352.2 220.95 352.05 221 352.1 221.9 353\nL 221.9 353.15\nQ 222.5 353.45 223.05 353.45\nL 224.1 353.15\nQ 225.25 352.65 225.15 351.6\nL 225.4 351.5\nQ 225.45 351.5 225.45 351.45 225.85 351.45 226.4 351.3 226.45 351.35 226.45 351.3 227.75 351 227.65 350.45\nL 227.65 350.3\nQ 227.65 350.1 227.6 349.65 227.45 349.05 227.45 348.9 227.35 347.95 228.05 347.95 228.45 347.85 229.4 347.8 231.55 347.55 231.4 342.45 231.3 340.35 232.35 339 232.65 338.8 233.15 338.2 233.45 337.75 233.45 337.15 233.45 336.35 233 334.9 232.5 333.55 232.5 333.35 232.5 333.15 233.05 332.9 233.65 332.6 233.65 332.45 233.65 332 233.2 331.35 232.75 330.65 232.65 330.2\nL 233 328.8\nQ 233.3 327.15 233.3 326.95 233.2 326.75 232.65 326.3 233.2 325 233.75 324.05 234.05 323.4 233.95 322.2 234.05 321.65 233.75 320.55 233.45 319.35 233.05 318.85 233.45 318.6 233.9 318.3\nL 233.5 316.15\nQ 233.5 316.1 233.5 316 233.35 314.45 233.3 314.05 233.3 314 233.5 313.5 233.6 313.05 233.8 312.75 234.35 312.15 234.25 311.75 234.25 310.45 233.2 307.75 232.15 305.15 232.15 304.05 232.15 303.6 233 301.25 233 300.6 232.6 300.1 232.3 299.65 231.6 299.25 231.6 298.75 232 298.15 232.45 297.55 232.45 297.1 232.35 296.8 231.75 294.7 231.1 292.7 231.15 292.55 231.1 292.4 231.85 291.15 232.45 289.95 232.45 289.8 228.35 284.15 228.45 284.1\nL 228.65 282.9\nQ 228.95 281.65 228.9 281.5 228.9 280.9 227.9 280.05 226.75 279.15 226.4 278.2 225.85 276.7 225 276.1 224.95 276.05 225.15 274.1 225.3 273.15 225.45 272.1 225.25 272.05 225.1 272.1 224.8 272.15 224.55 272.55 224.35 272.85 224.2 273 224.05 273.35 223.5 273.6 223.1 273.8 222.95 273.9 222.6 274.1 222.35 274.4\nL 222.35 274.55\nQ 222.45 274.8 222.5 274.85 222.6 275.25 222.35 275.5 222.2 275.8 221.85 275.95 221.25 276.2 220.3 275.9 220.1 275.9 220.1 275.8 219.95 275.9 219.8 275.95\nL 219.55 276.1\nQ 219.05 276.35 218.5 276.5 218.35 276.55 218.25 276.55 217.6 276.8 217 276.95 215.25 277.3 213.4 277.3\nL 212.75 277.3\nQ 212.321875 277.30625 211.9 277.4 211 277.4 210.4 277.25 209.95 277.1 209.25 276.7 207.9 276.4 206.6 275.8 206.55 275.8 206.45 275.8 206.2 275.65 206.05 275.6 206 275.5 205.85 275.5\nL 203.25 274.1\nQ 203.2 274.05 203.1 274.05\nL 203.05 273.95 202.9 273.95\nQ 202.9 273.9 202.8 273.9 202.8 273.8 202.75 273.65 202.15 273.6 201.6 273.6\nM 201.85 295.45\nQ 201.7 294.85 201.75 294 201.85 293.6 202 293.55 202.05 293.55 202.3 293.55 202.35 293.45 202.5 293.4 202.65 293.3 202.6 293 202.6 292.8 202.5 292.4 202.5 292.2 202.75 291.9 202.95 291.75 203.25 291.65 203.8 291.5 204.55 291.8 204.85 291.9 204.85 292.05 204.95 292.1 204.85 292.25 204.7 292.5 204.55 292.55 204.55 292.65 204.65 293.15 204.7 293.55 204.65 293.75 204.5 293.85 204.25 294 203.95 294.15 203.8 294.2 203.65 294.35 203.65 294.7 203.7 295.7 203.85 296.05 204.2 296.8 204.8 297.2 205.1 297.5 205.15 297.55 205.15 297.7 205.1 297.8 205 298 204.85 298 204.35 298.05 204.2 298.15 204.2 300 204.4 301.05 204.55 301.7 204.85 302.15 205.1 302.4 205.45 302.75 205.55 302.85 206.15 303.2 206.3 303.35 206.3 303.5 206.35 303.6 206.2 303.65 205.7 304.25 205.7 305.2 205.85 306.2 206.45 306.95 206.7 307.1 206.6 307.15 206.6 307.3 206.35 307.25 205.3 307.4 204.7 306.85 204.4 306.65 204.1 306.05 203.8 305.35 203.7 304.7 203.65 304.05 204.1 303.65 204.25 303.45 204.25 303.3 204.2 303.05 203.8 302.85 202.8 302.25 202.5 301 202.35 300.55 202.3 300\nL 202.3 299.95\nQ 202.3 299.7 202.3 299.1 202.2 298.95 202.2 298.9\nL 202.3 298.15\nQ 202.2 297.8 202.35 297.65\nL 202.75 297.55\nQ 202.95 297.4 203.05 297.35 203.05 297.2 202.6 296.9 202 296.3 201.85 295.45\nM 213.5 282.9\nQ 213.75 283.05 213.65 283.2 213.65 283.35 213.5 283.35 213.25 283.4 213.2 283.4 212.8 283.55 212.8 283.85 212.75 284.25 212.8 284.7 212.9 284.9 212.95 285 212.95 285.1 212.95 285.25 212.95 285.5 212.75 285.55 212.45 285.7 212.3 285.8 211.7 286.1 211.4 286.7 211.15 287.3 211.45 287.95 211.6 288.45 212.05 289.15 212.3 289.3 212.45 289.45 212.6 289.65 213.05 289.75 213.25 289.8 213.75 289.95 213.95 290.05 214.1 290.2 214.25 290.25 214.25 290.55 214.25 291.15 214.35 291.25 214.25 291.5 214.5 291.8 214.7 292.2 215.25 292.4 215.55 292.55 216.15 292.95 216.45 293 216.45 293.15 216.45 293.3 216.15 293.4 214.85 293.4 213.5 292.55 212.9 292.1 212.5 291.65 212.05 290.95 212.2 290.2 211.4 290.05 210.7 289.45 210 288.9 209.65 288.1 209.4 287.65 209.35 287.3 209.35 287.05 209.4 286.55 209.55 286 209.8 285.7 210 285.35 210.7 285.1 211 284.9 210.9 284.9 211 284.75 210.9 284.55 210.7 284.15 210.75 283.55 210.9 283.2 211.3 282.8 211.55 282.6 211.7 282.6 212.15 282.35 213.1 282.65 213.4 282.8 213.5 282.9\nM 205 276.25\nQ 204.85 276.2 204.8 276.2\nL 204.85 276.1 205.1 276.2\nQ 205.15 276.2 205.45 276.25\nL 205.4 276.35\nQ 205.15 276.25 205 276.25\nM 205.1 278.8\nQ 204.95 278.8 204.8 278.7\nL 204.85 278.7\nQ 204.95 278.7 205.1 278.8\nM 204.65 278.65\nQ 204.55 278.65 204.5 278.55 204.4 278.55 204.4 278.5 204.55 278.55 204.65 278.65\nM 214.8 299.35\nQ 215 299.5 215 299.65 215 299.85 214.7 299.8\nL 214.35 299.85\nQ 214.2 300.45 214.55 301.2 214.8 301.7 214.65 301.85 214.55 301.85 214.25 302 214.2 302 214.1 302.1 214.35 302.1 214.55 302.15 214.8 302.25 214.8 302.4 214.85 302.45 214.7 302.6 214.4 302.9 214.4 303.5 214.4 303.95 214.55 304.6 214.7 305.3 214.95 305.5\nL 215.15 305.9\nQ 215.15 305.95 215.1 306.05 215.25 306.1 215.4 306.25 215.55 306.35 215.55 306.4 215.6 306.55 215.4 306.7 215.1 306.85 215.1 307.4\nL 215.1 307.45\nQ 214.95 308.1 215.25 308.7 215.3 308.85 215.4 308.95 215.7 309.55 216.3 309.85 216.45 309.9 216.55 309.9 216.55 310.15 216.3 310.15 215.75 310.3 215.3 310.15 214.7 310.05 214.25 309.7 213.8 309.4 213.55 308.95 213.2 308.5 213.1 307.95 212.95 307.75 213.05 307.3 213.05 306.7 213.2 306.35 213.35 306.25 213.25 306.1 213.35 306.1 213.1 305.9 211.7 305 211.3 304.1 211 303.35 211.15 302.75 211.3 302.15 211.75 301.7 212.2 301.35 212.65 301.35 212.3 300.55 212.3 299.65 212.35 299.5 212.35 299.35 212.5 299.05 213.1 298.95 213.8 298.95 214.5 299.1 214.7 299.2 214.8 299.35\nM 208.1 320.85\nQ 208.35 320.4 209.05 320.35 209.65 320.25 210.15 320.6 210.45 320.75 210.45 320.9 210.4 321 210.3 321.05 209.8 321.45 209.95 322.8 210 323.9 210.6 324.1 210.9 324.25 211 324.35\nL 211.05 324.4\nQ 211.15 324.5 211.25 324.4 211.55 324.55 211.6 324.7 211.7 324.8 211.6 325 211.15 326 211.05 327\nL 211.15 328.35\nQ 211.25 328.6 211.25 328.65 211.25 328.75 211.45 329.2 211.55 329.5 211.85 330.15 212 330.75 212.2 330.95 212.35 331.2 212.6 331.5 212.95 331.85 213.05 332 213.2 332.15 213.1 332.3 213.05 332.4 212.8 332.45 212.65 332.45 212.6 332.4 212.65 332.55 212.75 332.6 212.8 332.85 212.6 333.2 212.15 333.7 212.2 334.25 212.35 335 213.8 335.75 214.25 335.95 214.2 336.2 214.2 336.35 213.9 336.35 213.05 336.4 212.2 335.95 211.55 335.6 210.75 334.9 210.45 334.55 210.3 334.3 210.15 333.85 210.3 333.45 210.4 333.15 210.6 332.6 210.6 332.45 210.6 332.4 210.55 332.25 210.25 332.15 209.5 331.7 208.65 330.5 207.3 328.8 207.15 327.55 206.9 325.85 208.55 324.5 208.9 324.35 208.8 324.1\nL 208.55 323.9\nQ 208.2 323.7 208.05 323.1 207.9 322.7 207.95 322.1 207.9 321.2 208.1 320.85\nM 206.45 340.05\nQ 207 340.05 207.5 340.2 207.8 340.35 207.95 340.55 207.95 340.65 207.95 340.8\nL 208.05 342.8\nQ 208.1 343.1 208.25 343.3 208.35 343.4 208.65 343.55 209.05 343.6 209.1 343.75 209.2 343.9 209.1 344.15 208.95 344.5 209.2 345.05 209.4 345.5 209.8 345.7 209.95 345.85 210.25 346 210.6 346.15 210.6 346.35\nL 210.55 346.65\nQ 210.55 346.8 210.6 347.2 210.7 347.95 211.25 348.3 211.3 348.45 211.55 348.55 211.75 348.7 211.7 348.85 211.7 349.05 211.25 349 210.7 349.05 210.4 348.9 209.95 348.85 209.25 348.15 208.95 347.85 208.9 347.65 208.5 347.2 208.55 346.1 207.9 345.8 207.45 345.1 207 344.35 207 343.7 206.55 343.4 206.3 343.1 206.05 342.9 206.05 342.3\nL 206.05 340.5\nQ 206.05 340.25 206.05 340.2 206.15 340.1 206.45 340.05 Z" }),
                React.createElement("path", { fill: "#FFB765", stroke: "none", d: "\nM 207.5 340.2\nQ 207 340.05 206.45 340.05 206.15 340.1 206.05 340.2 206.05 340.25 206.05 340.5\nL 206.05 342.3\nQ 206.05 342.9 206.3 343.1 206.55 343.4 207 343.7 207 344.35 207.45 345.1 207.9 345.8 208.55 346.1 208.5 347.2 208.9 347.65 208.95 347.85 209.25 348.15 209.95 348.85 210.4 348.9 210.7 349.05 211.25 349 211.7 349.05 211.7 348.85 211.75 348.7 211.55 348.55 211.3 348.45 211.25 348.3 210.7 347.95 210.6 347.2 210.55 346.8 210.55 346.65\nL 210.6 346.35\nQ 210.6 346.15 210.25 346 209.95 345.85 209.8 345.7 209.4 345.5 209.2 345.05 208.95 344.5 209.1 344.15 209.2 343.9 209.1 343.75 209.05 343.6 208.65 343.55 208.35 343.4 208.25 343.3 208.1 343.1 208.05 342.8\nL 207.95 340.8\nQ 207.95 340.65 207.95 340.55 207.8 340.35 207.5 340.2\nM 209.05 320.35\nQ 208.35 320.4 208.1 320.85 207.9 321.2 207.95 322.1 207.9 322.7 208.05 323.1 208.2 323.7 208.55 323.9\nL 208.8 324.1\nQ 208.9 324.35 208.55 324.5 206.9 325.85 207.15 327.55 207.3 328.8 208.65 330.5 209.5 331.7 210.25 332.15 210.55 332.25 210.6 332.4 210.6 332.45 210.6 332.6 210.4 333.15 210.3 333.45 210.15 333.85 210.3 334.3 210.45 334.55 210.75 334.9 211.55 335.6 212.2 335.95 213.05 336.4 213.9 336.35 214.2 336.35 214.2 336.2 214.25 335.95 213.8 335.75 212.35 335 212.2 334.25 212.15 333.7 212.6 333.2 212.8 332.85 212.75 332.6 212.65 332.55 212.6 332.4 212.65 332.45 212.8 332.45 213.05 332.4 213.1 332.3 213.2 332.15 213.05 332 212.95 331.85 212.6 331.5 212.35 331.2 212.2 330.95 212 330.75 211.85 330.15 211.55 329.5 211.45 329.2 211.25 328.75 211.25 328.65 211.25 328.6 211.15 328.35\nL 211.05 327\nQ 211.15 326 211.6 325 211.7 324.8 211.6 324.7 211.55 324.55 211.25 324.4 211.15 324.5 211.05 324.4\nL 211 324.35\nQ 210.9 324.25 210.6 324.1 210 323.9 209.95 322.8 209.8 321.45 210.3 321.05 210.4 321 210.45 320.9 210.45 320.75 210.15 320.6 209.65 320.25 209.05 320.35\nM 215 299.65\nQ 215 299.5 214.8 299.35 214.7 299.2 214.5 299.1 213.8 298.95 213.1 298.95 212.5 299.05 212.35 299.35 212.35 299.5 212.3 299.65 212.3 300.55 212.65 301.35 212.2 301.35 211.75 301.7 211.3 302.15 211.15 302.75 211 303.35 211.3 304.1 211.7 305 213.1 305.9 213.35 306.1 213.25 306.1 213.35 306.25 213.2 306.35 213.05 306.7 213.05 307.3 212.95 307.75 213.1 307.95 213.2 308.5 213.55 308.95 213.8 309.4 214.25 309.7 214.7 310.05 215.3 310.15 215.75 310.3 216.3 310.15 216.55 310.15 216.55 309.9 216.45 309.9 216.3 309.85 215.7 309.55 215.4 308.95 215.3 308.85 215.25 308.7 214.95 308.1 215.1 307.45\nL 215.1 307.4\nQ 215.1 306.85 215.4 306.7 215.6 306.55 215.55 306.4 215.55 306.35 215.4 306.25 215.25 306.1 215.1 306.05 215.15 305.95 215.15 305.9\nL 214.95 305.5\nQ 214.7 305.3 214.55 304.6 214.4 303.95 214.4 303.5 214.4 302.9 214.7 302.6 214.85 302.45 214.8 302.4 214.8 302.25 214.55 302.15 214.35 302.1 214.1 302.1 214.2 302 214.25 302 214.55 301.85 214.65 301.85 214.8 301.7 214.55 301.2 214.2 300.45 214.35 299.85\nL 214.7 299.8\nQ 215 299.85 215 299.65\nM 213.65 283.2\nQ 213.75 283.05 213.5 282.9 213.4 282.8 213.1 282.65 212.15 282.35 211.7 282.6 211.55 282.6 211.3 282.8 210.9 283.2 210.75 283.55 210.7 284.15 210.9 284.55 211 284.75 210.9 284.9 211 284.9 210.7 285.1 210 285.35 209.8 285.7 209.55 286 209.4 286.55 209.35 287.05 209.35 287.3 209.4 287.65 209.65 288.1 210 288.9 210.7 289.45 211.4 290.05 212.2 290.2 212.05 290.95 212.5 291.65 212.9 292.1 213.5 292.55 214.85 293.4 216.15 293.4 216.45 293.3 216.45 293.15 216.45 293 216.15 292.95 215.55 292.55 215.25 292.4 214.7 292.2 214.5 291.8 214.25 291.5 214.35 291.25 214.25 291.15 214.25 290.55 214.25 290.25 214.1 290.2 213.95 290.05 213.75 289.95 213.25 289.8 213.05 289.75 212.6 289.65 212.45 289.45 212.3 289.3 212.05 289.15 211.6 288.45 211.45 287.95 211.15 287.3 211.4 286.7 211.7 286.1 212.3 285.8 212.45 285.7 212.75 285.55 212.95 285.5 212.95 285.25 212.95 285.1 212.95 285 212.9 284.9 212.8 284.7 212.75 284.25 212.8 283.85 212.8 283.55 213.2 283.4 213.25 283.4 213.5 283.35 213.65 283.35 213.65 283.2\nM 201.75 294\nQ 201.7 294.85 201.85 295.45 202 296.3 202.6 296.9 203.05 297.2 203.05 297.35 202.95 297.4 202.75 297.55\nL 202.35 297.65\nQ 202.2 297.8 202.3 298.15\nL 202.2 298.9\nQ 202.2 298.95 202.3 299.1 202.3 299.7 202.3 299.95\nL 202.3 300\nQ 202.35 300.55 202.5 301 202.8 302.25 203.8 302.85 204.2 303.05 204.25 303.3 204.25 303.45 204.1 303.65 203.65 304.05 203.7 304.7 203.8 305.35 204.1 306.05 204.4 306.65 204.7 306.85 205.3 307.4 206.35 307.25 206.6 307.3 206.6 307.15 206.7 307.1 206.45 306.95 205.85 306.2 205.7 305.2 205.7 304.25 206.2 303.65 206.35 303.6 206.3 303.5 206.3 303.35 206.15 303.2 205.55 302.85 205.45 302.75 205.1 302.4 204.85 302.15 204.55 301.7 204.4 301.05 204.2 300 204.2 298.15 204.35 298.05 204.85 298 205 298 205.1 297.8 205.15 297.7 205.15 297.55 205.1 297.5 204.8 297.2 204.2 296.8 203.85 296.05 203.7 295.7 203.65 294.7 203.65 294.35 203.8 294.2 203.95 294.15 204.25 294 204.5 293.85 204.65 293.75 204.7 293.55 204.65 293.15 204.55 292.65 204.55 292.55 204.7 292.5 204.85 292.25 204.95 292.1 204.85 292.05 204.85 291.9 204.55 291.8 203.8 291.5 203.25 291.65 202.95 291.75 202.75 291.9 202.5 292.2 202.5 292.4 202.6 292.8 202.6 293 202.65 293.3 202.5 293.4 202.35 293.45 202.3 293.55 202.05 293.55 202 293.55 201.85 293.6 201.75 294 Z" }),
                React.createElement("path", { fill: "#403242", stroke: "none", d: "\nM 209.85 264.35\nQ 209.8 264.65 209.85 265.05 210.1 265.4 210.45 265.6 210.85 265.75 211.25 265.7 211.55 265.6 211.75 265.35 211.85 265.05 211.7 264.75 211.55 264.3 211.15 264.15 210.75 263.9 210.4 264 210 264.05 209.85 264.35 Z" }),
                React.createElement("path", { fill: "#E8E8E8", stroke: "none", d: "\nM 289.45 279.7\nQ 289.6 281.5 289.65 283.25 289.65 285.65 289.6 287.95 289.45 290.25 289.2 292.55 289 294.8 288.7 297.05 288.3 299.2 287.7 301.25 287.15 303.45 286.5 305.5 285.9 307.75 285.1 309.75 284.35 311.85 283.45 313.85 282.6 315.85 281.65 317.8 280.65 319.8 279.6 321.65 278.55 323.55 277.4 325.4 276.25 327.3 274.95 329.1 274.65 329.55 274.45 330 273.45 331.35 272.55 332.7 271.1 334.4 269.8 336.2 269.05 337.05 268.35 337.9 266.95 339.55 265.4 341.15 263.9 342.75 262.3 344.35 260.8 345.95 259.2 347.4 257.55 348.9 255.85 350.4 254.2 351.8 252.45 353.15 250.65 354.4 248.9 355.75 247 356.95 245.1 358.2 244.2 358.8 243.2 359.4 242.15 360.05 241.15 360.6 240.2 361.1 239.1 361.7 238.05 362.25 237 362.75 234.85 363.8 232.85 364.7 230.7 365.6 228.5 366.4 226.4 367.3 224.25 367.95 223.95 368.05 223.65 368.2\nL 225.25 370.65\nQ 226.25 372.65 226.3 374.9 228 375.2 229.4 375.25 229.95 375.25 231.45 375.25 232.85 375.4 233.6 375.4 233.95 375.45 234.5 375.55 235.35 375.4 236 375.25 238.3 374.6 240.5 373.85 242.7 373 244.8 372.2 247 371.15 249.1 370.2 250.1 369.65 251.15 369.2 252.1 368.55 253.15 368.05 254.1 367.45 255.1 366.85 257 365.6 258.95 364.4 260.8 363.1 262.6 361.85 264.45 360.45 266.15 359.1 267.9 357.6 269.6 356.2 271.25 354.7 272.85 353.2 274.35 351.65 275.95 350.1 277.4 348.45 278.85 346.8 280.2 345.1 281.55 343.4 282.55 342.05 283.45 340.7 284.75 338.85 285.8 336.85 286.55 335.35 287.3 333.95 287.75 332.9 288.3 331.85 289.2 329.85 290.05 327.85 290.35 327.15 290.65 326.5 291.25 325.15 291.8 323.8 292.6 321.75 293.4 319.6 294.05 317.55 294.65 315.5 295.35 313.5 295.95 311.4 296.5 309.25 296.95 307.1 297.3 305 297.65 302.75 297.95 300.55 298.15 298.2 298.4 295.85 298.25 293.55 298.15 291.65 297.95 289.95 296.95 288.25 296.25 287.15 295.2 285.4 293.7 283.35 293 282.3 291.05 279.6 290.05 278.15 289.15 276.95 289.3 278.35 289.45 279.7 Z" }),
                React.createElement("path", { fill: "#7F5128", stroke: "none", d: "\nM 279.8 271.2\nQ 277.45 267.55 274.95 264.95 273.55 263.55 270.7 261.3 268.15 259.2 266.7 258.35 265.2 257.45 263.2 256.45 262.45 256.25 261.25 255.75 261.4 255.75 261.55 255.75 258.95 255.45 256.3 255.75 254.45 255.9 248.45 256.15 241.85 256.4 233 258.8 228.8 259.9 225.65 261.25\nL 225.95 263.85 225.85 269.7 225.65 271.15 225.45 272.1\nQ 225.3 273.15 225.15 274.1 224.95 276.05 225 276.1 225.85 276.7 226.4 278.2 226.75 279.15 227.9 280.05 228.9 280.9 228.9 281.5 228.95 281.65 228.65 282.9\nL 228.45 284.1\nQ 228.35 284.15 232.45 289.8 232.45 289.95 231.85 291.15 231.1 292.4 231.15 292.55 231.1 292.7 231.75 294.7 232.35 296.8 232.45 297.1 232.45 297.55 232 298.15 231.6 298.75 231.6 299.25 232.3 299.65 232.6 300.1 233 300.6 233 301.25 232.15 303.6 232.15 304.05 232.15 305.15 233.2 307.75 234.25 310.45 234.25 311.75 234.35 312.15 233.8 312.75 233.6 313.05 233.5 313.5 233.3 314 233.3 314.05 233.35 314.45 233.5 316 234.35 317.2 234.7 317.95 235.95 320.35 236.4 324.7 237 329.1 237.2 333.65 237.3 335.05 237.35 336.9 237.45 337.95 237.5 339.25 237.7 341.55 238.2 342.8 238.65 344.2 240.2 345.55 242.3 347.55 244.9 348.3 245.65 348.55 247.3 349 248.95 349.45 250.95 350.3 257 345.55 262.6 339.55 266.55 335.2 269.8 330.95 270.65 329.85 271.4 328.75 270.65 327.25 270.2 325.6 270.05 325.1 269.9 324.8 269.75 324.4 269.6 324.1 269.35 323.7 268.85 323.15 268.15 322.55 267.85 322.25 266.65 321 265.95 319.8 264.95 317.85 265.4 315.65 265.65 314.15 266.8 312.05 267.7 310.5 268.35 309.85 269.9 308.5 272.25 308.4 272.7 308.4 274.2 308.5 276.25 308.65 276.8 308.7 278.15 308.95 279.2 309.55 280.2 310.15 280.95 311.1 284.05 303 285.1 294.45 285.8 288.6 285.4 283.4 285.25 282.3 284.95 281.5\nL 284.9 281.35\nQ 284.9 281.3 284.9 281.25 284.9 281.2 284.85 281.1 284.55 280.05 283.45 278.05 281.1 273.5 279.8 271.2\nM 265.95 265.2\nQ 268.45 266.35 270.95 269.05 271.2 269.25 271.5 269.5 272.15 270.3 273.15 271.45 274.6 273.05 275.2 273.8 276.2 274.85 276.5 275.45 276.95 276.55 276.35 277.6 276.05 278.3 274.95 279.25\nL 274.15 280.05\nQ 273.9 280.35 273.7 280.35 273.55 280.35 273.45 280.35 273.3 280.35 273.15 280.3 272.9 280.2 272.4 280.5 271.35 280.8 269.95 281.05 268.9 281.2 267.25 281.25 266.65 281.4 266.25 281.25 265.95 281.1 265.5 280.65 265.1 280.35 264.8 280.05 261 276.25 258.5 272.15 257.75 270.75 257.15 269.65 256.8 268.85 256.8 268.45 256.8 268 257.1 267.7 257.25 267.55 257.7 267.2 258 266.9 258.65 266.3 259.2 265.75 259.65 265.5 260.5 265.05 261.95 264.65 263.15 264.45 264 264.5 264.9 264.6 265.95 265.2\nM 243.6 269.7\nQ 243.65 270 243.5 270.45 242.75 272.4 240.55 274.65 237.35 277.9 237 278.35 236.6 278.8 236.4 279 236 279.4 235.5 279.4 234.95 279.45 234.25 279.1 233.2 278.65 232 277.85 230.55 276.8 229.85 276.35 229.5 276.1 227.35 274.7 227.35 274.8 227.3 274.7 227 274.55 226.85 274.4 226.75 274.35 226.75 274.25 226.7 274.25 226.7 274.2 226.6 274.2 226.55 274.1\nL 226.45 274.05\nQ 226.4 273.95 226.3 273.9 226.25 273.45 226.1 273.2 226 273 225.8 272.7 225.8 272.45 225.95 272.15 226.25 271.5 226.75 270.55 227 270 227.75 268.95\nL 228.9 267.35\nQ 229.5 266.35 229.95 265.9 230.5 265.1 231.15 264.65 231.4 264.45 231.6 264.35 231.85 264.35 232.3 264.35 234.7 264.45 236.1 265.05 237 265.35 238.6 266.2 240.2 267.1 240.7 267.5 241.9 268.15 242.85 268.85 242.9 268.9 243 268.95 243.05 269.1 243.2 269.2\nL 243.6 269.7\nM 255.65 273.8\nQ 256.7 274.55 257.55 275.45 258.45 276.4 258.9 277.55 259.35 278.8 259.35 280.75 259.2 283.8 258 286.25 256.7 288.9 254.35 290.5 253.8 290.95 252 291.95 250.5 292.85 249.65 293.6 248.65 294.65 248.05 295 247.05 295.85 245.95 295.7 245.25 295.6 244.4 295.25 242.85 294.45 242 293.25 241.7 292.65 241.4 291.6 240.85 289.8 240.8 287.95 240.8 287.35 240.95 287 240.95 286.7 241.15 286.4 241.25 286.4 241.55 285.95 242.85 284.3 243.35 282.15 243.5 281.7 243.65 280.8 243.8 279.75 243.95 279.3 244.55 277 246.4 275.3 248.2 273.65 250.7 273 252.45 272.6 253.65 272.9 254.65 273.15 255.65 273.8\nM 262.15 296.65\nQ 262.15 296.05 262.4 294.65 262.75 292.7 263.3 291.8 263.9 290.65 264.9 290.55 265.4 290.5 266.25 290.85 266.65 291.1 267.55 291.6 267.85 291.75 268.75 292.1 269.45 292.5 269.95 292.8 270.65 293.15 270.85 293.3 271.2 293.45 271.7 293.55 272.1 293.55 272.6 293.6 273.55 293.7 274.2 294.15 274.95 294.5 275.35 295.15 275.65 295.6 275.7 296.65 275.7 296.8 275.8 296.8 275.8 297.5 275.8 297.8 275.8 298.35 275.65 298.8 275.5 299.5 275.4 299.8\nL 275.1 301\nQ 275.05 301.5 274.75 302.45\nL 274.3 303.65\nQ 274.05 304.05 273.35 304.55 272.9 304.35 272.15 304.1 271.1 303.9 271 303.75 270.55 303.65 269.95 303.3 269.2 302.9 269 302.75 268.85 302.75 267.85 302.3 267.1 302.1 266.65 301.8 266.5 301.7 266 301.4 265.65 301.05 264.95 300.45\nL 263.05 298.65\nQ 262.45 298.15 262.4 297.8 262.1 297.35 262.15 296.65\nM 242.15 312.3\nQ 242.3 311.1 242.55 310.6 242.75 309.7 243.3 309.15 243.95 308.25 245.25 307.8 246.25 307.55 247.7 307.3 248.95 307.1 249.8 307.15 250.85 307.25 252.15 307.65 252.9 307.95 254.45 308.55 255.25 308.95 255.8 309.3 255.95 309.4 256 309.55 256.4 309.9 256.55 310.45 256.8 310.75 256.95 311.4 257.4 313.1 257.55 314.15 257.9 315.65 258 316.9 258.05 317.85 258 319.6 258.05 320.6 258 321.5 257.9 322.95 257.85 323.75 257.6 325.4 257.4 326.9 257.25 326.95 257.25 327.15 257.15 327.45 257.1 327.7 256.95 328.15 256.8 328.3 256.6 328.65 256.1 329.05\nL 254.5 330.45\nQ 254.2 330.75 253.8 330.8 253.6 330.9 252.9 330.8 251.85 330.6 251.15 330.45 250.25 330.15 249.65 329.65 248.3 329.8 246.4 328.6\nL 246.35 328.55\nQ 246.2953125 328.5 246.25 328.5 246 328.35 245.8 328.15\nL 245.05 327.6\nQ 244.95 327.55 244.9 327.45 243.8 326.5 243.3 325.85 242.9 325.15 242.7 324.35 242.45 323.8 242.3 322.7 241.9 320.4 241.75 319.2 241.55 317.2 241.7 315.65 241.75 314.45 242.15 312.3 Z" }),
                React.createElement("path", { fill: "#C29C6A", stroke: "none", d: "\nM 246.25 328.45\nL 246.25 328.5\nQ 246.2953125 328.5 246.35 328.55 246.2953125 328.4953125 246.25 328.45\nM 242.55 310.6\nQ 242.3 311.1 242.15 312.3 241.75 314.45 241.7 315.65 241.55 317.2 241.75 319.2 241.9 320.4 242.3 322.7 242.45 323.8 242.7 324.35 242.9 325.15 243.3 325.85 243.8 326.5 244.9 327.45 244.95 327.55 245.05 327.6 245.55 327.3 246.3 327.25 246.7 327.15 247.7 327.1\nL 252.85 327\nQ 253 326.95 253.05 326.9 253.6 326.3 253.9 325.85 254.35 325.3 254.9 324.35 255.55 323.15 255.7 322.8 256 322.4 256.45 321.65 256.95 320.9 257 320.4 257 320.2 257.1 319.5\nL 257.1 317.7\nQ 257.15 316 257.1 315.1 256.95 313.4 256.1 311.55 255.8 310.8 255.65 310.45 255.5 309.85 255.7 309.45 255.7 309.3 255.8 309.3 255.25 308.95 254.45 308.55 252.9 307.95 252.15 307.65 250.85 307.25 249.8 307.15 248.95 307.1 247.7 307.3 246.25 307.55 245.25 307.8 243.95 308.25 243.3 309.15 242.75 309.7 242.55 310.6\nM 262.4 294.65\nQ 262.15 296.05 262.15 296.65 262.1 297.35 262.4 297.8 262.45 298.15 263.05 298.65\nL 264.95 300.45\nQ 265.65 301.05 266 301.4 266.1 301.25 266.35 301.25 266.65 301.2 267.55 301.15 267.9 301.05 268.75 300.9 269.05 300.85 269.75 300.75 270.4 300.75 270.65 300.6 271.55 300.45 272.3 299.95 272.9 299.65 273.75 298.95 274.8 298.05 275.25 297.5 275.55 297.2 275.8 296.8 275.7 296.8 275.7 296.65 275.65 295.6 275.35 295.15 274.95 294.5 274.2 294.15 273.55 293.7 272.6 293.6 272.1 293.55 271.7 293.55 271.2 293.45 270.85 293.3 270.65 293.15 269.95 292.8 269.45 292.5 268.75 292.1 267.85 291.75 267.55 291.6 266.65 291.1 266.25 290.85 265.4 290.5 264.9 290.55 263.9 290.65 263.3 291.8 262.75 292.7 262.4 294.65 Z" }),
                React.createElement("path", { fill: "#A57A4E", stroke: "none", d: "\nM 256.95 311.4\nQ 256.8 310.75 256.55 310.45 256.4 309.9 256 309.55 255.95 309.4 255.8 309.3 255.7 309.3 255.7 309.45 255.5 309.85 255.65 310.45 255.8 310.8 256.1 311.55 256.95 313.4 257.1 315.1 257.15 316 257.1 317.7\nL 257.1 319.5\nQ 257 320.2 257 320.4 256.95 320.9 256.45 321.65 256 322.4 255.7 322.8 255.55 323.15 254.9 324.35 254.35 325.3 253.9 325.85 253.6 326.3 253.05 326.9 253 326.95 252.85 327\nL 247.7 327.1\nQ 246.7 327.15 246.3 327.25 245.55 327.3 245.05 327.6\nL 245.8 328.15\nQ 246 328.35 246.25 328.5\nL 246.25 328.45\nQ 246.2953125 328.4953125 246.35 328.55\nL 246.4 328.6\nQ 248.3 329.8 249.65 329.65 250.25 330.15 251.15 330.45 251.85 330.6 252.9 330.8 253.6 330.9 253.8 330.8 254.2 330.75 254.5 330.45\nL 256.1 329.05\nQ 256.6 328.65 256.8 328.3 256.95 328.15 257.1 327.7 257.15 327.45 257.25 327.15 257.25 326.95 257.4 326.9 257.6 325.4 257.85 323.75 257.9 322.95 258 321.5 258.05 320.6 258 319.6 258.05 317.85 258 316.9 257.9 315.65 257.55 314.15 257.4 313.1 256.95 311.4\nM 275.25 297.5\nQ 274.8 298.05 273.75 298.95 272.9 299.65 272.3 299.95 271.55 300.45 270.65 300.6 270.4 300.75 269.75 300.75 269.05 300.85 268.75 300.9 267.9 301.05 267.55 301.15 266.65 301.2 266.35 301.25 266.1 301.25 266 301.4 266.5 301.7 266.65 301.8 267.1 302.1 267.85 302.3 268.85 302.75 269 302.75 269.2 302.9 269.95 303.3 270.55 303.65 271 303.75 271.1 303.9 272.15 304.1 272.9 304.35 273.35 304.55 274.05 304.05 274.3 303.65\nL 274.75 302.45\nQ 275.05 301.5 275.1 301\nL 275.4 299.8\nQ 275.5 299.5 275.65 298.8 275.8 298.35 275.8 297.8 275.8 297.5 275.8 296.8 275.55 297.2 275.25 297.5 Z" }),
                React.createElement("path", { fill: "#DF6B1E", stroke: "none", d: "\nM 232.3 264.35\nQ 231.85 264.35 231.6 264.35 231.4 264.45 231.15 264.65 230.5 265.1 229.95 265.9 229.5 266.35 228.9 267.35\nL 227.75 268.95\nQ 227 270 226.75 270.55 226.25 271.5 225.95 272.15 225.8 272.45 225.8 272.7 226 273 226.1 273.2 226.25 273.45 226.3 273.9 226.4 273.95 226.45 274.05 227 274.05 227.75 274.35 228.3 274.5 229.25 274.95 230.15 275.15 230.85 275.25 231.25 275.3 232.05 275.35 232.85 275.45 233.2 275.45 233.5 275.6 234.1 275.65 234.65 275.75 234.95 275.65 235.4 275.6 236.15 275.1 237.7 273.9 238.45 273.3 239.1 272.85 240.4 271.9 241.55 271.05 242.15 270.25 242.3 269.85 242.75 269.35 242.85 269.1 243 268.95 242.9 268.9 242.85 268.85 241.9 268.15 240.7 267.5 240.2 267.1 238.6 266.2 237 265.35 236.1 265.05 234.7 264.45 232.3 264.35\nM 270.95 269.05\nQ 268.45 266.35 265.95 265.2 264.9 264.6 264 264.5 263.15 264.45 261.95 264.65 260.5 265.05 259.65 265.5 259.2 265.75 258.65 266.3 258 266.9 257.7 267.2 257.25 267.55 257.1 267.7 256.8 268 256.8 268.45 256.8 268.85 257.15 269.65 257.75 270.75 258.5 272.15 261 276.25 264.8 280.05 265.1 279.85 265.55 279.6 266.1 279.3 267 279.1 267.55 278.95 268.6 278.65 271.65 277.7 274 275.6 274.35 275.3 274.5 275.1 274.6 274.65 274.15 273.9 272.85 271.65 271.5 269.5 271.2 269.25 270.95 269.05 Z" }),
                React.createElement("path", { fill: "#CE5D1C", stroke: "none", d: "\nM 243.5 270.45\nQ 243.65 270 243.6 269.7\nL 243.2 269.2\nQ 243.05 269.1 243 268.95 242.85 269.1 242.75 269.35 242.3 269.85 242.15 270.25 241.55 271.05 240.4 271.9 239.1 272.85 238.45 273.3 237.7 273.9 236.15 275.1 235.4 275.6 234.95 275.65 234.65 275.75 234.1 275.65 233.5 275.6 233.2 275.45 232.85 275.45 232.05 275.35 231.25 275.3 230.85 275.25 230.15 275.15 229.25 274.95 228.3 274.5 227.75 274.35 227 274.05 226.45 274.05\nL 226.55 274.1\nQ 226.6 274.2 226.7 274.2 226.7 274.25 226.75 274.25 226.75 274.35 226.85 274.4 227 274.55 227.3 274.7 227.35 274.8 227.35 274.7 229.5 276.1 229.85 276.35 230.55 276.8 232 277.85 233.2 278.65 234.25 279.1 234.95 279.45 235.5 279.4 236 279.4 236.4 279 236.6 278.8 237 278.35 237.35 277.9 240.55 274.65 242.75 272.4 243.5 270.45\nM 273.15 271.45\nQ 272.15 270.3 271.5 269.5 272.85 271.65 274.15 273.9 274.6 274.65 274.5 275.1 274.35 275.3 274 275.6 271.65 277.7 268.6 278.65 267.55 278.95 267 279.1 266.1 279.3 265.55 279.6 265.1 279.85 264.8 280.05 265.1 280.35 265.5 280.65 265.95 281.1 266.25 281.25 266.65 281.4 267.25 281.25 268.9 281.2 269.95 281.05 271.35 280.8 272.4 280.5 272.9 280.2 273.15 280.3 273.3 280.35 273.45 280.35 273.55 280.35 273.7 280.35 273.9 280.35 274.15 280.05\nL 274.95 279.25\nQ 276.05 278.3 276.35 277.6 276.95 276.55 276.5 275.45 276.2 274.85 275.2 273.8 274.6 273.05 273.15 271.45 Z" }),
                React.createElement("path", { fill: "#E4804D", stroke: "none", d: "\nM 567.65 187.2\nL 500.2 131.15\nQ 494.3 136.7 471.85 141.65 442.85 148.05 420.85 123.55 398.8 99 411.15 80.3 414.35 75.55 416.7 72.1\nL 357.75 22.5\nQ 257 133.3 221.3 158.3\nL 415.65 346.65\nQ 431.8 336.4 446.95 324.85 469.2 307.8 489.3 288.1 533.8 244.4 567.65 187.2\nM 509.6 124.95\nQ 506.05 125.55 500.2 131.15\nL 567.65 187.2\nQ 533.8 244.4 489.3 288.1 469.2 307.8 446.95 324.85 431.8 336.4 415.65 346.65\nL 221.3 158.3\nQ 257 133.3 357.75 22.5\nL 416.7 72.1\nQ 420.4 66.4 421.9 64.1 424.25 60.3 423.6 54.7 422.85 49.15 417.85 46.2\nL 365.4 3.15\nQ 360 -0.2 356.3 1.2 352.6 2.6 275.05 83.5 273.7 85 272.25 86.4 252.6 106.65 231.75 125.55 230.65 126.55 229.55 127.55 213.8 141.025 198.05 154.5 227.6 180.25 262.85 214.95 289.15 240.85 340.9 293.45 349.6 302.15 358.85 311.25 359.15 311.55 359.55 311.9 362.35 314.65 365.3 317.55 366.65 318.9 368.1 320.35 368.95 321.15 369.8 321.95 370.4 322.55 371 323.1\nL 410.2 360.9 410.35 360.95\nQ 412.15 359.2 414.7 356.95 422.75 349.95 427.15 346.9 432.1 343.55 442.7 338.05 452.7 332.9 458.7 330.3 461.85 328.9 467.5 326.5 468.15 325.9 468.85 325.3 491.2 305.75 508.35 287.8 508.95 287.15 509.6 286.45 510.5 285.5 511.45 284.55\nL 523.4 271.05\nQ 523.85 270.45 524.3 269.95 587.4 194.85 584.9 185.85 584.05 182.2 580.1 179.3\nL 515.85 126.55\nQ 513.1 124.3 509.6 124.95 Z" })),
            React.createElement("g", { id: "Layer0_1_FILL" },
                React.createElement("path", { fill: "#FCFEFF", stroke: "none", d: "\nM 120.1 303.05\nQ 119.1 302.25 116.6 302.35\nL 115.7 302.35\nQ 115.25 303.2 115.65 304.1\nL 116.2 304.85\nQ 116.4 305.2 116.75 306.05 116.85 306.3 117.3 306.8 117.65 307.25 117.75 307.55 117.85 308.3 117.9 308.35 118.15 308.9 118.55 308.75 119 308.65 118.75 307.7 118.3 306.45 118.05 306.05 117.55 305.45 117.4 305.15 117.15 304.55 117.05 304.25 116.8 303.7 116.5 303.5 116.8 303.55 117.6 303.45 118.3 303.35 118.7 303.5 119.05 303.65 119.4 304 120.05 304.65 120.15 304.95 120.35 305.4 120.6 306.35 120.95 306.9 121.4 306.75 121.9 306.55 121.55 305.65 120.95 303.75 120.1 303.05 Z" })),
            React.createElement("g", { id: "Layer0_2_FILL" },
                React.createElement("path", { fill: "#FCFEFF", stroke: "none", d: "\nM 115.95 289.65\nQ 111.6 289.95 108.2 291.75 104.25 293.9 102.45 297.3 101.25 299.65 101 302.3 100.7 305.3 101.5 308.1 102.35 311.05 104.25 313.1 104.65 313.5 106.75 315.5 107.55 316.35 109.1 318.15 111.5 320.55 114.85 321.65 118.25 322.7 121.6 322.15 124.95 321.55 127.8 319.4 130.6 317.3 132.05 314.2 133.65 310.8 133.65 306.4 133.55 301.75 131.95 298.1 130.05 293.95 126.45 291.75 122.25 289.15 115.95 289.65 Z" })),
            React.createElement("g", { id: "Layer0_3_FILL" },
                React.createElement("path", { fill: "#F2F2F2", stroke: "none", d: "\nM 154.7 357.7\nQ 154.25 357.8 152.1 358.05 150.45 358.2 149.5 358.6 148.2 359.1 147.4 360.2 146.55 361.45 146.95 362.65 147.45 364.05 149.35 364.45 150.85 364.75 152.75 364.3 161.65 362.15 164.9 356.65 166.8 358.35 169.3 359.05 171.85 359.7 174.3 359.2 174.65 359.15 176.45 358.7 177.7 358.35 178.6 358.35 179.9 358.35 182.45 359.2 185 360.05 186.35 360 187.5 359.95 188.95 359.45 189.8 359.1 191.45 358.4 194.15 357.4 198.65 357 205.05 356.45 206 356.3 209.85 355.65 217.15 352.85\nL 226.2 349.35\nQ 229.15 348.25 230.65 347.5 233.05 346.3 234.7 344.95 235.8 344.05 237.6 342.1 239.5 340.05 240.45 339.2 241.8 338 245.75 335.6 256.4 329.1 270.1 316.1 274.45 312.05 276.55 310.8 279.6 309.35 281.05 308.5 286.15 305.7 289.3 300.55 290.4 298.65 290.45 297.2 290.5 296.25 290.05 295.45 289.6 294.65 288.8 294.3 287.6 293.8 285.45 294.7 282.7 295.95 279.35 298.35 277.4 299.7 273.6 302.6 271.05 304.45 264.15 308.75\nL 255.6 314.05\nQ 248.6 318.35 245.25 321.25 244.1 322.25 240.3 326.05 237.3 329.05 235.2 330.55 230.65 333.85 220.15 336.9 209.35 340.05 204.95 343 202.6 344.6 201.7 346.15 200.3 348.5 201.3 350.55 195.6 350.7 190.45 352.65 187.2 353.9 185.7 353.9 184.5 353.9 182.45 353.15 180.25 352.4 179.2 352.3 177.75 352.15 175.1 352.85 172.3 353.55 170.95 353.5 169.75 353.4 168.85 352.9 167.8 352.3 167.5 351.3 167.3 349.85 167.15 349.15 166.9 347.9 166.1 347.8 163.35 351.9 161.2 353.95 158.1 357 154.7 357.7 Z" })),
            React.createElement("g", { id: "Layer0_4_FILL" },
                React.createElement("path", { fill: "#794110", stroke: "none", d: "\nM 370.95 195.9\nQ 370.25 195.9 369.8 196.35 369.2 197 369 198.7 368.45 202.2 366.9 206.2 365.55 209.5 362.25 215.8 359.8 220.25 358.6 221.65 357.75 222.7 356.2 224.1 354 226.15 353.7 226.45 352.85 227.3 350.65 229.85 348.75 232 347.45 233.15 344.75 235.6 339.95 238.1 334.45 240.8 331.8 242.3 326.75 245.25 321.35 250.25 318.1 253.25 312.1 259.7 305.4 266.9 302.6 271.25 301.65 272.7 298.3 278.8 295.75 283.5 293.6 286.05 292.4 287.4 291.85 288.1 290.9 289.3 290.5 290.35 289.25 293.65 291.4 297.6 291.85 298.25 292.15 298.4 292.55 298.6 293.45 298.3 299.8 295.85 305.7 289.1 307.7 286.85 310.45 283.05 314.3 277.8 315.05 276.85 324.6 264.5 337.1 255.65 338.6 254.6 341.6 252.45 344.15 250.55 345.7 248.8 346.65 247.75 348.75 244.8 350.65 242.2 351.95 240.95 352.75 240.15 355.3 238.2 357.45 236.55 358.5 235.3 359.35 234.25 360.75 231.8 362.1 229.4 363 228.3 363.7 227.5 365.25 226.1 366.85 224.6 367.5 223.85 369.05 222.05 370.2 219.25 370.6 218.25 372 214.15 374.65 205.95 377.9 200.4 382 193.4 387.6 189.45 388.25 189 392.65 186.35 395.7 184.45 397.35 182.85 399.6 180.6 400.3 177.7 401.15 174.5 399.6 172.15 393.15 175.6 385.15 183.5 373.2 195.4 371.9 196.5 371.65 195.9 370.95 195.9 Z" })),
            React.createElement("g", { id: "Layer0_5_FILL" },
                React.createElement("path", { fill: "#794110", stroke: "none", d: "\nM 291 294.5\nQ 290.65 294 290.5 293.95 290.1 293.7 289.75 293.95 289.45 294.2 289.55 294.85 289.7 295.5 290.1 296.25\nL 290.2 296.45 290.2 296.65\nQ 289.95 297.9 289.85 298.05\nL 289.65 299.8 289.3 300.5\nQ 289.44375 300.37265625 289.7 300.35\nL 290.15 300.25\nQ 290.55 299.65 291.1 299.35\nL 292.7 298.2\nQ 292.85 298.05 293.2 297.35\nL 293.4 296.85 293.5 296.3\nQ 293.4 296 293.1 295.9 292.8 295.8 292.6 296.1\nL 292.45 296.35 292.15 297.1\nQ 292.05 297.5 291.8 297.5\nL 291.95 297.3 292.1 297\nQ 292.2 296.65 291.95 296.35 291.7 296.1 291.35 296.25\nL 291.3 295.15 291.2 294.8 291 294.5 Z" })),
            React.createElement("path", { id: "Layer0_0_1_STROKES", stroke: "#FFFFFF", width: "1", fill: "none", d: "\nM 416.7 72.1\nL 357.75 22.5\nQ 257 133.3 221.3 158.3\nL 415.65 346.65\nQ 431.8 336.4 446.95 324.85 469.2 307.8 489.3 288.1 533.8 244.4 567.65 187.2\nL 500.2 131.15" }),
            React.createElement("path", { id: "Layer0_0_2_STROKES", stroke: "#F13824", width: "0.5", fill: "none", d: "\nM 192.05 267.7\nQ 191.05 262.2 191.35 259.75 191.6 257.3 192.8 253.7 193.95 250.05 196.2 246.25 198.55 242.5 202.6 241.15 206.75 239.85 209.4 240.6 212.2 241.35 215 243.65\nM 215.9 240.3\nQ 215.25 239.6 214.2 238.9 206.55 233.3 198.1 235.55 193.7 236.9 190.1 243 186.45 249.35 188.4 259.65\nM 222.5 253.85\nQ 222.6 257.15 221.4 259.35\nL 221.4 259.45\nM 218.65 243.35\nQ 217.45 241.9 215.9 240.4\nL 215.9 240.3\nM 218.65 243.35\nQ 219.05 243.95 219.4 244.55 219.5 244.55 219.5 244.6\nL 219.5 244.65\nQ 220.15 245.7 220.6 246.7 221.25 247.9 221.6 249.2 222.3 251.2 222.45 253.25 222.45 253.55 222.5 253.85\nM 220.25 261.1\nL 220.85 260.2\nQ 221.1 259.8 221.4 259.45" }))));
};

var Icon$D = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear)" }),
        React.createElement("path", { d: "M39.0623 18.9777C39.3983 19.3138 39.4447 19.8426 39.1721 20.232C34.1862 27.3557 28.0207 33.576 20.9413 38.6248L20.3823 39.0235C19.9723 39.3159 19.4111 39.2692 19.055 38.9132L16.5383 36.3964C18.024 34.858 18.0077 32.4065 16.4893 30.8881C14.971 29.3698 12.5194 29.3535 10.981 30.8392L8.66608 28.5242C8.22585 28.084 8.28655 27.3538 8.79343 26.9923L9.35284 26.5933C16.261 21.6665 22.2775 15.5966 27.1429 8.64507C27.4837 8.15815 28.1816 8.09702 28.6019 8.51729L30.958 10.8734C29.4778 12.4121 29.496 14.8595 31.0125 16.3759C32.5289 17.8924 34.9762 17.9105 36.515 16.4304L39.0623 18.9777Z", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M40.1776 19.6742L31.18 31.0674L19.5425 39.8766L17.3044 37.6224L16.4969 36.6435L17.3044 35.4752L17.5873 34.3068L17.4316 33.0606L16.9642 31.8923L16.1853 30.9576L15.2507 30.3345L14.2381 30.0229H12.9919L11.6678 30.4903L10.8889 31.1913L9.01953 28.9325L12.0604 28.4789C21.4923 27.0723 30.404 23.264 37.9396 17.4199L40.1776 19.6742Z", fill: "#A28BD4" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4028 36.5059C15.4031 36.1749 15.5351 35.8577 15.7697 35.6241L15.7738 35.62C16.822 34.5718 16.822 32.8725 15.7738 31.8243C14.7257 30.7762 13.0263 30.7762 11.9781 31.8243L11.974 31.8285C11.7405 32.063 11.4232 32.195 11.0922 32.1953C10.7613 32.1957 10.4438 32.0643 10.2097 31.8303L7.78504 29.4056C6.80001 28.4206 6.93583 26.7867 8.07 25.9778L8.6294 25.5789L9.35301 26.5935L8.79361 26.9925C8.28673 27.354 8.22602 28.0842 8.66625 28.5244L11.0909 30.9491L11.0969 30.9431C11.0988 30.9412 11.1008 30.9393 11.1027 30.9374C12.638 29.4083 15.1221 29.4102 16.655 30.9431C18.1878 32.4759 18.1899 34.9598 16.6611 36.4951C16.6591 36.4971 16.6571 36.4992 16.655 36.5012L16.649 36.5072L19.0552 38.9134C19.4113 39.2694 19.9725 39.3161 20.3824 39.0237L20.9415 38.625C28.0208 33.5762 34.1863 27.3559 39.1723 20.2321C39.4448 19.8428 39.3985 19.314 39.0625 18.9779L36.535 16.4504C36.5258 16.4598 36.5166 16.4691 36.5073 16.4784C36.498 16.4877 36.4886 16.4969 36.4792 16.5061C34.9423 18.0132 32.4747 18.0039 30.9492 16.4784C29.4236 14.9528 29.4144 12.4852 30.9215 10.9482C30.9307 10.9389 30.9399 10.9296 30.9492 10.9203C30.9585 10.911 30.9678 10.9018 30.9771 10.8926L28.602 8.51747C28.1818 8.0972 27.4839 8.15833 27.1431 8.64525C22.2777 15.5968 16.2612 21.6667 9.35301 26.5935L8.6294 25.5789C15.4221 20.7344 21.338 14.766 26.1221 7.93065C26.9073 6.80885 28.515 6.66803 29.4832 7.63625L31.8584 10.0114C32.0936 10.2466 32.225 10.566 32.2234 10.8987C32.2217 11.2313 32.0872 11.5495 31.8497 11.7824C31.8432 11.7887 31.8368 11.7951 31.8304 11.8015C30.7822 12.8496 30.7822 14.549 31.8304 15.5972C32.8785 16.6453 34.5779 16.6453 35.626 15.5972C35.6324 15.5908 35.6388 15.5844 35.6452 15.5779C35.8781 15.3404 36.1962 15.2058 36.5289 15.2042C36.8615 15.2026 37.181 15.334 37.4162 15.5692L39.9437 18.0967C40.7073 18.8603 40.8126 20.062 40.1933 20.9467C35.126 28.1867 28.8599 34.5084 21.6651 39.6396L21.1061 40.0383C20.2004 40.6842 18.9606 40.5812 18.174 39.7946L15.7678 37.3884C15.5338 37.1544 15.4025 36.8369 15.4028 36.5059Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8664 12.8716L24.4172 13.4223C24.6605 13.6657 24.6605 14.0602 24.4172 14.3035C24.1738 14.5469 23.7793 14.5469 23.536 14.3035L22.9852 13.7528C22.7419 13.5094 22.7419 13.1149 22.9852 12.8716C23.2285 12.6282 23.6231 12.6282 23.8664 12.8716Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.1799 15.1841L26.7306 15.7348C26.974 15.9782 26.974 16.3727 26.7306 16.616C26.4873 16.8594 26.0928 16.8594 25.8494 16.616L25.2987 16.0653C25.0553 15.8219 25.0553 15.4274 25.2987 15.1841C25.542 14.9407 25.9365 14.9407 26.1799 15.1841Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.0441 18.9295C28.8008 19.1729 28.4062 19.1728 28.1629 18.9295L27.502 18.2686C27.2587 18.0253 27.2587 17.6307 27.502 17.3874C27.7453 17.144 28.1399 17.144 28.3832 17.3874L29.0441 18.0483C29.2875 18.2916 29.2875 18.6862 29.0441 18.9295Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3576 21.243C31.1143 21.4863 30.7197 21.4863 30.4764 21.243L29.8155 20.5821C29.5721 20.3387 29.5721 19.9442 29.8155 19.7009C30.0588 19.4575 30.4533 19.4575 30.6967 19.7009L31.3576 20.3618C31.6009 20.6051 31.6009 20.9996 31.3576 21.243Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.009 22.0141L33.5597 22.5649C33.8031 22.8082 33.8031 23.2028 33.5597 23.4461C33.3164 23.6895 32.9219 23.6895 32.6785 23.4461L32.1278 22.8953C31.8844 22.652 31.8844 22.2575 32.1278 22.0141C32.3711 21.7708 32.7656 21.7708 33.009 22.0141Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3225 24.3266L35.8732 24.8774C36.1166 25.1207 36.1166 25.5153 35.8732 25.7586C35.6299 26.002 35.2354 26.002 34.992 25.7586L34.4412 25.2078C34.1979 24.9645 34.1979 24.57 34.4412 24.3266C34.6846 24.0833 35.0791 24.0833 35.3225 24.3266Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6437 22.5266C19.9743 21.8573 19.9743 20.772 20.6437 20.1027C21.4022 19.3442 22.6632 19.4609 23.2695 20.3458L24.7964 22.5738C26.1291 22.1463 27.5433 22.2031 28.4805 23.1402C29.3229 23.9827 29.4507 25.2241 29.1652 26.4073C28.8764 27.6037 28.1461 28.8641 27.0722 29.9379C25.9984 31.0117 24.7381 31.742 23.5416 32.0308C22.3584 32.3164 21.117 32.1886 20.2745 31.3461C19.3428 30.4144 19.2815 29.0108 19.7006 27.6858L17.4629 26.1524C16.5781 25.546 16.4614 24.285 17.2199 23.5265C17.8892 22.8572 18.9745 22.8572 19.6438 23.5265L21.1943 25.077C21.3478 24.897 21.5107 24.7205 21.6828 24.5485C21.8489 24.3823 22.0193 24.2247 22.1928 24.0758L20.6437 22.5266Z", fill: "#633001" }),
        React.createElement("ellipse", { rx: "0.749452", ry: "1.09011", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 22.5742 28.153)", fill: "#DBCDF9" }),
        React.createElement("ellipse", { cx: "25.3682", cy: "25.359", rx: "0.749453", ry: "1.09011", transform: "rotate(-45 25.3682 25.359)", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M40.2095 34.2904C40.0804 34.7825 39.3818 34.7825 39.2527 34.2904L38.5576 31.6422C38.5123 31.4695 38.3775 31.3346 38.2048 31.2893L35.5566 30.5943C35.0645 30.4651 35.0645 29.7666 35.5566 29.6374L38.2048 28.9424C38.3775 28.8971 38.5123 28.7622 38.5576 28.5895L39.2527 25.9413C39.3818 25.4492 40.0804 25.4492 40.2095 25.9413L40.9045 28.5895C40.9499 28.7622 41.0847 28.8971 41.2574 28.9424L43.9056 29.6374C44.3977 29.7666 44.3977 30.4651 43.9056 30.5943L41.2574 31.2893C41.0847 31.3346 40.9499 31.4695 40.9045 31.6422L40.2095 34.2904Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M16.4183 7.94926C16.5088 7.60415 16.9988 7.60415 17.0893 7.94926L17.5767 9.80644C17.6085 9.92754 17.7031 10.0221 17.8242 10.0539L19.6814 10.5413C20.0265 10.6319 20.0265 11.1218 19.6814 11.2124L17.8242 11.6998C17.7031 11.7316 17.6085 11.8261 17.5767 11.9473L17.0893 13.8044C16.9988 14.1495 16.5088 14.1495 16.4183 13.8044L15.9309 11.9473C15.8991 11.8261 15.8045 11.7316 15.6834 11.6998L13.8262 11.2124C13.4811 11.1218 13.4811 10.6319 13.8262 10.5413L15.6834 10.0539C15.8045 10.0221 15.8991 9.92754 15.9309 9.80644L16.4183 7.94926Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M10.3511 38.7118C10.2924 38.9355 9.97486 38.9355 9.91616 38.7118L9.60024 37.5081C9.57964 37.4296 9.51834 37.3683 9.43985 37.3477L8.23612 37.0318C8.01244 36.9731 8.01244 36.6555 8.23612 36.5968L9.43985 36.2809C9.51834 36.2603 9.57964 36.199 9.60024 36.1205L9.91616 34.9168C9.97486 34.6931 10.2924 34.6931 10.3511 34.9168L10.667 36.1205C10.6876 36.199 10.7489 36.2603 10.8274 36.2809L12.0311 36.5968C12.2548 36.6555 12.2548 36.9731 12.0311 37.0318L10.8274 37.3477C10.7489 37.3683 10.6876 37.4296 10.667 37.5081L10.3511 38.7118Z", fill: "#53DEE9" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "24", y1: "0", x2: "24", y2: "48", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#54DADE" }),
                React.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$E = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$F = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$G = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$H = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Flex = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: flex;\n  ", "\n  ", "\n"], ["\n  display: flex;\n  ", "\n  ", "\n"])), flexbox, space);
var templateObject_1$4;

var variants$1 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$1.INFO : _b;
    switch (variant) {
        case variants$1.DANGER:
            return theme.colors.failure;
        case variants$1.WARNING:
            return theme.colors.warning;
        case variants$1.SUCCESS:
            return theme.colors.success;
        case variants$1.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$1.INFO; }
    switch (variant) {
        case variants$1.DANGER:
            return Icon$2;
        case variants$1.WARNING:
            return Icon$1;
        case variants$1.SUCCESS:
            return Icon;
        case variants$1.INFO:
        default:
            return Icon$3;
    }
};
var IconLabel = styled.div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled(Flex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React.createElement(StyledAlert, null,
        React.createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React.createElement(Icon, { color: "currentColor", width: "24px" })),
        React.createElement(Details, { hasHandler: !!onClick },
            React.createElement(Text, { bold: true }, title),
            typeof children === "string" ? React.createElement(Text, { as: "p" }, children) : children),
        onClick && (React.createElement(CloseHandler, null,
            React.createElement(IconButton, { size: "sm", variant: "text", onClick: onClick },
                React.createElement(Icon$k, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$5, templateObject_2$1, templateObject_3$1, templateObject_4;

var Separator = styled.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled.ul(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArrays(accum, [item]);
        }
        return __spreadArrays(accum, [
            React.createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React.createElement(Icon$i, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = Children.toArray(children).filter(function (child) { return isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React.createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React.createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$6, templateObject_2$2;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$7;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, onClick = _a.onClick, children = _a.children;
    return (React.createElement(StyledButtonMenu, { variant: variant }, Children.map(children, function (child, index) {
        return cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onClick ? function () { return onClick(index); } : undefined,
            size: size,
            variant: variant,
        });
    })));
};

var InactiveButton = styled(Button)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, as = _a.as, props = __rest(_a, ["isActive", "size", "variant", "as"]);
    if (!isActive) {
        return (React.createElement(InactiveButton, __assign({ forwardedAs: as, size: size, variant: "tertiary", colorKey: variant === variants.PRIMARY ? "primary" : "textSubtle" }, props)));
    }
    return React.createElement(Button, __assign({ as: as, size: size, variant: variant }, props));
};
var templateObject_1$8;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled.div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$9;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React.createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled.div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$a;

var CardHeader = styled.div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$b;

var CardFooter = styled.div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$c;

var StyledCardRibbon = styled.div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React.createElement(StyledCardRibbon, { variantColor: variantColor },
        React.createElement("div", { title: text }, text)));
};
var templateObject_1$d;

var scales = {
    SM: "sm",
    MD: "md",
};

var getScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales.SM:
            return "24px";
        case scales.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled.input.attrs({ type: "checkbox" })(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale, getScale, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales.MD,
};
var templateObject_1$e;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled.div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React.createElement(Container, null,
        target,
        React.createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$f, templateObject_2$3;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes$1 = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a;
var style = (_a = {},
    _a[sizes$1.MD] = {
        fontSize: "20px",
    },
    _a[sizes$1.LG] = {
        fontSize: "24px",
    },
    _a[sizes$1.XL] = {
        fontSize: "40px",
    },
    _a[sizes$1.XXL] = {
        fontSize: "64px",
    },
    _a);
var Heading = styled(Text).attrs({ bold: true })(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"], ["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes$1.MD];
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$g;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper = styled.div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, space);
var templateObject_1$h;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = useRef(null);
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React.createElement(Wrapper, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled.img(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = useRef(null);
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React.createElement(Wrapper, __assign({ ref: imgRef }, otherProps), isLoaded ? React.createElement(StyledImage, { src: src, alt: alt }) : React.createElement(Placeholder, null)));
};
var templateObject_1$i, templateObject_2$4;

var scales$1 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow$1 = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$1.MD : _b;
    switch (scale) {
        case scales$1.SM:
            return "32px";
        case scales$1.LG:
            return "48px";
        case scales$1.MD:
        default:
            return "40px";
    }
};
var Input = styled.input(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input.defaultProps = {
    scale: scales$1.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$j;

var GridLayout = styled.div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$k;

var GridLayout$1 = styled(GridLayout)(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$l;

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled.input.attrs({ type: "radio" })(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$m;

var getColor$1 = function (color, theme) {
    return getThemeValue("colors." + color, color)(theme);
};

var getThemeTextColor = function (_a) {
    var outline = _a.outline, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return outline ? getColor$1(variant, theme) : "#ffffff";
};
var StyledTag = styled.div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "primary" : _b;
    return outline ? "transparent" : getColor$1(variant, theme);
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return getColor$1(variant, theme);
}, getThemeTextColor, getThemeTextColor);
var templateObject_1$n;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React.createElement(StyledTag, __assign({}, props),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    outline: false,
};

var StyledLink = styled(Text)(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React.createElement(StyledLink, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$o;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(Link, __assign({ external: true }, props),
        children,
        React.createElement(Icon$t, { color: "primary", ml: "4px" })));
};

var Bar = styled.div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled.div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$p, templateObject_2$5;

var ProgressBunnyWrapper = styled.div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$q;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.primaryStep, primaryStep = _b === void 0 ? 0 : _b, _c = _a.secondaryStep, secondaryStep = _c === void 0 ? null : _c, _d = _a.showProgressBunny, showProgressBunny = _d === void 0 ? false : _d;
    return (React.createElement(StyledProgress, null,
        showProgressBunny && (React.createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React.createElement(Icon$A, null))),
        React.createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React.createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var rotate$1 = keyframes(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var SpinnerIcon = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("image", { width: "96", height: "96", href: "/images/goong/9.png" })));
};
var Container$1 = styled.div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled(SpinnerIcon)(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate$1);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React.createElement(Container$1, null,
        React.createElement(RotatingPancakeIcon, { width: size * 0.5 + "px" })));
};
var templateObject_1$r, templateObject_2$6, templateObject_3$2;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = keyframes(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = keyframes(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, layout, space);
var Pulse = styled(Root)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled(Root)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React.createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React.createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$s, templateObject_2$7, templateObject_3$3, templateObject_4$1, templateObject_5;

var Handle = styled.div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
});
var Input$1 = styled.input(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled.div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$t, templateObject_2$8, templateObject_3$4;

var Toggle = function (_a) {
    var checked = _a.checked, props = __rest(_a, ["checked"]);
    var isChecked = !!checked;
    return (React.createElement(StyledToggle, { checked: isChecked },
        React.createElement(Input$1, __assign({ checked: checked }, props, { type: "checkbox" })),
        React.createElement(Handle, null)));
};

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArrays(data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArrays(action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            columnCopy = state.columns.map(function (column) {
                if (state.sortColumn === column.name) {
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: column.sorted.asc,
                        } });
                }
                return column;
            });
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop,
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = useMemo(function () {
        return __spreadArrays(state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #f4793f, 0px 0px 4px 8px rgb(244, 121, 63, 0.4)",
    success: "0px 0px 0px 1px #7cb13b, 0px 0px 0px 4px rgb(124, 177, 59, 0.2)",
    warning: "0px 0px 0px 1px #d42c3c, 0px 0px 0px 4px rgb(212, 44, 60, 0.2)",
    focus: "0px 0px 0px 1px #FFB237, 0px 0px 0px 4px rgb(255, 178, 55, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries$1 = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = useState(function () {
        return Object.keys(mediaQueries$1).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries$1[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries$1).map(function (size) {
            var mql = window.matchMedia(mediaQueries$1[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = useCallback(function () {
        return debounce(function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var StyledModal = styled.div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader = styled.div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"], ["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"])));
var ModalTitle = styled(Flex)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (React.createElement(StyledModal, null,
        React.createElement(ModalHeader, null,
            React.createElement(ModalTitle, null,
                onBack && (React.createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React.createElement(Icon$5, { color: "primary" }))),
                React.createElement(Heading, null, title)),
            !hideCloseButton && (React.createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React.createElement(Icon$k, { color: "primary" })))),
        React.createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
var templateObject_1$u, templateObject_2$9, templateObject_3$5;

var Overlay = styled.div.attrs({ role: "presentation" })(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #000000;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #000000;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$v;

var ModalWrapper = styled.div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React.createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React.createElement(ModalWrapper, null,
            React.createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React.isValidElement(modalNode) &&
                React.cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$w;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$I = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z" }),
        React.createElement("path", { d: "M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" })));
};

var Icon$J = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$K = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$L = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$M = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" })));
};

var Icon$N = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$O = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$P = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo = function (_a) {
    var isDark = _a.isDark, props = __rest(_a, ["isDark"]);
    return (React.createElement(Svg, __assign({ viewBox: "0 0 205 26" }, props),
        React.createElement("image", { width: "205", height: "26", href: isDark ? "/images/goong/LogoTextNewDark.png" : "/images/goong/LogoTextNewWhite.png" })));
};

var Icon$Q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$R = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$S = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$T = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z" })));
};

var Icon$U = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React.createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React.createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React.createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React.createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React.createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React.createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React.createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$V = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$W = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z" })));
};

var Icon$X = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$Y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$Z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "m21.325 9.308c-.758 0-1.425.319-1.916.816-1.805-1.268-4.239-2.084-6.936-2.171l1.401-6.406 4.461 1.016c0 1.108.89 2.013 1.982 2.013 1.113 0 2.008-.929 2.008-2.038s-.889-2.038-2.007-2.038c-.779 0-1.451.477-1.786 1.129l-4.927-1.108c-.248-.067-.491.113-.557.365l-1.538 7.062c-2.676.113-5.084.928-6.895 2.197-.491-.518-1.184-.837-1.942-.837-2.812 0-3.733 3.829-1.158 5.138-.091.405-.132.837-.132 1.268 0 4.301 4.775 7.786 10.638 7.786 5.888 0 10.663-3.485 10.663-7.786 0-.431-.045-.883-.156-1.289 2.523-1.314 1.594-5.115-1.203-5.117zm-15.724 5.41c0-1.129.89-2.038 2.008-2.038 1.092 0 1.983.903 1.983 2.038 0 1.109-.89 2.013-1.983 2.013-1.113.005-2.008-.904-2.008-2.013zm10.839 4.798c-1.841 1.868-7.036 1.868-8.878 0-.203-.18-.203-.498 0-.703.177-.18.491-.18.668 0 1.406 1.463 6.07 1.488 7.537 0 .177-.18.491-.18.668 0 .207.206.207.524.005.703zm-.041-2.781c-1.092 0-1.982-.903-1.982-2.011 0-1.129.89-2.038 1.982-2.038 1.113 0 2.008.903 2.008 2.038-.005 1.103-.895 2.011-2.008 2.011z" })));
};

var Icon$_ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "-60 -30 600 600" }, props),
        React.createElement("g", { id: "surface1" },
            React.createElement("path", { d: "M 217.996094 158.457031 C 164.203125 158.457031 120.441406 202.21875 120.441406 256.007812 C 120.441406 309.800781 164.203125 353.5625 217.996094 353.5625 C 271.785156 353.5625 315.546875 309.800781 315.546875 256.007812 C 315.546875 202.21875 271.785156 158.457031 217.996094 158.457031 Z M 275.914062 237.636719 L 206.027344 307.523438 C 203.09375 310.457031 199.246094 311.925781 195.402344 311.925781 C 191.558594 311.925781 187.714844 310.460938 184.78125 307.523438 L 158.074219 280.816406 C 152.207031 274.953125 152.207031 265.441406 158.074219 259.574219 C 163.9375 253.707031 173.449219 253.707031 179.316406 259.574219 L 195.402344 275.660156 L 254.671875 216.394531 C 260.535156 210.527344 270.046875 210.527344 275.914062 216.394531 C 281.78125 222.257812 281.78125 231.769531 275.914062 237.636719 Z M 275.914062 237.636719 " }),
            React.createElement("path", { d: "M 435.488281 138.917969 L 435.472656 138.519531 C 435.25 133.601562 435.101562 128.398438 435.011719 122.609375 C 434.59375 94.378906 412.152344 71.027344 383.917969 69.449219 C 325.050781 66.164062 279.511719 46.96875 240.601562 9.042969 L 240.269531 8.726562 C 227.578125 -2.910156 208.433594 -2.910156 195.738281 8.726562 L 195.40625 9.042969 C 156.496094 46.96875 110.957031 66.164062 52.089844 69.453125 C 23.859375 71.027344 1.414062 94.378906 0.996094 122.613281 C 0.910156 128.363281 0.757812 133.566406 0.535156 138.519531 L 0.511719 139.445312 C -0.632812 199.472656 -2.054688 274.179688 22.9375 341.988281 C 36.679688 379.277344 57.492188 411.691406 84.792969 438.335938 C 115.886719 468.679688 156.613281 492.769531 205.839844 509.933594 C 207.441406 510.492188 209.105469 510.945312 210.800781 511.285156 C 213.191406 511.761719 215.597656 512 218.003906 512 C 220.410156 512 222.820312 511.761719 225.207031 511.285156 C 226.902344 510.945312 228.578125 510.488281 230.1875 509.925781 C 279.355469 492.730469 320.039062 468.628906 351.105469 438.289062 C 378.394531 411.636719 399.207031 379.214844 412.960938 341.917969 C 438.046875 273.90625 436.628906 199.058594 435.488281 138.917969 Z M 217.996094 383.605469 C 147.636719 383.605469 90.398438 326.367188 90.398438 256.007812 C 90.398438 185.648438 147.636719 128.410156 217.996094 128.410156 C 288.351562 128.410156 345.59375 185.648438 345.59375 256.007812 C 345.59375 326.367188 288.351562 383.605469 217.996094 383.605469 Z M 217.996094 383.605469 " }))));
};

var Icon$$ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 367.488 367.488" }, props),
        React.createElement("path", { d: "M366.745,70.58c-1.089-1.609-3.256-2.391-6.626-2.391c-1.835,0-3.77,0.227-5.25,0.424c-0.324,0.043-0.609,0.065-0.857,0.065\n\tc-0.471,0-0.638-0.08-0.656-0.07c-0.178-0.625,1.309-3.102,2.294-4.744c1.056-1.759,2.252-3.752,3.151-5.808\n\tc0.4-0.914,0.743-1.951,0.249-2.705c-0.261-0.399-0.708-0.628-1.228-0.628c-1.363,0-3.702,1.654-7.405,4.352\n\tc-1.648,1.201-3.771,2.749-5.007,3.428c0.471-1.447,1.783-4.158,2.799-6.257c3.352-6.926,5.154-10.905,3.226-12.19\n\tc-0.313-0.208-0.671-0.308-1.065-0.308c-2.211,0-5.302,3.529-10.131,9.324c-1.566,1.88-3.065,3.701-4.29,4.98\n\tc0.658-2.637,2.482-7.566,3.575-10.545c2.166-5.905,2.234-6.069,1.812-6.674l-0.322-0.265h-0.521c-0.614,0-0.94,0.315-1.157,0.639\n\tc-1.083,1.625-7.429,9.218-14.776,18.215c-9.186,11.247-20.618,25.244-27.213,33.885c-5.552,7.275-15.321,16.252-26.632,26.648\n\tc-12.835,11.795-27.382,25.164-39.671,39.647c-9.291,10.95-15.632,19.579-18.879,25.688c-1.11-2.641-3.512-7.23-7.478-9.434\n\tc-2.497-1.387-2.524-2.064-2.64-4.912c-0.03-0.726-0.063-1.561-0.145-2.538c-0.292-3.503-2.637-4.507-4.35-5.239\n\tc-1.22-0.522-1.985-0.881-2.321-1.664c-0.354-0.828-0.529-2.516-0.714-4.303c-0.432-4.178-0.921-8.914-4.155-9.474\n\tc-2.194-0.379-2.553-2.841-2.82-6.278c-0.147-1.894-0.275-3.53-1.057-4.506c-0.417-0.521-0.979-0.796-1.627-0.796\n\tc-1.109,0-2.238,0.821-3.433,1.69c-1.21,0.879-2.591,1.923-3.294,1.456c-0.682-0.455-0.436-2.507-0.199-4.491\n\tc0.332-2.768,0.744-6.212-0.665-9.061c-0.703-1.421-1.639-1.72-2.3-1.72c-1.993,0-3.793,2.671-5.698,5.5\n\tc-0.579,0.858-1.377,2.043-1.936,2.681c-0.063-1.228,0.327-3.785,0.601-5.588c0.895-5.886,1.334-9.849-0.647-11.264\n\tc-0.402-0.287-0.842-0.433-1.308-0.433c-1.934,0-3.523,2.531-5.205,5.211c-0.787,1.252-2.063,3.287-2.681,3.678\n\tc-0.082-0.81,0.498-2.995,0.894-4.489c1.103-4.156,2.475-9.329-1.082-10.298c-0.133-0.036-0.271-0.055-0.412-0.055\n\tc-2.719,0-8.7,10.338-17.778,30.726c-6.499,14.595-13.664,32.653-14.784,38.926c-1.278,7.16-0.536,8.665,0.182,10.12\n\tc0.418,0.849,0.78,1.582,0.629,4.002c-0.14,2.243-0.678,4.388-1.247,6.659c-1.07,4.268-2.176,8.682-0.785,14.247\n\tc1.162,4.648,7.209,14.769,12.544,23.698c3.621,6.06,7.709,12.902,8.01,14.507c-0.333,0.213-1.782,0.811-7.586,0.811\n\tc-7.13,0-17.116-0.859-23.724-1.428l-2.749-0.234c-9.665-0.805-36.443-6.166-43.041-7.887c-2.538-0.662-6.552-2.966-10.802-5.405\n\tc-6.211-3.564-12.633-7.25-17.146-7.585c-1.02-0.076-1.875-0.112-2.616-0.112c-4.49,0-6.282,1.348-11.073,4.949\n\tc-1.062,0.798-2.283,1.717-3.729,2.768c-9.126,6.638-14.019,9.476-20.79,13.403c-0.806,0.467-1.13,1.021-0.965,1.644\n\tc0.309,1.167,1.62,1.178,5.963,1.212c2.445,0.02,5.488,0.044,8.011,0.374c2.168,0.283,4.597,0.952,7.167,1.66\n\tc4.812,1.326,10.344,2.849,16.357,2.482c2.671-0.162,5.092-0.296,7.667-0.296c5.559,0,13.24,0.552,28.062,4.65\n\tc20.543,5.679,51.316,18.578,59.868,25.094c1.548,1.18,3.072,2.499,4.836,4.026c8.083,6.998,19.151,16.581,48.991,27.432\n\tc13.902,5.055,28.463,7.512,44.516,7.512c10.679,0,19.864-1.081,27.244-1.949c4.054-0.477,7.555-0.889,10.195-0.971\n\tc11.516-0.36,35.889-2.22,45.706-6.682c7.643-3.474,16.143-4.842,26.164-4.17c0.394,0.026,0.763,0.039,1.11,0.039\n\tc2.429,0,4.028-0.611,4.888-1.868c1.361-1.99,0.256-4.834-0.551-6.912c-0.115-0.296-0.225-0.578-0.355-0.884\n\tc0.247-0.401,2.149-0.791,3.286-1.023c2.866-0.587,6.114-1.252,6.676-3.874c0.09-0.423-0.006-0.862-0.273-1.237\n\tc-1.387-1.95-8.616-3.029-24.778-5.025c-10.793-1.333-23.025-2.845-26.244-4.702c-2.417-1.394-5.083-2.276-7.661-3.128\n\tc-5.369-1.775-10.44-3.452-13.952-9.422c-3.422-5.819,9.125-20.581,18.286-31.36c4.686-5.513,8.732-10.273,10.827-13.765\n\tc5.757-9.595,16.285-46.65,20.249-60.6c0.611-2.149,1.052-3.702,1.277-4.453c1.5-4.999,7.275-13.181,12.761-16.648\n\tc5.154-3.257,5.046-7.05,4.908-11.852c-0.023-0.81-0.047-1.659-0.047-2.552c0-6.047,4.308-10.327,8.964-14.052\n\tc5.427-4.341,5.902-11.041,1.338-18.865c-2.961-5.077,0.408-12.894,3.381-19.791c0.616-1.43,1.222-2.835,1.765-4.192\n\tC367.735,74.247,367.77,72.094,366.745,70.58z" })));
};

var Icon$10 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 506.161 506.161" }, props),
        React.createElement("path", { d: "m165.858 329.247c6.161-5.421 6.766-14.807 1.352-20.974l-.818-.939c-2.599-2.953-6.269-4.745-10.195-4.98-.327 0-.655 0-.989 0-3.605-.006-7.087 1.308-9.79 3.693l-19.921 17.488-18.142 15.923c-6.143 5.428-6.744 14.799-1.345 20.967l.832.953c5.425 6.158 14.811 6.763 20.981 1.352l13.945-12.237z" }),
        React.createElement("path", { d: "m118.026 369.9c-.413 0-.818 0-1.231-.036-4.876-.301-9.428-2.541-12.643-6.218l-.84-.96c-6.678-7.643-5.931-19.245 1.672-25.969l38.078-33.439c3.675-3.216 8.473-4.847 13.347-4.539 4.876.301 9.428 2.54 12.643 6.218l1.167 1.359c6.366 7.663 5.477 19.001-2.006 25.577l-38.064 33.439c-3.346 2.955-7.659 4.58-12.123 4.568zm37.167-64.032c-2.744.014-5.389 1.026-7.442 2.846l-38.064 33.439c-4.669 4.132-5.123 11.259-1.017 15.951l.84.96c4.128 4.676 11.262 5.131 15.951 1.017l38.057-33.439c4.682-4.122 5.14-11.257 1.025-15.944l-.832-.96c-1.97-2.253-4.76-3.624-7.748-3.806z" }),
        React.createElement("path", { d: "m219.282 366.414c-3.605-.005-7.089 1.305-9.797 3.685l-19.644 17.246c-6.173 5.417-6.786 14.812-1.37 20.985 5.417 6.173 14.812 6.786 20.985 1.37l19.644-17.246c6.173-5.41 6.791-14.8 1.381-20.973-2.827-3.226-6.91-5.073-11.199-5.067z" }),
        React.createElement("path", { d: "m199.667 416.942c-10.173.018-18.434-8.215-18.452-18.388-.009-5.317 2.28-10.38 6.279-13.884l19.651-17.246c7.748-6.414 19.154-5.672 26.004 1.693 6.714 7.651 5.956 19.295-1.693 26.011l-19.644 17.246c-3.357 2.953-7.676 4.577-12.145 4.568zm19.622-46.956c-2.746-.021-5.405.96-7.478 2.76l-19.651 17.246c-4.698 4.126-5.161 11.279-1.035 15.976 4.126 4.698 11.279 5.161 15.976 1.035l19.651-17.225c4.696-4.115 5.166-11.258 1.051-15.953-2.151-2.454-5.258-3.859-8.521-3.854z" }),
        React.createElement("path", { d: "m44.004 93.793-39.942 174.253 31.931 17.943 82.63-134.41z" }),
        React.createElement("path", { d: "m37.231 290.763-37.231-20.917 41.77-182.278 81.549 63.143zm-29.106-24.517 26.63 14.941 79.172-128.776-67.703-52.393z" }),
        React.createElement("path", { d: "m119.648 309.013c6.171-5.42 6.782-14.815 1.366-20.988l-.256-.292c-2.593-2.97-6.267-4.779-10.202-5.023-.327 0-.655 0-.989 0-3.605-.006-7.087 1.308-9.79 3.693l-23.856 20.889c-6.171 5.42-6.782 14.815-1.366 20.988 5.309 6.317 14.734 7.133 21.051 1.823.065-.055.13-.11.194-.166l1.807-1.587 18.157-15.937z" }),
        React.createElement("path", { d: "m86.152 337.172c-.455 0-.918 0-1.387-.05-4.97-.383-9.588-2.712-12.849-6.481-6.715-7.647-5.96-19.289 1.686-26.004l23.827-20.91c7.647-6.706 19.28-5.951 25.997 1.686 3.382 3.714 5.112 8.64 4.795 13.653-.301 4.879-2.543 9.435-6.225 12.65l-23.82 20.91c-3.317 2.935-7.595 4.553-12.024 4.546zm23.414-50.912c-2.744.011-5.391 1.023-7.442 2.846l-23.827 20.91c-4.696 4.121-5.161 11.269-1.04 15.964 0 0 .001.001.001.001 2.032 2.366 4.916 3.834 8.025 4.084 2.989.234 5.945-.758 8.189-2.746l23.82-20.91c4.692-4.124 5.157-11.269 1.039-15.965-1.998-2.411-4.895-3.899-8.018-4.119z" }),
        React.createElement("path", { d: "m202.755 350.641c.269-3.938-1.051-7.82-3.664-10.779l-.213-.242c-2.595-2.95-6.26-4.742-10.181-4.98-.327 0-.662 0-.989 0-3.605-.006-7.087 1.307-9.79 3.693l-2.334 2.049-24.105 21.159-6.403 5.592c-6.183 5.595-6.659 15.142-1.065 21.324 2.61 2.885 6.234 4.651 10.115 4.929 3.939.274 7.823-1.046 10.779-3.664l32.82-28.807c2.988-2.611 4.801-6.313 5.03-10.274z" }),
        React.createElement("path", { d: "m155.115 396.936c-.406 0-.804 0-1.209-.036-10.248-.634-18.041-9.456-17.406-19.704.304-4.916 2.547-9.511 6.236-12.775l32.792-28.843c3.681-3.207 8.475-4.837 13.347-4.539 4.869.298 9.417 2.532 12.629 6.204 3.375 3.708 5.101 8.628 4.781 13.632-.308 4.866-2.544 9.408-6.211 12.621l-32.82 28.807c-3.345 2.978-7.663 4.626-12.139 4.633zm22.767-53.937-30.458 26.737c-4.698 4.12-5.175 11.264-1.067 15.972 1.999 2.378 4.877 3.844 7.976 4.063 3.006.213 5.971-.795 8.225-2.796l32.82-28.807c4.695-4.116 5.165-11.258 1.049-15.954-.003-.004-.007-.008-.01-.012-1.993-2.391-4.877-3.861-7.983-4.07h-.754c-2.747 0-5.397 1.013-7.442 2.846z" }),
        React.createElement("path", { d: "m399.398 303.122-115.785-94.348c-44.339 23.543-75.736 11.426-90.748 1.843-7.825-5.106-10.029-15.59-4.923-23.415 1.586-2.431 3.772-4.413 6.346-5.755l38.59-20.497c-.996-.149-1.971-.277-2.846-.363-34.825 5.502-69.995 8.531-105.248 9.064l-67.461 109.722 15.04 11.462 17.68-15.524c12.275-10.776 30.962-9.561 41.738 2.714.001.001.002.003.004.004l.256.292c3.538 4.057 5.891 9.009 6.802 14.315 5.361-3.658 11.795-5.411 18.271-4.98 7.833.488 15.145 4.09 20.305 10.003l.832.953c5.187 5.881 7.808 13.591 7.278 21.415v.043c1.354-.138 2.716-.183 4.077-.135 7.833.489 15.144 4.091 20.305 10.003l-5.315 5.094 5.528-4.852c5.195 5.883 7.821 13.599 7.293 21.429 0 .1-.043.192-.05.292 16.199-1.153 30.265 11.045 31.418 27.244.096 1.352.099 2.709.008 4.061-.365 5.088-2.052 9.993-4.895 14.229l31.724 18.306c6.955 3.944 15.787 1.604 19.878-5.265 3.88-6.556 1.988-15-4.319-19.274l-50.514-35.004c-.043 0-.064-.078-.1-.107l-3.401-2.355c-3.3-2.371-4.053-6.967-1.682-10.267 2.312-3.219 6.759-4.027 10.056-1.828l71.247 49.355c6.572 4.555 15.592 2.92 20.147-3.652.003-.004.006-.008.009-.012 4.471-6.535 2.889-15.445-3.557-20.042l-70.898-50.287c-.043 0-.057-.078-.1-.107-3.312-2.358-4.086-6.954-1.729-10.267s6.954-4.086 10.267-1.729l79.485 56.391c6.952 4.909 16.568 3.253 21.477-3.7 4.752-6.729 3.37-16.006-3.136-21.059l-85.526-61.627c-3.38-2.255-4.292-6.822-2.037-10.202s6.822-4.292 10.202-2.037c.127.085.251.173.373.266l5.848 4.169h.078l79.265 57.11c.149.107.256.242.398.349l1.309.939c.249.172.487.359.711.562l1.423.975c6.625 4.747 15.807 3.478 20.896-2.889 3.043-3.845 4.028-8.929 2.64-13.632-.844-2.914-2.568-5.495-4.934-7.393z" }),
        React.createElement("path", { d: "m282.83 421.24c-3.145.001-6.234-.826-8.957-2.398l-35.026-20.199 2.134-3.13c7.907-11.928 4.646-28.007-7.282-35.914-3.783-2.508-8.159-3.978-12.689-4.263-.883-.043-1.768-.019-2.647.071l-4.774.299.277-4.048c.448-5.749-1.029-11.483-4.198-16.3l-2.668 2.348-4.81-5.236 2.704-2.59c-4.302-3.792-9.744-6.045-15.467-6.403-1.037-.034-2.076-.001-3.109.1l-3.821.285-.477-4.212v-.15c.373-6.782-1.926-13.44-6.403-18.548l-.84-.96c-8.565-9.832-23.125-11.713-33.909-4.383l-4.532 3.045-.953-5.379c-2.417-14.221-15.905-23.789-30.126-21.371-4.756.809-9.196 2.919-12.826 6.096l-19.871 17.445-19.957-15.19 70.158-114.12 1.914-.057c35.061-.535 70.041-3.543 104.679-9l.498-.1.505.043c.939.085 1.978.228 3.052.384l10.672 1.601-48.124 25.556c-6.556 3.387-9.124 11.448-5.737 18.004 1.062 2.055 2.639 3.799 4.577 5.062 14.123 9.014 44.261 20.761 87.148-1.999l2.085-1.11 117.606 95.828c2.92 2.371 5.038 5.582 6.069 9.199 1.718 5.8.508 12.074-3.244 16.819-6.284 7.853-17.615 9.416-25.791 3.557l-3.991-2.981-84.978-61.186c-1.698-1.219-4.063-.831-5.282.867-.004.005-.007.01-.011.016-1.221 1.702-.831 4.071.87 5.292.004.003.008.006.012.009l85.54 61.677c8.293 6.401 9.827 18.312 3.426 26.605-6.195 8.027-17.608 9.761-25.908 3.939l-79.507-56.363c-.825-.585-1.849-.818-2.846-.647-2.069.35-3.462 2.311-3.112 4.38.168.994.725 1.881 1.547 2.465l71.019 50.408c8.024 5.733 9.982 16.833 4.404 24.965-5.664 8.194-16.898 10.245-25.092 4.581-.003-.002-.006-.004-.009-.006l-71.232-49.362c-1.685-1.251-4.064-.899-5.315.786s-.899 4.064.786 5.315c.069.051.139.099.211.146l54.029 37.466c8.216 5.625 10.316 16.845 4.691 25.061-2.423 3.539-6.029 6.098-10.169 7.218-1.603.441-3.259.666-4.923.667zm-34.022-25.08 28.622 16.52c5.336 2.887 12.002.903 14.889-4.433 2.606-4.815 1.268-10.813-3.136-14.065l-40.376-28.018c2.734 5.325 3.964 11.295 3.557 17.267-.288 4.445-1.5 8.78-3.556 12.729zm-7.413-59.357c2.212-.004 4.372.669 6.19 1.928l71.232 49.355c4.961 3.429 11.763 2.19 15.197-2.768 3.375-4.927 2.185-11.649-2.675-15.119l-71.404-50.699c-4.725-3.742-5.522-10.607-1.78-15.332 3.585-4.526 10.074-5.477 14.807-2.17l79.507 56.391c5.368 3.747 12.757 2.432 16.504-2.936 3.597-5.154 2.546-12.219-2.395-16.103l-85.433-61.563c-4.902-3.505-6.034-10.32-2.529-15.222s10.32-6.034 15.222-2.529l5.934 4.205 80.965 58.405c.364.262.711.547 1.039.854l1.003.655c5.068 3.672 12.125 2.734 16.058-2.134 2.336-2.943 3.095-6.839 2.035-10.444-.619-2.234-1.913-4.222-3.707-5.692l-113.985-92.875c-44.958 22.98-77.009 10.331-92.228.605-9.487-6.155-12.188-18.835-6.033-28.322 1.927-2.971 4.592-5.391 7.734-7.024l21.814-11.583c-22.184 3.01-52.471 5.251-87.639 6.403l-64.745 105.366 10.181 7.748 15.503-13.603c13.747-12.071 34.678-10.712 46.749 3.035.003.003.006.007.009.01 2.974 3.364 5.244 7.29 6.674 11.547 5.037-2.448 10.627-3.535 16.214-3.152 8.783.545 16.982 4.583 22.767 11.213l.84.96c4.92 5.576 7.802 12.657 8.175 20.085h.711c7.662.501 14.908 3.664 20.483 8.943l.114-.1 1.928 2.206.206.228 2.241 2.554-.1.1c3.818 5.238 5.999 11.489 6.268 17.965h.434c3.16.206 6.275.863 9.249 1.949-1.368-5.858 2.273-11.716 8.131-13.084.833-.194 1.686-.29 2.541-.285z" }),
        React.createElement("path", { d: "m462.149 91.146-74.605 57.786 69.013 112.249c.454.235.881.519 1.274.847 1.183 1.219 1.898 2.816 2.021 4.511l10.338 16.812 31.902-17.95z" }),
        React.createElement("path", { d: "m468.922 288.124-12.557-20.433-.078-.825c-.046-.871-.399-1.698-.996-2.334l-1.366-.811-.42-.711-70.685-114.939 81.563-63.15 41.777 182.278zm-5.691-22.81 8.153 13.255 26.63-14.941-38.085-166.263-67.696 52.421 66.878 108.777c.441.264.849.579 1.217.939 1.56 1.583 2.583 3.616 2.924 5.813z" }),
        React.createElement("path", { d: "m368.385 168.86c-14.472 5.958-30.597 6.544-45.463 1.651l-39.166-12.714c-5.413-1.716-11.287-1.204-16.321 1.423l-13.276 7.051c-.142.071-.263.157-.413.221l-52.606 27.947c-.749.359-1.237 1.105-1.266 1.935-.058.751.307 1.473.946 1.871 15.474 9.875 41.977 17.075 79.919-4.696 2.644-1.513 5.946-1.245 8.31.676l119.584 97.471c1.665 1.369 3.169 2.923 4.482 4.632l29.569-29.59-63.015-102.494z" }),
        React.createElement("path", { d: "m412.809 301.649-2.476-3.138c-1.144-1.498-2.457-2.859-3.913-4.055l-119.612-97.443c-1.219-.974-2.908-1.112-4.269-.349-39.494 22.682-67.262 15.026-83.605 4.61-1.72-1.084-2.711-3.022-2.583-5.051.086-2.09 1.298-3.969 3.166-4.909l66.273-35.196c5.882-3.082 12.752-3.686 19.082-1.679l39.152 12.693c14.062 4.633 29.317 4.083 43.008-1.551l14.108-5.777 66.067 107.432zm-128.428-112.612c2.514-.005 4.953.854 6.908 2.433l119.591 97.471c.842.679 1.643 1.409 2.398 2.184l24.901-24.901-59.956-97.55-8.481 3.472c-15.258 6.281-32.259 6.896-47.932 1.736l-39.131-12.707c-4.506-1.415-9.39-.98-13.575 1.21l-64.267 34.151c14.891 8.651 39.387 13.923 74.156-6.047 1.641-.944 3.498-1.444 5.388-1.452z" })));
};

var Icon$11 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "-21 -21 682.66669 682" }, props),
        React.createElement("path", { d: "m629.609375 303.507812-81.988281-40.820312-180.261719 89.753906c-14.582031 7.261719-30.957031 11.101563-47.359375 11.101563s-32.777344-3.839844-47.359375-11.101563l-180.261719-89.753906-81.988281 40.820312c-6.367187 3.171876-10.390625 9.671876-10.390625 16.785157 0 7.117187 4.023438 13.613281 10.390625 16.785156l278.964844 138.898437c9.59375 4.78125 20.117187 7.167969 30.644531 7.167969 10.523438 0 21.050781-2.386719 30.644531-7.160156l278.964844-138.90625c6.367187-3.171875 10.390625-9.667969 10.390625-16.785156 0-7.113281-4.023438-13.613281-10.390625-16.785157zm0 0" }),
        React.createElement("path", { d: "m629.609375 460.65625-81.988281-40.824219-180.261719 89.757813c-14.582031 7.261718-30.957031 11.09375-47.359375 11.09375s-32.777344-3.832032-47.359375-11.09375l-180.261719-89.757813-81.988281 40.824219c-6.367187 3.167969-10.390625 9.671875-10.390625 16.78125 0 7.113281 4.023438 13.613281 10.390625 16.789062l278.964844 138.898438c9.59375 4.777344 20.117187 7.167969 30.644531 7.167969 10.523438-.003907 21.050781-2.390625 30.644531-7.167969l278.964844-138.898438c6.367187-3.175781 10.390625-9.675781 10.390625-16.789062s-4.023438-13.613281-10.390625-16.78125zm0 0" }),
        React.createElement("path", { d: "m10.390625 179.972656 278.964844 138.902344c9.59375 4.773438 20.117187 7.167969 30.644531 7.167969s21.050781-2.394531 30.644531-7.167969l278.964844-138.902344c6.367187-3.167968 10.390625-9.671875 10.390625-16.78125 0-7.117187-4.023438-13.621094-10.390625-16.789062l-278.964844-138.90625c-19.191406-9.550782-42.097656-9.550782-61.289062 0l-278.964844 138.90625c-6.367187 3.167968-10.390625 9.671875-10.390625 16.789062 0 7.109375 4.023438 13.613282 10.390625 16.78125zm0 0" })));
};

var Icon$12 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 502.436 502.436" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "M402.481,300.41c0.033-0.051,0.068-0.098,0.102-0.148C402.86,299.793,402.459,300.432,402.481,300.41z" }),
            React.createElement("path", { d: "M402.581,199.504c-0.029-0.055-0.062-0.105-0.094-0.16c0.064,0.113,0.143,0.254,0.201,0.359\n\t\t\tC402.651,199.637,402.616,199.571,402.581,199.504z" }),
            React.createElement("path", { d: "M406.079,55.139C406.471,54.674,405.678,55.6,406.079,55.139L406.079,55.139z" }),
            React.createElement("g", null,
                React.createElement("path", { d: "M292.844,383.368C293.102,383.25,293.04,383.279,292.844,383.368L292.844,383.368z" }),
                React.createElement("path", { d: "M465.85,19.072c-1.174-2.404-2.348-4.809-3.521-7.215c-3.99,2.063-7.865,4.352-11.678,6.723\n\t\t\t\tc-2.168,1.35-4.312,2.74-6.438,4.156l-2.803,1.896c-0.859-1.303-1.721-2.605-2.578-3.91l2.768-1.709\n\t\t\t\tc2.293-1.393,4.604-2.76,6.939-4.078c3.986-2.254,8.037-4.42,12.189-6.348c-0.797-1.635-1.596-3.27-2.395-4.904\n\t\t\t\tc-0.473-0.971-0.945-1.939-1.42-2.908c-0.367-0.752-0.23-0.936-1.041-0.643c-7.271,2.625-14.391,5.65-21.355,8.998\n\t\t\t\tc-16.805,8.078-33.145,17.945-47.258,30.191c-14.646,12.707-27.654,27.381-36.574,44.721\n\t\t\t\tc-8.943,17.389-13.643,36.518-13.912,56.063c-0.133,9.852,1.146,19.521,2.941,29.184c1.818,9.791,5.121,19.123,8.516,28.455\n\t\t\t\tc2.318,6.732,5.961,12.953,8.506,19.604c1.656,4.328,2.861,8.682,3.896,13.186c0.953,4.148,1.133,8.771,0.643,12.994\n\t\t\t\tc-0.48,4.143-1.887,7.734-3.979,11.306c-2.197,3.748-5.549,6.987-8.752,9.877c-3.389,3.059-7.027,5.823-10.812,8.371\n\t\t\t\tc-16.141,10.856-34.52,18.27-52.9,24.368c-0.593,0.197-1.188,0.379-1.781,0.572l-37.776,77.905\n\t\t\t\tc0.518-0.172,1.038-0.334,1.556-0.508c9.101-3.029,18.152-6.215,27.103-9.67c3.841-1.482,7.658-3.014,11.472-4.568\n\t\t\t\tc0.313-0.129,1.05-0.448,1.05-0.448s0.495,1.215,0.717,1.715c1.938,4.396,3.873,8.787,5.812,13.183\n\t\t\t\tc0.8,1.813,1.601,3.629,2.399,5.44c0.138,0.313,0.274,0.629,0.414,0.94c0.006,0.017-2.73,1.261-3.295,1.517\n\t\t\t\tc0.129-0.06,0.25-0.114,0.346-0.159c-0.1,0.047-0.235,0.108-0.444,0.204c-15.015,6.884-30.364,13.048-45.89,18.673\n\t\t\t\tc-5.586,2.023-11.205,3.959-16.837,5.852l-45.024,92.852c6.834-2.465,13.628-5.039,20.391-7.648\n\t\t\t\tc18.019-6.959,35.824-14.482,53.357-22.588c35.633-16.473,70.357-35.328,102.297-58.234\n\t\t\t\tc30.525-22.016,59.324-48.219,78.301-81.114c9.527-16.517,16.473-34.782,19.074-53.728c2.66-19.358,0.836-39.19-5.188-57.772\n\t\t\t\tc-3.971-12.25-9.643-24.102-16.756-34.852c-3.158-4.773-6.484-9.369-9.947-13.92c-1.967-2.58-4.131-5.012-6.264-7.455\n\t\t\t\tc-3.205-3.674-5.84-7.859-8.459-11.953c-4.441-6.939-7.707-14.865-9.32-22.945c-1.992-9.973-1.287-19.959,1.338-29.74\n\t\t\t\tc5.035-18.758,16.883-35.439,29.934-49.518c8.021-8.656,16.82-16.625,26.174-23.818c1.865-1.436,3.756-2.84,5.676-4.199\n\t\t\t\tC466.758,20.401,466.6,20.608,465.85,19.072z M403.092,299.358c0,0-0.201,0.381-0.51,0.903c-0.072,0.109-0.096,0.144-0.102,0.148\n\t\t\t\tc-8.385,12.725-18.254,23.93-29.76,33.943c-10.844,9.438-22.645,17.574-34.791,25.221c-3.59-6.113-7.18-12.229-10.77-18.344\n\t\t\t\tc15.223-8.717,30.031-18.301,42.879-30.336c6.33-5.932,11.947-12.385,17.027-19.408l1.197-1.566L403.092,299.358\n\t\t\t\t M402.489,199.344c-0.121-0.217-0.18-0.324,0.094,0.16c0.254,0.459,0.215,0.391,0.105,0.199\n\t\t\t\tc8.68,15.752,14.639,33.172,14.564,51.32c-5.246-0.1-10.494-0.201-15.74-0.301c0.66-13.469-2.85-26.854-8.238-39.109\n\t\t\t\tc-2.982-6.785-6.766-13.166-10.443-19.588c-3.178-5.543-5.941-11.195-8.627-16.988c2.039-0.92,4.078-1.84,6.117-2.758\n\t\t\t\tc1.311-0.59,4.99-2.266,4.99-2.266l0.332,0.695c2.414,4.66,4.896,9.178,7.66,13.639\n\t\t\t\tC396.393,189.333,399.608,194.237,402.489,199.344z M406.079,55.139c-9.127,10.514-17.299,21.643-23.01,34.42\n\t\t\t\tc-5.342,11.959-8.377,24.941-8.166,38.061c-3.402-0.049-6.807-0.098-10.211-0.146c0.506-17.471,6.057-34.4,14.984-49.367\n\t\t\t\tc4.535-7.607,9.904-14.607,15.695-21.293c1.395-1.611,2.891-3.137,4.355-4.684c0.527-0.555,2.143-2.352,2.143-2.352\n\t\t\t\ts3.311,3.207,4.785,4.619c0.02,0.018,0.035,0.035,0.055,0.053C406.489,54.67,406.28,54.901,406.079,55.139z" })),
            React.createElement("path", { d: "M291.195,210.11c0-70.35-57.233-127.584-127.583-127.584C93.263,82.526,36.03,139.76,36.03,210.11\n\t\t\tc0,20.615,4.921,40.1,13.64,57.353l113.942,234.973l113.96-235.01C286.28,250.182,291.195,230.709,291.195,210.11z\n\t\t\t M163.612,280.711c-38.931,0-70.604-31.671-70.604-70.602c0-38.932,31.674-70.605,70.604-70.605s70.604,31.674,70.604,70.605\n\t\t\tC234.215,249.04,202.542,280.711,163.612,280.711z" }))));
};

var Icon$13 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "-8 0 464 464" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "m154.632812 336.320312c-2.738281 4.984376-2.703124 10.839844.085938 15.679688 2.792969 4.839844 7.847656 7.800781 13.539062 7.910156l2.191407.050782c-6.5625-7.3125-11.664063-15.945313-14.808594-25.480469zm0 0" }),
            React.createElement("path", { d: "m154.71875 272c-2.789062 4.832031-2.824219 10.695312-.085938 15.679688l1.007813 1.839843c3.144531-9.535156 8.246094-18.160156 14.808594-25.480469l-2.191407.050782c-5.691406.117187-10.753906 3.078125-13.539062 7.910156zm0 0" }),
            React.createElement("path", { d: "m176.089844 367.742188c.117187 5.691406 3.078125 10.753906 7.910156 13.539062 4.816406 2.78125 10.679688 2.824219 15.679688.085938l1.839843-1.007813c-9.535156-3.144531-18.160156-8.246094-25.480469-14.808594zm0 0" }),
            React.createElement("path", { d: "m176 395.144531c-1.601562-.929687-3.039062-2.039062-4.433594-3.199219l-19.566406 64.054688 24-16 16 24 15.015625-61.03125c-2.191406-1.394531-4.273437-2.96875-6.085937-4.878906-8.296876 2.460937-17.242188 1.484375-24.929688-2.945313zm0 0" }),
            React.createElement("path", { d: "m277.550781 359.960938 2.191407-.050782c5.691406-.117187 10.753906-3.078125 13.539062-7.910156 2.78125-4.832031 2.824219-10.695312.085938-15.679688l-1.007813-1.839843c-3.152344 9.542969-8.246094 18.167969-14.808594 25.480469zm0 0" }),
            React.createElement("path", { d: "m209.320312 382.488281 1.054688 1.742188c2.945312 4.867187 8.039062 7.777343 13.625 7.777343s10.679688-2.902343 13.625-7.777343l1.054688-1.742188c-4.742188.984375-9.648438 1.511719-14.679688 1.511719s-9.9375-.527344-14.679688-1.511719zm0 0" }),
            React.createElement("path", { d: "m272 395.144531c-7.695312 4.429688-16.632812 5.40625-24.929688 2.945313-1.8125 1.917968-3.894531 3.484375-6.085937 4.878906l15.015625 61.03125 16-24 24 16-19.566406-64.054688c-1.394532 1.160157-2.832032 2.269532-4.433594 3.199219zm0 0" }),
            React.createElement("path", { d: "m271.910156 256.265625c-.117187-5.691406-3.078125-10.753906-7.910156-13.539063-4.824219-2.78125-10.6875-2.824218-15.679688-.085937l-1.839843 1.007813c9.535156 3.144531 18.160156 8.246093 25.480469 14.808593zm0 0" }),
            React.createElement("path", { d: "m224 368c30.871094 0 56-25.128906 56-56s-25.128906-56-56-56-56 25.128906-56 56 25.128906 56 56 56zm0-48c-13.230469 0-24-10.769531-24-24 0-10.414062 6.710938-19.214844 16-22.527344v-9.472656h16v9.472656c9.289062 3.3125 16 12.113282 16 22.527344h-16c0-4.414062-3.585938-8-8-8s-8 3.585938-8 8 3.585938 8 8 8c13.230469 0 24 10.769531 24 24 0 10.414062-6.710938 19.214844-16 22.527344v9.472656h-16v-9.472656c-9.289062-3.3125-16-12.113282-16-22.527344h16c0 4.414062 3.585938 8 8 8s8-3.585938 8-8-3.585938-8-8-8zm0 0" }),
            React.createElement("path", { d: "m199.679688 242.632812c-4.992188-2.722656-10.855469-2.6875-15.679688.085938-4.832031 2.792969-7.800781 7.847656-7.910156 13.539062l-.050782 2.191407c7.3125-6.5625 15.945313-11.664063 25.480469-14.808594zm0 0" }),
            React.createElement("path", { d: "m248.320312 381.367188c5 2.746093 10.863282 2.695312 15.679688-.085938 4.832031-2.792969 7.800781-7.847656 7.910156-13.539062l.050782-2.191407c-7.3125 6.5625-15.945313 11.664063-25.480469 14.808594zm0 0" }),
            React.createElement("path", { d: "m152 312c0-5.03125.527344-9.9375 1.511719-14.679688l-1.742188 1.054688c-4.867187 2.945312-7.769531 8.039062-7.769531 13.625s2.902344 10.679688 7.777344 13.625l1.742187 1.054688c-.992187-4.734376-1.519531-9.648438-1.519531-14.679688zm0 0" }),
            React.createElement("path", { d: "m296.222656 298.375-1.742187-1.054688c.992187 4.742188 1.519531 9.648438 1.519531 14.679688s-.527344 9.9375-1.511719 14.679688l1.742188-1.054688c4.867187-2.945312 7.769531-8.03125 7.769531-13.625s-2.902344-10.679688-7.777344-13.625zm0 0" }),
            React.createElement("path", { d: "m293.28125 272c-2.792969-4.832031-7.847656-7.800781-13.539062-7.910156l-2.191407-.050782c6.5625 7.3125 11.664063 15.945313 14.808594 25.480469l1.007813-1.839843c2.738281-4.984376 2.703124-10.839844-.085938-15.679688zm0 0" }),
            React.createElement("path", { d: "m238.679688 241.519531-1.054688-1.742187c-2.945312-4.867188-8.039062-7.777344-13.625-7.777344s-10.679688 2.902344-13.625 7.777344l-1.054688 1.742187c4.742188-.984375 9.648438-1.511719 14.679688-1.511719s9.9375.519532 14.679688 1.511719zm0 0" }),
            React.createElement("path", { d: "m32 32v31.191406c15.648438-3.191406 28-15.542968 31.191406-31.191406zm0 0" }),
            React.createElement("path", { d: "m32 320h31.191406c-3.191406-15.648438-15.542968-28-31.191406-31.191406zm0 0" }),
            React.createElement("path", { d: "m416 32h-31.191406c3.191406 15.648438 15.542968 28 31.191406 31.191406zm0 0" }),
            React.createElement("path", { d: "m416 320v-31.191406c-15.648438 3.191406-28 15.542968-31.191406 31.191406zm0 0" }),
            React.createElement("path", { d: "m320 312c0 2.761719-.464844 5.414062-1.136719 8h49.777344c3.527344-24.472656 22.886719-43.832031 47.359375-47.359375v-193.28125c-24.472656-3.527344-43.832031-22.886719-47.359375-47.359375h-289.28125c-3.527344 24.472656-22.886719 43.832031-47.359375 47.359375v193.28125c24.472656 3.527344 43.832031 22.886719 47.359375 47.359375h49.777344c-.671875-2.585938-1.136719-5.238281-1.136719-8 0-8.863281 3.617188-17.113281 9.910156-23.070312-2.476562-8.3125-1.484375-17.25 2.945313-24.929688 4.441406-7.679688 11.679687-13.007812 20.121093-15.023438 2.015626-8.441406 7.34375-15.679687 15.023438-20.121093 7.6875-4.429688 16.632812-5.414063 24.929688-2.945313 5.957031-6.292968 14.199218-9.910156 23.070312-9.910156s17.113281 3.617188 23.070312 9.910156c8.296876-2.46875 17.234376-1.484375 24.929688 2.945313 7.679688 4.441406 13.007812 11.679687 15.023438 20.121093 8.441406 2.015626 15.679687 7.34375 20.121093 15.023438 4.429688 7.679688 5.421875 16.617188 2.945313 24.929688 6.292968 5.964843 9.910156 14.207031 9.910156 23.070312zm0-176h-88v-16h88zm-160-88h128v48h-128zm-32 72h88v16h-88zm88 80h-88v-16h88zm72 0h-56v-16h56zm-160-32v-16h192v16zm176 32v-16h16v16zm0 0" }),
            React.createElement("path", { d: "m0 0v352h137.734375c-1.359375-5.246094-1.398437-10.71875 0-16h-121.734375v-320h416v320h-121.734375c1.40625 5.28125 1.359375 10.753906 0 16h137.734375v-352zm0 0" }),
            React.createElement("path", { d: "m176 64h96v16h-96zm0 0" }))));
};

var Icon$14 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 207.918 207.918" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "M59.655,180.863c-0.926,1.604-2.606,2.5-4.334,2.5c-0.849,0-1.708-0.217-2.496-0.671\n\tC22.606,165.237,3.833,132.739,3.834,97.879c0-20.076,6.034-39.288,17.232-55.5l-6.344-6.267c-1.372-1.355-1.842-3.379-1.208-5.2\n\tc0.634-1.822,2.26-3.116,4.177-3.326l21.274-2.333c1.499-0.168,2.988,0.354,4.059,1.413c1.071,1.058,1.608,2.543,1.462,4.041\n\tl-2.074,21.301c-0.187,1.92-1.461,3.561-3.275,4.217c-0.555,0.201-1.13,0.299-1.7,0.299c-1.294,0-2.563-0.502-3.515-1.443\n\tl-5.612-5.544c-9.411,14.238-14.476,30.926-14.476,48.343c0,31.3,16.856,60.48,43.993,76.153\n\tC60.218,175.414,61.037,178.472,59.655,180.863z M194.591,92.675c-2.761,0-5,2.238-5,5l0,0.204\n\tc0,48.457-39.422,87.879-87.879,87.879c-1.773,0-3.543-0.056-5.308-0.161l1.911-7.653c0.467-1.871-0.184-3.845-1.672-5.07\n\tc-1.49-1.228-3.551-1.486-5.297-0.67l-19.385,9.068c-1.364,0.639-2.368,1.857-2.732,3.318s-0.052,3.008,0.852,4.212l12.848,17.117\n\tc0.956,1.273,2.445,1.999,3.999,1.999c0.329,0,0.662-0.032,0.992-0.1c1.891-0.382,3.393-1.817,3.86-3.689l2.169-8.688\n\tc2.579,0.203,5.169,0.317,7.766,0.317c53.971,0,97.879-43.908,97.879-97.915l0-0.168C199.591,94.913,197.352,92.675,194.591,92.675z\n\t M202.255,51.683c-1.491-1.223-3.552-1.48-5.299-0.658l-7.485,3.52C173.208,21.73,139.285,0,101.712,0\n\tC84.453,0.001,67.485,4.556,52.64,13.173c-2.388,1.387-3.2,4.446-1.814,6.834c1.386,2.388,4.444,3.203,6.834,1.814\n\tC70.982,14.089,86.215,10.001,101.713,10c33.671,0,64.077,19.434,78.71,48.8l-7.89,3.711c-1.746,0.82-2.863,2.572-2.872,4.501\n\tc-0.009,1.929,1.092,3.691,2.83,4.528l19.281,9.288c0.686,0.33,1.428,0.495,2.17,0.495c0.727,0,1.454-0.158,2.128-0.476\n\tc1.363-0.641,2.364-1.861,2.726-3.323l5.142-20.774C204.401,54.878,203.746,52.906,202.255,51.683z M70.811,138.821\n\tc-2.761,0-5-2.238-5-5s2.239-5,5-5h25.902v-26.94h-7.435c-12.939,0-23.467-10.527-23.467-23.467\n\tc0-12.946,10.527-23.474,23.467-23.474h7.435v-5.746c0-2.762,2.239-5,5-5s5,2.238,5,5v5.746h25.902c2.761,0,5,2.238,5,5\n\ts-2.239,5-5,5h-25.902v26.94h7.431c12.942,0,23.471,10.529,23.471,23.471s-10.529,23.47-23.471,23.47h-7.431v7.741\n\tc0,2.762-2.239,5-5,5s-5-2.238-5-5v-7.741H70.811z M89.278,91.881h7.435V64.94h-7.435c-7.426,0-13.467,6.041-13.467,13.467\n\tC75.811,85.84,81.852,91.881,89.278,91.881z M106.713,128.821h7.431c7.428,0,13.471-6.043,13.471-13.47\n\tc0-7.428-6.043-13.471-13.471-13.471h-7.431V128.821z" }))));
};

var Icon$15 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 56 56" }, props),
        React.createElement("g", null,
            React.createElement("path", { id: "Shape", d: "m54.89 19.33c-1.65-3.16-4.39-5.33-7.89-5.33 1.9387753 4.8214002 2.9563558 9.9635739 3 15.16.1921013 6.0688357-2.3831761 11.8963206-7 15.84 5.82.28 10.9-2.58 12.85-8.55 1.83-5.66 1.45-12.53-.96-17.12z" }),
            React.createElement("path", { id: "Shape", d: "m18.16 44.81c3.2315917 2.0831812 6.9951556 3.1907245 10.84 3.19 3.83925-.0374554 7.5924307-1.1419431 10.84-3.19 5.22-3.34 8.16-8.69 8.16-15.64 0-11.67-7.36-29.17-19-29.17-11.1 0-18.22 15.8-18.92 27-.48 7.47 1.67 13.7 8.08 17.81zm6.36-41.71c1.3871963-.71080538 2.9213462-1.08749398 4.48-1.1.5522847 0 1 .44771525 1 1s-.4477153 1-1 1c-1.2497589.01216582-2.4792834.31697831-3.59.89-.4916536.2469243-1.0904244.05031299-1.34-.44-.1210697-.23840257-.1416226-.51536113-.0570687-.76902291.0845539-.25366177.2671714-.46289687.5070687-.58097709zm4.36 25.9c-2.88-.37-6.88-.87-6.88-5.5 0-3.22 2.93-5.1 6-5.44v-2.06c0-.5522847.4477153-1 1-1s1 .4477153 1 1v2.05c4.27.37 5.81 3.07 5.88 3.19.1786328.3126074.1769222.696768-.0044873 1.0077722-.1814095.3110043-.5149577.5016032-.875.5-.3600423-.0016031-.6918799-.1951648-.8705127-.5077722-.06-.13-1.35-2.24-5.13-2.24-2.08 0-5 1.09-5 3.5 0 2.73 1.85 3.1 5.12 3.51 2.88.36 6.88.86 6.88 5.49 0 2.5-1.6 5.11-6 5.5v2c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1v-2c-4-.2-5.54-1.59-5.71-1.76-.3921222-.3921222-.3921222-1.0278778 0-1.42s1.0278778-.3921222 1.42 0c1.54 1.33 10.29 2.6 10.29-2.32 0-2.73-1.85-3.1-5.12-3.5zm-12.28-17.48c1.0099054-1.85917744 2.2422964-3.58855444 3.67-5.15.3783151-.40316784 1.0118321-.42331501 1.415-.04499997.4031678.37831504.423315 1.0118321.045 1.41499997-1.3167051 1.43547667-2.4518907 3.0274234-3.38 4.74-.2761424.4832492-.8917508.6511424-1.375.375s-.6511424-.8917508-.375-1.375z" }),
            React.createElement("path", { id: "Shape", d: "m15 45c-8.88-7.41-8.36-20.14-4-31-3.55 0-6.26 2.19-7.89 5.33-2.41 4.59-2.79 11.46-1 17.09 2.02 6.08 7.13 8.82 12.89 8.58z" }),
            React.createElement("path", { id: "Shape", d: "m51.37 50.82 5.18-.49c-2.69-2-2.54-1.91-2.62-2-.3695814-.3660786-.5548165-.8790296-.5043991-1.3967767.0504173-.5177471.3311345-.9853244.7643991-1.2732233l.33-.18-2.79-.63c-3.3740505 1.9352367-7.3317613 2.5918972-11.15 1.85-7.0998733 4.3760158-16.0601267 4.3760158-23.16 0-3.823751.72837-7.78190651.0763551-11.17-1.84l-2.77.63.25.13c.459298.2749348.76648497.7459757.8328805 1.2771399.06639553.5311643-.11539102 1.0633268-.4928805 1.4428601-.08.08 0 0-2.62 2l5.15.49c.64038677.0713049 1.18894097.490663 1.42571345 1.0899279.23677249.5992649.12299447 1.2803137-.29571345 1.7700721l-.56.86 6.55-2.17c.9183874-.2960905 1.9231368-.1323536 2.7.44l2.51 1.88c.1137149.0896251.2677225.108876.4.05 6.09-2.89 5.67-2.75 6.15-2.75.4614024.000194.9038362.1836422 1.23.51.13.13 0 0 2.29 3.4 2.27-3.39 2.16-3.26 2.29-3.4.5872385-.5903148 1.5116873-.6785576 2.2-.21l5.18 2.44c.1322775.058876.2862851.0396251.4-.05l2.51-1.88c.7768632-.5723536 1.7816126-.7360905 2.7-.44l6.55 2.17-.56-.86c-.4172055-.4855792-.5340677-1.1610366-.3042517-1.7585583.2298161-.5975217.7691853-1.0205824 1.4042517-1.1014417z" }),
            React.createElement("path", { id: "Shape", d: "m46.71 5.71 1-1c.2536586-.25365856.3527236-.62337399.2598781-.96987806-.0928455-.34650406-.363496-.61715454-.71-.71000002-.3465041-.09284548-.7162195.00621949-.9698781.25987808l-1 1c-.3921221.39212218-.3921221 1.02787781 0 1.41999996.3921222.39212216 1.0278778.39212218 1.42.00000004z" }),
            React.createElement("path", { id: "Shape", d: "m48.32 9 3-1c.3394023-.11432499.5920313-.40103461.6627241-.75212813s-.0512905-.71323147-.32-.95-.6433218-.31219686-.9827241-.19787187l-3 1c-.3394023.11432498-.5920313.40103461-.6627241.75212813-.0706929.35109352.0512905.71323148.32.95000001s.6433218.31219685.9827241.19787186z" }),
            React.createElement("path", { id: "Shape", d: "m12.71 4.29-1-1c-.2536586-.25365857-.623374-.35272352-.969878-.25987804-.3465041.09284548-.6171546.36349595-.71.71-.09284552.34650405.0062194.71621947.259878.96987804l1 1c.3921222.39212215 1.0278778.39212214 1.42-.00000002.3921221-.39212217.3921222-1.0278778 0-1.41999998z" }),
            React.createElement("path", { id: "Shape", d: "m6.05 6.68c-.10156011.25804893-.09140308.54668422.02804477.7969559.11944785.25027169.33745932.43970373.60195523.5230441 3.14 1 3.04 1 3.32 1 .4927375.00386501.9148502-.35178371.9946449-.83803264.0797947-.48624892-.2065147-.95815151-.6746449-1.11196736l-3-1c-.25193645-.08555066-.52757913-.06717426-.76592958.05106258-.23835046.11823684-.41975528.32658479-.50407042.57893742z" }))));
};

var Icon$16 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 500 500" }, props),
        React.createElement("path", { d: "M379.93,362.87A119.82,119.82,0,1,1,499.75,243.05,120,120,0,0,1,379.93,362.87Zm0-214.63a94.82,94.82,0,1,0,94.82,94.81A94.92,94.92,0,0,0,379.93,148.24Z" }),
        React.createElement("circle", { cx: "417.97", cy: "202.09", r: "23.96" }),
        React.createElement("path", { d: "M119.58,362.87A119.82,119.82,0,1,1,239.39,243.05,120,120,0,0,1,119.58,362.87Zm0-214.63a94.82,94.82,0,1,0,94.81,94.81A94.92,94.92,0,0,0,119.58,148.24Z" }),
        React.createElement("circle", { cx: "157.62", cy: "202.09", r: "23.96" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$I,
    GroupsIcon: Icon$J,
    HamburgerIcon: Icon$K,
    HamburgerCloseIcon: Icon$L,
    HomeIcon: Icon$M,
    IfoIcon: Icon$N,
    InfoIcon: Icon$O,
    LanguageIcon: Icon$P,
    LogoIcon: Logo,
    MoonIcon: Icon$Q,
    MoreIcon: Icon$R,
    NftIcon: Icon$S,
    PoolIcon: Icon$T,
    SunIcon: Icon$U,
    TelegramIcon: Icon$V,
    TicketIcon: Icon$W,
    TradeIcon: Icon$X,
    TwitterIcon: Icon$Y,
    RedditIcon: Icon$Z,
    AuditIcon: Icon$_,
    GooseIcon: Icon$$,
    HandshakeIcon: Icon$10,
    LayerIcon: Icon$11,
    RoadmapIcon: Icon$12,
    BondsIcon: Icon$13,
    VaultsIcon: Icon$14,
    EggHouseIcon: Icon$15,
    GlassesIcon: Icon$16
});

var MenuButton = styled(Button)(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$x;

var StyledLink$1 = styled(Link$1)(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Logo$1 = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React.createElement(React.Fragment, null,
        React.createElement(Icon$q, { className: "mobile-icon" }),
        React.createElement(Logo, { className: "desktop-icon", isDark: isDark })));
    return (React.createElement(Flex, null,
        React.createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React.createElement(Icon$L, { width: "24px", color: "textSubtle" })) : (React.createElement(Icon$K, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React.createElement(StyledLink$1, { as: "a", href: href, "aria-label": "Pancake home page" }, innerLogo)) : (React.createElement(StyledLink$1, { to: href, "aria-label": "Pancake home page" }, innerLogo))));
};
var templateObject_1$y;

var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://exchange.pancakeswap.finance",
            },
            {
                label: "Liquidity",
                href: "https://exchange.pancakeswap.finance/#/pool",
            },
        ],
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
    },
    // {
    //   label: "Pools",
    //   icon: "PoolIcon",
    //   href: "/syrup",
    // },
    // {
    //   label: "Lottery",
    //   icon: "TicketIcon",
    //   href: "/lottery",
    // },
    // {
    //   label: "NFT",
    //   icon: "NftIcon",
    //   href: "/nft",
    // },
    // {
    //   label: "Profile & Teams",
    //   icon: "GroupsIcon",
    //   items: [
    //     {
    //       label: "Leaderboard",
    //       href: "/",
    //     },
    //     {
    //       label: "YourProfile",
    //       href: "/",
    //     },
    //   ],
    //   calloutClass: "rainbow",
    // },
    // {
    //   label: "Info",
    //   icon: "InfoIcon",
    //   items: [
    //     {
    //       label: "Overview",
    //       href: "https://pancakeswap.info",
    //     },
    //     {
    //       label: "Tokens",
    //       href: "https://pancakeswap.info/tokens",
    //     },
    //     {
    //       label: "Pairs",
    //       href: "https://pancakeswap.info/pairs",
    //     },
    //     {
    //       label: "Accounts",
    //       href: "https://pancakeswap.info/accounts",
    //     },
    //   ],
    // },
    // {
    //   label: "IFO",
    //   icon: "IfoIcon",
    //   items: [
    //     {
    //       label: "Next",
    //       href: "/ifo",
    //     },
    //     {
    //       label: "History",
    //       href: "/ifo/history",
    //     },
    //   ],
    // },
    {
        label: "Check LP",
        icon: "Glasses",
        href: "https://howmuchismylp.com/",
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            {
                label: "Roadmap",
                href: "https://docs.tomyumgoong.finance/tomyumgoong/roadmap",
            },
            {
                label: "Docs",
                href: "http://docs.tomyumgoong.finance",
            },
            {
                label: "Github",
                href: "https://github.com/TomYumGoongFinance",
            },
        ],
    },
];
var socials = [
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: [
            {
                label: "Announcement",
                href: "https://t.me/tomyumgoongfinance",
            },
            {
                label: "English",
                href: "https://t.me/tomyumgoong_finance",
            },
            {
                label: "ไทย",
                href: "https://t.me/tomyumgoong_thailand",
            },
        ],
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/TomyumgoongF",
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = keyframes(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled.div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.textSubtle : "transparent");
});
var MenuEntry = styled.div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return (secondary ? theme.colors.background : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var templateObject_1$z, templateObject_2$a, templateObject_3$6;

var Container$2 = styled.div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled.div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className;
    var _c = useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React.createElement(Container$2, null,
        React.createElement(MenuEntry, { onClick: handleClick, className: className },
            icon,
            React.createElement(LinkLabel, { isPushed: isPushed }, label),
            isOpen ? React.createElement(Icon$8, null) : React.createElement(Icon$7, null)),
        React.createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React.Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var templateObject_1$A, templateObject_2$b;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : NavLink;
    var props = isHttpLink ? { href: href, target: "_blank" } : { to: href };
    return React.createElement(Tag, __assign({}, props, otherProps));
};

var Icons = IconModule;
var Container$3 = styled.div(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React.createElement(Container$3, null, links.map(function (entry) {
        var Icon = Icons[entry.icon];
        var iconElement = React.createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            return (React.createElement(Accordion, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: entry.initialOpenState, className: calloutClass }, isPushed &&
                entry.items.map(function (item) { return (React.createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React.createElement(MenuLink, { href: item.href }, item.label))); })));
        }
        return (React.createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React.createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React.createElement(LinkLabel, { isPushed: isPushed }, entry.label))));
    })));
};
var templateObject_1$B;

var Icons$1 = IconModule;
var MoonIcon = Icons$1.MoonIcon, SunIcon = Icons$1.SunIcon, LanguageIcon = Icons$1.LanguageIcon;
var Container$4 = styled.div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var PriceLink = styled.a(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var SettingsEntry = styled.div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled.div(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, toggleTheme = _a.toggleTheme, isDark = _a.isDark, cakePriceUsd = _a.cakePriceUsd, currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang, priceLink = _a.priceLink;
    if (!isPushed) {
        return (React.createElement(Container$4, null,
            React.createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React.createElement(Icon$l, null))));
    }
    return (React.createElement(Container$4, null,
        React.createElement(SocialEntry, null,
            cakePriceUsd ? (React.createElement(PriceLink, { href: priceLink, target: "_blank" },
                React.createElement(Icon$v, { width: "24px", mr: "8px" }),
                React.createElement(Text, { color: "textSubtle", bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (React.createElement(Skeleton, { width: 80, height: 24 })),
            React.createElement(Flex, null, socials.map(function (social, index) {
                var Icon = Icons$1[social.icon];
                var iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
                var mr = index < socials.length - 1 ? "8px" : 0;
                if (social.items) {
                    return (React.createElement(Dropdown, { key: social.label, position: "top", target: React.createElement(Icon, __assign({}, iconProps, { mr: mr })) }, social.items.map(function (item) { return (React.createElement(Link, { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "textSubtle" }, item.label)); })));
                }
                return (React.createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
                    React.createElement(Icon, __assign({}, iconProps))));
            }))),
        React.createElement(SettingsEntry, null,
            React.createElement(Button, { variant: "text", onClick: function () { return toggleTheme(!isDark); } },
                React.createElement(Flex, { alignItems: "center" },
                    React.createElement(SunIcon, { color: isDark ? "textDisabled" : "text", width: "24px" }),
                    React.createElement(Text, { color: "textDisabled", mx: "4px" }, "/"),
                    React.createElement(MoonIcon, { color: isDark ? "text" : "textDisabled", width: "24px" }))),
            React.createElement(Dropdown, { position: "top-right", target: React.createElement(Button, { variant: "text", startIcon: React.createElement(LanguageIcon, { color: "textSubtle", width: "24px" }) },
                    React.createElement(Text, { color: "textSubtle" }, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) }, langs.map(function (lang) { return (React.createElement(MenuButton, { key: lang.code, fullWidth: true, onClick: function () { return setLang(lang); }, 
                // Safari fix
                style: { minHeight: "32px", height: "auto" } }, lang.language)); })))));
};
var templateObject_1$C, templateObject_2$c, templateObject_3$7, templateObject_4$2;

var StyledPanel = styled.div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React.createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React.createElement(PanelBody, __assign({}, props)),
        React.createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$D;

var Icon$17 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React.createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React.createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React.createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React.createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React.createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React.createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React.createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React.createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React.createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React.createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React.createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React.createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$18 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$19 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React.createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$1a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React.createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$1b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React.createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$1c = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React.createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var Icon$1d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "#F5F5F5" }),
        React.createElement("path", { d: "M56.5504425,41.9387033 L56.5504425,50.4659601 L47.3948342,50.4659601 L47.3948342,85.5971142 L45.0078131,84.7075452 C43.8992633,84.2955753 42.1136272,83.5937969 39.9052997,82.5918134 L38.8675775,82.1177881 L38.8675775,14.6817622 L47.9569067,11.8769231 L56.5504425,14.5267861 L56.5504425,23.7259307 L47.9569067,21.0669705 L47.3948342,21.2411155 L47.3948342,41.9387033 L56.5504425,41.9387033 Z M16,50.4659926 L16,21.7739797 L36.1702794,15.548296 L36.1702794,24.7052039 L24.526282,28.3200122 L24.526282,41.9387358 L36.1702794,41.9387358 L36.1702794,81.3806284 L33.591244,80.0543973 C25.5662786,75.923652 16,68.9585019 16,59.2339983 L16,54.6496962 L24.526282,54.6496962 L24.526282,59.2339983 C24.526282,61.2460878 25.5734263,63.3605199 27.6426978,65.5373324 L27.6426978,50.4659926 L16,50.4659926 Z M59.1389325,15.3302574 L79.8040306,21.7261873 L79.8040306,50.4659601 L67.6710627,50.4659601 L67.6710627,62.9111544 C67.6710627,62.9111544 64.9581695,66.4674811 59.1464051,69.4451657 C59.1464051,67.0682164 59.1389325,15.3302574 59.1389325,15.3302574 Z M71.2780734,41.9387033 L71.2780734,28.2783928 L67.6710627,27.1649695 L67.6710627,41.9387033 L71.2780734,41.9387033 Z M71.2780734,59.8661186 L71.2780734,54.6495662 L79.8040306,54.6495662 L79.8040306,59.8661186 C79.8040306,74.3588162 58.7760221,82.7005566 52.330058,84.9127828 L49.9859233,85.7230769 L49.9859233,76.7068496 L51.1311866,76.2744112 C61.1591444,72.5004032 71.2780734,65.962818 71.2780734,59.8661186 Z", fill: "#000000" })));
};

var ConnectorNames;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["BSC"] = "bsc";
})(ConnectorNames || (ConnectorNames = {}));

var connectors = [
    {
        title: "Metamask",
        icon: Icon$17,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "TrustWallet",
        icon: Icon$1a,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "MathWallet",
        icon: Icon$18,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "TokenPocket",
        icon: Icon$19,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "WalletConnect",
        icon: Icon$1b,
        connectorId: ConnectorNames.WalletConnect,
    },
    {
        title: "Binance Chain Wallet",
        icon: Icon$1c,
        connectorId: ConnectorNames.BSC,
    },
    {
        title: "SafePal Wallet",
        icon: Icon$1d,
        connectorId: ConnectorNames.Injected,
    },
];
var connectorLocalStorageKey = "connectorId";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React.createElement(Button, { fullWidth: true, variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(connectorLocalStorageKey, "1");
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React.createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React.createElement(Icon, { width: "32px" })));
};

var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss }, connectors.map(function (entry, index) { return (React.createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); })));
};

var StyleButton = styled(Text).attrs({ role: "button" })(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled.div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React.createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React.createElement(Icon$n, { width: "20px", color: "primary", ml: "4px" }),
        React.createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$E, templateObject_2$d;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React.createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React.createElement(Flex, { mb: "32px" },
            React.createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan"),
            React.createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React.createElement(Flex, { justifyContent: "center" },
            React.createElement(Button, { size: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(connectorLocalStorageKey);
                    onDismiss();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React.createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React.createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    return (React.createElement("div", null, account ? (React.createElement(Button, { size: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React.createElement(Button, { size: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};

var Icon$1e = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React.createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React.createElement("g", { mask: "url(#A)" },
            React.createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React.createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React.createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var StyledAvatar = styled.div(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"])));
var Pip = styled.div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var Avatar = function (_a) {
    var profile = _a.profile;
    var _b = profile.username, username = _b === void 0 ? "Bunny" : _b, image = profile.image, profileLink = profile.profileLink, noProfileLink = profile.noProfileLink, _c = profile.showPip, showPip = _c === void 0 ? false : _c;
    var link = profile.username ? profileLink : noProfileLink;
    var isExternal = link.startsWith("http");
    var ariaLabel = "Link to profile";
    var icon = image ? (React.createElement("img", { src: image, alt: "profile avatar", height: "32px", width: "32px" })) : (React.createElement(Icon$1e, { width: "32px", height: "32px" }));
    if (isExternal) {
        return (React.createElement(StyledAvatar, { title: username },
            React.createElement("a", { href: link, "aria-label": ariaLabel }, icon),
            showPip && React.createElement(Pip, null)));
    }
    return (React.createElement(StyledAvatar, { title: username },
        React.createElement(Link$1, { to: link, "aria-label": ariaLabel }, icon),
        showPip && React.createElement(Pip, null)));
};
var templateObject_1$F, templateObject_2$e;

var Wrapper$1 = styled.div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled.nav(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled.div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled.div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var MobileOnlyOverlay = styled(Overlay)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links, priceLink = _a.priceLink, profile = _a.profile, children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = useRef(window.pageYOffset);
    useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle(handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React.createElement(Wrapper$1, null,
        React.createElement(StyledNav, { showMenu: showMenu },
            React.createElement(Logo$1, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React.createElement(Flex, null,
                React.createElement(UserBlock, { account: account, login: login, logout: logout }),
                profile && React.createElement(Avatar, { profile: profile }))),
        React.createElement(BodyWrapper, null,
            React.createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links, priceLink: priceLink }),
            React.createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React.createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$G, templateObject_2$f, templateObject_3$8, templateObject_4$3, templateObject_5$1;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React.createElement(Button, __assign({ as: "a", size: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React.createElement(Button, { as: Link$1, size: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a$1;
var alertTypeMap = (_a$1 = {},
    _a$1[types.INFO] = variants$1.INFO,
    _a$1[types.SUCCESS] = variants$1.SUCCESS,
    _a$1[types.DANGER] = variants$1.DANGER,
    _a$1[types.WARNING] = variants$1.WARNING,
    _a$1);
var StyledToast = styled.div(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = useRef();
    var ref = useRef(null);
    var removeHandler = useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React.createElement(CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React.createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React.createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React.createElement(React.Fragment, null,
                React.createElement(Text, { as: "p", mb: "8px" }, description),
                React.createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$H;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled.div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React.createElement(StyledToastContainer, null,
        React.createElement(TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React.createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$I;

var ResetCSS = createGlobalStyle(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1$J;

var baseColors = {
    failure: "#d42c3c",
    primary: "#f4793f",
    primaryBright: "#f4793f",
    primaryDark: "#f4793f",
    secondary: "#F79116",
    success: "#7cb13b",
    warning: "#FFB237",
};
var brandColors = {
    binance: "#F0B90B",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#fdfafa", backgroundDisabled: "#f7e7e6", contrast: "#261c13", invertedContrast: "#FFFFFF", input: "#efe9e4", tertiary: "#EFF4F5", text: "#452c21", textDisabled: "#d6cfcc", textSubtle: "#452c21", borderColor: "#ebeae9", card: "#FFFFFF", gradients: {
        bubblegum: "linear-gradient(139.73deg, #fff7e6 0%, #fff1ea 100%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#9A6AFF", background: "#343135", backgroundDisabled: "#3c3742", contrast: "#FFFFFF", invertedContrast: "#191326", input: "#483f5a", primaryDark: "#0098A1", tertiary: "#353547", text: "#EAE2FC", textDisabled: "#666171", textSubtle: "#c9c4d4", borderColor: "#524B63", card: "#27262c", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    } });

var light = {
    background: lightColors.card,
};
var dark = {
    background: darkColors.card,
};

var _a$2, _b;
var PRIMARY = variants.PRIMARY, SECONDARY = variants.SECONDARY, TERTIARY = variants.TERTIARY, TEXT = variants.TEXT, DANGER = variants.DANGER, SUBTLE = variants.SUBTLE, SUCCESS = variants.SUCCESS;
var light$1 = (_a$2 = {},
    _a$2[PRIMARY] = {
        background: lightColors.primary,
        backgroundActive: lightColors.primaryDark,
        backgroundHover: lightColors.primaryBright,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        color: "#FFFFFF",
    },
    _a$2[SECONDARY] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: "transparent",
        border: "2px solid " + lightColors.primary,
        borderColorHover: lightColors.primaryBright,
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TERTIARY] = {
        background: lightColors.tertiary,
        backgroundActive: lightColors.tertiary,
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TEXT] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[DANGER] = {
        background: lightColors.failure,
        backgroundActive: "#D43285",
        backgroundHover: "#FF65B8",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUBTLE] = {
        background: lightColors.textSubtle,
        backgroundActive: lightColors.textSubtle + "D9",
        backgroundHover: lightColors.textSubtle + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUCCESS] = {
        background: lightColors.success,
        backgroundActive: lightColors.success + "D9",
        backgroundHover: lightColors.success + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2);
var dark$1 = (_b = {},
    _b[PRIMARY] = __assign({}, light$1.primary),
    _b[SECONDARY] = __assign({}, light$1.secondary),
    _b[TERTIARY] = __assign(__assign({}, light$1.tertiary), { background: darkColors.tertiary, backgroundActive: darkColors.tertiary, backgroundHover: darkColors.tertiary, color: darkColors.primary }),
    _b[TEXT] = __assign(__assign({}, light$1.text), { backgroundHover: darkColors.tertiary }),
    _b[DANGER] = __assign({}, light$1.danger),
    _b[SUBTLE] = __assign({}, light$1.subtle),
    _b[SUCCESS] = __assign({}, light$1.success),
    _b);

var light$2 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$2 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$4 = {
    handleBackground: lightColors.card,
};
var dark$4 = {
    handleBackground: darkColors.card,
};

var light$5 = {
    background: lightColors.card,
    hover: "#EEEAF4",
};
var dark$5 = {
    background: darkColors.card,
    hover: "#473d5d",
};

var light$6 = {
    background: lightColors.card,
};
var dark$6 = {
    background: darkColors.card,
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark, button: dark$1, colors: darkColors, card: dark$2, toggle: dark$4, nav: dark$5, modal: dark$6, radio: dark$3 });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light, button: light$1, colors: lightColors, card: light$2, toggle: light$4, nav: light$5, modal: light$6, radio: light$3 });

export { Icon$4 as AddIcon, Alert, Icon$5 as ArrowBackIcon, Icon$6 as ArrowDownIcon, Icon$7 as ArrowDropDownIcon, Icon$8 as ArrowDropUpIcon, Icon$9 as ArrowForwardIcon, Icon$a as AutoRenewIcon, BackgroundImage, GridLayout as BaseLayout, Icon$b as BinanceIcon, Icon$2 as BlockIcon, Breadcrumbs, Icon$c as BunnyPlaceholderIcon, Button, ButtonMenu, ButtonMenuItem, Icon$e as CalculateIcon, Card, CardBody, CardFooter, CardHeader, CardRibbon, Icon$d as CardViewIcon, GridLayout$1 as CardsLayout, Checkbox, Icon as CheckmarkCircleIcon, Icon$f as CheckmarkIcon, Icon$g as ChevronDownIcon, Icon$h as ChevronLeftIcon, Icon$i as ChevronRightIcon, Icon$j as ChevronUpIcon, Icon$k as CloseIcon, Icon$l as CogIcon, Icon$m as CommunityIcon, ConnectorNames, Icon$n as CopyIcon, Dropdown, Icon$1 as ErrorIcon, Flex, Icon$w as GooseRoundIcon, Heading, Icon$o as HelpIcon, IconButton, Image, Icon$3 as InfoIcon, Input, Link, LinkExternal, Icon$p as ListViewIcon, Icon$q as LogoIcon, Icon$r as LogoRoundIcon, Menu, Icon$s as MinusIcon, Modal, ModalProvider, Icon$t as OpenNewIcon, Icon$v as PancakeRoundIcon, Icon$u as PancakesIcon, Icon$x as PrizeIcon, Progress, Icon$A as ProgressBunny, Radio, Icon$y as RemoveIcon, ResetCSS, Icon$E as SearchIcon, Skeleton, Spinner, Svg, Icon$F as SwapVertIcon, Icon$G as SyncAltIcon, Tag, Text, Icon$C as Ticket, Icon$D as TicketRound, ToastContainer, Toggle, Icon$z as VerifiedIcon, Icon$H as WarningIcon, Icon$B as Won, variants$1 as alertVariants, byTextAscending, byTextDescending, connectorLocalStorageKey, darkTheme as dark, darkColors, lightTheme as light, lightColors, makeRender, links as menuConfig, types as toastTypes, useMatchBreakpoints, useModal, useParticleBurst, useTable, useWalletModal };
