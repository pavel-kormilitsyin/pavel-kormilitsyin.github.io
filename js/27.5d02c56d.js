(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{e0f6:function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",[e("q-dialog",{model:{value:t.dialogInfoCall,callback:function(s){t.dialogInfoCall=s},expression:"dialogInfoCall"}},[e("q-card",[e("q-card-section",{staticClass:"text-h6"},[e("div",{staticClass:"row items-center"},[e("div",{staticClass:"col-auto row items-center q-mr-sm"},[e("img",{attrs:{src:"icons/info.svg",width:"24"}})]),e("div",{staticClass:"col row items-center"},[t._v("Код верификации")])])]),e("q-card-section",{staticStyle:{"font-size":"16px"}},[t._v("\n        На ваш номер телефона поступит звонок,"),e("br"),t._v("\n        последние 4 цифры телефона это код."),e("br"),t._v("\n        Введите его в поле кода верификации.\n      ")]),e("q-card-section",{staticStyle:{"font-size":"16px"},attrs:{align:"center"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"btn-orange-mobile col-auto",attrs:{flat:"","no-caps":"",label:"Понятно"}})],1)],1)],1),e("div",{staticClass:"restore background-auth"},["restore"==t.mode?e("div",{staticClass:"restore-wrapper",attrs:{onSubmit:"return false;"}},[e("div",{staticClass:"restore-wrapper-logo"},[e("img",{attrs:{src:"img/Login_Logo_0.png",width:"40"}}),e("p",{staticClass:"restore-wrapper-logo-title"},[t._v("Восстановление доступа")])]),e("div",{staticClass:"restore-wrapper-row"},[e("div",{staticClass:"restore-wrapper-row-input input-1"},[e("span",[t._v("+7 "),e("img",{attrs:{src:"icons/Arrow_Dropdown_R.svg",alt:""}})])]),e("input",{directives:[{name:"mask",rawName:"v-mask",value:"(###) ###-##-##",expression:"'(###) ###-##-##'"},{name:"model",rawName:"v-model",value:t.userReg.phone,expression:"userReg.phone"}],ref:"phone",staticClass:"restore-wrapper-row-input input-2",attrs:{placeholder:"Номер телефона...",type:"text"},domProps:{value:t.userReg.phone},on:{input:function(s){s.target.composing||t.$set(t.userReg,"phone",s.target.value)}}})]),e("div",{staticClass:"restore-wrapper-row"},[e("button",{staticClass:"login-btn",attrs:{disabled:t.userReg.phone.length<15},on:{click:t.rPassword}},[t.loadingContinue?e("div",[e("q-spinner-dots")],1):t._e(),t.loadingContinue?t._e():e("div",[t._v("\n          Далее "),e("q-icon",{attrs:{name:"keyboard_arrow_right"}})],1)])]),e("div",{staticClass:"restore-wrapper-row cancel"},[e("q-btn",{attrs:{"no-caps":"",rounded:"",flat:"",to:"/auth"}},[e("img",{attrs:{src:"icons/Link_Return.svg",alt:""}}),e("p",{staticClass:"cancel-text"},[t._v("Отменить и вернуться ко входу")])])],1)]):t._e(),"verification"==t.mode?e("div",{staticClass:"reg-wrapper",attrs:{onSubmit:"return false;"}},[e("div",{staticClass:"reg-wrapper-logo"},[e("img",{attrs:{src:"img/Login_Logo_0.png",width:"40"}}),e("p",{staticClass:"reg-wrapper-logo-title"},[t._v("Подтверждение номера")])]),e("div",{staticClass:"reg-wrapper-row row"},[e("div",{staticClass:"col"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.smsCode,expression:"smsCode"}],ref:"form_3",staticClass:"reg-wrapper-row-input input-2",attrs:{maxlength:"6",placeholder:"Код верификации...",type:"text"},domProps:{value:t.smsCode},on:{input:function(s){s.target.composing||(t.smsCode=s.target.value)}}})]),e("div",{staticClass:"col-auto q-pl-md cursor-pointer"},[e("img",{attrs:{src:"icons/info.svg",width:"30"},on:{click:function(s){t.dialogInfoCall=!0}}})])]),e("div",{staticClass:"reg-wrapper-row"},[e("button",{staticClass:"login-btn",attrs:{type:"submit",disabled:t.isDisabledSms},on:{click:function(s){return s.preventDefault(),t.rPasswordConfirm(s)}}},[t.loadingContinue?e("div",[e("q-spinner-dots")],1):t._e(),t.loadingContinue?t._e():e("div",[t._v("\n          Далее "),e("q-icon",{attrs:{name:"keyboard_arrow_right"}})],1)])]),e("div",{staticClass:"reg-wrapper-resend"},[e("p",{staticClass:"reg-wrapper-resend-title"},[e("span",{on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.reCall()}}},[t._v("Заказать звонок повторно")]),t._v(" можно через:")]),e("countdown",{ref:"countdown",staticClass:"q-mt-md",attrs:{time:1e3*t.time,"auto-start":!0},on:{progress:function(s){t.currTimer=s.seconds}},scopedSlots:t._u([{key:"default",fn:function(s){return[e("p",{staticClass:"reg-wrapper-resend-timer"},[t._v("\n           "+t._s(s.minutes<10?"0"+s.minutes:s.minutes)+" : "+t._s(s.seconds<10?"0"+s.seconds:s.seconds)+" \n          ")])]}}],null,!1,2086794163)})],1),e("div",{staticClass:"reg-wrapper-row cancel"},[e("q-btn",{attrs:{"no-caps":"",rounded:"",flat:"",to:"/auth"}},[e("img",{attrs:{src:"icons/Link_Return.svg",alt:""}}),e("p",{staticClass:"cancel-text"},[t._v("Отменить и вернуться ко входу")])])],1)]):t._e()])],1)},r=[],a=e("ded3"),n=e.n(a),i=(e("bc3a"),e("2f62")),c={name:"reg",data:function(){return{dialogInfoCall:!1,loadingContinue:!1,smsCode:"",isDisabledSms:!0,time:60,currTimer:0,mode:"restore",userReg:{phone:""},isActiveBtn:!1}},methods:n()(n()({},Object(i["b"])(["resetPassword","resetPasswordConfirm"])),{},{restartCountDown:function(){void 0!=this.$refs.countdown&&(this.$refs.countdown.end(),this.$refs.countdown.totalMilliseconds=1e3*this.time,this.$refs.countdown.start())},reCall:function(){this.currTimer<=1&&(this.currTimer=this.time,this.restartCountDown(),this.rPassword())},rPassword:function(){var t=this,s=this.dCopy(this.userReg);s.phone="+7"+s.phone,this.resetPassword(s).then((function(s){s.status>=400?t.$q.notify({color:"accent",icon:"warning",message:"Указанный номер телефона не зарегистрирован!",timeout:3e3,html:!0,position:"top"}):(t.dialogInfoCall=!0,t.mode="verification")})).catch((function(t){}))},rPasswordConfirm:function(){var t=this;this.loadingContinue=!0;var s=this.dCopy(this.userReg);s.phone="+7"+s.phone,s.code=this.smsCode,this.resetPasswordConfirm(s).then((function(s){t.loadingContinue=!1,400!=s.status?(t.setToken(s.data.access),t.$q.localStorage.set("token",s.data.access),t.$q.localStorage.set("refresh",s.data.refresh),t.setIsAuth(!0),t.$emit("initFirstData"),t.$router.push({path:"/password-new",query:{restore:!0}}).catch((function(t){}))):t.$q.notify({color:"accent",icon:"warning",message:"Вы ввели неверный код верификации!",timeout:3e3,html:!0,position:"top"})})).catch((function(t){}))}}),watch:{mode:function(){var t=this;this.$nextTick((function(){t.$refs.hasOwnProperty("smsCode")&&t.$refs.smsCode.focus()}))},smsCode:function(t){t.length>=4&&(this.isDisabledSms=!1)}},mounted:function(){var t=this;this.$nextTick((function(){return t.$refs.phone.focus()}))}},l=c,d=e("2877"),p=e("9989"),u=e("24e8"),m=e("f09f"),g=e("a370"),f=e("9c40"),w=e("8380"),v=e("0016"),h=e("7f67"),C=e("eebe"),_=e.n(C),b=Object(d["a"])(l,o,r,!1,null,null,null);s["default"]=b.exports;_()(b,"components",{QPage:p["a"],QDialog:u["a"],QCard:m["a"],QCardSection:g["a"],QBtn:f["a"],QSpinnerDots:w["a"],QIcon:v["a"]}),_()(b,"directives",{ClosePopup:h["a"]})}}]);