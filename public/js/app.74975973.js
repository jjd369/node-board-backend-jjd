(function(e){function t(t){for(var r,a,o=t[0],i=t[1],s=t[2],l=0,d=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0ac3bd":"8860794e","chunk-2d8eacbb":"bee0ec2a","chunk-51b5fad6":"b95f10c7","chunk-73d083c4":"eb108356","chunk-7f770c7e":"b63483dd","chunk-f0ade270":"d29f3872"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-2d8eacbb":1,"chunk-73d083c4":1,"chunk-7f770c7e":1,"chunk-f0ade270":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0ac3bd":"31d6cfe0","chunk-2d8eacbb":"2c5e05c4","chunk-51b5fad6":"31d6cfe0","chunk-73d083c4":"faa67d3e","chunk-7f770c7e":"40e52c3d","chunk-f0ade270":"baebee5e"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var s=u[o],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){s=d[o],l=s.getAttribute("data-href");if(l===r||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],f.parentNode.removeChild(f),n(u)},f.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2922:function(e,t,n){"use strict";n("78b8")},"2a74":function(e,t,n){"use strict";n.r(t);var r=n("5530"),a=(n("159b"),n("d3b7"),n("ddb0"),n("ac1f"),n("5319"),n("bba4")),c=n.n(a),u=n("d307"),o={};u.keys().forEach((function(e){var t="./index.js"===e;if(!t){var n=c()(e.replace(/(\.\/|\.js)/g,""));o[n]=Object(r["a"])({namespaced:!0},u(e))}})),t["default"]=o},"49c2":function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return o}));var r=n("b775");function a(e){return r["a"].post("/auth/signUp",e)}function c(e){return r["a"].post("/auth/signIn",e)}function u(e){return r["a"].delete("/auth/signOut",e)}function o(e){return r["a"].post("/auth/refreshToken",e)}},"4cce":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=n("b775");function a(e){return r["a"].get("/user/me",e)}function c(e){return r["a"].post("/user/update",e)}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],u=n("2877"),o={},i=Object(u["a"])(o,a,c,!1,null,null,null),s=i.exports,l=n("a18c"),d=n("2f62"),f=n("2a74");function m(){return function(e){for(var t in f["default"]){var n=f["default"][t];n.actions["init"]&&e.dispatch("".concat(t,"/init"))}}}r["default"].use(d["a"]);var p=new d["a"].Store({modules:f["default"],plugins:[m()]}),h=p,b=n("5c96"),g=n.n(b),v=(n("0fae"),n("5a41"),n("fa6d"),n("2b27")),_=n.n(v),k=n("b2d6"),y=n.n(k);r["default"].config.productionTip=!1,r["default"].use(_.a),r["default"].use(g.a,{locale:y.a}),new r["default"]({router:l["a"],store:h,render:function(e){return e(s)}}).$mount("#app")},"5a41":function(e,t,n){},"78b8":function(e,t,n){},a18c:function(e,t,n){"use strict";var r=n("1da1"),a=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b0e")),c=n("8c4f"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[n("el-header",[n("Header")],1),n("el-main",[n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{sm:18,md:15,lg:10,xl:8}},[n("el-card",["/"===e.$route.fullPath?n("home"):e._e(),n("router-view")],1)],1)],1)],1),n("el-footer",[e._v("footer")])],1)},o=[],i=n("5530"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around",align:"middle"}},[n("el-col",{attrs:{span:6}},[n("div",{staticClass:"logoBox"},[n("router-link",{attrs:{to:{name:"layout"}}},[e._v("jjd")])],1)]),n("el-col",{attrs:{span:18}},[n("div",{staticClass:"navBox"},[n("span",[n("router-link",{attrs:{to:{name:"write"}}},[e._v("글쓰기")])],1),n("span",[n("router-link",{attrs:{to:{name:"boardList",query:{page:1}}}},[e._v("게시판")])],1),e.logged_in?e._e():n("span",[n("router-link",{attrs:{to:{name:"login"}}},[e._v("로그인")])],1),e.logged_in?e._e():n("span",[n("router-link",{attrs:{to:{name:"signUp"}}},[e._v("회원가입")])],1),e.logged_in?n("span",{staticClass:"userWrap"},[n("div",{staticClass:"imgWrap",staticStyle:{cursor:"pointer"},on:{click:e.handleCard}},[e.current_user.image?n("img",{attrs:{src:e.current_user.image,alt:"프로필사진"}}):n("i",{staticClass:"el-icon-user"})]),n("transition",{attrs:{name:"slide-fade"}},[e.userCardHandle?n("el-card",{staticClass:"user-card"},[n("div",{staticClass:"clearfix",staticStyle:{display:"flex"},attrs:{slot:"header"},slot:"header"},[n("span",{staticClass:"imgWrap"},[e.current_user.image?n("img",{attrs:{src:e.current_user.image,alt:"프로필사진"}}):n("i",{staticClass:"el-icon-user"})]),n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[e._v(e._s(e.current_user.email)+" / "+e._s(e.current_user.name))])],1),n("div",{staticClass:"text item",on:{click:e.moveMyPage}},[e._v("마이 페이지")]),n("div",{staticClass:"text item",on:{click:function(t){return e.logout()}}},[e._v("로그아웃")])]):e._e()],1)],1):e._e()])])],1)],1)},l=[],d=n("2f62"),f={data:function(){return{userCardHandle:!1}},watch:{$route:function(){this.userCardHandle=!1}},computed:Object(i["a"])(Object(i["a"])({},Object(d["c"])("auth",["current_user"])),Object(d["b"])("auth",["logged_in"])),methods:{moveMyPage:function(){this.userCardHandle=!1,this.$router.push({name:"myPage"}).catch((function(){}))},logout:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.userCardHandle=!1,e.$store.dispatch("auth/logout"),e.$message({showClose:!0,type:"info",message:"로그아웃 되었습니다."}),e.$router.push({name:"login"});case 4:case"end":return t.stop()}}),t)})))()},handleCard:function(){this.userCardHandle=!this.userCardHandle}}},m=f,p=(n("2922"),n("2877")),h=Object(p["a"])(m,s,l,!1,null,null,null),b=h.exports,g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"titleWrap"},[n("h1",[e._v(" 데모 게시판 입니다.")])]),n("div",{staticClass:"contentWrap"},[n("p",[e._v("로그인을 하시고 글을 작성해주세요.")])])])}],_={},k=_,y=Object(p["a"])(k,g,v,!1,null,null,null),j=y.exports,w={name:"layout",components:{Header:b,home:j},computed:Object(i["a"])({},Object(d["c"])("common",["loading"]))},O=w,C=Object(p["a"])(O,u,o,!1,null,null,null),x=C.exports,T=n("cc33"),E=n("5c96");a["default"].use(c["a"]);var R=[{path:"/",name:"layout",component:x,children:[{path:"/signUp",name:"signUp",component:function(){return n.e("chunk-2d8eacbb").then(n.bind(null,"b9f4"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-2d0ac3bd").then(n.bind(null,"1954"))}},{path:"/boardList",name:"boardList",component:function(){return n.e("chunk-73d083c4").then(n.bind(null,"b3fb"))},meta:{requiresAuth:!0}},{path:"/board/:id",name:"board",component:function(){return n.e("chunk-7f770c7e").then(n.bind(null,"69fb"))},meta:{requiresAuth:!0}},{path:"/write",name:"write",component:function(){return n.e("chunk-51b5fad6").then(n.bind(null,"8cf4"))},meta:{requiresAuth:!0}},{path:"/myPage",name:"myPage",component:function(){return n.e("chunk-f0ade270").then(n.bind(null,"f8bf"))},meta:{requiresAuth:!0}}]}],S=new c["a"]({mode:"history",base:"/",routes:R});S.beforeEach(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.matched.some((function(e){return e.meta.requiresAuth}))){e.next=7;break}if(Object(T["c"])()){e.next=4;break}return Object(E["Message"])({showClose:!0,type:"info",message:"로그인이 필요합니다."}),e.abrupt("return",r({name:"login"}));case 4:r(),e.next=8;break;case 7:r();case 8:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}());t["a"]=S},b775:function(e,t,n){"use strict";var r=n("1da1"),a=(n("d3b7"),n("96cf"),n("bc3a")),c=n.n(a),u=n("cc33"),o=n("49c2"),i=n("2b27"),s=n.n(i),l=c.a.create({baseURL:"/api",timeout:1e4});l.interceptors.request.use(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.headers["Content-Type"]="application/json",n=Object(u["b"])(),Object(u["c"])()&&(t.headers.Authorization="Bearer ".concat(n)),e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)})),l.interceptors.response.use((function(e){return e}),function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(401!==t.response.status){e.next=8;break}return e.next=3,Object(o["d"])({refreshToken:Object(u["a"])()});case 3:return n=e.sent,r=n.data,s.a.set("accessToken",r.accessToken),t.config.headers.Authorization="Bearer ".concat(r.accessToken),e.abrupt("return",l.request(t.config));case 8:return e.abrupt("return",Promise.reject(t));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t["a"]=l},c459:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return r})),n.d(t,"mutations",(function(){return a})),n.d(t,"actions",(function(){return c}));var r={loading:!1},a={SET_LOADING:function(e,t){e.loading=t}},c={getLoading:function(e,t){var n=e.commit;n("SET_LOADING",t)}}},c7d4:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return d})),n.d(t,"getters",(function(){return f})),n.d(t,"mutations",(function(){return m})),n.d(t,"actions",(function(){return p}));var r=n("1da1"),a=(n("d3b7"),n("b0c0"),n("96cf"),n("49c2")),c=n("4cce"),u=n("cc33"),o=n("2b27"),i=n.n(o),s=n("5c96"),l=n("a18c"),d={current_user:{name:"",image:"",email:""},logged_in:!1},f={logged_in:function(e){return!!e.current_user.email}},m={SET_CURRENT_USER:function(e,t){e.current_user=t}},p={init:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,!Object(u["c"])()){t.next=8;break}return t.next=4,Object(c["a"])();case 4:return r=t.sent,a=r.data,t.next=8,n("SET_CURRENT_USER",a);case 8:case"end":return t.stop()}}),t)})))()},getCurrentUser:function(e,t){var n=e.commit;n("SET_CURRENT_USER",t)},login:function(e,t){var n=e.commit,r=e.dispatch;r("common/getLoading",!0,{root:!0}),Object(a["a"])(t).then((function(e){var t=e.data;i.a.set("refreshToken",t.refreshToken),i.a.set("accessToken",t.accessToken),n("SET_CURRENT_USER",{name:t.name,email:t.email,createdAt:t.createdAt,image:t.image}),Object(s["Message"])({showClose:!0,message:"".concat(t.name,"님이 로그인 되었습니다."),type:"success"}),l["a"].push({name:"boardList",query:{page:1}})})).catch((function(e){Object(s["Message"])({showClose:!0,message:e.response.data.errors.message,type:"error"})})).finally((function(){r("common/getLoading",!1,{root:!0})}))},logout:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,i.a.remove("refreshToken"),i.a.remove("accessToken"),t.next=5,Object(a["b"])({refreshToken:Object(u["a"])()});case 5:n("SET_CURRENT_USER",{name:"",image:"",email:""});case 6:case"end":return t.stop()}}),t)})))()}}},cc33:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return o}));var r=n("2b27"),a=n.n(r);function c(){return a.a.get("accessToken")}function u(){return a.a.get("refreshToken")}function o(){return!!c()}},d307:function(e,t,n){var r={"./alert.js":"f156","./auth.js":"c7d4","./common.js":"c459","./index.js":"2a74"};function a(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id="d307"},f156:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return r})),n.d(t,"getters",(function(){return a})),n.d(t,"mutations",(function(){return c})),n.d(t,"actions",(function(){return u}));var r={alert_on:!1,alert_title:"",alert_type:""},a={},c={ALERT_HANDLER:function(e,t){e.alert_on=!0,e.alert_type=t.type,e.alert_title=t.title,setTimeout((function(){e.alert_on=!1}),2e3)}},u={alertTrigger:function(e,t){var n=e.commit;n("ALERT_HANDLER",t)}}}});
//# sourceMappingURL=app.74975973.js.map