import{s as L,w as I,x as F,e as O,a as q,c as Q,b as X,g as A,f as y,r as M,i as T,h as se,o as ae,u as ie,p as ne,q as oe,n as ue}from"../chunks/scheduler.CfTqBbps.js";import{S as x,i as ee,e as w,c as S,a as K,m as v,t as V,b as C,d as P}from"../chunks/index.BMQpolGU.js";import{D as de,c as R,R as me,a as re,C as ce}from"../chunks/column-hide-selector.DxLTjeiX.js";import{P as _e}from"../chunks/task-badge.BfYk71nd.js";import{S as ge}from"../chunks/skill-badge.QQODncrH.js";import{T as pe,S as he}from"../chunks/tasks-list.uJtF2pea.js";import{s as Y,o as be}from"../chunks/person.DEL9NjrQ.js";import{g as ke,a as Ie,d as J,c as Fe}from"../chunks/skill.D420u8ry.js";import{d as we,B as Ve}from"../chunks/index.DhF70wyd.js";import{w as Z}from"../chunks/parse.iudxBx5H.js";import{T as Ce}from"../chunks/top_bar.BR58X00F.js";import{S as Se,d as Ke}from"../chunks/search.CbyWi5od.js";function ve(t){let e,l,a,s,n,o;function m(u){t[8](u)}function f(u){t[9](u)}function _(u){t[10](u)}function b(u){t[11](u)}let c={class:t[5],columnInitializers:t[6],data:t[4]};return t[0]!==void 0&&(c.filterValue=t[0]),t[3]!==void 0&&(c.flatColumns=t[3]),t[2]!==void 0&&(c.hideForId=t[2]),t[1]!==void 0&&(c.sortKeys=t[1]),e=new de({props:c}),I.push(()=>w(e,"filterValue",m)),I.push(()=>w(e,"flatColumns",f)),I.push(()=>w(e,"hideForId",_)),I.push(()=>w(e,"sortKeys",b)),{c(){S(e.$$.fragment)},l(u){K(e.$$.fragment,u)},m(u,g){v(e,u,g),o=!0},p(u,[g]){const h={};g&32&&(h.class=u[5]),g&16&&(h.data=u[4]),!l&&g&1&&(l=!0,h.filterValue=u[0],F(()=>l=!1)),!a&&g&8&&(a=!0,h.flatColumns=u[3],F(()=>a=!1)),!s&&g&4&&(s=!0,h.hideForId=u[2],F(()=>s=!1)),!n&&g&2&&(n=!0,h.sortKeys=u[1],F(()=>n=!1)),e.$set(h)},i(u){o||(V(e.$$.fragment,u),o=!0)},o(u){C(e.$$.fragment,u),o=!1},d(u){P(e,u)}}}function Pe(t,e,l){let{data:a=Y}=e,{actions:s=new Map}=e,{filterValue:n=Z("")}=e,{sortKeys:o=re([])}=e,{hideForId:m={}}=e,{flatColumns:f}=e,{class:_=""}=e,b=[{accessor:i=>i,cell:i=>R(ge,{skill:i.value}),header:"Icon",id:"icon",plugins:{sort:{disable:!0},tableFilter:{disable:!0}}},{accessor:"name",cell:i=>we(i.value),header:"Name",id:"name"},{accessor:"description",header:"Description",id:"description"},{accessor:i=>ke(i),cell:i=>R(pe,{tasks:i.value}),header:"Required for tasks",id:"tasks",plugins:{sort:{getSortValue:i=>i.map(k=>k.name).join(" ")},tableFilter:{getFilterValue:i=>i.map(k=>k.name).join(" ")}}},{accessor:i=>Ie(i),cell:i=>R(_e,{compact:!0,people:i.value}),header:"People with this skill",id:"people",plugins:{sort:{getSortValue:i=>i.map(k=>k.name).join(" ")},tableFilter:{getFilterValue:i=>i.map(k=>k.name).join(" ")}}}];s.size>0&&b.push({accessor:i=>i,cell:i=>R(me,{actions:s,item:i.value}),header:"Actions",id:"actions",plugins:{sort:{disable:!0},tableFilter:{disable:!0}}});function c(i){n=i,l(0,n)}function u(i){f=i,l(3,f)}function g(i){m=i,l(2,m)}function h(i){o=i,l(1,o)}return t.$$set=i=>{"data"in i&&l(4,a=i.data),"actions"in i&&l(7,s=i.actions),"filterValue"in i&&l(0,n=i.filterValue),"sortKeys"in i&&l(1,o=i.sortKeys),"hideForId"in i&&l(2,m=i.hideForId),"flatColumns"in i&&l(3,f=i.flatColumns),"class"in i&&l(5,_=i.class)},[n,o,m,f,a,_,b,s,c,u,g,h]}class $e extends x{constructor(e){super(),ee(this,e,Pe,ve,L,{data:4,actions:7,filterValue:0,sortKeys:1,hideForId:2,flatColumns:3,class:5})}}const ye=t=>({}),te=t=>({}),De=t=>({}),le=t=>({});function je(t){let e,l;return e=new Ke({}),{c(){S(e.$$.fragment)},l(a){K(e.$$.fragment,a)},m(a,s){v(e,a,s),l=!0},i(a){l||(V(e.$$.fragment,a),l=!0)},o(a){C(e.$$.fragment,a),l=!1},d(a){P(e,a)}}}function ze(t){let e,l,a;e=new Ve({props:{class:"text-muted-foreground hover:text-accent-foreground",size:"icon_xl",variant:"ghost",$$slots:{default:[je]},$$scope:{ctx:t}}}),e.$on("click",t[9]);const s=t[11].start,n=ae(s,t,t[20],te);return{c(){S(e.$$.fragment),l=q(),n&&n.c()},l(o){K(e.$$.fragment,o),l=A(o),n&&n.l(o)},m(o,m){v(e,o,m),T(o,l,m),n&&n.m(o,m),a=!0},p(o,m){const f={};m&1048576&&(f.$$scope={dirty:m,ctx:o}),e.$set(f),n&&n.p&&(!a||m&1048576)&&ie(n,s,o,o[20],a?oe(s,o[20],m,ye):ne(o[20]),te)},i(o){a||(V(e.$$.fragment,o),V(n,o),a=!0)},o(o){C(e.$$.fragment,o),C(n,o),a=!1},d(o){o&&y(l),P(e,o),n&&n.d(o)}}}function Ee(t){let e;const l=t[11].middle,a=ae(l,t,t[20],le);return{c(){a&&a.c()},l(s){a&&a.l(s)},m(s,n){a&&a.m(s,n),e=!0},p(s,n){a&&a.p&&(!e||n&1048576)&&ie(a,l,s,s[20],e?oe(l,s[20],n,De):ne(s[20]),le)},i(s){e||(V(a,s),e=!0)},o(s){C(a,s),e=!1},d(s){a&&a.d(s)}}}function Te(t){let e,l,a,s,n;function o(f){t[12](f)}let m={flatColumns:t[4]};return t[5]!==void 0&&(m.hideForId=t[5]),e=new ce({props:m}),I.push(()=>w(e,"hideForId",o)),s=new Se({props:{onInput:t[13]}}),{c(){S(e.$$.fragment),a=q(),S(s.$$.fragment)},l(f){K(e.$$.fragment,f),a=A(f),K(s.$$.fragment,f)},m(f,_){v(e,f,_),T(f,a,_),v(s,f,_),n=!0},p(f,_){const b={};_&16&&(b.flatColumns=f[4]),!l&&_&32&&(l=!0,b.hideForId=f[5],F(()=>l=!1)),e.$set(b);const c={};_&4&&(c.onInput=f[13]),s.$set(c)},i(f){n||(V(e.$$.fragment,f),V(s.$$.fragment,f),n=!0)},o(f){C(e.$$.fragment,f),C(s.$$.fragment,f),n=!1},d(f){f&&y(a),P(e,f),P(s,f)}}}function Ne(t){let e,l,a,s,n,o,m,f,_,b,c,u,g,h;l=new Ce({props:{sticky:!0,$$slots:{end:[Te],middle:[Ee],start:[ze]},$$scope:{ctx:t}}});function i(r){t[14](r)}function k(r){t[15](r)}function U(r){t[16](r)}function B(r){t[17](r)}let D={actions:t[10],class:"w-full",data:t[0]};t[2]!==void 0&&(D.filterValue=t[2]),t[4]!==void 0&&(D.flatColumns=t[4]),t[5]!==void 0&&(D.hideForId=t[5]),t[3]!==void 0&&(D.sortKeys=t[3]),s=new $e({props:D}),I.push(()=>w(s,"filterValue",i)),I.push(()=>w(s,"flatColumns",k)),I.push(()=>w(s,"hideForId",U)),I.push(()=>w(s,"sortKeys",B));function W(r){t[18](r)}function G(r){t[19](r)}let z={onSubmit:t[8]};return t[6]!==void 0&&(z.open=t[6]),t[7]!==void 0&&(z.skillProps=t[7]),c=new he({props:z}),I.push(()=>w(c,"open",W)),I.push(()=>w(c,"skillProps",G)),{c(){e=O("div"),S(l.$$.fragment),a=q(),S(s.$$.fragment),b=q(),S(c.$$.fragment),this.h()},l(r){e=Q(r,"DIV",{class:!0});var p=X(e);K(l.$$.fragment,p),a=A(p),K(s.$$.fragment,p),p.forEach(y),b=A(r),K(c.$$.fragment,r),this.h()},h(){M(e,"class",_="flex h-full w-full flex-col items-start justify-start overflow-y-scroll "+t[1])},m(r,p){T(r,e,p),v(l,e,null),se(e,a),v(s,e,null),T(r,b,p),v(c,r,p),h=!0},p(r,[p]){const N={};p&1048628&&(N.$$scope={dirty:p,ctx:r}),l.$set(N);const $={};p&1&&($.data=r[0]),!n&&p&4&&(n=!0,$.filterValue=r[2],F(()=>n=!1)),!o&&p&16&&(o=!0,$.flatColumns=r[4],F(()=>o=!1)),!m&&p&32&&(m=!0,$.hideForId=r[5],F(()=>m=!1)),!f&&p&8&&(f=!0,$.sortKeys=r[3],F(()=>f=!1)),s.$set($),(!h||p&2&&_!==(_="flex h-full w-full flex-col items-start justify-start overflow-y-scroll "+r[1]))&&M(e,"class",_);const d={};!u&&p&64&&(u=!0,d.open=r[6],F(()=>u=!1)),!g&&p&128&&(g=!0,d.skillProps=r[7],F(()=>g=!1)),c.$set(d)},i(r){h||(V(l.$$.fragment,r),V(s.$$.fragment,r),V(c.$$.fragment,r),h=!0)},o(r){C(l.$$.fragment,r),C(s.$$.fragment,r),C(c.$$.fragment,r),h=!1},d(r){r&&(y(e),y(b)),P(l),P(s),P(c,r)}}}function Re(t,e,l){let{$$slots:a={},$$scope:s}=e,{data:n=Y}=e,o=Z(""),m=re([]),f,_={},{class:b=""}=e,c=!1,u,g=Z(J());function h(d){u=d.uuid,g.set(d),l(6,c=!0)}function i(d){be(d)}function k(d){Y.update(j=>{if(u!==void 0){const E=j.findIndex(H=>H.uuid===u);if(E!==-1){console.log("Updating index: ",E);const H=j[E];return j[E]={...H,...d},console.log(j[E]),j}}let fe=Fe(d);return j.push(fe),j}),g.set(J()),u=void 0,l(6,c=!1)}function U(){g.set(J()),u=void 0,l(6,c=!0)}const B=new Map([["Delete",i],["Edit",h]]);function D(d){_=d,l(5,_)}const W=d=>o.set(d);function G(d){o=d,l(2,o)}function z(d){f=d,l(4,f)}function r(d){_=d,l(5,_)}function p(d){m=d,l(3,m)}function N(d){c=d,l(6,c)}function $(d){g=d,l(7,g)}return t.$$set=d=>{"data"in d&&l(0,n=d.data),"class"in d&&l(1,b=d.class),"$$scope"in d&&l(20,s=d.$$scope)},[n,b,o,m,f,_,c,g,k,U,B,a,D,W,G,z,r,p,N,$,s]}class qe extends x{constructor(e){super(),ee(this,e,Re,Ne,L,{data:0,class:1})}}function Ae(t){let e,l,a,s;return a=new qe({}),{c(){e=O("div"),l=O("main"),S(a.$$.fragment),this.h()},l(n){e=Q(n,"DIV",{class:!0});var o=X(e);l=Q(o,"MAIN",{class:!0});var m=X(l);K(a.$$.fragment,m),m.forEach(y),o.forEach(y),this.h()},h(){M(l,"class","h-dvh w-full p-4"),M(e,"class","w-full bg-gray-50")},m(n,o){T(n,e,o),se(e,l),v(a,l,null),s=!0},p:ue,i(n){s||(V(a.$$.fragment,n),s=!0)},o(n){C(a.$$.fragment,n),s=!1},d(n){n&&y(e),P(a)}}}class Le extends x{constructor(e){super(),ee(this,e,null,Ae,L,{})}}export{Le as component};
