(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[863],{2062:function(e,t,a){Promise.resolve().then(a.bind(a,4395))},4395:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l}});var n=a(9268),o=a(6006),r=a(9779);function l(){let[e,t]=(0,o.useState)(""),[a,l]=(0,o.useState)(""),[i,s]=(0,o.useState)(""),u=async n=>{try{if(n.preventDefault,0===e.trim().length||0===a.trim().length)return;await (0,r.bo)(e,{title:e.trim(),description:a.trim(),category:i.trim()}),t(""),l(""),s("")}catch(e){console.error(e)}};return(0,n.jsx)("main",{className:"bg-white p-1",children:(0,n.jsxs)("form",{onSubmit:e=>e.preventDefault,className:"flex flex-col content-center items-center gap-1 [&>*]:w-2/3",children:[(0,n.jsx)("label",{className:"text-slate-900 text-xs -mb-1",children:" Name of the tool "}),(0,n.jsx)("input",{type:"text",onChange:e=>t(e.target.value),value:e,autoFocus:!0,required:!0,className:"focus:outline-lime-600 border-2 rounded border-lime-800"}),(0,n.jsx)("label",{className:"text-slate-900 text-xs -mb-1",children:" Description "}),(0,n.jsx)("textarea",{rows:"7",cols:"10",onChange:e=>l(e.target.value),value:a,required:!0,className:"focus:outline-lime-600 border-2 rounded border-lime-800 resize-none overflow-auto"}),(0,n.jsx)("label",{className:"text-slate-900 text-xs -mb-1",children:" Category "}),(0,n.jsx)("input",{type:"text-area",onChange:e=>s(e.target.value),value:i,autoComplete:"on",className:"focus:outline-lime-600 border-2 rounded border-lime-800"}),(0,n.jsx)("button",{type:"submit",onClick:u,className:"bg-lime-600 hover:bg-lime-800 text-white font-bold py-2 px-4 rounded !w-[130px] mt-2",children:" Submit "})]})})}},9779:function(e,t,a){"use strict";a.d(t,{Me:function(){return u},Yu:function(){return s},bo:function(){return i}});var n=a(1313),o=a(6936);let r=(0,n.ZF)({apiKey:"AIzaSyDDRxuZqR9AWHYnADGqO40oA2qafs-oGQY",authDomain:"toolboxai-a1954.firebaseapp.com",projectId:"toolboxai-a1954",storageBucket:"toolboxai-a1954.appspot.com",messagingSenderId:"20887386769",appId:"1:20887386769:web:f1a48f0a21adbc110e1d30",measurementId:"G-PFPND6L90M"}),l=(0,o.ad)(r);async function i(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"tools";try{let n=(0,o.JU)(l,a,e);return await (0,o.pl)(n,t),n}catch(e){return e}}async function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"tools",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"title",a=(0,o.hJ)(l,e),n=(0,o.IO)(a,(0,o.Xo)(t)),r=await (0,o.PL)(n),i=r.docs,s=i.map(e=>{let t=e.id,a=e.data();return[t,a]});return s}async function u(e){let t=(0,o.JU)(l,"tools",e),a=await (0,o.QT)(t),n=a.data();return n}}},function(e){e.O(0,[613,720,667,139,744],function(){return e(e.s=2062)}),_N_E=e.O()}]);