import{s as ue,w as y,e as Y,a as T,c as Z,b as x,g as j,f as D,m as U,i as q,h as X,x as M,y as ee,q as ce,u as de,r as me,v as _e,n as pe,z as Ce}from"../chunks/scheduler.B1uOEMOA.js";import{S as ge,i as he,e as S,c as k,a as I,m as F,t as _,g as te,b as p,f as se,d as V}from"../chunks/index.qrTrU_Jd.js";import{D as ke,E as Ie,a as Fe,c as ae,M as Ve,T as ve,S as De,b as Ee,P as Ke,d as Pe}from"../chunks/delete-dialog.DlSoz2iu.js";import{B as Le,s as be,L as ne}from"../chunks/index.BG07Jm5P.js";import{w as ye}from"../chunks/index.RRcRCkg8.js";import{P as Me,C as Se}from"../chunks/column-hide-selector.BPowzNr8.js";import{m as le}from"../chunks/index.CqzRrt0j.js";const Ae=s=>({}),oe=s=>({}),ze=s=>({}),ie=s=>({});function re(s){let e,a;return e=new Ve({props:{locations:s[13],class:"aspect-auto "+s[3],onMarkerClick:s[16]}}),{c(){k(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){F(e,t,l),a=!0},p(t,l){const i={};l&8192&&(i.locations=t[13]),l&8&&(i.class="aspect-auto "+t[3]),e.$set(i)},i(t){a||(_(e.$$.fragment,t),a=!0)},o(t){p(e.$$.fragment,t),a=!1},d(t){V(e,t)}}}function fe(s){let e,a;return e=new ve({props:{sticky:!0,$$slots:{end:[qe],middle:[je],start:[Te]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){F(e,t,l),a=!0},p(t,l){const i={};l&268435872&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){a||(_(e.$$.fragment,t),a=!0)},o(t){p(e.$$.fragment,t),a=!1},d(t){V(e,t)}}}function Ne(s){let e,a;return e=new Pe({}),{c(){k(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){F(e,t,l),a=!0},i(t){a||(_(e.$$.fragment,t),a=!0)},o(t){p(e.$$.fragment,t),a=!1},d(t){V(e,t)}}}function Te(s){let e,a,t;e=new Le({props:{class:"text-muted-foreground hover:text-accent-foreground",size:"icon-xl",variant:"ghost",$$slots:{default:[Ne]},$$scope:{ctx:s}}}),e.$on("click",s[17]);const l=s[19].start,i=ce(l,s,s[28],oe);return{c(){k(e.$$.fragment),a=T(),i&&i.c()},l(f){I(e.$$.fragment,f),a=j(f),i&&i.l(f)},m(f,m){F(e,f,m),q(f,a,m),i&&i.m(f,m),t=!0},p(f,m){const r={};m&268435456&&(r.$$scope={dirty:m,ctx:f}),e.$set(r),i&&i.p&&(!t||m&268435456)&&de(i,l,f,f[28],t?_e(l,f[28],m,Ae):me(f[28]),oe)},i(f){t||(_(e.$$.fragment,f),_(i,f),t=!0)},o(f){p(e.$$.fragment,f),p(i,f),t=!1},d(f){f&&D(a),V(e,f),i&&i.d(f)}}}function je(s){let e;const a=s[19].middle,t=ce(a,s,s[28],ie);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,i){t&&t.m(l,i),e=!0},p(l,i){t&&t.p&&(!e||i&268435456)&&de(t,a,l,l[28],e?_e(a,l[28],i,ze):me(l[28]),ie)},i(l){e||(_(t,l),e=!0)},o(l){p(t,l),e=!1},d(l){t&&t.d(l)}}}function qe(s){let e,a,t,l,i;function f(r){s[20](r)}let m={flatColumns:s[8]};return s[7]!==void 0&&(m.hideForId=s[7]),e=new Se({props:m}),y.push(()=>S(e,"hideForId",f)),l=new De({props:{onInput:s[21]}}),{c(){k(e.$$.fragment),t=T(),k(l.$$.fragment)},l(r){I(e.$$.fragment,r),t=j(r),I(l.$$.fragment,r)},m(r,h){F(e,r,h),q(r,t,h),F(l,r,h),i=!0},p(r,h){const b={};h&256&&(b.flatColumns=r[8]),!a&&h&128&&(a=!0,b.hideForId=r[7],M(()=>a=!1)),e.$set(b);const v={};h&32&&(v.onInput=r[21]),l.$set(v)},i(r){i||(_(e.$$.fragment,r),_(l.$$.fragment,r),i=!0)},o(r){p(e.$$.fragment,r),p(l.$$.fragment,r),i=!1},d(r){r&&D(t),V(e,r),V(l,r)}}}function Be(s){let e,a,t,l,i,f,m,r,h,b,v,$,K,C,w,A,E,c=s[1]&&re(s),d=s[1]&&fe(s);function P(o){s[22](o)}function B(o){s[23](o)}function G(o){s[24](o)}function H(o){s[25](o)}let L={class:"w-full",columnInitializers:s[14],data:s[0],actions:s[4],header:s[1],defaultAction:s[15]};s[5]!==void 0&&(L.filterValue=s[5]),s[8]!==void 0&&(L.flatColumns=s[8]),s[7]!==void 0&&(L.hideForId=s[7]),s[6]!==void 0&&(L.sortKeys=s[6]),i=new ke({props:L}),y.push(()=>S(i,"filterValue",P)),y.push(()=>S(i,"flatColumns",B)),y.push(()=>S(i,"hideForId",G)),y.push(()=>S(i,"sortKeys",H));function O(o){s[26](o)}let J={selected:s[9],title:s[12]};s[11]!==void 0&&(J.open=s[11]),$=new Ie({props:J}),y.push(()=>S($,"open",O));function W(o){s[27](o)}let Q={selected:s[9]};return s[10]!==void 0&&(Q.open=s[10]),w=new Fe({props:Q}),y.push(()=>S(w,"open",W)),{c(){e=Y("div"),c&&c.c(),a=T(),t=Y("div"),d&&d.c(),l=T(),k(i.$$.fragment),v=T(),k($.$$.fragment),C=T(),k(w.$$.fragment),this.h()},l(o){e=Z(o,"DIV",{class:!0});var u=x(e);c&&c.l(u),a=j(u),t=Z(u,"DIV",{class:!0});var g=x(t);d&&d.l(g),l=j(g),I(i.$$.fragment,g),g.forEach(D),u.forEach(D),v=j(o),I($.$$.fragment,o),C=j(o),I(w.$$.fragment,o),this.h()},h(){U(t,"class","mt-4 flex h-max w-full flex-col items-start justify-start overflow-y-scroll"),U(e,"class",b="flex flex-col items-start justify-start "+s[2])},m(o,u){q(o,e,u),c&&c.m(e,null),X(e,a),X(e,t),d&&d.m(t,null),X(t,l),F(i,t,null),q(o,v,u),F($,o,u),q(o,C,u),F(w,o,u),E=!0},p(o,[u]){o[1]?c?(c.p(o,u),u&2&&_(c,1)):(c=re(o),c.c(),_(c,1),c.m(e,a)):c&&(te(),p(c,1,1,()=>{c=null}),se()),o[1]?d?(d.p(o,u),u&2&&_(d,1)):(d=fe(o),d.c(),_(d,1),d.m(t,l)):d&&(te(),p(d,1,1,()=>{d=null}),se());const g={};u&1&&(g.data=o[0]),u&16&&(g.actions=o[4]),u&2&&(g.header=o[1]),!f&&u&32&&(f=!0,g.filterValue=o[5],M(()=>f=!1)),!m&&u&256&&(m=!0,g.flatColumns=o[8],M(()=>m=!1)),!r&&u&128&&(r=!0,g.hideForId=o[7],M(()=>r=!1)),!h&&u&64&&(h=!0,g.sortKeys=o[6],M(()=>h=!1)),i.$set(g),(!E||u&4&&b!==(b="flex flex-col items-start justify-start "+o[2]))&&U(e,"class",b);const z={};u&512&&(z.selected=o[9]),u&4096&&(z.title=o[12]),!K&&u&2048&&(K=!0,z.open=o[11],M(()=>K=!1)),$.$set(z);const R={};u&512&&(R.selected=o[9]),!A&&u&1024&&(A=!0,R.open=o[10],M(()=>A=!1)),w.$set(R)},i(o){E||(_(c),_(d),_(i.$$.fragment,o),_($.$$.fragment,o),_(w.$$.fragment,o),E=!0)},o(o){p(c),p(d),p(i.$$.fragment,o),p($.$$.fragment,o),p(w.$$.fragment,o),E=!1},d(o){o&&(D(e),D(v),D(C)),c&&c.d(),d&&d.d(),V(i),V($,o),V(w,o)}}}function Oe(s,e,a){let t,l=pe,i=()=>(l(),l=Ce(r,n=>a(13,t=n)),r);s.$$.on_destroy.push(()=>l());let{$$slots:f={},$$scope:m}=e,{data:r}=e;i();let{header:h=!0}=e,{state:b=be}=e,v=new Map,$=ye(""),K=Ee([]),C={},w,{class:A=""}=e,{mapClass:E="h-[300px] w-full"}=e,c,d=!1,P=!1,B="Edit Location",G=[{accessor:n=>n,cell:n=>ae(Ke,{item:n.value}),header:"Picture",id:"picture",plugins:{sort:{disable:!0},tableFilter:{disable:!0}}},{accessor:n=>n.name,header:"Name",id:"name"},{accessor:n=>{var N;return((N=n.point)==null?void 0:N.address.format(["street","settlement","country","postcode"]))||"No Address"},header:"Address",id:"address"},{accessor:n=>le(n.min.people,n.max.people,"people"),header:"Capacity (People)",id:"capacity_people"},{accessor:n=>le(n.min.tasks,n.max.tasks,"tasks"),header:"Capacity (Tasks)",id:"capacity_tasks"}];for(const n of ee(b.templates).location.keys)G.push({accessor:N=>N.properties.get(n),cell:N=>ae(Me,{property:n,value:N.value}),header:n.name,id:n.uuid});let{actions:H=new Map([...v,["Edit",O],["Delete",L]])}=e;function L(n){ee(b.settings).askDeleteConfirmation?(a(9,c=n),a(10,d=!0)):n.delete()}function O(n){a(12,B="Edit Location"),a(9,c=n.pull()),a(11,P=!0)}function J(n){n instanceof ne&&O(n)}function W(){a(12,B="Create new Location"),a(9,c=new ne({name:""},b)),a(11,P=!0)}function Q(n){C=n,a(7,C)}const o=n=>$.set(n);function u(n){$=n,a(5,$)}function g(n){w=n,a(8,w)}function z(n){C=n,a(7,C)}function R(n){K=n,a(6,K)}function $e(n){P=n,a(11,P)}function we(n){d=n,a(10,d)}return s.$$set=n=>{"data"in n&&i(a(0,r=n.data)),"header"in n&&a(1,h=n.header),"state"in n&&a(18,b=n.state),"class"in n&&a(2,A=n.class),"mapClass"in n&&a(3,E=n.mapClass),"actions"in n&&a(4,H=n.actions),"$$scope"in n&&a(28,m=n.$$scope)},[r,h,A,E,H,$,K,C,w,c,d,P,B,t,G,O,J,W,b,f,Q,o,u,g,z,R,$e,we,m]}class Re extends ge{constructor(e){super(),he(this,e,Oe,Be,ue,{data:0,header:1,state:18,class:2,mapClass:3,actions:4})}}function Ge(s){let e,a,t;return a=new Re({props:{data:s[0],class:"h-full w-full rounded-md border shadow-md",mapClass:"w-full h-[40vh]"}}),{c(){e=Y("main"),k(a.$$.fragment),this.h()},l(l){e=Z(l,"MAIN",{class:!0});var i=x(e);I(a.$$.fragment,i),i.forEach(D),this.h()},h(){U(e,"class","h-full w-full")},m(l,i){q(l,e,i),F(a,e,null),t=!0},p:pe,i(l){t||(_(a.$$.fragment,l),t=!0)},o(l){p(a.$$.fragment,l),t=!1},d(l){l&&D(e),V(a)}}}function He(s){return[be.locations]}class xe extends ge{constructor(e){super(),he(this,e,He,Ge,ue,{})}}export{xe as component};
