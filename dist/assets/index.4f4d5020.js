(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const Re="modulepreload",Ve=function(e){return"/"+e},ae={},re=function(n,t,s){if(!t||t.length===0)return n();const r=document.getElementsByTagName("link");return Promise.all(t.map(i=>{if(i=Ve(i),i in ae)return;ae[i]=!0;const l=i.endsWith(".css"),o=l?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const f=r[u];if(f.href===i&&(!l||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${o}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":Re,l||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),l)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>n())},h={};function k(e){h.context=e}function je(){return{...h.context,id:`${h.context.id}${h.context.count++}-`,count:0}}const qe=(e,n)=>e===n,M={equals:qe};let ye=$e;const x=1,H=2,ve={owned:null,cleanups:null,context:null,owner:null},ee={};var b=null;let N=null,g=null,v=null,E=null,ie=0;function Be(e,n){const t=g,s=b,r=e.length===0,i=r?ve:{owned:null,cleanups:null,context:null,owner:n||s},l=r?e:()=>e(()=>A(()=>oe(i)));b=i,g=null;try{return I(l,!0)}finally{g=t,b=s}}function R(e,n){n=n?Object.assign({},M,n):M;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},s=r=>(typeof r=="function"&&(r=r(t.value)),be(t,r));return[we.bind(t),s]}function ue(e,n,t){const s=Q(e,n,!0,x);O(s)}function S(e,n,t){const s=Q(e,n,!1,x);O(s)}function Pt(e,n,t){ye=ze;const s=Q(e,n,!1,x);s.user=!0,E?E.push(s):O(s)}function _e(e,n,t){t=t?Object.assign({},M,t):M;const s=Q(e,n,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,O(s),we.bind(s)}function De(e,n,t){let s,r,i;arguments.length===2&&typeof n=="object"||arguments.length===1?(s=!0,r=e,i=n||{}):(s=e,r=n,i=t||{});let l=null,o=ee,a=null,c=!1,u="initialValue"in i,f=typeof s=="function"&&_e(s);const m=new Set,[C,q]=(i.storage||R)(i.initialValue),[J,Te]=R(void 0),[Le,Oe]=R(void 0,{equals:!1}),[le,ce]=R(u?"ready":"unresolved");if(h.context){a=`${h.context.id}${h.context.count++}`;let d;i.ssrLoadFrom==="initial"?o=i.initialValue:h.load&&(d=h.load(a))&&(o=d[0])}function B(d,p,y,U){return l===d&&(l=null,u=!0,(d===o||p===o)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(U,{value:p})),o=ee,Ue(p,y)),p}function Ue(d,p){I(()=>{p||q(()=>d),ce(p?"errored":"ready"),Te(p);for(const y of m.keys())y.decrement();m.clear()},!1)}function Y(){const d=Fe,p=C(),y=J();if(y&&!l)throw y;return g&&!g.user&&d&&ue(()=>{Le(),l&&(d.resolved||m.has(d)||(d.increment(),m.add(d)))}),p}function Z(d=!0){if(d!==!1&&c)return;c=!1;const p=f?f():s;if(p==null||p===!1){B(l,A(C));return}const y=o!==ee?o:A(()=>r(p,{value:C(),refetching:d}));return typeof y!="object"||!(y&&"then"in y)?(B(l,y,void 0,p),y):(l=y,c=!0,queueMicrotask(()=>c=!1),I(()=>{ce(u?"refreshing":"pending"),Oe()},!1),y.then(U=>B(y,U,void 0,p),U=>B(y,void 0,Ee(U),p)))}return Object.defineProperties(Y,{state:{get:()=>le()},error:{get:()=>J()},loading:{get(){const d=le();return d==="pending"||d==="refreshing"}},latest:{get(){if(!u)return Y();const d=J();if(d&&!l)throw d;return C()}}}),f?ue(()=>Z(!1)):Z(!1),[Y,{refetch:Z,mutate:q}]}function A(e){const n=g;g=null;try{return e()}finally{g=n}}let Fe;function we(){const e=N;if(this.sources&&(this.state||e))if(this.state===x||e)O(this);else{const n=v;v=null,I(()=>G(this),!1),v=n}if(g){const n=this.observers?this.observers.length:0;g.sources?(g.sources.push(this),g.sourceSlots.push(n)):(g.sources=[this],g.sourceSlots=[n]),this.observers?(this.observers.push(g),this.observerSlots.push(g.sources.length-1)):(this.observers=[g],this.observerSlots=[g.sources.length-1])}return this.value}function be(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&I(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],l=N&&N.running;l&&N.disposed.has(i),(l&&!i.tState||!l&&!i.state)&&(i.pure?v.push(i):E.push(i),i.observers&&Se(i)),l||(i.state=x)}if(v.length>1e6)throw v=[],new Error},!1)),n}function O(e){if(!e.fn)return;oe(e);const n=b,t=g,s=ie;g=b=e,Me(e,e.value,s),g=t,b=n}function Me(e,n,t){let s;try{s=e.fn(n)}catch(r){e.pure&&(e.state=x),xe(r)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?be(e,s):e.value=s,e.updatedAt=t)}function Q(e,n,t,s=x,r){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:b,context:null,pure:t};return b===null||b!==ve&&(b.owned?b.owned.push(i):b.owned=[i]),i}function z(e){const n=N;if(e.state===0||n)return;if(e.state===H||n)return G(e);if(e.suspense&&A(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ie);)(e.state||n)&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===x||n)O(e);else if(e.state===H||n){const r=v;v=null,I(()=>G(e,t[0]),!1),v=r}}function I(e,n){if(v)return e();let t=!1;n||(v=[]),E?t=!0:E=[],ie++;try{const s=e();return He(t),s}catch(s){v||(E=null),xe(s)}}function He(e){if(v&&($e(v),v=null),e)return;const n=E;E=null,n.length&&I(()=>ye(n),!1)}function $e(e){for(let n=0;n<e.length;n++)z(e[n])}function ze(e){let n,t=0;for(n=0;n<e.length;n++){const s=e[n];s.user?e[t++]=s:z(s)}for(h.context&&k(),n=0;n<t;n++)z(e[n])}function G(e,n){const t=N;e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];r.sources&&(r.state===x||t?r!==n&&z(r):(r.state===H||t)&&G(r,n))}}function Se(e){const n=N;for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];(!s.state||n)&&(s.state=H,s.pure?v.push(s):E.push(s),s.observers&&Se(s))}}function oe(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const i=r.pop(),l=t.observerSlots.pop();s<r.length&&(i.sourceSlots[l]=s,r[s]=i,t.observerSlots[s]=l)}}if(e.owned){for(n=0;n<e.owned.length;n++)oe(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function Ee(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function xe(e){throw e=Ee(e),e}let Ge=!1;function w(e,n){if(Ge&&h.context){const t=h.context;k(je());const s=A(()=>e(n||{}));return k(t),s}return A(()=>e(n||{}))}function Ae(e){let n,t;const s=r=>{const i=h.context;if(i){const[o,a]=R();(t||(t=e())).then(c=>{k(i),a(()=>c.default),k()}),n=o}else if(n){const o=n();if(o)return o(r)}else{const[o]=De(()=>(t||(t=e())).then(a=>a.default));n=o}let l;return _e(()=>(l=n())&&A(()=>{if(!i)return l(r);const o=h.context;k(i);const a=l(r);return k(o),a}))};return s.preload=()=>t||((t=e()).then(r=>n=()=>r.default),t),s}function We(e,n,t){let s=t.length,r=n.length,i=s,l=0,o=0,a=n[r-1].nextSibling,c=null;for(;l<r||o<i;){if(n[l]===t[o]){l++,o++;continue}for(;n[r-1]===t[i-1];)r--,i--;if(r===l){const u=i<s?o?t[o-1].nextSibling:t[i-o]:a;for(;o<i;)e.insertBefore(t[o++],u)}else if(i===o)for(;l<r;)(!c||!c.has(n[l]))&&n[l].remove(),l++;else if(n[l]===t[i-1]&&t[o]===n[r-1]){const u=n[--r].nextSibling;e.insertBefore(t[o++],n[l++].nextSibling),e.insertBefore(t[--i],u),n[r]=t[i]}else{if(!c){c=new Map;let f=o;for(;f<i;)c.set(t[f],f++)}const u=c.get(n[l]);if(u!=null)if(o<u&&u<i){let f=l,m=1,C;for(;++f<r&&f<i&&!((C=c.get(n[f]))==null||C!==u+m);)m++;if(m>u-o){const q=n[l];for(;o<u;)e.insertBefore(t[o++],q)}else e.replaceChild(t[o++],n[l++])}else l++;else n[l++].remove()}}}const fe="_$DX_DELEGATE";function Ke(e,n,t,s={}){let r;return Be(i=>{r=i,n===document?e():P(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{r(),n.textContent=""}}function T(e,n,t){const s=document.createElement("template");s.innerHTML=e;let r=s.content.firstChild;return t&&(r=r.firstChild),r}function X(e,n=window.document){const t=n[fe]||(n[fe]=new Set);for(let s=0,r=e.length;s<r;s++){const i=e[s];t.has(i)||(t.add(i),n.addEventListener(i,Qe))}}function W(e,n,t){t==null?e.removeAttribute(n):e.setAttribute(n,t)}function $(e,n){n==null?e.removeAttribute("class"):e.className=n}function j(e,n,t,s){if(s)Array.isArray(t)?(e[`$$${n}`]=t[0],e[`$$${n}Data`]=t[1]):e[`$$${n}`]=t;else if(Array.isArray(t)){const r=t[0];e.addEventListener(n,t[0]=i=>r.call(e,t[1],i))}else e.addEventListener(n,t)}function Pe(e,n,t){if(!n)return t?W(e,"style"):n;const s=e.style;if(typeof n=="string")return s.cssText=n;typeof t=="string"&&(s.cssText=t=void 0),t||(t={}),n||(n={});let r,i;for(i in t)n[i]==null&&s.removeProperty(i),delete t[i];for(i in n)r=n[i],r!==t[i]&&(s.setProperty(i,r),t[i]=r);return t}function Ct(e,n,t){return A(()=>e(n,t))}function P(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return K(e,n,s,t);S(r=>K(e,n(),r,t),s)}function Qe(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),h.registry&&!h.done&&(h.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));t;){const s=t[n];if(s&&!t.disabled){const r=t[`${n}Data`];if(r!==void 0?s.call(t,r,e):s.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function K(e,n,t,s,r){for(h.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const i=typeof n,l=s!==void 0;if(e=l&&t[0]&&t[0].parentNode||e,i==="string"||i==="number"){if(h.context)return t;if(i==="number"&&(n=n.toString()),l){let o=t[0];o&&o.nodeType===3?o.data=n:o=document.createTextNode(n),t=L(e,t,s,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||i==="boolean"){if(h.context)return t;t=L(e,t,s)}else{if(i==="function")return S(()=>{let o=n();for(;typeof o=="function";)o=o();t=K(e,o,t,s)}),()=>t;if(Array.isArray(n)){const o=[],a=t&&Array.isArray(t);if(se(o,n,t,r))return S(()=>t=K(e,o,t,s,!0)),()=>t;if(h.context){if(!o.length)return t;for(let c=0;c<o.length;c++)if(o[c].parentNode)return t=o}if(o.length===0){if(t=L(e,t,s),l)return t}else a?t.length===0?de(e,o,s):We(e,t,o):(t&&L(e),de(e,o));t=o}else if(n instanceof Node){if(h.context&&n.parentNode)return t=l?[n]:n;if(Array.isArray(t)){if(l)return t=L(e,t,s,n);L(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function se(e,n,t,s){let r=!1;for(let i=0,l=n.length;i<l;i++){let o=n[i],a=t&&t[i];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))r=se(e,o,a)||r;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();r=se(e,Array.isArray(o)?o:[o],Array.isArray(a)?a:[a])||r}else e.push(o),r=!0;else{const c=String(o);a&&a.nodeType===3&&a.data===c?e.push(a):e.push(document.createTextNode(c))}}return r}function de(e,n,t=null){for(let s=0,r=n.length;s<r;s++)e.insertBefore(n[s],t)}function L(e,n,t,s){if(t===void 0)return e.textContent="";const r=s||document.createTextNode("");if(n.length){let i=!1;for(let l=n.length-1;l>=0;l--){const o=n[l];if(r!==o){const a=o.parentNode===e;!i&&!l?a?e.replaceChild(r,o):e.insertBefore(r,t):a&&o.remove()}else i=!0}}else e.insertBefore(r,t);return[r]}let Xe=()=>({events:{},emit(e,...n){let t=this.events[e]||[];for(let s=0,r=t.length;s<r;s++)t[s](...n)},on(e,n){return this.events[e]?.push(n)||(this.events[e]=[n]),()=>{this.events[e]=this.events[e]?.filter(t=>n!==t)}}});class Je{emitter;constructor(){this.emitter=Xe()}emit(n,...t){this.emitter.emit(n,...t)}on(n,t){return this.emitter.on(n,t)}}function te(e,n=!1){if(e==="\\"||e==="/")return"/";const t=e.length;if(t<=1)return e;var s="";if(t>4&&e[3]==="\\"){var r=e[2];(r==="?"||r===".")&&e.slice(0,2)==="\\\\"&&(e=e.slice(2),s="//")}var i=e.split(/[/\\]+/);return n!==!1&&i[i.length-1]===""&&i.pop(),s+i.join("/")}function Ye(){const e=(s,r)=>s.toString(16).padStart(r,"0"),n=crypto.getRandomValues(new Uint8Array(16));n[6]=n[6]&15|64,n[8]=n[8]&63|128;const t=new DataView(n.buffer);return`${e(t.getUint32(0),8)}-${e(t.getUint16(4),4)}-${e(t.getUint16(6),4)}-${e(t.getUint16(8),4)}-${e(t.getUint32(10),8)}${e(t.getUint16(14),4)}`}const Ze="https://ipinfo.io/json",D={source:window.location.pathname,search:window.location.search,lowercase:!1,fallback:()=>{}};class et extends Je{options=D;registeredPaths=[];constructor(){super(),this.language=navigator.language||navigator.userLanguage,window.onpopstate=n=>this.onPathState.bind(this)(n.state)}define(n){if(this.options.source=n.source??D.source,this.options.search=n.search??D.search,this.options.lowercase=n.lowercase??D.lowercase,n.fallback){//! Remvoe the event listener if it exists
this.options.fallback&&this.options.fallback(""),this.options.fallback=this.on("404",t=>{!n.fallback||n.fallback(t)})}}async userInfo(){const n=await fetch(Ze);return n.status!=200?!1:await n.json()}async userFilter(n,t){const s=await this.userInfo();if(!s)return!1;const r=i=>t.includes(s[i]);switch(n){case"probability":return Math.random()<t;case"user-agent":return t.includes(navigator.userAgent);case"ip":return r("ip");case"hostname":return r("hostname");case"city":return r("city");case"region":return r("region");case"country":return r("country");case"loc":return r("loc");case"org":return r("org");case"postal":return r("postal");case"timezone":return r("timezone")}return!1}getQuery(n){return new Proxy(new URLSearchParams(this.search),{get:(t,s)=>t.get(String(s))})[n]}add(n,t,s="#app",r=!0,i=0){const l=()=>{const a=document.querySelector(s);r&&a&&(a.innerHTML="")},o=async a=>{const c=this.matchPath(n,a),u=document.querySelector(s);if(c.match){const f=c.dynamic??void 0;this.dynamic=f;const m=await t(f);return m&&u&&Ke(()=>m,u),!0}};return this.registeredPaths.push({clear:l,add:o,priority:i}),{add:o,clear:l}}async update(n=this.options.source,t="",s=!0){n=te(n);const r=t===""||!t?n===this.path||!this.path?n+this.options.search:n:n+t;window.history.pushState({path:n,search:t},"",r),s&&this.onPathState({path:n,search:t})}async onPathState(n){if(!n)return;const{path:t,search:s}=n,r=this.registeredPaths.sort((c,u)=>c.priority-u.priority),i=[],l=this.options.lowercase?t.toLowerCase():t;this.emit("path",t);for(var o of r)o.clear();for(var o of r){const u=await o.add(l);i.push(u)}this.search=s,this.path=t;const a=!i.includes(!0);a&&this.emit("404",t),this.emit("load",t,a)}matchPath(n,t){n=te(n),t=te(t);const s=/\[(\w+)\]/g,r=/\*/g,i=n.replaceAll(s,"([^/]+)").replaceAll(r,"[\\s\\S]*"),l=[...t.matchAll(new RegExp(i,"g"))],o=[["",""],...n.matchAll(s)].map(([f,m])=>m);if(l.length<=0)return{match:!1};if(!(l[0][0]===t))return{match:!1};if(o.length<=0)return{match:!0};const c=l[0];if(c.length!=o.length)return{match:!1};const u={};return c.forEach((f,m)=>{m!=0&&(u[o[m]]=decodeURIComponent(f))}),{match:!0,dynamic:u}}}const _=new et;Ye();X(["click"]);const tt="/assets/favicon.503f0320.svg";const nt="_navbar_1szth_1",st="_icon_1szth_33",rt="_iconContainer_1szth_44",F={navbar:nt,icon:st,iconContainer:rt},it="_action_137gp_1",ot="_read_137gp_1",Ce={action:it,read:ot},ke=T("<p></p>"),kt=e=>{const n=e.class??"";return(()=>{const t=ke.cloneNode(!0);return j(t,"click",e.onclick,!0),P(t,()=>e.children),S(s=>{const r=e.style,i=[Ce.action,n].join(" ");return s._v$=Pe(t,r,s._v$),i!==s._v$2&&$(t,s._v$2=i),s},{_v$:void 0,_v$2:void 0}),t})()},lt=e=>{const n=e.class??"";return(()=>{const t=ke.cloneNode(!0);return j(t,"click",e.onclick,!0),P(t,()=>e.children),S(s=>{const r=e.style,i=[Ce.read,n].join(" ");return s._v$3=Pe(t,r,s._v$3),i!==s._v$4&&$(t,s._v$4=i),s},{_v$3:void 0,_v$4:void 0}),t})()};X(["click"]);const ct=T('<nav><div><img alt="SGS markedsf\xF8ring ikon"></div><div></div></nav>'),at=T("<p></p>"),ut=({icon:e,iconOnClick:n,children:t})=>(()=>{const s=ct.cloneNode(!0),r=s.firstChild,i=r.firstChild,l=r.nextSibling;return j(i,"click",n,!0),W(i,"src",e),P(l,t),S(o=>{const a=F.navbar,c=F.iconContainer,u=F.icon;return a!==o._v$&&$(s,o._v$=a),c!==o._v$2&&$(r,o._v$2=c),u!==o._v$3&&$(i,o._v$3=u),o},{_v$:void 0,_v$2:void 0,_v$3:void 0}),s})(),he=({button:e,onclick:n,children:t})=>{const s=e?w(lt,{children:t}):t;return(()=>{const r=at.cloneNode(!0);return j(r,"click",n,!0),P(r,s),S(()=>$(r,F.item)),r})()};X(["click"]);const ft="_footer_10zcc_1",dt="_element_10zcc_40",ht="_pillars_10zcc_50",gt="_leftPillar_10zcc_55",pt="_rightPillar_10zcc_63",V={footer:ft,element:dt,pillars:ht,leftPillar:gt,rightPillar:pt},mt="/assets/bottom-left-pillar.627a57e5.svg",yt="/assets/bottom-right-pillar.714c5779.svg",vt=T("<p></p>"),_t=T("<footer><div></div><p></p></footer>"),wt=T('<div><img alt="Markedsf\xF8ring pillar design."><img alt="Markedsf\xF8ring pillar design."></div>'),ne=({onclick:e,children:n})=>(()=>{const t=vt.cloneNode(!0);return j(t,"click",e,!0),P(t,n),S(()=>$(t,V.element)),t})(),bt=({copywrite:e,pillars:n,children:t})=>[(()=>{const s=_t.cloneNode(!0),r=s.firstChild,i=r.nextSibling;return P(r,t),P(i,e),S(()=>$(s,V.footer)),s})(),n?(()=>{const s=wt.cloneNode(!0),r=s.firstChild,i=r.nextSibling;return W(r,"src",mt),W(i,"src",yt),S(l=>{const o=V.pillars,a=V.leftPillar,c=V.rightPillar;return o!==l._v$&&$(s,l._v$=o),a!==l._v$2&&$(r,l._v$2=a),c!==l._v$3&&$(i,l._v$3=c),l},{_v$:void 0,_v$2:void 0,_v$3:void 0}),s})():""];X(["click"]);const Ne=()=>{document.getElementById("contactScroll")?.scrollIntoView({behavior:"smooth",block:"center"})},$t=()=>{window.scrollTo({top:0,behavior:"smooth"})},ge=e=>{e?($t(),_.update("/","",!1)):_.update("/","",!0)},pe=e=>{e||_.update("/","?scroll=contact"),Ne()},me=()=>{_.update("/whyus")};_.on("load",()=>{setTimeout(()=>{const e=new Proxy(new URLSearchParams(window.location.search),{get:(n,t)=>n.get(String(t))});e.scroll=="contact"&&(Ne(),_.update("/","?",!1)),e.ref=="sMQVch"&&(St(),_.update("/","?",!1))},100)});_.on("404",()=>{_.update("404")});_.on("path",()=>{document.getElementById("fade")});function St(){window.eval(`
    (function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script")
    ;r.type="text/javascript"
    ;r.integrity="sha384-+EO59vL/X7v6VE2s6/F4HxfHlK0nDUVWKVg8K9oUlvffAeeaShVBmbORTC2D3UF+"
    ;r.crossOrigin="anonymous";r.async=true
    ;r.src="https://cdn.amplitude.com/libs/amplitude-8.17.0-min.gz.js"
    ;r.onload=function(){if(!e.amplitude.runQueuedFunctions){
    console.log("[Amplitude] Error: could not load SDK")}}
    ;var i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)
    ;function s(e,t){e.prototype[t]=function(){
    this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));return this}}
    var o=function(){this._q=[];return this}
    ;var a=["add","append","clearAll","prepend","set","setOnce","unset","preInsert","postInsert","remove"]
    ;for(var c=0;c<a.length;c++){s(o,a[c])}n.Identify=o;var u=function(){this._q=[]
    ;return this}
    ;var l=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"]
    ;for(var p=0;p<l.length;p++){s(u,l[p])}n.Revenue=u
    ;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","enableTracking","setGlobalUserProperties","identify","clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId","groupIdentify","onInit","logEventWithTimestamp","logEventWithGroups","setSessionId","resetSessionId"]
    ;function v(e){function t(t){e[t]=function(){
    e._q.push([t].concat(Array.prototype.slice.call(arguments,0)))}}
    for(var n=0;n<d.length;n++){t(d[n])}}v(n);n.getInstance=function(e){
    e=(!e||e.length===0?"$default_instance":e).toLowerCase()
    ;if(!Object.prototype.hasOwnProperty.call(n._iq,e)){n._iq[e]={_q:[]};v(n._iq[e])
    }return n._iq[e]};e.amplitude=n})(window,document);
  
    amplitude.getInstance().init("fc9a7209b5ba580adf0617fd4ae57cba")
    amplitude.getInstance().logEvent('En bruker trykket p\xE5 SGS linken (ny nettside) sMQVch')
    `)}const Et=T('<div class="fade" id="fade"></div>');function Ie({children:e,isRouteHome:n}){return[Et.cloneNode(!0),w(ut,{icon:tt,iconOnClick:()=>ge(n),get children(){return[w(he,{onclick:me,children:"Hvorfor oss"}),w(he,{button:!0,onclick:()=>pe(n),children:"Kontakt"})]}}),e,w(bt,{copywrite:"\xA9 SGS, Inc. 2022. Storhet gjennom samerbeid.",pillars:n,get children(){return[w(ne,{onclick:()=>pe(n),children:"Kontakt"}),w(ne,{onclick:()=>ge(n),children:"Hjem"}),w(ne,{onclick:me,children:"Hvorfor oss"})]}})]}const xt=Ae(()=>re(()=>import("./home.5af494d8.js"),["assets/home.5af494d8.js","assets/home.4aca66f2.css"])),At=Ae(()=>re(()=>import("./whyus.778572ca.js"),["assets/whyus.778572ca.js","assets/whyus.bb010bcf.css"]));_.add("/",async()=>w(Ie,{isRouteHome:!0,get children(){return w(xt,{})}}));_.add("/whyus",async()=>w(Ie,{isRouteHome:!1,get children(){return w(At,{})}}));_.add("/404",async()=>{const e=(await re(()=>import("./404.4fdcea23.js"),["assets/404.4fdcea23.js","assets/404.d36ebe9f.css"])).default;return w(e,{})});_.update();export{kt as A,lt as R,$ as a,w as b,S as c,pe as d,tt as e,R as f,Pt as g,ge as h,P as i,W as s,T as t,Ct as u,me as w};
