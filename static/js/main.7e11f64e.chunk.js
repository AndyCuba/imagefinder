(this.webpackJsonpimagefinder=this.webpackJsonpimagefinder||[]).push([[0],{50:function(e,n,t){"use strict";t.r(n);var r=t(19),a=t.n(r),i=t(16),c=t(14),o=t(2),s=t(5),d=t(3),m=t(0),b=t(27),u=t(17),l=t(6),g=t(21),j=t.n(g),h=t(28);function p(e){var n=[];return null!==e?e.filter((function(e){return function(e){return-1===n.indexOf(e.id)&&(n.push(e.id),!0)}(e)})):e}var f,O,v,x,k="GET_DATA_REQUESTED",y="GET_DATA_SUCCEDED",w="GET_DATA_FAILED",I="ADD_PHOTO",E="REMOVE_PHOTO",D="SET_SEARCHFIELD",_=function(e){return e.data.bookmarkedImages},C=function(e){return e.data.recievedImages.photo},A=function(e){return e.data.searchfield},T=function(e){return e.data.recievedImages.total},N=function(){var e=Object(h.a)(j.a.mark((function e(n,t,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:k}),e.prev=1,e.abrupt("return",fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6a041a8baa24763cc5c4265e521b8e34&text=".concat(t,"&per_page=18&page=").concat(r,"&format=json&nojsoncallback=1")).then((function(e){return e.json()})).then((function(e){return n((t=e.photos,{type:y,payload:t}));var t})));case 5:e.prev=5,e.t0=e.catch(1),n((a=e.t0.message,{type:w,payload:a}));case 8:case 9:case"end":return e.stop()}var a}),e,null,[[1,5]])})));return function(n,t,r){return e.apply(this,arguments)}}(),P={recievedImages:{photo:[],total:"20"},bookmarkedImages:[],isFetching:!1,searchfield:"",error:null},R="CHANGE_PAGE",S=function(e){return e.pagination.pageNumber},F=function(e){return e.pagination.offset},L=function(e){return e.pagination.pageLimit},G={pageNumber:1,offset:0,pageLimit:9},H=function(){return Object(i.b)()},z=i.c,B=d.b.div(f||(f=Object(o.a)(["\n    height: 85vh;\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 6.25rem 1fr;\n    max-width: 70rem;\n"]))),J=d.b.div(O||(O=Object(o.a)(["\n   padding: 4rem;\n   @media (max-width: 30rem) {\n    padding: 4rem 1.5rem 1.5rem; \n    }\n"]))),M=d.b.form(v||(v=Object(o.a)(["\n    margin-bottom: 2rem;\n    max-width: 20rem;\n    height: 2rem;\n    input {\n        width: 100%;\n        height: 100%;\n        font-size: 1.5rem;\n    }\n"]))),U=d.b.div(x||(x=Object(o.a)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(9rem, 18rem));\n    justify-items: center;\n    grid-row-gap: 2rem;\n"]))),W=t(1);var Q,V,q,K=function(){var e=H(),n=z(C),t=z(A),r=z(S),a=z(T),i=z(L),c=z(F),o=z(_),s=Object(m.useRef)(null),d=function(n){var t;n.preventDefault(),s.current&&""!==s.current.value&&(e((t=s.current.value,{type:D,searchfield:t})),N(e,s.current.value,r))};return Object(W.jsxs)(B,{children:[Object(W.jsx)(re,{}),Object(W.jsxs)(J,{children:[Object(W.jsx)(M,{onSubmit:d,children:Object(W.jsx)("input",{ref:s,onChange:Object(b.debounce)(d,1500)})}),n[0]&&Object(W.jsx)(He,{pageLimit:i,searchfield:t,currentPageNumber:r,totalItemsCount:+a}),n[0]?Object(W.jsx)(U,{children:n.slice(c,c+i).map((function(e,n){return Object(W.jsx)(he,{title:e.title,farm:e.farm,server:e.server,id:e.id,secret:e.secret,bookmarkedImages:o},n)}))}):Object(W.jsx)("p",{children:"No images here. Would you try to search for anything else?"})]})]})},X=t.p+"static/media/cloud.041dd8a4.svg",Y=t.p+"static/media/bookmark.f386a8c0.svg",Z=d.b.div(Q||(Q=Object(o.a)(["\n    border-right: 0.25rem solid grey;\n    background: white;\n    width: 6.25rem;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    a {\n        margin-top: 1rem;\n    }\n    @media (max-width: 25rem) {\n        width: 5rem; \n    }\n"]))),$=Object(d.b)(c.b)(V||(V=Object(o.a)(["\n    width: 3.5rem;\n    height: 3.5rem;\n    background: url(",") no-repeat center/80%;\n    cursor: pointer;\n    &:active {\n        transform: scale(0.95);\n    }\n    border: ",";\n    border-radius: 0.3rem;\n"])),X,(function(e){return"/"===e.pathname?"0.15rem solid black":"none"})),ee=Object(d.b)(c.b)(q||(q=Object(o.a)(["\n    width: 3.5rem;\n    height: 3.5rem;\n    background: url(",") no-repeat center/80%;\n    cursor: pointer;\n    &:active {\n        transform: scale(0.95);\n    }\n    border: ",";\n    border-radius: 0.3rem;\n"])),Y,(function(e){return"/bookmarks"===e.pathname?"0.15rem solid black":"none"}));var ne,te,re=function(){var e=Object(s.f)().pathname;return Object(W.jsxs)(Z,{children:[Object(W.jsx)($,{to:"/",pathname:e}),Object(W.jsx)(ee,{to:"/bookmarks",pathname:e})]})},ae=d.b.div(ne||(ne=Object(o.a)(["\n    height: 120vh;\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 6.25rem 1fr;\n    max-width: 70rem;\n"]))),ie=d.b.div(te||(te=Object(o.a)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(9rem, 20rem));\n    justify-items: center;\n    grid-row-gap: 2rem;\n"])));var ce,oe,se,de=function(){var e=z(_);return Object(W.jsxs)(ae,{children:[Object(W.jsx)(re,{}),e[0]&&Object(W.jsx)(ie,{children:e.map((function(n,t){return Object(W.jsx)(he,{title:n.title,farm:n.farm,server:n.server,id:n.id,secret:n.secret,bookmarkedImages:e},t)}))})]})},me=d.b.div(ce||(ce=Object(o.a)(["\n    border: 0.06rem solid gray;\n    padding: 1rem;\n    border-radius: 0.3rem;\n    background: linear-gradient(42deg, rgba(236,235,247,1) 0%, rgba(165,230,237,1) 45%, rgba(0,212,255,1) 100%);\n    max-height: 20rem;\n    text-align: center;\n"]))),be=d.b.div(oe||(oe=Object(o.a)(["\n    width: 15rem;\n    height: 15rem;\n    background: url(",") \n        center/cover;\n    transition: 1s transform;\n    border-radius: 0.3rem;\n    cursor: pointer;\n    &:hover{\n        transform: scale(1.1);\n    }\n    margin-bottom: 1rem;\n    @media (max-width: 26rem) {\n        width: 13rem;\n        height: 13rem;\n    }\n"])),(function(e){return"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg")})),ue=d.b.button(se||(se=Object(o.a)(["\n    cursor: pointer;\n    height: 2rem;\n    width: 10rem;\n"])));var le,ge,je,he=function(e){var n=e.farm,t=e.server,r=e.id,a=e.secret,i=e.title,c=e.bookmarkedImages,o=H(),s=-1!==c.findIndex((function(e){return e.id===r}));return Object(W.jsxs)(me,{children:[Object(W.jsx)(be,{farm:n,server:t,id:r,secret:a,title:i}),Object(W.jsx)(ue,{onClick:function(e){if(e.preventDefault(),null!==e.target){var n=e.target.previousSibling;o(s?function(e){return{type:E,payload:e}}(n.id):function(e){return{type:I,payload:e}}(n.id))}},children:s?"Remove it":"Bookmark it"})]})},pe=d.b.footer(le||(le=Object(o.a)(["\n    background: linear-gradient(42deg, rgba(51,41,224,1) 10%, rgba(12,183,209,1) 60%, rgba(0,212,255,1) 100%);\n    width: 100%;\n    position: fixed;\n    bottom: 0;\n"]))),fe=d.b.h2(ge||(ge=Object(o.a)(["\n    color: white;\n    justify-self: start;\n    padding-left: 0.5rem;\n"]))),Oe=d.b.div(je||(je=Object(o.a)(["\n    max-width: 70rem;\n    height: 4rem;\n    margin: auto;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(35%, 40%));\n    align-items: center;\n"])));var ve,xe,ke,ye,we=function(){return Object(W.jsx)(pe,{children:Object(W.jsx)(Oe,{children:Object(W.jsx)(fe,{children:"Copyrights"})})})},Ie=t.p+"static/media/profileicon.1832bba4.svg",Ee=d.b.header(ve||(ve=Object(o.a)(["\n    background: linear-gradient(42deg, rgba(51,41,224,1) 10%, rgba(12,183,209,1) 33%, rgba(0,212,255,1) 100%);\n    color: white;\n    width: 100%;\n"]))),De=d.b.h1(xe||(xe=Object(o.a)(["\n    justify-self: start;\n    padding-left: 0.5rem;\n    @media (max-width: 32rem) {\n        font-size: 1.5rem; \n    }\n"]))),_e=d.b.div(ke||(ke=Object(o.a)(["\n    width: 2.5rem;\n    height: 2.5rem;    \n    border: 0.06rem solid white;\n    border-radius: 50%;\n    background: url(",") center/cover;\n    justify-self: end;\n    cursor: pointer;\n"])),Ie),Ce=d.b.div(ye||(ye=Object(o.a)(["\n    max-width: 70rem;\n    height: 4rem;\n    margin: auto;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(35%, 40%));\n    align-items: center;\n"])));var Ae,Te,Ne=function(){return Object(W.jsx)(Ee,{children:Object(W.jsxs)(Ce,{children:[Object(W.jsx)(De,{children:"Image Finder"}),Object(W.jsx)(_e,{})]})})},Pe=t(32),Re=t.n(Pe),Se=Object(d.c)(Ae||(Ae=Object(o.a)(["\n    from {\n        transform: scale(1);\n    }\n    to {\n        transform: scale(1.7);\n    }\n"]))),Fe=d.b.div(Te||(Te=Object(o.a)(["\n    position: absolute;\n    top: 20%;\n    right: 35%;\n    transform: translate(50%);\n    .pagination {\n        display: flex;\n        flex-direction: row;\n        transition: all 1s;\n    }\n    .active, .active > a, .active > li {\n        transform: scale(1.7);\n        color: black;\n        animation: 0.5s "," linear;\n    }\n    li {\n        list-style: none;\n        padding: 0.1rem 0.5rem;\n        margin: 0.5rem;\n        cursor: pointer;\n        border: 1px solid black;\n        &: last-child, &: first-child {\n            display:none;\n        }\n        &: hover {\n            a {\n                color: black;\n            }  \n        }\n    }\n    a {\n        text-decoration: none;\n        color: grey;\n        font-weight: bold;\n    }\n    @media (max-width: 60rem) {\n        top: 12%; \n    }\n"])),Se);var Le,Ge,He=function(e){var n=H(),t=e.currentPageNumber,r=e.totalItemsCount,a=e.pageLimit,i=e.searchfield;return Object(W.jsx)(Fe,{children:Object(W.jsx)(Re.a,{activePage:t,itemsCountPerPage:a,totalItemsCount:r,pageRangeDisplayed:3,onChange:function(e){var r;e!==t&&(n({type:R,pageNumber:r=e,offset:9*(r-1)}),N(n,i,t))}})})},ze=Object(d.a)(Le||(Le=Object(o.a)(["\n  * {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n"]))),Be=d.b.div(Ge||(Ge=Object(o.a)(["\n"])));var Je=function(){return Object(W.jsxs)(Be,{children:[Object(W.jsx)(ze,{}),Object(W.jsx)(Ne,{}),Object(W.jsxs)(s.c,{children:[Object(W.jsx)(s.a,{exact:!0,path:"/",component:K}),Object(W.jsx)(s.a,{exact:!0,path:"/bookmarks",component:de})]}),Object(W.jsx)(we,{})]})},Me=t(15),Ue=t(33),We=t(34),Qe=Object(Me.combineReducers)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case k:return Object(l.a)(Object(l.a)({},e),{},{isFetching:!0});case y:return Object(l.a)(Object(l.a)({},e),{},{recievedImages:Object(l.a)(Object(l.a)(Object(l.a)({},e.recievedImages),n.payload),{},{photo:p([].concat(Object(u.a)(e.recievedImages.photo),Object(u.a)(n.payload.photo)))}),isFetching:!1,error:null});case w:return Object(l.a)(Object(l.a)({},e),{},{error:n.payload});case D:return Object(l.a)(Object(l.a)({},e),{},{searchfield:n.searchfield,recievedImages:P.recievedImages});case I:return Object(l.a)(Object(l.a)({},e),{},{bookmarkedImages:[].concat(Object(u.a)(e.bookmarkedImages),[e.recievedImages.photo[e.recievedImages.photo.findIndex((function(e){return e.id===n.payload}))]])});case E:return Object(l.a)(Object(l.a)({},e),{},{bookmarkedImages:Object(u.a)(e.bookmarkedImages.filter((function(e){return e.id!==n.payload})))});default:return Object(l.a)({},e)}},pagination:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case R:return Object(l.a)(Object(l.a)({},e),{},{pageNumber:n.pageNumber,offset:n.offset});case D:return G;default:return Object(l.a)({},e)}}}),Ve=[Object(Me.applyMiddleware)(We.a)],qe=Ue.composeWithDevTools.apply(void 0,Ve),Ke=Object(Me.createStore)(Qe,qe);a.a.render(Object(W.jsx)(i.a,{store:Ke,children:Object(W.jsx)(c.a,{basename:"/imagefinder",children:Object(W.jsx)(Je,{})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.7e11f64e.chunk.js.map