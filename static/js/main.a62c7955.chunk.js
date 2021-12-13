(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(8),s=t.n(r),l=(t(13),t(7)),i=t(4),o=t(2),j=(t(14),t(0));function u(e){var a=null;return 1==e.cell&&(a=Object(j.jsx)("span",{children:"\u2716"})),2==e.cell&&(a=Object(j.jsx)("span",{children:"\u25cb"})),Object(j.jsx)("div",{className:"cell",onClick:function(){e.moveHandler(e.rowIndex,e.columnIndex)},children:a})}function m(e){var a=e.winLinePosition;return a?"main-diagonal"==a[0]||"reverse-diagonal"==a[0]?Object(j.jsx)("div",{className:"win-line__"+a[0]}):"row"==a[0]?Object(j.jsx)("div",{style:{top:41+86*a[1]+"px"},className:"win-line__row"}):"column"==a[0]?Object(j.jsx)("div",{style:{left:35+83*a[1]+"px"},className:"win-line__column"}):void 0:null}function d(e){return Object(j.jsxs)("div",{className:"game-arena__wrapper",children:[Object(j.jsx)(m,{winLinePosition:e.winLinePosition}),Object(j.jsx)("div",{className:"game-arena",children:e.gameArena.map((function(a,t){return Object(j.jsx)("div",{className:"row",children:a.map((function(a,n){return Object(j.jsx)(u,{cell:a,rowIndex:t,columnIndex:n,moveHandler:e.moveHandler},n)}))},t)}))})]})}function b(e){return Object(j.jsxs)("div",{className:"score",children:[Object(j.jsx)("h1",{className:"score__title",children:"Score"}),e.players.map((function(a,t){var n=["score__data"];return t==e.activePlayer&&n.push("score__data--active"),Object(j.jsxs)("div",{className:n.join(" "),children:[a.name,": ",a.score]},t)}))]})}function v(e){var a=["modal"];return e.show&&a.push("modal--active"),Object(j.jsxs)(c.a.Fragment,{children:[!!e.show&&Object(j.jsx)("div",{className:"backdrop",onClick:e.close}),Object(j.jsx)("div",{className:a.join(" "),children:e.children})]})}function O(e){return Object(j.jsx)("button",{className:"start-game-button",onClick:e.startGame,children:"Start game!"})}function f(e){var a=Object(n.useRef)(null),t=Object(n.useRef)(null);Object(n.useEffect)((function(){a.current.value=e.name1,t.current.value=e.name2}),[]);return Object(j.jsx)(v,{show:e.show,close:e.close,children:Object(j.jsxs)("div",{className:"start-modal",children:[Object(j.jsxs)("div",{className:"start-modal__wrapper",children:["Player1 name:",Object(j.jsx)("input",{className:"start-modal__input",ref:a})]}),Object(j.jsxs)("div",{className:"start-modal__wrapper",children:["Player2 name:",Object(j.jsx)("input",{className:"start-modal__input",ref:t})]}),Object(j.jsx)(O,{startGame:function(){e.setPlayerNames(a.current.value,t.current.value),e.close()}})]})})}function x(e){var a=null;switch(e.endGameResult){case 1:a=e.players[0].name+" win!!!";break;case 2:a=e.players[1].name+" win!!!";break;case 3:a="Draw!!!"}return Object(j.jsx)(v,{show:e.endGameResult,close:e.startGame,children:Object(j.jsxs)("div",{className:"end-game-modal",children:[Object(j.jsx)("div",{className:"end-game-modal__text",children:a}),Object(j.jsx)(O,{startGame:e.startGame})]})})}var h=[[0,0,0],[0,0,0],[0,0,0]],p=function(e,a){for(var t=0;t<3;t++){var n=!0,c=void 0;for(c=0;c<3;c++)n*=e[t][c]==a;if(n)return["row",t]}for(var r=0;r<3;r++){var s=!0,l=void 0;for(l=0;l<3;l++)s*=e[l][r]==a;if(s)return["column",r]}for(var i=!0,o=0;o<3;o++)i*=e[o][o]==a;if(i)return["main-diagonal"];i=!0;for(var j=0;j<3;j++)i*=e[2-j][j]==a;return i?["reverse-diagonal"]:void 0};var w=function(){var e=Object(n.useState)(h),a=Object(o.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)([{name:"player1",score:0},{name:"player2",score:0}]),s=Object(o.a)(r,2),u=s[0],m=s[1],v=Object(n.useState)([1,2]),O=Object(o.a)(v,2),w=O[0],_=O[1],N=Object(n.useState)(0),y=Object(o.a)(N,2),g=y[0],G=y[1],P=Object(n.useState)(null),S=Object(o.a)(P,2),k=S[0],I=S[1],R=Object(n.useState)(!1),H=Object(o.a)(R,2),L=H[0],A=H[1],C=Object(n.useState)(0),E=Object(o.a)(C,2),J=E[0],B=E[1];Object(n.useEffect)((function(){A(!0)}),[]);var D=function(){c(h);var e=Object(i.a)(w).reverse();_(e),G(1==e[0]?0:1),B(0),I(null)};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{gameArena:t,moveHandler:function(e,a){for(var n=[Object(i.a)(t[0]),Object(i.a)(t[1]),Object(i.a)(t[2])];!n[e][a]&&!J;){n[e][a]=w[g];var r=p(n,w[g]);if(r){var s=Object(i.a)(u);s[g].score+=1,I(r),m(s),c(n),B(g+1)}else{var o,j=!1,d=Object(l.a)(n);try{for(d.s();!(o=d.n()).done;){var b,v=o.value,O=Object(l.a)(v);try{for(O.s();!(b=O.n()).done;){b.value||(j=!0)}}catch(f){O.e(f)}finally{O.f()}}}catch(f){d.e(f)}finally{d.f()}j||B(3),c(n)}G(g?0:1)}},winLinePosition:k}),Object(j.jsx)(b,{players:u,activePlayer:g}),Object(j.jsx)(f,{name1:u[0].name,name2:u[1].name,setPlayerNames:function(e,a){m([{name:e,score:0},{name:a,score:0}])},startGame:D,show:L,close:function(){A(!1)}}),Object(j.jsx)(x,{endGameResult:J,startGame:D,players:u})]})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a62c7955.chunk.js.map