(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{323:function(e,t,n){var o=n(329);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(18).default)("e91641ce",o,!0,{})},324:function(e,t,n){var o=n(331);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(18).default)("81bb6994",o,!0,{})},325:function(e,t,n){var o=n(333);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(18).default)("ef5e7348",o,!0,{})},326:function(e,t,n){"use strict";n(337),n(143),n(142);var o=n(338),l=n.n(o),d=(n(339),n(340)),i=n.n(d),a={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language(){return"auto"==this.lang?"":this.lang}},mounted(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,l.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,l.a.highlightBlock(this.$refs.code2);const e=this.$parent.$parent.$parent;"Demo"===e.$options.name&&(this.title=e.title)},methods:{clip(){const e=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),t=new i.a(".copy",{text:()=>e});t.on("success",e=>{e.clearSelection(),t.destroy(),this.copied=!0,"zh-CN"===this.docLang?this.$Message.success("代码已复制到剪贴板"):this.$Message.success("Code copied"),setTimeout(()=>{this.copied=!1},2e3)})},scale(){this.openScale=!0},getSource(e,t){const n=new RegExp("<"+t+"[^>]*>");let o=e.match(n);return o?(o=o[0],e.slice(e.indexOf(o)+o.length,e.lastIndexOf("</"+t+">"))):""},openFiddle(){}}},s=(n(328),n(330),n(0)),r=Object(s.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("pre",{class:{bg:e.bg}},[n("code",{ref:"code",class:e.language},[e._t("default")],2)]),e._v(" "),n("span",{staticClass:"scale",on:{click:e.scale}},[n("Tooltip",{attrs:{content:e.$t("index.code_fullscreen"),placement:"top",transfer:""}},[n("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),e._v(" "),n("span",{staticClass:"copy",on:{click:e.clip}},[n("Tooltip",{attrs:{content:e.$t("index.code_copy"),placement:"top",transfer:""}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),e._v(" "),n("Modal",{attrs:{"class-name":"code-scale-modal",title:e.title,width:"65"},model:{value:e.openScale,callback:function(t){e.openScale=t},expression:"openScale"}},[n("pre",{class:{bg:e.bg}},[e._v("            "),n("code",{ref:"code2",class:e.language}),e._v("\n        ")])])],1)},[],!1,null,"7df69c7c",null);t.a=r.exports},327:function(e,t,n){"use strict";n(142);var o=n(336),l={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide(){return this.hideCode},isVertical(){return this.vertical},codeHeight(){let e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e},style(){let e={opacity:1};return this.isCodeHide&&!this.showCode&&(e.opacity=0),e},title_link(){return o.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted(){this.init()},methods:{init(){this.$nextTick(()=>{const e=this.$children[0].$children[0].$el.clientHeight,t=this.$children[0].$children[1].$el.clientHeight+20;this.code_height=t,t<=e&&!this.isCodeHide&&(this.showMore=!1),this.demo_height=this.isCodeHide?30:e,this.ready=!0})}}},d=(n(332),n(0)),i=Object(d.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Row",{staticClass:"example",class:{"example-vertical":e.isVertical},attrs:{id:e.title_link}},[n("i-col",{staticClass:"example-demo",attrs:{span:e.isVertical?24:10}},[n("div",{staticClass:"example-case"},[e._t("demo")],2),e._v(" "),n("header",{staticClass:"example-header"},[n("span",[e._v("\n                "+e._s(e.title)+"\n                "),n("a",{attrs:{href:"#"+e.title_link,"data-title":e.title}},[e._v("#")])])]),e._v(" "),n("div",{staticClass:"example-desc"},[e._t("desc")],2)]),e._v(" "),n("div",{staticClass:"example-split"}),e._v(" "),n("i-col",{staticClass:"example-code",style:e.codeHeight,attrs:{span:e.isVertical?24:14}},[n("div",{style:e.style},[e._t("code")],2),e._v(" "),e.showMore?n("div",{staticClass:"example-code-more",on:{click:function(t){e.showCode=!e.showCode}}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),e._v(" "),n("i-button",{directives:[{name:"show",rawName:"v-show",value:e.isCodeHide&&!e.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===e.lang?[e._v("显示代码")]:[e._v("Show Code")]],2)],1):e._e()])],1)},[],!1,null,null,null);t.a=i.exports},328:function(e,t,n){"use strict";var o=n(323);n.n(o).a},329:function(e,t,n){(e.exports=n(17)(!1)).push([e.i,"\ndiv[data-v-7df69c7c]{\n    position: relative;\n    font-size: 14px;\n}\nspan.copy[data-v-7df69c7c], span.scale[data-v-7df69c7c], span.open-fiddle[data-v-7df69c7c]{\n    border-radius: 0 0 3px 3px;\n    padding: 2px 5px;\n    position: absolute;\n    top: 5px;\n    right: 0;\n    color: #b2b2b2;\n    cursor: pointer;\n}\nspan.scale[data-v-7df69c7c]{\n    right: 25px;\n}\nspan.open-fiddle[data-v-7df69c7c]{\n    right: 50px;\n}\n.bg[data-v-7df69c7c] {\n    margin: 20px auto;\n}\n.bg + span.copy[data-v-7df69c7c]{\n    right: 5px;\n}\nspan.copy[data-v-7df69c7c]:hover, span.scale[data-v-7df69c7c]:hover, span.open-fiddle[data-v-7df69c7c]:hover{\n    color: #5c6b77;\n}\n\n",""])},330:function(e,t,n){"use strict";var o=n(324);n.n(o).a},331:function(e,t,n){(e.exports=n(17)(!1)).push([e.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},332:function(e,t,n){"use strict";var o=n(325);n.n(o).a},333:function(e,t,n){(e.exports=n(17)(!1)).push([e.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 20px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},351:function(e,t,n){var o=n(386);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(18).default)("b08605d6",o,!0,{})},385:function(e,t,n){"use strict";var o=n(351);n.n(o).a},386:function(e,t,n){(e.exports=n(17)(!1)).push([e.i,"\n.fg-ivu-select[data-v-7bb3724b] {\n    margin-top: 20px;\n}\n",""])},438:function(e,t,n){"use strict";n.r(t);var o=n(334),l=n(335),d=n(326),i=n(327);let a={};const s={type:"Select",model:"city",options:[{label:"北京",value:"Beijing"},{label:"上海",value:"Shanghai"},{label:"广州",value:"Guangzhou"},{label:"深圳",value:"Shenzhen"}]},r={city:"Beijing"};a.data={field:s,model:r},a.code="\n<script>\nconst field = "+JSON.stringify(s,null,4)+";\nexport default {\n    data() {\n        return {\n            field,\n            model: "+JSON.stringify(r)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';let c={};const v={type:"Select",model:"city",options:"/selectApi",defaultValueIndex:0},p={city:""};c.data={field:v,model:p},c.code="\n<script>\nconst field = "+JSON.stringify(v,null,4)+";\nexport default {\n    data() {\n        return {\n            field,\n            model: "+JSON.stringify(p)+'\n        };\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n        />\n    </Form>\n</template>\n';let _={};const m={type:"Select",model:"city",multiple:!0,options:"/selectApi",defaultValueIndexes:[0,1]},h={city:[]};_.data={field:m,model:h},_.code="\n<script>\nconst field = "+JSON.stringify(m,null,4)+";\nexport default {\n    data() {\n        return {\n            field,\n            model: "+JSON.stringify(h)+'\n        };\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            :form-model="model"\n        />\n    </Form>\n</template>\n';let f={};const u={type:"Select",model:"city",filterable:!0,options:"/selectApi"},g={type:"Select",model:"cities",filterable:!0,multiple:!0,options:"/selectApi"},x={city:"Beijing",cities:["Beijing","Shanghai"]};f.data={field:u,multipleField:g,model:x},f.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(u)+",\n            multipleField: "+JSON.stringify(g)+",\n            model: "+JSON.stringify(x)+'\n        };\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n        />\n        <FieldGenerator\n            :field="multipleField"\n        />\n    </Form>\n</template>\n';let b={};const y={type:"Select",model:"city",remote:!0,options:"/selectApi"},F={type:"Select",model:"cities",remote:!0,multiple:!0,options:"/selectApi"},w={city:"Beijing",cities:["Beijing","Shanghai"]};b.data={field:y,multipleField:F,model:w},b.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(y)+",\n            multipleField: "+JSON.stringify(F)+",\n            model: "+JSON.stringify(w)+'\n        };\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n        />\n        <FieldGenerator\n            :field="multipleField"\n        />\n    </Form>\n</template>\n';let S={};const C={type:"Select",model:"province",group:!0,options:"/selectGroupApi"},O={type:"Select",model:"provinces",group:!0,multiple:!0,options:"/selectGroupApi"},N={province:"110000000000",provinces:["110000000000","310000000000"]};S.data={field:C,multipleField:O,model:N},S.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(C)+",\n            multipleField: "+JSON.stringify(O)+",\n            model: "+JSON.stringify(N)+'\n        };\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n        />\n        <FieldGenerator\n            :field="multipleField"\n        />\n    </Form>\n</template>\n';let G={};const $={type:"Select",model:"province",clearable:!0,filterable:!0,options:"/selectApi"},k={province:"Beijing"};G.data={field:$,model:k},G.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify($)+",\n            model: "+JSON.stringify(k)+'\n        };\n    }\n};\n<script>\n<template>\n    <FieldGenerator\n        :field="field"\n    />\n</template>\n';let A={};const J={type:"Select",model:"province",prefix:"ios-home",filterable:!0,options:"/selectApi"},B={province:"Beijing"};A.data={field:J,model:B},A.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(J)+",\n            model: "+JSON.stringify(B)+'\n        };\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            :form-model="model"\n        />\n    </Form>\n</template>\n';var z={simple:a,api:c,multiple:_,filterable:f,remote:b,group:S,clearable:G,prefix:A},j={components:{iArticle:o.a,inAnchor:l.a,iCode:d.a,Demo:i.a},data:()=>({code:z}),methods:{handleFieldChange(e,t){console.log(e,t)}}},H=(n(385),n(0)),D=Object(H.a)(j,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",[n("article",[n("h1",[e._v("Select 下拉选择器")]),e._v(" "),n("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),n("p",[e._v("使用模拟的增强下拉选择器来代替浏览器原生的选择器。")]),e._v(" "),n("p",[e._v("选择器支持单选、多选、搜索，以及键盘快捷操作。")]),e._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),e._v(" "),n("inAnchor",{attrs:{title:"核心配置",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("model")]),e._v(" "),n("td",[e._v("绑定的值的名称")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("不可为空")])]),e._v(" "),n("tr",[n("td",[e._v("type")]),e._v(" "),n("td",[e._v("日期选择器的类型，不可改")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("Select")])]),e._v(" "),n("tr",[n("td",[e._v("placeholder")]),e._v(" "),n("td",[e._v("占位文本")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("prefix")]),e._v(" "),n("td",[e._v("在 Select 内部显示图标，传入"),n("a",{attrs:{href:"https://www.iviewui.com/components/icon"}},[e._v("icon")]),e._v("名称")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("options")]),e._v(" "),n("td",[e._v("由option/groupOption组成的数组或者api接口，见下方option/groupOption的属性")]),e._v(" "),n("td",[e._v("Array|String")]),e._v(" "),n("td",[e._v("[]")])]),e._v(" "),n("tr",[n("td",[e._v("filterable")]),e._v(" "),n("td",[e._v("是否支持搜索")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])])])]),e._v(" "),n("inAnchor",{attrs:{title:"扩展配置",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("required")]),e._v(" "),n("td",[e._v("是否必须选择")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("clearable")]),e._v(" "),n("td",[e._v("是否可以清空选项，只在单选时有效")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("size")]),e._v(" "),n("td",[e._v("尺寸，可选值为large、small、default或者不设置")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("disabled")]),e._v(" "),n("td",[e._v("是否禁用选择器")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("multiple")]),e._v(" "),n("td",[e._v("是否支持多选")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("remote")]),e._v(" "),n("td",[e._v("是否使用远程搜索")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("defaultValueIndex")]),e._v(" "),n("td",[e._v("当remote为true时，如果该控件的值不为数组，拉取后自动设置默认值的index")]),e._v(" "),n("td",[e._v("Number(Int)")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("defaultValueIndexes")]),e._v(" "),n("td",[e._v("当remote为true时，如果该控件的值为数组，拉取后自动设置默认值的indexes")]),e._v(" "),n("td",[e._v("Array")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("api")]),e._v(" "),n("td",[e._v("由远程api接口获得数据（已废弃）")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])])])]),e._v(" "),n("inAnchor",{attrs:{title:"Option配置",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("value")]),e._v(" "),n("td",[e._v("选项值，默认根据此属性值进行筛选，必填")]),e._v(" "),n("td",[e._v("String | Number")]),e._v(" "),n("td",[e._v("无")])]),e._v(" "),n("tr",[n("td",[e._v("label")]),e._v(" "),n("td",[e._v("选项显示的内容，默认优先读取该 label 值，无 label 时，读取 value。当选中时，选择器会显示 label 为已选文案。")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("disabled")]),e._v(" "),n("td",[e._v("是否禁用当前项")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])])])]),e._v(" "),n("inAnchor",{attrs:{title:"GroupOption配置",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("groupLabel")]),e._v(" "),n("td",[e._v("分组显示的内容，必填")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("groupOptions")]),e._v(" "),n("td",[e._v("分组的内容，由option组成")]),e._v(" "),n("td",[e._v("Array")]),e._v(" "),n("td",[e._v("[]")])])])])],1),e._v(" "),n("inAnchor",{attrs:{title:"代码示例",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"基础用法"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.simple.data.model}},[n("FieldGenerator",{attrs:{field:e.code.simple.data.field,"form-model":e.code.simple.data.model},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("单选时，value 只接受字符串和数字类型，多选时，只接受数组类型，组件会自动根据"),n("code",[e._v("Option")]),e._v("的"),n("code",[e._v("value")]),e._v("来返回选中的数据。")]),e._v(" "),n("p",[e._v("在展开选择器后，可以使用键盘的"),n("code",[e._v("up")]),e._v("和"),n("code",[e._v("down")]),e._v("快速上下选择，按下"),n("code",[e._v("Enter")]),e._v("选择，按下"),n("code",[e._v("Esc")]),e._v("收起选择器。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1),e._v(" "),n("Demo",{attrs:{title:"远程获取选项"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.api.data.model}},[n("FieldGenerator",{attrs:{field:e.code.api.data.field,"form-model":e.code.api.data.model},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("\n                    可以将"),n("code",[e._v("filed.options")]),e._v("的值设置为获取数据的接口。\n                ")]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.api.code))])],1),e._v(" "),n("Demo",{attrs:{title:"多选"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.multiple.data.model}},[n("FieldGenerator",{attrs:{field:e.code.multiple.data.field,"form-model":e.code.multiple.data.model},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("\n                    设置"),n("code",[e._v("field.multiple")]),e._v("可以控制多选，此时控件返回值为数组。\n                ")]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.multiple.code))])],1),e._v(" "),n("Demo",{attrs:{title:"可搜索"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.filterable.data.model}},[n("FieldGenerator",{attrs:{field:e.code.filterable.data.field,"form-model":e.code.filterable.data.model},on:{"on-field-change":e.handleFieldChange}}),e._v(" "),n("FieldGenerator",{attrs:{field:e.code.filterable.data.multipleField,"form-model":e.code.filterable.data.model},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("\n                    设置"),n("code",[e._v("field.filterable")]),e._v("可以控制是否可搜索，可以通过输入值来过滤选项。\n                ")]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.filterable.code))])],1),e._v(" "),n("Demo",{attrs:{title:"远程搜索"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.remote.data.model}},[n("FieldGenerator",{attrs:{field:e.code.remote.data.field,"form-model":e.code.remote.data.model},on:{"on-field-change":e.handleFieldChange}}),e._v(" "),n("FieldGenerator",{attrs:{field:e.code.remote.data.multipleField,"form-model":e.code.remote.data.model},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("设置"),n("code",[e._v("field.remote")]),e._v("为true后，可以根据输入进行远程搜索。")]),e._v(" "),n("p",[e._v("此项值依赖"),n("code",[e._v("field.options")]),e._v("为获取数据的url。如果为数组，则无效")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.remote.code))])],1),e._v(" "),n("Demo",{attrs:{title:"分组"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.group.data.model}},[n("FieldGenerator",{attrs:{field:e.code.group.data.field,"form-model":e.code.group.data.model},on:{"on-field-change":e.handleFieldChange}}),e._v(" "),n("FieldGenerator",{attrs:{field:e.code.group.data.multipleField,"form-model":e.code.group.data.model},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("\n                    设置"),n("code",[e._v("field.options")]),e._v("格式为\n                    "),n("pre",[e._v('[{\n    "groupLabel":"直辖",\n    "groupOptions":[\n        {\n            "label":"北京",\n            "value":"110000000000"\n        }\n    ]\n},\n{\n    "groupLabel": "全部",\n    "groupOptions": [\n        {\n            "label": "北京",\n            "value": "110000000000"\n        },\n        {\n            "label": "天津",\n            "value": "120000000000"\n        }\n    ]\n}]\n                    ')]),e._v("\n                    可以使选项按照分组展示。\n                ")]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.group.code))])],1),e._v(" "),n("Demo",{attrs:{title:"可清空"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.clearable.data.model}},[n("FieldGenerator",{attrs:{field:e.code.clearable.data.field,"form-model":e.code.clearable.data.model},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field.clearable")]),e._v("是否展示可清空的icon。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.clearable.code))])],1),e._v(" "),n("Demo",{attrs:{title:"前缀图标"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.prefix.data.model}},[n("FieldGenerator",{attrs:{field:e.code.prefix.data.field,"form-model":e.code.prefix.data.model},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field.prefix")]),e._v("是否展示前缀图标。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.prefix.code))])],1)],1)])},[],!1,null,"7bb3724b",null).exports;t.default=D}}]);