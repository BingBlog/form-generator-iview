(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{201:function(e,t,n){var i=n(207);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(13).default)("e91641ce",i,!0,{})},202:function(e,t,n){var i=n(209);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(13).default)("81bb6994",i,!0,{})},203:function(e,t,n){var i=n(211);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(13).default)("77ec0b88",i,!0,{})},204:function(e,t,n){"use strict";n(215),n(84),n(83);var i=n(216),o=n.n(i),a=(n(217),n(218)),s=n.n(a),l={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language(){return"auto"==this.lang?"":this.lang}},mounted(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,o.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,o.a.highlightBlock(this.$refs.code2);const e=this.$parent.$parent.$parent;"Demo"===e.$options.name&&(this.title=e.title)},methods:{clip(){const e=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),t=new s.a(".copy",{text:()=>e});t.on("success",e=>{e.clearSelection(),t.destroy(),this.copied=!0,"zh-CN"===this.docLang?this.$Message.success("代码已复制到剪贴板"):this.$Message.success("Code copied"),setTimeout(()=>{this.copied=!1},2e3)})},scale(){this.openScale=!0},getSource(e,t){const n=new RegExp("<"+t+"[^>]*>");let i=e.match(n);return i?(i=i[0],e.slice(e.indexOf(i)+i.length,e.lastIndexOf("</"+t+">"))):""},openFiddle(){}}},d=(n(206),n(208),n(0)),r=Object(d.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("pre",{class:{bg:e.bg}},[n("code",{ref:"code",class:e.language},[e._t("default")],2)]),e._v(" "),n("span",{staticClass:"scale",on:{click:e.scale}},[n("Tooltip",{attrs:{content:e.$t("index.code_fullscreen"),placement:"top",transfer:""}},[n("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),e._v(" "),n("span",{staticClass:"copy",on:{click:e.clip}},[n("Tooltip",{attrs:{content:e.$t("index.code_copy"),placement:"top",transfer:""}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),e._v(" "),n("Modal",{attrs:{"class-name":"code-scale-modal",title:e.title,width:"65"},model:{value:e.openScale,callback:function(t){e.openScale=t},expression:"openScale"}},[n("pre",{class:{bg:e.bg}},[e._v("            "),n("code",{ref:"code2",class:e.language}),e._v("\n        ")])])],1)},[],!1,null,"7df69c7c",null);t.a=r.exports},205:function(e,t,n){"use strict";n(83);var i=n(214),o={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide(){return this.hideCode},isVertical(){return this.vertical},codeHeight(){let e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e},style(){let e={opacity:1};return this.isCodeHide&&!this.showCode&&(e.opacity=0),e},title_link(){return i.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted(){this.init()},methods:{init(){this.$nextTick(()=>{const e=this.$children[0].$children[0].$el.clientHeight,t=this.$children[0].$children[1].$el.clientHeight+20;this.code_height=t,t<=e&&!this.isCodeHide&&(this.showMore=!1),this.demo_height=this.isCodeHide?30:e,this.ready=!0})}}},a=(n(210),n(0)),s=Object(a.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Row",{staticClass:"example",class:{"example-vertical":e.isVertical},attrs:{id:e.title_link}},[n("i-col",{staticClass:"example-demo",attrs:{span:e.isVertical?24:10}},[n("div",{staticClass:"example-case"},[e._t("demo")],2),e._v(" "),n("header",{staticClass:"example-header"},[n("span",[e._v("\n                "+e._s(e.title)+"\n                "),n("a",{attrs:{href:"#"+e.title_link,"data-title":e.title}},[e._v("#")])])]),e._v(" "),n("div",{staticClass:"example-desc"},[e._t("desc")],2)]),e._v(" "),n("div",{staticClass:"example-split"}),e._v(" "),n("i-col",{staticClass:"example-code",style:e.codeHeight,attrs:{span:e.isVertical?24:14}},[n("div",{style:e.style},[e._t("code")],2),e._v(" "),e.showMore?n("div",{staticClass:"example-code-more",on:{click:function(t){e.showCode=!e.showCode}}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),e._v(" "),n("i-button",{directives:[{name:"show",rawName:"v-show",value:e.isCodeHide&&!e.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===e.lang?[e._v("显示代码")]:[e._v("Show Code")]],2)],1):e._e()])],1)},[],!1,null,null,null);t.a=s.exports},206:function(e,t,n){"use strict";var i=n(201);n.n(i).a},207:function(e,t,n){(e.exports=n(12)(!1)).push([e.i,"\ndiv[data-v-7df69c7c]{\n    position: relative;\n    font-size: 14px;\n}\nspan.copy[data-v-7df69c7c], span.scale[data-v-7df69c7c], span.open-fiddle[data-v-7df69c7c]{\n    border-radius: 0 0 3px 3px;\n    padding: 2px 5px;\n    position: absolute;\n    top: 5px;\n    right: 0;\n    color: #b2b2b2;\n    cursor: pointer;\n}\nspan.scale[data-v-7df69c7c]{\n    right: 25px;\n}\nspan.open-fiddle[data-v-7df69c7c]{\n    right: 50px;\n}\n.bg[data-v-7df69c7c] {\n    margin: 20px auto;\n}\n.bg + span.copy[data-v-7df69c7c]{\n    right: 5px;\n}\nspan.copy[data-v-7df69c7c]:hover, span.scale[data-v-7df69c7c]:hover, span.open-fiddle[data-v-7df69c7c]:hover{\n    color: #5c6b77;\n}\n\n",""])},208:function(e,t,n){"use strict";var i=n(202);n.n(i).a},209:function(e,t,n){(e.exports=n(12)(!1)).push([e.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},210:function(e,t,n){"use strict";var i=n(203);n.n(i).a},211:function(e,t,n){(e.exports=n(12)(!1)).push([e.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 20px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},321:function(e,t,n){"use strict";n.r(t);var i=n(212),o=n(213),a=n(204),s=n(205);let l={};const d={type:"Input",model:"name"},r={name:"iview"};l.data={field:d,model:r},l.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(d)+",\n            model: "+JSON.stringify(r)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n        />\n    </Form>\n</template>\n';var c={simple:l},v={components:{iArticle:i.a,inAnchor:o.a,iCode:a.a,Demo:s.a},data:()=>({code:c}),methods:{handleFieldChange(e,t){console.log(e,t)}}},p=n(0),_=Object(p.a)(v,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",[n("article",[n("h1",[e._v("FieldGenerator")]),e._v(" "),n("p",[e._v("\n                用来生成一个特定的表单控件。"),n("strong",[e._v("通过 field.type 指定组件的类型。")]),e._v("常用于解决在其他结构(如表格)中嵌入表单控件。关于支持的组件类型可以参考"),n("router-link",{attrs:{to:"/intro#SJGL"}},[e._v("简介中的设计概览")]),e._v("。\n                "),n("strong",[e._v("在使用时，需要配合 iView Form组件一起使用。")])],1),e._v(" "),n("alert",[e._v("\n                文档中在针对单个控件讲解时，都会使用这个组件来生成。\n            ")]),e._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),e._v(" "),n("inAnchor",{attrs:{title:"核心配置",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("field")]),e._v(" "),n("td",[e._v("表单项配置列表")]),e._v(" "),n("td",[e._v("Array")]),e._v(" "),n("td",[e._v("[]")])]),e._v(" "),n("tr",[n("td",[e._v("requestInterceptor")]),e._v(" "),n("td",[e._v("表单请求的拦截器，下拉选择的列表等需要动态获取数据的组件中传入该属性后，将使用该属性声明的方法进行数据请求。")]),e._v(" "),n("td",[e._v("Function")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("paramsContainer")]),e._v(" "),n("td",[e._v("表单控件中的请求（如Select的option动态获取，Button的Ajax请求等）的额外参数的传入，通常配合表单控件的 field.apiParams 一起使用。")]),e._v(" "),n("td",[e._v("Object")]),e._v(" "),n("td",[e._v("-")])])])]),e._v(" "),n("inAnchor",{attrs:{title:"通用field配置详解",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("field.model")]),e._v(" "),n("td",[e._v("控件对应的表单的数据的name")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("必须")])]),e._v(" "),n("tr",[n("td",[e._v("field.width")]),e._v(" "),n("td",[e._v("表单控件的宽度，如果为String， 如 100px, 100% 则为 style.with 的值；如果为Number, 如 100，则为 100px。")]),e._v(" "),n("td",[e._v("Number | String")]),e._v(" "),n("td",[e._v("'100%'")])]),e._v(" "),n("tr",[n("td",[e._v("field.size")]),e._v(" "),n("td",[e._v("表单控件的大小，可选small, default, large")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("'default'")])]),e._v(" "),n("tr",[n("td",[e._v("field.inline")]),e._v(" "),n("td",[e._v("是否行内布局")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("field.required")]),e._v(" "),n("td",[e._v("是否必填，如不设置，则会根据校验规则自动生成。如果数值类型为Number、Boolean、Array，需要使用rules来声明规则。")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("field.rules")]),e._v(" "),n("td",[e._v("表单验证规则，具体配置查看 "),n("a",{attrs:{href:"https://github.com/yiminghe/async-validator",target:"_blank"}},[n("i",{staticClass:"ivu-icon ivu-icon-social-github"}),e._v(" async-validator")])]),e._v(" "),n("td",[e._v("Array")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("field.apiParams")]),e._v(" "),n("td",[e._v("\n                                如果该控件有通过接口请求的事件，如动态选项（Select中的options）拉取，提交事件(Submit)等，\n                                设置该参数将会从对应的form.model和paramsContainer中获取参数，并携带在请求中。\n                                "),n("br"),e._v("\n                                例如：\n                                "),n("br"),e._v("\n                                设置apiParams为['id']，则会携带id作为请求的参数。\n                                "),n("br"),e._v("\n                                设置apiParams为 all，则会携带form.model和paramsContainer里面的所有值作为请求的参数。\n                                "),n("br"),e._v("\n                                一个完整的Submit控件配置如下(携带form.model和paramsContainer里面的所有值)：\n                                "),n("pre",[e._v("{\n    type: 'Submit',\n    text: '保存',\n    subtype: 'primary',\n    size: 'small',\n    action: {\n        type: 'ajax',\n        api: '/curdEdit'\n    },\n    inline: true,\n                                ")]),e._v(" "),n("pre",[e._v("    "),n("strong",[e._v("apiParams: 'all'")]),e._v("\n                                ")]),e._v(" "),n("pre",[e._v("}\n                                ")])]),e._v(" "),n("td",[e._v("Array | String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("field.labelTip")]),e._v(" "),n("td",[e._v("\n                                提示icon 并且进行点击、hover等操作，额外内容展示 （不需要不配置就好）\n                                "),n("br"),e._v("\n                                例如：\n                                "),n("br"),e._v("\n                                icon可从iview中查询name\n                                "),n("br"),e._v("\n                                ifShow控制额外内容是否展示\n                                "),n("br"),e._v("\n                                一个完整的提示icon控件配置如下：\n                                "),n("pre",[e._v("{\n    icon: {\n        name: 'ios-help-circle-outline',\n        size: 24,\n        color: '#00f'\n    },\n    content: {\n        body: "),n("textarea",[e._v("<div class='example'><span>活动示意图</span></div>")]),e._v(",\n        ifShow: false\n    }\n}\n"),n("router-link",{attrs:{to:"/doc/FormGenerator"}},[e._v("查看示例>>")]),e._v("\n                                ")],1)]),e._v(" "),n("td",[e._v("Object")]),e._v(" "),n("td",[e._v("-")])])])]),e._v(" "),n("inAnchor",{attrs:{title:"通用事件",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("事件名")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("返回值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("on-field-change")]),e._v(" "),n("td",[e._v("表单项数据变更时")]),e._v(" "),n("td",[e._v("($event) $event.model；表单项的标识；$event.value：表单项的值；")])]),e._v(" "),n("tr",[n("td",[e._v("on-label-tip-click")]),e._v(" "),n("td",[e._v("icon点击触发")]),e._v(" "),n("td",[e._v("($event) $event.field（表单配置项）")])]),e._v(" "),n("tr",[n("td",[e._v("on-label-tip-mouseIn")]),e._v(" "),n("td",[e._v("icon移入触发")]),e._v(" "),n("td",[e._v("($event) $event.field（表单配置项）")])]),e._v(" "),n("tr",[n("td",[e._v("on-label-tip-mouseOut")]),e._v(" "),n("td",[e._v("icon移出触发")]),e._v(" "),n("td",[e._v("($event) $event.field（表单配置项）")])])])])],1),e._v(" "),n("inAnchor",{attrs:{title:"示例",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"简单示例"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.simple.data.model}},[n("FieldGenerator",{attrs:{field:e.code.simple.data.field,"form-model":e.code.simple.data.model}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field")]),e._v(", "),n("code",[e._v("model")]),e._v("即可生成一个Input。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1)],1)])},[],!1,null,null,null).exports;t.default=_}}]);