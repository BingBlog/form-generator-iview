(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{199:function(e,t,n){var a=n(205);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(13).default)("e91641ce",a,!0,{})},200:function(e,t,n){var a=n(207);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(13).default)("81bb6994",a,!0,{})},201:function(e,t,n){var a=n(209);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(13).default)("ef5e7348",a,!0,{})},202:function(e,t,n){"use strict";n(213),n(84),n(83);var a=n(214),o=n.n(a),l=(n(215),n(216)),i=n.n(l),d={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language(){return"auto"==this.lang?"":this.lang}},mounted(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,o.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,o.a.highlightBlock(this.$refs.code2);const e=this.$parent.$parent.$parent;"Demo"===e.$options.name&&(this.title=e.title)},methods:{clip(){const e=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),t=new i.a(".copy",{text:()=>e});t.on("success",e=>{e.clearSelection(),t.destroy(),this.copied=!0,"zh-CN"===this.docLang?this.$Message.success("代码已复制到剪贴板"):this.$Message.success("Code copied"),setTimeout(()=>{this.copied=!1},2e3)})},scale(){this.openScale=!0},getSource(e,t){const n=new RegExp("<"+t+"[^>]*>");let a=e.match(n);return a?(a=a[0],e.slice(e.indexOf(a)+a.length,e.lastIndexOf("</"+t+">"))):""},openFiddle(){}}},s=(n(204),n(206),n(0)),r=Object(s.a)(d,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("pre",{class:{bg:e.bg}},[n("code",{ref:"code",class:e.language},[e._t("default")],2)]),e._v(" "),n("span",{staticClass:"scale",on:{click:e.scale}},[n("Tooltip",{attrs:{content:e.$t("index.code_fullscreen"),placement:"top",transfer:""}},[n("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),e._v(" "),n("span",{staticClass:"copy",on:{click:e.clip}},[n("Tooltip",{attrs:{content:e.$t("index.code_copy"),placement:"top",transfer:""}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),e._v(" "),n("Modal",{attrs:{"class-name":"code-scale-modal",title:e.title,width:"65"},model:{value:e.openScale,callback:function(t){e.openScale=t},expression:"openScale"}},[n("pre",{class:{bg:e.bg}},[e._v("            "),n("code",{ref:"code2",class:e.language}),e._v("\n        ")])])],1)},[],!1,null,"7df69c7c",null);t.a=r.exports},203:function(e,t,n){"use strict";n(83);var a=n(212),o={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide(){return this.hideCode},isVertical(){return this.vertical},codeHeight(){let e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e},style(){let e={opacity:1};return this.isCodeHide&&!this.showCode&&(e.opacity=0),e},title_link(){return a.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted(){this.init()},methods:{init(){this.$nextTick(()=>{const e=this.$children[0].$children[0].$el.clientHeight,t=this.$children[0].$children[1].$el.clientHeight+20;this.code_height=t,t<=e&&!this.isCodeHide&&(this.showMore=!1),this.demo_height=this.isCodeHide?30:e,this.ready=!0})}}},l=(n(208),n(0)),i=Object(l.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Row",{staticClass:"example",class:{"example-vertical":e.isVertical},attrs:{id:e.title_link}},[n("i-col",{staticClass:"example-demo",attrs:{span:e.isVertical?24:10}},[n("div",{staticClass:"example-case"},[e._t("demo")],2),e._v(" "),n("header",{staticClass:"example-header"},[n("span",[e._v("\n                "+e._s(e.title)+"\n                "),n("a",{attrs:{href:"#"+e.title_link,"data-title":e.title}},[e._v("#")])])]),e._v(" "),n("div",{staticClass:"example-desc"},[e._t("desc")],2)]),e._v(" "),n("div",{staticClass:"example-split"}),e._v(" "),n("i-col",{staticClass:"example-code",style:e.codeHeight,attrs:{span:e.isVertical?24:14}},[n("div",{style:e.style},[e._t("code")],2),e._v(" "),e.showMore?n("div",{staticClass:"example-code-more",on:{click:function(t){e.showCode=!e.showCode}}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),e._v(" "),n("i-button",{directives:[{name:"show",rawName:"v-show",value:e.isCodeHide&&!e.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===e.lang?[e._v("显示代码")]:[e._v("Show Code")]],2)],1):e._e()])],1)},[],!1,null,null,null);t.a=i.exports},204:function(e,t,n){"use strict";var a=n(199);n.n(a).a},205:function(e,t,n){(e.exports=n(12)(!1)).push([e.i,"\ndiv[data-v-7df69c7c]{\n    position: relative;\n    font-size: 14px;\n}\nspan.copy[data-v-7df69c7c], span.scale[data-v-7df69c7c], span.open-fiddle[data-v-7df69c7c]{\n    border-radius: 0 0 3px 3px;\n    padding: 2px 5px;\n    position: absolute;\n    top: 5px;\n    right: 0;\n    color: #b2b2b2;\n    cursor: pointer;\n}\nspan.scale[data-v-7df69c7c]{\n    right: 25px;\n}\nspan.open-fiddle[data-v-7df69c7c]{\n    right: 50px;\n}\n.bg[data-v-7df69c7c] {\n    margin: 20px auto;\n}\n.bg + span.copy[data-v-7df69c7c]{\n    right: 5px;\n}\nspan.copy[data-v-7df69c7c]:hover, span.scale[data-v-7df69c7c]:hover, span.open-fiddle[data-v-7df69c7c]:hover{\n    color: #5c6b77;\n}\n\n",""])},206:function(e,t,n){"use strict";var a=n(200);n.n(a).a},207:function(e,t,n){(e.exports=n(12)(!1)).push([e.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},208:function(e,t,n){"use strict";var a=n(201);n.n(a).a},209:function(e,t,n){(e.exports=n(12)(!1)).push([e.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 20px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},232:function(e,t,n){var a=n(274);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(13).default)("fd594b34",a,!0,{})},272:function(e,t,n){e.exports=n.p+"static/img/editable-table.0b63fb8.jpeg"},273:function(e,t,n){"use strict";var a=n(232);n.n(a).a},274:function(e,t,n){(e.exports=n(12)(!1)).push([e.i,".doc-powerful-f-templates {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  margin: 32px 0;\n}\n.doc-powerful-f-templates-card {\n  margin-bottom: 32px;\n  width: 766px;\n  overflow: hidden;\n}\n.doc-powerful-f-templates-card .ivu-card-body {\n  padding: 0;\n}\n.doc-powerful-f-templates-card-img {\n  display: block;\n  width: 764px;\n  height: 160px;\n  border-bottom: solid 1px #e4e4e4;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.doc-powerful-f-templates-card-img img {\n  width: 100%;\n}\n.doc-powerful-f-templates-card-content {\n  padding: 20px;\n}\n.doc-powerful-f-templates-card-content h3 {\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.85);\n  line-height: 24px;\n}\n.doc-powerful-f-templates-card-content p {\n  height: 44px;\n  margin: 4px 0 0 0;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.45);\n  line-height: 22px;\n  overflow: hidden;\n}\n.doc-powerful-f .ivu-form-item {\n  margin-top: 20px;\n}\n.doc-powerful-f .ivu-table,\n.doc-powerful-f .ivu-table-wrapper,\n.doc-powerful-f .ivu-table-cell {\n  overflow: visible;\n}\n.doc-powerful-f .demo-header {\n  margin: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.doc-powerful-f .demo-actions {\n  margin: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n",""])},334:function(e,t,n){"use strict";n.r(t);var a=n(210),o=n(211),l=n(202),i=n(203);let d={};const s=[{type:"Input",label:"姓名",model:"name",hiddenOn:{hasAuth:{type:"enum",enum:[0]}}},{type:"Input",label:"年龄",model:"age",showOn:{hasAuth:{type:"enum",enum:[0]}}}],r={name:"张三",age:18,hasAuth:0,isCheck:1};d.data={fields:s,model:r},d.code="\n<script>\nexport default {\n    data() {\n        return {\n            fields: "+JSON.stringify(s)+",\n            model: "+JSON.stringify(r)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <FormGenerator\n            :fields="fields"\n            :model="model"\n        />\n</template>\n';let c={};const p=[{type:"Input",label:"姓名",model:"name",hiddenOn:{isShow:{type:"enum",enum:[!1]}}},{type:"Input",label:"年龄",model:"age",showOn:{isShow:{type:"enum",enum:[!1]}}}],m={name:"张三",age:12},u={isShow:!1};c.data={paramsContainer:u,paramsFields:p,paramsModel:m},c.code="\n<script>\nexport default {\n    data() {\n        return {\n            fields: "+JSON.stringify(p)+",\n            model: "+JSON.stringify(m)+",\n            paramsContainer: "+JSON.stringify(u)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <FormGenerator\n            :fields="fields"\n            :model="model"\n        />\n</template>\n';let v={};const h=[{type:"Input",label:"姓名",model:"name",hiddenOn:{hasAuth:{type:"enum",enum:[!1]}},showOn:{isCheck:{type:"enum",enum:[!1]}}}],f={name:"张三",hasAuth:!0,isCheck:!1};v.data={bothFileds:h,bothModels:f},v.code="\n<script>\nexport default {\n    data() {\n        return {\n            fields: "+JSON.stringify(h)+",\n            model: "+JSON.stringify(f)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <FormGenerator\n            :fields="fields"\n            :model="model"\n        />\n</template>\n';let g={};const _={name:"张三",age:20,hasAuth:!0,gender:1},y=[{type:"Input",label:"姓名",model:"name"},{type:"Input",label:"年龄",model:"age",showOn:{age:{type:"number",validator:(e,t,n)=>{_.hasAuth&&1===_.gender&&t>18?n():n(new Error)}}}}];g.data={validatorFileds:y,validatorModels:_},g.code="\n<script>\nexport default {\n    data() {\n        return {\n            fields: [\n                {\n                    type: 'Input',\n                    label: '姓名',\n                    model: 'name'\n                },\n                {\n                    type: 'Input',\n                    label: '年龄',\n                    model: 'age',\n                    showOn: {\n                        age: {\n                            type: 'number',\n                            validator: validateCheck\n                        }\n                    }\n                }\n            ],\n            model: "+JSON.stringify(_)+',\n            validateCheck: (rule, value, callback) => {\n                if (model.hasAuth) {\n                    if (model.gender === 1 && value > 18) {\n                        callback();\n                    } else {\n                        callback(new Error());\n                    }\n                } else {\n                    callback(new Error());\n                }\n            };\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <FormGenerator\n            :fields="fields"\n            :model="model"\n        />\n</template>\n';var x={simple:d,bothConfig:v,params:c,validatorConfig:g},b={components:{iArticle:a.a,inAnchor:o.a,iCode:l.a,Demo:i.a},data:()=>({code:x}),methods:{handleFieldChange(){}}},w=n(0),F=Object(w.a)(b,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",[n("article",[n("h1",[e._v("组件联动显示和隐藏")]),e._v(" "),n("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),n("p",[e._v("在某些业务场景中，我们常常会需要根据某些字段来判断元素的显示隐藏(比如：权限控制),利用showOn和hiddenOn两个api，可以很好的实现这一点。我们可以把控制显示或者隐藏的字段放在表单的model中，或者在页面全局变量paramContainer中使用。")]),e._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),e._v(" "),n("p",[e._v("showOn&hiddenOn基于async-validator实现的数据验证，具体规则形式请参考"),n("a",{attrs:{href:"https://github.com/yiminghe/async-validator",target:"_blank"}},[n("i",{staticClass:"ivu-icon ivu-icon-social-github"}),e._v(" async-validator")]),e._v("。")]),e._v(" "),n("inAnchor",{attrs:{title:"代码示例",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"基础用法（表单控制）"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("FormGenerator",{attrs:{fields:e.code.simple.data.fields,model:e.code.simple.data.model}})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置hiddenOn和showOn来控制表单子组件的显示和隐藏。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1),e._v(" "),n("Demo",{attrs:{title:"全局变量控制"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("FormGenerator",{attrs:{fields:e.code.params.data.paramsFields,model:e.code.params.data.paramsModel,"params-container":e.code.params.data.paramsContainer}})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("在某些场景下，控制元素显示（隐藏）的字段可能不在表单中返回，这时，我们就可以使用paramContainer来实现元素的显示（隐藏）这一功能，只需要把变量放到paramContainer中就可以了。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.params.code))])],1),e._v(" "),n("Demo",{attrs:{title:"两者共存"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("FormGenerator",{attrs:{fields:e.code.bothConfig.data.bothFileds,model:e.code.bothConfig.data.bothModels}})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("同一个表单元素同时设置showOn,hiddenOn时，满足其中一项验证规则即当项生效，同时都满足时，hiddenOn优先。我们可以利用这一点来完成业务中某些复杂的逻辑判断。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.bothConfig.code))])],1),e._v(" "),n("Demo",{attrs:{title:"复杂规则"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("FormGenerator",{attrs:{fields:e.code.validatorConfig.data.validatorFileds,model:e.code.validatorConfig.data.validatorModels}})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("如果表单里某个元素的展示需要依赖表单中的其他值，我们可以自定义验证规则来实现。本例为有权限并且年龄大于20岁的男性展示年龄这一项。通过自定义validateCheck方法，将对应的验证规则放到validateCheck方法中，实现验证。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.validatorConfig.code))])],1)],1)],1)])},[],!1,null,null,null).exports;t.default=F},335:function(e,t,n){"use strict";n.r(t);var a=n(210),o=n(211);let l={};const i=[{title:"姓名",key:"name"},{title:"年龄",key:"age"},{title:"性别",key:"gender"},{title:"出生日期",key:"birthday"},{title:"地址",key:"address"},{title:"操作",slot:"action"}],d=[{name:"王小明",age:18,gender:"男",birthday:"1999-2-21",address:"北京市朝阳区芍药居"},{name:"张小刚",age:25,gender:"男",birthday:"1992-1-23",address:"北京市海淀区西二旗"},{name:"李小红",age:30,gender:"女",birthday:"1987-11-10",address:"上海市浦东新区世纪大道"},{name:"周小伟",age:26,gender:"男",birthday:"1991-10-10",address:"深圳市南山区深南大道"}];l.code='\n<template>\n    <Table :columns="columns" :data="data">\n        <template slot="action" slot-scope="{ row, index }">\n            <Button type="primary" size="small" @click="handleDelete(index, row)">删除</Button>\n        </template>\n    </Table>\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            columns: '+JSON.stringify(i)+",\n            data: "+JSON.stringify(d)+"\n        };\n    },\n    methods: {\n        handleDelete(index) {\n            this.$Message.info(JSON.stringify({\n                index\n            }));\n        }\n    }\n};\n<script>\n",l.data={columns:i,data:d};let s={};const r=[{title:"姓名",slot:"name"},{title:"年龄",key:"age"},{title:"性别",key:"gender"},{title:"出生日期",key:"birthday"},{title:"地址",key:"address"},{title:"操作",slot:"action"}];s.code='\n<template>\n    <Table :columns="columns" :data="data">\n        <template\n            slot="name"\n            slot-scope="{ row }"\n        >\n            <Input v-model="row.name" />\n        </template>\n        <template slot="action" slot-scope="{ row, index }">\n            <Button type="primary" size="small" @click="handleSave(index, row)">保存</Button>\n        </template>\n    </Table>\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            columns: '+JSON.stringify(r)+",\n            data: "+JSON.stringify(d)+"\n        };\n    },\n    methods: {\n        handleSave(index, data) {\n            this.$Message.info(JSON.stringify({\n                index,\n                data\n            })});\n        }\n    }\n};\n<script>\n",s.data={columns:r,data:d};let c={};const p=[{title:"姓名",slot:"name"},{title:"年龄",key:"age"},{title:"性别",key:"gender"},{title:"出生日期",key:"birthday"},{title:"地址",key:"address"},{title:"操作",slot:"action"}],m={type:"Input",model:"name",placeholder:"请输入用户名",rules:[{type:"string",required:!0,pattern:/^[\u4e00-\u9fa5]+$/,message:"请输入中文姓名"}]},u={type:"Button",subtype:"primary",text:"保存",action:{type:"event",name:"save"}};c.code='\n<template>\n    <Table :columns="columns" :data="data">\n        <template slot="name">\n            <FieldGenerator\n                :field="inputField"\n            />\n        </template>\n        <template slot="action" slot-scope="{ row, index }">\n            <FieldGenerator\n                :field="buttonField"\n                @on-button-event="handleButtonEvent($event, index, row)"\n            />\n        </template>\n    </Table>\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            columns: '+JSON.stringify(p)+",\n            data: "+JSON.stringify(d)+",\n            inputField: "+JSON.stringify(m)+",\n            buttonField: "+JSON.stringify(u)+"\n        };\n    },\n    methods: {\n        handleButtonEvent({name}, index, data) {\n            // eslint-disable-next-line no-console\n            switch (name) {\n                case 'save':\n                    this.$Message.info(JSON.stringify({\n                        index,\n                        data\n                    }));\n                    break;\n                case 'delete':\n                    this.handleDynamicFormDel(index);\n                    break;\n            }\n\n        },\n    }\n};\n<script>\n",c.data={columns:p,data:d,inputField:m,buttonField:u};let v={};const h=[{title:"姓名",slot:"name",formField:{type:"Input",model:"name",placeholder:"请输入用户名",rules:[{type:"string",required:!0,pattern:/^[\u4e00-\u9fa5]+$/,message:"请输入中文姓名"}]}},{title:"年龄",key:"age"},{title:"性别",key:"gender"},{title:"出生日期",key:"birthday"},{title:"地址",key:"address"},{title:"操作",slot:"action",formField:{type:"Button",subtype:"primary",text:"保存",action:{type:"event",name:"save"}}}];v.code='\n<template>\n    <Table :columns="columns" :data="data">\n        <template\n            v-for="column in columns"\n            :slot="column.slot"\n            slot-scope="{ row, index }"\n        >\n            <Form\n                :key="column.slot"\n\n                :model="row"\n            >\n                <FieldGenerator\n                    :field="column.formField"\n                    @on-button-event="handleButtonEvent($event, index, row)"\n                />\n            </Form>\n        </template>\n    </Table>\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            columns: '+JSON.stringify(h)+",\n            data: "+JSON.stringify(d)+"\n        };\n    },\n    methods: {\n        handleSave(index, data) {\n            this.$Message.info(JSON.stringify({\n                index,\n                data\n            })});\n        }\n    }\n};\n<script>\n",v.data={columns:h,data:d};let f={};f.code='\n<template>\n    <Table :columns="columns" :data="data">\n        <template\n            v-for="column in columns"\n            :slot="column.slot"\n            slot-scope="{ row, index }"\n        >\n            <Form\n                :key="column.slot"\n\n                :model="row"\n            >\n                <FieldGenerator\n                    :field="column.formField"\n                    @on-button-event="handleButtonEvent($event, index, row)"\n                />\n            </Form>\n        </template>\n    </Table>\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            columns: '+JSON.stringify(h)+",\n            data: "+JSON.stringify(d)+"\n        };\n    },\n    methods: {\n        handleSave(index, data) {\n            this.$Message.info(JSON.stringify({\n                index,\n                data\n            })});\n        }\n    }\n};\n<script>\n",f.data={columns:[{title:"姓名",slot:"name",formField:{type:"Input",model:"name",placeholder:"请输入用户名",rules:[{type:"string",required:!0,pattern:/^[\u4e00-\u9fa5]+$/,message:"请输入中文姓名"}]}},{title:"年龄",slot:"age",formField:{type:"InputNumber",model:"age",placeholder:"请输入年龄",required:!0,max:150,min:0}},{title:"性别",slot:"gender",formField:{type:"Select",model:"gender",placeholder:"请输入性别",required:!0,options:[{label:"男",value:"男"},{label:"女",value:"女"},{label:"保密",value:"保密"}]}},{title:"出生日期",slot:"birthday",formField:{type:"DatePicker",subtype:"date",model:"birthday",placeholder:"请输入出生日期",required:!0}},{title:"地址",slot:"address",formField:{type:"Input",model:"address",placeholder:"请输入地址",required:!0}},{title:"操作",slot:"action",formField:{type:"Button",subtype:"primary",text:"保存",action:{type:"event",name:"save"}}}],data:d};let g={};const _=[{title:"姓名",slot:"name",formFields:[{type:"Input",model:"name",placeholder:"请输入用户名",rules:[{type:"string",required:!0,pattern:/^[\u4e00-\u9fa5]+$/,message:"请输入中文姓名"}]}]},{title:"年龄",slot:"age",formFields:[{type:"InputNumber",model:"age",placeholder:"请输入年龄",required:!0,max:150,min:0}]},{title:"性别",slot:"gender",formFields:[{type:"Select",model:"gender",placeholder:"请输入性别",required:!0,options:[{label:"男",value:"男"},{label:"女",value:"女"},{label:"保密",value:"保密"}]}]},{title:"出生日期",slot:"birthday",formFields:[{type:"DatePicker",subtype:"date",model:"birthday",placeholder:"请输入出生日期",required:!0}]},{title:"地址",slot:"address",formFields:[{type:"Input",model:"address",placeholder:"请输入地址",required:!0,showOn:{gender:[{required:!0,type:"enum",enum:["男"]}]}},{type:"Text",model:"address",showOn:{gender:[{required:!0,type:"enum",enum:["女"]}]}}]},{title:"操作",slot:"action",formFields:[{type:"Button",subtype:"primary",text:"保存",action:{type:"event",name:"save"}}]}];g.code='\n<template>\n    <Table :columns="columns" :data="data">\n        <template\n            v-for="column in columns"\n            :slot="column.slot"\n            slot-scope="{ row, index }"\n        >\n            <Form\n                :key="column.slot"\n\n                :model="row"\n            >\n                <FieldGenerator\n                    v-for="field in column.formFields"\n                    :key="field.name"\n                    :field="field"\n                    @on-button-event="handleButtonEvent($event, index, row)"\n                />\n            </Form>\n        </template>\n    </Table>\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            columns: '+JSON.stringify(_)+",\n            data: "+JSON.stringify(d)+"\n        };\n    },\n    methods: {\n        handleSave(index, data) {\n            this.$Message.info(JSON.stringify({\n                index,\n                data\n            })});\n        }\n    }\n};\n<script>\n",g.data={columns:_,data:d};let y={};const x=[{title:"姓名",slot:"name",formFields:[{type:"Input",model:"name",placeholder:"请输入用户名",rules:[{type:"string",required:!0,pattern:/^[\u4e00-\u9fa5]+$/,message:"请输入中文姓名"}]}]},{title:"年龄",slot:"age",formFields:[{type:"InputNumber",model:"age",placeholder:"请输入年龄",required:!0,max:150,min:0}]},{title:"性别",slot:"gender",formFields:[{type:"Select",model:"gender",placeholder:"请输入性别",required:!0,options:[{label:"男",value:"男"},{label:"女",value:"女"},{label:"保密",value:"保密"}]}]},{title:"出生日期",slot:"birthday",formFields:[{type:"DatePicker",subtype:"date",model:"birthday",placeholder:"请输入出生日期",required:!0}]},{title:"地址",slot:"address",formFields:[{type:"Text",model:"gender",placeholder:"请输入地址",required:!0}]},{title:"操作",slot:"action",formFields:[{type:"Button",subtype:"primary",text:"删除",action:{type:"event",name:"delete"}}]}];y.code='\n<template>\n    <Table :columns="columns" :data="data">\n        <template\n            v-for="column in code.dynamicForm.data.columns"\n            :slot="column.slot"\n            slot-scope="{ row, index }"\n        >\n            <Form\n                :key="column.slot"\n                ref="dynamicForm"\n                :model="row"\n            >\n                <FieldGenerator\n                    v-for="field in column.formFields"\n                    :key="field.name"\n                    :field="field"\n                    @on-button-event="handleButtonEvent($event, index, row)"\n                />\n            </Form>\n        </template>\n    </Table>\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            columns: '+JSON.stringify(x)+",\n            data: "+JSON.stringify(d)+"\n        };\n    },\n    methods: {\n        handleSave(index, data) {\n            this.$Message.info(JSON.stringify({\n                index,\n                data\n            })});\n        }\n    }\n};\n<script>\n",y.data={columns:x,data:d};var b={table:l,input:s,fieldGeneratorInputAndButton:c,configInputAndButton:v,configMore:f,showOnHiddenOn:g,dynamicForm:y},w=n(203),F=n(202);const k=[{path:"/form-editable-table",img:n(272),title:"可编辑表格",desc:"表格展示使得数据清晰、明了，直接在表格中进行编辑，能够大大提高编辑效率。"}];var C={components:{iArticle:a.a,inAnchor:o.a,Demo:w.a,iCode:F.a},data:()=>({templates:k,code:b,dynamicFormData:JSON.parse(JSON.stringify(b.dynamicForm.data.data))}),methods:{handleDelete(e){this.$Message.info(JSON.stringify({index:e}))},handleSave(e,t){this.$Message.info(JSON.stringify({index:e,data:t}))},handleButtonEvent(e,t,n){let{name:a}=e;switch(a){case"save":this.$Message.info(JSON.stringify({index:t,data:n}));break;case"delete":this.handleDynamicFormDel(t)}},handleDynamicFormAdd(){const e=this.getDynamicFormData();e.push({}),this.dynamicFormData=e},handleDynamicFormDel(e){this.dynamicFormData.splice(e,1)},handleDynamicFormSubmit(){this.$Message.info(JSON.stringify({data:this.getDynamicFormData()}))},getDynamicFormData(){const e=[];return this.$refs.dynamicForm.forEach(t=>{e[t.model._index]=t.model}),e}}},O=(n(273),n(0)),S=Object(O.a)(C,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",{staticClass:"doc-powerful-f"},[n("article",[n("h1",[e._v("强大的fieldGenerator")]),e._v(" "),n("p",[e._v("在开发中，输入并不总是以一个完整的表单形式出现，在复杂场景下，输入控件会内嵌至表格中，形成更复杂的如表格行内编辑。")]),e._v(" "),n("div",{staticClass:"doc-powerful-f-templates"},e._l(e.templates,function(t,a){return n("Card",{key:a,staticClass:"doc-powerful-f-templates-card"},[n("router-link",{attrs:{to:t.path}},[n("div",{staticClass:"doc-powerful-f-templates-card-img"},[n("img",{attrs:{src:t.img,alt:t.title}})]),e._v(" "),n("div",{staticClass:"doc-powerful-f-templates-card-content"},[n("h3",[e._v(e._s(t.title))]),e._v(" "),n("p",[e._v("\n                            "+e._s(t.desc)+"\n                        ")])])])],1)}),1),e._v(" "),n("p",[e._v("\n            对于这样的场景，如何实现表单控件恰当地内置到表格中，在开发中通常是一个很头疼问题，但是这在我们的开发中却常常遇到。\n            本文接下来讲向你展示，如何使用FormGenerator中内置的"),n("strong",[e._v("FieldGenerator")]),e._v("组件，通过JSON配置及少量的模板代码，来实现上面的需求。\n        ")]),e._v(" "),n("p",[e._v("本节的要点是："),n("strong",[e._v("FieldGenerator的灵活性使得其可以和其他组件进行搭配来实现复杂场景下的表单输入。")])]),e._v(" "),n("inAnchor",{attrs:{title:"一、先创建一个表格【iView原生用法】",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"先创建一个表格",vertical:""}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Table",{attrs:{columns:e.code.table.data.columns,data:e.code.table.data.data},scopedSlots:e._u([{key:"action",fn:function(t){var a=t.row,o=t.index;return[n("Button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.handleDelete(o,a)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("使用iView Table 组件，很容易实现一个带有删除等操作的表格。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.table.code))])],1),e._v(" "),n("inAnchor",{attrs:{title:"二、然后表格中内置一个Input和一个Button【iView原生用法】",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"表格中内置一个Input和一个Button",vertical:""}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Table",{attrs:{columns:e.code.input.data.columns,data:e.code.input.data.data},scopedSlots:e._u([{key:"name",fn:function(t){var a=t.row;return[n("Form",{attrs:{model:a}},[n("FormItem",[n("Input",{attrs:{placeholder:"请输入姓名"},model:{value:a.name,callback:function(t){e.$set(a,"name",t)},expression:"row.name"}})],1)],1)]}},{key:"action",fn:function(t){var a=t.row,o=t.index;return[n("Form",{attrs:{model:a}},[n("Button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.handleSave(o,a)}}},[e._v("保存")])],1)]}}])})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("在iView Table组件中，置入Input和Button，来实现编辑并保存的功能。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.input.code))])],1),e._v(" "),n("inAnchor",{attrs:{title:"三、使用FieldGenerator来实现Input和Button【该Demo仅演示过程，不推荐项目中使用】",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"使用FieldGenerator来实现Input和Button",vertical:""}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Table",{attrs:{columns:e.code.fieldGeneratorInputAndButton.data.columns,data:e.code.fieldGeneratorInputAndButton.data.data},scopedSlots:e._u([{key:"name",fn:function(t){var a=t.row;return[n("Form",{attrs:{model:a}},[n("FieldGenerator",{attrs:{field:e.code.fieldGeneratorInputAndButton.data.inputField}})],1)]}},{key:"action",fn:function(t){var a=t.row,o=t.index;return[n("Form",{attrs:{model:a}},[n("FieldGenerator",{attrs:{field:e.code.fieldGeneratorInputAndButton.data.buttonField},on:{"on-button-event":function(t){return e.handleButtonEvent(t,o,a)}}})],1)]}}])})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过FieldGenerator组件来代替直接置入Input和Button，这个Demo仅用来展示代替的过程，下一个Demo将展示抽离Input和Button的配置。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.fieldGeneratorInputAndButton.code))])],1),e._v(" "),n("inAnchor",{attrs:{title:"四、将Input和Button的配置进行抽离",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"将Input和Button的配置进行抽离",vertical:""}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Table",{attrs:{columns:e.code.configInputAndButton.data.columns,data:e.code.configInputAndButton.data.data},scopedSlots:e._u([e._l(e.code.configInputAndButton.data.columns,function(t){return{key:t.slot,fn:function(a){var o=a.row,l=a.index;return[n("Form",{key:t.slot,attrs:{model:o}},[n("FieldGenerator",{attrs:{field:t.formField},on:{"on-button-event":function(t){return e.handleButtonEvent(t,l,o)}}})],1)]}}})],null,!0)})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("将Input和Button的配置抽离到columns里面，通过循环slot来渲染。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.configInputAndButton.code))])],1),e._v(" "),n("inAnchor",{attrs:{title:"五、配置更多的输入控件",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"配置更多的输入控件",vertical:""}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Table",{attrs:{columns:e.code.configMore.data.columns,data:e.code.configMore.data.data},scopedSlots:e._u([e._l(e.code.configMore.data.columns,function(t){return{key:t.slot,fn:function(a){var o=a.row,l=a.index;return[n("Form",{key:t.slot,attrs:{model:o}},[n("FieldGenerator",{attrs:{field:t.formField},on:{"on-button-event":function(t){return e.handleButtonEvent(t,l,o)}}})],1)]}}})],null,!0)})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过在表格中置入更多类型的输入控件。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.configMore.code))])],1),e._v(" "),n("inAnchor",{attrs:{title:"六、表格中控件的展示和隐藏",h2:""}}),e._v(" "),n("p",[e._v("在需要时，我们可以为每个单元格配置多个控件。通过showOn和hiddenOn可以实现对单元格展示控件进行区别控制。")]),e._v(" "),n("Demo",{attrs:{title:"表格中控件的展示和隐藏",vertical:""}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Table",{attrs:{columns:e.code.showOnHiddenOn.data.columns,data:e.code.showOnHiddenOn.data.data},scopedSlots:e._u([e._l(e.code.showOnHiddenOn.data.columns,function(t){return{key:t.slot,fn:function(a){var o=a.row,l=a.index;return[n("Form",{key:t.slot,attrs:{model:o}},e._l(t.formFields,function(t){return n("FieldGenerator",{key:t.name,attrs:{field:t},on:{"on-button-event":function(t){return e.handleButtonEvent(t,l,o)}}})}),1)]}}})],null,!0)})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("性别为男时，地址可编辑；性别为女时，地址不可编辑；")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.showOnHiddenOn.code))])],1),e._v(" "),n("inAnchor",{attrs:{title:"七、扩展场景-动态表单批量校验",h2:""}}),e._v(" "),n("p",[e._v("有时候，我们需要同时添加多项，然后批量校验和提交。")]),e._v(" "),n("Demo",{attrs:{title:"扩展场景-动态表单批量校验",vertical:""}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("div",{staticClass:"demo-header"},[n("Button",{attrs:{type:"primary"},on:{click:e.handleDynamicFormAdd}},[e._v("添加")])],1),e._v(" "),n("Table",{attrs:{columns:e.code.dynamicForm.data.columns,data:e.dynamicFormData},scopedSlots:e._u([e._l(e.code.dynamicForm.data.columns,function(t){return{key:t.slot,fn:function(a){var o=a.row,l=a.index;return[n("Form",{key:t.slot,ref:"dynamicForm",refInFor:!0,attrs:{model:o}},e._l(t.formFields,function(t){return n("FieldGenerator",{key:t.name,attrs:{field:t},on:{"on-button-event":function(t){return e.handleButtonEvent(t,l,o)}}})}),1)]}}})],null,!0)}),e._v(" "),n("div",{staticClass:"demo-actions"},[n("Button",{attrs:{type:"primary"},on:{click:e.handleDynamicFormSubmit}},[e._v("提交")])],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",{attrs:{type:"primary"}},[e._v("使用FieldGenerator处理动态添加子项，批量校验和提交也很简单。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.dynamicForm.code))])],1)],1)])},[],!1,null,null,null).exports;t.default=S},348:function(e,t,n){"use strict";n.r(t);var a=n(210),o=n(211),l={components:{iArticle:a.a,inAnchor:o.a},data:()=>({})},i=n(0),d=Object(i.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",[n("article",[n("h1",[e._v("选择合适的组件类型")]),e._v(" "),n("p",[e._v("提供各种相似场景组件的速查表和场景建议。")]),e._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"选项选择类",h2:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("组件类型")]),e._v(" "),n("th",[e._v("适用场景")]),e._v(" "),n("th",[e._v("推荐场景")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("Switch")]),e._v(" "),n("td",[e._v("开关选择")]),e._v(" "),n("td",[e._v("只有两个选项，且为对立面")])]),e._v(" "),n("tr",[n("td",[e._v("Radio")]),e._v(" "),n("td",[e._v("直接单选")]),e._v(" "),n("td",[e._v("选择项少于6个，直接展示所有选项")])]),e._v(" "),n("tr",[n("td",[e._v("Checkbox")]),e._v(" "),n("td",[e._v("直接多选")]),e._v(" "),n("td",[e._v("选择项少于6个，直接展示所有选项")])]),e._v(" "),n("tr",[n("td",[e._v("CheckboxCard")]),e._v(" "),n("td",[e._v("卡片多选")]),e._v(" "),n("td",[e._v("多选，且需展示图文信息时")])]),e._v(" "),n("tr",[n("td",[e._v("Select")]),e._v(" "),n("td",[e._v("先下拉，再选择")]),e._v(" "),n("td",[e._v("选项大于等于6个")])]),e._v(" "),n("tr",[n("td",[e._v("LogicSelect")]),e._v(" "),n("td",[e._v("逻辑选择")]),e._v(" "),n("td",[e._v("需要进行大于、小于、等于、区间等逻辑的选择时")])]),e._v(" "),n("tr",[n("td",[e._v("Cascader")]),e._v(" "),n("td",[e._v("层级较多时的选择")]),e._v(" "),n("td",[e._v("多级单选")])]),e._v(" "),n("tr",[n("td",[e._v("Tree")]),e._v(" "),n("td",[e._v("层级较多时的选择")]),e._v(" "),n("td",[e._v("多级多选")])]),e._v(" "),n("tr",[n("td",[e._v("TableSelect")]),e._v(" "),n("td",[e._v("表格选择")]),e._v(" "),n("td",[e._v("有较多的描述信息")])]),e._v(" "),n("tr",[n("td",[e._v("Carousel")]),e._v(" "),n("td",[e._v("走马灯")]),e._v(" "),n("td",[e._v("可通过横划来进行单选，适用于图片视频媒体的单选")])])])])],1)])])},[],!1,null,null,null).exports;t.default=d},350:function(e,t,n){"use strict";n.r(t);var a={components:{iArticle:n(210).a},data:()=>({})},o=n(0),l=Object(o.a)(a,function(){var e=this.$createElement,t=this._self._c||e;return t("i-article",[t("article",[t("h1",[this._v("请求拦截")]),this._v(" "),t("p",[this._v("请求拦截")])])])},[],!1,null,null,null).exports;t.default=l},351:function(e,t,n){"use strict";n.r(t);var a={components:{iArticle:n(210).a},data:()=>({})},o=n(0),l=Object(o.a)(a,function(){var e=this.$createElement,t=this._self._c||e;return t("i-article",[t("article",[t("h1",[this._v("表单校验")]),this._v(" "),t("p",[this._v("如何表单校验")])])])},[],!1,null,null,null).exports;t.default=l}}]);