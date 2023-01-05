(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const Fe="modulepreload",Be=function(t){return"/"+t},ye={},X=function(e,n,o){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Be(s),s in ye)return;ye[s]=!0;const i=s.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(!!o)for(let f=r.length-1;f>=0;f--){const p=r[f];if(p.href===s&&(!i||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":Fe,i||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),i)return new Promise((f,p)=>{u.addEventListener("load",f),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},$={};function oe(t){$.context=t}function Oe(){return{...$.context,id:`${$.context.id}${$.context.count++}-`,count:0}}const Ve=(t,e)=>t===e,$e={equals:Ve};let Ae=Ie;const I=1,M=2,Se={owned:null,cleanups:null,context:null,owner:null};var b=null;let L=null,v=null,y=null,S=null,ie=0;function ze(t,e){const n=v,o=b,r=t.length===0,s=r?Se:{owned:null,cleanups:null,context:null,owner:e||o},i=r?t:()=>t(()=>H(()=>le(s)));b=s,v=null;try{return F(i,!0)}finally{v=n,b=o}}function qe(t,e){e=e?Object.assign({},$e,e):$e;const n={value:t,observers:null,observerSlots:null,comparator:e.equals||void 0},o=r=>(typeof r=="function"&&(r=r(n.value)),Pe(n,r));return[Me.bind(n),o]}function h(t,e,n){const o=Ne(t,e,!1,I);Y(o)}function Tn(t,e,n){Ae=Ke;const o=Ne(t,e,!1,I);o.user=!0,S?S.push(o):Y(o)}function H(t){const e=v;v=null;try{return t()}finally{v=e}}function Me(){const t=L;if(this.sources&&(this.state||t))if(this.state===I||t)Y(this);else{const e=y;y=null,F(()=>W(this),!1),y=e}if(v){const e=this.observers?this.observers.length:0;v.sources?(v.sources.push(this),v.sourceSlots.push(e)):(v.sources=[this],v.sourceSlots=[e]),this.observers?(this.observers.push(v),this.observerSlots.push(v.sources.length-1)):(this.observers=[v],this.observerSlots=[v.sources.length-1])}return this.value}function Pe(t,e,n){let o=t.value;return(!t.comparator||!t.comparator(o,e))&&(t.value=e,t.observers&&t.observers.length&&F(()=>{for(let r=0;r<t.observers.length;r+=1){const s=t.observers[r],i=L&&L.running;i&&L.disposed.has(s),(i&&!s.tState||!i&&!s.state)&&(s.pure?y.push(s):S.push(s),s.observers&&Le(s)),i||(s.state=I)}if(y.length>1e6)throw y=[],new Error},!1)),e}function Y(t){if(!t.fn)return;le(t);const e=b,n=v,o=ie;v=b=t,Qe(t,t.value,o),v=n,b=e}function Qe(t,e,n){let o;try{o=t.fn(e)}catch(r){t.pure&&(t.state=I),Ce(r)}(!t.updatedAt||t.updatedAt<=n)&&(t.updatedAt!=null&&"observers"in t?Pe(t,o):t.value=o,t.updatedAt=n)}function Ne(t,e,n,o=I,r){const s={fn:t,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:b,context:null,pure:n};return b===null||b!==Se&&(b.owned?b.owned.push(s):b.owned=[s]),s}function Q(t){const e=L;if(t.state===0||e)return;if(t.state===M||e)return W(t);if(t.suspense&&H(t.suspense.inFallback))return t.suspense.effects.push(t);const n=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<ie);)(t.state||e)&&n.push(t);for(let o=n.length-1;o>=0;o--)if(t=n[o],t.state===I||e)Y(t);else if(t.state===M||e){const r=y;y=null,F(()=>W(t,n[0]),!1),y=r}}function F(t,e){if(y)return t();let n=!1;e||(y=[]),S?n=!0:S=[],ie++;try{const o=t();return We(n),o}catch(o){y||(S=null),Ce(o)}}function We(t){if(y&&(Ie(y),y=null),t)return;const e=S;S=null,e.length&&F(()=>Ae(e),!1)}function Ie(t){for(let e=0;e<t.length;e++)Q(t[e])}function Ke(t){let e,n=0;for(e=0;e<t.length;e++){const o=t[e];o.user?t[n++]=o:Q(o)}for($.context&&oe(),e=0;e<n;e++)Q(t[e])}function W(t,e){const n=L;t.state=0;for(let o=0;o<t.sources.length;o+=1){const r=t.sources[o];r.sources&&(r.state===I||n?r!==e&&Q(r):(r.state===M||n)&&W(r,e))}}function Le(t){const e=L;for(let n=0;n<t.observers.length;n+=1){const o=t.observers[n];(!o.state||e)&&(o.state=M,o.pure?y.push(o):S.push(o),o.observers&&Le(o))}}function le(t){let e;if(t.sources)for(;t.sources.length;){const n=t.sources.pop(),o=t.sourceSlots.pop(),r=n.observers;if(r&&r.length){const s=r.pop(),i=n.observerSlots.pop();o<r.length&&(s.sourceSlots[i]=o,r[o]=s,n.observerSlots[o]=i)}}if(t.owned){for(e=0;e<t.owned.length;e++)le(t.owned[e]);t.owned=null}if(t.cleanups){for(e=0;e<t.cleanups.length;e++)t.cleanups[e]();t.cleanups=null}t.state=0,t.context=null}function Ge(t){return t instanceof Error||typeof t=="string"?t:new Error("Unknown error")}function Ce(t){throw t=Ge(t),t}let Xe=!1;function a(t,e){if(Xe&&$.context){const n=$.context;oe(Oe());const o=H(()=>t(e||{}));return oe(n),o}return H(()=>t(e||{}))}function Ye(t,e,n){let o=n.length,r=e.length,s=o,i=0,l=0,c=e[r-1].nextSibling,u=null;for(;i<r||l<s;){if(e[i]===n[l]){i++,l++;continue}for(;e[r-1]===n[s-1];)r--,s--;if(r===i){const f=s<o?l?n[l-1].nextSibling:n[s-l]:c;for(;l<s;)t.insertBefore(n[l++],f)}else if(s===l)for(;i<r;)(!u||!u.has(e[i]))&&e[i].remove(),i++;else if(e[i]===n[s-1]&&n[l]===e[r-1]){const f=e[--r].nextSibling;t.insertBefore(n[l++],e[i++].nextSibling),t.insertBefore(n[--s],f),e[r]=n[s]}else{if(!u){u=new Map;let p=l;for(;p<s;)u.set(n[p],p++)}const f=u.get(e[i]);if(f!=null)if(l<f&&f<s){let p=i,k=1,E;for(;++p<r&&p<s&&!((E=u.get(e[p]))==null||E!==f+k);)k++;if(k>f-l){const U=e[i];for(;l<f;)t.insertBefore(n[l++],U)}else t.replaceChild(n[l++],e[i++])}else i++;else e[i++].remove()}}}const xe="_$DX_DELEGATE";function Je(t,e,n,o={}){let r;return ze(s=>{r=s,e===document?t():m(e,t(),e.firstChild?null:void 0,n)},o.owner),()=>{r(),e.textContent=""}}function _(t,e,n){const o=document.createElement("template");o.innerHTML=t;let r=o.content.firstChild;return n&&(r=r.firstChild),r}function ae(t,e=window.document){const n=e[xe]||(e[xe]=new Set);for(let o=0,r=t.length;o<r;o++){const s=t[o];n.has(s)||(n.add(s),e.addEventListener(s,Ze))}}function C(t,e,n){n==null?t.removeAttribute(e):t.setAttribute(e,n)}function d(t,e){e==null?t.removeAttribute("class"):t.className=e}function B(t,e,n,o){if(o)Array.isArray(n)?(t[`$$${e}`]=n[0],t[`$$${e}Data`]=n[1]):t[`$$${e}`]=n;else if(Array.isArray(n)){const r=n[0];t.addEventListener(e,n[0]=s=>r.call(t,n[1],s))}else t.addEventListener(e,n)}function ce(t,e,n){if(!e)return n?C(t,"style"):e;const o=t.style;if(typeof e=="string")return o.cssText=e;typeof n=="string"&&(o.cssText=n=void 0),n||(n={}),e||(e={});let r,s;for(s in n)e[s]==null&&o.removeProperty(s),delete n[s];for(s in e)r=e[s],r!==n[s]&&(o.setProperty(s,r),n[s]=r);return n}function An(t,e,n){return H(()=>t(e,n))}function m(t,e,n,o){if(n!==void 0&&!o&&(o=[]),typeof e!="function")return K(t,e,o,n);h(r=>K(t,e(),r,n),o)}function Ze(t){const e=`$$${t.type}`;let n=t.composedPath&&t.composedPath()[0]||t.target;for(t.target!==n&&Object.defineProperty(t,"target",{configurable:!0,value:n}),Object.defineProperty(t,"currentTarget",{configurable:!0,get(){return n||document}}),$.registry&&!$.done&&($.done=!0,document.querySelectorAll("[id^=pl-]").forEach(o=>o.remove()));n;){const o=n[e];if(o&&!n.disabled){const r=n[`${e}Data`];if(r!==void 0?o.call(n,r,t):o.call(n,t),t.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function K(t,e,n,o,r){for($.context&&!n&&(n=[...t.childNodes]);typeof n=="function";)n=n();if(e===n)return n;const s=typeof e,i=o!==void 0;if(t=i&&n[0]&&n[0].parentNode||t,s==="string"||s==="number"){if($.context)return n;if(s==="number"&&(e=e.toString()),i){let l=n[0];l&&l.nodeType===3?l.data=e:l=document.createTextNode(e),n=R(t,n,o,l)}else n!==""&&typeof n=="string"?n=t.firstChild.data=e:n=t.textContent=e}else if(e==null||s==="boolean"){if($.context)return n;n=R(t,n,o)}else{if(s==="function")return h(()=>{let l=e();for(;typeof l=="function";)l=l();n=K(t,l,n,o)}),()=>n;if(Array.isArray(e)){const l=[],c=n&&Array.isArray(n);if(se(l,e,n,r))return h(()=>n=K(t,l,n,o,!0)),()=>n;if($.context){if(!l.length)return n;for(let u=0;u<l.length;u++)if(l[u].parentNode)return n=l}if(l.length===0){if(n=R(t,n,o),i)return n}else c?n.length===0?we(t,l,o):Ye(t,n,l):(n&&R(t),we(t,l));n=l}else if(e instanceof Node){if($.context&&e.parentNode)return n=i?[e]:e;if(Array.isArray(n)){if(i)return n=R(t,n,o,e);R(t,n,null,e)}else n==null||n===""||!t.firstChild?t.appendChild(e):t.replaceChild(e,t.firstChild);n=e}}return n}function se(t,e,n,o){let r=!1;for(let s=0,i=e.length;s<i;s++){let l=e[s],c=n&&n[s];if(l instanceof Node)t.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))r=se(t,l,c)||r;else if(typeof l=="function")if(o){for(;typeof l=="function";)l=l();r=se(t,Array.isArray(l)?l:[l],Array.isArray(c)?c:[c])||r}else t.push(l),r=!0;else{const u=String(l);c&&c.nodeType===3&&c.data===u?t.push(c):t.push(document.createTextNode(u))}}return r}function we(t,e,n=null){for(let o=0,r=e.length;o<r;o++)t.insertBefore(e[o],n)}function R(t,e,n,o){if(n===void 0)return t.textContent="";const r=o||document.createTextNode("");if(e.length){let s=!1;for(let i=e.length-1;i>=0;i--){const l=e[i];if(r!==l){const c=l.parentNode===t;!s&&!i?c?t.replaceChild(r,l):t.insertBefore(r,n):c&&l.remove()}else s=!0}}else t.insertBefore(r,n);return[r]}var et=function(e,n){n===!0&&(n=0);var o="";if(typeof e=="string")try{o=new URL(e).protocol}catch{}else e&&e.constructor===URL&&(o=e.protocol);var r=o.split(/\:|\+/).filter(Boolean);return typeof n=="number"?r[n]:r},tt=et;function nt(t){var e={protocols:[],protocol:null,port:null,resource:"",host:"",user:"",password:"",pathname:"",hash:"",search:"",href:t,query:{},parse_failed:!1};try{var n=new URL(t);e.protocols=tt(n),e.protocol=e.protocols[0],e.port=n.port,e.resource=n.hostname,e.host=n.host,e.user=n.username||"",e.password=n.password||"",e.pathname=n.pathname,e.hash=n.hash.slice(1),e.search=n.search.slice(1),e.href=n.href,e.query=Object.fromEntries(n.searchParams)}catch{e.protocols=["file"],e.protocol=e.protocols[0],e.port="",e.resource="",e.user="",e.pathname="",e.hash="",e.search="",e.href=t,e.query={},e.parse_failed=!0}return e}var rt=nt;const ot="text/plain",st="us-ascii",ke=(t,e)=>e.some(n=>n instanceof RegExp?n.test(t):n===t),it=(t,{stripHash:e})=>{const n=/^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(t);if(!n)throw new Error(`Invalid URL: ${t}`);let{type:o,data:r,hash:s}=n.groups;const i=o.split(";");s=e?"":s;let l=!1;i[i.length-1]==="base64"&&(i.pop(),l=!0);const c=(i.shift()||"").toLowerCase(),f=[...i.map(p=>{let[k,E=""]=p.split("=").map(U=>U.trim());return k==="charset"&&(E=E.toLowerCase(),E===st)?"":`${k}${E?`=${E}`:""}`}).filter(Boolean)];return l&&f.push("base64"),(f.length>0||c&&c!==ot)&&f.unshift(c),`data:${f.join(";")},${l?r.trim():r}${s?`#${s}`:""}`};function lt(t,e){if(e={defaultProtocol:"http:",normalizeProtocol:!0,forceHttp:!1,forceHttps:!1,stripAuthentication:!0,stripHash:!1,stripTextFragment:!0,stripWWW:!0,removeQueryParameters:[/^utm_\w+/i],removeTrailingSlash:!0,removeSingleSlash:!0,removeDirectoryIndex:!1,sortQueryParameters:!0,...e},t=t.trim(),/^data:/i.test(t))return it(t,e);if(/^view-source:/i.test(t))throw new Error("`view-source:` is not supported as it is a non-standard protocol");const n=t.startsWith("//");!n&&/^\.*\//.test(t)||(t=t.replace(/^(?!(?:\w+:)?\/\/)|^\/\//,e.defaultProtocol));const r=new URL(t);if(e.forceHttp&&e.forceHttps)throw new Error("The `forceHttp` and `forceHttps` options cannot be used together");if(e.forceHttp&&r.protocol==="https:"&&(r.protocol="http:"),e.forceHttps&&r.protocol==="http:"&&(r.protocol="https:"),e.stripAuthentication&&(r.username="",r.password=""),e.stripHash?r.hash="":e.stripTextFragment&&(r.hash=r.hash.replace(/#?:~:text.*?$/i,"")),r.pathname){const i=/\b[a-z][a-z\d+\-.]{1,50}:\/\//g;let l=0,c="";for(;;){const f=i.exec(r.pathname);if(!f)break;const p=f[0],k=f.index,E=r.pathname.slice(l,k);c+=E.replace(/\/{2,}/g,"/"),c+=p,l=k+p.length}const u=r.pathname.slice(l,r.pathname.length);c+=u.replace(/\/{2,}/g,"/"),r.pathname=c}if(r.pathname)try{r.pathname=decodeURI(r.pathname)}catch{}if(e.removeDirectoryIndex===!0&&(e.removeDirectoryIndex=[/^index\.[a-z]+$/]),Array.isArray(e.removeDirectoryIndex)&&e.removeDirectoryIndex.length>0){let i=r.pathname.split("/");const l=i[i.length-1];ke(l,e.removeDirectoryIndex)&&(i=i.slice(0,-1),r.pathname=i.slice(1).join("/")+"/")}if(r.hostname&&(r.hostname=r.hostname.replace(/\.$/,""),e.stripWWW&&/^www\.(?!www\.)[a-z\-\d]{1,63}\.[a-z.\-\d]{2,63}$/.test(r.hostname)&&(r.hostname=r.hostname.replace(/^www\./,""))),Array.isArray(e.removeQueryParameters))for(const i of[...r.searchParams.keys()])ke(i,e.removeQueryParameters)&&r.searchParams.delete(i);if(e.removeQueryParameters===!0&&(r.search=""),e.sortQueryParameters){r.searchParams.sort();try{r.search=decodeURIComponent(r.search)}catch{}}e.removeTrailingSlash&&(r.pathname=r.pathname.replace(/\/$/,""));const s=t;return t=r.toString(),!e.removeSingleSlash&&r.pathname==="/"&&!s.endsWith("/")&&r.hash===""&&(t=t.replace(/\/$/,"")),(e.removeTrailingSlash||r.pathname==="/")&&r.hash===""&&e.removeSingleSlash&&(t=t.replace(/\/$/,"")),n&&!e.normalizeProtocol&&(t=t.replace(/^http:\/\//,"//")),e.stripProtocol&&(t=t.replace(/^(?:https?:)?\/\//,"")),t}const G=(t,e=!1)=>{const n=/^(?:([a-z_][a-z0-9_-]{0,31})@|https?:\/\/)([\w\.\-@]+)[\/:]([\~,\.\w,\-,\_,\/]+?(?:\.git|\/)?)$/,o=s=>{const i=new Error(s);throw i.subject_url=t,i};(typeof t!="string"||!t.trim())&&o("Invalid url."),t.length>G.MAX_INPUT_LENGTH&&o("Input exceeds maximum length. If needed, change the value of parseUrl.MAX_INPUT_LENGTH."),e&&(typeof e!="object"&&(e={stripHash:!1}),t=lt(t,e));const r=rt(t);if(r.parse_failed){const s=r.href.match(n);s?(r.protocols=["ssh"],r.protocol="ssh",r.resource=s[2],r.host=s[2],r.user=s[1],r.pathname=`/${s[3]}`,r.parse_failed=!1):o("URL parsing failed.")}return r};G.MAX_INPUT_LENGTH=2048;function at(t,e=!1){if(t==="\\"||t==="/")return"/";const n=t.length;if(n<=1)return t;var o="";if(n>4&&t[3]==="\\"){var r=t[2];(r==="?"||r===".")&&t.slice(0,2)==="\\\\"&&(t=t.slice(2),o="//")}var s=t.split(/[/\\]+/);return e!==!1&&s[s.length-1]===""&&s.pop(),o+s.join("/")}const ct=(t,e)=>Array.from(Array(Math.max(e.length,t.length)),(n,o)=>[t[o],e[o]]);let ut=()=>({events:{},emit(t,...e){let n=this.events[t]||[];for(let o=0,r=n.length;o<r;o++)n[o](...e)},on(t,e){return this.events[t]?.push(e)||(this.events[t]=[e]),()=>{this.events[t]=this.events[t]?.filter(n=>e!==n)}}});class ft{emitter;constructor(){this.emitter=ut()}emit(e,...n){this.emitter.emit(e,...n)}on(e,n){return this.emitter.on(e,n)}}var Z=0;const Ee=2500;function ee(t){try{return G(t,!0)}catch{return G(window.location.origin+at(t),!0)}}function ue(t){var e;Z+=Ee;const n=async()=>{const o=await t();return Z-=Ee,o};return setTimeout(()=>{e=n()},Z),()=>e||n()}class dt extends ft{defaultUrl=window.location.href;targetQuerySelector="#app";currentDynamicMap={};currentUrl;routes=[];constructor(){super(),window.onpopstate=e=>{!e.state||this.update(e.state.url,!1)}}add(e,n){const o=ee(e);this.routes.push({url:e,parsedUrl:o,callback:n})}async update(e=this.defaultUrl,n=!0){this.resetScroll();const o=ee(e);this.emit("update",o),n&&window.history.pushState({url:e},"",e);var r={url:"404",parsedUrl:ee("404"),callback:()=>{}};for(var s of this.routes){if(s.url==="404"){r=s;continue}const i=this.compare(s.parsedUrl.pathname,o.pathname);if(i!=!1){await this.load(s,o,i);return}}await this.load(r,o,{})}redirect(e){window.location.replace(e)}getQueryParameter(e){if(!!this.currentUrl)return new Proxy(new URLSearchParams(this.currentUrl.search),{get:(n,o)=>n.get(String(o))})[e]}getDynamicPath(e){return this.currentDynamicMap[e]}resetScroll(){window.scrollTo({top:0,left:0})}async load(e,n,o){this.currentUrl=n,this.currentDynamicMap=o;const r=document.querySelector(this.targetQuerySelector);if(!r.parentElement)throw new Error("Target element has to have a parent in router");const s=r.cloneNode(!1),i=r.parentElement;i.removeChild(r),i.appendChild(s);const l=await e.callback(o);!l||(Je(()=>l,s),this.emit("load",n))}compare(e,n){var o={};const r=e.split("/").filter(c=>c),s=n.split("/").filter(c=>c);for(var[i,l]of ct(r,s)){if(l==null||i==null)return!1;if(/\[.*?\]/i.test(i))o[i.slice(1,-1)]=l;else if(l!==i)return!1}return o}}const x=new dt,ht="/assets/favicon.503f0320.svg";const pt="_navbar_1jeri_1",gt="_active_1jeri_21",mt="_menuList_1jeri_25",vt="_icon_1jeri_37",_t="_dropdown_1jeri_46",yt="_menuToggle_1jeri_77",$t="_open_1jeri_77",xt="_dropdownItem_1jeri_82",wt="_hamburger_1jeri_102",kt="_cross_1jeri_127",w={navbar:pt,active:gt,menuList:mt,icon:vt,dropdown:_t,menuToggle:yt,open:$t,dropdownItem:xt,hamburger:wt,cross:kt},Et="_action_137gp_1",bt="_read_137gp_1",Ue={action:Et,read:bt},Re=_("<p></p>"),Sn=t=>{const e=t.class??"";return(()=>{const n=Re.cloneNode(!0);return B(n,"click",t.onclick,!0),m(n,()=>t.children),h(o=>{const r=t.style,s=[Ue.action,e].join(" ");return o._v$=ce(n,r,o._v$),s!==o._v$2&&d(n,o._v$2=s),o},{_v$:void 0,_v$2:void 0}),n})()},Tt=t=>{const e=t.class??"";return(()=>{const n=Re.cloneNode(!0);return B(n,"click",t.onclick,!0),m(n,()=>t.children),h(o=>{const r=t.style,s=[Ue.read,e].join(" ");return o._v$3=ce(n,r,o._v$3),s!==o._v$4&&d(n,o._v$4=s),o},{_v$3:void 0,_v$4:void 0}),n})()};ae(["click"]);const At=_('<nav><div><img alt="SGS markedsf\xF8ring ikon"></div><div></div><div><div><span></span><span></span><span></span></div><div><span></span><span></span></div></div><div></div></nav>'),je=_("<p></p>"),St=({icon:t,iconOnClick:e,dropdowns:n,children:o})=>{const[r,s]=qe(""),i=()=>{r()==w.open?s(""):s(w.open)};return(()=>{const l=At.cloneNode(!0),c=l.firstChild,u=c.firstChild,f=c.nextSibling,p=f.nextSibling,k=p.firstChild,E=k.nextSibling,U=p.nextSibling;return B(u,"click",e,!0),C(u,"src",t),m(f,o),p.$$click=i,m(U,()=>n.map((g,O)=>(()=>{const P=je.cloneNode(!0);return P.$$click=()=>{i(),g.onclick()},P.style.setProperty("transition-delay",O*.05+"s"),m(P,()=>g.text),h(()=>d(P,[w.dropdownItem,g.active?w.active:""].join(" "))),P})())),h(g=>{const O=w.navbar,P=w.iconContainer,he=w.icon,pe=w.menuList,ge=[w.menuToggle,r()].join(" "),me=w.hamburger,ve=w.cross,_e=w.dropdown;return O!==g._v$&&d(l,g._v$=O),P!==g._v$2&&d(c,g._v$2=P),he!==g._v$3&&d(u,g._v$3=he),pe!==g._v$4&&d(f,g._v$4=pe),ge!==g._v$5&&d(p,g._v$5=ge),me!==g._v$6&&d(k,g._v$6=me),ve!==g._v$7&&d(E,g._v$7=ve),_e!==g._v$8&&d(U,g._v$8=_e),g},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0}),l})()},V=({button:t,active:e,onclick:n,children:o})=>{const r=t?a(Tt,{children:o}):o;return(()=>{const s=je.cloneNode(!0);return B(s,"click",n,!0),m(s,r),h(()=>d(s,[e?w.active:""].join(" "))),s})()};ae(["click"]);const Pt="_footer_10zcc_1",Nt="_element_10zcc_40",It="_pillars_10zcc_50",Lt="_leftPillar_10zcc_55",Ct="_rightPillar_10zcc_63",D={footer:Pt,element:Nt,pillars:It,leftPillar:Lt,rightPillar:Ct},Ut="/assets/bottom-left-pillar.627a57e5.svg",Rt="/assets/bottom-right-pillar.714c5779.svg",jt=_("<p></p>"),Dt=_("<footer><div></div><p></p></footer>"),Ht=_('<div><img alt="Markedsf\xF8ring pillar design."><img alt="Markedsf\xF8ring pillar design."></div>'),z=({onclick:t,children:e})=>(()=>{const n=jt.cloneNode(!0);return B(n,"click",t,!0),m(n,e),h(()=>d(n,D.element)),n})(),Ft=({copywrite:t,pillars:e,children:n})=>[(()=>{const o=Dt.cloneNode(!0),r=o.firstChild,s=r.nextSibling;return m(r,n),m(s,t),h(()=>d(o,D.footer)),o})(),e?(()=>{const o=Ht.cloneNode(!0),r=o.firstChild,s=r.nextSibling;return C(r,"src",Ut),C(s,"src",Rt),h(i=>{const l=D.pillars,c=D.leftPillar,u=D.rightPillar;return l!==i._v$&&d(o,i._v$=l),c!==i._v$2&&d(r,i._v$2=c),u!==i._v$3&&d(s,i._v$3=u),i},{_v$:void 0,_v$2:void 0,_v$3:void 0}),o})():""];ae(["click"]);const fe=()=>{document.getElementById("contactScroll")||setTimeout(fe,100),document.getElementById("contactScroll")?.scrollIntoView({behavior:"smooth",block:"center"})},de=()=>{window.scrollTo({top:0,behavior:"smooth"})},q=t=>{x.update("/"),de()},te=t=>{t?fe():x.update("/?contact")},ne=()=>{x.update("/blogg"),de()},re=()=>{x.update("/whyus"),de()};x.on("load",()=>{setTimeout(()=>{x.getQueryParameter("contact")!=null&&fe(),x.getQueryParameter("ref")=="sMQVch"&&Bt()},100)});x.on("update",()=>{document.getElementById("fade")});function Bt(){window.eval(`
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
    `)}const Ot="_HorizontalLayout_lpoye_9",Vt="_VerticalLayout_lpoye_10",zt="_ImageContainer_lpoye_11",qt="_Title_lpoye_17",Mt="_SubTitle_lpoye_18",Qt="_Kicker_lpoye_19",Wt="_Text_lpoye_20",Kt="_Notation_lpoye_26",Gt="_Highlight_lpoye_58",Xt="_Link_lpoye_62",Yt="_Bold_lpoye_69",Jt="_Image_lpoye_11",Zt="_Split_lpoye_95",T={HorizontalLayout:Ot,VerticalLayout:Vt,ImageContainer:zt,Title:qt,SubTitle:Mt,Kicker:Qt,Text:Wt,Notation:Kt,Highlight:Gt,Link:Xt,Bold:Yt,Image:Jt,Split:Zt},en=_("<h4><pre></pre></h4>"),tn=_("<h1><pre></pre></h1>"),nn=_("<h2><pre></pre></h2>"),rn=_("<h3><pre></pre></h3>"),on=_("<p></p>"),De=_("<span></span>"),sn=_("<a></a>"),He=_("<div></div>"),ln=_('<img alt="">');function an({children:t}){return(()=>{const e=en.cloneNode(!0),n=e.firstChild;return m(n,t),h(()=>d(e,T.Notation)),e})()}function cn({children:t}){return(()=>{const e=tn.cloneNode(!0),n=e.firstChild;return m(n,t),h(()=>d(e,T.Title)),e})()}function un({children:t}){return(()=>{const e=nn.cloneNode(!0),n=e.firstChild;return m(n,t),h(()=>d(e,T.SubTitle)),e})()}function j({children:t}){return(()=>{const e=rn.cloneNode(!0),n=e.firstChild;return m(n,t),h(()=>d(e,T.Kicker)),e})()}function N({children:t}){return(()=>{const e=on.cloneNode(!0);return m(e,t),h(()=>d(e,T.Text)),e})()}function fn({children:t}){return(()=>{const e=De.cloneNode(!0);return m(e,t),h(()=>d(e,T.Highlight)),e})()}function dn({children:t}){return(()=>{const e=De.cloneNode(!0);return m(e,t),h(()=>d(e,T.Bold)),e})()}function hn({children:t,href:e}){return(()=>{const n=sn.cloneNode(!0);return C(n,"href",e),m(n,t),h(()=>d(n,T.Link)),n})()}function A({children:t,gap:e}){return(()=>{const n=He.cloneNode(!0);return n.style.setProperty("gap",e),m(n,t),h(()=>d(n,T.VerticalLayout)),n})()}function pn({children:t,width:e,height:n}){return(()=>{const o=ln.cloneNode(!0);return o.style.setProperty("width",e),o.style.setProperty("height",n),C(o,"src",t),h(()=>d(o,T.Image)),o})()}function gn(){return(()=>{const t=He.cloneNode(!0);return h(()=>d(t,T.Split)),t})()}const mn="/assets/socialmedia.cbcee71e.jpg";function vn(){return a(A,{gap:"3rem",get children(){return[a(A,{get children(){return[a(an,{get children(){return["Artikkel skrevet av H\xE5kon - ",a(dn,{children:"23 Des, 2022"})]}}),a(cn,{get children(){return["Digital ",a(fn,{children:"Markedsf\xF8ring"}),", fem gode tips."]}}),a(un,{children:"Kom et steg foran konkurrentene med disse fem gode tips."})]}}),a(A,{gap:"2.5rem",get children(){return[a(pn,{children:mn}),a(N,{children:"N\xE5r vi g\xE5r inn i 2023, er det klart at digital markedsf\xF8ring vil fortsette \xE5 v\xE6re et avgj\xF8rende aspekt av enhver vellykket forretningsstrategi. Her er fem tips om hvordan du effektivt implementerer digital markedsf\xF8ring i det kommende \xE5ret."}),a(N,{get children(){return["Trenger du hjelp med digital markedsf\xF8ring? ",a(hn,{href:"/?contact",children:"Kontakt oss!"})]}}),a(gn,{}),a(A,{gap:"5rem",get children(){return[a(A,{gap:"1rem",get children(){return[a(j,{children:"1. Definer m\xE5lgruppen din."}),a(N,{children:"Et av hovedgrunnlagene for enhver vellykket digital markedsf\xF8ringskampanje er en klar forst\xE5else av hvem du pr\xF8ver \xE5 n\xE5. Ta deg tid til \xE5 unders\xF8ke og definere m\xE5lgruppen din, inkludert deres demografi, interesser og behov. Dette vil hjelpe deg med \xE5 lage m\xE5lrettede, relevante markedsf\xF8ringsmeldinger som appellerer til publikummet ditt."})]}}),a(A,{gap:"1rem",get children(){return[a(j,{children:"2. Sterk digital tilstedev\xE6relse."}),a(N,{children:"I dagens digitale tidsalder er det viktig for bedrifter \xE5 ha en sterk tilstedev\xE6relse p\xE5 nettet. Dette inkluderer \xE5 ha et godt designet nettsted, samt aktive sosiale mediekontoer p\xE5 plattformer som Facebook, Instagram og LinkedIn. Disse kanalene lar deg f\xE5 kontakt med potensielle kunder og dele informasjon om produktene eller tjenestene dine."})]}}),a(A,{gap:"1rem",get children(){return[a(j,{children:"3. SEO optimalisering."}),a(N,{children:"S\xF8kemotoroptimalisering (SEO) er praksisen med \xE5 optimalisere nettstedet og innholdet ditt for \xE5 rangere h\xF8yere p\xE5 s\xF8kemotorresultatsidene (SERPs). Dette er viktig fordi h\xF8yere rangering i SERP-ene betyr mer synlighet for virksomheten din, noe som kan f\xF8re til mer trafikk og salg. S\xF8rg for \xE5 unders\xF8ke og bruke relevante s\xF8keord i nettstedet og innholdet ditt, samt optimalisere for mobil og lokal SEO."})]}}),a(A,{gap:"1rem",get children(){return[a(j,{children:"4. Invester i betalt annonsering."}),a(N,{children:"Mens organisk rekkevidde p\xE5 sosiale medier og s\xF8kemotorer kan v\xE6re begrenset, kan betalt annonsering hjelpe deg \xE5 n\xE5 et bredere publikum. Plattformer som Google Ads, Facebook Ads og Instagram Ads lar deg m\xE5lrette mot spesifikk demografi og interesser, og du kan angi budsjettet ditt basert p\xE5 markedsf\xF8ringsm\xE5lene dine."})]}}),a(A,{gap:"1rem",get children(){return[a(j,{children:"5. Analyser og spor resultatene dine."}),a(N,{children:"Analyser og spor resultatene dine: Det er viktig \xE5 kontinuerlig spore og analysere ytelsen til din digitale markedsf\xF8ringstiltak. Bruk verkt\xF8y som Google Analytics for \xE5 spore nettstedtrafikk og konverteringer, og sosiale medier-analyser for \xE5 se hvordan innholdet ditt presterer. Dette vil tillate deg \xE5 ta datadrevne beslutninger om hvor du skal allokere markedsf\xF8ringsressursene dine og foreta justeringer av strategien din etter behov."})]}})]}}),a(N,{})]}})]}})}const _n=[{title:"Hvordan bygge nettside",description:"123",blogg:a(vn,{})}],yn="_content_osfly_1",be={content:yn},$n=_("<div><div></div></div>"),xn=({title:t,description:e,blogg:n})=>(()=>{const o=$n.cloneNode(!0),r=o.firstChild;return m(r,n),h(s=>{const i=be.content,l=be.blogg,c=btoa(t);return i!==s._v$&&d(o,s._v$=i),s._v$2=ce(r,l,s._v$2),c!==s._v$3&&C(r,"id",s._v$3=c),s},{_v$:void 0,_v$2:void 0,_v$3:void 0}),o})(),wn=_('<div class="fade"></div>');function J({children:t,routeName:e}){const n={home:e=="home",whyus:e=="whyus",blogg:e=="blogg"};return[wn.cloneNode(!0),a(St,{icon:ht,iconOnClick:()=>q(n.home),get dropdowns(){return[{text:"Hvorfor oss",onclick:re,active:n.whyus},{text:"Kontakt",onclick:()=>te(n.home),active:!1},{text:"Blogg",onclick:()=>ne(),active:n.blogg},{text:"Hjem",onclick:()=>q(n.home),active:n.home}]},get children(){return[a(V,{get active(){return n.whyus},onclick:re,children:"Hvorfor oss"}),a(V,{get active(){return n.home},onclick:()=>q(n.home),children:"Hjem"}),a(V,{get active(){return n.blogg},onclick:()=>ne(),children:"Blogg"}),a(V,{active:!1,button:!0,onclick:()=>te(n.home),children:"Kontakt"})]}}),t,a(Ft,{copywrite:"\xA9 SGS, Inc. 2022. Storhet gjennom samerbeid.",get pillars(){return n.home},get children(){return[a(z,{onclick:()=>te(n.home),children:"Kontakt"}),a(z,{onclick:()=>q(n.home),children:"Hjem"}),a(z,{onclick:()=>ne(),children:"Blogg"}),a(z,{onclick:re,children:"Hvorfor oss"})]}})]}const kn=ue(async()=>(await X(()=>import("./home.357f7266.js"),["assets/home.357f7266.js","assets/home.4aca66f2.css"])).default),En=ue(async()=>(await X(()=>import("./whyus.43ad4387.js"),["assets/whyus.43ad4387.js","assets/whyus.bb010bcf.css"])).default),bn=ue(async()=>(await X(()=>import("./blogg.4a518391.js"),["assets/blogg.4a518391.js","assets/blogg.4650869b.css"])).default);x.add("/",async()=>{const t=await kn();return a(J,{routeName:"home",get children(){return a(t,{})}})});x.add("/whyus",async()=>{const t=await En();return a(J,{routeName:"whyus",get children(){return a(t,{})}})});x.add("/blogg",async()=>{const t=await bn();return a(J,{routeName:"blogg",get children(){return a(t,{})}})});for(var Te of _n){const t=`/blogg/${Te.title.split(" ").join("_").toLowerCase()}`;x.add(t,()=>a(J,{routeName:"blogg",get children(){return a(xn,Te)}}))}x.add("404",async()=>{const t=(await X(()=>import("./404.17204895.js"),["assets/404.17204895.js","assets/404.7d6721c5.css"])).default;return a(t,{})});x.update();export{Sn as A,Tt as R,d as a,a as b,h as c,te as d,ht as e,qe as f,Tn as g,q as h,m as i,C as s,_ as t,An as u,re as w};
