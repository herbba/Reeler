(this.webpackJsonpimdb2=this.webpackJsonpimdb2||[]).push([[0],{14:function(e,t,a){},27:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAAQElEQVRYhe3WUQ0AIAzE0I7gCLcgFmQcyfoMrF+XgborYKUDbjJgJI9/ESCpgJ0O6L2EEzjpCKk3hygeEH/LpQcVIwSt1p/6YAAAAABJRU5ErkJggg=="},30:function(e,t,a){e.exports=a(57)},57:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),l=a.n(r),s=a(9),i=a(4),o=Object(i.a)(),m=a(1),u=(a(14),a.p+"static/media/loader.488387b4.gif"),d=a.p+"static/media/logo.b21dc2dc.png",p=a(27),E=a.n(p),h=function(e){var t=e.isShowing,a=e.hide,n=e.register;return t?l.a.createPortal(c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"modal-overlay"}),c.a.createElement("div",{className:"modal-wrapper","aria-modal":!0,"aria-hidden":!0,tabIndex:-1,role:"dialog"},c.a.createElement("div",{className:"modal"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("img",{className:"modal-logo",src:d,alt:"logo"}),c.a.createElement("button",{type:"button",className:"modal-close-button","data-dismiss":"modal","aria-label":"Close",onClick:a},c.a.createElement("span",{className:"modal-span","aria-hidden":"true"},"\xd7"))),c.a.createElement("div",{className:"modal-email"},c.a.createElement("label",{className:"email-label",htmlFor:"email-input"}," ","Email"," "),c.a.createElement("input",{id:"email-input"})),c.a.createElement("div",{className:"modal-password"},c.a.createElement("label",{className:"password-label",htmlFor:"password-input"}," ","Password"," "),c.a.createElement("input",{id:"password-input"})),c.a.createElement("div",{className:"modal-confirm".concat(n?"":" hide")},c.a.createElement("label",{className:"confirm-label",htmlFor:"confirm-input"}," ","Confirm password"," "),c.a.createElement("input",{id:"confirm-input"})),c.a.createElement("div",{className:"modal-button".concat(n?" hide":"")},c.a.createElement("button",{id:"modal-login"},"Log in")),c.a.createElement("div",{className:"modal-button".concat(n?"":" hide")},c.a.createElement("button",{id:"modal-register"},"Register"))))),document.body):null},f=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),l=Object(m.a)(r,2),s=l[0],i=l[1];return{register:s,isShowing:a,toggle:function(e){i(!!e),c(!a)}}},b=a(8),g=a(3),y=a.n(g),v={cancelToken:y.a.CancelToken.source(),isCancel:function(e){return y.a.isCancel(e)}},N=function(e){return y.a.get("".concat("http://206.189.28.120:5000/search?q=").concat(e)).then((function(e){return e.data}))},j=function(e){var t=Object(n.useState)({}),a=Object(m.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(!1),p=Object(m.a)(i,2),g=p[0],y=p[1],j=Object(n.useState)(""),O=Object(m.a)(j,2),A=O[0],k=O[1],w=Object(n.useState)(!!o.location.search),S=Object(m.a)(w,2),C=S[0],x=S[1],I=Object(n.useState)(""),T=Object(m.a)(I,2),B=T[0],F=T[1],J=Object(n.useState)(o.location.search?decodeURI(o.location.search.substring(3)):""),L=Object(m.a)(J,2),R=L[0],M=L[1],Y=Object(n.useState)(!0),Q=Object(m.a)(Y,2),U=Q[0],q=Q[1],D=f(),K=D.isShowing,z=D.toggle,H=D.register;Object(n.useEffect)((function(){x(!!(o.location.pathname.includes("search")||o.location.pathname.includes("titles")||o.location.pathname.includes("names")))}),[]),Object(n.useEffect)((function(){}),[R]);var P=function(e){e&&(y(!0),x(!0),function(e){B&&B.cancel(),F(v.cancelToken),N(e).then((function(e){var t=e.results.length?"":"ei oo mit\xe4\xe4n muuta";l(e.results),k(t),y(!1),q(!0)})).catch((function(e){(v.isCancel(e)||e)&&(y(!1),k("EI L\xd6YTYNY DATAA"))}))}(e),q(!0))},V=function(e){"register"===e.currentTarget.id?z(!0):z(!1)};return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"header".concat(C?"-up":"-down")},c.a.createElement("div",{className:"header-left".concat(C?"-up":"-down")},c.a.createElement(b.a,{to:"/"},c.a.createElement("img",{className:"menu".concat(C?"":" hide"),src:E.a,alt:"menu",onClick:function(){y(!1),k(""),x(!1),l({}),M("")}}))),c.a.createElement("div",{className:"header-middle".concat(C?"-up":"-down")},c.a.createElement("div",{className:"".concat(C?"hide":"logo-text")},c.a.createElement("img",{className:"logo",src:d,alt:"Logo"}),c.a.createElement("p",{className:"text"},"Reel in the movies")),c.a.createElement("div",{className:"search-bar"},c.a.createElement("label",{className:"search-label",htmlFor:"search-input"},c.a.createElement("input",{type:"text",value:R,name:"query",id:"search-input".concat(C?"-up":"-down"),onChange:function(e){q(!1),M(e.target.value)},onKeyDown:function(e){return a=R,void("13"!==(t=e).keyCode&&"Enter"!==t.key||P(a));var t,a}}),c.a.createElement("button",{id:"search-button".concat(C?"-up":"-down"),onClick:function(){P(R)}},c.a.createElement("i",{className:"fa fa-search"}))))),c.a.createElement("div",{className:"header-right".concat(C?"-up":"-down")},c.a.createElement("button",{id:"register",onClick:V},"Register"),c.a.createElement("button",{id:"login",onClick:V},"Log in"))),c.a.createElement(h,{isShowing:K,hide:z,register:H}),A&&c.a.createElement("p",{className:"message"},A),c.a.createElement("img",{src:u,className:"search-loading ".concat(g?"show":"hide"),alt:"loader"}),U&&r.length?c.a.createElement(s.a,{to:{pathname:"/search?q=".concat(R),state:{results:r,visibility:4}}}):c.a.createElement(c.a.Fragment,null))},O=function(e){var t=Object(n.useState)({}),a=Object(m.a)(t,2),r=a[0],l=a[1];Object(n.useEffect)((function(){l(e.location.state)}),[e.location.state]);return c.a.createElement("div",{className:"movieContainer"},c.a.createElement("p",{className:"resultItem link",onClick:function(){return o.goBack()}},"Back"),c.a.createElement("div",{className:"movieHeader"},c.a.createElement("p",{className:"paddedText"},r.titletype),c.a.createElement("h1",{className:"paddedText"},r.primarytitle),r.endyear?c.a.createElement("h2",{className:"paddedText"},r.startyear," - ",r.endyear):c.a.createElement("h3",{className:"paddedText"},r.startyear),c.a.createElement("div",{className:"movieInfo"},function(){var e=r.runtimeminutes/60,t=Math.floor(e),a=60*(e-t),n=Math.round(a);return 0===t&&0===n?null:0===t&&0!==n?n+" min | ":0!==t&&0===n?t+" h | ":t+" h "+n+" min | "}(),r.genres?r.genres.join(", "):"")))},A=function(e){return y.a.get("".concat("http://206.189.28.120:5000/titles/").concat(e)).then((function(e){return e.data}))},k=function(e){var t=Object(n.useState)({}),a=Object(m.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)([]),i=Object(m.a)(s,2),u=i[0],d=i[1];Object(n.useEffect)((function(){l(e.location.state);var t=e.location.state.knownfortitles.map((function(e){return A(e)}));y.a.all(t).then(y.a.spread((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return d(t)})))}),[e.location.state]);return c.a.createElement("div",{className:"movieContainer"},c.a.createElement("p",{className:"resultItem link",onClick:function(){return o.goBack()}},"Back"),c.a.createElement("div",{className:"movieHeader"},c.a.createElement("h1",{className:"paddedText"},r.primaryname),c.a.createElement("p",{className:"paddedText"},r.primaryprofession?r.primaryprofession.replace(/,/g,", "):""),c.a.createElement("div",{className:"paddedText"},c.a.createElement("p",null,"Born: ",r.birthyear?r.birthyear:"unknown"),c.a.createElement("p",null,r.deathyear?"Died: "+r.deathyear:""))),c.a.createElement("div",null,c.a.createElement("h2",{className:"paddedText"},"Filmography"),c.a.createElement("ul",null,u?u.map((function(e){return c.a.createElement("li",{className:"filmography",key:e.tconst},c.a.createElement(b.a,{className:"filmography",to:{pathname:"/titles/".concat(e.tconst),state:{itemId:e.tconst}}},e.primarytitle))})):"")))},w=function(e){return y.a.get("".concat("http://206.189.28.120:5000/names/").concat(e)).then((function(e){return e.data}))},S=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)(4),i=Object(m.a)(s,2),o=i[0],d=i[1],p=Object(n.useState)(4),E=Object(m.a)(p,2),h=E[0],f=E[1],g=Object(n.useState)([]),v=Object(m.a)(g,2),N=v[0],j=v[1],O=Object(n.useState)([]),k=Object(m.a)(O,2),S=k[0],C=k[1],x=e.location.state.results?e.location.state.results.filter((function(e){return e.includes("tt")})):{},I=e.location.state.results?e.location.state.results.filter((function(e){return e.includes("nm")})):{};Object(n.useEffect)((function(){T(),B()}),[e.location.state.results]),Object(n.useEffect)((function(){T()}),[o]),Object(n.useEffect)((function(){B()}),[h]);var T=function(){j([]);var e=x.slice(0,o).map((function(e){return A(e)}));y.a.all(e).then(y.a.spread((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return j(t)}))),l(!1)},B=function(){C([]);var e=I.slice(0,h).map((function(e){return w(e)}));y.a.all(e).then(y.a.spread((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return C(t)}))).catch((function(e){return console.log("error",e)})),l(!1)},F=function(e,t,a,n){return c.a.createElement("div",null,c.a.createElement("h2",{className:"paddedText"},e),c.a.createElement("ul",null,function(e,t,a){return"Movies"===e?N.map((function(e){return c.a.createElement("li",{key:e.tconst},c.a.createElement(b.a,{to:{pathname:"".concat(a).concat(e.tconst),state:{endyear:e.endyear,genres:e.genres,isadult:e.isadult,originaltitle:e.originaltitle,primarytitle:e.primarytitle,runtimeminutes:e.runtimeminutes,startyear:e.startyear,tconst:e.tconst,titletype:e.titletype}}},c.a.createElement("p",{className:"resultItem link"},e.primarytitle," (",e.startyear,") ",e.titletype)))})):S.map((function(e){return c.a.createElement("li",{key:e.nconst},c.a.createElement(b.a,{to:{pathname:"".concat(a).concat(e.nconst),state:{birthyear:e.birthyear,deathyear:e.deathyear,knownfortitles:e.knownfortitles,nconst:e.nconst,primaryname:e.primaryname,primaryprofession:e.primaryprofession,itemId:e.const}}},c.a.createElement("p",{className:"resultItem link"},e.primaryname," (",e.birthyear,") ",e.primaryprofession)))}))}(e,0,n)),t&&t.length>a?c.a.createElement("p",{className:"resultItem link",onClick:function(){return function(e){l(!0),"Movies"===e?d(o+4):f(h+4)}(e)}},"More results"):c.a.createElement(c.a.Fragment,null))};return c.a.createElement("div",{className:"results"},c.a.createElement("img",{src:u,className:"search-loading ".concat(r?"show":"hide"),alt:"loader"}),F("Movies",x,o,"/titles/"),F("Actors",I,h,"/names/"))},C=function(){return c.a.createElement(s.c,{history:o},c.a.createElement(j,null),c.a.createElement(s.d,null,c.a.createElement(s.b,{exact:!0,path:"/search",component:S}),c.a.createElement(s.b,{exact:!0,path:"/search?q=:query",component:S}),c.a.createElement(s.b,{exact:!0,path:"/titles/:id",component:O}),c.a.createElement(s.b,{exact:!0,path:"/names/:id",component:k})))};l.a.render(c.a.createElement(C,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.35b1b2dc.chunk.js.map