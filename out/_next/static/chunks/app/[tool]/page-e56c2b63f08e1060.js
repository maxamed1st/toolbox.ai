(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{5207:function(t,e,n){Promise.resolve().then(n.bind(n,6782))},6782:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}});var a=n(9268),o=n(6008),i=n(9779),s=n(6006);function l(){let[t,e]=(0,s.useState)({}),n=(0,o.useParams)().tool,l=(0,o.useRouter)();return(0,s.useEffect)(()=>{(async function(){let t=await (0,i.Me)(n);void 0===t&&l.push("/not-found"),e(t)})()},[]),(0,a.jsxs)("main",{className:"bg-white p-2 flex flex-col gap-1",children:[(0,a.jsx)("h1",{className:"text-center font-bold",children:null==t?void 0:t.title}),(0,a.jsx)("p",{className:"text-[1rem]",children:null==t?void 0:t.longDescription}),(0,a.jsx)("a",{href:null==t?void 0:t.websiteLink,target:"_blank",className:"self-center",children:(0,a.jsx)("button",{className:"bg-lime-800 hover:bg-lime-600 p-2 w-20 text-white rounded active:animate-ping",children:"Visit tool"})})]})}},9779:function(t,e,n){"use strict";n.d(e,{Me:function(){return u},Yu:function(){return r},bo:function(){return l}});var a=n(1313),o=n(6936);let i=(0,a.ZF)({apiKey:"AIzaSyDDRxuZqR9AWHYnADGqO40oA2qafs-oGQY",authDomain:"toolboxai-a1954.firebaseapp.com",projectId:"toolboxai-a1954",storageBucket:"toolboxai-a1954.appspot.com",messagingSenderId:"20887386769",appId:"1:20887386769:web:f1a48f0a21adbc110e1d30",measurementId:"G-PFPND6L90M"}),s=(0,o.ad)(i);async function l(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"tools";try{let a=(0,o.JU)(s,n,t);return await (0,o.pl)(a,e),a}catch(t){return t}}async function r(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"tools",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"title",n=(0,o.hJ)(s,t),a=(0,o.IO)(n,(0,o.Xo)(e)),i=await (0,o.PL)(a),l=i.docs,r=l.map(t=>{let e=t.id,n=t.data();return[e,n]});return r}async function u(t){let e=(0,o.JU)(s,"tools",t),n=await (0,o.QT)(e),a=n.data();return a}},6008:function(t,e,n){t.exports=n(167)}},function(t){t.O(0,[613,720,667,139,744],function(){return t(t.s=5207)}),_N_E=t.O()}]);