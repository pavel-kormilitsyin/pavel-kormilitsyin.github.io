(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{5577:function(s,e,r){"use strict";r.r(e);var t=function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("q-page",[r("div",{staticClass:"reg  background-auth"},[r("form",{staticClass:"reg-wrapper",attrs:{action:"",onsubmit:"return false"}},[r("div",{staticClass:"reg-wrapper-logo"},[r("img",{attrs:{src:"img/Login_Logo_0.png",width:"40"}}),r("p",{staticClass:"reg-wrapper-logo-title"},[s._v("Придумайте пароль")])]),r("div",{staticClass:"reg-wrapper-row"},[r("input",{directives:[{name:"model",rawName:"v-model",value:s.userReg.password,expression:"userReg.password"}],ref:"form_4",staticClass:"reg-wrapper-row-input input-2",attrs:{placeholder:"Пароль...",type:"password"},domProps:{value:s.userReg.password},on:{input:function(e){e.target.composing||s.$set(s.userReg,"password",e.target.value)}}})]),r("div",{staticClass:"reg-wrapper-row"},[r("input",{directives:[{name:"model",rawName:"v-model",value:s.userReg.password_confirm,expression:"userReg.password_confirm"}],staticClass:"reg-wrapper-row-input input-2",attrs:{placeholder:"Подтвердите пароль...",type:"password"},domProps:{value:s.userReg.password_confirm},on:{input:function(e){e.target.composing||s.$set(s.userReg,"password_confirm",e.target.value)}}})]),r("div",{staticClass:"reg-wrapper-row"},[s.$route.query.hasOwnProperty("restore")?r("button",{staticClass:"login-btn",attrs:{disable:s.isDisabled},on:{click:function(e){return s.access()}}},[s._v("Восстановить доступ")]):s._e(),s.$route.query.hasOwnProperty("register")?r("button",{staticClass:"login-btn",attrs:{disable:s.isDisabled},on:{click:function(e){return s.access()}}},[s._v("Зарегистрироваться")]):s._e()]),r("div",{staticClass:"restore-wrapper-row cancel"},[r("q-btn",{attrs:{"no-caps":"",rounded:"",flat:"",to:"/auth"}},[r("img",{attrs:{src:"icons/Link_Return.svg",alt:""}}),r("p",{staticClass:"cancel-text"},[s._v("Отменить и вернуться ко входу")])])],1)])])])},a=[],o=r("ded3"),n=r.n(o),i=r("2f62"),u={name:"password",data:function(){return{sendForm:!1,userReg:{password:"",password_confirm:""}}},computed:{isDisabled:function(){return!(this.userReg.password.length>4&&this.userReg.password_confirm.length>4&&this.userReg.password==this.userReg.password_confirm&&!this.sendForm)}},methods:n()(n()({},Object(i["b"])(["updateUserInfo"])),{},{access:function(){var s=this;this.updateUserInfo(this.userReg).then((function(e){if(s.sendForm=!0,e.status>=400)return s.setUserInfo(null),s.sendForm=!1,void s.$q.notify({icon:"warning",message:e.errors[0].message,timeout:3e3,color:"blue-grey-10",html:!0,position:"top"});s.$router.push({path:"/dashboard"}).catch((function(s){}))}))}}),mounted:function(){}},p=u,c=r("2877"),d=r("9989"),l=r("9c40"),g=r("eebe"),w=r.n(g),m=Object(c["a"])(p,t,a,!1,null,null,null);e["default"]=m.exports;w()(m,"components",{QPage:d["a"],QBtn:l["a"]})}}]);