(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pt(t,e){const n=new Set(t.split(","));return e?s=>n.has(s.toLowerCase()):s=>n.has(s)}const ae=Object.freeze({}),Wn=Object.freeze([]),Oe=()=>{},du=()=>!1,Ys=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Si=t=>t.startsWith("onUpdate:"),me=Object.assign,Jo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},np=Object.prototype.hasOwnProperty,J=(t,e)=>np.call(t,e),$=Array.isArray,yn=t=>Xi(t)==="[object Map]",fu=t=>Xi(t)==="[object Set]",j=t=>typeof t=="function",ge=t=>typeof t=="string",ts=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",Xo=t=>(oe(t)||j(t))&&j(t.then)&&j(t.catch),pu=Object.prototype.toString,Xi=t=>pu.call(t),Zo=t=>Xi(t).slice(8,-1),mu=t=>Xi(t)==="[object Object]",ea=t=>ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,vi=Pt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sp=Pt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Zi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ip=/-(\w)/g,Yn=Zi(t=>t.replace(ip,(e,n)=>n?n.toUpperCase():"")),rp=/\B([A-Z])/g,Jt=Zi(t=>t.replace(rp,"-$1").toLowerCase()),er=Zi(t=>t.charAt(0).toUpperCase()+t.slice(1)),dn=Zi(t=>t?`on${er(t)}`:""),Xt=(t,e)=>!Object.is(t,e),ls=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ti=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},op=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let dl;const ta=()=>dl||(dl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function na(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ge(s)?up(s):na(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(ge(t)||oe(t))return t}const ap=/;(?![^(]*\))/g,lp=/:([^]+)/,cp=/\/\*[^]*?\*\//g;function up(t){const e={};return t.replace(cp,"").split(ap).forEach(n=>{if(n){const s=n.split(lp);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function sa(t){let e="";if(ge(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=sa(t[n]);s&&(e+=s+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const hp="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",dp="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",fp="annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",pp=Pt(hp),mp=Pt(dp),gp=Pt(fp),_p="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yp=Pt(_p);function gu(t){return!!t||t===""}const DS=t=>ge(t)?t:t==null?"":$(t)||oe(t)&&(t.toString===pu||!j(t.toString))?JSON.stringify(t,_u,2):String(t),_u=(t,e)=>e&&e.__v_isRef?_u(t,e.value):yn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[xr(s,r)+" =>"]=i,n),{})}:fu(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>xr(n))}:ts(e)?xr(e):oe(e)&&!$(e)&&!mu(e)?String(e):e,xr=(t,e="")=>{var n;return ts(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function so(t,...e){console.warn(`[Vue warn] ${t}`,...e)}let et;class vp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=et,!e&&et&&(this.index=(et.scopes||(et.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=et;try{return et=this,e()}finally{et=n}}else so("cannot run an inactive effect scope.")}on(){et=this}off(){et=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function bp(t,e=et){e&&e.active&&e.effects.push(t)}function wp(){return et}let vn;class ia{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=3,this._trackId=0,this._runnings=0,this._queryings=0,this._depsLength=0,bp(this,i)}get dirty(){if(this._dirtyLevel===1){this._dirtyLevel=0,this._queryings++,an();for(const e of this.deps)if(e.computed&&(Ep(e.computed),this._dirtyLevel>=2))break;ln(),this._queryings--}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?3:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Gt,n=vn;try{return Gt=!0,vn=this,this._runnings++,fl(this),this.fn()}finally{pl(this),this._runnings--,vn=n,Gt=e}}stop(){var e;this.active&&(fl(this),pl(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Ep(t){return t.value}function fl(t){t._trackId++,t._depsLength=0}function pl(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)yu(t.deps[e],t);t.deps.length=t._depsLength}}function yu(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Gt=!0,io=0;const vu=[];function an(){vu.push(Gt),Gt=!1}function ln(){const t=vu.pop();Gt=t===void 0?!0:t}function ra(){io++}function oa(){for(io--;!io&&ro.length;)ro.shift()()}function bu(t,e,n){var s;if(e.get(t)!==t._trackId){e.set(t,t._trackId);const i=t.deps[t._depsLength];i!==e?(i&&yu(i,t),t.deps[t._depsLength++]=e):t._depsLength++,(s=t.onTrack)==null||s.call(t,me({effect:t},n))}}const ro=[];function wu(t,e,n){var s;ra();for(const i of t.keys())if(!(!i.allowRecurse&&i._runnings)&&i._dirtyLevel<e&&(!i._runnings||e!==2)){const r=i._dirtyLevel;i._dirtyLevel=e,r===0&&(!i._queryings||e!==2)&&((s=i.onTrigger)==null||s.call(i,me({effect:i},n)),i.trigger(),i.scheduler&&ro.push(i.scheduler))}oa()}const Eu=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},oo=new WeakMap,bn=Symbol("iterate"),ao=Symbol("Map key iterate");function ke(t,e,n){if(Gt&&vn){let s=oo.get(t);s||oo.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Eu(()=>s.delete(n))),bu(vn,i,{target:t,type:e,key:n})}}function gt(t,e,n,s,i,r){const o=oo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const l=Number(s);o.forEach((c,h)=>{(h==="length"||!ts(h)&&h>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?ea(n)&&a.push(o.get("length")):(a.push(o.get(bn)),yn(t)&&a.push(o.get(ao)));break;case"delete":$(t)||(a.push(o.get(bn)),yn(t)&&a.push(o.get(ao)));break;case"set":yn(t)&&a.push(o.get(bn));break}ra();for(const l of a)l&&wu(l,3,{target:t,type:e,key:n,newValue:s,oldValue:i,oldTarget:r});oa()}const Cp=Pt("__proto__,__v_isRef,__isVue"),Cu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ts)),ml=Ip();function Ip(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=W(this);for(let r=0,o=this.length;r<o;r++)ke(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(W)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){an(),ra();const s=W(this)[e].apply(this,n);return oa(),ln(),s}}),t}function Sp(t){const e=W(this);return ke(e,"has",t),e.hasOwnProperty(t)}class Iu{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const i=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Nu:Pu:r?xu:Au).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=$(e);if(!i){if(o&&J(ml,n))return Reflect.get(ml,n,s);if(n==="hasOwnProperty")return Sp}const a=Reflect.get(e,n,s);return(ts(n)?Cu.has(n):Cp(n))||(i||ke(e,"get",n),r)?a:xe(a)?o&&ea(n)?a:a.value:oe(a)?i?ku(a):sr(a):a}}class Su extends Iu{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._shallow){const l=Zt(r);if(!Ri(s)&&!Zt(s)&&(r=W(r),s=W(s)),!$(e)&&xe(r)&&!xe(s))return l?!1:(r.value=s,!0)}const o=$(e)&&ea(n)?Number(n)<e.length:J(e,n),a=Reflect.set(e,n,s,i);return e===W(i)&&(o?Xt(s,r)&&gt(e,"set",n,s,r):gt(e,"add",n,s)),a}deleteProperty(e,n){const s=J(e,n),i=e[n],r=Reflect.deleteProperty(e,n);return r&&s&&gt(e,"delete",n,void 0,i),r}has(e,n){const s=Reflect.has(e,n);return(!ts(n)||!Cu.has(n))&&ke(e,"has",n),s}ownKeys(e){return ke(e,"iterate",$(e)?"length":bn),Reflect.ownKeys(e)}}class Tu extends Iu{constructor(e=!1){super(!0,e)}set(e,n){return so(`Set operation on key "${String(n)}" failed: target is readonly.`,e),!0}deleteProperty(e,n){return so(`Delete operation on key "${String(n)}" failed: target is readonly.`,e),!0}}const Tp=new Su,Rp=new Tu,Ap=new Su(!0),xp=new Tu(!0),aa=t=>t,tr=t=>Reflect.getPrototypeOf(t);function ui(t,e,n=!1,s=!1){t=t.__v_raw;const i=W(t),r=W(e);n||(Xt(e,r)&&ke(i,"get",e),ke(i,"get",r));const{has:o}=tr(i),a=s?aa:n?la:Ns;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function hi(t,e=!1){const n=this.__v_raw,s=W(n),i=W(t);return e||(Xt(t,i)&&ke(s,"has",t),ke(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function di(t,e=!1){return t=t.__v_raw,!e&&ke(W(t),"iterate",bn),Reflect.get(t,"size",t)}function gl(t){t=W(t);const e=W(this);return tr(e).has.call(e,t)||(e.add(t),gt(e,"add",t,t)),this}function _l(t,e){e=W(e);const n=W(this),{has:s,get:i}=tr(n);let r=s.call(n,t);r?Ru(n,s,t):(t=W(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Xt(e,o)&&gt(n,"set",t,e,o):gt(n,"add",t,e),this}function yl(t){const e=W(this),{has:n,get:s}=tr(e);let i=n.call(e,t);i?Ru(e,n,t):(t=W(t),i=n.call(e,t));const r=s?s.call(e,t):void 0,o=e.delete(t);return i&&gt(e,"delete",t,void 0,r),o}function vl(){const t=W(this),e=t.size!==0,n=yn(t)?new Map(t):new Set(t),s=t.clear();return e&&gt(t,"clear",void 0,void 0,n),s}function fi(t,e){return function(s,i){const r=this,o=r.__v_raw,a=W(o),l=e?aa:t?la:Ns;return!t&&ke(a,"iterate",bn),o.forEach((c,h)=>s.call(i,l(c),l(h),r))}}function pi(t,e,n){return function(...s){const i=this.__v_raw,r=W(i),o=yn(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),h=n?aa:e?la:Ns;return!e&&ke(r,"iterate",l?ao:bn),{next(){const{value:u,done:d}=c.next();return d?{value:u,done:d}:{value:a?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function $t(t){return function(...e){{const n=e[0]?`on key "${e[0]}" `:"";console.warn(`${er(t)} operation ${n}failed: target is readonly.`,W(this))}return t==="delete"?!1:t==="clear"?void 0:this}}function Pp(){const t={get(r){return ui(this,r)},get size(){return di(this)},has:hi,add:gl,set:_l,delete:yl,clear:vl,forEach:fi(!1,!1)},e={get(r){return ui(this,r,!1,!0)},get size(){return di(this)},has:hi,add:gl,set:_l,delete:yl,clear:vl,forEach:fi(!1,!0)},n={get(r){return ui(this,r,!0)},get size(){return di(this,!0)},has(r){return hi.call(this,r,!0)},add:$t("add"),set:$t("set"),delete:$t("delete"),clear:$t("clear"),forEach:fi(!0,!1)},s={get(r){return ui(this,r,!0,!0)},get size(){return di(this,!0)},has(r){return hi.call(this,r,!0)},add:$t("add"),set:$t("set"),delete:$t("delete"),clear:$t("clear"),forEach:fi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=pi(r,!1,!1),n[r]=pi(r,!0,!1),e[r]=pi(r,!1,!0),s[r]=pi(r,!0,!0)}),[t,n,e,s]}const[Np,Op,kp,Dp]=Pp();function nr(t,e){const n=e?t?Dp:kp:t?Op:Np;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(J(n,i)&&i in s?n:s,i,r)}const Mp={get:nr(!1,!1)},Lp={get:nr(!1,!0)},Fp={get:nr(!0,!1)},$p={get:nr(!0,!0)};function Ru(t,e,n){const s=W(n);if(s!==n&&e.call(t,s)){const i=Zo(t);console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Au=new WeakMap,xu=new WeakMap,Pu=new WeakMap,Nu=new WeakMap;function Bp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Up(t){return t.__v_skip||!Object.isExtensible(t)?0:Bp(Zo(t))}function sr(t){return Zt(t)?t:ir(t,!1,Tp,Mp,Au)}function Ou(t){return ir(t,!1,Ap,Lp,xu)}function ku(t){return ir(t,!0,Rp,Fp,Pu)}function jn(t){return ir(t,!0,xp,$p,Nu)}function ir(t,e,n,s,i){if(!oe(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Up(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function wn(t){return Zt(t)?wn(t.__v_raw):!!(t&&t.__v_isReactive)}function Zt(t){return!!(t&&t.__v_isReadonly)}function Ri(t){return!!(t&&t.__v_isShallow)}function lo(t){return wn(t)||Zt(t)}function W(t){const e=t&&t.__v_raw;return e?W(e):t}function Du(t){return Ti(t,"__v_skip",!0),t}const Ns=t=>oe(t)?sr(t):t,la=t=>oe(t)?ku(t):t;class Mu{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ia(()=>e(this._value),()=>co(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=W(this);return Lu(e),(!e._cacheable||e.effect.dirty)&&Xt(e._value,e._value=e.effect.run())&&co(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function jp(t,e,n=!1){let s,i;const r=j(t);r?(s=t,i=()=>{console.warn("Write operation failed: computed value is readonly")}):(s=t.get,i=t.set);const o=new Mu(s,i,r||!i,n);return e&&!n&&(o.effect.onTrack=e.onTrack,o.effect.onTrigger=e.onTrigger),o}function Lu(t){Gt&&vn&&(t=W(t),bu(vn,t.dep||(t.dep=Eu(()=>t.dep=void 0,t instanceof Mu?t:void 0)),{target:t,type:"get",key:"value"}))}function co(t,e=3,n){t=W(t);const s=t.dep;s&&wu(s,e,{target:t,type:"set",key:"value",newValue:n})}function xe(t){return!!(t&&t.__v_isRef===!0)}function Vp(t){return Fu(t,!1)}function Hp(t){return Fu(t,!0)}function Fu(t,e){return xe(t)?t:new Wp(t,e)}class Wp{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:W(e),this._value=n?e:Ns(e)}get value(){return Lu(this),this._value}set value(e){const n=this.__v_isShallow||Ri(e)||Zt(e);e=n?e:W(e),Xt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ns(e),co(this,3,e))}}function En(t){return xe(t)?t.value:t}const Gp={get:(t,e,n)=>En(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return xe(i)&&!xe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function $u(t){return wn(t)?t:new Proxy(t,Gp)}/**
* @vue/runtime-core v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Cn=[];function bi(t){Cn.push(t)}function wi(){Cn.pop()}function R(t,...e){an();const n=Cn.length?Cn[Cn.length-1].component:null,s=n&&n.appContext.config.warnHandler,i=qp();if(s)St(s,n,11,[t+e.join(""),n&&n.proxy,i.map(({vnode:r})=>`at <${dr(n,r.type)}>`).join(`
`),i]);else{const r=[`[Vue warn]: ${t}`,...e];i.length&&r.push(`
`,...Kp(i)),console.warn(...r)}ln()}function qp(){let t=Cn[Cn.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const s=t.component&&t.component.parent;t=s&&s.vnode}return e}function Kp(t){const e=[];return t.forEach((n,s)=>{e.push(...s===0?[]:[`
`],...zp(n))}),e}function zp({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",s=t.component?t.component.parent==null:!1,i=` at <${dr(t.component,t.type,s)}`,r=">"+n;return t.props?[i,...Yp(t.props),r]:[i+r]}function Yp(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(s=>{e.push(...Bu(s,t[s]))}),n.length>3&&e.push(" ..."),e}function Bu(t,e,n){return ge(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:xe(e)?(e=Bu(t,W(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):j(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=W(e),n?e:[`${t}=`,e])}const ca={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function St(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Qs(r,e,n)}return i}function lt(t,e,n,s){if(j(t)){const r=St(t,e,n,s);return r&&Xo(r)&&r.catch(o=>{Qs(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(lt(t[r],e,n,s));return i}function Qs(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=ca[n];for(;r;){const c=r.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){St(l,null,10,[t,o,a]);return}}Qp(t,n,i,s)}function Qp(t,e,n,s=!0){{const i=ca[e];if(n&&bi(n),R(`Unhandled error${i?` during execution of ${i}`:""}`),n&&wi(),s)throw t;console.error(t)}}let Os=!1,uo=!1;const Ne=[];let pt=0;const Gn=[];let Et=null,Ut=0;const Uu=Promise.resolve();let ua=null;const Jp=100;function ju(t){const e=ua||Uu;return t?e.then(this?t.bind(this):t):e}function Xp(t){let e=pt+1,n=Ne.length;for(;e<n;){const s=e+n>>>1,i=Ne[s],r=ks(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function rr(t){(!Ne.length||!Ne.includes(t,Os&&t.allowRecurse?pt+1:pt))&&(t.id==null?Ne.push(t):Ne.splice(Xp(t.id),0,t),Vu())}function Vu(){!Os&&!uo&&(uo=!0,ua=Uu.then(Gu))}function Zp(t){const e=Ne.indexOf(t);e>pt&&Ne.splice(e,1)}function Hu(t){$(t)?Gn.push(...t):(!Et||!Et.includes(t,t.allowRecurse?Ut+1:Ut))&&Gn.push(t),Vu()}function bl(t,e,n=Os?pt+1:0){for(e=e||new Map;n<Ne.length;n++){const s=Ne[n];if(s&&s.pre){if(t&&s.id!==t.uid||ha(e,s))continue;Ne.splice(n,1),n--,s()}}}function Wu(t){if(Gn.length){const e=[...new Set(Gn)].sort((n,s)=>ks(n)-ks(s));if(Gn.length=0,Et){Et.push(...e);return}for(Et=e,t=t||new Map,Ut=0;Ut<Et.length;Ut++)ha(t,Et[Ut])||Et[Ut]();Et=null,Ut=0}}const ks=t=>t.id==null?1/0:t.id,em=(t,e)=>{const n=ks(t)-ks(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Gu(t){uo=!1,Os=!0,t=t||new Map,Ne.sort(em);const e=n=>ha(t,n);try{for(pt=0;pt<Ne.length;pt++){const n=Ne[pt];if(n&&n.active!==!1){if(e(n))continue;St(n,null,14)}}}finally{pt=0,Ne.length=0,Wu(t),Os=!1,ua=null,(Ne.length||Gn.length)&&Gu(t)}}function ha(t,e){if(!t.has(e))t.set(e,1);else{const n=t.get(e);if(n>Jp){const s=e.ownerInstance,i=s&&Eh(s.type);return Qs(`Maximum recursive updates exceeded${i?` in component <${i}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,null,10),!0}else t.set(e,n+1)}}let In=!1;const Un=new Set;ta().__VUE_HMR_RUNTIME__={createRecord:Pr(qu),rerender:Pr(sm),reload:Pr(im)};const An=new Map;function tm(t){const e=t.type.__hmrId;let n=An.get(e);n||(qu(e,t.type),n=An.get(e)),n.instances.add(t)}function nm(t){An.get(t.type.__hmrId).instances.delete(t)}function qu(t,e){return An.has(t)?!1:(An.set(t,{initialDef:bs(e),instances:new Set}),!0)}function bs(t){return Ch(t)?t.__vccOpts:t}function sm(t,e){const n=An.get(t);n&&(n.initialDef.render=e,[...n.instances].forEach(s=>{e&&(s.render=e,bs(s.type).render=e),s.renderCache=[],In=!0,s.effect.dirty=!0,s.update(),In=!1}))}function im(t,e){const n=An.get(t);if(!n)return;e=bs(e),wl(n.initialDef,e);const s=[...n.instances];for(const i of s){const r=bs(i.type);Un.has(r)||(r!==n.initialDef&&wl(r,e),Un.add(r)),i.appContext.propsCache.delete(i.type),i.appContext.emitsCache.delete(i.type),i.appContext.optionsCache.delete(i.type),i.ceReload?(Un.add(r),i.ceReload(e.styles),Un.delete(r)):i.parent?(i.parent.effect.dirty=!0,rr(i.parent.update)):i.appContext.reload?i.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Hu(()=>{for(const i of s)Un.delete(bs(i.type))})}function wl(t,e){me(t,e);for(const n in t)n!=="__file"&&!(n in e)&&delete t[n]}function Pr(t){return(e,n)=>{try{return t(e,n)}catch(s){console.error(s),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let mt,ys=[],ho=!1;function Js(t,...e){mt?mt.emit(t,...e):ho||ys.push({event:t,args:e})}function Ku(t,e){var n,s;mt=t,mt?(mt.enabled=!0,ys.forEach(({event:i,args:r})=>mt.emit(i,...r)),ys=[]):typeof window<"u"&&window.HTMLElement&&!((s=(n=window.navigator)==null?void 0:n.userAgent)!=null&&s.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{Ku(r,e)}),setTimeout(()=>{mt||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,ho=!0,ys=[])},3e3)):(ho=!0,ys=[])}function rm(t,e){Js("app:init",t,e,{Fragment:tt,Text:Xs,Comment:Ge,Static:Es})}function om(t){Js("app:unmount",t)}const am=da("component:added"),zu=da("component:updated"),lm=da("component:removed"),cm=t=>{mt&&typeof mt.cleanupBuffer=="function"&&!mt.cleanupBuffer(t)&&lm(t)};function da(t){return e=>{Js(t,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}const um=Yu("perf:start"),hm=Yu("perf:end");function Yu(t){return(e,n,s)=>{Js(t,e.appContext.app,e.uid,e,n,s)}}function dm(t,e,n){Js("component:emit",t.appContext.app,t,e,n)}function fm(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ae;{const{emitsOptions:h,propsOptions:[u]}=t;if(h)if(!(e in h))(!u||!(dn(e)in u))&&R(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${dn(e)}" prop.`);else{const d=h[e];j(d)&&(d(...n)||R(`Invalid event arguments: event validation failed for event "${e}".`))}}let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:d}=s[h]||ae;d&&(i=n.map(m=>ge(m)?m.trim():m)),u&&(i=n.map(op))}dm(t,e,i);{const h=e.toLowerCase();h!==e&&s[dn(h)]&&R(`Event "${h}" is emitted in component ${dr(t,t.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Jt(e)}" instead of "${e}".`)}let a,l=s[a=dn(e)]||s[a=dn(Yn(e))];!l&&r&&(l=s[a=dn(Jt(e))]),l&&lt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,lt(c,t,6,i)}}function Qu(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!j(t)){const l=c=>{const h=Qu(c,e,!0);h&&(a=!0,me(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(oe(t)&&s.set(t,null),null):($(r)?r.forEach(l=>o[l]=null):me(o,r),oe(t)&&s.set(t,o),o)}function or(t,e){return!t||!Ys(e)?!1:(e=e.slice(2).replace(/Once$/,""),J(t,e[0].toLowerCase()+e.slice(1))||J(t,Jt(e))||J(t,e))}let We=null,ar=null;function Ai(t){const e=We;return We=t,ar=t&&t.type.__scopeId||null,e}function Ju(t){ar=t}function Xu(){ar=null}function pm(t,e=We,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&kl(-1);const r=Ai(e);let o;try{o=t(...i)}finally{Ai(r),s._d&&kl(1)}return zu(e),o};return s._n=!0,s._c=!0,s._d=!0,s}let fo=!1;function xi(){fo=!0}function Nr(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:h,renderCache:u,data:d,setupState:m,ctx:g,inheritAttrs:S}=t;let k,O;const M=Ai(t);fo=!1;try{if(n.shapeFlag&4){const ie=i||s,_e=m.__isScriptSetup?new Proxy(ie,{get(V,Se,be){return R(`Property '${String(Se)}' was accessed via 'this'. Avoid using 'this' in templates.`),Reflect.get(V,Se,be)}}):ie;k=nt(h.call(_e,ie,u,r,m,d,g)),O=l}else{const ie=e;l===r&&xi(),k=nt(ie.length>1?ie(r,{get attrs(){return xi(),l},slots:a,emit:c}):ie(r,null)),O=e.props?l:gm(l)}}catch(ie){Cs.length=0,Qs(ie,t,1),k=Ae(Ge)}let B=k,q;if(k.patchFlag>0&&k.patchFlag&2048&&([B,q]=mm(k)),O&&S!==!1){const ie=Object.keys(O),{shapeFlag:_e}=B;if(ie.length){if(_e&7)o&&ie.some(Si)&&(O=_m(O,o)),B=en(B,O);else if(!fo&&B.type!==Ge){const V=Object.keys(l),Se=[],be=[];for(let ze=0,Xe=V.length;ze<Xe;ze++){const Fe=V[ze];Ys(Fe)?Si(Fe)||Se.push(Fe[2].toLowerCase()+Fe.slice(3)):be.push(Fe)}be.length&&R(`Extraneous non-props attributes (${be.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),Se.length&&R(`Extraneous non-emits event listeners (${Se.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(El(B)||R("Runtime directive used on component with non-element root node. The directives will not function as intended."),B=en(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(El(B)||R("Component inside <Transition> renders non-element root node that cannot be animated."),B.transition=n.transition),q?q(B):k=B,Ai(M),k}const mm=t=>{const e=t.children,n=t.dynamicChildren,s=Zu(e);if(!s)return[t,void 0];const i=e.indexOf(s),r=n?n.indexOf(s):-1,o=a=>{e[i]=a,n&&(r>-1?n[r]=a:a.patchFlag>0&&(t.dynamicChildren=[...n,a]))};return[nt(s),o]};function Zu(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(Ms(s)){if(s.type!==Ge||s.children==="v-if"){if(e)return;e=s}}else return}return e}const gm=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ys(n))&&((e||(e={}))[n]=t[n]);return e},_m=(t,e)=>{const n={};for(const s in t)(!Si(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n},El=t=>t.shapeFlag&7||t.type===Ge;function ym(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if((i||a)&&In||e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Cl(s,o,c):!!o;if(l&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(o[d]!==s[d]&&!or(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Cl(s,o,c):!0:!!o;return!1}function Cl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!or(n,r))return!0}return!1}function vm({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const bm=Symbol.for("v-ndc"),wm=t=>t.__isSuspense;function Em(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):Hu(t)}const Cm=Symbol.for("v-scx"),Im=()=>{{const t=Tt(Cm);return t||R("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function Sm(t,e){return fa(t,null,e)}const mi={};function ws(t,e,n){return j(e)||R("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),fa(t,e,n)}function fa(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:a}=ae){if(e&&r){const V=e;e=(...Se)=>{V(...Se),_e()}}s!==void 0&&typeof s=="number"&&R('watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'),e||(n!==void 0&&R('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),s!==void 0&&R('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'),r!==void 0&&R('watch() "once" option is only respected when using the watch(source, callback, options?) signature.'));const l=V=>{R("Invalid watch source: ",V,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=Re,h=V=>s===!0?V:Vn(V,s===!1?1:void 0);let u,d=!1,m=!1;if(xe(t)?(u=()=>t.value,d=Ri(t)):wn(t)?(u=()=>h(t),d=!0):$(t)?(m=!0,d=t.some(V=>wn(V)||Ri(V)),u=()=>t.map(V=>{if(xe(V))return V.value;if(wn(V))return h(V);if(j(V))return St(V,c,2);l(V)})):j(t)?e?u=()=>St(t,c,2):u=()=>(g&&g(),lt(t,c,3,[S])):(u=Oe,l(t)),e&&s){const V=u;u=()=>Vn(V())}let g,S=V=>{g=q.onStop=()=>{St(V,c,4),g=q.onStop=void 0}},k;if(hr)if(S=Oe,e?n&&lt(e,c,3,[u(),m?[]:void 0,S]):u(),i==="sync"){const V=Im();k=V.__watcherHandles||(V.__watcherHandles=[])}else return Oe;let O=m?new Array(t.length).fill(mi):mi;const M=()=>{if(!(!q.active||!q.dirty))if(e){const V=q.run();(s||d||(m?V.some((Se,be)=>Xt(Se,O[be])):Xt(V,O)))&&(g&&g(),lt(e,c,3,[V,O===mi?void 0:m&&O[0]===mi?[]:O,S]),O=V)}else q.run()};M.allowRecurse=!!e;let B;i==="sync"?B=M:i==="post"?B=()=>$e(M,c&&c.suspense):(M.pre=!0,c&&(M.id=c.uid),B=()=>rr(M));const q=new ia(u,Oe,B),ie=wp(),_e=()=>{q.stop(),ie&&Jo(ie.effects,q)};return q.onTrack=o,q.onTrigger=a,e?n?M():O=q.run():i==="post"?$e(q.run.bind(q),c&&c.suspense):q.run(),k&&k.push(_e),_e}function Tm(t,e,n){const s=this.proxy,i=ge(t)?t.includes(".")?eh(s,t):()=>s[t]:t.bind(s,s);let r;j(e)?r=e:(r=e.handler,n=e);const o=Zs(this),a=fa(i,r.bind(s),n);return o(),a}function eh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Vn(t,e,n=0,s){if(!oe(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(s=s||new Set,s.has(t))return t;if(s.add(t),xe(t))Vn(t.value,e,n,s);else if($(t))for(let i=0;i<t.length;i++)Vn(t[i],e,n,s);else if(fu(t)||yn(t))t.forEach(i=>{Vn(i,e,n,s)});else if(mu(t))for(const i in t)Vn(t[i],e,n,s);return t}function th(t){sp(t)&&R("Do not use built-in directive ids as custom directive id: "+t)}function un(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(an(),lt(l,n,8,[t.el,a,t,e]),ln())}}/*! #__NO_SIDE_EFFECTS__ */function nh(t,e){return j(t)?me({name:t.name},e,{setup:t}):t}const Ei=t=>!!t.type.__asyncLoader,pa=t=>t.type.__isKeepAlive;function Rm(t,e){sh(t,"a",e)}function Am(t,e){sh(t,"da",e)}function sh(t,e,n=Re){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(lr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)pa(i.parent.vnode)&&xm(s,e,n,i),i=i.parent}}function xm(t,e,n,s){const i=lr(e,t,s,!0);ih(()=>{Jo(s[e],i)},n)}function lr(t,e,n=Re,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;an();const a=Zs(n),l=lt(e,n,t,o);return a(),ln(),l});return s?i.unshift(r):i.push(r),r}else{const i=dn(ca[t].replace(/ hook$/,""));R(`${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const Nt=t=>(e,n=Re)=>(!hr||t==="sp")&&lr(t,(...s)=>e(...s),n),Pm=Nt("bm"),Nm=Nt("m"),Om=Nt("bu"),km=Nt("u"),Dm=Nt("bum"),ih=Nt("um"),Mm=Nt("sp"),Lm=Nt("rtg"),Fm=Nt("rtc");function $m(t,e=Re){lr("ec",t,e)}function MS(t,e,n,s){let i;const r=n&&n[s];if($(t)||ge(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){Number.isInteger(t)||R(`The v-for range expect an integer value but got ${t}.`),i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(oe(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const po=t=>t?bh(t)?va(t)||t.proxy:po(t.parent):null,Sn=me(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>jn(t.props),$attrs:t=>jn(t.attrs),$slots:t=>jn(t.slots),$refs:t=>jn(t.refs),$parent:t=>po(t.parent),$root:t=>po(t.root),$emit:t=>t.emit,$options:t=>ga(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,rr(t.update)}),$nextTick:t=>t.n||(t.n=ju.bind(t.proxy)),$watch:t=>Tm.bind(t)}),ma=t=>t==="_"||t==="$",Or=(t,e)=>t!==ae&&!t.__isScriptSetup&&J(t,e),rh={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;if(e==="__isVue")return!0;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Or(s,e))return o[e]=1,s[e];if(i!==ae&&J(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&J(c,e))return o[e]=3,r[e];if(n!==ae&&J(n,e))return o[e]=4,n[e];mo&&(o[e]=0)}}const h=Sn[e];let u,d;if(h)return e==="$attrs"?(ke(t,"get",e),xi()):e==="$slots"&&ke(t,"get",e),h(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==ae&&J(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,J(d,e))return d[e];We&&(!ge(e)||e.indexOf("__v")!==0)&&(i!==ae&&ma(e[0])&&J(i,e)?R(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===We&&R(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`))},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Or(i,e)?(i[e]=n,!0):i.__isScriptSetup&&J(i,e)?(R(`Cannot mutate <script setup> binding "${e}" from Options API.`),!1):s!==ae&&J(s,e)?(s[e]=n,!0):J(t.props,e)?(R(`Attempting to mutate prop "${e}". Props are readonly.`),!1):e[0]==="$"&&e.slice(1)in t?(R(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`),!1):(e in t.appContext.config.globalProperties?Object.defineProperty(r,e,{enumerable:!0,configurable:!0,value:n}):r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ae&&J(t,o)||Or(e,o)||(a=r[0])&&J(a,o)||J(s,o)||J(Sn,o)||J(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:J(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};rh.ownKeys=t=>(R("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function Bm(t){const e={};return Object.defineProperty(e,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(Sn).forEach(n=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,get:()=>Sn[n](t),set:Oe})}),e}function Um(t){const{ctx:e,propsOptions:[n]}=t;n&&Object.keys(n).forEach(s=>{Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>t.props[s],set:Oe})})}function jm(t){const{ctx:e,setupState:n}=t;Object.keys(W(n)).forEach(s=>{if(!n.__isScriptSetup){if(ma(s[0])){R(`setup() return property ${JSON.stringify(s)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>n[s],set:Oe})}})}function Il(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function Vm(){const t=Object.create(null);return(e,n)=>{t[n]?R(`${e} property "${n}" is already defined in ${t[n]}.`):t[n]=e}}let mo=!0;function Hm(t){const e=ga(t),n=t.proxy,s=t.ctx;mo=!1,e.beforeCreate&&Sl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:u,mounted:d,beforeUpdate:m,updated:g,activated:S,deactivated:k,beforeDestroy:O,beforeUnmount:M,destroyed:B,unmounted:q,render:ie,renderTracked:_e,renderTriggered:V,errorCaptured:Se,serverPrefetch:be,expose:ze,inheritAttrs:Xe,components:Fe,directives:ut,filters:li}=e,Ye=Vm();{const[K]=t.propsOptions;if(K)for(const z in K)Ye("Props",z)}if(c&&Wm(c,s,Ye),o)for(const K in o){const z=o[K];j(z)?(Object.defineProperty(s,K,{value:z.bind(n),configurable:!0,enumerable:!0,writable:!0}),Ye("Methods",K)):R(`Method "${K}" has type "${typeof z}" in the component definition. Did you reference the function correctly?`)}if(i){j(i)||R("The data option must be a function. Plain object usage is no longer supported.");const K=i.call(n,n);if(Xo(K)&&R("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!oe(K))R("data() should return an object.");else{t.data=sr(K);for(const z in K)Ye("Data",z),ma(z[0])||Object.defineProperty(s,z,{configurable:!0,enumerable:!0,get:()=>K[z],set:Oe})}}if(mo=!0,r)for(const K in r){const z=r[K],Qe=j(z)?z.bind(n,n):j(z.get)?z.get.bind(n,n):Oe;Qe===Oe&&R(`Computed property "${K}" has no getter.`);const cn=!j(z)&&j(z.set)?z.set.bind(n):()=>{R(`Write operation failed: computed property "${K}" is readonly.`)},Mt=st({get:Qe,set:cn});Object.defineProperty(s,K,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:ht=>Mt.value=ht}),Ye("Computed",K)}if(a)for(const K in a)oh(a[K],s,n,K);if(l){const K=j(l)?l.call(n):l;Reflect.ownKeys(K).forEach(z=>{Ci(z,K[z])})}h&&Sl(h,t,"c");function Te(K,z){$(z)?z.forEach(Qe=>K(Qe.bind(n))):z&&K(z.bind(n))}if(Te(Pm,u),Te(Nm,d),Te(Om,m),Te(km,g),Te(Rm,S),Te(Am,k),Te($m,Se),Te(Fm,_e),Te(Lm,V),Te(Dm,M),Te(ih,q),Te(Mm,be),$(ze))if(ze.length){const K=t.exposed||(t.exposed={});ze.forEach(z=>{Object.defineProperty(K,z,{get:()=>n[z],set:Qe=>n[z]=Qe})})}else t.exposed||(t.exposed={});ie&&t.render===Oe&&(t.render=ie),Xe!=null&&(t.inheritAttrs=Xe),Fe&&(t.components=Fe),ut&&(t.directives=ut)}function Wm(t,e,n=Oe){$(t)&&(t=go(t));for(const s in t){const i=t[s];let r;oe(i)?"default"in i?r=Tt(i.from||s,i.default,!0):r=Tt(i.from||s):r=Tt(i),xe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r,n("Inject",s)}}function Sl(t,e,n){lt($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function oh(t,e,n,s){const i=s.includes(".")?eh(n,s):()=>n[s];if(ge(t)){const r=e[t];j(r)?ws(i,r):R(`Invalid watch handler specified by key "${t}"`,r)}else if(j(t))ws(i,t.bind(n));else if(oe(t))if($(t))t.forEach(r=>oh(r,e,n,s));else{const r=j(t.handler)?t.handler.bind(n):e[t.handler];j(r)?ws(i,r,t):R(`Invalid watch handler specified by key "${t.handler}"`,r)}else R(`Invalid watch option: "${s}"`,t)}function ga(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Pi(l,c,o,!0)),Pi(l,e,o)),oe(e)&&r.set(e,l),l}function Pi(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Pi(t,r,n,!0),i&&i.forEach(o=>Pi(t,o,n,!0));for(const o in e)if(s&&o==="expose")R('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=Gm[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Gm={data:Tl,props:Rl,emits:Rl,methods:vs,computed:vs,beforeCreate:Me,created:Me,beforeMount:Me,mounted:Me,beforeUpdate:Me,updated:Me,beforeDestroy:Me,beforeUnmount:Me,destroyed:Me,unmounted:Me,activated:Me,deactivated:Me,errorCaptured:Me,serverPrefetch:Me,components:vs,directives:vs,watch:Km,provide:Tl,inject:qm};function Tl(t,e){return e?t?function(){return me(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function qm(t,e){return vs(go(t),go(e))}function go(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Me(t,e){return t?[...new Set([].concat(t,e))]:e}function vs(t,e){return t?me(Object.create(null),t,e):e}function Rl(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:me(Object.create(null),Il(t),Il(e??{})):e}function Km(t,e){if(!t)return e;if(!e)return t;const n=me(Object.create(null),t);for(const s in e)n[s]=Me(t[s],e[s]);return n}function ah(){return{app:null,config:{isNativeTag:du,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zm=0;function Ym(t,e){return function(s,i=null){j(s)||(s=me({},s)),i!=null&&!oe(i)&&(R("root props passed to app.mount() must be an object."),i=null);const r=ah(),o=new WeakSet;let a=!1;const l=r.app={_uid:zm++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Ll,get config(){return r.config},set config(c){R("app.config cannot be replaced. Modify individual options instead.")},use(c,...h){return o.has(c)?R("Plugin has already been applied to target app."):c&&j(c.install)?(o.add(c),c.install(l,...h)):j(c)?(o.add(c),c(l,...h)):R('A plugin must either be a function or an object with an "install" function.'),l},mixin(c){return r.mixins.includes(c)?R("Mixin has already been applied to target app"+(c.name?`: ${c.name}`:"")):r.mixins.push(c),l},component(c,h){return Eo(c,r.config),h?(r.components[c]&&R(`Component "${c}" has already been registered in target app.`),r.components[c]=h,l):r.components[c]},directive(c,h){return th(c),h?(r.directives[c]&&R(`Directive "${c}" has already been registered in target app.`),r.directives[c]=h,l):r.directives[c]},mount(c,h,u){if(a)R("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{c.__vue_app__&&R("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const d=Ae(s,i);return d.appContext=r,u===!0?u="svg":u===!1&&(u=void 0),r.reload=()=>{t(en(d),c,u)},h&&e?e(d,c):t(d,c,u),a=!0,l._container=c,c.__vue_app__=l,l._instance=d.component,rm(l,Ll),va(d.component)||d.component.proxy}},unmount(){a?(t(null,l._container),l._instance=null,om(l),delete l._container.__vue_app__):R("Cannot unmount an app that is not mounted.")},provide(c,h){return c in r.provides&&R(`App already provides property with key "${String(c)}". It will be overwritten with the new value.`),r.provides[c]=h,l},runWithContext(c){Ni=l;try{return c()}finally{Ni=null}}};return l}}let Ni=null;function Ci(t,e){if(!Re)R("provide() can only be used inside setup().");else{let n=Re.provides;const s=Re.parent&&Re.parent.provides;s===n&&(n=Re.provides=Object.create(s)),n[t]=e}}function Tt(t,e,n=!1){const s=Re||We;if(s||Ni){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Ni._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&j(e)?e.call(s&&s.proxy):e;R(`injection "${String(t)}" not found.`)}else R("inject() can only be used inside setup() or functional components.")}function Qm(t,e,n,s=!1){const i={},r={};Ti(r,ur,1),t.propsDefaults=Object.create(null),lh(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);uh(e||{},i,t),n?t.props=s?i:Ou(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Jm(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function Xm(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=W(i),[l]=t.propsOptions;let c=!1;if(!Jm(t)&&(s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(or(t.emitsOptions,d))continue;const m=e[d];if(l)if(J(r,d))m!==r[d]&&(r[d]=m,c=!0);else{const g=Yn(d);i[g]=_o(l,a,g,m,t,!1)}else m!==r[d]&&(r[d]=m,c=!0)}}}else{lh(t,e,i,r)&&(c=!0);let h;for(const u in a)(!e||!J(e,u)&&((h=Jt(u))===u||!J(e,h)))&&(l?n&&(n[u]!==void 0||n[h]!==void 0)&&(i[u]=_o(l,a,u,void 0,t,!0)):delete i[u]);if(r!==a)for(const u in r)(!e||!J(e,u))&&(delete r[u],c=!0)}c&&gt(t,"set","$attrs"),uh(e||{},i,t)}function lh(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(vi(l))continue;const c=e[l];let h;i&&J(i,h=Yn(l))?!r||!r.includes(h)?n[h]=c:(a||(a={}))[h]=c:or(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=W(n),c=a||ae;for(let h=0;h<r.length;h++){const u=r[h];n[u]=_o(i,l,u,c[u],t,!J(c,u))}}return o}function _o(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=J(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&j(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const h=Zs(i);s=c[n]=l.call(null,e),h()}}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Jt(n))&&(s=!0))}return s}function ch(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!j(t)){const h=u=>{l=!0;const[d,m]=ch(u,e,!0);me(o,d),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!l)return oe(t)&&s.set(t,Wn),Wn;if($(r))for(let h=0;h<r.length;h++){ge(r[h])||R("props must be strings when using array syntax.",r[h]);const u=Yn(r[h]);Al(u)&&(o[u]=ae)}else if(r){oe(r)||R("invalid props options",r);for(const h in r){const u=Yn(h);if(Al(u)){const d=r[h],m=o[u]=$(d)||j(d)?{type:d}:me({},d);if(m){const g=Pl(Boolean,m.type),S=Pl(String,m.type);m[0]=g>-1,m[1]=S<0||g<S,(g>-1||J(m,"default"))&&a.push(u)}}}}const c=[o,a];return oe(t)&&s.set(t,c),c}function Al(t){return t[0]!=="$"?!0:(R(`Invalid prop name: "${t}" is a reserved property.`),!1)}function yo(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function xl(t,e){return yo(t)===yo(e)}function Pl(t,e){return $(e)?e.findIndex(n=>xl(n,t)):j(e)&&xl(e,t)?0:-1}function uh(t,e,n){const s=W(e),i=n.propsOptions[0];for(const r in i){let o=i[r];o!=null&&Zm(r,s[r],o,jn(s),!J(t,r)&&!J(t,Jt(r)))}}function Zm(t,e,n,s,i){const{type:r,required:o,validator:a,skipCheck:l}=n;if(o&&i){R('Missing required prop: "'+t+'"');return}if(!(e==null&&!o)){if(r!=null&&r!==!0&&!l){let c=!1;const h=$(r)?r:[r],u=[];for(let d=0;d<h.length&&!c;d++){const{valid:m,expectedType:g}=tg(e,h[d]);u.push(g||""),c=m}if(!c){R(ng(t,e,u));return}}a&&!a(e,s)&&R('Invalid prop: custom validator check failed for prop "'+t+'".')}}const eg=Pt("String,Number,Boolean,Function,Symbol,BigInt");function tg(t,e){let n;const s=yo(e);if(eg(s)){const i=typeof t;n=i===s.toLowerCase(),!n&&i==="object"&&(n=t instanceof e)}else s==="Object"?n=oe(t):s==="Array"?n=$(t):s==="null"?n=t===null:n=t instanceof e;return{valid:n,expectedType:s}}function ng(t,e,n){if(n.length===0)return`Prop type [] for prop "${t}" won't match anything. Did you mean to use type Array instead?`;let s=`Invalid prop: type check failed for prop "${t}". Expected ${n.map(er).join(" | ")}`;const i=n[0],r=Zo(e),o=Nl(e,i),a=Nl(e,r);return n.length===1&&Ol(i)&&!sg(i,r)&&(s+=` with value ${o}`),s+=`, got ${r} `,Ol(r)&&(s+=`with value ${a}.`),s}function Nl(t,e){return e==="String"?`"${t}"`:e==="Number"?`${Number(t)}`:`${t}`}function Ol(t){return["string","number","boolean"].some(n=>t.toLowerCase()===n)}function sg(...t){return t.some(e=>e.toLowerCase()==="boolean")}const hh=t=>t[0]==="_"||t==="$stable",_a=t=>$(t)?t.map(nt):[nt(t)],ig=(t,e,n)=>{if(e._n)return e;const s=pm((...i)=>(Re&&R(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),_a(e(...i))),n);return s._c=!1,s},dh=(t,e,n)=>{const s=t._ctx;for(const i in t){if(hh(i))continue;const r=t[i];if(j(r))e[i]=ig(i,r,s);else if(r!=null){R(`Non-function value encountered for slot "${i}". Prefer function slots for better performance.`);const o=_a(r);e[i]=()=>o}}},fh=(t,e)=>{pa(t.vnode)||R("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=_a(e);t.slots.default=()=>n},rg=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=W(e),Ti(e,"_",n)):dh(e,t.slots={})}else t.slots={},e&&fh(t,e);Ti(t.slots,ur,1)},og=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ae;if(s.shapeFlag&32){const a=e._;a?In?(me(i,e),gt(t,"set","$slots")):n&&a===1?r=!1:(me(i,e),!n&&a===1&&delete i._):(r=!e.$stable,dh(e,i)),o=e}else e&&(fh(t,e),o={default:1});if(r)for(const a in i)!hh(a)&&o[a]==null&&delete i[a]};function vo(t,e,n,s,i=!1){if($(t)){t.forEach((d,m)=>vo(d,e&&($(e)?e[m]:e),n,s,i));return}if(Ei(s)&&!i)return;const r=s.shapeFlag&4?va(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t;if(!a){R("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const c=e&&e.r,h=a.refs===ae?a.refs={}:a.refs,u=a.setupState;if(c!=null&&c!==l&&(ge(c)?(h[c]=null,J(u,c)&&(u[c]=null)):xe(c)&&(c.value=null)),j(l))St(l,a,12,[o,h]);else{const d=ge(l),m=xe(l);if(d||m){const g=()=>{if(t.f){const S=d?J(u,l)?u[l]:h[l]:l.value;i?$(S)&&Jo(S,r):$(S)?S.includes(r)||S.push(r):d?(h[l]=[r],J(u,l)&&(u[l]=h[l])):(l.value=[r],t.k&&(h[t.k]=l.value))}else d?(h[l]=o,J(u,l)&&(u[l]=o)):m?(l.value=o,t.k&&(h[t.k]=o)):R("Invalid template ref type:",l,`(${typeof l})`)};o?(g.id=-1,$e(g,n)):g()}else R("Invalid template ref type:",l,`(${typeof l})`)}}let cs,Wt;function bt(t,e){t.appContext.config.performance&&Oi()&&Wt.mark(`vue-${e}-${t.uid}`),um(t,e,Oi()?Wt.now():Date.now())}function wt(t,e){if(t.appContext.config.performance&&Oi()){const n=`vue-${e}-${t.uid}`,s=n+":end";Wt.mark(s),Wt.measure(`<${dr(t,t.type)}> ${e}`,n,s),Wt.clearMarks(n),Wt.clearMarks(s)}hm(t,e,Oi()?Wt.now():Date.now())}function Oi(){return cs!==void 0||(typeof window<"u"&&window.performance?(cs=!0,Wt=window.performance):cs=!1),cs}function ag(){const t=[];if(t.length){const e=t.length>1;console.warn(`Feature flag${e?"s":""} ${t.join(", ")} ${e?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const $e=Em;function lg(t){return cg(t)}function cg(t,e){ag();const n=ta();n.__VUE__=!0,Ku(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:d,setScopeId:m=Oe,insertStaticContent:g}=t,S=(f,p,_,v=null,b=null,C=null,A=void 0,E=null,T=In?!1:!!p.dynamicChildren)=>{if(f===p)return;f&&!us(f,p)&&(v=P(f),Je(f,b,C,!0),f=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:w,ref:N,shapeFlag:F}=p;switch(w){case Xs:k(f,p,_,v);break;case Ge:O(f,p,_,v);break;case Es:f==null?M(p,_,v,A):B(f,p,_,A);break;case tt:ut(f,p,_,v,b,C,A,E,T);break;default:F&1?_e(f,p,_,v,b,C,A,E,T):F&6?li(f,p,_,v,b,C,A,E,T):F&64||F&128?w.process(f,p,_,v,b,C,A,E,T,Y):R("Invalid VNode type:",w,`(${typeof w})`)}N!=null&&b&&vo(N,f&&f.ref,C,p||f,!p)},k=(f,p,_,v)=>{if(f==null)s(p.el=a(p.children),_,v);else{const b=p.el=f.el;p.children!==f.children&&c(b,p.children)}},O=(f,p,_,v)=>{f==null?s(p.el=l(p.children||""),_,v):p.el=f.el},M=(f,p,_,v)=>{[f.el,f.anchor]=g(f.children,p,_,v,f.el,f.anchor)},B=(f,p,_,v)=>{if(p.children!==f.children){const b=d(f.anchor);ie(f),[p.el,p.anchor]=g(p.children,_,b,v)}else p.el=f.el,p.anchor=f.anchor},q=({el:f,anchor:p},_,v)=>{let b;for(;f&&f!==p;)b=d(f),s(f,_,v),f=b;s(p,_,v)},ie=({el:f,anchor:p})=>{let _;for(;f&&f!==p;)_=d(f),i(f),f=_;i(p)},_e=(f,p,_,v,b,C,A,E,T)=>{p.type==="svg"?A="svg":p.type==="math"&&(A="mathml"),f==null?V(p,_,v,b,C,A,E,T):ze(f,p,b,C,A,E,T)},V=(f,p,_,v,b,C,A,E)=>{let T,w;const{props:N,shapeFlag:F,transition:L,dirs:H}=f;if(T=f.el=o(f.type,C,N&&N.is,N),F&8?h(T,f.children):F&16&&be(f.children,T,null,v,b,kr(f,C),A,E),H&&un(f,null,v,"created"),Se(T,f,f.scopeId,A,v),N){for(const re in N)re!=="value"&&!vi(re)&&r(T,re,null,N[re],C,f.children,v,b,y);"value"in N&&r(T,"value",null,N.value,C),(w=N.onVnodeBeforeMount)&&ft(w,v,f)}Object.defineProperty(T,"__vnode",{value:f,enumerable:!1}),Object.defineProperty(T,"__vueParentComponent",{value:v,enumerable:!1}),H&&un(f,null,v,"beforeMount");const Z=ug(b,L);Z&&L.beforeEnter(T),s(T,p,_),((w=N&&N.onVnodeMounted)||Z||H)&&$e(()=>{w&&ft(w,v,f),Z&&L.enter(T),H&&un(f,null,v,"mounted")},b)},Se=(f,p,_,v,b)=>{if(_&&m(f,_),v)for(let C=0;C<v.length;C++)m(f,v[C]);if(b){let C=b.subTree;if(C.patchFlag>0&&C.patchFlag&2048&&(C=Zu(C.children)||C),p===C){const A=b.vnode;Se(f,A,A.scopeId,A.slotScopeIds,b.parent)}}},be=(f,p,_,v,b,C,A,E,T=0)=>{for(let w=T;w<f.length;w++){const N=f[w]=E?jt(f[w]):nt(f[w]);S(null,N,p,_,v,b,C,A,E)}},ze=(f,p,_,v,b,C,A)=>{const E=p.el=f.el;let{patchFlag:T,dynamicChildren:w,dirs:N}=p;T|=f.patchFlag&16;const F=f.props||ae,L=p.props||ae;let H;if(_&&hn(_,!1),(H=L.onVnodeBeforeUpdate)&&ft(H,_,p,f),N&&un(p,f,_,"beforeUpdate"),_&&hn(_,!0),In&&(T=0,A=!1,w=null),w?(Xe(f.dynamicChildren,w,E,_,v,kr(p,b),C),bo(f,p)):A||Qe(f,p,E,null,_,v,kr(p,b),C,!1),T>0){if(T&16)Fe(E,p,F,L,_,v,b);else if(T&2&&F.class!==L.class&&r(E,"class",null,L.class,b),T&4&&r(E,"style",F.style,L.style,b),T&8){const Z=p.dynamicProps;for(let re=0;re<Z.length;re++){const fe=Z[re],we=F[fe],Ze=L[fe];(Ze!==we||fe==="value")&&r(E,fe,we,Ze,b,f.children,_,v,y)}}T&1&&f.children!==p.children&&h(E,p.children)}else!A&&w==null&&Fe(E,p,F,L,_,v,b);((H=L.onVnodeUpdated)||N)&&$e(()=>{H&&ft(H,_,p,f),N&&un(p,f,_,"updated")},v)},Xe=(f,p,_,v,b,C,A)=>{for(let E=0;E<p.length;E++){const T=f[E],w=p[E],N=T.el&&(T.type===tt||!us(T,w)||T.shapeFlag&70)?u(T.el):_;S(T,w,N,null,v,b,C,A,!0)}},Fe=(f,p,_,v,b,C,A)=>{if(_!==v){if(_!==ae)for(const E in _)!vi(E)&&!(E in v)&&r(f,E,_[E],null,A,p.children,b,C,y);for(const E in v){if(vi(E))continue;const T=v[E],w=_[E];T!==w&&E!=="value"&&r(f,E,w,T,A,p.children,b,C,y)}"value"in v&&r(f,"value",_.value,v.value,A)}},ut=(f,p,_,v,b,C,A,E,T)=>{const w=p.el=f?f.el:a(""),N=p.anchor=f?f.anchor:a("");let{patchFlag:F,dynamicChildren:L,slotScopeIds:H}=p;(In||F&2048)&&(F=0,T=!1,L=null),H&&(E=E?E.concat(H):H),f==null?(s(w,_,v),s(N,_,v),be(p.children||[],_,N,b,C,A,E,T)):F>0&&F&64&&L&&f.dynamicChildren?(Xe(f.dynamicChildren,L,_,b,C,A,E),bo(f,p)):Qe(f,p,_,N,b,C,A,E,T)},li=(f,p,_,v,b,C,A,E,T)=>{p.slotScopeIds=E,f==null?p.shapeFlag&512?b.ctx.activate(p,_,v,A,T):Ye(p,_,v,b,C,A,T):Te(f,p,T)},Ye=(f,p,_,v,b,C,A)=>{const E=f.component=Eg(f,v,b);if(E.type.__hmrId&&tm(E),bi(f),bt(E,"mount"),pa(f)&&(E.ctx.renderer=Y),bt(E,"init"),Ig(E),wt(E,"init"),E.asyncDep){if(b&&b.registerDep(E,K),!f.el){const T=E.subTree=Ae(Ge);O(null,T,p,_)}}else K(E,f,p,_,b,C,A);wi(),wt(E,"mount")},Te=(f,p,_)=>{const v=p.component=f.component;if(ym(f,p,_))if(v.asyncDep&&!v.asyncResolved){bi(p),z(v,p,_),wi();return}else v.next=p,Zp(v.update),v.effect.dirty=!0,v.update();else p.el=f.el,v.vnode=p},K=(f,p,_,v,b,C,A)=>{const E=()=>{if(f.isMounted){let{next:N,bu:F,u:L,parent:H,vnode:Z}=f;{const Fn=ph(f);if(Fn){N&&(N.el=Z.el,z(f,N,A)),Fn.asyncDep.then(()=>{f.isUnmounted||E()});return}}let re=N,fe;bi(N||f.vnode),hn(f,!1),N?(N.el=Z.el,z(f,N,A)):N=Z,F&&ls(F),(fe=N.props&&N.props.onVnodeBeforeUpdate)&&ft(fe,H,N,Z),hn(f,!0),bt(f,"render");const we=Nr(f);wt(f,"render");const Ze=f.subTree;f.subTree=we,bt(f,"patch"),S(Ze,we,u(Ze.el),P(Ze),f,b,C),wt(f,"patch"),N.el=we.el,re===null&&vm(f,we.el),L&&$e(L,b),(fe=N.props&&N.props.onVnodeUpdated)&&$e(()=>ft(fe,H,N,Z),b),zu(f),wi()}else{let N;const{el:F,props:L}=p,{bm:H,m:Z,parent:re}=f,fe=Ei(p);if(hn(f,!1),H&&ls(H),!fe&&(N=L&&L.onVnodeBeforeMount)&&ft(N,re,p),hn(f,!0),F&&G){const we=()=>{bt(f,"render"),f.subTree=Nr(f),wt(f,"render"),bt(f,"hydrate"),G(F,f.subTree,f,b,null),wt(f,"hydrate")};fe?p.type.__asyncLoader().then(()=>!f.isUnmounted&&we()):we()}else{bt(f,"render");const we=f.subTree=Nr(f);wt(f,"render"),bt(f,"patch"),S(null,we,_,v,f,b,C),wt(f,"patch"),p.el=we.el}if(Z&&$e(Z,b),!fe&&(N=L&&L.onVnodeMounted)){const we=p;$e(()=>ft(N,re,we),b)}(p.shapeFlag&256||re&&Ei(re.vnode)&&re.vnode.shapeFlag&256)&&f.a&&$e(f.a,b),f.isMounted=!0,am(f),p=_=v=null}},T=f.effect=new ia(E,Oe,()=>rr(w),f.scope),w=f.update=()=>{T.dirty&&T.run()};w.id=f.uid,hn(f,!0),T.onTrack=f.rtc?N=>ls(f.rtc,N):void 0,T.onTrigger=f.rtg?N=>ls(f.rtg,N):void 0,w.ownerInstance=f,w()},z=(f,p,_)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,Xm(f,p.props,v,_),og(f,p.children,_),an(),bl(f),ln()},Qe=(f,p,_,v,b,C,A,E,T=!1)=>{const w=f&&f.children,N=f?f.shapeFlag:0,F=p.children,{patchFlag:L,shapeFlag:H}=p;if(L>0){if(L&128){Mt(w,F,_,v,b,C,A,E,T);return}else if(L&256){cn(w,F,_,v,b,C,A,E,T);return}}H&8?(N&16&&y(w,b,C),F!==w&&h(_,F)):N&16?H&16?Mt(w,F,_,v,b,C,A,E,T):y(w,b,C,!0):(N&8&&h(_,""),H&16&&be(F,_,v,b,C,A,E,T))},cn=(f,p,_,v,b,C,A,E,T)=>{f=f||Wn,p=p||Wn;const w=f.length,N=p.length,F=Math.min(w,N);let L;for(L=0;L<F;L++){const H=p[L]=T?jt(p[L]):nt(p[L]);S(f[L],H,_,null,b,C,A,E,T)}w>N?y(f,b,C,!0,!1,F):be(p,_,v,b,C,A,E,T,F)},Mt=(f,p,_,v,b,C,A,E,T)=>{let w=0;const N=p.length;let F=f.length-1,L=N-1;for(;w<=F&&w<=L;){const H=f[w],Z=p[w]=T?jt(p[w]):nt(p[w]);if(us(H,Z))S(H,Z,_,null,b,C,A,E,T);else break;w++}for(;w<=F&&w<=L;){const H=f[F],Z=p[L]=T?jt(p[L]):nt(p[L]);if(us(H,Z))S(H,Z,_,null,b,C,A,E,T);else break;F--,L--}if(w>F){if(w<=L){const H=L+1,Z=H<N?p[H].el:v;for(;w<=L;)S(null,p[w]=T?jt(p[w]):nt(p[w]),_,Z,b,C,A,E,T),w++}}else if(w>L)for(;w<=F;)Je(f[w],b,C,!0),w++;else{const H=w,Z=w,re=new Map;for(w=Z;w<=L;w++){const De=p[w]=T?jt(p[w]):nt(p[w]);De.key!=null&&(re.has(De.key)&&R("Duplicate keys found during update:",JSON.stringify(De.key),"Make sure keys are unique."),re.set(De.key,w))}let fe,we=0;const Ze=L-Z+1;let Fn=!1,cl=0;const as=new Array(Ze);for(w=0;w<Ze;w++)as[w]=0;for(w=H;w<=F;w++){const De=f[w];if(we>=Ze){Je(De,b,C,!0);continue}let dt;if(De.key!=null)dt=re.get(De.key);else for(fe=Z;fe<=L;fe++)if(as[fe-Z]===0&&us(De,p[fe])){dt=fe;break}dt===void 0?Je(De,b,C,!0):(as[dt-Z]=w+1,dt>=cl?cl=dt:Fn=!0,S(De,p[dt],_,null,b,C,A,E,T),we++)}const ul=Fn?hg(as):Wn;for(fe=ul.length-1,w=Ze-1;w>=0;w--){const De=Z+w,dt=p[De],hl=De+1<N?p[De+1].el:v;as[w]===0?S(null,dt,_,hl,b,C,A,E,T):Fn&&(fe<0||w!==ul[fe]?ht(dt,_,hl,2):fe--)}}},ht=(f,p,_,v,b=null)=>{const{el:C,type:A,transition:E,children:T,shapeFlag:w}=f;if(w&6){ht(f.component.subTree,p,_,v);return}if(w&128){f.suspense.move(p,_,v);return}if(w&64){A.move(f,p,_,Y);return}if(A===tt){s(C,p,_);for(let F=0;F<T.length;F++)ht(T[F],p,_,v);s(f.anchor,p,_);return}if(A===Es){q(f,p,_);return}if(v!==2&&w&1&&E)if(v===0)E.beforeEnter(C),s(C,p,_),$e(()=>E.enter(C),b);else{const{leave:F,delayLeave:L,afterLeave:H}=E,Z=()=>s(C,p,_),re=()=>{F(C,()=>{Z(),H&&H()})};L?L(C,Z,re):re()}else s(C,p,_)},Je=(f,p,_,v=!1,b=!1)=>{const{type:C,props:A,ref:E,children:T,dynamicChildren:w,shapeFlag:N,patchFlag:F,dirs:L}=f;if(E!=null&&vo(E,null,_,f,!0),N&256){p.ctx.deactivate(f);return}const H=N&1&&L,Z=!Ei(f);let re;if(Z&&(re=A&&A.onVnodeBeforeUnmount)&&ft(re,p,f),N&6)Ft(f.component,_,v);else{if(N&128){f.suspense.unmount(_,v);return}H&&un(f,null,p,"beforeUnmount"),N&64?f.type.remove(f,p,_,b,Y,v):w&&(C!==tt||F>0&&F&64)?y(w,p,_,!1,!0):(C===tt&&F&384||!b&&N&16)&&y(T,p,_),v&&Lt(f)}(Z&&(re=A&&A.onVnodeUnmounted)||H)&&$e(()=>{re&&ft(re,p,f),H&&un(f,null,p,"unmounted")},_)},Lt=f=>{const{type:p,el:_,anchor:v,transition:b}=f;if(p===tt){f.patchFlag>0&&f.patchFlag&2048&&b&&!b.persisted?f.children.forEach(A=>{A.type===Ge?i(A.el):Lt(A)}):ci(_,v);return}if(p===Es){ie(f);return}const C=()=>{i(_),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:A,delayLeave:E}=b,T=()=>A(_,C);E?E(f.el,C,T):T()}else C()},ci=(f,p)=>{let _;for(;f!==p;)_=d(f),i(f),f=_;i(p)},Ft=(f,p,_)=>{f.type.__hmrId&&nm(f);const{bum:v,scope:b,update:C,subTree:A,um:E}=f;v&&ls(v),b.stop(),C&&(C.active=!1,Je(A,f,p,_)),E&&$e(E,p),$e(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve()),cm(f)},y=(f,p,_,v=!1,b=!1,C=0)=>{for(let A=C;A<f.length;A++)Je(f[A],p,_,v,b)},P=f=>f.shapeFlag&6?P(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let x=!1;const D=(f,p,_)=>{f==null?p._vnode&&Je(p._vnode,null,null,!0):S(p._vnode||null,f,p,null,null,null,_),x||(x=!0,bl(),Wu(),x=!1),p._vnode=f},Y={p:S,um:Je,m:ht,r:Lt,mt:Ye,mc:be,pc:Qe,pbc:Xe,n:P,o:t};let de,G;return e&&([de,G]=e(Y)),{render:D,hydrate:de,createApp:Ym(D,de)}}function kr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function hn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ug(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function bo(t,e,n=!1){const s=t.children,i=e.children;if($(s)&&$(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=jt(i[r]),a.el=o.el),n||bo(o,a)),a.type===Xs&&(a.el=o.el),a.type===Ge&&!a.el&&(a.el=o.el)}}function hg(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function ph(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ph(e)}const dg=t=>t.__isTeleport,tt=Symbol.for("v-fgt"),Xs=Symbol.for("v-txt"),Ge=Symbol.for("v-cmt"),Es=Symbol.for("v-stc"),Cs=[];let rt=null;function ns(t=!1){Cs.push(rt=t?null:[])}function fg(){Cs.pop(),rt=Cs[Cs.length-1]||null}let Ds=1;function kl(t){Ds+=t}function mh(t){return t.dynamicChildren=Ds>0?rt||Wn:null,fg(),Ds>0&&rt&&rt.push(t),t}function cr(t,e,n,s,i,r){return mh(Be(t,e,n,s,i,r,!0))}function gh(t,e,n,s,i){return mh(Ae(t,e,n,s,i,!0))}function Ms(t){return t?t.__v_isVNode===!0:!1}function us(t,e){return e.shapeFlag&6&&Un.has(e.type)?(t.shapeFlag&=-257,e.shapeFlag&=-513,!1):t.type===e.type&&t.key===e.key}const pg=(...t)=>mg(...t),ur="__vInternal",_h=({key:t})=>t??null,Ii=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ge(t)||xe(t)||j(t)?{i:We,r:t,k:e,f:!!n}:t:null);function Be(t,e=null,n=null,s=0,i=null,r=t===tt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_h(e),ref:e&&Ii(e),scopeId:ar,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:We};return a?(ya(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=ge(n)?8:16),l.key!==l.key&&R("VNode created with invalid key (NaN). VNode type:",l.type),Ds>0&&!o&&rt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&rt.push(l),l}const Ae=pg;function mg(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===bm)&&(t||R(`Invalid vnode type when creating vnode: ${t}.`),t=Ge),Ms(t)){const a=en(t,e,!0);return n&&ya(a,n),Ds>0&&!r&&rt&&(a.shapeFlag&6?rt[rt.indexOf(t)]=a:rt.push(a)),a.patchFlag|=-2,a}if(Ch(t)&&(t=t.__vccOpts),e){e=gg(e);let{class:a,style:l}=e;a&&!ge(a)&&(e.class=sa(a)),oe(l)&&(lo(l)&&!$(l)&&(l=me({},l)),e.style=na(l))}const o=ge(t)?1:wm(t)?128:dg(t)?64:oe(t)?4:j(t)?2:0;return o&4&&lo(t)&&(t=W(t),R("Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),Be(t,e,n,s,i,o,r,!0)}function gg(t){return t?lo(t)||ur in t?me({},t):t:null}function en(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?vg(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&_h(a),ref:e&&e.ref?n&&i?$(i)?i.concat(Ii(e)):[i,Ii(e)]:Ii(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:r===-1&&$(o)?o.map(yh):o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==tt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&en(t.ssContent),ssFallback:t.ssFallback&&en(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function yh(t){const e=en(t);return $(t.children)&&(e.children=t.children.map(yh)),e}function _g(t=" ",e=0){return Ae(Xs,null,t,e)}function yg(t,e){const n=Ae(Es,null,t);return n.staticCount=e,n}function LS(t="",e=!1){return e?(ns(),gh(Ge,null,t)):Ae(Ge,null,t)}function nt(t){return t==null||typeof t=="boolean"?Ae(Ge):$(t)?Ae(tt,null,t.slice()):typeof t=="object"?jt(t):Ae(Xs,null,String(t))}function jt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:en(t)}function ya(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),ya(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(ur in e)?e._ctx=We:i===3&&We&&(We.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:We},n=32):(e=String(e),s&64?(n=16,e=[_g(e)]):n=8);t.children=e,t.shapeFlag|=n}function vg(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=sa([e.class,s.class]));else if(i==="style")e.style=na([e.style,s.style]);else if(Ys(i)){const r=e[i],o=s[i];o&&r!==o&&!($(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ft(t,e,n,s=null){lt(t,e,7,[n,s])}const bg=ah();let wg=0;function Eg(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||bg,r={uid:wg++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new vp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ch(s,i),emitsOptions:Qu(s,i),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:s.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=Bm(r),r.root=e?e.root:r,r.emit=fm.bind(null,r),t.ce&&t.ce(r),r}let Re=null;const vh=()=>Re||We;let ki,wo;{const t=ta(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};ki=e("__VUE_INSTANCE_SETTERS__",n=>Re=n),wo=e("__VUE_SSR_SETTERS__",n=>hr=n)}const Zs=t=>{const e=Re;return ki(t),t.scope.on(),()=>{t.scope.off(),ki(e)}},Dl=()=>{Re&&Re.scope.off(),ki(null)},Cg=Pt("slot,component");function Eo(t,e){const n=e.isNativeTag||du;(Cg(t)||n(t))&&R("Do not use built-in or reserved HTML elements as component id: "+t)}function bh(t){return t.vnode.shapeFlag&4}let hr=!1;function Ig(t,e=!1){e&&wo(e);const{props:n,children:s}=t.vnode,i=bh(t);Qm(t,n,i,e),rg(t,s);const r=i?Sg(t,e):void 0;return e&&wo(!1),r}function Sg(t,e){var n;const s=t.type;{if(s.name&&Eo(s.name,t.appContext.config),s.components){const r=Object.keys(s.components);for(let o=0;o<r.length;o++)Eo(r[o],t.appContext.config)}if(s.directives){const r=Object.keys(s.directives);for(let o=0;o<r.length;o++)th(r[o])}s.compilerOptions&&Tg()&&R('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=Du(new Proxy(t.ctx,rh)),Um(t);const{setup:i}=s;if(i){const r=t.setupContext=i.length>1?xg(t):null,o=Zs(t);an();const a=St(i,t,0,[jn(t.props),r]);if(ln(),o(),Xo(a)){if(a.then(Dl,Dl),e)return a.then(l=>{Ml(t,l,e)}).catch(l=>{Qs(l,t,0)});if(t.asyncDep=a,!t.suspense){const l=(n=s.name)!=null?n:"Anonymous";R(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Ml(t,a,e)}else wh(t,e)}function Ml(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)?(Ms(e)&&R("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=e,t.setupState=$u(e),jm(t)):e!==void 0&&R(`setup() should return an object. Received: ${e===null?"null":typeof e}`),wh(t,n)}let Co;const Tg=()=>!Co;function wh(t,e,n){const s=t.type;if(!t.render){if(!e&&Co&&!s.render){const i=s.template||ga(t).template;if(i){bt(t,"compile");const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=me(me({isCustomElement:r,delimiters:a},o),l);s.render=Co(i,c),wt(t,"compile")}}t.render=s.render||Oe}{const i=Zs(t);an();try{Hm(t)}finally{ln(),i()}}!s.render&&t.render===Oe&&!e&&(s.template?R('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):R("Component is missing template or render function."))}function Rg(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return xi(),ke(t,"get","$attrs"),e[n]},set(){return R("setupContext.attrs is readonly."),!1},deleteProperty(){return R("setupContext.attrs is readonly."),!1}}))}function Ag(t){return t.slotsProxy||(t.slotsProxy=new Proxy(t.slots,{get(e,n){return ke(t,"get","$slots"),e[n]}}))}function xg(t){return Object.freeze({get attrs(){return Rg(t)},get slots(){return Ag(t)},get emit(){return(n,...s)=>t.emit(n,...s)},expose:n=>{if(t.exposed&&R("expose() should be called only once per setup()."),n!=null){let s=typeof n;s==="object"&&($(n)?s="array":xe(n)&&(s="ref")),s!=="object"&&R(`expose() should be passed a plain object, received ${s}.`)}t.exposed=n||{}}})}function va(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy($u(Du(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Sn)return Sn[n](t)},has(e,n){return n in e||n in Sn}}))}const Pg=/(?:^|[-_])(\w)/g,Ng=t=>t.replace(Pg,e=>e.toUpperCase()).replace(/[-_]/g,"");function Eh(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function dr(t,e,n=!1){let s=Eh(e);if(!s&&e.__file){const i=e.__file.match(/([^/\\]+)\.\w+$/);i&&(s=i[1])}if(!s&&t&&t.parent){const i=r=>{for(const o in r)if(r[o]===e)return o};s=i(t.components||t.parent.type.components)||i(t.appContext.components)}return s?Ng(s):n?"App":"Anonymous"}function Ch(t){return j(t)&&"__vccOpts"in t}const st=(t,e)=>jp(t,e,hr);function Ih(t,e,n){const s=arguments.length;return s===2?oe(e)&&!$(e)?Ms(e)?Ae(t,null,[e]):Ae(t,e):Ae(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ms(n)&&(n=[n]),Ae(t,e,n))}function Dr(t){return!!(t&&t.__v_isShallow)}function Og(){if(typeof window>"u")return;const t={style:"color:#3ba776"},e={style:"color:#1677ff"},n={style:"color:#f5222d"},s={style:"color:#eb2f96"},i={header(u){return oe(u)?u.__isVue?["div",t,"VueInstance"]:xe(u)?["div",{},["span",t,h(u)],"<",a(u.value),">"]:wn(u)?["div",{},["span",t,Dr(u)?"ShallowReactive":"Reactive"],"<",a(u),`>${Zt(u)?" (readonly)":""}`]:Zt(u)?["div",{},["span",t,Dr(u)?"ShallowReadonly":"Readonly"],"<",a(u),">"]:null:null},hasBody(u){return u&&u.__isVue},body(u){if(u&&u.__isVue)return["div",{},...r(u.$)]}};function r(u){const d=[];u.type.props&&u.props&&d.push(o("props",W(u.props))),u.setupState!==ae&&d.push(o("setup",u.setupState)),u.data!==ae&&d.push(o("data",W(u.data)));const m=l(u,"computed");m&&d.push(o("computed",m));const g=l(u,"inject");return g&&d.push(o("injected",g)),d.push(["div",{},["span",{style:s.style+";opacity:0.66"},"$ (internal): "],["object",{object:u}]]),d}function o(u,d){return d=me({},d),Object.keys(d).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},u],["div",{style:"padding-left:1.25em"},...Object.keys(d).map(m=>["div",{},["span",s,m+": "],a(d[m],!1)])]]:["span",{}]}function a(u,d=!0){return typeof u=="number"?["span",e,u]:typeof u=="string"?["span",n,JSON.stringify(u)]:typeof u=="boolean"?["span",s,u]:oe(u)?["object",{object:d?W(u):u}]:["span",n,String(u)]}function l(u,d){const m=u.type;if(j(m))return;const g={};for(const S in u.ctx)c(m,S,d)&&(g[S]=u.ctx[S]);return g}function c(u,d,m){const g=u[m];if($(g)&&g.includes(d)||oe(g)&&d in g||u.extends&&c(u.extends,d,m)||u.mixins&&u.mixins.some(S=>c(S,d,m)))return!0}function h(u){return Dr(u)?"ShallowRef":u.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(i):window.devtoolsFormatters=[i]}const Ll="3.4.10",Tn=R;/**
* @vue/runtime-dom v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const kg="http://www.w3.org/2000/svg",Dg="http://www.w3.org/1998/Math/MathML",Vt=typeof document<"u"?document:null,Fl=Vt&&Vt.createElement("template"),Mg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Vt.createElementNS(kg,t):e==="mathml"?Vt.createElementNS(Dg,t):Vt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Vt.createTextNode(t),createComment:t=>Vt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Vt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Fl.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=Fl.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Lg=Symbol("_vtc");function Fg(t,e,n){const s=t[Lg];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const $g=Symbol("_vod"),Bg=Symbol("CSS_VAR_TEXT");function Ug(t,e,n){const s=t.style,i=s.display,r=ge(n);if(n&&!r){if(e&&!ge(e))for(const o in e)n[o]==null&&Io(s,o,"");for(const o in n)Io(s,o,n[o])}else if(r){if(e!==n){const o=s[Bg];o&&(n+=";"+o),s.cssText=n}}else e&&t.removeAttribute("style");$g in t&&(s.display=i)}const jg=/[^\\];\s*$/,$l=/\s*!important$/;function Io(t,e,n){if($(n))n.forEach(s=>Io(t,e,s));else if(n==null&&(n=""),jg.test(n)&&Tn(`Unexpected semicolon at the end of '${e}' style value: '${n}'`),e.startsWith("--"))t.setProperty(e,n);else{const s=Vg(t,e);$l.test(n)?t.setProperty(Jt(s),n.replace($l,""),"important"):t[s]=n}}const Bl=["Webkit","Moz","ms"],Mr={};function Vg(t,e){const n=Mr[e];if(n)return n;let s=Yn(e);if(s!=="filter"&&s in t)return Mr[e]=s;s=er(s);for(let i=0;i<Bl.length;i++){const r=Bl[i]+s;if(r in t)return Mr[e]=r}return e}const Ul="http://www.w3.org/1999/xlink";function Hg(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ul,e.slice(6,e.length)):t.setAttributeNS(Ul,e,n);else{const r=yp(e);n==null||r&&!gu(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Wg(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,h=n??"";c!==h&&(t.value=h),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=gu(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch(c){l||Tn(`Failed setting prop "${e}" on <${a.toLowerCase()}>: value ${n} is invalid.`,c)}l&&t.removeAttribute(e)}function Gg(t,e,n,s){t.addEventListener(e,n,s)}function qg(t,e,n,s){t.removeEventListener(e,n,s)}const jl=Symbol("_vei");function Kg(t,e,n,s,i=null){const r=t[jl]||(t[jl]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=zg(e);if(s){const c=r[e]=Jg(s,i);Gg(t,a,c,l)}else o&&(qg(t,a,o,l),r[e]=void 0)}}const Vl=/(?:Once|Passive|Capture)$/;function zg(t){let e;if(Vl.test(t)){e={};let s;for(;s=t.match(Vl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Jt(t.slice(2)),e]}let Lr=0;const Yg=Promise.resolve(),Qg=()=>Lr||(Yg.then(()=>Lr=0),Lr=Date.now());function Jg(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;lt(Xg(s,n.value),e,5,[s])};return n.value=t,n.attached=Qg(),n}function Xg(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Hl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Zg=(t,e,n,s,i,r,o,a,l)=>{const c=i==="svg";e==="class"?Fg(t,s,c):e==="style"?Ug(t,n,s):Ys(e)?Si(e)||Kg(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):e_(t,e,s,c))?Wg(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Hg(t,e,s,c))};function e_(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Hl(e)&&j(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Hl(e)&&ge(n)?!1:e in t}const t_=["ctrl","shift","alt","meta"],n_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>t_.some(n=>t[`${n}Key`]&&!e.includes(n))},s_=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=n_[e[o]];if(a&&a(i,e))return}return t(i,...r)})},i_=me({patchProp:Zg},Mg);let Wl;function r_(){return Wl||(Wl=lg(i_))}const o_=(...t)=>{const e=r_().createApp(...t);l_(e),c_(e);const{mount:n}=e;return e.mount=s=>{const i=u_(s);if(!i)return;const r=e._component;!j(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,a_(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function a_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function l_(t){Object.defineProperty(t.config,"isNativeTag",{value:e=>pp(e)||mp(e)||gp(e),writable:!1})}function c_(t){{const e=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return e},set(){Tn("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=t.config.compilerOptions,s='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(t.config,"compilerOptions",{get(){return Tn(s),n},set(){Tn(s)}})}}function u_(t){if(ge(t)){const e=document.querySelector(t);return e||Tn(`Failed to mount app: mount target selector "${t}" returned null.`),e}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&Tn('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}/**
* vue v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function h_(){Og()}h_();function d_(){return Sh().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Sh(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const f_=typeof Proxy=="function",p_="devtools-plugin:setup",m_="plugin:settings:set";let $n,So;function g_(){var t;return $n!==void 0||(typeof window<"u"&&window.performance?($n=!0,So=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?($n=!0,So=global.perf_hooks.performance):$n=!1),$n}function __(){return g_()?So.now():Date.now()}class y_{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},s);try{const o=localStorage.getItem(i),a=JSON.parse(o);Object.assign(r,a)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}r=o},now(){return __()}},n&&n.on(m_,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function v_(t,e){const n=t,s=Sh(),i=d_(),r=f_&&n.enableEarlyProxy;if(i&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))i.emit(p_,t,e);else{const o=r?new y_(n,i):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ct=typeof window<"u";function b_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const se=Object.assign;function Fr(t,e){const n={};for(const s in e){const i=e[s];n[s]=Ke(i)?i.map(t):t(i)}return n}const Is=()=>{},Ke=Array.isArray;function te(t){const e=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(e))}const w_=/\/$/,E_=t=>t.replace(w_,"");function $r(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=S_(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function C_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Gl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ql(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&tn(e.matched[s],n.matched[i])&&Th(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function tn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Th(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!I_(t[n],e[n]))return!1;return!0}function I_(t,e){return Ke(t)?Kl(t,e):Ke(e)?Kl(e,t):t===e}function Kl(t,e){return Ke(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function S_(t,e){if(t.startsWith("/"))return t;if(!e.startsWith("/"))return te(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${e}". It should look like "/${e}".`),t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Ls;(function(t){t.pop="pop",t.push="push"})(Ls||(Ls={}));var Ss;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ss||(Ss={}));function T_(t){if(!t)if(Ct){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),E_(t)}const R_=/^[^#]+#/;function A_(t,e){return t.replace(R_,"#")+e}function x_(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const fr=()=>({left:window.pageXOffset,top:window.pageYOffset});function P_(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#");if(typeof t.el=="string"&&(!s||!document.getElementById(t.el.slice(1))))try{const r=document.querySelector(t.el);if(s&&r){te(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{te(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i){te(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}e=x_(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function zl(t,e){return(history.state?history.state.position-e:-1)+t}const To=new Map;function N_(t,e){To.set(t,e)}function O_(t){const e=To.get(t);return To.delete(t),e}let k_=()=>location.protocol+"//"+location.host;function Rh(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Gl(l,"")}return Gl(n,t)+s+i}function D_(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const m=Rh(t,location),g=n.value,S=e.value;let k=0;if(d){if(n.value=m,e.value=d,o&&o===g){o=null;return}k=S?d.position-S.position:0}else s(m);i.forEach(O=>{O(n.value,g,{delta:k,type:Ls.pop,direction:k?k>0?Ss.forward:Ss.back:Ss.unknown})})};function l(){o=n.value}function c(d){i.push(d);const m=()=>{const g=i.indexOf(d);g>-1&&i.splice(g,1)};return r.push(m),m}function h(){const{history:d}=window;d.state&&d.replaceState(se({},d.state,{scroll:fr()}),"")}function u(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function Yl(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?fr():null}}function M_(t){const{history:e,location:n}=window,s={value:Rh(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,h){const u=t.indexOf("#"),d=u>-1?(n.host&&document.querySelector("base")?t:t.slice(u))+l:k_()+t+l;try{e[h?"replaceState":"pushState"](c,"",d),i.value=c}catch(m){te("Error with push/replace State",m),n[h?"replace":"assign"](d)}}function o(l,c){const h=se({},e.state,Yl(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,h,!0),s.value=l}function a(l,c){const h=se({},i.value,e.state,{forward:l,scroll:fr()});e.state||te(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(h.current,h,!0);const u=se({},Yl(s.value,l,null),{position:h.position+1},c);r(l,u,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function L_(t){t=T_(t);const e=M_(t),n=D_(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=se({location:"",base:t,go:s,createHref:A_.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function F_(t){return typeof t=="string"||t&&typeof t=="object"}function Ah(t){return typeof t=="string"||typeof t=="symbol"}const Bt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xh=Symbol("navigation failure");var Ql;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ql||(Ql={}));const $_={1({location:t,currentLocation:e}){return`No match for
 ${JSON.stringify(t)}${e?`
while being at
`+JSON.stringify(e):""}`},2({from:t,to:e}){return`Redirected from "${t.fullPath}" to "${U_(e)}" via a navigation guard.`},4({from:t,to:e}){return`Navigation aborted from "${t.fullPath}" to "${e.fullPath}" via a navigation guard.`},8({from:t,to:e}){return`Navigation cancelled from "${t.fullPath}" to "${e.fullPath}" with a new navigation.`},16({from:t,to:e}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function Qn(t,e){return se(new Error($_[t](e)),{type:t,[xh]:!0},e)}function vt(t,e){return t instanceof Error&&xh in t&&(e==null||!!(t.type&e))}const B_=["params","query","hash"];function U_(t){if(typeof t=="string")return t;if("path"in t)return t.path;const e={};for(const n of B_)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const Jl="[^/]+?",j_={sensitive:!1,strict:!1,start:!0,end:!0},V_=/[.+*?^${}()[\]/\\]/g;function H_(t,e){const n=se({},j_,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const h=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let u=0;u<c.length;u++){const d=c[u];let m=40+(n.sensitive?.25:0);if(d.type===0)u||(i+="/"),i+=d.value.replace(V_,"\\$&"),m+=40;else if(d.type===1){const{value:g,repeatable:S,optional:k,regexp:O}=d;r.push({name:g,repeatable:S,optional:k});const M=O||Jl;if(M!==Jl){m+=10;try{new RegExp(`(${M})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${g}" (${M}): `+q.message)}}let B=S?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;u||(B=k&&c.length<2?`(?:/${B})`:"/"+B),k&&(B+="?"),i+=B,m+=20,k&&(m+=-8),S&&(m+=-20),M===".*"&&(m+=-50)}h.push(m)}s.push(h)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const h=c.match(o),u={};if(!h)return null;for(let d=1;d<h.length;d++){const m=h[d]||"",g=r[d-1];u[g.name]=m&&g.repeatable?m.split("/"):m}return u}function l(c){let h="",u=!1;for(const d of t){(!u||!h.endsWith("/"))&&(h+="/"),u=!1;for(const m of d)if(m.type===0)h+=m.value;else if(m.type===1){const{value:g,repeatable:S,optional:k}=m,O=g in c?c[g]:"";if(Ke(O)&&!S)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const M=Ke(O)?O.join("/"):O;if(!M)if(k)d.length<2&&(h.endsWith("/")?h=h.slice(0,-1):u=!0);else throw new Error(`Missing required param "${g}"`);h+=M}}return h||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function W_(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function G_(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=W_(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Xl(s))return 1;if(Xl(i))return-1}return i.length-s.length}function Xl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const q_={type:0,value:""},K_=/[a-zA-Z0-9_]/;function z_(t){if(!t)return[[]];if(t==="/")return[[q_]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",h="";function u(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&u(),o()):l===":"?(u(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:K_.test(l)?d():(u(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:u(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),u(),o(),i}function Y_(t,e,n){const s=H_(z_(t.path),n);{const r=new Set;for(const o of s.keys)r.has(o.name)&&te(`Found duplicated params with name "${o.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),r.add(o.name)}const i=se(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Q_(t,e){const n=[],s=new Map;e=tc({strict:!1,end:!0,sensitive:!1},e);function i(h){return s.get(h)}function r(h,u,d){const m=!d,g=J_(h);ty(g,u),g.aliasOf=d&&d.record;const S=tc(e,h),k=[g];if("alias"in h){const B=typeof h.alias=="string"?[h.alias]:h.alias;for(const q of B)k.push(se({},g,{components:d?d.record.components:g.components,path:q,aliasOf:d?d.record:g}))}let O,M;for(const B of k){const{path:q}=B;if(u&&q[0]!=="/"){const ie=u.record.path,_e=ie[ie.length-1]==="/"?"":"/";B.path=u.record.path+(q&&_e+q)}if(B.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(O=Y_(B,u,S),u&&q[0]==="/"&&ny(O,u),d?(d.alias.push(O),ey(d,O)):(M=M||O,M!==O&&M.alias.push(O),m&&h.name&&!ec(O)&&o(h.name)),g.children){const ie=g.children;for(let _e=0;_e<ie.length;_e++)r(ie[_e],O,d&&d.children[_e])}d=d||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&l(O)}return M?()=>{o(M)}:Is}function o(h){if(Ah(h)){const u=s.get(h);u&&(s.delete(h),n.splice(n.indexOf(u),1),u.children.forEach(o),u.alias.forEach(o))}else{const u=n.indexOf(h);u>-1&&(n.splice(u,1),h.record.name&&s.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){let u=0;for(;u<n.length&&G_(h,n[u])>=0&&(h.record.path!==n[u].record.path||!Ph(h,n[u]));)u++;n.splice(u,0,h),h.record.name&&!ec(h)&&s.set(h.record.name,h)}function c(h,u){let d,m={},g,S;if("name"in h&&h.name){if(d=s.get(h.name),!d)throw Qn(1,{location:h});{const M=Object.keys(h.params||{}).filter(B=>!d.keys.find(q=>q.name===B));M.length&&te(`Discarded invalid param(s) "${M.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}S=d.record.name,m=se(Zl(u.params,d.keys.filter(M=>!M.optional).map(M=>M.name)),h.params&&Zl(h.params,d.keys.map(M=>M.name))),g=d.stringify(m)}else if("path"in h)g=h.path,g.startsWith("/")||te(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`),d=n.find(M=>M.re.test(g)),d&&(m=d.parse(g),S=d.record.name);else{if(d=u.name?s.get(u.name):n.find(M=>M.re.test(u.path)),!d)throw Qn(1,{location:h,currentLocation:u});S=d.record.name,m=se({},u.params,h.params),g=d.stringify(m)}const k=[];let O=d;for(;O;)k.unshift(O.record),O=O.parent;return{name:S,path:g,params:m,matched:k,meta:Z_(k)}}return t.forEach(h=>r(h)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Zl(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function J_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:X_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function X_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function ec(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Z_(t){return t.reduce((e,n)=>se(e,n.meta),{})}function tc(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Ro(t,e){return t.name===e.name&&t.optional===e.optional&&t.repeatable===e.repeatable}function ey(t,e){for(const n of t.keys)if(!n.optional&&!e.keys.find(Ro.bind(null,n)))return te(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`);for(const n of e.keys)if(!n.optional&&!t.keys.find(Ro.bind(null,n)))return te(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`)}function ty(t,e){e&&e.record.name&&!t.name&&!t.path&&te(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function ny(t,e){for(const n of e.keys)if(!t.keys.find(Ro.bind(null,n)))return te(`Absolute path "${t.record.path}" must have the exact same param named "${n.name}" as its parent "${e.record.path}".`)}function Ph(t,e){return e.children.some(n=>n===t||Ph(t,n))}const Nh=/#/g,sy=/&/g,iy=/\//g,ry=/=/g,oy=/\?/g,Oh=/\+/g,ay=/%5B/g,ly=/%5D/g,kh=/%5E/g,cy=/%60/g,Dh=/%7B/g,uy=/%7C/g,Mh=/%7D/g,hy=/%20/g;function ba(t){return encodeURI(""+t).replace(uy,"|").replace(ay,"[").replace(ly,"]")}function dy(t){return ba(t).replace(Dh,"{").replace(Mh,"}").replace(kh,"^")}function Ao(t){return ba(t).replace(Oh,"%2B").replace(hy,"+").replace(Nh,"%23").replace(sy,"%26").replace(cy,"`").replace(Dh,"{").replace(Mh,"}").replace(kh,"^")}function fy(t){return Ao(t).replace(ry,"%3D")}function py(t){return ba(t).replace(Nh,"%23").replace(oy,"%3F")}function my(t){return t==null?"":py(t).replace(iy,"%2F")}function Fs(t){try{return decodeURIComponent(""+t)}catch{te(`Error decoding "${t}". Using original value`)}return""+t}function gy(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Oh," "),o=r.indexOf("="),a=Fs(o<0?r:r.slice(0,o)),l=o<0?null:Fs(r.slice(o+1));if(a in e){let c=e[a];Ke(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function nc(t){let e="";for(let n in t){const s=t[n];if(n=fy(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ke(s)?s.map(r=>r&&Ao(r)):[s&&Ao(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function _y(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ke(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const yy=Symbol("router view location matched"),sc=Symbol("router view depth"),wa=Symbol("router"),Lh=Symbol("route location"),xo=Symbol("router view location");function hs(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ht(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=u=>{u===!1?a(Qn(4,{from:n,to:e})):u instanceof Error?a(u):F_(u)?a(Qn(2,{from:e,to:u})):(r&&s.enterCallbacks[i]===r&&typeof u=="function"&&r.push(u),o())},c=t.call(s&&s.instances[i],e,n,vy(l,e,n));let h=Promise.resolve(c);if(t.length<3&&(h=h.then(l)),t.length>2){const u=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof c=="object"&&"then"in c)h=h.then(d=>l._called?d:(te(u),Promise.reject(new Error("Invalid navigation guard"))));else if(c!==void 0&&!l._called){te(u),a(new Error("Invalid navigation guard"));return}}h.catch(u=>a(u))})}function vy(t,e,n){let s=0;return function(){s++===1&&te(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,s===1&&t.apply(null,arguments)}}function Br(t,e,n,s){const i=[];for(const r of t){!r.components&&!r.children.length&&te(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const o in r.components){let a=r.components[o];{if(!a||typeof a!="object"&&typeof a!="function")throw te(`Component "${o}" in record with path "${r.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){te(`Component "${o}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const l=a;a=()=>l}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,te(`Component "${o}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(by(a)){const c=(a.__vccOpts||a)[e];c&&i.push(Ht(c,n,s,r,o))}else{let l=a();"catch"in l||(te(`Component "${o}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),l=Promise.resolve(l)),i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const h=b_(c)?c.default:c;r.components[o]=h;const d=(h.__vccOpts||h)[e];return d&&Ht(d,n,s,r,o)()}))}}}return i}function by(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ic(t){const e=Tt(wa),n=Tt(Lh),s=st(()=>e.resolve(En(t.to))),i=st(()=>{const{matched:l}=s.value,{length:c}=l,h=l[c-1],u=n.matched;if(!h||!u.length)return-1;const d=u.findIndex(tn.bind(null,h));if(d>-1)return d;const m=rc(l[c-2]);return c>1&&rc(h)===m&&u[u.length-1].path!==m?u.findIndex(tn.bind(null,l[c-2])):d}),r=st(()=>i.value>-1&&Iy(n.params,s.value.params)),o=st(()=>i.value>-1&&i.value===n.matched.length-1&&Th(n.params,s.value.params));function a(l={}){return Cy(l)?e[En(t.replace)?"replace":"push"](En(t.to)).catch(Is):Promise.resolve()}if(Ct){const l=vh();if(l){const c={route:s.value,isActive:r.value,isExactActive:o.value};l.__vrl_devtools=l.__vrl_devtools||[],l.__vrl_devtools.push(c),Sm(()=>{c.route=s.value,c.isActive=r.value,c.isExactActive=o.value},{flush:"post"})}}return{route:s,href:st(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const wy=nh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ic,setup(t,{slots:e}){const n=sr(ic(t)),{options:s}=Tt(wa),i=st(()=>({[oc(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[oc(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Ih("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Ey=wy;function Cy(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Iy(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Ke(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function rc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const oc=(t,e,n)=>t??e??n,Sy=nh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){Ty();const s=Tt(xo),i=st(()=>t.route||s.value),r=Tt(sc,0),o=st(()=>{let c=En(r);const{matched:h}=i.value;let u;for(;(u=h[c])&&!u.components;)c++;return c}),a=st(()=>i.value.matched[o.value]);Ci(sc,st(()=>o.value+1)),Ci(yy,a),Ci(xo,i);const l=Vp();return ws(()=>[l.value,a.value,t.name],([c,h,u],[d,m,g])=>{h&&(h.instances[u]=c,m&&m!==h&&c&&c===d&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),c&&h&&(!m||!tn(h,m)||!d)&&(h.enterCallbacks[u]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=i.value,h=t.name,u=a.value,d=u&&u.components[h];if(!d)return ac(n.default,{Component:d,route:c});const m=u.props[h],g=m?m===!0?c.params:typeof m=="function"?m(c):m:null,k=Ih(d,se({},g,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(u.instances[h]=null)},ref:l}));if(Ct&&k.ref){const O={depth:o.value,name:u.name,path:u.path,meta:u.meta};(Ke(k.ref)?k.ref.map(B=>B.i):[k.ref.i]).forEach(B=>{B.__vrv_devtools=O})}return ac(n.default,{Component:k,route:c})||k}}});function ac(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Fh=Sy;function Ty(){const t=vh(),e=t.parent&&t.parent.type.name,n=t.parent&&t.parent.subTree&&t.parent.subTree.type;if(e&&(e==="KeepAlive"||e.includes("Transition"))&&typeof n=="object"&&n.name==="RouterView"){const s=e==="KeepAlive"?"keep-alive":"transition";te(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`)}}function ds(t,e){const n=se({},t,{matched:t.matched.map(s=>My(s,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:e,value:n}}}function gi(t){return{_custom:{display:t}}}let Ry=0;function Ay(t,e,n){if(e.__hasDevtools)return;e.__hasDevtools=!0;const s=Ry++;v_({id:"org.vuejs.router"+(s?"."+s:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},i=>{typeof i.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),i.on.inspectComponent((h,u)=>{h.instanceData&&h.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:ds(e.currentRoute.value,"Current Route")})}),i.on.visitComponentTree(({treeNode:h,componentInstance:u})=>{if(u.__vrv_devtools){const d=u.__vrv_devtools;h.tags.push({label:(d.name?`${d.name.toString()}: `:"")+d.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:$h})}Ke(u.__vrl_devtools)&&(u.__devtoolsApi=i,u.__vrl_devtools.forEach(d=>{let m=jh,g="";d.isExactActive?(m=Uh,g="This is exactly active"):d.isActive&&(m=Bh,g="This link is active"),h.tags.push({label:d.route.path,textColor:0,tooltip:g,backgroundColor:m})}))}),ws(e.currentRoute,()=>{l(),i.notifyComponentUpdate(),i.sendInspectorTree(a),i.sendInspectorState(a)});const r="router:navigations:"+s;i.addTimelineLayer({id:r,label:`Router${s?" "+s:""} Navigations`,color:4237508}),e.onError((h,u)=>{i.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:u.fullPath,logType:"error",time:i.now(),data:{error:h},groupId:u.meta.__navigationId}})});let o=0;e.beforeEach((h,u)=>{const d={guard:gi("beforeEach"),from:ds(u,"Current Location during this navigation"),to:ds(h,"Target location")};Object.defineProperty(h.meta,"__navigationId",{value:o++}),i.addTimelineEvent({layerId:r,event:{time:i.now(),title:"Start of navigation",subtitle:h.fullPath,data:d,groupId:h.meta.__navigationId}})}),e.afterEach((h,u,d)=>{const m={guard:gi("afterEach")};d?(m.failure={_custom:{type:Error,readOnly:!0,display:d?d.message:"",tooltip:"Navigation Failure",value:d}},m.status=gi("❌")):m.status=gi("✅"),m.from=ds(u,"Current Location during this navigation"),m.to=ds(h,"Target location"),i.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:h.fullPath,time:i.now(),data:m,logType:d?"warning":"default",groupId:h.meta.__navigationId}})});const a="router-inspector:"+s;i.addInspector({id:a,label:"Routes"+(s?" "+s:""),icon:"book",treeFilterPlaceholder:"Search routes"});function l(){if(!c)return;const h=c;let u=n.getRoutes().filter(d=>!d.parent||!d.parent.record.components);u.forEach(Wh),h.filter&&(u=u.filter(d=>Po(d,h.filter.toLowerCase()))),u.forEach(d=>Hh(d,e.currentRoute.value)),h.rootNodes=u.map(Vh)}let c;i.on.getInspectorTree(h=>{c=h,h.app===t&&h.inspectorId===a&&l()}),i.on.getInspectorState(h=>{if(h.app===t&&h.inspectorId===a){const d=n.getRoutes().find(m=>m.record.__vd_id===h.nodeId);d&&(h.state={options:Py(d)})}}),i.sendInspectorTree(a),i.sendInspectorState(a)})}function xy(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function Py(t){const{record:e}=t,n=[{editable:!1,key:"path",value:e.path}];return e.name!=null&&n.push({editable:!1,key:"name",value:e.name}),n.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(s=>`${s.name}${xy(s)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),e.redirect!=null&&n.push({editable:!1,key:"redirect",value:e.redirect}),t.alias.length&&n.push({editable:!1,key:"aliases",value:t.alias.map(s=>s.record.path)}),Object.keys(t.record.meta).length&&n.push({editable:!1,key:"meta",value:t.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(s=>s.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),n}const $h=15485081,Bh=2450411,Uh=8702998,Ny=2282478,jh=16486972,Oy=6710886;function Vh(t){const e=[],{record:n}=t;n.name!=null&&e.push({label:String(n.name),textColor:0,backgroundColor:Ny}),n.aliasOf&&e.push({label:"alias",textColor:0,backgroundColor:jh}),t.__vd_match&&e.push({label:"matches",textColor:0,backgroundColor:$h}),t.__vd_exactActive&&e.push({label:"exact",textColor:0,backgroundColor:Uh}),t.__vd_active&&e.push({label:"active",textColor:0,backgroundColor:Bh}),n.redirect&&e.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:Oy});let s=n.__vd_id;return s==null&&(s=String(ky++),n.__vd_id=s),{id:s,label:n.path,tags:e,children:t.children.map(Vh)}}let ky=0;const Dy=/^\/(.*)\/([a-z]*)$/;function Hh(t,e){const n=e.matched.length&&tn(e.matched[e.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=n,n||(t.__vd_active=e.matched.some(s=>tn(s,t.record))),t.children.forEach(s=>Hh(s,e))}function Wh(t){t.__vd_match=!1,t.children.forEach(Wh)}function Po(t,e){const n=String(t.re).match(Dy);if(t.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(e))return t.children.forEach(o=>Po(o,e)),t.record.path!=="/"||e==="/"?(t.__vd_match=t.re.test(e),!0):!1;const i=t.record.path.toLowerCase(),r=Fs(i);return!e.startsWith("/")&&(r.includes(e)||i.includes(e))||r.startsWith(e)||i.startsWith(e)||t.record.name&&String(t.record.name).includes(e)?!0:t.children.some(o=>Po(o,e))}function My(t,e){const n={};for(const s in t)e.includes(s)||(n[s]=t[s]);return n}function Ly(t){const e=Q_(t.routes,t),n=t.parseQuery||gy,s=t.stringifyQuery||nc,i=t.history;if(!i)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=hs(),o=hs(),a=hs(),l=Hp(Bt);let c=Bt;Ct&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Fr.bind(null,y=>""+y),u=Fr.bind(null,my),d=Fr.bind(null,Fs);function m(y,P){let x,D;return Ah(y)?(x=e.getRecordMatcher(y),D=P):D=y,e.addRoute(D,x)}function g(y){const P=e.getRecordMatcher(y);P?e.removeRoute(P):te(`Cannot remove non-existent route "${String(y)}"`)}function S(){return e.getRoutes().map(y=>y.record)}function k(y){return!!e.getRecordMatcher(y)}function O(y,P){if(P=se({},P||l.value),typeof y=="string"){const f=$r(n,y,P.path),p=e.resolve({path:f.path},P),_=i.createHref(f.fullPath);return _.startsWith("//")?te(`Location "${y}" resolved to "${_}". A resolved location cannot start with multiple slashes.`):p.matched.length||te(`No match found for location with path "${y}"`),se(f,p,{params:d(p.params),hash:Fs(f.hash),redirectedFrom:void 0,href:_})}let x;if("path"in y)"params"in y&&!("name"in y)&&Object.keys(y.params).length&&te(`Path "${y.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),x=se({},y,{path:$r(n,y.path,P.path).path});else{const f=se({},y.params);for(const p in f)f[p]==null&&delete f[p];x=se({},y,{params:u(f)}),P.params=u(P.params)}const D=e.resolve(x,P),Y=y.hash||"";Y&&!Y.startsWith("#")&&te(`A \`hash\` should always start with the character "#". Replace "${Y}" with "#${Y}".`),D.params=h(d(D.params));const de=C_(s,se({},y,{hash:dy(Y),path:D.path})),G=i.createHref(de);return G.startsWith("//")?te(`Location "${y}" resolved to "${G}". A resolved location cannot start with multiple slashes.`):D.matched.length||te(`No match found for location with path "${"path"in y?y.path:y}"`),se({fullPath:de,hash:Y,query:s===nc?_y(y.query):y.query||{}},D,{redirectedFrom:void 0,href:G})}function M(y){return typeof y=="string"?$r(n,y,l.value.path):se({},y)}function B(y,P){if(c!==y)return Qn(8,{from:P,to:y})}function q(y){return V(y)}function ie(y){return q(se(M(y),{replace:!0}))}function _e(y){const P=y.matched[y.matched.length-1];if(P&&P.redirect){const{redirect:x}=P;let D=typeof x=="function"?x(y):x;if(typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=M(D):{path:D},D.params={}),!("path"in D)&&!("name"in D))throw te(`Invalid redirect found:
${JSON.stringify(D,null,2)}
 when navigating to "${y.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return se({query:y.query,hash:y.hash,params:"path"in D?{}:y.params},D)}}function V(y,P){const x=c=O(y),D=l.value,Y=y.state,de=y.force,G=y.replace===!0,f=_e(x);if(f)return V(se(M(f),{state:typeof f=="object"?se({},Y,f.state):Y,force:de,replace:G}),P||x);const p=x;p.redirectedFrom=P;let _;return!de&&ql(s,D,x)&&(_=Qn(16,{to:p,from:D}),Mt(D,D,!0,!1)),(_?Promise.resolve(_):ze(p,D)).catch(v=>vt(v)?vt(v,2)?v:cn(v):z(v,p,D)).then(v=>{if(v){if(vt(v,2))return ql(s,O(v.to),p)&&P&&(P._count=P._count?P._count+1:1)>30?(te(`Detected a possibly infinite redirection in a navigation guard when going from "${D.fullPath}" to "${p.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):V(se({replace:G},M(v.to),{state:typeof v.to=="object"?se({},Y,v.to.state):Y,force:de}),P||p)}else v=Fe(p,D,!0,G,Y);return Xe(p,D,v),v})}function Se(y,P){const x=B(y,P);return x?Promise.reject(x):Promise.resolve()}function be(y){const P=Lt.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(y):y()}function ze(y,P){let x;const[D,Y,de]=Fy(y,P);x=Br(D.reverse(),"beforeRouteLeave",y,P);for(const f of D)f.leaveGuards.forEach(p=>{x.push(Ht(p,y,P))});const G=Se.bind(null,y,P);return x.push(G),Ft(x).then(()=>{x=[];for(const f of r.list())x.push(Ht(f,y,P));return x.push(G),Ft(x)}).then(()=>{x=Br(Y,"beforeRouteUpdate",y,P);for(const f of Y)f.updateGuards.forEach(p=>{x.push(Ht(p,y,P))});return x.push(G),Ft(x)}).then(()=>{x=[];for(const f of de)if(f.beforeEnter)if(Ke(f.beforeEnter))for(const p of f.beforeEnter)x.push(Ht(p,y,P));else x.push(Ht(f.beforeEnter,y,P));return x.push(G),Ft(x)}).then(()=>(y.matched.forEach(f=>f.enterCallbacks={}),x=Br(de,"beforeRouteEnter",y,P),x.push(G),Ft(x))).then(()=>{x=[];for(const f of o.list())x.push(Ht(f,y,P));return x.push(G),Ft(x)}).catch(f=>vt(f,8)?f:Promise.reject(f))}function Xe(y,P,x){a.list().forEach(D=>be(()=>D(y,P,x)))}function Fe(y,P,x,D,Y){const de=B(y,P);if(de)return de;const G=P===Bt,f=Ct?history.state:{};x&&(D||G?i.replace(y.fullPath,se({scroll:G&&f&&f.scroll},Y)):i.push(y.fullPath,Y)),l.value=y,Mt(y,P,x,G),cn()}let ut;function li(){ut||(ut=i.listen((y,P,x)=>{if(!ci.listening)return;const D=O(y),Y=_e(D);if(Y){V(se(Y,{replace:!0}),D).catch(Is);return}c=D;const de=l.value;Ct&&N_(zl(de.fullPath,x.delta),fr()),ze(D,de).catch(G=>vt(G,12)?G:vt(G,2)?(V(G.to,D).then(f=>{vt(f,20)&&!x.delta&&x.type===Ls.pop&&i.go(-1,!1)}).catch(Is),Promise.reject()):(x.delta&&i.go(-x.delta,!1),z(G,D,de))).then(G=>{G=G||Fe(D,de,!1),G&&(x.delta&&!vt(G,8)?i.go(-x.delta,!1):x.type===Ls.pop&&vt(G,20)&&i.go(-1,!1)),Xe(D,de,G)}).catch(Is)}))}let Ye=hs(),Te=hs(),K;function z(y,P,x){cn(y);const D=Te.list();return D.length?D.forEach(Y=>Y(y,P,x)):(te("uncaught error during route navigation:"),console.error(y)),Promise.reject(y)}function Qe(){return K&&l.value!==Bt?Promise.resolve():new Promise((y,P)=>{Ye.add([y,P])})}function cn(y){return K||(K=!y,li(),Ye.list().forEach(([P,x])=>y?x(y):P()),Ye.reset()),y}function Mt(y,P,x,D){const{scrollBehavior:Y}=t;if(!Ct||!Y)return Promise.resolve();const de=!x&&O_(zl(y.fullPath,0))||(D||!x)&&history.state&&history.state.scroll||null;return ju().then(()=>Y(y,P,de)).then(G=>G&&P_(G)).catch(G=>z(G,y,P))}const ht=y=>i.go(y);let Je;const Lt=new Set,ci={currentRoute:l,listening:!0,addRoute:m,removeRoute:g,hasRoute:k,getRoutes:S,resolve:O,options:t,push:q,replace:ie,go:ht,back:()=>ht(-1),forward:()=>ht(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Te.add,isReady:Qe,install(y){const P=this;y.component("RouterLink",Ey),y.component("RouterView",Fh),y.config.globalProperties.$router=P,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>En(l)}),Ct&&!Je&&l.value===Bt&&(Je=!0,q(i.location).catch(Y=>{te("Unexpected error when starting the router:",Y)}));const x={};for(const Y in Bt)Object.defineProperty(x,Y,{get:()=>l.value[Y],enumerable:!0});y.provide(wa,P),y.provide(Lh,Ou(x)),y.provide(xo,l);const D=y.unmount;Lt.add(y),y.unmount=function(){Lt.delete(y),Lt.size<1&&(c=Bt,ut&&ut(),ut=null,l.value=Bt,Je=!1,K=!1),D()},Ct&&Ay(y,P,e)}};function Ft(y){return y.reduce((P,x)=>P.then(()=>be(x)),Promise.resolve())}return ci}function Fy(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>tn(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>tn(c,l))||i.push(l))}return[n,s,i]}const ei=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},$y={__name:"App",setup(t){return(e,n)=>(ns(),gh(En(Fh)))}},By=ei($y,[["__file","/Users/mattday/Desktop/Coding/IndianSpringsKatahdins/src/App.vue"]]),Uy="modulepreload",jy=function(t){return"/"+t},lc={},fs=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link");i=Promise.all(n.map(o=>{if(o=jy(o),o in lc)return;lc[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const d=r[u];if(d.href===o&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const h=document.createElement("link");if(h.rel=a?"stylesheet":Uy,a||(h.as="script",h.crossOrigin=""),h.href=o,document.head.appendChild(h),a)return new Promise((u,d)=>{h.addEventListener("load",u),h.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},Vy="/assets/ISKLogoText-5R0GjBnR.png",Hy={},Wy={id:"nav"},Gy=yg('<div class="nav-section" data-v-4d808a77><a class="nav-text" href="/about" data-v-4d808a77>About</a><a class="nav-text" href="https://docs.google.com/document/d/e/2PACX-1vTe_sI1G2pWT-D4oTsGsDW-W-6cRxPwfUoAJWYUUMqqbWAFRUdsPDrMAvksfG6mpJtDrzcUolQTjD-H/pub" target="_blank" data-v-4d808a77>Meat for Sale</a></div><a href="/" data-v-4d808a77><img class="nav-logo" alt="Indian Springs Katahdins" src="'+Vy+'" data-v-4d808a77></a><div class="nav-section" data-v-4d808a77><a class="nav-text" href="/livestock" data-v-4d808a77>Livestock for Sale</a><a class="nav-text" href="/recipes" data-v-4d808a77>Recipes</a><a class="nav-text" href="/contact" data-v-4d808a77>Contact</a></div>',3),qy=[Gy];function Ky(t,e){return ns(),cr("nav",Wy,[...qy])}const zy=ei(Hy,[["render",Ky],["__scopeId","data-v-4d808a77"],["__file","/Users/mattday/Desktop/Coding/IndianSpringsKatahdins/src/components/Navbar.vue"]]),Yy="/assets/ISKLogoTransparent-NojJMbXF.png",Qy={},Gh=t=>(Ju("data-v-3587acbb"),t=t(),Xu(),t),Jy={class:"banner"},Xy=Gh(()=>Be("img",{class:"banner-img",alt:"Indian Springs Katahdins Logo",src:Yy},null,-1)),Zy=Gh(()=>Be("h1",{class:"banner-info"},"At Indian Springs, we raise 100% grass-fed Katahdin sheep, rotationally grazing them on our farm in Trafalgar, Indiana. We sell meat cuts, whole lambs for butcher, and commercial breeding stock.",-1)),ev=[Xy,Zy];function tv(t,e){return ns(),cr("div",Jy,[...ev])}const nv=ei(Qy,[["render",tv],["__scopeId","data-v-3587acbb"],["__file","/Users/mattday/Desktop/Coding/IndianSpringsKatahdins/src/components/Banner.vue"]]);var cc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw ss(e)},ss=function(t){return new Error("Firebase Database ("+qh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sv=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ea={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(d=64)),s.push(n[h],n[u],n[d],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Kh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||u==null)throw new iv;const d=r<<2|a>>4;if(s.push(d),c!==64){const m=a<<4&240|c>>2;if(s.push(m),u!==64){const g=c<<6&192|u;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class iv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zh=function(t){const e=Kh(t);return Ea.encodeByteArray(e,!0)},Di=function(t){return zh(t).replace(/\./g,"")},No=function(t){try{return Ea.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(t){return Yh(void 0,t)}function Yh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ov(n)||(t[n]=Yh(t[n],e[n]));return t}function ov(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv=()=>av().__FIREBASE_DEFAULTS__,cv=()=>{if(typeof process>"u"||typeof cc>"u")return;const t=cc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&No(t[1]);return e&&JSON.parse(e)},Qh=()=>{try{return lv()||cv()||uv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hv=t=>{var e,n;return(n=(e=Qh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dv=t=>{const e=hv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Jh=()=>{var t;return(t=Qh())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Di(JSON.stringify(n)),Di(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pv())}function mv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zh(){return qh.NODE_ADMIN===!0}function ed(){try{return typeof indexedDB=="object"}catch{return!1}}function td(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function _v(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv="FirebaseError";class Mn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=yv,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mr.prototype.create)}}class mr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?vv(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Mn(i,a,s)}}function vv(t,e){return t.replace(bv,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const bv=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(t){return JSON.parse(t)}function ye(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=$s(No(r[0])||""),n=$s(No(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},wv=function(t){const e=nd(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ev=function(t){const e=nd(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Jn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function uc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Mi(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Li(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(hc(r)&&hc(o)){if(!Li(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function hc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)s[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const d=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const d=(i<<5|i>>>27)+c+l+h+s[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Ca(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,I(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gr=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv=1e3,Rv=2,Av=4*60*60*1e3,xv=.5;function dc(t,e=Tv,n=Rv){const s=e*Math.pow(n,t),i=Math.round(xv*s*(Math.random()-.5)*2);return Math.min(Av,s+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t){return t&&t._delegate?t._delegate:t}class At{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new pr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ov(e))try{this.getOrInitializeService({instanceIdentifier:fn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fn){return this.instances.has(e)}getOptions(e=fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Nv(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=fn){return this.component?this.component.multipleInstances?e:fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nv(t){return t===fn?void 0:t}function Ov(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Pv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const Dv={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Mv=ce.INFO,Lv={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},Fv=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Lv[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ia{constructor(e){this.name=e,this._logLevel=Mv,this._logHandler=Fv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const $v=(t,e)=>e.some(n=>t instanceof n);let fc,pc;function Bv(){return fc||(fc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Uv(){return pc||(pc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sd=new WeakMap,Oo=new WeakMap,id=new WeakMap,Ur=new WeakMap,Sa=new WeakMap;function jv(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(qt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sd.set(n,t)}).catch(()=>{}),Sa.set(e,t),e}function Vv(t){if(Oo.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Oo.set(t,e)}let ko={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Oo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||id.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Hv(t){ko=t(ko)}function Wv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(jr(this),e,...n);return id.set(s,e.sort?e.sort():[e]),qt(s)}:Uv().includes(t)?function(...e){return t.apply(jr(this),e),qt(sd.get(this))}:function(...e){return qt(t.apply(jr(this),e))}}function Gv(t){return typeof t=="function"?Wv(t):(t instanceof IDBTransaction&&Vv(t),$v(t,Bv())?new Proxy(t,ko):t)}function qt(t){if(t instanceof IDBRequest)return jv(t);if(Ur.has(t))return Ur.get(t);const e=Gv(t);return e!==t&&(Ur.set(t,e),Sa.set(e,t)),e}const jr=t=>Sa.get(t);function qv(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=qt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(qt(o.result),l.oldVersion,l.newVersion,qt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Kv=["get","getKey","getAll","getAllKeys","count"],zv=["put","add","delete","clear"],Vr=new Map;function mc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vr.get(e))return Vr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=zv.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Kv.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Vr.set(e,r),r}Hv(t=>({...t,get:(e,n,s)=>mc(e,n)||t.get(e,n,s),has:(e,n)=>!!mc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Qv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Do="@firebase/app",gc="0.9.26";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new Ia("@firebase/app"),Jv="@firebase/app-compat",Xv="@firebase/analytics-compat",Zv="@firebase/analytics",eb="@firebase/app-check-compat",tb="@firebase/app-check",nb="@firebase/auth",sb="@firebase/auth-compat",ib="@firebase/database",rb="@firebase/database-compat",ob="@firebase/functions",ab="@firebase/functions-compat",lb="@firebase/installations",cb="@firebase/installations-compat",ub="@firebase/messaging",hb="@firebase/messaging-compat",db="@firebase/performance",fb="@firebase/performance-compat",pb="@firebase/remote-config",mb="@firebase/remote-config-compat",gb="@firebase/storage",_b="@firebase/storage-compat",yb="@firebase/firestore",vb="@firebase/firestore-compat",bb="firebase",wb="10.7.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo="[DEFAULT]",Eb={[Do]:"fire-core",[Jv]:"fire-core-compat",[Zv]:"fire-analytics",[Xv]:"fire-analytics-compat",[tb]:"fire-app-check",[eb]:"fire-app-check-compat",[nb]:"fire-auth",[sb]:"fire-auth-compat",[ib]:"fire-rtdb",[rb]:"fire-rtdb-compat",[ob]:"fire-fn",[ab]:"fire-fn-compat",[lb]:"fire-iid",[cb]:"fire-iid-compat",[ub]:"fire-fcm",[hb]:"fire-fcm-compat",[db]:"fire-perf",[fb]:"fire-perf-compat",[pb]:"fire-rc",[mb]:"fire-rc-compat",[gb]:"fire-gcs",[_b]:"fire-gcs-compat",[yb]:"fire-fst",[vb]:"fire-fst-compat","fire-js":"fire-js",[bb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new Map,Lo=new Map;function Cb(t,e){try{t.container.addComponent(e)}catch(n){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function nn(t){const e=t.name;if(Lo.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;Lo.set(e,t);for(const n of Fi.values())Cb(n,t);return!0}function ti(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Kt=new mr("app","Firebase",Ib);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new At("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=wb;function rd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Mo,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Kt.create("bad-app-name",{appName:String(i)});if(n||(n=Jh()),!n)throw Kt.create("no-options");const r=Fi.get(i);if(r){if(Li(n,r.options)&&Li(s,r.config))return r;throw Kt.create("duplicate-app",{appName:i})}const o=new kv(i);for(const l of Lo.values())o.addComponent(l);const a=new Sb(n,s,o);return Fi.set(i,a),a}function od(t=Mo){const e=Fi.get(t);if(!e&&t===Mo&&Jh())return rd();if(!e)throw Kt.create("no-app",{appName:t});return e}function _t(t,e,n){var s;let i=(s=Eb[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(a.join(" "));return}nn(new At(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb="firebase-heartbeat-database",Ab=1,Bs="firebase-heartbeat-store";let Hr=null;function ad(){return Hr||(Hr=qv(Rb,Ab,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Kt.create("idb-open",{originalErrorMessage:t.message})})),Hr}async function xb(t){try{return await(await ad()).transaction(Bs).objectStore(Bs).get(ld(t))}catch(e){if(e instanceof Mn)xn.warn(e.message);else{const n=Kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xn.warn(n.message)}}}async function _c(t,e){try{const s=(await ad()).transaction(Bs,"readwrite");await s.objectStore(Bs).put(e,ld(t)),await s.done}catch(n){if(n instanceof Mn)xn.warn(n.message);else{const s=Kt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xn.warn(s.message)}}}function ld(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=1024,Nb=30*24*60*60*1e3;class Ob{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Db(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=yc();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Nb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yc(),{heartbeatsToSend:s,unsentEntries:i}=kb(this._heartbeatsCache.heartbeats),r=Di(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function yc(){return new Date().toISOString().substring(0,10)}function kb(t,e=Pb){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),vc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),vc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Db{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ed()?td().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _c(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _c(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function vc(t){return Di(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(t){nn(new At("platform-logger",e=>new Yv(e),"PRIVATE")),nn(new At("heartbeat",e=>new Ob(e),"PRIVATE")),_t(Do,gc,t),_t(Do,gc,"esm2017"),_t("fire-js","")}Mb("");var bc={};const wc="@firebase/database",Ec="1.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cd="";function Lb(t){cd=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ye(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:$s(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ot(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Fb(e)}}catch{}return new $b},mn=ud("localStorage"),Fo=ud("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new Ia("@firebase/database"),Bb=function(){let t=1;return function(){return t++}}(),hd=function(t){const e=Sv(t),n=new Iv;n.update(e);const s=n.digest();return Ea.encodeByteArray(s)},ni=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ni.apply(null,s):typeof s=="object"?e+=ye(s):e+=s,e+=" "}return e};let Rn=null,Cc=!0;const Ub=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(qn.logLevel=ce.VERBOSE,Rn=qn.log.bind(qn),e&&Fo.set("logging_enabled",!0)):typeof t=="function"?Rn=t:(Rn=null,Fo.remove("logging_enabled"))},Pe=function(...t){if(Cc===!0&&(Cc=!1,Rn===null&&Fo.get("logging_enabled")===!0&&Ub(!0)),Rn){const e=ni.apply(null,t);Rn(e)}},si=function(t){return function(...e){Pe(t,...e)}},$o=function(...t){const e="FIREBASE INTERNAL ERROR: "+ni(...t);qn.error(e)},xt=function(...t){const e=`FIREBASE FATAL ERROR: ${ni(...t)}`;throw qn.error(e),new Error(e)},je=function(...t){const e="FIREBASE WARNING: "+ni(...t);qn.warn(e)},jb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},dd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Vb=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Xn="[MIN_NAME]",Pn="[MAX_NAME]",is=function(t,e){if(t===e)return 0;if(t===Xn||e===Pn)return-1;if(e===Xn||t===Pn)return 1;{const n=Ic(t),s=Ic(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Hb=function(t,e){return t===e?0:t<e?-1:1},ps=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ye(e))},Ta=function(t){if(typeof t!="object"||t===null)return ye(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ye(e[s]),n+=":",n+=Ta(t[e[s]]);return n+="}",n},fd=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function He(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const pd=function(t){I(!dd(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},Wb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Gb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function qb(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Kb=new RegExp("^-?(0*)\\d{1,10}$"),zb=-2147483648,Yb=2147483647,Ic=function(t){if(Kb.test(t)){const e=Number(t);if(e>=zb&&e<=Yb)return e}return null},rs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw je("Exception was thrown by user callback.",n),e},Math.floor(0))}},Qb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ts=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){je(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Pe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',je(e)}}class Kn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Kn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="5",md="v",gd="s",_d="r",yd="f",vd=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,bd="ls",wd="p",Bo="ac",Ed="websocket",Cd="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=mn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&mn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Zb(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Sd(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let s;if(e===Ed)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Cd)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Zb(t)&&(n.ns=t.namespace);const i=[];return He(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(){this.counters_={}}incrementCounter(e,n=1){Ot(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return rv(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr={},Gr={};function Aa(t){const e=t.toString();return Wr[e]||(Wr[e]=new ew),Wr[e]}function tw(t,e){const n=t.toString();return Gr[n]||(Gr[n]=e()),Gr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&rs(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="start",sw="close",iw="pLPCommand",rw="pRTLPCB",Td="id",Rd="pw",Ad="ser",ow="cb",aw="seg",lw="ts",cw="d",uw="dframe",xd=1870,Pd=30,hw=xd-Pd,dw=25e3,fw=3e4;class Hn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=si(e),this.stats_=Aa(n),this.urlFn=l=>(this.appCheckToken&&(l[Bo]=this.appCheckToken),Sd(n,Cd,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new nw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(fw)),Vb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new xa((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Sc)this.id=a,this.password=l;else if(o===sw)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Sc]="t",s[Ad]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[ow]=this.scriptTagHolder.uniqueCallbackIdentifier),s[md]=Ra,this.transportSessionId&&(s[gd]=this.transportSessionId),this.lastSessionId&&(s[bd]=this.lastSessionId),this.applicationId&&(s[wd]=this.applicationId),this.appCheckToken&&(s[Bo]=this.appCheckToken),typeof location<"u"&&location.hostname&&vd.test(location.hostname)&&(s[_d]=yd);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Hn.forceAllow_=!0}static forceDisallow(){Hn.forceDisallow_=!0}static isAvailable(){return Hn.forceAllow_?!0:!Hn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Wb()&&!Gb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=zh(n),i=fd(s,hw);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[uw]="t",s[Td]=e,s[Rd]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ye(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class xa{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Bb(),window[iw+this.uniqueCallbackIdentifier]=e,window[rw+this.uniqueCallbackIdentifier]=n,this.myIFrame=xa.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Pe("frame writing exception"),a.stack&&Pe(a.stack),Pe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Pe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Td]=this.myID,e[Rd]=this.myPW,e[Ad]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Pd+s.length<=xd;){const o=this.pendingSegs.shift();s=s+"&"+aw+i+"="+o.seg+"&"+lw+i+"="+o.ts+"&"+cw+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(dw)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Pe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=16384,mw=45e3;let $i=null;typeof MozWebSocket<"u"?$i=MozWebSocket:typeof WebSocket<"u"&&($i=WebSocket);class it{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=si(this.connId),this.stats_=Aa(n),this.connURL=it.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[md]=Ra,typeof location<"u"&&location.hostname&&vd.test(location.hostname)&&(o[_d]=yd),n&&(o[gd]=n),s&&(o[bd]=s),i&&(o[Bo]=i),r&&(o[wd]=r),Sd(e,Ed,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,mn.set("previous_websocket_failure",!0);try{let s;Zh(),this.mySock=new $i(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){it.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&$i!==null&&!it.forceDisallow_}static previouslyFailed(){return mn.isInMemoryStorage||mn.get("previous_websocket_failure")===!0}markConnectionHealthy(){mn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=$s(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=fd(n,pw);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(mw))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}it.responsesRequiredToBeHealthy=2;it.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Hn,it]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=it&&it.isAvailable();let s=n&&!it.previouslyFailed();if(e.webSocketOnly&&(n||je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[it];else{const i=this.transports_=[];for(const r of Us.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Us.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Us.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=6e4,_w=5e3,yw=10*1024,vw=100*1024,qr="t",Tc="d",bw="s",Rc="r",ww="e",Ac="o",xc="a",Pc="n",Nc="p",Ew="h";class Cw{constructor(e,n,s,i,r,o,a,l,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=si("c:"+this.id+":"),this.transportManager_=new Us(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ts(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>vw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>yw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(qr in e){const n=e[qr];n===xc?this.upgradeIfSecondaryHealthy_():n===Rc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ac&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ps("t",e),s=ps("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Nc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:xc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Pc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ps("t",e),s=ps("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ps(qr,e);if(Tc in e){const s=e[Tc];if(n===Ew){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Pc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===bw?this.onConnectionShutdown_(s):n===Rc?this.onReset_(s):n===ww?$o("Server Error: "+s):n===Ac?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):$o("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ra!==s&&je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ts(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(gw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ts(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(_w))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Nc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(mn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends Od{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Xh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Bi}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=32,kc=768;class le{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ne(){return new le("")}function ee(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function sn(t){return t.pieces_.length-t.pieceNum_}function ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new le(t.pieces_,e)}function kd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Iw(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Dd(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Md(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new le(e,0)}function ve(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof le)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new le(n,0)}function X(t){return t.pieceNum_>=t.pieces_.length}function Le(t,e){const n=ee(t),s=ee(e);if(n===null)return e;if(n===s)return Le(ue(t),ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ld(t,e){if(sn(t)!==sn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ot(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(sn(t)>sn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Sw{constructor(e,n){this.errorPrefix_=n,this.parts_=Dd(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=gr(this.parts_[s]);Fd(this)}}function Tw(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=gr(e),Fd(t)}function Rw(t){const e=t.parts_.pop();t.byteLength_-=gr(e),t.parts_.length>0&&(t.byteLength_-=1)}function Fd(t){if(t.byteLength_>kc)throw new Error(t.errorPrefix_+"has a key path longer than "+kc+" bytes ("+t.byteLength_+").");if(t.parts_.length>Oc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Oc+") or object contains a cycle "+pn(t))}function pn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends Od{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Pa}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=1e3,Aw=60*5*1e3,Dc=30*1e3,xw=1.3,Pw=3e4,Nw="server_kill",Mc=3;class Rt extends Nd{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Rt.nextPersistentConnectionId_++,this.log_=si("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ms,this.maxReconnectDelay_=Aw,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Zh())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Pa.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Bi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ye(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new pr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Rt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ot(e,"w")){const s=Jn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ev(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Dc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=wv(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ye(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):$o("Unrecognized action received from server: "+ye(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ms,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ms,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Pw&&(this.reconnectDelay_=ms),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*xw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Rt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(u){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Pe("getToken() completed but was canceled"):(Pe("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new Cw(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,m=>{je(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(Nw)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&je(u),l())}}}interrupt(e){Pe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Pe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],uc(this.interruptReasons_)&&(this.reconnectDelay_=ms,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Ta(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new le(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Pe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mc&&(this.reconnectDelay_=Dc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Pe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+cd.replace(/\./g,"-")]=1,Xh()?e["framework.cordova"]=1:gv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Bi.getInstance().currentlyOnline();return uc(this.interruptReasons_)&&e}}Rt.nextPersistentConnectionId_=0;Rt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Q(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Q(Xn,e),i=new Q(Xn,n);return this.compare(s,i)!==0}minPost(){return Q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i;class $d extends _r{static get __EMPTY_NODE(){return _i}static set __EMPTY_NODE(e){_i=e}compare(e,n){return is(e.name,n.name)}isDefinedOn(e){throw ss("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Q.MIN}maxPost(){return new Q(Pn,_i)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new Q(e,_i)}toString(){return".key"}}const zn=new $d;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ce{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ce.RED,this.left=i??Ue.EMPTY_NODE,this.right=r??Ue.EMPTY_NODE}copy(e,n,s,i,r){return new Ce(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ue.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ce.RED=!0;Ce.BLACK=!1;class Ow{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ue{constructor(e,n=Ue.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ue(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ce.BLACK,null,null))}remove(e){return new Ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ce.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new yi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new yi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new yi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new yi(this.root_,null,this.comparator_,!0,e)}}Ue.EMPTY_NODE=new Ow;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(t,e){return is(t.name,e.name)}function Na(t,e){return is(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo;function Dw(t){Uo=t}const Bd=function(t){return typeof t=="number"?"number:"+pd(t):"string:"+t},Ud=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ot(e,".sv"),"Priority must be a string or number.")}else I(t===Uo||t.isEmpty(),"priority of unexpected type.");I(t===Uo||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lc;class Ee{constructor(e,n=Ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ud(this.priorityNode_)}static set __childrenNodeConstructor(e){Lc=e}static get __childrenNodeConstructor(){return Lc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return X(e)?this:ee(e)===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ee(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(I(s!==".priority"||sn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Bd(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=pd(this.value_):e+=this.value_,this.lazyHash_=hd(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ee.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ee.VALUE_TYPE_ORDER.indexOf(n),r=Ee.VALUE_TYPE_ORDER.indexOf(s);return I(i>=0,"Unknown leaf type: "+n),I(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jd,Vd;function Mw(t){jd=t}function Lw(t){Vd=t}class Fw extends _r{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?is(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Q.MIN}maxPost(){return new Q(Pn,new Ee("[PRIORITY-POST]",Vd))}makePost(e,n){const s=jd(e);return new Q(n,new Ee("[PRIORITY-POST]",s))}toString(){return".priority"}}const pe=new Fw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=Math.log(2);class Bw{constructor(e){const n=r=>parseInt(Math.log(r)/$w,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ui=function(t,e,n,s){t.sort(e);const i=function(l,c){const h=c-l;let u,d;if(h===0)return null;if(h===1)return u=t[l],d=n?n(u):u,new Ce(d,u.node,Ce.BLACK,null,null);{const m=parseInt(h/2,10)+l,g=i(l,m),S=i(m+1,c);return u=t[m],d=n?n(u):u,new Ce(d,u.node,Ce.BLACK,g,S)}},r=function(l){let c=null,h=null,u=t.length;const d=function(g,S){const k=u-g,O=u;u-=g;const M=i(k+1,O),B=t[k],q=n?n(B):B;m(new Ce(q,B.node,S,null,M))},m=function(g){c?(c.left=g,c=g):(h=g,c=g)};for(let g=0;g<l.count;++g){const S=l.nextBitIsOne(),k=Math.pow(2,l.count-(g+1));S?d(k,Ce.BLACK):(d(k,Ce.BLACK),d(k,Ce.RED))}return h},o=new Bw(t.length),a=r(o);return new Ue(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kr;const Bn={};class It{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(Bn&&pe,"ChildrenNode.ts has not been loaded"),Kr=Kr||new It({".priority":Bn},{".priority":pe}),Kr}get(e){const n=Jn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ue?n:null}hasIndex(e){return Ot(this.indexSet_,e.toString())}addIndex(e,n){I(e!==zn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(Q.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ui(s,e.getCompare()):a=Bn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new It(h,c)}addToIndexes(e,n){const s=Mi(this.indexes_,(i,r)=>{const o=Jn(this.indexSet_,r);if(I(o,"Missing index implementation for "+r),i===Bn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Q.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ui(a,o.getCompare())}else return Bn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Q(e.name,a))),l.insert(e,e.node)}});return new It(s,this.indexSet_)}removeFromIndexes(e,n){const s=Mi(this.indexes_,i=>{if(i===Bn)return i;{const r=n.get(e.name);return r?i.remove(new Q(e.name,r)):i}});return new It(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gs;class U{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ud(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return gs||(gs=new U(new Ue(Na),null,It.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||gs}updatePriority(e){return this.children_.isEmpty()?this:new U(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?gs:n}}getChild(e){const n=ee(e);return n===null?this:this.getImmediateChild(n).getChild(ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Q(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?gs:this.priorityNode_;return new U(i,o,r)}}updateChild(e,n){const s=ee(e);if(s===null)return n;{I(ee(e)!==".priority"||sn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ue(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(pe,(o,a)=>{n[o]=a.val(e),s++,r&&U.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Bd(this.getPriority().val())+":"),this.forEachChild(pe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":hd(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Q(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Q(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ii?-1:0}withIndex(e){if(e===zn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new U(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===zn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(pe),i=n.getIterator(pe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===zn?null:this.indexMap_.get(e.toString())}}U.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Uw extends U{constructor(){super(new Ue(Na),U.EMPTY_NODE,It.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return U.EMPTY_NODE}isEmpty(){return!1}}const ii=new Uw;Object.defineProperties(Q,{MIN:{value:new Q(Xn,U.EMPTY_NODE)},MAX:{value:new Q(Pn,ii)}});$d.__EMPTY_NODE=U.EMPTY_NODE;Ee.__childrenNodeConstructor=U;Dw(ii);Lw(ii);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw=!0;function Ie(t,e=null){if(t===null)return U.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ee(n,Ie(e))}if(!(t instanceof Array)&&jw){const n=[];let s=!1;if(He(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ie(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Q(o,l)))}}),n.length===0)return U.EMPTY_NODE;const r=Ui(n,kw,o=>o.name,Na);if(s){const o=Ui(n,pe.getCompare());return new U(r,Ie(e),new It({".priority":o},{".priority":pe}))}else return new U(r,Ie(e),It.Default)}else{let n=U.EMPTY_NODE;return He(t,(s,i)=>{if(Ot(t,s)&&s.substring(0,1)!=="."){const r=Ie(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ie(e))}}Mw(Ie);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw extends _r{constructor(e){super(),this.indexPath_=e,I(!X(e)&&ee(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?is(e.name,n.name):r}makePost(e,n){const s=Ie(e),i=U.EMPTY_NODE.updateChild(this.indexPath_,s);return new Q(n,i)}maxPost(){const e=U.EMPTY_NODE.updateChild(this.indexPath_,ii);return new Q(Pn,e)}toString(){return Dd(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw extends _r{compare(e,n){const s=e.node.compareTo(n.node);return s===0?is(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Q.MIN}maxPost(){return Q.MAX}makePost(e,n){const s=Ie(e);return new Q(n,s)}toString(){return".value"}}const Ww=new Hw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(t){return{type:"value",snapshotNode:t}}function Zn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function js(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Vs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Gw(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(js(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Zn(n,s)):o.trackChildChange(Vs(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(pe,(i,r)=>{n.hasChild(i)||s.trackChildChange(js(i,r))}),n.isLeafNode()||n.forEachChild(pe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Vs(i,r,o))}else s.trackChildChange(Zn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?U.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.indexedFilter_=new Oa(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Hs.getStartPost_(e),this.endPost_=Hs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new Q(n,s))||(s=U.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=U.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(U.EMPTY_NODE);const r=this;return n.forEachChild(pe,(o,a)=>{r.matches(new Q(o,a))||(i=i.updateImmediateChild(o,U.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Hs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new Q(n,s))||(s=U.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=U.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=U.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(U.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,U.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,m)=>u(m,d)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new Q(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const m=d==null?1:o(d,l);if(h&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(Vs(n,s,u)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(js(n,u));const S=a.updateImmediateChild(n,U.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Zn(d.name,d.node)),S.updateImmediateChild(d.name,d.node)):S}}else return s.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(js(c.name,c.node)),r.trackChildChange(Zn(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,U.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Xn}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Pn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pe}copy(){const e=new ka;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Kw(t){return t.loadsAllData()?new Oa(t.getIndex()):t.hasLimit()?new qw(t):new Hs(t)}function Fc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===pe?n="$priority":t.index_===Ww?n="$value":t.index_===zn?n="$key":(I(t.index_ instanceof Vw,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ye(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ye(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ye(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ye(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ye(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function $c(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==pe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends Nd{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=si("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ji.getListenId_(e,s),a={};this.listens_[o]=a;const l=Fc(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,s),Jn(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=ji.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Fc(e._queryParams),s=e._path.toString(),i=new pr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Cv(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=$s(a.responseText)}catch{je("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&je("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(){this.rootNode_=U.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(){return{value:null,children:new Map}}function Wd(t,e,n){if(X(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ee(e);t.children.has(s)||t.children.set(s,Vi());const i=t.children.get(s);e=ue(e),Wd(i,e,n)}}function jo(t,e,n){t.value!==null?n(e,t.value):Yw(t,(s,i)=>{const r=new le(e.toString()+"/"+s);jo(i,r,n)})}function Yw(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&He(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=10*1e3,Jw=30*1e3,Xw=5*60*1e3;class Zw{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Qw(e);const s=Bc+(Jw-Bc)*Math.random();Ts(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;He(e,(i,r)=>{r>0&&Ot(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Ts(this.reportStats_.bind(this),Math.floor(Math.random()*2*Xw))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(at||(at={}));function Gd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Da(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ma(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=at.ACK_USER_WRITE,this.source=Gd()}operationForChild(e){if(X(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new le(e));return new Hi(ne(),n,this.revert)}}else return I(ee(this.path)===e,"operationForChild called for unrelated child."),new Hi(ue(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n){this.source=e,this.path=n,this.type=at.LISTEN_COMPLETE}operationForChild(e){return X(this.path)?new Ws(this.source,ne()):new Ws(this.source,ue(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=at.OVERWRITE}operationForChild(e){return X(this.path)?new Nn(this.source,ne(),this.snap.getImmediateChild(e)):new Nn(this.source,ue(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=at.MERGE}operationForChild(e){if(X(this.path)){const n=this.children.subtree(new le(e));return n.isEmpty()?null:n.value?new Nn(this.source,ne(),n.value):new Gs(this.source,ne(),n)}else return I(ee(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Gs(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(X(e))return this.isFullyInitialized()&&!this.filtered_;const n=ee(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function tE(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Gw(o.childName,o.snapshotNode))}),_s(t,i,"child_removed",e,s,n),_s(t,i,"child_added",e,s,n),_s(t,i,"child_moved",r,s,n),_s(t,i,"child_changed",e,s,n),_s(t,i,"value",e,s,n),i}function _s(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>sE(t,a,l)),o.forEach(a=>{const l=nE(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function nE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function sE(t,e,n){if(e.childName==null||n.childName==null)throw ss("Should only compare child_ events.");const s=new Q(e.childName,e.snapshotNode),i=new Q(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t,e){return{eventCache:t,serverCache:e}}function Rs(t,e,n,s){return yr(new rn(e,n,s),t.serverCache)}function qd(t,e,n,s){return yr(t.eventCache,new rn(e,n,s))}function Wi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function On(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zr;const iE=()=>(zr||(zr=new Ue(Hb)),zr);class he{constructor(e,n=iE()){this.value=e,this.children=n}static fromObject(e){let n=new he(null);return He(e,(s,i)=>{n=n.set(new le(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ne(),value:this.value};if(X(e))return null;{const s=ee(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ue(e),n);return r!=null?{path:ve(new le(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(X(e))return this;{const n=ee(e),s=this.children.get(n);return s!==null?s.subtree(ue(e)):new he(null)}}set(e,n){if(X(e))return new he(n,this.children);{const s=ee(e),r=(this.children.get(s)||new he(null)).set(ue(e),n),o=this.children.insert(s,r);return new he(this.value,o)}}remove(e){if(X(e))return this.children.isEmpty()?new he(null):new he(null,this.children);{const n=ee(e),s=this.children.get(n);if(s){const i=s.remove(ue(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new he(null):new he(this.value,r)}else return this}}get(e){if(X(e))return this.value;{const n=ee(e),s=this.children.get(n);return s?s.get(ue(e)):null}}setTree(e,n){if(X(e))return n;{const s=ee(e),r=(this.children.get(s)||new he(null)).setTree(ue(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new he(this.value,o)}}fold(e){return this.fold_(ne(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ve(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ne(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(X(e))return null;{const r=ee(e),o=this.children.get(r);return o?o.findOnPath_(ue(e),ve(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ne(),n)}foreachOnPath_(e,n,s){if(X(e))return this;{this.value&&s(n,this.value);const i=ee(e),r=this.children.get(i);return r?r.foreachOnPath_(ue(e),ve(n,i),s):new he(null)}}foreach(e){this.foreach_(ne(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ve(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.writeTree_=e}static empty(){return new ct(new he(null))}}function As(t,e,n){if(X(e))return new ct(new he(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Le(i,e);return r=r.updateChild(o,n),new ct(t.writeTree_.set(i,r))}else{const i=new he(n),r=t.writeTree_.setTree(e,i);return new ct(r)}}}function Uc(t,e,n){let s=t;return He(n,(i,r)=>{s=As(s,ve(e,i),r)}),s}function jc(t,e){if(X(e))return ct.empty();{const n=t.writeTree_.setTree(e,new he(null));return new ct(n)}}function Vo(t,e){return Ln(t,e)!=null}function Ln(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Le(n.path,e)):null}function Vc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(pe,(s,i)=>{e.push(new Q(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Q(s,i.value))}),e}function zt(t,e){if(X(e))return t;{const n=Ln(t,e);return n!=null?new ct(new he(n)):new ct(t.writeTree_.subtree(e))}}function Ho(t){return t.writeTree_.isEmpty()}function es(t,e){return Kd(ne(),t.writeTree_,e)}function Kd(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(I(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Kd(ve(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ve(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(t,e){return Jd(e,t)}function rE(t,e,n,s,i){I(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=As(t.visibleWrites,e,n)),t.lastWriteId=s}function oE(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function aE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&lE(a,s.path)?i=!1:ot(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return cE(t),!0;if(s.snap)t.visibleWrites=jc(t.visibleWrites,s.path);else{const a=s.children;He(a,l=>{t.visibleWrites=jc(t.visibleWrites,ve(s.path,l))})}return!0}else return!1}function lE(t,e){if(t.snap)return ot(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ot(ve(t.path,n),e))return!0;return!1}function cE(t){t.visibleWrites=zd(t.allWrites,uE,ne()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function uE(t){return t.visible}function zd(t,e,n){let s=ct.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)ot(n,o)?(a=Le(n,o),s=As(s,a,r.snap)):ot(o,n)&&(a=Le(o,n),s=As(s,ne(),r.snap.getChild(a)));else if(r.children){if(ot(n,o))a=Le(n,o),s=Uc(s,a,r.children);else if(ot(o,n))if(a=Le(o,n),X(a))s=Uc(s,ne(),r.children);else{const l=Jn(r.children,ee(a));if(l){const c=l.getChild(ue(a));s=As(s,ne(),c)}}}else throw ss("WriteRecord should have .snap or .children")}}return s}function Yd(t,e,n,s,i){if(!s&&!i){const r=Ln(t.visibleWrites,e);if(r!=null)return r;{const o=zt(t.visibleWrites,e);if(Ho(o))return n;if(n==null&&!Vo(o,ne()))return null;{const a=n||U.EMPTY_NODE;return es(o,a)}}}else{const r=zt(t.visibleWrites,e);if(!i&&Ho(r))return n;if(!i&&n==null&&!Vo(r,ne()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ot(c.path,e)||ot(e,c.path))},a=zd(t.allWrites,o,e),l=n||U.EMPTY_NODE;return es(a,l)}}}function hE(t,e,n){let s=U.EMPTY_NODE;const i=Ln(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(pe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=zt(t.visibleWrites,e);return n.forEachChild(pe,(o,a)=>{const l=es(zt(r,new le(o)),a);s=s.updateImmediateChild(o,l)}),Vc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=zt(t.visibleWrites,e);return Vc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function dE(t,e,n,s,i){I(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ve(e,n);if(Vo(t.visibleWrites,r))return null;{const o=zt(t.visibleWrites,r);return Ho(o)?i.getChild(n):es(o,i.getChild(n))}}function fE(t,e,n,s){const i=ve(e,n),r=Ln(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=zt(t.visibleWrites,i);return es(o,s.getNode().getImmediateChild(n))}else return null}function pE(t,e){return Ln(t.visibleWrites,e)}function mE(t,e,n,s,i,r,o){let a;const l=zt(t.visibleWrites,e),c=Ln(l,ne());if(c!=null)a=c;else if(n!=null)a=es(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let m=d.getNext();for(;m&&h.length<i;)u(m,s)!==0&&h.push(m),m=d.getNext();return h}else return[]}function gE(){return{visibleWrites:ct.empty(),allWrites:[],lastWriteId:-1}}function Gi(t,e,n,s){return Yd(t.writeTree,t.treePath,e,n,s)}function La(t,e){return hE(t.writeTree,t.treePath,e)}function Hc(t,e,n,s){return dE(t.writeTree,t.treePath,e,n,s)}function qi(t,e){return pE(t.writeTree,ve(t.treePath,e))}function _E(t,e,n,s,i,r){return mE(t.writeTree,t.treePath,e,n,s,i,r)}function Fa(t,e,n){return fE(t.writeTree,t.treePath,e,n)}function Qd(t,e){return Jd(ve(t.treePath,e),t.writeTree)}function Jd(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Vs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,js(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Zn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Vs(s,e.snapshotNode,i.oldSnap));else throw ss("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Xd=new vE;class $a{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new rn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Fa(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:On(this.viewCache_),r=_E(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(t){return{filter:t}}function wE(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function EE(t,e,n,s,i){const r=new yE;let o,a;if(n.type===at.OVERWRITE){const c=n;c.source.fromUser?o=Wo(t,e,c.path,c.snap,s,i,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!X(c.path),o=Ki(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===at.MERGE){const c=n;c.source.fromUser?o=IE(t,e,c.path,c.children,s,i,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Go(t,e,c.path,c.children,s,i,a,r))}else if(n.type===at.ACK_USER_WRITE){const c=n;c.revert?o=RE(t,e,c.path,s,i,r):o=SE(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===at.LISTEN_COMPLETE)o=TE(t,e,n.path,s,r);else throw ss("Unknown operation type: "+n.type);const l=r.getChanges();return CE(e,o,l),{viewCache:o,changes:l}}function CE(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Wi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Hd(Wi(e)))}}function Zd(t,e,n,s,i,r){const o=e.eventCache;if(qi(s,n)!=null)return e;{let a,l;if(X(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=On(e),h=c instanceof U?c:U.EMPTY_NODE,u=La(s,h);a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=Gi(s,On(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ee(n);if(c===".priority"){I(sn(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=Hc(s,n,h,l);u!=null?a=t.filter.updatePriority(h,u):a=o.getNode()}else{const h=ue(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Hc(s,n,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=Fa(s,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,h,i,r):a=o.getNode()}}return Rs(e,a,o.isFullyInitialized()||X(n),t.filter.filtersNodes())}}function Ki(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(X(n))c=h.updateFullNode(l.getNode(),s,null);else if(h.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,s);c=h.updateFullNode(l.getNode(),m,null)}else{const m=ee(n);if(!l.isCompleteForPath(n)&&sn(n)>1)return e;const g=ue(n),k=l.getNode().getImmediateChild(m).updateChild(g,s);m===".priority"?c=h.updatePriority(l.getNode(),k):c=h.updateChild(l.getNode(),m,k,g,Xd,null)}const u=qd(e,c,l.isFullyInitialized()||X(n),h.filtersNodes()),d=new $a(i,u,r);return Zd(t,u,n,i,d,a)}function Wo(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const h=new $a(i,e,r);if(X(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Rs(e,c,!0,t.filter.filtersNodes());else{const u=ee(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Rs(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ue(n),m=a.getNode().getImmediateChild(u);let g;if(X(d))g=s;else{const S=h.getCompleteChild(u);S!=null?kd(d)===".priority"&&S.getChild(Md(d)).isEmpty()?g=S:g=S.updateChild(d,s):g=U.EMPTY_NODE}if(m.equals(g))l=e;else{const S=t.filter.updateChild(a.getNode(),u,g,d,h,o);l=Rs(e,S,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Wc(t,e){return t.eventCache.isCompleteForChild(e)}function IE(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const h=ve(n,l);Wc(e,ee(h))&&(a=Wo(t,a,h,c,i,r,o))}),s.foreach((l,c)=>{const h=ve(n,l);Wc(e,ee(h))||(a=Wo(t,a,h,c,i,r,o))}),a}function Gc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Go(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;X(n)?c=s:c=new he(null).setTree(n,s);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const m=e.serverCache.getNode().getImmediateChild(u),g=Gc(t,m,d);l=Ki(t,l,new le(u),g,i,r,o,a)}}),c.children.inorderTraversal((u,d)=>{const m=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!m){const g=e.serverCache.getNode().getImmediateChild(u),S=Gc(t,g,d);l=Ki(t,l,new le(u),S,i,r,o,a)}}),l}function SE(t,e,n,s,i,r,o){if(qi(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(X(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ki(t,e,n,l.getNode().getChild(n),i,r,a,o);if(X(n)){let c=new he(null);return l.getNode().forEachChild(zn,(h,u)=>{c=c.set(new le(h),u)}),Go(t,e,n,c,i,r,a,o)}else return e}else{let c=new he(null);return s.foreach((h,u)=>{const d=ve(n,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),Go(t,e,n,c,i,r,a,o)}}function TE(t,e,n,s,i){const r=e.serverCache,o=qd(e,r.getNode(),r.isFullyInitialized()||X(n),r.isFiltered());return Zd(t,o,n,s,Xd,i)}function RE(t,e,n,s,i,r){let o;if(qi(s,n)!=null)return e;{const a=new $a(s,e,i),l=e.eventCache.getNode();let c;if(X(n)||ee(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Gi(s,On(e));else{const u=e.serverCache.getNode();I(u instanceof U,"serverChildren would be complete if leaf node"),h=La(s,u)}h=h,c=t.filter.updateFullNode(l,h,r)}else{const h=ee(n);let u=Fa(s,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=t.filter.updateChild(l,h,u,ue(n),a,r):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(l,h,U.EMPTY_NODE,ue(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Gi(s,On(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||qi(s,ne())!=null,Rs(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Oa(s.getIndex()),r=Kw(s);this.processor_=bE(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(U.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(U.EMPTY_NODE,a.getNode(),null),h=new rn(l,o.isFullyInitialized(),i.filtersNodes()),u=new rn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=yr(u,h),this.eventGenerator_=new eE(this.query_)}get query(){return this.query_}}function xE(t){return t.viewCache_.serverCache.getNode()}function PE(t){return Wi(t.viewCache_)}function NE(t,e){const n=On(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!X(e)&&!n.getImmediateChild(ee(e)).isEmpty())?n.getChild(e):null}function qc(t){return t.eventRegistrations_.length===0}function OE(t,e){t.eventRegistrations_.push(e)}function Kc(t,e,n){const s=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function zc(t,e,n,s){e.type===at.MERGE&&e.source.queryId!==null&&(I(On(t.viewCache_),"We should always have a full cache before handling merges"),I(Wi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=EE(t.processor_,i,e,n,s);return wE(t.processor_,r.viewCache),I(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,ef(t,r.changes,r.viewCache.eventCache.getNode(),null)}function kE(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(pe,(r,o)=>{s.push(Zn(r,o))}),n.isFullyInitialized()&&s.push(Hd(n.getNode())),ef(t,s,n.getNode(),e)}function ef(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return tE(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zi;class tf{constructor(){this.views=new Map}}function DE(t){I(!zi,"__referenceConstructor has already been defined"),zi=t}function ME(){return I(zi,"Reference.ts has not been loaded"),zi}function LE(t){return t.views.size===0}function Ba(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return I(r!=null,"SyncTree gave us an op for an invalid query."),zc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(zc(o,e,n,s));return r}}function nf(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Gi(n,i?s:null),l=!1;a?l=!0:s instanceof U?(a=La(n,s),l=!1):(a=U.EMPTY_NODE,l=!1);const c=yr(new rn(a,l,!1),new rn(s,i,!1));return new AE(e,c)}return o}function FE(t,e,n,s,i,r){const o=nf(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),OE(o,n),kE(o,n)}function $E(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=on(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Kc(c,n,s)),qc(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Kc(l,n,s)),qc(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!on(t)&&r.push(new(ME())(e._repo,e._path)),{removed:r,events:o}}function sf(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Yt(t,e){let n=null;for(const s of t.views.values())n=n||NE(s,e);return n}function rf(t,e){if(e._queryParams.loadsAllData())return br(t);{const s=e._queryIdentifier;return t.views.get(s)}}function of(t,e){return rf(t,e)!=null}function on(t){return br(t)!=null}function br(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yi;function BE(t){I(!Yi,"__referenceConstructor has already been defined"),Yi=t}function UE(){return I(Yi,"Reference.ts has not been loaded"),Yi}let jE=1;class Yc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new he(null),this.pendingWriteTree_=gE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function af(t,e,n,s,i){return rE(t.pendingWriteTree_,e,n,s,i),i?oi(t,new Nn(Gd(),e,n)):[]}function gn(t,e,n=!1){const s=oE(t.pendingWriteTree_,e);if(aE(t.pendingWriteTree_,e)){let r=new he(null);return s.snap!=null?r=r.set(ne(),!0):He(s.children,o=>{r=r.set(new le(o),!0)}),oi(t,new Hi(s.path,r,n))}else return[]}function ri(t,e,n){return oi(t,new Nn(Da(),e,n))}function VE(t,e,n){const s=he.fromObject(n);return oi(t,new Gs(Da(),e,s))}function HE(t,e){return oi(t,new Ws(Da(),e))}function WE(t,e,n){const s=ja(t,n);if(s){const i=Va(s),r=i.path,o=i.queryId,a=Le(r,e),l=new Ws(Ma(o),a);return Ha(t,r,l)}else return[]}function lf(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||of(o,e))){const l=$E(o,e,n,s);LE(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(d,m)=>on(m));if(h&&!u){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const m=zE(d);for(let g=0;g<m.length;++g){const S=m[g],k=S.query,O=df(t,S);t.listenProvider_.startListening(xs(k),qs(t,k),O.hashFn,O.onComplete)}}}!u&&c.length>0&&!s&&(h?t.listenProvider_.stopListening(xs(e),null):c.forEach(d=>{const m=t.queryToTagMap.get(wr(d));t.listenProvider_.stopListening(xs(d),m)}))}YE(t,c)}return a}function cf(t,e,n,s){const i=ja(t,s);if(i!=null){const r=Va(i),o=r.path,a=r.queryId,l=Le(o,e),c=new Nn(Ma(a),l,n);return Ha(t,o,c)}else return[]}function GE(t,e,n,s){const i=ja(t,s);if(i){const r=Va(i),o=r.path,a=r.queryId,l=Le(o,e),c=he.fromObject(n),h=new Gs(Ma(a),l,c);return Ha(t,o,h)}else return[]}function qE(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,m)=>{const g=Le(d,i);r=r||Yt(m,g),o=o||on(m)});let a=t.syncPointTree_.get(i);a?(o=o||on(a),r=r||Yt(a,ne())):(a=new tf,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=U.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,g)=>{const S=Yt(g,ne());S&&(r=r.updateImmediateChild(m,S))}));const c=of(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=wr(e);I(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const m=QE();t.queryToTagMap.set(d,m),t.tagToQueryMap.set(m,d)}const h=vr(t.pendingWriteTree_,i);let u=FE(a,e,n,h,r,l);if(!c&&!o&&!s){const d=rf(a,e);u=u.concat(JE(t,e,d))}return u}function Ua(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Le(o,e),c=Yt(a,l);if(c)return c});return Yd(i,e,r,n,!0)}function KE(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const u=Le(c,n);s=s||Yt(h,u)});let i=t.syncPointTree_.get(n);i?s=s||Yt(i,ne()):(i=new tf,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new rn(s,!0,!1):null,a=vr(t.pendingWriteTree_,e._path),l=nf(i,e,a,r?o.getNode():U.EMPTY_NODE,r);return PE(l)}function oi(t,e){return uf(e,t.syncPointTree_,null,vr(t.pendingWriteTree_,ne()))}function uf(t,e,n,s){if(X(t.path))return hf(t,e,n,s);{const i=e.get(ne());n==null&&i!=null&&(n=Yt(i,ne()));let r=[];const o=ee(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,h=Qd(s,o);r=r.concat(uf(a,l,c,h))}return i&&(r=r.concat(Ba(i,t,s,n))),r}}function hf(t,e,n,s){const i=e.get(ne());n==null&&i!=null&&(n=Yt(i,ne()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Qd(s,o),h=t.operationForChild(o);h&&(r=r.concat(hf(h,a,l,c)))}),i&&(r=r.concat(Ba(i,t,s,n))),r}function df(t,e){const n=e.query,s=qs(t,n);return{hashFn:()=>(xE(e)||U.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?WE(t,n._path,s):HE(t,n._path);{const r=qb(i,n);return lf(t,n,null,r)}}}}function qs(t,e){const n=wr(e);return t.queryToTagMap.get(n)}function wr(t){return t._path.toString()+"$"+t._queryIdentifier}function ja(t,e){return t.tagToQueryMap.get(e)}function Va(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new le(t.substr(0,e))}}function Ha(t,e,n){const s=t.syncPointTree_.get(e);I(s,"Missing sync point for query tag that we're tracking");const i=vr(t.pendingWriteTree_,e);return Ba(s,n,i,null)}function zE(t){return t.fold((e,n,s)=>{if(n&&on(n))return[br(n)];{let i=[];return n&&(i=sf(n)),He(s,(r,o)=>{i=i.concat(o)}),i}})}function xs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(UE())(t._repo,t._path):t}function YE(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=wr(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function QE(){return jE++}function JE(t,e,n){const s=e._path,i=qs(t,e),r=df(t,n),o=t.listenProvider_.startListening(xs(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)I(!on(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,u)=>{if(!X(c)&&h&&on(h))return[br(h).query];{let d=[];return h&&(d=d.concat(sf(h).map(m=>m.query))),He(u,(m,g)=>{d=d.concat(g)}),d}});for(let c=0;c<l.length;++c){const h=l[c];t.listenProvider_.stopListening(xs(h),qs(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Wa(n)}node(){return this.node_}}class Ga{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ve(this.path_,e);return new Ga(this.syncTree_,n)}node(){return Ua(this.syncTree_,this.path_)}}const XE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Qc=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ZE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return eC(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ZE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},eC=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&I(!1,"Unexpected increment value: "+s);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},tC=function(t,e,n,s){return qa(e,new Ga(n,t),s)},ff=function(t,e,n){return qa(t,new Wa(e),n)};function qa(t,e,n){const s=t.getPriority().val(),i=Qc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Qc(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ee(a,Ie(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ee(i))),o.forEachChild(pe,(a,l)=>{const c=qa(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function za(t,e){let n=e instanceof le?e:new le(e),s=t,i=ee(n);for(;i!==null;){const r=Jn(s.node.children,i)||{children:{},childCount:0};s=new Ka(i,s,r),n=ue(n),i=ee(n)}return s}function os(t){return t.node.value}function pf(t,e){t.node.value=e,qo(t)}function mf(t){return t.node.childCount>0}function nC(t){return os(t)===void 0&&!mf(t)}function Er(t,e){He(t.node.children,(n,s)=>{e(new Ka(n,t,s))})}function gf(t,e,n,s){n&&!s&&e(t),Er(t,i=>{gf(i,e,!0,s)}),n&&s&&e(t)}function sC(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ai(t){return new le(t.parent===null?t.name:ai(t.parent)+"/"+t.name)}function qo(t){t.parent!==null&&iC(t.parent,t.name,t)}function iC(t,e,n){const s=nC(n),i=Ot(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,qo(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,qo(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=/[\[\].#$\/\u0000-\u001F\u007F]/,oC=/[\[\].#$\u0000-\u001F\u007F]/,Yr=10*1024*1024,_f=function(t){return typeof t=="string"&&t.length!==0&&!rC.test(t)},yf=function(t){return typeof t=="string"&&t.length!==0&&!oC.test(t)},aC=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),yf(t)},vf=function(t,e,n,s){s&&e===void 0||Ya(Ca(t,"value"),e,n)},Ya=function(t,e,n){const s=n instanceof le?new Sw(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+pn(s));if(typeof e=="function")throw new Error(t+"contains a function "+pn(s)+" with contents = "+e.toString());if(dd(e))throw new Error(t+"contains "+e.toString()+" "+pn(s));if(typeof e=="string"&&e.length>Yr/3&&gr(e)>Yr)throw new Error(t+"contains a string greater than "+Yr+" utf8 bytes "+pn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(He(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!_f(o)))throw new Error(t+" contains an invalid key ("+o+") "+pn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Tw(s,o),Ya(t,a,s),Rw(s)}),i&&r)throw new Error(t+' contains ".value" child '+pn(s)+" in addition to actual children.")}},bf=function(t,e,n,s){if(!(s&&n===void 0)&&!yf(n))throw new Error(Ca(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},lC=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),bf(t,e,n,s)},Qa=function(t,e){if(ee(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},cC=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!_f(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!aC(n))throw new Error(Ca(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function wf(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Ld(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function yt(t,e,n){wf(t,n),hC(t,s=>ot(s,e)||ot(e,s))}function hC(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(dC(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function dC(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Rn&&Pe("event: "+n.toString()),rs(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC="repo_interrupt",pC=25;class mC{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new uC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Vi(),this.transactionQueueTree_=new Ka,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function gC(t,e,n){if(t.stats_=Aa(t.repoInfo_),t.forceRestClient_||Qb())t.server_=new ji(t.repoInfo_,(s,i,r,o)=>{Jc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Xc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ye(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Rt(t.repoInfo_,e,(s,i,r,o)=>{Jc(t,s,i,r,o)},s=>{Xc(t,s)},s=>{_C(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=tw(t.repoInfo_,()=>new Zw(t.stats_,t.server_)),t.infoData_=new zw,t.infoSyncTree_=new Yc({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=ri(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Xa(t,"connected",!1),t.serverSyncTree_=new Yc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);yt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Ef(t){const n=t.infoData_.getNode(new le(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ja(t){return XE({timestamp:Ef(t)})}function Jc(t,e,n,s,i){t.dataUpdateCount++;const r=new le(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Mi(n,c=>Ie(c));o=GE(t.serverSyncTree_,r,l,i)}else{const l=Ie(n);o=cf(t.serverSyncTree_,r,l,i)}else if(s){const l=Mi(n,c=>Ie(c));o=VE(t.serverSyncTree_,r,l)}else{const l=Ie(n);o=ri(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ir(t,r)),yt(t.eventQueue_,a,o)}function Xc(t,e){Xa(t,"connected",e),e===!1&&bC(t)}function _C(t,e){He(e,(n,s)=>{Xa(t,n,s)})}function Xa(t,e,n){const s=new le("/.info/"+e),i=Ie(n);t.infoData_.updateSnapshot(s,i);const r=ri(t.infoSyncTree_,s,i);yt(t.eventQueue_,s,r)}function Cf(t){return t.nextWriteId_++}function yC(t,e,n){const s=KE(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Ie(i).withIndex(e._queryParams.getIndex());qE(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ri(t.serverSyncTree_,e._path,r);else{const a=qs(t.serverSyncTree_,e);o=cf(t.serverSyncTree_,e._path,r,a)}return yt(t.eventQueue_,e._path,o),lf(t.serverSyncTree_,e,n,null,!0),r},i=>(Cr(t,"get for query "+ye(e)+" failed: "+i),Promise.reject(new Error(i))))}function vC(t,e,n,s,i){Cr(t,"set",{path:e.toString(),value:n,priority:s});const r=Ja(t),o=Ie(n,s),a=Ua(t.serverSyncTree_,e),l=ff(o,a,r),c=Cf(t),h=af(t.serverSyncTree_,e,l,c,!0);wf(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(d,m)=>{const g=d==="ok";g||je("set at "+e+" failed: "+d);const S=gn(t.serverSyncTree_,c,!g);yt(t.eventQueue_,e,S),EC(t,i,d,m)});const u=Af(t,e);Ir(t,u),yt(t.eventQueue_,u,[])}function bC(t){Cr(t,"onDisconnectEvents");const e=Ja(t),n=Vi();jo(t.onDisconnect_,ne(),(i,r)=>{const o=tC(i,r,t.serverSyncTree_,e);Wd(n,i,o)});let s=[];jo(n,ne(),(i,r)=>{s=s.concat(ri(t.serverSyncTree_,i,r));const o=Af(t,i);Ir(t,o)}),t.onDisconnect_=Vi(),yt(t.eventQueue_,ne(),s)}function wC(t){t.persistentConnection_&&t.persistentConnection_.interrupt(fC)}function Cr(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Pe(n,...e)}function EC(t,e,n,s){e&&rs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function If(t,e,n){return Ua(t.serverSyncTree_,e,n)||U.EMPTY_NODE}function Za(t,e=t.transactionQueueTree_){if(e||Sr(t,e),os(e)){const n=Tf(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&CC(t,ai(e),n)}else mf(e)&&Er(e,n=>{Za(t,n)})}function CC(t,e,n){const s=n.map(c=>c.currentWriteId),i=If(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];I(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=Le(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Cr(t,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(gn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&u.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Sr(t,za(t.transactionQueueTree_,e)),Za(t,t.transactionQueueTree_),yt(t.eventQueue_,e,h);for(let d=0;d<u.length;d++)rs(u[d])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{je("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}Ir(t,e)}},o)}function Ir(t,e){const n=Sf(t,e),s=ai(n),i=Tf(t,n);return IC(t,i,s),s}function IC(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Le(n,l.path);let h=!1,u;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,i=i.concat(gn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=pC)h=!0,u="maxretry",i=i.concat(gn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=If(t,l.path,o);l.currentInputSnapshot=d;const m=e[a].update(d.val());if(m!==void 0){Ya("transaction failed: Data returned ",m,l.path);let g=Ie(m);typeof m=="object"&&m!=null&&Ot(m,".priority")||(g=g.updatePriority(d.getPriority()));const k=l.currentWriteId,O=Ja(t),M=ff(g,d,O);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=M,l.currentWriteId=Cf(t),o.splice(o.indexOf(k),1),i=i.concat(af(t.serverSyncTree_,l.path,M,l.currentWriteId,l.applyLocally)),i=i.concat(gn(t.serverSyncTree_,k,!0))}else h=!0,u="nodata",i=i.concat(gn(t.serverSyncTree_,l.currentWriteId,!0))}yt(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(u),!1,null))))}Sr(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)rs(s[a]);Za(t,t.transactionQueueTree_)}function Sf(t,e){let n,s=t.transactionQueueTree_;for(n=ee(e);n!==null&&os(s)===void 0;)s=za(s,n),e=ue(e),n=ee(e);return s}function Tf(t,e){const n=[];return Rf(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Rf(t,e,n){const s=os(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Er(e,i=>{Rf(t,i,n)})}function Sr(t,e){const n=os(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,pf(e,n.length>0?n:void 0)}Er(e,s=>{Sr(t,s)})}function Af(t,e){const n=ai(Sf(t,e)),s=za(t.transactionQueueTree_,e);return sC(s,i=>{Qr(t,i)}),Qr(t,s),gf(s,i=>{Qr(t,i)}),n}function Qr(t,e){const n=os(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(gn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?pf(e,void 0):n.length=r+1,yt(t.eventQueue_,ai(e),i);for(let o=0;o<s.length;o++)rs(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function TC(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):je(`Invalid query segment '${n}' in query '${t}'`)}return e}const Zc=function(t,e){const n=RC(t),s=n.namespace;n.domain==="firebase.com"&&xt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&xt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||jb();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Id(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new le(n.pathString)}},RC=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(i=SC(t.substring(h,u)));const d=TC(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",AC=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=eu.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=eu.charAt(e[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ye(this.snapshot.exportVal())}}class PC{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return X(this._path)?null:kd(this._path)}get ref(){return new Dt(this._repo,this._path)}get _queryIdentifier(){const e=$c(this._queryParams),n=Ta(e);return n==="{}"?"default":n}get _queryObject(){return $c(this._queryParams)}isEqual(e){if(e=kt(e),!(e instanceof el))return!1;const n=this._repo===e._repo,s=Ld(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Iw(this._path)}}class Dt extends el{constructor(e,n){super(e,n,new ka,!1)}get parent(){const e=Md(this._path);return e===null?null:new Dt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ks{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new le(e),s=zs(this.ref,e);return new Ks(this._node.getChild(n),s,pe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ks(i,zs(this.ref,s),pe)))}hasChild(e){const n=new le(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function OC(t,e){return t=kt(t),t._checkNotDeleted("ref"),e!==void 0?zs(t._root,e):t._root}function zs(t,e){return t=kt(t),ee(t._path)===null?lC("child","path",e,!1):bf("child","path",e,!1),new Dt(t._repo,ve(t._path,e))}function kC(t,e){t=kt(t),Qa("push",t._path),vf("push",e,t._path,!0);const n=Ef(t._repo),s=AC(n),i=zs(t,s),r=zs(t,s);let o;return e!=null?o=tl(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function FS(t){return Qa("remove",t._path),tl(t,null)}function tl(t,e){t=kt(t),Qa("set",t._path),vf("set",e,t._path,!1);const n=new pr;return vC(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function $S(t){t=kt(t);const e=new NC(()=>{}),n=new nl(e);return yC(t._repo,t,n).then(s=>new Ks(s,new Dt(t._repo,t._path),t._queryParams.getIndex()))}class nl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new xC("value",this,new Ks(e.snapshotNode,new Dt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new PC(this,e,n):null}matches(e){return e instanceof nl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}DE(Dt);BE(Dt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC="FIREBASE_DATABASE_EMULATOR_HOST",Ko={};let MC=!1;function LC(t,e,n,s){t.repoInfo_=new Id(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function FC(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||xt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Pe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Zc(r,i),a=o.repoInfo,l,c;typeof process<"u"&&bc&&(c=bc[DC]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Zc(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const h=i&&l?new Kn(Kn.OWNER):new Xb(t.name,t.options,e);cC("Invalid Firebase Database URL",o),X(o.path)||xt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=BC(a,t,h,new Jb(t.name,n));return new UC(u,t)}function $C(t,e){const n=Ko[e];(!n||n[t.key]!==t)&&xt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),wC(t),delete n[t.key]}function BC(t,e,n,s){let i=Ko[e.name];i||(i={},Ko[e.name]=i);let r=i[t.toURLString()];return r&&xt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new mC(t,MC,n,s),i[t.toURLString()]=r,r}class UC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(gC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dt(this._repo,ne())),this._rootInternal}_delete(){return this._rootInternal!==null&&($C(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xt("Cannot call "+e+" on a deleted database.")}}function xf(t=od(),e){const n=ti(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=dv("database");s&&jC(n,...s)}return n}function jC(t,e,n,s={}){t=kt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&xt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&xt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Kn(Kn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:fv(s.mockUserToken,t.app.options.projectId);r=new Kn(o)}LC(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(t){Lb(Tb),nn(new At("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return FC(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),_t(wc,Ec,t),_t(wc,Ec,"esm2017")}Rt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Rt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};VC();const Tr=t=>(Ju("data-v-4896eafd"),t=t(),Xu(),t),HC=Tr(()=>Be("div",{class:"footer-social"},[Be("h2",null,"Follow us on Facebook"),Be("a",{href:"https://www.facebook.com/profile.php?id=61555159784777",target:"_blank"},[Be("i",{class:"fa-brands fa-square-facebook"})])],-1)),WC={class:"subscribe-form"},GC=Tr(()=>Be("label",null,"Subscribe to our Newsletter",-1)),qC=Tr(()=>Be("input",{class:"form-control",name:"signupemail",placeholder:"Enter Email Address"},null,-1)),KC=Tr(()=>Be("button",{class:"btn",type:"submit"},"Subscribe",-1)),zC=[GC,qC,KC],YC=t=>{t.preventDefault();const e=xf(),n=t.target.signupemail.value,s=OC(e,"emails"),i=kC(s);tl(i,{emailAddress:n}).then(()=>{alert("Successfully Subscribed to the ISK Newsletter!","success"),t.target.reset()},r=>{console.log("FAILED...",r.text)})},QC={__name:"Footer",setup(t){return document.getElementById("liveAlertPlaceholder"),(e,n)=>(ns(),cr("footer",null,[HC,Be("div",WC,[Be("form",{name:"newsletter-form",onSubmit:s_(YC,["prevent"])},[...zC],32)])]))}},JC=ei(QC,[["__scopeId","data-v-4896eafd"],["__file","/Users/mattday/Desktop/Coding/IndianSpringsKatahdins/src/components/Footer.vue"]]),XC={__name:"HomeView",setup(t){return(e,n)=>(ns(),cr(tt,null,[Ae(zy),Be("main",null,[Ae(nv)]),Ae(JC)],64))}},ZC=ei(XC,[["__file","/Users/mattday/Desktop/Coding/IndianSpringsKatahdins/src/views/HomeView.vue"]]),eI=Ly({history:L_("/"),routes:[{path:"/",name:"home",component:ZC},{path:"/about",name:"about",component:()=>fs(()=>import("./AboutView-JpcCFow2.js"),__vite__mapDeps([0,1]))},{path:"/recipes",name:"recipes",component:()=>fs(()=>import("./RecipeView-scCvUWn9.js"),__vite__mapDeps([2,3]))},{path:"/contact",name:"contact",component:()=>fs(()=>import("./ContactView-wfF89mRd.js"),__vite__mapDeps([4,5]))},{path:"/admin12345",name:"admin",component:()=>fs(()=>import("./Admin-Raho9A_4.js"),__vite__mapDeps([6,7]))},{path:"/livestock",name:"livestock",component:()=>fs(()=>import("./Livestock-16w8lWAc.js"),__vite__mapDeps([8,9]))}]});var tI="firebase",nI="10.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t(tI,nI,"app");const sI=(t,e)=>e.some(n=>t instanceof n);let tu,nu;function iI(){return tu||(tu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rI(){return nu||(nu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pf=new WeakMap,zo=new WeakMap,Nf=new WeakMap,Jr=new WeakMap,sl=new WeakMap;function oI(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Qt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Pf.set(n,t)}).catch(()=>{}),sl.set(e,t),e}function aI(t){if(zo.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});zo.set(t,e)}let Yo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Nf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lI(t){Yo=t(Yo)}function cI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Xr(this),e,...n);return Nf.set(s,e.sort?e.sort():[e]),Qt(s)}:rI().includes(t)?function(...e){return t.apply(Xr(this),e),Qt(Pf.get(this))}:function(...e){return Qt(t.apply(Xr(this),e))}}function uI(t){return typeof t=="function"?cI(t):(t instanceof IDBTransaction&&aI(t),sI(t,iI())?new Proxy(t,Yo):t)}function Qt(t){if(t instanceof IDBRequest)return oI(t);if(Jr.has(t))return Jr.get(t);const e=uI(t);return e!==t&&(Jr.set(t,e),sl.set(e,t)),e}const Xr=t=>sl.get(t);function hI(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Qt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Qt(o.result),l.oldVersion,l.newVersion,Qt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const dI=["get","getKey","getAll","getAllKeys","count"],fI=["put","add","delete","clear"],Zr=new Map;function su(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zr.get(e))return Zr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=fI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||dI.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Zr.set(e,r),r}lI(t=>({...t,get:(e,n,s)=>su(e,n)||t.get(e,n,s),has:(e,n)=>!!su(e,n)||t.has(e,n)}));const Of="@firebase/installations",il="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf=1e4,Df=`w:${il}`,Mf="FIS_v2",pI="https://firebaseinstallations.googleapis.com/v1",mI=60*60*1e3,gI="installations",_I="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},kn=new mr(gI,_I,yI);function Lf(t){return t instanceof Mn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff({projectId:t}){return`${pI}/projects/${t}/installations`}function $f(t){return{token:t.token,requestStatus:2,expiresIn:bI(t.expiresIn),creationTime:Date.now()}}async function Bf(t,e){const s=(await e.json()).error;return kn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Uf({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function vI(t,{refreshToken:e}){const n=Uf(t);return n.append("Authorization",wI(e)),n}async function jf(t){const e=await t();return e.status>=500&&e.status<600?t():e}function bI(t){return Number(t.replace("s","000"))}function wI(t){return`${Mf} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Ff(t),i=Uf(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:Mf,appId:t.appId,sdkVersion:Df},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await jf(()=>fetch(s,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:$f(c.authToken)}}else throw await Bf("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=/^[cdef][\w-]{21}$/,Qo="";function SI(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=TI(t);return II.test(n)?n:Qo}catch{return Qo}}function TI(t){return CI(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=new Map;function Wf(t,e){const n=Rr(t);Gf(n,e),RI(n,e)}function Gf(t,e){const n=Hf.get(t);if(n)for(const s of n)s(e)}function RI(t,e){const n=AI();n&&n.postMessage({key:t,fid:e}),xI()}let _n=null;function AI(){return!_n&&"BroadcastChannel"in self&&(_n=new BroadcastChannel("[Firebase] FID Change"),_n.onmessage=t=>{Gf(t.data.key,t.data.fid)}),_n}function xI(){Hf.size===0&&_n&&(_n.close(),_n=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI="firebase-installations-database",NI=1,Dn="firebase-installations-store";let eo=null;function rl(){return eo||(eo=hI(PI,NI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Dn)}}})),eo}async function Qi(t,e){const n=Rr(t),i=(await rl()).transaction(Dn,"readwrite"),r=i.objectStore(Dn),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Wf(t,e.fid),e}async function qf(t){const e=Rr(t),s=(await rl()).transaction(Dn,"readwrite");await s.objectStore(Dn).delete(e),await s.done}async function Ar(t,e){const n=Rr(t),i=(await rl()).transaction(Dn,"readwrite"),r=i.objectStore(Dn),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Wf(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ol(t){let e;const n=await Ar(t.appConfig,s=>{const i=OI(s),r=kI(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===Qo?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function OI(t){const e=t||{fid:SI(),registrationStatus:0};return Kf(e)}function kI(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(kn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=DI(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:MI(t)}:{installationEntry:e}}async function DI(t,e){try{const n=await EI(t,e);return Qi(t.appConfig,n)}catch(n){throw Lf(n)&&n.customData.serverCode===409?await qf(t.appConfig):await Qi(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function MI(t){let e=await iu(t.appConfig);for(;e.registrationStatus===1;)await Vf(100),e=await iu(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await ol(t);return s||n}return e}function iu(t){return Ar(t,e=>{if(!e)throw kn.create("installation-not-found");return Kf(e)})}function Kf(t){return LI(t)?{fid:t.fid,registrationStatus:0}:t}function LI(t){return t.registrationStatus===1&&t.registrationTime+kf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FI({appConfig:t,heartbeatServiceProvider:e},n){const s=$I(t,n),i=vI(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:Df,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await jf(()=>fetch(s,a));if(l.ok){const c=await l.json();return $f(c)}else throw await Bf("Generate Auth Token",l)}function $I(t,{fid:e}){return`${Ff(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function al(t,e=!1){let n;const s=await Ar(t.appConfig,r=>{if(!zf(r))throw kn.create("not-registered");const o=r.authToken;if(!e&&jI(o))return r;if(o.requestStatus===1)return n=BI(t,e),r;{if(!navigator.onLine)throw kn.create("app-offline");const a=HI(r);return n=UI(t,a),a}});return n?await n:s.authToken}async function BI(t,e){let n=await ru(t.appConfig);for(;n.authToken.requestStatus===1;)await Vf(100),n=await ru(t.appConfig);const s=n.authToken;return s.requestStatus===0?al(t,e):s}function ru(t){return Ar(t,e=>{if(!zf(e))throw kn.create("not-registered");const n=e.authToken;return WI(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function UI(t,e){try{const n=await FI(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Qi(t.appConfig,s),n}catch(n){if(Lf(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await qf(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Qi(t.appConfig,s)}throw n}}function zf(t){return t!==void 0&&t.registrationStatus===2}function jI(t){return t.requestStatus===2&&!VI(t)}function VI(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+mI}function HI(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function WI(t){return t.requestStatus===1&&t.requestTime+kf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GI(t){const e=t,{installationEntry:n,registrationPromise:s}=await ol(e);return s?s.catch(console.error):al(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qI(t,e=!1){const n=t;return await KI(n),(await al(n,e)).token}async function KI(t){const{registrationPromise:e}=await ol(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(t){if(!t||!t.options)throw to("App Configuration");if(!t.name)throw to("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw to(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function to(t){return kn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf="installations",YI="installations-internal",QI=t=>{const e=t.getProvider("app").getImmediate(),n=zI(e),s=ti(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},JI=t=>{const e=t.getProvider("app").getImmediate(),n=ti(e,Yf).getImmediate();return{getId:()=>GI(n),getToken:i=>qI(n,i)}};function XI(){nn(new At(Yf,QI,"PUBLIC")),nn(new At(YI,JI,"PRIVATE"))}XI();_t(Of,il);_t(Of,il,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji="analytics",ZI="firebase_id",eS="origin",tS=60*1e3,nS="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ll="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=new Ia("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},qe=new mr("analytics","Analytics",sS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(t){if(!t.startsWith(ll)){const e=qe.create("invalid-gtag-resource",{gtagURL:t});return Ve.warn(e.message),""}return t}function Qf(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function rS(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function oS(t,e){const n=rS("firebase-js-sdk-policy",{createScriptURL:iS}),s=document.createElement("script"),i=`${ll}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function aS(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function lS(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await Qf(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){Ve.error(a)}t("config",i,r)}async function cS(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Qf(n);for(const l of o){const c=a.find(u=>u.measurementId===l),h=c&&e[c.appId];if(h)r.push(h);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){Ve.error(r)}}function uS(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[a,l]=o;await cS(t,e,n,a,l)}else if(r==="config"){const[a,l]=o;await lS(t,e,n,s,a,l)}else if(r==="consent"){const[a]=o;t("consent","update",a)}else if(r==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){Ve.error(a)}}return i}function hS(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=uS(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function dS(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ll)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=30,pS=1e3;class mS{constructor(e={},n=pS){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Jf=new mS;function gS(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function _S(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:gS(s)},r=nS.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw qe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function yS(t,e=Jf,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw qe.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw qe.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new wS;return setTimeout(async()=>{a.abort()},n!==void 0?n:tS),Xf({appId:s,apiKey:i,measurementId:r},o,a,e)}async function Xf(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=Jf){var r;const{appId:o,measurementId:a}=t;try{await vS(s,e)}catch(l){if(a)return Ve.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await _S(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!bS(c)){if(i.deleteThrottleMetadata(o),a)return Ve.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const h=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?dc(n,i.intervalMillis,fS):dc(n,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,u),Ve.debug(`Calling attemptFetch again in ${h} millis`),Xf(t,u,s,i)}}function vS(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(qe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function bS(t){if(!(t instanceof Mn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class wS{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ES(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CS(){if(ed())try{await td()}catch(t){return Ve.warn(qe.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ve.warn(qe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function IS(t,e,n,s,i,r,o){var a;const l=yS(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Ve.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Ve.error(m)),e.push(l);const c=CS().then(m=>{if(m)return s.getId()}),[h,u]=await Promise.all([l,c]);dS(r)||oS(r,h.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[eS]="firebase",d.update=!0,u!=null&&(d[ZI]=u),i("config",h.measurementId,d),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e){this.app=e}_delete(){return delete Ps[this.app.options.appId],Promise.resolve()}}let Ps={},ou=[];const au={};let no="dataLayer",TS="gtag",lu,Zf,cu=!1;function RS(){const t=[];if(mv()&&t.push("This is a browser extension environment."),_v()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=qe.create("invalid-analytics-context",{errorInfo:e});Ve.warn(n.message)}}function AS(t,e,n){RS();const s=t.options.appId;if(!s)throw qe.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ve.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw qe.create("no-api-key");if(Ps[s]!=null)throw qe.create("already-exists",{id:s});if(!cu){aS(no);const{wrappedGtag:r,gtagCore:o}=hS(Ps,ou,au,no,TS);Zf=r,lu=o,cu=!0}return Ps[s]=IS(t,ou,au,e,lu,no,n),new SS(t)}function xS(t=od()){t=kt(t);const e=ti(t,Ji);return e.isInitialized()?e.getImmediate():PS(t)}function PS(t,e={}){const n=ti(t,Ji);if(n.isInitialized()){const i=n.getImmediate();if(Li(e,n.getOptions()))return i;throw qe.create("already-initialized")}return n.initialize({options:e})}function NS(t,e,n,s){t=kt(t),ES(Zf,Ps[t.app.options.appId],e,n,s).catch(i=>Ve.error(i))}const uu="@firebase/analytics",hu="0.10.0";function OS(){nn(new At(Ji,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return AS(s,i,n)},"PUBLIC")),nn(new At("analytics-internal",t,"PRIVATE")),_t(uu,hu),_t(uu,hu,"esm2017");function t(e){try{const n=e.getProvider(Ji).getImmediate();return{logEvent:(s,i,r)=>NS(n,s,i,r)}}catch(n){throw qe.create("interop-component-reg-failed",{reason:n})}}}OS();const kS={apiKey:"AIzaSyA6hqThcAUXeRWTlBLsQMTG2sw-W5Lx744",authDomain:"indianspringskatahdins-187d9.firebaseapp.com",projectId:"indianspringskatahdins-187d9",storageBucket:"indianspringskatahdins-187d9.appspot.com",messagingSenderId:"49980286736",appId:"1:49980286736:web:c4cc74994248b9a5ea6795",measurementId:"G-5C26L7CC6X",databaseURL:"https://indianspringskatahdins-187d9-default-rtdb.firebaseio.com/"},ep=rd(kS);xS(ep);xf(ep);const tp=o_(By);tp.use(eI);tp.mount("#app");export{tt as F,zy as N,ei as _,Ae as a,yg as b,cr as c,JC as d,sr as e,Nm as f,xf as g,Be as h,MS as i,$S as j,zs as k,LS as l,Xu as m,kC as n,ns as o,Ju as p,FS as q,OC as r,tl as s,DS as t,s_ as w};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AboutView-JpcCFow2.js","assets/AboutView-vxUhViEV.css","assets/RecipeView-scCvUWn9.js","assets/RecipeView-TfvVmBaF.css","assets/ContactView-wfF89mRd.js","assets/ContactView-FealAXW6.css","assets/Admin-Raho9A_4.js","assets/Admin-J1ofnQ0o.css","assets/Livestock-16w8lWAc.js","assets/Livestock-zT3rVxMB.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
