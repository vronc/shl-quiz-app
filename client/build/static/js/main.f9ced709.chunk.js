(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n(2),r=n.n(o),a=n(12),i=n.n(a),s=(n(23),n(13)),u=n(14),h=n(17),l=n(16),d=(n(24),n(15)),p=n.n(d),f=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={response:{}},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;p.a.get("/api/v1/say-something").then((function(e){var n=e.data;t.setState({response:n})}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Hello from the frontend!"}),Object(c.jsx)("h1",{children:this.state.response.body})]})}}]),n}(o.Component),j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),c(t),o(t),r(t),a(t)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),j()}},[[42,1,2]]]);
//# sourceMappingURL=main.f9ced709.chunk.js.map