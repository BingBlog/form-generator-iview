(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{242:function(e,t,r){var n=r(294);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(13).default)("de13e2b8",n,!0,{})},243:function(e,t,r){var n=r(296);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(13).default)("573cc33c",n,!0,{})},244:function(e,t,r){var n=r(298);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(13).default)("654fe69c",n,!0,{})},245:function(e,t,r){var n=r(300);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(13).default)("167d732e",n,!0,{})},246:function(e,t,r){var n=r(302);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(13).default)("683e584e",n,!0,{})},293:function(e,t,r){"use strict";var n=r(242);r.n(n).a},294:function(e,t,r){(e.exports=r(12)(!1)).push([e.i,".combined-form-normal-step {\n  margin: 0 auto;\n}\n.combined-form-normal-form {\n  margin: 10px auto 0;\n}\n",""])},295:function(e,t,r){"use strict";var n=r(243);r.n(n).a},296:function(e,t,r){(e.exports=r(12)(!1)).push([e.i,".combined-form-takeover-step {\n  margin: 0 auto;\n}\n.combined-form-takeover-form {\n  margin: 10px auto 0;\n}\n",""])},297:function(e,t,r){"use strict";var n=r(244);r.n(n).a},298:function(e,t,r){(e.exports=r(12)(!1)).push([e.i,".combined-form-wizard-forms {\n  display: flex;\n  align-items: flex-start;\n}\n.combined-form-wizard-title {\n  cursor: pointer;\n}\n.combined-form-wizard .ivu-steps {\n  width: 200px;\n}\n.combined-form-wizard-form {\n  float: left;\n}\n",""])},299:function(e,t,r){"use strict";var n=r(245);r.n(n).a},300:function(e,t,r){(e.exports=r(12)(!1)).push([e.i,".page-form-takeover-form .ivu-form .ivu-form-item-label {\n  width: 100px;\n}\n.page-form-takeover-form-form {\n  margin: 10px auto 0;\n}\n",""])},301:function(e,t,r){"use strict";var n=r(246);r.n(n).a},302:function(e,t,r){(e.exports=r(12)(!1)).push([e.i,".combined-forms-demo {\n  margin: 20px auto;\n  width: 60%;\n}\n.combined-forms-demo-item {\n  margin: 0px auto;\n}\n",""])},303:function(e,t,r){"use strict";r.r(t);var n=[{title:"Tab表单配置",type:"Normal",forms:[{title:"基本信息",fields:[{label:"Tab表单开启项",type:"Checkbox",model:"tabShowItems",options:[{label:"项目一",value:"1"},{label:"项目二",value:"2"},{label:"项目三",value:"3"}],required:!0}]}]},{type:"Tab",typeOptions:{type:"line",size:"small",animated:!1},forms:[{title:"项目一",showOn:{tabShowItems:[{type:"array",required:!0},{validator:(e,t)=>Array.isArray(t)&&t.includes("1")}]},fields:[{type:"Input",label:"任务名称",model:"tab-taskName",placeholder:"请输入任务名称",rules:[{type:"string",required:!0,pattern:"^[\\u4e00-\\u9fa5]+$",message:"请输入中文姓名"}]},{label:"客户端",type:"Checkbox",model:"tab-showClient",options:[{label:"好看",value:"1"},{label:"手百lite",value:"2"},{label:"百度地图",value:"3"}],required:!0},{type:"Select",label:"任务方",model:"tab-relationTask",placeholder:"请输入性别",required:!0,options:[{label:"任务1",value:"1"},{label:"任务2",value:"2"},{label:"任务3",value:"3"}]},{type:"Submit",subtype:"primary",text:"保存",width:100,inline:!0}]},{title:"项目二",showOn:{tabShowItems:[{type:"array",required:!0},{validator:(e,t)=>Array.isArray(t)&&t.includes("2")}]},fields:[{type:"Input",label:"任务标题",model:"tab-taskHead",placeholder:"请输入任务标题",required:!0,max:150,min:0},{type:"Input",label:"任务说明",model:"tab-taskExplain",placeholder:"请输入任务说明",required:!0,max:150,min:0},{type:"Input",label:"任务信息",model:"tab-taskToolTips",placeholder:"请输入任务提示信息",required:!0,max:150,min:0},{type:"Submit",subtype:"primary",text:"保存",width:100,inline:!0}]},{title:"项目三",showOn:{tabShowItems:[{type:"array",required:!0},{validator:(e,t)=>Array.isArray(t)&&t.includes("3")}]},fields:[{type:"Input",label:"任务周期",model:"tab-taskCycle",placeholder:"请输入任务周期",required:!0,max:150,min:0},{type:"Input",label:"任务次数",model:"tab-taskNumber",placeholder:"请输入任务次数",required:!0,max:150,min:0},{type:"Submit",subtype:"primary",text:"保存",width:100,inline:!0}]}]},{title:"分步表单配置",type:"Normal",forms:[{title:"基本信息",fields:[{label:"分步表单开启项",type:"Checkbox",model:"takeoverShowItems",options:[{label:"第一步",value:"1"},{label:"第二步",value:"2"},{label:"第三步",value:"3"}],required:!0}]}]},{type:"TakeOver",forms:[{title:"第一步",content:"良好的开端是成功的一半",showOn:{takeoverShowItems:[{type:"array",required:!0},{validator:(e,t)=>Array.isArray(t)&&t.includes("1")}]},fields:[{type:"Input",label:"任务名称",model:"takeover-taskName",placeholder:"请输入任务名称",rules:[{type:"string",required:!0,pattern:"^[\\u4e00-\\u9fa5]+$",message:"请输入中文姓名"}]},{label:"客户端",type:"Checkbox",model:"takeover-showClient",options:[{label:"好看",value:"1"},{label:"手百lite",value:"2"},{label:"百度地图",value:"3"}],required:!0},{type:"Select",label:"任务方",model:"takeover-relationTask",placeholder:"请输入性别",required:!0,options:[{label:"任务1",value:"1"},{label:"任务2",value:"2"},{label:"任务3",value:"3"}]},{type:"Submit",subtype:"primary",text:"下一步",width:100,inline:!0}]},{title:"第二步",content:"第二步是解决问题的关键",showOn:{takeoverShowItems:[{type:"array",required:!0},{validator:(e,t)=>Array.isArray(t)&&t.includes("2")}]},fields:[{type:"Input",label:"任务标题",model:"takeover-taskHead",placeholder:"请输入任务标题",required:!0,max:150,min:0},{type:"Input",label:"任务说明",model:"takeover-taskExplain",placeholder:"请输入任务说明",required:!0,max:150,min:0},{type:"Input",label:"任务信息",model:"takeover-taskToolTips",placeholder:"请输入任务提示信息",required:!0,max:150,min:0},{type:"Button",text:"上一步",subtype:"primary",action:{type:"event",name:"prev"},inline:!0},{type:"Submit",subtype:"primary",text:"下一步",width:100,inline:!0}]},{title:"第三步",content:"最后一步了，加油",showOn:{takeoverShowItems:[{type:"array",required:!0},{validator:(e,t)=>Array.isArray(t)&&t.includes("3")}]},fields:[{type:"Input",label:"任务周期",model:"takeover-taskCycle",placeholder:"请输入任务周期",required:!0,max:150,min:0},{type:"Input",label:"任务次数",model:"takeover-taskNumber",placeholder:"请输入任务次数",required:!0,max:150,min:0},{type:"Button",text:"上一步",subtype:"primary",action:{type:"event",name:"prev"},inline:!0},{type:"Submit",subtype:"primary",text:"提交",labelWidth:0,width:100,inline:!0}]}]},{title:"导航表单配置",type:"Normal",forms:[{title:"基本信息",fields:[{type:"Select",label:"导航表单开启项",model:"wizardShowItems",multiple:!0,placeholder:"请输入性别",required:!0,options:[{label:"基本信息",value:"1"},{label:"任务信息",value:"2"},{label:"时间次数",value:"3"}]}]}]},{type:"Wizard",forms:[{title:"基本信息",content:"良好的开端是成功的一半",showOn:{wizardShowItems:[{type:"array",required:!0},{validator:(e,t)=>Array.isArray(t)&&t.includes("1")}]},fields:[{type:"Input",label:"任务名称",model:"wizard-taskName",placeholder:"请输入任务名称",rules:[{type:"string",required:!0,pattern:"^[\\u4e00-\\u9fa5]+$",message:"请输入中文姓名"}]},{label:"客户端",type:"Checkbox",model:"wizard-showClient",options:[{label:"好看",value:"1"},{label:"手百lite",value:"2"},{label:"百度地图",value:"3"}],required:!0},{type:"Select",label:"任务方",model:"wizard-relationTask",placeholder:"请输入性别",required:!0,options:[{label:"任务1",value:"1"},{label:"任务2",value:"2"},{label:"任务3",value:"3"}]},{type:"Submit",subtype:"primary",text:"保存",width:100,inline:!0}]},{title:"任务信息",content:"第二步是解决问题的关键",showOn:{wizardShowItems:[{type:"array",required:!0},{validator:(e,t)=>Array.isArray(t)&&t.includes("2")}]},fields:[{type:"Input",label:"任务标题",model:"wizard-taskHead",placeholder:"请输入任务标题",required:!0,max:150,min:0},{type:"Input",label:"任务说明",model:"wizard-taskExplain",placeholder:"请输入任务说明",required:!0,max:150,min:0},{type:"Input",label:"任务信息",model:"wizard-taskToolTips",placeholder:"请输入任务提示信息",required:!0,max:150,min:0},{type:"Submit",subtype:"primary",text:"保存",width:100,inline:!0}]},{title:"时间次数",content:"最后一步了，加油",showOn:{wizardShowItems:[{type:"array",required:!0},{validator:(e,t)=>Array.isArray(t)&&t.includes("3")}]},fields:[{type:"Input",label:"任务周期",model:"wizard-taskCycle",placeholder:"请输入任务周期",required:!0,max:150,min:0},{type:"Input",label:"任务次数",model:"wizard-taskNumber",placeholder:"请输入任务次数",required:!0,max:150,min:0},{type:"Submit",subtype:"primary",text:"保存",width:100,inline:!0}]}]}],a=r(52);function l(e,t,r){let n=!0;if(r){let t=r;new a.a(t).validate(e,e=>{e||(n=!1)})}if(t){let r=t;new a.a(r).validate(e,e=>{e&&(n=!1)})}return n}var i={props:{requestInterceptor:{type:[Function,null],default:null},paramsContainer:{type:Object,default:()=>({})},model:{type:Object,default:()=>({})},forms:{type:Array,default:()=>[]},title:{type:String,default:""}},data:()=>({current:0}),computed:{length(){return this.forms.length},computedForms(){const e=this.model;return(this.forms||[]).filter(t=>{let{showOn:r,hiddenOn:n}=t;return l(e,r,n)})}},methods:{handleFieldChange(e,t){this.$emit("on-field-change",e,t)},handleSubmit(e){this.$refs["FormGenerator-"+e][0].submit().then(e=>{this.$emit("on-form-submit",e),this.current<length-1&&this.current++})},handleButtonEvent(e){this[e.name]()},prev(){this.current--}}},o=(r(293),r(0)),s=Object(o.a)(i,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.computedForms.length>0,expression:"computedForms.length > 0"}],staticClass:"combined-form-item combined-form-normal"},[e.title?r("Divider",{attrs:{dashed:"",orientation:"left"}},[e._v(e._s(e.title))]):e._e(),e._v(" "),e._l(e.forms,function(t,n){return[r("div",{directives:[{name:"show",rawName:"v-show",value:e.current===n,expression:"current === index"}],key:n,staticClass:"combined-form-normal-form"},[r("FormGenerator",{ref:"FormGenerator-"+n,refInFor:!0,attrs:{fields:t.fields,model:e.model},on:{"on-field-change":e.handleFieldChange,"on-submit":function(t){return e.handleSubmit(n)},"on-button-event":e.handleButtonEvent}})],1)]})],2)},[],!1,null,null,null).exports,d={props:{requestInterceptor:{type:[Function,null],default:null},paramsContainer:{type:Object,default:()=>({})},model:{type:Object,default:()=>({})},forms:{type:Array,default:()=>[]},title:{type:String,default:""}},data:()=>({current:0}),computed:{length(){return this.forms.length},computedForms(){const e=this.model;return(this.forms||[]).filter(t=>{let{showOn:r,hiddenOn:n}=t;return l(e,r,n)})}},methods:{handleFieldChange(e,t){this.$emit("on-field-change",e,t)},handleSubmit(e){this.$refs["FormGenerator-"+e][0].submit().then(e=>{this.$emit("on-form-submit",e),this.current<length-1&&this.current++})},handleButtonEvent(e){this[e.name]()},prev(){this.current--}}},m=(r(295),Object(o.a)(d,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.computedForms.length>0,expression:"computedForms.length > 0"}],staticClass:"combined-form-item combined-form-takeover"},[e.title?r("Divider",{attrs:{dashed:"",orientation:"left"}},[e._v(e._s(e.title))]):e._e(),e._v(" "),r("Steps",{staticClass:"combined-form-takeover-step",attrs:{current:e.current}},e._l(e.computedForms,function(e,t){return r("Step",{key:t,attrs:{title:e.title,content:e.content}})}),1),e._v(" "),e._l(e.computedForms,function(t,n){return[r("div",{directives:[{name:"show",rawName:"v-show",value:e.current===n,expression:"current === index"}],key:n,staticClass:"combined-form-takeover-form"},[r("FormGenerator",{ref:"FormGenerator-"+n,refInFor:!0,attrs:{fields:t.fields,model:e.model},on:{"on-field-change":e.handleFieldChange,"on-submit":function(t){return e.handleSubmit(n)},"on-button-event":e.handleButtonEvent}})],1)]})],2)},[],!1,null,null,null).exports),u={props:{requestInterceptor:{type:[Function,null],default:null},paramsContainer:{type:Object,default:()=>({})},model:{type:Object,default:()=>({})},forms:{type:Array,default:()=>[]},title:{type:String,default:""}},data:()=>({current:0}),computed:{length(){return this.forms.length},computedForms(){const e=this.model;return(this.forms||[]).filter(t=>{let{showOn:r,hiddenOn:n}=t;return l(e,r,n)})}},methods:{handleFieldChange(e,t){this.$emit("on-field-change",e,t)},handleSubmit(e){this.$refs["FormGenerator-"+e][0].submit().then(e=>{this.$emit("on-form-submit",e),this.current<this.length-1&&this.current++})},handleButtonEvent(e){this[e.name]()},handelTabChange(e){this.current=e}}},p=(r(297),Object(o.a)(u,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.computedForms.length>0,expression:"computedForms.length > 0"}],staticClass:"combined-form-item combined-form-wizard"},[e.title?r("Divider",{attrs:{dashed:"",orientation:"left"}},[e._v(e._s(e.title))]):e._e(),e._v(" "),r("div",{staticClass:"combined-form-wizard-forms"},[r("Steps",{attrs:{current:e.current,direction:"vertical"}},e._l(e.computedForms,function(t,n){return r("div",{key:n,staticClass:"combined-form-wizard-title",on:{click:function(t){return e.handelTabChange(n)}}},[r("Step",{attrs:{title:t.title,content:t.content}})],1)}),0),e._v(" "),e._l(e.computedForms,function(t,n){return[r("div",{directives:[{name:"show",rawName:"v-show",value:e.current===n,expression:"current === index"}],key:n,staticClass:"combined-form-wizard-form"},[r("FormGenerator",{ref:"FormGenerator-"+n,refInFor:!0,attrs:{fields:t.fields,model:e.model},on:{"on-field-change":e.handleFieldChange,"on-submit":function(t){return e.handleSubmit(n)},"on-button-event":e.handleButtonEvent}})],1)]})],2)],1)},[],!1,null,null,null).exports),c={props:{requestInterceptor:{type:[Function,null],default:null},paramsContainer:{type:Object,default:()=>({})},model:{type:Object,default:()=>({})},forms:{type:Array,default:()=>[]},title:{type:String,default:""},options:{type:Object,default:()=>({})}},data:()=>({current:0}),computed:{length(){return this.forms.length},computedForms(){const e=this.model;return(this.forms||[]).filter(t=>{let{showOn:r,hiddenOn:n}=t;return l(e,r,n)})}},methods:{handleFieldChange(e,t){this.$emit("on-field-change",e,t)},handleSubmit(e){this.$refs["FormGenerator-"+e][0].submit().then(e=>{this.$emit("on-form-submit",e),this.current<this.length-1&&this.current++})},handleButtonEvent(e){this[e.name]()},prev(){this.current--}}},h=(r(299),{components:{Normal:s,TakeOver:m,Wizard:p,Tab:Object(o.a)(c,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.computedForms.length>0,expression:"computedForms.length > 0"}],staticClass:"combined-form-item combined-form-tab"},[e.title?r("Divider",{attrs:{dashed:"",orientation:"left"}},[e._v(e._s(e.title))]):e._e(),e._v(" "),r("Tabs",{attrs:{type:e.options.type,size:e.options.size,animated:e.options.animated}},e._l(e.computedForms,function(t,n){return r("TabPane",{key:n,attrs:{label:t.label||t.title}},[r("div",{key:n,staticClass:"combined-form-tab-form"},[r("FormGenerator",{ref:"FormGenerator-"+n,refInFor:!0,attrs:{fields:t.fields,model:e.model},on:{"on-field-change":e.handleFieldChange,"on-submit":function(t){return e.handleSubmit(n)},"on-button-event":e.handleButtonEvent}})],1)])}),1)],1)},[],!1,null,null,null).exports},data:()=>({config:n,model:{tabShowItems:["1"],takeoverShowItems:["1"],wizardShowItems:["1"]},paramsContainer:{}}),methods:{handleFieldChange(e,t){this.$set(this.model,e,t)},handleFormSubmit(e){console.log(e)}}}),f=(r(301),Object(o.a)(h,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"combined-forms-demo"},e._l(e.config,function(t,n){return r("div",{key:n,staticClass:"combined-forms-demo-item"},[r(t.type,{tag:"component",attrs:{forms:t.forms,model:e.model,title:t.title,options:t.typeOptions,"params-container":e.paramsContainer},on:{"on-form-submit":e.handleFormSubmit,"on-field-change":e.handleFieldChange}})],1)}),0)},[],!1,null,null,null).exports);t.default=f}}]);