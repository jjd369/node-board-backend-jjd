(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d8eacbb"],{"658a":function(e,t,a){},b9f4:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"signupWrap"},[a("form",[e.result?a("div",[a("el-result",{attrs:{icon:"success",title:"회원가입 완료",subTitle:e.name+"님 회원가입을 축하드립니다."}},[a("template",{slot:"extra"},[a("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.$router.push({name:"login"})}}},[e._v("로그인")])],1)],2)],1):a("div",[e._m(0),a("div",{staticClass:"inputWrap"},[a("p",[e._v("이름")]),a("el-input",{attrs:{placeholder:"이름을 입력해주세요.",clearable:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("div",{staticClass:"inputWrap"},[a("p",[e._v("이메일")]),a("el-input",{attrs:{placeholder:"이메일을 입력해주세요."},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("div",{staticClass:"inputWrap"},[a("p",[e._v("비밀번호")]),a("el-input",{attrs:{placeholder:"비밀번호를 입력해주세요.","show-password":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("div",{staticClass:"btnWarp"},[a("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.signUp()}}},[e._v("등록")])],1)])])])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"titleWrap"},[a("h2",[e._v("회원가입")])])}],i=a("1da1"),r=(a("96cf"),a("d3b7"),a("b0c0"),a("49c2")),c=a("b775");function o(e){return c["a"].post("/mail/send",e)}var l={data:function(){return{name:"",password:"",email:"",result:!1}},methods:{signUp:function(){var e=this;this.$store.dispatch("common/getLoading",!0),Object(r["c"])({name:this.name,email:this.email,password:this.password}).then(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(a){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=a.data,t.next=3,o({name:e.name,email:e.email});case 3:e.$message({showClose:!0,message:"".concat(s.name,"님 회원가입이 완료되었습니다."),type:"success"}),e.result=!0;case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$message({showClose:!0,message:t.response.data.errors.message,type:"error"})})).finally((function(){e.$store.dispatch("common/getLoading",!1)}))}}},u=l,p=(a("eaa4"),a("2877")),m=Object(p["a"])(u,s,n,!1,null,null,null);t["default"]=m.exports},eaa4:function(e,t,a){"use strict";a("658a")}}]);
//# sourceMappingURL=chunk-2d8eacbb.bee0ec2a.js.map