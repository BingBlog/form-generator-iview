(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{316:function(e,t,n){var i=n(322);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(16).default)("e91641ce",i,!0,{})},317:function(e,t,n){var i=n(324);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(16).default)("81bb6994",i,!0,{})},318:function(e,t,n){var i=n(326);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(16).default)("ef5e7348",i,!0,{})},319:function(e,t,n){"use strict";n(330),n(140),n(139);var i=n(331),o=n.n(i),a=(n(332),n(333)),s=n.n(a),r={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language(){return"auto"==this.lang?"":this.lang}},mounted(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,o.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,o.a.highlightBlock(this.$refs.code2);const e=this.$parent.$parent.$parent;"Demo"===e.$options.name&&(this.title=e.title)},methods:{clip(){const e=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),t=new s.a(".copy",{text:()=>e});t.on("success",e=>{e.clearSelection(),t.destroy(),this.copied=!0,"zh-CN"===this.docLang?this.$Message.success("代码已复制到剪贴板"):this.$Message.success("Code copied"),setTimeout(()=>{this.copied=!1},2e3)})},scale(){this.openScale=!0},getSource(e,t){const n=new RegExp("<"+t+"[^>]*>");let i=e.match(n);return i?(i=i[0],e.slice(e.indexOf(i)+i.length,e.lastIndexOf("</"+t+">"))):""},openFiddle(){}}},l=(n(321),n(323),n(0)),c=Object(l.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("pre",{class:{bg:e.bg}},[n("code",{ref:"code",class:e.language},[e._t("default")],2)]),e._v(" "),n("span",{staticClass:"scale",on:{click:e.scale}},[n("Tooltip",{attrs:{content:e.$t("index.code_fullscreen"),placement:"top",transfer:""}},[n("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),e._v(" "),n("span",{staticClass:"copy",on:{click:e.clip}},[n("Tooltip",{attrs:{content:e.$t("index.code_copy"),placement:"top",transfer:""}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),e._v(" "),n("Modal",{attrs:{"class-name":"code-scale-modal",title:e.title,width:"65"},model:{value:e.openScale,callback:function(t){e.openScale=t},expression:"openScale"}},[n("pre",{class:{bg:e.bg}},[e._v("            "),n("code",{ref:"code2",class:e.language}),e._v("\n        ")])])],1)},[],!1,null,"7df69c7c",null);t.a=c.exports},320:function(e,t,n){"use strict";n(139);var i=n(329),o={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide(){return this.hideCode},isVertical(){return this.vertical},codeHeight(){let e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e},style(){let e={opacity:1};return this.isCodeHide&&!this.showCode&&(e.opacity=0),e},title_link(){return i.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted(){this.init()},methods:{init(){this.$nextTick(()=>{const e=this.$children[0].$children[0].$el.clientHeight,t=this.$children[0].$children[1].$el.clientHeight+20;this.code_height=t,t<=e&&!this.isCodeHide&&(this.showMore=!1),this.demo_height=this.isCodeHide?30:e,this.ready=!0})}}},a=(n(325),n(0)),s=Object(a.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Row",{staticClass:"example",class:{"example-vertical":e.isVertical},attrs:{id:e.title_link}},[n("i-col",{staticClass:"example-demo",attrs:{span:e.isVertical?24:10}},[n("div",{staticClass:"example-case"},[e._t("demo")],2),e._v(" "),n("header",{staticClass:"example-header"},[n("span",[e._v("\n                "+e._s(e.title)+"\n                "),n("a",{attrs:{href:"#"+e.title_link,"data-title":e.title}},[e._v("#")])])]),e._v(" "),n("div",{staticClass:"example-desc"},[e._t("desc")],2)]),e._v(" "),n("div",{staticClass:"example-split"}),e._v(" "),n("i-col",{staticClass:"example-code",style:e.codeHeight,attrs:{span:e.isVertical?24:14}},[n("div",{style:e.style},[e._t("code")],2),e._v(" "),e.showMore?n("div",{staticClass:"example-code-more",on:{click:function(t){e.showCode=!e.showCode}}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),e._v(" "),n("i-button",{directives:[{name:"show",rawName:"v-show",value:e.isCodeHide&&!e.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===e.lang?[e._v("显示代码")]:[e._v("Show Code")]],2)],1):e._e()])],1)},[],!1,null,null,null);t.a=s.exports},321:function(e,t,n){"use strict";var i=n(316);n.n(i).a},322:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,"\ndiv[data-v-7df69c7c]{\n    position: relative;\n    font-size: 14px;\n}\nspan.copy[data-v-7df69c7c], span.scale[data-v-7df69c7c], span.open-fiddle[data-v-7df69c7c]{\n    border-radius: 0 0 3px 3px;\n    padding: 2px 5px;\n    position: absolute;\n    top: 5px;\n    right: 0;\n    color: #b2b2b2;\n    cursor: pointer;\n}\nspan.scale[data-v-7df69c7c]{\n    right: 25px;\n}\nspan.open-fiddle[data-v-7df69c7c]{\n    right: 50px;\n}\n.bg[data-v-7df69c7c] {\n    margin: 20px auto;\n}\n.bg + span.copy[data-v-7df69c7c]{\n    right: 5px;\n}\nspan.copy[data-v-7df69c7c]:hover, span.scale[data-v-7df69c7c]:hover, span.open-fiddle[data-v-7df69c7c]:hover{\n    color: #5c6b77;\n}\n\n",""])},323:function(e,t,n){"use strict";var i=n(317);n.n(i).a},324:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},325:function(e,t,n){"use strict";var i=n(318);n.n(i).a},326:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 20px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},340:function(e,t,n){"use strict";let i={install:"\n$ npm install form-generator-iview --save\n# or\n$ yarn add form-generator-iview\n",import:'\nimport "form-generator-iview/src/style/index.less";\nimport FormGenerator from "form-generator-iview";\n\nVue.use(FormGenerator);\n',installIView:"\n$ npm install iview --save\n# or\n$ npm add iview\n",importIView:'\nimport iView from "iview";\nimport "iview/dist/styles/iview.css";\n\nVue.use(iView);\n'};const o=[{label:"姓名",type:"Input",model:"name"},{label:"出生日期",type:"DatePicker",subtype:"datetimerange",model:"birthday"},{label:"性别",type:"Radio",model:"gender",options:[{label:"男",value:"M"},{label:"女",value:"F"},{label:"保密",value:"Screct"}]}],a={title:"用户信息",labelWidth:60,labelPosition:"right"},s={name:"",gender:"",birthday:""};i.demo='\n<template>\n    <FormGenerator\n        :fields="code.introduce.data.fields"\n        :model="code.introduce.data.model"\n        :options="code.introduce.data.options"\n    />\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            fields: '+JSON.stringify(o)+",\n            model: "+JSON.stringify(s)+",\n            options: "+JSON.stringify(a)+"\n        };\n    }\n};\n<script>\n",i.data={fields:o,model:s,options:a},t.a={introduce:i}},364:function(e,t,n){e.exports=n.p+"static/font/form-generator.52c804b.svg"},449:function(e,t,n){"use strict";n.r(t);var i=n(327),o=n(328),a=n(319),s=n(320),r=n(340),l={components:{iArticle:i.a,inAnchor:o.a,iCode:a.a,Demo:s.a},data:()=>({code:r.a})},c=n(0),d=Object(c.a)(l,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("i-article",[i("article",[i("h1",[e._v("关于 FormGeneratorIView")]),e._v(" "),i("p",[e._v("FormGeneratorIView 是一套基于 iView UI 的开源的表单生成工具，可以很方便的基于 JSON 配置生成表单，主要服务于 PC 界面的中后台产品。")]),e._v(" "),i("p",[e._v("在处理批量表单开发，复杂表单交互（如表格中嵌入表单）等场景下对于提升开发效率和提高代码可维护性有很大帮助。")]),e._v(" "),i("inAnchor",{attrs:{title:"特性",h2:""}}),e._v(" "),i("ul",[i("li",[e._v("可配置、高效率")]),e._v(" "),i("li",[e._v("可复用、易维护")]),e._v(" "),i("li",[e._v("文档详细，查询方便")])]),e._v(" "),i("inAnchor",{attrs:{title:"设计概览",h2:""}}),e._v(" "),i("p",{staticStyle:{"text-align":"center"}},[i("img",{attrs:{width:"100%",src:n(364),alt:"设计脑图"}}),e._v(" "),i("strong",[e._v("设计脑图")])]),e._v(" "),i("inAnchor",{attrs:{title:"谁在使用",h2:""}}),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://www.baidu.com",target:"_blank"}},[e._v("百度")])])]),e._v(" "),i("blockquote",[e._v("\n            如果你的公司和产品使用了FormGeneratorIView，欢迎到 "),i("a",{attrs:{href:"https://github.com/BingBlog/form-generator-iview/issues/8",target:"_blank"}},[e._v("这里")]),e._v(" 留言。\n        ")]),e._v(" "),i("inAnchor",{attrs:{title:"安装",h2:""}}),e._v(" "),i("p",[e._v("使用 npm")]),e._v(" "),i("i-code",{attrs:{lang:"auto",bg:""}},[e._v(e._s(e.code.introduce.install))]),e._v(" "),i("inAnchor",{attrs:{title:"引入",h2:""}}),e._v(" "),i("p",[e._v("在项目的主文件中添加如下代码：")]),e._v(" "),i("i-code",{attrs:{lang:"auto",bg:""}},[e._v(e._s(e.code.introduce.import))]),e._v(" "),i("alert",[e._v("FormGeneratorIView依赖iview，可以通过如下代码安装和引入iview")]),e._v(" "),i("strong",[e._v("安装和引入iview")]),e._v(" "),i("i-code",{attrs:{lang:"auto",bg:""}},[e._v(e._s(e.code.introduce.installIView))]),e._v(" "),i("i-code",{attrs:{lang:"auto",bg:""}},[e._v(e._s(e.code.introduce.importIView))]),e._v(" "),i("inAnchor",{attrs:{title:"示例",h2:""}}),e._v(" "),i("Demo",{attrs:{title:"简单示例"}},[i("div",{attrs:{slot:"demo"},slot:"demo"},[i("FormGenerator",{attrs:{fields:e.code.introduce.data.fields,model:e.code.introduce.data.model,options:e.code.introduce.data.options}})],1),e._v(" "),i("div",{attrs:{slot:"desc"},slot:"desc"},[i("p",[e._v("FormGenerator组件依赖三个属性: "),i("code",[e._v("fields")]),e._v(", "),i("code",[e._v("model")]),e._v(", "),i("code",[e._v("options")]),e._v("。")]),e._v(" "),i("p",[e._v("通过设置"),i("code",[e._v("fields")]),e._v(", "),i("code",[e._v("model")]),e._v(", "),i("code",[e._v("options")]),e._v("即可生成一个表单UI。")])]),e._v(" "),i("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.introduce.demo))])],1),e._v(" "),i("inAnchor",{attrs:{title:"版本",h2:""}}),e._v(" "),i("p",[i("a",{attrs:{href:"https://www.npmjs.com/package/form-generator-iview",target:"_blank"}},[i("img",{attrs:{src:"https://img.shields.io/npm/v/form-generator-iview.svg?style=flat-square"}})]),e._v(" "),i("br"),e._v(" "),i("i",[e._v("目前仍为开发中，不建议生产环境使用。")])]),e._v(" "),i("inAnchor",{attrs:{title:"兼容",h2:""}}),e._v(" "),i("ul",[i("li",[e._v("支持 iView 3.0")])]),e._v(" "),i("inAnchor",{attrs:{title:"目标用户",h2:""}}),e._v(" "),i("p",[e._v("已经或者打算使用iView组件库来开发中台的"),i("strong",[e._v("前端同学")]),e._v("。")]),e._v(" "),i("p",[e._v("特别项目中有很多的表单场景，直接使用模板开发会导致开发量增加、维护起来很困难。")]),e._v(" "),i("blockquote",[e._v("\n            如果你是从头开始开发一个中台，可以先看看"),i("a",{attrs:{href:"https://github.com/BingBlog/cp"}},[e._v("CP")]),e._v("。这个项目中汇总了很多中台中使用到的工具和模板。有可能会帮助到你。\n        ")]),e._v(" "),i("inAnchor",{attrs:{title:"关于文档",h2:""}}),e._v(" "),i("p",[e._v("文档的作用主要有一下几点：")]),e._v(" "),i("ul",[i("li",[e._v("1. 帮助您了解如何使用这个工具；")]),e._v(" "),i("li",[e._v("2. 提供各个组件的配置速查表；这些表对于"),i("strong",[e._v("后端同学")]),e._v("了解如何更改配置很有帮助。")])]),e._v(" "),i("inAnchor",{attrs:{title:"与iView的关系",h2:""}}),e._v(" "),i("p",[e._v("工具中的大部分组件都基于iView组件开发。所以在设计上，很多命名都尽量保持与iView一致，包含组件名称、组件属性名称、组件方法名称等。")]),e._v(" "),i("p",[e._v("这个工具仅仅是对iView做了一些封装。目的是为了让使用iView的同时，也可以通过配置生成表单。希望对iView社区有一定帮助。")]),e._v(" "),i("inAnchor",{attrs:{title:"相关链接",h2:""}}),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://iviewui.com/",target:"_blank"}},[e._v("iView官方文档")])]),e._v(" "),i("li",[i("a",{attrs:{href:"https://json-drived-configurable-platform.github.io/cp",target:"_blank"}},[e._v("A configurable platform frontend ui solution based on iView UI.")])]),e._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/baidu/amis",target:"_blank"}},[e._v("baidu出品的amis配置工具")])])]),e._v(" "),i("inAnchor",{attrs:{title:"感谢",h2:""}}),e._v(" "),i("p",[e._v('\n            没有iView组件库及社区，这个库不会出现。在工具的实现中，大量的"借鉴"了iView组织的代码。包含组件库、文档等。\n        ')])],1)])},[],!1,null,null,null).exports;t.default=d}}]);