(this["webpackJsonpjs-band-final-task"]=this["webpackJsonpjs-band-final-task"]||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);n(52);var a=n(16);n(53);a.a.configure();var r=n(0),o=n.n(r),c=n(19),l=n.n(c),i=n(3),u=n(44),s=n(15),m=n(21),p=n(6),f=n(7),d=n(9),b=n(8),E=n(10),h=function(e){return e.session.username},g=function(e){return e.session.avatar},O=function(e){return e.session.token},v=function(e){return e.session.isAuthentificated},y=n(18),k=n.n(y);k.a.defaults.baseURL="https://js-band-api.glitch.me/";var j=function(e){k.a.defaults.headers.common.Authorization="Bearer ".concat(e)},S=function(e){return k.a.post("signin",e)},N="SIGN_IN_REQUEST",_="SIGN_IN_SUCCESS",P="SIGN_IN_ERROR",w="REFRESH_USER_REQUEST",R="REFRESH_USER_SUCCESS",L="REFRESH_USER_ERROR",B="HANDLE_LOGOUT",C="CLEAR_ERROR_MESSAGE",D=function(e){return{type:P,payload:e}},T=function(e){return function(t){t({type:N}),S(e).then((function(e){var n=e.data;return t({type:_,payload:n})})).catch((function(e){var n=e.message;return t(D(n))}))}},U=n(45),x=function(e){var t=e.component,n=e.token,a=Object(U.a)(e,["component","token"]);return o.a.createElement(m.b,Object.assign({},a,{render:function(e){return n?o.a.createElement(t,e):o.a.createElement(m.a,{to:"/signin"})}}))};x.defaultProps={token:null};var A=Object(i.b)((function(e){return{token:O(e)}}))(x),F=(n(25),function(e){return e.cartList}),M=function(e){return e.cartList.reduce((function(e,t){return e+t.count}),0)},G="OPEN_LOG_OUT_MODAL",K="CLOSE_LOG_OUT_MODAL",I=function(){return{type:K}};function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var $=o.a.createElement("path",{d:"m164.960938 300.003906h.023437c.019531 0 .039063-.003906.058594-.003906h271.957031c6.695312 0 12.582031-4.441406 14.421875-10.878906l60-210c1.292969-4.527344.386719-9.394532-2.445313-13.152344-2.835937-3.757812-7.269531-5.96875-11.976562-5.96875h-366.632812l-10.722657-48.253906c-1.527343-6.863282-7.613281-11.746094-14.644531-11.746094h-90c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h77.96875c1.898438 8.550781 51.3125 230.917969 54.15625 243.710938-15.941406 6.929687-27.125 22.824218-27.125 41.289062 0 24.8125 20.1875 45 45 45h272c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-272c-8.269531 0-15-6.730469-15-15 0-8.257812 6.707031-14.976562 14.960938-14.996094zm312.152343-210.003906-51.429687 180h-248.652344l-40-180zm0 0"}),Q=o.a.createElement("path",{d:"m150 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"}),J=o.a.createElement("path",{d:"m362 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"}),W=function(e){var t=e.svgRef,n=e.title,a=H(e,["svgRef","title"]);return o.a.createElement("svg",z({height:50,viewBox:"0 -31 512.00026 512",width:50,ref:t},a),n?o.a.createElement("title",null,n):null,$,Q,J)},V=o.a.forwardRef((function(e,t){return o.a.createElement(W,z({svgRef:t},e))})),X=(n.p,function(e){return e.isLogOutModalOpen}),Y=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).backdropRef=Object(r.createRef)(),n.handleKeyPress=function(e){var t=n.props.closeLogOutModal;"Escape"===e.code&&t()},n.handleBackdropClick=function(e){var t=n.props.closeLogOutModal,a=n.backdropRef.current;a&&e.target!==a||t()},n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props,t=e.closeLogOutModal,n=e.isLogOutModalOpen,a=e.handleLogout;return n&&o.a.createElement("div",{role:"dialog",ref:this.backdropRef,onClick:this.handleBackdropClick,className:"modal__backdrop"},o.a.createElement("section",{className:"modal"},o.a.createElement("p",null,"Are you sure you want to logout?"),o.a.createElement("div",{className:"modal__wrapper"},o.a.createElement("button",{type:"button",className:"btn base-btn",onClick:a},"Yes"),o.a.createElement("button",{type:"button",className:"btn base-btn",onClick:t},"No"))))}}]),t}(r.Component),q=Object(i.b)((function(e){return{isLogOutModalOpen:X(e)}}),(function(e){return{closeLogOutModal:function(){return e(I())},handleLogout:function(){e({type:B}),e(I())}}}))(Y),Z=function(e){var t=e.isAuthentificated,n=e.avatar,a=e.username,r=e.count,c=e.openLogOutModal;return o.a.createElement("header",{className:"page-header header"},o.a.createElement("div",{className:"header__flexcontainer"},o.a.createElement("h1",{className:"h2 text-left app-logo"},o.a.createElement(s.b,{to:"/books"},"JS BAND STORE / Roman Bezpalyi")),t&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"header-nav-wrapper"},o.a.createElement("nav",{className:"header-nav"},o.a.createElement("ul",{className:"list-unstyled header-nav-list"},o.a.createElement("li",null,o.a.createElement(s.b,{to:"/cart"},o.a.createElement("button",{type:"button",className:"cart-btn"},o.a.createElement(V,null))),r>0&&o.a.createElement("div",{className:"cart-count"},r)),o.a.createElement("li",null,o.a.createElement("button",{type:"button",className:"btn logout-btn",onClick:c},"Sign-Out")))),o.a.createElement("img",{alt:"avatar",src:n,width:"50",height:"50",className:"img-circle"}),o.a.createElement("p",{className:"h4"},a)),o.a.createElement(q,null))))};Z.defaultProps={avatar:"",username:""};var ee=Z,te={openLogOutModal:function(){return{type:G}}},ne=Object(i.b)((function(e){return{isAuthentificated:v(e),avatar:g(e),username:h(e),count:M(e)}}),te)(ee),ae=function(e){return e.errors.sessionError},re=function(e){return e.loadings.sessionLoading},oe=function(e){return e.loadings.getBooksLoading},ce=function(e){return e.loadings.getSelectedBookLoading},le=n(47),ie=n.n(le),ue=function(e){var t=e.className,n=document.documentElement.clientWidth,a=n>767?300:80,r=n>767?200:80;return o.a.createElement("div",{className:"loader-books ".concat(t)},o.a.createElement(ie.a,{type:"Oval",color:"#3d5575",height:r,width:a}))};ue.defaultProps={className:""};var se=ue,me=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(d.a)(this,Object(b.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=n.props,a=t.onSignin,r=t.signInError,o=n.state.username;o.length<4||o.length>16?r():a({username:o})},n.handleChange=function(e){var t=e.target.value;return n.setState({username:t})},n.state={username:""},n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.error,r=n.clearErrorMsg,o=this.state.username;a&&t.username!==o&&r()}},{key:"render",value:function(){var e=this.state.username,t=this.props,n=t.error,a=t.isLoading;return o.a.createElement(o.a.Fragment,null,a&&o.a.createElement("div",{className:"signin-loader"},o.a.createElement(se,null)),o.a.createElement("form",{onSubmit:this.handleSubmit,className:"signin-form"},o.a.createElement("label",{htmlFor:"username"},"Username",o.a.createElement("input",{type:"text",id:"username",value:e,onChange:this.handleChange,placeholder:"Type username",className:"form-control"})),n&&o.a.createElement("div",{className:"error-msg"},"Field is not valid."),o.a.createElement("button",{className:"btn base-btn signin-form-btn",type:"submit"},"Sign-In")))}}]),t}(r.Component);me.defaultProps={error:null};var pe=me,fe=function(e){var t=function(t){function n(){return Object(p.a)(this,n),Object(d.a)(this,Object(b.a)(n).apply(this,arguments))}return Object(E.a)(n,t),Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.authentificated,n=e.history;t&&n.replace("/books")}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.authentificated,n=e.location,a=e.history;t&&(n.state&&n.state.from?a.replace(n.state.from):a.replace("/books"))}},{key:"render",value:function(){return o.a.createElement(e,null)}}]),n}(r.Component);return Object(i.b)((function(e){return{authentificated:v(e)}}))(t)}(Object(i.b)((function(e){return{error:ae(e),isLoading:re(e)}}),(function(e){return{onSignin:function(t){return e(T(t))},signInError:function(){return e(D("Invalid field."))},clearErrorMsg:function(){return e({type:C})}}}))(pe)),de=n(48),be=n.n(de),Ee=function(e){var t=e.history,n=e.location;return o.a.createElement(o.a.Fragment,null,o.a.createElement(ne,null),o.a.createElement("main",{className:"main-content"},o.a.createElement("section",{className:"signin-page-section"},o.a.createElement("img",{alt:"JS BAND STORE LOGO",src:be.a,className:"logo"}),o.a.createElement(fe,{history:t,location:n}))))},he=function(e){return e.filters.title},ge=function(e){return e.filters.price},Oe="SET_SEARCH_QUERY",ve="SET_PRICE",ye=function(e){var t=e.title,n=e.price,a=e.onChange;return o.a.createElement("form",{className:"form-inline filter-form"},o.a.createElement("input",{className:"form-control col-xs-6 col-md-3",value:t,name:"title",type:"text",onChange:a,placeholder:"Search books by title"}),o.a.createElement("select",{className:"form-control col-xs-6 col-md-3",value:n,name:"price",onChange:a},o.a.createElement("option",{value:"Price"},"Price"),o.a.createElement("option",{value:"0"},"0-15$"),o.a.createElement("option",{value:"15"},"15-30$"),o.a.createElement("option",{value:"30"},"30$+")))},ke=Object(i.b)((function(e){return{title:he(e),price:ge(e)}}),(function(e){return{onChange:function(t){var n,a=t.target,r=a.value;switch(a.name){case"title":n=Oe;break;case"price":n=ve;break;default:return}e(function(e,t){return{payload:t,type:e}}(n,r))}}}))(ye),je=n(27),Se={DEFAULT:"Price",MAX:"30"},Ne=function(e,t,n){var a=Object(je.a)(e);return t&&(a=a.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}))),n!==Se.DEFAULT&&(a=n===Se.MAX?a.filter((function(e){return e.price>=Number(n)})):a.filter((function(e){return e.price>=Number(n)&&e.price<Number(n)+15}))),a},_e=function(e){return Ne(function(e){return e.books}(e),he(e),ge(e))};k.a.defaults.baseURL="https://js-band-api.glitch.me/";var Pe="GET_BOOKS_REQUEST",we="GET_BOOKS_SUCCESS",Re="GET_BOOKS_ERROR",Le=function(){return function(e,t){var n=O(t());n&&(e({type:Pe}),function(e){return j(e),k.a.get("books")}(n).then((function(t){var n=t.data;return e({type:we,payload:n})})).catch((function(t){var n=t.message;e({type:Re,payload:n}),a.a.error("".concat(n))})))}},Be=function(e){var t=e.cover,n=e.title,a=e.author,r=e.price,c=e.id;return o.a.createElement("section",{className:"thumbnail list-item"},o.a.createElement("img",{alt:"book cover",src:t,className:"img-thumbnail img-book"}),o.a.createElement("h3",{className:"h3 book-list-heading mb-1"},n),o.a.createElement("p",null,a),o.a.createElement("div",{className:"item-wrapper"},o.a.createElement("p",null,o.a.createElement("strong",null,"Price: ",r.toFixed(2),"$")),o.a.createElement(s.b,{to:"/books/".concat(c)},o.a.createElement("button",{type:"button",className:"btn list-item-btn"},"View"))))},Ce=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.getBooks;e.books.length||t()}},{key:"render",value:function(){var e=this.props,t=e.books,n=e.isLoading;return o.a.createElement(o.a.Fragment,null,n&&o.a.createElement(se,null),o.a.createElement("ul",{className:"list-unstyled container book-list"},t.map((function(e){return o.a.createElement("li",{key:e.id,className:"col-xs-12 col-sm-6 col-md-4"},o.a.createElement(Be,e))}))))}}]),t}(r.Component);Ce.defaultProps={books:[]};var De=Object(i.b)((function(e){return{books:_e(e),isLoading:oe(e)}}),(function(e){return{getBooks:function(){return e(Le())}}}))(Ce),Te=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(ne,null),o.a.createElement("main",{className:"main-content"},o.a.createElement(ke,null),o.a.createElement(De,null)))},Ue="GET_SELECTED_BOOK_REQUEST",xe="GET_SELECTED_BOOK_SUCCESS",Ae="GET_SELECTED_BOOK_ERROR",Fe="REMOVE_SELECTED_BOOK_FROM_STORE",Me=function(e){return e.selectedBook},Ge=function(){return o.a.createElement(s.b,{to:"/books"},o.a.createElement("button",{className:"btn base-btn",type:"button"},"Back to Booklist"))},Ke=function(e){var t=e.book;return t&&o.a.createElement("section",{className:"thumbnail book-description-section"},o.a.createElement("div",{className:"book-description-wrapper"},o.a.createElement("img",{alt:"book cover",src:t.cover,className:"img-thumbnail book-cover"}),o.a.createElement("div",{className:"description-text-wrapper"},o.a.createElement("h2",{className:"book-title"},t.title),o.a.createElement("p",null,o.a.createElement("strong",null,"Author:")," ",t.author),o.a.createElement("p",null,o.a.createElement("strong",null,"Level:")," ",t.level),o.a.createElement("p",null,o.a.createElement("strong",null,"Tags: "),t.tags.map((function(e){return o.a.createElement("span",{className:"label label-default tag",key:e},e)}))))),o.a.createElement("p",{className:"description"},t.description),o.a.createElement(Ge,null))};Ke.defaultProps={book:null};var Ie=Ke,ze=Object(i.b)((function(e){return{book:Me(e)}}))(Ie),He="ADD_BOOK_TO_CART",$e="PURCHASE_BOOKS_REQUEST",Qe="PURCHASE_BOOKS_SUCCESS",Je="PURCHASE_BOOKS_ERROR",We=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(d.a)(this,Object(b.a)(t).call(this,e))).handleChange=function(e){var t=e.target.value;if(!(Number(t)<0)){var a=n.props.book.price;n.setState({count:Number(t),totalPrice:a*Number(t)})}},n.handleSubmit=function(e){e.preventDefault();var t=n.state,r=t.count,o=t.totalPrice,c=n.props,l=c.book;(0,c.addBookToCart)({count:r,totalPrice:o,title:l.title,id:l.id}),a.a.success("Books have been successfully added to cart."),n.setState({count:0,totalPrice:0})},n.state={count:0,totalPrice:0},n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.state,t=e.count,n=e.totalPrice,a=this.props.book;return a&&o.a.createElement("aside",{className:"cart-aside"},o.a.createElement("h3",{className:"cart-aside__title"},"Order the book"),o.a.createElement("form",{onSubmit:this.handleSubmit,className:"cart-form"},o.a.createElement("div",{className:"cart-form__wrapper"},o.a.createElement("p",{className:"cart-form__subtitle"},"Price"),o.a.createElement("span",null,"$",a.price.toFixed(2))),o.a.createElement("label",{htmlFor:"count",className:"cart-form__wrapper"},"Count",o.a.createElement("input",{id:"count",type:"number",className:"form-control cart-form__input",value:t,min:0,max:a.count,onChange:this.handleChange})),o.a.createElement("div",{className:"cart-form__wrapper"},o.a.createElement("p",{className:"cart-form__subtitle"},"Total price"),o.a.createElement("span",null,"$",n.toFixed(2))),o.a.createElement("button",{type:"submit",className:"btn base-btn cart-form-btn",disabled:t<=0||t>a.count},"Add to cart")))}}]),t}(r.Component);We.defaultProps={book:null};var Ve={addBookToCart:function(e){return{type:He,payload:e}}},Xe=Object(i.b)((function(e){return{book:Me(e)}}),Ve)(We),Ye=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.getBook)(e.match.params.id)}},{key:"componentWillUnmount",value:function(){(0,this.props.removeSelectedBookFromStore)()}},{key:"render",value:function(){var e=this.props.isLoading;return o.a.createElement("section",{className:"book-page-section"},e&&o.a.createElement(se,{className:"loader-book"}),o.a.createElement(ze,null),o.a.createElement(Xe,null))}}]),t}(r.Component),qe={getBook:function(e){return function(t,n){var r=O(n());r&&(t({type:Ue}),function(e,t){return j(e),k.a.get("books/".concat(t))}(r,e).then((function(e){var n=e.data;return t({type:xe,payload:n})})).catch((function(e){var n=e.message;t({type:Ae,payload:n}),a.a.error("".concat(n))})))}},removeSelectedBookFromStore:function(){return{type:Fe}}},Ze=Object(i.b)((function(e){return{isLoading:ce(e)}}),qe)(Ye),et=function(e){var t=e.match;return o.a.createElement(o.a.Fragment,null,o.a.createElement(ne,null),o.a.createElement("main",{className:"main-content"},o.a.createElement(Ze,{match:t})))},tt=function(e){var t=e.books;return t.length>0&&o.a.createElement("table",{className:"table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Title"),o.a.createElement("th",null,"Count"),o.a.createElement("th",null,"Total price"))),o.a.createElement("tbody",null,t.map((function(e){return o.a.createElement("tr",{key:e.id},o.a.createElement("td",null,e.title),o.a.createElement("td",null,e.count),o.a.createElement("td",null,"$",e.totalPrice.toFixed(2)))}))))};tt.defaultProps={books:[]};var nt=tt,at=function(e){var t=e.books,n=e.handlePurchase;return o.a.createElement("section",{className:"cart-page-section"},o.a.createElement("div",{className:"cart-page__btn-wrapper"},o.a.createElement(Ge,null),o.a.createElement("button",{type:"button",onClick:n,disabled:!t.length,className:"btn base-btn"},"Purchase")),!t.length&&o.a.createElement("div",{className:"cart-page__empty-wrapper"},o.a.createElement("h2",{className:"cart-page__empty-wrapper-text"},"Cart is empty...")),o.a.createElement(nt,{books:t}),t.length>0&&o.a.createElement("p",{className:"cart-page__total-price"},"Total price: $",Number(t.reduce((function(e,t){return e+t.totalPrice}),0)).toFixed(2)))};at.defaultProps={books:[]};var rt=at,ot={handlePurchase:function(){return function(e,t){var n=O(t());if(n){var r=F(t()),o=[];r.forEach((function(e){for(var t=0;t<e.count;t+=1)o.push(e.id)})),e({type:$e}),function(e,t){return j(e),k.a.post("purchase",t)}(n,{books:o}).then((function(t){var n=t.data;e({type:Qe}),a.a.success("".concat(n.message))})).catch((function(t){var n=t.message;e({type:Je,payload:n}),a.a.error("Oops... Something went wrong. Try again.")}))}}}},ct=Object(i.b)((function(e){return{books:F(e)}}),ot)(rt),lt=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(ne,null),o.a.createElement("main",{className:"main-content"},o.a.createElement(ct,null)))},it=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{className:"h1 text-center not-found-text--main"},"404"),o.a.createElement("h2",{className:"h1 text-center not-found-text"},"Oops... Page not found."))},ut=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.token,n=e.handleRefreshUser;t&&n()}},{key:"render",value:function(){return o.a.createElement(m.d,null,o.a.createElement(m.a,{exact:!0,from:"/",to:"/signin"}),o.a.createElement(m.b,{exact:!0,path:"/signin",component:Ee}),o.a.createElement(A,{exact:!0,path:"/books",component:Te}),o.a.createElement(A,{exact:!0,path:"/books/:id",component:et}),o.a.createElement(A,{exact:!0,path:"/cart",component:lt}),o.a.createElement(m.b,{path:"*",component:it}))}}]),t}(r.Component);ut.defaultProps={token:null};var st={handleRefreshUser:function(){return function(e,t){var n=O(t()),a=h(t());n&&a&&(e({type:w}),S({username:a}).then((function(t){var n=t.data;return e({type:R,payload:n})})).catch((function(t){var n=t.message;return e({type:L,payload:n})})))}}},mt=Object(i.b)((function(e){return{token:O(e)}}),st)(ut),pt=n(12),ft=(n(99),n(49)),dt=n(32),bt=n(50),Et=n.n(bt),ht=Object(pt.combineReducers)({username:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case _:return a.username;case B:return null;default:return e}},avatar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case _:case R:return a.avatar;case B:return null;default:return e}},token:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case _:return a.token;case B:return null;default:return e}},isAuthentificated:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case _:case R:return!0;case B:return!1;default:return e}}}),gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case we:return a;default:return e}},Ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case xe:return a;case Fe:return null;default:return e}},vt=n(20);function yt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function kt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?yt(Object(n),!0).forEach((function(t){Object(vt.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case He:var r=e.some((function(e){return e.id===a.id}));return r?e.map((function(e){return e.id===a.id?kt({},e,{count:e.count+a.count,totalPrice:e.totalPrice+a.totalPrice}):e})):[].concat(Object(je.a)(e),[a]);case Qe:return[];default:return e}},St=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case G:return!0;case K:return!1;default:return e}};function Nt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _t(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Nt(Object(n),!0).forEach((function(t){Object(vt.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Pt={title:"",price:Se.DEFAULT},wt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pt,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case Oe:return _t({},e,{title:a});case ve:return _t({},e,{price:a});default:return e}};function Rt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Lt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Rt(Object(n),!0).forEach((function(t){Object(vt.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Rt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Bt={sessionError:null,getBooksError:null,getSelectedBookError:null,purchaseBooksError:null},Ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Bt,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case P:case L:return Lt({},e,{sessionError:a});case Re:return Lt({},e,{getBooksError:a});case Ae:return Lt({},e,{getSelectedBookError:a});case Je:return Lt({},e,{purchaseBooksError:a});case _:case R:case C:return Lt({},e,{sessionError:null});case we:return Lt({},e,{getBooksError:null});case xe:return Lt({},e,{getSelectedBookError:null});case Qe:return Lt({},e,{purchaseBooksError:null});default:return e}};function Dt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Tt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Dt(Object(n),!0).forEach((function(t){Object(vt.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Dt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ut={sessionLoading:!1,getBooksLoading:!1,getSelectedBookLoading:!1,purchaseBooksLoading:!1},xt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ut,t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case N:case w:return Tt({},e,{sessionLoading:!0});case Pe:return Tt({},e,{getBooksLoading:!0});case Ue:return Tt({},e,{getSelectedBookLoading:!0});case $e:return Tt({},e,{purchaseBooksLoading:!0});case _:case R:case P:case L:return Tt({},e,{sessionLoading:!1});case we:case Re:return Tt({},e,{getBooksLoading:!1});case xe:case Ae:return Tt({},e,{getSelectedBookLoading:!1});case Qe:case Je:return Tt({},e,{purchaseBooksLoading:!1});default:return e}},At={key:"root",storage:Et.a,whitelist:["token","username"]},Ft=Object(pt.combineReducers)({session:Object(dt.a)(At,ht),books:gt,selectedBook:Ot,cartList:jt,isLogOutModalOpen:St,filters:wt,errors:Ct,loadings:xt}),Mt=[ft.a],Gt=pt.applyMiddleware.apply(void 0,Mt),Kt=Object(pt.createStore)(Ft,Gt),It=Object(dt.b)(Kt),zt=function(){return o.a.createElement(i.a,{store:Kt},o.a.createElement(u.a,{persistor:It},o.a.createElement(s.a,{basename:"/"},o.a.createElement(m.b,{component:mt}))))};l.a.render(o.a.createElement(zt,null),document.getElementById("root"))},48:function(e,t,n){e.exports=n.p+"static/media/JS_BAND_STORE.0fdbfd87.png"},51:function(e,t,n){e.exports=n(102)},52:function(e,t,n){}},[[51,1,2]]]);
//# sourceMappingURL=main.4adb5454.chunk.js.map