(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{312:function(e,t,n){var d=n(318);"string"==typeof d&&(d=[[e.i,d,""]]),d.locals&&(e.exports=d.locals);(0,n(16).default)("e91641ce",d,!0,{})},313:function(e,t,n){var d=n(320);"string"==typeof d&&(d=[[e.i,d,""]]),d.locals&&(e.exports=d.locals);(0,n(16).default)("81bb6994",d,!0,{})},314:function(e,t,n){var d=n(322);"string"==typeof d&&(d=[[e.i,d,""]]),d.locals&&(e.exports=d.locals);(0,n(16).default)("ef5e7348",d,!0,{})},315:function(e,t,n){"use strict";n(326),n(135),n(134);var d=n(327),o=n.n(d),a=(n(328),n(329)),i=n.n(a),l={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language(){return"auto"==this.lang?"":this.lang}},mounted(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,o.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,o.a.highlightBlock(this.$refs.code2);const e=this.$parent.$parent.$parent;"Demo"===e.$options.name&&(this.title=e.title)},methods:{clip(){const e=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),t=new i.a(".copy",{text:()=>e});t.on("success",e=>{e.clearSelection(),t.destroy(),this.copied=!0,"zh-CN"===this.docLang?this.$Message.success("代码已复制到剪贴板"):this.$Message.success("Code copied"),setTimeout(()=>{this.copied=!1},2e3)})},scale(){this.openScale=!0},getSource(e,t){const n=new RegExp("<"+t+"[^>]*>");let d=e.match(n);return d?(d=d[0],e.slice(e.indexOf(d)+d.length,e.lastIndexOf("</"+t+">"))):""},openFiddle(){}}},s=(n(317),n(319),n(0)),r=Object(s.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("pre",{class:{bg:e.bg}},[n("code",{ref:"code",class:e.language},[e._t("default")],2)]),e._v(" "),n("span",{staticClass:"scale",on:{click:e.scale}},[n("Tooltip",{attrs:{content:e.$t("index.code_fullscreen"),placement:"top",transfer:""}},[n("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),e._v(" "),n("span",{staticClass:"copy",on:{click:e.clip}},[n("Tooltip",{attrs:{content:e.$t("index.code_copy"),placement:"top",transfer:""}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),e._v(" "),n("Modal",{attrs:{"class-name":"code-scale-modal",title:e.title,width:"65"},model:{value:e.openScale,callback:function(t){e.openScale=t},expression:"openScale"}},[n("pre",{class:{bg:e.bg}},[e._v("            "),n("code",{ref:"code2",class:e.language}),e._v("\n        ")])])],1)},[],!1,null,"7df69c7c",null);t.a=r.exports},316:function(e,t,n){"use strict";n(134);var d=n(325),o={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide(){return this.hideCode},isVertical(){return this.vertical},codeHeight(){let e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e},style(){let e={opacity:1};return this.isCodeHide&&!this.showCode&&(e.opacity=0),e},title_link(){return d.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted(){this.init()},methods:{init(){this.$nextTick(()=>{const e=this.$children[0].$children[0].$el.clientHeight,t=this.$children[0].$children[1].$el.clientHeight+20;this.code_height=t,t<=e&&!this.isCodeHide&&(this.showMore=!1),this.demo_height=this.isCodeHide?30:e,this.ready=!0})}}},a=(n(321),n(0)),i=Object(a.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Row",{staticClass:"example",class:{"example-vertical":e.isVertical},attrs:{id:e.title_link}},[n("i-col",{staticClass:"example-demo",attrs:{span:e.isVertical?24:10}},[n("div",{staticClass:"example-case"},[e._t("demo")],2),e._v(" "),n("header",{staticClass:"example-header"},[n("span",[e._v("\n                "+e._s(e.title)+"\n                "),n("a",{attrs:{href:"#"+e.title_link,"data-title":e.title}},[e._v("#")])])]),e._v(" "),n("div",{staticClass:"example-desc"},[e._t("desc")],2)]),e._v(" "),n("div",{staticClass:"example-split"}),e._v(" "),n("i-col",{staticClass:"example-code",style:e.codeHeight,attrs:{span:e.isVertical?24:14}},[n("div",{style:e.style},[e._t("code")],2),e._v(" "),e.showMore?n("div",{staticClass:"example-code-more",on:{click:function(t){e.showCode=!e.showCode}}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),e._v(" "),n("i-button",{directives:[{name:"show",rawName:"v-show",value:e.isCodeHide&&!e.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===e.lang?[e._v("显示代码")]:[e._v("Show Code")]],2)],1):e._e()])],1)},[],!1,null,null,null);t.a=i.exports},317:function(e,t,n){"use strict";var d=n(312);n.n(d).a},318:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,"\ndiv[data-v-7df69c7c]{\n    position: relative;\n    font-size: 14px;\n}\nspan.copy[data-v-7df69c7c], span.scale[data-v-7df69c7c], span.open-fiddle[data-v-7df69c7c]{\n    border-radius: 0 0 3px 3px;\n    padding: 2px 5px;\n    position: absolute;\n    top: 5px;\n    right: 0;\n    color: #b2b2b2;\n    cursor: pointer;\n}\nspan.scale[data-v-7df69c7c]{\n    right: 25px;\n}\nspan.open-fiddle[data-v-7df69c7c]{\n    right: 50px;\n}\n.bg[data-v-7df69c7c] {\n    margin: 20px auto;\n}\n.bg + span.copy[data-v-7df69c7c]{\n    right: 5px;\n}\nspan.copy[data-v-7df69c7c]:hover, span.scale[data-v-7df69c7c]:hover, span.open-fiddle[data-v-7df69c7c]:hover{\n    color: #5c6b77;\n}\n\n",""])},319:function(e,t,n){"use strict";var d=n(313);n.n(d).a},320:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},321:function(e,t,n){"use strict";var d=n(314);n.n(d).a},322:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 20px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},337:function(e,t,n){var d=n(361);"string"==typeof d&&(d=[[e.i,d,""]]),d.locals&&(e.exports=d.locals);(0,n(16).default)("36d32a44",d,!0,{})},360:function(e,t,n){"use strict";var d=n(337);n.n(d).a},361:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,"\n.fg-ivu-input[data-v-0800d7a4] {\n    margin-top: 20px;\n}\n",""])},396:function(e,t,n){"use strict";n.r(t);var d=n(323),o=n(324),a=n(315),i=n(316);let l={};const s={type:"Input",model:"name"},r={name:"iview"};l.data={field:s,model:r},l.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(s)+",\n            model: "+JSON.stringify(r)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';let c={};const p={type:"Input",model:"name",size:"large"},v={type:"Input",model:"name",size:"default"},_={type:"Input",model:"name",size:"small"},m={name:"iview"};c.code="\n<script>\nexport default {\n    data() {\n        return {\n            sizeLargeField: "+JSON.stringify(p)+",\n            sizeNormalField: "+JSON.stringify(v)+",\n            sizeSmallField: "+JSON.stringify(_)+",\n            model: "+JSON.stringify(m)+'\n        };\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="sizeLargeField"\n        />\n        <FieldGenerator\n            :field="sizeNormalField"\n        />\n        <FieldGenerator\n            :field="sizeSmallField"\n        />\n    </Form>\n</template>\n',c.data={sizeLargeField:p,sizeDefaultField:v,sizeSmallField:_,model:m};let f={};const h={type:"Input",model:"name",clearable:!0},u={name:"hover时，展示可清空按钮"};f.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(h)+",\n            model: "+JSON.stringify(u)+'\n        };\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n        />\n    </Form>\n</template>\n',f.data={field:h,model:u};let x={};const g={type:"Input",model:"name",icon:"ios-clock-outline"},F={name:""};x.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(g)+",\n            model: "+JSON.stringify(F)+'\n        };\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n        />\n    </Form>\n</template>\n',x.data={field:g,model:F};let y={};const b={type:"Input",model:"name",prefix:"ios-contact"},w={type:"Input",model:"name",suffix:"ios-search"},S={name:"",keyword:""};y.code="\n<script>\nexport default {\n    data() {\n        return {\n            prefixField: "+JSON.stringify(b)+",\n            suffixField: "+JSON.stringify(w)+",\n            model: "+JSON.stringify(S)+'\n        };\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="prefixField"\n        />\n        <FieldGenerator\n            :field="suffixField"\n        />\n    </Form>\n</template>\n',y.data={prefixField:b,suffixField:w,model:S};let z={};const C={type:"Input",model:"name",search:!0},N={type:"Input",model:"name",search:!0,enterButton:!0},G={type:"Input",model:"name",search:!0,enterButton:"搜索"},O={name:""};z.code="\n<script>\nexport default {\n    data() {\n        return {\n            searchField: "+JSON.stringify(C)+",\n            enterButtonField: "+JSON.stringify(N)+",\n            searchWithEnterButtonField: "+JSON.stringify(G)+",\n            model: "+JSON.stringify(O)+'\n        };\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="searchField"\n        />\n        <FieldGenerator\n            :field="enterButtonField"\n        />\n        <FieldGenerator\n            :field="searchWithEnterButtonField"\n        />\n    </Form>\n</template>\n',z.data={searchField:C,enterButtonField:N,searchWithEnterButtonField:G,model:O};let I={};const J={type:"Input",model:"name",subtype:"textarea",rows:4},k={name:""};I.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(J)+",\n            model: "+JSON.stringify(k)+'\n        };\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n        />\n    </Form>\n</template>\n',I.data={field:J,model:k};let A={};const B={type:"Input",model:"name",subtype:"textarea",autosize:!0},$={name:""};A.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(B)+",\n            model: "+JSON.stringify($)+'\n        };\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n        />\n    </Form>\n</template>\n',A.data={field:B,model:$};let D={};const H={type:"Input",model:"name",disabled:!0},T={type:"Input",model:"intro",subtype:"textarea",disabled:!0},L={name:"",intro:""};D.code="\n<script>\nexport default {\n    data() {\n        return {\n            inputField: "+JSON.stringify(H)+",\n            textareaField: "+JSON.stringify(T)+",\n            model: "+JSON.stringify(L)+'\n        };\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n        />\n    </Form>\n</template>\n',D.data={inputField:H,textareaField:T,model:L};let M={};const E={type:"Input",model:"url",prepend:"https://"},j={type:"Input",model:"url",append:".com"},q={type:"Input",model:"url",prepend:"https://",append:".com"},R={url:""};M.code="\n<script>\nexport default {\n    data() {\n        return {\n            prependField: "+JSON.stringify(E)+",\n            suffixField: "+JSON.stringify(j)+",\n            prependAndSuffixField: "+JSON.stringify(q)+",\n            model: "+JSON.stringify(R)+'\n        };\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="prependField"\n        />\n        <FieldGenerator\n            :field="suffixField"\n        />\n        <FieldGenerator\n            :field="prependAndSuffixField"\n        />\n    </Form>\n</template>\n',M.data={prependField:E,appendField:j,prependAndappendField:q,model:R};var V={simple:l,size:c,clearable:f,withIcon:x,prefixAndSuffix:y,search:z,textarea:I,aotusizeTextarea:A,disabled:D,prependAndAppend:M},W={components:{iArticle:d.a,inAnchor:o.a,iCode:a.a,Demo:i.a},data:()=>({code:V}),methods:{handleFieldChange(e,t){console.log(e,t)}}},K=(n(360),n(0)),P=Object(K.a)(W,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",[n("article",[n("h1",[e._v("Input")]),e._v(" "),n("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),n("p",[e._v("基本表单组件，支持 input 和 textarea，并在原生控件基础上进行了功能扩展，可以组合使用。")]),e._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),e._v(" "),n("inAnchor",{attrs:{title:"核心配置",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("model")]),e._v(" "),n("td",[e._v("绑定的值的名称")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("不可为空")])]),e._v(" "),n("tr",[n("td",[e._v("subtype")]),e._v(" "),n("td",[e._v("输入框类型，可选值为 "),n("code",[e._v("text")]),e._v("、"),n("code",[e._v("password")]),e._v("、"),n("code",[e._v("textarea")]),e._v("、"),n("code",[e._v("url")]),e._v("、"),n("code",[e._v("email")]),e._v("、"),n("code",[e._v("date")])]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("text")])]),e._v(" "),n("tr",[n("td",[e._v("size")]),e._v(" "),n("td",[e._v("输入框尺寸，可选值为"),n("code",[e._v("large")]),e._v("、"),n("code",[e._v("small")]),e._v("、"),n("code",[e._v("default")]),e._v("或者不设置")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("placeholder")]),e._v(" "),n("td",[e._v("占位文本")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("clearable")]),e._v(" "),n("td",[e._v("是否显示清空按钮")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("disabled")]),e._v(" "),n("td",[e._v("设置输入框为禁用状态")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])])])]),e._v(" "),n("inAnchor",{attrs:{title:"扩展配置",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("readonly")]),e._v(" "),n("td",[e._v("设置输入框为只读")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("maxlength")]),e._v(" "),n("td",[e._v("最大输入长度")]),e._v(" "),n("td",[e._v("Number")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("icon")]),e._v(" "),n("td",[e._v("输入框尾部图标，仅在 text 类型下有效")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("prefix")]),e._v(" "),n("td",[e._v("输入框头部图标")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("suffix")]),e._v(" "),n("td",[e._v("输入框尾部图标")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("search")]),e._v(" "),n("td",[e._v("是否显示为搜索型输入框")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("enter-button")]),e._v(" "),n("td",[e._v("开启 search 时可用，是否有确认按钮，可设为按钮文字")]),e._v(" "),n("td",[e._v("Boolean | String")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("rows")]),e._v(" "),n("td",[e._v("文本域默认行数，仅在 textarea 类型下有效")]),e._v(" "),n("td",[e._v("Number")]),e._v(" "),n("td",[e._v("2")])]),e._v(" "),n("tr",[n("td",[e._v("autosize")]),e._v(" "),n("td",[e._v("自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }")]),e._v(" "),n("td",[e._v("Boolean | Object")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("number")]),e._v(" "),n("td",[e._v("将用户的输入转换为 Number 类型")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("autofocus")]),e._v(" "),n("td",[e._v("自动获取焦点")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("autocomplete")]),e._v(" "),n("td",[e._v("原生的自动完成功能，可选值为 off 和 on")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("off")])]),e._v(" "),n("tr",[n("td",[e._v("spellcheck")]),e._v(" "),n("td",[e._v("原生的 spellcheck 属性")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("prepend")]),e._v(" "),n("td",[e._v("复合型输入前置信息，仅展示使用，不影响输入值")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("append")]),e._v(" "),n("td",[e._v("复合型输入后置信息，仅展示使用，不影响输入值")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])])])])],1),e._v(" "),n("inAnchor",{attrs:{title:"代码示例",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"基础用法"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.simple.data.model}},[n("FieldGenerator",{attrs:{field:e.code.simple.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field")]),e._v(", "),n("code",[e._v("model")]),e._v("即可生成一个Input。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1),e._v(" "),n("Demo",{attrs:{title:"尺寸"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.size.data.model}},[n("FieldGenerator",{attrs:{field:e.code.size.data.sizeLargeField}}),e._v(" "),n("FieldGenerator",{attrs:{field:e.code.size.data.sizeDefaultField}}),e._v(" "),n("FieldGenerator",{attrs:{field:e.code.size.data.sizeSmallField}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field.size")]),e._v("可以控制大小。")]),e._v(" "),n("p",[e._v("输入框有三种尺寸：大、默认（中）、小")]),e._v(" "),n("p",[e._v("通过设置"),n("code",[e._v("size")]),e._v("为"),n("code",[e._v("large")]),e._v("和"),n("code",[e._v("small")]),e._v("设置为大和小尺寸，不设置为默认（中）尺寸。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.size.code))])],1),e._v(" "),n("Demo",{attrs:{title:"可清空"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.clearable.data.model}},[n("FieldGenerator",{attrs:{field:e.code.clearable.data.field}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field.clearable")]),e._v("是否展示可清空的icon")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.clearable.code))])],1),e._v(" "),n("Demo",{attrs:{title:"带Icon"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.withIcon.data.model}},[n("FieldGenerator",{attrs:{field:e.code.withIcon.data.field}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field.icon")]),e._v("可以控制展示icon")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.withIcon.code))])],1),e._v(" "),n("Demo",{attrs:{title:"前缀和后缀图标"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.prefixAndSuffix.data.model}},[n("FieldGenerator",{attrs:{field:e.code.prefixAndSuffix.data.prefixField}}),e._v(" "),n("FieldGenerator",{attrs:{field:e.code.prefixAndSuffix.data.suffixField}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field.prefix")]),e._v("、"),n("code",[e._v("field.suffix")]),e._v("可以给input添加前后缀icon。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.prefixAndSuffix.code))])],1),e._v(" "),n("Demo",{attrs:{title:"搜索框"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.search.data.model}},[n("FieldGenerator",{attrs:{field:e.code.search.data.searchField}}),e._v(" "),n("FieldGenerator",{attrs:{field:e.code.search.data.enterButtonField}}),e._v(" "),n("FieldGenerator",{attrs:{field:e.code.search.data.searchWithEnterButtonField}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field.search")]),e._v("、"),n("code",[e._v("field.enterButton")]),e._v("可以展示搜索框")]),e._v(" "),n("blockquote",[e._v("\n                    按enter键和点击搜索按钮，仅触发handleFieldChange事件，没有对应的onSearch事件\n                ")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.search.code))])],1),e._v(" "),n("Demo",{attrs:{title:"文本域"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.textarea.data.model}},[n("FieldGenerator",{attrs:{field:e.code.textarea.data.field,"form-model":e.code.textarea.data.model}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field.subtype")]),e._v("可以展示文本域")]),e._v(" "),n("p",[e._v("通过设置"),n("code",[e._v("field.rows")]),e._v("来控制默认展示行数")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.textarea.code))])],1),e._v(" "),n("Demo",{attrs:{title:"适应文本高度的文本域"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.aotusizeTextarea.data.model}},[n("FieldGenerator",{attrs:{field:e.code.aotusizeTextarea.data.field,"form-model":e.code.aotusizeTextarea.data.model}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field.autosize")]),e._v("可以使文本域大小适应内容")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.aotusizeTextarea.code))])],1),e._v(" "),n("Demo",{attrs:{title:"禁用"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.disabled.data.model}},[n("FieldGenerator",{attrs:{field:e.code.disabled.data.inputField,"form-model":e.code.disabled.data.model}}),e._v(" "),n("FieldGenerator",{attrs:{field:e.code.disabled.data.textareaField,"form-model":e.code.disabled.data.model}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field.disabled")]),e._v("可以禁用输入框")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.disabled.code))])],1),e._v(" "),n("Demo",{attrs:{title:"复合型输入框"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.prependAndAppend.data.model}},[n("FieldGenerator",{attrs:{field:e.code.prependAndAppend.data.prependField}}),e._v(" "),n("FieldGenerator",{attrs:{field:e.code.prependAndAppend.data.appendField}}),e._v(" "),n("FieldGenerator",{attrs:{field:e.code.prependAndAppend.data.prependAndappendField}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field.prepend")]),e._v("或者"),n("code",[e._v("field.prepend")]),e._v("可以实现复合型输入框。")]),e._v(" "),n("blockquote",[e._v("\n                    不支持"),n("code",[e._v("Select")]),e._v("类型的复合型输入。\n                ")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.prependAndAppend.code))])],1)],1)])},[],!1,null,"0800d7a4",null).exports;t.default=P}}]);