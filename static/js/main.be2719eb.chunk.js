(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),l=n.n(r),u=n(6),i=n(3);var o=function(e){return c.a.createElement("li",{onClick:function(){return e.delete(e.id)}},e.data)};var m=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),r=n[0],l=n[1];return c.a.createElement("div",{className:"form"},c.a.createElement("input",{onChange:function(e){var t=e.target.value;l(t)},value:r,type:"text"}),c.a.createElement("button",{onClick:function(){e.click(r),l("")}},c.a.createElement("span",null,"Add")))};var s=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];function l(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"heading"},c.a.createElement("h1",null,"To-Do List")),c.a.createElement(m,{click:function(e){r((function(t){return[].concat(Object(u.a)(t),[e])}))}}),c.a.createElement("div",null,c.a.createElement("ul",null,n.map((function(e,t){return c.a.createElement(o,{key:t,id:t,data:e,delete:l})})))))};l.a.render(c.a.createElement(s,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.be2719eb.chunk.js.map