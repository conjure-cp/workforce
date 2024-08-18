import{U as H,N as ae,P as ue,a as ie,b as G,H as ce,p as le,u as fe,w as pe}from"./parse.iudxBx5H.js";import{v as A}from"./scheduler.CfTqBbps.js";import{e as de}from"./index.DhF70wyd.js";const be={"<":"\\u003C","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\u2028":"\\u2028","\u2029":"\\u2029"};class N extends Error{constructor(r,n){super(r),this.name="DevalueError",this.path=n.join("")}}function g(e){return Object(e)!==e}const ye=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function K(e){const r=Object.getPrototypeOf(e);return r===Object.prototype||r===null||Object.getOwnPropertyNames(r).sort().join("\0")===ye}function T(e){return Object.prototype.toString.call(e).slice(8,-1)}function me(e){switch(e){case'"':return'\\"';case"<":return"\\u003C";case"\\":return"\\\\";case`
`:return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\b":return"\\b";case"\f":return"\\f";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:return e<" "?`\\u${e.charCodeAt(0).toString(16).padStart(4,"0")}`:""}}function O(e){let r="",n=0;const o=e.length;for(let d=0;d<o;d+=1){const l=e[d],m=me(l);m&&(r+=e.slice(n,d)+m,n=d+1)}return`"${n===0?e:r+e.slice(n)}"`}function Q(e){return Object.getOwnPropertySymbols(e).filter(r=>Object.getOwnPropertyDescriptor(e,r).enumerable)}const U="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$",$e=/[<\b\f\n\r\t\0\u2028\u2029]/g,we=/^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;function ve(e,r){const n=new Map,o=[],d=new Map;function l(t){if(typeof t=="function")throw new N("Cannot stringify a function",o);if(!g(t)){if(n.has(t)){n.set(t,n.get(t)+1);return}if(n.set(t,1),r){const s=r(t);if(typeof s=="string"){d.set(t,s);return}}switch(T(t)){case"Number":case"BigInt":case"String":case"Boolean":case"Date":case"RegExp":return;case"Array":t.forEach((s,f)=>{o.push(`[${f}]`),l(s),o.pop()});break;case"Set":Array.from(t).forEach(l);break;case"Map":for(const[s,f]of t)o.push(`.get(${g(s)?L(s):"..."})`),l(f),o.pop();break;default:if(!K(t))throw new N("Cannot stringify arbitrary non-POJOs",o);if(Q(t).length>0)throw new N("Cannot stringify POJOs with symbolic keys",o);for(const s in t)o.push(`.${s}`),l(t[s]),o.pop()}}}l(e);const m=new Map;Array.from(n).filter(t=>t[1]>1).sort((t,i)=>i[1]-t[1]).forEach((t,i)=>{m.set(t[0],_e(i))});function u(t){if(m.has(t))return m.get(t);if(g(t))return L(t);if(d.has(t))return d.get(t);const i=T(t);switch(i){case"Number":case"String":case"Boolean":return`Object(${u(t.valueOf())})`;case"RegExp":return`new RegExp(${O(t.source)}, "${t.flags}")`;case"Date":return`new Date(${t.getTime()})`;case"Array":const s=t.map((p,a)=>a in t?u(p):""),f=t.length===0||t.length-1 in t?"":",";return`[${s.join(",")}${f}]`;case"Set":case"Map":return`new ${i}([${Array.from(t).map(u).join(",")}])`;default:const c=`{${Object.keys(t).map(p=>`${ke(p)}:${u(t[p])}`).join(",")}}`;return Object.getPrototypeOf(t)===null?Object.keys(t).length>0?`Object.assign(Object.create(null),${c})`:"Object.create(null)":c}}const _=u(e);if(m.size){const t=[],i=[],s=[];return m.forEach((f,c)=>{if(t.push(f),d.has(c)){s.push(d.get(c));return}if(g(c)){s.push(L(c));return}switch(T(c)){case"Number":case"String":case"Boolean":s.push(`Object(${u(c.valueOf())})`);break;case"RegExp":s.push(c.toString());break;case"Date":s.push(`new Date(${c.getTime()})`);break;case"Array":s.push(`Array(${c.length})`),c.forEach((p,a)=>{i.push(`${f}[${a}]=${u(p)}`)});break;case"Set":s.push("new Set"),i.push(`${f}.${Array.from(c).map(p=>`add(${u(p)})`).join(".")}`);break;case"Map":s.push("new Map"),i.push(`${f}.${Array.from(c).map(([p,a])=>`set(${u(p)}, ${u(a)})`).join(".")}`);break;default:s.push(Object.getPrototypeOf(c)===null?"Object.create(null)":"{}"),Object.keys(c).forEach(p=>{i.push(`${f}${Se(p)}=${u(c[p])}`)})}}),i.push(`return ${_}`),`(function(${t.join(",")}){${i.join(";")}}(${s.join(",")}))`}else return _}function _e(e){let r="";do r=U[e%U.length]+r,e=~~(e/U.length)-1;while(e>=0);return we.test(r)?`${r}0`:r}function Oe(e){return be[e]||e}function X(e){return e.replace($e,Oe)}function ke(e){return/^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e)?e:X(JSON.stringify(e))}function Se(e){return/^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e)?`.${e}`:`[${X(JSON.stringify(e))}]`}function L(e){if(typeof e=="string")return O(e);if(e===void 0)return"void 0";if(e===0&&1/e<0)return"-0";const r=String(e);return typeof e=="number"?r.replace(/^(-)?0\./,"$1."):typeof e=="bigint"?e+"n":r}function je(e,r){const n=[],o=new Map,d=[];for(const t in r)d.push({key:t,fn:r[t]});const l=[];let m=0;function u(t){if(typeof t=="function")throw new N("Cannot stringify a function",l);if(o.has(t))return o.get(t);if(t===void 0)return H;if(Number.isNaN(t))return ae;if(t===1/0)return ue;if(t===-1/0)return ie;if(t===0&&1/t<0)return G;const i=m++;o.set(t,i);for(const{key:f,fn:c}of d){const $=c(t);if($)return n[i]=`["${f}",${u($)}]`,i}let s="";if(g(t))s=V(t);else switch(T(t)){case"Number":case"String":case"Boolean":s=`["Object",${V(t)}]`;break;case"BigInt":s=`["BigInt",${t}]`;break;case"Date":s=`["Date","${!isNaN(t.getDate())?t.toISOString():""}"]`;break;case"RegExp":const{source:$,flags:p}=t;s=p?`["RegExp",${O($)},"${p}"]`:`["RegExp",${O($)}]`;break;case"Array":s="[";for(let a=0;a<t.length;a+=1)a>0&&(s+=","),a in t?(l.push(`[${a}]`),s+=u(t[a]),l.pop()):s+=ce;s+="]";break;case"Set":s='["Set"';for(const a of t)s+=`,${u(a)}`;s+="]";break;case"Map":s='["Map"';for(const[a,k]of t)l.push(`.get(${g(a)?V(a):"..."})`),s+=`,${u(a)},${u(k)}`,l.pop();s+="]";break;default:if(!K(t))throw new N("Cannot stringify arbitrary non-POJOs",l);if(Q(t).length>0)throw new N("Cannot stringify POJOs with symbolic keys",l);if(Object.getPrototypeOf(t)===null){s='["null"';for(const a in t)l.push(`.${a}`),s+=`,${O(a)},${u(t[a])}`,l.pop();s+="]"}else{s="{";let a=!1;for(const k in t)a&&(s+=","),a=!0,l.push(`.${k}`),s+=`${O(k)}:${u(t[k])}`,l.pop();s+="}"}}return n[i]=s,i}const _=u(e);return _<0?`${_}`:`[${n.join(",")}]`}function V(e){const r=typeof e;return r==="string"?O(e):e instanceof String?O(e.toString()):e===void 0?H.toString():e===0&&1/e<0?G.toString():r==="bigint"?`["BigInt","${e}"]`:String(e)}const P=Object.freeze(Object.defineProperty({__proto__:null,parse:le,stringify:je,uneval:ve,unflatten:fe},Symbol.toStringTag,{value:"Module"}));var Ee=(e=>(e.NoLocation="NoLocation",e.NoPerson="NoPerson",e.NoTask="NoTask",e))(Ee||{});function ge(e){switch(e.type){case"NoPerson":return[e.applies_to,e.person];case"NoLocation":return[e.applies_to,e.location];case"NoTask":return[e.applies_to,e.task]}}function F(e,r){return ge(e).map(n=>n.uuid).includes(r.uuid)}var M={local:{},session:{}};function Ne(e){return e==="local"?localStorage:sessionStorage}function I(e,r,n){var o,d,l,m,u,_,t,i;n!=null&&n.onError&&console.warn("onError has been deprecated. Please use onWriteError instead");const s=(o=n==null?void 0:n.serializer)!=null?o:JSON,f=(d=n==null?void 0:n.storage)!=null?d:"local",c=(l=n==null?void 0:n.syncTabs)!=null?l:!0,$=(u=(m=n==null?void 0:n.onWriteError)!=null?m:n==null?void 0:n.onError)!=null?u:y=>console.error(`Error when writing value from persisted store "${e}" to ${f}`,y),p=(_=n==null?void 0:n.onParseError)!=null?_:(y,w)=>console.error(`Error when parsing ${y?'"'+y+'"':"value"} from persisted store "${e}"`,w),a=(t=n==null?void 0:n.beforeRead)!=null?t:y=>y,k=(i=n==null?void 0:n.beforeWrite)!=null?i:y=>y,W=typeof window<"u"&&typeof document<"u",x=W?Ne(f):null;function Z(y,w){const j=k(w);try{x==null||x.setItem(y,s.stringify(j))}catch(D){$(D)}}function ne(){function y(v){try{return s.parse(v)}catch(E){p(v,E)}}const w=x==null?void 0:x.getItem(e);if(w==null)return r;const j=y(w);return j==null?r:a(j)}if(!M[f][e]){const y=ne(),w=pe(y,v=>{if(W&&f=="local"&&c){const E=S=>{if(S.key===e&&S.newValue){let Y;try{Y=s.parse(S.newValue)}catch(oe){p(S.newValue,oe);return}const se=a(Y);v(se)}};return window.addEventListener("storage",E),()=>window.removeEventListener("storage",E)}}),{subscribe:j,set:D}=w;M[f][e]={set(v){D(v),Z(e,v)},update(v){return w.update(E=>{const S=v(E);return Z(e,S),S})},reset(){this.set(r)},subscribe:j}}return M[f][e]}const h=I("skills",[],{serializer:P}),B=I("employees",[],{serializer:P}),ee=I("locations",[],{serializer:P}),R=I("tasks",[],{serializer:P}),J=I("constraints",[],{serializer:P}),re=I("assignments",[],{serializer:P});function Le(e){return A(J).filter(r=>F(r,e))}function Pe(e){if(e!==void 0)return A(h).find(r=>r.uuid===e)}function Ve(e){if(e!==void 0)return A(B).find(r=>r.uuid===e)}function Me(e){if(e!==void 0)return A(R).find(r=>r.uuid===e)}function Ce(e){if(e!==void 0)return A(ee).find(r=>r.uuid===e)}function Fe(e){R.update(r=>r.map(n=>(n.people_uuids=n.people_uuids.filter(o=>o!==e.uuid),n))),J.update(r=>r.filter(n=>!F(n,e))),B.update(r=>r.filter(n=>n.uuid!==e.uuid))}function Be(e){B.update(r=>r.map(n=>(n.skill_uuids=n.skill_uuids.filter(o=>o!==e.uuid),n))),R.update(r=>r.map(n=>(n.required_skill_uuids=n.required_skill_uuids.filter(o=>o!==e.uuid),n))),h.update(r=>r.filter(n=>n.uuid!==e.uuid))}function Je(e){re.update(r=>r.map(n=>(n.task_uuids=n.task_uuids.filter(o=>o!==e.uuid),n))),J.update(r=>r.filter(n=>!F(n,e))),R.update(r=>r.filter(n=>n.uuid!==e.uuid))}function We(e){re.update(r=>r.filter(n=>n.location_uuid!==e.uuid)),ee.update(r=>r.filter(n=>n.uuid!==e.uuid))}var b=[];for(var C=0;C<256;++C)b.push((C+256).toString(16).slice(1));function Ie(e,r=0){return(b[e[r+0]]+b[e[r+1]]+b[e[r+2]]+b[e[r+3]]+"-"+b[e[r+4]]+b[e[r+5]]+"-"+b[e[r+6]]+b[e[r+7]]+"-"+b[e[r+8]]+b[e[r+9]]+"-"+b[e[r+10]]+b[e[r+11]]+b[e[r+12]]+b[e[r+13]]+b[e[r+14]]+b[e[r+15]]).toLowerCase()}var z,Ae=new Uint8Array(16);function xe(){if(!z&&(z=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!z))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return z(Ae)}var De=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const q={randomUUID:De};function ze(e,r,n){if(q.randomUUID&&!r&&!e)return q.randomUUID();e=e||{};var o=e.random||(e.rng||xe)();return o[6]=o[6]&15|64,o[8]=o[8]&63|128,Ie(o)}var te=(e=>(e.Assignment="Assignment",e.Location="Location",e.Person="Person",e.Skill="Skill",e.Task="Task",e))(te||{});function Ze(e){return{type:te.Person,uuid:ze(),...e}}function Ye(e){return de(e.name)}function qe(e){return new Date().getFullYear()-e.birthday.getFullYear()}function He(e){return e.skill_uuids.map(r=>Pe(r)).filter(r=>r!==void 0)}function Ge(){return{birthday:new Date,image_url:"",job_title:"",name:"",skill_uuids:[]}}export{Ee as C,te as T,re as a,Ze as b,J as c,Ce as d,B as e,Ve as f,Me as g,Pe as h,Ge as i,qe as j,He as k,ee as l,Le as m,Fe as n,Be as o,Je as p,Ye as q,We as r,h as s,R as t,ge as u,ze as v};