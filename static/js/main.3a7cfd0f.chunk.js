(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{84:function(e,t,n){},85:function(e,t,n){},91:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(70),s=n.n(a),i=(n(84),n(85),n(6)),r=n(8),o=n(19),l=n(18),j=n(5),d=n(119),u=n(122),b=n(127),h=n(123),O=n(128),x=n(129),p=n(125),f=n(126),m=n(130),v=n(117),g="https://hacker-news.firebaseio.com/v0/newstories.json",k="https://hacker-news.firebaseio.com/v0/item/",w="https://hacker-news.firebaseio.com/v0/user/",y=n(1),N=Object(c.createContext)({idPost:[],url:"",setUrl:void 0,loading:!1,setLoading:void 0,checked:!0,setChecked:void 0}),C=function(e){var t=e.children,n=Object(c.useState)([]),a=Object(j.a)(n,2),s=a[0],i=a[1],o=Object(c.useState)(g),d=Object(j.a)(o,2),u=d[0],b=d[1],h=Object(c.useState)(!1),O=Object(j.a)(h,2),x=O[0],p=O[1],f=Object(c.useState)(!0),m=Object(j.a)(f,2),k=m[0],w=m[1];function C(e){return S.apply(this,arguments)}function S(){return S=Object(l.a)(Object(r.a)().mark((function e(t){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(t).then((function(e){i(e.data)}));case 2:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}return Object(c.useEffect)((function(){p(!0),C(u);var e=setInterval((function(){C(u)}),6e4);return function(){clearInterval(e)}}),[u]),s?Object(y.jsx)(N.Provider,{value:{idPost:s,url:u,setUrl:b,loading:x,setLoading:p,checked:k,setChecked:w},children:t}):null};n(91);function S(e){return null===e||void 0===e?"":new Date(1e3*e).toLocaleDateString("ru-RU",{hour:"numeric",minute:"numeric"})}var L=n(29),P=function(e,t){var n=e.title,c=e.by,a=e.score,s=e.time,i=e.id;return Object(y.jsxs)(p.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(y.jsx)(f.a,{component:"th",scope:"row",children:Object(y.jsx)(L.b,{style:{color:"#1976d2"},to:"/post/".concat(i),children:n})}),Object(y.jsx)(f.a,{align:"right",children:Object(y.jsx)(L.b,{style:{color:"#1976d2"},to:"/userid/".concat(c),children:c})}),Object(y.jsx)(f.a,{align:"right",children:a}),Object(y.jsx)(f.a,{align:"right",children:S(s)})]},i)},U=function(){var e=Object(c.useContext)(N),t=e.idPost,n=e.setUrl,a=e.loading,s=e.setLoading,i=e.checked,w=e.setChecked,C=Object(c.useState)([]),S=Object(j.a)(C,2),L=S[0],U=S[1],E=Object(c.useState)(1),T=Object(j.a)(E,2),D=T[0],H=T[1];function I(){return I=Object(l.a)(Object(r.a)().mark((function e(n){var c,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(c=21*n)-21,U([]),e.next=5,t.map(function(){var e=Object(l.a)(Object(r.a)().mark((function e(t,n){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n>a&&n<c)){e.next=3;break}return e.next=3,v.a.get("".concat(k).concat(t,".json")).then(function(){var e=Object(l.a)(Object(r.a)().mark((function e(t){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U((function(e){return[].concat(Object(o.a)(e),[t.data])}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 5:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}return Object(c.useEffect)((function(){!function(e){I.apply(this,arguments)}(D),s(!1),console.log(L)}),[t,D]),Object(y.jsxs)("section",{className:"lists",children:[Object(y.jsxs)("div",{className:"navigation",children:[Object(y.jsxs)("div",{className:"switch",children:[Object(y.jsx)("div",{children:"Bests Posts"}),Object(y.jsx)(d.a,{checked:i,onChange:function(){w(!i),i?(s(!0),n("https://hacker-news.firebaseio.com/v0/beststories.json")):(s(!0),n(g))},inputProps:{"aria-label":"controlled"}}),Object(y.jsx)("div",{children:"New Posts"})]}),Object(y.jsx)("p",{children:"Hacker News"}),Object(y.jsx)(u.a,{variant:"outlined",onClick:function(){window.location.reload()},children:"refresh page"})]}),Object(y.jsx)(b.a,{className:"news",component:h.a,children:Object(y.jsxs)(O.a,{sx:{minWidth:650},size:"small","aria-label":"a dense table",children:[Object(y.jsx)(x.a,{children:Object(y.jsxs)(p.a,{children:[Object(y.jsx)(f.a,{className:"text",children:"Name title"}),Object(y.jsx)(f.a,{className:"text",align:"right",children:"Username"}),Object(y.jsx)(f.a,{className:"text",align:"right",children:"Rating"}),Object(y.jsx)(f.a,{className:"text",align:"right",children:"Date"})]})}),Object(y.jsx)(m.a,{children:a?Object(y.jsx)("div",{children:"Loading..."}):L.map((function(e,t){return Object(y.jsx)(P,{by:e.by,descendants:e.descendants,id:e.id,score:e.score,time:e.time,type:e.type,url:e.url,title:e.title},e.id)}))})]})}),Object(y.jsxs)("div",{className:"footer",children:[1===D?Object(y.jsx)(u.a,{className:"footerbutton",disabled:!0,variant:"outlined",onClick:function(){H(D-1)},children:"previousPage"}):Object(y.jsx)(u.a,{className:"footerbutton",variant:"outlined",onClick:function(){H(D-1)},children:"previous Page"}),Object(y.jsx)("div",{children:"Design by Vlad"}),L.length<20?Object(y.jsx)(u.a,{className:"footerbutton",disabled:!0,variant:"outlined",onClick:function(){H(D+1)},children:"next Page"}):Object(y.jsx)(u.a,{className:"footerbutton",variant:"outlined",onClick:function(){H(D+1)},children:"next Page"})]})]})},E=n(131),T=n(132),D=n(116),H=n(120),I=n(133),R=n(134),z=n(124),F=(n(94),n.p+"static/media/logo.b054ef45.png"),B=(n(95),function e(t){var n=t.text,a=t.by,s=t.time,i=t.kids,d=Object(c.useState)([]),b=Object(j.a)(d,2),h=b[0],O=b[1],x=Object(c.useContext)(N),p=x.loading,f=x.setLoading,m=Object(c.useState)(!1),g=Object(j.a)(m,2),w=g[0],C=g[1];function P(){return P=Object(l.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O([]),null===i||void 0===i||i.map((function(e,t){return v.a.get("".concat(k).concat(e,".json")).then(function(){var e=Object(l.a)(Object(r.a)().mark((function e(t){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O((function(e){return[].concat(Object(o.a)(e),[t.data])}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}));case 2:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}return Object(c.useEffect)((function(){f(!0),function(){P.apply(this,arguments)}(),f(!1)}),[]),Object(y.jsx)("div",{children:p?Object(y.jsx)("div",{style:{margin:"20px 0 0 100px"},children:Object(y.jsx)(E.a,{className:"loading",children:Object(y.jsx)("div",{className:"textcomment",children:"Loading"})})}):Object(y.jsxs)("div",{children:[Object(y.jsx)(E.a,{className:"comments",style:{margin:"20px 0 0 50px"},children:Object(y.jsxs)("div",{className:"comment",children:[Object(y.jsx)("div",{className:"ctext",dangerouslySetInnerHTML:{__html:n}}),Object(y.jsxs)("div",{className:"flex",children:[Object(y.jsx)("p",{className:"cusername",children:Object(y.jsx)(L.b,{style:{color:"#1976d2"},to:"/userid/".concat(a),children:a})}),Object(y.jsx)("p",{className:"cdate",children:S(s)})]})]})}),h.length>0&&Object(y.jsx)(u.a,{size:"medium",onClick:function(e){return function(e){e.preventDefault(),C((function(e){return!e}))}(e)},children:"View the answer"}),w&&(p?Object(y.jsx)("div",{style:{margin:"20px 0 0 100px"},children:Object(y.jsx)(E.a,{className:"loading",children:Object(y.jsx)("div",{className:"textcomment",children:"Loading"})})}):null===h||void 0===h?void 0:h.map((function(t,n){return Object(y.jsx)("div",{style:{margin:"20px 0 0 100px"},children:Object(y.jsx)(e,{by:t.by,id:t.id,parent:t.parent,text:t.text,time:t.time,type:t.type,kids:t.kids})})})))]})})}),J=function(){var e=Object(c.useContext)(N),t=e.loading,n=e.setLoading,a=Object(i.n)(),s=Object(i.l)(),d=Object(c.useState)(),b=Object(j.a)(d,2),h=b[0],O=b[1],x=Object(c.useState)([]),p=Object(j.a)(x,2),f=p[0],m=p[1],g=Object(c.useState)(!1),w=Object(j.a)(g,2),C=w[0],P=w[1];function U(){return U=Object(l.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(k).concat(a.id,".json")).then(function(){var e=Object(l.a)(Object(r.a)().mark((function e(t){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t.data);case 2:console.log(t.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}function J(){return J=Object(l.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m([]),null===h||void 0===h||null===(t=h.kids)||void 0===t||t.map((function(e,t){return v.a.get("".concat(k).concat(e,".json")).then(function(){var e=Object(l.a)(Object(r.a)().mark((function e(t){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m((function(e){return[].concat(Object(o.a)(e),[t.data])}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}));case 2:case"end":return e.stop()}}),e)}))),J.apply(this,arguments)}return Object(c.useEffect)((function(){n(!0),function(){U.apply(this,arguments)}(),n(!1)}),[a.id]),Object(c.useEffect)((function(){n(!0),function(){J.apply(this,arguments)}(),n(!1)}),[C]),Object(y.jsxs)("section",{className:"post",children:[Object(y.jsxs)("div",{className:"navigation",children:[Object(y.jsx)(u.a,{variant:"outlined",className:"button",onClick:function(){s(-1)},children:"go back"}),Object(y.jsx)("p",{children:"Hacker News"}),Object(y.jsx)(u.a,{variant:"outlined",onClick:function(){window.location.reload()},children:"refresh page"})]}),Object(y.jsxs)(E.a,{className:"card",children:[Object(y.jsxs)(T.a,{children:[Object(y.jsxs)("div",{className:"flex",children:[Object(y.jsx)(D.a,{direction:"row",spacing:2,children:Object(y.jsx)(H.a,{alt:"Hacker News",src:F,sx:{width:40,height:40}})}),Object(y.jsxs)("div",{className:"infouser",children:[Object(y.jsx)("p",{className:"username",children:Object(y.jsx)(L.b,{style:{color:"#1976d2"},to:"/userid/".concat(null===h||void 0===h?void 0:h.by),children:null===h||void 0===h?void 0:h.by})}),Object(y.jsx)("p",{className:"date",children:S(null===h||void 0===h?void 0:h.time)})]})]}),Object(y.jsx)(I.a,{variant:"h5",children:null===h||void 0===h?void 0:h.title})]}),Object(y.jsxs)(R.a,{children:[Object(y.jsx)(u.a,{size:"medium",children:Object(y.jsx)(z.a,{href:null===h||void 0===h?void 0:h.url,children:null!==h&&void 0!==h&&h.url?Object(y.jsx)("p",{children:"URL"}):Object(y.jsx)("p",{children:"NO URL"})})}),Object(y.jsxs)(u.a,{size:"medium",onClick:function(){P(!0)},children:["Comments :",null===h||void 0===h?void 0:h.descendants]})]})]}),C&&(t?Object(y.jsx)(E.a,{className:"block1",children:Object(y.jsx)("div",{className:"textcomment",children:"Loading..."})}):null!==h&&void 0!==h&&h.kids?f.map((function(e,t){return Object(y.jsx)("div",{className:"block1",children:Object(y.jsx)(B,{by:e.by,id:e.id,parent:e.parent,kids:null===e||void 0===e?void 0:e.kids,text:e.text,time:e.time,type:e.type})})})):Object(y.jsx)(E.a,{className:"nocomment",children:Object(y.jsx)("div",{className:"textcomment",children:"There are no comments"})}))]})},V=(n(96),function(){var e=Object(i.n)(),t=Object(i.l)(),n=Object(c.useState)(),a=Object(j.a)(n,2),s=a[0],o=a[1];function d(){return d=Object(l.a)(Object(r.a)().mark((function t(){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("".concat(w).concat(e.by,".json")).then(function(){var e=Object(l.a)(Object(r.a)().mark((function e(t){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(t.data);case 2:console.log(t.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}return Object(c.useEffect)((function(){!function(){d.apply(this,arguments)}()}),[e.by]),Object(y.jsxs)("section",{className:"user",children:[Object(y.jsxs)("div",{className:"navigation",children:[Object(y.jsx)(u.a,{variant:"outlined",onClick:function(){t(-1)},children:"go back"}),Object(y.jsx)("p",{children:"Hacker News"}),Object(y.jsx)(u.a,{variant:"outlined",onClick:function(){window.location.reload()},children:"refresh page"})]}),Object(y.jsx)(E.a,{className:"card",children:Object(y.jsxs)(T.a,{children:[Object(y.jsxs)("div",{className:"flex",children:[Object(y.jsx)(D.a,{direction:"row",spacing:2,children:Object(y.jsx)(H.a,{alt:"Hacker News",src:F,sx:{width:40,height:40}})}),Object(y.jsx)("div",{className:"infouser",children:Object(y.jsx)("p",{className:"username",children:e.by})})]}),Object(y.jsxs)("div",{className:"aboutuser",children:[Object(y.jsxs)("p",{children:["Creation date of the user, in Unix Time: ",S(null===s||void 0===s?void 0:s.created)]}),Object(y.jsxs)("p",{children:["The user's karma: ",null===s||void 0===s?void 0:s.karma]}),null!==s&&void 0!==s&&s.about?Object(y.jsxs)("div",{children:["The user's self-description:",Object(y.jsx)("a",{href:null===s||void 0===s?void 0:s.about,children:null===s||void 0===s?void 0:s.about})]}):Object(y.jsx)("div",{children:"no Self-description of the user"}),Object(y.jsxs)("p",{children:[null===s||void 0===s?void 0:s.submitted.length," stories, polls and comments by ",e.by]})]})]})})]})});var _=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)(i.c,{children:[Object(y.jsx)(i.a,{path:"/",element:Object(y.jsx)(U,{})}),Object(y.jsx)(i.a,{path:"/post/:id",element:Object(y.jsx)(J,{})}),Object(y.jsx)(i.a,{path:"/userid/:by",element:Object(y.jsx)(V,{})})]})})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,135)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};s.a.createRoot(document.getElementById("root")).render(Object(y.jsx)(C,{children:Object(y.jsx)(L.a,{children:Object(y.jsx)(_,{})})})),A()}},[[97,1,2]]]);
//# sourceMappingURL=main.3a7cfd0f.chunk.js.map