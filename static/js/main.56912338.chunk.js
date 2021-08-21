(this["webpackJsonpnot-a-merge-game"]=this["webpackJsonpnot-a-merge-game"]||[]).push([[0],{16:function(e,n,t){},22:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t.n(c),r=t(4),o=t.n(r),a=(t(16),t(7)),l=t(1),u=function(e){var n=e.reset,t=Object(c.useState)(0),i=Object(a.a)(t,2),r=i[0],o=i[1];return Object(l.jsxs)("button",{onClick:function(){if(5-r<=1)return n(),void o(0);o(r+1)},className:"plainButton",children:["Press ",5-r," more time to ",Object(l.jsx)("b",{children:"HARD RESET"})]})},s=t(6),d=[{paramCount:1,exp:"x+1",calc:function(e){return e+1},unlockPrice:0,price:0},{paramCount:1,exp:"2x",calc:function(e){return 2*e},unlockPrice:100,price:10}],v={inventory:[1],invMax:5,itemBought:new Array(d.length).fill(!1),money:0},b=Object(s.b)({name:"save",initialState:v,reducers:{addNumber:function(e,n){e.invMax>e.inventory.length&&e.inventory.push(n.payload)},removeNumberByIndex:function(e,n){0<=n.payload&&n.payload<e.invMax&&e.inventory.splice(n.payload,1)},buyOrSellShopItem:function(e,n){e.itemBought[n.payload]=!e.itemBought[n.payload]},changeInvMax:function(e,n){e.invMax=n.payload,e.inventory=e.inventory.slice(0,e.invMax)},addMoney:function(e,n){e.money+=n.payload},clearClicked:function(e,n){delete e.clickedNumber,delete e.clickedShop},clickShop:function(e,n){e.clickedShop=n.payload},clickNumber:function(e,n){e.clickedNumber||(e.clickedNumber=[]),e.clickedNumber.push(n.payload)},hardReset:function(e,n){e.invMax=v.invMax,e.inventory=v.inventory,e.itemBought=v.itemBought,e.money=v.money,delete e.clickedNumber,delete e.clickedShop,localStorage.removeItem("notAMergeGame")}}}),m=b.actions,j=m.addNumber,p=m.removeNumberByIndex,f=m.buyOrSellShopItem,h=(m.changeInvMax,m.addMoney),y=m.clearClicked,x=m.clickNumber,k=m.clickShop,O=m.hardReset,g=b.reducer,N=t(3),S=function(){return Object(N.b)()},C=N.c,M=function(e){var n=e.content,t=e.isOpen,c=e.isClicked,i=e.cannotClick,r=e.onClick;return Object(l.jsxs)("button",{className:"shopItem \n            ".concat(c?"clicked":"","\n            ").concat(i?"cannotClick":""),onClick:r,children:[t?Object(l.jsx)("span",{className:"exp",children:n.exp}):"",t?" - Cost : "+n.price:n.unlockPrice+" to unlock"]})},I=[{name:"shop",tab:function(){var e=S(),n=C((function(e){return e.save.itemBought})),t=C((function(e){return e.save.money})),c=C((function(e){return e.save.clickedShop}));var i=Object(l.jsx)("div",{id:"shopItems",children:d.map((function(i,r){return Object(l.jsx)(M,{content:i,isOpen:n[r],isClicked:r===c,onClick:function(){return function(c){if(n[c]){var i=d[c].price;if(i>t)return;e(h(-i)),e(k(c))}else{var r=d[c].unlockPrice;if(r>t)return;e(h(-r)),e(f(c))}}(r)},cannotClick:void 0!==c||n[r]&&d[r].price>t||!n[r]&&d[r].unlockPrice>t},r)}))});return Object(l.jsxs)("div",{id:"shop",className:"tab",children:[Object(l.jsx)("h3",{className:"title",children:"Shop"}),i]})}},{name:"option",tab:function(){var e=S();return Object(l.jsx)("div",{id:"options",className:"tab",children:Object(l.jsx)(u,{reset:function(){e(O())}})})}}],A=t(11),B=function(e){var n=e.content,t=e.cannotClick,c=e.onClick;return Object(l.jsx)("button",{className:"invItem ".concat(t?"cannotClick":""),onClick:c,children:n})},P=function(){var e=S(),n=C((function(e){return e.save.inventory})),t=C((function(e){return e.save.invMax})),c=C((function(e){return e.save.clickedShop})),i=C((function(e){return e.save.clickedNumber})),r=C((function(e){return e.save.money}));return Object(l.jsxs)("div",{id:"inventory",className:"tab",children:[Object(l.jsxs)("h3",{className:"title",children:["Inventory - ",n.length," / ",t]}),Object(l.jsxs)("h3",{id:"resourceDisplayer",children:["Money : ",r]}),Object(l.jsx)("div",{id:"invItems",children:n.map((function(t,r){return Object(l.jsx)(B,{content:t,cannotClick:void 0===c||void 0!==i&&i.includes(r),onClick:function(){return function(t){var r;if(!(void 0===c||void 0!==i&&i.includes(t))){var o=d[c];if(null!==(r=null===i||void 0===i?void 0:i.length)&&void 0!==r?r:1<o.paramCount)return e(x(t));var a=i?[].concat(Object(A.a)(i),[t]).map((function(e){return n[e]})):[n[t]];e(j(o.calc.apply(o,Object(A.a)(a)))),e(y())}}(r)}},r)}))})]})};var J=function(){var e=S(),n=Object(c.useState)(0),t=Object(a.a)(n,2),i=t[0],r=t[1],o=C((function(e){return e.save.inventory})),u=Object(l.jsx)("div",{id:"tabNavs",children:I.map((function(e,n){return Object(l.jsx)("span",{className:"tabNav",onClick:function(){return r(n)},children:e.name},n)}))}),s=I[i].tab;return Object(l.jsxs)("div",{className:"App",children:[u,Object(l.jsx)(s,{}),Object(l.jsx)(P,{}),Object(l.jsx)("div",{id:"bottomBar",children:Object(l.jsx)("button",{onClick:function(){for(var n=0,t=o.length-1;t>0;t--)n+=o[t],e(p(t));e(h(n))},children:Object(l.jsx)("h2",{children:"Sell All"})})})]})};function R(e,n){var t;for(var c in e=null!==(t=e)&&void 0!==t?t:{},n){var i;if(Array.isArray(n[c]))e[c]=null!==(i=e[c])&&void 0!==i?i:[],w(e[c],n[c]);else if("object"===typeof n[c])e[c]=R(e[c],n[c]);else{var r;e[c]=n[c].constructor(null!==(r=e[c])&&void 0!==r?r:n[c])}}return e}function w(e,n){for(var t=0,c=n.length;t<c;t++)if(Array.isArray(n[t]))w(e[t],n[t]);else if("object"===typeof n[t])e[t]=R(e[t],n[t]);else{var i;e[t]=n[t].constructor(null!==(i=e[t])&&void 0!==i?i:n[t])}return e}var E=JSON.parse(localStorage.getItem("notAMergeGame")||"{}"),G=Object(s.a)({reducer:{save:g},preloadedState:R(E,{save:v})});G.subscribe((function(){localStorage.setItem("notAMergeGame",JSON.stringify(G.getState()))}));var D=G;o.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(N.a,{store:D,children:Object(l.jsx)(J,{})})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.56912338.chunk.js.map