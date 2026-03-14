"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from2, except, desc) => {
  if (from2 && typeof from2 === "object" || typeof from2 === "function") {
    for (let key of __getOwnPropNames(from2))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/react-is/cjs/react-is.production.min.js
var require_react_is_production_min = __commonJS({
  "../../node_modules/react-is/cjs/react-is.production.min.js"(exports2) {
    "use strict";
    var b = "function" === typeof Symbol && Symbol.for;
    var c = b ? Symbol.for("react.element") : 60103;
    var d = b ? Symbol.for("react.portal") : 60106;
    var e = b ? Symbol.for("react.fragment") : 60107;
    var f = b ? Symbol.for("react.strict_mode") : 60108;
    var g = b ? Symbol.for("react.profiler") : 60114;
    var h = b ? Symbol.for("react.provider") : 60109;
    var k = b ? Symbol.for("react.context") : 60110;
    var l = b ? Symbol.for("react.async_mode") : 60111;
    var m = b ? Symbol.for("react.concurrent_mode") : 60111;
    var n = b ? Symbol.for("react.forward_ref") : 60112;
    var p = b ? Symbol.for("react.suspense") : 60113;
    var q = b ? Symbol.for("react.suspense_list") : 60120;
    var r = b ? Symbol.for("react.memo") : 60115;
    var t = b ? Symbol.for("react.lazy") : 60116;
    var v = b ? Symbol.for("react.block") : 60121;
    var w = b ? Symbol.for("react.fundamental") : 60117;
    var x = b ? Symbol.for("react.responder") : 60118;
    var y = b ? Symbol.for("react.scope") : 60119;
    function z(a) {
      if ("object" === typeof a && null !== a) {
        var u = a.$$typeof;
        switch (u) {
          case c:
            switch (a = a.type, a) {
              case l:
              case m:
              case e:
              case g:
              case f:
              case p:
                return a;
              default:
                switch (a = a && a.$$typeof, a) {
                  case k:
                  case n:
                  case t:
                  case r:
                  case h:
                    return a;
                  default:
                    return u;
                }
            }
          case d:
            return u;
        }
      }
    }
    function A(a) {
      return z(a) === m;
    }
    exports2.AsyncMode = l;
    exports2.ConcurrentMode = m;
    exports2.ContextConsumer = k;
    exports2.ContextProvider = h;
    exports2.Element = c;
    exports2.ForwardRef = n;
    exports2.Fragment = e;
    exports2.Lazy = t;
    exports2.Memo = r;
    exports2.Portal = d;
    exports2.Profiler = g;
    exports2.StrictMode = f;
    exports2.Suspense = p;
    exports2.isAsyncMode = function(a) {
      return A(a) || z(a) === l;
    };
    exports2.isConcurrentMode = A;
    exports2.isContextConsumer = function(a) {
      return z(a) === k;
    };
    exports2.isContextProvider = function(a) {
      return z(a) === h;
    };
    exports2.isElement = function(a) {
      return "object" === typeof a && null !== a && a.$$typeof === c;
    };
    exports2.isForwardRef = function(a) {
      return z(a) === n;
    };
    exports2.isFragment = function(a) {
      return z(a) === e;
    };
    exports2.isLazy = function(a) {
      return z(a) === t;
    };
    exports2.isMemo = function(a) {
      return z(a) === r;
    };
    exports2.isPortal = function(a) {
      return z(a) === d;
    };
    exports2.isProfiler = function(a) {
      return z(a) === g;
    };
    exports2.isStrictMode = function(a) {
      return z(a) === f;
    };
    exports2.isSuspense = function(a) {
      return z(a) === p;
    };
    exports2.isValidElementType = function(a) {
      return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
    };
    exports2.typeOf = z;
  }
});

// ../../node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "../../node_modules/react-is/cjs/react-is.development.js"(exports2) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment6 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports2.AsyncMode = AsyncMode;
        exports2.ConcurrentMode = ConcurrentMode;
        exports2.ContextConsumer = ContextConsumer;
        exports2.ContextProvider = ContextProvider;
        exports2.Element = Element;
        exports2.ForwardRef = ForwardRef;
        exports2.Fragment = Fragment6;
        exports2.Lazy = Lazy;
        exports2.Memo = Memo;
        exports2.Portal = Portal;
        exports2.Profiler = Profiler;
        exports2.StrictMode = StrictMode;
        exports2.Suspense = Suspense;
        exports2.isAsyncMode = isAsyncMode;
        exports2.isConcurrentMode = isConcurrentMode;
        exports2.isContextConsumer = isContextConsumer;
        exports2.isContextProvider = isContextProvider;
        exports2.isElement = isElement;
        exports2.isForwardRef = isForwardRef;
        exports2.isFragment = isFragment;
        exports2.isLazy = isLazy;
        exports2.isMemo = isMemo;
        exports2.isPortal = isPortal;
        exports2.isProfiler = isProfiler;
        exports2.isStrictMode = isStrictMode;
        exports2.isSuspense = isSuspense;
        exports2.isValidElementType = isValidElementType;
        exports2.typeOf = typeOf;
      })();
    }
  }
});

// ../../node_modules/react-is/index.js
var require_react_is = __commonJS({
  "../../node_modules/react-is/index.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_is_production_min();
    } else {
      module2.exports = require_react_is_development();
    }
  }
});

// ../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports2, module2) {
    "use strict";
    var reactIs = require_react_is();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e) {
            }
          }
        }
      }
      return targetComponent;
    }
    module2.exports = hoistNonReactStatics;
  }
});

// ../../node_modules/@babel/runtime/helpers/extends.js
var require_extends = __commonJS({
  "../../node_modules/@babel/runtime/helpers/extends.js"(exports2, module2) {
    "use strict";
    function _extends2() {
      return module2.exports = _extends2 = Object.assign ? Object.assign.bind() : function(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = arguments[e];
          for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
        }
        return n;
      }, module2.exports.__esModule = true, module2.exports["default"] = module2.exports, _extends2.apply(null, arguments);
    }
    module2.exports = _extends2, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
  }
});

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Alert: () => Alert,
  Breadcrumb: () => Breadcrumb,
  Button: () => Button,
  Checkbox: () => Checkbox2,
  CheckboxGroup: () => CheckboxGroup,
  Collapse: () => Collapse,
  CollapseContainer: () => CollapseContainer,
  Divider: () => Divider,
  Drawer: () => Drawer,
  Flex: () => Flex,
  Form: () => Form,
  FormActions: () => FormActions2,
  FormGroup: () => FormGroup2,
  FormItem: () => FormItem,
  Grid: () => Grid,
  GridItem: () => GridItem,
  Input: () => Input2,
  List: () => List,
  ListItem: () => ListItem,
  Menu: () => Menu,
  MessageProvider: () => MessageProvider,
  Modal: () => Modal,
  ModalApi: () => ModalApi,
  ModalProvider: () => ModalProvider,
  Pagination: () => Pagination,
  PanelContainer: () => PanelContainer,
  PanelContent: () => PanelContent,
  PanelHeader: () => PanelHeader,
  Popconfirm: () => Popconfirm,
  Progress: () => Progress,
  Radio: () => Radio,
  RadioGroup: () => RadioGroup,
  Rate: () => Rate,
  Select: () => Select,
  Spin: () => Spin,
  Switch: () => Switch,
  Table: () => table_default,
  Tabs: () => Tabs,
  Tag: () => Tag,
  TagGroup: () => TagGroup,
  TextArea: () => TextArea,
  Tooltip: () => Tooltip,
  Tree: () => Tree,
  Typography: () => Typography,
  useForm: () => useForm,
  useMessage: () => useMessage,
  useMessageContext: () => useMessageContext,
  useModal: () => useModal
});
module.exports = __toCommonJS(index_exports);

// src/components/button/button.tsx
var import_react6 = __toESM(require("react"));

// ../../node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

// ../../node_modules/@emotion/react/dist/emotion-element-d59e098f.esm.js
var React2 = __toESM(require("react"));
var import_react = require("react");

// ../../node_modules/@emotion/sheet/dist/emotion-sheet.esm.js
var isDevelopment = false;
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
  return void 0;
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute("nonce", options.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(options) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === void 0 ? !isDevelopment : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      var _tag$parentNode;
      return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet2;
}();

// ../../node_modules/stylis/src/Enum.js
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";

// ../../node_modules/stylis/src/Utility.js
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}

// ../../node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      // ] ) " '
      case type:
        return position;
      // " '
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      // (
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      // \
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}

// ../../node_modules/stylis/src/Parser.js
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      // (
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      // \
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      // /
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      // {
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      // } ; \0
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          // \0 }
          case 0:
          case 125:
            scanning = 0;
          // ;
          case 59 + offset:
            if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          // @ ;
          case 59:
            characters2 += ";";
          // { rule/at-rule
          default:
            append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      // :
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          // &
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          // ,
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          // @
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          // -
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i = 0, j = 0, k = 0; i < index; ++i)
    for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
      if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x])))
        props[k++] = z;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}

// ../../node_modules/stylis/src/Serializer.js
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i = 0; i < length2; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length) break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}

// ../../node_modules/stylis/src/Middleware.js
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index, children, callback) {
    var output = "";
    for (var i = 0; i < length2; i++)
      output += collection[i](element, index, children, callback) || "";
    return output;
  };
}
function rulesheet(callback) {
  return function(element) {
    if (!element.root) {
      if (element = element.return)
        callback(element);
    }
  };
}

// ../../node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js
var weakMemoize = function weakMemoize2(func) {
  var cache = /* @__PURE__ */ new WeakMap();
  return function(arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
    }
    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

// ../../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0) cache[arg] = fn(arg);
    return cache[arg];
  };
}

// ../../node_modules/@emotion/cache/dist/emotion-cache.esm.js
var isBrowser = typeof document !== "undefined";
var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
  var previous = 0;
  var character2 = 0;
  while (true) {
    previous = character2;
    character2 = peek();
    if (previous === 38 && character2 === 12) {
      points[index] = 1;
    }
    if (token(character2)) {
      break;
    }
    next();
  }
  return slice(begin, position);
};
var toRules = function toRules2(parsed, points) {
  var index = -1;
  var character2 = 44;
  do {
    switch (token(character2)) {
      case 0:
        if (character2 === 38 && peek() === 12) {
          points[index] = 1;
        }
        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;
      case 2:
        parsed[index] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index] = peek() === 58 ? "&\f" : "";
          points[index] = parsed[index].length;
          break;
        }
      // fallthrough
      default:
        parsed[index] += from(character2);
    }
  } while (character2 = next());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }
  var value = element.value;
  var parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent) return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (
      // charcode for l
      value.charCodeAt(0) === 108 && // charcode for b
      value.charCodeAt(2) === 98
    ) {
      element["return"] = "";
      element.value = "";
    }
  }
};
function prefix(value, length2) {
  switch (hash(value, length2)) {
    // color-adjust
    case 5103:
      return WEBKIT + "print-" + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    // flex, flex-direction
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    // order
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    // align-items
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    // align-self
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
    // align-content
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
    // flex-shrink
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    // flex-basis
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    // flex-grow
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    // transition
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    // cursor
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    // background, background-image
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    // justify-content
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6) switch (charat(value, length2 + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (charat(value, length2 + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
        // (s)tretch
        case 115:
          return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
      }
      break;
    // position: sticky
    case 4949:
      if (charat(value, length2 + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        // stic(k)y
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        // (inline-)?fl(e)x
        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
      }
      break;
    // writing-mode
    case 5936:
      switch (charat(value, length2 + 11)) {
        // vertical-l(r)
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        // vertical-r(l)
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        // horizontal(-)tb
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
var prefixer = function prefixer2(element, index, children, callback) {
  if (element.length > -1) {
    if (!element["return"]) switch (element.type) {
      case DECLARATION:
        element["return"] = prefix(element.value, element.length);
        break;
      case KEYFRAMES:
        return serialize([copy(element, {
          value: replace(element.value, "@", "@" + WEBKIT)
        })], callback);
      case RULESET:
        if (element.length) return combine(element.props, function(value) {
          switch (match(value, /(::plac\w+|:read-\w+)/)) {
            // :read-(only|write)
            case ":read-only":
            case ":read-write":
              return serialize([copy(element, {
                props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]
              })], callback);
            // :placeholder
            case "::placeholder":
              return serialize([copy(element, {
                props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, MS + "input-$1")]
              })], callback);
          }
          return "";
        });
    }
  }
};
var getServerStylisCache = isBrowser ? void 0 : weakMemoize(function() {
  return memoize(function() {
    return {};
  });
});
var defaultStylisPlugins = [prefixer];
var createCache = function createCache2(options) {
  var key = options.key;
  if (isBrowser && key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node2) {
      var dataEmotionAttribute = node2.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node2);
      node2.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  if (isBrowser) {
    container = options.container || document.head;
    Array.prototype.forEach.call(
      // this means we will ignore elements which don't have a space in them which
      // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
      document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
      function(node2) {
        var attrib = node2.getAttribute("data-emotion").split(" ");
        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }
        nodesToHydrate.push(node2);
      }
    );
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  if (!getServerStylisCache) {
    var currentSheet;
    var finalizingPlugins = [stringify, rulesheet(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles) {
      return serialize(compile(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  } else {
    var _finalizingPlugins = [stringify];
    var _serializer = middleware(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));
    var _stylis = function _stylis2(styles) {
      return serialize(compile(styles), _serializer);
    };
    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);
    var getRules3 = function getRules4(selector, serialized) {
      var name = serialized.name;
      if (serverStylisCache[name] === void 0) {
        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      }
      return serverStylisCache[name];
    };
    _insert = function _insert2(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules3(selector, serialized);
      if (cache.compat === void 0) {
        if (shouldCache) {
          cache.inserted[name] = true;
        }
        return rules;
      } else {
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }
  var cache = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

// ../../node_modules/@emotion/utils/dist/emotion-utils.esm.js
var isBrowser2 = typeof document !== "undefined";
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = "";
  classNames.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else if (className) {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles2(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if (
    // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser2 === false && cache.compat !== void 0) && cache.registered[className] === void 0
  ) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === void 0) {
    var stylesForSSR = "";
    var current = serialized;
    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
      if (!isBrowser2 && maybeStyles !== void 0) {
        stylesForSSR += maybeStyles;
      }
      current = current.next;
    } while (current !== void 0);
    if (!isBrowser2 && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};

// ../../node_modules/@emotion/hash/dist/emotion-hash.esm.js
function murmur2(str) {
  var h = 0;
  var k, i = 0, len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
    k ^= /* k >>> r: */
    k >>> 24;
    h = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255;
      h = /* Math.imul(h, m): */
      (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  h ^= h >>> 13;
  h = /* Math.imul(h, m): */
  (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

// ../../node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

// ../../node_modules/@emotion/serialize/dist/emotion-serialize.esm.js
var isDevelopment2 = false;
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match2, p1, p2) {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  var componentSelector = interpolation;
  if (componentSelector.__emotion_styles !== void 0) {
    return componentSelector;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      var keyframes2 = interpolation;
      if (keyframes2.anim === 1) {
        cursor = {
          name: keyframes2.name,
          styles: keyframes2.styles,
          next: cursor
        };
        return keyframes2.name;
      }
      var serializedStyles = interpolation;
      if (serializedStyles.styles !== void 0) {
        var next2 = serializedStyles.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor = {
              name: next2.name,
              styles: next2.styles,
              next: cursor
            };
            next2 = next2.next;
          }
        }
        var styles = serializedStyles.styles + ";";
        return styles;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      }
      break;
    }
  }
  var asString = interpolation;
  if (registered == null) {
    return asString;
  }
  var cached = registered[asString];
  return cached !== void 0 ? cached : asString;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var key in obj) {
      var value = obj[key];
      if (typeof value !== "object") {
        var asString = value;
        if (registered != null && registered[asString] !== void 0) {
          string += key + "{" + registered[asString] + "}";
        } else if (isProcessableValue(asString)) {
          string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
        }
      } else {
        if (key === "NO_COMPONENT_SELECTOR" && isDevelopment2) {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (key) {
            case "animation":
            case "animationName": {
              string += processStyleName(key) + ":" + interpolated + ";";
              break;
            }
            default: {
              string += key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g;
var cursor;
function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    var asTemplateStringsArr = strings;
    styles += asTemplateStringsArr[0];
  }
  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);
    if (stringMode) {
      var templateStringsArr = strings;
      styles += templateStringsArr[i];
    }
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match2;
  while ((match2 = labelPattern.exec(styles)) !== null) {
    identifierName += "-" + match2[1];
  }
  var name = murmur2(styles) + identifierName;
  return {
    name,
    styles,
    next: cursor
  };
}

// ../../node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.esm.js
var React = __toESM(require("react"));
var isBrowser3 = typeof document !== "undefined";
var syncFallback = function syncFallback2(create) {
  return create();
};
var useInsertionEffect2 = React["useInsertionEffect"] ? React["useInsertionEffect"] : false;
var useInsertionEffectAlwaysWithSyncFallback = !isBrowser3 ? syncFallback : useInsertionEffect2 || syncFallback;

// ../../node_modules/@emotion/react/dist/emotion-element-d59e098f.esm.js
var isDevelopment3 = false;
var isBrowser4 = typeof document !== "undefined";
var EmotionCacheContext = /* @__PURE__ */ React2.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
    key: "css"
  }) : null
);
var CacheProvider = EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache2(func) {
  return /* @__PURE__ */ (0, import_react.forwardRef)(function(props, ref) {
    var cache = (0, import_react.useContext)(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
if (!isBrowser4) {
  withEmotionCache = function withEmotionCache3(func) {
    return function(props) {
      var cache = (0, import_react.useContext)(EmotionCacheContext);
      if (cache === null) {
        cache = createCache({
          key: "css"
        });
        return /* @__PURE__ */ React2.createElement(EmotionCacheContext.Provider, {
          value: cache
        }, func(props, cache));
      } else {
        return func(props, cache);
      }
    };
  };
}
var ThemeContext = /* @__PURE__ */ React2.createContext({});
var hasOwn = {}.hasOwnProperty;
var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var createEmotionProps = function createEmotionProps2(type, props) {
  var newProps = {};
  for (var _key in props) {
    if (hasOwn.call(props, _key)) {
      newProps[_key] = props[_key];
    }
  }
  newProps[typePropName] = type;
  return newProps;
};
var Insertion = function Insertion2(_ref) {
  var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectAlwaysWithSyncFallback(function() {
    return insertStyles(cache, serialized, isStringTag);
  });
  if (!isBrowser4 && rules !== void 0) {
    var _ref2;
    var serializedNames = serialized.name;
    var next2 = serialized.next;
    while (next2 !== void 0) {
      serializedNames += " " + next2.name;
      next2 = next2.next;
    }
    return /* @__PURE__ */ React2.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }
  return null;
};
var Emotion = /* @__PURE__ */ withEmotionCache(function(props, cache, ref) {
  var cssProp = props.css;
  if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) {
    cssProp = cache.registered[cssProp];
  }
  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = "";
  if (typeof props.className === "string") {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }
  var serialized = serializeStyles(registeredStyles, void 0, React2.useContext(ThemeContext));
  className += cache.key + "-" + serialized.name;
  var newProps = {};
  for (var _key2 in props) {
    if (hasOwn.call(props, _key2) && _key2 !== "css" && _key2 !== typePropName && !isDevelopment3) {
      newProps[_key2] = props[_key2];
    }
  }
  newProps.className = className;
  if (ref) {
    newProps.ref = ref;
  }
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(Insertion, {
    cache,
    serialized,
    isStringTag: typeof WrappedComponent === "string"
  }), /* @__PURE__ */ React2.createElement(WrappedComponent, newProps));
});
var Emotion$1 = Emotion;

// ../../node_modules/@emotion/react/dist/emotion-react.esm.js
var React3 = __toESM(require("react"));
var import_extends2 = __toESM(require_extends());
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
var jsx = function jsx2(type, props) {
  var args = arguments;
  if (props == null || !hasOwn.call(props, "css")) {
    return React3.createElement.apply(void 0, args);
  }
  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion$1;
  createElementArgArray[1] = createEmotionProps(type, props);
  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  }
  return React3.createElement.apply(null, createElementArgArray);
};
(function(_jsx) {
  var JSX;
  /* @__PURE__ */ (function(_JSX) {
  })(JSX || (JSX = _jsx.JSX || (_jsx.JSX = {})));
})(jsx || (jsx = {}));
function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return serializeStyles(args);
}
function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name;
  return {
    name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}

// ../../node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js
var React4 = __toESM(require("react"));

// ../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize(
  function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
  }
  /* Z+1 */
);

// ../../node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js
var isBrowser5 = typeof document !== "undefined";
var isDevelopment4 = false;
var testOmitPropsOnStringTag = isPropValid;
var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
  return key !== "theme";
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
  return typeof tag === "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps2(tag, options, isReal) {
  var shouldForwardProp;
  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }
  if (typeof shouldForwardProp !== "function" && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }
  return shouldForwardProp;
};
var Insertion3 = function Insertion4(_ref) {
  var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectAlwaysWithSyncFallback(function() {
    return insertStyles(cache, serialized, isStringTag);
  });
  if (!isBrowser5 && rules !== void 0) {
    var _ref2;
    var serializedNames = serialized.name;
    var next2 = serialized.next;
    while (next2 !== void 0) {
      serializedNames += " " + next2.name;
      next2 = next2.next;
    }
    return /* @__PURE__ */ React4.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }
  return null;
};
var createStyled = function createStyled2(tag, options) {
  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;
  if (options !== void 0) {
    identifierName = options.label;
    targetClassName = options.target;
  }
  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp("as");
  return function() {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
    if (identifierName !== void 0) {
      styles.push("label:" + identifierName + ";");
    }
    if (args[0] == null || args[0].raw === void 0) {
      styles.push.apply(styles, args);
    } else {
      var templateStringsArr = args[0];
      styles.push(templateStringsArr[0]);
      var len = args.length;
      var i = 1;
      for (; i < len; i++) {
        styles.push(args[i], templateStringsArr[i]);
      }
    }
    var Styled = withEmotionCache(function(props, cache, ref) {
      var FinalTag = shouldUseAs && props.as || baseTag;
      var className = "";
      var classInterpolations = [];
      var mergedProps = props;
      if (props.theme == null) {
        mergedProps = {};
        for (var key in props) {
          mergedProps[key] = props[key];
        }
        mergedProps.theme = React4.useContext(ThemeContext);
      }
      if (typeof props.className === "string") {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }
      var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
      className += cache.key + "-" + serialized.name;
      if (targetClassName !== void 0) {
        className += " " + targetClassName;
      }
      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
      var newProps = {};
      for (var _key in props) {
        if (shouldUseAs && _key === "as") continue;
        if (finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }
      newProps.className = className;
      if (ref) {
        newProps.ref = ref;
      }
      return /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement(Insertion3, {
        cache,
        serialized,
        isStringTag: typeof FinalTag === "string"
      }), /* @__PURE__ */ React4.createElement(FinalTag, newProps));
    });
    Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, "toString", {
      value: function value() {
        if (targetClassName === void 0 && isDevelopment4) {
          return "NO_COMPONENT_SELECTOR";
        }
        return "." + targetClassName;
      }
    });
    Styled.withComponent = function(nextTag, nextOptions) {
      var newStyled2 = createStyled2(nextTag, _extends({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      }));
      return newStyled2.apply(void 0, styles);
    };
    return Styled;
  };
};

// ../../node_modules/@emotion/styled/dist/emotion-styled.esm.js
var import_extends4 = __toESM(require_extends());
var import_react3 = require("react");
var tags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
var newStyled = createStyled.bind(null);
tags.forEach(function(tagName) {
  newStyled[tagName] = newStyled(tagName);
});

// src/theme/theme.ts
var theme = {
  colors: {
    primary: "#3b82f6",
    secondary: "#10b981",
    default: "#ffffff",
    danger: "#ef4444",
    white: "#fff",
    black: "#000",
    blue: "oklch(97% 0.014 254.604)",
    blue200: "oklch(88.2% 0.059 254.128)",
    blue400: "oklch(70.7% 0.165 254.624)",
    blue500: "oklch(62.3% 0.214 259.815)",
    blue600: "oklch(54.6% 0.245 262.881)",
    purple: "oklch(97.7% 0.014 308.299)",
    purple200: "oklch(90.2% 0.063 306.703)",
    purple400: "oklch(71.4% 0.203 305.504)",
    purple500: "oklch(62.7% 0.265 303.9)",
    purple600: "oklch(55.8% 0.288 302.321)",
    cyan: "oklch(98.4% 0.019 200.873)",
    cyan200: "oklch(91.7% 0.08 205.041)",
    cyan400: "oklch(78.9% 0.154 211.53)",
    cyan500: "oklch(71.5% 0.143 215.221)",
    cyan600: "oklch(60.9% 0.126 221.723)",
    green: "oklch(98.2% 0.018 155.826)",
    green200: "oklch(92.5% 0.084 155.995)",
    green400: "oklch(79.2% 0.209 151.711)",
    green500: "oklch(72.3% 0.219 149.579)",
    green600: "oklch(62.7% 0.194 149.214)",
    magenta: "oklch(97.7% 0.017 320.058)",
    magenta200: "oklch(90.3% 0.076 319.62)",
    magenta400: "oklch(74% 0.238 322.16)",
    magenta500: "oklch(66.7% 0.295 322.15)",
    magenta600: "oklch(59.1% 0.293 322.896)",
    pink: "oklch(97.1% 0.014 343.198)",
    pink200: "oklch(89.9% 0.061 343.231)",
    pink400: "oklch(71.8% 0.202 349.761)",
    pink500: "oklch(65.6% 0.241 354.308)",
    pink600: "oklch(59.2% 0.249 0.584)",
    red: "oklch(97.1% 0.013 17.38)",
    red200: "oklch(88.5% 0.062 18.334)",
    red400: "oklch(70.4% 0.191 22.216)",
    red500: "oklch(63.7% 0.237 25.331)",
    red600: "oklch(57.7% 0.245 27.325)",
    orange: "oklch(98% 0.016 73.684)",
    orange200: "oklch(90.1% 0.076 70.697)",
    orange400: "oklch(75% 0.183 55.934)",
    orange500: "oklch(70.5% 0.213 47.604)",
    orange600: "oklch(64.6% 0.222 41.116)",
    yellow: "oklch(98.7% 0.026 102.212)",
    yellow200: "oklch(94.5% 0.129 101.54)",
    yellow400: "oklch(85.2% 0.199 91.936)",
    yellow500: "oklch(79.5% 0.184 86.047)",
    yellow600: "oklch(68.1% 0.162 75.834)",
    volcano: "oklch(96.9% 0.015 12.422)",
    volcano200: "oklch(89.2% 0.058 10.001)",
    volcano400: "oklch(71.2% 0.194 13.428)",
    volcano500: "oklch(64.5% 0.246 16.439)",
    volcano600: "oklch(58.6% 0.253 17.585)",
    geekblue: "oklch(97.7% 0.013 236.62)",
    geekblue200: "oklch(90.1% 0.058 230.902)",
    geekblue400: "oklch(74.6% 0.16 232.661)",
    geekblue500: "oklch(68.5% 0.169 237.323)",
    geekblue600: "oklch(58.8% 0.158 241.966)",
    lime: "oklch(98.6% 0.031 120.757)",
    lime200: "oklch(93.8% 0.127 124.321)",
    lime400: "oklch(84.1% 0.238 128.85)",
    lime500: "oklch(76.8% 0.233 130.85)",
    lime600: "oklch(64.8% 0.2 131.684)",
    gold: "oklch(98.7% 0.022 95.277)",
    gold200: "oklch(92.4% 0.12 95.746)",
    gold400: "oklch(82.8% 0.189 84.429)",
    gold500: "oklch(76.9% 0.188 70.08)",
    gold600: "oklch(66.6% 0.179 58.318)",
    gray: "oklch(98.5% 0.002 247.839)",
    gray100: "oklch(96.7% 0.003 264.542)",
    gray200: "oklch(92.8% 0.006 264.531)",
    gray300: "oklch(87.2% 0.01 258.338)",
    gray400: "oklch(70.7% 0.022 261.325)",
    gray500: "oklch(55.1% 0.027 264.364)",
    gray600: "oklch(44.6% 0.03 256.802)",
    gray700: "oklch(37.3% 0.034 259.733)",
    gray800: "oklch(27.8% 0.033 256.848)",
    gray900: "oklch(21% 0.034 264.665)"
  },
  hoverColors: {
    primary: "#4096ff"
  },
  textColors: {
    white: "#fff",
    black: "#000"
  },
  borderColors: {
    black: "#000",
    white: "#fff",
    gray300: "oklch(87.2% 0.01 258.338)"
  },
  spacing: {
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem"
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    "4xl": "2rem"
  },
  textSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  },
  textLineHeight: {
    xs: "calc(1 / 0.75)",
    sm: "calc(1.25 / 0.875)",
    base: "calc(1.5 / 1)",
    lg: "calc(1.75 / 1.125)",
    xl: "calc(1.75 / 1.25)",
    "2xl": "calc(2 / 1.5)",
    "3xl": "calc(2.25 / 1.875)",
    "4xl": "calc(2.5 / 2.25)",
    "5xl": "1",
    "6xl": "1",
    "7xl": "1",
    "8xl": "1",
    "9xl": "1"
  },
  fontWeights: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800"
  }
};
var defaultTheme = {
  colors: { ...theme.colors },
  hoverColors: { ...theme.hoverColors },
  textColors: { ...theme.textColors },
  spacing: { ...theme.spacing },
  borderRadius: { ...theme.borderRadius },
  textSizes: { ...theme.textSizes },
  textLineHeight: { ...theme.textLineHeight },
  fontWeights: { ...theme.fontWeights },
  borderColors: { ...theme.borderColors }
};

// src/theme/theme-utils.ts
var getThemeValue = (theme2, category, key, defaultValue) => {
  if (!theme2 || !theme2[category]) return defaultValue;
  const categoryObj = theme2[category];
  return categoryObj[key] !== void 0 ? categoryObj[key] : defaultValue;
};
var getColor = (theme2, color) => getThemeValue(theme2, "colors", color, defaultTheme.colors[color]);
var getTextColor = (theme2, color) => getThemeValue(theme2, "textColors", color, defaultTheme.textColors[color]);
var getTextSize = (theme2, size) => getThemeValue(theme2, "textSizes", size, defaultTheme.textSizes[size]);
var getTextLineHeight = (theme2, size) => getThemeValue(theme2, "textLineHeight", size, defaultTheme.textLineHeight[size]);
var getBorderRadius = (theme2, size) => getThemeValue(theme2, "borderRadius", size, defaultTheme.borderRadius[size]);
var getBorderColors = (theme2, value) => getThemeValue(theme2, "borderColors", value, defaultTheme.borderColors[value]);

// src/components/button/button.styles.ts
var colorMap = {
  blue: "blue500",
  purple: "purple500",
  cyan: "cyan500",
  green: "green500",
  magenta: "magenta500",
  pink: "pink500",
  red: "red500",
  orange: "orange500",
  yellow: "yellow500",
  volcano: "volcano500",
  geekblue: "geekblue500",
  lime: "lime500",
  gold: "gold500"
};
var hoverColorMap = {
  blue: "blue400",
  purple: "purple400",
  cyan: "cyan400",
  green: "green400",
  magenta: "magenta400",
  pink: "pink400",
  red: "red400",
  orange: "orange400",
  yellow: "yellow400",
  volcano: "volcano400",
  geekblue: "geekblue400",
  lime: "lime400",
  gold: "gold400"
};
var bgColorMap = {
  blue: "blue",
  purple: "purple",
  cyan: "cyan",
  green: "green",
  magenta: "magenta",
  pink: "pink",
  red: "red",
  orange: "orange",
  yellow: "yellow",
  volcano: "volcano",
  geekblue: "geekblue",
  lime: "lime",
  gold: "gold"
};
var baseButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  &:hover {
    outline: none;
  };
`;
var loadingVariants = {
  true: css`
        cursor: not-allowed;
        opacity: 0.7;
    `,
  false: css`
        cursor: pointer;
        opacity: 1;
    `
};
var sizeVariants = (theme2) => ({
  sm: css`
        --button-padding-x: 0.75rem;
        --button-padding-y: 0.375rem;
        --button-font-size: ${getTextSize(theme2, "sm")};
        --button-line-height: ${getTextLineHeight(theme2, "sm")};
        --button-border-radius: ${getBorderRadius(theme2, "sm")};
        
        padding: var(--button-padding-y) var(--button-padding-x);
        font-size: var(--button-font-size);
        line-height: var(--button-line-height);
        border-radius: var(--button-border-radius);
    `,
  md: css`
        --button-padding-x: 1rem;
        --button-padding-y: 0.5rem;
        --button-font-size: ${getTextSize(theme2, "base")};
        --button-line-height: ${getTextLineHeight(theme2, "base")};
        --button-border-radius: ${getBorderRadius(theme2, "md")};
        
        padding: var(--button-padding-y) var(--button-padding-x);
        font-size: var(--button-font-size);
        line-height: var(--button-line-height);
        border-radius: var(--button-border-radius);
    `,
  lg: css`
        --button-padding-x: 1.25rem;
        --button-padding-y: 0.625rem;
        --button-font-size: ${getTextSize(theme2, "lg")};
        --button-line-height: ${getTextLineHeight(theme2, "lg")};
        --button-border-radius: ${getBorderRadius(theme2, "lg")};
        
        padding: var(--button-padding-y) var(--button-padding-x);
        font-size: var(--button-font-size);
        line-height: var(--button-line-height);
        border-radius: var(--button-border-radius);
    `
});
var typeVariants = (theme2, color) => {
  const resolvedColor = color ? colorMap[color] : null;
  const hoverColor = color ? hoverColorMap[color] : null;
  const bgColor = color ? bgColorMap[color] : null;
  return {
    primary: css`
            --button-bg: ${getColor(theme2, resolvedColor || "primary")};
            --button-color: ${getTextColor(theme2, "white")};
            --button-hover-bg: ${getColor(theme2, hoverColor || "primary")};
            
            background-color: var(--button-bg);
            color: var(--button-color);
            &:hover:not(:disabled) {
                background-color: var(--button-hover-bg);
            };
        `,
    outline: css`
            --button-color: ${getColor(theme2, resolvedColor || "black")};
            --button-border-color: ${getColor(theme2, resolvedColor || "gray300")};
            --button-hover-color: ${getColor(theme2, hoverColor || "blue600")};
            --button-hover-border-color: ${getColor(theme2, hoverColor || "blue600")};
            
            background-color: transparent;
            color: var(--button-color);
            border: 1px dashed var(--button-border-color);
            box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
            &:hover:not(:disabled) {
                color: var(--button-hover-color);
                border-color: var(--button-hover-border-color);
            };
        `,
    text: css`
            --button-color: ${getColor(theme2, resolvedColor || "gray900")};
            --button-hover-bg: ${getColor(theme2, bgColor || "gray600")};
            
            background-color: transparent;
            color: var(--button-color);
            border: none;
            
            &:hover:not(:disabled) {
                background-color: var(--button-hover-bg);
            };
        `,
    link: css`
            --button-color: ${getColor(theme2, resolvedColor || "blue600")};
            --button-hover-color: ${getColor(theme2, hoverColor || "blue400")};
            
            background-color: transparent;
            color: var(--button-color);
            border: none;
            
            &:hover:not(:disabled) {
                text-decoration: none;
                color: var(--button-hover-color);
            }
        `,
    default: css`
            --button-color: ${getColor(theme2, resolvedColor || "black")};
            --button-border-color: ${getColor(theme2, resolvedColor || "gray300")};
            --button-hover-color: ${getColor(theme2, hoverColor || "blue600")};
            --button-hover-border-color: ${getColor(theme2, hoverColor || "blue600")};
            
            background-color: transparent;
            color: var(--button-color);
            border: 1px solid var(--button-border-color);
            box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
            &:hover:not(:disabled) {
                color: var(--button-hover-color);
                border-color: var(--button-hover-border-color);
            },
        `
  };
};
var StyledButton = newStyled.button`
    ${baseButtonStyles}

    // 根据 props 组合变体样式
    ${({ isLoading }) => loadingVariants[String(isLoading)]}
    ${({ size, theme: theme2 }) => sizeVariants(theme2)[size]}
    ${({ variant, color, theme: theme2 }) => typeVariants(theme2, color)[variant]}

    // 应用外部 className，允许 Tailwind 覆盖样式
    ${({ className }) => className && css`
        ${className}
    `}

    /* 禁用状态样式 */
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
    
    /* 加载状态特殊处理 */
    ${({ isLoading }) => isLoading && `
        position: relative;
        
        /* \u9632\u6B62\u6309\u94AE\u6587\u5B57\u5728\u52A0\u8F7D\u65F6\u8DF3\u52A8 */
        &:after {
        content: '';
        display: inline-block;
        width: 1em;
        height: 1em;
        margin-left: 0.5em;
        vertical-align: middle;
        border: 2px solid currentColor;
        border-right-color: transparent;
        border-radius: 50%;
        animation: spin 0.75s linear infinite;
        }
        
        @keyframes spin {
        to { transform: rotate(360deg); }
        }
    `}
`;

// ../../node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.esm.js
var ReactJSXRuntime = __toESM(require("react/jsx-runtime"));
var import_react5 = require("react");
var import_extends5 = __toESM(require_extends());
var import_hoist_non_react_statics2 = __toESM(require_hoist_non_react_statics_cjs());
var Fragment5 = ReactJSXRuntime.Fragment;
var jsx4 = function jsx5(type, props, key) {
  if (!hasOwn.call(props, "css")) {
    return ReactJSXRuntime.jsx(type, props, key);
  }
  return ReactJSXRuntime.jsx(Emotion$1, createEmotionProps(type, props), key);
};
var jsxs2 = function jsxs3(type, props, key) {
  if (!hasOwn.call(props, "css")) {
    return ReactJSXRuntime.jsxs(type, props, key);
  }
  return ReactJSXRuntime.jsxs(Emotion$1, createEmotionProps(type, props), key);
};

// src/components/button/button.tsx
var Button = import_react6.default.forwardRef(
  ({
    variant = "default",
    size = "md",
    isLoading = false,
    color = "default",
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxs2(
      StyledButton,
      {
        ref,
        variant,
        size,
        color,
        isLoading,
        disabled: isLoading || props.disabled,
        ...props,
        children: [
          isLoading ? /* @__PURE__ */ jsx4("span", { style: { marginRight: "0.5rem" }, children: "\u23F3" }) : null,
          children
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/components/divider/divider.tsx
var import_react8 = __toESM(require("react"));

// src/components/divider/divider.styles.ts
var defaultColorMap = {
  blue: "blue200",
  purple: "purple200",
  cyan: "cyan200",
  green: "green200",
  magenta: "magenta200",
  pink: "pink200",
  red: "red200",
  orange: "orange200",
  yellow: "yellow200",
  volcano: "volcano200",
  geekblue: "geekblue200",
  lime: "lime200",
  gold: "gold200",
  gray: "gray200"
};
var baseDividerStyled = css`
    display: flex;
    align-items: center;
    clear: both;
    width: 100%;
    min-width: 100%;
    margin: 24px 0;
    border: 0;
`;
var borderStyle = (variant) => css`
  border-block-start-style: ${variant};
`;
var borderColor = (theme2, color) => css`
  border-block-start-color: ${getColor(theme2, defaultColorMap[color])};
`;
var borderWidthSet = (width) => css`
  border-block-start-width: ${width}px;
`;
var textPosition = (orientation, borderWidth) => {
  const justifyContentMap = {
    "start": "flex-start",
    "center": "center",
    "end": "flex-end"
  };
  return css`
    &::before,
    &::after {
      content: '';
      flex: ${orientation === "center" ? 1 : "unset"};
      border-block-start: inherit;
      border-block-start-width: ${borderWidth}px;
    }
    
    &::before {
      margin-right: ${orientation === "center" ? "0.5em" : "0"};
      width: ${orientation === "start" ? "5%" : "unset"};
    }
    
    &::after {
      margin-left: ${orientation === "center" ? "0.5em" : "0"};
      flex: ${orientation !== "end" ? 1 : "unset"};
      width: ${orientation === "end" ? "95%" : "unset"};
    }
    
    justify-content: ${justifyContentMap[orientation]};
  `;
};
var DividerStyled = newStyled.div`
  ${baseDividerStyled}
  ${({ variant }) => borderStyle(variant)}
  ${({ color = "gray", theme: theme2 }) => borderColor(theme2, color)}
  ${({ borderWidth = 1 }) => borderWidthSet(borderWidth)}
  ${({ orientation, borderWidth = 1 }) => textPosition(orientation, borderWidth)}
  
  // 无文本时的样式
  &:empty {
    &::before, &::after {
      content: none;
    }
    border-block-start-width: ${({ borderWidth = 1 }) => borderWidth}px;
  }
`;

// src/components/divider/divider.tsx
var Divider = import_react8.default.forwardRef(
  ({
    variant = "solid",
    orientation = "start",
    color = "gray",
    borderWidth = 1,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx4(
      DividerStyled,
      {
        ref,
        variant,
        orientation,
        color,
        borderWidth,
        ...props,
        children
      }
    );
  }
);
Divider.displayName = "Divider";

// src/components/flex/flex.tsx
var import_react10 = __toESM(require("react"));

// src/components/flex/flex.styles.ts
var gapSizes = {
  small: "8px",
  middle: "16px",
  large: "24px"
};
var getGapValue = (gap) => {
  if (gap === void 0) return void 0;
  if (typeof gap === "string" && gapSizes[gap]) {
    return gapSizes[gap];
  }
  if (typeof gap === "number") {
    return `${gap}px`;
  }
  return gap;
};
var baseFlexStyles = css`
  display: flex;
  margin: 0;
  padding: 0;
`;
var verticalVariants = {
  true: css`
        flex-direction: column;
    `,
  false: css`
        flex-direction: row;
    `
};
var justifyVariants = {
  "flex-start": css`justify-content: flex-start;`,
  "flex-end": css`justify-content: flex-end;`,
  "center": css`justify-content: center;`,
  "space-between": css`justify-content: space-between;`,
  "space-around": css`justify-content: space-around;`,
  "space-evenly": css`justify-content: space-evenly;`
};
var alignVariants = {
  "flex-start": css`align-items: flex-start;`,
  "flex-end": css`align-items: flex-end;`,
  "center": css`align-items: center;`
};
var wrapVariants = {
  true: css`flex-wrap: wrap;`,
  false: css`flex-wrap: nowrap;`,
  "wrap": css`flex-wrap: wrap;`,
  "nowrap": css`flex-wrap: nowrap;`,
  "wrap-reverse": css`flex-wrap: wrap-reverse;`
};
var FlexStyled = newStyled("div", {
  shouldForwardProp: (prop) => !["vertical", "justify", "align", "gap", "wrap"].includes(prop)
})`
  ${baseFlexStyles}

  /* 垂直/水平方向 */
  ${({ vertical = false }) => vertical ? verticalVariants.true : verticalVariants.false}
  
  /* 主轴对齐方式 */
  ${({ justify = "flex-start" }) => justifyVariants[justify]}
  
  /* 交叉轴对齐方式 */
  ${({ align = "flex-start" }) => alignVariants[align]}

  /* gap 处理 */
  ${({ gap }) => {
  const gapValue = getGapValue(gap);
  return gapValue ? css`gap: ${gapValue};` : void 0;
}}

   /* flex-wrap 处理 */
  ${({ wrap }) => {
  if (typeof wrap === "boolean") {
    return wrapVariants[String(wrap)];
  }
  if (wrap) {
    return wrapVariants[wrap];
  }
  return wrapVariants.false;
}}

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;

// src/components/flex/flex.tsx
var Flex = import_react10.default.forwardRef(
  ({
    vertical = false,
    justify = "flex-start",
    align = "flex-start",
    gap,
    wrap = false,
    children,
    className,
    style
  }, ref) => {
    return /* @__PURE__ */ jsx4(
      FlexStyled,
      {
        ref,
        justify,
        align,
        vertical,
        gap,
        wrap,
        className,
        style,
        children
      }
    );
  }
);
Flex.displayName = "Flex";

// src/components/grid/grid.tsx
var import_react12 = __toESM(require("react"));

// src/components/grid/grid.utils.ts
var BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};
var parseColumnValue = (value) => {
  if (typeof value === "number") {
    return value > 0 ? `${value}fr` : "auto";
  }
  const validUnits = ["fr", "px", "rem", "em", "%", "vw", "vh", "auto", "min-content", "max-content"];
  const hasUnit = validUnits.some((unit) => value.includes(unit));
  return hasUnit ? value : `${value}fr`;
};
var handleArrayValues = (columns) => {
  return columns.map((col) => parseColumnValue(col)).join(" ");
};
var handleResponsiveValues = (values, property) => {
  return Object.entries(values).map(([breakpoint, value]) => {
    const minWidth = BREAKPOINTS[breakpoint];
    let cssValue;
    if (Array.isArray(value)) {
      cssValue = handleArrayValues(value);
    } else if (typeof value === "number") {
      cssValue = value > 1 ? `repeat(${value}, 1fr)` : "1fr";
    } else {
      cssValue = value;
    }
    return `@media (min-width: ${minWidth}px) {
        grid-template-${property}: ${cssValue};
      }`;
  }).join(" ");
};
var convertGridTemplate = (value, property = "columns") => {
  if (!value) return "";
  if (typeof value === "number") {
    return value > 1 ? `grid-template-${property}: repeat(${value}, 1fr);` : `grid-template-${property}: 1fr;`;
  }
  if (typeof value === "string") {
    return `grid-template-${property}: ${value};`;
  }
  if (Array.isArray(value)) {
    return `grid-template-${property}: ${handleArrayValues(value)};`;
  }
  return handleResponsiveValues(value, property);
};
var parseValue = (value) => {
  if (typeof value === "number") {
    return `${value}px`;
  }
  return value;
};
var parseGapValue = (value) => {
  return parseValue(value);
};
var parseGapArray = (gap) => {
  const [row, column2] = gap;
  return `${parseValue(row)} ${parseValue(column2)}`;
};
var handleResponsiveGap = (gap) => {
  return Object.entries(gap).map(([breakpoint, value]) => {
    const minWidth = BREAKPOINTS[breakpoint];
    let cssValue;
    if (Array.isArray(value)) {
      cssValue = parseGapArray(value);
    } else {
      cssValue = parseGapValue(value);
    }
    return `@media (min-width: ${minWidth}px) {
        gap: ${cssValue};
      }`;
  }).join(" ");
};
var convertGap = (gap) => {
  if (!gap) return "";
  if (typeof gap === "number") {
    return `gap: ${gap}px;`;
  }
  if (typeof gap === "string") {
    return `gap: ${gap};`;
  }
  if (Array.isArray(gap)) {
    return `gap: ${parseGapArray(gap)};`;
  }
  return handleResponsiveGap(gap);
};
var handleResponsiveAutoFlow = (autoFlow) => {
  return Object.entries(autoFlow).map(([breakpoint, value]) => {
    const minWidth = BREAKPOINTS[breakpoint];
    return `@media (min-width: ${minWidth}px) {
        grid-auto-flow: ${value};
      }`;
  }).join(" ");
};
var convertAutoFlow = (autoFlow) => {
  if (!autoFlow) return "";
  if (typeof autoFlow === "string") {
    return `grid-auto-flow: ${autoFlow};`;
  }
  return handleResponsiveAutoFlow(autoFlow);
};
var handleAreasArray = (areas) => {
  const areasString = areas.map((row) => `"${row}"`).join(" ");
  return `grid-template-areas: ${areasString};`;
};
var handleAreasObjects = (areas) => {
  const areaMap = {};
  areas.forEach((area) => {
    const rowStart = typeof area.rows === "number" ? area.rows : area.rows[0];
    const rowEnd = typeof area.rows === "number" ? area.rows + 1 : area.rows[1] + 1;
    const colStart = typeof area.columns === "number" ? area.columns : area.columns[0];
    const colEnd = typeof area.columns === "number" ? area.columns + 1 : area.columns[1] + 1;
    areaMap[area.name] = `${area.name} ${rowStart} / ${colStart} / ${rowEnd} / ${colEnd}`;
  });
  const maxRow = Math.max(...areas.map(
    (a) => typeof a.rows === "number" ? a.rows : a.rows[1]
  ));
  const maxCol = Math.max(...areas.map(
    (a) => typeof a.columns === "number" ? a.columns : a.columns[1]
  ));
  const gridTemplateAreas = [];
  for (let row = 0; row <= maxRow; row++) {
    const rowAreas = [];
    for (let col = 0; col <= maxCol; col++) {
      const area = areas.find((a) => {
        const rowStart = typeof a.rows === "number" ? a.rows : a.rows[0];
        const rowEnd = typeof a.rows === "number" ? a.rows : a.rows[1];
        const colStart = typeof a.columns === "number" ? a.columns : a.columns[0];
        const colEnd = typeof a.columns === "number" ? a.columns : a.columns[1];
        return row >= rowStart && row <= rowEnd && col >= colStart && col <= colEnd;
      });
      rowAreas.push(area ? area.name : ".");
    }
    gridTemplateAreas.push(rowAreas.join(" "));
  }
  return handleAreasArray(gridTemplateAreas);
};
var handleResponsiveAreas = (areas) => {
  return Object.entries(areas).map(([breakpoint, value]) => {
    const minWidth = BREAKPOINTS[breakpoint];
    let cssValue;
    if (Array.isArray(value) && typeof value[0] === "string") {
      cssValue = handleAreasArray(value);
    } else {
      cssValue = handleAreasObjects(value);
    }
    return `@media (min-width: ${minWidth}px) {
        ${cssValue}
      }`;
  }).join(" ");
};
var convertAreas = (areas) => {
  if (!areas) return "";
  if (Array.isArray(areas) && typeof areas[0] === "string") {
    return handleAreasArray(areas);
  }
  if (Array.isArray(areas) && typeof areas[0] === "object") {
    return handleAreasObjects(areas);
  }
  return handleResponsiveAreas(areas);
};
var parseAutoSize = (value) => {
  if (typeof value === "number") {
    return `${value}px`;
  }
  const cssFunctions = ["minmax", "fit-content", "repeat", "min", "max"];
  const isCssFunction = cssFunctions.some((fn) => value.includes(`${fn}(`));
  return isCssFunction ? value : `${value}`;
};
var handleResponsiveAutoSize = (value, property) => {
  return Object.entries(value).map(([breakpoint, size]) => {
    const minWidth = BREAKPOINTS[breakpoint];
    const cssValue = parseAutoSize(size);
    return `@media (min-width: ${minWidth}px) {
        grid-auto-${property}: ${cssValue};
      }`;
  }).join(" ");
};
var convertAutoSize = (value, property = "rows") => {
  if (!value) return "";
  if (typeof value === "string" || typeof value === "number") {
    return `grid-auto-${property}: ${parseAutoSize(value)};`;
  }
  return handleResponsiveAutoSize(value, property);
};
var handleResponsiveAlign = (value, property) => {
  return Object.entries(value).map(([breakpoint, alignValue]) => {
    const minWidth = BREAKPOINTS[breakpoint];
    return `@media (min-width: ${minWidth}px) {
        ${property}: ${alignValue};
      }`;
  }).join(" ");
};
var convertAlign = (value, property = "justify-items") => {
  if (!value) return "";
  if (typeof value === "string") {
    return `${property}: ${value};`;
  }
  return handleResponsiveAlign(value, property);
};
var handleResponsivePosition = (value, property) => {
  return Object.entries(value).map(([breakpoint, val]) => {
    const minWidth = BREAKPOINTS[breakpoint];
    return `@media (min-width: ${minWidth}px) {
        ${property}: ${val};
      }`;
  }).join(" ");
};
var convertPosition = (value, property = "grid-column-start") => {
  if (!value) return "";
  if (typeof value === "number" || typeof value === "string") {
    return `${property}: ${value};`;
  }
  return handleResponsivePosition(value, property);
};
var convertShorthand = (value, property = "grid-column") => {
  if (!value) return "";
  if (typeof value === "string") {
    return `${property}: ${value};`;
  }
  return Object.entries(value).map(([breakpoint, val]) => {
    const minWidth = BREAKPOINTS[breakpoint];
    return `@media (min-width: ${minWidth}px) {
        ${property}: ${val};
      }`;
  }).join(" ");
};

// src/components/grid/grid.styles.ts
var baseGridStyles = css`
  display: grid;
`;
var GridStyled = newStyled.div`
    ${baseGridStyles}

    /* 处理列布局 */
  ${({ columns }) => {
  const columnsCss = convertGridTemplate(columns, "columns");
  return css`
      ${columnsCss}
    `;
}}
  /* 处理行布局 */
  ${({ rows }) => {
  const rowsCss = convertGridTemplate(rows, "rows");
  return rowsCss ? css`${rowsCss}` : "";
}}
  /* 处理间距 */
  ${({ gap }) => {
  const gapCss = convertGap(gap);
  return gapCss ? css`${gapCss}` : "";
}}
  /* 处理自动流 */
  ${({ autoFlow }) => {
  const autoFlowCss = convertAutoFlow(autoFlow);
  return autoFlowCss ? css`${autoFlowCss}` : "";
}}
  /* 处理网格区域 */
  ${({ areas }) => {
  const areasCss = convertAreas(areas);
  return areasCss ? css`${areasCss}` : "";
}}
  /* 处理自动行尺寸 */
  ${({ autoRows }) => {
  const autoRowsCss = convertAutoSize(autoRows, "rows");
  return autoRowsCss ? css`${autoRowsCss}` : "";
}}
  /* 处理自动列尺寸 */
  ${({ autoColumns }) => {
  const autoColumnsCss = convertAutoSize(autoColumns, "columns");
  return autoColumnsCss ? css`${autoColumnsCss}` : "";
}}
    /* 处理网格项行轴对齐 */
  ${({ justifyItems }) => {
  const justifyItemsCss = convertAlign(justifyItems, "justify-items");
  return justifyItemsCss ? css`${justifyItemsCss}` : "";
}}
  /* 处理网格项列轴对齐 */
  ${({ alignItems }) => {
  const alignItemsCss = convertAlign(alignItems, "align-items");
  return alignItemsCss ? css`${alignItemsCss}` : "";
}}
  /* 处理网格容器行轴对齐 */
  ${({ justifyContent }) => {
  const justifyContentCss = convertAlign(justifyContent, "justify-content");
  return justifyContentCss ? css`${justifyContentCss}` : "";
}}
  /* 处理网格容器列轴对齐 */
  ${({ alignContent }) => {
  const alignContentCss = convertAlign(alignContent, "align-content");
  return alignContentCss ? css`${alignContentCss}` : "";
}}
`;

// src/components/grid/grid.tsx
var Grid = import_react12.default.forwardRef(
  ({
    columns,
    rows,
    gap,
    autoFlow,
    areas,
    autoRows,
    autoColumns,
    justifyItems,
    alignItems,
    justifyContent,
    alignContent,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx4(
      GridStyled,
      {
        ref,
        columns,
        rows,
        gap,
        autoFlow,
        areas,
        autoRows,
        autoColumns,
        justifyItems,
        alignItems,
        justifyContent,
        alignContent,
        ...props,
        children
      }
    );
  }
);
Grid.displayName = "Grid";

// src/components/grid/grid.item.tsx
var import_react13 = __toESM(require("react"));

// src/components/grid/grid.item.styles.ts
var GridItemStyled = newStyled.div`
  /* 列起始位置 */
  ${({ columnStart }) => convertPosition(columnStart, "grid-column-start")}
  
  /* 列结束位置 */
  ${({ columnEnd }) => convertPosition(columnEnd, "grid-column-end")}
  
  /* 行起始位置 */
  ${({ rowStart }) => convertPosition(rowStart, "grid-row-start")}
  
  /* 行结束位置 */
  ${({ rowEnd }) => convertPosition(rowEnd, "grid-row-end")}
  
  /* 列简写 */
  ${({ gridColumn }) => convertShorthand(gridColumn, "grid-column")}
  
  /* 行简写 */
  ${({ gridRow }) => convertShorthand(gridRow, "grid-row")}
  
  /* 区域简写 */
  ${({ gridArea }) => convertShorthand(gridArea, "grid-area")}
`;

// src/components/grid/grid.item.tsx
var GridItem = import_react13.default.forwardRef(
  ({
    columnStart,
    columnEnd,
    rowStart,
    rowEnd,
    gridColumn,
    gridRow,
    gridArea,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx4(
      GridItemStyled,
      {
        ref,
        columnStart,
        columnEnd,
        rowStart,
        rowEnd,
        gridColumn,
        gridRow,
        gridArea,
        ...props,
        children
      }
    );
  }
);
GridItem.displayName = "GridItem";

// src/components/typography/typography.tsx
var import_react16 = require("react");

// src/components/typography/typography.styles.ts
var import_react14 = __toESM(require("react"));

// src/components/typography/theme/presets.ts
var baseSizes = {
  h1: { xs: "2rem", sm: "2.5rem", md: "3rem" },
  h2: { xs: "1.75rem", sm: "2rem", md: "2.25rem" },
  h3: { xs: "1.5rem", sm: "1.75rem", md: "1.875rem" },
  h4: { xs: "1.25rem", sm: "1.5rem", md: "1.5rem" },
  h5: { xs: "1.125rem", sm: "1.25rem", md: "1.25rem" },
  h6: { xs: "1rem", sm: "1rem", md: "1rem" },
  p: { xs: "1rem", sm: "1rem", md: "1rem" },
  small: { xs: "0.875rem", sm: "0.875rem", md: "0.875rem" }
};
var lineHeights = {
  h1: 1.2,
  h2: 1.3,
  h3: 1.35,
  h4: 1.4,
  h5: 1.5,
  h6: 1.6,
  p: 1.6,
  small: 1.6
};
var fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  black: 900
};
var spacing = {
  gutterBottom: {
    h1: "0.67em",
    h2: "0.83em",
    h3: "1em",
    h4: "1.33em",
    h5: "1.67em",
    h6: "2.33em",
    p: "1em",
    default: "0.5em"
  }
};
var typographyPresets = {
  baseSizes,
  lineHeights,
  fontWeights,
  spacing
};

// src/components/typography/theme/themes.ts
var lightTheme = {
  colors: {
    primary: "#0070f3",
    secondary: "#666",
    success: "#22c55e",
    error: "#e53e3e",
    warning: "#f59e0b",
    info: "#3b82f6",
    light: "#f8f9fa",
    dark: "#111",
    muted: "#6c757d",
    text: "#333",
    background: "#fff"
  },
  ...typographyPresets
};
var darkTheme = {
  colors: {
    primary: "#3291ff",
    secondary: "#888",
    success: "#2ed573",
    error: "#ff4d4d",
    warning: "#ffbe21",
    info: "#4dabf7",
    light: "#f8f9fa",
    dark: "#f1f1f1",
    muted: "#adb5bd",
    text: "#f1f1f1",
    background: "#121212"
  },
  ...typographyPresets
};
var themes = {
  light: lightTheme,
  dark: darkTheme
};

// src/components/typography/typography.styles.ts
var getComponentMapping = (variant) => {
  const mapping = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    p: "p",
    span: "span",
    div: "div",
    strong: "strong",
    em: "em",
    code: "code",
    pre: "pre",
    blockquote: "blockquote",
    ul: "ul",
    ol: "ol",
    li: "li",
    a: "a",
    mark: "mark",
    underline: "u",
    delete: "del"
  };
  return mapping[variant] || "span";
};
var BaseTypography = import_react14.default.forwardRef((props, ref) => {
  const {
    variant = "p",
    theme: theme2 = "light",
    color,
    align,
    gutterBottom,
    noWrap,
    fontWeight,
    transform,
    italic = false,
    underline = false,
    strikethrough = false,
    ellipsis,
    // 解构出 ellipsis 避免传递给 DOM
    copyable,
    // 解构出 copyable 避免传递给 DOM
    as: ElementType,
    ...restProps
    // 只包含原生 DOM 属性
  } = props;
  const Component = ElementType || getComponentMapping(variant);
  return import_react14.default.createElement(Component, { ...restProps, ref });
});
var StyledTypography = newStyled(BaseTypography)`
  ${({
  variant = "p",
  theme: theme2 = "light",
  color,
  align,
  gutterBottom,
  noWrap,
  fontWeight,
  transform,
  italic = false,
  underline = false,
  strikethrough = false,
  ellipsis
}) => {
  const themeConfig = themes[theme2] || themes.light;
  const colors = themeConfig.colors;
  const size = themeConfig.baseSizes[variant] || themeConfig.baseSizes.p;
  const lineHeight = themeConfig.lineHeights[variant] || themeConfig.lineHeights.p;
  const gutter = gutterBottom ? themeConfig.spacing.gutterBottom[variant] || themeConfig.spacing.gutterBottom.default : "0";
  const isBoldVariant = variant === "strong" || ["h1", "h2", "h3", "h4", "h5", "h6"].includes(variant);
  const boldWeight = themeConfig.fontWeights?.bold || 700;
  const normalWeight = themeConfig.fontWeights?.normal || 400;
  const defaultWeight = isBoldVariant ? boldWeight : normalWeight;
  const weight = typeof fontWeight === "number" ? fontWeight : fontWeight && themeConfig.fontWeights?.[fontWeight] || defaultWeight;
  const textColor = color && colors[color] ? colors[color] : color;
  const textDecoration = underline || variant === "underline" ? "underline" : strikethrough || variant === "delete" ? "line-through" : "none";
  const ellipsisRows = typeof ellipsis === "object" ? ellipsis.rows : 1;
  const isEllipsis = !!ellipsis;
  return css`
      margin: 0;
      padding: 0;
      margin-bottom: ${gutter};
      color: ${textColor || colors.text};
      text-align: ${align || "inherit"};
      font-weight: ${weight};
      text-transform: ${transform || "none"};
      font-style: ${italic || variant === "em" ? "italic" : "normal"};
      text-decoration: ${textDecoration};
      
      /* 省略号样式 */
      ${isEllipsis && ellipsisRows === 1 && css`
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      `}
      
      ${isEllipsis && ellipsisRows && ellipsisRows > 1 && css`
        display: -webkit-box;
        -webkit-line-clamp: ${ellipsisRows};
        -webkit-box-orient: vertical;
        overflow: hidden;
      `}

      ${!isEllipsis && css`
        white-space: ${noWrap ? "nowrap" : "normal"};
        overflow: ${noWrap ? "hidden" : "visible"};
        text-overflow: ${noWrap ? "ellipsis" : "clip"};
      `}

      line-height: ${lineHeight};
      
      // 响应式字体大小
      font-size: ${size.xs};
      
      @media (min-width: 576px) {
        font-size: ${size.sm};
      }
      
      @media (min-width: 768px) {
        font-size: ${size.md};
      }
      
      // 特殊元素样式
      ${variant === "code" && css`
        font-family: 'SFMono-Regular', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        background-color: ${theme2 === "dark" ? "#2d2d2d" : "#f5f5f5"};
        padding: 0.2em 0.4em;
        border-radius: 4px;
      `}
      
      ${variant === "pre" && css`
        font-family: 'SFMono-Regular', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        background-color: ${theme2 === "dark" ? "#2d2d2d" : "#f5f5f5"};
        padding: 1em;
        border-radius: 4px;
        overflow-x: auto;
        display: block;
      `}
      
      ${variant === "blockquote" && css`
        border-left: 4px solid ${colors.primary};
        padding-left: 1em;
        margin-left: 0;
        color: ${colors.muted};
      `}
      
      ${(variant === "ul" || variant === "ol") && css`
        padding-left: 1.5em;
        margin-bottom: ${gutterBottom ? "1em" : "0"};
      `}
      
      ${variant === "li" && css`
        margin-bottom: 0.25em;
      `}
      
      ${variant === "mark" && css`
        background-color: #ffe58f;
        padding: 0.1em 0.2em;
        border-radius: 2px;
      `}

      ${variant === "a" && css`
        color: ${textColor || "#1890ff"};
        cursor: pointer;
        text-decoration: none;
        transition: color 0.3s;
        
        &:hover {
          color: #40a9ff;
          text-decoration: underline;
        }
      `}
    `;
}}
`;

// src/components/typography/typography.tsx
var CopyIcon = () => /* @__PURE__ */ jsx4("svg", { viewBox: "64 64 896 896", focusable: "false", "data-icon": "copy", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx4("path", { d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" }) });
var CheckIcon = () => /* @__PURE__ */ jsx4("svg", { viewBox: "64 64 896 896", focusable: "false", "data-icon": "check", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", style: { color: "#52c41a" }, children: /* @__PURE__ */ jsx4("path", { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" }) });
var InternalTypography = (0, import_react16.forwardRef)(({
  component,
  variant = "p",
  children,
  copyable,
  ...props
}, ref) => {
  const Component = component || getComponentMapping(variant);
  const [copied, setCopied] = (0, import_react16.useState)(false);
  const copyConfig = typeof copyable === "object" ? copyable : copyable ? {} : null;
  const handleCopy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const textToCopy = copyConfig?.text || (typeof children === "string" ? children : String(children));
    if (textToCopy) {
      navigator.clipboard.writeText(String(textToCopy)).then(() => {
        setCopied(true);
        copyConfig?.onCopy?.();
        setTimeout(() => {
          setCopied(false);
        }, 3e3);
      });
    }
  };
  return /* @__PURE__ */ jsxs2(StyledTypography, { as: Component, variant, ref, copyable, ...props, children: [
    children,
    copyConfig && /* @__PURE__ */ jsx4(
      "button",
      {
        onClick: handleCopy,
        style: {
          background: "transparent",
          border: "none",
          padding: 0,
          marginLeft: 8,
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          color: "#1890ff",
          fontSize: "inherit",
          verticalAlign: "middle",
          outline: "none"
        },
        "aria-label": "Copy",
        title: typeof copyConfig.tooltips === "object" ? copied ? copyConfig.tooltips[1] : copyConfig.tooltips[0] : void 0,
        children: copied ? /* @__PURE__ */ jsx4(CheckIcon, {}) : copyConfig.icon || /* @__PURE__ */ jsx4(CopyIcon, {})
      }
    )
  ] });
});
InternalTypography.displayName = "Typography";
var Title = (0, import_react16.forwardRef)(({ level = 1, ...props }, ref) => {
  return /* @__PURE__ */ jsx4(InternalTypography, { variant: `h${level}`, ref, ...props });
});
Title.displayName = "Typography.Title";
var Text = (0, import_react16.forwardRef)(({ variant = "span", ...props }, ref) => {
  return /* @__PURE__ */ jsx4(InternalTypography, { variant, ref, ...props });
});
Text.displayName = "Typography.Text";
var Paragraph = (0, import_react16.forwardRef)((props, ref) => {
  const { ellipsis, children, ...restProps } = props;
  const [expanded, setExpanded] = (0, import_react16.useState)(false);
  const ellipsisConfig = typeof ellipsis === "object" ? ellipsis : ellipsis ? {} : null;
  const handleExpand = (e) => {
    e.preventDefault();
    setExpanded(true);
    ellipsisConfig?.onExpand?.(e);
  };
  const passedEllipsis = expanded ? void 0 : ellipsis;
  return /* @__PURE__ */ jsxs2("div", { style: { position: "relative" }, children: [
    /* @__PURE__ */ jsx4(InternalTypography, { variant: "p", ref, ellipsis: passedEllipsis, ...restProps, children }),
    ellipsisConfig?.expandable && !expanded && /* @__PURE__ */ jsx4(
      "a",
      {
        onClick: handleExpand,
        style: {
          display: "inline-block",
          marginTop: 4,
          color: "#1890ff",
          cursor: "pointer",
          fontSize: "0.9em"
        },
        children: ellipsisConfig.symbol || "Expand"
      }
    ),
    ellipsisConfig?.suffix && /* @__PURE__ */ jsx4("span", { style: { marginLeft: 4 }, children: ellipsisConfig.suffix })
  ] });
});
Paragraph.displayName = "Typography.Paragraph";
var Link = (0, import_react16.forwardRef)((props, ref) => {
  return /* @__PURE__ */ jsx4(InternalTypography, { variant: "a", ref, ...props });
});
Link.displayName = "Typography.Link";
var Typography = InternalTypography;
Typography.Title = Title;
Typography.Text = Text;
Typography.Paragraph = Paragraph;
Typography.Link = Link;

// src/components/menu/menu.tsx
var import_react20 = require("react");

// src/components/menu/menu.styles.ts
var lightTheme2 = (theme2) => css`
  background-color: ${getColor(theme2, "gray")};
  color: ${getColor(theme2, "gray800")};
  
  .menu-item {
    padding: 10px 16px;
    transition: all 0.2s ease;
    &:hover {
      background-color: ${getColor(theme2, "gray100")};
    }
    
    &.active {
      background-color: ${getColor(theme2, "blue")};
      color: ${getColor(theme2, "blue500")};
      border-right: 3px solid ${getColor(theme2, "blue500")};
    }
  }
`;
var darkTheme2 = (theme2) => css`
  background-color: ${getColor(theme2, "gray800")};
  color: ${getColor(theme2, "gray200")};
  
  .menu-item {
    padding: 10px 16px;
    transition: all 0.2s ease;
    color: ${getColor(theme2, "gray400")};
    &:hover {
      color: ${getColor(theme2, "gray")};
      background-color: ${getColor(theme2, "gray800")};
    }
    
    &.active {
      background-color: ${getColor(theme2, "blue600")};
      color: ${getColor(theme2, "blue200")};
      border-radius: 8px;
    }
  }
`;
var MenuContainer = newStyled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: ${({ mode }) => mode === "vertical" ? "240px" : "100%"};
  height: ${({ mode }) => mode === "vertical" ? "100%" : "auto"};
  transition: width 0.3s ease;
  overflow: visible; /* Change from hidden to visible to allow dropdowns */
  user-select: none;
  
  ${({ theme: theme2, menuTheme }) => menuTheme === "dark" ? darkTheme2(theme2) : lightTheme2(theme2)}
`;
var MenuList = newStyled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: ${({ mode }) => mode === "horizontal" ? "flex" : "block"};
  flex-direction: ${({ mode }) => mode === "horizontal" ? "row" : "column"};
`;
var SubMenuList = newStyled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  /* 嵌套层级缩进 (Vertical only) */
  padding-left: ${({ level = 0, mode }) => mode === "vertical" ? `${level * 8}px` : "0"};

  /* Horizontal Mode Styles */
  ${({ mode, theme: theme2, menuTheme }) => mode === "horizontal" && css`
    min-width: 160px;
    background-color: ${menuTheme === "dark" ? getColor(theme2, "gray800") : "#fff"};
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    padding: 4px 0;
    
    /* Ensure text color is correct if not inherited */
    color: ${menuTheme === "dark" ? getColor(theme2, "gray200") : getColor(theme2, "gray800")};
  `}

  /* 防止动画闪烁 */
  backface-visibility: hidden;
  transform: translateZ(0);
  will-change: transform;
`;
var MenuItemContentStyled = newStyled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: ${({ disabled }) => disabled ? "not-allowed" : "pointer"};
  transition: all 0.2s ease;
  position: relative;
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  padding-left: ${({ level = 0, mode }) => mode === "horizontal" ? "16px" : `${level * 16}px`};
  
  &:hover {
    background-color: ${({ theme: theme2, menuTheme }) => menuTheme === "dark" ? getColor(theme2, "gray800") : getColor(theme2, "gray100")};
  }
  
  ${({ isActive, theme: theme2, menuTheme }) => isActive && `
    background-color: ${menuTheme === "dark" ? getColor(theme2, "blue600") : getColor(theme2, "blue")};
    color: ${menuTheme === "dark" ? getColor(theme2, "blue200") : getColor(theme2, "blue500")};
    font-weight: 500;
  `}
`;
var MenuItemWrapper = newStyled.li`
  position: relative;
  transition: all 0.2s ease;
  
  &:hover {
    .menu-item-arrow {
      transition: transform 0.3s ease;
      opacity: 1;
    }
  }
  &.menu-active {
    > .menu-item {
      color: ${({ theme: theme2, menuTheme }) => menuTheme === "dark" ? getColor(theme2, "gray") : getColor(theme2, "blue600")};
      font-weight: 500;
    }
  }

  .menu-item-content {
    display: flex;
    align-items: center;
    width: calc(100% - 8px);
  }
  
  .menu-item-icon {
    margin-right: 12px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
  }
  
  .menu-item-text {
    flex: auto;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
var SubMenuContainer = newStyled.div`
  height: ${({ isOpen, height }) => isOpen ? `${height}px` : "0"};
  overflow: hidden;
  transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: height;
`;
var SubMenuInner = newStyled.div`
  min-height: 0;
  overflow: hidden;
`;
var MenuDivider = newStyled.div`
  height: 1px;
  margin: 8px 16px;
  background-color: rgba(0, 0, 0, 0.1);
`;

// src/components/menu/menuRenderer.tsx
var import_react19 = require("react");

// src/components/menu/CollapseTransition.tsx
var import_react18 = require("react");
var CollapseTransition = ({
  isOpen,
  children,
  duration = 300
}) => {
  const contentRef = (0, import_react18.useRef)(null);
  const [height, setHeight] = (0, import_react18.useState)(isOpen ? "auto" : "0px");
  const [isInitial, setIsInitial] = (0, import_react18.useState)(true);
  const animationRef = (0, import_react18.useRef)(null);
  const prevIsOpen = (0, import_react18.useRef)(isOpen);
  const getContentHeight = (0, import_react18.useCallback)(() => {
    return contentRef.current?.scrollHeight || 0;
  }, []);
  const cancelAnimation = (0, import_react18.useCallback)(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, []);
  (0, import_react18.useEffect)(() => {
    return () => {
      cancelAnimation();
    };
  }, [cancelAnimation]);
  (0, import_react18.useEffect)(() => {
    if (isInitial) {
      setIsInitial(false);
      prevIsOpen.current = isOpen;
      return;
    }
    if (prevIsOpen.current === isOpen) return;
    prevIsOpen.current = isOpen;
    cancelAnimation();
    if (isOpen) {
      setHeight("0px");
      animationRef.current = requestAnimationFrame(() => {
        const startHeight = getContentHeight();
        setHeight(`${startHeight}px`);
        const timer = setTimeout(() => {
          setHeight("auto");
        }, duration);
        return () => clearTimeout(timer);
      });
    } else {
      const startHeight = getContentHeight();
      setHeight(`${startHeight}px`);
      animationRef.current = requestAnimationFrame(() => {
        setHeight("0px");
      });
    }
    return cancelAnimation;
  }, [isOpen, duration, getContentHeight, cancelAnimation, isInitial]);
  const transitionStyle = {
    overflow: "hidden",
    transition: `height ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    height,
    willChange: "height",
    // 防止动画闪烁
    backfaceVisibility: "hidden",
    transform: "translateZ(0)"
  };
  return /* @__PURE__ */ jsx4(
    "div",
    {
      ref: contentRef,
      style: transitionStyle,
      children
    }
  );
};

// src/components/menu/menuRenderer.tsx
var MAX_LEVEL = 3;
var MenuItem = ({ item, level, parentKey, fullKey }) => {
  const hasChildren = item.children && item.children.length > 0 && level < MAX_LEVEL - 1;
  const context = (0, import_react19.useContext)(MenuContext);
  const timerRef = (0, import_react19.useRef)(null);
  const hasActiveChild = context.activeKey.startsWith(`${fullKey}-`);
  const subMenuContent = (0, import_react19.useMemo)(() => {
    if (!hasChildren) return null;
    return /* @__PURE__ */ jsx4(SubMenuList, { level: level + 1, mode: context.mode, menuTheme: context.theme, children: item.children.map((child, childIndex) => {
      const childFullKey = `${fullKey}-${child.key}`;
      return /* @__PURE__ */ jsx4(
        MenuItem,
        {
          item: child,
          level: level + 1,
          parentKey: fullKey,
          fullKey: childFullKey,
          index: childIndex,
          itemsLength: item.children.length
        },
        childFullKey
      );
    }) });
  }, [item.children, level, fullKey, hasChildren, context.mode]);
  const handleMouseEnter = () => {
    if (context.mode !== "horizontal") return;
    if (timerRef.current) clearTimeout(timerRef.current);
    if (hasChildren) {
      context.setOpenKey?.(item.key, true, parentKey);
    }
  };
  const handleMouseLeave = () => {
    if (context.mode !== "horizontal") return;
    timerRef.current = setTimeout(() => {
      if (hasChildren) {
        context.setOpenKey?.(item.key, false, parentKey);
      }
    }, 100);
  };
  return /* @__PURE__ */ jsxs2(
    MenuItemWrapper,
    {
      level,
      hasChildren,
      "data-testid": `menu-item-${fullKey}`,
      className: `${hasActiveChild ? "menu-active" : ""} ${item.className || ""}`,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      menuTheme: context.theme,
      mode: context.mode,
      children: [
        /* @__PURE__ */ jsx4(
          MenuItemContent,
          {
            item,
            level,
            hasChildren: hasChildren ?? false,
            fullKey,
            parentKey
          }
        ),
        hasChildren && (context.mode === "horizontal" ? (
          // 水平模式下不使用 CollapseTransition，而是直接显示/隐藏（配合CSS控制显隐和动画）
          /* @__PURE__ */ jsx4(
            "div",
            {
              style: {
                display: item.isOpen ? "block" : "none",
                position: "absolute",
                top: level === 0 ? "100%" : "0",
                left: level === 0 ? "0" : "100%",
                zIndex: 1050
              },
              children: subMenuContent
            }
          )
        ) : /* @__PURE__ */ jsx4(
          CollapseTransition,
          {
            isOpen: item.isOpen ?? false,
            duration: 250,
            children: subMenuContent
          }
        ))
      ]
    }
  );
};
var renderMenuItems = (items, level, parentKey) => {
  return items.map((item, index) => {
    const fullKey = parentKey ? `${parentKey}-${item.key}` : item.key;
    return /* @__PURE__ */ jsx4(
      MenuItem,
      {
        item,
        level,
        parentKey,
        fullKey,
        index,
        itemsLength: items.length
      },
      fullKey
    );
  });
};
var MenuItemContent = ({ item, level, hasChildren, fullKey, parentKey }) => {
  const { key, label, icon, disabled, isOpen } = item;
  const context = (0, import_react19.useContext)(MenuContext);
  const isActive = context.activeKey === fullKey;
  const handleClick = (e) => {
    e.stopPropagation();
    if (disabled) return;
    if (hasChildren) {
      if (context.mode !== "horizontal") {
        context.toggleOpenKey(key, level, parentKey);
      }
    } else {
      context.setActiveKey(fullKey);
    }
  };
  const arrowStyle = (0, import_react19.useMemo)(() => ({
    transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
    transform: isOpen ? context.mode === "horizontal" && level === 0 ? "rotate(180deg)" : "rotate(90deg)" : "none",
    willChange: "transform",
    backfaceVisibility: "hidden",
    transformStyle: "preserve-3d"
  }), [isOpen, context.mode, level]);
  const horizontalArrow = /* @__PURE__ */ jsx4(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx4(
        "path",
        {
          d: "M6 9L12 15L18 9",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
  const verticalArrow = /* @__PURE__ */ jsx4(
    "svg",
    {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx4(
        "path",
        {
          d: "M9 18L15 12L9 6",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
  return /* @__PURE__ */ jsx4(
    MenuItemContentStyled,
    {
      className: `menu-item ${isActive ? "active" : ""}`,
      onClick: handleClick,
      disabled,
      level,
      isActive,
      menuTheme: context.theme,
      mode: context.mode,
      style: { backfaceVisibility: "hidden", transform: "translateZ(0)" },
      children: /* @__PURE__ */ jsxs2("div", { className: "menu-item-content", children: [
        icon && /* @__PURE__ */ jsx4("div", { className: "menu-item-icon", children: icon }),
        /* @__PURE__ */ jsx4("div", { className: "menu-item-text", style: { flex: 1 }, children: label }),
        hasChildren && /* @__PURE__ */ jsx4("div", { className: "menu-item-arrow", style: arrowStyle, children: context.mode === "horizontal" && level === 0 ? horizontalArrow : verticalArrow })
      ] })
    }
  );
};

// src/components/menu/menu.tsx
var MenuContext = (0, import_react20.createContext)({
  mode: "vertical",
  accordion: false,
  theme: "light",
  activeKey: "",
  openKeys: [],
  setActiveKey: () => {
  },
  toggleOpenKey: () => {
  },
  setOpenKey: () => {
  }
});
var Menu = ({
  mode = "vertical",
  theme: theme2 = "light",
  accordion = false,
  defaultActiveKey = "",
  defaultOpenKeys = [],
  onSelect,
  items,
  style,
  className
}) => {
  const [activeKey, setActiveKey] = (0, import_react20.useState)(defaultActiveKey);
  const [openKeys, setOpenKeys] = (0, import_react20.useState)(defaultOpenKeys);
  const [menuItems, setMenuItems] = (0, import_react20.useState)([]);
  (0, import_react20.useEffect)(() => {
    const initializeMenuState = (items2, openKeys2) => {
      return items2.map((item) => {
        const isOpen = openKeys2.includes(item.key);
        return {
          ...item,
          isOpen,
          children: item.children ? initializeMenuState(item.children, openKeys2) : void 0
        };
      });
    };
    setMenuItems(initializeMenuState(items, defaultOpenKeys));
  }, []);
  const toggleOpenKey = (0, import_react20.useCallback)((key, _level, parentKey) => {
    setOpenKeys((prev2) => {
      const fullKey = parentKey ? `${parentKey}-${key}` : key;
      const isClosing = prev2.includes(fullKey);
      if (isClosing) {
        return prev2.filter((k) => k !== fullKey && !k.startsWith(`${fullKey}-`));
      }
      if (accordion) {
        const nextOpenKeys = prev2.filter((k) => {
          if (fullKey.startsWith(k) && (fullKey === k || fullKey[k.length] === "-")) {
            return true;
          }
          if (parentKey) {
            if (k.startsWith(`${parentKey}-`)) {
              return false;
            }
          } else {
            return false;
          }
          return true;
        });
        return [...nextOpenKeys, fullKey];
      }
      return [...prev2, fullKey];
    });
  }, [accordion]);
  const setOpenKey = (0, import_react20.useCallback)((key, isOpen, parentKey) => {
    const fullKey = parentKey ? `${parentKey}-${key}` : key;
    setOpenKeys((prev2) => {
      if (isOpen) {
        return prev2.includes(fullKey) ? prev2 : [...prev2, fullKey];
      } else {
        return prev2.filter((k) => k !== fullKey);
      }
    });
  }, []);
  (0, import_react20.useEffect)(() => {
    const updateMenuState = (items2, openKeys2) => {
      return items2.map((item) => {
        const fullKey = item.parentKey ? `${item.parentKey}-${item.key}` : item.key;
        const isOpen = openKeys2.includes(fullKey);
        return {
          ...item,
          isOpen,
          children: item.children ? updateMenuState(
            item.children.map((child) => ({
              ...child,
              parentKey: fullKey
            })),
            openKeys2
          ) : void 0
        };
      });
    };
    setMenuItems((prev2) => updateMenuState(prev2, openKeys));
  }, [openKeys]);
  const contextValue = {
    mode,
    theme: theme2,
    accordion,
    activeKey,
    openKeys,
    setActiveKey: (key) => {
      setActiveKey(key);
      onSelect?.(key);
    },
    toggleOpenKey,
    setOpenKey
  };
  return /* @__PURE__ */ jsx4(MenuContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx4(
    MenuContainer,
    {
      mode,
      menuTheme: theme2,
      style,
      className: `admin-menu ${className}`,
      children: /* @__PURE__ */ jsx4(MenuList, { mode, children: renderMenuItems(menuItems, 0) })
    }
  ) });
};

// src/components/pagination/pagination.tsx
var import_react28 = require("react");

// src/components/pagination/pagination.styles.ts
var lightTheme3 = (theme2, variant = "default") => css`
  .pagination-item {
    background-color: ${variant === "outline" ? "transparent" : getColor(theme2, "gray")};
    color: ${getColor(theme2, "gray800")};
    border: 1px solid ${variant === "outline" ? "transparent" : getColor(theme2, "gray200")};
    
    &:hover:not(.disabled, .active) {
      background-color: ${variant === "outline" ? "transparent" : getColor(theme2, "gray100")};
      ${variant === "outline" && css`
        color: ${getColor(theme2, "blue")};
      `}
    }
    
    &.active {
      background-color: ${variant === "outline" ? "transparent" : getColor(theme2, "blue")};
      color: ${variant === "outline" ? getColor(theme2, "blue") : getColor(theme2, "gray900")};
      border-color: ${getColor(theme2, "blue500")};
    }
    
    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;
var darkTheme3 = (theme2, variant = "default") => css`
  .pagination-item {
    background-color: ${variant === "outline" ? "transparent" : getColor(theme2, "gray800")};
    color: ${getColor(theme2, "gray200")};
    border: 1px solid ${variant === "outline" ? "transparent" : getColor(theme2, "gray700")};
    
    &:hover:not(.disabled, .active) {
      background-color: ${variant === "outline" ? "transparent" : getColor(theme2, "gray700")};
      ${variant === "outline" && css`
        color: ${getColor(theme2, "blue400")};
      `}
    }
    
    &.active {
      background-color: ${variant === "outline" ? "transparent" : getColor(theme2, "blue600")};
      color: ${variant === "outline" ? getColor(theme2, "blue400") : "white"};
      border-color: ${getColor(theme2, "blue500")};
    }
    
    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;
var PaginationContainer = newStyled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center"};
  gap: 8px;
  font-size: 14px;
  padding: 12px 0;
  user-select: none;
  
  ${({ theme: theme2, paginationTheme, variant }) => paginationTheme === "dark" ? darkTheme3(theme2, variant) : lightTheme3(theme2, variant)}
`;
var PaginationItem = newStyled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(.disabled, .active) {
    transform: translateY(-2px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
`;
var PaginationDots = newStyled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  border-radius: 6px;
  color: #999;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    color: #666;
    background-color: rgba(0, 0, 0, 0.06);
    transform: translateY(-2px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }
`;
var PaginationSelect = newStyled.select`
  padding: 6px 32px 6px 12px;
  border-radius: 6px;
  border: 1px solid #ddd;
  background-color: white;
  cursor: pointer;
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23666666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #aaa;
  }
  
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;
var PaginationInput = newStyled.input`
  width: 64px;
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid #ddd;
  text-align: center;
  outline: none;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #aaa;
  }
  
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;
var PaginationText = newStyled.span`
  margin: 0 8px;
  color: #666;
  font-size: 14px;
`;

// src/components/pagination/pagination.context.tsx
var import_react22 = require("react");
var PaginationContext = (0, import_react22.createContext)(null);

// src/components/pagination/paginationRenderer.tsx
var import_react27 = require("react");

// src/components/icons/close.tsx
var CloseIcon = ({ size = 16, color = "currentColor" }) => {
  return /* @__PURE__ */ jsx4(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx4(
        "path",
        {
          d: "M18 6L6 18M6 6L18 18",
          stroke: color,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
};

// src/components/icons/down.tsx
var DownArrowIcon = ({ size = 16, color = "currentColor" }) => {
  return /* @__PURE__ */ jsx4("svg", { width: size, height: size, viewBox: "64 64 896 896", "data-icon": "down", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx4(
    "path",
    {
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
    }
  ) });
};

// src/components/icons/success.tsx
var SuccessIcon = (props) => /* @__PURE__ */ jsx4("svg", { viewBox: "0 0 24 24", width: "1em", height: "1em", fill: "currentColor", ...props, children: /* @__PURE__ */ jsx4("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" }) });

// src/components/icons/info.tsx
var InfoIcon = (props) => /* @__PURE__ */ jsx4("svg", { viewBox: "0 0 24 24", width: "1em", height: "1em", fill: "currentColor", ...props, children: /* @__PURE__ */ jsx4("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" }) });

// src/components/icons/warning.tsx
var WarningIcon = (props) => /* @__PURE__ */ jsx4("svg", { viewBox: "0 0 24 24", width: "1em", height: "1em", fill: "currentColor", ...props, children: /* @__PURE__ */ jsx4("path", { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" }) });

// src/components/icons/error.tsx
var ErrorIcon = (props) => /* @__PURE__ */ jsx4("svg", { viewBox: "0 0 24 24", width: "1em", height: "1em", fill: "currentColor", ...props, children: /* @__PURE__ */ jsx4("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" }) });

// src/components/icons/collapse.tsx
var CollapseIcon = ({ size = 16, color = "currentColor" }) => /* @__PURE__ */ jsx4(
  "svg",
  {
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx4(
      "path",
      {
        d: "M6 12L10 8L6 4",
        stroke: color,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);

// src/components/icons/expand.tsx
var ExpandIcon = ({ size = 16, color = "currentColor" }) => /* @__PURE__ */ jsx4(
  "svg",
  {
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx4("path", { d: "M6 12L10 8L6 4", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
  }
);

// src/components/icons/folderClose.tsx
var FolderCloseIcon = ({ size = 16, color = "currentColor" }) => /* @__PURE__ */ jsx4(
  "svg",
  {
    width: size,
    height: size,
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx4("path", { stroke: color, fill: "currentColor", d: "M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32z" })
  }
);

// src/components/icons/folderOpen.tsx
var FolderOpenIcon = ({ size = 16, color = "currentColor" }) => /* @__PURE__ */ jsx4(
  "svg",
  {
    width: size,
    height: size,
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx4("path", { stroke: color, fill: "currentColor", d: "M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z" })
  }
);

// src/components/icons/left.tsx
var import_react23 = require("react");
var LeftIcon = (props) => /* @__PURE__ */ jsx4("svg", { viewBox: "0 0 24 24", width: "1em", height: "1em", fill: "currentColor", ...props, children: /* @__PURE__ */ jsx4("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }) });

// src/components/icons/right.tsx
var import_react24 = require("react");
var RightIcon = (props) => /* @__PURE__ */ jsx4("svg", { viewBox: "0 0 24 24", width: "1em", height: "1em", fill: "currentColor", ...props, children: /* @__PURE__ */ jsx4("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }) });

// src/components/icons/doubleLeft.tsx
var import_react25 = require("react");
var DoubleLeftIcon = (props) => /* @__PURE__ */ jsx4("svg", { viewBox: "0 0 24 24", width: "1em", height: "1em", fill: "currentColor", ...props, children: /* @__PURE__ */ jsx4("path", { d: "M11 7L7 12l4 5M18 7l-4 5 4 5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }) });

// src/components/icons/doubleRight.tsx
var import_react26 = require("react");
var DoubleRightIcon = (props) => /* @__PURE__ */ jsx4("svg", { viewBox: "0 0 24 24", width: "1em", height: "1em", fill: "currentColor", ...props, children: /* @__PURE__ */ jsx4("path", { d: "M13 7l4 5-4 5M6 7l4 5-4 5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }) });

// src/components/pagination/paginationRenderer.tsx
var PaginationItems = () => {
  const context = (0, import_react27.useContext)(PaginationContext);
  const [jumpPage, setJumpPage] = (0, import_react27.useState)("");
  const [dotsHover, setDotsHover] = (0, import_react27.useState)(null);
  if (!context) {
    throw new Error("PaginationItems must be used within a PaginationProvider");
  }
  const { current, total, pageSize, onChange, onPageSizeChange, showQuickJumper, quickJumperType, showSizeChanger, pageSizeOptions, showTotal } = context;
  const totalPages = Math.ceil(total / pageSize);
  if (totalPages <= 1) return null;
  const items = [];
  items.push({
    type: "prev",
    page: current > 1 ? current - 1 : 1,
    disabled: current === 1
  });
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      items.push({ type: "page", page: i });
    }
  } else {
    const firstPage = 1;
    const lastPage = totalPages;
    items.push({ type: "page", page: firstPage });
    if (current > 3) {
      items.push({ type: "jump-prev" });
    }
    const start = Math.max(2, current - 1);
    const end = Math.min(totalPages - 1, current + 1);
    for (let i = start; i <= end; i++) {
      items.push({ type: "page", page: i });
    }
    if (current < totalPages - 2) {
      items.push({ type: "jump-next" });
    }
    items.push({ type: "page", page: lastPage });
  }
  items.push({
    type: "next",
    page: current < totalPages ? current + 1 : totalPages,
    disabled: current === totalPages
  });
  const handlePageJump = () => {
    const pageNum = parseInt(jumpPage, 10);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
      onChange(pageNum);
    }
    setJumpPage("");
  };
  return /* @__PURE__ */ jsxs2(Fragment5, { children: [
    items.map((item) => {
      switch (item.type) {
        case "prev":
          return /* @__PURE__ */ jsx4(
            PaginationItem,
            {
              className: `pagination-item ${item.disabled ? "disabled" : ""}`,
              onClick: () => !item.disabled && onChange(item.page),
              children: /* @__PURE__ */ jsx4(LeftIcon, { style: { width: 16, height: 16 } })
            },
            "prev"
          );
        case "next":
          return /* @__PURE__ */ jsx4(
            PaginationItem,
            {
              className: `pagination-item ${item.disabled ? "disabled" : ""}`,
              onClick: () => !item.disabled && onChange(item.page),
              children: /* @__PURE__ */ jsx4(RightIcon, { style: { width: 16, height: 16 } })
            },
            "next"
          );
        case "jump-prev":
          return /* @__PURE__ */ jsx4(
            PaginationDots,
            {
              onClick: () => onChange(Math.max(1, current - 5)),
              onMouseEnter: () => setDotsHover("prev"),
              onMouseLeave: () => setDotsHover(null),
              children: dotsHover === "prev" ? /* @__PURE__ */ jsx4(DoubleLeftIcon, { style: { width: 14, height: 14 } }) : "..."
            },
            "jump-prev"
          );
        case "jump-next":
          return /* @__PURE__ */ jsx4(
            PaginationDots,
            {
              onClick: () => onChange(Math.min(totalPages, current + 5)),
              onMouseEnter: () => setDotsHover("next"),
              onMouseLeave: () => setDotsHover(null),
              children: dotsHover === "next" ? /* @__PURE__ */ jsx4(DoubleRightIcon, { style: { width: 14, height: 14 } }) : "..."
            },
            "jump-next"
          );
        case "page":
          return /* @__PURE__ */ jsx4(
            PaginationItem,
            {
              className: `pagination-item ${item.page === current ? "active" : ""}`,
              onClick: () => item.page !== current && onChange(item.page),
              children: item.page
            },
            `page-${item.page}`
          );
        default:
          return null;
      }
    }),
    showSizeChanger && onPageSizeChange && /* @__PURE__ */ jsxs2(Fragment5, { children: [
      /* @__PURE__ */ jsx4(PaginationText, { children: "\u6BCF\u9875:" }),
      /* @__PURE__ */ jsx4(
        PaginationSelect,
        {
          value: pageSize,
          onChange: (e) => onPageSizeChange(parseInt(e.target.value, 10)),
          children: pageSizeOptions?.map((size) => /* @__PURE__ */ jsx4("option", { value: size, children: size }, size))
        }
      )
    ] }),
    showTotal && /* @__PURE__ */ jsx4(PaginationText, { children: typeof showTotal === "function" ? showTotal(total, [(current - 1) * pageSize + 1, Math.min(current * pageSize, total)]) : `${(current - 1) * pageSize + 1}-${Math.min(current * pageSize, total)} \u5171 ${total} \u6761` }),
    showQuickJumper && /* @__PURE__ */ jsxs2(Fragment5, { children: [
      /* @__PURE__ */ jsx4(
        PaginationInput,
        {
          type: "number",
          min: "1",
          max: totalPages,
          value: jumpPage,
          onChange: (e) => setJumpPage(e.target.value),
          onKeyDown: (e) => e.key === "Enter" && handlePageJump(),
          placeholder: "\u9875\u7801"
        }
      ),
      quickJumperType === "default" && /* @__PURE__ */ jsx4(
        PaginationItem,
        {
          className: "pagination-item",
          onClick: handlePageJump,
          style: { padding: "0 12px", width: "auto" },
          children: "\u8DF3\u8F6C"
        }
      )
    ] })
  ] });
};

// src/components/pagination/pagination.tsx
var Pagination = ({
  current,
  total,
  pageSize = 10,
  theme: theme2 = "light",
  onChange,
  onPageSizeChange,
  className,
  style,
  showQuickJumper = false,
  quickJumperType = "default",
  showSizeChanger = false,
  pageSizeOptions = [10, 20, 50, 100],
  showTotal = true,
  align = "center",
  variant = "default"
}) => {
  const totalPages = Math.ceil(total / pageSize);
  const safeCurrent = Math.max(1, Math.min(current, totalPages));
  const contextValue = {
    current: safeCurrent,
    total,
    pageSize,
    theme: theme2,
    onChange,
    onPageSizeChange,
    showQuickJumper,
    quickJumperType,
    showSizeChanger,
    pageSizeOptions,
    showTotal,
    variant
  };
  return /* @__PURE__ */ jsx4(PaginationContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx4(
    PaginationContainer,
    {
      paginationTheme: theme2,
      align,
      className: `admin-pagination ${className}`,
      style,
      variant,
      children: /* @__PURE__ */ jsx4(PaginationItems, {})
    }
  ) });
};

// src/components/select/select.tsx
var import_react32 = require("react");

// src/components/select/select.styles.ts
var getSelectBackground = (color = "default") => {
  if (!color || color === "default") return null;
  const preset = {
    primary: "#e6f4ff",
    secondary: "#f5f5f5",
    success: "#f6ffed",
    warning: "#fffbe6",
    danger: "#fff2f0"
  };
  return preset[color] ?? color;
};
var getVariantStyles = (theme2, variant = "outlined", selectTheme = "light") => {
  const isDark = selectTheme === "dark";
  const borderColor2 = isDark ? getColor(theme2, "gray700") : getColor(theme2, "gray200");
  const bg = isDark ? getColor(theme2, "gray800") : getColor(theme2, "gray");
  const color = isDark ? getColor(theme2, "gray200") : getColor(theme2, "gray800");
  const hoverBorderColor = isDark ? getColor(theme2, "gray600") : getColor(theme2, "gray400");
  const focusBorderColor = getColor(theme2, "blue500");
  switch (variant) {
    case "filled":
      return css`
        background-color: ${isDark ? getColor(theme2, "gray700") : getColor(theme2, "gray100")};
        border: 1px solid transparent;
        color: ${color};
        &:hover {
          background-color: ${isDark ? getColor(theme2, "gray600") : getColor(theme2, "gray200")};
        }
        &:focus-within {
          background-color: ${bg};
          border-color: ${focusBorderColor};
        }
      `;
    case "borderless":
      return css`
        background-color: transparent;
        border: 1px solid transparent;
        color: ${color};
        &:focus-within {
          box-shadow: none;
        }
      `;
    case "underlined":
      return css`
        background-color: transparent;
        border: none;
        border-bottom: 1px solid ${borderColor2};
        border-radius: 0;
        color: ${color};
        &:hover {
          border-bottom-color: ${hoverBorderColor};
        }
        &:focus-within {
          border-bottom-color: ${focusBorderColor};
          box-shadow: none;
        }
      `;
    case "outlined":
    default:
      return css`
        background-color: ${bg};
        border: 1px solid ${borderColor2};
        color: ${color};
        &:hover {
          border-color: ${hoverBorderColor};
        }
        &:focus-within {
          border-color: ${focusBorderColor};
          box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
        }
      `;
  }
};
var SelectContainer = newStyled.div`
  position: relative;
  min-width: 120px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
  
  ${({ theme: theme2, selectTheme, variant }) => getVariantStyles(theme2, variant, selectTheme)}
  
  ${({ selectColor }) => {
  const bg = getSelectBackground(selectColor);
  return bg ? css` background-color: ${bg}; ` : null;
}}
  
  ${({ isOpen, variant }) => isOpen && variant === "outlined" && css`
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  `}
  
  ${({ disabled, theme: theme2 }) => disabled && css`
    cursor: not-allowed;
    opacity: 1;
    background-color: ${getColor(theme2, "gray100")};
    border-color: ${getColor(theme2, "gray200")};
    color: ${getColor(theme2, "gray400")};
    pointer-events: none;
    
    &:hover {
      border-color: ${getColor(theme2, "gray200")};
    }
  `}
`;
var SelectControl = newStyled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
`;
var SelectPlaceholder = newStyled.span`
  color: #999;
`;
var SelectValueContainer = newStyled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;
var SelectSingleValue = newStyled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
var SelectMultiValue = newStyled.div`
  background-color: rgba(0, 123, 255, 0.1);
  border-radius: 4px;
  padding: 2px 6px;
  display: flex;
  align-items: center;
  gap: 4px;
`;
var SelectClearButton = newStyled.span`
  cursor: pointer;
  padding: 0 4px;
  font-size: 12px;
  color: #999;
  
  &:hover {
    color: #333;
  }
`;
var SelectArrow = newStyled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => isOpen ? "rotate(180deg)" : "rotate(0deg)"};
  
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`;
var SelectDropdown = newStyled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 200px;
  overflow-y: auto;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 4px;
  
  ${({ selectTheme, theme: theme2 }) => selectTheme === "dark" && css`
    background-color: ${getColor(theme2, "gray800")};
    color: ${getColor(theme2, "gray200")};
    border-color: ${getColor(theme2, "gray700")};
  `}
`;
var OptionList = newStyled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
var OptionItem = newStyled.li`
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${({ isSelected, theme: theme2, selectTheme }) => isSelected && css`
    background-color: ${selectTheme === "dark" ? getColor(theme2, "blue600") : getColor(theme2, "blue")};
    color: ${getColor(theme2, "gray900")};;
  `}
  
  ${({ isSelected, isFocused, theme: theme2, selectTheme }) => !isSelected && isFocused && css`
    background-color: ${selectTheme === "dark" ? getColor(theme2, "gray700") : getColor(theme2, "gray100")};
  `}
  
  ${({ disabled }) => disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}
  
  &:hover:not(.disabled) {
    background-color: ${({ theme: theme2, selectTheme }) => selectTheme === "dark" ? getColor(theme2, "gray700") : getColor(theme2, "gray100")};
  }
`;
var SearchInput = newStyled.input`
  width: 100%;
  padding: 8px 12px;
  border: none;
  border-bottom: 1px solid #ddd;
  outline: none;
  background-color: transparent;
  
  ${({ theme: theme2, selectTheme }) => selectTheme === "dark" && css`
    color: ${getColor(theme2, "gray200")};
    border-color: ${getColor(theme2, "gray700")};
    
    &::placeholder {
      color: ${getColor(theme2, "gray500")};
    }
  `}
`;
var NoOptions = newStyled.div`
  padding: 8px 12px;
  text-align: center;
  color: #999;
`;

// src/components/select/select.context.tsx
var import_react30 = require("react");
var SelectContext = (0, import_react30.createContext)(null);

// src/components/select/option.tsx
var import_react31 = require("react");
var Option = ({ option, index, isFocused }) => {
  const context = (0, import_react31.useContext)(SelectContext);
  if (!context) {
    throw new Error("Option must be used within a Select");
  }
  const { value, label, disabled = false } = option;
  const { selectedValue, multiple, onSelect, closeDropdown } = context;
  const isSelected = multiple ? Array.isArray(selectedValue) && selectedValue.includes(value) : selectedValue === value;
  const handleClick = (e) => {
    e.stopPropagation();
    if (!disabled) {
      console.log("Selecting option:", value);
      onSelect(value);
      if (!multiple) {
        console.log("Closing dropdown for single select");
        closeDropdown();
      }
    }
  };
  return /* @__PURE__ */ jsx4(
    OptionItem,
    {
      isSelected,
      isFocused,
      disabled,
      onClick: handleClick,
      children: label
    },
    `option-${index}`
  );
};

// src/components/select/select.tsx
var Select = (props) => {
  const {
    value,
    defaultValue,
    onChange,
    options = [],
    placeholder = "\u8BF7\u9009\u62E9",
    theme: theme2 = "light",
    multiple = false,
    disabled = false,
    searchable = false,
    allowClear = true,
    color = "default",
    className,
    popupClassName,
    style,
    variant = "outlined"
  } = props;
  const [isOpen, setIsOpen] = (0, import_react32.useState)(false);
  const [searchTerm, setSearchTerm] = (0, import_react32.useState)("");
  const [focusedIndex, setFocusedIndex] = (0, import_react32.useState)(0);
  const containerRef = (0, import_react32.useRef)(null);
  const initialValue = (0, import_react32.useMemo)(() => {
    if (value !== void 0) return value;
    if (defaultValue !== void 0) return defaultValue;
    return multiple ? [] : null;
  }, [value, defaultValue, multiple]);
  const [selectedValue, setSelectedValue] = (0, import_react32.useState)(initialValue);
  (0, import_react32.useEffect)(() => {
    if (value !== void 0) {
      setSelectedValue(value);
    }
  }, [value]);
  const filteredOptions = (0, import_react32.useMemo)(() => {
    if (!searchTerm || !searchable) return options;
    return options.filter(
      (option) => String(option.label).toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [options, searchTerm, searchable]);
  const displayValue = (0, import_react32.useMemo)(() => {
    if (multiple) {
      const values = selectedValue;
      return values.map((val) => {
        const option = options.find((opt) => opt.value === val);
        return option || { value: val, label: val };
      });
    } else {
      const val = selectedValue;
      const option = val !== null ? options.find((opt) => opt.value === val) : null;
      return option || null;
    }
  }, [selectedValue, options, multiple]);
  const toggleDropdown = () => {
    if (disabled) return;
    setIsOpen((prev2) => !prev2);
  };
  const closeDropdown = (0, import_react32.useCallback)(() => {
    console.log("closeDropdown");
    setIsOpen((prevIsOpen) => {
      if (prevIsOpen) {
        console.log("Actually closing dropdown");
        setSearchTerm("");
        setFocusedIndex(0);
        return false;
      }
      return prevIsOpen;
    });
  }, []);
  const handleSelect = (0, import_react32.useCallback)((val) => {
    let newValue;
    if (multiple) {
      const currentValues = Array.isArray(selectedValue) ? selectedValue : [];
      if (currentValues.includes(val)) {
        newValue = currentValues.filter((v) => v !== val);
      } else {
        newValue = [...currentValues, val];
      }
    } else {
      newValue = val;
    }
    setSelectedValue(newValue);
    if (onChange) {
      if (multiple) {
        onChange(newValue);
      } else {
        onChange(newValue);
      }
    }
  }, [multiple, selectedValue, onChange]);
  const handleClear = (e) => {
    e.stopPropagation();
    const newValue = multiple ? [] : null;
    setSelectedValue(newValue);
    if (onChange) {
      if (multiple) {
        onChange([]);
      } else {
        onChange(null);
      }
    }
  };
  (0, import_react32.useEffect)(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        closeDropdown();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeDropdown]);
  const handleKeyDown = (e) => {
    if (!isOpen) {
      if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
        toggleDropdown();
      }
      return;
    }
    switch (e.key) {
      case "Escape":
        closeDropdown();
        break;
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((prev2) => (prev2 + 1) % filteredOptions.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prev2) => (prev2 - 1 + filteredOptions.length) % filteredOptions.length);
        break;
      case "Enter":
      case " ":
      case "Spacebar":
        e.preventDefault();
        const option = filteredOptions[focusedIndex];
        if (option && !option.disabled) {
          handleSelect(option.value);
          if (!multiple) {
            closeDropdown();
          }
        }
        break;
      default:
        break;
    }
  };
  const contextValue = {
    theme: theme2,
    selectedValue,
    multiple,
    onSelect: handleSelect,
    searchTerm,
    isOpen,
    closeDropdown
  };
  const hasValue = multiple ? Array.isArray(selectedValue) && selectedValue.length > 0 : selectedValue !== null;
  return /* @__PURE__ */ jsx4(SelectContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxs2(
    SelectContainer,
    {
      ref: containerRef,
      selectTheme: theme2,
      variant,
      selectColor: color,
      isOpen,
      disabled,
      className: `solid-select ${className || ""}`,
      style,
      onClick: toggleDropdown,
      onKeyDown: handleKeyDown,
      tabIndex: disabled ? -1 : 0,
      children: [
        /* @__PURE__ */ jsxs2(SelectControl, { children: [
          /* @__PURE__ */ jsx4(SelectValueContainer, { children: multiple ? Array.isArray(displayValue) && displayValue.length > 0 ? displayValue.map((item) => /* @__PURE__ */ jsxs2(SelectMultiValue, { children: [
            /* @__PURE__ */ jsx4("span", { children: item.label }),
            allowClear && /* @__PURE__ */ jsx4(SelectClearButton, { onClick: (e) => {
              e.stopPropagation();
              handleSelect(item.value);
            }, children: /* @__PURE__ */ jsx4(CloseIcon, { size: 16 }) })
          ] }, item.value)) : /* @__PURE__ */ jsx4(SelectPlaceholder, { children: placeholder }) : displayValue ? /* @__PURE__ */ jsx4(SelectSingleValue, { children: !Array.isArray(displayValue) && displayValue?.label || "" }) : /* @__PURE__ */ jsx4(SelectPlaceholder, { children: placeholder }) }),
          hasValue && !disabled && allowClear && /* @__PURE__ */ jsx4(SelectClearButton, { onClick: handleClear, children: /* @__PURE__ */ jsx4(CloseIcon, { size: 16 }) }),
          /* @__PURE__ */ jsx4(SelectArrow, { isOpen, children: /* @__PURE__ */ jsx4(DownArrowIcon, { size: 16 }) })
        ] }),
        isOpen && !disabled && /* @__PURE__ */ jsxs2(SelectDropdown, { selectTheme: theme2, className: popupClassName, style: { display: isOpen ? "block" : "none" }, children: [
          searchable && /* @__PURE__ */ jsx4(
            SearchInput,
            {
              type: "text",
              placeholder: "\u641C\u7D22...",
              value: searchTerm,
              onClick: (e) => e.stopPropagation(),
              onChange: (e) => setSearchTerm(e.target.value),
              selectTheme: theme2
            }
          ),
          /* @__PURE__ */ jsx4(OptionList, { children: filteredOptions.length > 0 ? filteredOptions.map((option, index) => /* @__PURE__ */ jsx4(
            Option,
            {
              option,
              index,
              isFocused: focusedIndex === index
            },
            `option-${index}`
          )) : /* @__PURE__ */ jsx4(NoOptions, { children: "\u65E0\u5339\u914D\u9009\u9879" }) })
        ] })
      ]
    }
  ) });
};

// src/components/input/input.tsx
var import_react34 = require("react");

// src/components/input/input.styles.ts
var sizeMap = {
  small: { height: "24px", fontSize: "12px", padding: "0 7px" },
  middle: { height: "32px", fontSize: "14px", padding: "0 11px" },
  large: { height: "40px", fontSize: "16px", padding: "0 11px" }
};
var statusColors = {
  error: "#ff4d4f",
  warning: "#faad14",
  success: "#52c41a"
};
var radiusMap = {
  full: "9999px",
  lg: "12px",
  md: "6px",
  sm: "4px",
  none: "0"
};
var backgroundColorMap = {
  default: "#ffffff",
  primary: "#cce3fd",
  secondary: "#e4d4f4",
  success: "#d1f4e0",
  warning: "#fdedd3",
  danger: "#fdd0df"
};
var InputContainer = newStyled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  border-radius: ${({ radius = "md" }) => radiusMap[radius]};
  transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
  background-color: #fff;
  border: 1px solid #d9d9d9;

  // 尺寸处理
  ${({ size = "middle" }) => css`
    height: ${(sizeMap["" + size in sizeMap ? size : "middle"] || sizeMap.middle).height};
    font-size: ${(sizeMap["" + size in sizeMap ? size : "middle"] || sizeMap.middle).fontSize};
    padding: ${(sizeMap["" + size in sizeMap ? size : "middle"] || sizeMap.middle).padding};
  `}

  // 变体处理
  ${({ variant = "outlined" }) => {
  if (variant === "borderless") {
    return css`
        border-color: transparent;
        background-color: transparent;
        padding: 0; // borderless 可能不需要 padding，或者视情况而定
        &:focus-within {
          box-shadow: none;
        }
      `;
  }
  if (variant === "underlined") {
    return css`
        border: none;
        border-bottom: 1px solid #d9d9d9;
        border-radius: 0;
        padding-left: 0;
        padding-right: 0;
        &:focus-within {
          box-shadow: none;
          border-bottom-color: #40a9ff;
        }
      `;
  }
  if (variant === "filled") {
    return css`
        border: 1px solid transparent;
        background-color: #f5f5f5;
        &:hover {
          background-color: #e8e8e8;
        }
        &:focus-within {
          background-color: #fff;
          border-color: #40a9ff;
          box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
        }
      `;
  }
  return css`
      &:hover {
        border-color: #40a9ff;
      }
      &:focus-within {
        border-color: #40a9ff;
        box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
      }
    `;
}}

  // 状态处理 (优先级高于变体)
  ${({ status }) => status && css`
      border-color: ${statusColors[status]} !important;
      &:focus-within {
        box-shadow: 0 0 0 2px ${statusColors[status]}33 !important;
      }
    `}

  // 背景色（传入时覆盖变体默认背景）
  ${({ backgroundColor }) => backgroundColor !== void 0 && css`
      background-color: ${backgroundColorMap[backgroundColor]};
    `}

  // 禁用状态
  ${({ disabled }) => disabled && css`
      background-color: #f5f5f5;
      cursor: not-allowed;
      opacity: 1;
      border-color: #d9d9d9;
      color: #00000040;
      
      &:hover {
        border-color: #d9d9d9;
      }
      
      input {
        cursor: not-allowed;
        color: #00000040;
      }
    `}

  ${({ counterPosition }) => counterPosition === "bottom" && css`
    margin-bottom: 24px;
  `}
`;
var InputBase = newStyled.input`
  flex: 1;
  width: 100%;
  min-width: 0; // 允许 flex item 收缩
  border: none;
  outline: none;
  background: transparent;
  padding: 0;
  margin: 0;
  height: 100%;
  font-size: inherit;
  color: inherit;
  
  // 占位符样式
  &::placeholder {
    color: #bfbfbf;
  }
`;
var affixStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.85);
  font-size: inherit;
  line-height: 1;
  white-space: nowrap; // 防止文本换行
`;
var PrefixWrapper = newStyled.span`
  ${affixStyle}
  margin-right: 8px; // 增加间距
`;
var SuffixWrapper = newStyled.span`
  ${affixStyle}
  margin-left: 8px; // 增加间距
`;
var Counter = newStyled.div`
  position: absolute;
  bottom: -22px;
  right: 0;
  font-size: 12px;
  line-height: 1.5;
  color: ${({ exceed }) => exceed ? "#ff4d4f" : "#999"};
  transition: color 0.3s;
`;
var InsideCounter = newStyled.span`
  margin-left: 8px;
  font-size: 12px;
  color: ${({ exceed }) => exceed ? "#ff4d4f" : "#999"};
  transition: color 0.3s;
  pointer-events: none;
  white-space: nowrap;
`;

// src/components/input/input.tsx
var Input = (0, import_react34.forwardRef)(
  ({
    size = "middle",
    status,
    disabled = false,
    prefix: prefix2,
    suffix,
    maxLength,
    showCount = false,
    counterPosition = "bottom",
    value: propValue,
    defaultValue,
    onChange,
    className,
    style,
    inputClassName,
    inputStyle,
    variant = "outlined",
    radius = "md",
    backgroundColor,
    ...props
  }, ref) => {
    const [inputValue, setInputValue] = (0, import_react34.useState)(
      propValue !== void 0 ? String(propValue) : defaultValue !== void 0 ? String(defaultValue) : ""
    );
    const [charCount, setCharCount] = (0, import_react34.useState)(inputValue.length);
    const [exceedLimit, setExceedLimit] = (0, import_react34.useState)(false);
    (0, import_react34.useEffect)(() => {
      if (propValue !== void 0) {
        const newValue = String(propValue);
        setInputValue(newValue);
        setCharCount(newValue.length);
      }
    }, [propValue]);
    (0, import_react34.useEffect)(() => {
      if (maxLength !== void 0) {
        setExceedLimit(charCount > maxLength);
      }
    }, [charCount, maxLength]);
    const handleChange = (0, import_react34.useCallback)((e) => {
      if (disabled) return;
      const newValue = e.target.value;
      setInputValue(newValue);
      setCharCount(newValue.length);
      if (onChange) {
        onChange(e);
      }
    }, [onChange, disabled]);
    const counterText = maxLength ? `${charCount}/${maxLength}` : `${charCount}`;
    const shouldShowCount = showCount || maxLength !== void 0;
    const effectiveSuffix = counterPosition === "inside" ? null : suffix;
    const hasEffectiveSuffix = !!effectiveSuffix;
    const counterInside = shouldShowCount && counterPosition === "inside";
    return /* @__PURE__ */ jsxs2(
      InputContainer,
      {
        className,
        style,
        size,
        status: exceedLimit ? "error" : status,
        disabled,
        variant,
        radius,
        backgroundColor,
        counterPosition: shouldShowCount ? counterPosition : void 0,
        children: [
          prefix2 && /* @__PURE__ */ jsx4(PrefixWrapper, { children: prefix2 }),
          /* @__PURE__ */ jsx4(
            InputBase,
            {
              ref,
              className: inputClassName,
              style: inputStyle,
              disabled,
              value: inputValue,
              onChange: handleChange,
              maxLength,
              ...props
            }
          ),
          hasEffectiveSuffix && /* @__PURE__ */ jsx4(SuffixWrapper, { children: effectiveSuffix }),
          counterInside && /* @__PURE__ */ jsx4(InsideCounter, { exceed: exceedLimit, children: counterText }),
          shouldShowCount && counterPosition === "bottom" && /* @__PURE__ */ jsx4(Counter, { exceed: exceedLimit, children: counterText })
        ]
      }
    );
  }
);
Input.displayName = "Input";

// src/components/input/password.tsx
var import_react35 = require("react");

// src/components/input/input-icons.tsx
var EyeIcon = () => /* @__PURE__ */ jsxs2("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsx4("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
  /* @__PURE__ */ jsx4("circle", { cx: "12", cy: "12", r: "3" })
] });
var EyeOffIcon = () => /* @__PURE__ */ jsxs2("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsx4("path", { d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" }),
  /* @__PURE__ */ jsx4("line", { x1: "1", y1: "1", x2: "23", y2: "23" })
] });

// src/components/input/password.tsx
var Password = (0, import_react35.forwardRef)(
  ({
    visibilityToggle = true,
    type = "password",
    suffix,
    ...props
  }, ref) => {
    const [visible, setVisible] = (0, import_react35.useState)(false);
    const onToggle = () => {
      setVisible(!visible);
    };
    const toggleIcon = visibilityToggle ? /* @__PURE__ */ jsx4(
      "span",
      {
        onClick: onToggle,
        style: {
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          color: "#999",
          pointerEvents: "auto"
        },
        children: visible ? /* @__PURE__ */ jsx4(EyeIcon, {}) : /* @__PURE__ */ jsx4(EyeOffIcon, {})
      }
    ) : null;
    return /* @__PURE__ */ jsx4(
      Input,
      {
        ...props,
        ref,
        type: visible ? "text" : "password",
        suffix: /* @__PURE__ */ jsxs2(Fragment5, { children: [
          suffix,
          toggleIcon
        ] })
      }
    );
  }
);

// src/components/input/index.ts
var Input2 = Input;
Input2.Password = Password;

// src/components/textarea/textarea.tsx
var import_react37 = require("react");

// src/components/textarea/textarea.styles.ts
var sizeMap2 = {
  small: { padding: "5px 11px", fontSize: "12px" },
  middle: { padding: "8px 11px", fontSize: "14px" },
  large: { padding: "12px 11px", fontSize: "16px" }
};
var statusColors2 = {
  error: "#ff4d4f",
  warning: "#faad14",
  success: "#52c41a"
};
var TextAreaBase = newStyled.textarea`
  width: 100%;
  border-radius: 6px;
  outline: none;
  /* 仅对边框、阴影等做过渡，不包含 width/height，避免拖拽 resize 时卡顿 */
  transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
  line-height: 1.5715;
  box-sizing: border-box;
  font-family: inherit;
  resize: ${({ autoSize }) => autoSize ? "none" : "vertical"};
  min-height: ${({ autoSize }) => autoSize ? "auto" : "80px"};
  background-color: #fff;
  border: 1px solid #d9d9d9;

  // 尺寸处理
  ${({ size = "middle" }) => css`
    padding: ${sizeMap2[size].padding};
    font-size: ${sizeMap2[size].fontSize};
  `}

  // 变体处理
  ${({ variant = "outlined" }) => {
  if (variant === "borderless") {
    return css`
        border-color: transparent;
        background-color: transparent;
        padding: 0;
        &:focus {
          box-shadow: none;
        }
      `;
  }
  if (variant === "underlined") {
    return css`
        border: none;
        border-bottom: 1px solid #d9d9d9;
        border-radius: 0;
        padding-left: 0;
        padding-right: 0;
        &:focus {
          box-shadow: none;
          border-bottom-color: #40a9ff;
        }
      `;
  }
  if (variant === "filled") {
    return css`
        border: 1px solid transparent;
        background-color: #f5f5f5;
        &:hover {
          background-color: #e8e8e8;
        }
        &:focus {
          background-color: #fff;
          border-color: #40a9ff;
          box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
        }
      `;
  }
  return css`
      &:hover {
        border-color: #40a9ff;
      }
      &:focus {
        border-color: #40a9ff;
        box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
      }
    `;
}}

  // 状态处理 (优先级高于变体)
  ${({ status }) => status && css`
      border-color: ${statusColors2[status]} !important;
      &:focus {
        box-shadow: 0 0 0 2px ${statusColors2[status]}33 !important;
      }
    `}

  // 禁用状态
  ${({ disabled }) => disabled && css`
      background-color: #f5f5f5;
      cursor: not-allowed;
      opacity: 1;
      border-color: #d9d9d9;
      color: #00000040;
      
      &:hover {
        border-color: #d9d9d9;
      }
    `}

  // 占位符样式
  &::placeholder {
    color: #bfbfbf;
  }
`;
var TextAreaContainer = newStyled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  
  /* 为计数器预留空间 */
  ${({ hasCounter }) => hasCounter && css`
    margin-bottom: 24px;
  `}
`;
var TextAreaClearButton = newStyled.span`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  color: #999;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s;

  &:hover {
    color: #666;
    background-color: rgba(0, 0, 0, 0.06);
  }
`;
var Counter2 = newStyled.div`
  position: absolute;
  bottom: -20px;
  right: 0;
  font-size: 12px;
  color: ${({ exceed }) => exceed ? "#ff4d4f" : "#999"};
  transition: color 0.3s;
`;

// src/components/textarea/textarea.tsx
var TextArea = (0, import_react37.forwardRef)(
  ({
    size = "middle",
    status,
    disabled = false,
    maxLength,
    showCount = false,
    autoSize = false,
    allowClear = true,
    value: propValue,
    defaultValue,
    onChange,
    className,
    style,
    textareaClassName,
    textareaStyle,
    variant = "outlined",
    ...props
  }, ref) => {
    const [inputValue, setInputValue] = (0, import_react37.useState)(
      propValue !== void 0 ? String(propValue) : defaultValue !== void 0 ? String(defaultValue) : ""
    );
    const [charCount, setCharCount] = (0, import_react37.useState)(inputValue.length);
    const [exceedLimit, setExceedLimit] = (0, import_react37.useState)(false);
    const internalRef = (0, import_react37.useRef)(null);
    const textareaRef = ref || internalRef;
    (0, import_react37.useEffect)(() => {
      if (propValue !== void 0) {
        const newValue = String(propValue);
        setInputValue(newValue);
        setCharCount(newValue.length);
      }
    }, [propValue]);
    (0, import_react37.useEffect)(() => {
      if (maxLength !== void 0) {
        setExceedLimit(charCount > maxLength);
      }
    }, [charCount, maxLength]);
    const handleChange = (0, import_react37.useCallback)((e) => {
      if (disabled) return;
      const newValue = e.target.value;
      setInputValue(newValue);
      setCharCount(newValue.length);
      if (onChange) {
        onChange(e);
      }
    }, [onChange, disabled]);
    (0, import_react37.useEffect)(() => {
      if (!autoSize || !textareaRef || !("current" in textareaRef) || !textareaRef.current) return;
      const textarea = textareaRef.current;
      textarea.style.height = "auto";
      const lineHeight = parseInt(getComputedStyle(textarea).lineHeight) || 20;
      const paddingTop = parseInt(getComputedStyle(textarea).paddingTop) || 0;
      const paddingBottom = parseInt(getComputedStyle(textarea).paddingBottom) || 0;
      const contentHeight = textarea.scrollHeight - paddingTop - paddingBottom;
      const rows = Math.ceil(contentHeight / lineHeight);
      let minRows = 2;
      let maxRows = 6;
      if (typeof autoSize === "object") {
        if (autoSize.minRows) minRows = autoSize.minRows;
        if (autoSize.maxRows) maxRows = autoSize.maxRows;
      }
      const targetRows = Math.max(minRows, Math.min(rows, maxRows));
      const targetHeight = targetRows * lineHeight + paddingTop + paddingBottom;
      textarea.style.height = `${targetHeight}px`;
    }, [inputValue, autoSize, textareaRef]);
    const handleClear = (0, import_react37.useCallback)((e) => {
      e.stopPropagation();
      setInputValue("");
      setCharCount(0);
      if (onChange) {
        const target = typeof textareaRef === "object" && textareaRef?.current ? textareaRef.current : null;
        const syntheticEvent = {
          target: { value: "" },
          currentTarget: target
        };
        onChange(syntheticEvent);
      }
    }, [onChange, textareaRef]);
    const counterText = maxLength ? `${charCount}/${maxLength}` : `${charCount}`;
    const shouldShowCount = showCount || maxLength !== void 0;
    const hasValue = inputValue.length > 0;
    return /* @__PURE__ */ jsxs2(
      TextAreaContainer,
      {
        className,
        style,
        hasCounter: shouldShowCount,
        children: [
          /* @__PURE__ */ jsx4(
            TextAreaBase,
            {
              ref: textareaRef,
              size,
              status: exceedLimit ? "error" : status,
              disabled,
              autoSize,
              value: inputValue,
              onChange: handleChange,
              maxLength,
              className: textareaClassName,
              style: textareaStyle,
              variant,
              ...props
            }
          ),
          hasValue && !disabled && allowClear && /* @__PURE__ */ jsx4(TextAreaClearButton, { onClick: handleClear, "aria-label": "\u6E05\u7A7A", children: /* @__PURE__ */ jsx4(CloseIcon, { size: 14 }) }),
          shouldShowCount && /* @__PURE__ */ jsx4(Counter2, { exceed: exceedLimit, children: counterText })
        ]
      }
    );
  }
);
TextArea.displayName = "TextArea";

// src/components/rate/rate.tsx
var import_react39 = require("react");

// src/components/rate/rate.styles.ts
var sizeMap3 = {
  small: { fontSize: "16px", gap: "4px" },
  middle: { fontSize: "20px", gap: "6px" },
  large: { fontSize: "24px", gap: "8px" }
};
var scaleUp = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  70% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;
var pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;
var RateContainer = newStyled.div`
  display: inline-flex;
  align-items: center;
  font-size: ${({ size = "middle" }) => sizeMap3[size].fontSize};
  color: #ffd666;
  
  // 禁用状态
  ${({ disabled }) => disabled && css`
      cursor: not-allowed;
    `}
`;
var StarContainer = newStyled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin-right: ${({ size = "middle" }) => sizeMap3[size].gap};
  width: 1em;
  height: 1em;
  
  &:last-child {
    margin-right: 0;
  }
  
  // 禁用状态
  ${({ disabled }) => disabled && css`
      cursor: default;
    `}
`;
var svgBase = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
`;
var StarBackground = newStyled.div`
  ${svgBase}
  color: #e8e8e8;
  z-index: 1;
  
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`;
var StarForeground = newStyled.div`
  ${svgBase}
  color: currentColor;
  z-index: 2;
  transform: ${({ active }) => active ? "scale(1)" : "scale(0)"};
  opacity: ${({ active }) => active ? 1 : 0};
  
  ${({ active }) => active && css`
    animation: ${scaleUp} 0.3s ease-out;
  `}
  
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`;
var HalfStar = newStyled.div`
  ${svgBase}
  width: 50%;
  overflow: hidden;
  color: currentColor;
  z-index: 3;
  transform: ${({ active }) => active ? "scale(1)" : "scale(0)"};
  opacity: ${({ active }) => active ? 1 : 0};
  
  ${({ active }) => active && css`
    animation: ${scaleUp} 0.3s ease-out;
  `}
  
  svg {
    width: 200%;
    height: 100%;
    fill: currentColor;
  }
`;
var ClickArea = newStyled.div`
  position: absolute;
  top: 0;
  height: 100%;
  z-index: 10;
  cursor: pointer;
`;
var FullClickArea = newStyled(ClickArea)`
  left: 0;
  width: 100%;
`;
var LeftClickArea = newStyled(ClickArea)`
  left: 0;
  width: 50%;
`;
var RightClickArea = newStyled(ClickArea)`
  right: 0;
  width: 50%;
`;
var RateText = newStyled.span`
  margin-left: 8px;
  font-size: ${({ size = "middle" }) => parseInt(sizeMap3[size].fontSize) * 0.8 + "px"};
  color: #595959;
  transition: all 0.2s;
  
  ${({ size = "middle" }) => css`
    font-size: ${parseInt(sizeMap3[size].fontSize) * 0.8}px;
  `}
`;
var ActiveIndicator = newStyled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: currentColor;
  z-index: 5;
  opacity: ${({ active }) => active ? 1 : 0};
  transform: ${({ active }) => active ? "scale(1)" : "scale(0)"};
  transition: all 0.2s;
  box-shadow: 0 0 5px rgba(255, 214, 102, 0.5);
  animation: ${pulse} 1.5s infinite;
`;

// src/components/rate/rate.tsx
var StarIcon = () => /* @__PURE__ */ jsx4(
  "svg",
  {
    viewBox: "64 64 896 896",
    focusable: "false",
    "data-icon": "star",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsx4("path", { d: "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" })
  }
);
var Rate = ({
  value: propValue,
  defaultValue = 0,
  count = 5,
  allowHalf = false,
  disabled = false,
  readOnly = false,
  character: character2 = /* @__PURE__ */ jsx4(StarIcon, {}),
  tooltips = [],
  size = "middle",
  showActiveIndicator = false,
  onChange,
  onHoverChange,
  className,
  style,
  starClassName,
  showScore = false,
  ...props
}) => {
  const [currentValue, setCurrentValue] = (0, import_react39.useState)(defaultValue);
  const [hoverValue, setHoverValue] = (0, import_react39.useState)(0);
  (0, import_react39.useEffect)(() => {
    if (propValue !== void 0) {
      setCurrentValue(propValue);
    }
  }, [propValue]);
  const handleClick = (0, import_react39.useCallback)((value) => {
    if (disabled || readOnly) return;
    const adjustedValue = allowHalf ? value : Math.ceil(value);
    const newValue = adjustedValue === currentValue ? 0 : adjustedValue;
    setCurrentValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  }, [currentValue, disabled, readOnly, allowHalf, onChange]);
  const handleMouseEnter = (0, import_react39.useCallback)((value) => {
    if (disabled || readOnly) return;
    const adjustedValue = allowHalf ? value : Math.ceil(value);
    setHoverValue(adjustedValue);
    if (onHoverChange) {
      onHoverChange(adjustedValue);
    }
  }, [disabled, readOnly, allowHalf, onHoverChange]);
  const handleMouseLeave = (0, import_react39.useCallback)(() => {
    if (disabled || readOnly) return;
    setHoverValue(0);
    if (onHoverChange) {
      onHoverChange(0);
    }
  }, [disabled, readOnly, onHoverChange]);
  const isStarActive = (starIndex, value) => {
    return value >= starIndex;
  };
  const isHalfStarActive = (starIndex, value) => {
    return allowHalf && value >= starIndex - 0.5 && value < starIndex;
  };
  const renderStars = () => {
    const stars = [];
    const displayValue = hoverValue || currentValue;
    for (let i = 1; i <= count; i++) {
      const isActive = isStarActive(i, displayValue);
      const isHalfActive = isHalfStarActive(i, displayValue);
      const isCurrentActive = isStarActive(i, currentValue) || isHalfStarActive(i, currentValue);
      stars.push(
        /* @__PURE__ */ jsxs2(
          StarContainer,
          {
            size,
            disabled: disabled || readOnly,
            onMouseLeave: handleMouseLeave,
            title: tooltips[i - 1] || "",
            className: starClassName,
            children: [
              /* @__PURE__ */ jsx4(StarBackground, { size, children: character2 }),
              /* @__PURE__ */ jsx4(StarForeground, { active: isActive && !isHalfActive, children: character2 }),
              allowHalf && /* @__PURE__ */ jsx4(HalfStar, { active: isHalfActive, children: character2 }),
              showActiveIndicator && isCurrentActive && /* @__PURE__ */ jsx4(ActiveIndicator, { active: isCurrentActive }),
              allowHalf ? /* @__PURE__ */ jsxs2(Fragment5, { children: [
                /* @__PURE__ */ jsx4(
                  LeftClickArea,
                  {
                    onClick: () => handleClick(i - 0.5),
                    onMouseEnter: () => handleMouseEnter(i - 0.5)
                  }
                ),
                /* @__PURE__ */ jsx4(
                  RightClickArea,
                  {
                    onClick: () => handleClick(i),
                    onMouseEnter: () => handleMouseEnter(i)
                  }
                )
              ] }) : /* @__PURE__ */ jsx4(
                FullClickArea,
                {
                  onClick: () => handleClick(i),
                  onMouseEnter: () => handleMouseEnter(i)
                }
              )
            ]
          },
          i
        )
      );
    }
    return stars;
  };
  const getDisplayText = () => {
    if (hoverValue > 0 && tooltips[Math.ceil(hoverValue) - 1]) {
      return tooltips[Math.ceil(hoverValue) - 1];
    }
    if (tooltips[Math.ceil(currentValue) - 1]) {
      return tooltips[Math.ceil(currentValue) - 1];
    }
    return showScore && currentValue > 0 ? `${currentValue}/${count}` : "";
  };
  return /* @__PURE__ */ jsxs2(
    RateContainer,
    {
      disabled: disabled || readOnly,
      size,
      onMouseLeave: handleMouseLeave,
      className,
      style,
      ...props,
      children: [
        renderStars(),
        getDisplayText() && /* @__PURE__ */ jsx4(RateText, { size, children: getDisplayText() })
      ]
    }
  );
};
Rate.displayName = "Rate";

// src/components/radio/radio.tsx
var import_react41 = __toESM(require("react"));

// src/components/radio/radio.styles.ts
var getGapValue2 = (gap) => {
  if (gap === void 0) return void 0;
  const gapSizes2 = {
    small: "8px",
    middle: "16px",
    large: "24px"
  };
  if (typeof gap === "string" && gapSizes2[gap]) {
    return gapSizes2[gap];
  }
  if (typeof gap === "number") {
    return `${gap}px`;
  }
  return gap;
};
var baseRadioStyle = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin: 0;
  padding: 0;
  
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
`;
var RadioInput = newStyled.span`
  position: relative;
  display: inline-block;
  width: ${({ size }) => size === "large" ? "20px" : size === "small" ? "14px" : "16px"};
  height: ${({ size }) => size === "large" ? "20px" : size === "small" ? "14px" : "16px"};
  border-radius: 50%;
  border: 2px solid #d9d9d9;
  transition: all 0.2s;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: ${({ size }) => size === "large" ? "10px" : size === "small" ? "6px" : "8px"};
    height: ${({ size }) => size === "large" ? "10px" : size === "small" ? "6px" : "8px"};
    border-radius: 50%;
    background: #fff;
    transition: all 0.2s;
  }
`;
var RadioLabel = newStyled.span`
  margin-left: 8px;
  font-size: ${({ size }) => size === "large" ? "16px" : size === "small" ? "12px" : "14px"};
  color: #333;
`;
var RadioContainer = newStyled.label`
  ${baseRadioStyle}
  
  ${({ disabled }) => disabled && css`
    cursor: not-allowed;
    opacity: 0.65;
  `}
  
  input:checked + span {
    background: #1890ff;
    border-color: #1890ff;
    
    &::after {
      transform: translate(-50%, -50%) scale(1);
    }
  }
  
  &:hover span {
    border-color: ${({ disabled }) => !disabled ? "#1890ff" : "#d9d9d9"};
  }
  
  input:focus-visible + span {
    box-shadow: 0 0 0 3px rgba(24, 144, 255, 0.2);
  }
`;
var RadioGroupContainer = newStyled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction === "vertical" ? "column" : "row"};
  gap: ${({ gap }) => getGapValue2(gap) || "0px"};
  
  ${({ direction }) => direction === "vertical" ? css`align-items: flex-start;` : css`align-items: center;`}
`;

// src/components/radio/radio.tsx
var RadioGroupContext = import_react41.default.createContext({});
var Radio = import_react41.default.forwardRef(
  ({
    size = "middle",
    disabled = false,
    children,
    value,
    onChange,
    className,
    style,
    radioClassName,
    labelClassName,
    ...props
  }, ref) => {
    const groupContext = (0, import_react41.useContext)(RadioGroupContext);
    const isInGroup = !!groupContext.onChange;
    const checked = isInGroup ? groupContext.value === value : props.checked;
    const disabledState = isInGroup ? groupContext.disabled || disabled : disabled;
    const sizeState = isInGroup ? groupContext.size || size : size;
    const handleChange = (e) => {
      if (disabledState) return;
      if (onChange) {
        onChange(e);
      }
      if (isInGroup && groupContext.onChange && value !== void 0) {
        groupContext.onChange(value);
      }
    };
    return /* @__PURE__ */ jsxs2(
      RadioContainer,
      {
        ref,
        size: sizeState,
        disabled: disabledState,
        className,
        style,
        children: [
          /* @__PURE__ */ jsx4(
            "input",
            {
              type: "radio",
              checked,
              disabled: disabledState,
              onChange: handleChange,
              value,
              ...props
            }
          ),
          /* @__PURE__ */ jsx4(RadioInput, { className: radioClassName, as: "span", size: sizeState }),
          children && /* @__PURE__ */ jsx4(RadioLabel, { className: labelClassName, size: sizeState, children })
        ]
      }
    );
  }
);
Radio.displayName = "Radio";
var RadioGroup = import_react41.default.forwardRef(
  ({
    direction = "horizontal",
    gap = "middle",
    disabled = false,
    size = "middle",
    value,
    defaultValue,
    onChange,
    children,
    options,
    // 新增的options属性
    ...props
  }, ref) => {
    const [internalValue, setInternalValue] = import_react41.default.useState(defaultValue);
    const isControlled = value !== void 0;
    const finalValue = isControlled ? value : internalValue;
    const handleChange = (val) => {
      if (!isControlled) {
        setInternalValue(val);
      }
      onChange?.(val);
    };
    const contextValue = {
      value: finalValue,
      disabled,
      size,
      onChange: handleChange
    };
    return /* @__PURE__ */ jsx4(RadioGroupContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx4(
      RadioGroupContainer,
      {
        ref,
        direction,
        gap,
        ...props,
        children: options ? options.map((option) => /* @__PURE__ */ jsx4(
          Radio,
          {
            value: option.value,
            disabled: option.disabled,
            children: option.label
          },
          option.value
        )) : children
      }
    ) });
  }
);
RadioGroup.displayName = "RadioGroup";

// src/components/switch/switch.tsx
var import_react43 = __toESM(require("react"));

// src/components/switch/switch.styles.ts
var loadingKeyframes = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
var getSizeValues = (size = "middle") => {
  switch (size) {
    case "small":
      return {
        width: "28px",
        height: "16px",
        handleSize: "12px",
        textFontSize: "12px",
        handleOffset: "2px",
        textPadding: "0 4px"
      };
    case "large":
      return {
        width: "56px",
        height: "26px",
        handleSize: "22px",
        textFontSize: "14px",
        handleOffset: "2px",
        textPadding: "0 8px"
      };
    case "middle":
    default:
      return {
        width: "44px",
        height: "22px",
        handleSize: "18px",
        textFontSize: "12px",
        handleOffset: "2px",
        textPadding: "0 7px"
      };
  }
};
var SwitchContainer = newStyled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: ${({ $disabled, $loading }) => $disabled || $loading ? "not-allowed" : "pointer"};
  opacity: ${({ $disabled }) => $disabled ? 0.65 : 1};
  
  /* 隐藏原始input */
  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
`;
var SwitchTrack = newStyled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  /* 自动宽度支持 */
  min-width: ${({ $size }) => getSizeValues($size).width};
  height: ${({ $size }) => getSizeValues($size).height};
  width: auto;
  border-radius: 100px;
  background-color: ${({ $checked }) => $checked ? "#1890ff" : "#bfbfbf"};
  transition: all 0.2s;
  
  /* 加载动画 */
  ${({ $loading }) => $loading && css`
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 12px;
      height: 12px;
      margin: -6px 0 0 -6px;
      border: 2px solid transparent;
      border-top-color: #fff;
      border-radius: 50%;
      animation: ${loadingKeyframes} 1s linear infinite;
    }
  `}
  
  /* 禁用状态 */
  ${({ $disabled }) => $disabled && css`
    opacity: 0.65;
  `}
`;
var SwitchHandle = newStyled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $size }) => {
  const { handleSize, handleOffset } = getSizeValues($size);
  return css`
      width: ${handleSize};
      height: ${handleSize};
      left: ${handleOffset};
    `;
}}
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
  
  ${({ $checked, $size }) => {
  if ($checked) {
    const { handleSize, handleOffset } = getSizeValues($size);
    const left = `calc(100% - ${handleSize} - ${handleOffset})`;
    return css`
        left: ${left};
      `;
  }
  return null;
}}
  
  /* 加载状态时隐藏手柄 */
  ${({ $loading }) => $loading && css`
    opacity: 0;
  `}
`;
var SwitchInnerText = newStyled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: ${({ $size }) => getSizeValues($size).textFontSize};
  line-height: 1;
  color: #fff;
  padding-left: ${({ $size }) => getSizeValues($size).textPadding.split(" ")[1]};
  padding-right: ${({ $size }) => `calc(${getSizeValues($size).handleSize} + 2px + ${getSizeValues($size).textPadding.split(" ")[1]})`};
  transition: all 0.2s;
  opacity: ${({ $checked }) => $checked ? 1 : 0};
  pointer-events: none;
  white-space: nowrap;
  
  /* 当不显示时，不占用布局空间，但需要保留宽度计算 */
  ${({ $checked }) => !$checked && css`
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
  `}
`;
var SwitchUncheckedText = newStyled(SwitchInnerText)`
  opacity: ${({ $checked }) => $checked ? 0 : 1};
  padding-left: ${({ $size }) => `calc(${getSizeValues($size).handleSize} + 2px + ${getSizeValues($size).textPadding.split(" ")[1]})`};
  padding-right: ${({ $size }) => getSizeValues($size).textPadding.split(" ")[1]};
  
  ${({ $checked }) => $checked && css`
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
  `}
  
  ${({ $checked }) => !$checked && css`
    position: relative;
    visibility: visible;
  `}
`;

// src/components/switch/switch.tsx
var Switch = import_react43.default.forwardRef(
  ({
    size: propSize = "default",
    disabled = false,
    loading = false,
    checked: propsChecked,
    defaultChecked = false,
    onChange,
    checkedChildren,
    unCheckedChildren,
    checkedText,
    uncheckedText,
    className,
    style,
    ...props
  }, ref) => {
    const size = propSize === "default" ? "middle" : propSize;
    const finalCheckedChildren = checkedChildren || checkedText;
    const finalUnCheckedChildren = unCheckedChildren || uncheckedText;
    const [internalChecked, setInternalChecked] = (0, import_react43.useState)(defaultChecked);
    const isControlled = propsChecked !== void 0;
    const checked = isControlled ? propsChecked : internalChecked;
    const handleChange = (e) => {
      if (disabled || loading) return;
      const newChecked = e.target.checked;
      if (!isControlled) {
        setInternalChecked(newChecked);
      }
      if (onChange) {
        onChange(newChecked, e);
      }
    };
    return /* @__PURE__ */ jsxs2(
      SwitchContainer,
      {
        ref,
        className,
        style,
        $size: size,
        $disabled: disabled,
        $loading: loading,
        "data-state": checked ? "checked" : "unchecked",
        "data-disabled": disabled,
        children: [
          /* @__PURE__ */ jsx4(
            "input",
            {
              type: "checkbox",
              checked,
              disabled: disabled || loading,
              onChange: handleChange,
              ...props
            }
          ),
          /* @__PURE__ */ jsxs2(
            SwitchTrack,
            {
              $size: size,
              $disabled: disabled,
              $loading: loading,
              $checked: checked,
              className: "solid-switch-track",
              children: [
                finalCheckedChildren && /* @__PURE__ */ jsx4(
                  SwitchInnerText,
                  {
                    $size: size,
                    $checked: checked,
                    children: finalCheckedChildren
                  }
                ),
                finalUnCheckedChildren && /* @__PURE__ */ jsx4(
                  SwitchUncheckedText,
                  {
                    $size: size,
                    $checked: checked,
                    children: finalUnCheckedChildren
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx4(
            SwitchHandle,
            {
              $size: size,
              $checked: checked,
              $loading: loading,
              className: "solid-switch-handle"
            }
          )
        ]
      }
    );
  }
);
Switch.displayName = "Switch";

// src/components/alert/alert.tsx
var import_react45 = require("react");

// src/components/alert/alert.styles.ts
var radiusMap2 = {
  full: "9999px",
  lg: "12px",
  md: "6px",
  sm: "4px",
  none: "0"
};
var fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;
var fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-10px); }
`;
var typeColors = {
  success: {
    bg: "#f6ffed",
    border: "#b7eb8f",
    icon: "#52c41a",
    text: "#135200"
  },
  info: {
    bg: "#e6f7ff",
    border: "#91d5ff",
    icon: "#1890ff",
    text: "#003a8c"
  },
  warning: {
    bg: "#fffbe6",
    border: "#ffe58f",
    icon: "#faad14",
    text: "#613400"
  },
  error: {
    bg: "#fff2f0",
    border: "#ffccc7",
    icon: "#ff4d4f",
    text: "#820014"
  }
};
var AlertContainer = newStyled.div`
  position: relative;
  display: flex;
  border-radius: ${({ radius = "md" }) => radiusMap2[radius]};
  margin-bottom: var(--alert-margin-bottom, 16px);
  border: 1px solid;
  transition: all 0.3s;
  animation: ${({ visible, closing }) => visible ? css`${fadeIn} 0.3s ease-out` : closing ? css`${fadeOut} 0.3s ease-out forwards` : "none"};
  
  /* 根据类型设置颜色 */
  ${({ type = "info" }) => {
  const colors = typeColors[type];
  return css`
      background-color: var(--alert-bg, ${colors.bg});
      border-color: var(--alert-border-color, ${colors.border});
      color: var(--alert-text, ${colors.text});
    `;
}}
  
  /* 当有标题时的样式 */
  ${({ hasTitle }) => hasTitle && css`
    padding: var(--alert-padding-with-title, 16px);
    align-items: flex-start;
  `}
  
  /* 当没有标题时的样式 */
  ${({ hasTitle }) => !hasTitle && css`
    padding: var(--alert-padding-without-title, 12px 16px);
    align-items: center;
  `}

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;
var AlertIcon = newStyled.div`
  display: flex;
  align-items: center;
  margin-right: var(--alert-icon-margin-right, 12px);
  font-size: var(--alert-icon-size-with-title, 20px);
  
  ${({ hasTitle }) => !hasTitle && css`
    font-size: var(--alert-icon-size-without-title, 18px);
  `}
  
  ${({ type = "info" }) => css`
    color: var(--alert-icon-color, ${typeColors[type].icon});
  `}
`;
var AlertContent = newStyled.div`
  flex: 1;
  min-width: 0;
`;
var AlertTitle = newStyled.div`
  font-weight: 600;
  font-size: var(--alert-title-font-size, 16px);
  line-height: var(--alert-title-line-height, 1.4);
  margin-bottom: var(--alert-title-margin-bottom, 4px);
`;
var AlertDescription = newStyled.div`
  font-size: var(--alert-description-font-size, 14px);
  line-height: var(--alert-description-line-height, 1.5);
`;
var AlertClose = newStyled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: var(--alert-close-margin-left, 12px);
  color: var(--alert-close-color, rgba(0, 0, 0, 0.45));
  font-size: var(--alert-close-font-size, 14px);
  display: flex;
  align-items: center;
  transition: color 0.3s;
  
  &:hover {
    color: var(--alert-close-hover-color, rgba(0, 0, 0, 0.75));
  }
`;
var AlertAction = newStyled.div`
  margin-top: var(--alert-action-margin-top, 8px);
  display: flex;
  gap: var(--alert-action-gap, 8px);
`;

// src/components/alert/alert.tsx
var DefaultIcons = {
  success: /* @__PURE__ */ jsx4("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx4("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" }) }),
  info: /* @__PURE__ */ jsx4("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx4("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" }) }),
  warning: /* @__PURE__ */ jsx4("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx4("path", { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" }) }),
  error: /* @__PURE__ */ jsx4("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx4("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" }) })
};
var Alert = ({
  type = "info",
  title,
  description,
  closable = false,
  closeText,
  showIcon = false,
  icon,
  onClose,
  afterClose,
  action,
  radius = "md",
  children,
  ...props
}) => {
  const [visible, setVisible] = (0, import_react45.useState)(true);
  const [closing, setClosing] = (0, import_react45.useState)(false);
  const hasTitle = Boolean(title);
  const descriptionContent = description || children;
  const handleClose = (e) => {
    setClosing(true);
    if (onClose) {
      onClose(e);
    }
    setTimeout(() => {
      setVisible(false);
      if (afterClose) {
        afterClose();
      }
    }, 300);
  };
  if (!visible) {
    return null;
  }
  return /* @__PURE__ */ jsxs2(
    AlertContainer,
    {
      type,
      closable,
      showIcon,
      hasTitle,
      visible,
      closing,
      radius,
      ...props,
      children: [
        showIcon && /* @__PURE__ */ jsx4(AlertIcon, { type, hasTitle, children: icon || DefaultIcons[type] }),
        /* @__PURE__ */ jsxs2(AlertContent, { children: [
          title && /* @__PURE__ */ jsx4(AlertTitle, { children: title }),
          descriptionContent && /* @__PURE__ */ jsx4(AlertDescription, { children: descriptionContent }),
          action && /* @__PURE__ */ jsx4(AlertAction, { children: action })
        ] }),
        closable && /* @__PURE__ */ jsx4(AlertClose, { onClick: handleClose, children: closeText || /* @__PURE__ */ jsx4(CloseIcon, {}) })
      ]
    }
  );
};
Alert.displayName = "Alert";

// src/components/message/MessageContext.tsx
var import_react49 = require("react");

// src/components/message/MessageContainer.tsx
var import_react47 = __toESM(require("react"));

// src/components/message/message.styles.ts
var slideIn = keyframes`
  from { 
    opacity: 0;
    transform: translateY(-20px); 
  }
  to { 
    opacity: 1;
    transform: translateY(0); 
  }
`;
var slideOut = keyframes`
  from { 
    opacity: 1;
    transform: translateY(0); 
  }
  to { 
    opacity: 0;
    transform: translateY(-20px); 
  }
`;
var typeColors2 = {
  success: {
    bg: "#f6ffed",
    border: "#b7eb8f",
    icon: "#52c41a",
    text: "#135200"
  },
  info: {
    bg: "#e6f7ff",
    border: "#91d5ff",
    icon: "#1890ff",
    text: "#003a8c"
  },
  warning: {
    bg: "#fffbe6",
    border: "#ffe58f",
    icon: "#faad14",
    text: "#613400"
  },
  error: {
    bg: "#fff2f0",
    border: "#ffccc7",
    icon: "#ff4d4f",
    text: "#820014"
  }
};
var getPositionStyle = (position2) => {
  switch (position2) {
    case "top":
      return {
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)"
      };
    case "top-left":
      return {
        top: "20px",
        left: "20px"
      };
    case "top-right":
      return {
        top: "20px",
        right: "20px"
      };
    case "bottom":
      return {
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)"
      };
    case "bottom-left":
      return {
        bottom: "20px",
        left: "20px"
      };
    case "bottom-right":
      return {
        bottom: "20px",
        right: "20px"
      };
    default:
      return {
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)"
      };
  }
};
var messageItemStyle = (type, closing) => css`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 300px;
  max-width: 500px;
  padding: 12px 16px;
  margin-bottom: 12px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  pointer-events: auto;
  animation: ${slideIn} 0.3s ease-out;
  
  ${closing && css`
    animation: ${slideOut} 0.3s ease-out forwards;
  `}
  
  /* 根据类型设置颜色 */
  background-color: ${typeColors2[type].bg};
  border: 1px solid ${typeColors2[type].border};
  color: ${typeColors2[type].text};
`;
var messageIconStyle = (type) => css`
  display: flex;
  align-items: center;
  margin-right: 12px;
  font-size: 18px;
  
  svg {
    width: 1em;
    height: 1em;
    fill: ${typeColors2[type].icon};
  }
`;
var messageContentStyle = css`
  flex: 1;
  font-size: 14px;
  line-height: 1.5;
  padding-right: 24px;
`;
var messageCloseStyle = css`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.45);
  transition: color 0.2s;
  
  &:hover {
    color: rgba(0, 0, 0, 0.75);
  }
  
  svg {
    width: 14px;
    height: 14px;
  }
`;
var messageProgressStyle = (duration, closing) => css`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0 0 0 8px;
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background-color: currentColor;
    border-radius: 0 0 0 8px;
    animation: ${keyframes`
      from { width: 100%; }
      to { width: 0; }
    `} ${duration}ms linear forwards;
    
    ${closing && css`
      animation: none;
      width: 0;
    `}
  }
`;

// src/components/message/MessageContainer.tsx
var typeIcons = {
  success: SuccessIcon,
  info: InfoIcon,
  warning: WarningIcon,
  error: ErrorIcon
};
var MessageContainer = ({ messages, onRemove }) => {
  const groupedMessages = {};
  messages.forEach((message) => {
    const position2 = message.position || "top";
    if (!groupedMessages[position2]) {
      groupedMessages[position2] = [];
    }
    groupedMessages[position2].push(message);
  });
  return /* @__PURE__ */ jsx4(Fragment5, { children: Object.entries(groupedMessages).map(([position2, msgs]) => {
    if (msgs.length === 0) return null;
    return /* @__PURE__ */ jsx4(
      "div",
      {
        css: css`
              position: fixed;
              z-index: 1050;
              display: flex;
              flex-direction: column;
              align-items: center;
              pointer-events: none;
              ${getPositionStyle(position2)}
            `,
        children: msgs.map((message) => /* @__PURE__ */ jsx4(
          MessageItem,
          {
            message,
            onRemove
          },
          message.id
        ))
      },
      position2
    );
  }) });
};
var MessageItem = ({ message, onRemove }) => {
  const [closing, setClosing] = import_react47.default.useState(false);
  const timerRef = (0, import_react47.useRef)(null);
  const Icon = typeIcons[message.type];
  const duration = message.duration ?? 3e3;
  const closable = message.closable ?? true;
  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onRemove(message.id);
      if (message.onClose) {
        message.onClose();
      }
    }, 300);
  };
  (0, import_react47.useEffect)(() => {
    if (duration > 0) {
      timerRef.current = window.setTimeout(() => {
        handleClose();
      }, duration);
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [duration]);
  return /* @__PURE__ */ jsxs2("div", { css: messageItemStyle(message.type, closing), children: [
    /* @__PURE__ */ jsx4("div", { css: messageIconStyle(message.type), children: /* @__PURE__ */ jsx4(Icon, {}) }),
    /* @__PURE__ */ jsx4("div", { css: messageContentStyle, children: message.content }),
    closable && /* @__PURE__ */ jsx4(
      "button",
      {
        css: messageCloseStyle,
        onClick: handleClose,
        "aria-label": "\u5173\u95ED\u6D88\u606F",
        children: /* @__PURE__ */ jsx4(CloseIcon, {})
      }
    ),
    duration > 0 && /* @__PURE__ */ jsx4("div", { css: messageProgressStyle(duration, closing) })
  ] });
};

// src/components/message/MessageContext.tsx
var MessageContext = (0, import_react49.createContext)(null);
var MessageProvider = ({ children }) => {
  const [messages, setMessages] = (0, import_react49.useState)([]);
  const add = (0, import_react49.useCallback)((message) => {
    setMessages((prev2) => [...prev2, message]);
  }, []);
  const remove = (0, import_react49.useCallback)((id) => {
    setMessages((prev2) => prev2.filter((msg) => msg.id !== id));
  }, []);
  const removeAll = (0, import_react49.useCallback)(() => {
    setMessages([]);
  }, []);
  return /* @__PURE__ */ jsxs2(MessageContext.Provider, { value: { add, remove, removeAll }, children: [
    children,
    /* @__PURE__ */ jsx4(MessageContainer, { messages, onRemove: remove })
  ] });
};
var useMessageContext = () => {
  const context = (0, import_react49.useContext)(MessageContext);
  if (!context) {
    throw new Error("useMessageContext must be used within a MessageProvider");
  }
  return context;
};

// src/components/message/useMessage.tsx
var import_react50 = require("react");
var useMessage = () => {
  const context = (0, import_react50.useContext)(MessageContext);
  if (!context) {
    throw new Error("useMessage must be used within a MessageProvider");
  }
  const { add, removeAll } = context;
  const generateId = (0, import_react50.useCallback)(() => `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`, []);
  const messageApi = (0, import_react50.useMemo)(() => ({
    success: (content, duration = 3e3, position2 = "top") => {
      add({
        id: generateId(),
        content,
        type: "success",
        duration,
        position: position2
      });
    },
    info: (content, duration = 3e3, position2 = "top") => {
      add({
        id: generateId(),
        content,
        type: "info",
        duration,
        position: position2
      });
    },
    warning: (content, duration = 3e3, position2 = "top") => {
      add({
        id: generateId(),
        content,
        type: "warning",
        duration,
        position: position2
      });
    },
    error: (content, duration = 0, position2 = "top") => {
      add({
        id: generateId(),
        content,
        type: "error",
        duration,
        position: position2,
        closable: true
      });
    },
    removeAll
  }), [add, removeAll, generateId]);
  return [messageApi, /* @__PURE__ */ jsx4("div", {}, "message-context-holder")];
};

// src/components/modal/Modal.tsx
var import_react52 = require("react");

// src/components/modal/Modal.styles.ts
var getScrollbarWidth = () => {
  if (typeof document === "undefined") return 0;
  const scrollDiv = document.createElement("div");
  scrollDiv.style.cssText = "width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;";
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};
var scrollbarStyle = css`
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
  
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
`;
var fadeIn2 = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
var fadeOut2 = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;
var zoomIn = keyframes`
  from { transform: translate(-50%, -50%) scale(0.7); opacity: 0; }
  to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
`;
var zoomOut = keyframes`
  from { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  to { transform: translate(-50%, -50%) scale(0.7); opacity: 0; }
`;
var overlayStyle = (visible, closing) => css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: ${visible ? "block" : "none"};
  animation: ${visible ? fadeIn2 : closing ? fadeOut2 : "none"} 0.3s ease-out;
  animation-fill-mode: forwards;
  
  /* 禁用滚动时的背景样式 */
  body.modal-open & {
    overflow: hidden;
    padding-right: ${getScrollbarWidth()}px;
  }
`;
var modalContainerStyle = (visible, closing) => css`
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  display: ${visible ? "block" : "none"};
  animation: ${visible ? zoomIn : closing ? zoomOut : "none"} 0.2s ease-out;
  animation-fill-mode: forwards;
`;
var modalContentStyle = css`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  min-width: 400px;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
`;
var modalHeaderStyle = css`
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
var modalTitleStyle = css`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.85);
`;
var modalCloseStyle = css`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 16px;
  color: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  transition: color 0.2s;
  
  &:hover {
    color: rgba(0, 0, 0, 0.75);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;
var modalBodyStyle = css`
  padding: 24px;
  flex: 1;
  overflow-y: auto;
`;
var modalFooterStyle = css`
  padding: 10px 16px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;
var modalButtonStyle = (primary) => css`
  padding: 6px 16px;
  border-radius: 4px;
  border: 1px solid ${primary ? "#1890ff" : "#d9d9d9"};
  background-color: ${primary ? "#1890ff" : "white"};
  color: ${primary ? "white" : "rgba(0, 0, 0, 0.85)"};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: ${primary ? "#40a9ff" : "#40a9ff"};
    background-color: ${primary ? "#40a9ff" : "white"};
    color: ${primary ? "white" : "#40a9ff"};
  }
`;

// src/components/modal/Modal.tsx
var Modal = ({
  title,
  visible,
  closing = false,
  onOk,
  onCancel,
  okText = "\u786E\u5B9A",
  cancelText = "\u53D6\u6D88",
  children,
  footer,
  closable = true,
  maskClosable = true
}) => {
  (0, import_react52.useEffect)(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && visible && closable) {
        onCancel?.();
      }
    };
    if (visible) {
      document.addEventListener("keydown", handleKeyDown);
      const scrollbarWidth = getScrollbarWidth();
      const hasScrollbar = document.body.scrollHeight > window.innerHeight;
      if (hasScrollbar && scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [visible, closable, onCancel]);
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && maskClosable && closable) {
      onCancel?.();
    }
  };
  const defaultFooter = footer ?? /* @__PURE__ */ jsxs2(Fragment5, { children: [
    cancelText && /* @__PURE__ */ jsx4("button", { css: modalButtonStyle(), onClick: onCancel, children: cancelText }),
    okText && /* @__PURE__ */ jsx4("button", { css: modalButtonStyle(true), onClick: onOk, children: okText })
  ] });
  return /* @__PURE__ */ jsxs2(Fragment5, { children: [
    /* @__PURE__ */ jsx4(
      "div",
      {
        css: overlayStyle(visible, closing),
        onClick: handleOverlayClick,
        "aria-hidden": !visible
      }
    ),
    /* @__PURE__ */ jsx4(
      "div",
      {
        css: modalContainerStyle(visible, closing),
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "modal-title",
        children: /* @__PURE__ */ jsxs2("div", { css: modalContentStyle, children: [
          title && /* @__PURE__ */ jsxs2("div", { css: modalHeaderStyle, children: [
            /* @__PURE__ */ jsx4("h2", { css: modalTitleStyle, id: "modal-title", children: title }),
            closable && /* @__PURE__ */ jsx4("button", { css: modalCloseStyle, onClick: onCancel, "aria-label": "\u5173\u95ED", children: /* @__PURE__ */ jsx4(CloseIcon, {}) })
          ] }),
          /* @__PURE__ */ jsx4("div", { css: modalBodyStyle, children }),
          footer !== null && /* @__PURE__ */ jsx4("div", { css: modalFooterStyle, children: defaultFooter })
        ] })
      }
    )
  ] });
};

// src/components/modal/ModalContext.tsx
var import_react53 = require("react");
var ModalContext = (0, import_react53.createContext)(null);
var ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = (0, import_react53.useState)(null);
  const [modalConfig, setModalConfig] = (0, import_react53.useState)({});
  const [isOpen, setIsOpen] = (0, import_react53.useState)(false);
  const [closing, setClosing] = (0, import_react53.useState)(false);
  const openModal = (0, import_react53.useCallback)((content, config = {}) => {
    setModalContent(content);
    setModalConfig(config);
    setIsOpen(true);
    setClosing(false);
  }, []);
  const closeModal = (0, import_react53.useCallback)(() => {
    setClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setModalContent(null);
      setModalConfig({});
    }, 300);
  }, []);
  const handleOk = (0, import_react53.useCallback)(() => {
    if (modalConfig.onOk) {
      modalConfig.onOk();
    }
    closeModal();
  }, [modalConfig, closeModal]);
  const handleCancel = (0, import_react53.useCallback)(() => {
    if (modalConfig.onCancel) {
      modalConfig.onCancel();
    }
    closeModal();
  }, [modalConfig, closeModal]);
  return /* @__PURE__ */ jsxs2(ModalContext.Provider, { value: { openModal, closeModal, isOpen }, children: [
    children,
    isOpen && /* @__PURE__ */ jsx4(
      Modal,
      {
        title: modalConfig.title,
        visible: isOpen,
        closing,
        onOk: handleOk,
        onCancel: handleCancel,
        okText: modalConfig.okText,
        cancelText: modalConfig.cancelText,
        footer: modalConfig.footer,
        closable: modalConfig.closable,
        maskClosable: modalConfig.maskClosable,
        children: modalContent
      }
    )
  ] });
};
var useModalContext = () => {
  const context = (0, import_react53.useContext)(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};

// src/components/modal/useModal.tsx
var useModal = () => {
  const { openModal, closeModal, isOpen } = useModalContext();
  return {
    openModal,
    closeModal,
    isOpen
  };
};

// src/components/modal/confirm.tsx
var import_react54 = require("react");
var import_client = require("react-dom/client");
var confirm = (props) => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  const root = (0, import_client.createRoot)(div);
  let currentConfig = { ...props, visible: true };
  const destroy = () => {
    root.unmount();
    if (div.parentNode) {
      div.parentNode.removeChild(div);
    }
  };
  const render = (config) => {
    const handleOk = async () => {
      if (config.onOk) {
        await config.onOk();
      }
      close2();
    };
    const handleCancel = async () => {
      if (config.onCancel) {
        await config.onCancel();
      }
      close2();
    };
    const close2 = () => {
      currentConfig = { ...currentConfig, visible: false };
      render(currentConfig);
      setTimeout(destroy, 300);
    };
    const hasTitle = config.title != null && config.title !== "";
    const modalTitle = hasTitle ? config.icon ? /* @__PURE__ */ jsxs2("span", { style: { display: "inline-flex", alignItems: "center", gap: "8px" }, children: [
      /* @__PURE__ */ jsx4("span", { style: { fontSize: "22px", lineHeight: 1 }, children: config.icon }),
      config.title
    ] }) : config.title : void 0;
    const bodyContent = !hasTitle && config.icon ? /* @__PURE__ */ jsxs2("div", { style: { display: "flex", gap: "12px" }, children: [
      /* @__PURE__ */ jsx4("span", { style: { fontSize: "22px", lineHeight: 1 }, children: config.icon }),
      /* @__PURE__ */ jsx4("div", { style: { fontSize: "14px" }, children: config.content })
    ] }) : /* @__PURE__ */ jsx4("div", { style: { fontSize: "14px" }, children: config.content });
    root.render(
      /* @__PURE__ */ jsx4(
        Modal,
        {
          ...config,
          title: modalTitle,
          visible: config.visible,
          onOk: handleOk,
          onCancel: handleCancel,
          children: bodyContent
        }
      )
    );
  };
  render(currentConfig);
  return {
    destroy: close,
    update: (newConfig) => {
      currentConfig = { ...currentConfig, ...newConfig };
      render(currentConfig);
    }
  };
};
var ModalApi = {
  confirm: (props) => confirm(props),
  info: (props) => confirm({ okText: "\u6211\u77E5\u9053\u4E86", cancelText: null, icon: /* @__PURE__ */ jsx4(InfoIcon, { style: { color: "#1890ff" } }), ...props }),
  success: (props) => confirm({ okText: "\u6211\u77E5\u9053\u4E86", cancelText: null, icon: /* @__PURE__ */ jsx4(SuccessIcon, { style: { color: "#52c41a" } }), ...props }),
  error: (props) => confirm({ okText: "\u6211\u77E5\u9053\u4E86", cancelText: null, icon: /* @__PURE__ */ jsx4(ErrorIcon, { style: { color: "#ff4d4f" } }), ...props }),
  warning: (props) => confirm({ okText: "\u6211\u77E5\u9053\u4E86", cancelText: null, icon: /* @__PURE__ */ jsx4(WarningIcon, { style: { color: "#faad14" } }), ...props })
};

// src/components/popconfirm/popconfirm.tsx
var import_react56 = require("react");

// src/components/popconfirm/popconfirm.styles.ts
var getPlacementStyles = (placement = "top") => {
  switch (placement) {
    case "top":
      return css`
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 10px;
      `;
    case "topLeft":
      return css`
        bottom: 100%;
        left: 0;
        margin-bottom: 10px;
      `;
    case "topRight":
      return css`
        bottom: 100%;
        right: 0;
        margin-bottom: 10px;
      `;
    case "bottom":
      return css`
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 10px;
      `;
    case "bottomLeft":
      return css`
        top: 100%;
        left: 0;
        margin-top: 10px;
      `;
    case "bottomRight":
      return css`
        top: 100%;
        right: 0;
        margin-top: 10px;
      `;
    case "left":
      return css`
        top: 50%;
        right: 100%;
        transform: translateY(-50%);
        margin-right: 10px;
      `;
    case "right":
      return css`
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
        margin-left: 10px;
      `;
    default:
      return css`
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 10px;
      `;
  }
};
var PopconfirmContainer = newStyled.div`
  position: absolute;
  z-index: 1000;
  ${({ placement }) => getPlacementStyles(placement)}
`;
var PopconfirmContent = newStyled.div`
  background: white;
  border-radius: 6px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 
              0 6px 16px 0 rgba(0, 0, 0, 0.08),
              0 9px 28px 8px rgba(0, 0, 0, 0.05);
  padding: 12px;
  min-width: 250px;
  font-size: 14px;
  
  .popconfirm-icon {
    float: left;
    margin-right: 8px;
    font-size: 1.2em;
    color: #faad14; /* 默认图标颜色 */
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      width: 100%;
      height: 100%;
    }
  }
  
  .popconfirm-message {
    overflow: hidden;
  }
  
  .popconfirm-title {
    font-weight: 600;
    text-align: left;
  }
  
  .popconfirm-description {
    margin-top: 4px;
    color: #666;
    text-align: left;
  }
  
  .popconfirm-buttons {
    margin-top: 12px;
    text-align: right;
    
    button + button {
      margin-left: 8px;
    }
  }
  
  .popconfirm-cancel-btn {
    padding: 4px 8px;
    border-radius: 4px;
    background: #fff;
    border: 1px solid #d9d9d9;
    cursor: pointer;
  }
  
  .popconfirm-ok-btn {
    padding: 4px 8px;
    border-radius: 4px;
    background: #1890ff;
    color: white;
    border: none;
    cursor: pointer;
  }
`;
var PopconfirmArrow = newStyled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background: white;
  transform: rotate(45deg);
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 
              0 6px 16px 0 rgba(0, 0, 0, 0.08),
              0 9px 28px 8px rgba(0, 0, 0, 0.05);

  ${({ placement = "top" }) => {
  switch (placement) {
    case "top":
    case "topLeft":
    case "topRight":
      return css`
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
        `;
    case "bottom":
    case "bottomLeft":
    case "bottomRight":
      return css`
          top: -5px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
        `;
    case "left":
      return css`
          top: 50%;
          right: -5px;
          transform: translateY(-50%) rotate(45deg);
        `;
    case "right":
      return css`
          top: 50%;
          left: -5px;
          transform: translateY(-50%) rotate(45deg);
        `;
    default:
      return css`
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
        `;
  }
}}
`;

// src/components/popconfirm/popconfirm.tsx
var Popconfirm = ({
  title,
  description,
  onConfirm,
  onCancel,
  okText = "\u786E\u5B9A",
  cancelText = "\u53D6\u6D88",
  icon,
  placement = "top",
  children,
  disabled = false,
  className,
  style,
  popupClassName,
  contentClassName,
  arrowClassName,
  okButtonProps,
  cancelButtonProps
}) => {
  const [visible, setVisible] = (0, import_react56.useState)(false);
  const triggerRef = (0, import_react56.useRef)(null);
  const popupRef = (0, import_react56.useRef)(null);
  const renderIcon = icon === void 0 ? /* @__PURE__ */ jsx4(WarningIcon, {}) : icon;
  const handleClick = (e) => {
    if (disabled) return;
    e.stopPropagation();
    setVisible(!visible);
  };
  const handleConfirm = (e) => {
    e.stopPropagation();
    setVisible(false);
    onConfirm?.();
  };
  const handleCancel = (e) => {
    e.stopPropagation();
    setVisible(false);
    onCancel?.();
  };
  (0, import_react56.useEffect)(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target) && triggerRef.current && !triggerRef.current.contains(e.target)) {
        setVisible(false);
      }
    };
    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible]);
  return /* @__PURE__ */ jsxs2("div", { className, style: { position: "relative", display: "inline-block", ...style }, children: [
    /* @__PURE__ */ jsx4("div", { ref: triggerRef, onClick: handleClick, children }),
    visible && /* @__PURE__ */ jsxs2(PopconfirmContainer, { ref: popupRef, placement, className: popupClassName, children: [
      /* @__PURE__ */ jsx4(PopconfirmArrow, { placement, className: arrowClassName }),
      /* @__PURE__ */ jsxs2(PopconfirmContent, { className: contentClassName, children: [
        /* @__PURE__ */ jsx4("div", { className: "popconfirm-icon", children: renderIcon }),
        /* @__PURE__ */ jsxs2("div", { className: "popconfirm-message", children: [
          /* @__PURE__ */ jsx4("div", { className: "popconfirm-title", children: title }),
          description && /* @__PURE__ */ jsx4("div", { className: "popconfirm-description", children: description })
        ] }),
        /* @__PURE__ */ jsxs2("div", { className: "popconfirm-buttons", children: [
          /* @__PURE__ */ jsx4(
            "button",
            {
              ...cancelButtonProps,
              onClick: handleCancel,
              className: `popconfirm-cancel-btn ${cancelButtonProps?.className || ""}`,
              children: cancelText
            }
          ),
          /* @__PURE__ */ jsx4(
            "button",
            {
              ...okButtonProps,
              onClick: handleConfirm,
              className: `popconfirm-ok-btn ${okButtonProps?.className || ""}`,
              children: okText
            }
          )
        ] })
      ] })
    ] })
  ] });
};

// src/components/progress/progress.tsx
var import_react58 = require("react");

// src/components/progress/progress.styles.ts
var progressActive = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 32px 0;
  }
`;
var ProgressContainer = newStyled.div`
  display: inline-flex;
  align-items: center;
  
  ${({ type }) => type === "line" && css`
    width: 100%;
    gap: 8px;
  `}
  
  ${({ type }) => (type === "circle" || type === "dashboard") && css`
    position: relative;
  `}
`;
var ProgressLine = newStyled.div`
  position: relative;
  border-radius: 100px;
  transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1);
  
  ${({ status }) => status === "active" && css`
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.15) 75%,
      transparent 75%,
      transparent
    );
    background-size: 32px 32px;
    animation: ${progressActive} 0.8s linear infinite;
  `}
`;
var ProgressLineTrack = newStyled.div`
  flex: 1;
  height: 100%;
  border-radius: 100px;
  background-color: #f5f5f5;
  overflow: hidden;
  position: relative;
`;
var ProgressLineInner = newStyled.div`
  height: 100%;
  width: ${({ percent }) => percent}%;
  background-color: ${({ color }) => color};
  border-radius: 100px;
  transition: width 0.4s cubic-bezier(0.08, 0.82, 0.17, 1);
`;
var ProgressCircle = newStyled.svg`
  ${({ size }) => {
  if (typeof size === "string") {
    switch (size) {
      case "small":
        return css` width: 60px; height: 60px; `;
      case "large":
        return css` width: 120px; height: 120px; `;
      default:
        return css` width: 80px; height: 80px; `;
    }
  }
  return css`
      width: ${size}px;
      height: ${size}px;
    `;
}}
  
  .progress-trail {
    transition: stroke 0.3s;
  }
  
  .progress-path {
    transition: stroke-dasharray 0.6s ease 0s, stroke 0.6s ease;
  }
`;
var ProgressDashboard = newStyled.svg`
  ${({ size }) => {
  if (typeof size === "string") {
    switch (size) {
      case "small":
        return css` width: 60px; height: 60px; `;
      case "large":
        return css` width: 120px; height: 120px; `;
      default:
        return css` width: 80px; height: 80px; `;
    }
  }
  return css`
      width: ${size}px;
      height: ${size}px;
    `;
}}
  
  transform: rotate(-90deg);
  
  .progress-trail {
    transition: stroke 0.3s;
  }
  
  .progress-path {
    transition: stroke-dasharray 0.6s ease 0s, stroke 0.6s ease;
  }
  
  ${({ gapDegree, gapPosition }) => {
  const gapRotation = {
    top: 0,
    right: 90,
    bottom: 180,
    left: 270
  }[gapPosition] || 0;
  return css`
      .progress-trail,
      .progress-path {
        stroke-dasharray: ${264 - gapDegree}, 264;
        transform-origin: center;
        transform: rotate(${gapRotation}deg);
      }
    `;
}}
`;
var ProgressText = newStyled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${({ color }) => color || "rgba(0, 0, 0, 0.65)"};
  
  ${({ type, size }) => {
  if (type === "line") return css`
      min-width: 40px;
      text-align: left;
    `;
  return css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      font-size: ${typeof size === "number" ? `${Math.max(12, size / 6)}px` : size === "small" ? "12px" : size === "large" ? "18px" : "14px"};
    `;
}}
  
  // 添加图标样式
  svg {
    vertical-align: middle;
    margin: 0 auto;
  }
`;

// src/components/progress/progress.tsx
var getStatusColor = (status, percent) => {
  if (status === "success") return "#52c41a";
  if (status === "exception") return "#ff4d4f";
  if (percent >= 100) return "#52c41a";
  return "#1890ff";
};
var Progress = ({
  type = "line",
  percent = 0,
  size = "default",
  strokeColor,
  trailColor = "#f5f5f5",
  strokeWidth = 6,
  showInfo = true,
  status = "normal",
  format,
  gapDegree = 75,
  gapPosition = "bottom",
  className,
  style,
  trackClassName,
  barClassName,
  infoClassName,
  ...rest
}) => {
  const validPercent = Math.min(Math.max(percent, 0), 100);
  const progressStatus = percent >= 100 ? "success" : status;
  const color = strokeColor || getStatusColor(progressStatus, validPercent);
  const renderProgressInfo = () => {
    if (!showInfo) return null;
    const getIconSize = () => {
      if (type === "line") return Math.max(14, strokeWidth * 1.5);
      if (typeof size === "number") return Math.max(16, size / 5);
      switch (size) {
        case "small":
          return 12;
        case "large":
          return 20;
        default:
          return 16;
      }
    };
    const textClass = infoClassName || "";
    if (format) {
      return /* @__PURE__ */ jsx4(ProgressText, { type, size, className: textClass, children: format(validPercent) });
    }
    if (validPercent >= 100 && progressStatus !== "exception") {
      return /* @__PURE__ */ jsx4(ProgressText, { type, size, className: textClass, children: /* @__PURE__ */ jsx4(SuccessIcon, { width: getIconSize(), height: getIconSize(), fill: color }) });
    }
    if (progressStatus === "exception") {
      return /* @__PURE__ */ jsx4(ProgressText, { type, size, className: textClass, children: /* @__PURE__ */ jsx4(
        "svg",
        {
          width: getIconSize(),
          height: getIconSize(),
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "#ff4d4f",
          strokeWidth: "2",
          children: /* @__PURE__ */ jsx4("path", { d: "M18 6L6 18M6 6l12 12", strokeLinecap: "round", strokeLinejoin: "round" })
        }
      ) });
    }
    return /* @__PURE__ */ jsxs2(ProgressText, { type, size, className: textClass, children: [
      validPercent,
      "%"
    ] });
  };
  const renderProgress = () => {
    switch (type) {
      case "line":
        return /* @__PURE__ */ jsxs2(ProgressContainer, { type: "line", className, style, ...rest, children: [
          /* @__PURE__ */ jsx4(
            ProgressLineTrack,
            {
              className: `progress-track ${trackClassName || ""}`,
              style: { height: strokeWidth, backgroundColor: trailColor },
              children: /* @__PURE__ */ jsx4(
                ProgressLineInner,
                {
                  className: `progress-inner ${barClassName || ""}`,
                  percent: validPercent,
                  color,
                  style: { height: strokeWidth }
                }
              )
            }
          ),
          renderProgressInfo()
        ] });
      case "circle":
        return /* @__PURE__ */ jsxs2(ProgressContainer, { type: "circle", className, style, ...rest, children: [
          /* @__PURE__ */ jsxs2(
            ProgressCircle,
            {
              size,
              viewBox: "0 0 100 100",
              children: [
                /* @__PURE__ */ jsx4(
                  "circle",
                  {
                    className: `progress-trail ${trackClassName || ""}`,
                    cx: "50",
                    cy: "50",
                    r: "42",
                    stroke: trailColor,
                    strokeWidth,
                    fill: "none"
                  }
                ),
                /* @__PURE__ */ jsx4(
                  "circle",
                  {
                    className: `progress-path ${barClassName || ""}`,
                    cx: "50",
                    cy: "50",
                    r: "42",
                    stroke: color,
                    strokeWidth,
                    fill: "none",
                    strokeLinecap: "round",
                    strokeDasharray: `${validPercent * 2.64}, 264`
                  }
                )
              ]
            }
          ),
          renderProgressInfo()
        ] });
      case "dashboard":
        return /* @__PURE__ */ jsxs2(ProgressContainer, { type: "dashboard", className, style, ...rest, children: [
          /* @__PURE__ */ jsxs2(
            ProgressDashboard,
            {
              size,
              viewBox: "0 0 100 100",
              gapDegree,
              gapPosition,
              children: [
                /* @__PURE__ */ jsx4(
                  "circle",
                  {
                    className: `progress-trail ${trackClassName || ""}`,
                    cx: "50",
                    cy: "50",
                    r: "42",
                    stroke: trailColor,
                    strokeWidth,
                    fill: "none"
                  }
                ),
                /* @__PURE__ */ jsx4(
                  "circle",
                  {
                    className: `progress-path ${barClassName || ""}`,
                    cx: "50",
                    cy: "50",
                    r: "42",
                    stroke: color,
                    strokeWidth,
                    fill: "none",
                    strokeLinecap: "round",
                    strokeDasharray: `${validPercent * 2.64}, 264`
                  }
                )
              ]
            }
          ),
          renderProgressInfo()
        ] });
      default:
        return null;
    }
  };
  return renderProgress();
};

// src/components/spin/spin.tsx
var import_react60 = require("react");

// src/components/spin/spin.styles.ts
var spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
var dot1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;
var moveRightSmall = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(16px); }
`;
var moveRightDefault = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(24px); }
`;
var moveRightLarge = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(32px); }
`;
var dot3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;
var SpinContainer = newStyled.div`
  position: relative;
  display: inline-block;
  min-width: 80px;
  min-height: 40px;

  ${({ fullscreen }) => fullscreen && css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-width: 0;
    min-height: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(2px);
  `}
`;
var SpinMask = newStyled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
  z-index: 10;
`;
var SpinContent = newStyled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
var SpinIndicator = newStyled.div`
  display: inline-block;
`;
var SpinDot = newStyled.div`
  position: relative;
  display: inline-block;
  width: ${({ size }) => size === "small" ? "40px" : size === "large" ? "80px" : "60px"};
  height: ${({ size }) => size === "small" ? "20px" : size === "large" ? "40px" : "30px"};
`;
var SpinDotItem = newStyled.span`
  position: absolute;
  width: ${({ size }) => size === "small" ? "6px" : size === "large" ? "12px" : "9px"};
  height: ${({ size }) => size === "small" ? "6px" : size === "large" ? "12px" : "9px"};
  border-radius: 50%;
  background-color: currentColor;
  transform: scale(0);
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
  
  &:nth-of-type(1) {
    top: ${({ size }) => size === "small" ? "7px" : size === "large" ? "14px" : "10.5px"};
    left: 0;
    animation: ${dot1} 0.6s infinite;
  }
  
  &:nth-of-type(2) {
    top: ${({ size }) => size === "small" ? "7px" : size === "large" ? "14px" : "10.5px"};
    left: 0;
    animation: ${({ size }) => size === "small" ? moveRightSmall : size === "large" ? moveRightLarge : moveRightDefault} 0.6s infinite;
  }
  
  &:nth-of-type(3) {
    top: ${({ size }) => size === "small" ? "7px" : size === "large" ? "14px" : "10.5px"};
    left: ${({ size }) => size === "small" ? "16px" : size === "large" ? "32px" : "24px"};
    animation: ${({ size }) => size === "small" ? moveRightSmall : size === "large" ? moveRightLarge : moveRightDefault} 0.6s infinite;
  }
  
  &:nth-of-type(4) {
    top: ${({ size }) => size === "small" ? "7px" : size === "large" ? "14px" : "10.5px"};
    left: ${({ size }) => size === "small" ? "32px" : size === "large" ? "64px" : "48px"};
    animation: ${dot3} 0.6s infinite;
  }
`;
var SpinText = newStyled.div`
  margin-top: ${({ size }) => size === "small" ? "8px" : size === "large" ? "16px" : "12px"};
  color: rgba(0, 0, 0, 0.65);
  font-size: ${({ size }) => size === "small" ? "12px" : size === "large" ? "16px" : "14px"};
`;
var CustomSpinIcon = newStyled.div`
  display: inline-block;
  animation: ${spin} 1s infinite linear;
  font-size: ${({ size }) => size === "small" ? "16px" : size === "large" ? "32px" : "24px"};
  color: #1890ff;
  
  svg {
    display: block;
  }
`;

// src/components/spin/spin.tsx
var hasTextColorClass = (className) => {
  if (!className) return false;
  return /\btext-(?!(?:left|right|center|justify|start|end|wrap|nowrap|break|clip|ellipsis|xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl|opacity)\b)[\w-]+/.test(className);
};
var Spin = ({
  size = "default",
  tip,
  spinning = true,
  delay = 0,
  indicator,
  fullscreen = false,
  wrapperClassName = "",
  className = "",
  style,
  children
}) => {
  const [isSpinning, setIsSpinning] = (0, import_react60.useState)(false);
  const delayTimer = (0, import_react60.useRef)(null);
  (0, import_react60.useEffect)(() => {
    if (delay > 0) {
      if (delayTimer.current) {
        clearTimeout(delayTimer.current);
      }
      if (spinning) {
        delayTimer.current = setTimeout(() => {
          setIsSpinning(true);
        }, delay);
      } else {
        setIsSpinning(false);
      }
    } else {
      setIsSpinning(spinning);
    }
    return () => {
      if (delayTimer.current) {
        clearTimeout(delayTimer.current);
      }
    };
  }, [spinning, delay]);
  const renderIndicator = () => {
    if (indicator) {
      return indicator;
    }
    return /* @__PURE__ */ jsxs2(SpinDot, { size, children: [
      /* @__PURE__ */ jsx4(SpinDotItem, { size }),
      /* @__PURE__ */ jsx4(SpinDotItem, { size }),
      /* @__PURE__ */ jsx4(SpinDotItem, { size }),
      /* @__PURE__ */ jsx4(SpinDotItem, { size })
    ] });
  };
  const containerClass = [wrapperClassName, className].filter(Boolean).join(" ");
  const shouldApplyDefaultColor = (!style || !style.color) && !hasTextColorClass(containerClass);
  const finalStyle = shouldApplyDefaultColor ? { color: "#1890ff", ...style } : style;
  if (fullscreen) {
    return /* @__PURE__ */ jsx4(SpinContainer, { fullscreen: true, className: containerClass, style: finalStyle, children: isSpinning && /* @__PURE__ */ jsxs2(SpinContent, { children: [
      /* @__PURE__ */ jsx4(SpinIndicator, { children: renderIndicator() }),
      tip && /* @__PURE__ */ jsx4(SpinText, { size, children: tip })
    ] }) });
  }
  return /* @__PURE__ */ jsxs2(SpinContainer, { className: containerClass, style: finalStyle, children: [
    children,
    isSpinning && /* @__PURE__ */ jsxs2(Fragment5, { children: [
      /* @__PURE__ */ jsx4(SpinMask, {}),
      /* @__PURE__ */ jsxs2(SpinContent, { children: [
        /* @__PURE__ */ jsx4(SpinIndicator, { children: renderIndicator() }),
        tip && /* @__PURE__ */ jsx4(SpinText, { size, children: tip })
      ] })
    ] })
  ] });
};

// src/components/drawer/drawer.tsx
var import_react62 = require("react");
var import_react_dom = __toESM(require("react-dom"));

// src/components/drawer/drawer.styles.ts
var DrawerMask = newStyled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  
  &.open {
    opacity: 1;
    pointer-events: all;
  }

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;
var DrawerWrapper = newStyled.div`
  position: fixed;
  background-color: white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, visibility 0.3s ease;
  visibility: hidden;
  
  // 根据位置设置初始位置和动画方向
  ${({ placement }) => {
  switch (placement) {
    case "left":
      return css`
          top: 0;
          left: 0;
          bottom: 0;
          transform: translateX(-100%);
          &.open {
            transform: translateX(0);
            visibility: visible;
          }
        `;
    case "right":
      return css`
          top: 0;
          right: 0;
          bottom: 0;
          transform: translateX(100%);
          &.open {
            transform: translateX(0);
            visibility: visible;
          }
        `;
    case "top":
      return css`
          top: 0;
          left: 0;
          right: 0;
          transform: translateY(-100%);
          &.open {
            transform: translateY(0);
            visibility: visible;
          }
        `;
    case "bottom":
      return css`
          bottom: 0;
          left: 0;
          right: 0;
          transform: translateY(100%);
          &.open {
            transform: translateY(0);
            visibility: visible;
          }
        `;
    default:
      return css`
          top: 0;
          right: 0;
          bottom: 0;
          transform: translateX(100%);
          &.open {
            transform: translateX(0);
            visibility: visible;
          }
        `;
  }
}}

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;
var DrawerHeader = newStyled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom:1px solid rgba(0, 0, 0, 0.08);
  font-size: 16px;
  font-weight: 500;

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;
var DrawerTitle = newStyled.div`
  flex: 1;
  margin: 0;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;
var DrawerClose = newStyled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  padding: 0;
  margin-left: 8px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.45);
  transition: color 0.3s;
  border-radius: 4px;
  
  &:hover {
    color: rgba(0, 0, 0, 0.75);
    background-color: rgba(0, 0, 0, 0.03);
  }
  
  svg {
    display: block;
  }

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;
var DrawerBody = newStyled.div`
  flex: 1;
  padding: 24px;
  overflow: auto;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;
var DrawerFooter = newStyled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px 24px;
  border-top:1px solid rgba(0, 0, 0, 0.08);
  gap: 8px;
  
  button + button {
    margin-left: 8px;
  }

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;

// src/components/drawer/drawer.tsx
var Drawer = ({
  title,
  children,
  footer,
  open,
  onClose,
  placement = "right",
  width = 378,
  height = 378,
  closable = true,
  maskClosable = true,
  mask = true,
  destroyOnClose = false,
  className = "",
  maskClassName = "",
  headerClassName = "",
  titleClassName = "",
  bodyClassName = "",
  footerClassName = "",
  style,
  zIndex = 1e3
}) => {
  const [isOpen, setIsOpen] = (0, import_react62.useState)(open);
  const [isMounted, setIsMounted] = (0, import_react62.useState)(open);
  const drawerRef = (0, import_react62.useRef)(null);
  const handleTransitionEnd = (0, import_react62.useCallback)(() => {
    if (!open && destroyOnClose) {
      setIsMounted(false);
    }
  }, [open, destroyOnClose]);
  const handleMaskClick = (0, import_react62.useCallback)(() => {
    if (maskClosable && onClose) {
      onClose();
    }
  }, [maskClosable, onClose]);
  const handleClose = (0, import_react62.useCallback)(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);
  (0, import_react62.useEffect)(() => {
    if (open) {
      setIsMounted(true);
      requestAnimationFrame(() => setIsOpen(true));
      document.body.style.overflowX = "hidden";
    } else {
      setIsOpen(false);
      document.body.style.overflow = "";
    }
  }, [open]);
  (0, import_react62.useEffect)(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && open && onClose) {
        onClose();
      }
    };
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);
  const getDrawerSize = () => {
    if (placement === "left" || placement === "right") {
      return {
        width: typeof width === "number" ? `${width}px` : width,
        height: "100%"
      };
    }
    return {
      width: "100%",
      height: typeof height === "number" ? `${height}px` : height
    };
  };
  const renderDrawer = () => {
    if (!isMounted && destroyOnClose) return null;
    const drawerSize = getDrawerSize();
    return /* @__PURE__ */ jsxs2(
      DrawerWrapper,
      {
        ref: drawerRef,
        className: `${className} ${isOpen ? "open" : ""}`,
        placement,
        style: {
          ...drawerSize,
          ...style,
          zIndex: zIndex + 1
        },
        onTransitionEnd: handleTransitionEnd,
        children: [
          /* @__PURE__ */ jsxs2(DrawerHeader, { className: headerClassName, children: [
            /* @__PURE__ */ jsx4(DrawerTitle, { className: titleClassName, children: title }),
            closable && /* @__PURE__ */ jsx4(DrawerClose, { onClick: handleClose, children: /* @__PURE__ */ jsx4("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ jsx4("path", { d: "M13 1L1 13M1 1L13 13", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) })
          ] }),
          /* @__PURE__ */ jsx4(DrawerBody, { className: bodyClassName, children }),
          footer && /* @__PURE__ */ jsx4(DrawerFooter, { className: footerClassName, children: footer })
        ]
      },
      placement
    );
  };
  return import_react_dom.default.createPortal(
    /* @__PURE__ */ jsxs2(Fragment5, { children: [
      mask && isMounted && /* @__PURE__ */ jsx4(
        DrawerMask,
        {
          className: `${maskClassName} ${isOpen ? "open" : ""}`,
          onClick: handleMaskClick,
          style: { zIndex }
        }
      ),
      renderDrawer()
    ] }),
    document.body
  );
};

// src/components/tooltip/tooltip.tsx
var import_react64 = require("react");
var import_react_dom2 = __toESM(require("react-dom"));

// src/components/tooltip/tooltip.styles.ts
var TooltipContent = newStyled.div`
  position: absolute;
  padding: 6px 8px;
  border-radius: 2px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 
              0 6px 16px 0 rgba(0, 0, 0, 0.08),
              0 9px 28px 8px rgba(0, 0, 0, 0.05);
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  z-index: 1000;
  animation: fadeIn 0.15s ease-in-out;
  pointer-events: none;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .tooltip-inner {
    max-width: 100%;
    overflow-wrap: break-word;
    color: inherit;
  }
  
  ${({ placement }) => {
  if (placement.startsWith("top")) {
    return css`
        transform-origin: bottom center;
        animation: fadeInTop 0.15s ease-in-out;
        
        @keyframes fadeInTop {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `;
  }
  if (placement.startsWith("bottom")) {
    return css`
        transform-origin: top center;
        animation: fadeInBottom 0.15s ease-in-out;
        
        @keyframes fadeInBottom {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `;
  }
  if (placement.startsWith("left")) {
    return css`
        transform-origin: right center;
        animation: fadeInLeft 0.15s ease-in-out;
        
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(10px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `;
  }
  if (placement.startsWith("right")) {
    return css`
        transform-origin: left center;
        animation: fadeInRight 0.15s ease-in-out;
        
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `;
  }
  return css``;
}}
`;
var TooltipArrow = newStyled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: ${({ backgroundColor }) => backgroundColor};
  transform: rotate(45deg);
  
  ${({ placement }) => {
  switch (placement) {
    case "top":
    case "topLeft":
    case "topRight":
      return css`
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
        `;
    case "bottom":
    case "bottomLeft":
    case "bottomRight":
      return css`
          top: -4px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
        `;
    case "left":
    case "leftTop":
    case "leftBottom":
      return css`
          top: 50%;
          right: -4px;
          transform: translateY(-50%) rotate(45deg);
        `;
    case "right":
    case "rightTop":
    case "rightBottom":
      return css`
          top: 50%;
          left: -4px;
          transform: translateY(-50%) rotate(45deg);
        `;
    default:
      return css`
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
        `;
  }
}}
`;

// src/components/tooltip/tooltip.tsx
var mergeRefs = (...refs) => {
  return (node2) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(node2);
      } else if (ref && typeof ref === "object") {
        ref.current = node2;
      }
    });
  };
};
var Tooltip = ({
  title,
  children,
  placement = "top",
  color = "#fff",
  backgroundColor = "rgba(0, 0, 0, 0.85)",
  delay = 100,
  trigger = "hover",
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  className = "",
  overlayStyle: overlayStyle2,
  style,
  // We'll treat this as overlayStyle if overlayStyle is not provided
  arrow = true,
  disabled = false,
  zIndex = 1e3,
  maxWidth = 250,
  offset = 8,
  textColor
}) => {
  const [isOpen, setIsOpen] = (0, import_react64.useState)(defaultOpen);
  const [calculatedPosition, setCalculatedPosition] = (0, import_react64.useState)({ top: 0, left: 0 });
  const triggerRef = (0, import_react64.useRef)(null);
  const tooltipRef = (0, import_react64.useRef)(null);
  const timeoutRef = (0, import_react64.useRef)(null);
  const presetColors2 = {
    pink: "#eb2f96",
    red: "#f5222d",
    yellow: "#fadb14",
    orange: "#fa8c16",
    cyan: "#13c2c2",
    green: "#52c41a",
    blue: "#1890ff",
    purple: "#722ed1",
    geekblue: "#2f54eb",
    magenta: "#eb2f96",
    volcano: "#fa541c",
    gold: "#faad14",
    lime: "#a0d911"
  };
  const finalBackgroundColor = presetColors2[backgroundColor] || backgroundColor;
  const finalColor = textColor || color;
  const open = controlledOpen !== void 0 ? controlledOpen : isOpen;
  const calculatePosition = (0, import_react64.useCallback)(() => {
    if (!triggerRef.current || !tooltipRef.current) return;
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollX = window.scrollX || window.pageXOffset;
    let top = 0;
    let left = 0;
    const baseTop = triggerRect.top + scrollY;
    const baseLeft = triggerRect.left + scrollX;
    const triggerWidth = triggerRect.width;
    const triggerHeight = triggerRect.height;
    const tooltipWidth = tooltipRect.width;
    const tooltipHeight = tooltipRect.height;
    switch (placement) {
      case "top":
        top = baseTop - tooltipHeight - offset;
        left = baseLeft + triggerWidth / 2 - tooltipWidth / 2;
        break;
      case "topLeft":
        top = baseTop - tooltipHeight - offset;
        left = baseLeft;
        break;
      case "topRight":
        top = baseTop - tooltipHeight - offset;
        left = baseLeft + triggerWidth - tooltipWidth;
        break;
      case "bottom":
        top = baseTop + triggerHeight + offset;
        left = baseLeft + triggerWidth / 2 - tooltipWidth / 2;
        break;
      case "bottomLeft":
        top = baseTop + triggerHeight + offset;
        left = baseLeft;
        break;
      case "bottomRight":
        top = baseTop + triggerHeight + offset;
        left = baseLeft + triggerWidth - tooltipWidth;
        break;
      case "left":
        top = baseTop + triggerHeight / 2 - tooltipHeight / 2;
        left = baseLeft - tooltipWidth - offset;
        break;
      case "leftTop":
        top = baseTop;
        left = baseLeft - tooltipWidth - offset;
        break;
      case "leftBottom":
        top = baseTop + triggerHeight - tooltipHeight;
        left = baseLeft - tooltipWidth - offset;
        break;
      case "right":
        top = baseTop + triggerHeight / 2 - tooltipHeight / 2;
        left = baseLeft + triggerWidth + offset;
        break;
      case "rightTop":
        top = baseTop;
        left = baseLeft + triggerWidth + offset;
        break;
      case "rightBottom":
        top = baseTop + triggerHeight - tooltipHeight;
        left = baseLeft + triggerWidth + offset;
        break;
      default:
        top = baseTop - tooltipHeight - offset;
        left = baseLeft + triggerWidth / 2 - tooltipWidth / 2;
    }
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    if (left + tooltipWidth > viewportWidth + scrollX) {
      left = viewportWidth + scrollX - tooltipWidth - 5;
    }
    if (left < scrollX) {
      left = scrollX + 5;
    }
    if (top + tooltipHeight > viewportHeight + scrollY) {
      top = viewportHeight + scrollY - tooltipHeight - 5;
    }
    if (top < scrollY) {
      top = scrollY + 5;
    }
    setCalculatedPosition({ top, left });
  }, [placement, offset]);
  const openTooltip = (0, import_react64.useCallback)(() => {
    if (disabled) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsOpen(true);
      onOpenChange?.(true);
    }, delay);
  }, [delay, disabled, onOpenChange]);
  const closeTooltip = (0, import_react64.useCallback)(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(false);
    onOpenChange?.(false);
  }, [onOpenChange]);
  const handleMouseEnter = (0, import_react64.useCallback)(() => {
    if (trigger === "hover") {
      openTooltip();
    }
  }, [trigger, openTooltip]);
  const handleMouseLeave = (0, import_react64.useCallback)(() => {
    if (trigger === "hover") {
      closeTooltip();
    }
  }, [trigger, closeTooltip]);
  const handleClick = (0, import_react64.useCallback)(() => {
    if (trigger === "click") {
      open ? closeTooltip() : openTooltip();
    }
  }, [trigger, open, openTooltip, closeTooltip]);
  const handleFocus = (0, import_react64.useCallback)(() => {
    if (trigger === "focus") {
      openTooltip();
    }
  }, [trigger, openTooltip]);
  const handleBlur = (0, import_react64.useCallback)(() => {
    if (trigger === "focus") {
      closeTooltip();
    }
  }, [trigger, closeTooltip]);
  (0, import_react64.useEffect)(() => {
    const handleClickOutside = (event) => {
      if (trigger === "click" && open && tooltipRef.current && !tooltipRef.current.contains(event.target) && triggerRef.current && !triggerRef.current.contains(event.target)) {
        closeTooltip();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, trigger, closeTooltip]);
  (0, import_react64.useEffect)(() => {
    if (open) {
      calculatePosition();
      const handleResize = () => calculatePosition();
      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleResize, true);
      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleResize, true);
      };
    }
  }, [open, calculatePosition]);
  const renderTooltipContent = () => {
    if (!open) return null;
    const finalStyle = {
      ...calculatedPosition,
      backgroundColor: finalBackgroundColor,
      color: finalColor,
      maxWidth,
      zIndex,
      ...overlayStyle2 || style
    };
    return /* @__PURE__ */ jsxs2(
      TooltipContent,
      {
        ref: tooltipRef,
        className: `solid-tooltip ${className}`,
        style: finalStyle,
        placement,
        role: "tooltip",
        children: [
          /* @__PURE__ */ jsx4("div", { className: "tooltip-inner", children: title }),
          arrow && /* @__PURE__ */ jsx4(
            TooltipArrow,
            {
              backgroundColor: finalBackgroundColor,
              placement
            }
          )
        ]
      }
    );
  };
  const refProp = {
    ref: mergeRefs(
      triggerRef,
      children.ref
    )
  };
  const enhancedChild = (0, import_react64.cloneElement)(children, {
    ...refProp,
    onMouseEnter: (e) => {
      handleMouseEnter();
      children.props.onMouseEnter?.(e);
    },
    onMouseLeave: (e) => {
      handleMouseLeave();
      children.props.onMouseLeave?.(e);
    },
    onClick: (e) => {
      handleClick();
      children.props.onClick?.(e);
    },
    onFocus: (e) => {
      handleFocus();
      children.props.onFocus?.(e);
    },
    onBlur: (e) => {
      handleBlur();
      children.props.onBlur?.(e);
    },
    "aria-describedby": open ? "tooltip-content" : void 0
  });
  return /* @__PURE__ */ jsxs2(Fragment5, { children: [
    enhancedChild,
    import_react_dom2.default.createPortal(
      renderTooltipContent(),
      document.body
    )
  ] });
};

// src/components/tag/tag.tsx
var import_react66 = __toESM(require("react"));

// src/components/tag/tag.styles.ts
var presetColors = {
  default: {
    bg: "#f5f5f5",
    border: "#d9d9d9",
    text: "rgba(0, 0, 0, 0.85)",
    hover: "#d9d9d9"
  },
  primary: {
    bg: "#e6f4ff",
    border: "#91caff",
    text: "#1677ff",
    hover: "#bae0ff"
  },
  success: {
    bg: "#f6ffed",
    border: "#b7eb8f",
    text: "#52c41a",
    hover: "#d9f7be"
  },
  warning: {
    bg: "#fffbe6",
    border: "#ffe58f",
    text: "#faad14",
    hover: "#fff1b8"
  },
  error: {
    bg: "#fff2f0",
    border: "#ffccc7",
    text: "#ff4d4f",
    hover: "#ffccc7"
  },
  processing: {
    bg: "#f0f5ff",
    border: "#adc6ff",
    text: "#2f54eb",
    hover: "#d6e4ff"
  },
  magenta: { bg: "#fff0f6", border: "#ffadd2", text: "#eb2f96", hover: "#ffadd2" },
  red: { bg: "#fff1f0", border: "#ffa39e", text: "#f5222d", hover: "#ffa39e" },
  volcano: { bg: "#fff2e8", border: "#ffbb96", text: "#fa541c", hover: "#ffbb96" },
  orange: { bg: "#fff7e6", border: "#ffd591", text: "#fa8c16", hover: "#ffd591" },
  gold: { bg: "#fffbe6", border: "#ffe58f", text: "#faad14", hover: "#ffe58f" },
  lime: { bg: "#fcffe6", border: "#eaff8f", text: "#a0d911", hover: "#eaff8f" },
  green: { bg: "#f6ffed", border: "#b7eb8f", text: "#52c41a", hover: "#b7eb8f" },
  cyan: { bg: "#e6fffb", border: "#87e8de", text: "#13c2c2", hover: "#87e8de" },
  blue: { bg: "#e6f7ff", border: "#91d5ff", text: "#1890ff", hover: "#91d5ff" },
  geekblue: { bg: "#f0f5ff", border: "#85a5ff", text: "#2f54eb", hover: "#85a5ff" },
  purple: { bg: "#f9f0ff", border: "#d3adf7", text: "#722ed1", hover: "#d3adf7" }
};
var getColorConfig = (color) => {
  if (presetColors[color]) {
    return presetColors[color];
  }
  return {
    bg: `${color}10`,
    border: `${color}30`,
    text: `${color}80`,
    hover: `${color}20`
  };
};
var sizeConfig = {
  small: {
    padding: "0 7px",
    fontSize: "12px",
    height: "24px"
  },
  medium: {
    padding: "0 12px",
    fontSize: "14px",
    height: "32px"
  },
  large: {
    padding: "0 16px",
    fontSize: "16px",
    height: "40px"
  }
};
var shapeConfig = {
  square: css`
    border-radius: 0;
  `,
  round: css`
    border-radius: 100px;
  `,
  rounded: css`
    border-radius: 4px;
  `
};
var TagContainer = newStyled.span`
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.5715;
  cursor: ${({ checkable }) => checkable ? "pointer" : "default"};
  opacity: ${({ checked }) => checked ? 1 : 0.85};
  transition: all 0.2s ease;
  
  // 尺寸样式
  ${({ size }) => sizeConfig[size]}
  
  // 形状样式
  ${({ shape }) => shapeConfig[shape]}
  
  // 颜色样式
  ${({ color, bordered, checked }) => {
  const colorConfig = getColorConfig(color);
  return css`
      background-color: ${checked ? colorConfig.bg : "transparent"};
      border: ${bordered ? `1px solid ${colorConfig.border}` : "none"};
      color: ${colorConfig.text};
      
      &:hover {
        background-color: ${checked ? colorConfig.hover : "transparent"};
      }
      
      &:active {
        opacity: 0.8;
      }
    `;
}}
  
  // 可选中标签的选中状态
  ${({ checkable, checked }) => checkable && checked && css`
    // Removed arrow style as per user request
  `}
`;
var TagText = newStyled.span`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
var TagIcon = newStyled.span`
  display: inline-flex;
  margin-right: 6px;
  font-size: inherit;
  
  svg {
    display: block;
  }
`;
var TagCloseIcon = newStyled.span`
  display: inline-flex;
  margin-left: 6px;
  font-size: inherit;
  cursor: pointer;
  transition: color 0.2s;
  
  &:hover {
    color: rgba(0, 0, 0, 0.75);
  }
  
  svg {
    display: block;
  }
`;
var TagCheckIcon = newStyled.span`
  display: inline-flex;
  margin-right: 4px;
  font-size: inherit;
  
  svg {
    display: block;
  }
`;

// src/components/tag/tag.tsx
var Tag = import_react66.default.forwardRef(({
  children,
  color = "default",
  size = "medium",
  shape = "rounded",
  closable = false,
  onClose,
  closeIcon,
  icon,
  bordered = true,
  checkable = false,
  checked: controlledChecked,
  defaultChecked = false,
  onChange,
  style,
  className = "",
  ...props
}, ref) => {
  const [internalChecked, setInternalChecked] = (0, import_react66.useState)(defaultChecked);
  const [visible, setVisible] = (0, import_react66.useState)(true);
  const isChecked = controlledChecked !== void 0 ? controlledChecked : internalChecked;
  const handleClose = (0, import_react66.useCallback)((e) => {
    e.stopPropagation();
    if (onClose) {
      onClose(e);
    }
    if (!("visible" in props)) {
      setVisible(false);
    }
  }, [onClose, props]);
  const handleClick = (0, import_react66.useCallback)((e) => {
    if (checkable) {
      const newChecked = !isChecked;
      if (controlledChecked === void 0) {
        setInternalChecked(newChecked);
      }
      if (onChange) {
        onChange(newChecked);
      }
    }
    if (props.onClick) {
      props.onClick(e);
    }
  }, [checkable, isChecked, controlledChecked, onChange, props.onClick]);
  if (!visible) {
    return null;
  }
  const renderCloseIcon = closable && /* @__PURE__ */ jsx4(TagCloseIcon, { onClick: handleClose, children: closeIcon || /* @__PURE__ */ jsx4("svg", { width: "12", height: "12", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ jsx4("path", { d: "M13 1L1 13M1 1L13 13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) }) });
  const renderCheckIcon = checkable && isChecked && /* @__PURE__ */ jsx4(TagCheckIcon, { children: /* @__PURE__ */ jsx4("svg", { width: "12", height: "12", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ jsx4("path", { d: "M11 4L5.5 11L3 8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) });
  const renderIcon = icon && /* @__PURE__ */ jsx4(TagIcon, { children: icon });
  return /* @__PURE__ */ jsxs2(
    TagContainer,
    {
      ref,
      className: `${className} ${isChecked ? "checked" : ""}`,
      color,
      size,
      shape,
      bordered,
      checkable,
      checked: isChecked,
      onClick: handleClick,
      style,
      ...props,
      children: [
        renderCheckIcon,
        renderIcon,
        /* @__PURE__ */ jsx4(TagText, { children }),
        renderCloseIcon
      ]
    }
  );
});
Tag.displayName = "Tag";
var TagGroup = ({
  children,
  style,
  className = ""
}) => {
  return /* @__PURE__ */ jsx4(
    "div",
    {
      className: `tag-group ${className}`,
      style: { display: "flex", flexWrap: "wrap", gap: 8, ...style },
      children
    }
  );
};

// src/components/list/list.tsx
var import_react68 = require("react");

// src/components/list/list.styles.ts
var spin2 = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
var getVariantStyles2 = (theme2, variant = "outlined") => {
  switch (variant) {
    case "borderless":
      return css`
        border: none;
        box-shadow: none;
        background: transparent;
      `;
    case "elevated":
      return css`
        border: none;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      `;
    case "filled":
      return css`
        border: none;
        box-shadow: none;
        background-color: ${getColor(theme2, "gray100")};
      `;
    case "outlined":
    default:
      return css`
        border: 1px solid ${getColor(theme2, "gray200")};
        box-shadow: none;
      `;
  }
};
var ListContainer = newStyled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 6px;
  background-color: #fff;
  transition: all 0.3s;
  
  ${({ theme: theme2, variant }) => getVariantStyles2(theme2, variant)}
`;
var ListWrapper = newStyled.div`
  position: relative;
  overflow-y: ${({ virtualScroll }) => virtualScroll ? "auto" : "visible"};
  flex: 1;
  -webkit-overflow-scrolling: touch;
`;
var ListContent = newStyled.div`
  position: relative;
  min-height: 100px;
  
  ${({ virtualScroll }) => virtualScroll && css`
    overflow: hidden;
  `}
`;
var ListHeader = newStyled.div`
  padding: 16px;
  background-color: #fafafa;
  border-bottom: 1px solid #e8e8e8;
  font-weight: 500;
`;
var ListFooter = newStyled.div`
  padding: 16px;
  background-color: #fafafa;
  border-top: 1px solid #e8e8e8;
`;
var ListLoading = newStyled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 10;
  
  .loading-spinner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  
  .spinner {
    width: 24px;
    height: 24px;
    border: 3px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top-color: #1890ff;
    animation: ${spin2} 1s ease-in-out infinite;
  }
  
  .loading-text {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
  }
`;
var ListEmpty = newStyled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 40px 0;
  color: rgba(0, 0, 0, 0.25);
  
  .empty-content {
    text-align: center;
    max-width: 300px;
  }
  
  .empty-text {
    margin-top: 16px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
  }
`;
var Pagination2 = newStyled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-top: 1px solid #e8e8e8;
  
  button {
    min-width: 32px;
    height: 32px;
    margin: 0 4px;
    padding: 0 8px;
    border: 1px solid #d9d9d9;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
    
    &:hover:not(:disabled) {
      color: #1890ff;
      border-color: #1890ff;
    }
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    &.active {
      color: #fff;
      background-color: #1890ff;
      border-color: #1890ff;
    }
  }
  
  .ellipsis {
    margin: 0 8px;
  }
  
  .pagination-info {
    margin-left: 16px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
  }
`;
var ListItemContainer = newStyled.div`
  display: flex;
  padding: 16px;
  transition: all 0.3s;
  border-bottom: ${({ bordered, theme: theme2 }) => bordered ? `1px solid ${getColor(theme2, "gray200")}` : "none"};
  background-color: ${({ theme: theme2 }) => getColor(theme2, "white")};
  
  ${({ hoverable, theme: theme2 }) => hoverable && css`
    &:hover {
      background-color: ${getColor(theme2, "gray100")};
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      transform: translateY(-1px);
    }
  `}
`;
var ListItemAvatar = newStyled.div`
  margin-right: 16px;
  
  > * {
    display: block;
  }
`;
var ListItemContent = newStyled.div`
  flex: 1;
  min-width: 0;
`;
var ListItemTitle = newStyled.div`
  margin-bottom: 4px;
  color: ${({ theme: theme2 }) => getColor(theme2, "gray900")};
  font-weight: 500;
  font-size: 16px;
`;
var ListItemDescription = newStyled.div`
  color: ${({ theme: theme2 }) => getColor(theme2, "gray500")};
  font-size: 14px;
`;
var ListItemExtra = newStyled.div`
  margin-left: 48px;
  color: ${({ theme: theme2 }) => getColor(theme2, "gray500")};
  font-size: 14px;
`;
var ListItemActions = newStyled.div`
  display: flex;
  margin-top: 12px;
  gap: 8px;
  
  > * {
    cursor: pointer;
    color: ${({ theme: theme2 }) => getColor(theme2, "gray500")};
    transition: color 0.3s;
    
    &:hover {
      color: ${({ theme: theme2 }) => getColor(theme2, "gray900")};
    }
  }
`;
var paginationStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  gap: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  
  .pagination-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 32px;
    height: 32px;
    padding: 0 8px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    background: #fff;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 1;
    cursor: pointer;
    transition: all 0.3s;
    
    &:hover {
      color: #1890ff;
      border-color: #1890ff;
    }
    
    &:disabled {
      color: rgba(0, 0, 0, 0.25);
      background-color: #f5f5f5;
      border-color: #d9d9d9;
      cursor: not-allowed;
    }
    
    &.active {
      color: #fff;
      background: #1890ff;
      border-color: #1890ff;
      font-weight: 500;
      cursor: default;
      
      &:hover {
        background: #40a9ff;
        border-color: #40a9ff;
      }
    }
  }
  
  .pagination-ellipsis {
    display: inline-flex;
    align-items: center;
    height: 32px;
    padding: 0 8px;
    color: rgba(0, 0, 0, 0.45);
  }
  
  .pagination-info {
    margin-left: 16px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
  }
`;
var loadingOverlayStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 10;
  backdrop-filter: blur(2px);
`;

// src/components/list/list.tsx
function List({
  data = [],
  renderItem,
  keyExtractor = (_, index) => index.toString(),
  header,
  footer,
  loading = false,
  loadingText = "\u52A0\u8F7D\u4E2D...",
  emptyText = "\u6682\u65E0\u6570\u636E",
  emptyComponent,
  layout = "vertical",
  gridColumns = 3,
  itemSize = 50,
  virtualScroll = false,
  virtualBuffer = 5,
  pagination,
  onScroll,
  onReachEnd,
  style,
  className,
  scrollToIndex,
  itemSpacing = 8,
  height = "auto",
  width = "100%",
  variant = "outlined"
}) {
  const containerRef = (0, import_react68.useRef)(null);
  const contentRef = (0, import_react68.useRef)(null);
  const [visibleRange, setVisibleRange] = (0, import_react68.useState)({ start: 0, end: 0 });
  const [dimensions, setDimensions] = (0, import_react68.useState)({ width: 0, height: 0 });
  const calculateVisibleRange = (0, import_react68.useCallback)(() => {
    if (!containerRef.current || !virtualScroll || data.length === 0) {
      return { start: 0, end: data.length - 1 };
    }
    const scrollTop = containerRef.current.scrollTop;
    const start = Math.max(0, Math.floor(scrollTop / itemSize) - virtualBuffer);
    const visibleItems = Math.ceil(dimensions.height / itemSize) + virtualBuffer * 2;
    const end = Math.min(data.length - 1, start + visibleItems);
    return { start, end };
  }, [data.length, dimensions.height, itemSize, virtualBuffer, virtualScroll]);
  (0, import_react68.useEffect)(() => {
    if (!containerRef.current || !virtualScroll) return;
    const newRange = calculateVisibleRange();
    setVisibleRange(newRange);
  }, [calculateVisibleRange, virtualScroll]);
  const handleScroll = (0, import_react68.useCallback)(() => {
    if (!containerRef.current) return;
    const scrollTop = containerRef.current.scrollTop;
    onScroll?.(scrollTop);
    if (containerRef.current.scrollHeight - scrollTop <= containerRef.current.clientHeight + 50) {
      onReachEnd?.();
    }
    if (virtualScroll) {
      const newRange = calculateVisibleRange();
      setVisibleRange(newRange);
    }
  }, [calculateVisibleRange, onReachEnd, onScroll, virtualScroll]);
  (0, import_react68.useEffect)(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  (0, import_react68.useEffect)(() => {
    if (scrollToIndex !== void 0 && containerRef.current) {
      const scrollPosition = scrollToIndex * itemSize;
      containerRef.current.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    }
  }, [scrollToIndex, itemSize]);
  const renderContent = () => {
    if (data.length === 0 && !loading) {
      return emptyComponent || /* @__PURE__ */ jsx4(ListEmpty, { children: /* @__PURE__ */ jsxs2("div", { className: "empty-content", children: [
        /* @__PURE__ */ jsx4("svg", { width: "64", height: "41", viewBox: "0 0 64 41", children: /* @__PURE__ */ jsxs2("g", { transform: "translate(0 1)", fill: "none", fillRule: "evenodd", children: [
          /* @__PURE__ */ jsx4("ellipse", { fill: "#F5F5F5", cx: "32", cy: "33", rx: "32", ry: "7" }),
          /* @__PURE__ */ jsxs2("g", { fillRule: "nonzero", stroke: "#D9D9D9", children: [
            /* @__PURE__ */ jsx4("path", { d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" }),
            /* @__PURE__ */ jsx4("path", { d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z", fill: "#FAFAFA" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx4("div", { className: "empty-text", children: emptyText })
      ] }) });
    }
    if (virtualScroll && data.length > 0) {
      const { start, end } = visibleRange;
      const visibleData = data.slice(start, end + 1);
      return /* @__PURE__ */ jsx4(
        "div",
        {
          className: "virtual-scroll-container",
          style: {
            height: `${data.length * itemSize}px`,
            position: "relative"
          },
          children: visibleData.map((item, index) => {
            const actualIndex = start + index;
            return /* @__PURE__ */ jsx4(
              "div",
              {
                style: {
                  position: "absolute",
                  top: `${actualIndex * itemSize}px`,
                  width: "100%",
                  height: `${itemSize}px`
                },
                children: renderItem(item, actualIndex)
              },
              keyExtractor(item, actualIndex)
            );
          })
        }
      );
    }
    return data.map((item, index) => /* @__PURE__ */ jsx4("div", { children: renderItem(item, index) }, keyExtractor(item, index)));
  };
  const getLayoutStyle = () => {
    switch (layout) {
      case "horizontal":
        return {
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          overflowX: "auto",
          paddingBottom: "10px"
        };
      case "grid":
        return {
          display: "grid",
          gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
          gap: `${itemSpacing}px`
        };
      default:
        return {
          display: "flex",
          flexDirection: "column",
          gap: `${itemSpacing}px`
        };
    }
  };
  const renderPagination = () => {
    if (!pagination) return null;
    const { current, pageSize, total } = pagination;
    const totalPages = Math.ceil(total / pageSize);
    if (totalPages <= 1) return null;
    const handlePageChange = (page) => {
      if (page >= 1 && page <= totalPages && page !== current) {
        pagination.onChange(page, pageSize);
      }
    };
    return /* @__PURE__ */ jsxs2("div", { css: paginationStyles, children: [
      /* @__PURE__ */ jsx4(
        "button",
        {
          className: "pagination-button",
          onClick: () => handlePageChange(current - 1),
          disabled: current <= 1,
          children: "<"
        }
      ),
      Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
        let page = i + 1;
        if (current > 3 && totalPages > 5) {
          if (current > totalPages - 3) {
            page = totalPages - 4 + i;
          } else {
            page = Math.max(1, Math.min(totalPages - 4, current - 2)) + i;
          }
        }
        return /* @__PURE__ */ jsx4(
          "button",
          {
            className: `pagination-button ${current === page ? "active" : ""}`,
            onClick: () => handlePageChange(page),
            children: page
          },
          page
        );
      }),
      totalPages > 5 && current < totalPages - 2 && /* @__PURE__ */ jsx4("span", { className: "pagination-ellipsis", children: "..." }),
      totalPages > 5 && current < totalPages - 2 && /* @__PURE__ */ jsx4(
        "button",
        {
          className: `pagination-button ${current === totalPages ? "active" : ""}`,
          onClick: () => handlePageChange(totalPages),
          children: totalPages
        }
      ),
      /* @__PURE__ */ jsx4(
        "button",
        {
          className: "pagination-button",
          onClick: () => handlePageChange(current + 1),
          disabled: current >= totalPages,
          children: ">"
        }
      ),
      /* @__PURE__ */ jsxs2("div", { className: "pagination-info", children: [
        "\u7B2C ",
        current,
        " \u9875 / \u5171 ",
        totalPages,
        " \u9875"
      ] })
    ] });
  };
  return /* @__PURE__ */ jsxs2(
    ListContainer,
    {
      style: { height, width, ...style },
      className: `solid-list ${className || ""}`,
      variant,
      children: [
        header && /* @__PURE__ */ jsx4(ListHeader, { children: header }),
        /* @__PURE__ */ jsxs2(
          ListWrapper,
          {
            ref: containerRef,
            onScroll: handleScroll,
            virtualScroll,
            style: { position: "relative" },
            children: [
              /* @__PURE__ */ jsx4(
                ListContent,
                {
                  ref: contentRef,
                  style: getLayoutStyle(),
                  layout,
                  virtualScroll,
                  children: renderContent()
                }
              ),
              loading && /* @__PURE__ */ jsx4("div", { css: loadingOverlayStyles, children: /* @__PURE__ */ jsx4(ListLoading, { children: /* @__PURE__ */ jsxs2("div", { className: "loading-spinner", children: [
                /* @__PURE__ */ jsx4("div", { className: "spinner" }),
                /* @__PURE__ */ jsx4("div", { className: "loading-text", children: loadingText })
              ] }) }) })
            ]
          }
        ),
        footer && /* @__PURE__ */ jsx4(ListFooter, { children: footer }),
        pagination && renderPagination()
      ]
    }
  );
}

// src/components/list/list-item.tsx
var import_react69 = require("react");
var ListItem = ({
  children,
  onClick,
  style,
  className,
  avatar,
  title,
  description,
  extra,
  actions = [],
  bordered = true,
  hoverable = false
}) => {
  const renderContent = () => {
    if (children) {
      return children;
    }
    return /* @__PURE__ */ jsxs2(Fragment5, { children: [
      avatar && /* @__PURE__ */ jsx4(ListItemAvatar, { children: avatar }),
      /* @__PURE__ */ jsxs2(ListItemContent, { children: [
        title && /* @__PURE__ */ jsx4(ListItemTitle, { children: title }),
        description && /* @__PURE__ */ jsx4(ListItemDescription, { children: description }),
        actions.length > 0 && /* @__PURE__ */ jsx4(ListItemActions, { children: actions.map((action, index) => /* @__PURE__ */ jsx4("span", { children: action }, index)) })
      ] }),
      extra && /* @__PURE__ */ jsx4(ListItemExtra, { children: extra })
    ] });
  };
  return /* @__PURE__ */ jsx4(
    ListItemContainer,
    {
      className: `solid-list-item ${className || ""}`,
      onClick,
      bordered,
      hoverable,
      style,
      children: renderContent()
    }
  );
};

// src/components/collapse/collapse.tsx
var import_react71 = require("react");

// src/components/collapse/collapse.styles.ts
var CollapseContainer = newStyled.div(
  ({ bordered, className }) => `
  width: 100%;
  background-color: var(--collapse-bg, #fff);
  border-radius: var(--collapse-border-radius, 6px);
  overflow: hidden;
  
  ${bordered ? css`
        border: var(--collapse-border-width, 1px) solid var(--collapse-border-color, #e0e0e0);
        box-shadow: var(--collapse-shadow, 0 2px 8px rgba(0, 0, 0, 0.05));
      ` : ""}
  
  ${className ? className : ""}
`
);
var PanelContainer = newStyled.div(
  ({ disabled, className }) => `
  border-bottom: var(--panel-border-width, 1px) solid var(--panel-border-color, #f0f0f0);
  
  &:last-of-type {
    border-bottom: none;
  }
  
  ${disabled ? css`
        opacity: var(--panel-disabled-opacity, 0.6);
        cursor: not-allowed;
      ` : ""}
  
  ${className ? className : ""}
`
);
var PanelHeader = newStyled.div(
  ({ className, disabled }) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--header-padding, 16px 24px);
  background-color: var(--header-bg, #fafafa);
  cursor: ${disabled ? "not-allowed" : "pointer"};
  transition: background-color 0.2s ease;
  user-select: none;
  
  ${!disabled && css`
    &:hover {
      background-color: var(--header-hover-bg, #f5f5f5);
    }
  `}
  
  .panel-title {
    font-size: var(--header-font-size, 16px);
    font-weight: var(--header-font-weight, 500);
    color: var(--header-color, #333);
    margin: 0;
    flex: 1;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .panel-extra {
    display: flex;
    align-items: center;
    gap: var(--header-extra-gap, 8px);
    flex-shrink: 0;
    white-space: nowrap;
  }
  
  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
    transform: rotate(0deg);
  }
  
  .icon-container.expanded {
    transform: rotate(90deg) !important;
  }
  
  &[data-disabled="true"] .panel-title {
    color: #999 !important;
  }
  
  &[data-disabled="true"] .icon-container {
    color: #999;
  }
  
  &[data-disabled="true"] .icon-container svg {
    stroke: #999;
  }
  
  ${className ? className : ""}
`
);
var PanelContent = newStyled.div`
  display: grid;
  grid-template-rows: 0fr;
  transition: 
    grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  
  > div {
    overflow: hidden;
    min-height: 0;
    transition: padding 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  ${({ expanded, className }) => css`
    ${expanded ? css`
          grid-template-rows: 1fr;
          opacity: 1;
          > div {
            padding: var(--content-padding, 16px 24px);
          }
        ` : css`
          grid-template-rows: 0fr;
          opacity: 0;
          > div {
            padding: 0;
          }
        `}
    ${className ? className : ""}
  `}
`;

// src/components/collapse/collapse.tsx
var CollapseContext = (0, import_react71.createContext)(void 0);
var Collapse = ({
  children,
  accordion = false,
  activeKey: propActiveKey,
  defaultActiveKey = accordion ? "" : [],
  onChange,
  bordered = true,
  className,
  style,
  expandIcon,
  containerClassName
}) => {
  const getInitialActiveKeys = () => {
    if (propActiveKey !== void 0) {
      return Array.isArray(propActiveKey) ? propActiveKey : [propActiveKey];
    }
    if (defaultActiveKey) {
      return Array.isArray(defaultActiveKey) ? defaultActiveKey : [defaultActiveKey];
    }
    return accordion ? [] : [];
  };
  const [activeKeys, setActiveKeys] = (0, import_react71.useState)(getInitialActiveKeys());
  (0, import_react71.useEffect)(() => {
    if (propActiveKey !== void 0) {
      setActiveKeys(Array.isArray(propActiveKey) ? propActiveKey : [propActiveKey]);
    }
  }, [propActiveKey]);
  const handleSetActiveKey = (key) => {
    let newActiveKeys = [];
    if (accordion) {
      newActiveKeys = activeKeys[0] === key ? [] : [key];
    } else {
      newActiveKeys = activeKeys.includes(key) ? activeKeys.filter((k) => k !== key) : [...activeKeys, key];
    }
    if (propActiveKey === void 0) {
      setActiveKeys(newActiveKeys);
    }
    onChange?.(accordion ? newActiveKeys[0] || "" : newActiveKeys);
  };
  const contextValue = {
    activeKeys,
    setActiveKey: handleSetActiveKey,
    accordion,
    expandIcon
  };
  return /* @__PURE__ */ jsx4(CollapseContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx4(
    CollapseContainer,
    {
      className: `collapse-container ${className} ${containerClassName}`,
      bordered,
      style,
      children
    }
  ) });
};
var Panel = ({
  header,
  panelKey,
  children,
  disabled = false,
  className,
  style,
  extra,
  showArrow = true,
  headerClassName,
  contentClassName
}) => {
  const context = (0, import_react71.useContext)(CollapseContext);
  if (!context) {
    throw new Error("Panel must be used within Collapse");
  }
  const { activeKeys, setActiveKey, expandIcon } = context;
  const isActive = activeKeys.includes(panelKey);
  const handleClick = () => {
    if (!disabled) {
      setActiveKey(panelKey);
    }
  };
  const renderExpandIcon = () => {
    if (!showArrow) return null;
    if (typeof expandIcon === "function") {
      return expandIcon(isActive);
    }
    return /* @__PURE__ */ jsx4("div", { className: `icon-container ${isActive ? "expanded" : ""}`, children: expandIcon || /* @__PURE__ */ jsx4(CollapseIcon, {}) });
  };
  return /* @__PURE__ */ jsxs2(
    PanelContainer,
    {
      className: `panel ${className}`,
      disabled,
      style,
      children: [
        /* @__PURE__ */ jsxs2(
          PanelHeader,
          {
            className: `panel-header ${headerClassName}`,
            disabled,
            "data-disabled": disabled,
            onClick: handleClick,
            role: "button",
            tabIndex: disabled ? void 0 : 0,
            onKeyDown: (e) => {
              if (!disabled && (e.key === "Enter" || e.key === " ")) {
                e.preventDefault();
                setActiveKey(panelKey);
              }
            },
            children: [
              /* @__PURE__ */ jsx4("div", { className: "panel-title", children: header }),
              /* @__PURE__ */ jsxs2("div", { className: "panel-extra", children: [
                extra,
                renderExpandIcon()
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx4(
          PanelContent,
          {
            className: `panel-content ${contentClassName}`,
            expanded: isActive,
            "aria-hidden": !isActive,
            children: /* @__PURE__ */ jsx4("div", { children })
          }
        )
      ]
    }
  );
};
Collapse.Panel = Panel;

// src/components/tree/tree.tsx
var import_react74 = __toESM(require("react"));

// src/components/tree/tree.styles.ts
var getIndentSize = (level = 0) => `${level * 16}px`;
var TreeNodeStyled = newStyled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  cursor: pointer;
  user-select: none;
  border-radius: 4px;
  transition: background-color 0.2s;
  margin-left: ${({ level = 0 }) => getIndentSize(level)};

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  ${({ selected }) => selected && css`
      background-color: #e6f7ff;
      font-weight: 500;
    `}
`;
var TreeNodeContent = newStyled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
`;
var ToggleIcon = newStyled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  transition: transform 0.2s;
  
  ${({ expanded }) => expanded && css`
      transform: rotate(90deg);
    `}
`;
var TreeStyled = newStyled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.85);
`;
var UnselectableNode = css`
  cursor: not-allowed;
  opacity: 0.6;
  &:hover {
    background-color: inherit !important;
  }
`;
var FolderIconContainer = newStyled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

// src/components/tree/treeNode.tsx
var import_react73 = require("react");
var TreeNode = ({
  id,
  title,
  level = 0,
  expanded = false,
  hasChildren = false,
  selected = false,
  onToggle,
  onSelect,
  icon,
  expandIcon = /* @__PURE__ */ jsx4(ExpandIcon, {}),
  collapseIcon = /* @__PURE__ */ jsx4(CollapseIcon, {}),
  showFolderIcon = false,
  selectable = true
}) => {
  const handleToggle = (e) => {
    e.stopPropagation();
    onToggle?.(id);
  };
  const handleSelect = () => {
    if (!selectable) return;
    onSelect?.(id);
  };
  let nodeIcon = icon;
  if (showFolderIcon && hasChildren && !icon) {
    nodeIcon = /* @__PURE__ */ jsx4(FolderIconContainer, { children: expanded ? /* @__PURE__ */ jsx4(FolderOpenIcon, {}) : /* @__PURE__ */ jsx4(FolderCloseIcon, {}) });
  }
  return /* @__PURE__ */ jsx4(
    TreeNodeStyled,
    {
      level,
      selected,
      onClick: handleSelect,
      css: !selectable ? UnselectableNode : void 0,
      children: /* @__PURE__ */ jsxs2(TreeNodeContent, { children: [
        hasChildren && /* @__PURE__ */ jsx4(
          ToggleIcon,
          {
            expanded,
            onClick: handleToggle,
            children: expanded ? collapseIcon : expandIcon
          }
        ),
        !hasChildren && /* @__PURE__ */ jsx4("span", { style: { width: 16 } }),
        nodeIcon,
        /* @__PURE__ */ jsx4("span", { children: title })
      ] })
    }
  );
};

// src/components/tree/tree.tsx
var Tree = import_react74.default.forwardRef(({
  data,
  defaultExpandedKeys = [],
  defaultSelectedKey,
  expandIcon,
  collapseIcon,
  showFolderIcon = false,
  // 默认不显示
  onSelect,
  onExpand,
  className,
  style,
  ...props
}, ref) => {
  const [expandedKeys, setExpandedKeys] = (0, import_react74.useState)(defaultExpandedKeys);
  const [selectedKey, setSelectedKey] = (0, import_react74.useState)(defaultSelectedKey);
  const handleToggle = (id) => {
    const newExpandedKeys = expandedKeys.includes(id) ? expandedKeys.filter((key) => key !== id) : [...expandedKeys, id];
    setExpandedKeys(newExpandedKeys);
    const findNode = (nodes) => {
      for (const node3 of nodes) {
        if (node3.id === id) return node3;
        if (node3.children) {
          const found = findNode(node3.children);
          if (found) return found;
        }
      }
    };
    const node2 = findNode(data);
    if (node2) onExpand?.(newExpandedKeys, node2);
  };
  const handleSelect = (id) => {
    const findNode = (nodes) => {
      for (const node3 of nodes) {
        if (node3.id === id) return node3;
        if (node3.children) {
          const found = findNode(node3.children);
          if (found) return found;
        }
      }
    };
    const node2 = findNode(data);
    if (node2) {
      if (node2.disabled || node2.selectable === false) {
        return;
      }
      setSelectedKey(id);
      onSelect?.(id, node2);
    }
  };
  const renderTreeNodes = (nodes, level = 0) => {
    return nodes.map((node2) => /* @__PURE__ */ jsxs2(import_react74.default.Fragment, { children: [
      /* @__PURE__ */ jsx4(
        TreeNode,
        {
          id: node2.id,
          title: node2.title,
          level,
          icon: node2.icon,
          expanded: expandedKeys.includes(node2.id),
          hasChildren: !!node2.children?.length,
          selected: selectedKey === node2.id,
          onToggle: handleToggle,
          onSelect: handleSelect,
          expandIcon,
          collapseIcon,
          showFolderIcon,
          selectable: node2.selectable !== false
        }
      ),
      node2.children && expandedKeys.includes(node2.id) && /* @__PURE__ */ jsx4("div", { children: renderTreeNodes(node2.children, level + 1) })
    ] }, node2.id));
  };
  return /* @__PURE__ */ jsx4(TreeStyled, { ref, className, style, ...props, children: renderTreeNodes(data) });
});

// src/components/checkbox/checkbox.tsx
var import_react75 = require("react");

// src/components/checkbox/checkbox.styles.ts
var CheckboxContainer = newStyled("label")(
  ({ disabled, className }) => `
  display: inline-flex;
  align-items: center;
  cursor: ${disabled ? "not-allowed" : "pointer"};
  opacity: ${disabled ? 0.6 : 1};
  user-select: none;
  vertical-align: middle;
  margin: 0;
  padding: 0;
  
  ${className ? className : ""}
`
);
var HiddenInput = newStyled("input")`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
`;
var StyledCheckbox = newStyled("span")(
  ({ checked, indeterminate, disabled, className, borderRadius }) => {
    const radius = borderRadius !== void 0 ? typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius : "var(--checkbox-border-radius, 4px)";
    return `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--checkbox-width, 18px);
  height: var(--checkbox-height, 18px);
  border-radius: ${radius};
  border: var(--checkbox-border-width, 2px) solid;
  transition: all 0.2s;
  margin-right: var(--checkbox-margin-right, 8px);
  position: relative;
  
  background-color: var(
    --checkbox-bg,
    ${disabled ? checked || indeterminate ? "#e6e6e6" : "#f5f5f5" : checked || indeterminate ? "#1890ff" : "#fff"}
  );
  
  border-color: var(
    --checkbox-border-color,
    ${disabled ? "#d9d9d9" : checked || indeterminate ? "#1890ff" : "#d9d9d9"}
  );
  
  ${className ? className : ""}
`;
  }
);
var CheckboxIcon = newStyled("span")(
  ({ className }) => `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: var(--checkbox-icon-color, #fff);
  font-size: var(--checkbox-icon-size, 14px);
  
  ${className ? className : ""}
`
);
var CheckboxLabel = newStyled("span")(
  ({ disabled, className }) => `
  color: var(--checkbox-label-color, ${disabled ? "rgba(0, 0, 0, 0.25)" : "rgba(0, 0, 0, 0.85)"});
  font-size: var(--checkbox-label-font-size, 14px);
  line-height: var(--checkbox-label-line-height, 1.5);
  
  ${className ? className : ""}
`
);
var CheckboxGroupContainer = newStyled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
var HorizontalGroup = newStyled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

// src/components/checkbox/checkbox.tsx
var DefaultCheckedIcon = /* @__PURE__ */ jsx4("svg", { width: "14", height: "14", viewBox: "0 0 1024 1024", children: /* @__PURE__ */ jsx4("path", { fill: "currentColor", d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" }) });
var DefaultIndeterminateIcon = /* @__PURE__ */ jsx4("svg", { width: "14", height: "14", viewBox: "0 0 1024 1024", children: /* @__PURE__ */ jsx4("path", { fill: "currentColor", d: "M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" }) });
var Checkbox = (0, import_react75.forwardRef)(
  ({
    checked: controlledChecked,
    defaultChecked = false,
    indeterminate = false,
    disabled = false,
    onChange,
    icon,
    checkedIcon = DefaultCheckedIcon,
    indeterminateIcon = DefaultIndeterminateIcon,
    label,
    style,
    className,
    value,
    borderRadius,
    checkboxClassName,
    labelClassName,
    children,
    dangerouslySetInnerHTML,
    ...props
  }, ref) => {
    const inputRef = (0, import_react75.useRef)(null);
    const isControlled = controlledChecked !== void 0;
    const [localChecked, setLocalChecked] = (0, import_react75.useState)(defaultChecked);
    const handleChange = (0, import_react75.useCallback)((e) => {
      if (disabled) return;
      const newChecked = e.target.checked;
      if (!isControlled) {
        setLocalChecked(newChecked);
      }
      onChange?.(newChecked, e);
    }, [disabled, isControlled, onChange]);
    const actualChecked = isControlled ? controlledChecked : localChecked;
    (0, import_react75.useEffect)(() => {
      if (inputRef.current) {
        inputRef.current.checked = !!actualChecked;
      }
    }, [actualChecked]);
    let displayIcon = null;
    if (indeterminate) {
      displayIcon = indeterminateIcon;
    } else if (actualChecked) {
      displayIcon = checkedIcon;
    } else {
      displayIcon = icon;
    }
    return /* @__PURE__ */ jsxs2(
      CheckboxContainer,
      {
        ref,
        style,
        className,
        disabled,
        children: [
          /* @__PURE__ */ jsx4(
            HiddenInput,
            {
              ref: inputRef,
              type: "checkbox",
              defaultChecked,
              disabled,
              onChange: handleChange,
              ...props
            }
          ),
          /* @__PURE__ */ jsx4(
            StyledCheckbox,
            {
              checked: actualChecked,
              indeterminate,
              disabled,
              borderRadius,
              className: checkboxClassName,
              children: (actualChecked || indeterminate) && displayIcon && /* @__PURE__ */ jsx4(CheckboxIcon, { children: displayIcon })
            }
          ),
          label && /* @__PURE__ */ jsx4(CheckboxLabel, { disabled, className: labelClassName, children: label }),
          children
        ]
      }
    );
  }
);
Checkbox.displayName = "Checkbox";
var CheckboxGroup = ({
  options,
  defaultValue = [],
  value: controlledValue,
  onChange,
  disabled: groupDisabled = false,
  direction = "vertical",
  style,
  className
}) => {
  const isControlled = controlledValue !== void 0;
  const [localValue, setLocalValue] = (0, import_react75.useState)(defaultValue);
  const selectedValues = isControlled ? controlledValue : localValue;
  const handleChange = (0, import_react75.useCallback)((value, checked) => {
    let newValues;
    if (checked) {
      newValues = [...selectedValues, value];
    } else {
      newValues = selectedValues.filter((v) => v !== value);
    }
    if (!isControlled) {
      setLocalValue(newValues);
    }
    onChange?.(newValues);
  }, [isControlled, selectedValues, onChange]);
  const renderOptions = (0, import_react75.useMemo)(() => {
    return options.map((option) => /* @__PURE__ */ jsx4(
      Checkbox,
      {
        checked: selectedValues.includes(option.value),
        onChange: (checked) => handleChange(option.value, checked),
        disabled: groupDisabled || option.disabled,
        label: option.label,
        value: option.value,
        className: option.className,
        style: option.style
      },
      option.value
    ));
  }, [options, selectedValues, groupDisabled, handleChange]);
  const GroupContainer = direction === "horizontal" ? HorizontalGroup : CheckboxGroupContainer;
  return /* @__PURE__ */ jsx4(
    GroupContainer,
    {
      className,
      style,
      children: renderOptions
    }
  );
};
Checkbox.Group = CheckboxGroup;

// src/components/checkbox/index.ts
var Checkbox2 = Checkbox;

// src/components/breadcrumb/breadcrumb.tsx
var import_react78 = __toESM(require("react"));

// src/components/breadcrumb/breadcrumb.styles.ts
var sizeMap4 = {
  sm: { fontSize: "12px", padding: "4px 0" },
  md: { fontSize: "14px", padding: "8px 0" },
  lg: { fontSize: "16px", padding: "12px 0" }
};
var BreadcrumbContainer = newStyled.nav`
  display: flex;
  align-items: center;
  font-family: var(--breadcrumb-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial);
  font-size: var(--breadcrumb-font-size, 14px);
  line-height: var(--breadcrumb-line-height, 1.5);
  padding: var(--breadcrumb-padding, 8px 0);
  margin: 0;

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;
var BreadcrumbItemBase = newStyled.span`
  display: inline-flex;
  align-items: center;

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;
var BreadcrumbItemNormal = newStyled(BreadcrumbItemBase)`
  color: var(--breadcrumb-item-color, rgba(0, 0, 0, 0.45));
`;
var BreadcrumbItemLast = newStyled(BreadcrumbItemBase)`
  color: var(--breadcrumb-item-last-color, rgba(0, 0, 0, 0.85));
`;
var BreadcrumbItemHidden = newStyled(BreadcrumbItemBase)`
  display: none;
`;
var BreadcrumbItemEllipsis = newStyled(BreadcrumbItemBase)`
  margin-right: var(--breadcrumb-ellipsis-margin-right, 8px);  
  &::before {
    content: '...';
  }
`;
var BreadcrumbItemInner = newStyled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;
var BreadcrumbIconWrap = newStyled.span`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`;
var BreadcrumbLink = newStyled.a`
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
  
  &:hover {
    color: var(--breadcrumb-link-hover-color, #1890ff);
    text-decoration: none;
    cursor: pointer;
  }

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;
var BreadcrumbCurrent = newStyled.span`
  color: inherit;

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;
var BreadcrumbSeparator = newStyled.span`
  margin: 0 var(--breadcrumb-separator-margin, 8px);
  color: var(--breadcrumb-separator-color, rgba(0, 0, 0, 0.45));
  
  ${({ custom }) => !custom && `
    &::after {
      content: '/';
    }
  `}
`;
var BreadcrumbEllipsisWrap = newStyled.span`
  display: none;
  align-items: center;
  @media (max-width: 768px) {
    display: inline-flex;
  }
`;
var BreadcrumbItemResponsiveMiddle = newStyled.span`
  display: inline-flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none !important;
  }
`;
var ResponsiveBreadcrumb = newStyled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: ${({ size = "md" }) => sizeMap4[size].fontSize};
  padding: ${({ size = "md" }) => sizeMap4[size].padding};

  /* 应用外部 className，允许 Tailwind 覆盖样式 */
  ${({ className }) => className && css`
    ${className}
  `}
`;

// src/components/breadcrumb/breadcrumbItem.tsx
var import_react77 = require("react");
var BreadcrumbItem = ({
  children,
  href,
  onClick,
  disabled = false,
  isCurrent = false,
  separator,
  hidden = false,
  ellipsis = false,
  icon,
  iconPosition = "before",
  className,
  style
}) => {
  let Container = BreadcrumbItemNormal;
  if (ellipsis) Container = BreadcrumbItemEllipsis;
  else if (hidden) Container = BreadcrumbItemHidden;
  else if (isCurrent) Container = BreadcrumbItemLast;
  const iconNode = icon ? /* @__PURE__ */ jsx4(BreadcrumbIconWrap, { children: icon }) : null;
  const wrapWithIcon = (content) => {
    if (!iconNode) return content;
    return /* @__PURE__ */ jsx4(BreadcrumbItemInner, { children: iconPosition === "before" ? /* @__PURE__ */ jsxs2(Fragment5, { children: [
      iconNode,
      content
    ] }) : /* @__PURE__ */ jsxs2(Fragment5, { children: [
      content,
      iconNode
    ] }) });
  };
  const renderContent = () => {
    if (ellipsis) {
      return /* @__PURE__ */ jsx4("span", { children });
    }
    if (isCurrent || disabled) {
      return /* @__PURE__ */ jsx4(BreadcrumbCurrent, { children: wrapWithIcon(children) });
    }
    if (href || onClick) {
      return /* @__PURE__ */ jsx4(
        BreadcrumbLink,
        {
          href,
          onClick,
          children: wrapWithIcon(children)
        }
      );
    }
    return /* @__PURE__ */ jsx4("span", { children: wrapWithIcon(children) });
  };
  return /* @__PURE__ */ jsxs2(Container, { className, style, children: [
    renderContent(),
    !isCurrent && !ellipsis && !hidden && /* @__PURE__ */ jsx4(BreadcrumbSeparator, { custom: !!separator, children: separator })
  ] });
};

// src/components/breadcrumb/breadcrumb.tsx
var Breadcrumb = ({
  separator = "/",
  responsive = true,
  ellipsisPopover = false,
  size = "md",
  className,
  style,
  children
}) => {
  const renderOmittedList = (omitted) => {
    return /* @__PURE__ */ jsx4("div", { style: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      minWidth: "80px",
      padding: "4px 0"
    }, children: omitted.map((item, i) => {
      if (import_react78.default.isValidElement(item) && item.type === BreadcrumbItem) {
        const props = item.props;
        const { href, onClick, children: itemChildren } = props;
        const content = itemChildren;
        if (href) {
          return /* @__PURE__ */ jsx4(
            "a",
            {
              href,
              onClick,
              style: {
                color: "rgba(0,0,0,0.85)",
                textDecoration: "none",
                padding: "4px 12px",
                borderRadius: "4px",
                fontSize: "14px"
              },
              onMouseEnter: (e) => {
                e.currentTarget.style.background = "#f5f5f5";
                e.currentTarget.style.color = "#1890ff";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "rgba(0,0,0,0.85)";
              },
              children: content
            },
            i
          );
        }
        if (onClick) {
          return /* @__PURE__ */ jsx4(
            "span",
            {
              role: "button",
              tabIndex: 0,
              onClick,
              onKeyDown: (e) => e.key === "Enter" && onClick(),
              style: {
                color: "rgba(0,0,0,0.85)",
                padding: "4px 12px",
                borderRadius: "4px",
                fontSize: "14px",
                cursor: "pointer"
              },
              onMouseEnter: (e) => {
                e.currentTarget.style.background = "#f5f5f5";
                e.currentTarget.style.color = "#1890ff";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "rgba(0,0,0,0.85)";
              },
              children: content
            },
            i
          );
        }
        return /* @__PURE__ */ jsx4("span", { style: { padding: "4px 12px", fontSize: "14px", color: "rgba(0,0,0,0.85)" }, children: content }, i);
      }
      return /* @__PURE__ */ jsx4("span", { style: { padding: "4px 12px", fontSize: "14px", color: "rgba(0,0,0,0.85)" }, children: item }, i);
    }) });
  };
  const renderItems = () => {
    const childrenArray = import_react78.Children.toArray(children);
    const totalItems = childrenArray.length;
    if (!responsive) {
      return childrenArray.map((child, index) => {
        const isLast = index === totalItems - 1;
        if (import_react78.default.isValidElement(child) && child.type === BreadcrumbItem) {
          return (0, import_react78.cloneElement)(child, {
            key: child.key ?? index,
            isCurrent: isLast,
            separator: child.props.separator || separator
          });
        }
        return /* @__PURE__ */ jsx4(
          BreadcrumbItem,
          {
            isCurrent: isLast,
            separator: isLast ? null : separator,
            children: child
          },
          index
        );
      });
    }
    if (totalItems <= 3) {
      return childrenArray.map((child, index) => {
        const isLast = index === totalItems - 1;
        if (import_react78.default.isValidElement(child) && child.type === BreadcrumbItem) {
          return (0, import_react78.cloneElement)(child, {
            key: child.key ?? index,
            isCurrent: isLast,
            separator: child.props.separator || separator
          });
        }
        return /* @__PURE__ */ jsx4(BreadcrumbItem, { isCurrent: isLast, separator: isLast ? null : separator, children: child }, index);
      });
    }
    const first = childrenArray[0];
    const middleItems = childrenArray.slice(1, totalItems - 2);
    const secondLast = childrenArray[totalItems - 2];
    const last = childrenArray[totalItems - 1];
    const firstEl = import_react78.default.isValidElement(first) && first.type === BreadcrumbItem ? (0, import_react78.cloneElement)(first, {
      key: first.key ?? "first",
      separator: first.props.separator || separator
    }) : /* @__PURE__ */ jsx4(BreadcrumbItem, { separator, children: first }, "first");
    const ellipsisNode = ellipsisPopover ? /* @__PURE__ */ jsxs2("span", { style: { display: "inline-flex", alignItems: "center" }, children: [
      /* @__PURE__ */ jsx4(
        Tooltip,
        {
          trigger: "click",
          placement: "bottomLeft",
          title: renderOmittedList(middleItems),
          arrow: false,
          backgroundColor: "#fff",
          overlayStyle: {
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            borderRadius: "8px",
            padding: "4px 0"
          },
          delay: 0,
          children: /* @__PURE__ */ jsx4(
            BreadcrumbItemEllipsis,
            {
              as: "span",
              style: { cursor: "pointer", marginRight: 0 },
              role: "button",
              tabIndex: 0
            }
          )
        }
      ),
      /* @__PURE__ */ jsx4(BreadcrumbSeparator, { custom: !!separator, children: separator })
    ] }) : /* @__PURE__ */ jsx4(BreadcrumbItem, { ellipsis: true, separator });
    const secondLastEl = import_react78.default.isValidElement(secondLast) && secondLast.type === BreadcrumbItem ? (0, import_react78.cloneElement)(secondLast, {
      key: secondLast.key ?? "secondLast",
      isCurrent: false,
      separator: secondLast.props.separator || separator
    }) : /* @__PURE__ */ jsx4(BreadcrumbItem, { separator, children: secondLast }, "secondLast");
    const lastEl = import_react78.default.isValidElement(last) && last.type === BreadcrumbItem ? (0, import_react78.cloneElement)(last, {
      key: last.key ?? "last",
      isCurrent: true,
      separator: null
    }) : /* @__PURE__ */ jsx4(BreadcrumbItem, { isCurrent: true, separator: null, children: last }, "last");
    const middleEls = middleItems.map((child, index) => {
      const idx = index + 1;
      const el = import_react78.default.isValidElement(child) && child.type === BreadcrumbItem ? (0, import_react78.cloneElement)(child, {
        key: child.key ?? `middle-${idx}`,
        separator: child.props.separator || separator
      }) : /* @__PURE__ */ jsx4(BreadcrumbItem, { separator, children: child }, `middle-${idx}`);
      return /* @__PURE__ */ jsx4(BreadcrumbItemResponsiveMiddle, { children: el }, `wrap-${idx}`);
    });
    return [
      firstEl,
      /* @__PURE__ */ jsx4(BreadcrumbEllipsisWrap, { children: ellipsisNode }, "ellipsis-wrap"),
      ...middleEls,
      secondLastEl,
      lastEl
    ];
  };
  return /* @__PURE__ */ jsx4(
    ResponsiveBreadcrumb,
    {
      className,
      style,
      responsive,
      size,
      children: renderItems()
    }
  );
};
Breadcrumb.Item = BreadcrumbItem;

// src/components/table/table.tsx
var import_react82 = __toESM(require("react"));

// src/components/table/table.styles.ts
var TableTitle = newStyled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  padding: 0 8px;
  color: ${({ theme: theme2 }) => theme2 === "dark" ? "#e6e6e6" : "rgba(0, 0, 0, 0.85)"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .title-content {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .title-extra {
    font-size: 14px;
    font-weight: normal;
    color: ${({ theme: theme2 }) => theme2 === "dark" ? "#bfbfbf" : "rgba(0, 0, 0, 0.65)"};
  }
`;
var SelectionInfo = newStyled.div`
  margin-bottom: 16px;
  padding: 8px 16px;
  background-color: ${({ theme: theme2 }) => theme2 === "dark" ? "rgba(24, 144, 255, 0.1)" : "#e6f7ff"};
  border: 1px solid ${({ theme: theme2 }) => theme2 === "dark" ? "#1890ff" : "#91d5ff"};
  border-radius: 4px;
  color: ${({ theme: theme2 }) => theme2 === "dark" ? "#a6d4ff" : "rgba(0, 0, 0, 0.85)"};
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
`;
var TableFooter = newStyled.div`
  padding: 16px;
  border-top: 1px solid ${({ theme: theme2 }) => theme2 === "dark" ? "#434343" : "#f0f0f0"};
  background-color: ${({ theme: theme2 }) => theme2 === "dark" ? "#1f1f1f" : "#fafafa"};
  color: ${({ theme: theme2 }) => theme2 === "dark" ? "#e6e6e6" : "rgba(0, 0, 0, 0.85)"};
  font-size: 14px;
  border-radius: 0 0 4px 4px;
`;
var TableScrollContainer = newStyled.div`
  overflow: auto;
  width: 100%;
  ${({ scroll }) => scroll?.y && css`
    max-height: ${typeof scroll.y === "number" ? `${scroll.y}px` : scroll.y};
  `}
  ${({ scroll }) => scroll?.x && css`
    max-width: ${typeof scroll.x === "number" ? `${scroll.x}px` : scroll.x};
  `}
`;
var TableContainer = newStyled.div`
  position: relative;
  width: 100%;
  // 移除 overflow: auto，由内部 TableScrollContainer 处理
  border-radius: ${({ variant }) => variant === "borderless" ? "0" : "4px"};
  box-shadow: ${({ theme: theme2, variant }) => variant === "borderless" ? "none" : theme2 === "dark" ? "0 1px 3px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.6)" : "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"};
  background-color: ${({ theme: theme2, variant }) => variant === "borderless" ? "transparent" : theme2 === "dark" ? "#141414" : "#fff"};
  color: ${({ theme: theme2 }) => theme2 === "dark" ? "#e6e6e6" : "rgba(0, 0, 0, 0.85)"};
  display: flex;
  flex-direction: column;
`;
var StyledTable = newStyled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  color: ${({ theme: theme2 }) => theme2 === "dark" ? "#e6e6e6" : "rgba(0, 0, 0, 0.85)"};

  ${({ scroll }) => scroll?.x && css`
    width: max-content;
    min-width: 100%;
  `}
  
  ${({ bordered, theme: theme2 }) => bordered && css`
    border: 1px solid ${theme2 === "dark" ? "#434343" : "#e8e8e8"};
    border-radius: 4px;
  `}
`;
var TableHead = newStyled.thead`
  background-color: ${({ theme: theme2 }) => theme2 === "dark" ? "#1d1d1d" : "#fafafa"};
  font-weight: 500;
`;
var TableHeaderCell = newStyled.th`
  padding: 16px;
  text-align: ${({ align = "left" }) => align};
  border-bottom: 1px solid ${({ theme: theme2 }) => theme2 === "dark" ? "#434343" : "#e8e8e8"};
  position: ${({ sticky, fixed }) => fixed ? "sticky" : sticky ? "sticky" : "relative"};
  top: ${({ sticky }) => sticky ? 0 : "auto"};
  left: ${({ fixed, offset }) => fixed === "left" ? typeof offset === "number" ? `${offset}px` : offset || 0 : "auto"};
  right: ${({ fixed, offset }) => fixed === "right" ? typeof offset === "number" ? `${offset}px` : offset || 0 : "auto"};
  z-index: ${({ sticky, fixed }) => fixed ? 20 : sticky ? 10 : "auto"}; // fixed columns higher than sticky header
  color: ${({ theme: theme2 }) => theme2 === "dark" ? "#bfbfbf" : "rgba(0, 0, 0, 0.85)"};
  background-color: ${({ theme: theme2 }) => theme2 === "dark" ? "#1d1d1d" : "#fafafa"};
  
  ${({ sortable, theme: theme2 }) => sortable && theme2 && css`
    cursor: pointer;
    user-select: none;
    
    &:hover {
      background-color: ${theme2 === "dark" ? "#2a2a2a" : "#f5f5f5"};
    }
  `}
`;
var SortIndicator = newStyled.span`
  display: inline-block;
  margin-left: 4px;
  width: 0;
  height: 0;
  border-style: solid;
  vertical-align: middle;
`;
var SortAscending = newStyled(SortIndicator)`
  border-width: 0 4px 5px 4px;
  border-color: transparent transparent #bfbfbf transparent;
`;
var SortDescending = newStyled(SortIndicator)`
  border-width: 5px 4px 0 4px;
  border-color: #bfbfbf transparent transparent transparent;
  margin-top: -2px;
`;
var TableBody = newStyled.tbody`
  ${({ striped }) => striped && css`
    tr:nth-of-type(even) {
      background-color: #f9f9f9;
    }
  `}
  
  ${({ hoverable }) => hoverable && css`
    tr:hover {
      background-color: #e6f7ff;
    }
  `}
`;
var TableRow = newStyled.tr`
  ${({ clickable }) => clickable && css`
    cursor: pointer;
  `}
  
  ${({ selected }) => selected && css`
    background-color: #e6f7ff !important;
    td {
      background-color: #e6f7ff !important;
    }
  `}
`;
var TableCell = newStyled.td`
  padding: 16px;
  border-bottom: 1px solid ${({ theme: theme2 }) => theme2 === "dark" ? "#303030" : "#e8e8e8"};
  text-align: ${({ align = "left" }) => align};
  background-color: ${({ theme: theme2 }) => theme2 === "dark" ? "#141414" : "#fff"};
  position: ${({ fixed }) => fixed ? "sticky" : "static"};
  left: ${({ fixed, offset }) => fixed === "left" ? typeof offset === "number" ? `${offset}px` : offset || 0 : "auto"};
  right: ${({ fixed, offset }) => fixed === "right" ? typeof offset === "number" ? `${offset}px` : offset || 0 : "auto"};
  z-index: ${({ fixed }) => fixed ? 1 : "auto"};
  
  ${({ ellipsis }) => ellipsis && css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
  `}
`;
var EmptyContainer = newStyled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;
var EmptyText = newStyled.p`
  margin-top: 16px;
  color: rgba(0, 0, 0, 0.25);
  font-size: 14px;
`;
var LoadingContainer = newStyled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 10;
`;
var PaginationContainer2 = newStyled.div`
  display: flex;
  justify-content: ${({ align }) => {
  if (align === "right") return "flex-end";
  if (align === "left") return "flex-start";
  if (align === "center") return "center";
  return "space-between";
}};
  align-items: center;
  padding: 16px;
  gap: 16px;
  border-top: ${({ variant, theme: theme2 }) => variant === "outline" ? "none" : `1px solid ${theme2 === "dark" ? "#303030" : "#e8e8e8"}`};
  background-color: ${({ theme: theme2, variant }) => variant === "outline" ? "transparent" : theme2 === "dark" ? "#1d1d1d" : "#fafafa"};
  color: ${({ theme: theme2 }) => theme2 === "dark" ? "#bfbfbf" : "rgba(0, 0, 0, 0.65)"};
`;
var PaginationButtons = newStyled.div`
  display: flex;
  gap: 8px;
`;
var PaginationButton = newStyled.button`
  min-width: 32px;
  height: 32px;
  padding: 0 8px;
  border: ${({ variant, active }) => variant === "outline" ? active ? "1px solid #1890ff" : "1px solid transparent" : "1px solid #d9d9d9"};
  border-radius: 4px;
  background-color: ${({ active, variant }) => variant === "outline" ? "transparent" : active ? "#1890ff" : "#fff"};
  color: ${({ active, variant }) => variant === "outline" ? active ? "#1890ff" : "rgba(0, 0, 0, 0.65)" : active ? "#fff" : "rgba(0, 0, 0, 0.65)"};
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    border-color: #1890ff;
    color: #1890ff;
  }
  
  &:disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
    border-color: ${({ variant }) => variant === "outline" ? "transparent" : "#d9d9d9"};
    background-color: ${({ variant }) => variant === "outline" ? "transparent" : "#fff"}; // Was #fff (or implicit default), fixing to match logic
  }
`;
var PageSizeSelect = newStyled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  select {
    padding: 4px 8px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
  }
`;
var SelectionContainer = newStyled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 100%;

  input[type="checkbox"] {
    cursor: pointer;
  }
`;
var ActionCell = newStyled(TableCell)`
  display: flex;
  gap: 8px;
  justify-content: ${({ align }) => align === "right" ? "flex-end" : align === "left" ? "flex-start" : "center"};
  
  button {
    padding: 4px 8px;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.3s;
    
    &:hover {
      border-color: #1890ff;
      color: #1890ff;
    }
  }
`;

// src/components/table/pagination.tsx
var import_react80 = require("react");
var Pagination3 = ({
  current,
  pageSize,
  total,
  onChange,
  pageSizeOptions = [10, 20, 50, 100],
  showSizeChanger = true,
  showTotal,
  variant = "default",
  align = "center"
}) => {
  const totalPages = Math.ceil(total / pageSize);
  const renderPageButtons = () => {
    const buttons = [];
    buttons.push(
      /* @__PURE__ */ jsx4(
        PaginationButton,
        {
          onClick: () => onChange(current - 1, pageSize),
          disabled: current === 1,
          variant,
          children: "<"
        },
        "prev"
      )
    );
    const maxButtons = 5;
    let startPage = Math.max(1, current - Math.floor(maxButtons / 2));
    let endPage = startPage + maxButtons - 1;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxButtons + 1);
    }
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        /* @__PURE__ */ jsx4(
          PaginationButton,
          {
            active: i === current,
            onClick: () => onChange(i, pageSize),
            variant,
            children: i
          },
          i
        )
      );
    }
    buttons.push(
      /* @__PURE__ */ jsx4(
        PaginationButton,
        {
          onClick: () => onChange(current + 1, pageSize),
          disabled: current >= totalPages,
          variant,
          children: ">"
        },
        "next"
      )
    );
    return buttons;
  };
  return /* @__PURE__ */ jsxs2(PaginationContainer2, { variant, align, children: [
    showTotal && /* @__PURE__ */ jsx4("div", { children: showTotal(total) }),
    /* @__PURE__ */ jsx4(PaginationButtons, { children: renderPageButtons() }),
    showSizeChanger && /* @__PURE__ */ jsxs2(PageSizeSelect, { children: [
      /* @__PURE__ */ jsx4("span", { children: "\u6BCF\u9875\u663E\u793A:" }),
      /* @__PURE__ */ jsx4(
        "select",
        {
          value: pageSize,
          onChange: (e) => onChange(1, Number(e.target.value)),
          children: pageSizeOptions.map((size) => /* @__PURE__ */ jsxs2("option", { value: size, children: [
            size,
            " \u6761"
          ] }, size))
        }
      )
    ] })
  ] });
};

// src/components/table/selection.tsx
var import_react81 = require("react");
var Selection = ({
  type,
  checked,
  onChange,
  disabled = false,
  indeterminate = false
}) => {
  const inputRef = (0, import_react81.useRef)(null);
  (0, import_react81.useEffect)(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);
  return /* @__PURE__ */ jsx4(SelectionContainer, { children: /* @__PURE__ */ jsx4(
    "input",
    {
      ref: inputRef,
      type,
      checked,
      onChange: (e) => onChange(e.target.checked),
      disabled
    }
  ) });
};

// src/components/table/table.tsx
var RowComponent = ({
  record,
  index,
  columns,
  rowSelection,
  onRowClick,
  isSelected,
  onSelectChange,
  stickyOffsets
}) => {
  return /* @__PURE__ */ jsxs2(
    TableRow,
    {
      clickable: !!onRowClick,
      selected: isSelected,
      onClick: () => onRowClick?.(record, index),
      children: [
        rowSelection && /* @__PURE__ */ jsx4(
          TableCell,
          {
            align: "center",
            fixed: columns.some((col) => col.fixed === "left") ? "left" : void 0,
            offset: 0,
            style: { zIndex: columns.some((col) => col.fixed === "left") ? 1 : "auto" },
            children: /* @__PURE__ */ jsx4(
              Selection,
              {
                type: rowSelection.type || "checkbox",
                checked: isSelected,
                onChange: (checked) => {
                  onSelectChange?.(checked);
                },
                disabled: rowSelection.getCheckboxProps?.(record)?.disabled
              }
            )
          }
        ),
        columns.map((column2, colIndex) => {
          let leftOffset = stickyOffsets?.left[colIndex];
          if (rowSelection && column2.fixed === "left") {
            const selectionWidth = 60;
            if (typeof leftOffset === "number") {
              leftOffset += selectionWidth;
            }
          }
          if (column2.type === "action") {
            return /* @__PURE__ */ jsx4(
              ActionCell,
              {
                align: column2.align || "center",
                fixed: column2.fixed,
                offset: column2.fixed === "left" ? leftOffset : stickyOffsets?.right[colIndex],
                children: column2.actions?.(record, index)
              },
              colIndex
            );
          }
          const value = column2.dataIndex ? record[column2.dataIndex] : null;
          const renderContent = column2.render ? column2.render(value, record, index) : value;
          return /* @__PURE__ */ jsx4(
            TableCell,
            {
              align: column2.align,
              ellipsis: column2.ellipsis,
              fixed: column2.fixed,
              offset: column2.fixed === "left" ? leftOffset : stickyOffsets?.right[colIndex],
              children: renderContent
            },
            colIndex
          );
        })
      ]
    }
  );
};
var areEqual = (prevProps, nextProps) => {
  if (prevProps.index !== nextProps.index) return false;
  if (prevProps.isSelected !== nextProps.isSelected) return false;
  if (prevProps.rowKey !== nextProps.rowKey) return false;
  if (prevProps.record !== nextProps.record) {
    return false;
  }
  return true;
};
var MemoizedRow = import_react82.default.memo(RowComponent, areEqual);
var Table = ({
  dataSource = [],
  columns,
  rowKey,
  bordered = false,
  striped = false,
  hoverable = false,
  loading = false,
  emptyText = "No data",
  onRowClick,
  pagination,
  rowSelection,
  title,
  footer,
  theme: theme2 = "light",
  variant = "default",
  scroll,
  className,
  style
}) => {
  const [sortState, setSortState] = (0, import_react82.useState)({ direction: null });
  const [selectedRowKeys, setSelectedRowKeys] = (0, import_react82.useState)(rowSelection?.selectedRowKeys || []);
  const selectedRowKeysSet = (0, import_react82.useMemo)(() => new Set(selectedRowKeys), [selectedRowKeys]);
  (0, import_react82.useEffect)(() => {
    if (rowSelection?.selectedRowKeys) {
      setSelectedRowKeys(rowSelection.selectedRowKeys);
    }
  }, [rowSelection?.selectedRowKeys]);
  const handleSort = (column2) => {
    if (!column2.sortable && !column2.sorter) return;
    setSortState((prev2) => {
      if (prev2.columnKey !== column2.key) {
        return { columnKey: column2.key, direction: "ascend" };
      }
      return {
        columnKey: column2.key,
        direction: prev2.direction === "ascend" ? "descend" : prev2.direction === "descend" ? null : "ascend"
      };
    });
  };
  const sortedData = (0, import_react82.useMemo)(() => {
    if (!sortState.direction || !sortState.columnKey) {
      return [...dataSource];
    }
    const column2 = columns.find((col) => col.key === sortState.columnKey);
    if (!column2 || !column2.sorter) {
      return [...dataSource];
    }
    return [...dataSource].sort((a, b) => {
      const result = column2.sorter(a, b);
      return sortState.direction === "ascend" ? result : -result;
    });
  }, [dataSource, columns, sortState]);
  const paginatedData = (0, import_react82.useMemo)(() => {
    if (!pagination) return sortedData;
    const start = (pagination.current - 1) * pagination.pageSize;
    return sortedData.slice(start, start + pagination.pageSize);
  }, [sortedData, pagination]);
  const getRowKey = (0, import_react82.useCallback)((record, index) => {
    if (typeof rowKey === "function") {
      return rowKey(record);
    }
    if (rowKey) {
      const key = record[rowKey];
      if (typeof key === "string" || typeof key === "number" || typeof key === "bigint") {
        return key;
      }
    }
    if ("key" in record) {
      const key = record.key;
      if (typeof key === "string" || typeof key === "number" || typeof key === "bigint") {
        return key;
      }
    }
    return index;
  }, [rowKey]);
  const renderEmpty = () => /* @__PURE__ */ jsx4("tbody", { children: /* @__PURE__ */ jsx4("tr", { children: /* @__PURE__ */ jsx4("td", { colSpan: columns.length + (rowSelection ? 1 : 0), children: /* @__PURE__ */ jsx4(EmptyContainer, { children: /* @__PURE__ */ jsx4(EmptyText, { children: emptyText }) }) }) }) });
  const handleRowSelect = (0, import_react82.useCallback)((record, checked, rowIndex) => {
    const key = getRowKey(record, rowIndex);
    setSelectedRowKeys((prev2) => {
      let newSelectedKeys;
      if (rowSelection?.type === "radio") {
        newSelectedKeys = checked ? [key] : [];
      } else {
        newSelectedKeys = checked ? [...prev2, key] : prev2.filter((k) => k !== key);
      }
      const selectedRows = dataSource.filter(
        (record2, idx) => newSelectedKeys.includes(getRowKey(record2, idx))
      );
      setTimeout(() => {
        rowSelection?.onChange?.(newSelectedKeys, selectedRows);
      }, 0);
      return newSelectedKeys;
    });
  }, [dataSource, rowSelection, getRowKey]);
  const handleSelectAll = (0, import_react82.useCallback)((checked) => {
    if (!rowSelection || rowSelection.type === "radio") return;
    setSelectedRowKeys((prev2) => {
      const currentPageKeys = paginatedData.map((record, idx) => getRowKey(record, idx));
      let newSelectedKeys;
      if (checked) {
        newSelectedKeys = Array.from(/* @__PURE__ */ new Set([...prev2, ...currentPageKeys]));
      } else {
        newSelectedKeys = prev2.filter((key) => !currentPageKeys.includes(key));
      }
      const selectedRows = dataSource.filter(
        (record, idx) => newSelectedKeys.includes(getRowKey(record, idx))
      );
      setTimeout(() => {
        rowSelection?.onChange?.(newSelectedKeys, selectedRows);
      }, 0);
      return newSelectedKeys;
    });
  }, [paginatedData, dataSource, rowSelection, getRowKey]);
  const allSelected = (0, import_react82.useMemo)(() => {
    return paginatedData.length > 0 && paginatedData.every((record, idx) => {
      const key = getRowKey(record, idx);
      return selectedRowKeysSet.has(key);
    });
  }, [paginatedData, selectedRowKeysSet, getRowKey]);
  const indeterminate = (0, import_react82.useMemo)(() => {
    return paginatedData.some((record, idx) => {
      const key = getRowKey(record, idx);
      return selectedRowKeysSet.has(key);
    }) && !allSelected;
  }, [paginatedData, selectedRowKeysSet, allSelected, getRowKey]);
  const stickyOffsets = (0, import_react82.useMemo)(() => {
    const leftOffsets = [];
    const rightOffsets = [];
    let leftSum = 0;
    let rightSum = 0;
    columns.forEach((col) => {
      if (col.fixed === "left") {
        leftOffsets.push(leftSum);
        const width = typeof col.width === "number" ? col.width : parseInt(col.width) || 0;
        leftSum += width;
      } else {
        leftOffsets.push("auto");
      }
    });
    for (let i = columns.length - 1; i >= 0; i--) {
      const col = columns[i];
      if (col.fixed === "right") {
        rightOffsets[i] = rightSum;
        const width = typeof col.width === "number" ? col.width : parseInt(col.width) || 0;
        rightSum += width;
      } else {
        rightOffsets[i] = "auto";
      }
    }
    return { left: leftOffsets, right: rightOffsets };
  }, [columns]);
  const renderHeader = () => {
    return /* @__PURE__ */ jsx4(TableHead, { theme: theme2, children: /* @__PURE__ */ jsxs2("tr", { children: [
      rowSelection && /* @__PURE__ */ jsx4(
        TableHeaderCell,
        {
          align: "center",
          theme: theme2,
          sticky: !!scroll?.y,
          fixed: columns.some((col) => col.fixed === "left") ? "left" : void 0,
          offset: 0,
          style: {
            width: "60px",
            zIndex: columns.some((col) => col.fixed === "left") ? 20 : !!scroll?.y ? 10 : "auto"
          },
          children: (rowSelection.type || "checkbox") === "checkbox" && /* @__PURE__ */ jsx4(
            Selection,
            {
              type: "checkbox",
              checked: allSelected,
              onChange: handleSelectAll,
              indeterminate
            }
          )
        }
      ),
      columns.map((column2, index) => {
        const isSorting = sortState.columnKey === column2.key;
        const showAsc = isSorting && sortState.direction === "ascend";
        const showDesc = isSorting && sortState.direction === "descend";
        let leftOffset = stickyOffsets.left[index];
        if (rowSelection && column2.fixed === "left") {
          const selectionWidth = 60;
          if (typeof leftOffset === "number") {
            leftOffset += selectionWidth;
          }
        }
        return /* @__PURE__ */ jsxs2(
          TableHeaderCell,
          {
            align: column2.align,
            sortable: column2.sortable || !!column2.sorter,
            onClick: () => handleSort(column2),
            style: { width: column2.width },
            theme: theme2,
            sticky: !!scroll?.y,
            fixed: column2.fixed,
            offset: column2.fixed === "left" ? leftOffset : stickyOffsets.right[index],
            children: [
              column2.title,
              (column2.sortable || column2.sorter) && /* @__PURE__ */ jsxs2(Fragment5, { children: [
                showAsc && /* @__PURE__ */ jsx4(SortAscending, {}),
                showDesc && /* @__PURE__ */ jsx4(SortDescending, {}),
                !showAsc && !showDesc && isSorting && /* @__PURE__ */ jsx4(SortDescending, { style: { opacity: 0.3 } })
              ] })
            ]
          },
          column2.key || index.toString()
        );
      })
    ] }) });
  };
  const renderRows = (0, import_react82.useCallback)(() => {
    return paginatedData.map((record, rowIndex) => {
      const rowKeyValue = getRowKey(record, rowIndex);
      const isSelected = selectedRowKeysSet.has(rowKeyValue);
      return /* @__PURE__ */ jsx4(
        MemoizedRow,
        {
          record,
          index: rowIndex,
          columns,
          rowSelection,
          onRowClick,
          isSelected,
          rowKey: rowKeyValue,
          onSelectChange: (checked) => handleRowSelect(record, checked, rowIndex),
          stickyOffsets
        },
        rowKeyValue
      );
    });
  }, [
    paginatedData,
    selectedRowKeysSet,
    getRowKey,
    columns,
    rowSelection,
    onRowClick,
    handleRowSelect,
    stickyOffsets
  ]);
  return /* @__PURE__ */ jsxs2(TableContainer, { theme: theme2, variant, className, style, children: [
    title && /* @__PURE__ */ jsx4(TableTitle, { theme: theme2, children: typeof title === "string" ? /* @__PURE__ */ jsx4("div", { className: "title-content", children: /* @__PURE__ */ jsx4("span", { children: title }) }) : title }),
    (rowSelection?.showSelectedInfo ?? rowSelection?.showSelectionTitle ?? true) && selectedRowKeys.length > 0 && /* @__PURE__ */ jsx4(SelectionInfo, { theme: theme2, children: rowSelection?.renderTitle?.(selectedRowKeys.length) ?? `Selected ${selectedRowKeys.length} items` }),
    /* @__PURE__ */ jsxs2(TableScrollContainer, { scroll, children: [
      /* @__PURE__ */ jsxs2(
        StyledTable,
        {
          bordered,
          striped,
          hoverable,
          scroll,
          children: [
            renderHeader(),
            paginatedData.length > 0 ? /* @__PURE__ */ jsx4(TableBody, { striped, hoverable, children: renderRows() }) : renderEmpty()
          ]
        }
      ),
      loading && /* @__PURE__ */ jsx4(LoadingContainer, { children: /* @__PURE__ */ jsx4(Spin, {}) }),
      footer && /* @__PURE__ */ jsx4(TableFooter, { theme: theme2, children: footer })
    ] }),
    pagination && pagination.total > 0 && /* @__PURE__ */ jsx4(
      Pagination3,
      {
        current: pagination.current,
        pageSize: pagination.pageSize,
        total: pagination.total,
        onChange: pagination.onChange,
        pageSizeOptions: pagination.pageSizeOptions,
        showSizeChanger: pagination.showSizeChanger,
        showTotal: pagination.showTotal,
        variant: variant === "borderless" ? "outline" : "default",
        align: variant === "borderless" ? "right" : void 0
      }
    )
  ] });
};
var table_default = Table;

// src/components/form/form.tsx
var import_react87 = require("react");

// src/components/form/form.styles.ts
var FormContainer = newStyled("form", {
  shouldForwardProp: (prop) => prop !== "layout"
})`
  display: ${({ layout }) => layout === "inline" ? "inline-flex" : "block"};
  flex-wrap: wrap;
  gap: ${({ layout }) => layout === "inline" ? "16px" : "0"};
  width: ${({ layout }) => layout === "inline" ? "auto" : "100%"};
`;
var FormItemContainer = newStyled("div", {
  shouldForwardProp: (prop) => !["layout", "required", "hasError"].includes(prop)
})`
  display: ${({ layout }) => layout === "inline" ? "inline-flex" : "flex"};
  flex-direction: ${({ layout }) => layout === "vertical" ? "column" : "row"};
  margin-bottom: ${({ layout }) => layout === "vertical" ? "24px" : "24px"};
  position: relative;
  
  ${({ hasError, theme: theme2 }) => hasError && css`
    .form-item-control {
      input, textarea, select {
        border-color: ${getColor(theme2, "red500")};
      }
    }
  `}
`;
var FormItemLabel = newStyled("label", {
  shouldForwardProp: (prop) => !["layout", "colon", "labelWidth", "required"].includes(prop)
})`
  display: flex;
  align-items: center;
  min-height: 32px;
  padding: ${({ layout }) => layout === "vertical" ? "0 0 8px 0" : "4px 8px 4px 0"};
  text-align: ${({ layout }) => layout === "vertical" ? "left" : "right"};
  justify-content: ${({ layout }) => layout === "vertical" ? "flex-start" : "flex-end"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: ${({ layout, labelWidth }) => {
  if (layout === "vertical") return "none";
  if (labelWidth) return `0 0 ${typeof labelWidth === "number" ? `${labelWidth}px` : labelWidth}`;
  return "0 0 auto";
}};
  width: ${({ layout, labelWidth }) => {
  if (layout === "vertical") return "100%";
  if (labelWidth) return typeof labelWidth === "number" ? `${labelWidth}px` : labelWidth;
  return "auto";
}};
  font-size: ${({ theme: theme2 }) => getTextSize(theme2, "sm")};
  
  &::before {
    display: ${({ required }) => required ? "inline-block" : "none"};
    margin-right: 4px;
    color: ${({ theme: theme2 }) => getColor(theme2, "red500")};
    font-size: 14px;
    font-family: SimSun, sans-serif;
    line-height: 1;
    content: "*";
  }
  
  &::after {
    content: ${({ colon }) => colon ? '"\uFF1A"' : '""'};
    position: relative;
    margin: 0 4px 0 1px;
  }
`;
var FormItemControl = newStyled("div", {
  shouldForwardProp: (prop) => prop !== "layout"
})`
  position: relative;
  flex: 1;
  min-width: 0;
  
  ${({ layout }) => layout === "inline" && css`
    min-width: 160px;
  `}
`;
var FormItemError = newStyled("div")`
  color: ${({ theme: theme2 }) => getColor(theme2, "red500")};
  transition: all 0.3s;
  min-height: 22px;
  font-size: 12px;
  line-height: 1.5;
  margin-top: 2px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
`;
var FormActions = newStyled("div", {
  shouldForwardProp: (prop) => prop !== "layout"
})`
  display: flex;
  justify-content: ${({ layout }) => layout === "vertical" ? "flex-start" : "center"};
  gap: 12px;
  margin-top: 24px;
  padding: ${({ layout }) => layout === "horizontal" ? "0 0 0 120px" : "0"};
  width: 100%;
`;
var FormGroup = newStyled.div`
  border: 1px solid ${({ theme: theme2 }) => getBorderColors(theme2, "gray300")};
  border-radius: ${({ theme: theme2 }) => getBorderRadius(theme2, "md")};
  padding: 16px;
  margin-bottom: 24px;
  
  .form-group-title {
    font-weight: 600;
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid ${({ theme: theme2 }) => getColor(theme2, "gray200")};
  }
`;

// src/components/form/form-item.tsx
var import_react85 = __toESM(require("react"));

// src/components/form/form-context.ts
var import_react84 = require("react");
var FormContext = (0, import_react84.createContext)({});
var useFormContext = () => {
  return (0, import_react84.useContext)(FormContext);
};

// src/components/form/form-item.tsx
var FormItem = ({
  name,
  label,
  children,
  rules = [],
  required = false,
  colon = true,
  layout: propLayout,
  help,
  form: propForm,
  className,
  labelClassName,
  controlClassName,
  errorClassName,
  labelWidth: propLabelWidth
}) => {
  const context = useFormContext();
  const form = propForm || context.form;
  const layout = propLayout || context.layout || "horizontal";
  const labelWidth = propLabelWidth || context.labelWidth;
  const isRequired = required || rules.some((rule) => rule.required);
  const error = form?.errors[name];
  const hasError = !!error;
  const uniqueId = (0, import_react85.useId)();
  const id = `form-item-${name}-${uniqueId}`;
  (0, import_react85.useEffect)(() => {
    if (form) {
      form.registerField(name, rules);
    }
  }, [name, form?.registerField, JSON.stringify(rules)]);
  const validateField = async (value) => {
    if (!form) return;
    const fieldValue = value !== void 0 ? value : form.getFieldValue(name);
    const errorMessage = await form.validateField(name, fieldValue);
    if (errorMessage) {
      form.setErrors((prev2) => ({ ...prev2, [name]: errorMessage }));
    } else if (form.errors[name]) {
      form.setErrors((prev2) => {
        const newErrors = { ...prev2 };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  const childNode = import_react85.default.isValidElement(children) ? import_react85.default.cloneElement(children, {
    id,
    value: form?.getFieldValue(name),
    status: hasError ? "error" : void 0,
    onChange: (...args) => {
      children.props.onChange?.(...args);
      const e = args[0];
      const newValue = e.target?.value ?? e;
      form?.setFieldValue(name, newValue);
      validateField(newValue);
    },
    onBlur: (...args) => {
      children.props.onBlur?.(...args);
      validateField();
    }
  }) : children;
  return /* @__PURE__ */ jsxs2(
    FormItemContainer,
    {
      layout,
      required: isRequired,
      hasError,
      className,
      children: [
        label && /* @__PURE__ */ jsx4(
          FormItemLabel,
          {
            htmlFor: id,
            layout,
            colon,
            className: labelClassName,
            labelWidth,
            required: isRequired,
            children: label
          }
        ),
        /* @__PURE__ */ jsxs2(FormItemControl, { className: controlClassName, layout, children: [
          childNode,
          hasError && /* @__PURE__ */ jsx4(FormItemError, { className: errorClassName, children: error }),
          !hasError && help && /* @__PURE__ */ jsx4(FormItemError, { style: { color: "#666" }, children: help })
        ] })
      ]
    }
  );
};

// src/components/form/useForm.ts
var import_react86 = require("react");
var useForm = (initialValues = {}) => {
  const [formData, setFormData] = (0, import_react86.useState)(initialValues);
  const [errors, setErrors] = (0, import_react86.useState)({});
  const fieldRules = (0, import_react86.useRef)({});
  const initialDataRef = (0, import_react86.useRef)(initialValues);
  const getFieldValue = (0, import_react86.useCallback)((name) => {
    return formData[name];
  }, [formData]);
  const getFieldsValue = (0, import_react86.useCallback)(() => {
    return { ...formData };
  }, [formData]);
  const setFieldValue = (0, import_react86.useCallback)((name, value) => {
    setFormData((prev2) => ({ ...prev2, [name]: value }));
    setErrors((prev2) => {
      const newErrors = { ...prev2 };
      delete newErrors[name];
      return newErrors;
    });
  }, []);
  const setInitialValues = (0, import_react86.useCallback)((values) => {
    initialDataRef.current = values;
    setFormData(values);
  }, []);
  const setFieldsValue = (0, import_react86.useCallback)((values) => {
    setFormData((prev2) => ({ ...prev2, ...values }));
    setErrors({});
  }, []);
  const resetFields = (0, import_react86.useCallback)(() => {
    setFormData(initialDataRef.current);
    setErrors({});
  }, []);
  const registerField = (0, import_react86.useCallback)((name, rules = []) => {
    fieldRules.current[name] = rules;
  }, []);
  const validateField = (0, import_react86.useCallback)(async (name, value) => {
    const rules = fieldRules.current[name];
    if (!rules || rules.length === 0) return null;
    for (const rule of rules) {
      if (rule.required && (value === void 0 || value === null || value === "")) {
        return rule.message || "\u6B64\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879";
      }
      if (rule.pattern && value && !rule.pattern.test(value)) {
        return rule.message || "\u683C\u5F0F\u4E0D\u6B63\u786E";
      }
      if (rule.min !== void 0) {
        if (typeof value === "number" && value < rule.min) {
          return rule.message || `\u6700\u5C0F\u503C\u4E0D\u80FD\u5C0F\u4E8E${rule.min}`;
        }
        if (typeof value === "string" && value.length < rule.min) {
          return rule.message || `\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E${rule.min}`;
        }
      }
      if (rule.max !== void 0) {
        if (typeof value === "number" && value > rule.max) {
          return rule.message || `\u6700\u5927\u503C\u4E0D\u80FD\u5927\u4E8E${rule.max}`;
        }
        if (typeof value === "string" && value.length > rule.max) {
          return rule.message || `\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E${rule.max}`;
        }
      }
      if (rule.validator) {
        const result = rule.validator(value);
        if (result instanceof Promise) {
          const asyncResult = await result;
          if (asyncResult !== true) {
            return typeof asyncResult === "string" ? asyncResult : "\u9A8C\u8BC1\u5931\u8D25";
          }
        } else if (result !== true) {
          return typeof result === "string" ? result : "\u9A8C\u8BC1\u5931\u8D25";
        }
      }
    }
    return null;
  }, []);
  const validate = (0, import_react86.useCallback)(async () => {
    const newErrors = {};
    let isValid = true;
    for (const [name, rules] of Object.entries(fieldRules.current)) {
      if (rules && rules.length > 0) {
        const value = formData[name];
        const error = await validateField(name, value);
        if (error) {
          newErrors[name] = error;
          isValid = false;
        }
      }
    }
    setErrors(newErrors);
    return isValid;
  }, [formData, validateField]);
  return (0, import_react86.useMemo)(() => ({
    getFieldValue,
    getFieldsValue,
    setFieldValue,
    setFieldsValue,
    resetFields,
    validate,
    validateField,
    errors,
    registerField,
    setInitialValues,
    setErrors,
    submit: () => {
    }
    // 将在Form组件中实现
  }), [getFieldValue, getFieldsValue, setFieldValue, setFieldsValue, resetFields, validate, validateField, errors, registerField, setInitialValues, setErrors]);
};

// src/components/form/form.tsx
var Form = (0, import_react87.forwardRef)(({
  form: propForm,
  layout = "horizontal",
  children,
  onFinish,
  onFinishFailed,
  initialValues = {},
  className,
  style,
  labelWidth
}, ref) => {
  const formResult = useForm(initialValues);
  const internalForm = formResult;
  const form = propForm || internalForm;
  const formRef = (0, import_react87.useRef)(form);
  formRef.current = form;
  const stableInitialValues = (0, import_react87.useMemo)(() => initialValues, [JSON.stringify(initialValues)]);
  (0, import_react87.useImperativeHandle)(ref, () => formRef.current, []);
  (0, import_react87.useEffect)(() => {
    if (stableInitialValues && Object.keys(stableInitialValues).length > 0) {
      formRef.current.setInitialValues(stableInitialValues);
    }
  }, [stableInitialValues]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await formRef.current.validate();
    if (isValid) {
      onFinish?.(formRef.current.getFieldsValue());
    } else {
      onFinishFailed?.(formRef.current.errors);
    }
  };
  return /* @__PURE__ */ jsx4(FormContext.Provider, { value: { form: formRef.current, layout, labelWidth }, children: /* @__PURE__ */ jsx4(
    FormContainer,
    {
      layout,
      className,
      style,
      onSubmit: handleSubmit,
      children
    }
  ) });
});
var FormGroup2 = ({
  title,
  children,
  className
}) => {
  return /* @__PURE__ */ jsxs2(FormGroup, { className, children: [
    title && /* @__PURE__ */ jsx4("div", { className: "form-group-title", children: title }),
    children
  ] });
};
var FormActions2 = ({
  children,
  layout,
  className
}) => {
  const context = (0, import_react87.useContext)(FormContext);
  const actualLayout = layout || context.layout;
  return /* @__PURE__ */ jsx4(FormActions, { layout: actualLayout, className, children });
};

// src/components/tabs/tabs.tsx
var import_react89 = __toESM(require("react"));

// src/components/tabs/tabs.styles.ts
var TabsContainer = newStyled.div`
  display: flex;
  flex-direction: ${({ $position }) => {
  if ($position === "bottom") return "column-reverse";
  if ($position === "left") return "row";
  if ($position === "right") return "row-reverse";
  return "column";
}};
  width: 100%;
  overflow: hidden;
`;
var TabsNav = newStyled.div`
  display: flex;
  flex: none;
  position: relative;
  margin: 0;
  
  /* Border Logic - Implemented as pseudo-element to allow active tab to overlap */
  &::before {
    content: '';
    position: absolute;
    z-index: 0;
    pointer-events: none;
    ${({ $position, $type }) => {
  if ($type === "segment") return css`display: none;`;
  const color = "#e8e8e8";
  switch ($position) {
    case "top":
      return css`
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            background: ${color};
          `;
    case "bottom":
      return css`
            left: 0;
            top: 0;
            width: 100%;
            height: 1px;
            background: ${color};
          `;
    case "left":
      return css`
            right: 0;
            top: 0;
            width: 1px;
            height: 100%;
            background: ${color};
          `;
    case "right":
      return css`
            left: 0;
            top: 0;
            width: 1px;
            height: 100%;
            background: ${color};
          `;
    default:
      return css`display: none;`;
  }
}}
  }

  /* Old border logic removed in favor of ::before */
   ${({ $position: _position, $type, $radius }) => {
  if ($type === "segment") {
    let borderRadius = "6px";
    if ($radius) {
      switch ($radius) {
        case "none":
          borderRadius = "0";
          break;
        case "sm":
          borderRadius = "4px";
          break;
        case "md":
          borderRadius = "6px";
          break;
        case "lg":
          borderRadius = "10px";
          break;
        case "full":
          borderRadius = "9999px";
          break;
      }
    }
    return css`
         background-color: #f5f5f5;
         padding: 4px;
         border-radius: ${borderRadius};
         display: inline-flex;
       `;
  }
  return css``;
}}

  flex-direction: ${({ $position }) => $position === "left" || $position === "right" ? "column" : "row"};
    
  white-space: nowrap;
  overflow: auto;
  
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;
var TabPane = newStyled.div`
  flex: auto;
  display: ${({ $active }) => $active ? "block" : "none"};
  padding: 16px;
  background: #fff;
`;
var TabNavItem = newStyled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ $disabled }) => $disabled ? "not-allowed" : "pointer"};
  font-size: 14px;
  transition: all 0.3s;
  
  /* Padding & Margin based on Type/Position */
  ${({ $type, $position, $size, $height, $radius }) => {
  if ($type === "segment") {
    let height = "32px";
    let padding = "4px 12px";
    let fontSize = "14px";
    let borderRadius = "4px";
    if ($size === "large") {
      height = "40px";
      padding = "6px 20px";
      fontSize = "16px";
    } else if ($size === "small") {
      height = "24px";
      padding = "2px 8px";
      fontSize = "12px";
    }
    if ($height) {
      height = typeof $height === "number" ? `${$height}px` : $height;
    }
    if ($radius) {
      switch ($radius) {
        case "none":
          borderRadius = "0";
          break;
        case "sm":
          borderRadius = "2px";
          break;
        case "md":
          borderRadius = "4px";
          break;
        case "lg":
          borderRadius = "8px";
          break;
        case "full":
          borderRadius = "9999px";
          break;
      }
    }
    return css`
        padding: ${padding};
        height: ${height};
        font-size: ${fontSize};
        margin: 0;
        border-radius: ${borderRadius};
        border: none;
        background: transparent;
        flex: 1;
        text-align: center;
      `;
  }
  if ($type === "card" || $type === "editable-card") {
    return css`
        padding: 8px 16px;
        margin-right: 2px;
        border: 1px solid #e8e8e8;
        border-radius: 4px 4px 0 0;
        background: #fafafa;
      `;
  }
  if ($position === "left" || $position === "right") {
    return css`
        padding: 12px 24px;
        margin: 0;
      `;
  }
  return css`
      padding: 12px 0;
      margin: 0 32px 0 0;
    `;
}}

  /* Active State */
  ${({ $active, $type, $disabled, $segmentColor }) => {
  if ($disabled) {
    return css`
        color: #00000040;
      `;
  }
  if ($active) {
    if ($type === "segment") {
      let color = "#000";
      let bg = "#fff";
      switch ($segmentColor) {
        case "primary":
          color = "#fff";
          bg = "#1677ff";
          break;
        case "secondary":
          color = "#fff";
          bg = "#722ed1";
          break;
        case "success":
          color = "#fff";
          bg = "#52c41a";
          break;
        case "warning":
          color = "#fff";
          bg = "#faad14";
          break;
        case "danger":
          color = "#fff";
          bg = "#ff4d4f";
          break;
        default:
          if ($segmentColor) {
            color = "#fff";
            bg = $segmentColor;
          }
          break;
      }
      return css`
          color: ${color};
          background: ${bg};
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
          font-weight: 500;
        `;
    }
    if ($type === "card" || $type === "editable-card") {
      return css`
          color: #1890ff;
          background: #fff;
          border-bottom-color: #fff;
          font-weight: 500;
          z-index: 1;
        `;
    }
    return css`
        color: #1890ff;
        font-weight: 500;
      `;
  }
  if ($type === "segment") {
    return css`
        color: #666;
        &:hover {
          color: #333;
          background: rgba(0, 0, 0, 0.04);
        }
      `;
  }
  return css`
      color: #000000d9;
      &:hover {
        color: #40a9ff;
      }
    `;
}}

  /* Bottom Border for Line Type */
  &::after {
    content: '';
    position: absolute;
    background-color: #1890ff;
    transition: all 0.3s;
    
    ${({ $active, $type, $position }) => {
  if ($type !== "line" || !$active) return css`transform: scale(0); opacity: 0;`;
  switch ($position) {
    case "top":
      return css`
            left: 0;
            bottom: -1px;
            width: 100%;
            height: 2px;
            transform: scale(1);
            opacity: 1;
          `;
    case "bottom":
      return css`
            left: 0;
            top: -1px;
            width: 100%;
            height: 2px;
            transform: scale(1);
            opacity: 1;
          `;
    case "left":
      return css`
            right: -1px;
            top: 0;
            width: 2px;
            height: 100%;
            transform: scale(1);
            opacity: 1;
          `;
    case "right":
      return css`
            left: -1px;
            top: 0;
            width: 2px;
            height: 100%;
            transform: scale(1);
            opacity: 1;
          `;
    default:
      return "";
  }
}}
  }
`;
var TabIcon = newStyled.span`
  margin-right: 8px;
  display: inline-flex;
  align-items: center;
`;
var CloseButton = newStyled.span`
  margin-left: 8px;
  font-size: 12px;
  color: #00000073;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  padding: 2px;

  &:hover {
    color: #000000d9;
    background: rgba(0, 0, 0, 0.06);
  }
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

// src/components/tabs/tabs.tsx
var Tabs = import_react89.default.forwardRef(({
  activeKey: propActiveKey,
  defaultActiveKey,
  onChange,
  onEdit,
  onTabClick,
  items = [],
  tabPosition = "top",
  type = "line",
  className,
  style,
  size,
  tabBarExtraContent,
  segmentColor,
  tabHeight,
  radius
}, ref) => {
  const [activeKey, setActiveKey] = (0, import_react89.useState)(
    propActiveKey || defaultActiveKey || (items.length > 0 ? items[0].key : "")
  );
  (0, import_react89.useEffect)(() => {
    if (propActiveKey !== void 0) {
      setActiveKey(propActiveKey);
    }
  }, [propActiveKey]);
  (0, import_react89.useEffect)(() => {
    if (!activeKey && items.length > 0 && propActiveKey === void 0) {
      setActiveKey(items[0].key);
    }
  }, [items, activeKey, propActiveKey]);
  const handleTabClick = (key, disabled, event) => {
    if (disabled) return;
    if (onTabClick) {
      onTabClick(key, event);
    }
    if (activeKey !== key) {
      if (propActiveKey === void 0) {
        setActiveKey(key);
      }
      onChange?.(key);
    }
  };
  const handleClose = (e, key) => {
    e.stopPropagation();
    onEdit?.(key, "remove");
  };
  return /* @__PURE__ */ jsxs2(TabsContainer, { ref, $position: tabPosition, className, style, children: [
    /* @__PURE__ */ jsxs2(TabsNav, { $position: tabPosition, $type: type, $size: size, $radius: radius, children: [
      items.map((item) => /* @__PURE__ */ jsxs2(
        TabNavItem,
        {
          $active: activeKey === item.key,
          $disabled: !!item.disabled,
          $position: tabPosition,
          $type: type,
          $size: size,
          $segmentColor: segmentColor,
          $height: tabHeight,
          $radius: radius,
          onClick: (e) => handleTabClick(item.key, item.disabled, e),
          children: [
            item.icon && /* @__PURE__ */ jsx4(TabIcon, { children: item.icon }),
            item.label,
            type === "editable-card" && item.closable !== false && /* @__PURE__ */ jsx4(CloseButton, { onClick: (e) => handleClose(e, item.key), children: /* @__PURE__ */ jsx4(CloseIcon, { size: 10 }) })
          ]
        },
        item.key
      )),
      tabBarExtraContent && /* @__PURE__ */ jsx4("div", { style: { marginLeft: "auto" }, children: tabBarExtraContent })
    ] }),
    /* @__PURE__ */ jsx4("div", { style: { flex: 1, width: "100%", overflow: "hidden" }, children: items.map((item) => /* @__PURE__ */ jsx4(TabPane, { $active: activeKey === item.key, children: item.children }, item.key)) })
  ] });
});
Tabs.displayName = "Tabs";

// src/components/tabs/tabs.types.ts
var import_react90 = require("react");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alert,
  Breadcrumb,
  Button,
  Checkbox,
  CheckboxGroup,
  Collapse,
  CollapseContainer,
  Divider,
  Drawer,
  Flex,
  Form,
  FormActions,
  FormGroup,
  FormItem,
  Grid,
  GridItem,
  Input,
  List,
  ListItem,
  Menu,
  MessageProvider,
  Modal,
  ModalApi,
  ModalProvider,
  Pagination,
  PanelContainer,
  PanelContent,
  PanelHeader,
  Popconfirm,
  Progress,
  Radio,
  RadioGroup,
  Rate,
  Select,
  Spin,
  Switch,
  Table,
  Tabs,
  Tag,
  TagGroup,
  TextArea,
  Tooltip,
  Tree,
  Typography,
  useForm,
  useMessage,
  useMessageContext,
  useModal
});
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
