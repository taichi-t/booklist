(this.webpackJsonpbooklist=this.webpackJsonpbooklist||[]).push([[0],{39:function(e,t,a){e.exports=a(52)},44:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(16),l=a.n(o),c=(a(44),a(14)),i=a(18),u=a(23),s=a(28),m=a(77),b=a(45),d=function(e,t){switch(t.type){case"ADD_BOOK":var a=b().calendar();return Object(s.a)({},e,{books:e.books.concat({title:t.book.title,author:t.book.author,id:Object(m.a)(),createdAt:a})});case"REMOVE_BOOK":return Object(s.a)({},e,{books:e.books.filter((function(e){return e.id!==t.id}))});case"ADD_HISTORY":var r=b().calendar();return Object(s.a)({},e,{books:e.books.filter((function(e){return e.id!==t.id})),history:e.history.concat({title:t.title,author:t.author,id:t.id,finishedAt:r})});default:return e}},E=Object(r.createContext)(),h=function(e){var t=localStorage.getItem("books"),a=localStorage.getItem("history"),o={books:t?JSON.parse(t):[],history:a?JSON.parse(a):[]},l=Object(r.useReducer)(d,o),c=Object(u.a)(l,2),i=c[0],s=c[1];return Object(r.useEffect)((function(){localStorage.setItem("books",JSON.stringify(i.books))}),[i.books]),Object(r.useEffect)((function(){localStorage.setItem("history",JSON.stringify(i.history))}),[i.history]),n.a.createElement(E.Provider,{value:{state:i,dispatch:s}},e.children)},p=a(72),f=function(e){var t=e.book,a=Object(r.useContext)(E).dispatch;return n.a.createElement("li",null,n.a.createElement("div",{className:"title"},t&&t.title),n.a.createElement("div",{className:"author"},t&&t.author),n.a.createElement(p.a,{color:"primary",onClick:function(){return a({type:"DETAIL_BOOK",id:t.id})}},n.a.createElement(c.b,{to:t.id}," Detail")),n.a.createElement(p.a,{onClick:function(e){e.preventDefault(),a({type:"ADD_HISTORY",id:t.id,title:t.title,author:t.author})},color:"primary"},"Done"),n.a.createElement(p.a,{onClick:function(){return a({type:"REMOVE_BOOK",id:t.id})},color:"secondary"},"Remove"))},k=function(){var e=Object(r.useContext)(E).state;return e.books.length?n.a.createElement("div",{className:"book-list"},n.a.createElement("ul",null,e.books.map((function(e){return n.a.createElement(f,{book:e,key:e.id})})))):n.a.createElement("div",{className:"empty"},"No books to read. Hello free time :)")},y=a(76),O=function(){var e=Object(r.useContext)(E).dispatch,t=Object(r.useState)(""),a=Object(u.a)(t,2),o=a[0],l=a[1],c=Object(r.useState)(""),i=Object(u.a)(c,2),s=i[0],m=i[1];return n.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e({type:"ADD_BOOK",book:{title:o,author:s}}),l(""),m("")}},n.a.createElement(y.a,{placeholder:"title",inputProps:{"aria-label":"description"},onChange:function(e){return l(e.target.value)},required:!0,value:o,fullWidth:!0}),n.a.createElement(y.a,{placeholder:"author",inputProps:{"aria-label":"aaa"},onChange:function(e){return m(e.target.value)},required:!0,value:s,fullWidth:!0}),n.a.createElement(p.a,{variant:"contained",color:"primary",type:"submit",value:"add book",style:{marginTop:"10px"}},"ADD"))},v=function(){var e=Object(r.useContext)(E).state;return n.a.createElement("div",{className:"navbar"},n.a.createElement("h1",null,"Reading List"),n.a.createElement("p",null,"currently you have ",e.books.length," books to get through..."),n.a.createElement(p.a,{variant:"book history",color:"primary"},n.a.createElement(c.b,{to:"/finished-booklist"},"History")))},g=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(v,null),n.a.createElement(k,null),n.a.createElement(O,null))},j=a(75),D=a(78),S=a(79),x=a(74),N=function(){var e=Object(r.useContext)(E).state,t=Object(x.a)((function(e){return{root:{color:"black"}}}))(),a=0===e.history.length?n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{style:{color:"black"}},"There is no history"),n.a.createElement(p.a,{color:"primary"},n.a.createElement(c.b,{to:"/"},"Back"))):n.a.createElement(n.a.Fragment,null,n.a.createElement(j.a,{className:t.root},e.history.map((function(e){return n.a.createElement(D.a,{key:e.id},n.a.createElement(S.a,{primary:e.title,secondary:e.finishedAt}))}))),n.a.createElement(p.a,{color:"primary"},n.a.createElement(c.b,{to:"/"},"Back")));return n.a.createElement(n.a.Fragment,null,a)},C=function(e){var t=Object(r.useContext)(E).state,a=e.match.params.id,o=t.books.filter((function(e){return e.id===a})),l=Object(x.a)((function(e){return{root:{color:"black",padding:"10px"}}}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(j.a,{className:l.root},n.a.createElement("p",null,o[0]&&o[0].author),n.a.createElement("p",null,o[0]&&o[0].title),n.a.createElement("p",null,"created at ",o[0]&&o[0].createdAt)),n.a.createElement(p.a,{color:"primary"},n.a.createElement(c.b,{to:"/"},"Back")))};var A=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(c.a,null,n.a.createElement(h,null,n.a.createElement(i.c,null,n.a.createElement(i.a,{path:"/",component:g,exact:!0}),n.a.createElement(i.a,{path:"/finished-bookList",component:N,exact:!0}),n.a.createElement(i.a,{path:"/:id",component:C,exact:!0})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.45a81823.chunk.js.map