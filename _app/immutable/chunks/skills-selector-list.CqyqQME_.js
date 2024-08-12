import{s as R,B as X,i as S,f as w,J as A,k as J,l as E,m as fe,w as K,o as L,e as ae,c as ue,b as ce,K as Y,L as be,u as O,p as G,q as H,x as me,A as ve,a as N,g as B,t as M,d as Q,C as _e,j as Ce,r as Z,h as we}from"./scheduler.Ciux9Hyk.js";import{S as U,i as z,g as I,b as d,f as T,t as m,c as h,a as $,m as k,d as b,e as de}from"./index.DZw56Mkm.js";import{g as ge,c as P,a as Se,B as je,d as y,p as Ne}from"./index.DzAT84GV.js";import{g as Be}from"./label.SswsXdpo.js";import{e as q}from"./icon.DioN3c3L.js";import{a as F,c as pe}from"./person-tooltip.f9BnB8o5.js";import{C as De,a as Ee,b as Pe,c as Ve,d as he}from"./skills-list.DVBHjtGt.js";import{R as Ae,T as Ie,P as Te,S as W}from"./skill-badge.C3DV0_iw.js";import{s as $e,d as x}from"./person.DAH1PmLn.js";const qe=s=>({builder:s&4}),ee=s=>({builder:s[2]}),Re=s=>({builder:s&4}),te=s=>({builder:s[2]});function Ue(s){let e,n,l,i;const t=s[8].default,r=L(t,s,s[7],ee);let a=[s[2],s[4]],o={};for(let f=0;f<a.length;f+=1)o=E(o,a[f]);return{c(){e=ae("div"),r&&r.c(),this.h()},l(f){e=ue(f,"DIV",{});var u=ce(e);r&&r.l(u),u.forEach(w),this.h()},h(){Y(e,o)},m(f,u){S(f,e,u),r&&r.m(e,null),s[9](e),n=!0,l||(i=be(s[2].action(e)),l=!0)},p(f,u){r&&r.p&&(!n||u&132)&&O(r,t,f,f[7],n?H(t,f[7],u,qe):G(f[7]),ee),Y(e,o=ge(a,[u&4&&f[2],u&16&&f[4]]))},i(f){n||(m(r,f),n=!0)},o(f){d(r,f),n=!1},d(f){f&&w(e),r&&r.d(f),s[9](null),l=!1,i()}}}function ze(s){let e;const n=s[8].default,l=L(n,s,s[7],te);return{c(){l&&l.c()},l(i){l&&l.l(i)},m(i,t){l&&l.m(i,t),e=!0},p(i,t){l&&l.p&&(!e||t&132)&&O(l,n,i,i[7],e?H(n,i[7],t,Re):G(i[7]),te)},i(i){e||(m(l,i),e=!0)},o(i){d(l,i),e=!1},d(i){l&&l.d(i)}}}function Fe(s){let e,n,l,i;const t=[ze,Ue],r=[];function a(o,f){return o[1]?0:1}return e=a(s),n=r[e]=t[e](s),{c(){n.c(),l=X()},l(o){n.l(o),l=X()},m(o,f){r[e].m(o,f),S(o,l,f),i=!0},p(o,[f]){let u=e;e=a(o),e===u?r[e].p(o,f):(I(),d(r[u],1,1,()=>{r[u]=null}),T(),n=r[e],n?n.p(o,f):(n=r[e]=t[e](o),n.c()),m(n,1),n.m(l.parentNode,l))},i(o){i||(m(n),i=!0)},o(o){d(n),i=!1},d(o){o&&w(l),r[e].d(o)}}}function Je(s,e,n){let l;const i=["asChild","id","el"];let t=A(e,i),r,{$$slots:a={},$$scope:o}=e,{asChild:f=!1}=e,{id:u=void 0}=e,{el:c=void 0}=e;const{elements:{description:v},ids:j,getAttrs:_}=Be();J(s,v,p=>n(6,r=p));const C=_("description");function V(p){K[p?"unshift":"push"](()=>{c=p,n(0,c)})}return s.$$set=p=>{e=E(E({},e),fe(p)),n(4,t=A(e,i)),"asChild"in p&&n(1,f=p.asChild),"id"in p&&n(5,u=p.id),"el"in p&&n(0,c=p.el),"$$scope"in p&&n(7,o=p.$$scope)},s.$$.update=()=>{s.$$.dirty&32&&u&&j.description.set(u),s.$$.dirty&64&&n(2,l=r),s.$$.dirty&4&&Object.assign(l,C)},[c,f,l,v,t,u,r,o,a,V]}let Ke=class extends U{constructor(e){super(),z(this,e,Je,Fe,R,{asChild:1,id:5,el:0})}};function Le(s){let e;const n=s[2].default,l=L(n,s,s[3],null);return{c(){l&&l.c()},l(i){l&&l.l(i)},m(i,t){l&&l.m(i,t),e=!0},p(i,t){l&&l.p&&(!e||t&8)&&O(l,n,i,i[3],e?H(n,i[3],t,null):G(i[3]),null)},i(i){e||(m(l,i),e=!0)},o(i){d(l,i),e=!1},d(i){l&&l.d(i)}}}function Oe(s){let e,n;const l=[{class:P("text-muted-foreground text-sm",s[0])},s[1]];let i={$$slots:{default:[Le]},$$scope:{ctx:s}};for(let t=0;t<l.length;t+=1)i=E(i,l[t]);return e=new Ke({props:i}),{c(){h(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,r){k(e,t,r),n=!0},p(t,[r]){const a=r&3?ge(l,[r&1&&{class:P("text-muted-foreground text-sm",t[0])},r&2&&Se(t[1])]):{};r&8&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}function Ge(s,e,n){const l=["class"];let i=A(e,l),{$$slots:t={},$$scope:r}=e,{class:a=void 0}=e;return s.$$set=o=>{e=E(E({},e),fe(o)),n(1,i=A(e,l)),"class"in o&&n(0,a=o.class),"$$scope"in o&&n(3,r=o.$$scope)},[a,i,t,r]}class dt extends U{constructor(e){super(),z(this,e,Ge,Oe,R,{class:0})}}function le(s,e,n){const l=s.slice();return l[16]=e[n],l}function He(s){let e,n;return e=new W({props:{skill:x(s[0]),variant:s[1],placeholder:s[2],compact:s[3]}}),{c(){h(e.$$.fragment)},l(l){$(e.$$.fragment,l)},m(l,i){k(e,l,i),n=!0},p(l,i){const t={};i&1&&(t.skill=x(l[0])),i&2&&(t.variant=l[1]),i&4&&(t.placeholder=l[2]),i&8&&(t.compact=l[3]),e.$set(t)},i(l){n||(m(e.$$.fragment,l),n=!0)},o(l){d(e.$$.fragment,l),n=!1},d(l){b(e,l)}}}function Me(s){let e,n;return e=new je({props:{builders:[s[19]],variant:"ghost",role:"combobox","aria-expanded":s[6],class:"w-fit h-fit !p-0 rounded-full overflow-visible",$$slots:{default:[He]},$$scope:{ctx:s}}}),{c(){h(e.$$.fragment)},l(l){$(e.$$.fragment,l)},m(l,i){k(e,l,i),n=!0},p(l,i){const t={};i&524288&&(t.builders=[l[19]]),i&64&&(t["aria-expanded"]=l[6]),i&1048591&&(t.$$scope={dirty:i,ctx:l}),e.$set(t)},i(l){n||(m(e.$$.fragment,l),n=!0)},o(l){d(e.$$.fragment,l),n=!1},d(l){b(e,l)}}}function Qe(s){let e;return{c(){e=M("No skills found")},l(n){e=Q(n,"No skills found")},m(n,l){S(n,e,l)},d(n){n&&w(e)}}}function We(s){let e,n,l=y(s[16].name)+"",i,t,r,a;return e=new W({props:{skill:s[16],compact:!0}}),r=new pe({props:{class:P("ml-auto h-6 w-6",s[0]!==s[16].uuid&&"text-transparent")}}),{c(){h(e.$$.fragment),n=N(),i=M(l),t=N(),h(r.$$.fragment)},l(o){$(e.$$.fragment,o),n=B(o),i=Q(o,l),t=B(o),$(r.$$.fragment,o)},m(o,f){k(e,o,f),S(o,n,f),S(o,i,f),S(o,t,f),k(r,o,f),a=!0},p(o,f){const u={};f&128&&(u.skill=o[16]),e.$set(u),(!a||f&128)&&l!==(l=y(o[16].name)+"")&&Ce(i,l);const c={};f&129&&(c.class=P("ml-auto h-6 w-6",o[0]!==o[16].uuid&&"text-transparent")),r.$set(c)},i(o){a||(m(e.$$.fragment,o),m(r.$$.fragment,o),a=!0)},o(o){d(e.$$.fragment,o),d(r.$$.fragment,o),a=!1},d(o){o&&(w(n),w(i),w(t)),b(e,o),b(r,o)}}}function ne(s){let e,n;function l(){return s[11](s[16],s[15])}return e=new he({props:{value:s[16].name+";"+s[16].uuid,onSelect:l,class:"flex flex-row items-center justify-start gap-2",$$slots:{default:[We]},$$scope:{ctx:s}}}),{c(){h(e.$$.fragment)},l(i){$(e.$$.fragment,i)},m(i,t){k(e,i,t),n=!0},p(i,t){s=i;const r={};t&128&&(r.value=s[16].name+";"+s[16].uuid),t&32929&&(r.onSelect=l),t&1048705&&(r.$$scope={dirty:t,ctx:s}),e.$set(r)},i(i){n||(m(e.$$.fragment,i),n=!0)},o(i){d(e.$$.fragment,i),n=!1},d(i){b(e,i)}}}function Xe(s){let e,n,l,i;return e=new W({props:{skill:void 0,popoverEnabled:!1}}),l=new pe({props:{class:P("ml-auto h-6 w-6",s[0]!==void 0&&"text-transparent")}}),{c(){h(e.$$.fragment),n=M(`
          Unassigned
          `),h(l.$$.fragment)},l(t){$(e.$$.fragment,t),n=Q(t,`
          Unassigned
          `),$(l.$$.fragment,t)},m(t,r){k(e,t,r),S(t,n,r),k(l,t,r),i=!0},p(t,r){const a={};r&1&&(a.class=P("ml-auto h-6 w-6",t[0]!==void 0&&"text-transparent")),l.$set(a)},i(t){i||(m(e.$$.fragment,t),m(l.$$.fragment,t),i=!0)},o(t){d(e.$$.fragment,t),d(l.$$.fragment,t),i=!1},d(t){t&&w(n),b(e,t),b(l,t)}}}function Ye(s){let e,n,l,i=q(s[7]),t=[];for(let o=0;o<i.length;o+=1)t[o]=ne(le(s,i,o));const r=o=>d(t[o],1,1,()=>{t[o]=null});function a(){return s[12](s[15])}return n=new he({props:{value:"unassigned",onSelect:a,class:"flex flex-row items-center justify-start gap-2",$$slots:{default:[Xe]},$$scope:{ctx:s}}}),{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=N(),h(n.$$.fragment)},l(o){for(let f=0;f<t.length;f+=1)t[f].l(o);e=B(o),$(n.$$.fragment,o)},m(o,f){for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(o,f);S(o,e,f),k(n,o,f),l=!0},p(o,f){if(s=o,f&33185){i=q(s[7]);let c;for(c=0;c<i.length;c+=1){const v=le(s,i,c);t[c]?(t[c].p(v,f),m(t[c],1)):(t[c]=ne(v),t[c].c(),m(t[c],1),t[c].m(e.parentNode,e))}for(I(),c=i.length;c<t.length;c+=1)r(c);T()}const u={};f&32801&&(u.onSelect=a),f&1048577&&(u.$$scope={dirty:f,ctx:s}),n.$set(u)},i(o){if(!l){for(let f=0;f<i.length;f+=1)m(t[f]);m(n.$$.fragment,o),l=!0}},o(o){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)d(t[f]);d(n.$$.fragment,o),l=!1},d(o){o&&w(e),_e(t,o),b(n,o)}}}function Ze(s){let e,n,l,i,t,r;return e=new Ee({props:{placeholder:"Search"}}),l=new Pe({props:{$$slots:{default:[Qe]},$$scope:{ctx:s}}}),t=new Ve({props:{class:"max-h-[250px] overflow-y-scroll",$$slots:{default:[Ye]},$$scope:{ctx:s}}}),{c(){h(e.$$.fragment),n=N(),h(l.$$.fragment),i=N(),h(t.$$.fragment)},l(a){$(e.$$.fragment,a),n=B(a),$(l.$$.fragment,a),i=B(a),$(t.$$.fragment,a)},m(a,o){k(e,a,o),S(a,n,o),k(l,a,o),S(a,i,o),k(t,a,o),r=!0},p(a,o){const f={};o&1048576&&(f.$$scope={dirty:o,ctx:a}),l.$set(f);const u={};o&1081505&&(u.$$scope={dirty:o,ctx:a}),t.$set(u)},i(a){r||(m(e.$$.fragment,a),m(l.$$.fragment,a),m(t.$$.fragment,a),r=!0)},o(a){d(e.$$.fragment,a),d(l.$$.fragment,a),d(t.$$.fragment,a),r=!1},d(a){a&&(w(n),w(i)),b(e,a),b(l,a),b(t,a)}}}function ye(s){let e,n;return e=new De({props:{$$slots:{default:[Ze]},$$scope:{ctx:s}}}),{c(){h(e.$$.fragment)},l(l){$(e.$$.fragment,l)},m(l,i){k(e,l,i),n=!0},p(l,i){const t={};i&1081505&&(t.$$scope={dirty:i,ctx:l}),e.$set(t)},i(l){n||(m(e.$$.fragment,l),n=!0)},o(l){d(e.$$.fragment,l),n=!1},d(l){b(e,l)}}}function xe(s){let e,n,l,i;return e=new Ie({props:{asChild:!0,class:s[4],$$slots:{default:[Me,({builder:t})=>({19:t}),({builder:t})=>t?524288:0]},$$scope:{ctx:s}}}),l=new Te({props:{class:"w-[200px] p-0",$$slots:{default:[ye]},$$scope:{ctx:s}}}),{c(){h(e.$$.fragment),n=N(),h(l.$$.fragment)},l(t){$(e.$$.fragment,t),n=B(t),$(l.$$.fragment,t)},m(t,r){k(e,t,r),S(t,n,r),k(l,t,r),i=!0},p(t,r){const a={};r&16&&(a.class=t[4]),r&1572943&&(a.$$scope={dirty:r,ctx:t}),e.$set(a);const o={};r&1081505&&(o.$$scope={dirty:r,ctx:t}),l.$set(o)},i(t){i||(m(e.$$.fragment,t),m(l.$$.fragment,t),i=!0)},o(t){d(e.$$.fragment,t),d(l.$$.fragment,t),i=!1},d(t){t&&w(n),b(e,t),b(l,t)}}}function et(s){let e,n,l;function i(r){s[13](r)}let t={$$slots:{default:[xe,({ids:r})=>({15:r}),({ids:r})=>r?32768:0]},$$scope:{ctx:s}};return s[6]!==void 0&&(t.open=s[6]),e=new Ae({props:t}),K.push(()=>de(e,"open",i)),{c(){h(e.$$.fragment)},l(r){$(e.$$.fragment,r)},m(r,a){k(e,r,a),l=!0},p(r,[a]){const o={};a&1081599&&(o.$$scope={dirty:a,ctx:r}),!n&&a&64&&(n=!0,o.open=r[6],me(()=>n=!1)),e.$set(o)},i(r){l||(m(e.$$.fragment,r),l=!0)},o(r){d(e.$$.fragment,r),l=!1},d(r){b(e,r)}}}function tt(s,e,n){let l,i;J(s,$e,g=>n(14,i=g));let{skill_uuid:t=void 0}=e,{options:r=i}=e,{variant:a=F.default}=e,{placeholder:o="Choose a skill"}=e,{compact:f=!0}=e,u=!1,{class:c=""}=e,{filter:v=()=>!0}=e,{onChange:j=(g,D)=>D}=e;function _(g){n(6,u=!1),ve().then(()=>{var D;(D=document.getElementById(g))==null||D.focus()})}const C=(g,D)=>{n(0,t=j(t,g.uuid)),_(D.trigger)},V=g=>{n(0,t=j(t,void 0)),_(g.trigger)};function p(g){u=g,n(6,u)}return s.$$set=g=>{"skill_uuid"in g&&n(0,t=g.skill_uuid),"options"in g&&n(9,r=g.options),"variant"in g&&n(1,a=g.variant),"placeholder"in g&&n(2,o=g.placeholder),"compact"in g&&n(3,f=g.compact),"class"in g&&n(4,c=g.class),"filter"in g&&n(10,v=g.filter),"onChange"in g&&n(5,j=g.onChange)},s.$$.update=()=>{s.$$.dirty&1536&&n(7,l=r.filter(v))},[t,a,o,f,c,j,u,l,_,r,v,C,V,p]}class ke extends U{constructor(e){super(),z(this,e,tt,et,R,{skill_uuid:0,options:9,variant:1,placeholder:2,compact:3,class:4,filter:10,onChange:5})}}function se(s,e,n){const l=s.slice();return l[11]=e[n],l[12]=e,l[13]=n,l}function oe(s){let e,n,l;function i(...a){return s[6](s[11],...a)}function t(a){s[7](a,s[11],s[12],s[13])}let r={options:s[4],variant:s[5](s[11],s[13]),compact:s[2],filter:i};return s[11]!==void 0&&(r.skill_uuid=s[11]),e=new ke({props:r}),K.push(()=>de(e,"skill_uuid",t)),{c(){h(e.$$.fragment)},l(a){$(e.$$.fragment,a)},m(a,o){k(e,a,o),l=!0},p(a,o){s=a;const f={};o&1&&(f.variant=s[5](s[11],s[13])),o&4&&(f.compact=s[2]),o&1&&(f.filter=i),!n&&o&1&&(n=!0,f.skill_uuid=s[11],me(()=>n=!1)),e.$set(f)},i(a){l||(m(e.$$.fragment,a),l=!0)},o(a){d(e.$$.fragment,a),l=!1},d(a){b(e,a)}}}function re(s){let e,n;return e=new ke({props:{skill_uuid:void 0,options:s[4],onChange:s[8],compact:s[2],filter:s[9]}}),{c(){h(e.$$.fragment)},l(l){$(e.$$.fragment,l)},m(l,i){k(e,l,i),n=!0},p(l,i){const t={};i&1&&(t.onChange=l[8]),i&4&&(t.compact=l[2]),i&1&&(t.filter=l[9]),e.$set(t)},i(l){n||(m(e.$$.fragment,l),n=!0)},o(l){d(e.$$.fragment,l),n=!1},d(l){b(e,l)}}}function lt(s){let e,n,l,i,t=q(s[0]),r=[];for(let f=0;f<t.length;f+=1)r[f]=oe(se(s,t,f));const a=f=>d(r[f],1,1,()=>{r[f]=null});let o=s[1]===void 0&&re(s);return{c(){e=ae("div");for(let f=0;f<r.length;f+=1)r[f].c();n=N(),o&&o.c(),this.h()},l(f){e=ue(f,"DIV",{class:!0});var u=ce(e);for(let c=0;c<r.length;c+=1)r[c].l(u);n=B(u),o&&o.l(u),u.forEach(w),this.h()},h(){Z(e,"class",l="flex flex-row items-center justify-start gap-2 flex-wrap "+s[3])},m(f,u){S(f,e,u);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);we(e,n),o&&o.m(e,null),i=!0},p(f,[u]){if(u&53){t=q(f[0]);let c;for(c=0;c<t.length;c+=1){const v=se(f,t,c);r[c]?(r[c].p(v,u),m(r[c],1)):(r[c]=oe(v),r[c].c(),m(r[c],1),r[c].m(e,n))}for(I(),c=t.length;c<r.length;c+=1)a(c);T()}f[1]===void 0?o?(o.p(f,u),u&2&&m(o,1)):(o=re(f),o.c(),m(o,1),o.m(e,null)):o&&(I(),d(o,1,1,()=>{o=null}),T()),(!i||u&8&&l!==(l="flex flex-row items-center justify-start gap-2 flex-wrap "+f[3]))&&Z(e,"class",l)},i(f){if(!i){for(let u=0;u<t.length;u+=1)m(r[u]);m(o),i=!0}},o(f){r=r.filter(Boolean);for(let u=0;u<r.length;u+=1)d(r[u]);d(o),i=!1},d(f){f&&w(e),_e(r,f),o&&o.d()}}}function ie(s,e){return e===void 0?!1:s.map(n=>n).includes(e.uuid)}function nt(s,e,n){let l;J(s,$e,_=>n(10,l=_));let i=l,{skill_uuids:t=[]}=e,{n_skills:r=void 0}=e,{compact:a=!0}=e,{class:o=""}=e;function f(_,C){return r!==void 0&&C<r&&_===void 0?F.destructive:F.default}const u=(_,C)=>!ie(t,C)||C===void 0||C.uuid===_;function c(_,C,V,p){V[p]=_,n(0,t),n(1,r)}const v=(_,C)=>{n(0,t=[...t,C])},j=_=>_!==void 0&&!ie(t,_);return s.$$set=_=>{"skill_uuids"in _&&n(0,t=_.skill_uuids),"n_skills"in _&&n(1,r=_.n_skills),"compact"in _&&n(2,a=_.compact),"class"in _&&n(3,o=_.class)},s.$$.update=()=>{s.$$.dirty&3&&(r!==void 0?(n(0,t=Ne(t,r,void 0)),n(0,t=t.sort((_,C)=>_===void 0?1:C===void 0?-1:0))):n(0,t=t.filter(_=>_!==void 0)))},[t,r,a,o,i,f,u,c,v,j]}class gt extends U{constructor(e){super(),z(this,e,nt,lt,R,{skill_uuids:0,n_skills:1,compact:2,class:3})}}export{dt as D,gt as S};