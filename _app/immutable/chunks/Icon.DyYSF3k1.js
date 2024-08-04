import{z as U,s as F,o as V,l as S,G as H,w as z,I as J,b as L,f as N,K as y,i as j,h as X,u as Y,p as Z,q as p,x,M as E,m as G}from"./scheduler.BnYkJXHO.js";import{b as Q,t as R,S as $,i as ee}from"./index.CEF3G8Vc.js";import{g as T}from"./index.CnppDyH9.js";function K(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function oe(l,t){Q(l,1,1,()=>{t.delete(l.key)})}function ae(l,t,o,i,n,h,r,f,g,u,c,k){let e=l.length,a=h.length,s=e;const v={};for(;s--;)v[l[s].key]=s;const b=[],w=new Map,C=new Map,q=[];for(s=a;s--;){const d=k(n,h,s),m=o(d);let _=r.get(m);_?q.push(()=>_.p(d,t)):(_=u(m,d),_.c()),w.set(m,b[s]=_),m in v&&C.set(m,Math.abs(s-v[m]))}const A=new Set,B=new Set;function M(d){R(d,1),d.m(f,c),r.set(d.key,d),c=d.first,a--}for(;e&&a;){const d=b[a-1],m=l[e-1],_=d.key,W=m.key;d===m?(c=d.first,e--,a--):w.has(W)?!r.has(_)||A.has(_)?M(d):B.has(W)?e--:C.get(_)>C.get(W)?(B.add(_),M(d)):(A.add(W),e--):(g(m,r),e--)}for(;e--;){const d=l[e];w.has(d.key)||g(d,r)}for(;a;)M(b[a-1]);return U(q),b}/**
 * @license lucide-svelte v0.416.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function P(l,t,o){const i=l.slice();return i[11]=t[o][0],i[12]=t[o][1],i}function I(l){let t,o=[l[12]],i={};for(let n=0;n<o.length;n+=1)i=S(i,o[n]);return{c(){t=H(l[11]),this.h()},l(n){t=J(n,l[11],{}),L(t).forEach(N),this.h()},h(){y(t,i)},m(n,h){j(n,t,h)},p(n,h){y(t,i=T(o,[h&32&&n[12]]))},d(n){n&&N(t)}}}function D(l){let t=l[11],o,i=l[11]&&I(l);return{c(){i&&i.c(),o=z()},l(n){i&&i.l(n),o=z()},m(n,h){i&&i.m(n,h),j(n,o,h)},p(n,h){n[11]?t?F(t,n[11])?(i.d(1),i=I(n),t=n[11],i.c(),i.m(o.parentNode,o)):i.p(n,h):(i=I(n),t=n[11],i.c(),i.m(o.parentNode,o)):t&&(i.d(1),i=null,t=n[11])},d(n){n&&N(o),i&&i.d(n)}}}function te(l){let t,o,i,n,h,r=K(l[5]),f=[];for(let e=0;e<r.length;e+=1)f[e]=D(P(l,r,e));const g=l[10].default,u=V(g,l,l[9],null);let c=[O,l[7],{width:l[2]},{height:l[2]},{stroke:l[1]},{"stroke-width":i=l[4]?Number(l[3])*24/Number(l[2]):l[3]},{class:n=l[6]("lucide-icon","lucide",l[0]?`lucide-${l[0]}`:"",l[8].class)}],k={};for(let e=0;e<c.length;e+=1)k=S(k,c[e]);return{c(){t=H("svg");for(let e=0;e<f.length;e+=1)f[e].c();o=z(),u&&u.c(),this.h()},l(e){t=J(e,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var a=L(t);for(let s=0;s<f.length;s+=1)f[s].l(a);o=z(),u&&u.l(a),a.forEach(N),this.h()},h(){y(t,k)},m(e,a){j(e,t,a);for(let s=0;s<f.length;s+=1)f[s]&&f[s].m(t,null);X(t,o),u&&u.m(t,null),h=!0},p(e,[a]){if(a&32){r=K(e[5]);let s;for(s=0;s<r.length;s+=1){const v=P(e,r,s);f[s]?f[s].p(v,a):(f[s]=D(v),f[s].c(),f[s].m(t,o))}for(;s<f.length;s+=1)f[s].d(1);f.length=r.length}u&&u.p&&(!h||a&512)&&Y(u,g,e,e[9],h?p(g,e[9],a,null):Z(e[9]),null),y(t,k=T(c,[O,a&128&&e[7],(!h||a&4)&&{width:e[2]},(!h||a&4)&&{height:e[2]},(!h||a&2)&&{stroke:e[1]},(!h||a&28&&i!==(i=e[4]?Number(e[3])*24/Number(e[2]):e[3]))&&{"stroke-width":i},(!h||a&257&&n!==(n=e[6]("lucide-icon","lucide",e[0]?`lucide-${e[0]}`:"",e[8].class)))&&{class:n}]))},i(e){h||(R(u,e),h=!0)},o(e){Q(u,e),h=!1},d(e){e&&N(t),x(f,e),u&&u.d(e)}}}function se(l,t,o){const i=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let n=E(t,i),{$$slots:h={},$$scope:r}=t,{name:f=void 0}=t,{color:g="currentColor"}=t,{size:u=24}=t,{strokeWidth:c=2}=t,{absoluteStrokeWidth:k=!1}=t,{iconNode:e=[]}=t;const a=(...s)=>s.filter((v,b,w)=>!!v&&w.indexOf(v)===b).join(" ");return l.$$set=s=>{o(8,t=S(S({},t),G(s))),o(7,n=E(t,i)),"name"in s&&o(0,f=s.name),"color"in s&&o(1,g=s.color),"size"in s&&o(2,u=s.size),"strokeWidth"in s&&o(3,c=s.strokeWidth),"absoluteStrokeWidth"in s&&o(4,k=s.absoluteStrokeWidth),"iconNode"in s&&o(5,e=s.iconNode),"$$scope"in s&&o(9,r=s.$$scope)},t=G(t),[f,g,u,c,k,e,a,n,t,r,h]}class he extends ${constructor(t){super(),ee(this,t,se,te,F,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}}export{he as I,K as e,oe as o,ae as u};
