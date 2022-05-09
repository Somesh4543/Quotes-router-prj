(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{12:function(e,t,n){e.exports={header:"MainNavigation_header__3BIoa",logo:"MainNavigation_logo__n7bXu",nav:"MainNavigation_nav__2hq1Z",active:"MainNavigation_active__gb7pg"}},14:function(e,t,n){"use strict";var r=n(26),c=n.n(r),a=n(0);t.a=function(){return Object(a.jsx)("div",{className:c.a.spinner})}},18:function(e,t,n){e.exports={list:"QuoteList_list__1498S",sorting:"QuoteList_sorting__1Ri32"}},19:function(e,t,n){"use strict";var r=n(11),c=n(9),a=n(21),s=n(4),o=n.n(s),u=n(1);function i(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(u.useReducer)(i,{status:t?"pending":null,data:null,error:null}),s=Object(a.a)(n,2),l=s[0],d=s[1],j=Object(u.useCallback)(function(){var t=Object(c.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:r=t.sent,d({type:"SUCCESS",responseData:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),d({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(r.a)({sendRequest:j},l)}},20:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return f}));var r=n(11),c=n(9),a=n(4),s=n.n(a),o="https://router-4d880-default-rtdb.firebaseio.com";function u(){return i.apply(this,arguments)}function i(){return(i=Object(c.a)(s.a.mark((function e(){var t,n,c,a,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(a in c=[],n)u=Object(r.a)({id:a},n[a]),c.push(u);return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(s.a.mark((function e(t){var n,c,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not fetch quote.");case 8:return a=Object(r.a)({id:t},c),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:r.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return x.apply(this,arguments)}function x(){return(x=Object(c.a)(s.a.mark((function e(t){var n,c,a,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not get comments.");case 8:for(u in a=[],c)i=Object(r.a)({id:u},c[u]),a.push(i);return e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},23:function(e,t,n){e.exports={main:"Layout_main__3zvez"}},26:function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__31ALa"}},27:function(e,t,n){e.exports={item:"QuoteItem_item__1Ra6l"}},28:function(e,t,n){e.exports={noquotes:"NoQuotesFound_noquotes__1DlV6"}},37:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(22),c=n.n(r),a=(n(37),n(1)),s=n.n(a),o=n(2),u=n(23),i=n.n(u),l=n(8),d=n(12),j=n.n(d),h=n(0),p=function(){return Object(h.jsxs)("header",{className:j.a.header,children:[Object(h.jsx)("div",{className:j.a.logo,children:"Great Quotes"}),Object(h.jsx)("nav",{className:j.a.nav,children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{to:"/quotes",activeClassName:j.a.active,children:"All Quotes"})}),Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{to:"/new-quote",activeClassName:j.a.active,children:"Add a Quote"})})]})})]})},b=function(e){return Object(h.jsxs)(a.Fragment,{children:[Object(h.jsx)(p,{}),Object(h.jsx)("main",{className:i.a.main,children:e.children})]})},f=n(14),x=n(27),O=n.n(x),m=function(e){return Object(h.jsxs)("li",{className:O.a.item,children:[Object(h.jsxs)("figure",{children:[Object(h.jsx)("blockquote",{children:Object(h.jsx)("p",{children:e.text})}),Object(h.jsx)("figcaption",{children:e.author})]}),Object(h.jsx)(l.b,{className:"btn",to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},v=n(18),g=n.n(v),w=function(e){var t,n,r=Object(o.h)(),c=Object(o.i)(),s="asc"===new URLSearchParams(c.search).get("sort"),u=(t=e.quotes,n=s,t.sort((function(e,t){return n?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(h.jsxs)(a.Fragment,{children:[Object(h.jsx)("div",{className:g.a.sorting,children:Object(h.jsxs)("button",{onClick:function(){r.push({pathname:c.pathname,search:"?sort=".concat(s?"desc":"asc")}),r.push("".concat(c.pathname,"?sort=").concat(s?"desc":"asc"))},children:["Sort ",s?"Descending":"Ascending"]})}),Object(h.jsx)("ul",{className:g.a.list,children:u.map((function(e){return Object(h.jsx)(m,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},_=n(28),y=n.n(_),q=function(){return Object(h.jsxs)("div",{className:y.a.noquotes,children:[Object(h.jsx)("p",{children:"No quotes found!"}),Object(h.jsx)(l.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})},N=n(19),k=n(20),S=function(){var e=Object(N.a)(k.d,!0),t=e.sendRequest,n=e.status,r=e.data,c=e.error;return Object(a.useEffect)((function(){t()}),[t]),"pending"===n?Object(h.jsx)("div",{className:"centered",children:Object(h.jsx)(f.a,{})}):c?Object(h.jsx)("p",{className:"centered focused",children:c}):"complited"!==n||r&&0!==r.length?Object(h.jsx)(w,{quotes:r}):Object(h.jsx)(q,{})},C=s.a.lazy((function(){return Promise.all([n.e(6),n.e(4)]).then(n.bind(null,58))})),E=s.a.lazy((function(){return n.e(3).then(n.bind(null,57))})),R=s.a.lazy((function(){return n.e(5).then(n.bind(null,56))}));var Q=function(){return Object(h.jsx)(b,{children:Object(h.jsx)(a.Suspense,{fallback:Object(h.jsx)("div",{className:"centered",children:Object(h.jsx)(f.a,{})}),children:Object(h.jsxs)(o.e,{children:[Object(h.jsx)(o.c,{path:"/",exact:!0,children:Object(h.jsx)(o.b,{to:"/quotes"})}),Object(h.jsx)(o.c,{path:"/quotes",exact:!0,children:Object(h.jsx)(S,{})}),Object(h.jsx)(o.c,{path:"/quotes/:quoteId",children:Object(h.jsx)(E,{})}),Object(h.jsx)(o.c,{path:"/new-quote",children:Object(h.jsx)(C,{})}),Object(h.jsx)(o.c,{path:"*",children:Object(h.jsx)(R,{})})]})})})};c.a.createRoot(document.getElementById("root")).render(Object(h.jsx)(l.a,{children:Object(h.jsx)(Q,{})}))}},[[47,1,2]]]);
//# sourceMappingURL=main.e581c530.chunk.js.map