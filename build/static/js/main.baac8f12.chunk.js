(this["webpackJsonprental-app"]=this["webpackJsonprental-app"]||[]).push([[0],{44:function(e,a,t){e.exports=t(79)},53:function(e,a,t){},54:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),c=t.n(l),s=(t(49),t(50),t(53),t(54),t(11)),m=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01"},r.a.createElement("a",{className:"navbar-brand"},"Rent Now"),r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search")),r.a.createElement("ul",{className:"navbar-nav mt-2 mt-lg-0 ml-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(s.b,{className:"nav-link",to:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Manage"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},r.a.createElement("a",{className:"dropdown-item",href:"#"},"Action"),r.a.createElement("a",{className:"dropdown-item",href:"#"},"Another action"),r.a.createElement("a",{className:"dropdown-item",href:"#"},"Something else here"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/login"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/register"},"Register")))))},i=t(16),o=t(13),u=t(24),d=t(15),E=t(14),p=function(e){var a=e.rental;return r.a.createElement(s.b,{className:"col-md-3 rental-link",to:"rental/".concat(a._id)},r.a.createElement("div",{className:"card bwm-card"},r.a.createElement("img",{className:"card-img-top",src:a.image,alt:"Card cap"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-subtitle mb-0 text-muted type-".concat(a.category)},a.shared?"Shared":"Whole"," ",a.category," \xb7 ",a.city),r.a.createElement("h5",{className:"card-title big-font"},a.title),r.a.createElement("p",{className:"card-text"},"$",a.dailyPrice," per Night \xb7 Free Cancelation"))))},v=t(19),g=t(3),h=t.n(g),f=t(9),N=t(29),b=t.n(N),w=function(e){Object(d.a)(t,e);var a=Object(E.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).renderRentals=function(e){return e.map((function(e){return r.a.createElement(p,{key:e._id,rental:e})}))},e.render=function(){var a=e.props,t=a.rentals;return a.isFetching?r.a.createElement("h3",null,"Loading..."):r.a.createElement("div",{className:"card-list"},r.a.createElement("div",null,r.a.createElement("h1",{className:"page-title"},"Your Home All Around the World"),r.a.createElement("div",{className:"row"},e.renderRentals(t))))},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch((function(e){e({type:"IS_FETCHING_RENTALS"}),b.a.get("http://localhost:3000/api/v1/rentals").then((function(a){var t=a.data;return e({type:"FETCH_RENTALS",rentals:t})}))}))}}]),t}(r.a.Component),y=Object(v.b)((function(e){var a=e.rentals;return{rentals:a.items,isFetching:a.isFetching}}))(w),O=t(17),S=function(e){var a=e.onSubmit,t=Object(O.b)(),n=t.register,l=t.handleSubmit,c=t.errors;return r.a.createElement("form",{onSubmit:l(a)},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{ref:n({required:!0,pattern:"/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/"}),name:"email",type:"email",className:"form-control",id:"email"}),c.email&&r.a.createElement("div",{className:"alert alert-danger"},r.a.createElement("div",null,"required"===c.email.type&&"email is required"),r.a.createElement("div",null,"pattern"===c.email.type&&"Must be valid email format!"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{ref:n({required:!0,minLength:8}),name:"password",type:"password",className:"form-control",id:"password"}),c.password&&r.a.createElement("div",{className:"alert alert-danger"},"Password is not valid")),r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary"},"Submit"))},_=function(e){Object(d.a)(t,e);var a=Object(E.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={email:"",password:""},e.handleSubmit=function(a){alert(JSON.stringify(e.state))},e.loginUser=function(e){alert(JSON.stringify(e))},e.render=function(){return r.a.createElement("div",{className:"bwm-form"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement("h1",{className:"page-title"},"Login"),r.a.createElement(S,{onSubmit:e.loginUser})),r.a.createElement("div",{className:"col-md-6 ml-auto"},r.a.createElement("div",{className:"image-container"},r.a.createElement("h2",{className:"catchphrase"},"Hundreds of awesome places in reach of few clicks."),r.a.createElement("img",{src:"/images/login_image.jpg",alt:"Login an user"})))))},e}return t}(r.a.Component),j=function(e,a){return function(t){return a()[e]===t}},T=function(e){var a=e.errors,t=e.name,n=e.children,l=a[t]||null;return l?r.a.createElement("div",{className:"alert alert-danger"},n(l)):null},F=function(e){var a=e.children;return r.a.createElement("div",{className:"alert alert-danger"},a)},A=function(e){var a=e.onSubmit,t=Object(O.b)(),n=t.register,l=t.handleSubmit,c=t.errors,s=t.getValues;return r.a.createElement("form",{onSubmit:l(a)},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",className:"form-control",name:"username",ref:n({required:"Username is required."}),id:"username"}),r.a.createElement(O.a,{as:r.a.createElement(F,null),errors:c,name:"username"},(function(e){var a=e.message;return r.a.createElement("p",null,a)}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",name:"email",ref:n({required:"Email is required."}),className:"form-control",id:"email"}),r.a.createElement(T,{as:r.a.createElement(F,null),errors:c,name:"email"},(function(e){var a=e.message;return r.a.createElement("p",null,a)}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",ref:n({required:"Password is required.",minLength:{value:4,message:"length must me more than 4"}}),className:"form-control",id:"password"}),r.a.createElement(O.a,{as:r.a.createElement(F,null),errors:c,name:"password"},(function(e){var a=e.message;return r.a.createElement("p",null,a)}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"passwordConfirmation"},"Confirm Password"),r.a.createElement("input",{type:"password",name:"confirmPassword",ref:n({required:!0,validate:{sameAs:j("password",s)}}),className:"form-control",id:"passwordConfirmation"}),r.a.createElement(O.a,{as:r.a.createElement(F,null),errors:c,name:"confirmPassword"},(function(e){var a=e.message;return r.a.createElement("p",null,a)}))),r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary"},"Submit"))},k=function(e){Object(d.a)(t,e);var a=Object(E.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).registerUser=function(e){alert(JSON.stringify(e))},e.render=function(){return r.a.createElement("div",{className:"bwm-form"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement("h1",{className:"page-title"},"Register"),r.a.createElement(A,{onSubmit:e.registerUser})),r.a.createElement("div",{className:"col-md-6 ml-auto"},r.a.createElement("div",{className:"image-container"},r.a.createElement("h2",{className:"catchphrase"},"As our member you have access to most awesome places in the world."),r.a.createElement("img",{src:"/images/login_image.jpg",alt:"Register an user"})))))},e}return t}(r.a.Component),C=t(10),L=function(){return r.a.createElement("div",{className:"rental-assets"},r.a.createElement("h3",{className:"title"},"Assets"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("span",null,r.a.createElement(C.a,{icon:"asterisk"})," Cooling"),r.a.createElement("span",null,r.a.createElement(C.a,{icon:"thermometer"})," Heating"),r.a.createElement("span",null,r.a.createElement(C.a,{icon:"location-arrow"})," Iron")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("span",null,r.a.createElement(C.a,{icon:"desktop"})," Working area"),r.a.createElement("span",null,r.a.createElement(C.a,{icon:"archive"})," Washing machine"),r.a.createElement("span",null,r.a.createElement(C.a,{icon:"soap"})," Dishwasher"))))},R=function(e){var a,t=e.rental;return r.a.createElement("div",{className:"rental"},r.a.createElement("h2",{className:"rental-type type-".concat(t.category)},"".concat(t.shared?"Shared":"Whole","  ").concat(t.category)),r.a.createElement("h1",{className:"rental-title"},t.title),r.a.createElement("h2",{className:"rental-city"},(a=t.city)&&"string"===typeof a?a.split(" ").map((function(e){return e[0].toUpperCase()+e.slice(1)})).join(" "):""),r.a.createElement("div",{className:"rental-room-info"},r.a.createElement("span",null,r.a.createElement(C.a,{icon:"building"}),t.numOfRooms," bedrooms"),r.a.createElement("span",null,r.a.createElement(C.a,{icon:"user"})," ",t.numOfRooms+4," guests"),r.a.createElement("span",null,r.a.createElement(C.a,{icon:"bed"})," ",t.numOfRooms+2," beds")),r.a.createElement("p",{className:"rental-description"},t.description),r.a.createElement("hr",null),r.a.createElement(L,null))},I=function(e){Object(d.a)(t,e);var a=Object(E.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.dispatch(function(e){return function(){var a=Object(f.a)(h.a.mark((function a(t){var n;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t({type:"IS_FETCHING_RENTAL"}),a.next=3,b.a.get("http://localhost:3000/api/v1/rentals/".concat(e));case 3:return n=a.sent,a.abrupt("return",t({type:"FETCH_RENTAL_BY_ID",rental:n.data}));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(e))}},{key:"render",value:function(){var e=this.props,a=e.rental;return e.isFetching?r.a.createElement("h4",null,"Loding..."):r.a.createElement("section",{id:"rentalDetails"},r.a.createElement("div",{className:"upper-section"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("img",{src:a.image,alt:a.title})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("img",{src:a.image,alt:a.title})))),r.a.createElement("div",{className:"details-section"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement(R,{rental:a})),r.a.createElement("div",{className:"col-md-4"}," BOOKING"))))}}]),t}(r.a.Component),D=Object(v.b)((function(e){var a=e.rental;return{rental:a.item,isFetching:a.isFetching}}))(Object(i.f)(I)),H=function(){return r.a.createElement("div",{className:"container rental-app-container"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/login"},r.a.createElement(_,null)),r.a.createElement(i.a,{path:"/register"},r.a.createElement(k,null)),r.a.createElement(i.a,{path:"/rental/:id"},r.a.createElement(D,null)),r.a.createElement(i.a,{path:"/"},r.a.createElement(y,null))))},q=t(8),x=Object(q.c)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_RENTALS":return a.rentals;default:return e}},isFetching:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"IS_FETCHING_RENTALS":return!0;case"FETCH_RENTALS":return!1;default:return e}}}),P=Object(q.c)({item:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_RENTAL_BY_ID":return a.rental;default:return e}},isFetching:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"IS_FETCHING_RENTAL":return!0;case"FETCH_RENTAL_BY_ID":return!1;default:return e}}}),M=t(42),U=function(){var e=Object(q.c)({rentals:x,rental:P}),a=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||q.d;return Object(q.e)(e,a(Object(q.a)(M.a)))}(),W=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v.a,{store:U},r.a.createElement(s.a,null,r.a.createElement(m,null),r.a.createElement(H,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=t(21),G=t(43);B.b.add(G.a),c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.baac8f12.chunk.js.map