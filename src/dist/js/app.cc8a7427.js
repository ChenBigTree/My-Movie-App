(function(e){function a(a){for(var s,n,u=a[0],i=a[1],r=a[2],l=0,m=[];l<u.length;l++)n=u[l],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&m.push(c[n][0]),c[n]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);d&&d(a);while(m.length)m.shift()();return o.push.apply(o,r||[]),t()}function t(){for(var e,a=0;a<o.length;a++){for(var t=o[a],s=!0,n=1;n<t.length;n++){var u=t[n];0!==c[u]&&(s=!1)}s&&(o.splice(a--,1),e=i(i.s=t[0]))}return e}var s={},n={app:0},c={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0a7669e4":"f25118ed","chunk-19fecce2":"0efa13b5","chunk-291e2f7c":"8588a5bd","chunk-2d0d789f":"e550130c","chunk-2d20e885":"7c4c9816","chunk-3be06dcc":"c60263f4","chunk-972fe9a4":"099692e0","chunk-9d1d3a46":"a943fc66","chunk-46b59d54":"4b4d7b3c","chunk-69b6931d":"11a4b186","chunk-8199b056":"7f65066b","chunk-98413892":"f289b3dd","chunk-bba8300a":"f681ded4","chunk-f9ce50d8":"d0aaa63c"}[e]+".js"}function i(a){if(s[a])return s[a].exports;var t=s[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var a=[],t={"chunk-0a7669e4":1,"chunk-19fecce2":1,"chunk-291e2f7c":1,"chunk-972fe9a4":1,"chunk-9d1d3a46":1,"chunk-46b59d54":1,"chunk-69b6931d":1,"chunk-8199b056":1,"chunk-98413892":1,"chunk-bba8300a":1,"chunk-f9ce50d8":1};n[e]?a.push(n[e]):0!==n[e]&&t[e]&&a.push(n[e]=new Promise((function(a,t){for(var s="css/"+({}[e]||e)+"."+{"chunk-0a7669e4":"e7bb6d8f","chunk-19fecce2":"5ca79528","chunk-291e2f7c":"aee8ee1e","chunk-2d0d789f":"31d6cfe0","chunk-2d20e885":"31d6cfe0","chunk-3be06dcc":"31d6cfe0","chunk-972fe9a4":"4ccda136","chunk-9d1d3a46":"e946c10b","chunk-46b59d54":"7b6f597a","chunk-69b6931d":"55d220c6","chunk-8199b056":"1d58b869","chunk-98413892":"d0881b1d","chunk-bba8300a":"4d2ef07f","chunk-f9ce50d8":"d2c83de4"}[e]+".css",c=i.p+s,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var r=o[u],l=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(l===s||l===c))return a()}var m=document.getElementsByTagName("style");for(u=0;u<m.length;u++){r=m[u],l=r.getAttribute("data-href");if(l===s||l===c)return a()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=a,d.onerror=function(a){var s=a&&a.target&&a.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete n[e],d.parentNode.removeChild(d),t(o)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){n[e]=0})));var s=c[e];if(0!==s)if(s)a.push(s[2]);else{var o=new Promise((function(a,t){s=c[e]=[a,t]}));a.push(s[2]=o);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var m=new Error;r=function(a){l.onerror=l.onload=null,clearTimeout(d);var t=c[e];if(0!==t){if(t){var s=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;m.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",m.name="ChunkLoadError",m.type=s,m.request=n,t[1](m)}c[e]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(a)},i.m=e,i.c=s,i.d=function(e,a,t){i.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,a){if(1&a&&(e=i(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var s in e)i.d(t,s,function(a){return e[a]}.bind(null,s));return t},i.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="",i.oe=function(e){throw console.error(e),e};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=a,r=r.slice();for(var m=0;m<r.length;m++)a(r[m]);var d=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},2395:function(e,a,t){},"56d7":function(e,a,t){"use strict";t.r(a);t("5246");var s=t("6b41"),n=(t("be7f"),t("565f")),c=(t("0653"),t("34e9")),o=(t("66b9"),t("b650")),u=(t("c3a6"),t("ad06")),i=(t("9a83"),t("f564")),r=(t("e7e5"),t("d399")),l=(t("537a"),t("ac28")),m=(t("a52c"),t("2ed4")),d=(t("2b28"),t("9ed2")),p=(t("3df5"),t("2830")),f=(t("0ec5"),t("21ab")),h=(t("81e6"),t("9ffb")),b=(t("4d48"),t("d1e1")),N=(t("7844"),t("5596")),k=(t("4b0a"),t("2bb1")),y=(t("da3c"),t("0b33")),g=(t("bda7"),t("5e46")),v=(t("09d3"),t("2d6d")),w=(t("61ae"),t("d314")),x=(t("5852"),t("d961")),C=(t("4142"),t("39d1")),F=(t("e17f"),t("2241")),D=(t("ab71"),t("58e6")),E=(t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("2b0e")),j=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"movie"}},[t("router-view")],1)},O=[],P=(t("7c55"),t("2877")),S={},B=Object(P["a"])(S,j,O,!1,null,null,null),z=B.exports,L=t("8c4f"),M=(t("d3b7"),t("d4ec")),T=t("bee2"),A=function(){function e(){Object(M["a"])(this,e)}return Object(T["a"])(e,[{key:"subjectComponent",value:function(){return t.e("chunk-bba8300a").then(t.bind(null,"ac7a"))}},{key:"homeComponent",value:function(){return t.e("chunk-46b59d54").then(t.bind(null,"1dd0"))}},{key:"buyComponent",value:function(){return t.e("chunk-f9ce50d8").then(t.bind(null,"eb9e"))}},{key:"filmComponent",value:function(){return t.e("chunk-8199b056").then(t.bind(null,"6514"))}},{key:"cinemaComponent",value:function(){return t.e("chunk-19fecce2").then(t.bind(null,"3aea"))}},{key:"shareComponent",value:function(){return t.e("chunk-2d0d789f").then(t.bind(null,"76f0"))}},{key:"videoComponent",value:function(){return t.e("chunk-2d20e885").then(t.bind(null,"b089"))}},{key:"mineComponent",value:function(){return t.e("chunk-69b6931d").then(t.bind(null,"4b91"))}},{key:"registerComponent",value:function(){return t.e("chunk-291e2f7c").then(t.bind(null,"73cf"))}},{key:"loginComponent",value:function(){return t.e("chunk-0a7669e4").then(t.bind(null,"a55b"))}},{key:"detailPagesComponent",value:function(){return Promise.all([t.e("chunk-3be06dcc"),t.e("chunk-972fe9a4")]).then(t.bind(null,"8e2d"))}},{key:"ticketComponent",value:function(){return Promise.all([t.e("chunk-3be06dcc"),t.e("chunk-9d1d3a46")]).then(t.bind(null,"8fc2"))}},{key:"buyResultsComponent",value:function(){return t.e("chunk-98413892").then(t.bind(null,"372d"))}}]),e}(),_=new A,I=[{path:"/subject",name:"subject",component:_.subjectComponent,children:[{path:"/home",name:"home",component:_.homeComponent},{path:"/buy",name:"buy",component:_.buyComponent,children:[{path:"/film",name:"film",component:_.filmComponent},{path:"/cinema",name:"cinema",component:_.cinemaComponent}]},{path:"/share",name:"share",component:_.shareComponent},{path:"/video",name:"video",component:_.videoComponent},{path:"/mine",name:"mine",component:_.mineComponent}]},{path:"/register",name:"register",component:_.registerComponent},{path:"/login",name:"login",component:_.loginComponent},{path:"/detailPages/:id",name:"detailPages",component:_.detailPagesComponent},{path:"/ticket/:id",name:"ticket",component:_.ticketComponent},{path:"/buyResults/:id",name:"buyResults",component:_.buyResultsComponent},{path:"*",redirect:{name:"home"}}];E["a"].use(L["a"]);var $=new L["a"]({routes:I}),J=$,R=t("2f62"),Z={ts:"",yzm:"",useName:{result:"",isError:!1,hint:"请输入用户名",nameNull:"用户名不能为空...",error:"用户名必须是字母开头且4-8个字符",reg:/^[A-Za-z][A-Za-z0-9_]{3,7}$/},phone:{result:"15089600646",isError:!1,hint:"请输入手机号",nameNull:"手机号不能为空...",error:"手机号格式不正确",reg:/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,isDis:!1,num:"发送验证码"},pass1:{result:"a123123",isError:!1,hint:"请输入密码",nameNull:"密码不能为空...",reg:/^[a-zA-Z]\w{5,17}$/,error:"密码长度为5~17位，必须由字母开头",typt:"password",isEye:!1,eyeIcon:"closed-eye"},pass2:{result:"a123123",isError:!1,hint:"请输入确认密码",nameNull:"确认密码不能为空...",error:"两次密码不一致",typt:"password",isEye:!1,eyeIcon:"closed-eye"},iszcBtn:!0,registrationDatas:[],isLoading:!1},q=(t("b0c0"),{onClickLeft:function(e){},eyeFun:function(e,a){e[a].isEye=!e[a].isEye,e[a].eyeIcon=e[a].isEye?"eye":"closed-eye",e[a].typt=e[a].isEye?"text":"password"},registerInput:function(e,a){if(e.ts="",e[a].isError=!1,null==e[a].result||""==e[a].result)return e[a].isError=!0,void(e.iszcBtn=!0);"pass2"==a?e.pass1.result!==e.pass2.result&&(e[a].isError=!0,e.ts=e[a].error,e.iszcBtn=!0):e[a].reg.test(e[a].result)?e[a].isError=!1:(e[a].isError=!0,e.ts=e[a].error),e.iszcBtn=!(""!=e.useName.result&&0==e.useName.isError&&""!=e.phone.result&&0==e.phone.isError&&""!=e.pass1.result&&0==e.pass1.isError&&""!=e.pass2.result&&0==e.pass2.isError)},registrationFun:function(e,a){e.isLoading=!0,e.iszcBtn=!0;var t={name:e.useName.result,pass:e.pass1.result,phone:e.phone.result},s=e.registrationDatas,n=5*Math.random()*1e3;setTimeout((function(){var n=localStorage.getItem("registrationDatas");n=n?JSON.parse(n):[];for(var c=0;c<n.length;c++)if(n[c].name==t.name)return a.$toast({duration:2e3,message:"该用户已存在，请重试！！！"}),e.iszcBtn=!1,void(e.isLoading=!1);s.push(t),a.$toast({duration:2e3,message:"注册成功，前往登录"}),setTimeout((function(){a.$router.push({name:"login"})}),2e3),localStorage.setItem("registrationDatas",JSON.stringify(s)),e.iszcBtn=!1,e.isLoading=!1}),n)},yzmfun:function(e,a){e.yzm=a}}),H={namespaced:!0,state:Z,mutations:q},K={login:{useName:"",password:""},iszcBtn:!0,isLoading:!1,pass:{type:"password",eye:"closed-eye"},ispassTrue:"true"},U={dlu:function(e,a){e.isLoading=a,e.iszcBtn=!!a},loginInputFun:function(e){""!=e.login.useName&&""!=e.login.password?e.iszcBtn=!1:e.iszcBtn=!0},eyeFun:function(e){e.pass.type=e.ispassTrue?"text":"password",e.pass.eye=e.ispassTrue?"eye":"closed-eye",e.ispassTrue=!e.ispassTrue}},G={namespaced:!0,mutations:U,state:K},Q={detailPagesData:[],filmId:null,display:"-webkit-box",isLike:!1,name:"like-o"},V={detailPagesDataFun:function(e,a){e.detailPagesData=a},filmIdFun:function(e,a){e.filmId=a},isdisplayFun:function(e){e.display="block"==e.display?"-webkit-box":"block"},isLikeFun:function(e){e.name=e.isLike?"like-o":"like",e.isLike=!e.isLike}},W={namespaced:!0,state:Q,mutations:V},X={nums:[{key:"1"},{key:"2"},{key:"3"},{key:"4"},{key:"5"},{key:"6"},{key:"7"},{key:"8"},{key:"9"},{key:"10"}],seatBox:[[{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"}],[{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"}],[],[{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"}],[{className:"seat"},{className:"seat chair"},{className:"seat chair"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"}],[{className:"seat"},{className:"seat chair"},{className:"seat chair"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"}],[{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"}],[{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"}],[{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"}],[{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"},{className:"seat"}]],pitch:[],seatSubscriptBox:{id:"",seatSubscript:[]},film:{id:"",name:"",img:""}},Y={getfilmFun:function(e,a){e.film.id=a},delData:function(e,a){e.seatSubscriptBox.seatSubscript=a},changeFilmData:function(e,a){e.film.name=a.name,e.film.img=a.img,e.seatSubscriptBox.id=a.id}},ee={namespaced:!0,state:X,mutations:Y},ae=t("ade3"),te={tabbarData:[{name:"home",icon:"home-o",title:"首页",chind:[]},{name:"film",icon:"coupon-o",title:"购票",chind:[Object(ae["a"])({name:"film"},"name","cinema")]},{name:"share",icon:"share",title:"发现",chind:[]},{name:"video",icon:"video-o",title:"视频",chind:[]},{name:"mine",icon:"manager-o",title:"我的",chind:[]}]},se={},ne={namespaced:!0,state:te,mutations:se},ce={active:"film",isAct:!1},oe={pageSwitching:function(e){e.isAct=!e.isAct}},ue={namespaced:!0,state:ce,mutations:oe},ie={onNowFileData:[],useNowFile:[],onNextFileData:[],useNextFile:[],viewFileData:[]},re={onNowFileDataFun:function(e,a){e.onNowFileData=a},useNowFileDataFun:function(e,a){e.useNowFile=a},onNextFileDataFun:function(e,a){e.onNextFileData=a},useNextFileDataFun:function(e,a){e.useNextFile=a},viewFileDataFun:function(e,a){e.viewFileData=a}},le={namespaced:!0,state:ie,mutations:re},me={name:"邓紫棋"},de={changeName:function(e,a){e.name=a}},pe={namespaced:!0,state:me,mutations:de},fe={onNowData:[],onNextData:[],isOnNow:!1,isonNext:!1},he={onNowDataFun:function(e,a){e.onNowData=a[0].subjects,e.isOnNow=a[0].bol},onNextDataFun:function(e,a){e.onNextData=a[0].subjects,e.isOnNext=a[0].bol}},be={namespaced:!0,state:fe,mutations:he},Ne={value1:0,value2:"A",value3:"a",option1:[{text:"全城",value:0},{text:"品牌",value:1},{text:"好评",value:2},{text:"特色",value:3}],option2:[{text:"好评",value:"A"},{text:"好评排序",value:"B"},{text:"销量排序",value:"C"},{text:"销量排序",value:"D"}],option3:[{text:"最近",value:"a"},{text:"好评排序",value:"b"},{text:"销量排序",value:"c"},{text:"销量排序",value:"c"}]},ke={},ye={namespaced:!0,state:Ne,mutations:ke};E["a"].use(R["b"]);var ge=new R["b"].Store({state:{},modules:{subjectModule:ne,loginModule:G,registerModule:H,cinemaModule:ye,filmModule:be,buyModule:ue,ticketModule:ee,homeModule:le,detailPagesModule:W,mineModule:pe}}),ve=t("bc3a"),we=t.n(ve),xe=t("a7fe"),Ce=t.n(xe);t("499a");E["a"].use(s["a"]).use(n["a"]).use(c["a"]).use(o["a"]).use(u["a"]).use(i["a"]).use(r["a"]).use(l["a"]).use(m["a"]).use(d["a"]).use(p["a"]).use(f["a"]).use(h["a"]).use(b["a"]).use(N["a"]).use(k["a"]).use(y["a"]).use(g["a"]).use(v["a"]).use(w["a"]).use(Ce.a,we.a).use(x["a"]).use(C["a"]).use(F["a"]).use(D["a"]),E["a"].config.productionTip=!1,new E["a"]({router:J,store:ge,render:function(e){return e(z)}}).$mount("#app")},"7c55":function(e,a,t){"use strict";var s=t("2395"),n=t.n(s);n.a}});
//# sourceMappingURL=app.cc8a7427.js.map