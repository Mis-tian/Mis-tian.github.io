webpackJsonp([49],{1643:function(n,s,a){n.exports={basic:a(1911),custom:a(1912)}},1911:function(n,s,a){n.exports={content:{"zh-CN":[["p","\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"]],"en-US":[["p","The most basic usage."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/back-top/demo/basic.md",id:"components-back-top-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> BackTop <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BackTop</span> <span class="token punctuation">/></span></span>\n    Scroll down to see the bottom<span class="token operator">-</span>right\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'rgba(64, 64, 64, 0.6)\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span> gray <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span>\n    button<span class="token punctuation">.</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(8),a(36));return n.createElement("div",null,n.createElement(s.BackTop,null),"Scroll down to see the bottom-right",n.createElement("strong",{style:{color:"rgba(64, 64, 64, 0.6)"}}," gray "),"button.")}}},1912:function(n,s,a){n.exports={content:{"zh-CN":[["p","\u53ef\u4ee5\u81ea\u5b9a\u4e49\u56de\u5230\u9876\u90e8\u6309\u94ae\u7684\u6837\u5f0f\uff0c\u9650\u5236\u5bbd\u9ad8\uff1a",["code","40px * 40px"],"\u3002"]],"en-US":[["p","You can customize the style of the button, just note the size limit: no more than ",["code","40px * 40px"],"."]]},meta:{order:1,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u6837\u5f0f","en-US":"Custom style"},filename:"components/back-top/demo/custom.md",id:"components-back-top-demo-custom"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> BackTop <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BackTop</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ant-back-top-inner<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>UP<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BackTop</span><span class="token punctuation">></span></span>\n    Scroll down to see the bottom<span class="token operator">-</span>right\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'#1088e9\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span> blue <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span>\n    button<span class="token punctuation">.</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(8),a(36));return n.createElement("div",null,n.createElement(s.BackTop,null,n.createElement("div",{className:"ant-back-top-inner"},"UP")),"Scroll down to see the bottom-right",n.createElement("strong",{style:{color:"#1088e9"}}," blue "),"button.")},style:"#components-back-top-demo-custom .ant-back-top {\n  bottom: 100px;\n}\n#components-back-top-demo-custom .ant-back-top-inner {\n  height: 40px;\n  width: 40px;\n  line-height: 40px;\n  border-radius: 4px;\n  background-color: #1088e9;\n  color: #fff;\n  text-align: center;\n  font-size: 20px;\n}",highlightedStyle:'<span class="token selector"><span class="token id">#components-back-top-demo-custom</span> <span class="token class">.ant-back-top</span> </span><span class="token punctuation">{</span>\n  <span class="token property">bottom</span><span class="token punctuation">:</span> <span class="token number">100</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token id">#components-back-top-demo-custom</span> <span class="token class">.ant-back-top-inner</span> </span><span class="token punctuation">{</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">40</span>px<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">40</span>px<span class="token punctuation">;</span>\n  <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token number">40</span>px<span class="token punctuation">;</span>\n  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token number">4</span>px<span class="token punctuation">;</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token hexcode">#1088e9</span><span class="token punctuation">;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#fff</span><span class="token punctuation">;</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">20</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}}});