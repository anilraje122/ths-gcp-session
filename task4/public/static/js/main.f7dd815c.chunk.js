(this["webpackJsonpreact-sessions"]=this["webpackJsonpreact-sessions"]||[]).push([[0],{41:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),s=a(30),c=a.n(s),i=a(10),l=a(2);a(41);function o(e){var t=e.title,a=e.icon;return Object(n.jsxs)("nav",{className:"navbar bg-primary",children:[Object(n.jsx)("a",{href:"/",children:Object(n.jsxs)("h1",{children:[Object(n.jsx)("i",{className:a})," ",t]})}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(i.b,{to:"/",children:" Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(i.b,{to:"/about",children:"About"})})]})]})}o.defaultProps={icon:"fab fa-github",title:"GitHub Search Engine"};var j=o,b=a(14),u=Object(r.createContext)(),d=Object(r.createContext)();var h=function(){var e=Object(r.useContext)(u),t=Object(r.useContext)(d).showAlert,a=Object(r.useState)(""),s=Object(b.a)(a,2),c=s[0],i=s[1];return Object(n.jsxs)("div",{children:[Object(n.jsxs)("form",{className:"form",onSubmit:function(a){a.preventDefault(),""===c?t("Enter GitHub User Name","danger"):(e.searchUsers(c),i(""))},children:[Object(n.jsx)("input",{type:"text",name:"text",value:c,onChange:function(e){i(e.target.value)},placeholder:"Search GitHub User ..."}),Object(n.jsx)("input",{type:"submit",value:"Search",className:"btn btn-dark btn-block"})]}),e.users.length>0&&Object(n.jsx)("button",{className:"btn btn-light btn-block",onClick:e.clearUsers,children:"Clear Users"})]})};var O=function(e){var t=e.user,a=t.login,r=t.avatar_url;return Object(n.jsxs)("div",{className:"card text-center",children:[Object(n.jsx)("img",{src:r,alt:"",className:"round-img",style:{width:"120px"}}),Object(n.jsx)("h3",{children:a}),Object(n.jsx)("div",{children:Object(n.jsx)(i.b,{to:"/user/".concat(a),className:"btn btn-dark btn-sm my-1",children:"GitHub Profile"})})]})},p=a.p+"static/media/spinner.854f07cc.gif";var x=function(){return Object(n.jsx)("img",{src:p,alt:"Loading ...",style:{width:"200px",margin:"auto",display:"block"}})};var m={display:"grid",gridTemplateColumns:"repeat(3,1fr)",gridGap:"1rem"},g=function(){var e=Object(r.useContext)(u),t=e.users,a=e.loading,s=e.setAllUsers;return Object(r.useEffect)((function(){s()}),[]),a?Object(n.jsx)(x,{}):Object(n.jsx)("div",{style:m,children:t.map((function(e){return Object(n.jsx)(O,{user:e},e.id)}))})};var f=function(){return Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)(h,{}),Object(n.jsx)(g,{})]})};var v=function(){var e=Object(r.useContext)(d).alert;return null!==e&&Object(n.jsxs)("div",{className:"alert alert-".concat(e.type),children:[Object(n.jsx)("i",{className:"fas fa-info-circle"})," ",e.msg]})},y=a(16),C=a(8),w=a.n(C),N=a(12),S=a(32),k=a(33),E=a(35),F=a(34),U=a(13),R=a.n(U),_=function(e){Object(E.a)(a,e);var t=Object(F.a)(a);function a(){var e;return Object(S.a)(this,a),(e=t.call(this)).onSubmit=function(){var t=Object(N.a)(w.a.mark((function t(a){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,R.a.post("https://react-backend-api.herokuapp.com/api/user/register",e.state);case 3:n=t.sent,console.log(n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onChange=function(t){"tos"===t.target.name?e.setState(Object(y.a)({},t.target.name,t.target.checked)):e.setState(Object(y.a)({},t.target.name,t.target.value))},e.state={fname:"",lname:"",password:"",gender:"",dob:"",location:"",tos:!1},e}return Object(k.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"React Forms"}),Object(n.jsx)("p",{children:"This is a form submission in React and Express"}),Object(n.jsx)("div",{className:"card",children:Object(n.jsxs)("form",{action:"/",onSubmit:this.onSubmit,children:[Object(n.jsx)("label",{htmlFor:"fname",children:"First name"}),Object(n.jsx)("input",{type:"text",name:"fname",onChange:this.onChange,value:this.state.fname}),Object(n.jsx)("label",{htmlFor:"lname",children:"Last name"}),Object(n.jsx)("input",{type:"text",name:"lname",onChange:this.onChange,value:this.state.lname}),Object(n.jsx)("label",{children:"Gender"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"radio",id:"male",name:"gender",value:"male",onChange:this.onChange}),Object(n.jsx)("label",{htmlFor:"male",children:" Male "}),Object(n.jsx)("input",{type:"radio",id:"female",name:"gender",value:"female",onChange:this.onChange}),Object(n.jsx)("label",{htmlFor:"female",children:" Female "}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"dob",children:"Date of birth"}),Object(n.jsx)("input",{type:"date",name:"dob",value:this.state.dob,onChange:this.onChange}),Object(n.jsx)("label",{htmlFor:"location",children:"Location"}),Object(n.jsxs)("select",{name:"location",style:{marginTop:20},value:this.state.location,onChange:this.onChange,children:[Object(n.jsx)("option",{value:"",children:"- Select City -"}),Object(n.jsx)("option",{value:"Banglore",children:"Bangalore"}),Object(n.jsx)("option",{value:"Kochi",children:"Kochi"}),Object(n.jsx)("option",{value:"Hyderabad",children:"Hyderabad"}),Object(n.jsx)("option",{value:"Delhi",children:"Delhi"})]}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"password",children:"Password"}),Object(n.jsx)("input",{type:"password",name:"password",onChange:this.onChange,value:this.state.password}),Object(n.jsx)("input",{type:"checkbox",name:"tos",value:this.state.tos,onChange:this.onChange}),Object(n.jsx)("label",{htmlFor:"tos",children:" I agree with terms and conditions"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-primary"})]})})]})}}]),a}(r.Component);var A=function(e){var t=e.repo;return Object(n.jsx)("div",{className:"card",children:Object(n.jsx)("h3",{children:Object(n.jsx)("a",{href:t.html_url,children:t.name})})})};var P=function(){return Object(r.useContext)(u).repos.map((function(e){return Object(n.jsx)(A,{repo:e},e.id)}))};var T=function(e){var t=e.match,a=Object(r.useContext)(u),s=a.user,c=a.loading,l=a.getUser,o=a.getUserRepos;Object(r.useEffect)((function(){l(t.params.login),o(t.params.login)}),[]);var j=s.name,b=s.avatar_url,d=s.location,h=s.bio,O=s.blog,p=s.login,m=s.html_url,g=s.company,f=s.followers,v=s.following,y=s.public_repos,C=s.public_gists,w=s.hireable;return c?Object(n.jsx)(x,{}):Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)(i.b,{to:"/",className:"btn btn-light",children:"Back to Search"}),"Hireable :"," ",w?Object(n.jsx)("i",{className:"fas fa-check text-success"}):Object(n.jsx)("i",{className:"fas fa-times-circle text-danger"}),Object(n.jsxs)("div",{className:"card grid-2",children:[Object(n.jsxs)("div",{className:"all-center",children:[Object(n.jsx)("img",{src:b,className:"round-img",style:{width:"150px"},alt:""}),Object(n.jsx)("h1",{children:j}),Object(n.jsxs)("p",{children:["Location : ",d]})]}),Object(n.jsxs)("div",{children:[h&&Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)("h2",{children:"Bio"}),Object(n.jsx)("p",{children:h})]}),Object(n.jsxs)("a",{href:m,className:"btn btn-dark my-1",target:"_blank",rel:"noreferrer",alt:"Profile",children:[" ","Visit GitHub Profile"]}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:p&&Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)("b",{children:" Username : "})," ",p]})}),Object(n.jsx)("li",{children:g&&Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)("b",{children:" Company : "})," ",g]})}),Object(n.jsx)("li",{children:O&&Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)("b",{children:" Website : "})," ",O]})})]})]})]}),Object(n.jsxs)("div",{className:"card text-center",children:[Object(n.jsxs)("div",{className:"badge badge-primary",children:["Followers : ",f]}),Object(n.jsxs)("div",{className:"badge badge-success",children:["Following : ",v]}),Object(n.jsxs)("div",{className:"badge badge-light",children:["Public Repositories : ",y]}),Object(n.jsxs)("div",{className:"badge badge-dark",children:["Private Gists : ",C]})]}),Object(n.jsx)(P,{})]})},G=a(7),H="SET_LOADING",L="SEARCH_USERS",D="CLEAR_USERS",B="GET_USER",I="SET_REPOS",J="SET_ALERT",K="REMOVE_ALERT",M="SET_ALL_USERS",V=function(e,t){switch(t.type){case L:return Object(G.a)(Object(G.a)({},e),{},{users:t.payload,loading:!1});case H:return Object(G.a)(Object(G.a)({},e),{},{loading:!0});case D:return Object(G.a)(Object(G.a)({},e),{},{users:[]});case B:return Object(G.a)(Object(G.a)({},e),{},{user:t.payload,loading:!1});case I:return Object(G.a)(Object(G.a)({},e),{},{repos:t.payload,loading:!1});case M:return Object(G.a)(Object(G.a)({},e),{},{users:t.payload,loading:!1});default:return e}},q=function(e){var t=Object(r.useReducer)(V,{users:[],user:{},repos:[],loading:!1}),a=Object(b.a)(t,2),s=a[0],c=a[1],i=function(){var e=Object(N.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(),e.next=3,R.a.get("https://api.github.com/search/users?q=".concat(t));case 3:a=e.sent,c({type:L,payload:a.data.items});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(N.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(),e.next=3,R.a.get("https://api.github.com/users");case 3:t=e.sent,c({type:M,payload:t.data});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(N.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(),e.next=3,R.a.get("https://api.github.com/users/".concat(t));case 3:a=e.sent,c({type:B,payload:a.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){return c({type:H})},d=function(){var e=Object(N.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(),e.next=3,R.a.get("https://api.github.com/users/".concat(t,"/repos?per_page=5&sort=created:asc"));case 3:a=e.sent,c({type:I,payload:a.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)(u.Provider,{value:{users:s.users,user:s.user,repos:s.repos,loading:s.loading,searchUsers:i,clearUsers:function(){return c({type:D})},getUser:o,getUserRepos:d,setAllUsers:l},children:e.children})},W=function(e,t){switch(t.type){case J:return{alert:t.payload};case K:return{alert:null};default:return e}},z=function(e){var t=Object(r.useReducer)(W,{alert:null}),a=Object(b.a)(t,2),s=a[0],c=a[1];return Object(n.jsx)(d.Provider,{value:{alert:s.alert,showAlert:function(e,t){c({type:J,payload:{msg:e,type:t}}),setTimeout((function(){c({type:K})}),3e3)}},children:e.children})};var Q=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Page Not Found"})})};var X=function(){return Object(n.jsx)(q,{children:Object(n.jsx)(z,{children:Object(n.jsx)(i.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(j,{}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(v,{}),Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",component:f}),Object(n.jsx)(l.a,{exact:!0,path:"/about",component:_}),Object(n.jsx)(l.a,{exact:!0,path:"/user/:login",component:T}),Object(n.jsx)(l.a,{component:Q})]})]})]})})})})};c.a.render(Object(n.jsx)(X,{}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.f7dd815c.chunk.js.map