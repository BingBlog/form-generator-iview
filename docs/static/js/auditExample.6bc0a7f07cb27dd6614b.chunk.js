(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{347:function(e,t,a){var i=a(381);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,a(16).default)("2e583dfb",i,!0,{})},380:function(e,t,a){"use strict";var i=a(347);a.n(i).a},381:function(e,t,a){(e.exports=a(15)(!1)).push([e.i,".audit-detail-example-demo-table-td-img {\n  width: 100%;\n}\n.audit-detail-example-demo-modal-img {\n  width: 100%;\n}\n.audit-detail-example-demo-section {\n  margin: 30px auto;\n}\n.audit-detail-example-demo-header {\n  margin-bottom: 10px;\n  font-size: 16px;\n}\n.audit-detail-example-demo .ivu-form-item {\n  margin-top: 20px;\n}\n.audit-detail-example-demo .ivu-table,\n.audit-detail-example-demo .ivu-table-wrapper,\n.audit-detail-example-demo .ivu-table-cell {\n  overflow: visible;\n}\n",""])},410:function(e,t,a){"use strict";a.r(t);a(89);const i=[{title:"用户图片信息-checkboxCard",table:{columns:[{title:"项",key:"label",width:100,img:!0},{title:"图拍列表",slot:"value1",width:"auto",formFields:[{type:"CheckboxCard",model:"card",checkAll:!1,cardWidth:"120px",cardHeight:"120px",showCheckBox:!1,options:[{id:"22",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg"},{id:"33",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg"},{id:"00",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg"},{id:"22",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg"},{id:"00",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg"},{id:"22",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg"}]}]},{title:"操作",slot:"action",width:250,formFields:[{type:"Radio",model:"auditStatus",options:[{label:"通过",value:"1"},{label:"驳回",value:"2"},{label:"不通过",value:"3"}],required:!0},{type:"Select",model:"reason",required:!0,placeholder:"请选择原因",options:[{label:"特定原因一",value:"1"},{label:"特定原因二",value:"2"},{label:"自定义原因三",value:"3"}],showOn:{auditStatus:[{type:"enum",enum:["2","3"]},{required:!0}]}},{type:"Input",subtype:"textarea",model:"reasonDesc",placeholder:"请输入原因",required:!0,showOn:{reason:[{type:"enum",enum:["3"]},{required:!0}],auditStatus:[{type:"enum",enum:["2","3"]},{required:!0}]}}]}],data:[{key:"idcheckboxCard",label:"身份证",auditStatus:"",reason:"",reasonDesc:"",card:""},{key:"idcheckboxCard1",label:"身份证",auditStatus:"",reason:"",reasonDesc:"",card:""},{key:"idcheckboxCard2",label:"身份证",auditStatus:"",reason:"",reasonDesc:"",card:""}]}}];var l={data:()=>({pageConfig:i,formModel:{},modalOpen:!1,modalImgUrl:""}),methods:{handleButtonEvent(e,t,a){this[e.name](t,a)},handleFieldChange(e,t){let{model:a,value:i}=e,{key:l}=t;this.$refs[l][0].validate(),this.formModel[l]||this.$set(this.formModel,l,{}),this.$set(this.formModel[l],a,i)},handleSave(){let e=0;const t=Object.keys(this.$refs);t.forEach(a=>{console.log(a,this.$refs[a][0].model),this.$refs[a][0].validate().then(a=>{a?e++:console.log("Valid Failed"),e===t.length?(console.log("All Valid!"),console.log("formModel",this.formModel)):console.log("Valid Failed")}).catch(e=>{console.log(e)})})},handleImgClick(e){this.modalOpen=!0,this.modalImgUrl=e},handleCheckboxCardClick(e){let{url:t}=e;this.modalOpen=!0,this.modalImgUrl=t}}},o=(a(380),a(0)),d=Object(o.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"audit-detail-example-demo"},[e._l(e.pageConfig,function(t){return a("div",{key:t.title,staticClass:"audit-detail-example-demo-section"},[a("h3",{staticClass:"audit-detail-example-demo-header"},[e._v("\n            "+e._s(t.title)+"\n        ")]),e._v(" "),a("Table",{staticClass:"audit-detail-example-demo-table",attrs:{columns:t.table.columns,data:t.table.data,"show-header":!1},scopedSlots:e._u([e._l(t.table.columns,function(t){return{key:t.slot,fn:function(i){var l=i.row,o=i.index;return[t.img?[a("img",{key:t.slot,staticClass:"audit-detail-example-demo-table-td-img",attrs:{src:l[t.slot],alt:""},on:{click:function(a){return e.handleImgClick(l[t.slot])}}})]:e._e(),e._v(" "),t.formFields?a("Form",{key:t.slot,ref:t.slot+l.key,refInFor:!0,attrs:{model:l}},e._l(t.formFields,function(t,i){return a("FieldGenerator",{key:i,attrs:{field:t},on:{"on-field-change":function(t){return e.handleFieldChange(t,l)},"on-button-event":function(t){return e.handleButtonEvent(t,l,o)},"on-checkboxCard-click":e.handleCheckboxCardClick}})}),1):e._e()]}}})],null,!0)})],1)}),e._v(" "),a("div",{staticClass:"audit-detail-example-footer-actions"},[a("Button",{attrs:{type:"primary"},on:{click:e.handleSave}},[e._v("提交保存")])],1),e._v(" "),a("Modal",{attrs:{width:800},model:{value:e.modalOpen,callback:function(t){e.modalOpen=t},expression:"modalOpen"}},[a("img",{staticClass:"audit-detail-example-demo-modal-img",attrs:{src:e.modalImgUrl,alt:""}})])],2)},[],!1,null,null,null);t.default=d.exports}}]);