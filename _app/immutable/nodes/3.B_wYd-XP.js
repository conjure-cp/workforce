import{s as me,y as ze,i as T,f as w,e as I,a as C,c as P,b as O,g as S,z as N,h as _,A as pe,t as te,d as le,j as Pe,E as Xe,H as Ye,k as ce,G as tt,l as ee}from"../chunks/scheduler.DKZNoe2D.js";import{S as _e,i as ge,g as re,b as p,e as oe,t as u,c as d,a as v,m as k,d as b,f as Ze}from"../chunks/index.lZujNGEy.js";import{R as lt,T as nt,P as st,C as rt,a as ot,b as at,c as ft,d as ye,e as xe,f as it,g as Oe}from"../chunks/people-selector-list.CKcQkzAK.js";import{e as J}from"../chunks/icon.mxWH92ct.js";import{b as et}from"../chunks/person-avatar.D-CLw-I4.js";import{S as Ne,a as ct}from"../chunks/skills-list.DJLrd3qI.js";import{b as ue,p as ut}from"../chunks/utils.BwNHKHGi.js";import{B as mt}from"../chunks/index.DEe5W82p.js";import{s as Te,e as pt}from"../chunks/stores.C5Ebs8Az.js";import{T as _t}from"../chunks/core.P4QsmCxI.js";function Ae(o,t,s){const n=o.slice();return n[4]=t[s],n}function Re(o,t,s){const n=o.slice();return n[4]=t[s],n}function gt(o){let t,s,n,a=J(o[3]),e=[];for(let l=0;l<a.length;l+=1)e[l]=Ue(Ae(o,a,l));const f=l=>p(e[l],1,1,()=>{e[l]=null});let r=o[2]&&o[0].length>o[2]&&qe(o);return{c(){t=I("div");for(let l=0;l<e.length;l+=1)e[l].c();s=C(),r&&r.c(),this.h()},l(l){t=P(l,"DIV",{class:!0});var i=O(t);for(let c=0;c<e.length;c+=1)e[c].l(i);s=S(i),r&&r.l(i),i.forEach(w),this.h()},h(){N(t,"class","flex flex-row items-center justify-start gap-2 flex-wrap")},m(l,i){T(l,t,i);for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(t,null);_(t,s),r&&r.m(t,null),n=!0},p(l,i){if(i&8){a=J(l[3]);let c;for(c=0;c<a.length;c+=1){const g=Ae(l,a,c);e[c]?(e[c].p(g,i),u(e[c],1)):(e[c]=Ue(g),e[c].c(),u(e[c],1),e[c].m(t,s))}for(re(),c=a.length;c<e.length;c+=1)f(c);oe()}l[2]&&l[0].length>l[2]?r?r.p(l,i):(r=qe(l),r.c(),r.m(t,null)):r&&(r.d(1),r=null)},i(l){if(!n){for(let i=0;i<a.length;i+=1)u(e[i]);n=!0}},o(l){e=e.filter(Boolean);for(let i=0;i<e.length;i+=1)p(e[i]);n=!1},d(l){l&&w(t),pe(e,l),r&&r.d()}}}function $t(o){let t,s,n,a=J(o[3]),e=[];for(let l=0;l<a.length;l+=1)e[l]=Fe(Re(o,a,l));const f=l=>p(e[l],1,1,()=>{e[l]=null});let r=o[2]&&o[0].length>o[2]&&Ge(o);return{c(){t=I("div");for(let l=0;l<e.length;l+=1)e[l].c();s=C(),r&&r.c(),this.h()},l(l){t=P(l,"DIV",{class:!0});var i=O(t);for(let c=0;c<e.length;c+=1)e[c].l(i);s=S(i),r&&r.l(i),i.forEach(w),this.h()},h(){N(t,"class","group flex flex-row items-center justify-start flex-wrap")},m(l,i){T(l,t,i);for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(t,null);_(t,s),r&&r.m(t,null),n=!0},p(l,i){if(i&8){a=J(l[3]);let c;for(c=0;c<a.length;c+=1){const g=Re(l,a,c);e[c]?(e[c].p(g,i),u(e[c],1)):(e[c]=Fe(g),e[c].c(),u(e[c],1),e[c].m(t,s))}for(re(),c=a.length;c<e.length;c+=1)f(c);oe()}l[2]&&l[0].length>l[2]?r?r.p(l,i):(r=Ge(l),r.c(),r.m(t,null)):r&&(r.d(1),r=null)},i(l){if(!n){for(let i=0;i<a.length;i+=1)u(e[i]);n=!0}},o(l){e=e.filter(Boolean);for(let i=0;i<e.length;i+=1)p(e[i]);n=!1},d(l){l&&w(t),pe(e,l),r&&r.d()}}}function Ue(o){let t,s;return t=new et({props:{person:o[4]}}),{c(){d(t.$$.fragment)},l(n){v(t.$$.fragment,n)},m(n,a){k(t,n,a),s=!0},p(n,a){const e={};a&8&&(e.person=n[4]),t.$set(e)},i(n){s||(u(t.$$.fragment,n),s=!0)},o(n){p(t.$$.fragment,n),s=!1},d(n){b(t,n)}}}function qe(o){let t,s,n=o[0].length-o[2]+"",a;return{c(){t=I("div"),s=te("+"),a=te(n),this.h()},l(e){t=P(e,"DIV",{class:!0});var f=O(t);s=le(f,"+"),a=le(f,n),f.forEach(w),this.h()},h(){N(t,"class","w-10 h-10 bg-accent text-accent-foreground flex items-center justify-center rounded-full")},m(e,f){T(e,t,f),_(t,s),_(t,a)},p(e,f){f&5&&n!==(n=e[0].length-e[2]+"")&&Pe(a,n)},d(e){e&&w(t)}}}function Fe(o){let t,s,n;return s=new et({props:{person:o[4],class:"absolute top-0 left-0 w-10 h-10"}}),{c(){t=I("div"),d(s.$$.fragment),this.h()},l(a){t=P(a,"DIV",{class:!0});var e=O(t);v(s.$$.fragment,e),e.forEach(w),this.h()},h(){N(t,"class","relative transition-all w-4 h-10 hover:z-20 hover:w-5 group-hover:opacity-55 hover:!opacity-100")},m(a,e){T(a,t,e),k(s,t,null),n=!0},p(a,e){const f={};e&8&&(f.person=a[4]),s.$set(f)},i(a){n||(u(s.$$.fragment,a),n=!0)},o(a){p(s.$$.fragment,a),n=!1},d(a){a&&w(t),b(s)}}}function Ge(o){let t,s,n,a=o[0].length-o[2]+"",e;return{c(){t=I("div"),s=I("div"),n=te("+"),e=te(a),this.h()},l(f){t=P(f,"DIV",{class:!0});var r=O(t);s=P(r,"DIV",{class:!0});var l=O(s);n=le(l,"+"),e=le(l,a),l.forEach(w),r.forEach(w),this.h()},h(){N(s,"class","absolute top-0 left-0 w-10 h-10 bg-accent text-accent-foreground flex items-center justify-center rounded-full"),N(t,"class","group relative w-4 h-10 hover:z-20 hover:w-5 group-hover:opacity-55 hover:!opacity-100 transition-all")},m(f,r){T(f,t,r),_(t,s),_(s,n),_(s,e)},p(f,r){r&5&&a!==(a=f[0].length-f[2]+"")&&Pe(e,a)},d(f){f&&w(t)}}}function ht(o){let t,s,n,a;const e=[$t,gt],f=[];function r(l,i){return l[1]?0:1}return t=r(o),s=f[t]=e[t](o),{c(){s.c(),n=ze()},l(l){s.l(l),n=ze()},m(l,i){f[t].m(l,i),T(l,n,i),a=!0},p(l,[i]){let c=t;t=r(l),t===c?f[t].p(l,i):(re(),p(f[c],1,1,()=>{f[c]=null}),oe(),s=f[t],s?s.p(l,i):(s=f[t]=e[t](l),s.c()),u(s,1),s.m(n.parentNode,n))},i(l){a||(u(s),a=!0)},o(l){p(s),a=!1},d(l){l&&w(n),f[t].d(l)}}}function dt(o,t,s){let n,{people:a=[]}=t,{compact:e=!1}=t,{max:f=void 0}=t;return o.$$set=r=>{"people"in r&&s(0,a=r.people),"compact"in r&&s(1,e=r.compact),"max"in r&&s(2,f=r.max)},o.$$.update=()=>{o.$$.dirty&5&&s(3,n=f?a.slice(0,f):a)},[a,e,f,n]}class ie extends _e{constructor(t){super(),ge(this,t,dt,ht,me,{people:0,compact:1,max:2})}}function Me(o,t,s){const n=o.slice();return n[16]=t[s],n}function vt(o){let t,s;return t=new Ne({props:{skill:o[0],variant:o[1],icon_variant:o[2],placeholder:o[3]}}),{c(){d(t.$$.fragment)},l(n){v(t.$$.fragment,n)},m(n,a){k(t,n,a),s=!0},p(n,a){const e={};a&1&&(e.skill=n[0]),a&2&&(e.variant=n[1]),a&4&&(e.icon_variant=n[2]),a&8&&(e.placeholder=n[3]),t.$set(e)},i(n){s||(u(t.$$.fragment,n),s=!0)},o(n){p(t.$$.fragment,n),s=!1},d(n){b(t,n)}}}function kt(o){let t,s;return t=new mt({props:{builders:[o[19]],variant:"ghost",role:"combobox","aria-expanded":o[6],class:"w-6 h-6 rounded-full overflow-visible",$$slots:{default:[vt]},$$scope:{ctx:o}}}),{c(){d(t.$$.fragment)},l(n){v(t.$$.fragment,n)},m(n,a){k(t,n,a),s=!0},p(n,a){const e={};a&524288&&(e.builders=[n[19]]),a&64&&(e["aria-expanded"]=n[6]),a&1048591&&(e.$$scope={dirty:a,ctx:n}),t.$set(e)},i(n){s||(u(t.$$.fragment,n),s=!0)},o(n){p(t.$$.fragment,n),s=!1},d(n){b(t,n)}}}function bt(o){let t;return{c(){t=te("No skills found")},l(s){t=le(s,"No skills found")},m(s,n){T(s,t,n)},d(s){s&&w(t)}}}function wt(o){let t,s,n=o[16].name+"",a,e,f,r;return t=new Ne({props:{skill:o[16]}}),f=new xe({props:{class:ue("ml-auto h-6 w-6",o[0]!==o[16]&&"text-transparent")}}),{c(){d(t.$$.fragment),s=C(),a=te(n),e=C(),d(f.$$.fragment)},l(l){v(t.$$.fragment,l),s=S(l),a=le(l,n),e=S(l),v(f.$$.fragment,l)},m(l,i){k(t,l,i),T(l,s,i),T(l,a,i),T(l,e,i),k(f,l,i),r=!0},p(l,i){const c={};i&128&&(c.skill=l[16]),t.$set(c),(!r||i&128)&&n!==(n=l[16].name+"")&&Pe(a,n);const g={};i&129&&(g.class=ue("ml-auto h-6 w-6",l[0]!==l[16]&&"text-transparent")),f.$set(g)},i(l){r||(u(t.$$.fragment,l),u(f.$$.fragment,l),r=!0)},o(l){p(t.$$.fragment,l),p(f.$$.fragment,l),r=!1},d(l){l&&(w(s),w(a),w(e)),b(t,l),b(f,l)}}}function Je(o){let t,s;function n(){return o[11](o[16],o[15])}return t=new ye({props:{value:o[16].name+";"+o[16].uuid,onSelect:n,class:"flex flex-row items-center justify-start gap-2",$$slots:{default:[wt]},$$scope:{ctx:o}}}),{c(){d(t.$$.fragment)},l(a){v(t.$$.fragment,a)},m(a,e){k(t,a,e),s=!0},p(a,e){o=a;const f={};e&128&&(f.value=o[16].name+";"+o[16].uuid),e&32929&&(f.onSelect=n),e&1048705&&(f.$$scope={dirty:e,ctx:o}),t.$set(f)},i(a){s||(u(t.$$.fragment,a),s=!0)},o(a){p(t.$$.fragment,a),s=!1},d(a){b(t,a)}}}function Ct(o){let t,s,n,a;return t=new Ne({props:{skill:void 0,popoverEnabled:!1}}),n=new xe({props:{class:ue("ml-auto h-6 w-6",o[0]!==void 0&&"text-transparent")}}),{c(){d(t.$$.fragment),s=te(`
          Unassigned
          `),d(n.$$.fragment)},l(e){v(t.$$.fragment,e),s=le(e,`
          Unassigned
          `),v(n.$$.fragment,e)},m(e,f){k(t,e,f),T(e,s,f),k(n,e,f),a=!0},p(e,f){const r={};f&1&&(r.class=ue("ml-auto h-6 w-6",e[0]!==void 0&&"text-transparent")),n.$set(r)},i(e){a||(u(t.$$.fragment,e),u(n.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),p(n.$$.fragment,e),a=!1},d(e){e&&w(s),b(t,e),b(n,e)}}}function St(o){let t,s,n,a=J(o[7]),e=[];for(let l=0;l<a.length;l+=1)e[l]=Je(Me(o,a,l));const f=l=>p(e[l],1,1,()=>{e[l]=null});function r(){return o[12](o[15])}return s=new ye({props:{value:"unassigned",onSelect:r,class:"flex flex-row items-center justify-start gap-2",$$slots:{default:[Ct]},$$scope:{ctx:o}}}),{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=C(),d(s.$$.fragment)},l(l){for(let i=0;i<e.length;i+=1)e[i].l(l);t=S(l),v(s.$$.fragment,l)},m(l,i){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(l,i);T(l,t,i),k(s,l,i),n=!0},p(l,i){if(o=l,i&33185){a=J(o[7]);let g;for(g=0;g<a.length;g+=1){const m=Me(o,a,g);e[g]?(e[g].p(m,i),u(e[g],1)):(e[g]=Je(m),e[g].c(),u(e[g],1),e[g].m(t.parentNode,t))}for(re(),g=a.length;g<e.length;g+=1)f(g);oe()}const c={};i&32801&&(c.onSelect=r),i&1048577&&(c.$$scope={dirty:i,ctx:o}),s.$set(c)},i(l){if(!n){for(let i=0;i<a.length;i+=1)u(e[i]);u(s.$$.fragment,l),n=!0}},o(l){e=e.filter(Boolean);for(let i=0;i<e.length;i+=1)p(e[i]);p(s.$$.fragment,l),n=!1},d(l){l&&w(t),pe(e,l),b(s,l)}}}function Et(o){let t,s,n,a,e,f;return t=new ot({props:{placeholder:"Search"}}),n=new at({props:{$$slots:{default:[bt]},$$scope:{ctx:o}}}),e=new ft({props:{$$slots:{default:[St]},$$scope:{ctx:o}}}),{c(){d(t.$$.fragment),s=C(),d(n.$$.fragment),a=C(),d(e.$$.fragment)},l(r){v(t.$$.fragment,r),s=S(r),v(n.$$.fragment,r),a=S(r),v(e.$$.fragment,r)},m(r,l){k(t,r,l),T(r,s,l),k(n,r,l),T(r,a,l),k(e,r,l),f=!0},p(r,l){const i={};l&1048576&&(i.$$scope={dirty:l,ctx:r}),n.$set(i);const c={};l&1081505&&(c.$$scope={dirty:l,ctx:r}),e.$set(c)},i(r){f||(u(t.$$.fragment,r),u(n.$$.fragment,r),u(e.$$.fragment,r),f=!0)},o(r){p(t.$$.fragment,r),p(n.$$.fragment,r),p(e.$$.fragment,r),f=!1},d(r){r&&(w(s),w(a)),b(t,r),b(n,r),b(e,r)}}}function It(o){let t,s;return t=new rt({props:{$$slots:{default:[Et]},$$scope:{ctx:o}}}),{c(){d(t.$$.fragment)},l(n){v(t.$$.fragment,n)},m(n,a){k(t,n,a),s=!0},p(n,a){const e={};a&1081505&&(e.$$scope={dirty:a,ctx:n}),t.$set(e)},i(n){s||(u(t.$$.fragment,n),s=!0)},o(n){p(t.$$.fragment,n),s=!1},d(n){b(t,n)}}}function Pt(o){let t,s,n,a;return t=new nt({props:{asChild:!0,class:o[4],$$slots:{default:[kt,({builder:e})=>({19:e}),({builder:e})=>e?524288:0]},$$scope:{ctx:o}}}),n=new st({props:{class:"w-[150] p-0",$$slots:{default:[It]},$$scope:{ctx:o}}}),{c(){d(t.$$.fragment),s=C(),d(n.$$.fragment)},l(e){v(t.$$.fragment,e),s=S(e),v(n.$$.fragment,e)},m(e,f){k(t,e,f),T(e,s,f),k(n,e,f),a=!0},p(e,f){const r={};f&16&&(r.class=e[4]),f&1572943&&(r.$$scope={dirty:f,ctx:e}),t.$set(r);const l={};f&1081505&&(l.$$scope={dirty:f,ctx:e}),n.$set(l)},i(e){a||(u(t.$$.fragment,e),u(n.$$.fragment,e),a=!0)},o(e){p(t.$$.fragment,e),p(n.$$.fragment,e),a=!1},d(e){e&&w(s),b(t,e),b(n,e)}}}function Nt(o){let t,s,n;function a(f){o[13](f)}let e={$$slots:{default:[Pt,({ids:f})=>({15:f}),({ids:f})=>f?32768:0]},$$scope:{ctx:o}};return o[6]!==void 0&&(e.open=o[6]),t=new lt({props:e}),Xe.push(()=>Ze(t,"open",a)),{c(){d(t.$$.fragment)},l(f){v(t.$$.fragment,f)},m(f,r){k(t,f,r),n=!0},p(f,[r]){const l={};r&1081599&&(l.$$scope={dirty:r,ctx:f}),!s&&r&64&&(s=!0,l.open=f[6],Ye(()=>s=!1)),t.$set(l)},i(f){n||(u(t.$$.fragment,f),n=!0)},o(f){p(t.$$.fragment,f),n=!1},d(f){b(t,f)}}}function Tt(o,t,s){let n,a;ce(o,Te,$=>s(14,a=$));let e=!1,{skill:f=void 0}=t,{options:r=a}=t,{variant:l="default"}=t,{icon_variant:i="default"}=t,{placeholder:c="Choose a skill"}=t,{class:g=""}=t,{filter:m=()=>!0}=t,{onChange:E=($,R)=>R}=t;function q($){s(6,e=!1),tt().then(()=>{var R;(R=document.getElementById($))==null||R.focus()})}const K=($,R)=>{s(0,f=E(f,$)),q(R.trigger)},A=$=>{s(0,f=E(f,void 0)),q($.trigger)};function ae($){e=$,s(6,e)}return o.$$set=$=>{"skill"in $&&s(0,f=$.skill),"options"in $&&s(9,r=$.options),"variant"in $&&s(1,l=$.variant),"icon_variant"in $&&s(2,i=$.icon_variant),"placeholder"in $&&s(3,c=$.placeholder),"class"in $&&s(4,g=$.class),"filter"in $&&s(10,m=$.filter),"onChange"in $&&s(5,E=$.onChange)},o.$$.update=()=>{o.$$.dirty&1536&&s(7,n=r.filter(m))},[f,l,i,c,g,E,e,n,q,r,m,K,A,ae]}class Ve extends _e{constructor(t){super(),ge(this,t,Tt,Nt,me,{skill:0,options:9,variant:1,icon_variant:2,placeholder:3,class:4,filter:10,onChange:5})}}function Ke(o,t,s){const n=o.slice();return n[9]=t[s],n[10]=t,n[11]=s,n}function Le(o){let t,s,n;function a(...r){return o[4](o[9],...r)}function e(r){o[5](r,o[9],o[10],o[11])}let f={options:o[2],variant:o[3](o[9],o[11]),filter:a};return o[9]!==void 0&&(f.skill=o[9]),t=new Ve({props:f}),Xe.push(()=>Ze(t,"skill",e)),{c(){d(t.$$.fragment)},l(r){v(t.$$.fragment,r)},m(r,l){k(t,r,l),n=!0},p(r,l){o=r;const i={};l&1&&(i.variant=o[3](o[9],o[11])),l&1&&(i.filter=a),!s&&l&1&&(s=!0,i.skill=o[9],Ye(()=>s=!1)),t.$set(i)},i(r){n||(u(t.$$.fragment,r),n=!0)},o(r){p(t.$$.fragment,r),n=!1},d(r){b(t,r)}}}function Qe(o){let t,s;return t=new Ve({props:{skill:void 0,options:o[2],onChange:o[6],icon_variant:"plus",filter:o[7]}}),{c(){d(t.$$.fragment)},l(n){v(t.$$.fragment,n)},m(n,a){k(t,n,a),s=!0},p(n,a){const e={};a&1&&(e.onChange=n[6]),a&1&&(e.filter=n[7]),t.$set(e)},i(n){s||(u(t.$$.fragment,n),s=!0)},o(n){p(t.$$.fragment,n),s=!1},d(n){b(t,n)}}}function Vt(o){let t,s,n,a=J(o[0]),e=[];for(let l=0;l<a.length;l+=1)e[l]=Le(Ke(o,a,l));const f=l=>p(e[l],1,1,()=>{e[l]=null});let r=o[1]===void 0&&Qe(o);return{c(){t=I("div");for(let l=0;l<e.length;l+=1)e[l].c();s=C(),r&&r.c(),this.h()},l(l){t=P(l,"DIV",{class:!0});var i=O(t);for(let c=0;c<e.length;c+=1)e[c].l(i);s=S(i),r&&r.l(i),i.forEach(w),this.h()},h(){N(t,"class","flex flex-row items-center justify-start gap-2 flex-wrap")},m(l,i){T(l,t,i);for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(t,null);_(t,s),r&&r.m(t,null),n=!0},p(l,[i]){if(i&13){a=J(l[0]);let c;for(c=0;c<a.length;c+=1){const g=Ke(l,a,c);e[c]?(e[c].p(g,i),u(e[c],1)):(e[c]=Le(g),e[c].c(),u(e[c],1),e[c].m(t,s))}for(re(),c=a.length;c<e.length;c+=1)f(c);oe()}l[1]===void 0?r?(r.p(l,i),i&2&&u(r,1)):(r=Qe(l),r.c(),u(r,1),r.m(t,null)):r&&(re(),p(r,1,1,()=>{r=null}),oe())},i(l){if(!n){for(let i=0;i<a.length;i+=1)u(e[i]);u(r),n=!0}},o(l){e=e.filter(Boolean);for(let i=0;i<e.length;i+=1)p(e[i]);p(r),n=!1},d(l){l&&w(t),pe(e,l),r&&r.d()}}}function jt(o,t,s){let n;ce(o,Te,m=>s(8,n=m));let a=n,{skills:e=[]}=t,{n_skills:f=void 0}=t;function r(m,E){return f!==void 0&&E<f&&m===void 0?"destructive":"default"}const l=(m,E)=>!e.includes(E)||E===void 0||E===m;function i(m,E,q,K){q[K]=m,s(0,e),s(1,f)}const c=(m,E)=>{s(0,e=[...e,E])},g=m=>!e.includes(m)&&m!==void 0;return o.$$set=m=>{"skills"in m&&s(0,e=m.skills),"n_skills"in m&&s(1,f=m.n_skills)},o.$$.update=()=>{o.$$.dirty&3&&(f!==void 0?(s(0,e=ut(e,f,void 0)),s(0,e=e.sort((m,E)=>m===void 0?1:E===void 0?-1:0))):s(0,e=e.filter(m=>m!==void 0)),console.log(e))},[e,f,a,r,l,i,c,g]}class We extends _e{constructor(t){super(),ge(this,t,jt,Vt,me,{skills:0,n_skills:1})}}function Dt(o){let t,s,n,a="Components playground",e,f,r,l="Combobox",i,c,g,m,E,q="People list",K,A,ae,$,R,F,$e,G,he,V,L,je="People selector list",de,ne,De="People selector list (compact)",ve,Q,ke,se,Be="People selector list (full)",be,W,we,j,X,He="Skills",Ce,M,Se,Y,Ee,Z,Ie,y,fe;return c=new it({props:{options:o[2],placeholder:"Select schedule...",icon:{icon:"mdi:calendar"}}}),A=new ie({props:{people:o[0],compact:!0}}),$=new ie({props:{people:o[0],compact:!0,max:3}}),F=new ie({props:{people:o[0],compact:!1}}),G=new ie({props:{people:o[0],compact:!1,max:3}}),Q=new Oe({props:{people:o[3].people,min_people:o[3].min_people,max_people:o[3].max_people,compact:!0}}),W=new Oe({props:{people:o[3].people,min_people:o[3].min_people,max_people:o[3].max_people}}),M=new ct({props:{skills:o[1]}}),Y=new Ve({}),Z=new We({}),y=new We({props:{n_skills:3}}),{c(){t=I("div"),s=I("main"),n=I("h1"),n.textContent=a,e=C(),f=I("section"),r=I("h2"),r.textContent=l,i=C(),d(c.$$.fragment),g=C(),m=I("section"),E=I("h2"),E.textContent=q,K=C(),d(A.$$.fragment),ae=C(),d($.$$.fragment),R=C(),d(F.$$.fragment),$e=C(),d(G.$$.fragment),he=C(),V=I("section"),L=I("h2"),L.textContent=je,de=C(),ne=I("p"),ne.textContent=De,ve=C(),d(Q.$$.fragment),ke=C(),se=I("p"),se.textContent=Be,be=C(),d(W.$$.fragment),we=C(),j=I("section"),X=I("h2"),X.textContent=He,Ce=C(),d(M.$$.fragment),Se=C(),d(Y.$$.fragment),Ee=C(),d(Z.$$.fragment),Ie=C(),d(y.$$.fragment),this.h()},l(h){t=P(h,"DIV",{class:!0});var U=O(t);s=P(U,"MAIN",{class:!0});var D=O(s);n=P(D,"H1",{class:!0,"data-svelte-h":!0}),ee(n)!=="svelte-ug3pcp"&&(n.textContent=a),e=S(D),f=P(D,"SECTION",{class:!0});var x=O(f);r=P(x,"H2",{class:!0,"data-svelte-h":!0}),ee(r)!=="svelte-s0mib4"&&(r.textContent=l),i=S(x),v(c.$$.fragment,x),x.forEach(w),g=S(D),m=P(D,"SECTION",{class:!0});var B=O(m);E=P(B,"H2",{class:!0,"data-svelte-h":!0}),ee(E)!=="svelte-1li7cg"&&(E.textContent=q),K=S(B),v(A.$$.fragment,B),ae=S(B),v($.$$.fragment,B),R=S(B),v(F.$$.fragment,B),$e=S(B),v(G.$$.fragment,B),B.forEach(w),he=S(D),V=P(D,"SECTION",{class:!0});var H=O(V);L=P(H,"H2",{class:!0,"data-svelte-h":!0}),ee(L)!=="svelte-13ufpdz"&&(L.textContent=je),de=S(H),ne=P(H,"P",{"data-svelte-h":!0}),ee(ne)!=="svelte-muhkvk"&&(ne.textContent=De),ve=S(H),v(Q.$$.fragment,H),ke=S(H),se=P(H,"P",{"data-svelte-h":!0}),ee(se)!=="svelte-1p0girg"&&(se.textContent=Be),be=S(H),v(W.$$.fragment,H),H.forEach(w),we=S(D),j=P(D,"SECTION",{class:!0});var z=O(j);X=P(z,"H2",{class:!0,"data-svelte-h":!0}),ee(X)!=="svelte-a0rnnd"&&(X.textContent=He),Ce=S(z),v(M.$$.fragment,z),Se=S(z),v(Y.$$.fragment,z),Ee=S(z),v(Z.$$.fragment,z),Ie=S(z),v(y.$$.fragment,z),z.forEach(w),D.forEach(w),U.forEach(w),this.h()},h(){N(n,"class","text-2xl font-semibold"),N(r,"class","text-xl"),N(f,"class","w-full flex flex-col gap-3"),N(E,"class","text-xl"),N(m,"class","w-full flex flex-col gap-3"),N(L,"class","text-xl"),N(V,"class","w-full flex flex-col gap-3"),N(X,"class","text-xl"),N(j,"class","w-full flex flex-col gap-3"),N(s,"class","w-full flex flex-col gap-6 pl-6 pt-4"),N(t,"class","w-full bg-gray-50")},m(h,U){T(h,t,U),_(t,s),_(s,n),_(s,e),_(s,f),_(f,r),_(f,i),k(c,f,null),_(s,g),_(s,m),_(m,E),_(m,K),k(A,m,null),_(m,ae),k($,m,null),_(m,R),k(F,m,null),_(m,$e),k(G,m,null),_(s,he),_(s,V),_(V,L),_(V,de),_(V,ne),_(V,ve),k(Q,V,null),_(V,ke),_(V,se),_(V,be),k(W,V,null),_(s,we),_(s,j),_(j,X),_(j,Ce),k(M,j,null),_(j,Se),k(Y,j,null),_(j,Ee),k(Z,j,null),_(j,Ie),k(y,j,null),fe=!0},p(h,[U]){const D={};U&1&&(D.people=h[0]),A.$set(D);const x={};U&1&&(x.people=h[0]),$.$set(x);const B={};U&1&&(B.people=h[0]),F.$set(B);const H={};U&1&&(H.people=h[0]),G.$set(H);const z={};U&2&&(z.skills=h[1]),M.$set(z)},i(h){fe||(u(c.$$.fragment,h),u(A.$$.fragment,h),u($.$$.fragment,h),u(F.$$.fragment,h),u(G.$$.fragment,h),u(Q.$$.fragment,h),u(W.$$.fragment,h),u(M.$$.fragment,h),u(Y.$$.fragment,h),u(Z.$$.fragment,h),u(y.$$.fragment,h),fe=!0)},o(h){p(c.$$.fragment,h),p(A.$$.fragment,h),p($.$$.fragment,h),p(F.$$.fragment,h),p(G.$$.fragment,h),p(Q.$$.fragment,h),p(W.$$.fragment,h),p(M.$$.fragment,h),p(Y.$$.fragment,h),p(Z.$$.fragment,h),p(y.$$.fragment,h),fe=!1},d(h){h&&w(t),b(c),b(A),b($),b(F),b(G),b(Q),b(W),b(M),b(Y),b(Z),b(y)}}}function Bt(o,t,s){let n,a;ce(o,pt,r=>s(0,n=r)),ce(o,Te,r=>s(1,a=r));const e=[{label:"Schedule 1",value:"schedule1"},{label:"Schedule 2",value:"schedule2"}],f=new _t("Task 1","Hello world!",{icon:"mdi:calendar"},2,4,[],[]);return[n,a,e,f]}class Jt extends _e{constructor(t){super(),ge(this,t,Bt,Dt,me,{})}}export{Jt as component};
