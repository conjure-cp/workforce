import{A as it}from"./scheduler.CfTqBbps.js";import{w as pe,u as ct}from"./parse.iudxBx5H.js";new URL("sveltekit-internal://");function lt(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function ft(e){return e.split("%25").map(decodeURI).join("%25")}function ut(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function ce({href:e}){return e.split("#")[0]}const dt=["href","pathname","search","toString","toJSON"];function ht(e,n,t){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return i=>(t(i),a[o](i));n();const s=Reflect.get(a,o);return typeof s=="function"?s.bind(a):s}}),enumerable:!0,configurable:!0});for(const a of dt)Object.defineProperty(r,a,{get(){return n(),e[a]},enumerable:!0,configurable:!0});return r}const pt="/__data.json",gt=".html__data.json";function mt(e){return e.endsWith(".html")?e.replace(/\.html$/,gt):e.replace(/\/$/,"")+pt}function _t(...e){let n=5381;for(const t of e)if(typeof t=="string"){let r=t.length;for(;r;)n=n*33^t.charCodeAt(--r)}else if(ArrayBuffer.isView(t)){const r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function wt(e){const n=atob(e),t=new Uint8Array(n.length);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t.buffer}const Ce=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&q.delete(ge(e)),Ce(e,n));const q=new Map;function yt(e,n){const t=ge(e,n),r=document.querySelector(t);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const s=r.getAttribute("data-ttl");return s&&q.set(t,{body:a,init:o,ttl:1e3*Number(s)}),r.getAttribute("data-b64")!==null&&(a=wt(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,n)}function vt(e,n,t){if(q.size>0){const r=ge(e,t),a=q.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(a.body,a.init);q.delete(r)}}return window.fetch(n,t)}function ge(e,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${_t(...a)}"]`}return r}const bt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function kt(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Et(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const s=r.split(/\[(.+?)\](?!\])/);return"/"+s.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return le(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return le(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const u=bt.exec(c),[,d,m,h,_]=u;return n.push({name:h,matcher:_,optional:!!d,rest:!!m,chained:m?f===1&&s[0]==="":!1}),m?"(.*?)":d?"([^/]*)?":"([^/]+?)"}return le(c)}).join("")}).join("")}/?$`),params:n}}function St(e){return!/^\([^)]+\)$/.test(e)}function Et(e){return e.slice(1).split("/").filter(St)}function At(e,n,t){const r={},a=e.slice(1),o=a.filter(i=>i!==void 0);let s=0;for(let i=0;i<n.length;i+=1){const c=n[i];let f=a[i-s];if(c.chained&&c.rest&&s&&(f=a.slice(i-s,i+1).filter(u=>u).join("/"),s=0),f===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||t[c.matcher](f)){r[c.name]=f;const u=n[i+1],d=a[i+1];u&&!u.rest&&u.optional&&d&&c.chained&&(s=0),!u&&!d&&Object.keys(r).length===o.length&&(s=0);continue}if(c.optional&&c.chained){s++;continue}return}if(!s)return r}function le(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function xt({nodes:e,server_loads:n,dictionary:t,matchers:r}){const a=new Set(n);return Object.entries(t).map(([i,[c,f,u]])=>{const{pattern:d,params:m}=kt(i),h={id:i,exec:_=>{const l=d.exec(_);if(l)return At(l,m,r)},errors:[1,...u||[]].map(_=>e[_]),layouts:[0,...f||[]].map(s),leaf:o(c)};return h.errors.length=h.layouts.length=Math.max(h.errors.length,h.layouts.length),h});function o(i){const c=i<0;return c&&(i=~i),[c,e[i]]}function s(i){return i===void 0?i:[a.has(i),e[i]]}}function De(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Re(e,n,t=JSON.stringify){const r=t(n);try{sessionStorage[e]=r}catch{}}var Ne;const P=((Ne=globalThis.__sveltekit_77j29j)==null?void 0:Ne.base)??"/workforce";var $e;const Rt=(($e=globalThis.__sveltekit_77j29j)==null?void 0:$e.assets)??P,Lt="1725662108181",Ve="sveltekit:snapshot",Fe="sveltekit:scroll",qe="sveltekit:states",Pt="sveltekit:pageurl",$="sveltekit:history",H="sveltekit:navigation",W={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},B=location.origin;function Ge(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function me(){return{x:pageXOffset,y:pageYOffset}}function O(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Le={...W,"":W.hover};function He(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Ke(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=He(e)}}function ue(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!t||!!r||ne(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===B&&e.hasAttribute("download");return{url:t,external:a,target:r,download:o}}function z(e){let n=null,t=null,r=null,a=null,o=null,s=null,i=e;for(;i&&i!==document.documentElement;)r===null&&(r=O(i,"preload-code")),a===null&&(a=O(i,"preload-data")),n===null&&(n=O(i,"keepfocus")),t===null&&(t=O(i,"noscroll")),o===null&&(o=O(i,"reload")),s===null&&(s=O(i,"replacestate")),i=He(i);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Le[r??"off"],preload_data:Le[a??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(s)}}function Pe(e){const n=pe(e);let t=!0;function r(){t=!0,n.update(s=>s)}function a(s){t=!1,n.set(s)}function o(s){let i;return n.subscribe(c=>{(i===void 0||t&&c!==i)&&s(i=c)})}return{notify:r,set:a,subscribe:o}}function Ut(){const{set:e,subscribe:n}=pe(!1);let t;async function r(){clearTimeout(t);try{const a=await fetch(`${Rt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const s=(await a.json()).version!==Lt;return s&&(e(!0),clearTimeout(t)),s}catch{return!1}}return{subscribe:n,check:r}}function ne(e,n){return e.origin!==B||!e.pathname.startsWith(n)}const Me=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Me];const Tt=new Set([...Me]);[...Tt];function It(e){return e.filter(n=>n!=null)}class ae{constructor(n,t){this.status=n,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Be{constructor(n,t){this.status=n,this.location=t}}class _e extends Error{constructor(n,t,r){super(r),this.status=n,this.text=t}}const jt="x-sveltekit-invalidated",Ot="x-sveltekit-trailing-slash";function Y(e){return e instanceof ae||e instanceof _e?e.status:500}function Nt(e){return e instanceof _e?e.text:"Internal Error"}const j=De(Fe)??{},K=De(Ve)??{},T={url:Pe({}),page:Pe({}),navigating:pe(null),updated:Ut()};function we(e){j[e]=me()}function $t(e,n){let t=e+1;for(;j[t];)delete j[t],t+=1;for(t=n+1;K[t];)delete K[t],t+=1}function D(e){return location.href=e.href,new Promise(()=>{})}function Ue(){}let re,de,X,U,he,V;const Je=[],Q=[];let x=null;const We=[],Ct=[];let N=[],w={branch:[],error:null,url:null},ye=!1,Z=!1,Te=!0,M=!1,F=!1,ze=!1,ve=!1,be,E,L,R,ee;const G=new Set;async function zt(e,n,t){var a,o;document.URL!==location.href&&(location.href=location.href),V=e,re=xt(e),U=document.documentElement,he=n,de=e.nodes[0],X=e.nodes[1],de(),X(),E=(a=history.state)==null?void 0:a[$],L=(o=history.state)==null?void 0:o[H],E||(E=L=Date.now(),history.replaceState({...history.state,[$]:E,[H]:L},""));const r=j[E];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),t?await Mt(he,t):Ht(location.href,{replaceState:!0}),Kt()}function Dt(){Je.length=0,ve=!1}function Ye(e){Q.some(n=>n==null?void 0:n.snapshot)&&(K[e]=Q.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function Xe(e){var n;(n=K[e])==null||n.forEach((t,r)=>{var a,o;(o=(a=Q[r])==null?void 0:a.snapshot)==null||o.restore(t)})}function Ie(){we(E),Re(Fe,j),Ye(L),Re(Ve,K)}async function Qe(e,n,t,r){return J({type:"goto",url:Ge(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:r,accept:()=>{n.invalidateAll&&(ve=!0)}})}async function Vt(e){if(e.id!==(x==null?void 0:x.id)){const n={};G.add(n),x={id:e.id,token:n,promise:et({...e,preload:n}).then(t=>(G.delete(n),t.type==="loaded"&&t.state.error&&(x=null),t))}}return x.promise}async function fe(e){const n=re.find(t=>t.exec(tt(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function Ze(e,n,t){var o;w=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),R=e.props.page,be=new V.root({target:n,props:{...e.props,stores:T,components:Q},hydrate:t}),Xe(L);const a={from:null,to:{params:w.params,route:{id:((o=w.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};N.forEach(s=>s(a)),Z=!0}function te({url:e,params:n,branch:t,status:r,error:a,route:o,form:s}){let i="never";if(P&&(e.pathname===P||e.pathname===P+"/"))i="always";else for(const h of t)(h==null?void 0:h.slash)!==void 0&&(i=h.slash);e.pathname=lt(e.pathname,i),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:a,route:o},props:{constructors:It(t).map(h=>h.node.component),page:R}};s!==void 0&&(c.props.form=s);let f={},u=!R,d=0;for(let h=0;h<Math.max(t.length,w.branch.length);h+=1){const _=t[h],l=w.branch[h];(_==null?void 0:_.data)!==(l==null?void 0:l.data)&&(u=!0),_&&(f={...f,..._.data},u&&(c.props[`data_${d}`]=f),d+=1)}return(!w.url||e.href!==w.url.href||w.error!==a||s!==void 0&&s!==R.form||u)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(e),form:s??null,data:u?f:R.data}),c}async function ke({loader:e,parent:n,url:t,params:r,route:a,server_data_node:o}){var u,d,m;let s=null,i=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if((u=f.universal)!=null&&u.load){let h=function(...l){for(const g of l){const{href:b}=new URL(g,t);c.dependencies.add(b)}};const _={route:new Proxy(a,{get:(l,g)=>(i&&(c.route=!0),l[g])}),params:new Proxy(r,{get:(l,g)=>(i&&c.params.add(g),l[g])}),data:(o==null?void 0:o.data)??null,url:ht(t,()=>{i&&(c.url=!0)},l=>{i&&c.search_params.add(l)}),async fetch(l,g){let b;l instanceof Request?(b=l.url,g={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:l.headers,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...g}):b=l;const A=new URL(b,t);return i&&h(A.href),A.origin===t.origin&&(b=A.href.slice(t.origin.length)),Z?vt(b,A.href,g):yt(b,g)},setHeaders:()=>{},depends:h,parent(){return i&&(c.parent=!0),n()},untrack(l){i=!1;try{return l()}finally{i=!0}}};s=await f.universal.load.call(null,_)??null}return{node:f,loader:e,server:o,universal:(d=f.universal)!=null&&d.load?{type:"data",data:s,uses:c}:null,data:s??(o==null?void 0:o.data)??null,slash:((m=f.universal)==null?void 0:m.trailingSlash)??(o==null?void 0:o.slash)}}function je(e,n,t,r,a,o){if(ve)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&t)return!0;for(const s of a.search_params)if(r.has(s))return!0;for(const s of a.params)if(o[s]!==w.params[s])return!0;for(const s of a.dependencies)if(Je.some(i=>i(new URL(s))))return!0;return!1}function Se(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function Ft(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const r of t){const a=e.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(s=>o.includes(s))&&o.every(s=>a.includes(s))&&t.delete(r)}return t}function Oe({error:e,url:n,route:t,params:r}){return{type:"loaded",state:{error:e,url:n,route:t,params:r,branch:[]},props:{page:R,constructors:[]}}}async function et({id:e,invalidating:n,url:t,params:r,route:a,preload:o}){if((x==null?void 0:x.id)===e)return G.delete(x.token),x.promise;const{errors:s,layouts:i,leaf:c}=a,f=[...i,c];s.forEach(p=>p==null?void 0:p().catch(()=>{})),f.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let u=null;const d=w.url?e!==w.url.pathname+w.url.search:!1,m=w.route?a.id!==w.route.id:!1,h=Ft(w.url,t);let _=!1;const l=f.map((p,v)=>{var I;const k=w.branch[v],S=!!(p!=null&&p[0])&&((k==null?void 0:k.loader)!==p[1]||je(_,m,d,h,(I=k.server)==null?void 0:I.uses,r));return S&&(_=!0),S});if(l.some(Boolean)){try{u=await rt(t,l)}catch(p){const v=await C(p,{url:t,params:r,route:{id:e}});return G.has(o)?Oe({error:v,url:t,params:r,route:a}):oe({status:Y(p),error:v,url:t,route:a})}if(u.type==="redirect")return u}const g=u==null?void 0:u.nodes;let b=!1;const A=f.map(async(p,v)=>{var se;if(!p)return;const k=w.branch[v],S=g==null?void 0:g[v];if((!S||S.type==="skip")&&p[1]===(k==null?void 0:k.loader)&&!je(b,m,d,h,(se=k.universal)==null?void 0:se.uses,r))return k;if(b=!0,(S==null?void 0:S.type)==="error")throw S;return ke({loader:p[1],url:t,params:r,route:a,parent:async()=>{var xe;const Ae={};for(let ie=0;ie<v;ie+=1)Object.assign(Ae,(xe=await A[ie])==null?void 0:xe.data);return Ae},server_data_node:Se(S===void 0&&p[0]?{type:"skip"}:S??null,p[0]?k==null?void 0:k.server:void 0)})});for(const p of A)p.catch(()=>{});const y=[];for(let p=0;p<f.length;p+=1)if(f[p])try{y.push(await A[p])}catch(v){if(v instanceof Be)return{type:"redirect",location:v.location};if(G.has(o))return Oe({error:await C(v,{params:r,url:t,route:{id:a.id}}),url:t,params:r,route:a});let k=Y(v),S;if(g!=null&&g.includes(v))k=v.status??k,S=v.error;else if(v instanceof ae)S=v.body;else{if(await T.updated.check())return await D(t);S=await C(v,{params:r,url:t,route:{id:a.id}})}const I=await qt(p,y,s);return I?te({url:t,params:r,branch:y.slice(0,I.idx).concat(I.node),status:k,error:S,route:a}):await at(t,{id:a.id},S,k)}else y.push(void 0);return te({url:t,params:r,branch:y,status:200,error:null,route:a,form:n?void 0:null})}async function qt(e,n,t){for(;e--;)if(t[e]){let r=e;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:e,error:n,url:t,route:r}){const a={};let o=null;if(V.server_loads[0]===0)try{const f=await rt(t,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(t.origin!==B||t.pathname!==location.pathname||ye)&&await D(t)}const i=await ke({loader:de,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Se(o)}),c={node:await X(),loader:X,universal:null,server:null,data:null};return te({url:t,params:a,branch:[i,c],status:e,error:n,route:null})}function Ee(e,n){if(!e||ne(e,P))return;let t;try{t=V.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const r=tt(t);for(const a of re){const o=a.exec(r);if(o)return{id:e.pathname+e.search,invalidating:n,route:a,params:ut(o),url:e}}}function tt(e){return ft(e.slice(P.length)||"/")}function nt({url:e,type:n,intent:t,delta:r}){let a=!1;const o=st(w,t,e,n);r!==void 0&&(o.navigation.delta=r);const s={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return M||We.forEach(i=>i(s)),a?null:o}async function J({type:e,url:n,popped:t,keepfocus:r,noscroll:a,replace_state:o,state:s={},redirect_count:i=0,nav_token:c={},accept:f=Ue,block:u=Ue}){const d=Ee(n,!1),m=nt({url:n,type:e,delta:t==null?void 0:t.delta,intent:d});if(!m){u();return}const h=E,_=L;f(),M=!0,Z&&T.navigating.set(m.navigation),ee=c;let l=d&&await et(d);if(!l){if(ne(n,P))return await D(n);l=await at(n,{id:null},await C(new _e(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(d==null?void 0:d.url)||n,ee!==c)return m.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(i>=20)l=await oe({status:500,error:await C(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return Qe(new URL(l.location,n).href,{},i+1,c),!1;else l.props.page.status>=400&&await T.updated.check()&&await D(n);if(Dt(),we(h),Ye(_),l.props.page.url.pathname!==n.pathname&&(n.pathname=l.props.page.url.pathname),s=t?t.state:s,!t){const y=o?0:1,p={[$]:E+=y,[H]:L+=y,[qe]:s};(o?history.replaceState:history.pushState).call(history,p,"",n),o||$t(E,L)}if(x=null,l.props.page.state=s,Z){w=l.state,l.props.page&&(l.props.page.url=n);const y=(await Promise.all(Ct.map(p=>p(m.navigation)))).filter(p=>typeof p=="function");if(y.length>0){let p=function(){N=N.filter(v=>!y.includes(v))};y.push(p),N.push(...y)}be.$set(l.props),ze=!0}else Ze(l,he,!1);const{activeElement:g}=document;await it();const b=t?t.scroll:a?me():null;if(Te){const y=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):y?y.scrollIntoView():scrollTo(0,0)}const A=document.activeElement!==g&&document.activeElement!==document.body;!r&&!A&&Bt(),Te=!0,l.props.page&&(R=l.props.page),M=!1,e==="popstate"&&Xe(L),m.fulfil(void 0),N.forEach(y=>y(m.navigation)),T.navigating.set(null)}async function at(e,n,t,r){return e.origin===B&&e.pathname===location.pathname&&!ye?await oe({status:r,error:t,url:e,route:n}):await D(e)}function Gt(){let e;U.addEventListener("mousemove",o=>{const s=o.target;clearTimeout(e),e=setTimeout(()=>{r(s,2)},20)});function n(o){r(o.composedPath()[0],1)}U.addEventListener("mousedown",n),U.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const s of o)s.isIntersecting&&(fe(s.target.href),t.unobserve(s.target))},{threshold:0});function r(o,s){const i=Ke(o,U);if(!i)return;const{url:c,external:f,download:u}=ue(i,P);if(f||u)return;const d=z(i);if(!d.reload)if(s<=d.preload_data){const m=Ee(c,!1);m&&Vt(m)}else s<=d.preload_code&&fe(c.pathname)}function a(){t.disconnect();for(const o of U.querySelectorAll("a")){const{url:s,external:i,download:c}=ue(o,P);if(i||c)continue;const f=z(o);f.reload||(f.preload_code===W.viewport&&t.observe(o),f.preload_code===W.eager&&fe(s.pathname))}}N.push(a),a()}function C(e,n){if(e instanceof ae)return e.body;const t=Y(e),r=Nt(e);return V.hooks.handleError({error:e,event:n,status:t,message:r})??{message:r}}function Ht(e,n={}){return e=Ge(e),e.origin!==B?Promise.reject(new Error("goto: invalid URL")):Qe(e,n,0)}function Kt(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let r=!1;if(Ie(),!M){const a=st(w,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};We.forEach(s=>s(o))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ie()}),(n=navigator.connection)!=null&&n.saveData||Gt(),U.addEventListener("click",async t=>{var m;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=Ke(t.composedPath()[0],U);if(!r)return;const{url:a,external:o,target:s,download:i}=ue(r,P);if(!a)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const c=z(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||i)return;if(o||c.reload){nt({url:a,type:"link"})?M=!0:t.preventDefault();return}const[u,d]=a.href.split("#");if(d!==void 0&&u===ce(location)){const[,h]=w.url.href.split("#");if(h===d){t.preventDefault(),d===""||d==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(m=r.ownerDocument.getElementById(d))==null||m.scrollIntoView();return}if(F=!0,we(E),e(a),!c.replace_state)return;F=!1}t.preventDefault(),await new Promise(h=>{requestAnimationFrame(()=>{setTimeout(h,0)}),setTimeout(h,100)}),J({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),U.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ne(s,P))return;const i=t.target,c=z(i);if(c.reload)return;t.preventDefault(),t.stopPropagation();const f=new FormData(i),u=a==null?void 0:a.getAttribute("name");u&&f.append(u,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(f).toString(),J({type:"form",url:s,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??s.href===location.href})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[$]){const a=t.state[$];if(ee={},a===E)return;const o=j[a],s=t.state[qe]??{},i=new URL(t.state[Pt]??location.href),c=t.state[H],f=ce(location)===ce(w.url);if(c===L&&(ze||f)){e(i),j[E]=me(),o&&scrollTo(o.x,o.y),s!==R.state&&(R={...R,state:s},be.$set({page:R})),E=a;return}const d=a-E;await J({type:"popstate",url:i,popped:{state:s,scroll:o,delta:d},accept:()=>{E=a,L=c},block:()=>{history.go(-d)},nav_token:ee})}else if(!F){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{F&&(F=!1,history.replaceState({...history.state,[$]:++E,[H]:L},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&T.navigating.set(null)});function e(t){w.url=t,T.page.set({...R,url:t}),T.page.notify()}}async function Mt(e,{status:n=200,error:t,node_ids:r,params:a,route:o,data:s,form:i}){ye=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Ee(c,!1)||{});let f;try{const u=r.map(async(h,_)=>{const l=s[_];return l!=null&&l.uses&&(l.uses=ot(l.uses)),ke({loader:V.nodes[h],url:c,params:a,route:o,parent:async()=>{const g={};for(let b=0;b<_;b+=1)Object.assign(g,(await u[b]).data);return g},server_data_node:Se(l)})}),d=await Promise.all(u),m=re.find(({id:h})=>h===o.id);if(m){const h=m.layouts;for(let _=0;_<h.length;_++)h[_]||d.splice(_,0,void 0)}f=te({url:c,params:a,branch:d,status:n,error:t,form:i,route:m??null})}catch(u){if(u instanceof Be){await D(new URL(u.location,location.href));return}f=await oe({status:Y(u),error:await C(u,{url:c,params:a,route:o}),url:c,route:o})}f.props.page&&(f.props.page.state={}),Ze(f,e,!0)}async function rt(e,n){var a;const t=new URL(e);t.pathname=mt(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(Ot,"1"),t.searchParams.append(jt,n.map(o=>o?"1":"0").join(""));const r=await Ce(t.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new ae(r.status,o)}return new Promise(async o=>{var d;const s=new Map,i=r.body.getReader(),c=new TextDecoder;function f(m){return ct(m,{Promise:h=>new Promise((_,l)=>{s.set(h,{fulfil:_,reject:l})})})}let u="";for(;;){const{done:m,value:h}=await i.read();if(m&&!u)break;for(u+=!h&&u?`
`:c.decode(h,{stream:!0});;){const _=u.indexOf(`
`);if(_===-1)break;const l=JSON.parse(u.slice(0,_));if(u=u.slice(_+1),l.type==="redirect")return o(l);if(l.type==="data")(d=l.nodes)==null||d.forEach(g=>{(g==null?void 0:g.type)==="data"&&(g.uses=ot(g.uses),g.data=f(g.data))}),o(l);else if(l.type==="chunk"){const{id:g,data:b,error:A}=l,y=s.get(g);s.delete(g),A?y.reject(f(A)):y.fulfil(f(b))}}}})}function ot(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function Bt(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const s=a[o],i=r.getRangeAt(o);if(s.commonAncestorContainer!==i.commonAncestorContainer||s.startContainer!==i.startContainer||s.endContainer!==i.endContainer||s.startOffset!==i.startOffset||s.endOffset!==i.endOffset)return}r.removeAllRanges()}})}}}function st(e,n,t,r){var c,f;let a,o;const s=new Promise((u,d)=>{a=u,o=d});return s.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((f=n==null?void 0:n.route)==null?void 0:f.id)??null},url:t},willUnload:!n,type:r,complete:s},fulfil:a,reject:o}}export{zt as a,P as b,T as s};
