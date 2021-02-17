(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t(0),i=t.n(c),a=t(23),o=t.n(a),l=(t(32),t(10)),u=t(5),s=t(2),b=t(6),d=t.n(b),g=t(3),f="pick teams",j="quiz ongoing",x="quiz result",E={BLUE:"#1c1d55",DARK_PURPLE:"#593C8F",LIGHT_PURPLE:"#7073C8",DISABLED_GRAY:"#666",GREEN:"#379392"};function h(){var e=Object(s.a)(["\n  color: white;\n  background: ",";\n  font-weight: bold;\n  width: 15%;\n  padding: 8px;\n  border-radius: 4px;\n  box-shadow: none;\n  font-size: 1em;\n  display: block;\n  border: none;\n  white-space: none;\n  margin: 0.25rem;\n\n  &:disabled {\n    background: #eee;\n    color: ",";\n  }\n"]);return h=function(){return e},e}var m=g.b.button(h(),(function(e){return e.selected?E.DARK_PURPLE:E.LIGHT_PURPLE}),E.DISABLED_GRAY);function A(){var e=Object(s.a)(["\n  color: ",";\n"]);return A=function(){return e},e}var C=g.b.h1(A(),E.BLUE);function I(){var e=Object(s.a)(["\n  padding: 1rem;\n  margin: 2rem;\n  animation: "," 1s linear infinite;\n  transform: translateZ(0);\n  //border-top: calc(","% - 22) solid blue;\n  border-top: 2px solid darkcyan;\n  border-right: 2px solid grey;\n  border-bottom: 2px solid darkcyan;\n  border-left: 4px solid cyan;\n  background: transparent;\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n"]);return I=function(){return e},e}function O(){var e=Object(s.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return O=function(){return e},e}var k=Object(g.c)(O()),p=g.b.div(I(),k,(function(e){return e.size}),(function(e){return e.size}),(function(e){return e.size}));function v(){var e=Object(s.a)(["\n  width: 90%;\n  background-color: #ffe3e3;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='400' cy='400' r='18.4%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffe3e3'/%3E%3Cstop offset='1' stop-color='%23dcebff'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='400' cy='400' r='61.4%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffe3e3'/%3E%3Cstop offset='1' stop-color='%23c7fcff'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='800'/%3E%3Cg %3E%3Cpath fill='url(%23b)' d='M998.7 439.2c1.7-26.5 1.7-52.7 0.1-78.5L401 399.9c0 0 0-0.1 0-0.1l587.6-116.9c-5.1-25.9-11.9-51.2-20.3-75.8L400.9 399.7c0 0 0-0.1 0-0.1l537.3-265c-11.6-23.5-24.8-46.2-39.3-67.9L400.8 399.5c0 0 0-0.1-0.1-0.1l450.4-395c-17.3-19.7-35.8-38.2-55.5-55.5l-395 450.4c0 0-0.1 0-0.1-0.1L733.4-99c-21.7-14.5-44.4-27.6-68-39.3l-265 537.4c0 0-0.1 0-0.1 0l192.6-567.4c-24.6-8.3-49.9-15.1-75.8-20.2L400.2 399c0 0-0.1 0-0.1 0l39.2-597.7c-26.5-1.7-52.7-1.7-78.5-0.1L399.9 399c0 0-0.1 0-0.1 0L282.9-188.6c-25.9 5.1-51.2 11.9-75.8 20.3l192.6 567.4c0 0-0.1 0-0.1 0l-265-537.3c-23.5 11.6-46.2 24.8-67.9 39.3l332.8 498.1c0 0-0.1 0-0.1 0.1L4.4-51.1C-15.3-33.9-33.8-15.3-51.1 4.4l450.4 395c0 0 0 0.1-0.1 0.1L-99 66.6c-14.5 21.7-27.6 44.4-39.3 68l537.4 265c0 0 0 0.1 0 0.1l-567.4-192.6c-8.3 24.6-15.1 49.9-20.2 75.8L399 399.8c0 0 0 0.1 0 0.1l-597.7-39.2c-1.7 26.5-1.7 52.7-0.1 78.5L399 400.1c0 0 0 0.1 0 0.1l-587.6 116.9c5.1 25.9 11.9 51.2 20.3 75.8l567.4-192.6c0 0 0 0.1 0 0.1l-537.3 265c11.6 23.5 24.8 46.2 39.3 67.9l498.1-332.8c0 0 0 0.1 0.1 0.1l-450.4 395c17.3 19.7 35.8 38.2 55.5 55.5l395-450.4c0 0 0.1 0 0.1 0.1L66.6 899c21.7 14.5 44.4 27.6 68 39.3l265-537.4c0 0 0.1 0 0.1 0L207.1 968.3c24.6 8.3 49.9 15.1 75.8 20.2L399.8 401c0 0 0.1 0 0.1 0l-39.2 597.7c26.5 1.7 52.7 1.7 78.5 0.1L400.1 401c0 0 0.1 0 0.1 0l116.9 587.6c25.9-5.1 51.2-11.9 75.8-20.3L400.3 400.9c0 0 0.1 0 0.1 0l265 537.3c23.5-11.6 46.2-24.8 67.9-39.3L400.5 400.8c0 0 0.1 0 0.1-0.1l395 450.4c19.7-17.3 38.2-35.8 55.5-55.5l-450.4-395c0 0 0-0.1 0.1-0.1L899 733.4c14.5-21.7 27.6-44.4 39.3-68l-537.4-265c0 0 0-0.1 0-0.1l567.4 192.6c8.3-24.6 15.1-49.9 20.2-75.8L401 400.2c0 0 0-0.1 0-0.1L998.7 439.2z'/%3E%3C/g%3E%3C/svg%3E\");\n  background-attachment: fixed;\n  background-size: cover;\n  border-radius: 10px;\n  display: flex;\n  flex-wrap: ",";\n  flex-direction: ",";\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  margin: 1rem;\n"]);return v=function(){return e},e}var Q=g.b.div(v(),(function(e){return e.flexWrap?e.flexWrap:"wrap"}),(function(e){return e.flexDirection?e.flexDirection:"row"}));function B(){var e=Object(s.a)(["\n  padding: 0.5em;\n  margin: 0.5em;\n  color: ",";\n  background: seashell;\n  border: none;\n  border-radius: 3px;\n"]);return B=function(){return e},e}var S=g.b.input(B(),(function(e){return e.inputColor||E.BLUE}));function P(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n"]);return P=function(){return e},e}var R=g.b.div(P());function y(){var e=Object(s.a)(["\n  src: ",';\n  background-color: "#DB5461";\n  border-radius: 10px;\n  box-shadow: 0 0 0 13px ',";\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  margin: 2rem;\n"]);return y=function(){return e},e}var w=g.b.img(y(),(function(e){return e.src}),E.BLUE);function D(){var e=Object(s.a)(["\n  flex: 100%;\n  background-color: ",";\n  margin: 2px;\n  height: 8px;\n\n  &:first-child {\n    border-top-left-radius: 3px;\n    border-bottom-left-radius: 3px;\n  }\n\n  &:last-child {\n    border-top-right-radius: 3px;\n    border-bottom-right-radius: 3px;\n  }\n"]);return D=function(){return e},e}function z(){var e=Object(s.a)(["\n  display: flex;\n  margin-bottom: 1rem;\n  height: 10px;\n"]);return z=function(){return e},e}function F(){var e=Object(s.a)(["\n  width: 95%;\n  margin: 1rem;\n"]);return F=function(){return e},e}var J={0:E.RED,1:E.GREEN,2:"lightgray"},L=g.b.div(F()),G=g.b.div(z()),U=g.b.div(D(),(function(e){return J[e.state]})),W=function(e){var n=e.handleSelectTeam,t=e.selectedTeams,i=Object(c.useState)(null),a=Object(u.a)(i,2),o=a[0],l=a[1];return Object(c.useEffect)((function(){d.a.get("/api/v1/get-teams").then((function(e){var n=e.data.body;l(n)}))}),[]),Object(r.jsx)(R,{children:Object(r.jsx)(Q,{children:Object(r.jsxs)(R,{children:[Object(r.jsx)("h1",{children:"Pick some teams!"}),Object(r.jsx)("p",{children:"All players from the selected teams will be included in the quiz."}),o?Object(r.jsx)(Q,{children:o.map((function(e,c){return Object(r.jsx)(m,{selected:t.includes(e.team_code),onClick:function(){return n(e.team_code)},children:e.team_code},c)}))}):Object(r.jsx)(p,{size:"2rem"})]})})})},M=function(e){var n=e.playerImg,t=e.playerName;e.playerNumber;return Object(r.jsxs)(Q,{flexDirection:"column",children:[Object(r.jsx)(w,{src:n,alt:"player"}),Object(r.jsxs)(C,{children:[t.first," ",t.last]}),!1]})};var q=function(e){var n=e.results;return Object(r.jsx)(R,{children:Object(r.jsx)(L,{children:Object(r.jsx)(G,{children:n.map((function(e,n){return Object(r.jsx)(U,{state:e},n)}))})})})},H=function(e){var n=e.teams,t=e.endQuiz,i=Object(c.useState)([]),a=Object(u.a)(i,2),o=a[0],s=a[1],b=Object(c.useState)(0),g=Object(u.a)(b,2),f=g[0],j=g[1],x=Object(c.useState)([]),E=Object(u.a)(x,2),h=E[0],m=E[1],A=Object(c.useState)(""),C=Object(u.a)(A,2),I=C[0],O=C[1],k=Object(c.useState)(0),v=Object(u.a)(k,2),B=v[0],P=v[1],y=function(){o.length<=f+1?t(h):j(f+1)};Object(c.useEffect)((function(){n.map((function(e){return d.a.get("/api/v1/get-players-by-team",{params:{team_code:e.trim()}}).then((function(e){if(!e.data.body)throw new Error("There was a problem fetching players.");var n=function(e){for(var n=(e=Object(l.a)(e)).length-1;n>0;n--){var t=Math.floor(Math.random()*(n+1)),r=[e[t],e[n]];e[n]=r[0],e[t]=r[1]}return e}(e.data.body);s(n)}))}))}),[n]),Object(c.useEffect)((function(){m(Array(o.length).fill(2))}),[o]);return Object(r.jsx)(R,{className:"Quiz",children:o.length?Object(r.jsxs)(R,{children:[Object(r.jsx)(M,{playerImg:o[f].player_image_url?o[f].player_image_url:"data:image/png;base64,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",playerName:{first:o[f].first_name,last:o[f].last_name},playerNumber:o[f].default_jersey}),Object(r.jsx)(Q,{children:Object(r.jsx)(q,{results:h})}),Object(r.jsxs)(Q,{flexWrap:"nowrap",children:["Player number:",Object(r.jsx)("form",{onSubmit:function(e){e&&(e.preventDefault(),function(){var e=B;I.replace(/^0+/,"")===o[f].default_jersey.toString()?(h[f]=1,P(e+1)):h[f]=0}(),O(""),y())},children:Object(r.jsx)(S,{onChange:function(e){O(e.target.value)},pattern:"[A-Za-z0-9]{1,50}",required:!0,value:I})})]})]}):Object(r.jsxs)(R,{children:[Object(r.jsx)(p,{size:"2rem"}),"Preparing your quiz..."]})})};function Y(){var e=Object(s.a)(["\nbody{\n  background: seashell;\n  min-height: 100vh;\n  margin: 0;\n  color: ",";\n  font-family: 'Trebuchet MS';\n  background-color: ",";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23007d8e' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23006688' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23004f7e' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%2300376d' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%231c1d55' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E\");\n  background-attachment: fixed;\n  background-size: cover;\n}\n"]);return Y=function(){return e},e}var K=Object(g.a)(Y(),E.BLUE,E.GREEN),N=function(){var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],i=n[1],a=Object(c.useState)(f),o=Object(u.a)(a,2),s=o[0],b=o[1],g=Object(c.useState)([]),E=Object(u.a)(g,2),h=E[0],A=E[1];Object(c.useEffect)((function(){d.a.get("/api/v1/connect-to-shl")}),[]);return Object(r.jsxs)(R,{style:{class:"row"},children:[Object(r.jsx)(K,{}),s===f&&Object(r.jsxs)(R,{children:[Object(r.jsx)(W,{handleSelectTeam:function(e){var n=t.filter((function(n){return n!==e}));i(n.length===t.length?[].concat(Object(l.a)(n),[e]):n)},selectedTeams:t}),Object(r.jsx)(m,{disabled:0===t.length,onClick:function(){b(j)},children:"Start"})]}),s===j&&Object(r.jsx)(H,{teams:t,endQuiz:function(e){A(e),b(x)}}),s===x&&Object(r.jsxs)(Q,{style:{height:"30em"},children:[Object(r.jsxs)("h1",{children:["Total Score:"," ",h.filter((function(e){return 1===e})).length+" / "+h.length," ","\ud83c\udf89"]}),Object(r.jsx)(R,{children:Object(r.jsx)(m,{onClick:function(){return i([]),A([]),void b(f)},children:"Re-Quiz"})})]})]})},X=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,51)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),r(e),c(e),i(e),a(e)}))};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root")),X()}},[[50,1,2]]]);
//# sourceMappingURL=main.872908c7.chunk.js.map