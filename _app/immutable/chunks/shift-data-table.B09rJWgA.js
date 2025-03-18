import{s as fe,w as T,e as ue,a as M,c as de,b as ce,g as N,f as A,m as J,i as q,h as me,x as v,B as L,q as ae,u as se,r as ne,v as re}from"./scheduler.DpdggcV9.js";import{S as _e,i as ge,e as E,c as I,a as F,m as D,t as p,g as pe,b as h,f as he,d as C}from"./index.KweK3yxl.js";import{d as Q,$ as U,B as be,s as $e,f as W,h as we,S as Se,i as X}from"./stores.CiPEPIsB.js";import{w as Ie}from"./index.DKR0vYLz.js";import{D as Fe,c as Y,T as De,a as Ce}from"./table-header.BNCtrxSs.js";import{E as ke,D as Ve,j as Ke,S as Te,h as ve,i as Ee}from"./delete-dialog.B_NFlwz3.js";import{C as je}from"./column-hide-selector.C-7mzX7I.js";const ze=s=>({}),x=s=>({}),Ae=s=>({}),ee=s=>({});function te(s){let e,r;return e=new De({props:{sticky:!0,$$slots:{end:[Ne],middle:[Me],start:[Be]},$$scope:{ctx:s}}}),{c(){I(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,o){D(e,t,o),r=!0},p(t,o){const l={};o&33554640&&(l.$$scope={dirty:o,ctx:t}),e.$set(l)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function Pe(s){let e,r;return e=new Ee({}),{c(){I(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,o){D(e,t,o),r=!0},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function Be(s){let e,r,t;e=new be({props:{class:"text-muted-foreground hover:text-accent-foreground",size:"icon-xl",variant:"ghost",$$slots:{default:[Pe]},$$scope:{ctx:s}}}),e.$on("click",s[14]);const o=s[16].start,l=ae(o,s,s[25],x);return{c(){I(e.$$.fragment),r=M(),l&&l.c()},l(f){F(e.$$.fragment,f),r=N(f),l&&l.l(f)},m(f,c){D(e,f,c),q(f,r,c),l&&l.m(f,c),t=!0},p(f,c){const i={};c&33554432&&(i.$$scope={dirty:c,ctx:f}),e.$set(i),l&&l.p&&(!t||c&33554432)&&se(l,o,f,f[25],t?re(o,f[25],c,ze):ne(f[25]),x)},i(f){t||(p(e.$$.fragment,f),p(l,f),t=!0)},o(f){h(e.$$.fragment,f),h(l,f),t=!1},d(f){f&&A(r),C(e,f),l&&l.d(f)}}}function Me(s){let e;const r=s[16].middle,t=ae(r,s,s[25],ee);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,l){t&&t.m(o,l),e=!0},p(o,l){t&&t.p&&(!e||l&33554432)&&se(t,r,o,o[25],e?re(r,o[25],l,Ae):ne(o[25]),ee)},i(o){e||(p(t,o),e=!0)},o(o){h(t,o),e=!1},d(o){t&&t.d(o)}}}function Ne(s){let e,r,t,o,l;function f(i){s[17](i)}let c={flatColumns:s[7]};return s[6]!==void 0&&(c.hideForId=s[6]),e=new je({props:c}),T.push(()=>E(e,"hideForId",f)),o=new Te({props:{onInput:s[18]}}),{c(){I(e.$$.fragment),t=M(),I(o.$$.fragment)},l(i){F(e.$$.fragment,i),t=N(i),F(o.$$.fragment,i)},m(i,m){D(e,i,m),q(i,t,m),D(o,i,m),l=!0},p(i,m){const _={};m&128&&(_.flatColumns=i[7]),!r&&m&64&&(r=!0,_.hideForId=i[6],v(()=>r=!1)),e.$set(_);const b={};m&16&&(b.onInput=i[18]),o.$set(b)},i(i){l||(p(e.$$.fragment,i),p(o.$$.fragment,i),l=!0)},o(i){h(e.$$.fragment,i),h(o.$$.fragment,i),l=!1},d(i){i&&A(t),C(e,i),C(o,i)}}}function qe(s){let e,r,t,o,l,f,c,i,m,_,b,w,g,k,S,d=s[1]&&te(s);function j(n){s[19](n)}function V(n){s[20](n)}function P(n){s[21](n)}function O(n){s[22](n)}let K={class:"w-full",columnInitializers:s[12],data:s[0],actions:s[3],header:s[1],defaultAction:s[13]};s[4]!==void 0&&(K.filterValue=s[4]),s[7]!==void 0&&(K.flatColumns=s[7]),s[6]!==void 0&&(K.hideForId=s[6]),s[5]!==void 0&&(K.sortKeys=s[5]),t=new Fe({props:K}),T.push(()=>E(t,"filterValue",j)),T.push(()=>E(t,"flatColumns",V)),T.push(()=>E(t,"hideForId",P)),T.push(()=>E(t,"sortKeys",O));function R(n){s[23](n)}let Z={selected:s[8],title:s[11]};s[10]!==void 0&&(Z.open=s[10]),_=new ke({props:Z}),T.push(()=>E(_,"open",R));function y(n){s[24](n)}let G={selected:s[8]};return s[9]!==void 0&&(G.open=s[9]),g=new Ve({props:G}),T.push(()=>E(g,"open",y)),{c(){e=ue("div"),d&&d.c(),r=M(),I(t.$$.fragment),m=M(),I(_.$$.fragment),w=M(),I(g.$$.fragment),this.h()},l(n){e=de(n,"DIV",{class:!0});var u=ce(e);d&&d.l(u),r=N(u),F(t.$$.fragment,u),u.forEach(A),m=N(n),F(_.$$.fragment,n),w=N(n),F(g.$$.fragment,n),this.h()},h(){J(e,"class",i="flex flex-col items-start justify-start "+s[2])},m(n,u){q(n,e,u),d&&d.m(e,null),me(e,r),D(t,e,null),q(n,m,u),D(_,n,u),q(n,w,u),D(g,n,u),S=!0},p(n,[u]){n[1]?d?(d.p(n,u),u&2&&p(d,1)):(d=te(n),d.c(),p(d,1),d.m(e,r)):d&&(pe(),h(d,1,1,()=>{d=null}),he());const $={};u&1&&($.data=n[0]),u&8&&($.actions=n[3]),u&2&&($.header=n[1]),!o&&u&16&&(o=!0,$.filterValue=n[4],v(()=>o=!1)),!l&&u&128&&(l=!0,$.flatColumns=n[7],v(()=>l=!1)),!f&&u&64&&(f=!0,$.hideForId=n[6],v(()=>f=!1)),!c&&u&32&&(c=!0,$.sortKeys=n[5],v(()=>c=!1)),t.$set($),(!S||u&4&&i!==(i="flex flex-col items-start justify-start "+n[2]))&&J(e,"class",i);const z={};u&256&&(z.selected=n[8]),u&2048&&(z.title=n[11]),!b&&u&1024&&(b=!0,z.open=n[10],v(()=>b=!1)),_.$set(z);const B={};u&256&&(B.selected=n[8]),!k&&u&512&&(k=!0,B.open=n[9],v(()=>k=!1)),g.$set(B)},i(n){S||(p(d),p(t.$$.fragment,n),p(_.$$.fragment,n),p(g.$$.fragment,n),S=!0)},o(n){h(d),h(t.$$.fragment,n),h(_.$$.fragment,n),h(g.$$.fragment,n),S=!1},d(n){n&&(A(e),A(m),A(w)),d&&d.d(),C(t),C(_,n),C(g,n)}}}function Oe(s,e,r){let{$$slots:t={},$$scope:o}=e;const l=new Q(navigator.language||"en",{timeZone:U(),timeStyle:"short",dateStyle:void 0}),f=new Q(navigator.language||"en",{timeZone:U(),timeStyle:void 0,dateStyle:"long"});let{data:c}=e,{header:i=!0}=e,{state:m=$e}=e,_=new Map,b=Ie(""),w=Ce([]),g={},k,{class:S=""}=e,d,j=!1,V=!1,P="Edit Person",O=[{accessor:a=>a,cell:a=>Y(ve,{item:a.value}),header:"Icon",id:"icon",plugins:{sort:{disable:!0},tableFilter:{disable:!0}}},{accessor:a=>a.name,header:"Name",id:"name"},{accessor:a=>l.format(a.recurrence.dtStart.toDate()),header:"Start Time",id:"timestart"},{accessor:a=>`${W(a.recurrence.duration)}`,header:"Actual Duration",id:"actualDuration"},{accessor:a=>`${W(a.paidDuration)}`,header:"Contracted Duration",id:"contractedDuration"},{accessor:a=>f.format(a.recurrence.dtStart.toDate()),header:"Start Date",id:"datestart"},{accessor:a=>we(a.recurrence.toText()),header:"Recurrence",id:"recurrence"}];const K=m.settings;L(K).assignmentMode==="granular"&&O.push({accessor:a=>Array.from(a.tasks.values()),cell:a=>Y(Ke,{items:a.value,placeholder:"No Tasks"}),header:"Tasks in Shift",id:"tasks",plugins:{sort:{getSortValue:a=>a.map(H=>H.name).join(" ")},tableFilter:{getFilterValue:a=>a.map(H=>H.name).join(" ")}}});let{actions:R=new Map([..._,["Edit",y],["Delete",Z]])}=e;function Z(a){L(m.settings).askDeleteConfirmation?(r(8,d=a),r(9,j=!0)):a.delete()}function y(a){r(11,P="Edit Shift"),r(8,d=a.pull()),r(10,V=!0)}function G(){r(11,P="Create new Shift"),r(8,d=new Se({name:"",pattern:{start:new X(9,0),end:new X(17,0)}},m)),r(10,V=!0)}function n(a){g=a,r(6,g)}const u=a=>b.set(a);function $(a){b=a,r(4,b)}function z(a){k=a,r(7,k)}function B(a){g=a,r(6,g)}function oe(a){w=a,r(5,w)}function ie(a){V=a,r(10,V)}function le(a){j=a,r(9,j)}return s.$$set=a=>{"data"in a&&r(0,c=a.data),"header"in a&&r(1,i=a.header),"state"in a&&r(15,m=a.state),"class"in a&&r(2,S=a.class),"actions"in a&&r(3,R=a.actions),"$$scope"in a&&r(25,o=a.$$scope)},[c,i,S,R,b,w,g,k,d,j,V,P,O,y,G,m,t,n,u,$,z,B,oe,ie,le,o]}class Qe extends _e{constructor(e){super(),ge(this,e,Oe,qe,fe,{data:0,header:1,state:15,class:2,actions:3})}}export{Qe as S};
