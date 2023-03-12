/*! For license information please see app.js.LICENSE.txt */
(self.webpackChunkriot_ec_spa_example=self.webpackChunkriot_ec_spa_example||[]).push([[143],{673:function(t,e,n){"use strict";n.d(e,{yb:function(){return u.ZP},np:function(){return _},gY:function(){return N},EJ:function(){return i.ZP},XK:function(){return B}});var r=n(396),o=n(977),u=n(217),i=n(95);const s=Symbol(),a=Symbol();var c=n(507),l=n(296);const f=Symbol("unmount"),p={nodes:[],mount(t,e){return this.update(t,e)},update(t,e){const{placeholder:n,nodes:o,childrenMap:u}=this,i=t===f?null:this.evaluate(t),l=i?Array.from(i):[],{newChildrenMap:p,batches:d,futureNodes:h}=function(t,e,n,r){const{condition:o,template:u,childrenMap:i,itemName:l,getKey:f,indexName:p,root:d,isTemplateTag:h}=r,m=new Map,v=[],g=[];return t.forEach(((t,r)=>{const y=function(t,{itemName:e,indexName:n,index:r,item:o}){return(0,c._x)(t,e,o),n&&(0,c._x)(t,n,r),t}(Object.create(e),{itemName:l,indexName:p,index:r,item:t}),b=f?f(y):r,x=i.get(b),w=[];if(function(t,e){return!!t&&!t(e)}(o,y))return;const A=!x,E=x?x.template:u.clone(),T=E.el||d.cloneNode(),N=h&&A?function(t){const e=t.dom.cloneNode(!0),{head:n,tail:r}=function(){const t=document.createTextNode(""),e=document.createTextNode("");return t[s]=!0,e[a]=!0,{head:t,tail:e}}();return{avoidDOMInjection:!0,fragment:e,head:n,tail:r,children:[n,...Array.from(e.childNodes),r]}}(E):E.meta;A?v.push((()=>E.mount(T,y,n,N))):v.push((()=>E.update(y,n))),h?w.push(...N.children):w.push(T),i.delete(b),g.push(...w),m.set(b,{nodes:w,template:E,context:y,index:r})})),{newChildrenMap:m,batches:v,futureNodes:g}}(l,t,e,this);return((t,e,n,o)=>{const u=e.length;let i=t.length,s=u,a=0,c=0,l=null;for(;a<i||c<s;)if(i===a){const t=s<u?c?n(e[c-1],-0).nextSibling:n(e[s-c],0):o;for(;c<s;)(0,r.Vt)(n(e[c++],1),t)}else if(s===c)for(;a<i;)l&&l.has(t[a])||(0,r.hr)(n(t[a],-1)),a++;else if(t[a]===e[c])a++,c++;else if(t[i-1]===e[s-1])i--,s--;else if(t[a]===e[s-1]&&e[c]===t[i-1]){const o=n(t[--i],-1).nextSibling;(0,r.Vt)(n(e[c++],1),n(t[a++],-1).nextSibling),(0,r.Vt)(n(e[--s],1),o),t[i]=e[s]}else{if(!l){l=new Map;let t=c;for(;t<s;)l.set(e[t],t++)}if(l.has(t[a])){const o=l.get(t[a]);if(c<o&&o<s){let u=a,f=1;for(;++u<i&&u<s&&l.get(t[u])===o+f;)f++;if(f>o-c){const u=n(t[a],0);for(;c<o;)(0,r.Vt)(n(e[c++],1),u)}else(0,r.rS)(n(e[c++],1),n(t[a++],-1))}else a++}else(0,r.hr)(n(t[a++],-1))}})(o,h,function(t,e){return(n,r)=>{if(r<0){const n=t[t.length-1];if(n){const{template:r,nodes:o,context:u}=n;o.pop(),o.length||(t.pop(),r.unmount(u,e,null))}}return n}}(Array.from(u.values()),e),n),d.forEach((t=>t())),this.childrenMap=p,this.nodes=h,this},unmount(t,e){return this.update(f,e),this}},d={mount(t,e){return this.update(t,e)},update(t,e){const n=!!this.evaluate(t),o=!this.value&&n,u=this.value&&!n,i=()=>{const n=this.node.cloneNode();(0,r.Vt)(n,this.placeholder),this.template=this.template.clone(),this.template.mount(n,t,e)};switch(!0){case o:i();break;case u:this.unmount(t);break;default:n&&this.template.update(t,e)}return this.value=n,this},unmount(t,e){return this.template.unmount(t,e,!0),this}};var h=n(81);const m="undefined"==typeof Element?{}:Element.prototype,v=(0,h.HP)((t=>m.hasOwnProperty(t)));const g=/^on/,y={handleEvent(t){this[t.type](t)}},b=new WeakMap;function x(t){return(0,l.kK)(t)?"":t}const w=(t,e)=>{const n=t.childNodes[e];if(n.nodeType===Node.COMMENT_NODE){const e=document.createTextNode("");return t.replaceChild(e,n),e}return n};var A={[i.Y4]:function t(e,{name:n},r,o){if(!n)return o&&function(t,e,n){const r=e?Object.keys(e):[];Object.keys(n).filter((t=>!r.includes(t))).forEach((e=>t.removeAttribute(e)))}(e,r,o),void(r&&function(e,n){Object.entries(n).forEach((([n,r])=>t(e,{name:n},r)))}(e,r));!v(n)&&((0,l.jn)(r)||(0,l.Kn)(r)||(0,l.mf)(r))&&(e[n]=r),function(t){return!t&&0!==t}(r)?e.removeAttribute(n):function(t){return!0===t||["string","number"].includes(typeof t)}(r)&&e.setAttribute(n,function(t,e){return!0===e?t:e}(n,r))},[i.Ks]:function(t,{name:e},n){const r=e.replace(g,""),o=b.get(t)||(t=>{const e=Object.create(y);return b.set(t,e),e})(t),[u,i]=(t=>Array.isArray(t)?t:[t,!1])(n),s=o[r],a=u&&!s;s&&!u&&t.removeEventListener(r,o),a&&t.addEventListener(r,o,i),o[r]=u},[i.lD]:function(t,e,n){t.data=x(n)},[i.o9]:function(t,e,n){t.value=x(n)}};const E={mount(t){return this.value=this.evaluate(t),T(this,this.value),this},update(t){const e=this.evaluate(t);return this.value!==e&&(T(this,e),this.value=e),this},unmount(){return this.type===i.Ks&&T(this,null),this}};function T(t,e){return A[t.type](t.node,t,e,t.value)}function N(t,e){return{...E,...e,node:e.type===i.lD?w(t,e.childNodeIndex):t}}const O=(t,e)=>t[o.Aw]||e,M={attributes:[],getTemplateScope(t,e){return function(t,e,n){if(!t||!t.length)return n;const r=t.map((t=>({...t,value:t.evaluate(e)})));return Object.assign(Object.create(n||null),(0,h.tH)(r))}(this.attributes,t,e)},mount(t,e){const n=!!t.slots&&t.slots.find((({id:t})=>t===this.name)),{parentNode:o}=this.node,u=O(t,e);return this.template=n&&B(n.html,n.bindings).createDOM(o),this.template&&((0,r.Ty)(this.node),this.template.mount(this.node,this.getTemplateScope(t,u),u),this.template.children=Array.from(this.node.childNodes)),j(this.node),(0,r.hr)(this.node),this},update(t,e){if(this.template){const n=O(t,e);this.template.update(this.getTemplateScope(t,n),n)}return this},unmount(t,e,n){return this.template&&this.template.unmount(this.getTemplateScope(t,e),null,n),this}};function j(t){const e=t&&t.firstChild;e&&((0,r.Vt)(e,t),j(t))}function P(t){return t.reduce(((t,{bindings:e})=>t.concat(e)),[])}const C={mount(t){return this.update(t)},update(t,e){const n=this.evaluate(t);return n&&n===this.name?this.tag.update(t):(this.unmount(t,e,!0),this.name=n,this.tag=function(t,e=[],n=[]){return t?t({slots:e,attributes:n}):B(function(t){return t.reduce(((t,e)=>t+e.html),"")}(e),[...P(e),{expressions:n.map((t=>({type:i.Y4,...t})))}])}(this.getComponent(n),this.slots,this.attributes),this.tag.mount(this.node,t)),this},unmount(t,e,n){return this.tag&&this.tag.unmount(n),this}};var S={[u.IF]:function(t,{evaluate:e,template:n}){const o=document.createTextNode("");return(0,r.Vt)(o,t),(0,r.hr)(t),{...d,node:t,evaluate:e,placeholder:o,template:n.createDOM(t)}},[u.pt]:function(t,{expressions:e}){return{...(n=e.map((e=>N(t,e))),r=["mount","update","unmount"],r.reduce(((t,e)=>({...t,[e]:t=>n.map((n=>n[e](t)))&&undefined})),{}))};var n,r},[u.rf]:function(t,{evaluate:e,condition:n,itemName:o,indexName:u,getKey:i,template:s}){const a=document.createTextNode(""),c=t.cloneNode();return(0,r.Vt)(a,t),(0,r.hr)(t),{...p,childrenMap:new Map,node:t,root:c,condition:n,evaluate:e,isTemplateTag:(0,l.JY)(c),template:s.createDOM(t),getKey:i,indexName:u,itemName:o,placeholder:a}},[u.Kg]:function(t,{evaluate:e,getComponent:n,slots:r,attributes:o}){return{...C,node:t,evaluate:e,slots:r,attributes:o,getComponent:n}},[u.KJ]:function(t,{name:e,attributes:n}){return{...M,attributes:n,node:t,name:e}}};function R(t,e){return t.map((t=>t.type===i.lD?{...t,childNodeIndex:t.childNodeIndex+e}:t))}function _(t,e,n){const{selector:r,type:o,redundantAttribute:i,expressions:s}=e,a=r?t.querySelector(r):t;i&&a.removeAttribute(i);const c=s||[];return(S[o]||S[u.pt])(a,{...e,expressions:n&&!r?R(c,n):c})}const D={createDOM(t){return this.dom=this.dom||function(t,e){return e&&("string"==typeof e?function(t,e){return(0,l.Dc)(t)?function(t,e){return e.ownerDocument.importNode((new window.DOMParser).parseFromString(`<svg xmlns="http://www.w3.org/2000/svg">${t}</svg>`,"application/xml").documentElement,!0)}(e,t):function(t,e){const n=(0,l.JY)(e)?e:document.createElement("template");return n.innerHTML=t,n.content}(e,t)}(t,e):e)}(t,this.html)||document.createDocumentFragment(),this},mount(t,e,n,o={}){t||(0,h.je)("Please provide DOM node to mount properly your template"),this.el&&this.unmount(e);const{fragment:u,children:i,avoidDOMInjection:s}=o,{parentNode:a}=i?i[0]:t,c=(0,l.JY)(t),f=c?function(t,e,n){const r=Array.from(t.childNodes);return Math.max(r.indexOf(e),r.indexOf(n.head)+1,0)}(a,t,o):null;this.createDOM(t);const p=u||this.dom.cloneNode(!0);return this.el=c?a:t,this.children=c?i||Array.from(p.childNodes):null,!s&&p&&function(t,e){switch(!0){case(0,l.Dc)(t):(0,r.N)(e,t);break;case(0,l.JY)(t):t.parentNode.replaceChild(e,t);break;default:t.appendChild(e)}}(t,p),this.bindings=this.bindingsData.map((t=>_(this.el,t,f))),this.bindings.forEach((t=>t.mount(e,n))),this.meta=o,this},update(t,e){return this.bindings.forEach((n=>n.update(t,e))),this},unmount(t,e,n=!1){const u=this.el;if(!u)return this;switch(this.bindings.forEach((r=>r.unmount(t,e,n))),!0){case u[o.mb]||null===n:break;case Array.isArray(this.children):(0,r.D4)(this.children);break;case!n:u.innerHTML="";break;case!!n:(0,r.hr)(u)}return this.el=null,this},clone(){return{...this,meta:{},el:null}}};function B(t,e=[]){return{...D,html:t,bindingsData:e}}},74:function(t,e,n){!function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=r(n);const{cssManager:u}=e.__,{DOM_COMPONENT_INSTANCE_PROPERTY:i}=e.__.globals;function s(t){const{name:n}=t;return n?o.default(`${n}, [is=${n}]`).map((r=>{const o=r[i];if(!o)return;o.unmount(!0),u.remove(n);const s=e.component(t)(r,o.props);return s.update(o.state),s})):(console.warn("Anonymous components can not be reloaded"),[])}t.default=s,t.reload=s,Object.defineProperty(t,"__esModule",{value:!0})}(e,n(795),n(717))},481:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(523),o=n(64),u=n(396);const i=new WeakMap;function s(t,e){return{name:"lazy",exports:s.export(t,e)}}s.cache=i,s.export=function(t,e){const n=t&&e,s=n?e:t,a=i.get(s);return(0,r.L)((({slots:e,attributes:r,props:c})=>({mount(e,r){this.el=e,this.isMounted=!0;const o=()=>{this.mountLazyComponent(r),this.el.dispatchEvent(new Event("load"))};a?o():(n&&this.createManagedComponent(t,r),("function"==typeof s?s():Promise.resolve(s)).then((t=>{i.set(s,t.default||t),o()})))},createManagedComponent(t,n){this.component=(0,o.w)(t)(this.el,c,{attributes:r,slots:e,parentScope:n})},mountLazyComponent(t){this.isMounted&&(this.component&&(this.component.unmount(!0),this.el.children.length&&(0,u.Ty)(this.el)),this.createManagedComponent(i.get(s),t))},update(t){this.isMounted&&this.component&&this.component.update({},t)},unmount(...t){this.isMounted=!1,this.component&&this.component.unmount(...t)}})))}},484:function(t,e,n){"use strict";n.d(e,{AW:function(){return S},B$:function(){return T},BC:function(){return M},EQ:function(){return N},F0:function(){return ut}});var r=n(588),o=n(523);function u(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function i(t){return t&&t.sensitive?"":"i"}function s(t,e,n){return function(t,e,n){void 0===n&&(n={});for(var r=n.strict,o=void 0!==r&&r,s=n.start,a=void 0===s||s,c=n.end,l=void 0===c||c,f=n.encode,p=void 0===f?function(t){return t}:f,d="["+u(n.endsWith||"")+"]|$",h="["+u(n.delimiter||"/#?")+"]",m=a?"^":"",v=0,g=t;v<g.length;v++){var y=g[v];if("string"==typeof y)m+=u(p(y));else{var b=u(p(y.prefix)),x=u(p(y.suffix));if(y.pattern)if(e&&e.push(y),b||x)if("+"===y.modifier||"*"===y.modifier){var w="*"===y.modifier?"?":"";m+="(?:"+b+"((?:"+y.pattern+")(?:"+x+b+"(?:"+y.pattern+"))*)"+x+")"+w}else m+="(?:"+b+"("+y.pattern+")"+x+")"+y.modifier;else m+="("+y.pattern+")"+y.modifier;else m+="(?:"+b+x+")"+y.modifier}}if(l)o||(m+=h+"?"),m+=n.endsWith?"(?="+d+")":"$";else{var A=t[t.length-1],E="string"==typeof A?h.indexOf(A[A.length-1])>-1:void 0===A;o||(m+="(?:"+h+"(?="+d+"))?"),E||(m+="(?="+h+"|"+d+")")}return new RegExp(m,i(n))}(function(t,e){void 0===e&&(e={});for(var n=function(t){for(var e=[],n=0;n<t.length;){var r=t[n];if("*"!==r&&"+"!==r&&"?"!==r)if("\\"!==r)if("{"!==r)if("}"!==r)if(":"!==r)if("("!==r)e.push({type:"CHAR",index:n,value:t[n++]});else{var o=1,u="";if("?"===t[s=n+1])throw new TypeError('Pattern cannot start with "?" at '+s);for(;s<t.length;)if("\\"!==t[s]){if(")"===t[s]){if(0==--o){s++;break}}else if("("===t[s]&&(o++,"?"!==t[s+1]))throw new TypeError("Capturing groups are not allowed at "+s);u+=t[s++]}else u+=t[s++]+t[s++];if(o)throw new TypeError("Unbalanced pattern at "+n);if(!u)throw new TypeError("Missing pattern at "+n);e.push({type:"PATTERN",index:n,value:u}),n=s}else{for(var i="",s=n+1;s<t.length;){var a=t.charCodeAt(s);if(!(a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||95===a))break;i+=t[s++]}if(!i)throw new TypeError("Missing parameter name at "+n);e.push({type:"NAME",index:n,value:i}),n=s}else e.push({type:"CLOSE",index:n,value:t[n++]});else e.push({type:"OPEN",index:n,value:t[n++]});else e.push({type:"ESCAPED_CHAR",index:n++,value:t[n++]});else e.push({type:"MODIFIER",index:n,value:t[n++]})}return e.push({type:"END",index:n,value:""}),e}(t),r=e.prefixes,o=void 0===r?"./":r,i="[^"+u(e.delimiter||"/#?")+"]+?",s=[],a=0,c=0,l="",f=function(t){if(c<n.length&&n[c].type===t)return n[c++].value},p=function(t){var e=f(t);if(void 0!==e)return e;var r=n[c],o=r.type,u=r.index;throw new TypeError("Unexpected "+o+" at "+u+", expected "+t)},d=function(){for(var t,e="";t=f("CHAR")||f("ESCAPED_CHAR");)e+=t;return e};c<n.length;){var h=f("CHAR"),m=f("NAME"),v=f("PATTERN");if(m||v){var g=h||"";-1===o.indexOf(g)&&(l+=g,g=""),l&&(s.push(l),l=""),s.push({name:m||a++,prefix:g,suffix:"",pattern:v||i,modifier:f("MODIFIER")||""})}else{var y=h||f("ESCAPED_CHAR");if(y)l+=y;else if(l&&(s.push(l),l=""),f("OPEN")){g=d();var b=f("NAME")||"",x=f("PATTERN")||"",w=d();p("CLOSE"),s.push({name:b||(x?a++:""),pattern:b&&!x?i:x,prefix:g,suffix:w,modifier:f("MODIFIER")||""})}else p("END")}}return s}(t,n),e,n)}function a(t,e,n){return t instanceof RegExp?function(t,e){if(!e)return t;for(var n=/\((?:\?<(.*?)>)?(?!\?)/g,r=0,o=n.exec(t.source);o;)e.push({name:o[1]||r++,prefix:"",suffix:"",modifier:"",pattern:""}),o=n.exec(t.source);return t}(t,e):Array.isArray(t)?function(t,e,n){var r=t.map((function(t){return a(t,e,n).source}));return new RegExp("(?:"+r.join("|")+")",i(n))}(t,e,n):s(t,e,n)}const c=Symbol();function l(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return new Promise(((t,n)=>function e(r,o){if(!r.length)return t(o);const[u,...i]=r,s="function"==typeof u?u(o):u,a=t=>e(i,t);if(null!=s){if(s===c)return;if(s.then)return s.then(a,n)}return Promise.resolve(a(s))}(e)))}l.cancel=()=>c,l.compose=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return l(...e.reverse())};const f=new Set,p=Symbol();function d(t){const e=function*(){for(;;){const e=yield;yield l(e,...t)}}();return e.next(),e}function h(t,e){return t.forEach((n=>{n(e)===p&&t.delete(n)})),t}function m(t){throw new Error(t)}function v(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];const[r,o,u,i]=[new Set,new Set,new Set,new Set(e)],s=d(i),a=Object.create(s),c=t=>e=>t.add(e)&&a,l=t=>e=>t.delete(e)?a:m("Couldn't remove handler passed by reference");return Object.assign(a,{on:Object.freeze({value:c(r),error:c(o),end:c(u)}),off:Object.freeze({value:l(r),error:l(o),end:l(u)}),connect:c(i),push(t){const{value:e,done:n}=a.next(t);return n||e.then((t=>h(r,t)),(t=>h(o,t))),a},end:()=>(s.return(),h(u),[r,o,u,i].forEach((t=>t.clear())),a),fork:()=>v(...i),next(t){const e=s.next(t);return s.next(),e}})}v.install=function(t,e){return t&&"string"==typeof t||m("Please provide a name (as string) for your erre plugin"),e&&"function"==typeof e||m("Please provide a function for your erre plugin"),f.has(t)?m(`The ${t} is already part of the erre API, please provide a different name`):(v[t]=e,f.add(t)),v},v.install("cancel",l.cancel),v.install("off",(()=>p));const g="undefined"!=typeof process,y=t=>t.replace(A.base,""),b=t=>e=>N(e,t)?e:v.cancel(),x=t=>{if(!A.silentErrors)throw new Error(t)},w=v((t=>(t=>"string"==typeof t)(t)?t:v.cancel())).on.error(x),A={base:"",silentErrors:!1,sensitive:!1,strict:!1,end:!0,start:!0,delimiter:"/#?",encode:void 0,endsWith:void 0,prefixes:"./"},E=t=>Object.assign({},A,t),T=(t,e,n)=>a(t,e,E(n)),N=(t,e)=>e.test(t),O=(t,e)=>[decodeURI,y,b(t),r=>function(t,e,r){void 0===r&&(r={});const{base:o}=E(r),[,...u]=e.exec(t),i=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return g?n(294).parse(...e):new URL(...e)}(t,o);return i.params=u.reduce(((t,e,n)=>{const o=r.keys&&r.keys[n];return o&&(t[o.name]=e?decodeURIComponent(e):e),t}),{}),i}(r,t,e)];function M(t,e){const n=[],r=a(t,n,e),o=v(...O(r,Object.assign({},e,{keys:n})));return(u=w,i=o,u.on.value(i.push),i.on.end((()=>{u.off.value(i.push)})),i).on.error(x);var u,i}const j=(P=null,w.on.value((t=>P=t)),()=>P);var P;const C=(t,e,n)=>{const r=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce(((t,e)=>function(){return t(e(...arguments))}))}(...O(t,n).reverse())(e);return r.params?r:null};var S={css:null,exports:{onBeforeMount(t){const e=j(),n=T(t.path,[],t);this.state={pathToRegexp:n,route:e&&N(e,n)?C(n,e,t):null},w.on.value(this.onBeforeRoute),this.stream=M(t.path,t).on.value(this.onRoute)},onBeforeRoute(t,e){this.state.route&&!N(t,this.state.pathToRegexp)&&(this.callLifecycleProperty("onBeforeUnmount",M),this.update({route:null}),this.callLifecycleProperty("onUnmounted",M))},onRoute(t){this.callLifecycleProperty("onBeforeMount",t),this.update({route:t}),this.callLifecycleProperty("onMounted",t)},callLifecycleProperty(t,...e){this.props[t]&&this.props[t](...e)},onUnmounted(){w.off.value(this.onBeforeRoute),this.stream.end()}},template:(t,e,n,r)=>t('<template expr0="expr0"></template>',[{type:n.IF,evaluate:t=>t.state.route,redundantAttribute:"expr0",selector:"[expr0]",template:t('<slot expr1="expr1"></slot>',[{type:n.SLOT,attributes:[{type:e.ATTRIBUTE,name:"route",evaluate:t=>t.state.route}],name:"default",redundantAttribute:"expr1",selector:"[expr1]"}])}]),name:"route-hoc"};const R=()=>_()||n.g,_=()=>"undefined"==typeof window?null:window,D=()=>"undefined"==typeof document?null:document,B=()=>{const t=_();return t?t.location:{}},Z=(()=>{const t=R();return t.requestAnimationFrame||t.setTimeout})(),$=(()=>{const t=R();return t.cancelAnimationFrame||t.clearTimeout})(),k="popstate",F="click",I="/",L=/^.+?\/\/+[^/]+/,K=t=>t[t.length-1]===I?t.substr(0,t.length-1):t;function Y(t){return Array.isArray(t)?t:/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t))&&"number"==typeof t.length?Array.from(t):[t]}function H(t,e,n,r,o){var u;t=Y(t),(u=e,u.split(/\s/)).forEach((e=>{t.forEach((t=>t[r](e,n,o||!1)))}))}function U(t,e,n,r){return H(t,e,n,"addEventListener",r),t}function q(t,e,n,r){return H(t,e,n,"removeEventListener",r),t}const z=t=>1===t.length?t[0]:t;function J(t,e){return function(t,e,n){const r="string"==typeof e?[e]:e;return z(Y(t).map((t=>z(r.map((e=>t.hasAttribute(e)))))))}(t,e)}const V=()=>w.push(X(String(B().href))),W=t=>{const e=t.includes(A.base)?t:A.base+t,n=B(),r="undefined"==typeof history?null:history,o=D();r&&e!==n.href&&r.pushState(null,o.title,e)},G=t=>t&&!Q(t)?G(t.parentNode):t,Q=t=>"A"===t.nodeName,X=t=>t.replace(A.base,""),tt=t=>{if((t=>t.which&&1!==t.which||t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)(t))return;const e=G(t.target);if((t=>!t||!Q(t)||J(t,"download")||!J(t,"href")||(t=>t.target&&"_self"!==t.target)(t)||-1===t.href.indexOf(B().href.match(L)[0]))(e)||(t=>t.split("#").length>1)(e.href)||!(t=>!A.base||t.includes(A.base))(e.href))return;const n=X(e.href);w.push(n),t.preventDefault()},et="base",{template:nt,bindingTypes:rt}=r.__.DOMBindings;let ot=!1;var ut={css:null,exports:(0,o.L)((({slots:t,attributes:e,props:n})=>{ot&&function(t){throw new Error("Multiple <router> components are not supported")}();const r=t=>e&&e.find((e=>e.name.replace(/-(\w)/g,((t,e)=>e.toUpperCase()))===t));return{slot:null,el:null,teardown:null,mount(t,e){const n=r("initialRoute"),o=n?n.evaluate(e):null,u=j(),i=()=>{this.createSlot(e),w.off.value(i)};ot=!0,this.el=t,this.teardown=function(t){const e=_(),n=t||D();return e&&(U(e,k,V),U(n,F,tt)),w.on.value(W),()=>{e&&(q(e,k,V),q(n,F,tt)),w.off.value(W)}}(this.root),this.setBase(e),u&&!o?this.createSlot(e):(w.on.value(i),w.push(o||window.location.href))},createSlot(e){if(!t||!t.length)return;const n=r("onStarted");this.slot=nt(null,[{type:rt.SLOT,name:"default"}]),this.slot.mount(this.el,{slots:t},e),n&&n.evaluate(e)(j())},update(t){this.setBase(t),this.slot&&($(this.deferred),this.deferred=Z((()=>{this.slot.update({},t)})))},unmount(...t){this.teardown(),ot=!1,this.slot&&this.slot.unmount(...t)},getBase(t){const e=r(et);return e?this.el.getAttribute(et)||e.evaluate(t):"/"},setBase(t){var e;e=n?n.base:this.getBase(t),A.base=(t=>{const e=_().location,n=e?`${e.protocol}//${e.host}`:"",{pathname:r}=e||{};switch(!0){case!1===Boolean(t):return K(`${n}${r||""}`);case/(www|http(s)?:)/.test(t):return t;case"#"===t[0]:return`${n}${r&&r!==I?r:""}${t}`;case t===I:return K(n);default:return K(`${n}${o=t,o[0]===I?o:`/${o}`}`)}var o})(e)}}})),template:null,name:"router-hoc"}},217:function(t,e,n){"use strict";n.d(e,{IF:function(){return o},KJ:function(){return s},Kg:function(){return i},pt:function(){return u},rf:function(){return r}});const r=0,o=1,u=2,i=3,s=4;e.ZP={EACH:r,IF:o,SIMPLE:u,TAG:i,SLOT:s}},296:function(t,e,n){"use strict";function r(t,e){return typeof t===e}function o(t){const e=t.ownerSVGElement;return!!e||null===e}function u(t){return"template"===t.tagName.toLowerCase()}function i(t){return r(t,"function")}function s(t){return r(t,"boolean")}function a(t){return!c(t)&&t.constructor===Object}function c(t){return null==t}n.d(e,{Dc:function(){return o},JY:function(){return u},Kn:function(){return a},jn:function(){return s},kK:function(){return c},mf:function(){return i}})},977:function(t,e,n){"use strict";n.d(e,{$l:function(){return N},Aq:function(){return i},Aw:function(){return E},Kr:function(){return T},Pu:function(){return p},QS:function(){return d},RR:function(){return b},WM:function(){return v},Yh:function(){return y},cE:function(){return a},d_:function(){return r},dz:function(){return x},e:function(){return A},e4:function(){return s},g:function(){return c},iR:function(){return l},jr:function(){return f},lD:function(){return m},lF:function(){return u},mb:function(){return w},qD:function(){return g},vJ:function(){return o},xq:function(){return h}});const r=new Map,o=Symbol("riot-component"),u=new Set,i="is",s="mount",a="update",c="unmount",l="shouldUpdate",f="onBeforeMount",p="onMounted",d="onBeforeUpdate",h="onUpdated",m="onBeforeUnmount",v="onUnmounted",g="props",y="state",b="slots",x="root",w=Symbol("pure"),A=Symbol("is_updating"),E=Symbol("parent"),T=Symbol("attributes"),N=Symbol("template")},396:function(t,e,n){"use strict";n.d(e,{$J:function(){return o},D4:function(){return s},N:function(){return u},Ty:function(){return i},Vt:function(){return c},hr:function(){return a},rS:function(){return l}});var r=n(590);function o(t){return Array.from(t.attributes).reduce(((t,e)=>(t[(0,r.z)(e.name)]=e.value,t)),{})}function u(t,e){t.firstChild&&(e.appendChild(t.firstChild),u(t,e))}function i(t){s(t.childNodes)}function s(t){Array.from(t).forEach(a)}const a=t=>t&&t.parentNode&&t.parentNode.removeChild(t),c=(t,e)=>e&&e.parentNode&&e.parentNode.insertBefore(t,e),l=(t,e)=>e&&e.parentNode&&e.parentNode.replaceChild(t,e)},95:function(t,e,n){"use strict";n.d(e,{Ks:function(){return o},Y4:function(){return r},lD:function(){return u},o9:function(){return i}});const r=0,o=1,u=2,i=3;e.ZP={ATTRIBUTE:r,EVENT:o,TEXT:u,VALUE:i}},613:function(t,e,n){"use strict";n.d(e,{Kr:function(){return o.Kr},d_:function(){return o.d_},vJ:function(){return o.vJ},$J:function(){return u.$J},e:function(){return o.e},Aq:function(){return o.Aq},mb:function(){return o.mb},e4:function(){return o.e4},jr:function(){return o.jr},lD:function(){return o.lD},QS:function(){return o.QS},Pu:function(){return o.Pu},WM:function(){return o.WM},xq:function(){return o.xq},Aw:function(){return o.Aw},lF:function(){return o.lF},qD:function(){return o.qD},dz:function(){return o.dz},iR:function(){return o.iR},RR:function(){return o.RR},Yh:function(){return o.Yh},$l:function(){return o.$l},g:function(){return o.g},cE:function(){return o.cE},i6:function(){return s},kB:function(){return a},nH:function(){return f.n},u8:function(){return l.u8},hc:function(){return l.hc},_x:function(){return l._x},tH:function(){return c.tH},mf:function(){return r.mf},Kn:function(){return r.Kn},HP:function(){return c.HP},ZT:function(){return i},je:function(){return c.je}}),n(217);var r=n(296),o=n(977),u=n(396);function i(){return this}function s(t,e){return e.forEach((e=>{t[e]=t[e].bind(t)})),t}function a(t){return(0,r.mf)(t)?t.prototype&&t.prototype.constructor?new t:t():t}n(95);var c=n(81),l=n(507),f=n(590)},81:function(t,e,n){"use strict";n.d(e,{HP:function(){return i},je:function(){return u},tH:function(){return s}});var r=n(95),o=n(590);function u(t){throw new Error(t)}function i(t){const e=new Map,n=n=>(e.has(n)||e.set(n,t.call(this,n)))&&e.get(n);return n.cache=e,n}function s(t){return t.reduce(((t,e)=>{const{value:n,type:u}=e;switch(!0){case!e.name&&u===r.Y4:return{...t,...n};case u===r.o9:t.value=e.value;break;default:t[(0,o.z)(e.name)]=e.value}return t}),{})}},507:function(t,e,n){"use strict";function r(t,e,n,r={}){return Object.defineProperty(t,e,{value:n,enumerable:!1,writable:!1,configurable:!0,...r}),t}function o(t,e,n){return Object.entries(e).forEach((([e,o])=>{r(t,e,o,n)})),t}function u(t,e){return Object.entries(e).forEach((([e,n])=>{t[e]||(t[e]=n)})),t}n.d(e,{_x:function(){return r},hc:function(){return o},u8:function(){return u}})},590:function(t,e,n){"use strict";function r(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function o(t){return t.replace(/-(\w)/g,((t,e)=>e.toUpperCase()))}n.d(e,{n:function(){return r},z:function(){return o}})},833:function(t,e,n){"use strict";var r=n(484),o=n(481),u=n(443),i=n(668),s=n(979),a=n(643),c=n(757);e.Z={css:'app,[is="app"]{ padding: 2rem 0; } app .menu,[is="app"] .menu{ margin: 1rem -1rem; } app .menu a,[is="app"] .menu a{ padding: 0 1rem; color: black; } app .menu a.active.active,[is="app"] .menu a.active.active{ font-weight: bold; color: #008080; text-decoration: none; } app .menu a:hover,[is="app"] .menu a:hover,app .menu a:focus,[is="app"] .menu a:focus,app .menu a:active,[is="app"] .menu a:active{ text-decoration: underline; }',exports:{components:{Router:r.F0,Route:r.AW,NotFound:i.Z,MyHeader:a.default,MyFooter:c.default,Home:(0,o.Z)(u.Z,(()=>n.e(229).then(n.bind(n,674)))),About:(0,o.Z)(u.Z,(()=>n.e(521).then(n.bind(n,545))))},state:{pages:s.Z,showNotFound:!1,activePage:null},onBeforeMount({isServer:t}){this.anyRouteStream=(0,r.BC)("(.*)"),this.anyRouteStream.on.value(this.onAnyRoute)},onAnyRoute(t){const e=s.Z.find((e=>(0,r.EQ)(t.pathname,(0,r.B$)(e.path))));this.update({activePage:e,showNotFound:!e})},onBeforeUnmount(){this.anyRouteStream.end()}},template:(t,e,n,r)=>t('<div class="container"><my-header expr0="expr0"></my-header><router expr1="expr1"></router><my-footer expr8="expr8"></my-footer></div>',[{type:n.TAG,getComponent:r,evaluate:t=>"my-header",slots:[],attributes:[],redundantAttribute:"expr0",selector:"[expr0]"},{type:n.TAG,getComponent:r,evaluate:t=>"router",slots:[{id:"default",html:'<div class="row"><nav class="menu column"><a expr2="expr2"></a></nav></div><div expr3="expr3" class="row"></div><div expr5="expr5" class="row"></div>',bindings:[{type:n.EACH,getKey:null,condition:null,template:t(" ",[{expressions:[{type:e.TEXT,childNodeIndex:0,evaluate:t=>[t.page.label].join("")},{type:e.ATTRIBUTE,name:"class",evaluate:t=>t.state.activePage===t.page?"active":""},{type:e.ATTRIBUTE,name:"href",evaluate:t=>t.page.path}]}]),redundantAttribute:"expr2",selector:"[expr2]",itemName:"page",indexName:null,evaluate:t=>t.state.pages},{type:n.IF,evaluate:t=>t.state.showNotFound,redundantAttribute:"expr3",selector:"[expr3]",template:t('<div class="column column-60"><not-found expr4="expr4"></not-found></div>',[{type:n.TAG,getComponent:r,evaluate:t=>"not-found",slots:[],attributes:[],redundantAttribute:"expr4",selector:"[expr4]"}])},{type:n.IF,evaluate:t=>!t.state.showNotFound,redundantAttribute:"expr5",selector:"[expr5]",template:t('<div class="column column-60"><route expr6="expr6"></route></div>',[{type:n.EACH,getKey:null,condition:null,template:t(null,[{type:n.TAG,getComponent:r,evaluate:t=>"route",slots:[{id:"default",html:'<main expr7="expr7"></main>',bindings:[{type:n.TAG,getComponent:r,evaluate:t=>t.page.componentName,slots:[],attributes:[{type:e.ATTRIBUTE,name:"initial-props",evaluate:t=>t.page.initialProps}],redundantAttribute:"expr7",selector:"[expr7]"}]}],attributes:[{type:e.ATTRIBUTE,name:"path",evaluate:t=>t.page.path}]}]),redundantAttribute:"expr6",selector:"[expr6]",itemName:"page",indexName:null,evaluate:t=>t.state.pages}])}]}],attributes:[],redundantAttribute:"expr1",selector:"[expr1]"},{type:n.TAG,getComponent:r,evaluate:t=>"my-footer",slots:[],attributes:[],redundantAttribute:"expr8",selector:"[expr8]"}]),name:"app"},(()=>{{const e=n(74).default;t.hot.accept(),t.hot.data&&e(n(833).Z)}})()},757:function(t,e,n){"use strict";n.r(e),e.default={css:null,exports:null,template:(t,e,n,r)=>t('<footer><p>\n      Riot.js app with a&nbsp;<a href="<https://snipcart.com>">Snipcart</a>&nbsp;- powered store\n      <div><a href="https://github.com/snipcart/snipcart-nextjs-spa">Github</a></div></p></footer>',[]),name:"my-footer"},(()=>{{const e=n(74).default;t.hot.accept(),t.hot.data&&e(n(757).default)}})()},643:function(t,e,n){"use strict";n.r(e),e.default={css:null,exports:null,template:(t,e,n,r)=>t('<header><a href="/"><img src="/static/logo.svg" alt/></a><a href="/"><h1>FishCastle</h1></a><a expr12="expr12" href="#"><svg width="31" height="27" viewBox="0 0 31 27" fill="none" xmlns="<http://www.w3.org/2000/svg>"><path d fill="#9094FF"/></svg><span></span></a></header>',[{redundantAttribute:"expr12",selector:"[expr12]",expressions:[{type:e.ATTRIBUTE,name:"style",evaluate:t=>({textDecoration:"none"})}]}]),name:"my-header"},(()=>{{const e=n(74).default;t.hot.accept(),t.hot.data&&e(n(643).default)}})()},443:function(t,e,n){"use strict";e.Z={css:'loader,[is="loader"]{ padding: 1rem 0; } loader svg,[is="loader"] svg{ overflow: visible; }',exports:null,template:(t,e,n,r)=>t('<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#000"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".5" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18"/><animatetransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animatetransform></g></g></svg>',[]),name:"loader"},(()=>{{const e=n(74).default;t.hot.accept(),t.hot.data&&e(n(443).Z)}})()},668:function(t,e,n){"use strict";e.Z={css:null,exports:null,template:(t,e,n,r)=>t('<h1>Page not found</h1><p>Go back to <a href="/">home</a></p>',[]),name:"not-found"},(()=>{{const e=n(74).default;t.hot.accept(),t.hot.data&&e(n(668).Z)}})()},928:function(t,e,n){"use strict";n.d(e,{U2:function(){return i},t8:function(){return u}});var r=n(816);const o=t=>1===t.length?t[0]:t;function u(t,e,n){const o="object"==typeof e?e:{[e]:n},u=Object.keys(o);return(0,r.Z)(t).forEach((t=>{u.forEach((e=>t.setAttribute(e,o[e])))})),t}function i(t,e){return function(t,e,n){const u="string"==typeof e?[e]:e;return o((0,r.Z)(t).map((t=>o(u.map((e=>t[n](e)))))))}(t,e,"getAttribute")}},816:function(t,e,n){"use strict";function r(t){return Array.isArray(t)?t:/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t))&&"number"==typeof t.length?Array.from(t):[t]}n.d(e,{Z:function(){return r}})},717:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return o}});var r=n(816);function o(t,e){return(0,r.Z)("string"==typeof t?(e||document).querySelectorAll(t):t)}},588:function(t,e,n){"use strict";n.d(e,{__:function(){return u}});var r=n(673),o=n(613);const u={cssManager:n(681).ZP,DOMBindings:{template:r.XK,createBinding:r.np,createExpression:r.gY,bindingTypes:r.yb,expressionTypes:r.EJ},globals:{DOM_COMPONENT_INSTANCE_PROPERTY:o.vJ,PARENT_KEY_SYMBOL:o.Aw}}},64:function(t,e,n){"use strict";n.d(e,{w:function(){return o}});var r=n(181);function o(t){return function(e,n,o){let{slots:u,attributes:i,parentScope:s}=void 0===o?{}:o;return function(...t){return t.reduce(((t,e)=>(...n)=>t(e(...n))))}((t=>t.mount(e,s)),(t=>t({props:n,slots:u,attributes:i})),r.V)(t)}}},523:function(t,e,n){"use strict";n.d(e,{L:function(){return o}});var r=n(613);function o(t){return(0,r.mf)(t)||(0,r.je)('riot.pure accepts only arguments of type "function"'),t[r.mb]=!0,t}},373:function(t,e,n){"use strict";n.d(e,{z:function(){return u}});var r=n(613),o=n(181);function u(t,e){let{css:n,template:u,exports:i}=e;return r.d_.has(t)&&(0,r.je)(`The component "${t}" was already registered`),r.d_.set(t,(0,o.V)({name:t,css:n,template:u,exports:i})),r.d_}},181:function(t,e,n){"use strict";n.d(e,{V:function(){return b},E:function(){return x}});var r=n(613);const o=Object.freeze({[r.e4]:r.ZT,[r.cE]:r.ZT,[r.g]:r.ZT}),u=Object.assign({},o,{clone:r.ZT,createDOM:r.ZT});var i=n(673);const s=(t,e)=>t[r.vJ]=e;function a(t){return[r.e4,r.cE,r.g].reduce(((e,n)=>(e[n]=t(n),e)),{})}var c=n(717);const l=Object.freeze({$(t){return(0,c.default)(t,this.root)[0]},$$(t){return(0,c.default)(t,this.root)}}),f=Object.freeze({[r.iR]:r.ZT,[r.jr]:r.ZT,[r.Pu]:r.ZT,[r.QS]:r.ZT,[r.xq]:r.ZT,[r.lD]:r.ZT,[r.WM]:r.ZT});var p=n(681);function d(t,...e){return(...n)=>(n=[...e,...n]).length<t.length?d(t,...n):t(...n)}var h=n(336),m=n(928);function v(t,e){return Object.assign({},t,(0,r.kB)(e))}function g(t,e){let{slots:n,attributes:o,props:u}=e;return(0,r.i6)(function(t){return[...r.lF].reduce(((t,e)=>e(t)||t),t)}((0,r.hc)((0,r.Kn)(t)?Object.create(t):t,{mount(e,c,l){return void 0===c&&(c={}),(0,r._x)(e,r.mb,!1),this[r.Aw]=l,this[r.Kr]=function(t,e){void 0===e&&(e=[]);const n=e.map((e=>(0,i.gY)(t,e))),r={};return Object.assign(r,Object.assign({expressions:n},a((t=>e=>(n.forEach((n=>n[t](e))),r)))))}(e,o).mount(l),(0,r._x)(this,r.qD,Object.freeze(Object.assign({},function(t,e){return void 0===e&&(e={}),Object.assign({},(0,r.$J)(t),(0,r.kB)(e))}(e,u),(0,r.tH)(this[r.Kr].expressions)))),this[r.Yh]=v(this[r.Yh],c),this[r.$l]=this.template.createDOM(e).clone(),s(e,this),t.name&&function(t,e){(0,h.o)(t)!==e&&(0,m.t8)(t,r.Aq,e)}(e,t.name),(0,r._x)(this,r.dz,e),(0,r._x)(this,r.RR,n),this[r.jr](this[r.qD],this[r.Yh]),this[r.$l].mount(e,this,l),this[r.Pu](this[r.qD],this[r.Yh]),this},update(t,e){void 0===t&&(t={}),e&&(this[r.Aw]=e,this[r.Kr].update(e));const n=(0,r.tH)(this[r.Kr].expressions);if(!1!==this[r.iR](n,this[r.qD]))return(0,r._x)(this,r.qD,Object.freeze(Object.assign({},this[r.qD],n))),this[r.Yh]=v(this[r.Yh],t),this[r.QS](this[r.qD],this[r.Yh]),this[r.e]||(this[r.e]=!0,this[r.$l].update(this,this[r.Aw])),this[r.xq](this[r.qD],this[r.Yh]),this[r.e]=!1,this},unmount(t){return this[r.lD](this[r.qD],this[r.Yh]),this[r.Kr].unmount(),this[r.$l].unmount(this,this[r.Aw],null===t?null:!t),this[r.WM](this[r.qD],this[r.Yh]),this}})),Object.keys(t).filter((e=>(0,r.mf)(t[e]))))}function y(t){let{css:e,template:n,componentAPI:o,name:u}=t;return e&&u&&p.ZP.add(u,e),d(g)((0,r.hc)((0,r.u8)(o,Object.assign({},f,{[r.qD]:{},[r.Yh]:{}})),Object.assign({[r.RR]:null,[r.dz]:null},l,{name:u,css:e,template:n})))}function b(t){const{css:e,template:n,exports:c,name:l}=t,f=n?function(t,e){const n=function(t){return void 0===t&&(t={}),Object.entries((0,r.kB)(t)).reduce(((t,e)=>{let[n,o]=e;return t[(0,r.nH)(n)]=b(o),t}),{})}(e.exports?e.exports.components:{});return t(i.XK,i.EJ,i.yb,(t=>t===e.name?x(e):n[t]||r.d_.get(t)))}(n,t):u;return t=>{let{slots:u,attributes:i,props:p}=t;if(c&&c[r.mb])return function(t,e){let{slots:n,attributes:u,props:i,css:c,template:l}=e;l&&(0,r.je)("Pure components can not have html"),c&&(0,r.je)("Pure components do not have css");const f=(0,r.u8)(t({slots:n,attributes:u,props:i}),o);return a((t=>function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];if(t===r.e4){const[t]=n;(0,r._x)(t,r.mb,!0),s(t,f)}return f[t](...n),f}))}(c,{slots:u,attributes:i,props:p,css:e,template:n});const d=(0,r.kB)(c)||{},h=y({css:e,template:f,componentAPI:d,name:l})({slots:u,attributes:i,props:p});return{mount:(t,e,n)=>h.mount(t,n,e),update:(t,e)=>h.update(e,t),unmount:t=>h.unmount(t)}}}const x=(0,r.HP)(b)},681:function(t,e,n){"use strict";n.d(e,{ZP:function(){return s}});var r=n(717),o=n(928);const u=new Map;var i;const s={CSS_BY_NAME:u,add(t,e){return u.has(t)||(u.set(t,e),this.inject()),this},inject(){return(i||(i=(0,r.default)("style[riot]")[0]||document.createElement("style"),(0,o.t8)(i,"type","text/css"),i.parentNode||document.head.appendChild(i),i)).innerHTML=[...u.values()].join("\n"),this},remove(t){return u.has(t)&&(u.delete(t),this.inject()),this}}},795:function(t,e,n){"use strict";n.r(e),n.d(e,{__:function(){return g.__},component:function(){return d.w},install:function(){return f},mount:function(){return c},pure:function(){return h.L},register:function(){return r.z},uninstall:function(){return p},unmount:function(){return l},unregister:function(){return i},version:function(){return v},withTypes:function(){return m}});var r=n(373),o=n(613),u=n(681);function i(t){return o.d_.has(t)||(0,o.je)(`The component "${t}" was never registered`),o.d_.delete(t),u.ZP.remove(t),o.d_}var s=n(717),a=n(336);function c(t,e,n){return(0,s.default)(t).map((t=>function(t,e,n,r){const u=n||(0,a.o)(t);return o.d_.has(u)||(0,o.je)(`The component named "${u}" was never registered`),o.d_.get(u)({props:e,slots:void 0}).mount(t)}(t,e,n)))}function l(t,e){return(0,s.default)(t).map((t=>(t[o.vJ]&&t[o.vJ].unmount(e),t)))}function f(t){return(0,o.mf)(t)||(0,o.je)("Plugins must be of type function"),o.lF.has(t)&&(0,o.je)("This plugin was already installed"),o.lF.add(t),o.lF}function p(t){return o.lF.has(t)||(0,o.je)("This plugin was never installed"),o.lF.delete(t),o.lF}var d=n(64),h=n(523);const m=t=>t,v="WIP";var g=n(588)},336:function(t,e,n){"use strict";n.d(e,{o:function(){return u}});var r=n(613),o=n(928);function u(t){return(0,o.U2)(t,r.Aq)||t.tagName.toLowerCase()}},329:function(t,e,n){var r={"./footer/my-footer.riot":757,"./header/my-header.riot":643};function o(t){var e=u(t);return n(e)}function u(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=u,t.exports=o,o.id=329},471:function(t,e,n){"use strict";n(74);var r=n(64),o=n(833),u=n(373);const i=n(329);i.keys().map((t=>{const e=((t,e="")=>t.split("/").reverse()[0].replace(e,""))(t,".riot"),n=i(t);return(0,u.z)(e,n.default||n),{name:e,component:n}})),(0,r.w)(o.Z)(document.getElementById("root")||document.body)},979:function(t,e){"use strict";e.Z=[{path:"/",label:"Home",componentName:"home",initialProps:{}},{path:"/about",label:"About",componentName:"about",initialProps:{count:0}}]},294:function(t){"use strict";t.exports=url}},function(t){t.O(0,[143],(function(){t.E(229),t.E(521)}),5),t(t.s=471)}]);
//# sourceMappingURL=app.js.map