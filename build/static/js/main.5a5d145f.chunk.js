(window.webpackJsonpnews_app=window.webpackJsonpnews_app||[]).push([[0],{23:function(e,t,n){e.exports=n(37)},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n.n(a),c=n(13),l=n(1),o=n.n(l),i=n(12),s=n.n(i),u=n(3),p=n(4),m=n(22),E=n(16),f={DOWNLOAD_FRESH_NEWS:"DOWNLOAD_FRESH_NEWS",UPDATE_RATING:"UPDATE_RATING",UPDATE_VIEWERS:"UPDATE_VIEWERS",FILTER_BY_TITLE:"FILTER_BY_TITLE",DOWNLOAD_ERROR:"DOWNLOAD_ERROR"};function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=Object(p.c)({FreshNews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.DOWNLOAD_FRESH_NEWS:return Object(E.a)(t.payload).sort((function(e,t){return new Date(t.publishedAt)-new Date(e.publishedAt)}));case f.UPDATE_RATING:return e.map((function(e){return e.newsID!==t.payload.newsID?e:w({},e,{like:t.payload.like})}));case f.UPDATE_VIEWERS:return e.map((function(e){return e.newsID!==t.payload.newsID?e:w({},e,{viewers:t.payload.viewers})}));case f.DOWNLOAD_ERROR:return{errorMessage:t.payload};default:return e}},FilterByTitle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return t.type===f.FILTER_BY_TITLE?t.payload:e}});var h=function(e,t,n){if(0===e.length)return t;for(var a=[],r=0;r<e.length;r++)for(var c=0;c<t.length;c++)if(e[r][n]===t[c][n]?(a.push(e[r]),r++):a.push(t[c]),a.length===e.length)return a;return a},O={NAME:"Maxim",SURNAME:"Polonsky",EMAIL:"mchp010nsky@gmail.com",TEL:"+375(29)286-18-00"},b="https://newsapi.org/v2/top-headlines?country=us&pageSize=5&"+"apiKey=".concat("8d8ee5d1a2b6469881df0144b6118048");var y=function(e){return function(t){return function(n){var a;console.groupCollapsed("dispatching",n.type);var r,c=e.getState();if(console.log("LOGGERS, prev state",c),console.log("LOGGERS, action",n),n.type===f.DOWNLOAD_FRESH_NEWS){var l=(r=n.payload,Array.isArray(r)?r.map((function(e){return Object.assign(e,{like:0,viewers:0,newsID:e.title||(new Date).toString()})})):Object.assign(r,{like:0,viewers:0,newsID:r.title||(new Date).toString()})),o=h(c.FreshNews,l,"newsID");return a=t({type:n.type,payload:o}),console.log("LOGGERS next state (for download)",e.getState()),console.groupEnd(),a}return a=t(n),console.log("LOGGERS next state (for update)",e.getState()),console.groupEnd(),a}}},D=function(e){return function(t){return function(n){console.log("saver action",n);var a=t(n);return console.log("saver - next store",e.getState()),localStorage.news_API=JSON.stringify(e.getState()),a}}},g=function(){return Object(p.e)(v,localStorage.news_API?JSON.parse(localStorage.news_API):[],Object(p.d)(Object(p.a)(y,D),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()))},N=function(e){return Array.isArray(e)?{type:f.DOWNLOAD_FRESH_NEWS,error:!1,payload:e}:{type:f.DOWNLOAD_ERROR,error:!0,payload:e}},k=function(e){return{type:f.FILTER_BY_TITLE,payload:e}},_=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new Request(b),e.next=4,fetch(t);case 4:if(200!==(n=e.sent).status){e.next=10;break}return e.next=8,n.json();case 8:return a=e.sent,e.abrupt("return",Object(E.a)(a.articles));case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),S=(n(34),n(35),n(6)),j=n(7),I=n(9),R=n(8),A=n(10),L=function(e){function t(e){var n;return Object(S.a)(this,t),(n=Object(I.a)(this,Object(R.a)(t).call(this,e))).state={date:new Date},n}return Object(A.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){var e=this.state.date.toLocaleDateString(),t=this.state.date.toLocaleTimeString();return o.a.createElement("span",null,"".concat(e," /  ").concat(t))}}]),t}(o.a.Component),T=function(e){function t(){return Object(S.a)(this,t),Object(I.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(j.a)(t,[{key:"findNews",value:function(){(0,this.props.onFindNews)(this.searchInput.value)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("input",{type:"text",name:"",className:"search",placeholder:"Search news",ref:function(t){return e.searchInput=t}}),o.a.createElement("button",{className:"submit-button",onClick:this.findNews.bind(this)},"Find News"))}}]),t}(o.a.Component),P=Object(u.b)((function(e){return{newsData:e.FreshNews}}),(function(e){return{onFindNews:function(t){e(k(t))}}}))(T),F=Object(u.b)((function(e){return{newsData:e.FreshNews}}),(function(e){return{onFindNews:function(t){e(k(t))}}}))((function(){return o.a.createElement("header",null,o.a.createElement("h2",null,"News App"),o.a.createElement(L,null),o.a.createElement(P,null))})),W=n(14),x=n(0),U=n(15),G=function(e){function t(e){var n;return Object(S.a)(this,t),(n=Object(I.a)(this,Object(R.a)(t).call(this,e))).state={like:e.like,clicked:!1,color:"#a5a5a5"},n.onRate=n.onRate.bind(Object(W.a)(n)),n}return Object(A.a)(t,e),Object(j.a)(t,[{key:"componentDidUpdate",value:function(e,t){var n=this.state.like,a=this.props.onLike;t.like!==n&&a(n)}},{key:"onRate",value:function(){var e=this.state,t=e.like;e.clicked?this.setState({like:t-1,clicked:!1,color:"#a5a5a5"}):this.setState({like:t+1,clicked:!0,color:"red"})}},{key:"render",value:function(){var e=this.state,t=e.like,n=e.color;return o.a.createElement("button",{className:"news-like-btn complementary",onClick:this.onRate},o.a.createElement(x.b.Provider,{value:{color:"".concat(n),className:"global-class-name",size:"1.5em"}},o.a.createElement("div",null,o.a.createElement(U.b,null))),o.a.createElement("span",null,t))}}]),t}(o.a.Component);G.defaultProps={like:0,onLike:{}};var V=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"views complementary"},o.a.createElement(x.b.Provider,{value:{color:"#a5a5a5",className:"global-class-name",size:"1.5em"}},o.a.createElement(U.a,null)),o.a.createElement("span",null,e.viewers)))},M=function(e){var t=e.newsID,n=e.viewers,a=e.onView,r=e.onLike,c=e.like,l=e.source,i=e.author,s=e.title,u=e.url,p=e.publishedAt,m=e.urlToImage,E=e.description;return o.a.createElement("article",{className:"news"},o.a.createElement("a",{href:u,onClick:function(){return a({newsID:t,viewers:n+1})},target:"_blank",rel:"noopener noreferrer"},o.a.createElement("figure",null,o.a.createElement("img",{src:m,className:"news-image",alt:"news"})),o.a.createElement("section",{className:"news-body"},o.a.createElement("h3",{className:"news-title"},s),o.a.createElement("p",null,E))),o.a.createElement("div",null,o.a.createElement("address",{className:"fs-italic"},"Author: ",i||l.name),o.a.createElement("span",{className:"fs-italic"},"Published at: ",new Date(p).toLocaleString())),o.a.createElement("div",{className:"complementary"},o.a.createElement(G,{like:c,onLike:function(e){return r({newsID:t,like:e})}}),o.a.createElement(V,{viewers:n})))};M.defaultProps={like:0,viewers:0,onLike:{},onView:{}};var B=M;n(36);var C=Object(u.b)((function(e){return{newsData:e.FreshNews.filter((function(t){return t.title.includes(e.FilterByTitle)}))}}),(function(e){return{onLike:function(t){var n;e((n=t,{type:f.UPDATE_RATING,payload:n}))},onView:function(t){var n;e((n=t,{type:f.UPDATE_VIEWERS,payload:n}))}}}))((function(e){var t=e.newsData,n=e.onLike,a=e.onView;return o.a.createElement("main",null,o.a.createElement("h1",{className:"visually-hidden"},"The News"),o.a.createElement("section",{className:"news-wrapper"},Array.isArray(t)?o.a.createElement("ul",{className:"news-list"},t.map((function(e,t){return o.a.createElement("li",{key:t},o.a.createElement(B,Object.assign({},e,{onLike:function(e){return n(e)},onView:function(e){return a(e)}})))}))):o.a.createElement("h3",null,t.errorMessage)))}));function H(){return o.a.createElement("footer",null,o.a.createElement("div",{className:"email"},"My contacts : ",o.a.createElement("span",null,O.EMAIL)))}var J=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(F,null),o.a.createElement(C,null),o.a.createElement(H,null))},X=g();function Y(){return(Y=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,X.dispatch(N(t));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){Y.apply(this,arguments)}(),s.a.render(o.a.createElement(u.a,{store:X},o.a.createElement(J,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.5a5d145f.chunk.js.map