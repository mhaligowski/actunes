(this.webpackJsonpactunes=this.webpackJsonpactunes||[]).push([[0],{17:function(e,n,t){},27:function(e,n,t){},28:function(e,n,t){},30:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var c=t(3),i=t(5),o=t.n(i),a=t(11),s=t.n(a),r=(t(17),t(2)),l=t(1),u=t(7);var d=t(9),j=(t(27),{"-":"rest",x:"repeat",G3:"low-g",A3:"low-a",B3:"low-b",C4:"low-c",D4:"low-d",E4:"low-e",F4:"low-f",G4:"hi-g",A4:"hi-a",B4:"hi-b",C5:"hi-c",D5:"hi-d",E5:"hi-e"}),b=function(e){var n=e.onUp,t=e.onDown,i=e.value,o=j[i];return Object(c.jsxs)("div",{className:Object(d.a)("Note",o),"data-name":i,children:[Object(c.jsx)("div",{className:Object(d.a)("up"),children:Object(c.jsx)("button",{onClick:function(){if("x"===i)n("-");else if("-"===i)n("G4");else{var e=u.b(i);do{e=e.transpose(1)}while(-1!==e.toNote().indexOf("#"));n(e.toNote())}},disabled:"E5"===i,children:"up"})}),Object(c.jsx)("div",{className:Object(d.a)("name")}),Object(c.jsx)("div",{className:"down",children:Object(c.jsx)("button",{onClick:function(){if("G3"===i)t("-");else if("-"===i)t("x");else{var e=u.b(i);do{e=e.transpose(-1)}while(-1!==e.toNote().indexOf("#"));n(e.toNote())}},disabled:"x"===i,children:"down"})})]})};t(28);function h(e){var n=e.notes,t=e.onChange,i=n.map((function(e,n){return Object(c.jsx)(b,{onDown:function(e){return t(n,e)},onUp:function(e){return t(n,e)},value:e,order:n},n)}));return Object(c.jsx)("div",{className:"Picker",children:Object(c.jsx)("div",{className:"Picker-inner",children:i})})}t(29),t(30);var f=function(){var e=Array(16).fill("E4"),n=Object(i.useState)(e),t=Object(l.a)(n,2),o=t[0],a=t[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Animal Crossing Tunes Studio"}),Object(c.jsx)("section",{className:"picker",children:Object(c.jsx)(h,{onChange:function(e,n){a([].concat(Object(r.a)(o.slice(0,e)),[n],Object(r.a)(o.slice(e+1))))},notes:o})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:function(){var e=(new u.a).toDestination();u.c.bpm.value=100,function(e){for(var n=[],t=0,c=0;c<e.length;c++)"x"===e[c]?t+=2:"-"===e[c]?(n[n.length-1].value+=2,t+=2):(n.push({pitch:e[c],start:t,value:2}),t+=2);return n}(o).forEach((function(n){e.triggerAttackRelease(n.pitch,"0:0:".concat(n.value),"+0:0:".concat(n.start))}))},children:"play"})})]})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),c(e),i(e),o(e),a(e)}))};s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),O()}},[[31,1,2]]]);
//# sourceMappingURL=main.f2e73862.chunk.js.map