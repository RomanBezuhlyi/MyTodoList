(function(){"use strict";var t={8433:function(t,o,e){var i=e(9242),n=(e(7658),e(7139));const r=(0,n.MT)({state(){return{todos:[],visibilityFilter:"all"}},mutations:{ADD_TODO(t,o){t.todos.push(o),localStorage.setItem("todos",JSON.stringify(t.todos))},REMOVE_TODO(t,o){const e=t.todos.indexOf(o);e>-1&&(t.todos.splice(e,1),localStorage.setItem("todos",JSON.stringify(t.todos)))},TOGGLE_TODO(t,o){o.completed=!o.completed,localStorage.setItem("todos",JSON.stringify(t.todos))},SET_VISIBILITY_FILTER(t,o){t.visibilityFilter=o},RESTORE_STATE(t){const o=localStorage.getItem("todos");o&&(t.todos=JSON.parse(o))}},actions:{addTodo({commit:t},o){t("ADD_TODO",o)},removeTodo({commit:t},o){t("REMOVE_TODO",o)},toggleTodo({commit:t},o){t("TOGGLE_TODO",o)},setVisibilityFilter({commit:t},o){t("SET_VISIBILITY_FILTER",o)},restoreState({commit:t}){t("RESTORE_STATE")}},getters:{filteredTodos:t=>"completed"===t.visibilityFilter?t.todos.filter((t=>t.completed)):"active"===t.visibilityFilter?t.todos.filter((t=>!t.completed)):t.todos}});r.dispatch("restoreState");var s=r,l=e(3396),d=e(2268);const c={id:"app"},a={class:"todo"},u={class:"todo-title"},p={class:"todo-filter"};function m(t,o,e,n,r,s){const m=(0,l.up)("TodoList");return(0,l.wg)(),(0,l.iD)("div",c,[(0,l._)("div",a,[(0,l._)("h1",u,(0,d.zw)(r.title),1),(0,l.wy)((0,l._)("input",{class:"todo-record","onUpdate:modelValue":o[0]||(o[0]=t=>r.newTodo=t),type:"text",placeholder:"Додати замітку"},null,512),[[i.nr,r.newTodo]]),(0,l._)("button",{class:"todo-button",onClick:o[1]||(o[1]=(...t)=>s.add&&s.add(...t))},(0,d.zw)(r.addTodo),1),(0,l.Wm)(m,{todos:t.filteredTodos,remove:t.removeTodo,toggle:t.toggleTodo},null,8,["todos","remove","toggle"]),(0,l._)("div",p,[(0,l._)("button",{class:(0,d.C_)([{active:"all"===t.$store.state.visibilityFilter},"todo-filter-btn"]),onClick:o[2]||(o[2]=o=>t.setVisibilityFilter("all"))},(0,d.zw)(r.all),3),(0,l._)("button",{class:(0,d.C_)([{active:"completed"===t.$store.state.visibilityFilter},"todo-filter-btn"]),onClick:o[3]||(o[3]=o=>t.setVisibilityFilter("completed"))},(0,d.zw)(r.completed),3),(0,l._)("button",{class:(0,d.C_)([{active:"active"===t.$store.state.visibilityFilter},"todo-filter-btn"]),onClick:o[4]||(o[4]=o=>t.setVisibilityFilter("active"))},(0,d.zw)(r.active),3)])])])}const v={class:"todo-list"};function f(t,o,e,i,n,r){const s=(0,l.up)("TodoItem");return(0,l.wg)(),(0,l.iD)("ul",v,[(0,l.Wm)(s,{todos:e.todos,remove:e.remove,toggle:e.toggle},null,8,["todos","remove","toggle"])])}const T={class:"todo-item-info"},g=["onUpdate:modelValue","onClick"],_=["onClick"];function b(t,o,e,n,r,s){return(0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.todos,(t=>((0,l.wg)(),(0,l.iD)("li",{class:"todo-item",key:t.id},[(0,l._)("div",T,[(0,l.wy)((0,l._)("input",{class:"todo-item-check",type:"checkbox","onUpdate:modelValue":o=>t.completed=o,onClick:o=>e.toggle(t)},null,8,g),[[i.e8,t.completed]]),(0,l._)("span",{class:(0,d.C_)(["todo-item-text",{"todo-item-text-completed":t.completed}])},(0,d.zw)(t.text),3)]),(0,l._)("button",{class:"todo-item-btn",onClick:o=>e.remove(t)},"×",8,_)])))),128)}var y={props:{todos:{type:[Array],required:!0},remove:{type:Function},toggle:{type:Function}},methods:{}},O=e(89);const h=(0,O.Z)(y,[["render",b],["__scopeId","data-v-1db73a32"]]);var w=h,F={components:{TodoItem:w},props:{todos:{type:[Array],required:!0},remove:{type:Function},toggle:{type:Function}}};const I=(0,O.Z)(F,[["render",f],["__scopeId","data-v-f867d792"]]);var S=I,E={name:"App",components:{TodoList:S},data(){return{title:"Замітки",addTodo:"Записати",all:"Всі",completed:"Виконані",active:"Активні",newTodo:""}},computed:{...(0,n.Se)(["filteredTodos"])},methods:{...(0,n.nv)(["removeTodo"]),...(0,n.nv)(["toggleTodo"]),...(0,n.nv)(["setVisibilityFilter"]),add(){""!==this.newTodo.trim()&&(this.$store.dispatch("addTodo",{id:Date.now(),text:this.newTodo,completed:!1}),this.newTodo="")}}};const k=(0,O.Z)(E,[["render",m],["__scopeId","data-v-5ea076fc"]]);var D=k;const C=(0,i.ri)(D);C.use(s),C.mount("#app")}},o={};function e(i){var n=o[i];if(void 0!==n)return n.exports;var r=o[i]={exports:{}};return t[i](r,r.exports,e),r.exports}e.m=t,function(){var t=[];e.O=function(o,i,n,r){if(!i){var s=1/0;for(a=0;a<t.length;a++){i=t[a][0],n=t[a][1],r=t[a][2];for(var l=!0,d=0;d<i.length;d++)(!1&r||s>=r)&&Object.keys(e.O).every((function(t){return e.O[t](i[d])}))?i.splice(d--,1):(l=!1,r<s&&(s=r));if(l){t.splice(a--,1);var c=n();void 0!==c&&(o=c)}}return o}r=r||0;for(var a=t.length;a>0&&t[a-1][2]>r;a--)t[a]=t[a-1];t[a]=[i,n,r]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var i in o)e.o(o,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:o[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,i){var n,r,s=i[0],l=i[1],d=i[2],c=0;if(s.some((function(o){return 0!==t[o]}))){for(n in l)e.o(l,n)&&(e.m[n]=l[n]);if(d)var a=d(e)}for(o&&o(i);c<s.length;c++)r=s[c],e.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return e.O(a)},i=self["webpackChunkproject_vue"]=self["webpackChunkproject_vue"]||[];i.forEach(o.bind(null,0)),i.push=o.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(8433)}));i=e.O(i)})();
//# sourceMappingURL=app.bba1c4e5.js.map