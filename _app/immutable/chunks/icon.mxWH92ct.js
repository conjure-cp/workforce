import{r as Ye,s as q,u as Ze,p as j,K as se,y as T,L as re,b as Q,f as C,M,i as O,h as $e,v as et,w as tt,x as nt,A as ot,N as me,q as B,n as ye,C as st,O as rt,e as it,c as ct,P as be,Q as lt,R as ft,S as at}from"./scheduler.DKZNoe2D.js";import{b as ie,t as ce,S as le,i as fe,c as ut,a as dt,m as ht,d as gt}from"./index.lZujNGEy.js";import{g as H}from"./utils.BwNHKHGi.js";function we(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Ln(e,t){ie(e,1,1,()=>{t.delete(e.key)})}function Fn(e,t,o,s,n,r,i,c,a,f,d,g){let l=e.length,h=r.length,u=l;const v={};for(;u--;)v[e[u].key]=u;const w=[],b=new Map,p=new Map,I=[];for(u=h;u--;){const m=g(n,r,u),_=o(m);let k=i.get(_);k?I.push(()=>k.p(m,t)):(k=f(_,m),k.c()),b.set(_,w[u]=k),_ in v&&p.set(_,Math.abs(u-v[_]))}const S=new Set,P=new Set;function y(m){ce(m,1),m.m(c,d),i.set(m.key,m),d=m.first,h--}for(;l&&h;){const m=w[h-1],_=e[l-1],k=m.key,x=_.key;m===_?(d=m.first,l--,h--):b.has(x)?!i.has(k)||S.has(k)?y(m):P.has(x)?l--:p.get(k)>p.get(x)?(P.add(k),y(m)):(S.add(x),l--):(a(_,i),l--)}for(;l--;){const m=e[l];b.has(m.key)||a(m,i)}for(;h;)y(w[h-1]);return Ye(I),w}/**
 * @license lucide-svelte v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function _e(e,t,o){const s=e.slice();return s[11]=t[o][0],s[12]=t[o][1],s}function K(e){let t,o=[e[12]],s={};for(let n=0;n<o.length;n+=1)s=j(s,o[n]);return{c(){t=se(e[11]),this.h()},l(n){t=re(n,e[11],{}),Q(t).forEach(C),this.h()},h(){M(t,s)},m(n,r){O(n,t,r)},p(n,r){M(t,s=H(o,[r&32&&n[12]]))},d(n){n&&C(t)}}}function Se(e){let t=e[11],o,s=e[11]&&K(e);return{c(){s&&s.c(),o=T()},l(n){s&&s.l(n),o=T()},m(n,r){s&&s.m(n,r),O(n,o,r)},p(n,r){n[11]?t?q(t,n[11])?(s.d(1),s=K(n),t=n[11],s.c(),s.m(o.parentNode,o)):s.p(n,r):(s=K(n),t=n[11],s.c(),s.m(o.parentNode,o)):t&&(s.d(1),s=null,t=n[11])},d(n){n&&C(o),s&&s.d(n)}}}function pt(e){let t,o,s,n,r,i=we(e[5]),c=[];for(let l=0;l<i.length;l+=1)c[l]=Se(_e(e,i,l));const a=e[10].default,f=Ze(a,e,e[9],null);let d=[ve,e[7],{width:e[2]},{height:e[2]},{stroke:e[1]},{"stroke-width":s=e[4]?Number(e[3])*24/Number(e[2]):e[3]},{class:n=e[6]("lucide-icon","lucide",e[0]?`lucide-${e[0]}`:"",e[8].class)}],g={};for(let l=0;l<d.length;l+=1)g=j(g,d[l]);return{c(){t=se("svg");for(let l=0;l<c.length;l+=1)c[l].c();o=T(),f&&f.c(),this.h()},l(l){t=re(l,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var h=Q(t);for(let u=0;u<c.length;u+=1)c[u].l(h);o=T(),f&&f.l(h),h.forEach(C),this.h()},h(){M(t,g)},m(l,h){O(l,t,h);for(let u=0;u<c.length;u+=1)c[u]&&c[u].m(t,null);$e(t,o),f&&f.m(t,null),r=!0},p(l,[h]){if(h&32){i=we(l[5]);let u;for(u=0;u<i.length;u+=1){const v=_e(l,i,u);c[u]?c[u].p(v,h):(c[u]=Se(v),c[u].c(),c[u].m(t,o))}for(;u<c.length;u+=1)c[u].d(1);c.length=i.length}f&&f.p&&(!r||h&512)&&et(f,a,l,l[9],r?nt(a,l[9],h,null):tt(l[9]),null),M(t,g=H(d,[ve,h&128&&l[7],(!r||h&4)&&{width:l[2]},(!r||h&4)&&{height:l[2]},(!r||h&2)&&{stroke:l[1]},(!r||h&28&&s!==(s=l[4]?Number(l[3])*24/Number(l[2]):l[3]))&&{"stroke-width":s},(!r||h&257&&n!==(n=l[6]("lucide-icon","lucide",l[0]?`lucide-${l[0]}`:"",l[8].class)))&&{class:n}]))},i(l){r||(ce(f,l),r=!0)},o(l){ie(f,l),r=!1},d(l){l&&C(t),ot(c,l),f&&f.d(l)}}}function mt(e,t,o){const s=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let n=me(t,s),{$$slots:r={},$$scope:i}=t,{name:c=void 0}=t,{color:a="currentColor"}=t,{size:f=24}=t,{strokeWidth:d=2}=t,{absoluteStrokeWidth:g=!1}=t,{iconNode:l=[]}=t;const h=(...u)=>u.filter((v,w,b)=>!!v&&b.indexOf(v)===w).join(" ");return e.$$set=u=>{o(8,t=j(j({},t),B(u))),o(7,n=me(t,s)),"name"in u&&o(0,c=u.name),"color"in u&&o(1,a=u.color),"size"in u&&o(2,f=u.size),"strokeWidth"in u&&o(3,d=u.strokeWidth),"absoluteStrokeWidth"in u&&o(4,g=u.absoluteStrokeWidth),"iconNode"in u&&o(5,l=u.iconNode),"$$scope"in u&&o(9,i=u.$$scope)},t=B(t),[c,a,f,d,g,l,h,n,t,i,r]}let An=class extends le{constructor(t){super(),fe(this,t,mt,pt,q,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}};const L=/^[a-z0-9]+(-[a-z0-9]+)*$/,V=(e,t,o,s="")=>{const n=e.split(":");if(e.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;s=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const c=n.pop(),a=n.pop(),f={provider:n.length>0?n[0]:s,prefix:a,name:c};return t&&!z(f)?null:f}const r=n[0],i=r.split("-");if(i.length>1){const c={provider:s,prefix:i.shift(),name:i.join("-")};return t&&!z(c)?null:c}if(o&&s===""){const c={provider:s,prefix:"",name:r};return t&&!z(c,o)?null:c}return null},z=(e,t)=>e?!!((e.provider===""||e.provider.match(L))&&(t&&e.prefix===""||e.prefix.match(L))&&e.name.match(L)):!1,Ae=Object.freeze({left:0,top:0,width:16,height:16}),W=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),U=Object.freeze({...Ae,...W}),Y=Object.freeze({...U,body:"",hidden:!1});function yt(e,t){const o={};!e.hFlip!=!t.hFlip&&(o.hFlip=!0),!e.vFlip!=!t.vFlip&&(o.vFlip=!0);const s=((e.rotate||0)+(t.rotate||0))%4;return s&&(o.rotate=s),o}function ke(e,t){const o=yt(e,t);for(const s in Y)s in W?s in e&&!(s in o)&&(o[s]=W[s]):s in t?o[s]=t[s]:s in e&&(o[s]=e[s]);return o}function bt(e,t){const o=e.icons,s=e.aliases||Object.create(null),n=Object.create(null);function r(i){if(o[i])return n[i]=[];if(!(i in n)){n[i]=null;const c=s[i]&&s[i].parent,a=c&&r(c);a&&(n[i]=[c].concat(a))}return n[i]}return Object.keys(o).concat(Object.keys(s)).forEach(r),n}function wt(e,t,o){const s=e.icons,n=e.aliases||Object.create(null);let r={};function i(c){r=ke(s[c]||n[c],r)}return i(t),o.forEach(i),ke(e,r)}function De(e,t){const o=[];if(typeof e!="object"||typeof e.icons!="object")return o;e.not_found instanceof Array&&e.not_found.forEach(n=>{t(n,null),o.push(n)});const s=bt(e);for(const n in s){const r=s[n];r&&(t(n,wt(e,n,r)),o.push(n))}return o}const vt={provider:"",aliases:{},not_found:{},...Ae};function J(e,t){for(const o in t)if(o in e&&typeof e[o]!=typeof t[o])return!1;return!0}function ze(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!J(e,vt))return null;const o=t.icons;for(const n in o){const r=o[n];if(!n.match(L)||typeof r.body!="string"||!J(r,Y))return null}const s=t.aliases||Object.create(null);for(const n in s){const r=s[n],i=r.parent;if(!n.match(L)||typeof i!="string"||!o[i]&&!s[i]||!J(r,Y))return null}return t}const Ie=Object.create(null);function _t(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function E(e,t){const o=Ie[e]||(Ie[e]=Object.create(null));return o[t]||(o[t]=_t(e,t))}function ae(e,t){return ze(t)?De(t,(o,s)=>{s?e.icons[o]=s:e.missing.add(o)}):[]}function St(e,t,o){try{if(typeof o.body=="string")return e.icons[t]={...o},!0}catch{}return!1}let F=!1;function Re(e){return typeof e=="boolean"&&(F=e),F}function kt(e){const t=typeof e=="string"?V(e,!0,F):e;if(t){const o=E(t.provider,t.prefix),s=t.name;return o.icons[s]||(o.missing.has(s)?null:void 0)}}function It(e,t){const o=V(e,!0,F);if(!o)return!1;const s=E(o.provider,o.prefix);return St(s,o.name,t)}function xt(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),F&&!t&&!e.prefix){let n=!1;return ze(e)&&(e.prefix="",De(e,(r,i)=>{i&&It(r,i)&&(n=!0)})),n}const o=e.prefix;if(!z({provider:t,prefix:o,name:"a"}))return!1;const s=E(t,o);return!!ae(s,e)}const Be=Object.freeze({width:null,height:null}),We=Object.freeze({...Be,...W}),Ct=/(-?[0-9.]*[0-9]+[0-9.]*)/g,jt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function xe(e,t,o){if(t===1)return e;if(o=o||100,typeof e=="number")return Math.ceil(e*t*o)/o;if(typeof e!="string")return e;const s=e.split(Ct);if(s===null||!s.length)return e;const n=[];let r=s.shift(),i=jt.test(r);for(;;){if(i){const c=parseFloat(r);isNaN(c)?n.push(r):n.push(Math.ceil(c*t*o)/o)}else n.push(r);if(r=s.shift(),r===void 0)return n.join("");i=!i}}function Tt(e,t="defs"){let o="";const s=e.indexOf("<"+t);for(;s>=0;){const n=e.indexOf(">",s),r=e.indexOf("</"+t);if(n===-1||r===-1)break;const i=e.indexOf(">",r);if(i===-1)break;o+=e.slice(n+1,r).trim(),e=e.slice(0,s).trim()+e.slice(i+1)}return{defs:o,content:e}}function Et(e,t){return e?"<defs>"+e+"</defs>"+t:t}function Ot(e,t,o){const s=Tt(e);return Et(s.defs,t+s.content+o)}const Pt=e=>e==="unset"||e==="undefined"||e==="none";function Mt(e,t){const o={...U,...e},s={...We,...t},n={left:o.left,top:o.top,width:o.width,height:o.height};let r=o.body;[o,s].forEach(v=>{const w=[],b=v.hFlip,p=v.vFlip;let I=v.rotate;b?p?I+=2:(w.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),w.push("scale(-1 1)"),n.top=n.left=0):p&&(w.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),w.push("scale(1 -1)"),n.top=n.left=0);let S;switch(I<0&&(I-=Math.floor(I/4)*4),I=I%4,I){case 1:S=n.height/2+n.top,w.unshift("rotate(90 "+S.toString()+" "+S.toString()+")");break;case 2:w.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:S=n.width/2+n.left,w.unshift("rotate(-90 "+S.toString()+" "+S.toString()+")");break}I%2===1&&(n.left!==n.top&&(S=n.left,n.left=n.top,n.top=S),n.width!==n.height&&(S=n.width,n.width=n.height,n.height=S)),w.length&&(r=Ot(r,'<g transform="'+w.join(" ")+'">',"</g>"))});const i=s.width,c=s.height,a=n.width,f=n.height;let d,g;i===null?(g=c===null?"1em":c==="auto"?f:c,d=xe(g,a/f)):(d=i==="auto"?a:i,g=c===null?xe(d,f/a):c==="auto"?f:c);const l={},h=(v,w)=>{Pt(w)||(l[v]=w.toString())};h("width",d),h("height",g);const u=[n.left,n.top,a,f];return l.viewBox=u.join(" "),{attributes:l,viewBox:u,body:r}}const Nt=/\sid="(\S+)"/g,Lt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Ft=0;function At(e,t=Lt){const o=[];let s;for(;s=Nt.exec(e);)o.push(s[1]);if(!o.length)return e;const n="suffix"+(Math.random()*16777216|Date.now()).toString(16);return o.forEach(r=>{const i=typeof t=="function"?t(r):t+(Ft++).toString(),c=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+n+"$3")}),e=e.replace(new RegExp(n,"g"),""),e}const Z=Object.create(null);function Dt(e,t){Z[e]=t}function $(e){return Z[e]||Z[""]}function ue(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const de=Object.create(null),N=["https://api.simplesvg.com","https://api.unisvg.com"],R=[];for(;N.length>0;)N.length===1||Math.random()>.5?R.push(N.shift()):R.push(N.pop());de[""]=ue({resources:["https://api.iconify.design"].concat(R)});function zt(e,t){const o=ue(t);return o===null?!1:(de[e]=o,!0)}function he(e){return de[e]}const Rt=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let Ce=Rt();function Bt(e,t){const o=he(e);if(!o)return 0;let s;if(!o.maxURL)s=0;else{let n=0;o.resources.forEach(i=>{n=Math.max(n,i.length)});const r=t+".json?icons=";s=o.maxURL-n-o.path.length-r.length}return s}function Wt(e){return e===404}const qt=(e,t,o)=>{const s=[],n=Bt(e,t),r="icons";let i={type:r,provider:e,prefix:t,icons:[]},c=0;return o.forEach((a,f)=>{c+=a.length+1,c>=n&&f>0&&(s.push(i),i={type:r,provider:e,prefix:t,icons:[]},c=a.length),i.icons.push(a)}),s.push(i),s};function Qt(e){if(typeof e=="string"){const t=he(e);if(t)return t.path}return"/"}const Ht=(e,t,o)=>{if(!Ce){o("abort",424);return}let s=Qt(t.provider);switch(t.type){case"icons":{const r=t.prefix,c=t.icons.join(","),a=new URLSearchParams({icons:c});s+=r+".json?"+a.toString();break}case"custom":{const r=t.uri;s+=r.slice(0,1)==="/"?r.slice(1):r;break}default:o("abort",400);return}let n=503;Ce(e+s).then(r=>{const i=r.status;if(i!==200){setTimeout(()=>{o(Wt(i)?"abort":"next",i)});return}return n=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?o("abort",r):o("next",n)});return}setTimeout(()=>{o("success",r)})}).catch(()=>{o("next",n)})},Vt={prepare:qt,send:Ht};function Ut(e){const t={loaded:[],missing:[],pending:[]},o=Object.create(null);e.sort((n,r)=>n.provider!==r.provider?n.provider.localeCompare(r.provider):n.prefix!==r.prefix?n.prefix.localeCompare(r.prefix):n.name.localeCompare(r.name));let s={provider:"",prefix:"",name:""};return e.forEach(n=>{if(s.name===n.name&&s.prefix===n.prefix&&s.provider===n.provider)return;s=n;const r=n.provider,i=n.prefix,c=n.name,a=o[r]||(o[r]=Object.create(null)),f=a[i]||(a[i]=E(r,i));let d;c in f.icons?d=t.loaded:i===""||f.missing.has(c)?d=t.missing:d=t.pending;const g={provider:r,prefix:i,name:c};d.push(g)}),t}function qe(e,t){e.forEach(o=>{const s=o.loaderCallbacks;s&&(o.loaderCallbacks=s.filter(n=>n.id!==t))})}function Gt(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let o=!1;const s=e.provider,n=e.prefix;t.forEach(r=>{const i=r.icons,c=i.pending.length;i.pending=i.pending.filter(a=>{if(a.prefix!==n)return!0;const f=a.name;if(e.icons[f])i.loaded.push({provider:s,prefix:n,name:f});else if(e.missing.has(f))i.missing.push({provider:s,prefix:n,name:f});else return o=!0,!0;return!1}),i.pending.length!==c&&(o||qe([e],r.id),r.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),r.abort))})}))}let Kt=0;function Jt(e,t,o){const s=Kt++,n=qe.bind(null,o,s);if(!t.pending.length)return n;const r={id:s,icons:t,callback:e,abort:n};return o.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(r)}),n}function Xt(e,t=!0,o=!1){const s=[];return e.forEach(n=>{const r=typeof n=="string"?V(n,t,o):n;r&&s.push(r)}),s}var Yt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Zt(e,t,o,s){const n=e.resources.length,r=e.random?Math.floor(Math.random()*n):e.index;let i;if(e.random){let y=e.resources.slice(0);for(i=[];y.length>1;){const m=Math.floor(Math.random()*y.length);i.push(y[m]),y=y.slice(0,m).concat(y.slice(m+1))}i=i.concat(y)}else i=e.resources.slice(r).concat(e.resources.slice(0,r));const c=Date.now();let a="pending",f=0,d,g=null,l=[],h=[];typeof s=="function"&&h.push(s);function u(){g&&(clearTimeout(g),g=null)}function v(){a==="pending"&&(a="aborted"),u(),l.forEach(y=>{y.status==="pending"&&(y.status="aborted")}),l=[]}function w(y,m){m&&(h=[]),typeof y=="function"&&h.push(y)}function b(){return{startTime:c,payload:t,status:a,queriesSent:f,queriesPending:l.length,subscribe:w,abort:v}}function p(){a="failed",h.forEach(y=>{y(void 0,d)})}function I(){l.forEach(y=>{y.status==="pending"&&(y.status="aborted")}),l=[]}function S(y,m,_){const k=m!=="success";switch(l=l.filter(x=>x!==y),a){case"pending":break;case"failed":if(k||!e.dataAfterTimeout)return;break;default:return}if(m==="abort"){d=_,p();return}if(k){d=_,l.length||(i.length?P():p());return}if(u(),I(),!e.random){const x=e.resources.indexOf(y.resource);x!==-1&&x!==e.index&&(e.index=x)}a="completed",h.forEach(x=>{x(_)})}function P(){if(a!=="pending")return;u();const y=i.shift();if(y===void 0){if(l.length){g=setTimeout(()=>{u(),a==="pending"&&(I(),p())},e.timeout);return}p();return}const m={status:"pending",resource:y,callback:(_,k)=>{S(m,_,k)}};l.push(m),f++,g=setTimeout(P,e.rotate),o(y,t,m.callback)}return setTimeout(P),b}function Qe(e){const t={...Yt,...e};let o=[];function s(){o=o.filter(c=>c().status==="pending")}function n(c,a,f){const d=Zt(t,c,a,(g,l)=>{s(),f&&f(g,l)});return o.push(d),d}function r(c){return o.find(a=>c(a))||null}return{query:n,find:r,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:s}}function je(){}const X=Object.create(null);function $t(e){if(!X[e]){const t=he(e);if(!t)return;const o=Qe(t),s={config:t,redundancy:o};X[e]=s}return X[e]}function en(e,t,o){let s,n;if(typeof e=="string"){const r=$(e);if(!r)return o(void 0,424),je;n=r.send;const i=$t(e);i&&(s=i.redundancy)}else{const r=ue(e);if(r){s=Qe(r);const i=e.resources?e.resources[0]:"",c=$(i);c&&(n=c.send)}}return!s||!n?(o(void 0,424),je):s.query(t,n,o)().abort}const Te="iconify2",A="iconify",He=A+"-count",Ee=A+"-version",Ve=36e5,tn=168,nn=50;function ee(e,t){try{return e.getItem(t)}catch{}}function ge(e,t,o){try{return e.setItem(t,o),!0}catch{}}function Oe(e,t){try{e.removeItem(t)}catch{}}function te(e,t){return ge(e,He,t.toString())}function ne(e){return parseInt(ee(e,He))||0}const G={local:!0,session:!0},Ue={local:new Set,session:new Set};let pe=!1;function on(e){pe=e}let D=typeof window>"u"?{}:window;function Ge(e){const t=e+"Storage";try{if(D&&D[t]&&typeof D[t].length=="number")return D[t]}catch{}G[e]=!1}function Ke(e,t){const o=Ge(e);if(!o)return;const s=ee(o,Ee);if(s!==Te){if(s){const c=ne(o);for(let a=0;a<c;a++)Oe(o,A+a.toString())}ge(o,Ee,Te),te(o,0);return}const n=Math.floor(Date.now()/Ve)-tn,r=c=>{const a=A+c.toString(),f=ee(o,a);if(typeof f=="string"){try{const d=JSON.parse(f);if(typeof d=="object"&&typeof d.cached=="number"&&d.cached>n&&typeof d.provider=="string"&&typeof d.data=="object"&&typeof d.data.prefix=="string"&&t(d,c))return!0}catch{}Oe(o,a)}};let i=ne(o);for(let c=i-1;c>=0;c--)r(c)||(c===i-1?(i--,te(o,i)):Ue[e].add(c))}function Je(){if(!pe){on(!0);for(const e in G)Ke(e,t=>{const o=t.data,s=t.provider,n=o.prefix,r=E(s,n);if(!ae(r,o).length)return!1;const i=o.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,i):i,!0})}}function sn(e,t){const o=e.lastModifiedCached;if(o&&o>=t)return o===t;if(e.lastModifiedCached=t,o)for(const s in G)Ke(s,n=>{const r=n.data;return n.provider!==e.provider||r.prefix!==e.prefix||r.lastModified===t});return!0}function rn(e,t){pe||Je();function o(s){let n;if(!G[s]||!(n=Ge(s)))return;const r=Ue[s];let i;if(r.size)r.delete(i=Array.from(r).shift());else if(i=ne(n),i>=nn||!te(n,i+1))return;const c={cached:Math.floor(Date.now()/Ve),provider:e.provider,data:t};return ge(n,A+i.toString(),JSON.stringify(c))}t.lastModified&&!sn(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),o("local")||o("session"))}function Pe(){}function cn(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Gt(e)}))}function ln(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:o,prefix:s}=e,n=e.iconsToLoad;delete e.iconsToLoad;let r;if(!n||!(r=$(o)))return;r.prepare(o,s,n).forEach(c=>{en(o,c,a=>{if(typeof a!="object")c.icons.forEach(f=>{e.missing.add(f)});else try{const f=ae(e,a);if(!f.length)return;const d=e.pendingIcons;d&&f.forEach(g=>{d.delete(g)}),rn(e,a)}catch(f){console.error(f)}cn(e)})})}))}const fn=(e,t)=>{const o=Xt(e,!0,Re()),s=Ut(o);if(!s.pending.length){let a=!0;return t&&setTimeout(()=>{a&&t(s.loaded,s.missing,s.pending,Pe)}),()=>{a=!1}}const n=Object.create(null),r=[];let i,c;return s.pending.forEach(a=>{const{provider:f,prefix:d}=a;if(d===c&&f===i)return;i=f,c=d,r.push(E(f,d));const g=n[f]||(n[f]=Object.create(null));g[d]||(g[d]=[])}),s.pending.forEach(a=>{const{provider:f,prefix:d,name:g}=a,l=E(f,d),h=l.pendingIcons||(l.pendingIcons=new Set);h.has(g)||(h.add(g),n[f][d].push(g))}),r.forEach(a=>{const{provider:f,prefix:d}=a;n[f][d].length&&ln(a,n[f][d])}),t?Jt(t,s,r):Pe};function an(e,t){const o={...e};for(const s in t){const n=t[s],r=typeof n;s in Be?(n===null||n&&(r==="string"||r==="number"))&&(o[s]=n):r===typeof o[s]&&(o[s]=s==="rotate"?n%4:n)}return o}const un=/[\s,]+/;function dn(e,t){t.split(un).forEach(o=>{switch(o.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function hn(e,t=0){const o=e.replace(/^-?[0-9.]*/,"");function s(n){for(;n<0;)n+=4;return n%4}if(o===""){const n=parseInt(e);return isNaN(n)?0:s(n)}else if(o!==e){let n=0;switch(o){case"%":n=25;break;case"deg":n=90}if(n){let r=parseFloat(e.slice(0,e.length-o.length));return isNaN(r)?0:(r=r/n,r%1===0?s(r):0)}}return t}function gn(e,t){let o=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in t)o+=" "+s+'="'+t[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+o+">"+e+"</svg>"}function pn(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function mn(e){return"data:image/svg+xml,"+pn(e)}function yn(e){return'url("'+mn(e)+'")'}const Me={...We,inline:!1},bn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},wn={display:"inline-block"},oe={"background-color":"currentColor"},Xe={"background-color":"transparent"},Ne={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Le={"-webkit-mask":oe,mask:oe,background:Xe};for(const e in Le){const t=Le[e];for(const o in Ne)t[e+"-"+o]=Ne[o]}function vn(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}function _n(e,t){const o=an(Me,t),s=t.mode||"svg",n=s==="svg"?{...bn}:{};e.body.indexOf("xlink:")===-1&&delete n["xmlns:xlink"];let r=typeof t.style=="string"?t.style:"";for(let b in t){const p=t[b];if(p!==void 0)switch(b){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":o[b]=p===!0||p==="true"||p===1;break;case"flip":typeof p=="string"&&dn(o,p);break;case"color":r=r+(r.length>0&&r.trim().slice(-1)!==";"?";":"")+"color: "+p+"; ";break;case"rotate":typeof p=="string"?o[b]=hn(p):typeof p=="number"&&(o[b]=p);break;case"ariaHidden":case"aria-hidden":p!==!0&&p!=="true"&&delete n["aria-hidden"];break;default:if(b.slice(0,3)==="on:")break;Me[b]===void 0&&(n[b]=p)}}const i=Mt(e,o),c=i.attributes;if(o.inline&&(r="vertical-align: -0.125em; "+r),s==="svg"){Object.assign(n,c),r!==""&&(n.style=r);let b=0,p=t.id;return typeof p=="string"&&(p=p.replace(/-/g,"_")),{svg:!0,attributes:n,body:At(i.body,p?()=>p+"ID"+b++:"iconifySvelte")}}const{body:a,width:f,height:d}=e,g=s==="mask"||(s==="bg"?!1:a.indexOf("currentColor")!==-1),l=gn(a,{...c,width:f+"",height:d+""}),u={"--svg":yn(l)},v=b=>{const p=c[b];p&&(u[b]=vn(p))};v("width"),v("height"),Object.assign(u,wn,g?oe:Xe);let w="";for(const b in u)w+=b+": "+u[b]+";";return n.style=w+r,{svg:!1,attributes:n}}Re(!0);Dt("",Vt);if(typeof document<"u"&&typeof window<"u"){Je();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,o="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!xt(s))&&console.error(o)}catch{console.error(o)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let o in t){const s="IconifyProviders["+o+"] is invalid.";try{const n=t[o];if(typeof n!="object"||!n||n.resources===void 0)continue;zt(o,n)||console.error(s)}catch{console.error(s)}}}}function Sn(e,t,o,s,n){function r(){t.loading&&(t.loading.abort(),t.loading=null)}if(typeof e=="object"&&e!==null&&typeof e.body=="string")return t.name="",r(),{data:{...U,...e}};let i;if(typeof e!="string"||(i=V(e,!1,!0))===null)return r(),null;const c=kt(i);if(!c)return o&&(!t.loading||t.loading.name!==e)&&(r(),t.name="",t.loading={name:e,abort:fn([i],s)}),null;r(),t.name!==e&&(t.name=e,n&&!t.destroyed&&n(e));const a=["iconify"];return i.prefix!==""&&a.push("iconify--"+i.prefix),i.provider!==""&&a.push("iconify--"+i.provider),{data:c,classes:a}}function kn(e,t){return e?_n({...U,...e},t):null}function Fe(e){let t;function o(r,i){return r[0].svg?xn:In}let s=o(e),n=s(e);return{c(){n.c(),t=T()},l(r){n.l(r),t=T()},m(r,i){n.m(r,i),O(r,t,i)},p(r,i){s===(s=o(r))&&n?n.p(r,i):(n.d(1),n=s(r),n&&(n.c(),n.m(t.parentNode,t)))},d(r){r&&C(t),n.d(r)}}}function In(e){let t,o=[e[0].attributes],s={};for(let n=0;n<o.length;n+=1)s=j(s,o[n]);return{c(){t=it("span"),this.h()},l(n){t=ct(n,"SPAN",{}),Q(t).forEach(C),this.h()},h(){be(t,s)},m(n,r){O(n,t,r)},p(n,r){be(t,s=H(o,[r&1&&n[0].attributes]))},d(n){n&&C(t)}}}function xn(e){let t,o,s=e[0].body+"",n=[e[0].attributes],r={};for(let i=0;i<n.length;i+=1)r=j(r,n[i]);return{c(){t=se("svg"),o=new lt(!0),this.h()},l(i){t=re(i,"svg",{});var c=Q(t);o=ft(c,!0),c.forEach(C),this.h()},h(){o.a=null,M(t,r)},m(i,c){O(i,t,c),o.m(s,t)},p(i,c){c&1&&s!==(s=i[0].body+"")&&o.p(s),M(t,r=H(n,[c&1&&i[0].attributes]))},d(i){i&&C(t)}}}function Cn(e){let t,o=e[0]&&Fe(e);return{c(){o&&o.c(),t=T()},l(s){o&&o.l(s),t=T()},m(s,n){o&&o.m(s,n),O(s,t,n)},p(s,[n]){s[0]?o?o.p(s,n):(o=Fe(s),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null)},i:ye,o:ye,d(s){s&&C(t),o&&o.d(s)}}}function jn(e,t,o){const s={name:"",loading:null,destroyed:!1};let n=!1,r=0,i;const c=f=>{typeof t.onLoad=="function"&&t.onLoad(f),at()("load",{icon:f})};function a(){o(3,r++,r)}return st(()=>{o(2,n=!0)}),rt(()=>{o(1,s.destroyed=!0,s),s.loading&&(s.loading.abort(),o(1,s.loading=null,s))}),e.$$set=f=>{o(6,t=j(j({},t),B(f)))},e.$$.update=()=>{{const f=Sn(t.icon,s,n,a,c);o(0,i=f?kn(f.data,t):null),i&&f.classes&&o(0,i.attributes.class=(typeof t.class=="string"?t.class+" ":"")+f.classes.join(" "),i)}},t=B(t),[i,s,n,r]}class Tn extends le{constructor(t){super(),fe(this,t,jn,Cn,q,{})}}function En(e){let t,o;return t=new Tn({props:{icon:e[0].icon,class:e[1],style:e[0].color?`color: ${e[0].color.hex()}`:""}}),{c(){ut(t.$$.fragment)},l(s){dt(t.$$.fragment,s)},m(s,n){ht(t,s,n),o=!0},p(s,[n]){const r={};n&1&&(r.icon=s[0].icon),n&2&&(r.class=s[1]),n&1&&(r.style=s[0].color?`color: ${s[0].color.hex()}`:""),t.$set(r)},i(s){o||(ce(t.$$.fragment,s),o=!0)},o(s){ie(t.$$.fragment,s),o=!1},d(s){gt(t,s)}}}function On(e,t,o){let{icon:s}=t,{class:n=""}=t;return e.$$set=r=>{"icon"in r&&o(0,s=r.icon),"class"in r&&o(1,n=r.class)},[s,n]}class zn extends le{constructor(t){super(),fe(this,t,On,En,q,{icon:0,class:1})}}export{An as I,zn as a,we as e,Ln as o,Fn as u};
