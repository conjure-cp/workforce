import{w as d}from"./index.BMBwkhF4.js";import{v as _}from"./scheduler.DpJJ5EKO.js";import{e as c}from"./index.qmy9pvoZ.js";var l=(u=>(u.NO_WORK_TOGETHER="NO_WORK_TOGETHER",u.NO_PERSON_AT_LOCATION="NO_PERSON_AT_LOCATION",u.NO_TASK_AT_LOCATION="NO_TASK_AT_LOCATION",u.PERSON_CANNOT_DO_TASK="PERSON_CANNOT_DO_TASK",u))(l||{});function s(u,e){switch(u.type){case"NO_WORK_TOGETHER":return u.people.map(t=>t.uuid).includes(e.uuid);case"NO_PERSON_AT_LOCATION":return u.person.uuid===e.uuid||u.location.uuid===e.uuid;case"NO_TASK_AT_LOCATION":return u.task.uuid===e.uuid||u.location.uuid===e.uuid;case"PERSON_CANNOT_DO_TASK":return u.person.uuid===e.uuid||u.task.uuid===e.uuid}}const v=d([]),p=d([]),I=d([]),N=d([]),O=d([]),U=d([]);function C(u){return _(O).filter(e=>s(e,u))}function D(u){N.update(e=>e.map(t=>(t.people=t.people.filter(r=>r.uuid!==u.uuid),t))),O.update(e=>e.filter(t=>!s(t,u))),p.update(e=>e.filter(t=>t.uuid!==u.uuid))}var n=[];for(var o=0;o<256;++o)n.push((o+256).toString(16).slice(1));function T(u,e=0){return(n[u[e+0]]+n[u[e+1]]+n[u[e+2]]+n[u[e+3]]+"-"+n[u[e+4]]+n[u[e+5]]+"-"+n[u[e+6]]+n[u[e+7]]+"-"+n[u[e+8]]+n[u[e+9]]+"-"+n[u[e+10]]+n[u[e+11]]+n[u[e+12]]+n[u[e+13]]+n[u[e+14]]+n[u[e+15]]).toLowerCase()}var a,A=new Uint8Array(16);function g(){if(!a&&(a=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!a))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(A)}var R=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const i={randomUUID:R};function m(u,e,t){if(i.randomUUID&&!e&&!u)return i.randomUUID();u=u||{};var r=u.random||(u.rng||g)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,T(r)}function K(u){return{uuid:m(),...u}}function P(u){return c(u.name)}function h(u){return new Date().getFullYear()-u.birthday.getFullYear()}export{l as C,U as a,C as b,O as c,D as d,p as e,h as f,P as g,K as h,I as l,v as s,N as t,m as v};
