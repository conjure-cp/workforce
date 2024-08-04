import{f as s,h as w,i as G}from"./index.CnppDyH9.js";import{e as ne,f as we,l as xe,t as re,s as Se,C as x}from"./person.BFqpHn8l.js";import{v as C}from"./scheduler.BnYkJXHO.js";import{c as De}from"./skill.DtHEPQPi.js";import{c as ve}from"./task.CJBpD3RY.js";import{c as Ce}from"./location.X7uNnfYR.js";import{c as Te}from"./shift.BPMs6qGS.js";function P(e,t){return e-t*Math.floor(e/t)}const ae=1721426;function O(e,t,n,r){t=H(e,t);let a=t-1,o=-2;return n<=2?o=0:k(t)&&(o=-1),ae-1+365*a+Math.floor(a/4)-Math.floor(a/100)+Math.floor(a/400)+Math.floor((367*n-362)/12+o+r)}function k(e){return e%4===0&&(e%100!==0||e%400===0)}function H(e,t){return e==="BC"?1-t:t}function Ie(e){let t="AD";return e<=0&&(t="BC",e=1-e),[t,e]}const Oe={standard:[31,28,31,30,31,30,31,31,30,31,30,31],leapyear:[31,29,31,30,31,30,31,31,30,31,30,31]};class S{fromJulianDay(t){let n=t,r=n-ae,a=Math.floor(r/146097),o=P(r,146097),i=Math.floor(o/36524),c=P(o,36524),l=Math.floor(c/1461),u=P(c,1461),p=Math.floor(u/365),g=a*400+i*100+l*4+p+(i!==4&&p!==4?1:0),[M,y]=Ie(g),$=n-O(M,y,1,1),F=2;n<O(M,y,3,1)?F=0:k(y)&&(F=1);let V=Math.floor((($+F)*12+373)/367),Me=n-O(M,y,V,1)+1;return new E(M,y,V,Me)}toJulianDay(t){return O(t.era,t.year,t.month,t.day)}getDaysInMonth(t){return Oe[k(t.year)?"leapyear":"standard"][t.month-1]}getMonthsInYear(t){return 12}getDaysInYear(t){return k(t.year)?366:365}getYearsInEra(t){return 9999}getEras(){return["BC","AD"]}isInverseEra(t){return t.era==="BC"}balanceDate(t){t.year<=0&&(t.era=t.era==="BC"?"AD":"BC",t.year=1-t.year)}constructor(){this.identifier="gregory"}}function oe(e,t){return e.calendar.toJulianDay(e)-t.calendar.toJulianDay(t)}function Ae(e,t){return z(e)-z(t)}function z(e){return e.hour*36e5+e.minute*6e4+e.second*1e3+e.millisecond}let L=null;function ie(){return L==null&&(L=new Intl.DateTimeFormat().resolvedOptions().timeZone),L}function D(e){e=h(e,new S);let t=H(e.era,e.year);return ce(t,e.month,e.day,e.hour,e.minute,e.second,e.millisecond)}function ce(e,t,n,r,a,o,i){let c=new Date;return c.setUTCHours(r,a,o,i),c.setUTCFullYear(e,t-1,n),c.getTime()}function Z(e,t){if(t==="UTC")return 0;if(e>0&&t===ie())return new Date(e).getTimezoneOffset()*-6e4;let{year:n,month:r,day:a,hour:o,minute:i,second:c}=se(e,t);return ce(n,r,a,o,i,c,0)-Math.floor(e/1e3)*1e3}const X=new Map;function se(e,t){let n=X.get(t);n||(n=new Intl.DateTimeFormat("en-US",{timeZone:t,hour12:!1,era:"short",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),X.set(t,n));let r=n.formatToParts(new Date(e)),a={};for(let o of r)o.type!=="literal"&&(a[o.type]=o.value);return{year:a.era==="BC"||a.era==="B"?-a.year+1:+a.year,month:+a.month,day:+a.day,hour:a.hour==="24"?0:+a.hour,minute:+a.minute,second:+a.second}}const Q=864e5;function ke(e,t,n,r){return(n===r?[n]:[n,r]).filter(o=>Ne(e,t,o))}function Ne(e,t,n){let r=se(n,t);return e.year===r.year&&e.month===r.month&&e.day===r.day&&e.hour===r.hour&&e.minute===r.minute&&e.second===r.second}function f(e,t,n="compatible"){let r=v(e);if(t==="UTC")return D(r);if(t===ie()&&n==="compatible"){r=h(r,new S);let l=new Date,u=H(r.era,r.year);return l.setFullYear(u,r.month-1,r.day),l.setHours(r.hour,r.minute,r.second,r.millisecond),l.getTime()}let a=D(r),o=Z(a-Q,t),i=Z(a+Q,t),c=ke(r,t,a-o,a-i);if(c.length===1)return c[0];if(c.length>1)switch(n){case"compatible":case"earlier":return c[0];case"later":return c[c.length-1];case"reject":throw new RangeError("Multiple possible absolute times found")}switch(n){case"earlier":return Math.min(a-o,a-i);case"compatible":case"later":return Math.max(a-o,a-i);case"reject":throw new RangeError("No such absolute time found")}}function le(e,t,n="compatible"){return new Date(f(e,t,n))}function d(e,t){let n=Z(e,t),r=new Date(e+n),a=r.getUTCFullYear(),o=r.getUTCMonth()+1,i=r.getUTCDate(),c=r.getUTCHours(),l=r.getUTCMinutes(),u=r.getUTCSeconds(),p=r.getUTCMilliseconds();return new I(a,o,i,t,n,c,l,u,p)}function ee(e,t){return d(e.getTime(),t)}function v(e,t){let n=0,r=0,a=0,o=0;if("timeZone"in e)({hour:n,minute:r,second:a,millisecond:o}=e);else if("hour"in e&&!t)return e;return t&&({hour:n,minute:r,second:a,millisecond:o}=t),new _(e.calendar,e.era,e.year,e.month,e.day,n,r,a,o)}function h(e,t){if(e.calendar.identifier===t.identifier)return e;let n=t.fromJulianDay(e.calendar.toJulianDay(e)),r=e.copy();return r.calendar=t,r.era=n.era,r.year=n.year,r.month=n.month,r.day=n.day,b(r),r}function Ee(e,t,n){if(e instanceof I)return e.timeZone===t?e:Re(e,t);let r=f(e,t,n);return d(r,t)}function _e(e){let t=D(e)-e.offset;return new Date(t)}function Re(e,t){let n=D(e)-e.offset;return h(d(n,t),e.calendar)}const T=36e5;function R(e,t){let n=e.copy(),r="hour"in n?Pe(n,t):0;B(n,t.years||0),n.calendar.balanceYearMonth&&n.calendar.balanceYearMonth(n,e),n.month+=t.months||0,W(n),he(n),n.day+=(t.weeks||0)*7,n.day+=t.days||0,n.day+=r,Ye(n),n.calendar.balanceDate&&n.calendar.balanceDate(n),n.year<1&&(n.year=1,n.month=1,n.day=1);let a=n.calendar.getYearsInEra(n);if(n.year>a){var o,i;let l=(o=(i=n.calendar).isInverseEra)===null||o===void 0?void 0:o.call(i,n);n.year=a,n.month=l?1:n.calendar.getMonthsInYear(n),n.day=l?1:n.calendar.getDaysInMonth(n)}n.month<1&&(n.month=1,n.day=1);let c=n.calendar.getMonthsInYear(n);return n.month>c&&(n.month=c,n.day=n.calendar.getDaysInMonth(n)),n.day=Math.max(1,Math.min(n.calendar.getDaysInMonth(n),n.day)),n}function B(e,t){var n,r;!((n=(r=e.calendar).isInverseEra)===null||n===void 0)&&n.call(r,e)&&(t=-t),e.year+=t}function W(e){for(;e.month<1;)B(e,-1),e.month+=e.calendar.getMonthsInYear(e);let t=0;for(;e.month>(t=e.calendar.getMonthsInYear(e));)e.month-=t,B(e,1)}function Ye(e){for(;e.day<1;)e.month--,W(e),e.day+=e.calendar.getDaysInMonth(e);for(;e.day>e.calendar.getDaysInMonth(e);)e.day-=e.calendar.getDaysInMonth(e),e.month++,W(e)}function he(e){e.month=Math.max(1,Math.min(e.calendar.getMonthsInYear(e),e.month)),e.day=Math.max(1,Math.min(e.calendar.getDaysInMonth(e),e.day))}function b(e){e.calendar.constrainDate&&e.calendar.constrainDate(e),e.year=Math.max(1,Math.min(e.calendar.getYearsInEra(e),e.year)),he(e)}function ue(e){let t={};for(let n in e)typeof e[n]=="number"&&(t[n]=-e[n]);return t}function fe(e,t){return R(e,ue(t))}function j(e,t){let n=e.copy();return t.era!=null&&(n.era=t.era),t.year!=null&&(n.year=t.year),t.month!=null&&(n.month=t.month),t.day!=null&&(n.day=t.day),b(n),n}function N(e,t){let n=e.copy();return t.hour!=null&&(n.hour=t.hour),t.minute!=null&&(n.minute=t.minute),t.second!=null&&(n.second=t.second),t.millisecond!=null&&(n.millisecond=t.millisecond),Fe(n),n}function Ue(e){e.second+=Math.floor(e.millisecond/1e3),e.millisecond=A(e.millisecond,1e3),e.minute+=Math.floor(e.second/60),e.second=A(e.second,60),e.hour+=Math.floor(e.minute/60),e.minute=A(e.minute,60);let t=Math.floor(e.hour/24);return e.hour=A(e.hour,24),t}function Fe(e){e.millisecond=Math.max(0,Math.min(e.millisecond,1e3)),e.second=Math.max(0,Math.min(e.second,59)),e.minute=Math.max(0,Math.min(e.minute,59)),e.hour=Math.max(0,Math.min(e.hour,23))}function A(e,t){let n=e%t;return n<0&&(n+=t),n}function Pe(e,t){return e.hour+=t.hours||0,e.minute+=t.minutes||0,e.second+=t.seconds||0,e.millisecond+=t.milliseconds||0,Ue(e)}function J(e,t,n,r){let a=e.copy();switch(t){case"era":{let c=e.calendar.getEras(),l=c.indexOf(e.era);if(l<0)throw new Error("Invalid era: "+e.era);l=m(l,n,0,c.length-1,r==null?void 0:r.round),a.era=c[l],b(a);break}case"year":var o,i;!((o=(i=a.calendar).isInverseEra)===null||o===void 0)&&o.call(i,a)&&(n=-n),a.year=m(e.year,n,-1/0,9999,r==null?void 0:r.round),a.year===-1/0&&(a.year=1),a.calendar.balanceYearMonth&&a.calendar.balanceYearMonth(a,e);break;case"month":a.month=m(e.month,n,1,e.calendar.getMonthsInYear(e),r==null?void 0:r.round);break;case"day":a.day=m(e.day,n,1,e.calendar.getDaysInMonth(e),r==null?void 0:r.round);break;default:throw new Error("Unsupported field "+t)}return e.calendar.balanceDate&&e.calendar.balanceDate(a),b(a),a}function de(e,t,n,r){let a=e.copy();switch(t){case"hour":{let o=e.hour,i=0,c=23;if((r==null?void 0:r.hourCycle)===12){let l=o>=12;i=l?12:0,c=l?23:11}a.hour=m(o,n,i,c,r==null?void 0:r.round);break}case"minute":a.minute=m(e.minute,n,0,59,r==null?void 0:r.round);break;case"second":a.second=m(e.second,n,0,59,r==null?void 0:r.round);break;case"millisecond":a.millisecond=m(e.millisecond,n,0,999,r==null?void 0:r.round);break;default:throw new Error("Unsupported field "+t)}return a}function m(e,t,n,r,a=!1){if(a){e+=Math.sign(t),e<n&&(e=r);let o=Math.abs(t);t>0?e=Math.ceil(e/o)*o:e=Math.floor(e/o)*o,e>r&&(e=n)}else e+=t,e<n?e=r-(n-e-1):e>r&&(e=n+(e-r-1));return e}function me(e,t){let n;if(t.years!=null&&t.years!==0||t.months!=null&&t.months!==0||t.weeks!=null&&t.weeks!==0||t.days!=null&&t.days!==0){let a=R(v(e),{years:t.years,months:t.months,weeks:t.weeks,days:t.days});n=f(a,e.timeZone)}else n=D(e)-e.offset;n+=t.milliseconds||0,n+=(t.seconds||0)*1e3,n+=(t.minutes||0)*6e4,n+=(t.hours||0)*36e5;let r=d(n,e.timeZone);return h(r,e.calendar)}function Le(e,t){return me(e,ue(t))}function Ze(e,t,n,r){switch(t){case"hour":{let a=0,o=23;if((r==null?void 0:r.hourCycle)===12){let $=e.hour>=12;a=$?12:0,o=$?23:11}let i=v(e),c=h(N(i,{hour:a}),new S),l=[f(c,e.timeZone,"earlier"),f(c,e.timeZone,"later")].filter($=>d($,e.timeZone).day===c.day)[0],u=h(N(i,{hour:o}),new S),p=[f(u,e.timeZone,"earlier"),f(u,e.timeZone,"later")].filter($=>d($,e.timeZone).day===u.day).pop(),g=D(e)-e.offset,M=Math.floor(g/T),y=g%T;return g=m(M,n,Math.floor(l/T),Math.floor(p/T),r==null?void 0:r.round)*T+y,h(d(g,e.timeZone),e.calendar)}case"minute":case"second":case"millisecond":return de(e,t,n,r);case"era":case"year":case"month":case"day":{let a=J(v(e),t,n,r),o=f(a,e.timeZone);return h(d(o,e.timeZone),e.calendar)}default:throw new Error("Unsupported field "+t)}}function Be(e,t,n){let r=v(e),a=N(j(r,t),t);if(a.compare(r)===0)return e;let o=f(a,e.timeZone,n);return h(d(o,e.timeZone),e.calendar)}function We(e){return`${String(e.hour).padStart(2,"0")}:${String(e.minute).padStart(2,"0")}:${String(e.second).padStart(2,"0")}${e.millisecond?String(e.millisecond/1e3).slice(1):""}`}function $e(e){let t=h(e,new S);return`${String(t.year).padStart(4,"0")}-${String(t.month).padStart(2,"0")}-${String(t.day).padStart(2,"0")}`}function ye(e){return`${$e(e)}T${We(e)}`}function Ge(e){let t=Math.sign(e)<0?"-":"+";e=Math.abs(e);let n=Math.floor(e/36e5),r=e%36e5/6e4;return`${t}${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}`}function He(e){return`${ye(e)}${Ge(e.offset)}[${e.timeZone}]`}function je(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function q(e,t,n){je(e,t),t.set(e,n)}function K(e){let t=typeof e[0]=="object"?e.shift():new S,n;if(typeof e[0]=="string")n=e.shift();else{let i=t.getEras();n=i[i.length-1]}let r=e.shift(),a=e.shift(),o=e.shift();return[t,n,r,a,o]}var Je=new WeakMap;class E{copy(){return this.era?new E(this.calendar,this.era,this.year,this.month,this.day):new E(this.calendar,this.year,this.month,this.day)}add(t){return R(this,t)}subtract(t){return fe(this,t)}set(t){return j(this,t)}cycle(t,n,r){return J(this,t,n,r)}toDate(t){return le(this,t)}toString(){return $e(this)}compare(t){return oe(this,t)}constructor(...t){q(this,Je,{writable:!0,value:void 0});let[n,r,a,o,i]=K(t);this.calendar=n,this.era=r,this.year=a,this.month=o,this.day=i,b(this)}}var qe=new WeakMap;class _{copy(){return this.era?new _(this.calendar,this.era,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond):new _(this.calendar,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond)}add(t){return R(this,t)}subtract(t){return fe(this,t)}set(t){return j(N(this,t),t)}cycle(t,n,r){switch(t){case"era":case"year":case"month":case"day":return J(this,t,n,r);default:return de(this,t,n,r)}}toDate(t,n){return le(this,t,n)}toString(){return ye(this)}compare(t){let n=oe(this,t);return n===0?Ae(this,v(t)):n}constructor(...t){q(this,qe,{writable:!0,value:void 0});let[n,r,a,o,i]=K(t);this.calendar=n,this.era=r,this.year=a,this.month=o,this.day=i,this.hour=t.shift()||0,this.minute=t.shift()||0,this.second=t.shift()||0,this.millisecond=t.shift()||0,b(this)}}var Ke=new WeakMap;class I{copy(){return this.era?new I(this.calendar,this.era,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond):new I(this.calendar,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond)}add(t){return me(this,t)}subtract(t){return Le(this,t)}set(t,n){return Be(this,t,n)}cycle(t,n,r){return Ze(this,t,n,r)}toDate(){return _e(this)}toString(){return He(this)}toAbsoluteString(){return this.toDate().toISOString()}compare(t){return this.toDate().getTime()-Ee(t,this.timeZone).toDate().getTime()}constructor(...t){q(this,Ke,{writable:!0,value:void 0});let[n,r,a,o,i]=K(t),c=t.shift(),l=t.shift();this.calendar=n,this.era=r,this.year=a,this.month=o,this.day=i,this.timeZone=c,this.offset=l,this.hour=t.shift()||0,this.minute=t.shift()||0,this.second=t.shift()||0,this.millisecond=t.shift()||0,b(this)}}const Ve=[-2.799,56.34039],te=["mdi:account","mdi:home","mdi:bell","mdi:camera","mdi:cart","mdi:chat","mdi:cloud","mdi:email","mdi:heart","mdi:lock","mdi:map","mdi:music","mdi:phone","mdi:settings","mdi:star","mdi:thumb-up","mdi:weather-sunny","mdi:calendar","mdi:folder","mdi:gift"],ze=["Office","Warehouse","Store","Restaurant","Factory","Shop","Ward","Unit","Department","Room","Lab","Studio","Lecture Hall","Clinic"],Xe=[()=>w(["A","B","C","D","E","F"]),()=>s.number.int({min:1,max:100}).toString()];function Qe(){const e=w(Xe);return`${w(ze)} ${e()}`}function be(){return{icon:te[Math.floor(Math.random()*te.length)],color:s.color.rgb()}}function et(){return De({name:s.hacker.ingverb(),description:s.lorem.sentence(),icon:be()})}function Mt(e){return Array.from({length:e},et)}function tt(){return we({name:s.person.fullName(),job_title:s.person.jobTitle(),image_url:s.image.avatar(),birthday:s.date.birthdate(),skills:ge(s.number.int({min:1,max:3}))})}function wt(e){return Array.from({length:e},tt)}function nt(){return ve({name:s.lorem.words(),description:s.lorem.sentence(),icon:be(),min_people:s.number.int({min:1,max:3}),max_people:s.number.int({min:3,max:5}),required_skills:ge(s.number.int({min:0,max:3})),people:ot(s.number.int({min:0,max:3}))})}function xt(e){return Array.from({length:e},nt)}function rt(){return Ce({name:Qe(),address:s.location.streetAddress(),image_url:s.image.url(),coordinates:s.location.nearbyGPSCoordinate({origin:Ve,radius:5,isMetric:!0})})}function St(e){return Array.from({length:e},rt)}function at(){const e=U();if(e!==void 0)return Te({name:s.lorem.words(),description:s.lorem.sentence(),start_date_time:ee(s.date.recent(),"UTC"),end_date_time:ee(s.date.soon(),"UTC"),location:e,tasks:it(s.number.int({min:1,max:3}))})}function Dt(e){return Array.from({length:e},at).filter(t=>t!==void 0)}function Y(){return w(C(ne))}function pe(){return w(C(re))}function U(){return w(C(xe))}function ot(e,t=!0){return G(C(ne),e,t)}function it(e,t=!0){return G(C(re),e,t)}function ge(e,t=!0){return G(C(Se),e,t)}function ct(e){const t=[()=>({type:x.NO_TASK_AT_LOCATION,task:pe(),location:e}),()=>({type:x.NO_PERSON_AT_LOCATION,person:Y(),location:e})];return t[s.number.int({min:0,max:t.length-1})]()}function st(e){const t=[()=>({type:x.NO_TASK_AT_LOCATION,task:e,location:U()}),()=>({type:x.PERSON_CANNOT_DO_TASK,person:Y(),task:e})];return t[s.number.int({min:0,max:t.length-1})]()}function lt(e){const t=[()=>({type:x.NO_WORK_TOGETHER,people:[e,Y()]}),()=>({type:x.NO_PERSON_AT_LOCATION,person:e,location:U()})];return t[s.number.int({min:0,max:t.length-1})]()}function ht(){const e=U();if(e!==void 0)return ct(e)}function ut(){const e=pe();if(e!==void 0)return st(e)}function ft(){const e=Y();if(e!==void 0)return lt(e)}function vt(e){const t=[ht,ut,ft];return Array.from({length:e},()=>t[s.number.int({min:0,max:t.length-1})]()).filter(n=>n!==void 0)}export{St as a,wt as b,xt as c,Dt as d,vt as e,et as f,Mt as g,Y as s};
