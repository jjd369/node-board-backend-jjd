(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ac3bd"],{1954:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("form",[e._m(0),a("div",{staticClass:"inputWrap"},[a("p",[e._v("이메일")]),a("el-input",{attrs:{placeholder:"이메일을 입력해주세요.",clearable:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("div",{staticClass:"inputWrap"},[a("p",[e._v("비밀번호")]),a("el-input",{attrs:{placeholder:"비밀번호를 입력해주세요.","show-password":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("div",{staticClass:"btnWrap"},[a("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.login()}}},[e._v("로그인")])],1)])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"titleWrap"},[a("h2",[e._v("로그인")])])}],s=a("1da1"),i=(a("96cf"),{data:function(){return{email:"",password:""}},methods:{login:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("auth/login",{email:e.email,password:e.password});case 2:case"end":return t.stop()}}),t)})))()}}}),l=i,c=a("2877"),o=Object(c["a"])(l,n,r,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0ac3bd.8860794e.js.map