var q=Object.defineProperty;var G=(t,e,n)=>e in t?q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>G(t,typeof e!="symbol"?e+"":e,n);function L(){}const dt=t=>t;function I(t,e){for(const n in e)t[n]=e[n];return t}function z(t){return t()}function mt(){return Object.create(null)}function F(t){t.forEach(z)}function U(t){return typeof t=="function"}function pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function yt(t){return Object.keys(t).length===0}function M(t,...e){if(t==null){for(const i of e)i(void 0);return L}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function bt(t){let e;return M(t,n=>e=n)(),e}function gt(t,e,n){t.$$.on_destroy.push(M(e,n))}function xt(t,e,n,i){if(t){const s=D(t,e,n,i);return t[0](s)}}function D(t,e,n,i){return t[1]&&i?I(n.ctx.slice(),t[1](i(e))):n.ctx}function wt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],c=Math.max(e.dirty.length,s.length);for(let o=0;o<c;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function vt(t,e,n,i,s,l){if(s){const c=D(e,n,i,l);t.p(c,s)}}function Et(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Tt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Nt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function kt(t){const e={};for(const n in t)e[n]=!0;return e}function At(t,e,n){return t.set(n),e}function Ct(t){return t&&U(t.destroy)?t.destroy:L}const W=["",!0,1,"true","contenteditable"];let y=!1;function jt(){y=!0}function Lt(){y=!1}function J(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&r.push(u)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let r=0;r<e.length;r++){const a=e[r].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:J(1,s,R=>e[n[R]].claim_order,a))-1;i[r]=n[u]+1;const A=u+1;n[A]=r,s=Math.max(A,s)}const l=[],c=[];let o=e.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(l.push(e[r-1]);o>=r;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);l.reverse(),c.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<c.length;r++){for(;a<l.length&&c[r].claim_order>=l[a].claim_order;)a++;const u=a<l.length?l[a]:null;t.insertBefore(c[r],u)}}function Q(t,e){t.appendChild(e)}function V(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Mt(t){const e=T("style");return e.textContent="/* empty */",X(V(t),e),e.sheet}function X(t,e){return Q(t.head||t,e),e.sheet}function Y(t,e){if(y){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Z(t,e,n){t.insertBefore(e,n||null)}function $(t,e,n){y&&!n?Y(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function Dt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function T(t){return document.createElement(t)}function H(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function N(t){return document.createTextNode(t)}function Ht(){return N(" ")}function Ot(){return N("")}function Pt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function St(t){return function(e){return e.preventDefault(),t.call(this,e)}}function k(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const tt=["width","height"];function et(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&tt.indexOf(i)===-1?t[i]=e[i]:k(t,i,e[i])}function Bt(t,e){for(const n in e)k(t,n,e[n])}function nt(t,e){Object.keys(e).forEach(n=>{it(t,n,e[n])})}function it(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:k(t,e,n)}function Rt(t){return/-/.test(t)?nt:et}function qt(t){return t.dataset.svelteH}function Gt(t){return Array.from(t.childNodes)}function O(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,e,n,i,s=!1){O(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,s||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,s?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function S(t,e,n,i){return P(t,s=>s.nodeName===e,s=>{const l=[];for(let c=0;c<s.attributes.length;c++){const o=s.attributes[c];n[o.name]||l.push(o.name)}l.forEach(c=>s.removeAttribute(c))},()=>i(e))}function It(t,e,n){return S(t,e,n,T)}function zt(t,e,n){return S(t,e,n,H)}function st(t,e){return P(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>N(e),!0)}function Ft(t){return st(t," ")}function C(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Ut(t,e){const n=C(t,"HTML_TAG_START",0),i=C(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new b(e);O(t);const s=t.splice(n,i-n+1);w(s[0]),w(s[s.length-1]);const l=s.slice(1,s.length-1);if(l.length===0)return new b(e);for(const c of l)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new b(e,l)}function ct(t,e){e=""+e,t.data!==e&&(t.data=e)}function rt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Wt(t,e,n){~W.indexOf(n)?rt(t,e):ct(t,e)}function Jt(t,e){t.value=e??""}function Kt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function lt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}class ot{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=H(n.nodeName):this.e=T(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Z(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(w)}}class b extends ot{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)$(this.t,this.n[i],n)}}function Qt(t,e){return new t(e)}let p;function g(t){p=t}function _(){if(!p)throw new Error("Function called outside component initialization");return p}function Vt(t){_().$$.on_mount.push(t)}function Xt(t){_().$$.after_update.push(t)}function Yt(t){_().$$.on_destroy.push(t)}function Zt(){const t=_();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=lt(e,n,{cancelable:i});return s.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}function $t(t,e){return _().$$.context.set(t,e),e}function te(t){return _().$$.context.get(t)}function ee(t){return _().$$.context.has(t)}function ne(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const m=[],j=[];let d=[];const v=[],B=Promise.resolve();let E=!1;function at(){E||(E=!0,B.then(ft))}function ie(){return at(),B}function ut(t){d.push(t)}function se(t){v.push(t)}const x=new Set;let h=0;function ft(){if(h!==0)return;const t=p;do{try{for(;h<m.length;){const e=m[h];h++,g(e),_t(e.$$)}}catch(e){throw m.length=0,h=0,e}for(g(null),m.length=0,h=0;j.length;)j.pop()();for(let e=0;e<d.length;e+=1){const n=d[e];x.has(n)||(x.add(n),n())}d.length=0}while(m.length);for(;v.length;)v.pop()();E=!1,x.clear(),g(t)}function _t(t){if(t.fragment!==null){t.update(),F(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ut)}}function ce(t){const e=[],n=[];d.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),d=e}export{dt as $,wt as A,j as B,se as C,ie as D,et as E,Jt as F,Pt as G,Nt as H,ne as I,St as J,Vt as K,Xt as L,Kt as M,Qt as N,kt as O,bt as P,H as Q,zt as R,Bt as S,Yt as T,b as U,Ut as V,Zt as W,V as X,Mt as Y,ut as Z,lt as _,Ht as a,mt as a0,ft as a1,yt as a2,ce as a3,p as a4,g as a5,z as a6,m as a7,at as a8,jt as a9,Lt as aa,$t as ab,te as ac,Ct as ad,ee as ae,Rt as af,At as ag,Wt as ah,Gt as b,It as c,st as d,T as e,w as f,Ft as g,Y as h,$ as i,ct as j,gt as k,qt as l,M as m,L as n,U as o,Ot as p,k as q,F as r,pt as s,N as t,Dt as u,I as v,Tt as w,xt as x,vt as y,Et as z};