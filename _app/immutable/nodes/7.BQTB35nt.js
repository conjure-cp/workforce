import{s as S,B as $,C as y,a as G,g as H,i as N,f as V,x as z,y as A,z as E,A as F,e as I,c as T,b as D,q as P,h as J,n as L}from"../chunks/scheduler.CZ3r9TeU.js";import{S as v,i as j,f as K,b as p,d as g,m as b,a as d,t as _,e as h}from"../chunks/index.DFxY8T0a.js";import{T as O,S as Q}from"../chunks/search.VQZf_Vis.js";import{s as R}from"../chunks/stores.jshroiFM.js";import{w as B}from"../chunks/index.Ctk9Tx04.js";import{D as U,c as w,a as M,b as W}from"../chunks/data-table.-sHu5YDB.js";import{b as X}from"../chunks/skills-list.BQVBPAmb.js";import{T as Y,P as Z}from"../chunks/tasks-list.B78Md2qi.js";import{c as x}from"../chunks/index.C7klv15s.js";function ee(l){let t,r,e,a;function n(o){l[5](o)}function f(o){l[6](o)}let u={data:l[2],columns:l[4],class:l[3]};return l[0]!==void 0&&(u.filterValue=l[0]),l[1]!==void 0&&(u.sortKeys=l[1]),t=new U({props:u}),$.push(()=>K(t,"filterValue",n)),$.push(()=>K(t,"sortKeys",f)),{c(){p(t.$$.fragment)},l(o){g(t.$$.fragment,o)},m(o,c){b(t,o,c),a=!0},p(o,[c]){const i={};c&4&&(i.data=o[2]),c&8&&(i.class=o[3]),!r&&c&1&&(r=!0,i.filterValue=o[0],y(()=>r=!1)),!e&&c&2&&(e=!0,i.sortKeys=o[1],y(()=>e=!1)),t.$set(i)},i(o){a||(d(t.$$.fragment,o),a=!0)},o(o){_(t.$$.fragment,o),a=!1},d(o){h(t,o)}}}function te(l,t,r){let{data:e=R}=t,{filterValue:a=B("")}=t,{sortKeys:n=M([])}=t,{class:f=""}=t;const u=W(e),o=u.createColumns([u.column({id:"icon",accessor:s=>s,header:"Icon",cell:s=>w(X,{skill:s.value}),plugins:{filter:{disable:!0},sort:{disable:!0}}}),u.column({id:"name",accessor:"name",header:"Name",cell:({value:s})=>x(s)}),u.column({id:"description",accessor:"description",header:"Description"}),u.column({id:"tasks",accessor:s=>s.tasks,header:"Required for tasks",cell:s=>w(Y,{tasks:s.value}),plugins:{filter:{getFilterValue:s=>s.map(m=>m.name).join(" ")},sort:{getSortValue:s=>s.map(m=>m.name).join(" ")}}}),u.column({id:"people",accessor:s=>s.people,header:"People with this skill",cell:s=>w(Z,{people:s.value,compact:!0}),plugins:{filter:{getFilterValue:s=>s.map(m=>m.name).join(" ")},sort:{getSortValue:s=>s.map(m=>m.name).join(" ")}}})]);function c(s){a=s,r(0,a)}function i(s){n=s,r(1,n)}return l.$$set=s=>{"data"in s&&r(2,e=s.data),"filterValue"in s&&r(0,a=s.filterValue),"sortKeys"in s&&r(1,n=s.sortKeys),"class"in s&&r(3,f=s.class)},[a,n,e,f,o,c,i]}class ae extends v{constructor(t){super(),j(this,t,te,ee,S,{data:2,filterValue:0,sortKeys:1,class:3})}}const se=l=>({}),q=l=>({}),le=l=>({}),C=l=>({});function re(l){let t;const r=l[3].start,e=z(r,l,l[7],q);return{c(){e&&e.c()},l(a){e&&e.l(a)},m(a,n){e&&e.m(a,n),t=!0},p(a,n){e&&e.p&&(!t||n&128)&&A(e,r,a,a[7],t?F(r,a[7],n,se):E(a[7]),q)},i(a){t||(d(e,a),t=!0)},o(a){_(e,a),t=!1},d(a){e&&e.d(a)}}}function ne(l){let t;const r=l[3].middle,e=z(r,l,l[7],C);return{c(){e&&e.c()},l(a){e&&e.l(a)},m(a,n){e&&e.m(a,n),t=!0},p(a,n){e&&e.p&&(!t||n&128)&&A(e,r,a,a[7],t?F(r,a[7],n,le):E(a[7]),C)},i(a){t||(d(e,a),t=!0)},o(a){_(e,a),t=!1},d(a){e&&e.d(a)}}}function ie(l){let t,r;return t=new Q({props:{onInput:l[4]}}),{c(){p(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,a){b(t,e,a),r=!0},p(e,a){const n={};a&2&&(n.onInput=e[4]),t.$set(n)},i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){h(t,e)}}}function oe(l){let t,r,e,a,n,f;t=new O({props:{sticky:!0,$$slots:{end:[ie],middle:[ne],start:[re]},$$scope:{ctx:l}}});function u(i){l[5](i)}function o(i){l[6](i)}let c={data:l[0],class:"w-full"};return l[1]!==void 0&&(c.filterValue=l[1]),l[2]!==void 0&&(c.sortKeys=l[2]),e=new ae({props:c}),$.push(()=>K(e,"filterValue",u)),$.push(()=>K(e,"sortKeys",o)),{c(){p(t.$$.fragment),r=G(),p(e.$$.fragment)},l(i){g(t.$$.fragment,i),r=H(i),g(e.$$.fragment,i)},m(i,s){b(t,i,s),N(i,r,s),b(e,i,s),f=!0},p(i,[s]){const m={};s&130&&(m.$$scope={dirty:s,ctx:i}),t.$set(m);const k={};s&1&&(k.data=i[0]),!a&&s&2&&(a=!0,k.filterValue=i[1],y(()=>a=!1)),!n&&s&4&&(n=!0,k.sortKeys=i[2],y(()=>n=!1)),e.$set(k)},i(i){f||(d(t.$$.fragment,i),d(e.$$.fragment,i),f=!0)},o(i){_(t.$$.fragment,i),_(e.$$.fragment,i),f=!1},d(i){i&&V(r),h(t,i),h(e,i)}}}function fe(l,t,r){let{$$slots:e={},$$scope:a}=t,{data:n=R}=t,f=B(""),u=M([]);const o=s=>f.set(s);function c(s){f=s,r(1,f)}function i(s){u=s,r(2,u)}return l.$$set=s=>{"data"in s&&r(0,n=s.data),"$$scope"in s&&r(7,a=s.$$scope)},[n,f,u,e,o,c,i,a]}class ue extends v{constructor(t){super(),j(this,t,fe,oe,S,{data:0})}}function ce(l){let t,r,e,a;return e=new ue({}),{c(){t=I("div"),r=I("main"),p(e.$$.fragment),this.h()},l(n){t=T(n,"DIV",{class:!0});var f=D(t);r=T(f,"MAIN",{class:!0});var u=D(r);g(e.$$.fragment,u),u.forEach(V),f.forEach(V),this.h()},h(){P(r,"class","w-full h-dvh flex flex-col items-start justify-start overflow-y-scroll p-4"),P(t,"class","bg-gray-50 w-full")},m(n,f){N(n,t,f),J(t,r),b(e,r,null),a=!0},p:L,i(n){a||(d(e.$$.fragment,n),a=!0)},o(n){_(e.$$.fragment,n),a=!1},d(n){n&&V(t),h(e)}}}class $e extends v{constructor(t){super(),j(this,t,null,ce,S,{})}}export{$e as component};