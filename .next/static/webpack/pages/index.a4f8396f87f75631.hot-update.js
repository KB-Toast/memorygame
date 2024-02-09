"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"./components/Card.js\");\n/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Timer */ \"./components/Timer.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var deck = [\n        {\n            id: 1,\n            name: \"billiard ball\",\n            image: \"/billiardball.svg\"\n        },\n        {\n            id: 2,\n            name: \"billiard ball\",\n            image: \"/billiardball.svg\"\n        },\n        {\n            id: 3,\n            name: \"bubble tea\",\n            image: \"/bubbletea.svg\"\n        },\n        {\n            id: 4,\n            name: \"bubble tea\",\n            image: \"/bubbletea.svg\"\n        },\n        {\n            id: 5,\n            name: \"cactus\",\n            image: \"/cactus.svg\"\n        },\n        {\n            id: 6,\n            name: \"cactus\",\n            image: \"/cactus.svg\"\n        },\n        {\n            id: 7,\n            name: \"dog\",\n            image: \"/dog.svg\"\n        },\n        {\n            id: 8,\n            name: \"dog\",\n            image: \"/dog.svg\"\n        },\n        {\n            id: 9,\n            name: \"laptop\",\n            image: \"/laptop.svg\"\n        },\n        {\n            id: 10,\n            name: \"laptop\",\n            image: \"/laptop.svg\"\n        },\n        {\n            id: 11,\n            name: \"octopus\",\n            image: \"/octopus.svg\"\n        },\n        {\n            id: 12,\n            name: \"octopus\",\n            image: \"/octopus.svg\"\n        },\n        {\n            id: 13,\n            name: \"strawberry\",\n            image: \"/strawberry.svg\"\n        },\n        {\n            id: 14,\n            name: \"strawberry\",\n            image: \"/strawberry.svg\"\n        },\n        {\n            id: 15,\n            name: \"sunglasses\",\n            image: \"/sunglasses.svg\"\n        },\n        {\n            id: 16,\n            name: \"sunglasses\",\n            image: \"/sunglasses.svg\"\n        }, \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), selected = ref[0], setSelected = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), newDeck = ref1[0], setNewDeck = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), lastCard = ref2[0], setLastCard = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), okCards = ref3[0], setOkCards = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gameCounter = ref4[0], setGameCounter = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), timerStarted = ref5[0], setTimerStarted = ref5[1];\n    // added timer maybe\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), timer = ref6[0], setTimer = ref6[1];\n    var newTimer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        return timer + 1;\n    }, [\n        timer\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var interval = setInterval(function() {\n            return setTimer(newTimer);\n        }, 1000);\n        return function() {\n            return clearInterval(interval);\n        };\n    }, [\n        timer\n    ]);\n    var startTimer = function() {\n        /*if (!timerStarted) {\r\n      setTimerStarted(true);\r\n    }*/ !timerStarted && setTimerStarted(true) && setTimer(0);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setNewDeck(shuffledCards());\n    }, [\n        gameCounter\n    ]);\n    var selectCard = function(id) {\n        setSelected((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(selected).concat([\n            id\n        ]));\n    };\n    var shuffledCards = function() {\n        var oldCards = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(deck);\n        for(var i = 0; i < oldCards.length; i++){\n            var randomIndex = Math.floor(Math.random() * oldCards.length);\n            var ref;\n            ref = [\n                oldCards[randomIndex],\n                oldCards[i], \n            ], oldCards[i] = ref[0], oldCards[randomIndex] = ref[1], ref;\n        }\n        return oldCards;\n    };\n    var hideCards = function() {\n        setTimeout(function() {\n            setSelected([]);\n            setLastCard();\n        }, 1000);\n    };\n    var handleCardClick = function(card) {\n        if (lastCard) {\n            if (lastCard === card) {\n                if (okCards.length === deck.length / 2 - 1) {\n                    setTimeout(function() {\n                        setGameCounter(gameCounter + 1);\n                        setSelected([]);\n                        setOkCards([]);\n                        setLastCard();\n                        setNewDeck([]);\n                        setTimer(0);\n                        setTimerStarted(false);\n                    }, 1500);\n                }\n                setOkCards((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(okCards).concat([\n                    card\n                ]));\n            } else {\n                console.log(\"better luck next time !\");\n            }\n            setLastCard();\n        } else {\n            setLastCard(card);\n        }\n    };\n    selected.length === 2 && hideCards();\n    //okCards.length === deck.length / 2 && setGameCounter(gameCounter + 1);\n    var cardsToDisplay = newDeck.map(function(card) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            id: card.id,\n            name: card.name,\n            image: card.image,\n            selectCard: selectCard,\n            selected: selected.includes(card.id) || okCards.includes(card.name),\n            handleCardClick: handleCardClick\n        }, card.id, false, {\n            fileName: \"/Users/kevinbrusson/Documents/vscode/2024/sidework/memorygame/components/Home.js\",\n            lineNumber: 106,\n            columnNumber: 7\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().home),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().headerTitle),\n                        children: \"Memory Game \\uD83E\\uDDE0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevinbrusson/Documents/vscode/2024/sidework/memorygame/components/Home.js\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: timerStarted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Timer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            gameCounter: gameCounter,\n                            timer: timer\n                        }, void 0, false, {\n                            fileName: \"/Users/kevinbrusson/Documents/vscode/2024/sidework/memorygame/components/Home.js\",\n                            lineNumber: 124,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().timer),\n                            children: \"Click to start new game\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kevinbrusson/Documents/vscode/2024/sidework/memorygame/components/Home.js\",\n                            lineNumber: 126,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kevinbrusson/Documents/vscode/2024/sidework/memorygame/components/Home.js\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().headerDivider)\n                    }, void 0, false, {\n                        fileName: \"/Users/kevinbrusson/Documents/vscode/2024/sidework/memorygame/components/Home.js\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevinbrusson/Documents/vscode/2024/sidework/memorygame/components/Home.js\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().grid),\n                    onClick: function() {\n                        return startTimer();\n                    },\n                    children: cardsToDisplay\n                }, void 0, false, {\n                    fileName: \"/Users/kevinbrusson/Documents/vscode/2024/sidework/memorygame/components/Home.js\",\n                    lineNumber: 133,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kevinbrusson/Documents/vscode/2024/sidework/memorygame/components/Home.js\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevinbrusson/Documents/vscode/2024/sidework/memorygame/components/Home.js\",\n        lineNumber: 119,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ru5AKmB7UGNU9Gh+8pxlLyWokRo=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEJBRVc5QixNQUFBQSw2REFBYUE7NEJBQWFJLEtBQUssRUFBRUEsS0FBSzs7Ozs7Z0NBQUk7NEJBRTNDMEIsU0FBUyxFQUFFNUM7c0NBQWMsK0VBQXVCOzs7OztnQ0FBTzs7Ozs7NEJBRTVEO2tDQUNMO3dCQUFLNEM7Ozs7OzRCQUFtQzs7Ozs7O29CQUNwQzswQkFFTjtnQkFBS0E7MEJBQ0g7b0JBQUtBLE9BQUFBLHFFQUFrQlM7b0JBQU1DLE9BQU8sRUFBRTsrQkFBTTlCLHFFQUFVLENBQUU7cUJBQUE7OEJBQ3JEZ0IsY0FBYzs7Ozs7d0JBQ1g7Ozs7O29CQUNGOzs7Ozs7WUFDRixDQUNOO0NBQ0g7R0FySVF2QyxJQUFJO0FBQUpBO0FBdUlULGVBQWVBLElBQUksQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hvbWUuanM/NGIyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnO1xyXG5pbXBvcnQgVGltZXIgZnJvbSAnLi9UaW1lcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IGRlY2sgPSBbXHJcbiAgICB7IGlkOiAxLCBuYW1lOiAnYmlsbGlhcmQgYmFsbCcsIGltYWdlOiAnL2JpbGxpYXJkYmFsbC5zdmcnIH0sXHJcbiAgICB7IGlkOiAyLCBuYW1lOiAnYmlsbGlhcmQgYmFsbCcsIGltYWdlOiAnL2JpbGxpYXJkYmFsbC5zdmcnIH0sXHJcbiAgICB7IGlkOiAzLCBuYW1lOiAnYnViYmxlIHRlYScsIGltYWdlOiAnL2J1YmJsZXRlYS5zdmcnIH0sXHJcbiAgICB7IGlkOiA0LCBuYW1lOiAnYnViYmxlIHRlYScsIGltYWdlOiAnL2J1YmJsZXRlYS5zdmcnIH0sXHJcbiAgICB7IGlkOiA1LCBuYW1lOiAnY2FjdHVzJywgaW1hZ2U6ICcvY2FjdHVzLnN2ZycgfSxcclxuICAgIHsgaWQ6IDYsIG5hbWU6ICdjYWN0dXMnLCBpbWFnZTogJy9jYWN0dXMuc3ZnJyB9LFxyXG4gICAgeyBpZDogNywgbmFtZTogJ2RvZycsIGltYWdlOiAnL2RvZy5zdmcnIH0sXHJcbiAgICB7IGlkOiA4LCBuYW1lOiAnZG9nJywgaW1hZ2U6ICcvZG9nLnN2ZycgfSxcclxuICAgIHsgaWQ6IDksIG5hbWU6ICdsYXB0b3AnLCBpbWFnZTogJy9sYXB0b3Auc3ZnJyB9LFxyXG4gICAgeyBpZDogMTAsIG5hbWU6ICdsYXB0b3AnLCBpbWFnZTogJy9sYXB0b3Auc3ZnJyB9LFxyXG4gICAgeyBpZDogMTEsIG5hbWU6ICdvY3RvcHVzJywgaW1hZ2U6ICcvb2N0b3B1cy5zdmcnIH0sXHJcbiAgICB7IGlkOiAxMiwgbmFtZTogJ29jdG9wdXMnLCBpbWFnZTogJy9vY3RvcHVzLnN2ZycgfSxcclxuICAgIHsgaWQ6IDEzLCBuYW1lOiAnc3RyYXdiZXJyeScsIGltYWdlOiAnL3N0cmF3YmVycnkuc3ZnJyB9LFxyXG4gICAgeyBpZDogMTQsIG5hbWU6ICdzdHJhd2JlcnJ5JywgaW1hZ2U6ICcvc3RyYXdiZXJyeS5zdmcnIH0sXHJcbiAgICB7IGlkOiAxNSwgbmFtZTogJ3N1bmdsYXNzZXMnLCBpbWFnZTogJy9zdW5nbGFzc2VzLnN2ZycgfSxcclxuICAgIHsgaWQ6IDE2LCBuYW1lOiAnc3VuZ2xhc3NlcycsIGltYWdlOiAnL3N1bmdsYXNzZXMuc3ZnJyB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtuZXdEZWNrLCBzZXROZXdEZWNrXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbGFzdENhcmQsIHNldExhc3RDYXJkXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW29rQ2FyZHMsIHNldE9rQ2FyZHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtnYW1lQ291bnRlciwgc2V0R2FtZUNvdW50ZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3RpbWVyU3RhcnRlZCwgc2V0VGltZXJTdGFydGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gYWRkZWQgdGltZXIgbWF5YmVcclxuICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IG5ld1RpbWVyID0gdXNlTWVtbygoKSA9PiB0aW1lciArIDEsIFt0aW1lcl0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHNldFRpbWVyKG5ld1RpbWVyKSwgMTAwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgfSwgW3RpbWVyXSk7XHJcblxyXG4gIGNvbnN0IHN0YXJ0VGltZXIgPSAoKSA9PiB7XHJcbiAgICAvKmlmICghdGltZXJTdGFydGVkKSB7XHJcbiAgICAgIHNldFRpbWVyU3RhcnRlZCh0cnVlKTtcclxuICAgIH0qL1xyXG4gICAgIXRpbWVyU3RhcnRlZCAmJiBzZXRUaW1lclN0YXJ0ZWQodHJ1ZSkgJiYgc2V0VGltZXIoMCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldE5ld0RlY2soc2h1ZmZsZWRDYXJkcygpKTtcclxuICB9LCBbZ2FtZUNvdW50ZXJdKTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0Q2FyZCA9IChpZCkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWQoWy4uLnNlbGVjdGVkLCBpZF0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNodWZmbGVkQ2FyZHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBvbGRDYXJkcyA9IFsuLi5kZWNrXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2xkQ2FyZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogb2xkQ2FyZHMubGVuZ3RoKTtcclxuICAgICAgW29sZENhcmRzW2ldLCBvbGRDYXJkc1tyYW5kb21JbmRleF1dID0gW1xyXG4gICAgICAgIG9sZENhcmRzW3JhbmRvbUluZGV4XSxcclxuICAgICAgICBvbGRDYXJkc1tpXSxcclxuICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb2xkQ2FyZHM7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGlkZUNhcmRzID0gKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldFNlbGVjdGVkKFtdKTtcclxuICAgICAgc2V0TGFzdENhcmQoKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhcmRDbGljayA9IChjYXJkKSA9PiB7XHJcbiAgICBpZiAobGFzdENhcmQpIHtcclxuICAgICAgaWYgKGxhc3RDYXJkID09PSBjYXJkKSB7XHJcbiAgICAgICAgaWYgKG9rQ2FyZHMubGVuZ3RoID09PSBkZWNrLmxlbmd0aCAvIDIgLSAxKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0R2FtZUNvdW50ZXIoZ2FtZUNvdW50ZXIgKyAxKTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWQoW10pO1xyXG4gICAgICAgICAgICBzZXRPa0NhcmRzKFtdKTtcclxuICAgICAgICAgICAgc2V0TGFzdENhcmQoKTtcclxuICAgICAgICAgICAgc2V0TmV3RGVjayhbXSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVyKDApO1xyXG4gICAgICAgICAgICBzZXRUaW1lclN0YXJ0ZWQoZmFsc2UpO1xyXG4gICAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRPa0NhcmRzKFsuLi5va0NhcmRzLCBjYXJkXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2JldHRlciBsdWNrIG5leHQgdGltZSAhJyk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0TGFzdENhcmQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldExhc3RDYXJkKGNhcmQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHNlbGVjdGVkLmxlbmd0aCA9PT0gMiAmJiBoaWRlQ2FyZHMoKTtcclxuICAvL29rQ2FyZHMubGVuZ3RoID09PSBkZWNrLmxlbmd0aCAvIDIgJiYgc2V0R2FtZUNvdW50ZXIoZ2FtZUNvdW50ZXIgKyAxKTtcclxuXHJcbiAgY29uc3QgY2FyZHNUb0Rpc3BsYXkgPSBuZXdEZWNrLm1hcCgoY2FyZCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENhcmRcclxuICAgICAgICBrZXk9e2NhcmQuaWR9XHJcbiAgICAgICAgaWQ9e2NhcmQuaWR9XHJcbiAgICAgICAgbmFtZT17Y2FyZC5uYW1lfVxyXG4gICAgICAgIGltYWdlPXtjYXJkLmltYWdlfVxyXG4gICAgICAgIHNlbGVjdENhcmQ9e3NlbGVjdENhcmR9XHJcbiAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkLmluY2x1ZGVzKGNhcmQuaWQpIHx8IG9rQ2FyZHMuaW5jbHVkZXMoY2FyZC5uYW1lKX1cclxuICAgICAgICBoYW5kbGVDYXJkQ2xpY2s9e2hhbmRsZUNhcmRDbGlja31cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWV9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlclRpdGxlfT5NZW1vcnkgR2FtZSDwn6egPC9oMT5cclxuICAgICAgICA8aDI+XHJcbiAgICAgICAgICB7dGltZXJTdGFydGVkID8gKFxyXG4gICAgICAgICAgICA8VGltZXIgZ2FtZUNvdW50ZXI9e2dhbWVDb3VudGVyfSB0aW1lcj17dGltZXJ9IC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aW1lcn0+Q2xpY2sgdG8gc3RhcnQgbmV3IGdhbWU8L3NwYW4+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJEaXZpZGVyfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfSBvbkNsaWNrPXsoKSA9PiBzdGFydFRpbWVyKCl9PlxyXG4gICAgICAgICAge2NhcmRzVG9EaXNwbGF5fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJDYXJkIiwiVGltZXIiLCJzdHlsZXMiLCJIb21lIiwiZGVjayIsImlkIiwibmFtZSIsImltYWdlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsIm5ld0RlY2siLCJzZXROZXdEZWNrIiwibGFzdENhcmQiLCJzZXRMYXN0Q2FyZCIsIm9rQ2FyZHMiLCJzZXRPa0NhcmRzIiwiZ2FtZUNvdW50ZXIiLCJzZXRHYW1lQ291bnRlciIsInRpbWVyU3RhcnRlZCIsInNldFRpbWVyU3RhcnRlZCIsInRpbWVyIiwic2V0VGltZXIiLCJuZXdUaW1lciIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic3RhcnRUaW1lciIsInNodWZmbGVkQ2FyZHMiLCJzZWxlY3RDYXJkIiwib2xkQ2FyZHMiLCJpIiwibGVuZ3RoIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJoaWRlQ2FyZHMiLCJzZXRUaW1lb3V0IiwiaGFuZGxlQ2FyZENsaWNrIiwiY2FyZCIsImNvbnNvbGUiLCJsb2ciLCJjYXJkc1RvRGlzcGxheSIsIm1hcCIsImluY2x1ZGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaG9tZSIsImhlYWRlciIsImgxIiwiaGVhZGVyVGl0bGUiLCJoMiIsInNwYW4iLCJoZWFkZXJEaXZpZGVyIiwibWFpbiIsImdyaWQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Home.js\n"));

/***/ })

});