(this["webpackJsonpnot-a-merge-game"]=this["webpackJsonpnot-a-merge-game"]||[]).push([[0],{36:function(e,n,t){},66:function(e,n){},85:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),i=t(8),o=t.n(i),a=(t(36),t(11)),u=t(2),l=t.n(u),s=t(1),d=function(e){var n=e.reset,t=Object(r.useState)(0),c=Object(a.a)(t,2),i=c[0],o=c[1];return Object(s.jsxs)("button",{onClick:function(){if(5-i<=1)return n(),void o(0);o(i+1)},id:"resetButton",className:"plainButton",children:["Press ",5-i," more time to ",Object(s.jsx)("b",{children:"HARD RESET"})]})},v=t(10),p=function(e){return new l.a(e)},f=function(e,n){var t=p(e).toPrecision(5);return t.includes("e")?t.replace(/0+(?=e)/g,"").replace(/\.(?=e)/g,""):t.replace(/(\..*?)0+$/,"$1").replace(/\.$/,"")},m=[{paramCount:1,exp:"x+1",calc:function(e){return p(e).add(1).toString()},unlockPrice:"0",price:"0"},{paramCount:1,exp:"2x",calc:function(e){return p(e).mul(2).toString()},unlockPrice:"100",price:"10"},{paramCount:2,exp:"2x+y",calc:function(e,n){return p(e).mul(2).add(n).toString()},unlockPrice:"300",price:"40"},{paramCount:1,exp:"3x",calc:function(e){return p(e).mul(3).toString()},unlockPrice:"2000",price:"100"},{paramCount:1,exp:"x<sup>1.2</sup>",calc:function(e){return p(e).pow(1.2).toString()},unlockPrice:"100000",price:"5000"}],b=[{count:4,content:"Multiply 2 to starting number",price:function(e){return l.a.pow(10,e+1).mul(10).toString()},action:function(e,n){var t=n.startingNumber;return I(l.a.mul(t,2).toString())},sellAction:function(e,n){var t=n.startingNumber;return I(l.a.div(t,2).toString())}},{count:5,content:"Expand inventory",price:function(e){return l.a.pow(1e3,e).mul(30).toString()},action:function(e,n){var t=n.invMax;return O(t+1)},sellAction:function(e,n){var t=n.invMax;return O(t-1)}},{count:3,content:"Auto-select the greatest number",price:function(e){return l.a.pow(100,e).mul(5e3).toString()}},{count:1,content:"Auto-sell when inventory is full",price:function(){return"300000"}}],j={inventory:["1"],invMax:5,itemBought:new Array(m.length).fill(!1),money:"0",startingNumber:"1",upgrade:new Array(b.length).fill(0)},g=Object(v.b)({name:"save",initialState:j,reducers:{addNumber:function(e,n){e.invMax>e.inventory.length&&e.inventory.push(n.payload)},removeNumberByIndex:function(e,n){0<=n.payload&&n.payload<e.invMax&&e.inventory.splice(n.payload,1)},buyOrSellShopItem:function(e,n){e.itemBought[n.payload]=!e.itemBought[n.payload]},setInvMax:function(e,n){e.invMax=n.payload,e.inventory=e.inventory.slice(0,e.invMax)},setMoney:function(e,n){e.money=n.payload},clearClicked:function(e,n){delete e.clickedNumber,delete e.clickedShop},clickShop:function(e,n){e.clickedShop=n.payload},clickNumber:function(e,n){e.clickedNumber||(e.clickedNumber=[]),e.clickedNumber.push(n.payload)},hardReset:function(e){e.invMax=j.invMax,e.inventory=j.inventory,e.itemBought=j.itemBought,e.money=j.money,e.startingNumber=j.startingNumber,e.upgrade=j.upgrade,delete e.clickedNumber,delete e.clickedShop,localStorage.removeItem("notAMergeGame")},setStartingNumber:function(e,n){e.startingNumber=n.payload},buyUpgrade:function(e,n){e.upgrade[n.payload]+=1},sellUpgrade:function(e,n){e.upgrade[n.payload]-=1}}}),h=g.actions,x=h.addNumber,y=h.removeNumberByIndex,k=h.buyOrSellShopItem,O=h.setInvMax,N=h.setMoney,S=h.clearClicked,C=h.clickNumber,M=h.clickShop,A=h.hardReset,I=h.setStartingNumber,B=h.buyUpgrade,w=h.sellUpgrade,E=g.reducer,P=t(16),U=t(6),R=function(){return Object(U.b)()},G=U.c,J=function(){var e=G((function(e){return e.save.clickedShop})),n=G((function(e){return e.save.clickedNumber})),t=G((function(e){return e.save.inventory})),r=R();return function(c){var i,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;if(!(void 0===o||void 0!==n&&n.includes(c))){var a=m[o];if((null!==(i=null===n||void 0===n?void 0:n.length)&&void 0!==i?i:0)+1<a.paramCount)r(C(c));else{var u=n?[].concat(Object(P.a)(n),[c]).map((function(e){return t[e]})):[t[c]];r(x(a.calc.apply(a,Object(P.a)(u)))),r(S())}}}},L=t(31),$=t.n(L),D=function(e){var n=e.content,t=e.isOpen,r=e.isClicked,c=e.cannotClick,i=e.onClick;return Object(s.jsxs)("button",{className:"shopItem \n            ".concat(r?"clicked":"","\n            ").concat(c?"cannotClick":""),onClick:i,children:[t?Object(s.jsx)("span",{className:"exp",children:$()(n.exp)}):"",t?" - Cost : "+n.price:n.unlockPrice+" to unlock"]})},H=function(e){var n=e.content,t=e.onBuy,r=e.onSell,c=e.buyClassName,i=e.sellClassName;return Object(s.jsxs)("div",{className:"upgrade",children:[Object(s.jsx)("button",{className:c,onClick:t,children:n.split("\n").map((function(e,n){return Object(s.jsxs)("span",{children:[e,Object(s.jsx)("br",{})]},n)}))}),Object(s.jsx)("button",{className:i,onClick:r,children:"Sell"})]})},T=[{name:"shop",tab:function(){var e=R(),n=G((function(e){return e.save.itemBought})),t=G((function(e){return e.save.money})),r=G((function(e){return e.save.clickedShop})),c=G((function(e){return e.save.upgrade})),i=G((function(e){return e.save.inventory})),o=G((function(e){return e.save.invMax})),a=J();function u(u){var l=p(t);if(n[u]){if(r||i.length===o||i.length<m[u].paramCount)return;var s=p(m[u].price);if(s.gt(l))return;e(N(l.sub(s).toString())),e(M(u)),0!==c[2]&&setTimeout((function(){return a((e=i,0===e.length?{index:0,value:p(0)}:e.reduce((function(e,n,t){return p(e.value).lt(n)&&(e.index=t,e.value=n),e}),{index:0,value:e[0]})).index,u);var e}),250*(3-c[2]))}else{var d=p(m[u].unlockPrice);if(d.gt(l))return;e(N(l.sub(d).toString())),e(k(u))}}var l=Object(s.jsx)("div",{id:"shopItems",children:m.map((function(e,c){return Object(s.jsx)(D,{content:e,isOpen:n[c],isClicked:c===r,onClick:function(){return u(c)},cannotClick:void 0!==r||(n[c]?p(m[c].price).gt(t)||i.length===o||i.length<e.paramCount:p(m[c].unlockPrice).gt(t))},c)}))});return Object(s.jsxs)("div",{id:"shop",className:"tab",children:[Object(s.jsx)("h3",{className:"title",onClick:function(){return e(S())},children:"Shop - Press Here or Esc to Reset"}),l]})}},{name:"upgrades",tab:function(){var e=R(),n=G((function(e){return e.save.upgrade})),t=G((function(e){return e.save.money})),r=G((function(e){return e.save})),c=b.map((function(c,i){return Object(s.jsx)(H,{content:"".concat(c.content," - ").concat(n[i],"/").concat(c.count,"\nCost : ").concat(n[i]>=c.count?"LVL MAX":f(c.price(n[i]))),onBuy:function(){return function(c,i){if(!(n[i]>=c.count)){var o=p(c.price(n[i]));o.gt(t)||(e(N(p(t).sub(o).toString())),e(B(i)),c.action&&e(c.action(n[i],r)))}}(c,i)},buyClassName:"buyUpgrade ".concat(p(c.price(n[i])).gt(t)||n[i]===c.count?"cannotClick":""," ").concat(n[i]>=c.count?"max":""),onSell:function(){return function(c,i){if(!(n[i]<=0)){var o=p(c.price(n[i]-1));e(N(p(o).mul(.5).add(t).toString())),e(w(i)),c.sellAction&&e(c.sellAction(n[i],r))}}(c,i)},sellClassName:"sellUpgrade ".concat(n[i]<=0?"cannotClick":"")},i)}));return Object(s.jsxs)("div",{id:"upgrades",className:"tab",children:[Object(s.jsx)("h3",{className:"title",children:"Upgrades"}),Object(s.jsx)("div",{id:"upgradesGrid",children:c})]})}},{name:"option",tab:function(){var e=R();return Object(s.jsxs)("div",{id:"options",className:"tab",children:[Object(s.jsx)("h3",{className:"title",children:"Option"}),Object(s.jsx)(d,{reset:function(){e(A())}})]})}}],V=function(e){var n=e.content,t=e.cannotClick,r=e.onClick;return Object(s.jsx)("button",{className:"invItem ".concat(t?"cannotClick":""),onClick:r,children:n})},X=function(){var e=G((function(e){return e.save.inventory})),n=G((function(e){return e.save.invMax})),t=G((function(e){return e.save.clickedShop})),r=G((function(e){return e.save.clickedNumber})),c=G((function(e){return e.save.money})),i=J();return Object(s.jsxs)("div",{id:"inventory",className:"tab",children:[Object(s.jsxs)("h3",{className:"title",children:["Inventory - ",e.length," / ",n]}),Object(s.jsxs)("h3",{id:"resourceDisplayer",children:["Money : ",f(c)]}),Object(s.jsx)("div",{id:"invItems",children:e.map((function(e,n){return Object(s.jsx)(V,{content:f(e),cannotClick:void 0===t||void 0!==r&&r.includes(n),onClick:function(){return i(n)}},n)}))})]})};var q=function(){var e=R(),n=Object(r.useState)(0),t=Object(a.a)(n,2),c=t[0],i=t[1],o=G((function(e){return e.save.inventory})),u=G((function(e){return e.save.invMax})),d=G((function(e){return e.save.money})),v=G((function(e){return e.save.startingNumber})),f=Object(r.useCallback)((function(){for(var n=p("0"),t=o.length-1;t>0;t--)n=n.add(o[t]),e(y(t));e(y(0)),e(x(v)),e(N(l.a.add(d,n).toString()))}),[e,o,d,v]),m=G((function(e){return e.save.upgrade[3]}));Object(r.useEffect)((function(){1===m&&o.length===u&&f()}),[o,u,f,m]);var b=Object(s.jsx)("div",{id:"tabNavs",children:T.map((function(e,n){return Object(s.jsx)("span",{className:"tabNav ".concat(n===c?"selected":""),onClick:function(){return i(n)},children:e.name},n)}))}),j=T[c].tab,g=function(n){switch(n.key){case"Esc":case"Escape":e(S());break;default:return}};return Object(r.useEffect)((function(){return document.addEventListener("keydown",g),function(){document.removeEventListener("keydown",g)}})),Object(s.jsxs)("div",{className:"App",children:[b,Object(s.jsx)(j,{}),Object(s.jsx)(X,{}),Object(s.jsx)("div",{id:"bottomBar",children:Object(s.jsx)("button",{onClick:f,children:Object(s.jsx)("h2",{children:"Sell All"})})})]})};function z(e,n){var t;for(var r in e=null!==(t=e)&&void 0!==t?t:{},n){var c;if(Array.isArray(n[r]))e[r]=null!==(c=e[r])&&void 0!==c?c:[],F(e[r],n[r]);else if("object"===typeof n[r])e[r]=z(e[r],n[r]);else{var i;e[r]=n[r].constructor(null!==(i=e[r])&&void 0!==i?i:n[r])}}return e}function F(e,n){for(var t=0,r=n.length;t<r;t++)if(Array.isArray(n[t]))F(e[t],n[t]);else if("object"===typeof n[t])e[t]=z(e[t],n[t]);else{var c;e[t]=n[t].constructor(null!==(c=e[t])&&void 0!==c?c:n[t])}return e}var K=JSON.parse(localStorage.getItem("notAMergeGame")||"{}"),Q=Object(v.a)({reducer:{save:E},preloadedState:z(K,{save:j})});Q.subscribe((function(){localStorage.setItem("notAMergeGame",JSON.stringify(Q.getState()))}));var W=Q;o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(U.a,{store:W,children:Object(s.jsx)(q,{})})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.df2cf8f2.chunk.js.map