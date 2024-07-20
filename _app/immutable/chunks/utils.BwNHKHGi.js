import{d as ae,w as ye,r as M}from"./index.8Uwxqxbp.js";import{C as we,O as xe,J as le}from"./scheduler.DKZNoe2D.js";function yt(e,t){const r={},n={},i={$$scope:1};let o=e.length;for(;o--;){const s=e[o],a=t[o];if(a){for(const l in s)l in a||(n[l]=1);for(const l in a)i[l]||(r[l]=a[l],i[l]=1);e[o]=a}else for(const l in s)i[l]=1}for(const s in n)s in r||(r[s]=void 0);return r}function wt(e){return typeof e=="object"&&e!==null?e:{}}const H="-";function ve(e){const t=Ae(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=e;function i(s){const a=s.split(H);return a[0]===""&&a.length!==1&&a.shift(),ce(a,t)||ke(s)}function o(s,a){const l=r[s]||[];return a&&n[s]?[...l,...n[s]]:l}return{getClassGroupId:i,getConflictingClassGroupIds:o}}function ce(e,t){var s;if(e.length===0)return t.classGroupId;const r=e[0],n=t.nextPart.get(r),i=n?ce(e.slice(1),n):void 0;if(i)return i;if(t.validators.length===0)return;const o=e.join(H);return(s=t.validators.find(({validator:a})=>a(o)))==null?void 0:s.classGroupId}const ne=/^\[(.+)\]$/;function ke(e){if(ne.test(e)){const t=ne.exec(e)[1],r=t==null?void 0:t.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}}function Ae(e){const{theme:t,prefix:r}=e,n={nextPart:new Map,validators:[]};return Ee(Object.entries(e.classGroups),r).forEach(([o,s])=>{N(s,n,o,t)}),n}function N(e,t,r,n){e.forEach(i=>{if(typeof i=="string"){const o=i===""?t:oe(t,i);o.classGroupId=r;return}if(typeof i=="function"){if(Ce(i)){N(i(n),t,r,n);return}t.validators.push({validator:i,classGroupId:r});return}Object.entries(i).forEach(([o,s])=>{N(s,oe(t,o),r,n)})})}function oe(e,t){let r=e;return t.split(H).forEach(n=>{r.nextPart.has(n)||r.nextPart.set(n,{nextPart:new Map,validators:[]}),r=r.nextPart.get(n)}),r}function Ce(e){return e.isThemeGetter}function Ee(e,t){return t?e.map(([r,n])=>{const i=n.map(o=>typeof o=="string"?t+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([s,a])=>[t+s,a])):o);return[r,i]}):e}function Se(e){if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,n=new Map;function i(o,s){r.set(o,s),t++,t>e&&(t=0,n=r,r=new Map)}return{get(o){let s=r.get(o);if(s!==void 0)return s;if((s=n.get(o))!==void 0)return i(o,s),s},set(o,s){r.has(o)?r.set(o,s):i(o,s)}}}const de="!";function Me(e){const t=e.separator,r=t.length===1,n=t[0],i=t.length;return function(s){const a=[];let l=0,d=0,u;for(let g=0;g<s.length;g++){let m=s[g];if(l===0){if(m===n&&(r||s.slice(g,g+i)===t)){a.push(s.slice(d,g)),d=g+i;continue}if(m==="/"){u=g;continue}}m==="["?l++:m==="]"&&l--}const b=a.length===0?s:s.substring(d),h=b.startsWith(de),y=h?b.substring(1):b,S=u&&u>d?u-d:void 0;return{modifiers:a,hasImportantModifier:h,baseClassName:y,maybePostfixModifierPosition:S}}}function ze(e){if(e.length<=1)return e;const t=[];let r=[];return e.forEach(n=>{n[0]==="["?(t.push(...r.sort(),n),r=[]):r.push(n)}),t.push(...r.sort()),t}function Re(e){return{cache:Se(e.cacheSize),splitModifiers:Me(e),...ve(e)}}const Te=/\s+/;function Pe(e,t){const{splitModifiers:r,getClassGroupId:n,getConflictingClassGroupIds:i}=t,o=new Set;return e.trim().split(Te).map(s=>{const{modifiers:a,hasImportantModifier:l,baseClassName:d,maybePostfixModifierPosition:u}=r(s);let b=n(u?d.substring(0,u):d),h=!!u;if(!b){if(!u)return{isTailwindClass:!1,originalClassName:s};if(b=n(d),!b)return{isTailwindClass:!1,originalClassName:s};h=!1}const y=ze(a).join(":");return{isTailwindClass:!0,modifierId:l?y+de:y,classGroupId:b,originalClassName:s,hasPostfixModifier:h}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:a,classGroupId:l,hasPostfixModifier:d}=s,u=a+l;return o.has(u)?!1:(o.add(u),i(l,d).forEach(b=>o.add(a+b)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function Fe(){let e=0,t,r,n="";for(;e<arguments.length;)(t=arguments[e++])&&(r=ue(t))&&(n&&(n+=" "),n+=r);return n}function ue(e){if(typeof e=="string")return e;let t,r="";for(let n=0;n<e.length;n++)e[n]&&(t=ue(e[n]))&&(r&&(r+=" "),r+=t);return r}function B(e,...t){let r,n,i,o=s;function s(l){const d=t.reduce((u,b)=>b(u),e());return r=Re(d),n=r.cache.get,i=r.cache.set,o=a,a(l)}function a(l){const d=n(l);if(d)return d;const u=Pe(l,r);return i(l,u),u}return function(){return o(Fe.apply(null,arguments))}}function f(e){const t=r=>r[e]||[];return t.isThemeGetter=!0,t}const fe=/^\[(?:([a-z-]+):)?(.+)\]$/i,$e=/^\d+\/\d+$/,Ge=new Set(["px","full","screen"]),Ie=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Le=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Oe=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,_e=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,je=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function x(e){return E(e)||Ge.has(e)||$e.test(e)}function k(e){return z(e,"length",He)}function E(e){return!!e&&!Number.isNaN(Number(e))}function L(e){return z(e,"number",E)}function P(e){return!!e&&Number.isInteger(Number(e))}function We(e){return e.endsWith("%")&&E(e.slice(0,-1))}function c(e){return fe.test(e)}function A(e){return Ie.test(e)}const De=new Set(["length","size","percentage"]);function Ue(e){return z(e,De,pe)}function Ve(e){return z(e,"position",pe)}const Ne=new Set(["image","url"]);function Be(e){return z(e,Ne,Je)}function Ke(e){return z(e,"",qe)}function F(){return!0}function z(e,t,r){const n=fe.exec(e);return n?n[1]?typeof t=="string"?n[1]===t:t.has(n[1]):r(n[2]):!1}function He(e){return Le.test(e)&&!Oe.test(e)}function pe(){return!1}function qe(e){return _e.test(e)}function Je(e){return je.test(e)}function K(){const e=f("colors"),t=f("spacing"),r=f("blur"),n=f("brightness"),i=f("borderColor"),o=f("borderRadius"),s=f("borderSpacing"),a=f("borderWidth"),l=f("contrast"),d=f("grayscale"),u=f("hueRotate"),b=f("invert"),h=f("gap"),y=f("gradientColorStops"),S=f("gradientColorStopPositions"),g=f("inset"),m=f("margin"),v=f("opacity"),w=f("padding"),q=f("saturate"),j=f("scale"),J=f("sepia"),X=f("skew"),Z=f("space"),Q=f("translate"),W=()=>["auto","contain","none"],D=()=>["auto","hidden","clip","visible","scroll"],U=()=>["auto",c,t],p=()=>[c,t],Y=()=>["",x,k],$=()=>["auto",E,c],ee=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],G=()=>["solid","dashed","dotted","double","none"],te=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],V=()=>["start","end","center","between","around","evenly","stretch"],R=()=>["","0",c],re=()=>["auto","avoid","all","avoid-page","page","left","right","column"],T=()=>[E,L],I=()=>[E,c];return{cacheSize:500,separator:":",theme:{colors:[F],spacing:[x,k],blur:["none","",A,c],brightness:T(),borderColor:[e],borderRadius:["none","","full",A,c],borderSpacing:p(),borderWidth:Y(),contrast:T(),grayscale:R(),hueRotate:I(),invert:R(),gap:p(),gradientColorStops:[e],gradientColorStopPositions:[We,k],inset:U(),margin:U(),opacity:T(),padding:p(),saturate:T(),scale:T(),sepia:R(),skew:I(),space:p(),translate:p()},classGroups:{aspect:[{aspect:["auto","square","video",c]}],container:["container"],columns:[{columns:[A]}],"break-after":[{"break-after":re()}],"break-before":[{"break-before":re()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ee(),c]}],overflow:[{overflow:D()}],"overflow-x":[{"overflow-x":D()}],"overflow-y":[{"overflow-y":D()}],overscroll:[{overscroll:W()}],"overscroll-x":[{"overscroll-x":W()}],"overscroll-y":[{"overscroll-y":W()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",P,c]}],basis:[{basis:U()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",c]}],grow:[{grow:R()}],shrink:[{shrink:R()}],order:[{order:["first","last","none",P,c]}],"grid-cols":[{"grid-cols":[F]}],"col-start-end":[{col:["auto",{span:["full",P,c]},c]}],"col-start":[{"col-start":$()}],"col-end":[{"col-end":$()}],"grid-rows":[{"grid-rows":[F]}],"row-start-end":[{row:["auto",{span:[P,c]},c]}],"row-start":[{"row-start":$()}],"row-end":[{"row-end":$()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",c]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",c]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...V()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...V(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...V(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[Z]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[Z]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",c,t]}],"min-w":[{"min-w":[c,t,"min","max","fit"]}],"max-w":[{"max-w":[c,t,"none","full","min","max","fit","prose",{screen:[A]},A]}],h:[{h:[c,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[c,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[c,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[c,t,"auto","min","max","fit"]}],"font-size":[{text:["base",A,k]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",L]}],"font-family":[{font:[F]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",c]}],"line-clamp":[{"line-clamp":["none",E,L]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",x,c]}],"list-image":[{"list-image":["none",c]}],"list-style-type":[{list:["none","disc","decimal",c]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[v]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[v]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...G(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",x,k]}],"underline-offset":[{"underline-offset":["auto",x,c]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:p()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",c]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",c]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[v]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ee(),Ve]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ue]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Be]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[S]}],"gradient-via-pos":[{via:[S]}],"gradient-to-pos":[{to:[S]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[v]}],"border-style":[{border:[...G(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[v]}],"divide-style":[{divide:G()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...G()]}],"outline-offset":[{"outline-offset":[x,c]}],"outline-w":[{outline:[x,k]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:Y()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[v]}],"ring-offset-w":[{"ring-offset":[x,k]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",A,Ke]}],"shadow-color":[{shadow:[F]}],opacity:[{opacity:[v]}],"mix-blend":[{"mix-blend":[...te(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":te()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[n]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",A,c]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[b]}],saturate:[{saturate:[q]}],sepia:[{sepia:[J]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[b]}],"backdrop-opacity":[{"backdrop-opacity":[v]}],"backdrop-saturate":[{"backdrop-saturate":[q]}],"backdrop-sepia":[{"backdrop-sepia":[J]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",c]}],duration:[{duration:I()}],ease:[{ease:["linear","in","out","in-out",c]}],delay:[{delay:I()}],animate:[{animate:["none","spin","ping","pulse","bounce",c]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[j]}],"scale-x":[{"scale-x":[j]}],"scale-y":[{"scale-y":[j]}],rotate:[{rotate:[P,c]}],"translate-x":[{"translate-x":[Q]}],"translate-y":[{"translate-y":[Q]}],"skew-x":[{"skew-x":[X]}],"skew-y":[{"skew-y":[X]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",c]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",c]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":p()}],"scroll-mx":[{"scroll-mx":p()}],"scroll-my":[{"scroll-my":p()}],"scroll-ms":[{"scroll-ms":p()}],"scroll-me":[{"scroll-me":p()}],"scroll-mt":[{"scroll-mt":p()}],"scroll-mr":[{"scroll-mr":p()}],"scroll-mb":[{"scroll-mb":p()}],"scroll-ml":[{"scroll-ml":p()}],"scroll-p":[{"scroll-p":p()}],"scroll-px":[{"scroll-px":p()}],"scroll-py":[{"scroll-py":p()}],"scroll-ps":[{"scroll-ps":p()}],"scroll-pe":[{"scroll-pe":p()}],"scroll-pt":[{"scroll-pt":p()}],"scroll-pr":[{"scroll-pr":p()}],"scroll-pb":[{"scroll-pb":p()}],"scroll-pl":[{"scroll-pl":p()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",c]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[x,k,L]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}function Xe(e,{cacheSize:t,prefix:r,separator:n,extend:i={},override:o={}}){_(e,"cacheSize",t),_(e,"prefix",r),_(e,"separator",n);for(const s in o)Ze(e[s],o[s]);for(const s in i)Qe(e[s],i[s]);return e}function _(e,t,r){r!==void 0&&(e[t]=r)}function Ze(e,t){if(t)for(const r in t)_(e,r,t[r])}function Qe(e,t){if(t)for(const r in t){const n=t[r];n!==void 0&&(e[r]=(e[r]||[]).concat(n))}}function xt(e,...t){return typeof e=="function"?B(K,e,...t):B(()=>Xe(K(),e),...t)}const Ye=B(K);function et(e){return Object.keys(e).reduce((t,r)=>e[r]===void 0?t:t+`${r}:${e[r]};`,"")}et({position:"absolute",opacity:0,"pointer-events":"none",margin:0,transform:"translateX(-100%)"});function vt(e){if(e!==null)return""}function se(e){function t(r){return r(e),()=>{}}return{subscribe:t}}const O=e=>new Proxy(e,{get(t,r,n){return Reflect.get(t,r,n)},ownKeys(t){return Reflect.ownKeys(t).filter(r=>r!=="action")}}),ie=e=>typeof e=="function";tt("empty");function tt(e,t){const{stores:r,action:n,returned:i}=t??{},o=(()=>{if(r&&i)return ae(r,a=>{const l=i(a);if(ie(l)){const d=(...u)=>O({...l(...u),[`data-melt-${e}`]:"",action:n??C});return d.action=n??C,d}return O({...l,[`data-melt-${e}`]:"",action:n??C})});{const a=i,l=a==null?void 0:a();if(ie(l)){const d=(...u)=>O({...l(...u),[`data-melt-${e}`]:"",action:n??C});return d.action=n??C,se(d)}return se(O({...l,[`data-melt-${e}`]:"",action:n??C}))}})(),s=n??(()=>{});return s.subscribe=o.subscribe,s}function kt(e){const t=o=>o?`${e}-${o}`:e,r=o=>`data-melt-${e}${o?`-${o}`:""}`,n=o=>`[data-melt-${e}${o?`-${o}`:""}]`;return{name:t,attribute:r,selector:n,getEl:o=>document.querySelector(n(o))}}const At=typeof document<"u",rt=e=>typeof e=="function";function Ct(e){return e instanceof Document}function Et(e){return e instanceof Element}function be(e){return e instanceof HTMLElement}function St(e){return e.pointerType==="touch"}function nt(e){return e!==null&&typeof e=="object"}function ot(e){return nt(e)&&"subscribe"in e}function st(...e){return(...t)=>{for(const r of e)typeof r=="function"&&r(...t)}}function C(){}function ge(e,t,r,n){const i=Array.isArray(t)?t:[t];return i.forEach(o=>e.addEventListener(o,r,n)),()=>{i.forEach(o=>e.removeEventListener(o,r,n))}}function Mt(e,t,r,n){const i=Array.isArray(t)?t:[t];if(typeof r=="function"){const o=at(s=>r(s));return i.forEach(s=>e.addEventListener(s,o,n)),()=>{i.forEach(s=>e.removeEventListener(s,o,n))}}return()=>void 0}function it(e){const t=e.currentTarget;if(!be(t))return null;const r=new CustomEvent(`m-${e.type}`,{detail:{originalEvent:e},cancelable:!0});return t.dispatchEvent(r),r}function at(e){return t=>{const r=it(t);if(!(r!=null&&r.defaultPrevented))return e(t)}}const zt=e=>{try{we(e)}catch{return e}},lt=e=>{try{xe(e)}catch{return e}};function ct(e,...t){const r={};for(const n of Object.keys(e))t.includes(n)||(r[n]=e[n]);return r}function Rt(e){const t={};for(const r in e){const n=e[r];n!==void 0&&(t[r]=n)}return t}function me(e){return{...e,get:()=>le(e)}}me.writable=function(e){const t=ye(e);let r=e;return{subscribe:t.subscribe,set(n){t.set(n),r=n},update(n){const i=n(r);t.set(i),r=i},get(){return r}}};me.derived=function(e,t){const r=new Map,n=()=>{const o=Array.isArray(e)?e.map(s=>s.get()):e.get();return t(o)};return{get:n,subscribe:o=>{const s=[];return(Array.isArray(e)?e:[e]).forEach(l=>{s.push(l.subscribe(()=>{o(n())}))}),o(n()),r.set(o,s),()=>{const l=r.get(o);if(l)for(const d of l)d();r.delete(o)}}}};const dt={ALT:"Alt",ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",BACKSPACE:"Backspace",CAPS_LOCK:"CapsLock",CONTROL:"Control",DELETE:"Delete",END:"End",ENTER:"Enter",ESCAPE:"Escape",F1:"F1",F10:"F10",F11:"F11",F12:"F12",F2:"F2",F3:"F3",F4:"F4",F5:"F5",F6:"F6",F7:"F7",F8:"F8",F9:"F9",HOME:"Home",META:"Meta",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",SHIFT:"Shift",SPACE:" ",TAB:"Tab",CTRL:"Control",ASTERISK:"*",A:"a",P:"p"};function ut(e,t){let r;const n=ae(e,o=>{r==null||r(),r=t(o)}).subscribe(C),i=()=>{n(),r==null||r()};return lt(i),i}M(void 0,e=>{function t(n){e(n),e(void 0)}return ge(document,"pointerup",t,{passive:!1,capture:!0})});const ft=M(void 0,e=>{function t(n){n&&n.key===dt.ESCAPE&&e(n),e(void 0)}return ge(document,"keydown",t,{passive:!1})}),Tt=(e,t={})=>{let r=C;function n(i={}){r();const o={enabled:!0,...i},s=ot(o.enabled)?o.enabled:M(o.enabled);r=st(ft.subscribe(a=>{var d;if(!a||!le(s))return;const l=a.target;if(!(!be(l)||l.closest("[data-escapee]")!==e)){if(a.preventDefault(),o.ignore){if(rt(o.ignore)){if(o.ignore(a))return}else if(Array.isArray(o.ignore)&&o.ignore.length>0&&o.ignore.some(u=>u&&l===u))return}(d=o.handler)==null||d.call(o,a)}}),ut(s,a=>{a?e.dataset.escapee="":delete e.dataset.escapee}))}return n(t),{update:n,destroy(){e.removeAttribute("data-escapee"),r()}}};M(!1),M(!1),M(void 0);const pt={isDateDisabled:void 0,isDateUnavailable:void 0,value:void 0,preventDeselect:!1,numberOfMonths:1,pagedNavigation:!1,weekStartsOn:0,fixedWeeks:!1,calendarLabel:"Event Date",locale:"en",minValue:void 0,maxValue:void 0,disabled:!1,readonly:!1,weekdayFormat:"narrow"};({...ct(pt,"isDateDisabled","isDateUnavailable","value","locale","disabled","readonly","minValue","maxValue","weekdayFormat")});function he(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=he(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function bt(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=he(e))&&(n&&(n+=" "),n+=t);return n}function gt(e){const t=e-1;return t*t*t+1}function Pt(...e){return Ye(bt(e))}const Ft=(e,t={y:-8,x:0,start:.95,duration:150})=>{const r=getComputedStyle(e),n=r.transform==="none"?"":r.transform,i=(s,a,l)=>{const[d,u]=a,[b,h]=l;return(s-d)/(u-d)*(h-b)+b},o=s=>Object.keys(s).reduce((a,l)=>s[l]===void 0?a:a+`${l}:${s[l]};`,"");return{duration:t.duration??200,delay:0,css:s=>{const a=i(s,[0,1],[t.y??5,0]),l=i(s,[0,1],[t.x??0,0]),d=i(s,[0,1],[t.start??.95,1]);return o({transform:`${n} translate3d(${l}px, ${a}px, 0) scale(${d})`,opacity:s})},easing:gt}};function $t(e){return e.length===0?e:e.length===1?e.toUpperCase():e[0].toUpperCase()+e.slice(1)}function Gt(e,t,r){return e.length>t?e.slice(0,t):e.length<t?e.concat(Array(t-e.length).fill(r)):e}export{rt as A,Tt as B,zt as C,wt as a,Pt as b,$t as c,ut as d,xt as e,At as f,yt as g,st as h,be as i,ge as j,Mt as k,St as l,tt as m,C as n,ct as o,Gt as p,vt as q,Rt as r,et as s,Ye as t,kt as u,dt as v,me as w,Et as x,Ct as y,Ft as z};
