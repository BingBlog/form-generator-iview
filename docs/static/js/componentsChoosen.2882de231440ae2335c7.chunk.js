(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{347:function(t,e,n){var i=n(384);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(16).default)("fd594b34",i,!0,{})},381:function(t,e,n){t.exports=n.p+"static/img/inline.4de602f.jpeg"},382:function(t,e,n){t.exports=n.p+"static/img/editable-table.0b63fb8.jpeg"},383:function(t,e,n){"use strict";var i=n(347);n.n(i).a},384:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,".doc-powerful-f-templates {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  margin: 32px 0;\n}\n.doc-powerful-f-templates-card {\n  margin-bottom: 32px;\n  width: 266px;\n  overflow: hidden;\n}\n.doc-powerful-f-templates-card .ivu-card-body {\n  padding: 0;\n}\n.doc-powerful-f-templates-card-img {\n  display: block;\n  width: 264px;\n  height: 160px;\n  border-bottom: solid 1px #e4e4e4;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.doc-powerful-f-templates-card-img img {\n  width: 100%;\n}\n.doc-powerful-f-templates-card-content {\n  padding: 20px;\n}\n.doc-powerful-f-templates-card-content h3 {\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.85);\n  line-height: 24px;\n}\n.doc-powerful-f-templates-card-content p {\n  height: 44px;\n  margin: 4px 0 0 0;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.45);\n  line-height: 22px;\n  overflow: hidden;\n}\n",""])},444:function(t,e,n){"use strict";n.r(e);var i=n(327),r=n(328),a={components:{iArticle:i.a,inAnchor:r.a},data:()=>({})},l=n(0),c=Object(l.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i-article",[n("article",[n("h1",[t._v("选择合适的组件类型")]),t._v(" "),n("p",[t._v("提供各种相似场景组件选择的建议。")]),t._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"选择类",h2:""}}),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("组件类型")]),t._v(" "),n("th",[t._v("适用场景")]),t._v(" "),n("th",[t._v("推荐场景")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Switch")]),t._v(" "),n("td",[t._v("开关选择")]),t._v(" "),n("td",[t._v("只有两个选项，且为对立面")])]),t._v(" "),n("tr",[n("td",[t._v("Radio")]),t._v(" "),n("td",[t._v("直接单选")]),t._v(" "),n("td",[t._v("选择项少于6个，直接展示所有选项")])]),t._v(" "),n("tr",[n("td",[t._v("Checkbox")]),t._v(" "),n("td",[t._v("直接多选")]),t._v(" "),n("td",[t._v("选择项少于6个，直接展示所有选项")])]),t._v(" "),n("tr",[n("td",[t._v("CheckboxCard")]),t._v(" "),n("td",[t._v("卡片多选")]),t._v(" "),n("td",[t._v("多选，且需展示图文信息时")])]),t._v(" "),n("tr",[n("td",[t._v("Select")]),t._v(" "),n("td",[t._v("先下拉，再选择")]),t._v(" "),n("td",[t._v("选项大于等于6个")])]),t._v(" "),n("tr",[n("td",[t._v("LogicSelect")]),t._v(" "),n("td",[t._v("逻辑选择")]),t._v(" "),n("td",[t._v("需要进行大于、小于、等于、区间等逻辑的选择时")])]),t._v(" "),n("tr",[n("td",[t._v("Cascader")]),t._v(" "),n("td",[t._v("层级较多时的选择")]),t._v(" "),n("td",[t._v("多级单选")])]),t._v(" "),n("tr",[n("td",[t._v("Tree")]),t._v(" "),n("td",[t._v("层级较多时的选择")]),t._v(" "),n("td",[t._v("多级多选")])]),t._v(" "),n("tr",[n("td",[t._v("TableSelect")]),t._v(" "),n("td",[t._v("表格选择")]),t._v(" "),n("td",[t._v("有较多的描述信息")])]),t._v(" "),n("tr",[n("td",[t._v("Carousel")]),t._v(" "),n("td",[t._v("走马灯")]),t._v(" "),n("td",[t._v("可通过横划来进行单选，适用于图片视频媒体的单选")])])])])],1)])])},[],!1,null,null,null).exports;e.default=c},445:function(t,e,n){"use strict";n.r(e);var i=n(327);const r=[{path:"/form-inline-table",img:n(381),title:"表格行扩展编辑",desc:"表格的行可展开编辑"},{path:"/form-editable-table",img:n(382),title:"可编辑表格",desc:"直接在表格中进行编辑"}];var a={components:{iArticle:i.a},data:()=>({templates:r})},l=(n(383),n(0)),c=Object(l.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i-article",{staticClass:"doc-powerful-f"},[n("article",[n("h1",[t._v("强大的fieldGenerator")]),t._v(" "),n("p",[t._v("在开发中，输入并不总是以一个完整的表单形式出现，在复杂场景下。输入控件会内嵌至表格中，形成更复杂的如表格行内编辑、表格展开编辑场景。")]),t._v(" "),n("div",{staticClass:"doc-powerful-f-templates"},t._l(t.templates,function(e,i){return n("Card",{key:i,staticClass:"doc-powerful-f-templates-card"},[n("router-link",{attrs:{to:e.path}},[n("div",{staticClass:"doc-powerful-f-templates-card-img"},[n("img",{attrs:{src:e.img,alt:e.title}})]),t._v(" "),n("div",{staticClass:"doc-powerful-f-templates-card-content"},[n("h3",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v("\n                            "+t._s(e.desc)+"\n                        ")])])])],1)}),1),t._v("\n        对于这样的场景，如何实现表单控件输入，并保持代码的优雅，是一个很头疼问题。但是这在我们的开发中却常常遇到。\n    ")])])},[],!1,null,null,null).exports;e.default=c},447:function(t,e,n){"use strict";n.r(e);var i={components:{iArticle:n(327).a},data:()=>({})},r=n(0),a=Object(r.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("i-article",[e("article",[e("h1",[this._v("表单校验")]),this._v(" "),e("p",[this._v("如何表单校验")])])])},[],!1,null,null,null).exports;e.default=a},452:function(t,e,n){"use strict";n.r(e);var i={components:{iArticle:n(327).a},data:()=>({})},r=n(0),a=Object(r.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("i-article",[e("article",[e("h1",[this._v("请求拦截")]),this._v(" "),e("p",[this._v("请求拦截")])])])},[],!1,null,null,null).exports;e.default=a},455:function(t,e,n){"use strict";n.r(e);var i={components:{iArticle:n(327).a},data:()=>({})},r=n(0),a=Object(r.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("i-article",[e("article",[e("h1",[this._v("组件联动显示和隐藏")]),this._v(" "),e("p",[this._v("组件联动显示和隐藏")])])])},[],!1,null,null,null).exports;e.default=a}}]);