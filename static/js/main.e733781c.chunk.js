(this["webpackJsonpnot-a-merge-game"]=this["webpackJsonpnot-a-merge-game"]||[]).push([[0],{12:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),o=t(3),i=t.n(o),a=(t(12),t(1)),l=function(e){var n=e.content;return Object(a.jsx)("span",{className:"invItem",children:n})},u=t(2),s=function(){return Object(u.b)()},d=u.c,v=function(){var e=d((function(e){return e.save.inventory})),n=d((function(e){return e.save.invMax}));return Object(a.jsxs)("div",{id:"inventory",children:[Object(a.jsxs)("h3",{className:"title",children:["Inventory - ",e.length," / ",n]}),Object(a.jsx)("div",{id:"invItems",children:e.map((function(e,n){return Object(a.jsx)(l,{content:e},n)}))})]})},m=function(e){var n=e.content,t=e.isOpen,c=e.isClicked,r=e.onClick;return Object(a.jsx)("button",{className:"shopItem \n            ".concat(t?"unlocked":"locked"," \n            ").concat(c?"clicked":""),onClick:r,children:t?n.exp:n.price+" to unlock"})},p=[{paramCount:1,exp:"x+1",calc:function(e){return e+1},price:0},{paramCount:1,exp:"2x",calc:function(e){return 2*e},price:100}],b=t(4),f={inventory:[1],invMax:20,itemBought:new Array(p.length).fill(!1),money:0},h=Object(b.b)({name:"save",initialState:f,reducers:{addNumber:function(e,n){e.invMax>e.inventory.length&&e.inventory.push(n.payload)},removeNumberByIndex:function(e,n){0<=n.payload&&n.payload<e.invMax&&e.inventory.splice(n.payload,1)},buyOrSellShopItem:function(e,n){e.itemBought[n.payload]=!e.itemBought[n.payload]},changeInvMax:function(e,n){e.invMax=n.payload,e.inventory=e.inventory.slice(0,e.invMax)},addMoney:function(e,n){e.money+=n.payload},clearClicked:function(e,n){delete e.clickedNumber,delete e.clickedShop},clickShop:function(e,n){e.clickedShop=n.payload},clickNumber:function(e,n){e.clickedNumber||(e.clickedNumber=[]),e.clickedNumber.push(n.payload)}}}),j=h.actions,y=j.addNumber,x=(j.removeNumberByIndex,j.buyOrSellShopItem),O=(j.changeInvMax,j.addMoney),k=(j.clearClicked,j.clickNumber,j.clickShop),g=h.reducer,S=function(){var e=s(),n=d((function(e){return e.save.itemBought})),t=d((function(e){return e.save.money})),c=d((function(e){return e.save.clickedShop}));var r=Object(a.jsx)("div",{id:"shopItems",children:p.map((function(r,o){return Object(a.jsx)(m,{content:r,isOpen:n[o],isClicked:o===c,onClick:function(){return function(c){if(n[c])e(k(c));else{var r=p[c].price;if(r>t)return;e(O(-r)),e(x(c))}}(o)}},o)}))});return Object(a.jsxs)("div",{id:"shop",children:[Object(a.jsx)("h3",{className:"title",children:"Shop"}),r]})};var N=function(){var e=s();return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(S,{}),Object(a.jsx)(v,{}),Object(a.jsx)("button",{onClick:function(){e(y(Math.floor(20*Math.random())))},children:"add number"}),Object(a.jsx)("button",{onClick:function(){localStorage.removeItem("notAMergeGame")},children:"reset localStorage"})]})};function M(e,n){var t;for(var c in e=null!==(t=e)&&void 0!==t?t:{},n){var r;if(Array.isArray(n[c]))e[c]=null!==(r=e[c])&&void 0!==r?r:[],I(e[c],n[c]);else if("object"===typeof n[c])e[c]=M(e[c],n[c]);else{var o;e[c]=n[c].constructor(null!==(o=e[c])&&void 0!==o?o:n[c])}}return e}function I(e,n){for(var t=0,c=n.length;t<c;t++)if(Array.isArray(n[t]))I(e[t],n[t]);else if("object"===typeof n[t])e[t]=M(e[t],n[t]);else{var r;e[t]=n[t].constructor(null!==(r=e[t])&&void 0!==r?r:n[t])}return e}var C=JSON.parse(localStorage.getItem("notAMergeGame")||"{}"),A=Object(b.a)({reducer:{save:g},preloadedState:M(C,{save:f})});A.subscribe((function(){localStorage.setItem("notAMergeGame",JSON.stringify(A.getState()))}));var B=A;i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(u.a,{store:B,children:Object(a.jsx)(N,{})})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e733781c.chunk.js.map