import{ab as $e,ac as me,s as T,p as E,i as k,f as g,H as P,v as h,w as j,B as le,x as D,e as q,c as H,b as W,E as F,y as O,z as R,A as V,n as te,m as Me,ad as ge,k as Ce,t as X,a as z,d as Y,g as G,q as Z,h as B,j as w}from"./scheduler.CZ3r9TeU.js";import{S as L,i as y,g as K,t as _,c as Q,a as c,b as $,d as M,m as C,e as A}from"./index.DFxY8T0a.js";import{t as Ae,o as Se,d as Ne,r as Ee,g as Pe,R as Ie,T as he,a as ve,P as be}from"./skills-list.BQVBPAmb.js";import{o as je,h as Te,i as Le,m as ne,j as re,g as U,a as x,d as J}from"./index.C7klv15s.js";import{w as ye}from"./index.Ctk9Tx04.js";import{I as pe}from"./icon._A--zFh1.js";const De={src:"",delayMs:0,onLoadingStatusChange:void 0},Oe=r=>{const e={...De,...r},s=Ae(je(e,"loadingStatus","onLoadingStatusChange")),{src:t,delayMs:a}=s,l=e.loadingStatus??ye("loading"),n=Se(l,e==null?void 0:e.onLoadingStatusChange);Te([t,a],([f,u])=>{if(Le){const v=new Image;v.src=f,v.onload=()=>{if(a!==void 0){const S=window.setTimeout(()=>{n.set("loaded")},u);return()=>window.clearTimeout(S)}else n.set("loaded")},v.onerror=()=>{n.set("error")}}});const i=ne("avatar-image",{stores:[t,n],returned:([f,u])=>{const v=re({display:u==="loaded"?"block":"none"});return{src:f,style:v}}}),o=ne("avatar-fallback",{stores:[n],returned:([f])=>({style:f==="loaded"?re({display:"none"}):void 0,hidden:f==="loaded"?!0:void 0})});return{elements:{image:i,fallback:o},states:{loadingStatus:n},options:s}};function se(){return{NAME:"avatar",PARTS:["root","image","fallback"]}}function Re(r){const{NAME:e,PARTS:s}=se(),t=Ne(e,s),a={...Oe(Ee(r)),getAttrs:t};return $e(e,a),{...a,updateOption:Pe(a.options)}}function Ve(r=""){const{NAME:e}=se(),s=me(e);return r?s.options.src.set(r):s.options.src.set(""),s}function qe(){const{NAME:r}=se();return me(r)}const He=r=>({}),oe=r=>({attrs:r[2]}),Ue=r=>({}),ie=r=>({attrs:r[2]});function Be(r){let e,s;const t=r[8].default,a=D(t,r,r[7],oe);let l=[r[3],r[2]],n={};for(let i=0;i<l.length;i+=1)n=h(n,l[i]);return{c(){e=q("div"),a&&a.c(),this.h()},l(i){e=H(i,"DIV",{});var o=W(e);a&&a.l(o),o.forEach(g),this.h()},h(){F(e,n)},m(i,o){k(i,e,o),a&&a.m(e,null),r[9](e),s=!0},p(i,o){a&&a.p&&(!s||o&128)&&O(a,t,i,i[7],s?V(t,i[7],o,He):R(i[7]),oe),F(e,n=U(l,[o&8&&i[3],i[2]]))},i(i){s||(c(a,i),s=!0)},o(i){_(a,i),s=!1},d(i){i&&g(e),a&&a.d(i),r[9](null)}}}function We(r){let e;const s=r[8].default,t=D(s,r,r[7],ie);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,l){t&&t.m(a,l),e=!0},p(a,l){t&&t.p&&(!e||l&128)&&O(t,s,a,a[7],e?V(s,a[7],l,Ue):R(a[7]),ie)},i(a){e||(c(t,a),e=!0)},o(a){_(t,a),e=!1},d(a){t&&t.d(a)}}}function ze(r){let e,s,t,a;const l=[We,Be],n=[];function i(o,f){return o[1]?0:1}return e=i(r),s=n[e]=l[e](r),{c(){s.c(),t=E()},l(o){s.l(o),t=E()},m(o,f){n[e].m(o,f),k(o,t,f),a=!0},p(o,[f]){let u=e;e=i(o),e===u?n[e].p(o,f):(K(),_(n[u],1,1,()=>{n[u]=null}),Q(),s=n[e],s?s.p(o,f):(s=n[e]=l[e](o),s.c()),c(s,1),s.m(t.parentNode,t))},i(o){a||(c(s),a=!0)},o(o){_(s),a=!1},d(o){o&&g(t),n[e].d(o)}}}function Ge(r,e,s){const t=["delayMs","loadingStatus","onLoadingStatusChange","asChild","el"];let a=P(e,t),{$$slots:l={},$$scope:n}=e,{delayMs:i=void 0}=e,{loadingStatus:o=void 0}=e,{onLoadingStatusChange:f=void 0}=e,{asChild:u=!1}=e,{el:v=void 0}=e;const{states:{loadingStatus:S},updateOption:N,getAttrs:I}=Re({src:"",delayMs:i,onLoadingStatusChange:({next:d})=>(s(4,o=d),f==null||f(d),d)}),m=I("root");function b(d){le[d?"unshift":"push"](()=>{v=d,s(0,v)})}return r.$$set=d=>{e=h(h({},e),j(d)),s(3,a=P(e,t)),"delayMs"in d&&s(5,i=d.delayMs),"loadingStatus"in d&&s(4,o=d.loadingStatus),"onLoadingStatusChange"in d&&s(6,f=d.onLoadingStatusChange),"asChild"in d&&s(1,u=d.asChild),"el"in d&&s(0,v=d.el),"$$scope"in d&&s(7,n=d.$$scope)},r.$$.update=()=>{r.$$.dirty&16&&o!==void 0&&S.set(o),r.$$.dirty&32&&N("delayMs",i)},[v,u,m,a,o,i,f,n,l,b]}let Fe=class extends L{constructor(e){super(),y(this,e,Ge,ze,T,{delayMs:5,loadingStatus:4,onLoadingStatusChange:6,asChild:1,el:0})}};const Je=r=>({builder:r&8}),fe=r=>({builder:r[3]});function Ke(r){let e,s,t,a=[r[3],{alt:r[1]},r[5]],l={};for(let n=0;n<a.length;n+=1)l=h(l,a[n]);return{c(){e=q("img"),this.h()},l(n){e=H(n,"IMG",{alt:!0}),this.h()},h(){F(e,l)},m(n,i){k(n,e,i),r[10](e),s||(t=ge(r[3].action(e)),s=!0)},p(n,i){F(e,l=U(a,[i&8&&n[3],i&2&&{alt:n[1]},i&32&&n[5]]))},i:te,o:te,d(n){n&&g(e),r[10](null),s=!1,t()}}}function Qe(r){let e;const s=r[9].default,t=D(s,r,r[8],fe);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,l){t&&t.m(a,l),e=!0},p(a,l){t&&t.p&&(!e||l&264)&&O(t,s,a,a[8],e?V(s,a[8],l,Je):R(a[8]),fe)},i(a){e||(c(t,a),e=!0)},o(a){_(t,a),e=!1},d(a){t&&t.d(a)}}}function Xe(r){let e,s,t,a;const l=[Qe,Ke],n=[];function i(o,f){return o[2]?0:1}return e=i(r),s=n[e]=l[e](r),{c(){s.c(),t=E()},l(o){s.l(o),t=E()},m(o,f){n[e].m(o,f),k(o,t,f),a=!0},p(o,[f]){let u=e;e=i(o),e===u?n[e].p(o,f):(K(),_(n[u],1,1,()=>{n[u]=null}),Q(),s=n[e],s?s.p(o,f):(s=n[e]=l[e](o),s.c()),c(s,1),s.m(t.parentNode,t))},i(o){a||(c(s),a=!0)},o(o){_(s),a=!1},d(o){o&&g(t),n[e].d(o)}}}function Ye(r,e,s){let t,a;const l=["src","alt","asChild","el"];let n=P(e,l),i,o=te,f=()=>(o(),o=Me(t,p=>s(7,i=p)),t);r.$$.on_destroy.push(()=>o());let{$$slots:u={},$$scope:v}=e,{src:S=void 0}=e,{alt:N=void 0}=e,{asChild:I=!1}=e,{el:m=void 0}=e;const b={"data-bits-avatar-image":""};function d(p){le[p?"unshift":"push"](()=>{m=p,s(0,m)})}return r.$$set=p=>{e=h(h({},e),j(p)),s(5,n=P(e,l)),"src"in p&&s(6,S=p.src),"alt"in p&&s(1,N=p.alt),"asChild"in p&&s(2,I=p.asChild),"el"in p&&s(0,m=p.el),"$$scope"in p&&s(8,v=p.$$scope)},r.$$.update=()=>{r.$$.dirty&64&&f(s(4,t=Ve(S).elements.image)),r.$$.dirty&128&&s(3,a=i),r.$$.dirty&8&&Object.assign(a,b)},[m,N,I,a,t,n,S,i,v,u,d]}let Ze=class extends L{constructor(e){super(),y(this,e,Ye,Xe,T,{src:6,alt:1,asChild:2,el:0})}};const we=r=>({builder:r&4}),ue=r=>({builder:r[2]}),xe=r=>({builder:r&4}),ce=r=>({builder:r[2]});function et(r){let e,s,t,a;const l=r[7].default,n=D(l,r,r[6],ue);let i=[r[2],r[4]],o={};for(let f=0;f<i.length;f+=1)o=h(o,i[f]);return{c(){e=q("span"),n&&n.c(),this.h()},l(f){e=H(f,"SPAN",{});var u=W(e);n&&n.l(u),u.forEach(g),this.h()},h(){F(e,o)},m(f,u){k(f,e,u),n&&n.m(e,null),r[8](e),s=!0,t||(a=ge(r[2].action(e)),t=!0)},p(f,u){n&&n.p&&(!s||u&68)&&O(n,l,f,f[6],s?V(l,f[6],u,we):R(f[6]),ue),F(e,o=U(i,[u&4&&f[2],u&16&&f[4]]))},i(f){s||(c(n,f),s=!0)},o(f){_(n,f),s=!1},d(f){f&&g(e),n&&n.d(f),r[8](null),t=!1,a()}}}function tt(r){let e;const s=r[7].default,t=D(s,r,r[6],ce);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,l){t&&t.m(a,l),e=!0},p(a,l){t&&t.p&&(!e||l&68)&&O(t,s,a,a[6],e?V(s,a[6],l,xe):R(a[6]),ce)},i(a){e||(c(t,a),e=!0)},o(a){_(t,a),e=!1},d(a){t&&t.d(a)}}}function lt(r){let e,s,t,a;const l=[tt,et],n=[];function i(o,f){return o[1]?0:1}return e=i(r),s=n[e]=l[e](r),{c(){s.c(),t=E()},l(o){s.l(o),t=E()},m(o,f){n[e].m(o,f),k(o,t,f),a=!0},p(o,[f]){let u=e;e=i(o),e===u?n[e].p(o,f):(K(),_(n[u],1,1,()=>{n[u]=null}),Q(),s=n[e],s?s.p(o,f):(s=n[e]=l[e](o),s.c()),c(s,1),s.m(t.parentNode,t))},i(o){a||(c(s),a=!0)},o(o){_(s),a=!1},d(o){o&&g(t),n[e].d(o)}}}function st(r,e,s){let t;const a=["asChild","el"];let l=P(e,a),n,{$$slots:i={},$$scope:o}=e,{asChild:f=!1}=e,{el:u=void 0}=e;const{elements:{fallback:v},getAttrs:S}=qe();Ce(r,v,m=>s(5,n=m));const N=S("fallback");function I(m){le[m?"unshift":"push"](()=>{u=m,s(0,u)})}return r.$$set=m=>{e=h(h({},e),j(m)),s(4,l=P(e,a)),"asChild"in m&&s(1,f=m.asChild),"el"in m&&s(0,u=m.el),"$$scope"in m&&s(6,o=m.$$scope)},r.$$.update=()=>{r.$$.dirty&32&&s(2,t=n),r.$$.dirty&4&&Object.assign(t,N)},[u,f,t,v,l,n,o,i,I]}let at=class extends L{constructor(e){super(),y(this,e,st,lt,T,{asChild:1,el:0})}};function nt(r){let e;const s=r[2].default,t=D(s,r,r[3],null);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,l){t&&t.m(a,l),e=!0},p(a,l){t&&t.p&&(!e||l&8)&&O(t,s,a,a[3],e?V(s,a[3],l,null):R(a[3]),null)},i(a){e||(c(t,a),e=!0)},o(a){_(t,a),e=!1},d(a){t&&t.d(a)}}}function rt(r){let e,s;const t=[{name:"cake"},r[1],{iconNode:r[0]}];let a={$$slots:{default:[nt]},$$scope:{ctx:r}};for(let l=0;l<t.length;l+=1)a=h(a,t[l]);return e=new pe({props:a}),{c(){$(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,n){C(e,l,n),s=!0},p(l,[n]){const i=n&3?U(t,[t[0],n&2&&x(l[1]),n&1&&{iconNode:l[0]}]):{};n&8&&(i.$$scope={dirty:n,ctx:l}),e.$set(i)},i(l){s||(c(e.$$.fragment,l),s=!0)},o(l){_(e.$$.fragment,l),s=!1},d(l){A(e,l)}}}function ot(r,e,s){let{$$slots:t={},$$scope:a}=e;const l=[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"}],["path",{d:"M2 21h20"}],["path",{d:"M7 8v3"}],["path",{d:"M12 8v3"}],["path",{d:"M17 8v3"}],["path",{d:"M7 4h.01"}],["path",{d:"M12 4h.01"}],["path",{d:"M17 4h.01"}]];return r.$$set=n=>{s(1,e=h(h({},e),j(n))),"$$scope"in n&&s(3,a=n.$$scope)},e=j(e),[l,e,t,a]}class it extends L{constructor(e){super(),y(this,e,ot,rt,T,{})}}function ft(r){let e;const s=r[2].default,t=D(s,r,r[3],null);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,l){t&&t.m(a,l),e=!0},p(a,l){t&&t.p&&(!e||l&8)&&O(t,s,a,a[3],e?V(s,a[3],l,null):R(a[3]),null)},i(a){e||(c(t,a),e=!0)},o(a){_(t,a),e=!1},d(a){t&&t.d(a)}}}function ut(r){let e,s;const t=[{name:"user"},r[1],{iconNode:r[0]}];let a={$$slots:{default:[ft]},$$scope:{ctx:r}};for(let l=0;l<t.length;l+=1)a=h(a,t[l]);return e=new pe({props:a}),{c(){$(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,n){C(e,l,n),s=!0},p(l,[n]){const i=n&3?U(t,[t[0],n&2&&x(l[1]),n&1&&{iconNode:l[0]}]):{};n&8&&(i.$$scope={dirty:n,ctx:l}),e.$set(i)},i(l){s||(c(e.$$.fragment,l),s=!0)},o(l){_(e.$$.fragment,l),s=!1},d(l){A(e,l)}}}function ct(r,e,s){let{$$slots:t={},$$scope:a}=e;const l=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];return r.$$set=n=>{s(1,e=h(h({},e),j(n))),"$$scope"in n&&s(3,a=n.$$scope)},e=j(e),[l,e,t,a]}class ke extends L{constructor(e){super(),y(this,e,ct,ut,T,{})}}function _t(r){let e;const s=r[3].default,t=D(s,r,r[4],null);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,l){t&&t.m(a,l),e=!0},p(a,l){t&&t.p&&(!e||l&16)&&O(t,s,a,a[4],e?V(s,a[4],l,null):R(a[4]),null)},i(a){e||(c(t,a),e=!0)},o(a){_(t,a),e=!1},d(a){t&&t.d(a)}}}function dt(r){let e,s;const t=[{delayMs:r[1]},{class:J("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",r[0])},r[2]];let a={$$slots:{default:[_t]},$$scope:{ctx:r}};for(let l=0;l<t.length;l+=1)a=h(a,t[l]);return e=new Fe({props:a}),{c(){$(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,n){C(e,l,n),s=!0},p(l,[n]){const i=n&7?U(t,[n&2&&{delayMs:l[1]},n&1&&{class:J("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",l[0])},n&4&&x(l[2])]):{};n&16&&(i.$$scope={dirty:n,ctx:l}),e.$set(i)},i(l){s||(c(e.$$.fragment,l),s=!0)},o(l){_(e.$$.fragment,l),s=!1},d(l){A(e,l)}}}function mt(r,e,s){const t=["class","delayMs"];let a=P(e,t),{$$slots:l={},$$scope:n}=e,{class:i=void 0}=e,{delayMs:o=void 0}=e;return r.$$set=f=>{e=h(h({},e),j(f)),s(2,a=P(e,t)),"class"in f&&s(0,i=f.class),"delayMs"in f&&s(1,o=f.delayMs),"$$scope"in f&&s(4,n=f.$$scope)},[i,o,a,l,n]}class gt extends L{constructor(e){super(),y(this,e,mt,dt,T,{class:0,delayMs:1})}}function ht(r){let e,s;const t=[{src:r[1]},{alt:r[2]},{class:J("aspect-square h-full w-full",r[0])},r[3]];let a={};for(let l=0;l<t.length;l+=1)a=h(a,t[l]);return e=new Ze({props:a}),{c(){$(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,n){C(e,l,n),s=!0},p(l,[n]){const i=n&15?U(t,[n&2&&{src:l[1]},n&4&&{alt:l[2]},n&1&&{class:J("aspect-square h-full w-full",l[0])},n&8&&x(l[3])]):{};e.$set(i)},i(l){s||(c(e.$$.fragment,l),s=!0)},o(l){_(e.$$.fragment,l),s=!1},d(l){A(e,l)}}}function vt(r,e,s){const t=["class","src","alt"];let a=P(e,t),{class:l=void 0}=e,{src:n=void 0}=e,{alt:i=void 0}=e;return r.$$set=o=>{e=h(h({},e),j(o)),s(3,a=P(e,t)),"class"in o&&s(0,l=o.class),"src"in o&&s(1,n=o.src),"alt"in o&&s(2,i=o.alt)},[l,n,i,a]}class bt extends L{constructor(e){super(),y(this,e,vt,ht,T,{class:0,src:1,alt:2})}}function pt(r){let e;const s=r[2].default,t=D(s,r,r[3],null);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,l){t&&t.m(a,l),e=!0},p(a,l){t&&t.p&&(!e||l&8)&&O(t,s,a,a[3],e?V(s,a[3],l,null):R(a[3]),null)},i(a){e||(c(t,a),e=!0)},o(a){_(t,a),e=!1},d(a){t&&t.d(a)}}}function kt(r){let e,s;const t=[{class:J("flex h-full w-full items-center justify-center rounded-full bg-muted",r[0])},r[1]];let a={$$slots:{default:[pt]},$$scope:{ctx:r}};for(let l=0;l<t.length;l+=1)a=h(a,t[l]);return e=new at({props:a}),{c(){$(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,n){C(e,l,n),s=!0},p(l,[n]){const i=n&3?U(t,[n&1&&{class:J("flex h-full w-full items-center justify-center rounded-full bg-muted",l[0])},n&2&&x(l[1])]):{};n&8&&(i.$$scope={dirty:n,ctx:l}),e.$set(i)},i(l){s||(c(e.$$.fragment,l),s=!0)},o(l){_(e.$$.fragment,l),s=!1},d(l){A(e,l)}}}function $t(r,e,s){const t=["class"];let a=P(e,t),{$$slots:l={},$$scope:n}=e,{class:i=void 0}=e;return r.$$set=o=>{e=h(h({},e),j(o)),s(1,a=P(e,t)),"class"in o&&s(0,i=o.class),"$$scope"in o&&s(3,n=o.$$scope)},[i,a,l,n]}class Mt extends L{constructor(e){super(),y(this,e,$t,kt,T,{class:0})}}function Ct(r){let e,s,t=r[0].name+"",a,l,n,i,o,f=r[0].age+"",u,v,S,N=r[0].job_title+"",I,m;return i=new it({}),{c(){e=q("div"),s=q("h3"),a=X(t),l=z(),n=q("div"),$(i.$$.fragment),o=z(),u=X(f),v=z(),S=q("div"),I=X(N),this.h()},l(b){e=H(b,"DIV",{class:!0});var d=W(e);s=H(d,"H3",{class:!0});var p=W(s);a=Y(p,t),p.forEach(g),l=G(d),n=H(d,"DIV",{class:!0});var ee=W(n);M(i.$$.fragment,ee),o=G(ee),u=Y(ee,f),ee.forEach(g),d.forEach(g),v=G(b),S=H(b,"DIV",{});var ae=W(S);I=Y(ae,N),ae.forEach(g),this.h()},h(){Z(s,"class","font-semibold"),Z(n,"class","flex flex-row ml-2 gap-1 items-center"),Z(e,"class","flex flex-row justify-between items-center")},m(b,d){k(b,e,d),B(e,s),B(s,a),B(e,l),B(e,n),C(i,n,null),B(n,o),B(n,u),k(b,v,d),k(b,S,d),B(S,I),m=!0},p(b,[d]){(!m||d&1)&&t!==(t=b[0].name+"")&&w(a,t),(!m||d&1)&&f!==(f=b[0].age+"")&&w(u,f),(!m||d&1)&&N!==(N=b[0].job_title+"")&&w(I,N)},i(b){m||(c(i.$$.fragment,b),m=!0)},o(b){_(i.$$.fragment,b),m=!1},d(b){b&&(g(e),g(v),g(S)),A(i)}}}function At(r,e,s){let{person:t}=e;return r.$$set=a=>{"person"in a&&s(0,t=a.person)},[t]}class St extends L{constructor(e){super(),y(this,e,At,Ct,T,{person:0})}}function Nt(r){let e,s,t,a;e=new he({props:{class:r[4],$$slots:{default:[jt]},$$scope:{ctx:r}}});let l=r[1]&&_e(r);return{c(){$(e.$$.fragment),s=z(),l&&l.c(),t=E()},l(n){M(e.$$.fragment,n),s=G(n),l&&l.l(n),t=E()},m(n,i){C(e,n,i),k(n,s,i),l&&l.m(n,i),k(n,t,i),a=!0},p(n,i){const o={};i&16&&(o.class=n[4]),i&41&&(o.$$scope={dirty:i,ctx:n}),e.$set(o),n[1]?l?(l.p(n,i),i&2&&c(l,1)):(l=_e(n),l.c(),c(l,1),l.m(t.parentNode,t)):l&&(K(),_(l,1,1,()=>{l=null}),Q())},i(n){a||(c(e.$$.fragment,n),c(l),a=!0)},o(n){_(e.$$.fragment,n),_(l),a=!1},d(n){n&&(g(s),g(t)),A(e,n),l&&l.d(n)}}}function Et(r){let e,s,t,a;e=new he({props:{class:r[4],$$slots:{default:[Ot]},$$scope:{ctx:r}}});let l=r[1]&&de(r);return{c(){$(e.$$.fragment),s=z(),l&&l.c(),t=E()},l(n){M(e.$$.fragment,n),s=G(n),l&&l.l(n),t=E()},m(n,i){C(e,n,i),k(n,s,i),l&&l.m(n,i),k(n,t,i),a=!0},p(n,i){const o={};i&16&&(o.class=n[4]),i&40&&(o.$$scope={dirty:i,ctx:n}),e.$set(o),n[1]?l?(l.p(n,i),i&2&&c(l,1)):(l=de(n),l.c(),c(l,1),l.m(t.parentNode,t)):l&&(K(),_(l,1,1,()=>{l=null}),Q())},i(n){a||(c(e.$$.fragment,n),c(l),a=!0)},o(n){_(e.$$.fragment,n),_(l),a=!1},d(n){n&&(g(s),g(t)),A(e,n),l&&l.d(n)}}}function Pt(r){let e=r[0].initials+"",s;return{c(){s=X(e)},l(t){s=Y(t,e)},m(t,a){k(t,s,a)},p(t,a){a&1&&e!==(e=t[0].initials+"")&&w(s,e)},d(t){t&&g(s)}}}function It(r){let e,s,t,a;return e=new bt({props:{src:r[0].image_url,alt:r[0].name}}),t=new Mt({props:{$$slots:{default:[Pt]},$$scope:{ctx:r}}}),{c(){$(e.$$.fragment),s=z(),$(t.$$.fragment)},l(l){M(e.$$.fragment,l),s=G(l),M(t.$$.fragment,l)},m(l,n){C(e,l,n),k(l,s,n),C(t,l,n),a=!0},p(l,n){const i={};n&1&&(i.src=l[0].image_url),n&1&&(i.alt=l[0].name),e.$set(i);const o={};n&33&&(o.$$scope={dirty:n,ctx:l}),t.$set(o)},i(l){a||(c(e.$$.fragment,l),c(t.$$.fragment,l),a=!0)},o(l){_(e.$$.fragment,l),_(t.$$.fragment,l),a=!1},d(l){l&&g(s),A(e,l),A(t,l)}}}function jt(r){let e,s;return e=new gt({props:{class:"outline-none outline-offset-0 transition-all "+(r[3]==="destructive"?"text-destructive hover:outline-destructive":"hover:outline-accent-foreground"),$$slots:{default:[It]},$$scope:{ctx:r}}}),{c(){$(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,a){C(e,t,a),s=!0},p(t,a){const l={};a&8&&(l.class="outline-none outline-offset-0 transition-all "+(t[3]==="destructive"?"text-destructive hover:outline-destructive":"hover:outline-accent-foreground")),a&33&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){s||(c(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){A(e,t)}}}function _e(r){let e,s;return e=new ve({props:{$$slots:{default:[Tt]},$$scope:{ctx:r}}}),{c(){$(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,a){C(e,t,a),s=!0},p(t,a){const l={};a&33&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){s||(c(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){A(e,t)}}}function Tt(r){let e,s;return e=new St({props:{person:r[0]}}),{c(){$(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,a){C(e,t,a),s=!0},p(t,a){const l={};a&1&&(l.person=t[0]),e.$set(l)},i(t){s||(c(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){A(e,t)}}}function Lt(r){let e,s;return e=new be({props:{class:"absolute top-1 left-1 h-8 w-8 opacity-100 transition-all"}}),{c(){$(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,a){C(e,t,a),s=!0},i(t){s||(c(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){A(e,t)}}}function yt(r){let e,s;return e=new ke({props:{class:"absolute top-1 left-1 h-8 w-8 opacity-100 transition-all"}}),{c(){$(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,a){C(e,t,a),s=!0},i(t){s||(c(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){A(e,t)}}}function Dt(r){let e,s,t,a;return e=new ke({props:{class:"absolute top-1 left-1 h-8 w-8 opacity-100 group-hover/avatar:opacity-0 transition-all"}}),t=new be({props:{class:"absolute top-1 left-1 h-8 w-8 opacity-0 group-hover/avatar:opacity-100 transition-all"}}),{c(){$(e.$$.fragment),s=z(),$(t.$$.fragment)},l(l){M(e.$$.fragment,l),s=G(l),M(t.$$.fragment,l)},m(l,n){C(e,l,n),k(l,s,n),C(t,l,n),a=!0},i(l){a||(c(e.$$.fragment,l),c(t.$$.fragment,l),a=!0)},o(l){_(e.$$.fragment,l),_(t.$$.fragment,l),a=!1},d(l){l&&g(s),A(e,l),A(t,l)}}}function Ot(r){let e,s,t,a,l;const n=[Dt,yt,Lt],i=[];function o(f,u){return 0}return~(s=o())&&(t=i[s]=n[s](r)),{c(){e=q("div"),t&&t.c(),this.h()},l(f){e=H(f,"DIV",{class:!0});var u=W(e);t&&t.l(u),u.forEach(g),this.h()},h(){Z(e,"class",a="group/avatar relative h-10 w-10 overflow-hidden rounded-full outline-none outline-offset-0 transition-all "+(r[3]==="destructive"?"text-destructive hover:outline-destructive bg-red-100":"text-muted-foreground hover:text-accent-foreground hover:outline-accent-foreground bg-muted"))},m(f,u){k(f,e,u),~s&&i[s].m(e,null),l=!0},p(f,u){(!l||u&8&&a!==(a="group/avatar relative h-10 w-10 overflow-hidden rounded-full outline-none outline-offset-0 transition-all "+(f[3]==="destructive"?"text-destructive hover:outline-destructive bg-red-100":"text-muted-foreground hover:text-accent-foreground hover:outline-accent-foreground bg-muted")))&&Z(e,"class",a)},i(f){l||(c(t),l=!0)},o(f){_(t),l=!1},d(f){f&&g(e),~s&&i[s].d()}}}function de(r){let e,s;return e=new ve({props:{$$slots:{default:[Rt]},$$scope:{ctx:r}}}),{c(){$(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,a){C(e,t,a),s=!0},p(t,a){const l={};a&36&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){s||(c(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){A(e,t)}}}function Rt(r){let e;return{c(){e=X(r[2])},l(s){e=Y(s,r[2])},m(s,t){k(s,e,t)},p(s,t){t&4&&w(e,s[2])},d(s){s&&g(e)}}}function Vt(r){let e,s,t,a;const l=[Et,Nt],n=[];function i(o,f){return o[0]===void 0?0:1}return e=i(r),s=n[e]=l[e](r),{c(){s.c(),t=E()},l(o){s.l(o),t=E()},m(o,f){n[e].m(o,f),k(o,t,f),a=!0},p(o,f){let u=e;e=i(o),e===u?n[e].p(o,f):(K(),_(n[u],1,1,()=>{n[u]=null}),Q(),s=n[e],s?s.p(o,f):(s=n[e]=l[e](o),s.c()),c(s,1),s.m(t.parentNode,t))},i(o){a||(c(s),a=!0)},o(o){_(s),a=!1},d(o){o&&g(t),n[e].d(o)}}}function qt(r){let e,s;return e=new Ie({props:{$$slots:{default:[Vt]},$$scope:{ctx:r}}}),{c(){$(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,a){C(e,t,a),s=!0},p(t,[a]){const l={};a&63&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){s||(c(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){A(e,t)}}}function Ht(r,e,s){let{person:t=void 0}=e,{popoverEnabled:a=!0}=e,{placeholder:l="Unassigned"}=e,{variant:n="default"}=e,{class:i=""}=e;return r.$$set=o=>{"person"in o&&s(0,t=o.person),"popoverEnabled"in o&&s(1,a=o.popoverEnabled),"placeholder"in o&&s(2,l=o.placeholder),"variant"in o&&s(3,n=o.variant),"class"in o&&s(4,i=o.class)},[t,a,l,n,i]}class Xt extends L{constructor(e){super(),y(this,e,Ht,qt,T,{person:0,popoverEnabled:1,placeholder:2,variant:3,class:4})}}export{gt as A,Xt as P,St as a,bt as b,Mt as c};