(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{23:function(t,e,a){t.exports=a(52)},28:function(t,e,a){},51:function(t,e,a){},52:function(t,e,a){"use strict";a.r(e);var n=a(1),o=a.n(n),r=a(5),c=a.n(r),i=(a(28),a(6)),u=a.n(i),l=a(3),s=a(7),h=a(19),m=a.n(h).a.create({baseURL:"https://api.quotable.io"});function d(t){var e=t.text,a=t.author;return e=e.split(" ").join("%20"),a=a.split(" ").join("%20"),"https://twitter.com/intent/tweet?hashtags=quotes&text=%22".concat(e,"%22%20-%20").concat(a)}var p=["#222","#7159C1","#2292A4","#008148","#00BD9D","#DA2C38","#43291F"],b=a(20),f=a(21),E=a(22);a(51);var x=function(){var t=Object(n.useState)({text:"",author:""}),e=Object(l.a)(t,2),a=e[0],r=e[1],c=Object(n.useState)(!0),i=Object(l.a)(c,2),h=i[0],x=i[1],v=Object(n.useState)("#000"),j=Object(l.a)(v,2),w=j[0],g=j[1],q=Object(n.useCallback)((function(){var t,e;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return x(!0),a.next=3,u.a.awrap(m.get("/random"));case 3:t=a.sent,(e=t.data).content.length<=200?(r({text:e.content,author:e.author}),O()):q(),x(!1);case 7:case"end":return a.stop()}}))}),[]),O=function(){var t=Math.floor(Math.random()*p.length);g(p[t])};return Object(n.useEffect)((function(){q()}),[q]),o.a.createElement("div",{className:"App",style:{backgroundColor:w}},o.a.createElement(b.AnimateOnChange,null,!h&&o.a.createElement("div",{id:"quote-box"},o.a.createElement("div",{id:"text-wrapper"},o.a.createElement(s.a,{id:"quote-icon",icon:f.a,color:w,flip:"horizontal",size:"2x"}),o.a.createElement("h1",{id:"text",style:{color:w}},a.text)),o.a.createElement("h3",{id:"author",style:{color:w}},"\u2014"," ",a.author),o.a.createElement("div",{id:"footer"},o.a.createElement("button",{id:"new-quote",type:"submit",onClick:function(t){q()},style:{backgroundColor:w}},"New quote"),o.a.createElement("a",{href:d(a),id:"tweet-quote",target:"blank"},o.a.createElement(s.a,{icon:E.a,color:w,flip:"horizontal",size:"2x"}))))))};c.a.render(o.a.createElement(x,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.367096b2.chunk.js.map