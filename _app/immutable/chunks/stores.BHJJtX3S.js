import{w as t}from"./index.D28AHmqd.js";const d=t([]),a=t([]),n=t([]),o=t([]),p=t([]),r=t([]);function f(u){o.update(e=>e.map(s=>(s.people=s.people.filter(i=>i.uuid!==u.uuid),s))),p.update(e=>e.filter(s=>s.applies_to.uuid!==u.uuid).map(s=>(s.type==="NoPeople"&&(s.people=s.people.filter(i=>i.uuid!==u.uuid)),s))),a.update(e=>e.filter(s=>s.uuid!==u.uuid))}export{r as a,p as c,f as d,a as e,n as l,d as s,o as t};
