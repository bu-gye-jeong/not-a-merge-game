(this["webpackJsonpnot-a-merge-game"]=this["webpackJsonpnot-a-merge-game"]||[]).push([[0],{36:function(n,e,t){},66:function(n,e){},85:function(n,e,t){"use strict";t.r(e);var c=t(0),r=t.n(c),i=t(8),o=t.n(i),a=(t(36),t(11)),u=t(2),l=t.n(u),s=t(1),d=function(n){var e=n.reset,t=Object(c.useState)(0),r=Object(a.a)(t,2),i=r[0],o=r[1];return Object(s.jsxs)("button",{onClick:function(){if(5-i<=1)return e(),void o(0);o(i+1)},id:"resetButton",className:"plainButton",children:["Press ",5-i," more time to ",Object(s.jsx)("b",{children:"HARD RESET"})]})},p=t(10),f=function(n){return new l.a(n)},v=function(n,e){var t=f(n).toPrecision(5);return t.includes("e")?t.replace(/0+(?=e)/g,"").replace(/\.(?=e)/g,""):t.replace(/(\..*?)0+$/,"$1").replace(/\.$/,"")},b=[{paramCount:1,exp:"x+1",calc:function(n){return f(n).add(1).toString()},unlockPrice:"0",price:"0"},{paramCount:1,exp:"2x",calc:function(n){return f(n).mul(2).toString()},unlockPrice:"100",price:"10"},{paramCount:2,exp:"2x+y",calc:function(n,e){return f(n).mul(2).add(e).toString()},unlockPrice:"300",price:"40"},{paramCount:1,exp:"3x",calc:function(n){return f(n).mul(3).toString()},unlockPrice:"2000",price:"100"},{paramCount:1,exp:"x<sup>1.2</sup>",calc:function(n){return f(n).pow(1.2).toString()},unlockPrice:"100000",price:"5000"},{paramCount:1,exp:"3x<sup>1.1</sup>",calc:function(n){return f(n).pow(1.1).mul(3).toString()},unlockPrice:"1e+6",price:"50000"}],m=[{count:10,content:"Multiply 2 to starting number",price:function(n){return l.a.pow(10,1+[0,1,2,3,4,6,9,16,25,36,81][n]).mul(10).toString()},action:function(n,e){var t=e.startingNumber;return M(l.a.mul(t,2).toString())},sellAction:function(n,e){var t=e.startingNumber;return M(l.a.div(t,2).toString())}},{count:5,content:"Expand inventory",price:function(n){return l.a.pow(1e3,n).mul(30).toString()},action:function(n,e){var t=e.invMax;return O(t+1)},sellAction:function(n,e){var t=e.invMax;return O(t-1)}},{count:3,content:"Auto-select the greatest number",price:function(n){return l.a.pow(100,n).mul(5e3).toString()}},{count:1,content:"Auto-sell when inventory is full",price:function(){return"300000"}}],g={inventory:["1"],invMax:5,itemBought:new Array(b.length).fill(!1),money:"0",startingNumber:"1",upgrade:new Array(m.length).fill(0),ppUpgrade:new Array(m.length).fill(0),tabUnlocked:[!0,!0,!1,!0],pp:"0"},j=Object(p.b)({name:"save",initialState:g,reducers:{addNumber:function(n,e){n.invMax>n.inventory.length&&n.inventory.push(e.payload)},removeNumberByIndex:function(n,e){0<=e.payload&&e.payload<n.invMax&&n.inventory.splice(e.payload,1)},buyOrSellShopItem:function(n,e){n.itemBought[e.payload]=!n.itemBought[e.payload]},setInvMax:function(n,e){n.invMax=e.payload,n.inventory=n.inventory.slice(0,n.invMax)},setMoney:function(n,e){n.money=e.payload},clearClicked:function(n,e){delete n.clickedNumber,delete n.clickedShop},clickShop:function(n,e){n.clickedShop=e.payload},clickNumber:function(n,e){n.clickedNumber||(n.clickedNumber=[]),n.clickedNumber.push(e.payload)},resetProgress:function(n,e){n.invMax=g.invMax,n.inventory=g.inventory,n.itemBought=g.itemBought,n.money=g.money,n.startingNumber=g.startingNumber,n.upgrade=g.upgrade,n.ppUpgrade=g.ppUpgrade,delete n.clickedNumber,delete n.clickedShop,e.payload>=1&&(n.pp=g.pp),e.payload>=5&&(n.tabUnlocked=g.tabUnlocked,localStorage.removeItem("notAMergeGame"))},setStartingNumber:function(n,e){n.startingNumber=e.payload},buyUpgrade:function(n,e){n.upgrade[e.payload]+=1},sellUpgrade:function(n,e){n.upgrade[e.payload]-=1},buyPPUpgrade:function(n,e){n.ppUpgrade[e.payload]+=1},sellPPUpgrade:function(n,e){n.ppUpgrade[e.payload]-=1},unlockTab:function(n,e){n.tabUnlocked[e.payload]=!0},setPP:function(n,e){n.pp=e.payload}}}),h=j.actions,x=h.addNumber,y=h.removeNumberByIndex,k=h.buyOrSellShopItem,O=h.setInvMax,N=h.setMoney,S=h.clearClicked,C=h.clickNumber,P=h.clickShop,U=h.resetProgress,M=h.setStartingNumber,A=h.buyUpgrade,B=h.sellUpgrade,w=h.buyPPUpgrade,I=(h.sellPPUpgrade,h.unlockTab),E=h.setPP,L=j.reducer,G=t(16),T=t(6),J=function(){return Object(T.b)()},R=T.c,$=function(){var n=R((function(n){return n.save.clickedShop})),e=R((function(n){return n.save.clickedNumber})),t=R((function(n){return n.save.inventory})),c=J();return function(r){var i,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n;if(!(void 0===o||void 0!==e&&e.includes(r))){var a=b[o];if((null!==(i=null===e||void 0===e?void 0:e.length)&&void 0!==i?i:0)+1<a.paramCount)c(C(r));else{var u=e?[].concat(Object(G.a)(e),[r]).map((function(n){return t[n]})):[t[r]];c(x(a.calc.apply(a,Object(G.a)(u)))),c(S())}}}},H=function(n){var e=n.content,t=n.onBuy,c=n.onSell,r=n.buyClassName,i=n.sellClassName;return Object(s.jsxs)("div",{className:"upgrade",children:[Object(s.jsx)("button",{className:r,onClick:t,children:e.split("\n").map((function(n,e){return Object(s.jsxs)("span",{children:[n,Object(s.jsx)("br",{})]},e)}))}),(c||i)&&Object(s.jsx)("button",{className:i,onClick:c,children:"Sell"})]})},V=[{count:1,content:"Test Upgrade",price:function(){return"2"}}],X=t(31),D=t.n(X),q=function(n){var e=n.content,t=n.isOpen,c=n.isClicked,r=n.cannotClick,i=n.onClick;return Object(s.jsxs)("button",{className:"shopItem \n            ".concat(c?"clicked":"","\n            ").concat(r?"cannotClick":""),onClick:i,children:[t?Object(s.jsx)("span",{className:"exp",children:D()(e.exp)}):"",t?" - Cost : "+v(e.price):v(e.unlockPrice)+" to unlock"]})},z=[{name:"shop",tab:function(){var n=J(),e=R((function(n){return n.save.itemBought})),t=R((function(n){return n.save.money})),c=R((function(n){return n.save.clickedShop})),r=R((function(n){return n.save.upgrade})),i=R((function(n){return n.save.inventory})),o=R((function(n){return n.save.invMax})),a=$();function u(u){if(!c){var l=f(t);if(e[u]){if(i.length===o||i.length<b[u].paramCount)return;var s=f(b[u].price);if(s.gt(l))return;n(N(l.sub(s).toString())),n(P(u)),0!==r[2]&&setTimeout((function(){return a((n=i,0===n.length?{index:0,value:f(0)}:n.reduce((function(n,e,t){return f(n.value).lt(e)&&(n.index=t,n.value=e),n}),{index:0,value:n[0]})).index,u);var n}),250*(3-r[2]))}else{var d=f(b[u].unlockPrice);if(d.gt(l))return;n(N(l.sub(d).toString())),n(k(u))}}}var l=Object(s.jsx)("div",{id:"shopItems",children:b.map((function(n,r){return Object(s.jsx)(q,{content:n,isOpen:e[r],isClicked:r===c,onClick:function(){return u(r)},cannotClick:void 0!==c||(e[r]?f(b[r].price).gt(t)||i.length===o||i.length<n.paramCount:f(b[r].unlockPrice).gt(t))},r)}))});return Object(s.jsxs)("div",{id:"shop",className:"tab",children:[Object(s.jsx)("h3",{className:"title",onClick:function(){return n(S())},children:"Shop - Press Here or Esc to Reset"}),l]})}},{name:"upgrades",tab:function(){var n=J(),e=R((function(n){return n.save.upgrade})),t=R((function(n){return n.save.money})),c=R((function(n){return n.save})),r=m.map((function(r,i){return Object(s.jsx)(H,{content:"".concat(r.content," - ").concat(e[i],"/").concat(r.count,"\nCost : ").concat(e[i]>=r.count?"LVL MAX":v(r.price(e[i]))),onBuy:function(){return function(r,i){if(!(e[i]>=r.count)){var o=f(r.price(e[i]));o.gt(t)||(n(N(f(t).sub(o).toString())),n(A(i)),r.action&&n(r.action(e[i],c)))}}(r,i)},buyClassName:"buyUpgrade ".concat(f(r.price(e[i])).gt(t)||e[i]===r.count?"cannotClick":""," ").concat(e[i]>=r.count?"max":""),onSell:function(){return function(r,i){if(!(e[i]<=0)){var o=f(r.price(e[i]-1));n(N(f(o).mul(.5).add(t).toString())),n(B(i)),r.sellAction&&n(r.sellAction(e[i],c))}}(r,i)},sellClassName:"sellUpgrade ".concat(e[i]<=0?"cannotClick":"")},i)}));return Object(s.jsxs)("div",{id:"upgrades",className:"tab",children:[Object(s.jsx)("h3",{className:"title",children:"Upgrades"}),Object(s.jsx)("div",{id:"upgradesGrid",children:r})]})}},{name:"prestige",tab:function(){var n=J(),e=R((function(n){return n.save.money})),t=R((function(n){return n.save.pp})),c=R((function(n){return n.save.ppUpgrade})),r=R((function(n){return n.save})),i=function(){var n=f(e).log(10).log(2).floor();return n.isNaN()?0:n.toString()}(),o=V.map((function(e,i){return Object(s.jsx)(H,{content:"".concat(e.content," - ").concat(c[i],"/").concat(e.count,"\nCost : ").concat(c[i]>=e.count?"LVL MAX":v(e.price(c[i]))),onBuy:function(){return function(e,i){if(!(c[i]>=e.count)){var o=f(e.price(c[i]));o.gt(t)||(n(E(f(t).sub(o).toString())),n(w(i)),e.action&&n(e.action(c[i],r)))}}(e,i)},buyClassName:"ppUpgrade ".concat(f(e.price(c[i])).gt(t)||c[i]===e.count?"cannotClick":""," ").concat(c[i]>=e.count?"max":"")},i)}));return Object(s.jsxs)("div",{id:"prestige",className:"tab",children:[Object(s.jsx)("h3",{className:"title",children:"Prestige"}),Object(s.jsx)("button",{id:"prestigeButton",onClick:function(){f(e).gt("1e6")||(n(U(0)),n(E(f(t).add(i).toString())))},className:"".concat(f(e).gt("1e6")?"":"cannotClick"),children:f(e).gt("1e6")?"Prestige to get ".concat(i," PP"):"At least 1e+6 money to prestige"}),Object(s.jsxs)("div",{id:"ppUpgrades",children:[Object(s.jsx)("h4",{children:"Upgrades"}),Object(s.jsx)("div",{id:"ppUpgradeGrid",children:o})]})]})},condition:function(n){return f(n.money).gt("3e+5")}},{name:"option",tab:function(){var n=J();return Object(s.jsxs)("div",{id:"options",className:"tab",children:[Object(s.jsx)("h3",{className:"title",children:"Option"}),Object(s.jsx)(d,{reset:function(){n(U(1e3))}})]})}}],F=function(n){var e=n.content,t=n.cannotClick,c=n.onClick;return Object(s.jsx)("button",{className:"invItem ".concat(t?"cannotClick":""),onClick:c,children:e})},K=function(){var n=R((function(n){return n.save.inventory})),e=R((function(n){return n.save.invMax})),t=R((function(n){return n.save.clickedShop})),c=R((function(n){return n.save.clickedNumber})),r=R((function(n){return n.save.money})),i=R((function(n){return n.save.pp})),o=$();return Object(s.jsxs)("div",{id:"inventory",className:"tab",children:[Object(s.jsxs)("h3",{className:"title",children:["Inventory - ",n.length," / ",e]}),Object(s.jsxs)("div",{id:"displayer",children:[Object(s.jsxs)("h3",{className:"money",children:["Money : ",v(r)]}),Object(s.jsxs)("h3",{className:"pp",children:["PP : ",i]})]}),Object(s.jsx)("div",{id:"invItems",children:n.map((function(n,e){return Object(s.jsx)(F,{content:v(n),cannotClick:void 0===t||void 0!==c&&c.includes(e),onClick:function(){return o(e)}},e)}))})]})};var Q=function(){var n=J(),e=Object(c.useState)(0),t=Object(a.a)(e,2),r=t[0],i=t[1],o=R((function(n){return n.save})),u=R((function(n){return n.save.inventory})),d=R((function(n){return n.save.invMax})),p=R((function(n){return n.save.money})),v=R((function(n){return n.save.startingNumber})),b=R((function(n){return n.save.tabUnlocked})),m=Object(c.useCallback)((function(){for(var e=f("0"),t=u.length-1;t>0;t--)e=e.add(u[t]),n(y(t));n(y(0)),n(x(v)),n(N(l.a.add(p,e).toString()))}),[n,u,p,v]),g=R((function(n){return n.save.upgrade[3]}));Object(c.useEffect)((function(){1===g&&u.length===d&&m()}),[u,d,m,g]),Object(c.useEffect)((function(){z.forEach((function(e,t){b[t]||e.condition&&!e.condition(o)||n(I(t))}))}),[o,n,b]);var j=Object(s.jsx)("div",{id:"tabNavs",children:z.map((function(n,e){return!b[e]||Object(s.jsx)("span",{className:"tabNav ".concat(e===r?"selected":""),onClick:function(){return i(e)},children:n.name},e)}))}),h=z[r].tab,k=function(e){switch(e.key){case"Esc":case"Escape":n(S());break;default:return}};return Object(c.useEffect)((function(){return document.addEventListener("keydown",k),function(){document.removeEventListener("keydown",k)}})),Object(s.jsxs)("div",{className:"App",children:[j,Object(s.jsx)(h,{}),Object(s.jsx)(K,{}),Object(s.jsx)("div",{id:"bottomBar",children:Object(s.jsx)("button",{onClick:m,children:Object(s.jsx)("h2",{children:"Sell All"})})})]})};function W(n,e){var t;for(var c in n=null!==(t=n)&&void 0!==t?t:{},e){var r;if(Array.isArray(e[c]))n[c]=null!==(r=n[c])&&void 0!==r?r:[],Y(n[c],e[c]);else if("object"===typeof e[c])n[c]=W(n[c],e[c]);else{var i;n[c]=e[c].constructor(null!==(i=n[c])&&void 0!==i?i:e[c])}}return n}function Y(n,e){for(var t=0,c=e.length;t<c;t++)if(Array.isArray(e[t]))Y(n[t],e[t]);else if("object"===typeof e[t])n[t]=W(n[t],e[t]);else{var r;n[t]=e[t].constructor(null!==(r=n[t])&&void 0!==r?r:e[t])}return n}var Z=JSON.parse(localStorage.getItem("notAMergeGame")||"{}"),_=Object(p.a)({reducer:{save:L},preloadedState:W(Z,{save:g})});_.subscribe((function(){localStorage.setItem("notAMergeGame",JSON.stringify(_.getState()))}));var nn=_;o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(T.a,{store:nn,children:Object(s.jsx)(Q,{})})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.a0d51ca7.chunk.js.map