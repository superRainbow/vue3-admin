(function(e){function t(t){for(var c,o,a=t[0],u=t[1],l=t[2],s=0,d=[];s<a.length;s++)o=a[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);b&&b(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],c=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(c=!1)}c&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},r={app:0},i=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue3-admin/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var b=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"1b71":function(e,t,n){"use strict";n("acde")},"20d4":function(e,t,n){"use strict";n("3436")},"28a9":function(e,t,n){"use strict";n("906b")},3436:function(e,t,n){},"3d61":function(e,t,n){},5095:function(e,t,n){"use strict";n("3d61")},"51c2":function(e,t,n){},"69b1":function(e,t,n){"use strict";n("c4bf")},"6f0f":function(e,t,n){},"7e85":function(e,t,n){"use strict";n("6f0f")},"8e1f":function(e,t,n){},"906b":function(e,t,n){},"97f0":function(e,t,n){"use strict";n("51c2")},acde:function(e,t,n){},b883:function(e,t,n){},c4bf:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r=n("3fd4"),i=(n("b0c0"),n("96cf"),n("1da1")),o=n("6c02");function a(e,t){localStorage.setItem(e,Array.isArray(t)?JSON.stringify(t):t)}function u(e){return localStorage.getItem(e)||""}function l(e){localStorage.removeItem(e)}function b(e){return/^(https?|tel|mailto)/.test(e)}function s(){return!!u("token")}var d=Object(c["eb"])("data-v-3918b9b5");Object(c["G"])("data-v-3918b9b5");var f={class:"login-container"},O=Object(c["m"])("div",{class:"title"},[Object(c["m"])("h2",null,"後台系統")],-1),j=Object(c["l"])("Login");Object(c["E"])();var m=d((function(e,t,n,r,i,o){var a=Object(c["M"])("el-input"),u=Object(c["M"])("el-form-item"),l=Object(c["M"])("el-button"),b=Object(c["M"])("el-form");return Object(c["D"])(),Object(c["i"])("div",f,[Object(c["m"])(b,{ref:"loginFormRef",class:"login-form",rules:e.loginRules,model:e.loginForm},{default:d((function(){return[O,Object(c["m"])(u,{prop:"name"},{default:d((function(){return[Object(c["m"])(a,{placeholder:"請輸入帳號","prefix-icon":"el-icon-user",modelValue:e.loginForm.name,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.loginForm.name=t})},null,8,["modelValue"])]})),_:1}),Object(c["m"])(u,{prop:"pwd"},{default:d((function(){return[Object(c["m"])(a,{placeholder:"請輸入密碼","prefix-icon":"el-icon-lock",modelValue:e.loginForm.pwd,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.loginForm.pwd=t}),"show-password":""},null,8,["modelValue"])]})),_:1}),Object(c["m"])(l,{type:"primary",class:"loginBtn",disabled:e.isDisabled,onClick:e.onSubmit},{default:d((function(){return[j]})),_:1},8,["disabled","onClick"])]})),_:1},8,["rules","model"])])})),g=n("5502"),p=Object(c["n"])({setup:function(){var e=Object(g["b"])(),t=Object(c["I"])(),n=Object(c["I"])(!0),r=Object(c["H"])({name:"rainbow",pwd:"1qaz2wsx"}),o={name:[{required:!0,message:"請輸入帳號",trigger:"blur"},{min:3,max:15,message:"長度在3-15之間",trigger:"blur"}],pwd:[{required:!0,message:"請輸入密碼",trigger:"blur"}]},a=function(){t.value.validate((function(e){return n.value=!e}))};Object(c["A"])((function(){a()})),Object(c["Y"])(r,(function(){return a()}),{deep:!0});var u=function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.value){t.next=4;break}return t.abrupt("return");case 4:e.dispatch("handLogin",{data:r});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{loginFormRef:t,loginForm:r,loginRules:o,isDisabled:n,onSubmit:u}}});n("5095");p.render=m,p.__scopeId="data-v-3918b9b5";var h=p;function v(e,t,n,r,i,o){var a=Object(c["M"])("m-header"),u=Object(c["M"])("side-bar"),l=Object(c["M"])("page-main"),b=Object(c["M"])("el-container");return Object(c["D"])(),Object(c["i"])(b,{class:["container",{"small-style":!e.opened}]},{default:Object(c["ab"])((function(){return[Object(c["m"])(a),Object(c["m"])(b,{class:"content"},{default:Object(c["ab"])((function(){return[Object(c["m"])(u),Object(c["m"])(l)]})),_:1})]})),_:1},8,["class"])}function _(e,t,n,r,i,o){var a=Object(c["M"])("sidebar-item"),u=Object(c["M"])("el-menu"),l=Object(c["M"])("el-scrollbar"),b=Object(c["M"])("el-aside");return Object(c["D"])(),Object(c["i"])(b,null,{default:Object(c["ab"])((function(){return[Object(c["m"])(l,null,{default:Object(c["ab"])((function(){return[Object(c["m"])(u,{"default-active":e.activeMenu,class:"el-menu-vertical-demo","background-color":e.MENU_SETTING.BG,"text-color":e.MENU_SETTING.TEXT,"active-text-color":e.MENU_SETTING.ACTIVE_TEXT,"collapse-transition":!1,collapse:!e.opened},{default:Object(c["ab"])((function(){return[(Object(c["D"])(!0),Object(c["i"])(c["b"],null,Object(c["K"])(e.filterSidebarList,(function(e){return Object(c["D"])(),Object(c["i"])(a,{key:e.path,data:e,url:e.path},null,8,["data","url"])})),128))]})),_:1},8,["default-active","background-color","text-color","active-text-color","collapse"])]})),_:1})]})),_:1})}n("4de4");var D={BG:"#3a3f51",TEXT:"#b5b6bd",ACTIVE_TEXT:"rgb(79, 148, 212)"},S={class:"title"},w={class:"title"};function T(e,t,n,r,i,o){var a=Object(c["M"])("el-menu-item"),u=Object(c["M"])("page-link"),l=Object(c["M"])("sidebar-item"),b=Object(c["M"])("el-submenu");return!e.hasOnlyChild(e.item)||e.childItem.children&&!e.childItem.noChild?(Object(c["D"])(),Object(c["i"])(b,{key:1,index:e.resolvePath(e.item.path)},{title:Object(c["ab"])((function(){return[Object(c["m"])("i",{class:e.item.meta.icon},null,2),Object(c["m"])("span",w,Object(c["Q"])(e.item.meta.title),1)]})),default:Object(c["ab"])((function(){return[(Object(c["D"])(!0),Object(c["i"])(c["b"],null,Object(c["K"])(e.item.children,(function(t){return Object(c["D"])(),Object(c["i"])(l,{key:t.path,data:t,url:e.resolvePath(t.path)},null,8,["data","url"])})),128))]})),_:1},8,["index"])):(Object(c["D"])(),Object(c["i"])(c["b"],{key:0},[e.childItem.meta?(Object(c["D"])(),Object(c["i"])(u,{key:0,to:e.resolvePath(e.childItem.path)},{default:Object(c["ab"])((function(){return[Object(c["m"])(a,{index:e.resolvePath(e.childItem.path)},{default:Object(c["ab"])((function(){return[Object(c["m"])("i",{class:e.childItem.meta.icon?e.childItem.meta.icon:""},null,2),Object(c["m"])("span",S,Object(c["Q"])(e.childItem.meta.title),1)]})),_:1},8,["index"])]})),_:1},8,["to"])):Object(c["j"])("",!0)],64))}n("a15b");var E=n("5530"),M=n("df7c"),I=n.n(M);function y(e,t,n,r,i,o){return Object(c["D"])(),Object(c["i"])(Object(c["O"])(e.componentType),e.redirect,{default:Object(c["ab"])((function(){return[Object(c["L"])(e.$slots,"default")]})),_:3},16)}var L=Object(c["n"])({props:{to:{type:String,required:!0}},setup:function(e){var t=Object(c["I"])(e.to),n=Object(c["g"])((function(){return b(t.value)?{target:"_blank",href:t.value,rel:"noopener"}:{to:t.value}})),r=Object(c["g"])((function(){return b(t.value)?"a":"router-link"}));return{link:t,redirect:n,componentType:r}}});L.render=y;var k=L,C=Object(c["n"])({name:"SidebarItem",components:{PageLink:k},props:{data:{type:Object,required:!0},url:{type:String,default:""}},setup:function(e){var t=Object(c["I"])(e.url),n=Object(c["H"])(e.data),r=Object(c["I"])({}),i=function(e){var t=e.children&&e.children.length>0&&e.children.filter((function(e){return!e.hidden}))||[];return 1!==t.length||e.meta?0===t.length&&(r.value=Object(E["a"])(Object(E["a"])({},e),{},{path:"",noChild:!0}),console.log("childItem 0",e.meta,r),!0):(r.value=t[0],console.log("childItem 1",e.meta,r),!0)},o=function(e){return b(e)?e:b(t.value)?t.value:I.a.join(t.value,e)};return{item:n,basePath:t,childItem:r,hasOnlyChild:i,resolvePath:o}}});n("7e85");C.render=T;var P=C,x=Object(c["n"])({components:{SidebarItem:P},setup:function(){var e=Object(o["c"])(),t=Object(g["b"])(),n=Object(c["I"])(e.name);return Object(c["Y"])(n,(function(){n.value=e.name})),{MENU_SETTING:D,activeMenu:n,opened:Object(c["g"])((function(){return t.getters.isMenuOpen})),filterSidebarList:Object(c["g"])((function(){return t.getters.sidebarList.filter((function(e){return!e.hidden}))}))}}});n("20d4");x.render=_;var N=x,A=n("cf05"),U=n.n(A),G=Object(c["m"])("section",{class:"logo"},[Object(c["m"])("img",{src:U.a,alt:"logo"})],-1),R={class:"function"},F=Object(c["m"])("nav",null,null,-1);function V(e,t,n,r,i,o){var a=Object(c["M"])("el-header");return Object(c["D"])(),Object(c["i"])(a,null,{default:Object(c["ab"])((function(){return[G,Object(c["m"])("section",R,[Object(c["m"])("i",{class:e.opened?"el-icon-s-unfold":"el-icon-s-fold",onClick:t[1]||(t[1]=function(t){return e.toggleOpen()})},null,2),F])]})),_:1})}var B=Object(c["n"])({setup:function(){var e=Object(g["b"])(),t=function(){e.commit("UPDATE_MENU_OPEN")};return{opened:Object(c["g"])((function(){return e.getters.isMenuOpen})),toggleOpen:t}}});n("1b71");B.render=V;var H=B;function q(e,t,n,r,i,o){var a=Object(c["M"])("router-view"),u=Object(c["M"])("el-main");return Object(c["D"])(),Object(c["i"])(u,null,{default:Object(c["ab"])((function(){return[Object(c["m"])(a)]})),_:1})}var K=Object(c["n"])({setup:function(){return{}}});n("97f0");K.render=q;var Q=K,J=Object(c["n"])({components:{SideBar:N,MHeader:H,PageMain:Q},setup:function(){var e=Object(g["b"])();return u("sidebarList")&&e.dispatch("setSidebarList",JSON.parse(u("sidebarList"))),{opened:Object(c["g"])((function(){return e.getters.isMenuOpen}))}}});n("dfb1");J.render=v;var X=J;function Y(e,t,n,r,i,o){return Object(c["D"])(),Object(c["i"])("h1",null,"Home")}var z=Object(c["n"])({setup:function(){return{}}});z.render=Y;var $=z,W=[{path:"/login",name:"login",component:h},{path:"/",name:"index",component:X,redirect:"/home",children:[{path:"home",name:"home",component:$}]}],Z=Object(o["a"])({history:Object(o["b"])("/vue3-admin/"),routes:W});Z.beforeEach(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n,c){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:"login"===t.name||s()?c():c({name:"login"});case 1:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}());var ee=Z,te=(n("d3b7"),n("bc3a")),ne=n.n(te),ce="/api",re="".concat(ce,"/login"),ie={LOGIN:re},oe=ie,ae=function(e){var t=e.response,n=t.status,c=t.data;console.log("status",n),alert(c.message||"發生錯誤，請稍後再試")},ue=Object(g["a"])({state:{isLoading:!1,isMenuOpen:!0,isDialogShow:!1,dialogConfig:{},sidebarList:[],token:""},getters:{isLoading:function(e){return e.isLoading},isMenuOpen:function(e){return e.isMenuOpen},isDialogShow:function(e){return e.isDialogShow},dialogConfig:function(e){return e.dialogConfig},sidebarList:function(e){return e.sidebarList},token:function(e){return e.token}},mutations:{UPDATE_LOADING:function(e,t){e.isLoading=t},UPDATE_MENU_OPEN:function(e){e.isMenuOpen=!e.isMenuOpen},UPDATE_DIALOG_OPEN:function(e,t){var n=t.isDialogShow,c=t.config;e.isDialogShow=n,e.dialogConfig=c||{}},SET_SIDEBAR_LIST:function(e,t){e.sidebarList=t,a("sidebarList",t)},SET_TOKEN:function(e,t){e.token=t,a("token",t)},DELETE_TOKEN:function(e){e.token="",l("token")}},actions:{handLoading:function(e,t){var n=e.commit;r["a"].service({fullscreen:t}),n("UPDATE_LOADING",t)},handLogin:function(e,t){var n=e.commit,c=t.data;n("UPDATE_LOADING",!0),ne.a.post(oe.LOGIN,c).then((function(e){e.data.success?(n("SET_TOKEN",e.data.data.token),n("SET_SIDEBAR_LIST",e.data.data.menu),ee.push({name:"home"})):n("UPDATE_DIALOG_OPEN",{isDialogShow:!0,config:{isCancelShow:!1,message:e.data.message}})})).catch((function(e){ae(e)})).finally((function(){n("UPDATE_LOADING",!1)}))},setSidebarList:function(e,t){var n=e.commit;n("SET_SIDEBAR_LIST",t)},toggleDialog:function(e,t){var n=e.commit;n("UPDATE_DIALOG_OPEN",{isDialogShow:t})}},modules:{}}),le=n("a0b8"),be=n.n(le);function se(e,t,n,r,i,o){var a=Object(c["M"])("router-view"),u=Object(c["M"])("Dialog"),l=Object(c["M"])("Loading");return Object(c["D"])(),Object(c["i"])(c["b"],null,[Object(c["m"])(a),Object(c["m"])(u),Object(c["m"])(l)],64)}var de={class:"dialog-footer"};function fe(e,t,n,r,i,o){var a=Object(c["M"])("el-button"),u=Object(c["M"])("el-dialog");return Object(c["D"])(),Object(c["i"])(u,{title:e.dialogConfig.title,"model-value":e.isDialogShow,"show-close":e.dialogConfig.showHeaderClose,onClose:e.headerClose,width:e.dialogConfig.width},{footer:Object(c["ab"])((function(){return[Object(c["m"])("span",de,[e.dialogConfig.isCancelShow?(Object(c["D"])(),Object(c["i"])(a,{key:0,onClick:e.toggleOpen},{default:Object(c["ab"])((function(){return[Object(c["l"])(Object(c["Q"])(e.dialogConfig.cancelText),1)]})),_:1},8,["onClick"])):Object(c["j"])("",!0),Object(c["m"])(a,{type:"primary",onClick:e.toggleOpen},{default:Object(c["ab"])((function(){return[Object(c["l"])(Object(c["Q"])(e.dialogConfig.submitText),1)]})),_:1},8,["onClick"])])]})),default:Object(c["ab"])((function(){return[Object(c["m"])("main",null,Object(c["Q"])(e.dialogConfig.message||""),1)]})),_:1},8,["title","model-value","show-close","onClose","width"])}var Oe={message:"",title:"提示",cancelText:"取 消",submitText:"確 定",width:"30%",showHeaderClose:!0,isCancelShow:!1},je=Object(c["n"])({setup:function(){var e=Object(g["b"])(),t=Object(c["g"])((function(){return e.getters.dialogConfig})),n=function(){e.dispatch("toggleDialog",!1)},r=function(){e.dispatch("toggleDialog",!1)};return{dialogConfig:Object(c["g"])((function(){return Object.assign(Oe,t.value)})),isDialogShow:Object(c["g"])((function(){return e.getters.isDialogShow})),headerClose:n,toggleOpen:r}}});n("69b1");je.render=fe;var me=je;function ge(e,t,n,r,i,o){var a=Object(c["N"])("loading");return Object(c["bb"])((Object(c["D"])(),Object(c["i"])("div",null,null,512)),[[a,e.fullscreenLoading,void 0,{fullscreen:!0,lock:!0}]])}var pe=Object(c["n"])({setup:function(){var e=Object(g["b"])();return{fullscreenLoading:Object(c["g"])((function(){return e.getters.isLoading}))}}});n("28a9");pe.render=ge;var he=pe,ve={name:"App",components:{Dialog:me,Loading:he}};ve.render=se;var _e=ve;n("8e1f");Object(c["h"])(_e).use(ue).use(ee).use(r["b"],{locale:be.a}).mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},dfb1:function(e,t,n){"use strict";n("b883")}});
//# sourceMappingURL=app.ba0fcca1.js.map