(this["webpackJsonpui-todo"]=this["webpackJsonpui-todo"]||[]).push([[0],{110:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(24),c=n.n(o),s=(n(73),n(74),n(31)),i=n(41),u=n(6),d=function(t){return{type:"SET_TODOS",data:t}},p=function(t,e){return{type:"ADD_TODO",data:{id:t,description:e}}},l=function(t,e){var n=e.type,a=e.data;switch(n){case"SET_TODOS":return Object(u.a)(Object(u.a)({},t),{},{todos:a});case"ADD_TODO":var r=Object(u.a)(Object(u.a)({},t.todos),{},Object(i.a)({},a.id,{description:a.description}));return Object(u.a)(Object(u.a)({},t),{},{todos:r});case"DELETE_TODO":var o=Object(u.a)({},t.todos);return delete o[a.id],Object(u.a)(Object(u.a)({},t),{},{todos:o});case"UPDATE_TODO":var c=Object(u.a)({},t.todos);return c[a.id]=a.description,Object(u.a)(Object(u.a)({},t),{},{todos:c});default:return t}},f={todos:{}},m=Object(a.createContext)(f),b=function(t){var e=t.children,n=Object(a.useReducer)(l,f),o=Object(s.a)(n,2),c=o[0],i=o[1];return r.a.createElement(m.Provider,{value:{state:c,dispatch:i}},e)},O=function(){return r.a.createElement("h1",{"data-cy":"header"},"i need coffee!")},v=n(5),h=n.n(v),j=n(17),y=n(113),E=n(50),_=n(114),w=n(48),k=n.n(w);n(76);n(79).config();k.a.initializeApp({apiKey:"AIzaSyC4fOnIY6QZAi_DzSuh-GPKll94DReWN08",authDomain:"my-todo-app-70cf0.firebaseapp.com",databaseURL:"https://my-todo-app-70cf0.firebaseio.com",projectId:"my-todo-app-70cf0",storageBucket:":my-todo-app-70cf0.appspot.com",messagingSenderId:"798251118543",appId:"1:798251118543:web:4006a035e36b84bdc62cba"});var x=k.a.firestore(),T={fetchTodos:function(){var t=Object(j.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={},t.next=3,x.collection("todo-list").get();case 3:return t.sent.docs.forEach((function(t){e[t.id]=t.data()})),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),addTodo:function(){var t=Object(j.a)(h.a.mark((function t(e,n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.collection("todo-list").doc(e).set({description:n});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),updateTodo:function(){var t=Object(j.a)(h.a.mark((function t(e,n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.collection("todo-list").doc(e).update({description:n});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),deleteTodo:function(){var t=Object(j.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.collection("todo-list").doc(e).delete();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},D=function(){var t=Object(a.useState)(""),e=Object(s.a)(t,2),n=e[0],o=e[1],c=Object(a.useContext)(m).dispatch,i=function(){var t=Object(j.a)(h.a.mark((function t(){var e,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(_.a)(),t.next=3,T.addTodo(e,n);case 3:a=t.sent,console.log(a),c(p(e,n)),o("");case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"todo-input"},r.a.createElement(y.a,{value:n,onChange:function(t){var e=t.target.value;return o(e)},placeholder:"Add a TODO",size:"large",className:"todo-input__input","data-cy":"todo-input__input"}),r.a.createElement(E.a,{type:"primary",shape:"round",onClick:i,className:"todo-input__button","data-cy":"todo-input__button"},"Add"))},g=function(t){return r.a.createElement("div",{className:"todo-task"},r.a.createElement("div",{className:"todo-task__name","data-cy":"todo-task__name"},t.description),r.a.createElement(E.a,{type:"primary",shape:"round",className:"todo-task__button","data-cy":"todo-task__button-update",onClick:function(){}},"Update"),r.a.createElement(E.a,{type:"primary",shape:"round",className:"todo-task__button","data-cy":"todo-task__button-delete",onClick:function(){return t.delete(t.id)}},"Delete"))},N=function(){var t=Object(a.useContext)(m),e=t.state,n=t.dispatch;Object(a.useEffect)((function(){(function(){var t=Object(j.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.fetchTodos();case 2:e=t.sent,n(d(e));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[n]);var o=function(){var t=Object(j.a)(h.a.mark((function t(e){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.deleteTodo(e);case 2:a=t.sent,n(d(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"todo-list","data-cy":"todo-list"},Object.entries(e.todos).map((function(t){var e=Object(s.a)(t,2),n=e[0],a=e[1];return r.a.createElement(g,{key:n,description:a.description,delete:o,id:n})})))},S=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(O,null),r.a.createElement(b,null,r.a.createElement(D,null),r.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},68:function(t,e,n){t.exports=n(110)},73:function(t,e,n){},74:function(t,e,n){}},[[68,1,2]]]);
//# sourceMappingURL=main.d5113e10.chunk.js.map