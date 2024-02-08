(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xt(t,e){const n=new Set(t.split(","));return e?s=>n.has(s.toLowerCase()):s=>n.has(s)}const oe=Object.freeze({}),Un=Object.freeze([]),xe=()=>{},jc=()=>!1,Ds=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ui=t=>t.startsWith("onUpdate:"),pe=Object.assign,Po=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Sd=Object.prototype.hasOwnProperty,Y=(t,e)=>Sd.call(t,e),B=Array.isArray,jn=t=>Di(t)==="[object Map]",Td=t=>Di(t)==="[object Set]",U=t=>typeof t=="function",ge=t=>typeof t=="string",ki=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",ko=t=>(le(t)||U(t))&&U(t.then)&&U(t.catch),Rd=Object.prototype.toString,Di=t=>Rd.call(t),Do=t=>Di(t).slice(8,-1),Ad=t=>Di(t)==="[object Object]",Mo=t=>ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ii=xt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Od=xt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Mi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},xd=/-(\w)/g,Gn=Mi(t=>t.replace(xd,(e,n)=>n?n.toUpperCase():"")),Nd=/\B([A-Z])/g,zt=Mi(t=>t.replace(Nd,"-$1").toLowerCase()),Li=Mi(t=>t.charAt(0).toUpperCase()+t.slice(1)),ln=Mi(t=>t?`on${Li(t)}`:""),Yt=(t,e)=>!Object.is(t,e),ns=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},fi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Pd=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ua;const Lo=()=>Ua||(Ua=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $o(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ge(s)?Ld(s):$o(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(ge(t)||le(t))return t}const kd=/;(?![^(]*\))/g,Dd=/:([^]+)/,Md=/\/\*[^]*?\*\//g;function Ld(t){const e={};return t.replace(Md,"").split(kd).forEach(n=>{if(n){const s=n.split(Dd);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Fo(t){let e="";if(ge(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const s=Fo(t[n]);s&&(e+=s+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const $d="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Fd="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Bd="annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",Ud=xt($d),jd=xt(Fd),Hd=xt(Bd),Wd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vd=xt(Wd);function Hc(t){return!!t||t===""}/**
* @vue/reactivity v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mr(t,...e){console.warn(`[Vue warn] ${t}`,...e)}let Ze;class Kd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ze,!e&&Ze&&(this.index=(Ze.scopes||(Ze.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ze;try{return Ze=this,e()}finally{Ze=n}}else Mr("cannot run an inactive effect scope.")}on(){Ze=this}off(){Ze=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Gd(t,e=Ze){e&&e.active&&e.effects.push(t)}function qd(){return Ze}let pn;class Bo{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=3,this._trackId=0,this._runnings=0,this._queryings=0,this._depsLength=0,Gd(this,i)}get dirty(){if(this._dirtyLevel===1){this._dirtyLevel=0,this._queryings++,tn();for(const e of this.deps)if(e.computed&&(zd(e.computed),this._dirtyLevel>=2))break;nn(),this._queryings--}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?3:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Wt,n=pn;try{return Wt=!0,pn=this,this._runnings++,ja(this),this.fn()}finally{Ha(this),this._runnings--,pn=n,Wt=e}}stop(){var e;this.active&&(ja(this),Ha(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function zd(t){return t.value}function ja(t){t._trackId++,t._depsLength=0}function Ha(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Wc(t.deps[e],t);t.deps.length=t._depsLength}}function Wc(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Wt=!0,Lr=0;const Vc=[];function tn(){Vc.push(Wt),Wt=!1}function nn(){const t=Vc.pop();Wt=t===void 0?!0:t}function Uo(){Lr++}function jo(){for(Lr--;!Lr&&$r.length;)$r.shift()()}function Kc(t,e,n){var s;if(e.get(t)!==t._trackId){e.set(t,t._trackId);const i=t.deps[t._depsLength];i!==e?(i&&Wc(i,t),t.deps[t._depsLength++]=e):t._depsLength++,(s=t.onTrack)==null||s.call(t,pe({effect:t},n))}}const $r=[];function Gc(t,e,n){var s;Uo();for(const i of t.keys())if(!(!i.allowRecurse&&i._runnings)&&i._dirtyLevel<e&&(!i._runnings||e!==2)){const r=i._dirtyLevel;i._dirtyLevel=e,r===0&&(!i._queryings||e!==2)&&((s=i.onTrigger)==null||s.call(i,pe({effect:i},n)),i.trigger(),i.scheduler&&$r.push(i.scheduler))}jo()}const qc=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Fr=new WeakMap,mn=Symbol("iterate"),Br=Symbol("Map key iterate");function ke(t,e,n){if(Wt&&pn){let s=Fr.get(t);s||Fr.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=qc(()=>s.delete(n))),Kc(pn,i,{target:t,type:e,key:n})}}function gt(t,e,n,s,i,r){const o=Fr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t)){const l=Number(s);o.forEach((c,f)=>{(f==="length"||!ki(f)&&f>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?Mo(n)&&a.push(o.get("length")):(a.push(o.get(mn)),jn(t)&&a.push(o.get(Br)));break;case"delete":B(t)||(a.push(o.get(mn)),jn(t)&&a.push(o.get(Br)));break;case"set":jn(t)&&a.push(o.get(mn));break}Uo();for(const l of a)l&&Gc(l,3,{target:t,type:e,key:n,newValue:s,oldValue:i,oldTarget:r});jo()}const Yd=xt("__proto__,__v_isRef,__isVue"),zc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ki)),Wa=Qd();function Qd(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=W(this);for(let r=0,o=this.length;r<o;r++)ke(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(W)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){tn(),Uo();const s=W(this)[e].apply(this,n);return jo(),nn(),s}}),t}function Jd(t){const e=W(this);return ke(e,"has",t),e.hasOwnProperty(t)}class Yc{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const i=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?nu:tu:r?eu:Zc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=B(e);if(!i){if(o&&Y(Wa,n))return Reflect.get(Wa,n,s);if(n==="hasOwnProperty")return Jd}const a=Reflect.get(e,n,s);return(ki(n)?zc.has(n):Yd(n))||(i||ke(e,"get",n),r)?a:Re(a)?o&&Mo(n)?a:a.value:le(a)?i?iu(a):Bi(a):a}}class Qc extends Yc{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._shallow){const l=Qt(r);if(!hi(s)&&!Qt(s)&&(r=W(r),s=W(s)),!B(e)&&Re(r)&&!Re(s))return l?!1:(r.value=s,!0)}const o=B(e)&&Mo(n)?Number(n)<e.length:Y(e,n),a=Reflect.set(e,n,s,i);return e===W(i)&&(o?Yt(s,r)&&gt(e,"set",n,s,r):gt(e,"add",n,s)),a}deleteProperty(e,n){const s=Y(e,n),i=e[n],r=Reflect.deleteProperty(e,n);return r&&s&&gt(e,"delete",n,void 0,i),r}has(e,n){const s=Reflect.has(e,n);return(!ki(n)||!zc.has(n))&&ke(e,"has",n),s}ownKeys(e){return ke(e,"iterate",B(e)?"length":mn),Reflect.ownKeys(e)}}class Jc extends Yc{constructor(e=!1){super(!0,e)}set(e,n){return Mr(`Set operation on key "${String(n)}" failed: target is readonly.`,e),!0}deleteProperty(e,n){return Mr(`Delete operation on key "${String(n)}" failed: target is readonly.`,e),!0}}const Xd=new Qc,Zd=new Jc,ep=new Qc(!0),tp=new Jc(!0),Ho=t=>t,$i=t=>Reflect.getPrototypeOf(t);function zs(t,e,n=!1,s=!1){t=t.__v_raw;const i=W(t),r=W(e);n||(Yt(e,r)&&ke(i,"get",e),ke(i,"get",r));const{has:o}=$i(i),a=s?Ho:n?Wo:Cs;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Ys(t,e=!1){const n=this.__v_raw,s=W(n),i=W(t);return e||(Yt(t,i)&&ke(s,"has",t),ke(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Qs(t,e=!1){return t=t.__v_raw,!e&&ke(W(t),"iterate",mn),Reflect.get(t,"size",t)}function Va(t){t=W(t);const e=W(this);return $i(e).has.call(e,t)||(e.add(t),gt(e,"add",t,t)),this}function Ka(t,e){e=W(e);const n=W(this),{has:s,get:i}=$i(n);let r=s.call(n,t);r?Xc(n,s,t):(t=W(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Yt(e,o)&&gt(n,"set",t,e,o):gt(n,"add",t,e),this}function Ga(t){const e=W(this),{has:n,get:s}=$i(e);let i=n.call(e,t);i?Xc(e,n,t):(t=W(t),i=n.call(e,t));const r=s?s.call(e,t):void 0,o=e.delete(t);return i&&gt(e,"delete",t,void 0,r),o}function qa(){const t=W(this),e=t.size!==0,n=jn(t)?new Map(t):new Set(t),s=t.clear();return e&&gt(t,"clear",void 0,void 0,n),s}function Js(t,e){return function(s,i){const r=this,o=r.__v_raw,a=W(o),l=e?Ho:t?Wo:Cs;return!t&&ke(a,"iterate",mn),o.forEach((c,f)=>s.call(i,l(c),l(f),r))}}function Xs(t,e,n){return function(...s){const i=this.__v_raw,r=W(i),o=jn(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),f=n?Ho:e?Wo:Cs;return!e&&ke(r,"iterate",l?Br:mn),{next(){const{value:u,done:d}=c.next();return d?{value:u,done:d}:{value:a?[f(u[0]),f(u[1])]:f(u),done:d}},[Symbol.iterator](){return this}}}}function Lt(t){return function(...e){{const n=e[0]?`on key "${e[0]}" `:"";console.warn(`${Li(t)} operation ${n}failed: target is readonly.`,W(this))}return t==="delete"?!1:t==="clear"?void 0:this}}function np(){const t={get(r){return zs(this,r)},get size(){return Qs(this)},has:Ys,add:Va,set:Ka,delete:Ga,clear:qa,forEach:Js(!1,!1)},e={get(r){return zs(this,r,!1,!0)},get size(){return Qs(this)},has:Ys,add:Va,set:Ka,delete:Ga,clear:qa,forEach:Js(!1,!0)},n={get(r){return zs(this,r,!0)},get size(){return Qs(this,!0)},has(r){return Ys.call(this,r,!0)},add:Lt("add"),set:Lt("set"),delete:Lt("delete"),clear:Lt("clear"),forEach:Js(!0,!1)},s={get(r){return zs(this,r,!0,!0)},get size(){return Qs(this,!0)},has(r){return Ys.call(this,r,!0)},add:Lt("add"),set:Lt("set"),delete:Lt("delete"),clear:Lt("clear"),forEach:Js(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Xs(r,!1,!1),n[r]=Xs(r,!0,!1),e[r]=Xs(r,!1,!0),s[r]=Xs(r,!0,!0)}),[t,n,e,s]}const[sp,ip,rp,op]=np();function Fi(t,e){const n=e?t?op:rp:t?ip:sp;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Y(n,i)&&i in s?n:s,i,r)}const ap={get:Fi(!1,!1)},lp={get:Fi(!1,!0)},cp={get:Fi(!0,!1)},up={get:Fi(!0,!0)};function Xc(t,e,n){const s=W(n);if(s!==n&&e.call(t,s)){const i=Do(t);console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Zc=new WeakMap,eu=new WeakMap,tu=new WeakMap,nu=new WeakMap;function fp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hp(t){return t.__v_skip||!Object.isExtensible(t)?0:fp(Do(t))}function Bi(t){return Qt(t)?t:Ui(t,!1,Xd,ap,Zc)}function su(t){return Ui(t,!1,ep,lp,eu)}function iu(t){return Ui(t,!0,Zd,cp,tu)}function $n(t){return Ui(t,!0,tp,up,nu)}function Ui(t,e,n,s,i){if(!le(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=hp(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function gn(t){return Qt(t)?gn(t.__v_raw):!!(t&&t.__v_isReactive)}function Qt(t){return!!(t&&t.__v_isReadonly)}function hi(t){return!!(t&&t.__v_isShallow)}function Ur(t){return gn(t)||Qt(t)}function W(t){const e=t&&t.__v_raw;return e?W(e):t}function ru(t){return fi(t,"__v_skip",!0),t}const Cs=t=>le(t)?Bi(t):t,Wo=t=>le(t)?iu(t):t;class ou{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Bo(()=>e(this._value),()=>jr(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=W(this);return au(e),(!e._cacheable||e.effect.dirty)&&Yt(e._value,e._value=e.effect.run())&&jr(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function dp(t,e,n=!1){let s,i;const r=U(t);r?(s=t,i=()=>{console.warn("Write operation failed: computed value is readonly")}):(s=t.get,i=t.set);const o=new ou(s,i,r||!i,n);return e&&!n&&(o.effect.onTrack=e.onTrack,o.effect.onTrigger=e.onTrigger),o}function au(t){Wt&&pn&&(t=W(t),Kc(pn,t.dep||(t.dep=qc(()=>t.dep=void 0,t instanceof ou?t:void 0)),{target:t,type:"get",key:"value"}))}function jr(t,e=3,n){t=W(t);const s=t.dep;s&&Gc(s,e,{target:t,type:"set",key:"value",newValue:n})}function Re(t){return!!(t&&t.__v_isRef===!0)}function pp(t){return lu(t,!1)}function mp(t){return lu(t,!0)}function lu(t,e){return Re(t)?t:new gp(t,e)}class gp{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:W(e),this._value=n?e:Cs(e)}get value(){return au(this),this._value}set value(e){const n=this.__v_isShallow||hi(e)||Qt(e);e=n?e:W(e),Yt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Cs(e),jr(this,3,e))}}function _n(t){return Re(t)?t.value:t}const _p={get:(t,e,n)=>_n(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Re(i)&&!Re(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function cu(t){return gn(t)?t:new Proxy(t,_p)}/**
* @vue/runtime-core v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const yn=[];function ri(t){yn.push(t)}function oi(){yn.pop()}function S(t,...e){tn();const n=yn.length?yn[yn.length-1].component:null,s=n&&n.appContext.config.warnHandler,i=yp();if(s)It(s,n,11,[t+e.join(""),n&&n.proxy,i.map(({vnode:r})=>`at <${zi(n,r.type)}>`).join(`
`),i]);else{const r=[`[Vue warn]: ${t}`,...e];i.length&&r.push(`
`,...vp(i)),console.warn(...r)}nn()}function yp(){let t=yn[yn.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const s=t.component&&t.component.parent;t=s&&s.vnode}return e}function vp(t){const e=[];return t.forEach((n,s)=>{e.push(...s===0?[]:[`
`],...bp(n))}),e}function bp({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",s=t.component?t.component.parent==null:!1,i=` at <${zi(t.component,t.type,s)}`,r=">"+n;return t.props?[i,...wp(t.props),r]:[i+r]}function wp(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(s=>{e.push(...uu(s,t[s]))}),n.length>3&&e.push(" ..."),e}function uu(t,e,n){return ge(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:Re(e)?(e=uu(t,W(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):U(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=W(e),n?e:[`${t}=`,e])}const Vo={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function It(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Ms(r,e,n)}return i}function ot(t,e,n,s){if(U(t)){const r=It(t,e,n,s);return r&&ko(r)&&r.catch(o=>{Ms(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(ot(t[r],e,n,s));return i}function Ms(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=Vo[n];for(;r;){const c=r.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){It(l,null,10,[t,o,a]);return}}Ep(t,n,i,s)}function Ep(t,e,n,s=!0){{const i=Vo[e];if(n&&ri(n),S(`Unhandled error${i?` during execution of ${i}`:""}`),n&&oi(),s)throw t;console.error(t)}}let Is=!1,Hr=!1;const Oe=[];let dt=0;const Hn=[];let wt=null,Ft=0;const fu=Promise.resolve();let Ko=null;const Cp=100;function hu(t){const e=Ko||fu;return t?e.then(this?t.bind(this):t):e}function Ip(t){let e=dt+1,n=Oe.length;for(;e<n;){const s=e+n>>>1,i=Oe[s],r=Ss(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function ji(t){(!Oe.length||!Oe.includes(t,Is&&t.allowRecurse?dt+1:dt))&&(t.id==null?Oe.push(t):Oe.splice(Ip(t.id),0,t),du())}function du(){!Is&&!Hr&&(Hr=!0,Ko=fu.then(gu))}function Sp(t){const e=Oe.indexOf(t);e>dt&&Oe.splice(e,1)}function pu(t){B(t)?Hn.push(...t):(!wt||!wt.includes(t,t.allowRecurse?Ft+1:Ft))&&Hn.push(t),du()}function za(t,e,n=Is?dt+1:0){for(e=e||new Map;n<Oe.length;n++){const s=Oe[n];if(s&&s.pre){if(t&&s.id!==t.uid||Go(e,s))continue;Oe.splice(n,1),n--,s()}}}function mu(t){if(Hn.length){const e=[...new Set(Hn)].sort((n,s)=>Ss(n)-Ss(s));if(Hn.length=0,wt){wt.push(...e);return}for(wt=e,t=t||new Map,Ft=0;Ft<wt.length;Ft++)Go(t,wt[Ft])||wt[Ft]();wt=null,Ft=0}}const Ss=t=>t.id==null?1/0:t.id,Tp=(t,e)=>{const n=Ss(t)-Ss(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function gu(t){Hr=!1,Is=!0,t=t||new Map,Oe.sort(Tp);const e=n=>Go(t,n);try{for(dt=0;dt<Oe.length;dt++){const n=Oe[dt];if(n&&n.active!==!1){if(e(n))continue;It(n,null,14)}}}finally{dt=0,Oe.length=0,mu(t),Is=!1,Ko=null,(Oe.length||Hn.length)&&gu(t)}}function Go(t,e){if(!t.has(e))t.set(e,1);else{const n=t.get(e);if(n>Cp){const s=e.ownerInstance,i=s&&Gu(s.type);return Ms(`Maximum recursive updates exceeded${i?` in component <${i}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,null,10),!0}else t.set(e,n+1)}}let vn=!1;const Ln=new Set;Lo().__VUE_HMR_RUNTIME__={createRecord:lr(_u),rerender:lr(Op),reload:lr(xp)};const Cn=new Map;function Rp(t){const e=t.type.__hmrId;let n=Cn.get(e);n||(_u(e,t.type),n=Cn.get(e)),n.instances.add(t)}function Ap(t){Cn.get(t.type.__hmrId).instances.delete(t)}function _u(t,e){return Cn.has(t)?!1:(Cn.set(t,{initialDef:ds(e),instances:new Set}),!0)}function ds(t){return qu(t)?t.__vccOpts:t}function Op(t,e){const n=Cn.get(t);n&&(n.initialDef.render=e,[...n.instances].forEach(s=>{e&&(s.render=e,ds(s.type).render=e),s.renderCache=[],vn=!0,s.effect.dirty=!0,s.update(),vn=!1}))}function xp(t,e){const n=Cn.get(t);if(!n)return;e=ds(e),Ya(n.initialDef,e);const s=[...n.instances];for(const i of s){const r=ds(i.type);Ln.has(r)||(r!==n.initialDef&&Ya(r,e),Ln.add(r)),i.appContext.propsCache.delete(i.type),i.appContext.emitsCache.delete(i.type),i.appContext.optionsCache.delete(i.type),i.ceReload?(Ln.add(r),i.ceReload(e.styles),Ln.delete(r)):i.parent?(i.parent.effect.dirty=!0,ji(i.parent.update)):i.appContext.reload?i.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}pu(()=>{for(const i of s)Ln.delete(ds(i.type))})}function Ya(t,e){pe(t,e);for(const n in t)n!=="__file"&&!(n in e)&&delete t[n]}function lr(t){return(e,n)=>{try{return t(e,n)}catch(s){console.error(s),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let pt,fs=[],Wr=!1;function Ls(t,...e){pt?pt.emit(t,...e):Wr||fs.push({event:t,args:e})}function yu(t,e){var n,s;pt=t,pt?(pt.enabled=!0,fs.forEach(({event:i,args:r})=>pt.emit(i,...r)),fs=[]):typeof window<"u"&&window.HTMLElement&&!((s=(n=window.navigator)==null?void 0:n.userAgent)!=null&&s.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{yu(r,e)}),setTimeout(()=>{pt||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Wr=!0,fs=[])},3e3)):(Wr=!0,fs=[])}function Np(t,e){Ls("app:init",t,e,{Fragment:et,Text:$s,Comment:at,Static:ms})}function Pp(t){Ls("app:unmount",t)}const kp=qo("component:added"),vu=qo("component:updated"),Dp=qo("component:removed"),Mp=t=>{pt&&typeof pt.cleanupBuffer=="function"&&!pt.cleanupBuffer(t)&&Dp(t)};function qo(t){return e=>{Ls(t,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}const Lp=bu("perf:start"),$p=bu("perf:end");function bu(t){return(e,n,s)=>{Ls(t,e.appContext.app,e.uid,e,n,s)}}function Fp(t,e,n){Ls("component:emit",t.appContext.app,t,e,n)}function Bp(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||oe;{const{emitsOptions:f,propsOptions:[u]}=t;if(f)if(!(e in f))(!u||!(ln(e)in u))&&S(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${ln(e)}" prop.`);else{const d=f[e];U(d)&&(d(...n)||S(`Invalid event arguments: event validation failed for event "${e}".`))}}let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:d}=s[f]||oe;d&&(i=n.map(m=>ge(m)?m.trim():m)),u&&(i=n.map(Pd))}Fp(t,e,i);{const f=e.toLowerCase();f!==e&&s[ln(f)]&&S(`Event "${f}" is emitted in component ${zi(t,t.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${zt(e)}" instead of "${e}".`)}let a,l=s[a=ln(e)]||s[a=ln(Gn(e))];!l&&r&&(l=s[a=ln(zt(e))]),l&&ot(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ot(c,t,6,i)}}function wu(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!U(t)){const l=c=>{const f=wu(c,e,!0);f&&(a=!0,pe(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(le(t)&&s.set(t,null),null):(B(r)?r.forEach(l=>o[l]=null):pe(o,r),le(t)&&s.set(t,o),o)}function Hi(t,e){return!t||!Ds(e)?!1:(e=e.slice(2).replace(/Once$/,""),Y(t,e[0].toLowerCase()+e.slice(1))||Y(t,zt(e))||Y(t,e))}let je=null,Wi=null;function di(t){const e=je;return je=t,Wi=t&&t.type.__scopeId||null,e}function Eu(t){Wi=t}function Cu(){Wi=null}function Up(t,e=je,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&al(-1);const r=di(e);let o;try{o=t(...i)}finally{di(r),s._d&&al(1)}return vu(e),o};return s._n=!0,s._c=!0,s._d=!0,s}let Vr=!1;function pi(){Vr=!0}function cr(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:f,renderCache:u,data:d,setupState:m,ctx:y,inheritAttrs:A}=t;let D,P;const M=di(t);Vr=!1;try{if(n.shapeFlag&4){const se=i||s,me=m.__isScriptSetup?new Proxy(se,{get(j,Ee,ye){return S(`Property '${String(Ee)}' was accessed via 'this'. Avoid using 'this' in templates.`),Reflect.get(j,Ee,ye)}}):se;D=tt(f.call(me,se,u,r,m,d,y)),P=l}else{const se=e;l===r&&pi(),D=tt(se.length>1?se(r,{get attrs(){return pi(),l},slots:a,emit:c}):se(r,null)),P=e.props?l:Hp(l)}}catch(se){gs.length=0,Ms(se,t,1),D=Ne(at)}let F=D,K;if(D.patchFlag>0&&D.patchFlag&2048&&([F,K]=jp(D)),P&&A!==!1){const se=Object.keys(P),{shapeFlag:me}=F;if(se.length){if(me&7)o&&se.some(ui)&&(P=Wp(P,o)),F=Jt(F,P);else if(!Vr&&F.type!==at){const j=Object.keys(l),Ee=[],ye=[];for(let Ke=0,Je=j.length;Ke<Je;Ke++){const Le=j[Ke];Ds(Le)?ui(Le)||Ee.push(Le[2].toLowerCase()+Le.slice(3)):ye.push(Le)}ye.length&&S(`Extraneous non-props attributes (${ye.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),Ee.length&&S(`Extraneous non-emits event listeners (${Ee.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(Qa(F)||S("Runtime directive used on component with non-element root node. The directives will not function as intended."),F=Jt(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(Qa(F)||S("Component inside <Transition> renders non-element root node that cannot be animated."),F.transition=n.transition),K?K(F):D=F,di(M),D}const jp=t=>{const e=t.children,n=t.dynamicChildren,s=Iu(e);if(!s)return[t,void 0];const i=e.indexOf(s),r=n?n.indexOf(s):-1,o=a=>{e[i]=a,n&&(r>-1?n[r]=a:a.patchFlag>0&&(t.dynamicChildren=[...n,a]))};return[tt(s),o]};function Iu(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(Rs(s)){if(s.type!==at||s.children==="v-if"){if(e)return;e=s}}else return}return e}const Hp=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ds(n))&&((e||(e={}))[n]=t[n]);return e},Wp=(t,e)=>{const n={};for(const s in t)(!ui(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n},Qa=t=>t.shapeFlag&7||t.type===at;function Vp(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if((i||a)&&vn||e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Ja(s,o,c):!!o;if(l&8){const f=e.dynamicProps;for(let u=0;u<f.length;u++){const d=f[u];if(o[d]!==s[d]&&!Hi(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ja(s,o,c):!0:!!o;return!1}function Ja(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Hi(n,r))return!0}return!1}function Kp({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Gp=Symbol.for("v-ndc"),qp=t=>t.__isSuspense;function zp(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):pu(t)}const Yp=Symbol.for("v-scx"),Qp=()=>{{const t=St(Yp);return t||S("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function Jp(t,e){return zo(t,null,e)}const Zs={};function ps(t,e,n){return U(e)||S("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),zo(t,e,n)}function zo(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:a}=oe){if(e&&r){const j=e;e=(...Ee)=>{j(...Ee),me()}}s!==void 0&&typeof s=="number"&&S('watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'),e||(n!==void 0&&S('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),s!==void 0&&S('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'),r!==void 0&&S('watch() "once" option is only respected when using the watch(source, callback, options?) signature.'));const l=j=>{S("Invalid watch source: ",j,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=Se,f=j=>s===!0?j:Fn(j,s===!1?1:void 0);let u,d=!1,m=!1;if(Re(t)?(u=()=>t.value,d=hi(t)):gn(t)?(u=()=>f(t),d=!0):B(t)?(m=!0,d=t.some(j=>gn(j)||hi(j)),u=()=>t.map(j=>{if(Re(j))return j.value;if(gn(j))return f(j);if(U(j))return It(j,c,2);l(j)})):U(t)?e?u=()=>It(t,c,2):u=()=>(y&&y(),ot(t,c,3,[A])):(u=xe,l(t)),e&&s){const j=u;u=()=>Fn(j())}let y,A=j=>{y=K.onStop=()=>{It(j,c,4),y=K.onStop=void 0}},D;if(qi)if(A=xe,e?n&&ot(e,c,3,[u(),m?[]:void 0,A]):u(),i==="sync"){const j=Qp();D=j.__watcherHandles||(j.__watcherHandles=[])}else return xe;let P=m?new Array(t.length).fill(Zs):Zs;const M=()=>{if(!(!K.active||!K.dirty))if(e){const j=K.run();(s||d||(m?j.some((Ee,ye)=>Yt(Ee,P[ye])):Yt(j,P)))&&(y&&y(),ot(e,c,3,[j,P===Zs?void 0:m&&P[0]===Zs?[]:P,A]),P=j)}else K.run()};M.allowRecurse=!!e;let F;i==="sync"?F=M:i==="post"?F=()=>$e(M,c&&c.suspense):(M.pre=!0,c&&(M.id=c.uid),F=()=>ji(M));const K=new Bo(u,xe,F),se=qd(),me=()=>{K.stop(),se&&Po(se.effects,K)};return K.onTrack=o,K.onTrigger=a,e?n?M():P=K.run():i==="post"?$e(K.run.bind(K),c&&c.suspense):K.run(),D&&D.push(me),me}function Xp(t,e,n){const s=this.proxy,i=ge(t)?t.includes(".")?Su(s,t):()=>s[t]:t.bind(s,s);let r;U(e)?r=e:(r=e.handler,n=e);const o=Bs(this),a=zo(i,r.bind(s),n);return o(),a}function Su(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Fn(t,e,n=0,s){if(!le(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(s=s||new Set,s.has(t))return t;if(s.add(t),Re(t))Fn(t.value,e,n,s);else if(B(t))for(let i=0;i<t.length;i++)Fn(t[i],e,n,s);else if(Td(t)||jn(t))t.forEach(i=>{Fn(i,e,n,s)});else if(Ad(t))for(const i in t)Fn(t[i],e,n,s);return t}function Tu(t){Od(t)&&S("Do not use built-in directive ids as custom directive id: "+t)}function on(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(tn(),ot(l,n,8,[t.el,a,t,e]),nn())}}/*! #__NO_SIDE_EFFECTS__ */function Ru(t,e){return U(t)?pe({name:t.name},e,{setup:t}):t}const ai=t=>!!t.type.__asyncLoader,Yo=t=>t.type.__isKeepAlive;function Zp(t,e){Au(t,"a",e)}function em(t,e){Au(t,"da",e)}function Au(t,e,n=Se){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Vi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Yo(i.parent.vnode)&&tm(s,e,n,i),i=i.parent}}function tm(t,e,n,s){const i=Vi(e,t,s,!0);Ou(()=>{Po(s[e],i)},n)}function Vi(t,e,n=Se,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;tn();const a=Bs(n),l=ot(e,n,t,o);return a(),nn(),l});return s?i.unshift(r):i.push(r),r}else{const i=ln(Vo[t].replace(/ hook$/,""));S(`${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const Nt=t=>(e,n=Se)=>(!qi||t==="sp")&&Vi(t,(...s)=>e(...s),n),nm=Nt("bm"),sm=Nt("m"),im=Nt("bu"),rm=Nt("u"),om=Nt("bum"),Ou=Nt("um"),am=Nt("sp"),lm=Nt("rtg"),cm=Nt("rtc");function um(t,e=Se){Vi("ec",t,e)}const Kr=t=>t?Vu(t)?ea(t)||t.proxy:Kr(t.parent):null,bn=pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>$n(t.props),$attrs:t=>$n(t.attrs),$slots:t=>$n(t.slots),$refs:t=>$n(t.refs),$parent:t=>Kr(t.parent),$root:t=>Kr(t.root),$emit:t=>t.emit,$options:t=>Jo(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ji(t.update)}),$nextTick:t=>t.n||(t.n=hu.bind(t.proxy)),$watch:t=>Xp.bind(t)}),Qo=t=>t==="_"||t==="$",ur=(t,e)=>t!==oe&&!t.__isScriptSetup&&Y(t,e),xu={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;if(e==="__isVue")return!0;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(ur(s,e))return o[e]=1,s[e];if(i!==oe&&Y(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Y(c,e))return o[e]=3,r[e];if(n!==oe&&Y(n,e))return o[e]=4,n[e];Gr&&(o[e]=0)}}const f=bn[e];let u,d;if(f)return e==="$attrs"?(ke(t,"get",e),pi()):e==="$slots"&&ke(t,"get",e),f(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==oe&&Y(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Y(d,e))return d[e];je&&(!ge(e)||e.indexOf("__v")!==0)&&(i!==oe&&Qo(e[0])&&Y(i,e)?S(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===je&&S(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`))},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return ur(i,e)?(i[e]=n,!0):i.__isScriptSetup&&Y(i,e)?(S(`Cannot mutate <script setup> binding "${e}" from Options API.`),!1):s!==oe&&Y(s,e)?(s[e]=n,!0):Y(t.props,e)?(S(`Attempting to mutate prop "${e}". Props are readonly.`),!1):e[0]==="$"&&e.slice(1)in t?(S(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`),!1):(e in t.appContext.config.globalProperties?Object.defineProperty(r,e,{enumerable:!0,configurable:!0,value:n}):r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==oe&&Y(t,o)||ur(e,o)||(a=r[0])&&Y(a,o)||Y(s,o)||Y(bn,o)||Y(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Y(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};xu.ownKeys=t=>(S("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function fm(t){const e={};return Object.defineProperty(e,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(bn).forEach(n=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,get:()=>bn[n](t),set:xe})}),e}function hm(t){const{ctx:e,propsOptions:[n]}=t;n&&Object.keys(n).forEach(s=>{Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>t.props[s],set:xe})})}function dm(t){const{ctx:e,setupState:n}=t;Object.keys(W(n)).forEach(s=>{if(!n.__isScriptSetup){if(Qo(s[0])){S(`setup() return property ${JSON.stringify(s)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>n[s],set:xe})}})}function Xa(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function pm(){const t=Object.create(null);return(e,n)=>{t[n]?S(`${e} property "${n}" is already defined in ${t[n]}.`):t[n]=e}}let Gr=!0;function mm(t){const e=Jo(t),n=t.proxy,s=t.ctx;Gr=!1,e.beforeCreate&&Za(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:f,beforeMount:u,mounted:d,beforeUpdate:m,updated:y,activated:A,deactivated:D,beforeDestroy:P,beforeUnmount:M,destroyed:F,unmounted:K,render:se,renderTracked:me,renderTriggered:j,errorCaptured:Ee,serverPrefetch:ye,expose:Ke,inheritAttrs:Je,components:Le,directives:ct,filters:Gs}=e,Ge=pm();{const[G]=t.propsOptions;if(G)for(const q in G)Ge("Props",q)}if(c&&gm(c,s,Ge),o)for(const G in o){const q=o[G];U(q)?(Object.defineProperty(s,G,{value:q.bind(n),configurable:!0,enumerable:!0,writable:!0}),Ge("Methods",G)):S(`Method "${G}" has type "${typeof q}" in the component definition. Did you reference the function correctly?`)}if(i){U(i)||S("The data option must be a function. Plain object usage is no longer supported.");const G=i.call(n,n);if(ko(G)&&S("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!le(G))S("data() should return an object.");else{t.data=Bi(G);for(const q in G)Ge("Data",q),Qo(q[0])||Object.defineProperty(s,q,{configurable:!0,enumerable:!0,get:()=>G[q],set:xe})}}if(Gr=!0,r)for(const G in r){const q=r[G],qe=U(q)?q.bind(n,n):U(q.get)?q.get.bind(n,n):xe;qe===xe&&S(`Computed property "${G}" has no getter.`);const rn=!U(q)&&U(q.set)?q.set.bind(n):()=>{S(`Write operation failed: computed property "${G}" is readonly.`)},kt=nt({get:qe,set:rn});Object.defineProperty(s,G,{enumerable:!0,configurable:!0,get:()=>kt.value,set:ut=>kt.value=ut}),Ge("Computed",G)}if(a)for(const G in a)Nu(a[G],s,n,G);if(l){const G=U(l)?l.call(n):l;Reflect.ownKeys(G).forEach(q=>{li(q,G[q])})}f&&Za(f,t,"c");function Ce(G,q){B(q)?q.forEach(qe=>G(qe.bind(n))):q&&G(q.bind(n))}if(Ce(nm,u),Ce(sm,d),Ce(im,m),Ce(rm,y),Ce(Zp,A),Ce(em,D),Ce(um,Ee),Ce(cm,me),Ce(lm,j),Ce(om,M),Ce(Ou,K),Ce(am,ye),B(Ke))if(Ke.length){const G=t.exposed||(t.exposed={});Ke.forEach(q=>{Object.defineProperty(G,q,{get:()=>n[q],set:qe=>n[q]=qe})})}else t.exposed||(t.exposed={});se&&t.render===xe&&(t.render=se),Je!=null&&(t.inheritAttrs=Je),Le&&(t.components=Le),ct&&(t.directives=ct)}function gm(t,e,n=xe){B(t)&&(t=qr(t));for(const s in t){const i=t[s];let r;le(i)?"default"in i?r=St(i.from||s,i.default,!0):r=St(i.from||s):r=St(i),Re(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r,n("Inject",s)}}function Za(t,e,n){ot(B(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Nu(t,e,n,s){const i=s.includes(".")?Su(n,s):()=>n[s];if(ge(t)){const r=e[t];U(r)?ps(i,r):S(`Invalid watch handler specified by key "${t}"`,r)}else if(U(t))ps(i,t.bind(n));else if(le(t))if(B(t))t.forEach(r=>Nu(r,e,n,s));else{const r=U(t.handler)?t.handler.bind(n):e[t.handler];U(r)?ps(i,r,t):S(`Invalid watch handler specified by key "${t.handler}"`,r)}else S(`Invalid watch option: "${s}"`,t)}function Jo(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>mi(l,c,o,!0)),mi(l,e,o)),le(e)&&r.set(e,l),l}function mi(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&mi(t,r,n,!0),i&&i.forEach(o=>mi(t,o,n,!0));for(const o in e)if(s&&o==="expose")S('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=_m[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const _m={data:el,props:tl,emits:tl,methods:hs,computed:hs,beforeCreate:Me,created:Me,beforeMount:Me,mounted:Me,beforeUpdate:Me,updated:Me,beforeDestroy:Me,beforeUnmount:Me,destroyed:Me,unmounted:Me,activated:Me,deactivated:Me,errorCaptured:Me,serverPrefetch:Me,components:hs,directives:hs,watch:vm,provide:el,inject:ym};function el(t,e){return e?t?function(){return pe(U(t)?t.call(this,this):t,U(e)?e.call(this,this):e)}:e:t}function ym(t,e){return hs(qr(t),qr(e))}function qr(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Me(t,e){return t?[...new Set([].concat(t,e))]:e}function hs(t,e){return t?pe(Object.create(null),t,e):e}function tl(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:pe(Object.create(null),Xa(t),Xa(e??{})):e}function vm(t,e){if(!t)return e;if(!e)return t;const n=pe(Object.create(null),t);for(const s in e)n[s]=Me(t[s],e[s]);return n}function Pu(){return{app:null,config:{isNativeTag:jc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bm=0;function wm(t,e){return function(s,i=null){U(s)||(s=pe({},s)),i!=null&&!le(i)&&(S("root props passed to app.mount() must be an object."),i=null);const r=Pu(),o=new WeakSet;let a=!1;const l=r.app={_uid:bm++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:ul,get config(){return r.config},set config(c){S("app.config cannot be replaced. Modify individual options instead.")},use(c,...f){return o.has(c)?S("Plugin has already been applied to target app."):c&&U(c.install)?(o.add(c),c.install(l,...f)):U(c)?(o.add(c),c(l,...f)):S('A plugin must either be a function or an object with an "install" function.'),l},mixin(c){return r.mixins.includes(c)?S("Mixin has already been applied to target app"+(c.name?`: ${c.name}`:"")):r.mixins.push(c),l},component(c,f){return Zr(c,r.config),f?(r.components[c]&&S(`Component "${c}" has already been registered in target app.`),r.components[c]=f,l):r.components[c]},directive(c,f){return Tu(c),f?(r.directives[c]&&S(`Directive "${c}" has already been registered in target app.`),r.directives[c]=f,l):r.directives[c]},mount(c,f,u){if(a)S("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{c.__vue_app__&&S("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const d=Ne(s,i);return d.appContext=r,u===!0?u="svg":u===!1&&(u=void 0),r.reload=()=>{t(Jt(d),c,u)},f&&e?e(d,c):t(d,c,u),a=!0,l._container=c,c.__vue_app__=l,l._instance=d.component,Np(l,ul),ea(d.component)||d.component.proxy}},unmount(){a?(t(null,l._container),l._instance=null,Pp(l),delete l._container.__vue_app__):S("Cannot unmount an app that is not mounted.")},provide(c,f){return c in r.provides&&S(`App already provides property with key "${String(c)}". It will be overwritten with the new value.`),r.provides[c]=f,l},runWithContext(c){gi=l;try{return c()}finally{gi=null}}};return l}}let gi=null;function li(t,e){if(!Se)S("provide() can only be used inside setup().");else{let n=Se.provides;const s=Se.parent&&Se.parent.provides;s===n&&(n=Se.provides=Object.create(s)),n[t]=e}}function St(t,e,n=!1){const s=Se||je;if(s||gi){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:gi._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&U(e)?e.call(s&&s.proxy):e;S(`injection "${String(t)}" not found.`)}else S("inject() can only be used inside setup() or functional components.")}function Em(t,e,n,s=!1){const i={},r={};fi(r,Gi,1),t.propsDefaults=Object.create(null),ku(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);Mu(e||{},i,t),n?t.props=s?i:su(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Cm(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function Im(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=W(i),[l]=t.propsOptions;let c=!1;if(!Cm(t)&&(s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let u=0;u<f.length;u++){let d=f[u];if(Hi(t.emitsOptions,d))continue;const m=e[d];if(l)if(Y(r,d))m!==r[d]&&(r[d]=m,c=!0);else{const y=Gn(d);i[y]=zr(l,a,y,m,t,!1)}else m!==r[d]&&(r[d]=m,c=!0)}}}else{ku(t,e,i,r)&&(c=!0);let f;for(const u in a)(!e||!Y(e,u)&&((f=zt(u))===u||!Y(e,f)))&&(l?n&&(n[u]!==void 0||n[f]!==void 0)&&(i[u]=zr(l,a,u,void 0,t,!0)):delete i[u]);if(r!==a)for(const u in r)(!e||!Y(e,u))&&(delete r[u],c=!0)}c&&gt(t,"set","$attrs"),Mu(e||{},i,t)}function ku(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ii(l))continue;const c=e[l];let f;i&&Y(i,f=Gn(l))?!r||!r.includes(f)?n[f]=c:(a||(a={}))[f]=c:Hi(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=W(n),c=a||oe;for(let f=0;f<r.length;f++){const u=r[f];n[u]=zr(i,l,u,c[u],t,!Y(c,u))}}return o}function zr(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Y(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&U(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const f=Bs(i);s=c[n]=l.call(null,e),f()}}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===zt(n))&&(s=!0))}return s}function Du(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!U(t)){const f=u=>{l=!0;const[d,m]=Du(u,e,!0);pe(o,d),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!r&&!l)return le(t)&&s.set(t,Un),Un;if(B(r))for(let f=0;f<r.length;f++){ge(r[f])||S("props must be strings when using array syntax.",r[f]);const u=Gn(r[f]);nl(u)&&(o[u]=oe)}else if(r){le(r)||S("invalid props options",r);for(const f in r){const u=Gn(f);if(nl(u)){const d=r[f],m=o[u]=B(d)||U(d)?{type:d}:pe({},d);if(m){const y=il(Boolean,m.type),A=il(String,m.type);m[0]=y>-1,m[1]=A<0||y<A,(y>-1||Y(m,"default"))&&a.push(u)}}}}const c=[o,a];return le(t)&&s.set(t,c),c}function nl(t){return t[0]!=="$"?!0:(S(`Invalid prop name: "${t}" is a reserved property.`),!1)}function Yr(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function sl(t,e){return Yr(t)===Yr(e)}function il(t,e){return B(e)?e.findIndex(n=>sl(n,t)):U(e)&&sl(e,t)?0:-1}function Mu(t,e,n){const s=W(e),i=n.propsOptions[0];for(const r in i){let o=i[r];o!=null&&Sm(r,s[r],o,$n(s),!Y(t,r)&&!Y(t,zt(r)))}}function Sm(t,e,n,s,i){const{type:r,required:o,validator:a,skipCheck:l}=n;if(o&&i){S('Missing required prop: "'+t+'"');return}if(!(e==null&&!o)){if(r!=null&&r!==!0&&!l){let c=!1;const f=B(r)?r:[r],u=[];for(let d=0;d<f.length&&!c;d++){const{valid:m,expectedType:y}=Rm(e,f[d]);u.push(y||""),c=m}if(!c){S(Am(t,e,u));return}}a&&!a(e,s)&&S('Invalid prop: custom validator check failed for prop "'+t+'".')}}const Tm=xt("String,Number,Boolean,Function,Symbol,BigInt");function Rm(t,e){let n;const s=Yr(e);if(Tm(s)){const i=typeof t;n=i===s.toLowerCase(),!n&&i==="object"&&(n=t instanceof e)}else s==="Object"?n=le(t):s==="Array"?n=B(t):s==="null"?n=t===null:n=t instanceof e;return{valid:n,expectedType:s}}function Am(t,e,n){if(n.length===0)return`Prop type [] for prop "${t}" won't match anything. Did you mean to use type Array instead?`;let s=`Invalid prop: type check failed for prop "${t}". Expected ${n.map(Li).join(" | ")}`;const i=n[0],r=Do(e),o=rl(e,i),a=rl(e,r);return n.length===1&&ol(i)&&!Om(i,r)&&(s+=` with value ${o}`),s+=`, got ${r} `,ol(r)&&(s+=`with value ${a}.`),s}function rl(t,e){return e==="String"?`"${t}"`:e==="Number"?`${Number(t)}`:`${t}`}function ol(t){return["string","number","boolean"].some(n=>t.toLowerCase()===n)}function Om(...t){return t.some(e=>e.toLowerCase()==="boolean")}const Lu=t=>t[0]==="_"||t==="$stable",Xo=t=>B(t)?t.map(tt):[tt(t)],xm=(t,e,n)=>{if(e._n)return e;const s=Up((...i)=>(Se&&S(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Xo(e(...i))),n);return s._c=!1,s},$u=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Lu(i))continue;const r=t[i];if(U(r))e[i]=xm(i,r,s);else if(r!=null){S(`Non-function value encountered for slot "${i}". Prefer function slots for better performance.`);const o=Xo(r);e[i]=()=>o}}},Fu=(t,e)=>{Yo(t.vnode)||S("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=Xo(e);t.slots.default=()=>n},Nm=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=W(e),fi(e,"_",n)):$u(e,t.slots={})}else t.slots={},e&&Fu(t,e);fi(t.slots,Gi,1)},Pm=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=oe;if(s.shapeFlag&32){const a=e._;a?vn?(pe(i,e),gt(t,"set","$slots")):n&&a===1?r=!1:(pe(i,e),!n&&a===1&&delete i._):(r=!e.$stable,$u(e,i)),o=e}else e&&(Fu(t,e),o={default:1});if(r)for(const a in i)!Lu(a)&&o[a]==null&&delete i[a]};function Qr(t,e,n,s,i=!1){if(B(t)){t.forEach((d,m)=>Qr(d,e&&(B(e)?e[m]:e),n,s,i));return}if(ai(s)&&!i)return;const r=s.shapeFlag&4?ea(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t;if(!a){S("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const c=e&&e.r,f=a.refs===oe?a.refs={}:a.refs,u=a.setupState;if(c!=null&&c!==l&&(ge(c)?(f[c]=null,Y(u,c)&&(u[c]=null)):Re(c)&&(c.value=null)),U(l))It(l,a,12,[o,f]);else{const d=ge(l),m=Re(l);if(d||m){const y=()=>{if(t.f){const A=d?Y(u,l)?u[l]:f[l]:l.value;i?B(A)&&Po(A,r):B(A)?A.includes(r)||A.push(r):d?(f[l]=[r],Y(u,l)&&(u[l]=f[l])):(l.value=[r],t.k&&(f[t.k]=l.value))}else d?(f[l]=o,Y(u,l)&&(u[l]=o)):m?(l.value=o,t.k&&(f[t.k]=o)):S("Invalid template ref type:",l,`(${typeof l})`)};o?(y.id=-1,$e(y,n)):y()}else S("Invalid template ref type:",l,`(${typeof l})`)}}let ss,Ht;function vt(t,e){t.appContext.config.performance&&_i()&&Ht.mark(`vue-${e}-${t.uid}`),Lp(t,e,_i()?Ht.now():Date.now())}function bt(t,e){if(t.appContext.config.performance&&_i()){const n=`vue-${e}-${t.uid}`,s=n+":end";Ht.mark(s),Ht.measure(`<${zi(t,t.type)}> ${e}`,n,s),Ht.clearMarks(n),Ht.clearMarks(s)}$p(t,e,_i()?Ht.now():Date.now())}function _i(){return ss!==void 0||(typeof window<"u"&&window.performance?(ss=!0,Ht=window.performance):ss=!1),ss}function km(){const t=[];if(t.length){const e=t.length>1;console.warn(`Feature flag${e?"s":""} ${t.join(", ")} ${e?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const $e=zp;function Dm(t){return Mm(t)}function Mm(t,e){km();const n=Lo();n.__VUE__=!0,yu(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:f,parentNode:u,nextSibling:d,setScopeId:m=xe,insertStaticContent:y}=t,A=(h,p,g,v=null,b=null,C=null,T=void 0,E=null,I=vn?!1:!!p.dynamicChildren)=>{if(h===p)return;h&&!is(h,p)&&(v=x(h),ze(h,b,C,!0),h=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:w,ref:N,shapeFlag:$}=p;switch(w){case $s:D(h,p,g,v);break;case at:P(h,p,g,v);break;case ms:h==null?M(p,g,v,T):F(h,p,g,T);break;case et:ct(h,p,g,v,b,C,T,E,I);break;default:$&1?me(h,p,g,v,b,C,T,E,I):$&6?Gs(h,p,g,v,b,C,T,E,I):$&64||$&128?w.process(h,p,g,v,b,C,T,E,I,z):S("Invalid VNode type:",w,`(${typeof w})`)}N!=null&&b&&Qr(N,h&&h.ref,C,p||h,!p)},D=(h,p,g,v)=>{if(h==null)s(p.el=a(p.children),g,v);else{const b=p.el=h.el;p.children!==h.children&&c(b,p.children)}},P=(h,p,g,v)=>{h==null?s(p.el=l(p.children||""),g,v):p.el=h.el},M=(h,p,g,v)=>{[h.el,h.anchor]=y(h.children,p,g,v,h.el,h.anchor)},F=(h,p,g,v)=>{if(p.children!==h.children){const b=d(h.anchor);se(h),[p.el,p.anchor]=y(p.children,g,b,v)}else p.el=h.el,p.anchor=h.anchor},K=({el:h,anchor:p},g,v)=>{let b;for(;h&&h!==p;)b=d(h),s(h,g,v),h=b;s(p,g,v)},se=({el:h,anchor:p})=>{let g;for(;h&&h!==p;)g=d(h),i(h),h=g;i(p)},me=(h,p,g,v,b,C,T,E,I)=>{p.type==="svg"?T="svg":p.type==="math"&&(T="mathml"),h==null?j(p,g,v,b,C,T,E,I):Ke(h,p,b,C,T,E,I)},j=(h,p,g,v,b,C,T,E)=>{let I,w;const{props:N,shapeFlag:$,transition:L,dirs:H}=h;if(I=h.el=o(h.type,C,N&&N.is,N),$&8?f(I,h.children):$&16&&ye(h.children,I,null,v,b,fr(h,C),T,E),H&&on(h,null,v,"created"),Ee(I,h,h.scopeId,T,v),N){for(const ie in N)ie!=="value"&&!ii(ie)&&r(I,ie,null,N[ie],C,h.children,v,b,_);"value"in N&&r(I,"value",null,N.value,C),(w=N.onVnodeBeforeMount)&&ht(w,v,h)}Object.defineProperty(I,"__vnode",{value:h,enumerable:!1}),Object.defineProperty(I,"__vueParentComponent",{value:v,enumerable:!1}),H&&on(h,null,v,"beforeMount");const Q=Lm(b,L);Q&&L.beforeEnter(I),s(I,p,g),((w=N&&N.onVnodeMounted)||Q||H)&&$e(()=>{w&&ht(w,v,h),Q&&L.enter(I),H&&on(h,null,v,"mounted")},b)},Ee=(h,p,g,v,b)=>{if(g&&m(h,g),v)for(let C=0;C<v.length;C++)m(h,v[C]);if(b){let C=b.subTree;if(C.patchFlag>0&&C.patchFlag&2048&&(C=Iu(C.children)||C),p===C){const T=b.vnode;Ee(h,T,T.scopeId,T.slotScopeIds,b.parent)}}},ye=(h,p,g,v,b,C,T,E,I=0)=>{for(let w=I;w<h.length;w++){const N=h[w]=E?Bt(h[w]):tt(h[w]);A(null,N,p,g,v,b,C,T,E)}},Ke=(h,p,g,v,b,C,T)=>{const E=p.el=h.el;let{patchFlag:I,dynamicChildren:w,dirs:N}=p;I|=h.patchFlag&16;const $=h.props||oe,L=p.props||oe;let H;if(g&&an(g,!1),(H=L.onVnodeBeforeUpdate)&&ht(H,g,p,h),N&&on(p,h,g,"beforeUpdate"),g&&an(g,!0),vn&&(I=0,T=!1,w=null),w?(Je(h.dynamicChildren,w,E,g,v,fr(p,b),C),Jr(h,p)):T||qe(h,p,E,null,g,v,fr(p,b),C,!1),I>0){if(I&16)Le(E,p,$,L,g,v,b);else if(I&2&&$.class!==L.class&&r(E,"class",null,L.class,b),I&4&&r(E,"style",$.style,L.style,b),I&8){const Q=p.dynamicProps;for(let ie=0;ie<Q.length;ie++){const de=Q[ie],ve=$[de],Xe=L[de];(Xe!==ve||de==="value")&&r(E,de,ve,Xe,b,h.children,g,v,_)}}I&1&&h.children!==p.children&&f(E,p.children)}else!T&&w==null&&Le(E,p,$,L,g,v,b);((H=L.onVnodeUpdated)||N)&&$e(()=>{H&&ht(H,g,p,h),N&&on(p,h,g,"updated")},v)},Je=(h,p,g,v,b,C,T)=>{for(let E=0;E<p.length;E++){const I=h[E],w=p[E],N=I.el&&(I.type===et||!is(I,w)||I.shapeFlag&70)?u(I.el):g;A(I,w,N,null,v,b,C,T,!0)}},Le=(h,p,g,v,b,C,T)=>{if(g!==v){if(g!==oe)for(const E in g)!ii(E)&&!(E in v)&&r(h,E,g[E],null,T,p.children,b,C,_);for(const E in v){if(ii(E))continue;const I=v[E],w=g[E];I!==w&&E!=="value"&&r(h,E,w,I,T,p.children,b,C,_)}"value"in v&&r(h,"value",g.value,v.value,T)}},ct=(h,p,g,v,b,C,T,E,I)=>{const w=p.el=h?h.el:a(""),N=p.anchor=h?h.anchor:a("");let{patchFlag:$,dynamicChildren:L,slotScopeIds:H}=p;(vn||$&2048)&&($=0,I=!1,L=null),H&&(E=E?E.concat(H):H),h==null?(s(w,g,v),s(N,g,v),ye(p.children||[],g,N,b,C,T,E,I)):$>0&&$&64&&L&&h.dynamicChildren?(Je(h.dynamicChildren,L,g,b,C,T,E),Jr(h,p)):qe(h,p,g,N,b,C,T,E,I)},Gs=(h,p,g,v,b,C,T,E,I)=>{p.slotScopeIds=E,h==null?p.shapeFlag&512?b.ctx.activate(p,g,v,T,I):Ge(p,g,v,b,C,T,I):Ce(h,p,I)},Ge=(h,p,g,v,b,C,T)=>{const E=h.component=Ym(h,v,b);if(E.type.__hmrId&&Rp(E),ri(h),vt(E,"mount"),Yo(h)&&(E.ctx.renderer=z),vt(E,"init"),Jm(E),bt(E,"init"),E.asyncDep){if(b&&b.registerDep(E,G),!h.el){const I=E.subTree=Ne(at);P(null,I,p,g)}}else G(E,h,p,g,b,C,T);oi(),bt(E,"mount")},Ce=(h,p,g)=>{const v=p.component=h.component;if(Vp(h,p,g))if(v.asyncDep&&!v.asyncResolved){ri(p),q(v,p,g),oi();return}else v.next=p,Sp(v.update),v.effect.dirty=!0,v.update();else p.el=h.el,v.vnode=p},G=(h,p,g,v,b,C,T)=>{const E=()=>{if(h.isMounted){let{next:N,bu:$,u:L,parent:H,vnode:Q}=h;{const kn=Bu(h);if(kn){N&&(N.el=Q.el,q(h,N,T)),kn.asyncDep.then(()=>{h.isUnmounted||E()});return}}let ie=N,de;ri(N||h.vnode),an(h,!1),N?(N.el=Q.el,q(h,N,T)):N=Q,$&&ns($),(de=N.props&&N.props.onVnodeBeforeUpdate)&&ht(de,H,N,Q),an(h,!0),vt(h,"render");const ve=cr(h);bt(h,"render");const Xe=h.subTree;h.subTree=ve,vt(h,"patch"),A(Xe,ve,u(Xe.el),x(Xe),h,b,C),bt(h,"patch"),N.el=ve.el,ie===null&&Kp(h,ve.el),L&&$e(L,b),(de=N.props&&N.props.onVnodeUpdated)&&$e(()=>ht(de,H,N,Q),b),vu(h),oi()}else{let N;const{el:$,props:L}=p,{bm:H,m:Q,parent:ie}=h,de=ai(p);if(an(h,!1),H&&ns(H),!de&&(N=L&&L.onVnodeBeforeMount)&&ht(N,ie,p),an(h,!0),$&&V){const ve=()=>{vt(h,"render"),h.subTree=cr(h),bt(h,"render"),vt(h,"hydrate"),V($,h.subTree,h,b,null),bt(h,"hydrate")};de?p.type.__asyncLoader().then(()=>!h.isUnmounted&&ve()):ve()}else{vt(h,"render");const ve=h.subTree=cr(h);bt(h,"render"),vt(h,"patch"),A(null,ve,g,v,h,b,C),bt(h,"patch"),p.el=ve.el}if(Q&&$e(Q,b),!de&&(N=L&&L.onVnodeMounted)){const ve=p;$e(()=>ht(N,ie,ve),b)}(p.shapeFlag&256||ie&&ai(ie.vnode)&&ie.vnode.shapeFlag&256)&&h.a&&$e(h.a,b),h.isMounted=!0,kp(h),p=g=v=null}},I=h.effect=new Bo(E,xe,()=>ji(w),h.scope),w=h.update=()=>{I.dirty&&I.run()};w.id=h.uid,an(h,!0),I.onTrack=h.rtc?N=>ns(h.rtc,N):void 0,I.onTrigger=h.rtg?N=>ns(h.rtg,N):void 0,w.ownerInstance=h,w()},q=(h,p,g)=>{p.component=h;const v=h.vnode.props;h.vnode=p,h.next=null,Im(h,p.props,v,g),Pm(h,p.children,g),tn(),za(h),nn()},qe=(h,p,g,v,b,C,T,E,I=!1)=>{const w=h&&h.children,N=h?h.shapeFlag:0,$=p.children,{patchFlag:L,shapeFlag:H}=p;if(L>0){if(L&128){kt(w,$,g,v,b,C,T,E,I);return}else if(L&256){rn(w,$,g,v,b,C,T,E,I);return}}H&8?(N&16&&_(w,b,C),$!==w&&f(g,$)):N&16?H&16?kt(w,$,g,v,b,C,T,E,I):_(w,b,C,!0):(N&8&&f(g,""),H&16&&ye($,g,v,b,C,T,E,I))},rn=(h,p,g,v,b,C,T,E,I)=>{h=h||Un,p=p||Un;const w=h.length,N=p.length,$=Math.min(w,N);let L;for(L=0;L<$;L++){const H=p[L]=I?Bt(p[L]):tt(p[L]);A(h[L],H,g,null,b,C,T,E,I)}w>N?_(h,b,C,!0,!1,$):ye(p,g,v,b,C,T,E,I,$)},kt=(h,p,g,v,b,C,T,E,I)=>{let w=0;const N=p.length;let $=h.length-1,L=N-1;for(;w<=$&&w<=L;){const H=h[w],Q=p[w]=I?Bt(p[w]):tt(p[w]);if(is(H,Q))A(H,Q,g,null,b,C,T,E,I);else break;w++}for(;w<=$&&w<=L;){const H=h[$],Q=p[L]=I?Bt(p[L]):tt(p[L]);if(is(H,Q))A(H,Q,g,null,b,C,T,E,I);else break;$--,L--}if(w>$){if(w<=L){const H=L+1,Q=H<N?p[H].el:v;for(;w<=L;)A(null,p[w]=I?Bt(p[w]):tt(p[w]),g,Q,b,C,T,E,I),w++}}else if(w>L)for(;w<=$;)ze(h[w],b,C,!0),w++;else{const H=w,Q=w,ie=new Map;for(w=Q;w<=L;w++){const De=p[w]=I?Bt(p[w]):tt(p[w]);De.key!=null&&(ie.has(De.key)&&S("Duplicate keys found during update:",JSON.stringify(De.key),"Make sure keys are unique."),ie.set(De.key,w))}let de,ve=0;const Xe=L-Q+1;let kn=!1,$a=0;const ts=new Array(Xe);for(w=0;w<Xe;w++)ts[w]=0;for(w=H;w<=$;w++){const De=h[w];if(ve>=Xe){ze(De,b,C,!0);continue}let ft;if(De.key!=null)ft=ie.get(De.key);else for(de=Q;de<=L;de++)if(ts[de-Q]===0&&is(De,p[de])){ft=de;break}ft===void 0?ze(De,b,C,!0):(ts[ft-Q]=w+1,ft>=$a?$a=ft:kn=!0,A(De,p[ft],g,null,b,C,T,E,I),ve++)}const Fa=kn?$m(ts):Un;for(de=Fa.length-1,w=Xe-1;w>=0;w--){const De=Q+w,ft=p[De],Ba=De+1<N?p[De+1].el:v;ts[w]===0?A(null,ft,g,Ba,b,C,T,E,I):kn&&(de<0||w!==Fa[de]?ut(ft,g,Ba,2):de--)}}},ut=(h,p,g,v,b=null)=>{const{el:C,type:T,transition:E,children:I,shapeFlag:w}=h;if(w&6){ut(h.component.subTree,p,g,v);return}if(w&128){h.suspense.move(p,g,v);return}if(w&64){T.move(h,p,g,z);return}if(T===et){s(C,p,g);for(let $=0;$<I.length;$++)ut(I[$],p,g,v);s(h.anchor,p,g);return}if(T===ms){K(h,p,g);return}if(v!==2&&w&1&&E)if(v===0)E.beforeEnter(C),s(C,p,g),$e(()=>E.enter(C),b);else{const{leave:$,delayLeave:L,afterLeave:H}=E,Q=()=>s(C,p,g),ie=()=>{$(C,()=>{Q(),H&&H()})};L?L(C,Q,ie):ie()}else s(C,p,g)},ze=(h,p,g,v=!1,b=!1)=>{const{type:C,props:T,ref:E,children:I,dynamicChildren:w,shapeFlag:N,patchFlag:$,dirs:L}=h;if(E!=null&&Qr(E,null,g,h,!0),N&256){p.ctx.deactivate(h);return}const H=N&1&&L,Q=!ai(h);let ie;if(Q&&(ie=T&&T.onVnodeBeforeUnmount)&&ht(ie,p,h),N&6)Mt(h.component,g,v);else{if(N&128){h.suspense.unmount(g,v);return}H&&on(h,null,p,"beforeUnmount"),N&64?h.type.remove(h,p,g,b,z,v):w&&(C!==et||$>0&&$&64)?_(w,p,g,!1,!0):(C===et&&$&384||!b&&N&16)&&_(I,p,g),v&&Dt(h)}(Q&&(ie=T&&T.onVnodeUnmounted)||H)&&$e(()=>{ie&&ht(ie,p,h),H&&on(h,null,p,"unmounted")},g)},Dt=h=>{const{type:p,el:g,anchor:v,transition:b}=h;if(p===et){h.patchFlag>0&&h.patchFlag&2048&&b&&!b.persisted?h.children.forEach(T=>{T.type===at?i(T.el):Dt(T)}):qs(g,v);return}if(p===ms){se(h);return}const C=()=>{i(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(h.shapeFlag&1&&b&&!b.persisted){const{leave:T,delayLeave:E}=b,I=()=>T(g,C);E?E(h.el,C,I):I()}else C()},qs=(h,p)=>{let g;for(;h!==p;)g=d(h),i(h),h=g;i(p)},Mt=(h,p,g)=>{h.type.__hmrId&&Ap(h);const{bum:v,scope:b,update:C,subTree:T,um:E}=h;v&&ns(v),b.stop(),C&&(C.active=!1,ze(T,h,p,g)),E&&$e(E,p),$e(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve()),Mp(h)},_=(h,p,g,v=!1,b=!1,C=0)=>{for(let T=C;T<h.length;T++)ze(h[T],p,g,v,b)},x=h=>h.shapeFlag&6?x(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el);let O=!1;const k=(h,p,g)=>{h==null?p._vnode&&ze(p._vnode,null,null,!0):A(p._vnode||null,h,p,null,null,null,g),O||(O=!0,za(),mu(),O=!1),p._vnode=h},z={p:A,um:ze,m:ut,r:Dt,mt:Ge,mc:ye,pc:qe,pbc:Je,n:x,o:t};let he,V;return e&&([he,V]=e(z)),{render:k,hydrate:he,createApp:wm(k,he)}}function fr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function an({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Lm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Jr(t,e,n=!1){const s=t.children,i=e.children;if(B(s)&&B(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Bt(i[r]),a.el=o.el),n||Jr(o,a)),a.type===$s&&(a.el=o.el),a.type===at&&!a.el&&(a.el=o.el)}}function $m(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Bu(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Bu(e)}const Fm=t=>t.__isTeleport,et=Symbol.for("v-fgt"),$s=Symbol.for("v-txt"),at=Symbol.for("v-cmt"),ms=Symbol.for("v-stc"),gs=[];let it=null;function Fs(t=!1){gs.push(it=t?null:[])}function Bm(){gs.pop(),it=gs[gs.length-1]||null}let Ts=1;function al(t){Ts+=t}function Uu(t){return t.dynamicChildren=Ts>0?it||Un:null,Bm(),Ts>0&&it&&it.push(t),t}function Ki(t,e,n,s,i,r){return Uu(He(t,e,n,s,i,r,!0))}function Um(t,e,n,s,i){return Uu(Ne(t,e,n,s,i,!0))}function Rs(t){return t?t.__v_isVNode===!0:!1}function is(t,e){return e.shapeFlag&6&&Ln.has(e.type)?(t.shapeFlag&=-257,e.shapeFlag&=-513,!1):t.type===e.type&&t.key===e.key}const jm=(...t)=>Hm(...t),Gi="__vInternal",ju=({key:t})=>t??null,ci=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ge(t)||Re(t)||U(t)?{i:je,r:t,k:e,f:!!n}:t:null);function He(t,e=null,n=null,s=0,i=null,r=t===et?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ju(e),ref:e&&ci(e),scopeId:Wi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:je};return a?(Zo(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=ge(n)?8:16),l.key!==l.key&&S("VNode created with invalid key (NaN). VNode type:",l.type),Ts>0&&!o&&it&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&it.push(l),l}const Ne=jm;function Hm(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Gp)&&(t||S(`Invalid vnode type when creating vnode: ${t}.`),t=at),Rs(t)){const a=Jt(t,e,!0);return n&&Zo(a,n),Ts>0&&!r&&it&&(a.shapeFlag&6?it[it.indexOf(t)]=a:it.push(a)),a.patchFlag|=-2,a}if(qu(t)&&(t=t.__vccOpts),e){e=Wm(e);let{class:a,style:l}=e;a&&!ge(a)&&(e.class=Fo(a)),le(l)&&(Ur(l)&&!B(l)&&(l=pe({},l)),e.style=$o(l))}const o=ge(t)?1:qp(t)?128:Fm(t)?64:le(t)?4:U(t)?2:0;return o&4&&Ur(t)&&(t=W(t),S("Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),He(t,e,n,s,i,o,r,!0)}function Wm(t){return t?Ur(t)||Gi in t?pe({},t):t:null}function Jt(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Gm(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ju(a),ref:e&&e.ref?n&&i?B(i)?i.concat(ci(e)):[i,ci(e)]:ci(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:r===-1&&B(o)?o.map(Hu):o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==et?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Jt(t.ssContent),ssFallback:t.ssFallback&&Jt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Hu(t){const e=Jt(t);return B(t.children)&&(e.children=t.children.map(Hu)),e}function Vm(t=" ",e=0){return Ne($s,null,t,e)}function Km(t,e){const n=Ne(ms,null,t);return n.staticCount=e,n}function tt(t){return t==null||typeof t=="boolean"?Ne(at):B(t)?Ne(et,null,t.slice()):typeof t=="object"?Bt(t):Ne($s,null,String(t))}function Bt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Jt(t)}function Zo(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Zo(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Gi in e)?e._ctx=je:i===3&&je&&(je.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else U(e)?(e={default:e,_ctx:je},n=32):(e=String(e),s&64?(n=16,e=[Vm(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gm(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Fo([e.class,s.class]));else if(i==="style")e.style=$o([e.style,s.style]);else if(Ds(i)){const r=e[i],o=s[i];o&&r!==o&&!(B(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ht(t,e,n,s=null){ot(t,e,7,[n,s])}const qm=Pu();let zm=0;function Ym(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||qm,r={uid:zm++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Kd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Du(s,i),emitsOptions:wu(s,i),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:s.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=fm(r),r.root=e?e.root:r,r.emit=Bp.bind(null,r),t.ce&&t.ce(r),r}let Se=null;const Wu=()=>Se||je;let yi,Xr;{const t=Lo(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};yi=e("__VUE_INSTANCE_SETTERS__",n=>Se=n),Xr=e("__VUE_SSR_SETTERS__",n=>qi=n)}const Bs=t=>{const e=Se;return yi(t),t.scope.on(),()=>{t.scope.off(),yi(e)}},ll=()=>{Se&&Se.scope.off(),yi(null)},Qm=xt("slot,component");function Zr(t,e){const n=e.isNativeTag||jc;(Qm(t)||n(t))&&S("Do not use built-in or reserved HTML elements as component id: "+t)}function Vu(t){return t.vnode.shapeFlag&4}let qi=!1;function Jm(t,e=!1){e&&Xr(e);const{props:n,children:s}=t.vnode,i=Vu(t);Em(t,n,i,e),Nm(t,s);const r=i?Xm(t,e):void 0;return e&&Xr(!1),r}function Xm(t,e){var n;const s=t.type;{if(s.name&&Zr(s.name,t.appContext.config),s.components){const r=Object.keys(s.components);for(let o=0;o<r.length;o++)Zr(r[o],t.appContext.config)}if(s.directives){const r=Object.keys(s.directives);for(let o=0;o<r.length;o++)Tu(r[o])}s.compilerOptions&&Zm()&&S('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=ru(new Proxy(t.ctx,xu)),hm(t);const{setup:i}=s;if(i){const r=t.setupContext=i.length>1?ng(t):null,o=Bs(t);tn();const a=It(i,t,0,[$n(t.props),r]);if(nn(),o(),ko(a)){if(a.then(ll,ll),e)return a.then(l=>{cl(t,l,e)}).catch(l=>{Ms(l,t,0)});if(t.asyncDep=a,!t.suspense){const l=(n=s.name)!=null?n:"Anonymous";S(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else cl(t,a,e)}else Ku(t,e)}function cl(t,e,n){U(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)?(Rs(e)&&S("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=e,t.setupState=cu(e),dm(t)):e!==void 0&&S(`setup() should return an object. Received: ${e===null?"null":typeof e}`),Ku(t,n)}let eo;const Zm=()=>!eo;function Ku(t,e,n){const s=t.type;if(!t.render){if(!e&&eo&&!s.render){const i=s.template||Jo(t).template;if(i){vt(t,"compile");const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=pe(pe({isCustomElement:r,delimiters:a},o),l);s.render=eo(i,c),bt(t,"compile")}}t.render=s.render||xe}{const i=Bs(t);tn();try{mm(t)}finally{nn(),i()}}!s.render&&t.render===xe&&!e&&(s.template?S('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):S("Component is missing template or render function."))}function eg(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return pi(),ke(t,"get","$attrs"),e[n]},set(){return S("setupContext.attrs is readonly."),!1},deleteProperty(){return S("setupContext.attrs is readonly."),!1}}))}function tg(t){return t.slotsProxy||(t.slotsProxy=new Proxy(t.slots,{get(e,n){return ke(t,"get","$slots"),e[n]}}))}function ng(t){return Object.freeze({get attrs(){return eg(t)},get slots(){return tg(t)},get emit(){return(n,...s)=>t.emit(n,...s)},expose:n=>{if(t.exposed&&S("expose() should be called only once per setup()."),n!=null){let s=typeof n;s==="object"&&(B(n)?s="array":Re(n)&&(s="ref")),s!=="object"&&S(`expose() should be passed a plain object, received ${s}.`)}t.exposed=n||{}}})}function ea(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(cu(ru(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in bn)return bn[n](t)},has(e,n){return n in e||n in bn}}))}const sg=/(?:^|[-_])(\w)/g,ig=t=>t.replace(sg,e=>e.toUpperCase()).replace(/[-_]/g,"");function Gu(t,e=!0){return U(t)?t.displayName||t.name:t.name||e&&t.__name}function zi(t,e,n=!1){let s=Gu(e);if(!s&&e.__file){const i=e.__file.match(/([^/\\]+)\.\w+$/);i&&(s=i[1])}if(!s&&t&&t.parent){const i=r=>{for(const o in r)if(r[o]===e)return o};s=i(t.components||t.parent.type.components)||i(t.appContext.components)}return s?ig(s):n?"App":"Anonymous"}function qu(t){return U(t)&&"__vccOpts"in t}const nt=(t,e)=>dp(t,e,qi);function zu(t,e,n){const s=arguments.length;return s===2?le(e)&&!B(e)?Rs(e)?Ne(t,null,[e]):Ne(t,e):Ne(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Rs(n)&&(n=[n]),Ne(t,e,n))}function hr(t){return!!(t&&t.__v_isShallow)}function rg(){if(typeof window>"u")return;const t={style:"color:#3ba776"},e={style:"color:#1677ff"},n={style:"color:#f5222d"},s={style:"color:#eb2f96"},i={header(u){return le(u)?u.__isVue?["div",t,"VueInstance"]:Re(u)?["div",{},["span",t,f(u)],"<",a(u.value),">"]:gn(u)?["div",{},["span",t,hr(u)?"ShallowReactive":"Reactive"],"<",a(u),`>${Qt(u)?" (readonly)":""}`]:Qt(u)?["div",{},["span",t,hr(u)?"ShallowReadonly":"Readonly"],"<",a(u),">"]:null:null},hasBody(u){return u&&u.__isVue},body(u){if(u&&u.__isVue)return["div",{},...r(u.$)]}};function r(u){const d=[];u.type.props&&u.props&&d.push(o("props",W(u.props))),u.setupState!==oe&&d.push(o("setup",u.setupState)),u.data!==oe&&d.push(o("data",W(u.data)));const m=l(u,"computed");m&&d.push(o("computed",m));const y=l(u,"inject");return y&&d.push(o("injected",y)),d.push(["div",{},["span",{style:s.style+";opacity:0.66"},"$ (internal): "],["object",{object:u}]]),d}function o(u,d){return d=pe({},d),Object.keys(d).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},u],["div",{style:"padding-left:1.25em"},...Object.keys(d).map(m=>["div",{},["span",s,m+": "],a(d[m],!1)])]]:["span",{}]}function a(u,d=!0){return typeof u=="number"?["span",e,u]:typeof u=="string"?["span",n,JSON.stringify(u)]:typeof u=="boolean"?["span",s,u]:le(u)?["object",{object:d?W(u):u}]:["span",n,String(u)]}function l(u,d){const m=u.type;if(U(m))return;const y={};for(const A in u.ctx)c(m,A,d)&&(y[A]=u.ctx[A]);return y}function c(u,d,m){const y=u[m];if(B(y)&&y.includes(d)||le(y)&&d in y||u.extends&&c(u.extends,d,m)||u.mixins&&u.mixins.some(A=>c(A,d,m)))return!0}function f(u){return hr(u)?"ShallowRef":u.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(i):window.devtoolsFormatters=[i]}const ul="3.4.10",wn=S;/**
* @vue/runtime-dom v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const og="http://www.w3.org/2000/svg",ag="http://www.w3.org/1998/Math/MathML",Ut=typeof document<"u"?document:null,fl=Ut&&Ut.createElement("template"),lg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Ut.createElementNS(og,t):e==="mathml"?Ut.createElementNS(ag,t):Ut.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Ut.createTextNode(t),createComment:t=>Ut.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ut.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{fl.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=fl.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},cg=Symbol("_vtc");function ug(t,e,n){const s=t[cg];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const fg=Symbol("_vod"),hg=Symbol("CSS_VAR_TEXT");function dg(t,e,n){const s=t.style,i=s.display,r=ge(n);if(n&&!r){if(e&&!ge(e))for(const o in e)n[o]==null&&to(s,o,"");for(const o in n)to(s,o,n[o])}else if(r){if(e!==n){const o=s[hg];o&&(n+=";"+o),s.cssText=n}}else e&&t.removeAttribute("style");fg in t&&(s.display=i)}const pg=/[^\\];\s*$/,hl=/\s*!important$/;function to(t,e,n){if(B(n))n.forEach(s=>to(t,e,s));else if(n==null&&(n=""),pg.test(n)&&wn(`Unexpected semicolon at the end of '${e}' style value: '${n}'`),e.startsWith("--"))t.setProperty(e,n);else{const s=mg(t,e);hl.test(n)?t.setProperty(zt(s),n.replace(hl,""),"important"):t[s]=n}}const dl=["Webkit","Moz","ms"],dr={};function mg(t,e){const n=dr[e];if(n)return n;let s=Gn(e);if(s!=="filter"&&s in t)return dr[e]=s;s=Li(s);for(let i=0;i<dl.length;i++){const r=dl[i]+s;if(r in t)return dr[e]=r}return e}const pl="http://www.w3.org/1999/xlink";function gg(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(pl,e.slice(6,e.length)):t.setAttributeNS(pl,e,n);else{const r=Vd(e);n==null||r&&!Hc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function _g(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,f=n??"";c!==f&&(t.value=f),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Hc(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch(c){l||wn(`Failed setting prop "${e}" on <${a.toLowerCase()}>: value ${n} is invalid.`,c)}l&&t.removeAttribute(e)}function yg(t,e,n,s){t.addEventListener(e,n,s)}function vg(t,e,n,s){t.removeEventListener(e,n,s)}const ml=Symbol("_vei");function bg(t,e,n,s,i=null){const r=t[ml]||(t[ml]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=wg(e);if(s){const c=r[e]=Ig(s,i);yg(t,a,c,l)}else o&&(vg(t,a,o,l),r[e]=void 0)}}const gl=/(?:Once|Passive|Capture)$/;function wg(t){let e;if(gl.test(t)){e={};let s;for(;s=t.match(gl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):zt(t.slice(2)),e]}let pr=0;const Eg=Promise.resolve(),Cg=()=>pr||(Eg.then(()=>pr=0),pr=Date.now());function Ig(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ot(Sg(s,n.value),e,5,[s])};return n.value=t,n.attached=Cg(),n}function Sg(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const _l=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Tg=(t,e,n,s,i,r,o,a,l)=>{const c=i==="svg";e==="class"?ug(t,s,c):e==="style"?dg(t,n,s):Ds(e)?ui(e)||bg(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Rg(t,e,s,c))?_g(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),gg(t,e,s,c))};function Rg(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&_l(e)&&U(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return _l(e)&&ge(n)?!1:e in t}const Ag=["ctrl","shift","alt","meta"],Og={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ag.some(n=>t[`${n}Key`]&&!e.includes(n))},xg=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=Og[e[o]];if(a&&a(i,e))return}return t(i,...r)})},Ng=pe({patchProp:Tg},lg);let yl;function Pg(){return yl||(yl=Dm(Ng))}const kg=(...t)=>{const e=Pg().createApp(...t);Mg(e),Lg(e);const{mount:n}=e;return e.mount=s=>{const i=$g(s);if(!i)return;const r=e._component;!U(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,Dg(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Dg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Mg(t){Object.defineProperty(t.config,"isNativeTag",{value:e=>Ud(e)||jd(e)||Hd(e),writable:!1})}function Lg(t){{const e=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return e},set(){wn("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=t.config.compilerOptions,s='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(t.config,"compilerOptions",{get(){return wn(s),n},set(){wn(s)}})}}function $g(t){if(ge(t)){const e=document.querySelector(t);return e||wn(`Failed to mount app: mount target selector "${t}" returned null.`),e}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&wn('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}/**
* vue v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fg(){rg()}Fg();function Bg(){return Yu().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Yu(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Ug=typeof Proxy=="function",jg="devtools-plugin:setup",Hg="plugin:settings:set";let Dn,no;function Wg(){var t;return Dn!==void 0||(typeof window<"u"&&window.performance?(Dn=!0,no=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(Dn=!0,no=global.perf_hooks.performance):Dn=!1),Dn}function Vg(){return Wg()?no.now():Date.now()}class Kg{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},s);try{const o=localStorage.getItem(i),a=JSON.parse(o);Object.assign(r,a)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}r=o},now(){return Vg()}},n&&n.on(Hg,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Gg(t,e){const n=t,s=Yu(),i=Bg(),r=Ug&&n.enableEarlyProxy;if(i&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))i.emit(jg,t,e);else{const o=r?new Kg(n,i):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Et=typeof window<"u";function qg(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const te=Object.assign;function mr(t,e){const n={};for(const s in e){const i=e[s];n[s]=Ve(i)?i.map(t):t(i)}return n}const _s=()=>{},Ve=Array.isArray;function Z(t){const e=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(e))}const zg=/\/$/,Yg=t=>t.replace(zg,"");function gr(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Xg(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function Qg(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function vl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function bl(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Xt(e.matched[s],n.matched[i])&&Qu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Xt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Qu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Jg(t[n],e[n]))return!1;return!0}function Jg(t,e){return Ve(t)?wl(t,e):Ve(e)?wl(e,t):t===e}function wl(t,e){return Ve(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Xg(t,e){if(t.startsWith("/"))return t;if(!e.startsWith("/"))return Z(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${e}". It should look like "/${e}".`),t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var As;(function(t){t.pop="pop",t.push="push"})(As||(As={}));var ys;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ys||(ys={}));function Zg(t){if(!t)if(Et){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Yg(t)}const e_=/^[^#]+#/;function t_(t,e){return t.replace(e_,"#")+e}function n_(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Yi=()=>({left:window.pageXOffset,top:window.pageYOffset});function s_(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#");if(typeof t.el=="string"&&(!s||!document.getElementById(t.el.slice(1))))try{const r=document.querySelector(t.el);if(s&&r){Z(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{Z(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i){Z(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}e=n_(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function El(t,e){return(history.state?history.state.position-e:-1)+t}const so=new Map;function i_(t,e){so.set(t,e)}function r_(t){const e=so.get(t);return so.delete(t),e}let o_=()=>location.protocol+"//"+location.host;function Ju(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),vl(l,"")}return vl(n,t)+s+i}function a_(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const m=Ju(t,location),y=n.value,A=e.value;let D=0;if(d){if(n.value=m,e.value=d,o&&o===y){o=null;return}D=A?d.position-A.position:0}else s(m);i.forEach(P=>{P(n.value,y,{delta:D,type:As.pop,direction:D?D>0?ys.forward:ys.back:ys.unknown})})};function l(){o=n.value}function c(d){i.push(d);const m=()=>{const y=i.indexOf(d);y>-1&&i.splice(y,1)};return r.push(m),m}function f(){const{history:d}=window;d.state&&d.replaceState(te({},d.state,{scroll:Yi()}),"")}function u(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function Cl(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Yi():null}}function l_(t){const{history:e,location:n}=window,s={value:Ju(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,f){const u=t.indexOf("#"),d=u>-1?(n.host&&document.querySelector("base")?t:t.slice(u))+l:o_()+t+l;try{e[f?"replaceState":"pushState"](c,"",d),i.value=c}catch(m){Z("Error with push/replace State",m),n[f?"replace":"assign"](d)}}function o(l,c){const f=te({},e.state,Cl(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,f,!0),s.value=l}function a(l,c){const f=te({},i.value,e.state,{forward:l,scroll:Yi()});e.state||Z(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(f.current,f,!0);const u=te({},Cl(s.value,l,null),{position:f.position+1},c);r(l,u,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function c_(t){t=Zg(t);const e=l_(t),n=a_(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=te({location:"",base:t,go:s,createHref:t_.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function u_(t){return typeof t=="string"||t&&typeof t=="object"}function Xu(t){return typeof t=="string"||typeof t=="symbol"}const $t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Zu=Symbol("navigation failure");var Il;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Il||(Il={}));const f_={1({location:t,currentLocation:e}){return`No match for
 ${JSON.stringify(t)}${e?`
while being at
`+JSON.stringify(e):""}`},2({from:t,to:e}){return`Redirected from "${t.fullPath}" to "${d_(e)}" via a navigation guard.`},4({from:t,to:e}){return`Navigation aborted from "${t.fullPath}" to "${e.fullPath}" via a navigation guard.`},8({from:t,to:e}){return`Navigation cancelled from "${t.fullPath}" to "${e.fullPath}" with a new navigation.`},16({from:t,to:e}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function qn(t,e){return te(new Error(f_[t](e)),{type:t,[Zu]:!0},e)}function yt(t,e){return t instanceof Error&&Zu in t&&(e==null||!!(t.type&e))}const h_=["params","query","hash"];function d_(t){if(typeof t=="string")return t;if("path"in t)return t.path;const e={};for(const n of h_)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const Sl="[^/]+?",p_={sensitive:!1,strict:!1,start:!0,end:!0},m_=/[.+*?^${}()[\]/\\]/g;function g_(t,e){const n=te({},p_,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const f=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let u=0;u<c.length;u++){const d=c[u];let m=40+(n.sensitive?.25:0);if(d.type===0)u||(i+="/"),i+=d.value.replace(m_,"\\$&"),m+=40;else if(d.type===1){const{value:y,repeatable:A,optional:D,regexp:P}=d;r.push({name:y,repeatable:A,optional:D});const M=P||Sl;if(M!==Sl){m+=10;try{new RegExp(`(${M})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${y}" (${M}): `+K.message)}}let F=A?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;u||(F=D&&c.length<2?`(?:/${F})`:"/"+F),D&&(F+="?"),i+=F,m+=20,D&&(m+=-8),A&&(m+=-20),M===".*"&&(m+=-50)}f.push(m)}s.push(f)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const f=c.match(o),u={};if(!f)return null;for(let d=1;d<f.length;d++){const m=f[d]||"",y=r[d-1];u[y.name]=m&&y.repeatable?m.split("/"):m}return u}function l(c){let f="",u=!1;for(const d of t){(!u||!f.endsWith("/"))&&(f+="/"),u=!1;for(const m of d)if(m.type===0)f+=m.value;else if(m.type===1){const{value:y,repeatable:A,optional:D}=m,P=y in c?c[y]:"";if(Ve(P)&&!A)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const M=Ve(P)?P.join("/"):P;if(!M)if(D)d.length<2&&(f.endsWith("/")?f=f.slice(0,-1):u=!0);else throw new Error(`Missing required param "${y}"`);f+=M}}return f||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function __(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function y_(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=__(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Tl(s))return 1;if(Tl(i))return-1}return i.length-s.length}function Tl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const v_={type:0,value:""},b_=/[a-zA-Z0-9_]/;function w_(t){if(!t)return[[]];if(t==="/")return[[v_]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",f="";function u(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&u(),o()):l===":"?(u(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:b_.test(l)?d():(u(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:u(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),u(),o(),i}function E_(t,e,n){const s=g_(w_(t.path),n);{const r=new Set;for(const o of s.keys)r.has(o.name)&&Z(`Found duplicated params with name "${o.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),r.add(o.name)}const i=te(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function C_(t,e){const n=[],s=new Map;e=Ol({strict:!1,end:!0,sensitive:!1},e);function i(f){return s.get(f)}function r(f,u,d){const m=!d,y=I_(f);A_(y,u),y.aliasOf=d&&d.record;const A=Ol(e,f),D=[y];if("alias"in f){const F=typeof f.alias=="string"?[f.alias]:f.alias;for(const K of F)D.push(te({},y,{components:d?d.record.components:y.components,path:K,aliasOf:d?d.record:y}))}let P,M;for(const F of D){const{path:K}=F;if(u&&K[0]!=="/"){const se=u.record.path,me=se[se.length-1]==="/"?"":"/";F.path=u.record.path+(K&&me+K)}if(F.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(P=E_(F,u,A),u&&K[0]==="/"&&O_(P,u),d?(d.alias.push(P),R_(d,P)):(M=M||P,M!==P&&M.alias.push(P),m&&f.name&&!Al(P)&&o(f.name)),y.children){const se=y.children;for(let me=0;me<se.length;me++)r(se[me],P,d&&d.children[me])}d=d||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&l(P)}return M?()=>{o(M)}:_s}function o(f){if(Xu(f)){const u=s.get(f);u&&(s.delete(f),n.splice(n.indexOf(u),1),u.children.forEach(o),u.alias.forEach(o))}else{const u=n.indexOf(f);u>-1&&(n.splice(u,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){let u=0;for(;u<n.length&&y_(f,n[u])>=0&&(f.record.path!==n[u].record.path||!ef(f,n[u]));)u++;n.splice(u,0,f),f.record.name&&!Al(f)&&s.set(f.record.name,f)}function c(f,u){let d,m={},y,A;if("name"in f&&f.name){if(d=s.get(f.name),!d)throw qn(1,{location:f});{const M=Object.keys(f.params||{}).filter(F=>!d.keys.find(K=>K.name===F));M.length&&Z(`Discarded invalid param(s) "${M.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}A=d.record.name,m=te(Rl(u.params,d.keys.filter(M=>!M.optional).map(M=>M.name)),f.params&&Rl(f.params,d.keys.map(M=>M.name))),y=d.stringify(m)}else if("path"in f)y=f.path,y.startsWith("/")||Z(`The Matcher cannot resolve relative paths but received "${y}". Unless you directly called \`matcher.resolve("${y}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`),d=n.find(M=>M.re.test(y)),d&&(m=d.parse(y),A=d.record.name);else{if(d=u.name?s.get(u.name):n.find(M=>M.re.test(u.path)),!d)throw qn(1,{location:f,currentLocation:u});A=d.record.name,m=te({},u.params,f.params),y=d.stringify(m)}const D=[];let P=d;for(;P;)D.unshift(P.record),P=P.parent;return{name:A,path:y,params:m,matched:D,meta:T_(D)}}return t.forEach(f=>r(f)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Rl(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function I_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:S_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function S_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Al(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function T_(t){return t.reduce((e,n)=>te(e,n.meta),{})}function Ol(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function io(t,e){return t.name===e.name&&t.optional===e.optional&&t.repeatable===e.repeatable}function R_(t,e){for(const n of t.keys)if(!n.optional&&!e.keys.find(io.bind(null,n)))return Z(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`);for(const n of e.keys)if(!n.optional&&!t.keys.find(io.bind(null,n)))return Z(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`)}function A_(t,e){e&&e.record.name&&!t.name&&!t.path&&Z(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function O_(t,e){for(const n of e.keys)if(!t.keys.find(io.bind(null,n)))return Z(`Absolute path "${t.record.path}" must have the exact same param named "${n.name}" as its parent "${e.record.path}".`)}function ef(t,e){return e.children.some(n=>n===t||ef(t,n))}const tf=/#/g,x_=/&/g,N_=/\//g,P_=/=/g,k_=/\?/g,nf=/\+/g,D_=/%5B/g,M_=/%5D/g,sf=/%5E/g,L_=/%60/g,rf=/%7B/g,$_=/%7C/g,of=/%7D/g,F_=/%20/g;function ta(t){return encodeURI(""+t).replace($_,"|").replace(D_,"[").replace(M_,"]")}function B_(t){return ta(t).replace(rf,"{").replace(of,"}").replace(sf,"^")}function ro(t){return ta(t).replace(nf,"%2B").replace(F_,"+").replace(tf,"%23").replace(x_,"%26").replace(L_,"`").replace(rf,"{").replace(of,"}").replace(sf,"^")}function U_(t){return ro(t).replace(P_,"%3D")}function j_(t){return ta(t).replace(tf,"%23").replace(k_,"%3F")}function H_(t){return t==null?"":j_(t).replace(N_,"%2F")}function Os(t){try{return decodeURIComponent(""+t)}catch{Z(`Error decoding "${t}". Using original value`)}return""+t}function W_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(nf," "),o=r.indexOf("="),a=Os(o<0?r:r.slice(0,o)),l=o<0?null:Os(r.slice(o+1));if(a in e){let c=e[a];Ve(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function xl(t){let e="";for(let n in t){const s=t[n];if(n=U_(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ve(s)?s.map(r=>r&&ro(r)):[s&&ro(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function V_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ve(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const K_=Symbol("router view location matched"),Nl=Symbol("router view depth"),na=Symbol("router"),af=Symbol("route location"),oo=Symbol("router view location");function rs(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function jt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=u=>{u===!1?a(qn(4,{from:n,to:e})):u instanceof Error?a(u):u_(u)?a(qn(2,{from:e,to:u})):(r&&s.enterCallbacks[i]===r&&typeof u=="function"&&r.push(u),o())},c=t.call(s&&s.instances[i],e,n,G_(l,e,n));let f=Promise.resolve(c);if(t.length<3&&(f=f.then(l)),t.length>2){const u=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof c=="object"&&"then"in c)f=f.then(d=>l._called?d:(Z(u),Promise.reject(new Error("Invalid navigation guard"))));else if(c!==void 0&&!l._called){Z(u),a(new Error("Invalid navigation guard"));return}}f.catch(u=>a(u))})}function G_(t,e,n){let s=0;return function(){s++===1&&Z(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,s===1&&t.apply(null,arguments)}}function _r(t,e,n,s){const i=[];for(const r of t){!r.components&&!r.children.length&&Z(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const o in r.components){let a=r.components[o];{if(!a||typeof a!="object"&&typeof a!="function")throw Z(`Component "${o}" in record with path "${r.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){Z(`Component "${o}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const l=a;a=()=>l}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,Z(`Component "${o}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(q_(a)){const c=(a.__vccOpts||a)[e];c&&i.push(jt(c,n,s,r,o))}else{let l=a();"catch"in l||(Z(`Component "${o}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),l=Promise.resolve(l)),i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const f=qg(c)?c.default:c;r.components[o]=f;const d=(f.__vccOpts||f)[e];return d&&jt(d,n,s,r,o)()}))}}}return i}function q_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Pl(t){const e=St(na),n=St(af),s=nt(()=>e.resolve(_n(t.to))),i=nt(()=>{const{matched:l}=s.value,{length:c}=l,f=l[c-1],u=n.matched;if(!f||!u.length)return-1;const d=u.findIndex(Xt.bind(null,f));if(d>-1)return d;const m=kl(l[c-2]);return c>1&&kl(f)===m&&u[u.length-1].path!==m?u.findIndex(Xt.bind(null,l[c-2])):d}),r=nt(()=>i.value>-1&&J_(n.params,s.value.params)),o=nt(()=>i.value>-1&&i.value===n.matched.length-1&&Qu(n.params,s.value.params));function a(l={}){return Q_(l)?e[_n(t.replace)?"replace":"push"](_n(t.to)).catch(_s):Promise.resolve()}if(Et){const l=Wu();if(l){const c={route:s.value,isActive:r.value,isExactActive:o.value};l.__vrl_devtools=l.__vrl_devtools||[],l.__vrl_devtools.push(c),Jp(()=>{c.route=s.value,c.isActive=r.value,c.isExactActive=o.value},{flush:"post"})}}return{route:s,href:nt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const z_=Ru({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Pl,setup(t,{slots:e}){const n=Bi(Pl(t)),{options:s}=St(na),i=nt(()=>({[Dl(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Dl(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:zu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Y_=z_;function Q_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function J_(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Ve(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function kl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Dl=(t,e,n)=>t??e??n,X_=Ru({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){Z_();const s=St(oo),i=nt(()=>t.route||s.value),r=St(Nl,0),o=nt(()=>{let c=_n(r);const{matched:f}=i.value;let u;for(;(u=f[c])&&!u.components;)c++;return c}),a=nt(()=>i.value.matched[o.value]);li(Nl,nt(()=>o.value+1)),li(K_,a),li(oo,i);const l=pp();return ps(()=>[l.value,a.value,t.name],([c,f,u],[d,m,y])=>{f&&(f.instances[u]=c,m&&m!==f&&c&&c===d&&(f.leaveGuards.size||(f.leaveGuards=m.leaveGuards),f.updateGuards.size||(f.updateGuards=m.updateGuards))),c&&f&&(!m||!Xt(f,m)||!d)&&(f.enterCallbacks[u]||[]).forEach(A=>A(c))},{flush:"post"}),()=>{const c=i.value,f=t.name,u=a.value,d=u&&u.components[f];if(!d)return Ml(n.default,{Component:d,route:c});const m=u.props[f],y=m?m===!0?c.params:typeof m=="function"?m(c):m:null,D=zu(d,te({},y,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(u.instances[f]=null)},ref:l}));if(Et&&D.ref){const P={depth:o.value,name:u.name,path:u.path,meta:u.meta};(Ve(D.ref)?D.ref.map(F=>F.i):[D.ref.i]).forEach(F=>{F.__vrv_devtools=P})}return Ml(n.default,{Component:D,route:c})||D}}});function Ml(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const lf=X_;function Z_(){const t=Wu(),e=t.parent&&t.parent.type.name,n=t.parent&&t.parent.subTree&&t.parent.subTree.type;if(e&&(e==="KeepAlive"||e.includes("Transition"))&&typeof n=="object"&&n.name==="RouterView"){const s=e==="KeepAlive"?"keep-alive":"transition";Z(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`)}}function os(t,e){const n=te({},t,{matched:t.matched.map(s=>ly(s,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:e,value:n}}}function ei(t){return{_custom:{display:t}}}let ey=0;function ty(t,e,n){if(e.__hasDevtools)return;e.__hasDevtools=!0;const s=ey++;Gg({id:"org.vuejs.router"+(s?"."+s:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},i=>{typeof i.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),i.on.inspectComponent((f,u)=>{f.instanceData&&f.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:os(e.currentRoute.value,"Current Route")})}),i.on.visitComponentTree(({treeNode:f,componentInstance:u})=>{if(u.__vrv_devtools){const d=u.__vrv_devtools;f.tags.push({label:(d.name?`${d.name.toString()}: `:"")+d.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:cf})}Ve(u.__vrl_devtools)&&(u.__devtoolsApi=i,u.__vrl_devtools.forEach(d=>{let m=hf,y="";d.isExactActive?(m=ff,y="This is exactly active"):d.isActive&&(m=uf,y="This link is active"),f.tags.push({label:d.route.path,textColor:0,tooltip:y,backgroundColor:m})}))}),ps(e.currentRoute,()=>{l(),i.notifyComponentUpdate(),i.sendInspectorTree(a),i.sendInspectorState(a)});const r="router:navigations:"+s;i.addTimelineLayer({id:r,label:`Router${s?" "+s:""} Navigations`,color:4237508}),e.onError((f,u)=>{i.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:u.fullPath,logType:"error",time:i.now(),data:{error:f},groupId:u.meta.__navigationId}})});let o=0;e.beforeEach((f,u)=>{const d={guard:ei("beforeEach"),from:os(u,"Current Location during this navigation"),to:os(f,"Target location")};Object.defineProperty(f.meta,"__navigationId",{value:o++}),i.addTimelineEvent({layerId:r,event:{time:i.now(),title:"Start of navigation",subtitle:f.fullPath,data:d,groupId:f.meta.__navigationId}})}),e.afterEach((f,u,d)=>{const m={guard:ei("afterEach")};d?(m.failure={_custom:{type:Error,readOnly:!0,display:d?d.message:"",tooltip:"Navigation Failure",value:d}},m.status=ei("❌")):m.status=ei("✅"),m.from=os(u,"Current Location during this navigation"),m.to=os(f,"Target location"),i.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:f.fullPath,time:i.now(),data:m,logType:d?"warning":"default",groupId:f.meta.__navigationId}})});const a="router-inspector:"+s;i.addInspector({id:a,label:"Routes"+(s?" "+s:""),icon:"book",treeFilterPlaceholder:"Search routes"});function l(){if(!c)return;const f=c;let u=n.getRoutes().filter(d=>!d.parent||!d.parent.record.components);u.forEach(mf),f.filter&&(u=u.filter(d=>ao(d,f.filter.toLowerCase()))),u.forEach(d=>pf(d,e.currentRoute.value)),f.rootNodes=u.map(df)}let c;i.on.getInspectorTree(f=>{c=f,f.app===t&&f.inspectorId===a&&l()}),i.on.getInspectorState(f=>{if(f.app===t&&f.inspectorId===a){const d=n.getRoutes().find(m=>m.record.__vd_id===f.nodeId);d&&(f.state={options:sy(d)})}}),i.sendInspectorTree(a),i.sendInspectorState(a)})}function ny(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function sy(t){const{record:e}=t,n=[{editable:!1,key:"path",value:e.path}];return e.name!=null&&n.push({editable:!1,key:"name",value:e.name}),n.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(s=>`${s.name}${ny(s)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),e.redirect!=null&&n.push({editable:!1,key:"redirect",value:e.redirect}),t.alias.length&&n.push({editable:!1,key:"aliases",value:t.alias.map(s=>s.record.path)}),Object.keys(t.record.meta).length&&n.push({editable:!1,key:"meta",value:t.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(s=>s.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),n}const cf=15485081,uf=2450411,ff=8702998,iy=2282478,hf=16486972,ry=6710886;function df(t){const e=[],{record:n}=t;n.name!=null&&e.push({label:String(n.name),textColor:0,backgroundColor:iy}),n.aliasOf&&e.push({label:"alias",textColor:0,backgroundColor:hf}),t.__vd_match&&e.push({label:"matches",textColor:0,backgroundColor:cf}),t.__vd_exactActive&&e.push({label:"exact",textColor:0,backgroundColor:ff}),t.__vd_active&&e.push({label:"active",textColor:0,backgroundColor:uf}),n.redirect&&e.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:ry});let s=n.__vd_id;return s==null&&(s=String(oy++),n.__vd_id=s),{id:s,label:n.path,tags:e,children:t.children.map(df)}}let oy=0;const ay=/^\/(.*)\/([a-z]*)$/;function pf(t,e){const n=e.matched.length&&Xt(e.matched[e.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=n,n||(t.__vd_active=e.matched.some(s=>Xt(s,t.record))),t.children.forEach(s=>pf(s,e))}function mf(t){t.__vd_match=!1,t.children.forEach(mf)}function ao(t,e){const n=String(t.re).match(ay);if(t.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(e))return t.children.forEach(o=>ao(o,e)),t.record.path!=="/"||e==="/"?(t.__vd_match=t.re.test(e),!0):!1;const i=t.record.path.toLowerCase(),r=Os(i);return!e.startsWith("/")&&(r.includes(e)||i.includes(e))||r.startsWith(e)||i.startsWith(e)||t.record.name&&String(t.record.name).includes(e)?!0:t.children.some(o=>ao(o,e))}function ly(t,e){const n={};for(const s in t)e.includes(s)||(n[s]=t[s]);return n}function cy(t){const e=C_(t.routes,t),n=t.parseQuery||W_,s=t.stringifyQuery||xl,i=t.history;if(!i)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=rs(),o=rs(),a=rs(),l=mp($t);let c=$t;Et&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=mr.bind(null,_=>""+_),u=mr.bind(null,H_),d=mr.bind(null,Os);function m(_,x){let O,k;return Xu(_)?(O=e.getRecordMatcher(_),k=x):k=_,e.addRoute(k,O)}function y(_){const x=e.getRecordMatcher(_);x?e.removeRoute(x):Z(`Cannot remove non-existent route "${String(_)}"`)}function A(){return e.getRoutes().map(_=>_.record)}function D(_){return!!e.getRecordMatcher(_)}function P(_,x){if(x=te({},x||l.value),typeof _=="string"){const h=gr(n,_,x.path),p=e.resolve({path:h.path},x),g=i.createHref(h.fullPath);return g.startsWith("//")?Z(`Location "${_}" resolved to "${g}". A resolved location cannot start with multiple slashes.`):p.matched.length||Z(`No match found for location with path "${_}"`),te(h,p,{params:d(p.params),hash:Os(h.hash),redirectedFrom:void 0,href:g})}let O;if("path"in _)"params"in _&&!("name"in _)&&Object.keys(_.params).length&&Z(`Path "${_.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),O=te({},_,{path:gr(n,_.path,x.path).path});else{const h=te({},_.params);for(const p in h)h[p]==null&&delete h[p];O=te({},_,{params:u(h)}),x.params=u(x.params)}const k=e.resolve(O,x),z=_.hash||"";z&&!z.startsWith("#")&&Z(`A \`hash\` should always start with the character "#". Replace "${z}" with "#${z}".`),k.params=f(d(k.params));const he=Qg(s,te({},_,{hash:B_(z),path:k.path})),V=i.createHref(he);return V.startsWith("//")?Z(`Location "${_}" resolved to "${V}". A resolved location cannot start with multiple slashes.`):k.matched.length||Z(`No match found for location with path "${"path"in _?_.path:_}"`),te({fullPath:he,hash:z,query:s===xl?V_(_.query):_.query||{}},k,{redirectedFrom:void 0,href:V})}function M(_){return typeof _=="string"?gr(n,_,l.value.path):te({},_)}function F(_,x){if(c!==_)return qn(8,{from:x,to:_})}function K(_){return j(_)}function se(_){return K(te(M(_),{replace:!0}))}function me(_){const x=_.matched[_.matched.length-1];if(x&&x.redirect){const{redirect:O}=x;let k=typeof O=="function"?O(_):O;if(typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=M(k):{path:k},k.params={}),!("path"in k)&&!("name"in k))throw Z(`Invalid redirect found:
${JSON.stringify(k,null,2)}
 when navigating to "${_.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return te({query:_.query,hash:_.hash,params:"path"in k?{}:_.params},k)}}function j(_,x){const O=c=P(_),k=l.value,z=_.state,he=_.force,V=_.replace===!0,h=me(O);if(h)return j(te(M(h),{state:typeof h=="object"?te({},z,h.state):z,force:he,replace:V}),x||O);const p=O;p.redirectedFrom=x;let g;return!he&&bl(s,k,O)&&(g=qn(16,{to:p,from:k}),kt(k,k,!0,!1)),(g?Promise.resolve(g):Ke(p,k)).catch(v=>yt(v)?yt(v,2)?v:rn(v):q(v,p,k)).then(v=>{if(v){if(yt(v,2))return bl(s,P(v.to),p)&&x&&(x._count=x._count?x._count+1:1)>30?(Z(`Detected a possibly infinite redirection in a navigation guard when going from "${k.fullPath}" to "${p.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):j(te({replace:V},M(v.to),{state:typeof v.to=="object"?te({},z,v.to.state):z,force:he}),x||p)}else v=Le(p,k,!0,V,z);return Je(p,k,v),v})}function Ee(_,x){const O=F(_,x);return O?Promise.reject(O):Promise.resolve()}function ye(_){const x=Dt.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(_):_()}function Ke(_,x){let O;const[k,z,he]=uy(_,x);O=_r(k.reverse(),"beforeRouteLeave",_,x);for(const h of k)h.leaveGuards.forEach(p=>{O.push(jt(p,_,x))});const V=Ee.bind(null,_,x);return O.push(V),Mt(O).then(()=>{O=[];for(const h of r.list())O.push(jt(h,_,x));return O.push(V),Mt(O)}).then(()=>{O=_r(z,"beforeRouteUpdate",_,x);for(const h of z)h.updateGuards.forEach(p=>{O.push(jt(p,_,x))});return O.push(V),Mt(O)}).then(()=>{O=[];for(const h of he)if(h.beforeEnter)if(Ve(h.beforeEnter))for(const p of h.beforeEnter)O.push(jt(p,_,x));else O.push(jt(h.beforeEnter,_,x));return O.push(V),Mt(O)}).then(()=>(_.matched.forEach(h=>h.enterCallbacks={}),O=_r(he,"beforeRouteEnter",_,x),O.push(V),Mt(O))).then(()=>{O=[];for(const h of o.list())O.push(jt(h,_,x));return O.push(V),Mt(O)}).catch(h=>yt(h,8)?h:Promise.reject(h))}function Je(_,x,O){a.list().forEach(k=>ye(()=>k(_,x,O)))}function Le(_,x,O,k,z){const he=F(_,x);if(he)return he;const V=x===$t,h=Et?history.state:{};O&&(k||V?i.replace(_.fullPath,te({scroll:V&&h&&h.scroll},z)):i.push(_.fullPath,z)),l.value=_,kt(_,x,O,V),rn()}let ct;function Gs(){ct||(ct=i.listen((_,x,O)=>{if(!qs.listening)return;const k=P(_),z=me(k);if(z){j(te(z,{replace:!0}),k).catch(_s);return}c=k;const he=l.value;Et&&i_(El(he.fullPath,O.delta),Yi()),Ke(k,he).catch(V=>yt(V,12)?V:yt(V,2)?(j(V.to,k).then(h=>{yt(h,20)&&!O.delta&&O.type===As.pop&&i.go(-1,!1)}).catch(_s),Promise.reject()):(O.delta&&i.go(-O.delta,!1),q(V,k,he))).then(V=>{V=V||Le(k,he,!1),V&&(O.delta&&!yt(V,8)?i.go(-O.delta,!1):O.type===As.pop&&yt(V,20)&&i.go(-1,!1)),Je(k,he,V)}).catch(_s)}))}let Ge=rs(),Ce=rs(),G;function q(_,x,O){rn(_);const k=Ce.list();return k.length?k.forEach(z=>z(_,x,O)):(Z("uncaught error during route navigation:"),console.error(_)),Promise.reject(_)}function qe(){return G&&l.value!==$t?Promise.resolve():new Promise((_,x)=>{Ge.add([_,x])})}function rn(_){return G||(G=!_,Gs(),Ge.list().forEach(([x,O])=>_?O(_):x()),Ge.reset()),_}function kt(_,x,O,k){const{scrollBehavior:z}=t;if(!Et||!z)return Promise.resolve();const he=!O&&r_(El(_.fullPath,0))||(k||!O)&&history.state&&history.state.scroll||null;return hu().then(()=>z(_,x,he)).then(V=>V&&s_(V)).catch(V=>q(V,_,x))}const ut=_=>i.go(_);let ze;const Dt=new Set,qs={currentRoute:l,listening:!0,addRoute:m,removeRoute:y,hasRoute:D,getRoutes:A,resolve:P,options:t,push:K,replace:se,go:ut,back:()=>ut(-1),forward:()=>ut(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Ce.add,isReady:qe,install(_){const x=this;_.component("RouterLink",Y_),_.component("RouterView",lf),_.config.globalProperties.$router=x,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>_n(l)}),Et&&!ze&&l.value===$t&&(ze=!0,K(i.location).catch(z=>{Z("Unexpected error when starting the router:",z)}));const O={};for(const z in $t)Object.defineProperty(O,z,{get:()=>l.value[z],enumerable:!0});_.provide(na,x),_.provide(af,su(O)),_.provide(oo,l);const k=_.unmount;Dt.add(_),_.unmount=function(){Dt.delete(_),Dt.size<1&&(c=$t,ct&&ct(),ct=null,l.value=$t,ze=!1,G=!1),k()},Et&&ty(_,x,e)}};function Mt(_){return _.reduce((x,O)=>x.then(()=>ye(O)),Promise.resolve())}return qs}function uy(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Xt(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Xt(c,l))||i.push(l))}return[n,s,i]}const Us=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},fy={__name:"App",setup(t){return(e,n)=>(Fs(),Um(_n(lf)))}},hy=Us(fy,[["__file","/Users/mattday/Desktop/Coding/IndianSpringsKatahdins/src/App.vue"]]),dy="modulepreload",py=function(t){return"/"+t},Ll={},ti=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link");i=Promise.all(n.map(o=>{if(o=py(o),o in Ll)return;Ll[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const d=r[u];if(d.href===o&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const f=document.createElement("link");if(f.rel=a?"stylesheet":dy,a||(f.as="script",f.crossOrigin=""),f.href=o,document.head.appendChild(f),a)return new Promise((u,d)=>{f.addEventListener("load",u),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},my="/assets/ISKLogoText-5R0GjBnR.png",gy={},_y={id:"nav"},yy=Km('<a class="nav-text" href="/about" data-v-4d808a77>About</a><a class="nav-text" href="/menu" data-v-4d808a77>Menu</a><a href="/" data-v-4d808a77><img class="nav-logo" alt="Indian Springs Katahdins" src="'+my+'" data-v-4d808a77></a><a class="nav-text" href="/recipes" data-v-4d808a77>Recipes</a><a class="nav-text" href="/contact" data-v-4d808a77>Contact</a>',5),vy=[yy];function by(t,e){return Fs(),Ki("nav",_y,[...vy])}const wy=Us(gy,[["render",by],["__scopeId","data-v-4d808a77"],["__file","/Users/mattday/Desktop/Coding/IndianSpringsKatahdins/src/components/Navbar.vue"]]),Ey="/assets/ISKLogoTransparent-NojJMbXF.png",Cy={},Iy=t=>(Eu("data-v-3587acbb"),t=t(),Cu(),t),Sy={class:"banner"},Ty=Iy(()=>He("img",{class:"banner-img",alt:"Indian Springs Katahdins Logo",src:Ey},null,-1)),Ry=[Ty];function Ay(t,e){return Fs(),Ki("div",Sy,[...Ry])}const Oy=Us(Cy,[["render",Ay],["__scopeId","data-v-3587acbb"],["__file","/Users/mattday/Desktop/Coding/IndianSpringsKatahdins/src/components/Banner.vue"]]);var $l={};/**
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
 */const gf={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const R=function(t,e){if(!t)throw Jn(e)},Jn=function(t){return new Error("Firebase Database ("+gf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const _f=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xy=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},sa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,f=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(d=64)),s.push(n[f],n[u],n[d],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_f(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||u==null)throw new Ny;const d=r<<2|a>>4;if(s.push(d),c!==64){const m=a<<4&240|c>>2;if(s.push(m),u!==64){const y=c<<6&192|u;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ny extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yf=function(t){const e=_f(t);return sa.encodeByteArray(e,!0)},vi=function(t){return yf(t).replace(/\./g,"")},lo=function(t){try{return sa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Py(t){return vf(void 0,t)}function vf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ky(n)||(t[n]=vf(t[n],e[n]));return t}function ky(t){return t!=="__proto__"}/**
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
 */function Dy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const My=()=>Dy().__FIREBASE_DEFAULTS__,Ly=()=>{if(typeof process>"u"||typeof $l>"u")return;const t=$l.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$y=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&lo(t[1]);return e&&JSON.parse(e)},bf=()=>{try{return My()||Ly()||$y()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fy=t=>{var e,n;return(n=(e=bf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},By=t=>{const e=Fy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},wf=()=>{var t;return(t=bf())===null||t===void 0?void 0:t.config};/**
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
 */class Qi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Uy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[vi(JSON.stringify(n)),vi(JSON.stringify(o)),""].join(".")}/**
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
 */function jy(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ef(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jy())}function Hy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Wy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cf(){return gf.NODE_ADMIN===!0}function If(){try{return typeof indexedDB=="object"}catch{return!1}}function Sf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Vy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Ky="FirebaseError";class xn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Ky,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ji.prototype.create)}}class Ji{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Gy(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new xn(i,a,s)}}function Gy(t,e){return t.replace(qy,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const qy=/\{\$([^}]+)}/g;/**
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
 */function xs(t){return JSON.parse(t)}function Te(t){return JSON.stringify(t)}/**
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
 */const Tf=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=xs(lo(r[0])||""),n=xs(lo(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},zy=function(t){const e=Tf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Yy=function(t){const e=Tf(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Pt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function zn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Fl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bi(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function wi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Bl(r)&&Bl(o)){if(!wi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Bl(t){return t!==null&&typeof t=="object"}/**
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
 */function Qy(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class Jy{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)s[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const d=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,f;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),f=1518500249):(c=r^o^a,f=1859775393):u<60?(c=r&o|a&(r|o),f=2400959708):(c=r^o^a,f=3395469782);const d=(i<<5|i>>>27)+c+l+f+s[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function ia(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Xy=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,R(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Xi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Zy=1e3,ev=2,tv=4*60*60*1e3,nv=.5;function Ul(t,e=Zy,n=ev){const s=e*Math.pow(n,t),i=Math.round(nv*s*(Math.random()-.5)*2);return Math.min(tv,s+i)}/**
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
 */function sn(t){return t&&t._delegate?t._delegate:t}class Rt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const cn="[DEFAULT]";/**
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
 */class sv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Qi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rv(e))try{this.getOrInitializeService({instanceIdentifier:cn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cn){return this.instances.has(e)}getOptions(e=cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:iv(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=cn){return this.component?this.component.multipleInstances?e:cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iv(t){return t===cn?void 0:t}function rv(t){return t.instantiationMode==="EAGER"}/**
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
 */class ov{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const av={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},lv=ae.INFO,cv={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},uv=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=cv[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ra{constructor(e){this.name=e,this._logLevel=lv,this._logHandler=uv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?av[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const fv=(t,e)=>e.some(n=>t instanceof n);let jl,Hl;function hv(){return jl||(jl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dv(){return Hl||(Hl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rf=new WeakMap,co=new WeakMap,Af=new WeakMap,yr=new WeakMap,oa=new WeakMap;function pv(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Vt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Rf.set(n,t)}).catch(()=>{}),oa.set(e,t),e}function mv(t){if(co.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});co.set(t,e)}let uo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return co.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Af.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gv(t){uo=t(uo)}function _v(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(vr(this),e,...n);return Af.set(s,e.sort?e.sort():[e]),Vt(s)}:dv().includes(t)?function(...e){return t.apply(vr(this),e),Vt(Rf.get(this))}:function(...e){return Vt(t.apply(vr(this),e))}}function yv(t){return typeof t=="function"?_v(t):(t instanceof IDBTransaction&&mv(t),fv(t,hv())?new Proxy(t,uo):t)}function Vt(t){if(t instanceof IDBRequest)return pv(t);if(yr.has(t))return yr.get(t);const e=yv(t);return e!==t&&(yr.set(t,e),oa.set(e,t)),e}const vr=t=>oa.get(t);function vv(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Vt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Vt(o.result),l.oldVersion,l.newVersion,Vt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const bv=["get","getKey","getAll","getAllKeys","count"],wv=["put","add","delete","clear"],br=new Map;function Wl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(br.get(e))return br.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=wv.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||bv.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return br.set(e,r),r}gv(t=>({...t,get:(e,n,s)=>Wl(e,n)||t.get(e,n,s),has:(e,n)=>!!Wl(e,n)||t.has(e,n)}));/**
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
 */class Ev{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Cv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Cv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fo="@firebase/app",Vl="0.9.26";/**
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
 */const In=new ra("@firebase/app"),Iv="@firebase/app-compat",Sv="@firebase/analytics-compat",Tv="@firebase/analytics",Rv="@firebase/app-check-compat",Av="@firebase/app-check",Ov="@firebase/auth",xv="@firebase/auth-compat",Nv="@firebase/database",Pv="@firebase/database-compat",kv="@firebase/functions",Dv="@firebase/functions-compat",Mv="@firebase/installations",Lv="@firebase/installations-compat",$v="@firebase/messaging",Fv="@firebase/messaging-compat",Bv="@firebase/performance",Uv="@firebase/performance-compat",jv="@firebase/remote-config",Hv="@firebase/remote-config-compat",Wv="@firebase/storage",Vv="@firebase/storage-compat",Kv="@firebase/firestore",Gv="@firebase/firestore-compat",qv="firebase",zv="10.7.2";/**
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
 */const ho="[DEFAULT]",Yv={[fo]:"fire-core",[Iv]:"fire-core-compat",[Tv]:"fire-analytics",[Sv]:"fire-analytics-compat",[Av]:"fire-app-check",[Rv]:"fire-app-check-compat",[Ov]:"fire-auth",[xv]:"fire-auth-compat",[Nv]:"fire-rtdb",[Pv]:"fire-rtdb-compat",[kv]:"fire-fn",[Dv]:"fire-fn-compat",[Mv]:"fire-iid",[Lv]:"fire-iid-compat",[$v]:"fire-fcm",[Fv]:"fire-fcm-compat",[Bv]:"fire-perf",[Uv]:"fire-perf-compat",[jv]:"fire-rc",[Hv]:"fire-rc-compat",[Wv]:"fire-gcs",[Vv]:"fire-gcs-compat",[Kv]:"fire-fst",[Gv]:"fire-fst-compat","fire-js":"fire-js",[qv]:"fire-js-all"};/**
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
 */const Ei=new Map,po=new Map;function Qv(t,e){try{t.container.addComponent(e)}catch(n){In.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zt(t){const e=t.name;if(po.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;po.set(e,t);for(const n of Ei.values())Qv(n,t);return!0}function js(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Jv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Kt=new Ji("app","Firebase",Jv);/**
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
 */class Xv{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
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
 */const Zv=zv;function Of(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ho,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Kt.create("bad-app-name",{appName:String(i)});if(n||(n=wf()),!n)throw Kt.create("no-options");const r=Ei.get(i);if(r){if(wi(n,r.options)&&wi(s,r.config))return r;throw Kt.create("duplicate-app",{appName:i})}const o=new ov(i);for(const l of po.values())o.addComponent(l);const a=new Xv(n,s,o);return Ei.set(i,a),a}function xf(t=ho){const e=Ei.get(t);if(!e&&t===ho&&wf())return Of();if(!e)throw Kt.create("no-app",{appName:t});return e}function _t(t,e,n){var s;let i=(s=Yv[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(a.join(" "));return}Zt(new Rt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const eb="firebase-heartbeat-database",tb=1,Ns="firebase-heartbeat-store";let wr=null;function Nf(){return wr||(wr=vv(eb,tb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ns)}catch(n){console.warn(n)}}}}).catch(t=>{throw Kt.create("idb-open",{originalErrorMessage:t.message})})),wr}async function nb(t){try{return await(await Nf()).transaction(Ns).objectStore(Ns).get(Pf(t))}catch(e){if(e instanceof xn)In.warn(e.message);else{const n=Kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});In.warn(n.message)}}}async function Kl(t,e){try{const s=(await Nf()).transaction(Ns,"readwrite");await s.objectStore(Ns).put(e,Pf(t)),await s.done}catch(n){if(n instanceof xn)In.warn(n.message);else{const s=Kt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});In.warn(s.message)}}}function Pf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const sb=1024,ib=30*24*60*60*1e3;class rb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ab(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Gl();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ib}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gl(),{heartbeatsToSend:s,unsentEntries:i}=ob(this._heartbeatsCache.heartbeats),r=vi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Gl(){return new Date().toISOString().substring(0,10)}function ob(t,e=sb){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ql(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ql(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ab{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return If()?Sf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ql(t){return vi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function lb(t){Zt(new Rt("platform-logger",e=>new Ev(e),"PRIVATE")),Zt(new Rt("heartbeat",e=>new rb(e),"PRIVATE")),_t(fo,Vl,t),_t(fo,Vl,"esm2017"),_t("fire-js","")}lb("");var zl={};const Yl="@firebase/database",Ql="1.0.2";/**
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
 */let kf="";function cb(t){kf=t}/**
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
 */class ub{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Te(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:xs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class fb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Pt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Df=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ub(e)}}catch{}return new fb},fn=Df("localStorage"),mo=Df("sessionStorage");/**
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
 */const Wn=new ra("@firebase/database"),hb=function(){let t=1;return function(){return t++}}(),Mf=function(t){const e=Xy(t),n=new Jy;n.update(e);const s=n.digest();return sa.encodeByteArray(s)},Hs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Hs.apply(null,s):typeof s=="object"?e+=Te(s):e+=s,e+=" "}return e};let En=null,Jl=!0;const db=function(t,e){R(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Wn.logLevel=ae.VERBOSE,En=Wn.log.bind(Wn),e&&mo.set("logging_enabled",!0)):typeof t=="function"?En=t:(En=null,mo.remove("logging_enabled"))},Ae=function(...t){if(Jl===!0&&(Jl=!1,En===null&&mo.get("logging_enabled")===!0&&db(!0)),En){const e=Hs.apply(null,t);En(e)}},Ws=function(t){return function(...e){Ae(t,...e)}},go=function(...t){const e="FIREBASE INTERNAL ERROR: "+Hs(...t);Wn.error(e)},At=function(...t){const e=`FIREBASE FATAL ERROR: ${Hs(...t)}`;throw Wn.error(e),new Error(e)},Be=function(...t){const e="FIREBASE WARNING: "+Hs(...t);Wn.warn(e)},pb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Lf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},mb=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Yn="[MIN_NAME]",Sn="[MAX_NAME]",Xn=function(t,e){if(t===e)return 0;if(t===Yn||e===Sn)return-1;if(e===Yn||t===Sn)return 1;{const n=Xl(t),s=Xl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},gb=function(t,e){return t===e?0:t<e?-1:1},as=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Te(e))},aa=function(t){if(typeof t!="object"||t===null)return Te(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Te(e[s]),n+=":",n+=aa(t[e[s]]);return n+="}",n},$f=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Qe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ff=function(t){R(!Lf(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const f=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(f.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},_b=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},vb=new RegExp("^-?(0*)\\d{1,10}$"),bb=-2147483648,wb=2147483647,Xl=function(t){if(vb.test(t)){const e=Number(t);if(e>=bb&&e<=wb)return e}return null},Zn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Be("Exception was thrown by user callback.",n),e},Math.floor(0))}},Eb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},vs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Cb{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Ib{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ae("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Be(e)}}class Vn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Vn.OWNER="owner";/**
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
 */const la="5",Bf="v",Uf="s",jf="r",Hf="f",Wf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Vf="ls",Kf="p",_o="ac",Gf="websocket",qf="long_polling";/**
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
 */class zf{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=fn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&fn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Sb(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Yf(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let s;if(e===Gf)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===qf)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Sb(t)&&(n.ns=t.namespace);const i=[];return Qe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Tb{constructor(){this.counters_={}}incrementCounter(e,n=1){Pt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Py(this.counters_)}}/**
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
 */const Er={},Cr={};function ca(t){const e=t.toString();return Er[e]||(Er[e]=new Tb),Er[e]}function Rb(t,e){const n=t.toString();return Cr[n]||(Cr[n]=e()),Cr[n]}/**
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
 */class Ab{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Zn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Zl="start",Ob="close",xb="pLPCommand",Nb="pRTLPCB",Qf="id",Jf="pw",Xf="ser",Pb="cb",kb="seg",Db="ts",Mb="d",Lb="dframe",Zf=1870,eh=30,$b=Zf-eh,Fb=25e3,Bb=3e4;class Bn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ws(e),this.stats_=ca(n),this.urlFn=l=>(this.appCheckToken&&(l[_o]=this.appCheckToken),Yf(n,qf,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Ab(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Bb)),mb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ua((...r)=>{const[o,a,l,c,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Zl)this.id=a,this.password=l;else if(o===Ob)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Zl]="t",s[Xf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Pb]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Bf]=la,this.transportSessionId&&(s[Uf]=this.transportSessionId),this.lastSessionId&&(s[Vf]=this.lastSessionId),this.applicationId&&(s[Kf]=this.applicationId),this.appCheckToken&&(s[_o]=this.appCheckToken),typeof location<"u"&&location.hostname&&Wf.test(location.hostname)&&(s[jf]=Hf);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Bn.forceAllow_=!0}static forceDisallow(){Bn.forceDisallow_=!0}static isAvailable(){return Bn.forceAllow_?!0:!Bn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!_b()&&!yb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Te(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=yf(n),i=$f(s,$b);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Lb]="t",s[Qf]=e,s[Jf]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Te(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ua{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=hb(),window[xb+this.uniqueCallbackIdentifier]=e,window[Nb+this.uniqueCallbackIdentifier]=n,this.myIFrame=ua.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ae("frame writing exception"),a.stack&&Ae(a.stack),Ae(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ae("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Qf]=this.myID,e[Jf]=this.myPW,e[Xf]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+eh+s.length<=Zf;){const o=this.pendingSegs.shift();s=s+"&"+kb+i+"="+o.seg+"&"+Db+i+"="+o.ts+"&"+Mb+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Fb)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ae("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Ub=16384,jb=45e3;let Ci=null;typeof MozWebSocket<"u"?Ci=MozWebSocket:typeof WebSocket<"u"&&(Ci=WebSocket);class st{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ws(this.connId),this.stats_=ca(n),this.connURL=st.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Bf]=la,typeof location<"u"&&location.hostname&&Wf.test(location.hostname)&&(o[jf]=Hf),n&&(o[Uf]=n),s&&(o[Vf]=s),i&&(o[_o]=i),r&&(o[Kf]=r),Yf(e,Gf,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,fn.set("previous_websocket_failure",!0);try{let s;Cf(),this.mySock=new Ci(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){st.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ci!==null&&!st.forceDisallow_}static previouslyFailed(){return fn.isInMemoryStorage||fn.get("previous_websocket_failure")===!0}markConnectionHealthy(){fn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=xs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Te(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=$f(n,Ub);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(jb))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}st.responsesRequiredToBeHealthy=2;st.healthyTimeout=3e4;/**
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
 */class Ps{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Bn,st]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=st&&st.isAvailable();let s=n&&!st.previouslyFailed();if(e.webSocketOnly&&(n||Be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[st];else{const i=this.transports_=[];for(const r of Ps.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ps.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ps.globalTransportInitialized_=!1;/**
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
 */const Hb=6e4,Wb=5e3,Vb=10*1024,Kb=100*1024,Ir="t",ec="d",Gb="s",tc="r",qb="e",nc="o",sc="a",ic="n",rc="p",zb="h";class Yb{constructor(e,n,s,i,r,o,a,l,c,f){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ws("c:"+this.id+":"),this.transportManager_=new Ps(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=vs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Kb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Vb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ir in e){const n=e[Ir];n===sc?this.upgradeIfSecondaryHealthy_():n===tc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===nc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=as("t",e),s=as("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:rc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:sc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ic,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=as("t",e),s=as("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=as(Ir,e);if(ec in e){const s=e[ec];if(n===zb){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===ic){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Gb?this.onConnectionShutdown_(s):n===tc?this.onReset_(s):n===qb?go("Server Error: "+s):n===nc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):go("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),la!==s&&Be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),vs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Hb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):vs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Wb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:rc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(fn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class th{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class nh{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ii extends nh{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ef()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ii}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const oc=32,ac=768;class fe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function re(){return new fe("")}function J(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function en(t){return t.pieces_.length-t.pieceNum_}function ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new fe(t.pieces_,e)}function sh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Qb(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ih(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function rh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new fe(e,0)}function _e(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof fe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new fe(n,0)}function X(t){return t.pieceNum_>=t.pieces_.length}function Ye(t,e){const n=J(t),s=J(e);if(n===null)return e;if(n===s)return Ye(ue(t),ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function oh(t,e){if(en(t)!==en(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function rt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(en(t)>en(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Jb{constructor(e,n){this.errorPrefix_=n,this.parts_=ih(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Xi(this.parts_[s]);ah(this)}}function Xb(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Xi(e),ah(t)}function Zb(t){const e=t.parts_.pop();t.byteLength_-=Xi(e),t.parts_.length>0&&(t.byteLength_-=1)}function ah(t){if(t.byteLength_>ac)throw new Error(t.errorPrefix_+"has a key path longer than "+ac+" bytes ("+t.byteLength_+").");if(t.parts_.length>oc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+oc+") or object contains a cycle "+un(t))}function un(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class fa extends nh{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new fa}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ls=1e3,ew=60*5*1e3,lc=30*1e3,tw=1.3,nw=3e4,sw="server_kill",cc=3;class Tt extends th{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Tt.nextPersistentConnectionId_++,this.log_=Ws("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ls,this.maxReconnectDelay_=ew,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Cf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fa.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ii.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Te(r)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Qi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Tt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Pt(e,"w")){const s=zn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Yy(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=lc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=zy(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Te(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):go("Unrecognized action received from server: "+Te(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ls,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ls,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>nw&&(this.reconnectDelay_=ls),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*tw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Tt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(u){R(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Ae("getToken() completed but was canceled"):(Ae("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new Yb(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,m=>{Be(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(sw)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Be(u),l())}}}interrupt(e){Ae("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ae("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Fl(this.interruptReasons_)&&(this.reconnectDelay_=ls,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>aa(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new fe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ae("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=cc&&(this.reconnectDelay_=lc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ae("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=cc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+kf.replace(/\./g,"-")]=1,Ef()?e["framework.cordova"]=1:Wy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ii.getInstance().currentlyOnline();return Fl(this.interruptReasons_)&&e}}Tt.nextPersistentConnectionId_=0;Tt.nextConnectionId_=0;/**
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
 */class ee{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ee(e,n)}}/**
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
 */class Zi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ee(Yn,e),i=new ee(Yn,n);return this.compare(s,i)!==0}minPost(){return ee.MIN}}/**
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
 */let ni;class lh extends Zi{static get __EMPTY_NODE(){return ni}static set __EMPTY_NODE(e){ni=e}compare(e,n){return Xn(e.name,n.name)}isDefinedOn(e){throw Jn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ee.MIN}maxPost(){return new ee(Sn,ni)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new ee(e,ni)}toString(){return".key"}}const Kn=new lh;/**
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
 */class si{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class we{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??we.RED,this.left=i??Fe.EMPTY_NODE,this.right=r??Fe.EMPTY_NODE}copy(e,n,s,i,r){return new we(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Fe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Fe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}we.RED=!0;we.BLACK=!1;class iw{copy(e,n,s,i,r){return this}insert(e,n,s){return new we(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Fe{constructor(e,n=Fe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Fe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,we.BLACK,null,null))}remove(e){return new Fe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,we.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new si(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new si(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new si(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new si(this.root_,null,this.comparator_,!0,e)}}Fe.EMPTY_NODE=new iw;/**
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
 */function rw(t,e){return Xn(t.name,e.name)}function ha(t,e){return Xn(t,e)}/**
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
 */let yo;function ow(t){yo=t}const ch=function(t){return typeof t=="number"?"number:"+Ff(t):"string:"+t},uh=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Pt(e,".sv"),"Priority must be a string or number.")}else R(t===yo||t.isEmpty(),"priority of unexpected type.");R(t===yo||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let uc;class be{constructor(e,n=be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),uh(this.priorityNode_)}static set __childrenNodeConstructor(e){uc=e}static get __childrenNodeConstructor(){return uc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return X(e)?this:J(e)===".priority"?this.priorityNode_:be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=J(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(R(s!==".priority"||en(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,be.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ch(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ff(this.value_):e+=this.value_,this.lazyHash_=Mf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof be.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=be.VALUE_TYPE_ORDER.indexOf(n),r=be.VALUE_TYPE_ORDER.indexOf(s);return R(i>=0,"Unknown leaf type: "+n),R(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let fh,hh;function aw(t){fh=t}function lw(t){hh=t}class cw extends Zi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Xn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ee.MIN}maxPost(){return new ee(Sn,new be("[PRIORITY-POST]",hh))}makePost(e,n){const s=fh(e);return new ee(n,new be("[PRIORITY-POST]",s))}toString(){return".priority"}}const Pe=new cw;/**
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
 */const uw=Math.log(2);class fw{constructor(e){const n=r=>parseInt(Math.log(r)/uw,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Si=function(t,e,n,s){t.sort(e);const i=function(l,c){const f=c-l;let u,d;if(f===0)return null;if(f===1)return u=t[l],d=n?n(u):u,new we(d,u.node,we.BLACK,null,null);{const m=parseInt(f/2,10)+l,y=i(l,m),A=i(m+1,c);return u=t[m],d=n?n(u):u,new we(d,u.node,we.BLACK,y,A)}},r=function(l){let c=null,f=null,u=t.length;const d=function(y,A){const D=u-y,P=u;u-=y;const M=i(D+1,P),F=t[D],K=n?n(F):F;m(new we(K,F.node,A,null,M))},m=function(y){c?(c.left=y,c=y):(f=y,c=y)};for(let y=0;y<l.count;++y){const A=l.nextBitIsOne(),D=Math.pow(2,l.count-(y+1));A?d(D,we.BLACK):(d(D,we.BLACK),d(D,we.RED))}return f},o=new fw(t.length),a=r(o);return new Fe(s||e,a)};/**
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
 */let Sr;const Mn={};class Ct{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return R(Mn&&Pe,"ChildrenNode.ts has not been loaded"),Sr=Sr||new Ct({".priority":Mn},{".priority":Pe}),Sr}get(e){const n=zn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Fe?n:null}hasIndex(e){return Pt(this.indexSet_,e.toString())}addIndex(e,n){R(e!==Kn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ee.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Si(s,e.getCompare()):a=Mn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const f=Object.assign({},this.indexes_);return f[l]=a,new Ct(f,c)}addToIndexes(e,n){const s=bi(this.indexes_,(i,r)=>{const o=zn(this.indexSet_,r);if(R(o,"Missing index implementation for "+r),i===Mn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ee.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Si(a,o.getCompare())}else return Mn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ee(e.name,a))),l.insert(e,e.node)}});return new Ct(s,this.indexSet_)}removeFromIndexes(e,n){const s=bi(this.indexes_,i=>{if(i===Mn)return i;{const r=n.get(e.name);return r?i.remove(new ee(e.name,r)):i}});return new Ct(s,this.indexSet_)}}/**
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
 */let cs;class ne{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&uh(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return cs||(cs=new ne(new Fe(ha),null,Ct.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||cs}updatePriority(e){return this.children_.isEmpty()?this:new ne(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?cs:n}}getChild(e){const n=J(e);return n===null?this:this.getImmediateChild(n).getChild(ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ee(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?cs:this.priorityNode_;return new ne(i,o,r)}}updateChild(e,n){const s=J(e);if(s===null)return n;{R(J(e)!==".priority"||en(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ue(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Pe,(o,a)=>{n[o]=a.val(e),s++,r&&ne.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ch(this.getPriority().val())+":"),this.forEachChild(Pe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Mf(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ee(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ee(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ee.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ee.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Vs?-1:0}withIndex(e){if(e===Kn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ne(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Kn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Pe),i=n.getIterator(Pe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Kn?null:this.indexMap_.get(e.toString())}}ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class hw extends ne{constructor(){super(new Fe(ha),ne.EMPTY_NODE,Ct.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ne.EMPTY_NODE}isEmpty(){return!1}}const Vs=new hw;Object.defineProperties(ee,{MIN:{value:new ee(Yn,ne.EMPTY_NODE)},MAX:{value:new ee(Sn,Vs)}});lh.__EMPTY_NODE=ne.EMPTY_NODE;be.__childrenNodeConstructor=ne;ow(Vs);lw(Vs);/**
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
 */const dw=!0;function Ie(t,e=null){if(t===null)return ne.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new be(n,Ie(e))}if(!(t instanceof Array)&&dw){const n=[];let s=!1;if(Qe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ie(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ee(o,l)))}}),n.length===0)return ne.EMPTY_NODE;const r=Si(n,rw,o=>o.name,ha);if(s){const o=Si(n,Pe.getCompare());return new ne(r,Ie(e),new Ct({".priority":o},{".priority":Pe}))}else return new ne(r,Ie(e),Ct.Default)}else{let n=ne.EMPTY_NODE;return Qe(t,(s,i)=>{if(Pt(t,s)&&s.substring(0,1)!=="."){const r=Ie(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ie(e))}}aw(Ie);/**
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
 */class pw extends Zi{constructor(e){super(),this.indexPath_=e,R(!X(e)&&J(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Xn(e.name,n.name):r}makePost(e,n){const s=Ie(e),i=ne.EMPTY_NODE.updateChild(this.indexPath_,s);return new ee(n,i)}maxPost(){const e=ne.EMPTY_NODE.updateChild(this.indexPath_,Vs);return new ee(Sn,e)}toString(){return ih(this.indexPath_,0).join("/")}}/**
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
 */class mw extends Zi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Xn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ee.MIN}maxPost(){return ee.MAX}makePost(e,n){const s=Ie(e);return new ee(n,s)}toString(){return".value"}}const gw=new mw;/**
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
 */function _w(t){return{type:"value",snapshotNode:t}}function yw(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function vw(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function fc(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function bw(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class da{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Pe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Yn}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Sn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Pe}copy(){const e=new da;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function hc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Pe?n="$priority":t.index_===gw?n="$value":t.index_===Kn?n="$key":(R(t.index_ instanceof pw,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Te(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Te(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Te(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Te(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Te(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function dc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Pe&&(e.i=t.index_.toString()),e}/**
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
 */class Ti extends th{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ws("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ti.getListenId_(e,s),a={};this.listens_[o]=a;const l=hc(e._queryParams);this.restRequest_(r+".json",l,(c,f)=>{let u=f;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,s),zn(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Ti.getListenId_(e,n);delete this.listens_[s]}get(e){const n=hc(e._queryParams),s=e._path.toString(),i=new Qi;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Qy(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=xs(a.responseText)}catch{Be("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Be("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class ww{constructor(){this.rootNode_=ne.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ri(){return{value:null,children:new Map}}function dh(t,e,n){if(X(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=J(e);t.children.has(s)||t.children.set(s,Ri());const i=t.children.get(s);e=ue(e),dh(i,e,n)}}function vo(t,e,n){t.value!==null?n(e,t.value):Ew(t,(s,i)=>{const r=new fe(e.toString()+"/"+s);vo(i,r,n)})}function Ew(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Cw{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Qe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const pc=10*1e3,Iw=30*1e3,Sw=5*60*1e3;class Tw{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Cw(e);const s=pc+(Iw-pc)*Math.random();vs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Qe(e,(i,r)=>{r>0&&Pt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),vs(this.reportStats_.bind(this),Math.floor(Math.random()*2*Sw))}}/**
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
 */var mt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(mt||(mt={}));function ph(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function mh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function gh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ai{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=mt.ACK_USER_WRITE,this.source=ph()}operationForChild(e){if(X(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new fe(e));return new Ai(re(),n,this.revert)}}else return R(J(this.path)===e,"operationForChild called for unrelated child."),new Ai(ue(this.path),this.affectedTree,this.revert)}}/**
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
 */class Tn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=mt.OVERWRITE}operationForChild(e){return X(this.path)?new Tn(this.source,re(),this.snap.getImmediateChild(e)):new Tn(this.source,ue(this.path),this.snap)}}/**
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
 */class ks{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=mt.MERGE}operationForChild(e){if(X(this.path)){const n=this.children.subtree(new fe(e));return n.isEmpty()?null:n.value?new Tn(this.source,re(),n.value):new ks(this.source,re(),n)}else return R(J(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ks(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class pa{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(X(e))return this.isFullyInitialized()&&!this.filtered_;const n=J(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Rw(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(bw(o.childName,o.snapshotNode))}),us(t,i,"child_removed",e,s,n),us(t,i,"child_added",e,s,n),us(t,i,"child_moved",r,s,n),us(t,i,"child_changed",e,s,n),us(t,i,"value",e,s,n),i}function us(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Ow(t,a,l)),o.forEach(a=>{const l=Aw(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Aw(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Ow(t,e,n){if(e.childName==null||n.childName==null)throw Jn("Should only compare child_ events.");const s=new ee(e.childName,e.snapshotNode),i=new ee(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function _h(t,e){return{eventCache:t,serverCache:e}}function bs(t,e,n,s){return _h(new pa(e,n,s),t.serverCache)}function yh(t,e,n,s){return _h(t.eventCache,new pa(e,n,s))}function bo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Rn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Tr;const xw=()=>(Tr||(Tr=new Fe(gb)),Tr);class ce{constructor(e,n=xw()){this.value=e,this.children=n}static fromObject(e){let n=new ce(null);return Qe(e,(s,i)=>{n=n.set(new fe(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:re(),value:this.value};if(X(e))return null;{const s=J(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ue(e),n);return r!=null?{path:_e(new fe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(X(e))return this;{const n=J(e),s=this.children.get(n);return s!==null?s.subtree(ue(e)):new ce(null)}}set(e,n){if(X(e))return new ce(n,this.children);{const s=J(e),r=(this.children.get(s)||new ce(null)).set(ue(e),n),o=this.children.insert(s,r);return new ce(this.value,o)}}remove(e){if(X(e))return this.children.isEmpty()?new ce(null):new ce(null,this.children);{const n=J(e),s=this.children.get(n);if(s){const i=s.remove(ue(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ce(null):new ce(this.value,r)}else return this}}get(e){if(X(e))return this.value;{const n=J(e),s=this.children.get(n);return s?s.get(ue(e)):null}}setTree(e,n){if(X(e))return n;{const s=J(e),r=(this.children.get(s)||new ce(null)).setTree(ue(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ce(this.value,o)}}fold(e){return this.fold_(re(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(_e(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,re(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(X(e))return null;{const r=J(e),o=this.children.get(r);return o?o.findOnPath_(ue(e),_e(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,re(),n)}foreachOnPath_(e,n,s){if(X(e))return this;{this.value&&s(n,this.value);const i=J(e),r=this.children.get(i);return r?r.foreachOnPath_(ue(e),_e(n,i),s):new ce(null)}}foreach(e){this.foreach_(re(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(_e(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class lt{constructor(e){this.writeTree_=e}static empty(){return new lt(new ce(null))}}function ws(t,e,n){if(X(e))return new lt(new ce(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ye(i,e);return r=r.updateChild(o,n),new lt(t.writeTree_.set(i,r))}else{const i=new ce(n),r=t.writeTree_.setTree(e,i);return new lt(r)}}}function mc(t,e,n){let s=t;return Qe(n,(i,r)=>{s=ws(s,_e(e,i),r)}),s}function gc(t,e){if(X(e))return lt.empty();{const n=t.writeTree_.setTree(e,new ce(null));return new lt(n)}}function wo(t,e){return Nn(t,e)!=null}function Nn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ye(n.path,e)):null}function _c(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Pe,(s,i)=>{e.push(new ee(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ee(s,i.value))}),e}function Gt(t,e){if(X(e))return t;{const n=Nn(t,e);return n!=null?new lt(new ce(n)):new lt(t.writeTree_.subtree(e))}}function Eo(t){return t.writeTree_.isEmpty()}function Qn(t,e){return vh(re(),t.writeTree_,e)}function vh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(R(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=vh(_e(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(_e(t,".priority"),s)),n}}/**
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
 */function bh(t,e){return Sh(e,t)}function Nw(t,e,n,s,i){R(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ws(t.visibleWrites,e,n)),t.lastWriteId=s}function Pw(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function kw(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Dw(a,s.path)?i=!1:rt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Mw(t),!0;if(s.snap)t.visibleWrites=gc(t.visibleWrites,s.path);else{const a=s.children;Qe(a,l=>{t.visibleWrites=gc(t.visibleWrites,_e(s.path,l))})}return!0}else return!1}function Dw(t,e){if(t.snap)return rt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&rt(_e(t.path,n),e))return!0;return!1}function Mw(t){t.visibleWrites=wh(t.allWrites,Lw,re()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Lw(t){return t.visible}function wh(t,e,n){let s=lt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)rt(n,o)?(a=Ye(n,o),s=ws(s,a,r.snap)):rt(o,n)&&(a=Ye(o,n),s=ws(s,re(),r.snap.getChild(a)));else if(r.children){if(rt(n,o))a=Ye(n,o),s=mc(s,a,r.children);else if(rt(o,n))if(a=Ye(o,n),X(a))s=mc(s,re(),r.children);else{const l=zn(r.children,J(a));if(l){const c=l.getChild(ue(a));s=ws(s,re(),c)}}}else throw Jn("WriteRecord should have .snap or .children")}}return s}function Eh(t,e,n,s,i){if(!s&&!i){const r=Nn(t.visibleWrites,e);if(r!=null)return r;{const o=Gt(t.visibleWrites,e);if(Eo(o))return n;if(n==null&&!wo(o,re()))return null;{const a=n||ne.EMPTY_NODE;return Qn(o,a)}}}else{const r=Gt(t.visibleWrites,e);if(!i&&Eo(r))return n;if(!i&&n==null&&!wo(r,re()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(rt(c.path,e)||rt(e,c.path))},a=wh(t.allWrites,o,e),l=n||ne.EMPTY_NODE;return Qn(a,l)}}}function $w(t,e,n){let s=ne.EMPTY_NODE;const i=Nn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Pe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Gt(t.visibleWrites,e);return n.forEachChild(Pe,(o,a)=>{const l=Qn(Gt(r,new fe(o)),a);s=s.updateImmediateChild(o,l)}),_c(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Gt(t.visibleWrites,e);return _c(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Fw(t,e,n,s,i){R(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=_e(e,n);if(wo(t.visibleWrites,r))return null;{const o=Gt(t.visibleWrites,r);return Eo(o)?i.getChild(n):Qn(o,i.getChild(n))}}function Bw(t,e,n,s){const i=_e(e,n),r=Nn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Gt(t.visibleWrites,i);return Qn(o,s.getNode().getImmediateChild(n))}else return null}function Uw(t,e){return Nn(t.visibleWrites,e)}function jw(t,e,n,s,i,r,o){let a;const l=Gt(t.visibleWrites,e),c=Nn(l,re());if(c!=null)a=c;else if(n!=null)a=Qn(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const f=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let m=d.getNext();for(;m&&f.length<i;)u(m,s)!==0&&f.push(m),m=d.getNext();return f}else return[]}function Hw(){return{visibleWrites:lt.empty(),allWrites:[],lastWriteId:-1}}function Co(t,e,n,s){return Eh(t.writeTree,t.treePath,e,n,s)}function Ch(t,e){return $w(t.writeTree,t.treePath,e)}function yc(t,e,n,s){return Fw(t.writeTree,t.treePath,e,n,s)}function Oi(t,e){return Uw(t.writeTree,_e(t.treePath,e))}function Ww(t,e,n,s,i,r){return jw(t.writeTree,t.treePath,e,n,s,i,r)}function ma(t,e,n){return Bw(t.writeTree,t.treePath,e,n)}function Ih(t,e){return Sh(_e(t.treePath,e),t.writeTree)}function Sh(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Vw{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,fc(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,vw(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,yw(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,fc(s,e.snapshotNode,i.oldSnap));else throw Jn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Kw{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Th=new Kw;class ga{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new pa(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ma(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Rn(this.viewCache_),r=Ww(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function Gw(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function qw(t,e,n,s,i){const r=new Vw;let o,a;if(n.type===mt.OVERWRITE){const c=n;c.source.fromUser?o=Io(t,e,c.path,c.snap,s,i,r):(R(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!X(c.path),o=xi(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===mt.MERGE){const c=n;c.source.fromUser?o=Yw(t,e,c.path,c.children,s,i,r):(R(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=So(t,e,c.path,c.children,s,i,a,r))}else if(n.type===mt.ACK_USER_WRITE){const c=n;c.revert?o=Xw(t,e,c.path,s,i,r):o=Qw(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===mt.LISTEN_COMPLETE)o=Jw(t,e,n.path,s,r);else throw Jn("Unknown operation type: "+n.type);const l=r.getChanges();return zw(e,o,l),{viewCache:o,changes:l}}function zw(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=bo(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(_w(bo(e)))}}function Rh(t,e,n,s,i,r){const o=e.eventCache;if(Oi(s,n)!=null)return e;{let a,l;if(X(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Rn(e),f=c instanceof ne?c:ne.EMPTY_NODE,u=Ch(s,f);a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=Co(s,Rn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=J(n);if(c===".priority"){R(en(n)===1,"Can't have a priority with additional path components");const f=o.getNode();l=e.serverCache.getNode();const u=yc(s,n,f,l);u!=null?a=t.filter.updatePriority(f,u):a=o.getNode()}else{const f=ue(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=yc(s,n,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(f,d):u=o.getNode().getImmediateChild(c)}else u=ma(s,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,f,i,r):a=o.getNode()}}return bs(e,a,o.isFullyInitialized()||X(n),t.filter.filtersNodes())}}function xi(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const f=o?t.filter:t.filter.getIndexedFilter();if(X(n))c=f.updateFullNode(l.getNode(),s,null);else if(f.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,s);c=f.updateFullNode(l.getNode(),m,null)}else{const m=J(n);if(!l.isCompleteForPath(n)&&en(n)>1)return e;const y=ue(n),D=l.getNode().getImmediateChild(m).updateChild(y,s);m===".priority"?c=f.updatePriority(l.getNode(),D):c=f.updateChild(l.getNode(),m,D,y,Th,null)}const u=yh(e,c,l.isFullyInitialized()||X(n),f.filtersNodes()),d=new ga(i,u,r);return Rh(t,u,n,i,d,a)}function Io(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const f=new ga(i,e,r);if(X(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=bs(e,c,!0,t.filter.filtersNodes());else{const u=J(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=bs(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ue(n),m=a.getNode().getImmediateChild(u);let y;if(X(d))y=s;else{const A=f.getCompleteChild(u);A!=null?sh(d)===".priority"&&A.getChild(rh(d)).isEmpty()?y=A:y=A.updateChild(d,s):y=ne.EMPTY_NODE}if(m.equals(y))l=e;else{const A=t.filter.updateChild(a.getNode(),u,y,d,f,o);l=bs(e,A,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function vc(t,e){return t.eventCache.isCompleteForChild(e)}function Yw(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const f=_e(n,l);vc(e,J(f))&&(a=Io(t,a,f,c,i,r,o))}),s.foreach((l,c)=>{const f=_e(n,l);vc(e,J(f))||(a=Io(t,a,f,c,i,r,o))}),a}function bc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function So(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;X(n)?c=s:c=new ce(null).setTree(n,s);const f=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(f.hasChild(u)){const m=e.serverCache.getNode().getImmediateChild(u),y=bc(t,m,d);l=xi(t,l,new fe(u),y,i,r,o,a)}}),c.children.inorderTraversal((u,d)=>{const m=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!f.hasChild(u)&&!m){const y=e.serverCache.getNode().getImmediateChild(u),A=bc(t,y,d);l=xi(t,l,new fe(u),A,i,r,o,a)}}),l}function Qw(t,e,n,s,i,r,o){if(Oi(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(X(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return xi(t,e,n,l.getNode().getChild(n),i,r,a,o);if(X(n)){let c=new ce(null);return l.getNode().forEachChild(Kn,(f,u)=>{c=c.set(new fe(f),u)}),So(t,e,n,c,i,r,a,o)}else return e}else{let c=new ce(null);return s.foreach((f,u)=>{const d=_e(n,f);l.isCompleteForPath(d)&&(c=c.set(f,l.getNode().getChild(d)))}),So(t,e,n,c,i,r,a,o)}}function Jw(t,e,n,s,i){const r=e.serverCache,o=yh(e,r.getNode(),r.isFullyInitialized()||X(n),r.isFiltered());return Rh(t,o,n,s,Th,i)}function Xw(t,e,n,s,i,r){let o;if(Oi(s,n)!=null)return e;{const a=new ga(s,e,i),l=e.eventCache.getNode();let c;if(X(n)||J(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Co(s,Rn(e));else{const u=e.serverCache.getNode();R(u instanceof ne,"serverChildren would be complete if leaf node"),f=Ch(s,u)}f=f,c=t.filter.updateFullNode(l,f,r)}else{const f=J(n);let u=ma(s,f,e.serverCache);u==null&&e.serverCache.isCompleteForChild(f)&&(u=l.getImmediateChild(f)),u!=null?c=t.filter.updateChild(l,f,u,ue(n),a,r):e.eventCache.getNode().hasChild(f)?c=t.filter.updateChild(l,f,ne.EMPTY_NODE,ue(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Co(s,Rn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Oi(s,re())!=null,bs(e,c,o,t.filter.filtersNodes())}}function Zw(t,e){const n=Rn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!X(e)&&!n.getImmediateChild(J(e)).isEmpty())?n.getChild(e):null}function wc(t,e,n,s){e.type===mt.MERGE&&e.source.queryId!==null&&(R(Rn(t.viewCache_),"We should always have a full cache before handling merges"),R(bo(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=qw(t.processor_,i,e,n,s);return Gw(t.processor_,r.viewCache),R(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,eE(t,r.changes,r.viewCache.eventCache.getNode(),null)}function eE(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Rw(t.eventGenerator_,e,n,i)}/**
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
 */let Ec;function tE(t){R(!Ec,"__referenceConstructor has already been defined"),Ec=t}function _a(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return R(r!=null,"SyncTree gave us an op for an invalid query."),wc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(wc(o,e,n,s));return r}}function ya(t,e){let n=null;for(const s of t.views.values())n=n||Zw(s,e);return n}/**
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
 */let Cc;function nE(t){R(!Cc,"__referenceConstructor has already been defined"),Cc=t}class Ic{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ce(null),this.pendingWriteTree_=Hw(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ah(t,e,n,s,i){return Nw(t.pendingWriteTree_,e,n,s,i),i?tr(t,new Tn(ph(),e,n)):[]}function hn(t,e,n=!1){const s=Pw(t.pendingWriteTree_,e);if(kw(t.pendingWriteTree_,e)){let r=new ce(null);return s.snap!=null?r=r.set(re(),!0):Qe(s.children,o=>{r=r.set(new fe(o),!0)}),tr(t,new Ai(s.path,r,n))}else return[]}function er(t,e,n){return tr(t,new Tn(mh(),e,n))}function sE(t,e,n){const s=ce.fromObject(n);return tr(t,new ks(mh(),e,s))}function iE(t,e,n,s){const i=Nh(t,s);if(i!=null){const r=Ph(i),o=r.path,a=r.queryId,l=Ye(o,e),c=new Tn(gh(a),l,n);return kh(t,o,c)}else return[]}function rE(t,e,n,s){const i=Nh(t,s);if(i){const r=Ph(i),o=r.path,a=r.queryId,l=Ye(o,e),c=ce.fromObject(n),f=new ks(gh(a),l,c);return kh(t,o,f)}else return[]}function va(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ye(o,e),c=ya(a,l);if(c)return c});return Eh(i,e,r,n,!0)}function tr(t,e){return Oh(e,t.syncPointTree_,null,bh(t.pendingWriteTree_,re()))}function Oh(t,e,n,s){if(X(t.path))return xh(t,e,n,s);{const i=e.get(re());n==null&&i!=null&&(n=ya(i,re()));let r=[];const o=J(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,f=Ih(s,o);r=r.concat(Oh(a,l,c,f))}return i&&(r=r.concat(_a(i,t,s,n))),r}}function xh(t,e,n,s){const i=e.get(re());n==null&&i!=null&&(n=ya(i,re()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Ih(s,o),f=t.operationForChild(o);f&&(r=r.concat(xh(f,a,l,c)))}),i&&(r=r.concat(_a(i,t,s,n))),r}function Nh(t,e){return t.tagToQueryMap.get(e)}function Ph(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new fe(t.substr(0,e))}}function kh(t,e,n){const s=t.syncPointTree_.get(e);R(s,"Missing sync point for query tag that we're tracking");const i=bh(t.pendingWriteTree_,e);return _a(s,n,i,null)}/**
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
 */class ba{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ba(n)}node(){return this.node_}}class wa{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=_e(this.path_,e);return new wa(this.syncTree_,n)}node(){return va(this.syncTree_,this.path_)}}const oE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Sc=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return aE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return lE(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},aE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},lE=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&R(!1,"Unexpected increment value: "+s);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},cE=function(t,e,n,s){return Ea(e,new wa(n,t),s)},Dh=function(t,e,n){return Ea(t,new ba(e),n)};function Ea(t,e,n){const s=t.getPriority().val(),i=Sc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Sc(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new be(a,Ie(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new be(i))),o.forEachChild(Pe,(a,l)=>{const c=Ea(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Ca{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ia(t,e){let n=e instanceof fe?e:new fe(e),s=t,i=J(n);for(;i!==null;){const r=zn(s.node.children,i)||{children:{},childCount:0};s=new Ca(i,s,r),n=ue(n),i=J(n)}return s}function es(t){return t.node.value}function Mh(t,e){t.node.value=e,To(t)}function Lh(t){return t.node.childCount>0}function uE(t){return es(t)===void 0&&!Lh(t)}function nr(t,e){Qe(t.node.children,(n,s)=>{e(new Ca(n,t,s))})}function $h(t,e,n,s){n&&!s&&e(t),nr(t,i=>{$h(i,e,!0,s)}),n&&s&&e(t)}function fE(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ks(t){return new fe(t.parent===null?t.name:Ks(t.parent)+"/"+t.name)}function To(t){t.parent!==null&&hE(t.parent,t.name,t)}function hE(t,e,n){const s=uE(n),i=Pt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,To(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,To(t))}/**
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
 */const dE=/[\[\].#$\/\u0000-\u001F\u007F]/,pE=/[\[\].#$\u0000-\u001F\u007F]/,Rr=10*1024*1024,Fh=function(t){return typeof t=="string"&&t.length!==0&&!dE.test(t)},Bh=function(t){return typeof t=="string"&&t.length!==0&&!pE.test(t)},mE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Bh(t)},Uh=function(t,e,n,s){s&&e===void 0||Sa(ia(t,"value"),e,n)},Sa=function(t,e,n){const s=n instanceof fe?new Jb(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+un(s));if(typeof e=="function")throw new Error(t+"contains a function "+un(s)+" with contents = "+e.toString());if(Lf(e))throw new Error(t+"contains "+e.toString()+" "+un(s));if(typeof e=="string"&&e.length>Rr/3&&Xi(e)>Rr)throw new Error(t+"contains a string greater than "+Rr+" utf8 bytes "+un(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Qe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Fh(o)))throw new Error(t+" contains an invalid key ("+o+") "+un(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Xb(s,o),Sa(t,a,s),Zb(s)}),i&&r)throw new Error(t+' contains ".value" child '+un(s)+" in addition to actual children.")}},jh=function(t,e,n,s){if(!(s&&n===void 0)&&!Bh(n))throw new Error(ia(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},gE=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),jh(t,e,n,s)},Hh=function(t,e){if(J(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},_E=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Fh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!mE(n))throw new Error(ia(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class yE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Wh(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!oh(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ot(t,e,n){Wh(t,n),vE(t,s=>rt(s,e)||rt(e,s))}function vE(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(bE(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function bE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();En&&Ae("event: "+n.toString()),Zn(s)}}}/**
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
 */const wE="repo_interrupt",EE=25;class CE{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new yE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ri(),this.transactionQueueTree_=new Ca,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function IE(t,e,n){if(t.stats_=ca(t.repoInfo_),t.forceRestClient_||Eb())t.server_=new Ti(t.repoInfo_,(s,i,r,o)=>{Tc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Rc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Te(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Tt(t.repoInfo_,e,(s,i,r,o)=>{Tc(t,s,i,r,o)},s=>{Rc(t,s)},s=>{SE(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Rb(t.repoInfo_,()=>new Tw(t.stats_,t.server_)),t.infoData_=new ww,t.infoSyncTree_=new Ic({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=er(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ra(t,"connected",!1),t.serverSyncTree_=new Ic({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Ot(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Vh(t){const n=t.infoData_.getNode(new fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ta(t){return oE({timestamp:Vh(t)})}function Tc(t,e,n,s,i){t.dataUpdateCount++;const r=new fe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=bi(n,c=>Ie(c));o=rE(t.serverSyncTree_,r,l,i)}else{const l=Ie(n);o=iE(t.serverSyncTree_,r,l,i)}else if(s){const l=bi(n,c=>Ie(c));o=sE(t.serverSyncTree_,r,l)}else{const l=Ie(n);o=er(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=sr(t,r)),Ot(t.eventQueue_,a,o)}function Rc(t,e){Ra(t,"connected",e),e===!1&&RE(t)}function SE(t,e){Qe(e,(n,s)=>{Ra(t,n,s)})}function Ra(t,e,n){const s=new fe("/.info/"+e),i=Ie(n);t.infoData_.updateSnapshot(s,i);const r=er(t.infoSyncTree_,s,i);Ot(t.eventQueue_,s,r)}function Kh(t){return t.nextWriteId_++}function TE(t,e,n,s,i){Aa(t,"set",{path:e.toString(),value:n,priority:s});const r=Ta(t),o=Ie(n,s),a=va(t.serverSyncTree_,e),l=Dh(o,a,r),c=Kh(t),f=Ah(t.serverSyncTree_,e,l,c,!0);Wh(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(d,m)=>{const y=d==="ok";y||Be("set at "+e+" failed: "+d);const A=hn(t.serverSyncTree_,c,!y);Ot(t.eventQueue_,e,A),OE(t,i,d,m)});const u=Qh(t,e);sr(t,u),Ot(t.eventQueue_,u,[])}function RE(t){Aa(t,"onDisconnectEvents");const e=Ta(t),n=Ri();vo(t.onDisconnect_,re(),(i,r)=>{const o=cE(i,r,t.serverSyncTree_,e);dh(n,i,o)});let s=[];vo(n,re(),(i,r)=>{s=s.concat(er(t.serverSyncTree_,i,r));const o=Qh(t,i);sr(t,o)}),t.onDisconnect_=Ri(),Ot(t.eventQueue_,re(),s)}function AE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(wE)}function Aa(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ae(n,...e)}function OE(t,e,n,s){e&&Zn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Gh(t,e,n){return va(t.serverSyncTree_,e,n)||ne.EMPTY_NODE}function Oa(t,e=t.transactionQueueTree_){if(e||ir(t,e),es(e)){const n=zh(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&xE(t,Ks(e),n)}else Lh(e)&&nr(e,n=>{Oa(t,n)})}function xE(t,e,n){const s=n.map(c=>c.currentWriteId),i=Gh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const f=n[c];R(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const u=Ye(e,f.path);r=r.updateChild(u,f.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Aa(t,"transaction put response",{path:l.toString(),status:c});let f=[];if(c==="ok"){const u=[];for(let d=0;d<n.length;d++)n[d].status=2,f=f.concat(hn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&u.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();ir(t,Ia(t.transactionQueueTree_,e)),Oa(t,t.transactionQueueTree_),Ot(t.eventQueue_,e,f);for(let d=0;d<u.length;d++)Zn(u[d])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{Be("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}sr(t,e)}},o)}function sr(t,e){const n=qh(t,e),s=Ks(n),i=zh(t,n);return NE(t,i,s),s}function NE(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ye(n,l.path);let f=!1,u;if(R(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)f=!0,u=l.abortReason,i=i.concat(hn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=EE)f=!0,u="maxretry",i=i.concat(hn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Gh(t,l.path,o);l.currentInputSnapshot=d;const m=e[a].update(d.val());if(m!==void 0){Sa("transaction failed: Data returned ",m,l.path);let y=Ie(m);typeof m=="object"&&m!=null&&Pt(m,".priority")||(y=y.updatePriority(d.getPriority()));const D=l.currentWriteId,P=Ta(t),M=Dh(y,d,P);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=M,l.currentWriteId=Kh(t),o.splice(o.indexOf(D),1),i=i.concat(Ah(t.serverSyncTree_,l.path,M,l.currentWriteId,l.applyLocally)),i=i.concat(hn(t.serverSyncTree_,D,!0))}else f=!0,u="nodata",i=i.concat(hn(t.serverSyncTree_,l.currentWriteId,!0))}Ot(t.eventQueue_,n,i),i=[],f&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(u),!1,null))))}ir(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Zn(s[a]);Oa(t,t.transactionQueueTree_)}function qh(t,e){let n,s=t.transactionQueueTree_;for(n=J(e);n!==null&&es(s)===void 0;)s=Ia(s,n),e=ue(e),n=J(e);return s}function zh(t,e){const n=[];return Yh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Yh(t,e,n){const s=es(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);nr(e,i=>{Yh(t,i,n)})}function ir(t,e){const n=es(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Mh(e,n.length>0?n:void 0)}nr(e,s=>{ir(t,s)})}function Qh(t,e){const n=Ks(qh(t,e)),s=Ia(t.transactionQueueTree_,e);return fE(s,i=>{Ar(t,i)}),Ar(t,s),$h(s,i=>{Ar(t,i)}),n}function Ar(t,e){const n=es(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(hn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Mh(e,void 0):n.length=r+1,Ot(t.eventQueue_,Ks(e),i);for(let o=0;o<s.length;o++)Zn(s[o])}}/**
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
 */function PE(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function kE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Be(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ac=function(t,e){const n=DE(t),s=n.namespace;n.domain==="firebase.com"&&At(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&At("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||pb();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new zf(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new fe(n.pathString)}},DE=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let f=t.indexOf("/");f===-1&&(f=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(f,u)),f<u&&(i=PE(t.substring(f,u)));const d=kE(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const y=e.indexOf(".");s=e.substring(0,y).toLowerCase(),n=e.substring(y+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const Oc="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",ME=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Oc.charAt(n%64),n=Math.floor(n/64);R(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Oc.charAt(e[i]);return R(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class xa{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return X(this._path)?null:sh(this._path)}get ref(){return new Pn(this._repo,this._path)}get _queryIdentifier(){const e=dc(this._queryParams),n=aa(e);return n==="{}"?"default":n}get _queryObject(){return dc(this._queryParams)}isEqual(e){if(e=sn(e),!(e instanceof xa))return!1;const n=this._repo===e._repo,s=oh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Qb(this._path)}}class Pn extends xa{constructor(e,n){super(e,n,new da,!1)}get parent(){const e=rh(this._path);return e===null?null:new Pn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function LE(t,e){return t=sn(t),t._checkNotDeleted("ref"),e!==void 0?Ro(t._root,e):t._root}function Ro(t,e){return t=sn(t),J(t._path)===null?gE("child","path",e,!1):jh("child","path",e,!1),new Pn(t._repo,_e(t._path,e))}function $E(t,e){t=sn(t),Hh("push",t._path),Uh("push",e,t._path,!0);const n=Vh(t._repo),s=ME(n),i=Ro(t,s),r=Ro(t,s);let o;return e!=null?o=Jh(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Jh(t,e){t=sn(t),Hh("set",t._path),Uh("set",e,t._path,!1);const n=new Qi;return TE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}tE(Pn);nE(Pn);/**
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
 */const FE="FIREBASE_DATABASE_EMULATOR_HOST",Ao={};let BE=!1;function UE(t,e,n,s){t.repoInfo_=new zf(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function jE(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||At("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ae("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ac(r,i),a=o.repoInfo,l,c;typeof process<"u"&&zl&&(c=zl[FE]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Ac(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const f=i&&l?new Vn(Vn.OWNER):new Ib(t.name,t.options,e);_E("Invalid Firebase Database URL",o),X(o.path)||At("Database URL must point to the root of a Firebase Database (not including a child path).");const u=WE(a,t,f,new Cb(t.name,n));return new VE(u,t)}function HE(t,e){const n=Ao[e];(!n||n[t.key]!==t)&&At(`Database ${e}(${t.repoInfo_}) has already been deleted.`),AE(t),delete n[t.key]}function WE(t,e,n,s){let i=Ao[e.name];i||(i={},Ao[e.name]=i);let r=i[t.toURLString()];return r&&At("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new CE(t,BE,n,s),i[t.toURLString()]=r,r}class VE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(IE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Pn(this._repo,re())),this._rootInternal}_delete(){return this._rootInternal!==null&&(HE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&At("Cannot call "+e+" on a deleted database.")}}function Xh(t=xf(),e){const n=js(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=By("database");s&&KE(n,...s)}return n}function KE(t,e,n,s={}){t=sn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&At("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&At('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Vn(Vn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Uy(s.mockUserToken,t.app.options.projectId);r=new Vn(o)}UE(i,e,n,r)}/**
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
 */function GE(t){cb(Zv),Zt(new Rt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return jE(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),_t(Yl,Ql,t),_t(Yl,Ql,"esm2017")}Tt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Tt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};GE();const rr=t=>(Eu("data-v-4896eafd"),t=t(),Cu(),t),qE=rr(()=>He("div",{class:"footer-social"},[He("h2",null,"Follow us on Facebook"),He("a",{href:"https://www.facebook.com/profile.php?id=61555159784777",target:"_blank"},[He("i",{class:"fa-brands fa-square-facebook"})])],-1)),zE={class:"subscribe-form"},YE=rr(()=>He("label",null,"Subscribe to the ISK Newsletter",-1)),QE=rr(()=>He("input",{class:"form-control",name:"signupemail",placeholder:"Enter Email Address"},null,-1)),JE=rr(()=>He("button",{class:"btn",type:"submit"},"Subscribe",-1)),XE=[YE,QE,JE],ZE=t=>{t.preventDefault();const e=Xh(),n=t.target.signupemail.value,s=LE(e,"emails"),i=$E(s);Jh(i,{emailAddress:n})},eC={__name:"Footer",setup(t){return(e,n)=>(Fs(),Ki("footer",null,[qE,He("div",zE,[He("form",{onSubmit:xg(ZE,["prevent"])},[...XE],32)])]))}},tC=Us(eC,[["__scopeId","data-v-4896eafd"],["__file","/Users/mattday/Desktop/Coding/IndianSpringsKatahdins/src/components/Footer.vue"]]),nC={__name:"HomeView",setup(t){return(e,n)=>(Fs(),Ki(et,null,[Ne(wy),He("main",null,[Ne(Oy)]),Ne(tC)],64))}},sC=Us(nC,[["__file","/Users/mattday/Desktop/Coding/IndianSpringsKatahdins/src/views/HomeView.vue"]]),iC=cy({history:c_("/"),routes:[{path:"/",name:"home",component:sC},{path:"/about",name:"about",component:()=>ti(()=>import("./AboutView-69wr9lOm.js"),__vite__mapDeps([0,1]))},{path:"/recipes",name:"recipes",component:()=>ti(()=>import("./RecipeView-DY7mcWKt.js"),__vite__mapDeps([]))},{path:"/contact",name:"contact",component:()=>ti(()=>import("./ContactView-VP7Fczo5.js"),__vite__mapDeps([2,3]))},{path:"/menu",name:"menu",component:()=>ti(()=>import("./MenuView-YL23mzw7.js"),__vite__mapDeps([]))}]});var rC="firebase",oC="10.7.2";/**
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
 */_t(rC,oC,"app");const aC=(t,e)=>e.some(n=>t instanceof n);let xc,Nc;function lC(){return xc||(xc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cC(){return Nc||(Nc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zh=new WeakMap,Oo=new WeakMap,ed=new WeakMap,Or=new WeakMap,Na=new WeakMap;function uC(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(qt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Zh.set(n,t)}).catch(()=>{}),Na.set(e,t),e}function fC(t){if(Oo.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Oo.set(t,e)}let xo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Oo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ed.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hC(t){xo=t(xo)}function dC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(xr(this),e,...n);return ed.set(s,e.sort?e.sort():[e]),qt(s)}:cC().includes(t)?function(...e){return t.apply(xr(this),e),qt(Zh.get(this))}:function(...e){return qt(t.apply(xr(this),e))}}function pC(t){return typeof t=="function"?dC(t):(t instanceof IDBTransaction&&fC(t),aC(t,lC())?new Proxy(t,xo):t)}function qt(t){if(t instanceof IDBRequest)return uC(t);if(Or.has(t))return Or.get(t);const e=pC(t);return e!==t&&(Or.set(t,e),Na.set(e,t)),e}const xr=t=>Na.get(t);function mC(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=qt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(qt(o.result),l.oldVersion,l.newVersion,qt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const gC=["get","getKey","getAll","getAllKeys","count"],_C=["put","add","delete","clear"],Nr=new Map;function Pc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nr.get(e))return Nr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=_C.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||gC.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Nr.set(e,r),r}hC(t=>({...t,get:(e,n,s)=>Pc(e,n)||t.get(e,n,s),has:(e,n)=>!!Pc(e,n)||t.has(e,n)}));const td="@firebase/installations",Pa="0.6.4";/**
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
 */const nd=1e4,sd=`w:${Pa}`,id="FIS_v2",yC="https://firebaseinstallations.googleapis.com/v1",vC=60*60*1e3,bC="installations",wC="Installations";/**
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
 */const EC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},An=new Ji(bC,wC,EC);function rd(t){return t instanceof xn&&t.code.includes("request-failed")}/**
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
 */function od({projectId:t}){return`${yC}/projects/${t}/installations`}function ad(t){return{token:t.token,requestStatus:2,expiresIn:IC(t.expiresIn),creationTime:Date.now()}}async function ld(t,e){const s=(await e.json()).error;return An.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function cd({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function CC(t,{refreshToken:e}){const n=cd(t);return n.append("Authorization",SC(e)),n}async function ud(t){const e=await t();return e.status>=500&&e.status<600?t():e}function IC(t){return Number(t.replace("s","000"))}function SC(t){return`${id} ${t}`}/**
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
 */async function TC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=od(t),i=cd(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:id,appId:t.appId,sdkVersion:sd},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await ud(()=>fetch(s,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:ad(c.authToken)}}else throw await ld("Create Installation",l)}/**
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
 */function fd(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function RC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const AC=/^[cdef][\w-]{21}$/,No="";function OC(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=xC(t);return AC.test(n)?n:No}catch{return No}}function xC(t){return RC(t).substr(0,22)}/**
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
 */function or(t){return`${t.appName}!${t.appId}`}/**
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
 */const hd=new Map;function dd(t,e){const n=or(t);pd(n,e),NC(n,e)}function pd(t,e){const n=hd.get(t);if(n)for(const s of n)s(e)}function NC(t,e){const n=PC();n&&n.postMessage({key:t,fid:e}),kC()}let dn=null;function PC(){return!dn&&"BroadcastChannel"in self&&(dn=new BroadcastChannel("[Firebase] FID Change"),dn.onmessage=t=>{pd(t.data.key,t.data.fid)}),dn}function kC(){hd.size===0&&dn&&(dn.close(),dn=null)}/**
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
 */const DC="firebase-installations-database",MC=1,On="firebase-installations-store";let Pr=null;function ka(){return Pr||(Pr=mC(DC,MC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(On)}}})),Pr}async function Ni(t,e){const n=or(t),i=(await ka()).transaction(On,"readwrite"),r=i.objectStore(On),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&dd(t,e.fid),e}async function md(t){const e=or(t),s=(await ka()).transaction(On,"readwrite");await s.objectStore(On).delete(e),await s.done}async function ar(t,e){const n=or(t),i=(await ka()).transaction(On,"readwrite"),r=i.objectStore(On),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&dd(t,a.fid),a}/**
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
 */async function Da(t){let e;const n=await ar(t.appConfig,s=>{const i=LC(s),r=$C(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===No?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function LC(t){const e=t||{fid:OC(),registrationStatus:0};return gd(e)}function $C(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(An.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=FC(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:BC(t)}:{installationEntry:e}}async function FC(t,e){try{const n=await TC(t,e);return Ni(t.appConfig,n)}catch(n){throw rd(n)&&n.customData.serverCode===409?await md(t.appConfig):await Ni(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function BC(t){let e=await kc(t.appConfig);for(;e.registrationStatus===1;)await fd(100),e=await kc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Da(t);return s||n}return e}function kc(t){return ar(t,e=>{if(!e)throw An.create("installation-not-found");return gd(e)})}function gd(t){return UC(t)?{fid:t.fid,registrationStatus:0}:t}function UC(t){return t.registrationStatus===1&&t.registrationTime+nd<Date.now()}/**
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
 */async function jC({appConfig:t,heartbeatServiceProvider:e},n){const s=HC(t,n),i=CC(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:sd,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await ud(()=>fetch(s,a));if(l.ok){const c=await l.json();return ad(c)}else throw await ld("Generate Auth Token",l)}function HC(t,{fid:e}){return`${od(t)}/${e}/authTokens:generate`}/**
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
 */async function Ma(t,e=!1){let n;const s=await ar(t.appConfig,r=>{if(!_d(r))throw An.create("not-registered");const o=r.authToken;if(!e&&KC(o))return r;if(o.requestStatus===1)return n=WC(t,e),r;{if(!navigator.onLine)throw An.create("app-offline");const a=qC(r);return n=VC(t,a),a}});return n?await n:s.authToken}async function WC(t,e){let n=await Dc(t.appConfig);for(;n.authToken.requestStatus===1;)await fd(100),n=await Dc(t.appConfig);const s=n.authToken;return s.requestStatus===0?Ma(t,e):s}function Dc(t){return ar(t,e=>{if(!_d(e))throw An.create("not-registered");const n=e.authToken;return zC(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function VC(t,e){try{const n=await jC(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Ni(t.appConfig,s),n}catch(n){if(rd(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await md(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ni(t.appConfig,s)}throw n}}function _d(t){return t!==void 0&&t.registrationStatus===2}function KC(t){return t.requestStatus===2&&!GC(t)}function GC(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+vC}function qC(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function zC(t){return t.requestStatus===1&&t.requestTime+nd<Date.now()}/**
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
 */async function YC(t){const e=t,{installationEntry:n,registrationPromise:s}=await Da(e);return s?s.catch(console.error):Ma(e).catch(console.error),n.fid}/**
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
 */async function QC(t,e=!1){const n=t;return await JC(n),(await Ma(n,e)).token}async function JC(t){const{registrationPromise:e}=await Da(t);e&&await e}/**
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
 */function XC(t){if(!t||!t.options)throw kr("App Configuration");if(!t.name)throw kr("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw kr(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function kr(t){return An.create("missing-app-config-values",{valueName:t})}/**
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
 */const yd="installations",ZC="installations-internal",eI=t=>{const e=t.getProvider("app").getImmediate(),n=XC(e),s=js(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},tI=t=>{const e=t.getProvider("app").getImmediate(),n=js(e,yd).getImmediate();return{getId:()=>YC(n),getToken:i=>QC(n,i)}};function nI(){Zt(new Rt(yd,eI,"PUBLIC")),Zt(new Rt(ZC,tI,"PRIVATE"))}nI();_t(td,Pa);_t(td,Pa,"esm2017");/**
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
 */const Pi="analytics",sI="firebase_id",iI="origin",rI=60*1e3,oI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",La="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ue=new ra("@firebase/analytics");/**
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
 */const aI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},We=new Ji("analytics","Analytics",aI);/**
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
 */function lI(t){if(!t.startsWith(La)){const e=We.create("invalid-gtag-resource",{gtagURL:t});return Ue.warn(e.message),""}return t}function vd(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function cI(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function uI(t,e){const n=cI("firebase-js-sdk-policy",{createScriptURL:lI}),s=document.createElement("script"),i=`${La}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function fI(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function hI(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await vd(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){Ue.error(a)}t("config",i,r)}async function dI(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await vd(n);for(const l of o){const c=a.find(u=>u.measurementId===l),f=c&&e[c.appId];if(f)r.push(f);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){Ue.error(r)}}function pI(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[a,l]=o;await dI(t,e,n,a,l)}else if(r==="config"){const[a,l]=o;await hI(t,e,n,s,a,l)}else if(r==="consent"){const[a]=o;t("consent","update",a)}else if(r==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){Ue.error(a)}}return i}function mI(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=pI(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function gI(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(La)&&n.src.includes(t))return n;return null}/**
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
 */const _I=30,yI=1e3;class vI{constructor(e={},n=yI){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const bd=new vI;function bI(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function wI(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:bI(s)},r=oI.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw We.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function EI(t,e=bd,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw We.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw We.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new SI;return setTimeout(async()=>{a.abort()},n!==void 0?n:rI),wd({appId:s,apiKey:i,measurementId:r},o,a,e)}async function wd(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=bd){var r;const{appId:o,measurementId:a}=t;try{await CI(s,e)}catch(l){if(a)return Ue.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await wI(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!II(c)){if(i.deleteThrottleMetadata(o),a)return Ue.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const f=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?Ul(n,i.intervalMillis,_I):Ul(n,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,u),Ue.debug(`Calling attemptFetch again in ${f} millis`),wd(t,u,s,i)}}function CI(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(We.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function II(t){if(!(t instanceof xn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class SI{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function TI(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
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
 */async function RI(){if(If())try{await Sf()}catch(t){return Ue.warn(We.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ue.warn(We.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function AI(t,e,n,s,i,r,o){var a;const l=EI(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Ue.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Ue.error(m)),e.push(l);const c=RI().then(m=>{if(m)return s.getId()}),[f,u]=await Promise.all([l,c]);gI(r)||uI(r,f.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[iI]="firebase",d.update=!0,u!=null&&(d[sI]=u),i("config",f.measurementId,d),f.measurementId}/**
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
 */class OI{constructor(e){this.app=e}_delete(){return delete Es[this.app.options.appId],Promise.resolve()}}let Es={},Mc=[];const Lc={};let Dr="dataLayer",xI="gtag",$c,Ed,Fc=!1;function NI(){const t=[];if(Hy()&&t.push("This is a browser extension environment."),Vy()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=We.create("invalid-analytics-context",{errorInfo:e});Ue.warn(n.message)}}function PI(t,e,n){NI();const s=t.options.appId;if(!s)throw We.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ue.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw We.create("no-api-key");if(Es[s]!=null)throw We.create("already-exists",{id:s});if(!Fc){fI(Dr);const{wrappedGtag:r,gtagCore:o}=mI(Es,Mc,Lc,Dr,xI);Ed=r,$c=o,Fc=!0}return Es[s]=AI(t,Mc,Lc,e,$c,Dr,n),new OI(t)}function kI(t=xf()){t=sn(t);const e=js(t,Pi);return e.isInitialized()?e.getImmediate():DI(t)}function DI(t,e={}){const n=js(t,Pi);if(n.isInitialized()){const i=n.getImmediate();if(wi(e,n.getOptions()))return i;throw We.create("already-initialized")}return n.initialize({options:e})}function MI(t,e,n,s){t=sn(t),TI(Ed,Es[t.app.options.appId],e,n,s).catch(i=>Ue.error(i))}const Bc="@firebase/analytics",Uc="0.10.0";function LI(){Zt(new Rt(Pi,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return PI(s,i,n)},"PUBLIC")),Zt(new Rt("analytics-internal",t,"PRIVATE")),_t(Bc,Uc),_t(Bc,Uc,"esm2017");function t(e){try{const n=e.getProvider(Pi).getImmediate();return{logEvent:(s,i,r)=>MI(n,s,i,r)}}catch(n){throw We.create("interop-component-reg-failed",{reason:n})}}}LI();const $I={apiKey:"AIzaSyA6hqThcAUXeRWTlBLsQMTG2sw-W5Lx744",authDomain:"indianspringskatahdins-187d9.firebaseapp.com",projectId:"indianspringskatahdins-187d9",storageBucket:"indianspringskatahdins-187d9.appspot.com",messagingSenderId:"49980286736",appId:"1:49980286736:web:c4cc74994248b9a5ea6795",measurementId:"G-5C26L7CC6X",databaseURL:"https://indianspringskatahdins-187d9-default-rtdb.firebaseio.com/"},Cd=Of($I);kI(Cd);Xh(Cd);const Id=kg(hy);Id.use(iC);Id.mount("#app");export{et as F,wy as N,Us as _,Ne as a,Km as b,Ki as c,tC as d,He as e,Cu as f,Fs as o,Eu as p,xg as w};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AboutView-69wr9lOm.js","assets/AboutView-pa5MP_Aj.css","assets/ContactView-VP7Fczo5.js","assets/ContactView-ziFvtjt3.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
