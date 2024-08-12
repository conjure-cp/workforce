import{s as Z,w as C,x as w,a as N,e as L,g as M,c as Q,b as W,f as v,r as U,i as E,h as ue,o as x,u as ee,p as te,q as se,n as me}from"../chunks/scheduler.Ciux9Hyk.js";import{S as ne,i as ae,e as V,c as P,a as K,m as S,t as F,b as I,d as $}from"../chunks/index.DZw56Mkm.js";import{T as _e}from"../chunks/top_bar.BJQDUewV.js";import{S as ce,P as ge}from"../chunks/person-tooltip.f9BnB8o5.js";import{D as pe,c as T,R as he,a as de,C as be}from"../chunks/row-actions.BmjIkkx6.js";import{e as X,h as Fe,i as Ie,j as oe,k as H,f as ye,m as Ce}from"../chunks/person.DAH1PmLn.js";import{w as Y}from"../chunks/parse.C8hxPnsn.js";import{a as we}from"../chunks/skill-badge.C3DV0_iw.js";import{S as Ve}from"../chunks/skills-list.DVBHjtGt.js";import{C as ve}from"../chunks/constraints-for-list.DLUTEuFL.js";import{P as Pe}from"../chunks/person-edit-dialog.BNg-LuIW.js";import{B as Ke}from"../chunks/index.DzAT84GV.js";function Se(t){let e,s,l,f,n,a;function _(r){t[8](r)}function d(r){t[9](r)}function h(r){t[10](r)}function b(r){t[11](r)}let o={data:t[4],columnInitializers:t[6],class:t[5]};return t[0]!==void 0&&(o.filterValue=t[0]),t[1]!==void 0&&(o.sortKeys=t[1]),t[2]!==void 0&&(o.hideForId=t[2]),t[3]!==void 0&&(o.flatColumns=t[3]),e=new pe({props:o}),C.push(()=>V(e,"filterValue",_)),C.push(()=>V(e,"sortKeys",d)),C.push(()=>V(e,"hideForId",h)),C.push(()=>V(e,"flatColumns",b)),{c(){P(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,c){S(e,r,c),a=!0},p(r,[c]){const p={};c&16&&(p.data=r[4]),c&32&&(p.class=r[5]),!s&&c&1&&(s=!0,p.filterValue=r[0],w(()=>s=!1)),!l&&c&2&&(l=!0,p.sortKeys=r[1],w(()=>l=!1)),!f&&c&4&&(f=!0,p.hideForId=r[2],w(()=>f=!1)),!n&&c&8&&(n=!0,p.flatColumns=r[3],w(()=>n=!1)),e.$set(p)},i(r){a||(F(e.$$.fragment,r),a=!0)},o(r){I(e.$$.fragment,r),a=!1},d(r){$(e,r)}}}function $e(t,e,s){let{data:l=X}=e,{actions:f=new Map}=e,{filterValue:n=Y("")}=e,{sortKeys:a=de([])}=e,{hideForId:_={}}=e,{flatColumns:d}=e,{class:h=""}=e,b=[{id:"avatar",accessor:i=>i,header:"Avatar",cell:i=>T(we,{person:i.value}),plugins:{tableFilter:{disable:!0},sort:{disable:!0}}},{id:"name",accessor:"name",header:"Name"},{id:"age",accessor:i=>Fe(i),header:"Age"},{id:"job_title",accessor:"job_title",header:"Job Title"},{id:"skills",accessor:i=>Ie(i),header:"Skills",cell:i=>T(Ve,{skills:i.value}),plugins:{tableFilter:{getFilterValue:i=>i.map(y=>y.name).join(" ")},sort:{getSortValue:i=>i.map(y=>y.name).join(" ")}}},{id:"constraints",accessor:i=>i,header:"Constraints",cell:i=>T(ve,{forOperand:i.value}),plugins:{tableFilter:{getFilterValue:i=>oe(i).map(y=>y.type).join(" ")},sort:{getSortValue:i=>oe(i).map(y=>y.type).join(" ")}}}];f.size>0&&b.push({id:"actions",accessor:i=>i,header:"Actions",cell:i=>T(he,{item:i.value,actions:f}),plugins:{tableFilter:{disable:!0},sort:{disable:!0}}});function o(i){n=i,s(0,n)}function r(i){a=i,s(1,a)}function c(i){_=i,s(2,_)}function p(i){d=i,s(3,d)}return t.$$set=i=>{"data"in i&&s(4,l=i.data),"actions"in i&&s(7,f=i.actions),"filterValue"in i&&s(0,n=i.filterValue),"sortKeys"in i&&s(1,a=i.sortKeys),"hideForId"in i&&s(2,_=i.hideForId),"flatColumns"in i&&s(3,d=i.flatColumns),"class"in i&&s(5,h=i.class)},[n,a,_,d,l,h,b,f,o,r,c,p]}class ke extends ne{constructor(e){super(),ae(this,e,$e,Se,Z,{data:4,actions:7,filterValue:0,sortKeys:1,hideForId:2,flatColumns:3,class:5})}}const je=t=>({}),ie=t=>({}),Ee=t=>({}),re=t=>({}),De=t=>({}),fe=t=>({});function Ae(t){let e,s;return e=new ge({}),{c(){P(e.$$.fragment)},l(l){K(e.$$.fragment,l)},m(l,f){S(e,l,f),s=!0},i(l){s||(F(e.$$.fragment,l),s=!0)},o(l){I(e.$$.fragment,l),s=!1},d(l){$(e,l)}}}function ze(t){let e,s,l;const f=t[11].start,n=x(f,t,t[20],ie);return s=new Ke({props:{size:"icon_xl",variant:"ghost",class:"text-muted-foreground hover:text-accent-foreground",$$slots:{default:[Ae]},$$scope:{ctx:t}}}),s.$on("click",t[9]),{c(){n&&n.c(),e=N(),P(s.$$.fragment)},l(a){n&&n.l(a),e=M(a),K(s.$$.fragment,a)},m(a,_){n&&n.m(a,_),E(a,e,_),S(s,a,_),l=!0},p(a,_){n&&n.p&&(!l||_&1048576)&&ee(n,f,a,a[20],l?se(f,a[20],_,je):te(a[20]),ie);const d={};_&1048576&&(d.$$scope={dirty:_,ctx:a}),s.$set(d)},i(a){l||(F(n,a),F(s.$$.fragment,a),l=!0)},o(a){I(n,a),I(s.$$.fragment,a),l=!1},d(a){a&&v(e),n&&n.d(a),$(s,a)}}}function Ne(t){let e;const s=t[11].middle,l=x(s,t,t[20],re);return{c(){l&&l.c()},l(f){l&&l.l(f)},m(f,n){l&&l.m(f,n),e=!0},p(f,n){l&&l.p&&(!e||n&1048576)&&ee(l,s,f,f[20],e?se(s,f[20],n,Ee):te(f[20]),re)},i(f){e||(F(l,f),e=!0)},o(f){I(l,f),e=!1},d(f){l&&l.d(f)}}}function Me(t){let e,s,l,f,n,a;const _=t[11].end,d=x(_,t,t[20],fe);function h(o){t[14](o)}let b={flatColumns:t[4]};return t[5]!==void 0&&(b.hideForId=t[5]),s=new be({props:b}),C.push(()=>V(s,"hideForId",h)),n=new ce({props:{onInput:t[15]}}),{c(){d&&d.c(),e=N(),P(s.$$.fragment),f=N(),P(n.$$.fragment)},l(o){d&&d.l(o),e=M(o),K(s.$$.fragment,o),f=M(o),K(n.$$.fragment,o)},m(o,r){d&&d.m(o,r),E(o,e,r),S(s,o,r),E(o,f,r),S(n,o,r),a=!0},p(o,r){d&&d.p&&(!a||r&1048576)&&ee(d,_,o,o[20],a?se(_,o[20],r,De):te(o[20]),fe);const c={};r&16&&(c.flatColumns=o[4]),!l&&r&32&&(l=!0,c.hideForId=o[5],w(()=>l=!1)),s.$set(c);const p={};r&4&&(p.onInput=o[15]),n.$set(p)},i(o){a||(F(d,o),F(s.$$.fragment,o),F(n.$$.fragment,o),a=!0)},o(o){I(d,o),I(s.$$.fragment,o),I(n.$$.fragment,o),a=!1},d(o){o&&(v(e),v(f)),d&&d.d(o),$(s,o),$(n,o)}}}function Re(t){let e,s,l,f,n,a,_,d,h,b,o,r,c,p;function i(u){t[12](u)}function y(u){t[13](u)}let D={onSubmit:t[8]};t[7]!==void 0&&(D.personProps=t[7]),t[6]!==void 0&&(D.open=t[6]),e=new Pe({props:D}),C.push(()=>V(e,"personProps",i)),C.push(()=>V(e,"open",y)),a=new _e({props:{sticky:!0,$$slots:{end:[Me],middle:[Ne],start:[ze]},$$scope:{ctx:t}}});function q(u){t[16](u)}function B(u){t[17](u)}function J(u){t[18](u)}function O(u){t[19](u)}let k={data:t[0],actions:t[10],class:"w-full"};return t[2]!==void 0&&(k.filterValue=t[2]),t[3]!==void 0&&(k.sortKeys=t[3]),t[5]!==void 0&&(k.hideForId=t[5]),t[4]!==void 0&&(k.flatColumns=t[4]),d=new ke({props:k}),C.push(()=>V(d,"filterValue",q)),C.push(()=>V(d,"sortKeys",B)),C.push(()=>V(d,"hideForId",J)),C.push(()=>V(d,"flatColumns",O)),{c(){P(e.$$.fragment),f=N(),n=L("div"),P(a.$$.fragment),_=N(),P(d.$$.fragment),this.h()},l(u){K(e.$$.fragment,u),f=M(u),n=Q(u,"DIV",{class:!0});var g=W(n);K(a.$$.fragment,g),_=M(g),K(d.$$.fragment,g),g.forEach(v),this.h()},h(){U(n,"class",c="h-full w-full flex flex-col items-start justify-start overflow-y-scroll "+t[1])},m(u,g){S(e,u,g),E(u,f,g),E(u,n,g),S(a,n,null),ue(n,_),S(d,n,null),p=!0},p(u,[g]){const A={};!s&&g&128&&(s=!0,A.personProps=u[7],w(()=>s=!1)),!l&&g&64&&(l=!0,A.open=u[6],w(()=>l=!1)),e.$set(A);const R={};g&1048628&&(R.$$scope={dirty:g,ctx:u}),a.$set(R);const m={};g&1&&(m.data=u[0]),!h&&g&4&&(h=!0,m.filterValue=u[2],w(()=>h=!1)),!b&&g&8&&(b=!0,m.sortKeys=u[3],w(()=>b=!1)),!o&&g&32&&(o=!0,m.hideForId=u[5],w(()=>o=!1)),!r&&g&16&&(r=!0,m.flatColumns=u[4],w(()=>r=!1)),d.$set(m),(!p||g&2&&c!==(c="h-full w-full flex flex-col items-start justify-start overflow-y-scroll "+u[1]))&&U(n,"class",c)},i(u){p||(F(e.$$.fragment,u),F(a.$$.fragment,u),F(d.$$.fragment,u),p=!0)},o(u){I(e.$$.fragment,u),I(a.$$.fragment,u),I(d.$$.fragment,u),p=!1},d(u){u&&(v(f),v(n)),$(e,u),$(a),$(d)}}}function Te(t,e,s){let{$$slots:l={},$$scope:f}=e,{data:n=X}=e,a=Y(""),_=de([]),d,h={},{class:b=""}=e,o=!1,r,c=Y(H());function p(m){r=m.uuid,c.set(m),s(6,o=!0)}function i(m){Ce(m)}function y(m){console.log("onSubmit"),X.update(j=>{if(r!==void 0){const z=j.findIndex(G=>G.uuid===r);if(z!==-1){console.log("Updating index: ",z);const G=j[z];return j[z]={...G,...m},console.log(j[z]),j}}let le=ye(m);return console.log("Created person: ",le),j.push(le),j}),c.set(H()),r=void 0,s(6,o=!1)}function D(){c.set(H()),r=void 0,s(6,o=!0)}const q=new Map([["Edit",p],["Delete",i]]);function B(m){c=m,s(7,c)}function J(m){o=m,s(6,o)}function O(m){h=m,s(5,h)}const k=m=>a.set(m);function u(m){a=m,s(2,a)}function g(m){_=m,s(3,_)}function A(m){h=m,s(5,h)}function R(m){d=m,s(4,d)}return t.$$set=m=>{"data"in m&&s(0,n=m.data),"class"in m&&s(1,b=m.class),"$$scope"in m&&s(20,f=m.$$scope)},[n,b,a,_,d,h,o,c,y,D,q,l,B,J,O,k,u,g,A,R,f]}class Ue extends ne{constructor(e){super(),ae(this,e,Te,Re,Z,{data:0,class:1})}}function qe(t){let e,s,l,f;return l=new Ue({}),{c(){e=L("div"),s=L("main"),P(l.$$.fragment),this.h()},l(n){e=Q(n,"DIV",{class:!0});var a=W(e);s=Q(a,"MAIN",{class:!0});var _=W(s);K(l.$$.fragment,_),_.forEach(v),a.forEach(v),this.h()},h(){U(s,"class","w-full h-dvh p-4"),U(e,"class","bg-gray-50 w-full")},m(n,a){E(n,e,a),ue(e,s),S(l,s,null),f=!0},p:me,i(n){f||(F(l.$$.fragment,n),f=!0)},o(n){I(l.$$.fragment,n),f=!1},d(n){n&&v(e),$(l)}}}class et extends ne{constructor(e){super(),ae(this,e,null,qe,Z,{})}}export{et as component};