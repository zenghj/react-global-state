"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),React__default=_interopDefault(React),GlobalContext=React__default.createContext({}),_createClass=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Provider=function(e){function l(){var e,t,r;_classCallCheck(this,l);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=r=_possibleConstructorReturn(this,(e=l.__proto__||Object.getPrototypeOf(l)).call.apply(e,[this].concat(o))),_initialiseProps.call(r),_possibleConstructorReturn(r,t)}return _inherits(l,React.Component),_createClass(l,[{key:"render",value:function(){return React__default.createElement(GlobalContext.Provider,{value:{globalState:this.state,setGlobalState:this.setGlobalState}},this.props.children)}}]),l}(),_initialiseProps=function(){var e=this;this.state=this.props.globalState,this.setGlobalState=function(){e.setState.apply(e,arguments)}},_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_createClass$1=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();function _classCallCheck$1(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn$1(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits$1(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var WithGlobalState=function(o){var e=function(e){function t(){return _classCallCheck$1(this,t),_possibleConstructorReturn$1(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _inherits$1(t,React.Component),_createClass$1(t,[{key:"render",value:function(){var n=this;return React__default.createElement(GlobalContext.Consumer,null,function(e){var t=e.globalState,r=e.setGlobalState;return React__default.createElement(o,_extends({},n.props,{globalState:t,setGlobalState:r}))})}}]),t}();return e.displayName="WithGlobalState("+(o.displayName||o.name||"Component"),e};exports.Provider=Provider,exports.withGlobalState=WithGlobalState;
