webpackJsonp([17],{361:function(n,t,e){n.exports={basic:e(814)}},480:function(n,t,e){"use strict";t.__esModule=!0,t.default=function(n,t){var e={};for(var a in n)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}},505:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(e(506)),s=o(e(507));function o(n){return n&&n.__esModule?n:{default:n}}a.default.Item=s.default,t.default=a.default,n.exports=t.default},506:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},s=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),o=r(e(0)),p=r(e(3));function r(n){return n&&n.__esModule?n:{default:n}}function c(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var u=function(n,t){var e={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(n);s<a.length;s++)t.indexOf(a[s])<0&&(e[a[s]]=n[a[s]])}return e},l=function(n){function t(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,o.default.Component),s(t,[{key:"render",value:function(){var n,t=this.props,e=t.direction,s=t.wrap,r=t.justify,l=t.align,i=t.alignContent,f=t.className,k=t.children,d=t.prefixCls,b=t.style,y=u(t,["direction","wrap","justify","align","alignContent","className","children","prefixCls","style"]),h=(0,p.default)(d,f,(c(n={},d+"-dir-row","row"===e),c(n,d+"-dir-row-reverse","row-reverse"===e),c(n,d+"-dir-column","column"===e),c(n,d+"-dir-column-reverse","column-reverse"===e),c(n,d+"-nowrap","nowrap"===s),c(n,d+"-wrap","wrap"===s),c(n,d+"-wrap-reverse","wrap-reverse"===s),c(n,d+"-justify-start","start"===r),c(n,d+"-justify-end","end"===r),c(n,d+"-justify-center","center"===r),c(n,d+"-justify-between","between"===r),c(n,d+"-justify-around","around"===r),c(n,d+"-align-start","start"===l),c(n,d+"-align-center","center"===l),c(n,d+"-align-end","end"===l),c(n,d+"-align-baseline","baseline"===l),c(n,d+"-align-stretch","stretch"===l),c(n,d+"-align-content-start","start"===i),c(n,d+"-align-content-end","end"===i),c(n,d+"-align-content-center","center"===i),c(n,d+"-align-content-between","between"===i),c(n,d+"-align-content-around","around"===i),c(n,d+"-align-content-stretch","stretch"===i),n));return o.default.createElement("div",a({className:h,style:b},y),k)}}]),t}();t.default=l,l.defaultProps={prefixCls:"am-flexbox",align:"center"},n.exports=t.default},507:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},s=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),o=r(e(0)),p=r(e(3));function r(n){return n&&n.__esModule?n:{default:n}}var c=function(n,t){var e={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(n);s<a.length;s++)t.indexOf(a[s])<0&&(e[a[s]]=n[a[s]])}return e},u=function(n){function t(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,o.default.Component),s(t,[{key:"render",value:function(){var n=this.props,t=n.children,e=n.className,s=n.prefixCls,r=n.style,u=c(n,["children","className","prefixCls","style"]),l=(0,p.default)(s+"-item",e);return o.default.createElement("div",a({className:l,style:r},u),t)}}]),t}();t.default=u,u.defaultProps={prefixCls:"am-flexbox"},n.exports=t.default},508:function(n,t,e){"use strict";e(29),e(509)},509:function(n,t){},517:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(n){return Object.keys(n).reduce(function(t,e){return"aria-"!==e.substr(0,5)&&"data-"!==e.substr(0,5)&&"role"!==e||(t[e]=n[e]),t},{})},n.exports=t.default},627:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),s=r(e(0)),o=r(e(641)),p=r(e(3));function r(n){return n&&n.__esModule?n:{default:n}}var c=function(n,t){var e={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(n);s<a.length;s++)t.indexOf(a[s])<0&&(e[a[s]]=n[a[s]])}return e},u=function(n){function t(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,s.default.Component),a(t,[{key:"render",value:function(){var n=this.props,t=n.className,e=n.style,a=c(n,["className","style"]),r=a.prefixCls,u=a.children,l=(0,p.default)(r+"-wrapper",t);"class"in a&&delete a.class;var i=s.default.createElement("label",{className:l,style:e},s.default.createElement(o.default,a),u);return this.props.wrapLabel?i:s.default.createElement(o.default,this.props)}}]),t}();t.default=u,u.defaultProps={prefixCls:"am-checkbox",wrapLabel:!0},n.exports=t.default},641:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(659);e.d(t,"default",function(){return a.a})},659:function(n,t,e){"use strict";var a=e(2),s=e.n(a),o=e(34),p=e.n(o),r=e(480),c=e.n(r),u=e(4),l=e.n(u),i=e(8),f=e.n(i),k=e(5),d=e.n(k),b=e(6),y=e.n(b),h=e(0),g=e(1),v=e.n(g),m=e(660),O=e.n(m),j=e(3),w=e.n(j),x=function(n){function t(n){l()(this,t);var e=d()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));C.call(e);var a="checked"in n?n.checked:n.defaultChecked;return e.state={checked:a},e}return y()(t,n),f()(t,[{key:"componentWillReceiveProps",value:function(n){"checked"in n&&this.setState({checked:n.checked})}},{key:"shouldComponentUpdate",value:function(){for(var n=arguments.length,t=Array(n),e=0;e<n;e++)t[e]=arguments[e];return O.a.shouldComponentUpdate.apply(this,t)}},{key:"render",value:function(){var n,t=this.props,e=t.prefixCls,a=t.className,o=t.style,r=t.name,u=t.type,l=t.disabled,i=t.readOnly,f=t.tabIndex,k=t.onClick,d=t.onFocus,b=t.onBlur,y=c()(t,["prefixCls","className","style","name","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur"]),g=Object.keys(y).reduce(function(n,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(n[t]=y[t]),n},{}),v=this.state.checked,m=w()(e,a,(n={},p()(n,e+"-checked",v),p()(n,e+"-disabled",l),n));return h.default.createElement("span",{className:m,style:o},h.default.createElement("input",s()({name:r,type:u,readOnly:i,disabled:l,tabIndex:f,className:e+"-input",checked:!!v,onClick:k,onFocus:d,onBlur:b,onChange:this.handleChange},g)),h.default.createElement("span",{className:e+"-inner"}))}}]),t}(h.default.Component);x.propTypes={prefixCls:v.a.string,className:v.a.string,style:v.a.object,name:v.a.string,type:v.a.string,defaultChecked:v.a.oneOfType([v.a.number,v.a.bool]),checked:v.a.oneOfType([v.a.number,v.a.bool]),disabled:v.a.bool,onFocus:v.a.func,onBlur:v.a.func,onChange:v.a.func,onClick:v.a.func,tabIndex:v.a.string,readOnly:v.a.bool},x.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}};var C=function(){var n=this;this.handleChange=function(t){var e=n.props;e.disabled||("checked"in e||n.setState({checked:t.target.checked}),e.onChange({target:s()({},e,{checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()}}))}};t.a=x},660:function(n,t,e){var a=e(661);var s={shouldComponentUpdate:function(n,t){return function(n,t,e){return!a(n.props,t)||!a(n.state,e)}(this,n,t)}};n.exports=s},661:function(n,t,e){"use strict";var a=e(662);n.exports=function(n,t,e,s){var o=e?e.call(s,n,t):void 0;if(void 0!==o)return!!o;if(n===t)return!0;if("object"!=typeof n||null===n||"object"!=typeof t||null===t)return!1;var p=a(n),r=a(t),c=p.length;if(c!==r.length)return!1;s=s||null;for(var u=Object.prototype.hasOwnProperty.bind(t),l=0;l<c;l++){var i=p[l];if(!u(i))return!1;var f=n[i],k=t[i],d=e?e.call(s,f,k,i):void 0;if(!1===d||void 0===d&&f!==k)return!1}return!0}},662:function(n,t,e){var a=e(663),s=e(664),o=e(665),p=/^\d+$/,r=Object.prototype.hasOwnProperty,c=a(Object,"keys"),u=9007199254740991;var l,i=(l="length",function(n){return null==n?void 0:n[l]});function f(n,t){return n="number"==typeof n||p.test(n)?+n:-1,t=null==t?u:t,n>-1&&n%1==0&&n<t}function k(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=u}function d(n){for(var t=function(n){if(null==n)return[];b(n)||(n=Object(n));var t=n.length;t=t&&k(t)&&(o(n)||s(n))&&t||0;var e=n.constructor,a=-1,p="function"==typeof e&&e.prototype===n,c=Array(t),u=t>0;for(;++a<t;)c[a]=a+"";for(var l in n)u&&f(l,t)||"constructor"==l&&(p||!r.call(n,l))||c.push(l);return c}(n),e=t.length,a=e&&n.length,p=!!a&&k(a)&&(o(n)||s(n)),c=-1,u=[];++c<e;){var l=t[c];(p&&f(l,a)||r.call(n,l))&&u.push(l)}return u}function b(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}var y=c?function(n){var t,e=null==n?void 0:n.constructor;return"function"==typeof e&&e.prototype===n||"function"!=typeof n&&(null!=(t=n)&&k(i(t)))?d(n):b(n)?c(n):[]}:d;n.exports=y},663:function(n,t){var e="[object Function]",a=/^\[object .+?Constructor\]$/;var s=Object.prototype,o=Function.prototype.toString,p=s.hasOwnProperty,r=s.toString,c=RegExp("^"+o.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");n.exports=function(n,t){var s=null==n?void 0:n[t];return function(n){return null!=n&&(function(n){return function(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}(n)&&r.call(n)==e}(n)?c.test(o.call(n)):function(n){return!!n&&"object"==typeof n}(n)&&a.test(n))}(s)?s:void 0}},664:function(n,t){var e=9007199254740991,a="[object Arguments]",s="[object Function]",o="[object GeneratorFunction]",p=Object.prototype,r=p.hasOwnProperty,c=p.toString,u=p.propertyIsEnumerable;n.exports=function(n){return function(n){return function(n){return!!n&&"object"==typeof n}(n)&&function(n){return null!=n&&function(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=e}(n.length)&&!function(n){var t=function(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}(n)?c.call(n):"";return t==s||t==o}(n)}(n)}(n)&&r.call(n,"callee")&&(!u.call(n,"callee")||c.call(n)==a)}},665:function(n,t){var e="[object Function]",a=/^\[object .+?Constructor\]$/;function s(n){return!!n&&"object"==typeof n}var o,p,r=Object.prototype,c=Function.prototype.toString,u=r.hasOwnProperty,l=r.toString,i=RegExp("^"+c.call(u).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),f=(o=Array,function(n){return null!=n&&(function(n){return function(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}(n)&&l.call(n)==e}(n)?i.test(c.call(n)):s(n)&&a.test(n))}(p=null==o?void 0:o["isArray"])?p:void 0),k=9007199254740991;var d=f||function(n){return s(n)&&function(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=k}(n.length)&&"[object Array]"==l.call(n)};n.exports=d},706:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=p(e(627)),s=p(e(707)),o=p(e(708));function p(n){return n&&n.__esModule?n:{default:n}}a.default.CheckboxItem=s.default,a.default.AgreeItem=o.default,t.default=a.default,n.exports=t.default},707:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},s=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),o=u(e(0)),p=u(e(3)),r=u(e(129)),c=u(e(627));function u(n){return n&&n.__esModule?n:{default:n}}var l=function(n,t){var e={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(n);s<a.length;s++)t.indexOf(a[s])<0&&(e[a[s]]=n[a[s]])}return e},i=r.default.Item;function f(){}var k=function(n){function t(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,o.default.Component),s(t,[{key:"render",value:function(){var n,t,e,s=this,r=this.props,u=r.listPrefixCls,k=(r.onChange,r.disabled),d=r.checkboxProps,b=r.onClick,y=l(r,["listPrefixCls","onChange","disabled","checkboxProps","onClick"]),h=y.prefixCls,g=y.className,v=y.children,m=(0,p.default)(h+"-item",g,(e=!0===k,(t=h+"-item-disabled")in(n={})?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n));k||(y.onClick=b||f);var O={};return["name","defaultChecked","checked","onChange","disabled"].forEach(function(n){n in s.props&&(O[n]=s.props[n])}),o.default.createElement(i,a({},y,{prefixCls:u,className:m,thumb:o.default.createElement(c.default,a({},d,O))}),v)}}]),t}();t.default=k,k.defaultProps={prefixCls:"am-checkbox",listPrefixCls:"am-list",checkboxProps:{}},n.exports=t.default},708:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},s=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),o=u(e(0)),p=u(e(3)),r=u(e(627)),c=u(e(517));function u(n){return n&&n.__esModule?n:{default:n}}var l=function(n,t){var e={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(n);s<a.length;s++)t.indexOf(a[s])<0&&(e[a[s]]=n[a[s]])}return e},i=function(n){function t(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,o.default.Component),s(t,[{key:"render",value:function(){var n=this.props,t=n.style,e=l(n,["style"]),s=e.prefixCls,u=e.className,i=(0,p.default)(s+"-agree",u);return o.default.createElement("div",a({},(0,c.default)(e),{className:i,style:t}),o.default.createElement(r.default,a({},e,{className:s+"-agree-label"})))}}]),t}();t.default=i,i.defaultProps={prefixCls:"am-checkbox"},n.exports=t.default},709:function(n,t,e){"use strict";e(29),e(128),e(710)},710:function(n,t){},814:function(n,t,e){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/checkbox/demo/basic.md",id:"components-checkbox-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Checkbox<span class="token punctuation">,</span> Flex <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> CheckboxItem <span class="token operator">=</span> Checkbox<span class="token punctuation">.</span>CheckboxItem<span class="token punctuation">;</span>\n<span class="token keyword">const</span> AgreeItem <span class="token operator">=</span> Checkbox<span class="token punctuation">.</span>AgreeItem<span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'Ph.D.\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'Bachelor\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'College diploma\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'CheckboxItem demo\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>i <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CheckboxItem</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>i<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token punctuation">{</span>i<span class="token punctuation">.</span>label<span class="token punctuation">}</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CheckboxItem</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CheckboxItem</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>disabled<span class="token punctuation">"</span></span> <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">defaultChecked</span> <span class="token attr-name">multipleLine</span><span class="token punctuation">></span></span>\n          Undergraduate<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item.Brief</span><span class="token punctuation">></span></span>Auxiliary text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item.Brief</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CheckboxItem</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Flex</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Flex.Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AgreeItem</span> <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'checkbox\'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            Agree <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'agree it\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>agreement<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AgreeItem</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Flex.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Flex</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=e(0),t=(e(0),p(e(505))),a=p(e(129)),s=p(e(706)),o=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}();function p(n){return n&&n.__esModule?n:{default:n}}function r(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}e(508),e(128),e(709);var c=s.default.CheckboxItem,u=s.default.AgreeItem,l=function(e){function s(){var n,t,e;!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);for(var a=arguments.length,o=Array(a),p=0;p<a;p++)o[p]=arguments[p];return t=e=r(this,(n=s.__proto__||Object.getPrototypeOf(s)).call.apply(n,[this].concat(o))),e.onChange=function(n){console.log(n)},r(e,t)}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(s,n.Component),o(s,[{key:"render",value:function(){var e=this;return n.createElement("div",null,n.createElement(a.default,{renderHeader:function(){return"CheckboxItem demo"}},[{value:0,label:"Ph.D."},{value:1,label:"Bachelor"},{value:2,label:"College diploma"}].map(function(t){return n.createElement(c,{key:t.value,onChange:function(){return e.onChange(t.value)}},t.label)}),n.createElement(c,{key:"disabled","data-seed":"logId",disabled:!0,defaultChecked:!0,multipleLine:!0},"Undergraduate",n.createElement(a.default.Item.Brief,null,"Auxiliary text"))),n.createElement(t.default,null,n.createElement(t.default.Item,null,n.createElement(u,{"data-seed":"logId",onChange:function(n){return console.log("checkbox",n)}},"Agree ",n.createElement("a",{onClick:function(n){n.preventDefault(),alert("agree it")}},"agreement")))))}}]),s}();return n.createElement(l,null)}}}});