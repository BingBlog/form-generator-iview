(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{323:function(e,n,t){var a=t(329);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,t(18).default)("e91641ce",a,!0,{})},324:function(e,n,t){var a=t(331);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,t(18).default)("81bb6994",a,!0,{})},325:function(e,n,t){var a=t(333);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,t(18).default)("ef5e7348",a,!0,{})},326:function(e,n,t){"use strict";t(337),t(143),t(142);var a=t(338),l=t.n(a),i=(t(339),t(340)),o=t.n(i),d={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language(){return"auto"==this.lang?"":this.lang}},mounted(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,l.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,l.a.highlightBlock(this.$refs.code2);const e=this.$parent.$parent.$parent;"Demo"===e.$options.name&&(this.title=e.title)},methods:{clip(){const e=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),n=new o.a(".copy",{text:()=>e});n.on("success",e=>{e.clearSelection(),n.destroy(),this.copied=!0,"zh-CN"===this.docLang?this.$Message.success("代码已复制到剪贴板"):this.$Message.success("Code copied"),setTimeout(()=>{this.copied=!1},2e3)})},scale(){this.openScale=!0},getSource(e,n){const t=new RegExp("<"+n+"[^>]*>");let a=e.match(t);return a?(a=a[0],e.slice(e.indexOf(a)+a.length,e.lastIndexOf("</"+n+">"))):""},openFiddle(){}}},s=(t(328),t(330),t(0)),r=Object(s.a)(d,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",{class:{bg:e.bg}},[t("code",{ref:"code",class:e.language},[e._t("default")],2)]),e._v(" "),t("span",{staticClass:"scale",on:{click:e.scale}},[t("Tooltip",{attrs:{content:e.$t("index.code_fullscreen"),placement:"top",transfer:""}},[t("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),e._v(" "),t("span",{staticClass:"copy",on:{click:e.clip}},[t("Tooltip",{attrs:{content:e.$t("index.code_copy"),placement:"top",transfer:""}},[t("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),e._v(" "),t("Icon",{directives:[{name:"show",rawName:"v-show",value:e.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),e._v(" "),t("Modal",{attrs:{"class-name":"code-scale-modal",title:e.title,width:"65"},model:{value:e.openScale,callback:function(n){e.openScale=n},expression:"openScale"}},[t("pre",{class:{bg:e.bg}},[e._v("            "),t("code",{ref:"code2",class:e.language}),e._v("\n        ")])])],1)},[],!1,null,"7df69c7c",null);n.a=r.exports},327:function(e,n,t){"use strict";t(142);var a=t(336),l={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide(){return this.hideCode},isVertical(){return this.vertical},codeHeight(){let e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e},style(){let e={opacity:1};return this.isCodeHide&&!this.showCode&&(e.opacity=0),e},title_link(){return a.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted(){this.init()},methods:{init(){this.$nextTick(()=>{const e=this.$children[0].$children[0].$el.clientHeight,n=this.$children[0].$children[1].$el.clientHeight+20;this.code_height=n,n<=e&&!this.isCodeHide&&(this.showMore=!1),this.demo_height=this.isCodeHide?30:e,this.ready=!0})}}},i=(t(332),t(0)),o=Object(i.a)(l,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Row",{staticClass:"example",class:{"example-vertical":e.isVertical},attrs:{id:e.title_link}},[t("i-col",{staticClass:"example-demo",attrs:{span:e.isVertical?24:10}},[t("div",{staticClass:"example-case"},[e._t("demo")],2),e._v(" "),t("header",{staticClass:"example-header"},[t("span",[e._v("\n                "+e._s(e.title)+"\n                "),t("a",{attrs:{href:"#"+e.title_link,"data-title":e.title}},[e._v("#")])])]),e._v(" "),t("div",{staticClass:"example-desc"},[e._t("desc")],2)]),e._v(" "),t("div",{staticClass:"example-split"}),e._v(" "),t("i-col",{staticClass:"example-code",style:e.codeHeight,attrs:{span:e.isVertical?24:14}},[t("div",{style:e.style},[e._t("code")],2),e._v(" "),e.showMore?t("div",{staticClass:"example-code-more",on:{click:function(n){e.showCode=!e.showCode}}},[t("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),e._v(" "),t("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),e._v(" "),t("i-button",{directives:[{name:"show",rawName:"v-show",value:e.isCodeHide&&!e.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===e.lang?[e._v("显示代码")]:[e._v("Show Code")]],2)],1):e._e()])],1)},[],!1,null,null,null);n.a=o.exports},328:function(e,n,t){"use strict";var a=t(323);t.n(a).a},329:function(e,n,t){(e.exports=t(17)(!1)).push([e.i,"\ndiv[data-v-7df69c7c]{\n    position: relative;\n    font-size: 14px;\n}\nspan.copy[data-v-7df69c7c], span.scale[data-v-7df69c7c], span.open-fiddle[data-v-7df69c7c]{\n    border-radius: 0 0 3px 3px;\n    padding: 2px 5px;\n    position: absolute;\n    top: 5px;\n    right: 0;\n    color: #b2b2b2;\n    cursor: pointer;\n}\nspan.scale[data-v-7df69c7c]{\n    right: 25px;\n}\nspan.open-fiddle[data-v-7df69c7c]{\n    right: 50px;\n}\n.bg[data-v-7df69c7c] {\n    margin: 20px auto;\n}\n.bg + span.copy[data-v-7df69c7c]{\n    right: 5px;\n}\nspan.copy[data-v-7df69c7c]:hover, span.scale[data-v-7df69c7c]:hover, span.open-fiddle[data-v-7df69c7c]:hover{\n    color: #5c6b77;\n}\n\n",""])},330:function(e,n,t){"use strict";var a=t(324);t.n(a).a},331:function(e,n,t){(e.exports=t(17)(!1)).push([e.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},332:function(e,n,t){"use strict";var a=t(325);t.n(a).a},333:function(e,n,t){(e.exports=t(17)(!1)).push([e.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 20px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},449:function(e,n,t){"use strict";t.r(n);var a=t(334),l=t(335),i=t(326),o=t(327);let d={};const s={type:"Cascader",model:"attraction",data:[{value:"beijing",label:"北京",children:[{value:"gugong",label:"故宫"},{value:"tiantan",label:"天坛"},{value:"wangfujing",label:"王府井"}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"fuzimiao",label:"夫子庙"}]},{value:"suzhou",label:"苏州",children:[{value:"zhuozhengyuan",label:"拙政园"},{value:"shizilin",label:"狮子林"}]}]}]},r={type:"Cascader",model:"attraction",disabled:!0,data:[{value:"beijing",label:"北京",children:[{value:"gugong",label:"故宫"},{value:"tiantan",label:"天坛"},{value:"wangfujing",label:"王府井"}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"fuzimiao",label:"夫子庙"}]},{value:"suzhou",label:"苏州",children:[{value:"zhuozhengyuan",label:"拙政园"},{value:"shizilin",label:"狮子林"}]}]}]},c={attraction:["jiangsu","suzhou","shizilin"]},p={size:"large",type:"Cascader",model:"attraction",data:[{value:"beijing",label:"北京",disabled:!0,children:[{value:"gugong",label:"故宫"},{value:"tiantan",label:"天坛"},{value:"wangfujing",label:"王府井"}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"fuzimiao",label:"夫子庙"}]},{value:"suzhou",label:"苏州",children:[{value:"zhuozhengyuan",label:"拙政园"},{value:"shizilin",label:"狮子林"}]}]}]};d.data={field:s,fieldDisabled:r,fieldOptionsDisabled:{type:"Cascader",model:"attraction",data:[{value:"beijing",label:"北京",disabled:!0,children:[{value:"gugong",label:"故宫"},{value:"tiantan",label:"天坛"},{value:"wangfujing",label:"王府井"}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"fuzimiao",label:"夫子庙"}]},{value:"suzhou",label:"苏州",children:[{value:"zhuozhengyuan",label:"拙政园"},{value:"shizilin",label:"狮子林"}]}]}]},fieldSmall:{size:"small",type:"Cascader",model:"attraction",data:[{value:"beijing",label:"北京",disabled:!0,children:[{value:"gugong",label:"故宫"},{value:"tiantan",label:"天坛"},{value:"wangfujing",label:"王府井"}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"fuzimiao",label:"夫子庙"}]},{value:"suzhou",label:"苏州",children:[{value:"zhuozhengyuan",label:"拙政园"},{value:"shizilin",label:"狮子林"}]}]}]},fieldLarge:p,model:c},d.code="\n<script>\nconst field = "+JSON.stringify(s,null,4)+";\nconst model = "+JSON.stringify(c,null,4)+';\nexport default {\n    data() {\n        return {\n            field,\n            model\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n',d.disabledCode="\n<script>\nconst field = "+JSON.stringify(r,null,4)+";\nconst model = "+JSON.stringify(c,null,4)+';\nexport default {\n    data() {\n        return {\n            field,\n            model,\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n',d.largeCode="\n<script>\nconst field = "+JSON.stringify(p,null,4)+";\nconst model = "+JSON.stringify(c,null,4)+';\nexport default {\n    data() {\n        return {\n            field,\n            model\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var h={simple:d},v={components:{iArticle:a.a,inAnchor:l.a,iCode:i.a,Demo:o.a},data:()=>({code:h}),methods:{handleFieldChange(e,n){console.log(e,n)}}},u=t(0),m=Object(u.a)(v,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("i-article",[t("article",[t("h1",[e._v("Cascader 级联选择")]),e._v(" "),t("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),t("p",[e._v("从一组相关联的数据集合中进行选择，常用于省市区、公司级层、事务分类等。相比 Select 组件，可以一次性完成选择，体验更好。")]),e._v(" "),t("div",{staticClass:"api"},[t("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("属性")]),e._v(" "),t("th",[e._v("说明")]),e._v(" "),t("th",[e._v("类型")]),e._v(" "),t("th",[e._v("默认值")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("model")]),e._v(" "),t("td",[e._v("绑定的值的名称")]),e._v(" "),t("td",[e._v("String")]),e._v(" "),t("td",[e._v("不可为空")])]),e._v(" "),t("tr",[t("td",[e._v("type")]),e._v(" "),t("td",[e._v("Cascader")]),e._v(" "),t("td",[e._v("String")]),e._v(" "),t("td",[e._v("不可为空")])]),e._v(" "),t("tr",[t("td",[e._v("disabled")]),e._v(" "),t("td",[e._v("是否禁用选择器")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[e._v("false")])]),e._v(" "),t("tr",[t("td",[e._v("clearable")]),e._v(" "),t("td",[e._v("是否支持清除")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[e._v("true")])]),e._v(" "),t("tr",[t("td",[e._v("placeholder")]),e._v(" "),t("td",[e._v("输入框占位符")]),e._v(" "),t("td",[e._v("String")]),e._v(" "),t("td",[e._v("请选择")])]),e._v(" "),t("tr",[t("td",[e._v("size")]),e._v(" "),t("td",[e._v("输入框大小，可选值为large和small或者不填")]),e._v(" "),t("td",[e._v("String")]),e._v(" "),t("td",[e._v("请选择")])]),e._v(" "),t("tr",[t("td",[e._v("change-on-select")]),e._v(" "),t("td",[e._v("规则暂定")]),e._v(" "),t("td",[e._v("暂定")]),e._v(" "),t("td",[e._v("暂定")])])])])],1),e._v(" "),t("inAnchor",{attrs:{title:"代码示例",h2:""}}),e._v(" "),t("Demo",{attrs:{title:"基础用法"}},[t("div",{attrs:{slot:"demo"},slot:"demo"},[t("Form",{attrs:{model:e.code.simple.data.model}},[t("FieldGenerator",{attrs:{field:e.code.simple.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),t("div",{attrs:{slot:"desc"},slot:"desc"},[t("p",[e._v("通过设置"),t("code",[e._v("field")]),e._v(", "),t("code",[e._v("model")]),e._v("即可生成一个Cascader。")])]),e._v(" "),t("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1),e._v(" "),t("Demo",{attrs:{title:"禁用基础用法"}},[t("div",{attrs:{slot:"demo"},slot:"demo"},[t("Form",{attrs:{model:e.code.simple.data.model}},[t("FieldGenerator",{attrs:{field:e.code.simple.data.fieldDisabled},on:{"on-field-change":e.handleFieldChange}}),e._v(" "),t("FieldGenerator",{attrs:{field:e.code.simple.data.fieldOptionsDisabled},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),t("div",{attrs:{slot:"desc"},slot:"desc"},[t("p",[e._v("通过设置"),t("code",[e._v("field")]),e._v(", "),t("code",[e._v("model")]),e._v("即可生成一个Cascader。")])]),e._v(" "),t("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.disabledCode))])],1),e._v(" "),t("Demo",{attrs:{title:"size基础用法"}},[t("div",{attrs:{slot:"demo"},slot:"demo"},[t("Form",{attrs:{model:e.code.simple.data.model}},[t("FieldGenerator",{attrs:{field:e.code.simple.data.fieldLarge},on:{"on-field-change":e.handleFieldChange}}),e._v(" "),t("FieldGenerator",{attrs:{field:e.code.simple.data.field},on:{"on-field-change":e.handleFieldChange}}),e._v(" "),t("FieldGenerator",{attrs:{field:e.code.simple.data.fieldSmall},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),t("div",{attrs:{slot:"desc"},slot:"desc"},[t("p",[e._v("通过设置"),t("code",[e._v("field")]),e._v(", "),t("code",[e._v("model")]),e._v("即可生成一个Cascader。")])]),e._v(" "),t("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.largeCode))])],1)],1)])},[],!1,null,null,null).exports;n.default=m}}]);