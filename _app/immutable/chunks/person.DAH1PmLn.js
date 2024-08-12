import{G as se}from"./index.DzAT84GV.js";import{v as T}from"./scheduler.Ciux9Hyk.js";import{U as G,N as oe,P as ae,a as ue,b as H,H as ce,p as ie,u as le,w as fe}from"./parse.C8hxPnsn.js";const pe={"<":"\\u003C","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\u2028":"\\u2028","\u2029":"\\u2029"};class g extends Error{constructor(t,n){super(t),this.name="DevalueError",this.path=n.join("")}}function N(e){return Object(e)!==e}const de=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function h(e){const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null||Object.getOwnPropertyNames(t).sort().join("\0")===de}function z(e){return Object.prototype.toString.call(e).slice(8,-1)}function be(e){switch(e){case'"':return'\\"';case"<":return"\\u003C";case"\\":return"\\\\";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\b":return"\\b";case"\f":return"\\f";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:return e<" "?`\\u${e.charCodeAt(0).toString(16).padStart(4,"0")}`:""}}function O(e){let t="",n=0;const o=e.length;for(let d=0;d<o;d+=1){const l=e[d],m=be(l);m&&(t+=e.slice(n,d)+m,n=d+1)}return`"${n===0?e:t+e.slice(n)}"`}function K(e){return Object.getOwnPropertySymbols(e).filter(t=>Object.getOwnPropertyDescriptor(e,t).enumerable)}const U="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$",ye=/[<\b\f\n\r\t\0\u2028\u2029]/g,me=/^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;function $e(e,t){const n=new Map,o=[],d=new Map;function l(r){if(typeof r=="function")throw new g("Cannot stringify a function",o);if(!N(r)){if(n.has(r)){n.set(r,n.get(r)+1);return}if(n.set(r,1),t){const s=t(r);if(typeof s=="string"){d.set(r,s);return}}switch(z(r)){case"Number":case"BigInt":case"String":case"Boolean":case"Date":case"RegExp":return;case"Array":r.forEach((s,f)=>{o.push(`[${f}]`),l(s),o.pop()});break;case"Set":Array.from(r).forEach(l);break;case"Map":for(const[s,f]of r)o.push(`.get(${N(s)?V(s):"..."})`),l(f),o.pop();break;default:if(!h(r))throw new g("Cannot stringify arbitrary non-POJOs",o);if(K(r).length>0)throw new g("Cannot stringify POJOs with symbolic keys",o);for(const s in r)o.push(`.${s}`),l(r[s]),o.pop()}}}l(e);const m=new Map;Array.from(n).filter(r=>r[1]>1).sort((r,c)=>c[1]-r[1]).forEach((r,c)=>{m.set(r[0],we(c))});function u(r){if(m.has(r))return m.get(r);if(N(r))return V(r);if(d.has(r))return d.get(r);const c=z(r);switch(c){case"Number":case"String":case"Boolean":return`Object(${u(r.valueOf())})`;case"RegExp":return`new RegExp(${O(r.source)}, "${r.flags}")`;case"Date":return`new Date(${r.getTime()})`;case"Array":const s=r.map((p,a)=>a in r?u(p):""),f=r.length===0||r.length-1 in r?"":",";return`[${s.join(",")}${f}]`;case"Set":case"Map":return`new ${c}([${Array.from(r).map(u).join(",")}])`;default:const i=`{${Object.keys(r).map(p=>`${_e(p)}:${u(r[p])}`).join(",")}}`;return Object.getPrototypeOf(r)===null?Object.keys(r).length>0?`Object.assign(Object.create(null),${i})`:"Object.create(null)":i}}const _=u(e);if(m.size){const r=[],c=[],s=[];return m.forEach((f,i)=>{if(r.push(f),d.has(i)){s.push(d.get(i));return}if(N(i)){s.push(V(i));return}switch(z(i)){case"Number":case"String":case"Boolean":s.push(`Object(${u(i.valueOf())})`);break;case"RegExp":s.push(i.toString());break;case"Date":s.push(`new Date(${i.getTime()})`);break;case"Array":s.push(`Array(${i.length})`),i.forEach((p,a)=>{c.push(`${f}[${a}]=${u(p)}`)});break;case"Set":s.push("new Set"),c.push(`${f}.${Array.from(i).map(p=>`add(${u(p)})`).join(".")}`);break;case"Map":s.push("new Map"),c.push(`${f}.${Array.from(i).map(([p,a])=>`set(${u(p)}, ${u(a)})`).join(".")}`);break;default:s.push(Object.getPrototypeOf(i)===null?"Object.create(null)":"{}"),Object.keys(i).forEach(p=>{c.push(`${f}${Oe(p)}=${u(i[p])}`)})}}),c.push(`return ${_}`),`(function(${r.join(",")}){${c.join(";")}}(${s.join(",")}))`}else return _}function we(e){let t="";do t=U[e%U.length]+t,e=~~(e/U.length)-1;while(e>=0);return me.test(t)?`${t}0`:t}function ve(e){return pe[e]||e}function Q(e){return e.replace(ye,ve)}function _e(e){return/^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e)?e:Q(JSON.stringify(e))}function Oe(e){return/^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e)?`.${e}`:`[${Q(JSON.stringify(e))}]`}function V(e){if(typeof e=="string")return O(e);if(e===void 0)return"void 0";if(e===0&&1/e<0)return"-0";const t=String(e);return typeof e=="number"?t.replace(/^(-)?0\./,"$1."):typeof e=="bigint"?e+"n":t}function Se(e,t){const n=[],o=new Map,d=[];for(const r in t)d.push({key:r,fn:t[r]});const l=[];let m=0;function u(r){if(typeof r=="function")throw new g("Cannot stringify a function",l);if(o.has(r))return o.get(r);if(r===void 0)return G;if(Number.isNaN(r))return oe;if(r===1/0)return ae;if(r===-1/0)return ue;if(r===0&&1/r<0)return H;const c=m++;o.set(r,c);for(const{key:f,fn:i}of d){const $=i(r);if($)return n[c]=`["${f}",${u($)}]`,c}let s="";if(N(r))s=M(r);else switch(z(r)){case"Number":case"String":case"Boolean":s=`["Object",${M(r)}]`;break;case"BigInt":s=`["BigInt",${r}]`;break;case"Date":s=`["Date","${!isNaN(r.getDate())?r.toISOString():""}"]`;break;case"RegExp":const{source:$,flags:p}=r;s=p?`["RegExp",${O($)},"${p}"]`:`["RegExp",${O($)}]`;break;case"Array":s="[";for(let a=0;a<r.length;a+=1)a>0&&(s+=","),a in r?(l.push(`[${a}]`),s+=u(r[a]),l.pop()):s+=ce;s+="]";break;case"Set":s='["Set"';for(const a of r)s+=`,${u(a)}`;s+="]";break;case"Map":s='["Map"';for(const[a,S]of r)l.push(`.get(${N(a)?M(a):"..."})`),s+=`,${u(a)},${u(S)}`,l.pop();s+="]";break;default:if(!h(r))throw new g("Cannot stringify arbitrary non-POJOs",l);if(K(r).length>0)throw new g("Cannot stringify POJOs with symbolic keys",l);if(Object.getPrototypeOf(r)===null){s='["null"';for(const a in r)l.push(`.${a}`),s+=`,${O(a)},${u(r[a])}`,l.pop();s+="]"}else{s="{";let a=!1;for(const S in r)a&&(s+=","),a=!0,l.push(`.${S}`),s+=`${O(S)}:${u(r[S])}`,l.pop();s+="}"}}return n[c]=s,c}const _=u(e);return _<0?`${_}`:`[${n.join(",")}]`}function M(e){const t=typeof e;return t==="string"?O(e):e instanceof String?O(e.toString()):e===void 0?G.toString():e===0&&1/e<0?H.toString():t==="bigint"?`["BigInt","${e}"]`:String(e)}const P=Object.freeze(Object.defineProperty({__proto__:null,parse:ie,stringify:Se,uneval:$e,unflatten:le},Symbol.toStringTag,{value:"Module"}));var b=[];for(var C=0;C<256;++C)b.push((C+256).toString(16).slice(1));function ke(e,t=0){return(b[e[t+0]]+b[e[t+1]]+b[e[t+2]]+b[e[t+3]]+"-"+b[e[t+4]]+b[e[t+5]]+"-"+b[e[t+6]]+b[e[t+7]]+"-"+b[e[t+8]]+b[e[t+9]]+"-"+b[e[t+10]]+b[e[t+11]]+b[e[t+12]]+b[e[t+13]]+b[e[t+14]]+b[e[t+15]]).toLowerCase()}var D,je=new Uint8Array(16);function Ee(){if(!D&&(D=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!D))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return D(je)}var Ne=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const q={randomUUID:Ne};function ge(e,t,n){if(q.randomUUID&&!t&&!e)return q.randomUUID();e=e||{};var o=e.random||(e.rng||Ee)();return o[6]=o[6]&15|64,o[8]=o[8]&63|128,ke(o)}var X=(e=>(e.Person="Person",e.Location="Location",e.Task="Task",e.Shift="Shift",e.Skill="Skill",e))(X||{}),Pe=(e=>(e.NoPerson="NoPerson",e.NoLocation="NoLocation",e.NoTask="NoTask",e))(Pe||{});function Ie(e){switch(e.type){case"NoPerson":return[e.applies_to,e.person];case"NoLocation":return[e.applies_to,e.location];case"NoTask":return[e.applies_to,e.task]}}function F(e,t){return Ie(e).map(n=>n.uuid).includes(t.uuid)}var L={local:{},session:{}};function xe(e){return e==="local"?localStorage:sessionStorage}function I(e,t,n){var o,d,l,m,u,_,r,c;n!=null&&n.onError&&console.warn("onError has been deprecated. Please use onWriteError instead");const s=(o=n==null?void 0:n.serializer)!=null?o:JSON,f=(d=n==null?void 0:n.storage)!=null?d:"local",i=(l=n==null?void 0:n.syncTabs)!=null?l:!0,$=(u=(m=n==null?void 0:n.onWriteError)!=null?m:n==null?void 0:n.onError)!=null?u:y=>console.error(`Error when writing value from persisted store "${e}" to ${f}`,y),p=(_=n==null?void 0:n.onParseError)!=null?_:(y,w)=>console.error(`Error when parsing ${y?'"'+y+'"':"value"} from persisted store "${e}"`,w),a=(r=n==null?void 0:n.beforeRead)!=null?r:y=>y,S=(c=n==null?void 0:n.beforeWrite)!=null?c:y=>y,W=typeof window<"u"&&typeof document<"u",x=W?xe(f):null;function Z(y,w){const j=S(w);try{x==null||x.setItem(y,s.stringify(j))}catch(A){$(A)}}function re(){function y(v){try{return s.parse(v)}catch(E){p(v,E)}}const w=x==null?void 0:x.getItem(e);if(w==null)return t;const j=y(w);return j==null?t:a(j)}if(!L[f][e]){const y=re(),w=fe(y,v=>{if(W&&f=="local"&&i){const E=k=>{if(k.key===e&&k.newValue){let Y;try{Y=s.parse(k.newValue)}catch(ne){p(k.newValue,ne);return}const te=a(Y);v(te)}};return window.addEventListener("storage",E),()=>window.removeEventListener("storage",E)}}),{subscribe:j,set:A}=w;L[f][e]={set(v){A(v),Z(e,v)},update(v){return w.update(E=>{const k=v(E);return Z(e,k),k})},reset(){this.set(t)},subscribe:j}}return L[f][e]}const ee=I("skills",[],{serializer:P}),B=I("employees",[],{serializer:P}),Ue=I("locations",[],{serializer:P}),R=I("tasks",[],{serializer:P}),J=I("constraints",[],{serializer:P}),Ae=I("shifts",[],{serializer:P});function Ve(e){return T(J).filter(t=>F(t,e))}function De(e){if(e!==void 0)return T(ee).find(t=>t.uuid===e)}function Me(e){if(e!==void 0)return T(B).find(t=>t.uuid===e)}function Ce(e){if(e!==void 0)return T(R).find(t=>t.uuid===e)}function Le(e){R.update(t=>t.map(n=>(n.people_uuids=n.people_uuids.filter(o=>o!==e.uuid),n))),J.update(t=>t.filter(n=>!F(n,e))),B.update(t=>t.filter(n=>n.uuid!==e.uuid))}function Fe(e){B.update(t=>t.map(n=>(n.skill_uuids=n.skill_uuids.filter(o=>o!==e.uuid),n))),R.update(t=>t.map(n=>(n.required_skill_uuids=n.required_skill_uuids.filter(o=>o!==e.uuid),n))),ee.update(t=>t.filter(n=>n.uuid!==e.uuid))}function Be(e){Ae.update(t=>t.map(n=>(n.tasks=n.tasks.filter(o=>o!==e.uuid),n))),J.update(t=>t.filter(n=>!F(n,e))),R.update(t=>t.filter(n=>n.uuid!==e.uuid))}function Je(e){return{uuid:ge(),type:X.Person,...e}}function We(e){return se(e.name)}function Ze(e){return new Date().getFullYear()-e.birthday.getFullYear()}function Ye(e){return e.skill_uuids.map(t=>De(t)).filter(t=>t!==void 0)}function qe(){return{name:"",job_title:"",skill_uuids:[],image_url:"",birthday:new Date}}export{Pe as C,X as T,Ae as a,Me as b,J as c,De as d,B as e,Je as f,Ce as g,Ze as h,Ye as i,Ve as j,qe as k,Ue as l,Le as m,Fe as n,Be as o,We as p,Ie as q,ee as s,R as t,ge as v};