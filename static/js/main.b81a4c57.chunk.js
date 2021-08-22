(this["webpackJsonpnot-a-merge-game"]=this["webpackJsonpnot-a-merge-game"]||[]).push([[0],{17:function(e,n,t){},23:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),i=t(5),o=t.n(i),a=(t(17),t(8)),u=t(2),s=t.n(u),l=t(1),d=function(e){var n=e.reset,t=Object(c.useState)(0),r=Object(a.a)(t,2),i=r[0],o=r[1];return Object(l.jsxs)("button",{onClick:function(){if(5-i<=1)return n(),void o(0);o(i+1)},id:"resetButton",className:"plainButton",children:["Press ",5-i," more time to ",Object(l.jsx)("b",{children:"HARD RESET"})]})},v=t(7),b=function(e){return new s.a(e)},p=[{paramCount:1,exp:"x+1",calc:function(e){return b(e).add(1).toString()},unlockPrice:"0",price:"0"},{paramCount:1,exp:"2x",calc:function(e){return b(e).mul(2).toString()},unlockPrice:"100",price:"10"}],m=[{count:4,content:"Multiply 2 to starting number",price:function(e){return s.a.pow(100,e+1).toString()},action:function(e){return I(s.a.pow(2,e).toString())}},{count:5,content:"Expand inventory",price:function(e){return s.a.pow(1e3,e).mul(30).toString()},action:function(e,n){var t=n.invMax;return O(t+1)}}],f={inventory:["1"],invMax:5,itemBought:new Array(p.length).fill(!1),money:"0",startingNumber:"1",upgrade:new Array(m.length).fill(0)},j=Object(v.b)({name:"save",initialState:f,reducers:{addNumber:function(e,n){e.invMax>e.inventory.length&&e.inventory.push(n.payload)},removeNumberByIndex:function(e,n){0<=n.payload&&n.payload<e.invMax&&e.inventory.splice(n.payload,1)},buyOrSellShopItem:function(e,n){e.itemBought[n.payload]=!e.itemBought[n.payload]},setInvMax:function(e,n){e.invMax=n.payload,e.inventory=e.inventory.slice(0,e.invMax)},setMoney:function(e,n){e.money=n.payload},clearClicked:function(e,n){delete e.clickedNumber,delete e.clickedShop},clickShop:function(e,n){e.clickedShop=n.payload},clickNumber:function(e,n){e.clickedNumber||(e.clickedNumber=[]),e.clickedNumber.push(n.payload)},hardReset:function(e,n){e.invMax=f.invMax,e.inventory=f.inventory,e.itemBought=f.itemBought,e.money=f.money,e.startingNumber=f.startingNumber,e.upgrade=f.upgrade,delete e.clickedNumber,delete e.clickedShop,localStorage.removeItem("notAMergeGame")},setStartingNumber:function(e,n){e.startingNumber=n.payload},buyUpgrade:function(e,n){e.upgrade[n.payload]+=1}}}),h=j.actions,g=h.addNumber,x=h.removeNumberByIndex,y=h.buyOrSellShopItem,O=h.setInvMax,k=h.setMoney,N=h.clearClicked,S=h.clickNumber,C=h.clickShop,M=h.hardReset,I=h.setStartingNumber,B=h.buyUpgrade,A=j.reducer,w=t(4),P=function(){return Object(w.b)()},E=w.c,G=function(e){var n=e.content,t=e.isOpen,c=e.isClicked,r=e.cannotClick,i=e.onClick;return Object(l.jsxs)("button",{className:"shopItem \n            ".concat(c?"clicked":"","\n            ").concat(r?"cannotClick":""),onClick:i,children:[t?Object(l.jsx)("span",{className:"exp",children:n.exp}):"",t?" - Cost : "+n.price:n.unlockPrice+" to unlock"]})},J=function(e){var n=e.content,t=e.onClick,c=e.id,r=e.className;return Object(l.jsx)("button",{onClick:t,className:"plainButton ".concat(r),id:c,children:n.split("\n").map((function(e){return Object(l.jsxs)("span",{children:[e,Object(l.jsx)("br",{})]})}))})},R=[{name:"shop",tab:function(){var e=P(),n=E((function(e){return e.save.itemBought})),t=E((function(e){return e.save.money})),c=E((function(e){return e.save.clickedShop}));var r=Object(l.jsx)("div",{id:"shopItems",children:p.map((function(r,i){return Object(l.jsx)(G,{content:r,isOpen:n[i],isClicked:i===c,onClick:function(){return function(c){var r=b(t);if(n[c]){var i=b(p[c].price);if(i.gt(r))return;e(k(r.sub(i).toString())),e(C(c))}else{var o=b(p[c].unlockPrice);if(o.gt(r))return;e(k(r.sub(o).toString())),e(y(c))}}(i)},cannotClick:void 0!==c||n[i]&&b(p[i].price).gt(t)||!n[i]&&b(p[i].unlockPrice).gt(t)},i)}))});return Object(l.jsxs)("div",{id:"shop",className:"tab",children:[Object(l.jsx)("h3",{className:"title",children:"Shop"}),r]})}},{name:"upgrades",tab:function(){var e=P(),n=E((function(e){return e.save.upgrade})),t=E((function(e){return e.save.money})),c=E((function(e){return e.save})),r=m.map((function(r,i){return Object(l.jsx)(J,{content:r.content+"\nCost : "+r.price(n[i]),onClick:function(){return function(r,i){var o=b(r.price(n[i]));o.gt(t)||(e(k(b(t).sub(o).toString())),e(B(i)),e(r.action(n[i],c)))}(r,i)},id:"upgrade"+i,className:"upgrade ".concat(b(r.price(n[i])).gt(t)?"cannotClick":"")},i)}));return Object(l.jsxs)("div",{id:"upgrades",className:"tab",children:[Object(l.jsx)("h3",{className:"title",children:"Upgrades"}),Object(l.jsx)("div",{id:"upgradesGrid",children:r})]})}},{name:"option",tab:function(){var e=P();return Object(l.jsxs)("div",{id:"options",className:"tab",children:[Object(l.jsx)("h3",{className:"title",children:"Option"}),Object(l.jsx)(d,{reset:function(){e(M())}})]})}}],U=t(12),D=function(e){var n=e.content,t=e.cannotClick,c=e.onClick;return Object(l.jsx)("button",{className:"invItem ".concat(t?"cannotClick":""),onClick:c,children:n})},H=function(){var e=P(),n=E((function(e){return e.save.inventory})),t=E((function(e){return e.save.invMax})),c=E((function(e){return e.save.clickedShop})),r=E((function(e){return e.save.clickedNumber})),i=E((function(e){return e.save.money}));return Object(l.jsxs)("div",{id:"inventory",className:"tab",children:[Object(l.jsxs)("h3",{className:"title",children:["Inventory - ",n.length," / ",t]}),Object(l.jsxs)("h3",{id:"resourceDisplayer",children:["Money : ",i]}),Object(l.jsx)("div",{id:"invItems",children:n.map((function(t,i){return Object(l.jsx)(D,{content:t,cannotClick:void 0===c||void 0!==r&&r.includes(i),onClick:function(){return function(t){var i;if(!(void 0===c||void 0!==r&&r.includes(t))){var o=p[c];if(null!==(i=null===r||void 0===r?void 0:r.length)&&void 0!==i?i:1<o.paramCount)return e(S(t));var a=r?[].concat(Object(U.a)(r),[t]).map((function(e){return n[e]})):[n[t]];e(g(o.calc.apply(o,Object(U.a)(a)))),e(N())}}(i)}},i)}))})]})};var T=function(){var e=P(),n=Object(c.useState)(0),t=Object(a.a)(n,2),r=t[0],i=t[1],o=E((function(e){return e.save.inventory})),u=E((function(e){return e.save.money})),d=E((function(e){return e.save.startingNumber})),v=Object(l.jsx)("div",{id:"tabNavs",children:R.map((function(e,n){return Object(l.jsx)("span",{className:"tabNav ".concat(n===r?"selected":""),onClick:function(){return i(n)},children:e.name},n)}))}),p=R[r].tab;return Object(l.jsxs)("div",{className:"App",children:[v,Object(l.jsx)(p,{}),Object(l.jsx)(H,{}),Object(l.jsx)("div",{id:"bottomBar",children:Object(l.jsx)("button",{onClick:function(){for(var n=b("0"),t=o.length-1;t>=0;t--)n=n.add(o[t]),e(x(t));e(g(d)),e(k(s.a.add(u,n).toString()))},children:Object(l.jsx)("h2",{children:"Sell All"})})})]})};function q(e,n){var t;for(var c in e=null!==(t=e)&&void 0!==t?t:{},n){var r;if(Array.isArray(n[c]))e[c]=null!==(r=e[c])&&void 0!==r?r:[],z(e[c],n[c]);else if("object"===typeof n[c])e[c]=q(e[c],n[c]);else{var i;e[c]=n[c].constructor(null!==(i=e[c])&&void 0!==i?i:n[c])}}return e}function z(e,n){for(var t=0,c=n.length;t<c;t++)if(Array.isArray(n[t]))z(e[t],n[t]);else if("object"===typeof n[t])e[t]=q(e[t],n[t]);else{var r;e[t]=n[t].constructor(null!==(r=e[t])&&void 0!==r?r:n[t])}return e}var F=JSON.parse(localStorage.getItem("notAMergeGame")||"{}"),K=Object(v.a)({reducer:{save:A},preloadedState:q(F,{save:f})});K.subscribe((function(){localStorage.setItem("notAMergeGame",JSON.stringify(K.getState()))}));var L=K;o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(w.a,{store:L,children:Object(l.jsx)(T,{})})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.b81a4c57.chunk.js.map