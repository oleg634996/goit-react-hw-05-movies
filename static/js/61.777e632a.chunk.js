"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[61],{3025:function(t,e,n){n.d(e,{Hx:function(){return h},Tg:function(){return o},WK:function(){return d},eb:function(){return p},uV:function(){return f}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),s=n.n(u),i="d76d0790cc7bfcd2f7e0cb888f8ccbbc",o=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("\nhttps://api.themoviedb.org/3/trending/movie/week?api_key=".concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i,"&language=ru-Ru"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(i,"&language=ru-RU"));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-En&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},1061:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=n(8152),a=n(3504),c=n(6871),u=n(2791),s=n(3025),i=n(184);var o=function(){var t=(0,c.TH)();return console.log(t),(0,i.jsx)("button",{type:"button",children:" back"})};var p=function(){var t=(0,c.UO)().moviesId,e=(0,u.useState)([]),n=(0,r.Z)(e,2),p=n[0],f=n[1];(0,u.useEffect)((function(){(0,s.eb)(t).then(f)}),[t]);var h=p.title,d=p.poster_path,v=p.overview,l=p.id;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o,{}),(0,i.jsxs)("section",{className:"move-detail",children:[(0,i.jsx)("div",{children:(0,i.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w300").concat(d),alt:""})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:h}),(0,i.jsx)("h3",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430 "}),(0,i.jsx)("p",{children:v}),(0,i.jsx)("h4",{children:"\u0416\u0430\u043d\u0440\u044b"})]})]}),(0,i.jsx)(a.OL,{to:"".concat(l,"/cast"),children:"cast"}),(0,i.jsx)(a.OL,{to:"".concat(l,"/reviews"),children:"reviews"}),(0,i.jsx)(c.j3,{})]})}}}]);
//# sourceMappingURL=61.777e632a.chunk.js.map