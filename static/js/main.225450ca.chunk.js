(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{13:function(e,c,a){},15:function(e,c,a){"use strict";a.r(c);var t=a(7),n=a.n(t),i=a(8),r=a(5),l=a(1),s=(a(13),a(4)),o=a.n(s);function j(e,c){for(var a=[],t=e;t<=c;t+=1)a.push(t);return a}var d=a(0),u=function(e){var c=e.currentPage,a=e.perPage,t=e.total,n=e.onPageChange,i=Math.ceil(t/a),r=j(1,i);return Object(d.jsxs)("ul",{className:"pagination",children:[Object(d.jsx)("li",{className:o()("page-item",{disabled:1===c}),children:Object(d.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===c,onClick:function(){return n(c>1?c-1:1)},children:"\xab"})}),r.map((function(e){return Object(d.jsx)("li",{className:o()("page-item",{active:c===e}),children:Object(d.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:e})},e)})),Object(d.jsx)("li",{className:o()("page-item",{disabled:c===i}),children:Object(d.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":c===i,onClick:function(){return n(c<i?c+1:i)},children:"\xbb"})})]})},b=j(1,42),h=function(){var e=Object(l.useState)(5),c=Object(r.a)(e,2),a=c[0],t=c[1],n=Object(l.useState)(1),s=Object(r.a)(n,2),o=s[0],j=s[1],h=Object(l.useState)([]),p=Object(r.a)(h,2),m=p[0],O=p[1],g=1===o?1:(o-1)*a+1,x=o*a>42?42:o*a;return Object(l.useEffect)((function(){O(Object(i.a)(b).splice((o-1)*a,a).map((function(e){return"Item ".concat(e)})))}),[o,a]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:"Items with Pagination"}),Object(d.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(o," (items ").concat(g," - ").concat(x," of ").concat(b.length,")")}),Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(d.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:function(e){t(+e.target.value),j(1)},value:a,children:[Object(d.jsx)("option",{value:"3",children:"3"}),Object(d.jsx)("option",{value:"5",children:"5"}),Object(d.jsx)("option",{value:"10",children:"10"}),Object(d.jsx)("option",{value:"20",children:"20"})]})}),Object(d.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(d.jsx)(u,{currentPage:o,perPage:a,total:42,onPageChange:j}),Object(d.jsx)("ul",{children:m.map((function(e){return Object(d.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.225450ca.chunk.js.map