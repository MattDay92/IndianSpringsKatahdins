(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ro(t,e){const n=new Set(t.split(","));return e?s=>n.has(s.toLowerCase()):s=>n.has(s)}const ae={},bn=[],We=()=>{},$f=()=>!1,vi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),oo=t=>t.startsWith("onUpdate:"),Ce=Object.assign,lo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Uf=Object.prototype.hasOwnProperty,K=(t,e)=>Uf.call(t,e),U=Array.isArray,Cn=t=>Ei(t)==="[object Map]",pc=t=>Ei(t)==="[object Set]",H=t=>typeof t=="function",_e=t=>typeof t=="string",Fn=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",_c=t=>(ce(t)||H(t))&&H(t.then)&&H(t.catch),gc=Object.prototype.toString,Ei=t=>gc.call(t),Wf=t=>Ei(t).slice(8,-1),mc=t=>Ei(t)==="[object Object]",ao=t=>_e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Hs=ro(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Hf=/-(\w)/g,An=bi(t=>t.replace(Hf,(e,n)=>n?n.toUpperCase():"")),Vf=/\B([A-Z])/g,Bn=bi(t=>t.replace(Vf,"-$1").toLowerCase()),yc=bi(t=>t.charAt(0).toUpperCase()+t.slice(1)),zi=bi(t=>t?`on${yc(t)}`:""),Lt=(t,e)=>!Object.is(t,e),Yi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},zs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},jf=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let yl;const vc=()=>yl||(yl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function co(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=_e(s)?zf(s):co(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(_e(t)||ce(t))return t}const qf=/;(?![^(]*\))/g,Gf=/:([^]+)/,Kf=/\/\*[^]*?\*\//g;function zf(t){const e={};return t.replace(Kf,"").split(qf).forEach(n=>{if(n){const s=n.split(Gf);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function uo(t){let e="";if(_e(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const s=uo(t[n]);s&&(e+=s+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Yf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qf=ro(Yf);function Ec(t){return!!t||t===""}const sw=t=>_e(t)?t:t==null?"":U(t)||ce(t)&&(t.toString===gc||!H(t.toString))?JSON.stringify(t,bc,2):String(t),bc=(t,e)=>e&&e.__v_isRef?bc(t,e.value):Cn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Qi(s,r)+" =>"]=i,n),{})}:pc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Qi(n))}:Fn(e)?Qi(e):ce(e)&&!U(e)&&!mc(e)?String(e):e,Qi=(t,e="")=>{var n;return Fn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ve;class Xf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ve,!e&&Ve&&(this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ve;try{return Ve=this,e()}finally{Ve=n}}}on(){Ve=this}off(){Ve=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Jf(t,e=Ve){e&&e.active&&e.effects.push(t)}function Zf(){return Ve}let Qt;class ho{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=3,this._trackId=0,this._runnings=0,this._queryings=0,this._depsLength=0,Jf(this,i)}get dirty(){if(this._dirtyLevel===1){this._dirtyLevel=0,this._queryings++,an();for(const e of this.deps)if(e.computed&&(ed(e.computed),this._dirtyLevel>=2))break;cn(),this._queryings--}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?3:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Nt,n=Qt;try{return Nt=!0,Qt=this,this._runnings++,vl(this),this.fn()}finally{El(this),this._runnings--,Qt=n,Nt=e}}stop(){var e;this.active&&(vl(this),El(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function ed(t){return t.value}function vl(t){t._trackId++,t._depsLength=0}function El(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Cc(t.deps[e],t);t.deps.length=t._depsLength}}function Cc(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Nt=!0,Cr=0;const wc=[];function an(){wc.push(Nt),Nt=!1}function cn(){const t=wc.pop();Nt=t===void 0?!0:t}function fo(){Cr++}function po(){for(Cr--;!Cr&&wr.length;)wr.shift()()}function Ic(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&Cc(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const wr=[];function Sc(t,e,n){fo();for(const s of t.keys())if(!(!s.allowRecurse&&s._runnings)&&s._dirtyLevel<e&&(!s._runnings||e!==2)){const i=s._dirtyLevel;s._dirtyLevel=e,i===0&&(!s._queryings||e!==2)&&(s.trigger(),s.scheduler&&wr.push(s.scheduler))}po()}const Tc=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ir=new WeakMap,Xt=Symbol(""),Sr=Symbol("");function Me(t,e,n){if(Nt&&Qt){let s=Ir.get(t);s||Ir.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Tc(()=>s.delete(n))),Ic(Qt,i)}}function ft(t,e,n,s,i,r){const o=Ir.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&U(t)){const a=Number(s);o.forEach((c,u)=>{(u==="length"||!Fn(u)&&u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":U(t)?ao(n)&&l.push(o.get("length")):(l.push(o.get(Xt)),Cn(t)&&l.push(o.get(Sr)));break;case"delete":U(t)||(l.push(o.get(Xt)),Cn(t)&&l.push(o.get(Sr)));break;case"set":Cn(t)&&l.push(o.get(Xt));break}fo();for(const a of l)a&&Sc(a,3);po()}const td=ro("__proto__,__v_isRef,__isVue"),Rc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Fn)),bl=nd();function nd(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Q(this);for(let r=0,o=this.length;r<o;r++)Me(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(Q)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){an(),fo();const s=Q(this)[e].apply(this,n);return po(),cn(),s}}),t}function sd(t){const e=Q(this);return Me(e,"has",t),e.hasOwnProperty(t)}class Ac{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const i=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?gd:Oc:r?xc:Pc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=U(e);if(!i){if(o&&K(bl,n))return Reflect.get(bl,n,s);if(n==="hasOwnProperty")return sd}const l=Reflect.get(e,n,s);return(Fn(n)?Rc.has(n):td(n))||(i||Me(e,"get",n),r)?l:Le(l)?o&&ao(n)?l:l.value:ce(l)?i?Dc(l):wi(l):l}}class Nc extends Ac{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._shallow){const a=Nn(r);if(!Ys(s)&&!Nn(s)&&(r=Q(r),s=Q(s)),!U(e)&&Le(r)&&!Le(s))return a?!1:(r.value=s,!0)}const o=U(e)&&ao(n)?Number(n)<e.length:K(e,n),l=Reflect.set(e,n,s,i);return e===Q(i)&&(o?Lt(s,r)&&ft(e,"set",n,s):ft(e,"add",n,s)),l}deleteProperty(e,n){const s=K(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&ft(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Fn(n)||!Rc.has(n))&&Me(e,"has",n),s}ownKeys(e){return Me(e,"iterate",U(e)?"length":Xt),Reflect.ownKeys(e)}}class id extends Ac{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const rd=new Nc,od=new id,ld=new Nc(!0),_o=t=>t,Ci=t=>Reflect.getPrototypeOf(t);function Ds(t,e,n=!1,s=!1){t=t.__v_raw;const i=Q(t),r=Q(e);n||(Lt(e,r)&&Me(i,"get",e),Me(i,"get",r));const{has:o}=Ci(i),l=s?_o:n?yo:cs;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function Ms(t,e=!1){const n=this.__v_raw,s=Q(n),i=Q(t);return e||(Lt(t,i)&&Me(s,"has",t),Me(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ls(t,e=!1){return t=t.__v_raw,!e&&Me(Q(t),"iterate",Xt),Reflect.get(t,"size",t)}function Cl(t){t=Q(t);const e=Q(this);return Ci(e).has.call(e,t)||(e.add(t),ft(e,"add",t,t)),this}function wl(t,e){e=Q(e);const n=Q(this),{has:s,get:i}=Ci(n);let r=s.call(n,t);r||(t=Q(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Lt(e,o)&&ft(n,"set",t,e):ft(n,"add",t,e),this}function Il(t){const e=Q(this),{has:n,get:s}=Ci(e);let i=n.call(e,t);i||(t=Q(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&ft(e,"delete",t,void 0),r}function Sl(){const t=Q(this),e=t.size!==0,n=t.clear();return e&&ft(t,"clear",void 0,void 0),n}function Fs(t,e){return function(s,i){const r=this,o=r.__v_raw,l=Q(o),a=e?_o:t?yo:cs;return!t&&Me(l,"iterate",Xt),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function Bs(t,e,n){return function(...s){const i=this.__v_raw,r=Q(i),o=Cn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?_o:e?yo:cs;return!e&&Me(r,"iterate",a?Sr:Xt),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function wt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ad(){const t={get(r){return Ds(this,r)},get size(){return Ls(this)},has:Ms,add:Cl,set:wl,delete:Il,clear:Sl,forEach:Fs(!1,!1)},e={get(r){return Ds(this,r,!1,!0)},get size(){return Ls(this)},has:Ms,add:Cl,set:wl,delete:Il,clear:Sl,forEach:Fs(!1,!0)},n={get(r){return Ds(this,r,!0)},get size(){return Ls(this,!0)},has(r){return Ms.call(this,r,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:Fs(!0,!1)},s={get(r){return Ds(this,r,!0,!0)},get size(){return Ls(this,!0)},has(r){return Ms.call(this,r,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:Fs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Bs(r,!1,!1),n[r]=Bs(r,!0,!1),e[r]=Bs(r,!1,!0),s[r]=Bs(r,!0,!0)}),[t,n,e,s]}const[cd,ud,hd,fd]=ad();function go(t,e){const n=e?t?fd:hd:t?ud:cd;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(K(n,i)&&i in s?n:s,i,r)}const dd={get:go(!1,!1)},pd={get:go(!1,!0)},_d={get:go(!0,!1)},Pc=new WeakMap,xc=new WeakMap,Oc=new WeakMap,gd=new WeakMap;function md(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yd(t){return t.__v_skip||!Object.isExtensible(t)?0:md(Wf(t))}function wi(t){return Nn(t)?t:mo(t,!1,rd,dd,Pc)}function kc(t){return mo(t,!1,ld,pd,xc)}function Dc(t){return mo(t,!0,od,_d,Oc)}function mo(t,e,n,s,i){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=yd(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function wn(t){return Nn(t)?wn(t.__v_raw):!!(t&&t.__v_isReactive)}function Nn(t){return!!(t&&t.__v_isReadonly)}function Ys(t){return!!(t&&t.__v_isShallow)}function Mc(t){return wn(t)||Nn(t)}function Q(t){const e=t&&t.__v_raw;return e?Q(e):t}function Lc(t){return zs(t,"__v_skip",!0),t}const cs=t=>ce(t)?wi(t):t,yo=t=>ce(t)?Dc(t):t;class Fc{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ho(()=>e(this._value),()=>Tr(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=Q(this);return Bc(e),(!e._cacheable||e.effect.dirty)&&Lt(e._value,e._value=e.effect.run())&&Tr(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function vd(t,e,n=!1){let s,i;const r=H(t);return r?(s=t,i=We):(s=t.get,i=t.set),new Fc(s,i,r||!i,n)}function Bc(t){Nt&&Qt&&(t=Q(t),Ic(Qt,t.dep||(t.dep=Tc(()=>t.dep=void 0,t instanceof Fc?t:void 0))))}function Tr(t,e=3,n){t=Q(t);const s=t.dep;s&&Sc(s,e)}function Le(t){return!!(t&&t.__v_isRef===!0)}function Ed(t){return $c(t,!1)}function bd(t){return $c(t,!0)}function $c(t,e){return Le(t)?t:new Cd(t,e)}class Cd{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Q(e),this._value=n?e:cs(e)}get value(){return Bc(this),this._value}set value(e){const n=this.__v_isShallow||Ys(e)||Nn(e);e=n?e:Q(e),Lt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:cs(e),Tr(this,3))}}function Jt(t){return Le(t)?t.value:t}const wd={get:(t,e,n)=>Jt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Le(i)&&!Le(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Uc(t){return wn(t)?t:new Proxy(t,wd)}/**
* @vue/runtime-core v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Ii(r,e,n)}return i}function Qe(t,e,n,s){if(H(t)){const r=Pt(t,e,n,s);return r&&_c(r)&&r.catch(o=>{Ii(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Qe(t[r],e,n,s));return i}function Ii(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=`https://vuejs.org/errors/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){Pt(a,null,10,[t,o,l]);return}}Id(t,n,i,s)}function Id(t,e,n,s=!0){console.error(t)}let us=!1,Rr=!1;const Se=[];let rt=0;const In=[];let St=null,Gt=0;const Wc=Promise.resolve();let vo=null;function Hc(t){const e=vo||Wc;return t?e.then(this?t.bind(this):t):e}function Sd(t){let e=rt+1,n=Se.length;for(;e<n;){const s=e+n>>>1,i=Se[s],r=hs(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function Eo(t){(!Se.length||!Se.includes(t,us&&t.allowRecurse?rt+1:rt))&&(t.id==null?Se.push(t):Se.splice(Sd(t.id),0,t),Vc())}function Vc(){!us&&!Rr&&(Rr=!0,vo=Wc.then(qc))}function Td(t){const e=Se.indexOf(t);e>rt&&Se.splice(e,1)}function Rd(t){U(t)?In.push(...t):(!St||!St.includes(t,t.allowRecurse?Gt+1:Gt))&&In.push(t),Vc()}function Tl(t,e,n=us?rt+1:0){for(;n<Se.length;n++){const s=Se[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;Se.splice(n,1),n--,s()}}}function jc(t){if(In.length){const e=[...new Set(In)].sort((n,s)=>hs(n)-hs(s));if(In.length=0,St){St.push(...e);return}for(St=e,Gt=0;Gt<St.length;Gt++)St[Gt]();St=null,Gt=0}}const hs=t=>t.id==null?1/0:t.id,Ad=(t,e)=>{const n=hs(t)-hs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function qc(t){Rr=!1,us=!0,Se.sort(Ad);try{for(rt=0;rt<Se.length;rt++){const e=Se[rt];e&&e.active!==!1&&Pt(e,null,14)}}finally{rt=0,Se.length=0,jc(),us=!1,vo=null,(Se.length||In.length)&&qc()}}function Nd(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ae;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||ae;f&&(i=n.map(_=>_e(_)?_.trim():_)),h&&(i=n.map(jf))}let l,a=s[l=zi(e)]||s[l=zi(An(e))];!a&&r&&(a=s[l=zi(Bn(e))]),a&&Qe(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Qe(c,t,6,i)}}function Gc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!H(t)){const a=c=>{const u=Gc(c,e,!0);u&&(l=!0,Ce(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(ce(t)&&s.set(t,null),null):(U(r)?r.forEach(a=>o[a]=null):Ce(o,r),ce(t)&&s.set(t,o),o)}function Si(t,e){return!t||!vi(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,Bn(e))||K(t,e))}let ot=null,Ti=null;function Qs(t){const e=ot;return ot=t,Ti=t&&t.type.__scopeId||null,e}function Kc(t){Ti=t}function zc(){Ti=null}function Pd(t,e=ot,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Ll(-1);const r=Qs(e);let o;try{o=t(...i)}finally{Qs(r),s._d&&Ll(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Xi(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:f,setupState:_,ctx:v,inheritAttrs:S}=t;let O,x;const F=Qs(t);try{if(n.shapeFlag&4){const z=i||s,fe=z;O=it(u.call(fe,z,h,r,_,f,v)),x=a}else{const z=e;O=it(z.length>1?z(r,{attrs:a,slots:l,emit:c}):z(r,null)),x=e.props?a:xd(a)}}catch(z){ts.length=0,Ii(z,t,1),O=be(en)}let B=O;if(x&&S!==!1){const z=Object.keys(x),{shapeFlag:fe}=B;z.length&&fe&7&&(o&&z.some(oo)&&(x=Od(x,o)),B=Pn(B,x))}return n.dirs&&(B=Pn(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),O=B,Qs(F),O}const xd=t=>{let e;for(const n in t)(n==="class"||n==="style"||vi(n))&&((e||(e={}))[n]=t[n]);return e},Od=(t,e)=>{const n={};for(const s in t)(!oo(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function kd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Rl(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Si(c,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Rl(s,o,c):!0:!!o;return!1}function Rl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Si(n,r))return!0}return!1}function Dd({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Md=Symbol.for("v-ndc"),Ld=t=>t.__isSuspense;function Fd(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):Rd(t)}const Bd=Symbol.for("v-scx"),$d=()=>dt(Bd),$s={};function Vs(t,e,n){return Yc(t,e,n)}function Yc(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:l}=ae){if(e&&r){const W=e;e=(...Te)=>{W(...Te),fe()}}const a=Ae,c=W=>s===!0?W:vn(W,s===!1?1:void 0);let u,h=!1,f=!1;if(Le(t)?(u=()=>t.value,h=Ys(t)):wn(t)?(u=()=>c(t),h=!0):U(t)?(f=!0,h=t.some(W=>wn(W)||Ys(W)),u=()=>t.map(W=>{if(Le(W))return W.value;if(wn(W))return c(W);if(H(W))return Pt(W,a,2)})):H(t)?e?u=()=>Pt(t,a,2):u=()=>(_&&_(),Qe(t,a,3,[v])):u=We,e&&s){const W=u;u=()=>vn(W())}let _,v=W=>{_=B.onStop=()=>{Pt(W,a,4),_=B.onStop=void 0}},S;if(xi)if(v=We,e?n&&Qe(e,a,3,[u(),f?[]:void 0,v]):u(),i==="sync"){const W=$d();S=W.__watcherHandles||(W.__watcherHandles=[])}else return We;let O=f?new Array(t.length).fill($s):$s;const x=()=>{if(!(!B.active||!B.dirty))if(e){const W=B.run();(s||h||(f?W.some((Te,Ue)=>Lt(Te,O[Ue])):Lt(W,O)))&&(_&&_(),Qe(e,a,3,[W,O===$s?void 0:f&&O[0]===$s?[]:O,v]),O=W)}else B.run()};x.allowRecurse=!!e;let F;i==="sync"?F=x:i==="post"?F=()=>xe(x,a&&a.suspense):(x.pre=!0,a&&(x.id=a.uid),F=()=>Eo(x));const B=new ho(u,We,F),z=Zf(),fe=()=>{B.stop(),z&&lo(z.effects,B)};return e?n?x():O=B.run():i==="post"?xe(B.run.bind(B),a&&a.suspense):B.run(),S&&S.push(fe),fe}function Ud(t,e,n){const s=this.proxy,i=_e(t)?t.includes(".")?Qc(s,t):()=>s[t]:t.bind(s,s);let r;H(e)?r=e:(r=e.handler,n=e);const o=Ss(this),l=Yc(i,r.bind(s),n);return o(),l}function Qc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function vn(t,e,n=0,s){if(!ce(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(s=s||new Set,s.has(t))return t;if(s.add(t),Le(t))vn(t.value,e,n,s);else if(U(t))for(let i=0;i<t.length;i++)vn(t[i],e,n,s);else if(pc(t)||Cn(t))t.forEach(i=>{vn(i,e,n,s)});else if(mc(t))for(const i in t)vn(t[i],e,n,s);return t}function Ht(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(an(),Qe(a,n,8,[t.el,l,t,e]),cn())}}/*! #__NO_SIDE_EFFECTS__ */function Xc(t,e){return H(t)?Ce({name:t.name},e,{setup:t}):t}const js=t=>!!t.type.__asyncLoader,Jc=t=>t.type.__isKeepAlive;function Wd(t,e){Zc(t,"a",e)}function Hd(t,e){Zc(t,"da",e)}function Zc(t,e,n=Ae){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ri(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Jc(i.parent.vnode)&&Vd(s,e,n,i),i=i.parent}}function Vd(t,e,n,s){const i=Ri(e,t,s,!0);eu(()=>{lo(s[e],i)},n)}function Ri(t,e,n=Ae,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;an();const l=Ss(n),a=Qe(e,n,t,o);return l(),cn(),a});return s?i.unshift(r):i.push(r),r}}const mt=t=>(e,n=Ae)=>(!xi||t==="sp")&&Ri(t,(...s)=>e(...s),n),jd=mt("bm"),qd=mt("m"),Gd=mt("bu"),Kd=mt("u"),zd=mt("bum"),eu=mt("um"),Yd=mt("sp"),Qd=mt("rtg"),Xd=mt("rtc");function Jd(t,e=Ae){Ri("ec",t,e)}function iw(t,e,n,s){let i;const r=n&&n[s];if(U(t)||_e(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ce(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const Ar=t=>t?du(t)?Io(t)||t.proxy:Ar(t.parent):null,es=Ce(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ar(t.parent),$root:t=>Ar(t.root),$emit:t=>t.emit,$options:t=>bo(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Eo(t.update)}),$nextTick:t=>t.n||(t.n=Hc.bind(t.proxy)),$watch:t=>Ud.bind(t)}),Ji=(t,e)=>t!==ae&&!t.__isScriptSetup&&K(t,e),Zd={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Ji(s,e))return o[e]=1,s[e];if(i!==ae&&K(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&K(c,e))return o[e]=3,r[e];if(n!==ae&&K(n,e))return o[e]=4,n[e];Nr&&(o[e]=0)}}const u=es[e];let h,f;if(u)return e==="$attrs"&&Me(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==ae&&K(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,K(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Ji(i,e)?(i[e]=n,!0):s!==ae&&K(s,e)?(s[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==ae&&K(t,o)||Ji(e,o)||(l=r[0])&&K(l,o)||K(s,o)||K(es,o)||K(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Al(t){return U(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Nr=!0;function ep(t){const e=bo(t),n=t.proxy,s=t.ctx;Nr=!1,e.beforeCreate&&Nl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:v,activated:S,deactivated:O,beforeDestroy:x,beforeUnmount:F,destroyed:B,unmounted:z,render:fe,renderTracked:W,renderTriggered:Te,errorCaptured:Ue,serverPrefetch:fn,expose:Ze,inheritAttrs:bt,components:Wt,directives:et,filters:jn}=e;if(c&&tp(c,s,null),o)for(const ee in o){const X=o[ee];H(X)&&(s[ee]=X.bind(n))}if(i){const ee=i.call(n,n);ce(ee)&&(t.data=wi(ee))}if(Nr=!0,r)for(const ee in r){const X=r[ee],ct=H(X)?X.bind(n,n):H(X.get)?X.get.bind(n,n):We,Ct=!H(X)&&H(X.set)?X.set.bind(n):We,tt=qe({get:ct,set:Ct});Object.defineProperty(s,ee,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Pe=>tt.value=Pe})}if(l)for(const ee in l)tu(l[ee],s,n,ee);if(a){const ee=H(a)?a.call(n):a;Reflect.ownKeys(ee).forEach(X=>{qs(X,ee[X])})}u&&Nl(u,t,"c");function ge(ee,X){U(X)?X.forEach(ct=>ee(ct.bind(n))):X&&ee(X.bind(n))}if(ge(jd,h),ge(qd,f),ge(Gd,_),ge(Kd,v),ge(Wd,S),ge(Hd,O),ge(Jd,Ue),ge(Xd,W),ge(Qd,Te),ge(zd,F),ge(eu,z),ge(Yd,fn),U(Ze))if(Ze.length){const ee=t.exposed||(t.exposed={});Ze.forEach(X=>{Object.defineProperty(ee,X,{get:()=>n[X],set:ct=>n[X]=ct})})}else t.exposed||(t.exposed={});fe&&t.render===We&&(t.render=fe),bt!=null&&(t.inheritAttrs=bt),Wt&&(t.components=Wt),et&&(t.directives=et)}function tp(t,e,n=We){U(t)&&(t=Pr(t));for(const s in t){const i=t[s];let r;ce(i)?"default"in i?r=dt(i.from||s,i.default,!0):r=dt(i.from||s):r=dt(i),Le(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Nl(t,e,n){Qe(U(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function tu(t,e,n,s){const i=s.includes(".")?Qc(n,s):()=>n[s];if(_e(t)){const r=e[t];H(r)&&Vs(i,r)}else if(H(t))Vs(i,t.bind(n));else if(ce(t))if(U(t))t.forEach(r=>tu(r,e,n,s));else{const r=H(t.handler)?t.handler.bind(n):e[t.handler];H(r)&&Vs(i,r,t)}}function bo(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>Xs(a,c,o,!0)),Xs(a,e,o)),ce(e)&&r.set(e,a),a}function Xs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Xs(t,r,n,!0),i&&i.forEach(o=>Xs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=np[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const np={data:Pl,props:xl,emits:xl,methods:Zn,computed:Zn,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:Zn,directives:Zn,watch:ip,provide:Pl,inject:sp};function Pl(t,e){return e?t?function(){return Ce(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function sp(t,e){return Zn(Pr(t),Pr(e))}function Pr(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Re(t,e){return t?[...new Set([].concat(t,e))]:e}function Zn(t,e){return t?Ce(Object.create(null),t,e):e}function xl(t,e){return t?U(t)&&U(e)?[...new Set([...t,...e])]:Ce(Object.create(null),Al(t),Al(e??{})):e}function ip(t,e){if(!t)return e;if(!e)return t;const n=Ce(Object.create(null),t);for(const s in e)n[s]=Re(t[s],e[s]);return n}function nu(){return{app:null,config:{isNativeTag:$f,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rp=0;function op(t,e){return function(s,i=null){H(s)||(s=Ce({},s)),i!=null&&!ce(i)&&(i=null);const r=nu(),o=new WeakSet;let l=!1;const a=r.app={_uid:rp++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:xp,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&H(c.install)?(o.add(c),c.install(a,...u)):H(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const f=be(s,i);return f.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(f,c):t(f,c,h),l=!0,a._container=c,c.__vue_app__=a,Io(f.component)||f.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a},runWithContext(c){Js=a;try{return c()}finally{Js=null}}};return a}}let Js=null;function qs(t,e){if(Ae){let n=Ae.provides;const s=Ae.parent&&Ae.parent.provides;s===n&&(n=Ae.provides=Object.create(s)),n[t]=e}}function dt(t,e,n=!1){const s=Ae||ot;if(s||Js){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Js._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&H(e)?e.call(s&&s.proxy):e}}function lp(t,e,n,s=!1){const i={},r={};zs(r,Pi,1),t.propsDefaults=Object.create(null),su(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:kc(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function ap(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Q(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Si(t.emitsOptions,f))continue;const _=e[f];if(a)if(K(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const v=An(f);i[v]=xr(a,l,v,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{su(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!K(e,h)&&((u=Bn(h))===h||!K(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=xr(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!K(e,h))&&(delete r[h],c=!0)}c&&ft(t,"set","$attrs")}function su(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Hs(a))continue;const c=e[a];let u;i&&K(i,u=An(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:Si(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=Q(n),c=l||ae;for(let u=0;u<r.length;u++){const h=r[u];n[h]=xr(i,a,h,c[h],t,!K(c,h))}}return o}function xr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=K(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&H(a)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Ss(i);s=c[n]=a.call(null,e),u()}}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Bn(n))&&(s=!0))}return s}function iu(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!H(t)){const u=h=>{a=!0;const[f,_]=iu(h,e,!0);Ce(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return ce(t)&&s.set(t,bn),bn;if(U(r))for(let u=0;u<r.length;u++){const h=An(r[u]);Ol(h)&&(o[h]=ae)}else if(r)for(const u in r){const h=An(u);if(Ol(h)){const f=r[u],_=o[h]=U(f)||H(f)?{type:f}:Ce({},f);if(_){const v=Ml(Boolean,_.type),S=Ml(String,_.type);_[0]=v>-1,_[1]=S<0||v<S,(v>-1||K(_,"default"))&&l.push(h)}}}const c=[o,l];return ce(t)&&s.set(t,c),c}function Ol(t){return t[0]!=="$"}function kl(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Dl(t,e){return kl(t)===kl(e)}function Ml(t,e){return U(e)?e.findIndex(n=>Dl(n,t)):H(e)&&Dl(e,t)?0:-1}const ru=t=>t[0]==="_"||t==="$stable",Co=t=>U(t)?t.map(it):[it(t)],cp=(t,e,n)=>{if(e._n)return e;const s=Pd((...i)=>Co(e(...i)),n);return s._c=!1,s},ou=(t,e,n)=>{const s=t._ctx;for(const i in t){if(ru(i))continue;const r=t[i];if(H(r))e[i]=cp(i,r,s);else if(r!=null){const o=Co(r);e[i]=()=>o}}},lu=(t,e)=>{const n=Co(e);t.slots.default=()=>n},up=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Q(e),zs(e,"_",n)):ou(e,t.slots={})}else t.slots={},e&&lu(t,e);zs(t.slots,Pi,1)},hp=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ae;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(Ce(i,e),!n&&l===1&&delete i._):(r=!e.$stable,ou(e,i)),o=e}else e&&(lu(t,e),o={default:1});if(r)for(const l in i)!ru(l)&&o[l]==null&&delete i[l]};function Or(t,e,n,s,i=!1){if(U(t)){t.forEach((f,_)=>Or(f,e&&(U(e)?e[_]:e),n,s,i));return}if(js(s)&&!i)return;const r=s.shapeFlag&4?Io(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===ae?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(_e(c)?(u[c]=null,K(h,c)&&(h[c]=null)):Le(c)&&(c.value=null)),H(a))Pt(a,l,12,[o,u]);else{const f=_e(a),_=Le(a);if(f||_){const v=()=>{if(t.f){const S=f?K(h,a)?h[a]:u[a]:a.value;i?U(S)&&lo(S,r):U(S)?S.includes(r)||S.push(r):f?(u[a]=[r],K(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else f?(u[a]=o,K(h,a)&&(h[a]=o)):_&&(a.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,xe(v,n)):v()}}}const xe=Fd;function fp(t){return dp(t)}function dp(t,e){const n=vc();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=We,insertStaticContent:v}=t,S=(d,p,g,E=null,m=null,I=null,A=void 0,w=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!Gn(d,p)&&(E=y(d),Pe(d,m,I,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:b,ref:P,shapeFlag:M}=p;switch(b){case Ai:O(d,p,g,E);break;case en:x(d,p,g,E);break;case Gs:d==null&&F(p,g,E,A);break;case je:Wt(d,p,g,E,m,I,A,w,T);break;default:M&1?fe(d,p,g,E,m,I,A,w,T):M&6?et(d,p,g,E,m,I,A,w,T):(M&64||M&128)&&b.process(d,p,g,E,m,I,A,w,T,k)}P!=null&&m&&Or(P,d&&d.ref,I,p||d,!p)},O=(d,p,g,E)=>{if(d==null)s(p.el=l(p.children),g,E);else{const m=p.el=d.el;p.children!==d.children&&c(m,p.children)}},x=(d,p,g,E)=>{d==null?s(p.el=a(p.children||""),g,E):p.el=d.el},F=(d,p,g,E)=>{[d.el,d.anchor]=v(d.children,p,g,E,d.el,d.anchor)},B=({el:d,anchor:p},g,E)=>{let m;for(;d&&d!==p;)m=f(d),s(d,g,E),d=m;s(p,g,E)},z=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),i(d),d=g;i(p)},fe=(d,p,g,E,m,I,A,w,T)=>{p.type==="svg"?A="svg":p.type==="math"&&(A="mathml"),d==null?W(p,g,E,m,I,A,w,T):fn(d,p,m,I,A,w,T)},W=(d,p,g,E,m,I,A,w)=>{let T,b;const{props:P,shapeFlag:M,transition:D,dirs:$}=d;if(T=d.el=o(d.type,I,P&&P.is,P),M&8?u(T,d.children):M&16&&Ue(d.children,T,null,E,m,Zi(d,I),A,w),$&&Ht(d,null,E,"created"),Te(T,d,d.scopeId,A,E),P){for(const te in P)te!=="value"&&!Hs(te)&&r(T,te,null,P[te],I,d.children,E,m,we);"value"in P&&r(T,"value",null,P.value,I),(b=P.onVnodeBeforeMount)&&st(b,E,d)}$&&Ht(d,null,E,"beforeMount");const q=pp(m,D);q&&D.beforeEnter(T),s(T,p,g),((b=P&&P.onVnodeMounted)||q||$)&&xe(()=>{b&&st(b,E,d),q&&D.enter(T),$&&Ht(d,null,E,"mounted")},m)},Te=(d,p,g,E,m)=>{if(g&&_(d,g),E)for(let I=0;I<E.length;I++)_(d,E[I]);if(m){let I=m.subTree;if(p===I){const A=m.vnode;Te(d,A,A.scopeId,A.slotScopeIds,m.parent)}}},Ue=(d,p,g,E,m,I,A,w,T=0)=>{for(let b=T;b<d.length;b++){const P=d[b]=w?Tt(d[b]):it(d[b]);S(null,P,p,g,E,m,I,A,w)}},fn=(d,p,g,E,m,I,A)=>{const w=p.el=d.el;let{patchFlag:T,dynamicChildren:b,dirs:P}=p;T|=d.patchFlag&16;const M=d.props||ae,D=p.props||ae;let $;if(g&&Vt(g,!1),($=D.onVnodeBeforeUpdate)&&st($,g,p,d),P&&Ht(p,d,g,"beforeUpdate"),g&&Vt(g,!0),b?Ze(d.dynamicChildren,b,w,g,E,Zi(p,m),I):A||X(d,p,w,null,g,E,Zi(p,m),I,!1),T>0){if(T&16)bt(w,p,M,D,g,E,m);else if(T&2&&M.class!==D.class&&r(w,"class",null,D.class,m),T&4&&r(w,"style",M.style,D.style,m),T&8){const q=p.dynamicProps;for(let te=0;te<q.length;te++){const le=q[te],me=M[le],He=D[le];(He!==me||le==="value")&&r(w,le,me,He,m,d.children,g,E,we)}}T&1&&d.children!==p.children&&u(w,p.children)}else!A&&b==null&&bt(w,p,M,D,g,E,m);(($=D.onVnodeUpdated)||P)&&xe(()=>{$&&st($,g,p,d),P&&Ht(p,d,g,"updated")},E)},Ze=(d,p,g,E,m,I,A)=>{for(let w=0;w<p.length;w++){const T=d[w],b=p[w],P=T.el&&(T.type===je||!Gn(T,b)||T.shapeFlag&70)?h(T.el):g;S(T,b,P,null,E,m,I,A,!0)}},bt=(d,p,g,E,m,I,A)=>{if(g!==E){if(g!==ae)for(const w in g)!Hs(w)&&!(w in E)&&r(d,w,g[w],null,A,p.children,m,I,we);for(const w in E){if(Hs(w))continue;const T=E[w],b=g[w];T!==b&&w!=="value"&&r(d,w,b,T,A,p.children,m,I,we)}"value"in E&&r(d,"value",g.value,E.value,A)}},Wt=(d,p,g,E,m,I,A,w,T)=>{const b=p.el=d?d.el:l(""),P=p.anchor=d?d.anchor:l("");let{patchFlag:M,dynamicChildren:D,slotScopeIds:$}=p;$&&(w=w?w.concat($):$),d==null?(s(b,g,E),s(P,g,E),Ue(p.children||[],g,P,m,I,A,w,T)):M>0&&M&64&&D&&d.dynamicChildren?(Ze(d.dynamicChildren,D,g,m,I,A,w),(p.key!=null||m&&p===m.subTree)&&au(d,p,!0)):X(d,p,g,P,m,I,A,w,T)},et=(d,p,g,E,m,I,A,w,T)=>{p.slotScopeIds=w,d==null?p.shapeFlag&512?m.ctx.activate(p,g,E,A,T):jn(p,g,E,m,I,A,T):dn(d,p,T)},jn=(d,p,g,E,m,I,A)=>{const w=d.component=Sp(d,E,m);if(Jc(d)&&(w.ctx.renderer=k),Tp(w),w.asyncDep){if(m&&m.registerDep(w,ge),!d.el){const T=w.subTree=be(en);x(null,T,p,g)}}else ge(w,d,p,g,m,I,A)},dn=(d,p,g)=>{const E=p.component=d.component;if(kd(d,p,g))if(E.asyncDep&&!E.asyncResolved){ee(E,p,g);return}else E.next=p,Td(E.update),E.effect.dirty=!0,E.update();else p.el=d.el,E.vnode=p},ge=(d,p,g,E,m,I,A)=>{const w=()=>{if(d.isMounted){let{next:P,bu:M,u:D,parent:$,vnode:q}=d;{const gn=cu(d);if(gn){P&&(P.el=q.el,ee(d,P,A)),gn.asyncDep.then(()=>{d.isUnmounted||w()});return}}let te=P,le;Vt(d,!1),P?(P.el=q.el,ee(d,P,A)):P=q,M&&Yi(M),(le=P.props&&P.props.onVnodeBeforeUpdate)&&st(le,$,P,q),Vt(d,!0);const me=Xi(d),He=d.subTree;d.subTree=me,S(He,me,h(He.el),y(He),d,m,I),P.el=me.el,te===null&&Dd(d,me.el),D&&xe(D,m),(le=P.props&&P.props.onVnodeUpdated)&&xe(()=>st(le,$,P,q),m)}else{let P;const{el:M,props:D}=p,{bm:$,m:q,parent:te}=d,le=js(p);if(Vt(d,!1),$&&Yi($),!le&&(P=D&&D.onVnodeBeforeMount)&&st(P,te,p),Vt(d,!0),M&&oe){const me=()=>{d.subTree=Xi(d),oe(M,d.subTree,d,m,null)};le?p.type.__asyncLoader().then(()=>!d.isUnmounted&&me()):me()}else{const me=d.subTree=Xi(d);S(null,me,g,E,d,m,I),p.el=me.el}if(q&&xe(q,m),!le&&(P=D&&D.onVnodeMounted)){const me=p;xe(()=>st(P,te,me),m)}(p.shapeFlag&256||te&&js(te.vnode)&&te.vnode.shapeFlag&256)&&d.a&&xe(d.a,m),d.isMounted=!0,p=g=E=null}},T=d.effect=new ho(w,We,()=>Eo(b),d.scope),b=d.update=()=>{T.dirty&&T.run()};b.id=d.uid,Vt(d,!0),b()},ee=(d,p,g)=>{p.component=d;const E=d.vnode.props;d.vnode=p,d.next=null,ap(d,p.props,E,g),hp(d,p.children,g),an(),Tl(d),cn()},X=(d,p,g,E,m,I,A,w,T=!1)=>{const b=d&&d.children,P=d?d.shapeFlag:0,M=p.children,{patchFlag:D,shapeFlag:$}=p;if(D>0){if(D&128){Ct(b,M,g,E,m,I,A,w,T);return}else if(D&256){ct(b,M,g,E,m,I,A,w,T);return}}$&8?(P&16&&we(b,m,I),M!==b&&u(g,M)):P&16?$&16?Ct(b,M,g,E,m,I,A,w,T):we(b,m,I,!0):(P&8&&u(g,""),$&16&&Ue(M,g,E,m,I,A,w,T))},ct=(d,p,g,E,m,I,A,w,T)=>{d=d||bn,p=p||bn;const b=d.length,P=p.length,M=Math.min(b,P);let D;for(D=0;D<M;D++){const $=p[D]=T?Tt(p[D]):it(p[D]);S(d[D],$,g,null,m,I,A,w,T)}b>P?we(d,m,I,!0,!1,M):Ue(p,g,E,m,I,A,w,T,M)},Ct=(d,p,g,E,m,I,A,w,T)=>{let b=0;const P=p.length;let M=d.length-1,D=P-1;for(;b<=M&&b<=D;){const $=d[b],q=p[b]=T?Tt(p[b]):it(p[b]);if(Gn($,q))S($,q,g,null,m,I,A,w,T);else break;b++}for(;b<=M&&b<=D;){const $=d[M],q=p[D]=T?Tt(p[D]):it(p[D]);if(Gn($,q))S($,q,g,null,m,I,A,w,T);else break;M--,D--}if(b>M){if(b<=D){const $=D+1,q=$<P?p[$].el:E;for(;b<=D;)S(null,p[b]=T?Tt(p[b]):it(p[b]),g,q,m,I,A,w,T),b++}}else if(b>D)for(;b<=M;)Pe(d[b],m,I,!0),b++;else{const $=b,q=b,te=new Map;for(b=q;b<=D;b++){const Be=p[b]=T?Tt(p[b]):it(p[b]);Be.key!=null&&te.set(Be.key,b)}let le,me=0;const He=D-q+1;let gn=!1,_l=0;const qn=new Array(He);for(b=0;b<He;b++)qn[b]=0;for(b=$;b<=M;b++){const Be=d[b];if(me>=He){Pe(Be,m,I,!0);continue}let nt;if(Be.key!=null)nt=te.get(Be.key);else for(le=q;le<=D;le++)if(qn[le-q]===0&&Gn(Be,p[le])){nt=le;break}nt===void 0?Pe(Be,m,I,!0):(qn[nt-q]=b+1,nt>=_l?_l=nt:gn=!0,S(Be,p[nt],g,null,m,I,A,w,T),me++)}const gl=gn?_p(qn):bn;for(le=gl.length-1,b=He-1;b>=0;b--){const Be=q+b,nt=p[Be],ml=Be+1<P?p[Be+1].el:E;qn[b]===0?S(null,nt,g,ml,m,I,A,w,T):gn&&(le<0||b!==gl[le]?tt(nt,g,ml,2):le--)}}},tt=(d,p,g,E,m=null)=>{const{el:I,type:A,transition:w,children:T,shapeFlag:b}=d;if(b&6){tt(d.component.subTree,p,g,E);return}if(b&128){d.suspense.move(p,g,E);return}if(b&64){A.move(d,p,g,k);return}if(A===je){s(I,p,g);for(let M=0;M<T.length;M++)tt(T[M],p,g,E);s(d.anchor,p,g);return}if(A===Gs){B(d,p,g);return}if(E!==2&&b&1&&w)if(E===0)w.beforeEnter(I),s(I,p,g),xe(()=>w.enter(I),m);else{const{leave:M,delayLeave:D,afterLeave:$}=w,q=()=>s(I,p,g),te=()=>{M(I,()=>{q(),$&&$()})};D?D(I,q,te):te()}else s(I,p,g)},Pe=(d,p,g,E=!1,m=!1)=>{const{type:I,props:A,ref:w,children:T,dynamicChildren:b,shapeFlag:P,patchFlag:M,dirs:D}=d;if(w!=null&&Or(w,null,g,d,!0),P&256){p.ctx.deactivate(d);return}const $=P&1&&D,q=!js(d);let te;if(q&&(te=A&&A.onVnodeBeforeUnmount)&&st(te,p,d),P&6)ks(d.component,g,E);else{if(P&128){d.suspense.unmount(g,E);return}$&&Ht(d,null,p,"beforeUnmount"),P&64?d.type.remove(d,p,g,m,k,E):b&&(I!==je||M>0&&M&64)?we(b,p,g,!1,!0):(I===je&&M&384||!m&&P&16)&&we(T,p,g),E&&pn(d)}(q&&(te=A&&A.onVnodeUnmounted)||$)&&xe(()=>{te&&st(te,p,d),$&&Ht(d,null,p,"unmounted")},g)},pn=d=>{const{type:p,el:g,anchor:E,transition:m}=d;if(p===je){_n(g,E);return}if(p===Gs){z(d);return}const I=()=>{i(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(d.shapeFlag&1&&m&&!m.persisted){const{leave:A,delayLeave:w}=m,T=()=>A(g,I);w?w(d.el,I,T):T()}else I()},_n=(d,p)=>{let g;for(;d!==p;)g=f(d),i(d),d=g;i(p)},ks=(d,p,g)=>{const{bum:E,scope:m,update:I,subTree:A,um:w}=d;E&&Yi(E),m.stop(),I&&(I.active=!1,Pe(A,d,p,g)),w&&xe(w,p),xe(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},we=(d,p,g,E=!1,m=!1,I=0)=>{for(let A=I;A<d.length;A++)Pe(d[A],p,g,E,m)},y=d=>d.shapeFlag&6?y(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el);let N=!1;const R=(d,p,g)=>{d==null?p._vnode&&Pe(p._vnode,null,null,!0):S(p._vnode||null,d,p,null,null,null,g),N||(N=!0,Tl(),jc(),N=!1),p._vnode=d},k={p:S,um:Pe,m:tt,r:pn,mt:jn,mc:Ue,pc:X,pbc:Ze,n:y,o:t};let J,oe;return e&&([J,oe]=e(k)),{render:R,hydrate:J,createApp:op(R,J)}}function Zi({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Vt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function pp(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function au(t,e,n=!1){const s=t.children,i=e.children;if(U(s)&&U(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Tt(i[r]),l.el=o.el),n||au(o,l)),l.type===Ai&&(l.el=o.el)}}function _p(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function cu(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:cu(e)}const gp=t=>t.__isTeleport,je=Symbol.for("v-fgt"),Ai=Symbol.for("v-txt"),en=Symbol.for("v-cmt"),Gs=Symbol.for("v-stc"),ts=[];let Ke=null;function $n(t=!1){ts.push(Ke=t?null:[])}function mp(){ts.pop(),Ke=ts[ts.length-1]||null}let fs=1;function Ll(t){fs+=t}function uu(t){return t.dynamicChildren=fs>0?Ke||bn:null,mp(),fs>0&&Ke&&Ke.push(t),t}function Ni(t,e,n,s,i,r){return uu(ue(t,e,n,s,i,r,!0))}function hu(t,e,n,s,i){return uu(be(t,e,n,s,i,!0))}function kr(t){return t?t.__v_isVNode===!0:!1}function Gn(t,e){return t.type===e.type&&t.key===e.key}const Pi="__vInternal",fu=({key:t})=>t??null,Ks=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?_e(t)||Le(t)||H(t)?{i:ot,r:t,k:e,f:!!n}:t:null);function ue(t,e=null,n=null,s=0,i=null,r=t===je?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&fu(e),ref:e&&Ks(e),scopeId:Ti,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ot};return l?(wo(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=_e(n)?8:16),fs>0&&!o&&Ke&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Ke.push(a),a}const be=yp;function yp(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Md)&&(t=en),kr(t)){const l=Pn(t,e,!0);return n&&wo(l,n),fs>0&&!r&&Ke&&(l.shapeFlag&6?Ke[Ke.indexOf(t)]=l:Ke.push(l)),l.patchFlag|=-2,l}if(Pp(t)&&(t=t.__vccOpts),e){e=vp(e);let{class:l,style:a}=e;l&&!_e(l)&&(e.class=uo(l)),ce(a)&&(Mc(a)&&!U(a)&&(a=Ce({},a)),e.style=co(a))}const o=_e(t)?1:Ld(t)?128:gp(t)?64:ce(t)?4:H(t)?2:0;return ue(t,e,n,s,i,o,r,!0)}function vp(t){return t?Mc(t)||Pi in t?Ce({},t):t:null}function Pn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?Cp(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&fu(l),ref:e&&e.ref?n&&i?U(i)?i.concat(Ks(e)):[i,Ks(e)]:Ks(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==je?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pn(t.ssContent),ssFallback:t.ssFallback&&Pn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ep(t=" ",e=0){return be(Ai,null,t,e)}function bp(t,e){const n=be(Gs,null,t);return n.staticCount=e,n}function rw(t="",e=!1){return e?($n(),hu(en,null,t)):be(en,null,t)}function it(t){return t==null||typeof t=="boolean"?be(en):U(t)?be(je,null,t.slice()):typeof t=="object"?Tt(t):be(Ai,null,String(t))}function Tt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pn(t)}function wo(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),wo(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Pi in e)?e._ctx=ot:i===3&&ot&&(ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:ot},n=32):(e=String(e),s&64?(n=16,e=[Ep(e)]):n=8);t.children=e,t.shapeFlag|=n}function Cp(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=uo([e.class,s.class]));else if(i==="style")e.style=co([e.style,s.style]);else if(vi(i)){const r=e[i],o=s[i];o&&r!==o&&!(U(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function st(t,e,n,s=null){Qe(t,e,7,[n,s])}const wp=nu();let Ip=0;function Sp(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||wp,r={uid:Ip++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:iu(s,i),emitsOptions:Gc(s,i),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:s.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Nd.bind(null,r),t.ce&&t.ce(r),r}let Ae=null,Zs,Dr;{const t=vc(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Zs=e("__VUE_INSTANCE_SETTERS__",n=>Ae=n),Dr=e("__VUE_SSR_SETTERS__",n=>xi=n)}const Ss=t=>{const e=Ae;return Zs(t),t.scope.on(),()=>{t.scope.off(),Zs(e)}},Fl=()=>{Ae&&Ae.scope.off(),Zs(null)};function du(t){return t.vnode.shapeFlag&4}let xi=!1;function Tp(t,e=!1){e&&Dr(e);const{props:n,children:s}=t.vnode,i=du(t);lp(t,n,i,e),up(t,s);const r=i?Rp(t,e):void 0;return e&&Dr(!1),r}function Rp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Lc(new Proxy(t.ctx,Zd));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Np(t):null,r=Ss(t);an();const o=Pt(s,t,0,[t.props,i]);if(cn(),r(),_c(o)){if(o.then(Fl,Fl),e)return o.then(l=>{Bl(t,l,e)}).catch(l=>{Ii(l,t,0)});t.asyncDep=o}else Bl(t,o,e)}else pu(t,e)}function Bl(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=Uc(e)),pu(t,n)}let $l;function pu(t,e,n){const s=t.type;if(!t.render){if(!e&&$l&&!s.render){const i=s.template||bo(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=Ce(Ce({isCustomElement:r,delimiters:l},o),a);s.render=$l(i,c)}}t.render=s.render||We}{const i=Ss(t);an();try{ep(t)}finally{cn(),i()}}}function Ap(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Me(t,"get","$attrs"),e[n]}}))}function Np(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Ap(t)},slots:t.slots,emit:t.emit,expose:e}}function Io(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Uc(Lc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in es)return es[n](t)},has(e,n){return n in e||n in es}}))}function Pp(t){return H(t)&&"__vccOpts"in t}const qe=(t,e)=>vd(t,e,xi);function _u(t,e,n){const s=arguments.length;return s===2?ce(e)&&!U(e)?kr(e)?be(t,null,[e]):be(t,e):be(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&kr(n)&&(n=[n]),be(t,e,n))}const xp="3.4.10";/**
* @vue/runtime-dom v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Op="http://www.w3.org/2000/svg",kp="http://www.w3.org/1998/Math/MathML",Rt=typeof document<"u"?document:null,Ul=Rt&&Rt.createElement("template"),Dp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Rt.createElementNS(Op,t):e==="mathml"?Rt.createElementNS(kp,t):Rt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Rt.createTextNode(t),createComment:t=>Rt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Ul.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const l=Ul.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Mp=Symbol("_vtc");function Lp(t,e,n){const s=t[Mp];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Fp=Symbol("_vod"),Bp=Symbol("");function $p(t,e,n){const s=t.style,i=s.display,r=_e(n);if(n&&!r){if(e&&!_e(e))for(const o in e)n[o]==null&&Mr(s,o,"");for(const o in n)Mr(s,o,n[o])}else if(r){if(e!==n){const o=s[Bp];o&&(n+=";"+o),s.cssText=n}}else e&&t.removeAttribute("style");Fp in t&&(s.display=i)}const Wl=/\s*!important$/;function Mr(t,e,n){if(U(n))n.forEach(s=>Mr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Up(t,e);Wl.test(n)?t.setProperty(Bn(s),n.replace(Wl,""),"important"):t[s]=n}}const Hl=["Webkit","Moz","ms"],er={};function Up(t,e){const n=er[e];if(n)return n;let s=An(e);if(s!=="filter"&&s in t)return er[e]=s;s=yc(s);for(let i=0;i<Hl.length;i++){const r=Hl[i]+s;if(r in t)return er[e]=r}return e}const Vl="http://www.w3.org/1999/xlink";function Wp(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Vl,e.slice(6,e.length)):t.setAttributeNS(Vl,e,n);else{const r=Qf(e);n==null||r&&!Ec(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Hp(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){t._value=n;const c=l==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ec(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Vp(t,e,n,s){t.addEventListener(e,n,s)}function jp(t,e,n,s){t.removeEventListener(e,n,s)}const jl=Symbol("_vei");function qp(t,e,n,s,i=null){const r=t[jl]||(t[jl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=Gp(e);if(s){const c=r[e]=Yp(s,i);Vp(t,l,c,a)}else o&&(jp(t,l,o,a),r[e]=void 0)}}const ql=/(?:Once|Passive|Capture)$/;function Gp(t){let e;if(ql.test(t)){e={};let s;for(;s=t.match(ql);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Bn(t.slice(2)),e]}let tr=0;const Kp=Promise.resolve(),zp=()=>tr||(Kp.then(()=>tr=0),tr=Date.now());function Yp(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Qe(Qp(s,n.value),e,5,[s])};return n.value=t,n.attached=zp(),n}function Qp(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Gl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Xp=(t,e,n,s,i,r,o,l,a)=>{const c=i==="svg";e==="class"?Lp(t,s,c):e==="style"?$p(t,n,s):vi(e)?oo(e)||qp(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Jp(t,e,s,c))?Hp(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Wp(t,e,s,c))};function Jp(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Gl(e)&&H(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Gl(e)&&_e(n)?!1:e in t}const Zp=["ctrl","shift","alt","meta"],e_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Zp.some(n=>t[`${n}Key`]&&!e.includes(n))},t_=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const l=e_[e[o]];if(l&&l(i,e))return}return t(i,...r)})},n_=Ce({patchProp:Xp},Dp);let Kl;function s_(){return Kl||(Kl=fp(n_))}const i_=(...t)=>{const e=s_().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=o_(s);if(!i)return;const r=e._component;!H(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,r_(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function r_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function o_(t){return _e(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const yn=typeof window<"u";function l_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Z=Object.assign;function nr(t,e){const n={};for(const s in e){const i=e[s];n[s]=Je(i)?i.map(t):t(i)}return n}const ns=()=>{},Je=Array.isArray,a_=/\/$/,c_=t=>t.replace(a_,"");function sr(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let a=e.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(s=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=d_(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function u_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function zl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function h_(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&xn(e.matched[s],n.matched[i])&&gu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function xn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function gu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!f_(t[n],e[n]))return!1;return!0}function f_(t,e){return Je(t)?Yl(t,e):Je(e)?Yl(e,t):t===e}function Yl(t,e){return Je(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function d_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var ds;(function(t){t.pop="pop",t.push="push"})(ds||(ds={}));var ss;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ss||(ss={}));function p_(t){if(!t)if(yn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),c_(t)}const __=/^[^#]+#/;function g_(t,e){return t.replace(__,"#")+e}function m_(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Oi=()=>({left:window.pageXOffset,top:window.pageYOffset});function y_(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=m_(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ql(t,e){return(history.state?history.state.position-e:-1)+t}const Lr=new Map;function v_(t,e){Lr.set(t,e)}function E_(t){const e=Lr.get(t);return Lr.delete(t),e}let b_=()=>location.protocol+"//"+location.host;function mu(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,a=i.slice(l);return a[0]!=="/"&&(a="/"+a),zl(a,"")}return zl(n,t)+s+i}function C_(t,e,n,s){let i=[],r=[],o=null;const l=({state:f})=>{const _=mu(t,location),v=n.value,S=e.value;let O=0;if(f){if(n.value=_,e.value=f,o&&o===v){o=null;return}O=S?f.position-S.position:0}else s(_);i.forEach(x=>{x(n.value,v,{delta:O,type:ds.pop,direction:O?O>0?ss.forward:ss.back:ss.unknown})})};function a(){o=n.value}function c(f){i.push(f);const _=()=>{const v=i.indexOf(f);v>-1&&i.splice(v,1)};return r.push(_),_}function u(){const{history:f}=window;f.state&&f.replaceState(Z({},f.state,{scroll:Oi()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:c,destroy:h}}function Xl(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Oi():null}}function w_(t){const{history:e,location:n}=window,s={value:mu(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(a,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:b_()+t+a;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](f)}}function o(a,c){const u=Z({},e.state,Xl(i.value.back,a,i.value.forward,!0),c,{position:i.value.position});r(a,u,!0),s.value=a}function l(a,c){const u=Z({},i.value,e.state,{forward:a,scroll:Oi()});r(u.current,u,!0);const h=Z({},Xl(s.value,a,null),{position:u.position+1},c);r(a,h,!1),s.value=a}return{location:s,state:i,push:l,replace:o}}function I_(t){t=p_(t);const e=w_(t),n=C_(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Z({location:"",base:t,go:s,createHref:g_.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function S_(t){return typeof t=="string"||t&&typeof t=="object"}function yu(t){return typeof t=="string"||typeof t=="symbol"}const It={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},vu=Symbol("");var Jl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Jl||(Jl={}));function On(t,e){return Z(new Error,{type:t,[vu]:!0},e)}function ut(t,e){return t instanceof Error&&vu in t&&(e==null||!!(t.type&e))}const Zl="[^/]+?",T_={sensitive:!1,strict:!1,start:!0,end:!0},R_=/[.+*?^${}()[\]/\\]/g;function A_(t,e){const n=Z({},T_,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let _=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(R_,"\\$&"),_+=40;else if(f.type===1){const{value:v,repeatable:S,optional:O,regexp:x}=f;r.push({name:v,repeatable:S,optional:O});const F=x||Zl;if(F!==Zl){_+=10;try{new RegExp(`(${F})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${v}" (${F}): `+z.message)}}let B=S?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;h||(B=O&&c.length<2?`(?:/${B})`:"/"+B),O&&(B+="?"),i+=B,_+=20,O&&(_+=-8),S&&(_+=-20),F===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const _=u[f]||"",v=r[f-1];h[v.name]=_&&v.repeatable?_.split("/"):_}return h}function a(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of f)if(_.type===0)u+=_.value;else if(_.type===1){const{value:v,repeatable:S,optional:O}=_,x=v in c?c[v]:"";if(Je(x)&&!S)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const F=Je(x)?x.join("/"):x;if(!F)if(O)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=F}}return u||"/"}return{re:o,score:s,keys:r,parse:l,stringify:a}}function N_(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function P_(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=N_(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(ea(s))return 1;if(ea(i))return-1}return i.length-s.length}function ea(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const x_={type:0,value:""},O_=/[a-zA-Z0-9_]/;function k_(t){if(!t)return[[]];if(t==="/")return[[x_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,a,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(c&&h(),o()):a===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:a==="("?n=2:O_.test(a)?f():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function D_(t,e,n){const s=A_(k_(t.path),n),i=Z(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function M_(t,e){const n=[],s=new Map;e=sa({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const _=!f,v=L_(u);v.aliasOf=f&&f.record;const S=sa(e,u),O=[v];if("alias"in u){const B=typeof u.alias=="string"?[u.alias]:u.alias;for(const z of B)O.push(Z({},v,{components:f?f.record.components:v.components,path:z,aliasOf:f?f.record:v}))}let x,F;for(const B of O){const{path:z}=B;if(h&&z[0]!=="/"){const fe=h.record.path,W=fe[fe.length-1]==="/"?"":"/";B.path=h.record.path+(z&&W+z)}if(x=D_(B,h,S),f?f.alias.push(x):(F=F||x,F!==x&&F.alias.push(x),_&&u.name&&!na(x)&&o(u.name)),v.children){const fe=v.children;for(let W=0;W<fe.length;W++)r(fe[W],x,f&&f.children[W])}f=f||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&a(x)}return F?()=>{o(F)}:ns}function o(u){if(yu(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function a(u){let h=0;for(;h<n.length&&P_(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Eu(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!na(u)&&s.set(u.record.name,u)}function c(u,h){let f,_={},v,S;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw On(1,{location:u});S=f.record.name,_=Z(ta(h.params,f.keys.filter(F=>!F.optional).map(F=>F.name)),u.params&&ta(u.params,f.keys.map(F=>F.name))),v=f.stringify(_)}else if("path"in u)v=u.path,f=n.find(F=>F.re.test(v)),f&&(_=f.parse(v),S=f.record.name);else{if(f=h.name?s.get(h.name):n.find(F=>F.re.test(h.path)),!f)throw On(1,{location:u,currentLocation:h});S=f.record.name,_=Z({},h.params,u.params),v=f.stringify(_)}const O=[];let x=f;for(;x;)O.unshift(x.record),x=x.parent;return{name:S,path:v,params:_,matched:O,meta:B_(O)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function ta(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function L_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:F_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function F_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function na(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function B_(t){return t.reduce((e,n)=>Z(e,n.meta),{})}function sa(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Eu(t,e){return e.children.some(n=>n===t||Eu(t,n))}const bu=/#/g,$_=/&/g,U_=/\//g,W_=/=/g,H_=/\?/g,Cu=/\+/g,V_=/%5B/g,j_=/%5D/g,wu=/%5E/g,q_=/%60/g,Iu=/%7B/g,G_=/%7C/g,Su=/%7D/g,K_=/%20/g;function So(t){return encodeURI(""+t).replace(G_,"|").replace(V_,"[").replace(j_,"]")}function z_(t){return So(t).replace(Iu,"{").replace(Su,"}").replace(wu,"^")}function Fr(t){return So(t).replace(Cu,"%2B").replace(K_,"+").replace(bu,"%23").replace($_,"%26").replace(q_,"`").replace(Iu,"{").replace(Su,"}").replace(wu,"^")}function Y_(t){return Fr(t).replace(W_,"%3D")}function Q_(t){return So(t).replace(bu,"%23").replace(H_,"%3F")}function X_(t){return t==null?"":Q_(t).replace(U_,"%2F")}function ei(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function J_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Cu," "),o=r.indexOf("="),l=ei(o<0?r:r.slice(0,o)),a=o<0?null:ei(r.slice(o+1));if(l in e){let c=e[l];Je(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function ia(t){let e="";for(let n in t){const s=t[n];if(n=Y_(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Je(s)?s.map(r=>r&&Fr(r)):[s&&Fr(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Z_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Je(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const eg=Symbol(""),ra=Symbol(""),To=Symbol(""),Tu=Symbol(""),Br=Symbol("");function Kn(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function At(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const a=h=>{h===!1?l(On(4,{from:n,to:e})):h instanceof Error?l(h):S_(h)?l(On(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,a);let u=Promise.resolve(c);t.length<3&&(u=u.then(a)),u.catch(h=>l(h))})}function ir(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let l=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(tg(l)){const c=(l.__vccOpts||l)[e];c&&i.push(At(c,n,s,r,o))}else{let a=l();i.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=l_(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&At(f,n,s,r,o)()}))}}return i}function tg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function oa(t){const e=dt(To),n=dt(Tu),s=qe(()=>e.resolve(Jt(t.to))),i=qe(()=>{const{matched:a}=s.value,{length:c}=a,u=a[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(xn.bind(null,u));if(f>-1)return f;const _=la(a[c-2]);return c>1&&la(u)===_&&h[h.length-1].path!==_?h.findIndex(xn.bind(null,a[c-2])):f}),r=qe(()=>i.value>-1&&rg(n.params,s.value.params)),o=qe(()=>i.value>-1&&i.value===n.matched.length-1&&gu(n.params,s.value.params));function l(a={}){return ig(a)?e[Jt(t.replace)?"replace":"push"](Jt(t.to)).catch(ns):Promise.resolve()}return{route:s,href:qe(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const ng=Xc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:oa,setup(t,{slots:e}){const n=wi(oa(t)),{options:s}=dt(To),i=qe(()=>({[aa(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[aa(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:_u("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),sg=ng;function ig(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function rg(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Je(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function la(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const aa=(t,e,n)=>t??e??n,og=Xc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=dt(Br),i=qe(()=>t.route||s.value),r=dt(ra,0),o=qe(()=>{let c=Jt(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),l=qe(()=>i.value.matched[o.value]);qs(ra,qe(()=>o.value+1)),qs(eg,l),qs(Br,i);const a=Ed();return Vs(()=>[a.value,l.value,t.name],([c,u,h],[f,_,v])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!xn(u,_)||!f)&&(u.enterCallbacks[h]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=l.value,f=h&&h.components[u];if(!f)return ca(n.default,{Component:f,route:c});const _=h.props[u],v=_?_===!0?c.params:typeof _=="function"?_(c):_:null,O=_u(f,Z({},v,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return ca(n.default,{Component:O,route:c})||O}}});function ca(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ru=og;function lg(t){const e=M_(t.routes,t),n=t.parseQuery||J_,s=t.stringifyQuery||ia,i=t.history,r=Kn(),o=Kn(),l=Kn(),a=bd(It);let c=It;yn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=nr.bind(null,y=>""+y),h=nr.bind(null,X_),f=nr.bind(null,ei);function _(y,N){let R,k;return yu(y)?(R=e.getRecordMatcher(y),k=N):k=y,e.addRoute(k,R)}function v(y){const N=e.getRecordMatcher(y);N&&e.removeRoute(N)}function S(){return e.getRoutes().map(y=>y.record)}function O(y){return!!e.getRecordMatcher(y)}function x(y,N){if(N=Z({},N||a.value),typeof y=="string"){const p=sr(n,y,N.path),g=e.resolve({path:p.path},N),E=i.createHref(p.fullPath);return Z(p,g,{params:f(g.params),hash:ei(p.hash),redirectedFrom:void 0,href:E})}let R;if("path"in y)R=Z({},y,{path:sr(n,y.path,N.path).path});else{const p=Z({},y.params);for(const g in p)p[g]==null&&delete p[g];R=Z({},y,{params:h(p)}),N.params=h(N.params)}const k=e.resolve(R,N),J=y.hash||"";k.params=u(f(k.params));const oe=u_(s,Z({},y,{hash:z_(J),path:k.path})),d=i.createHref(oe);return Z({fullPath:oe,hash:J,query:s===ia?Z_(y.query):y.query||{}},k,{redirectedFrom:void 0,href:d})}function F(y){return typeof y=="string"?sr(n,y,a.value.path):Z({},y)}function B(y,N){if(c!==y)return On(8,{from:N,to:y})}function z(y){return Te(y)}function fe(y){return z(Z(F(y),{replace:!0}))}function W(y){const N=y.matched[y.matched.length-1];if(N&&N.redirect){const{redirect:R}=N;let k=typeof R=="function"?R(y):R;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=F(k):{path:k},k.params={}),Z({query:y.query,hash:y.hash,params:"path"in k?{}:y.params},k)}}function Te(y,N){const R=c=x(y),k=a.value,J=y.state,oe=y.force,d=y.replace===!0,p=W(R);if(p)return Te(Z(F(p),{state:typeof p=="object"?Z({},J,p.state):J,force:oe,replace:d}),N||R);const g=R;g.redirectedFrom=N;let E;return!oe&&h_(s,k,R)&&(E=On(16,{to:g,from:k}),tt(k,k,!0,!1)),(E?Promise.resolve(E):Ze(g,k)).catch(m=>ut(m)?ut(m,2)?m:Ct(m):X(m,g,k)).then(m=>{if(m){if(ut(m,2))return Te(Z({replace:d},F(m.to),{state:typeof m.to=="object"?Z({},J,m.to.state):J,force:oe}),N||g)}else m=Wt(g,k,!0,d,J);return bt(g,k,m),m})}function Ue(y,N){const R=B(y,N);return R?Promise.reject(R):Promise.resolve()}function fn(y){const N=_n.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(y):y()}function Ze(y,N){let R;const[k,J,oe]=ag(y,N);R=ir(k.reverse(),"beforeRouteLeave",y,N);for(const p of k)p.leaveGuards.forEach(g=>{R.push(At(g,y,N))});const d=Ue.bind(null,y,N);return R.push(d),we(R).then(()=>{R=[];for(const p of r.list())R.push(At(p,y,N));return R.push(d),we(R)}).then(()=>{R=ir(J,"beforeRouteUpdate",y,N);for(const p of J)p.updateGuards.forEach(g=>{R.push(At(g,y,N))});return R.push(d),we(R)}).then(()=>{R=[];for(const p of oe)if(p.beforeEnter)if(Je(p.beforeEnter))for(const g of p.beforeEnter)R.push(At(g,y,N));else R.push(At(p.beforeEnter,y,N));return R.push(d),we(R)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),R=ir(oe,"beforeRouteEnter",y,N),R.push(d),we(R))).then(()=>{R=[];for(const p of o.list())R.push(At(p,y,N));return R.push(d),we(R)}).catch(p=>ut(p,8)?p:Promise.reject(p))}function bt(y,N,R){l.list().forEach(k=>fn(()=>k(y,N,R)))}function Wt(y,N,R,k,J){const oe=B(y,N);if(oe)return oe;const d=N===It,p=yn?history.state:{};R&&(k||d?i.replace(y.fullPath,Z({scroll:d&&p&&p.scroll},J)):i.push(y.fullPath,J)),a.value=y,tt(y,N,R,d),Ct()}let et;function jn(){et||(et=i.listen((y,N,R)=>{if(!ks.listening)return;const k=x(y),J=W(k);if(J){Te(Z(J,{replace:!0}),k).catch(ns);return}c=k;const oe=a.value;yn&&v_(Ql(oe.fullPath,R.delta),Oi()),Ze(k,oe).catch(d=>ut(d,12)?d:ut(d,2)?(Te(d.to,k).then(p=>{ut(p,20)&&!R.delta&&R.type===ds.pop&&i.go(-1,!1)}).catch(ns),Promise.reject()):(R.delta&&i.go(-R.delta,!1),X(d,k,oe))).then(d=>{d=d||Wt(k,oe,!1),d&&(R.delta&&!ut(d,8)?i.go(-R.delta,!1):R.type===ds.pop&&ut(d,20)&&i.go(-1,!1)),bt(k,oe,d)}).catch(ns)}))}let dn=Kn(),ge=Kn(),ee;function X(y,N,R){Ct(y);const k=ge.list();return k.length?k.forEach(J=>J(y,N,R)):console.error(y),Promise.reject(y)}function ct(){return ee&&a.value!==It?Promise.resolve():new Promise((y,N)=>{dn.add([y,N])})}function Ct(y){return ee||(ee=!y,jn(),dn.list().forEach(([N,R])=>y?R(y):N()),dn.reset()),y}function tt(y,N,R,k){const{scrollBehavior:J}=t;if(!yn||!J)return Promise.resolve();const oe=!R&&E_(Ql(y.fullPath,0))||(k||!R)&&history.state&&history.state.scroll||null;return Hc().then(()=>J(y,N,oe)).then(d=>d&&y_(d)).catch(d=>X(d,y,N))}const Pe=y=>i.go(y);let pn;const _n=new Set,ks={currentRoute:a,listening:!0,addRoute:_,removeRoute:v,hasRoute:O,getRoutes:S,resolve:x,options:t,push:z,replace:fe,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:ge.add,isReady:ct,install(y){const N=this;y.component("RouterLink",sg),y.component("RouterView",Ru),y.config.globalProperties.$router=N,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Jt(a)}),yn&&!pn&&a.value===It&&(pn=!0,z(i.location).catch(J=>{}));const R={};for(const J in It)Object.defineProperty(R,J,{get:()=>a.value[J],enumerable:!0});y.provide(To,N),y.provide(Tu,kc(R)),y.provide(Br,a);const k=y.unmount;_n.add(y),y.unmount=function(){_n.delete(y),_n.size<1&&(c=It,et&&et(),et=null,a.value=It,pn=!1,ee=!1),k()}}};function we(y){return y.reduce((N,R)=>N.then(()=>fn(R)),Promise.resolve())}return ks}function ag(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(c=>xn(c,l))?s.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>xn(c,a))||i.push(a))}return[n,s,i]}const cg={__name:"App",setup(t){return(e,n)=>($n(),hu(Jt(Ru)))}},ug="modulepreload",hg=function(t){return"/"+t},ua={},zn=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link");i=Promise.all(n.map(o=>{if(o=hg(o),o in ua)return;ua[o]=!0;const l=o.endsWith(".css"),a=l?'[rel="stylesheet"]':"";if(!!s)for(let h=r.length-1;h>=0;h--){const f=r[h];if(f.href===o&&(!l||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":ug,l||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),l)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},fg="/assets/ISKLogoText-5R0GjBnR.png",Ro=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},dg={methods:{openNav(){const t=document.getElementById("mobile-nav-section");t.style.height==="0px"?(t.style.height="fit-content",t.style.opacity="1",t.style.pointerEvents="all"):(t.style.height="0",t.style.opacity="0",t.style.pointerEvents="none")},navClick(){const t=document.getElementsByClassName("mobile-nav-text");for(const e of t)e.style.pointerEvents="none"}}},pg={id:"nav"},_g=bp('<div class="nav-section" data-v-dee55393><a class="nav-text" href="/about" data-v-dee55393>About</a><a class="nav-text" href="https://docs.google.com/document/d/e/2PACX-1vTe_sI1G2pWT-D4oTsGsDW-W-6cRxPwfUoAJWYUUMqqbWAFRUdsPDrMAvksfG6mpJtDrzcUolQTjD-H/pub" target="_blank" data-v-dee55393>Meat for Sale</a></div><a href="/" data-v-dee55393><img class="nav-logo" alt="Indian Springs Katahdins" src="'+fg+'" data-v-dee55393></a><div class="nav-section" data-v-dee55393><a class="nav-text" href="/livestock" data-v-dee55393>Livestock</a><a class="nav-text" href="/recipes" data-v-dee55393>Recipes</a><a class="nav-text" href="/contact" data-v-dee55393>Contact</a></div>',3),gg={id:"mobile-nav-section",class:"mobile-nav-section",style:{height:"0px","pointer-events":"none"}};function mg(t,e,n,s,i,r){return $n(),Ni(je,null,[ue("nav",pg,[_g,ue("i",{onClick:e[0]||(e[0]=(...o)=>r.openNav&&r.openNav(...o)),class:"fa-solid fa-bars"})]),ue("div",gg,[ue("a",{onClick:e[1]||(e[1]=(...o)=>r.navClick&&r.navClick(...o)),class:"mobile-nav-text",href:"/about"},"About"),ue("a",{onClick:e[2]||(e[2]=(...o)=>r.navClick&&r.navClick(...o)),class:"mobile-nav-text",href:"https://docs.google.com/document/d/e/2PACX-1vTe_sI1G2pWT-D4oTsGsDW-W-6cRxPwfUoAJWYUUMqqbWAFRUdsPDrMAvksfG6mpJtDrzcUolQTjD-H/pub",target:"_blank"},"Meat for Sale"),ue("a",{onClick:e[3]||(e[3]=(...o)=>r.navClick&&r.navClick(...o)),class:"mobile-nav-text",href:"/livestock"},"Livestock"),ue("a",{onClick:e[4]||(e[4]=(...o)=>r.navClick&&r.navClick(...o)),class:"mobile-nav-text",href:"/recipes"},"Recipes"),ue("a",{onClick:e[5]||(e[5]=(...o)=>r.navClick&&r.navClick(...o)),class:"mobile-nav-text",href:"/contact"},"Contact")])],64)}const yg=Ro(dg,[["render",mg],["__scopeId","data-v-dee55393"]]),vg="/assets/ISKLogoTransparent-NojJMbXF.png",Eg={},Au=t=>(Kc("data-v-addfc409"),t=t(),zc(),t),bg={class:"banner"},Cg=Au(()=>ue("img",{class:"banner-img",alt:"Indian Springs Katahdins Logo",src:vg},null,-1)),wg=Au(()=>ue("h1",{class:"banner-info"},"At Indian Springs, we raise 100% grass-fed Katahdin sheep, rotationally grazing them on our farm in Trafalgar, Indiana. We sell meat cuts, whole lambs for butcher, and commercial breeding stock.",-1)),Ig=[Cg,wg];function Sg(t,e){return $n(),Ni("div",bg,Ig)}const Tg=Ro(Eg,[["render",Sg],["__scopeId","data-v-addfc409"]]);var ha={};/**
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
 */const Nu={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const C=function(t,e){if(!t)throw Un(e)},Un=function(t){return new Error("Firebase Database ("+Nu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Pu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Rg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ao={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(f=64)),s.push(n[u],n[h],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Rg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new Ag;const f=r<<2|l>>4;if(s.push(f),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const v=c<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ag extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xu=function(t){const e=Pu(t);return Ao.encodeByteArray(e,!0)},ti=function(t){return xu(t).replace(/\./g,"")},$r=function(t){try{return Ao.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ng(t){return Ou(void 0,t)}function Ou(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Pg(n)||(t[n]=Ou(t[n],e[n]));return t}function Pg(t){return t!=="__proto__"}/**
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
 */function xg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Og=()=>xg().__FIREBASE_DEFAULTS__,kg=()=>{if(typeof process>"u"||typeof ha>"u")return;const t=ha.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Dg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$r(t[1]);return e&&JSON.parse(e)},ku=()=>{try{return Og()||kg()||Dg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Mg=t=>{var e,n;return(n=(e=ku())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Lg=t=>{const e=Mg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Du=()=>{var t;return(t=ku())===null||t===void 0?void 0:t.config};/**
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
 */class ki{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Fg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ti(JSON.stringify(n)),ti(JSON.stringify(o)),""].join(".")}/**
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
 */function Bg(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bg())}function $g(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ug(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lu(){return Nu.NODE_ADMIN===!0}function Fu(){try{return typeof indexedDB=="object"}catch{return!1}}function Bu(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Wg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Hg="FirebaseError";class un extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Hg,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Di.prototype.create)}}class Di{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Vg(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new un(i,l,s)}}function Vg(t,e){return t.replace(jg,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const jg=/\{\$([^}]+)}/g;/**
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
 */function ps(t){return JSON.parse(t)}function de(t){return JSON.stringify(t)}/**
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
 */const $u=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ps($r(r[0])||""),n=ps($r(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},qg=function(t){const e=$u(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Gg=function(t){const e=$u(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function yt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function kn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function fa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ni(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function si(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(da(r)&&da(o)){if(!si(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function da(t){return t!==null&&typeof t=="object"}/**
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
 */function Kg(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class zg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function No(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Yg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,C(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Mi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Qg=1e3,Xg=2,Jg=4*60*60*1e3,Zg=.5;function pa(t,e=Qg,n=Xg){const s=e*Math.pow(n,t),i=Math.round(Zg*s*(Math.random()-.5)*2);return Math.min(Jg,s+i)}/**
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
 */function vt(t){return t&&t._delegate?t._delegate:t}class _t{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const jt="[DEFAULT]";/**
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
 */class em{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ki;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nm(e))try{this.getOrInitializeService({instanceIdentifier:jt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jt){return this.instances.has(e)}getOptions(e=jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:tm(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=jt){return this.component?this.component.multipleInstances?e:jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tm(t){return t===jt?void 0:t}function nm(t){return t.instantiationMode==="EAGER"}/**
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
 */class sm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new em(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const im={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},rm=se.INFO,om={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},lm=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=om[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Po{constructor(e){this.name=e,this._logLevel=rm,this._logHandler=lm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?im[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const am=(t,e)=>e.some(n=>t instanceof n);let _a,ga;function cm(){return _a||(_a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function um(){return ga||(ga=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uu=new WeakMap,Ur=new WeakMap,Wu=new WeakMap,rr=new WeakMap,xo=new WeakMap;function hm(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(xt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Uu.set(n,t)}).catch(()=>{}),xo.set(e,t),e}function fm(t){if(Ur.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ur.set(t,e)}let Wr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ur.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Wu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dm(t){Wr=t(Wr)}function pm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(or(this),e,...n);return Wu.set(s,e.sort?e.sort():[e]),xt(s)}:um().includes(t)?function(...e){return t.apply(or(this),e),xt(Uu.get(this))}:function(...e){return xt(t.apply(or(this),e))}}function _m(t){return typeof t=="function"?pm(t):(t instanceof IDBTransaction&&fm(t),am(t,cm())?new Proxy(t,Wr):t)}function xt(t){if(t instanceof IDBRequest)return hm(t);if(rr.has(t))return rr.get(t);const e=_m(t);return e!==t&&(rr.set(t,e),xo.set(e,t)),e}const or=t=>xo.get(t);function gm(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=xt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(xt(o.result),a.oldVersion,a.newVersion,xt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const mm=["get","getKey","getAll","getAllKeys","count"],ym=["put","add","delete","clear"],lr=new Map;function ma(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lr.get(e))return lr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=ym.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||mm.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return lr.set(e,r),r}dm(t=>({...t,get:(e,n,s)=>ma(e,n)||t.get(e,n,s),has:(e,n)=>!!ma(e,n)||t.has(e,n)}));/**
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
 */class vm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Em(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Em(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hr="@firebase/app",ya="0.9.26";/**
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
 */const tn=new Po("@firebase/app"),bm="@firebase/app-compat",Cm="@firebase/analytics-compat",wm="@firebase/analytics",Im="@firebase/app-check-compat",Sm="@firebase/app-check",Tm="@firebase/auth",Rm="@firebase/auth-compat",Am="@firebase/database",Nm="@firebase/database-compat",Pm="@firebase/functions",xm="@firebase/functions-compat",Om="@firebase/installations",km="@firebase/installations-compat",Dm="@firebase/messaging",Mm="@firebase/messaging-compat",Lm="@firebase/performance",Fm="@firebase/performance-compat",Bm="@firebase/remote-config",$m="@firebase/remote-config-compat",Um="@firebase/storage",Wm="@firebase/storage-compat",Hm="@firebase/firestore",Vm="@firebase/firestore-compat",jm="firebase",qm="10.7.2";/**
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
 */const Vr="[DEFAULT]",Gm={[Hr]:"fire-core",[bm]:"fire-core-compat",[wm]:"fire-analytics",[Cm]:"fire-analytics-compat",[Sm]:"fire-app-check",[Im]:"fire-app-check-compat",[Tm]:"fire-auth",[Rm]:"fire-auth-compat",[Am]:"fire-rtdb",[Nm]:"fire-rtdb-compat",[Pm]:"fire-fn",[xm]:"fire-fn-compat",[Om]:"fire-iid",[km]:"fire-iid-compat",[Dm]:"fire-fcm",[Mm]:"fire-fcm-compat",[Lm]:"fire-perf",[Fm]:"fire-perf-compat",[Bm]:"fire-rc",[$m]:"fire-rc-compat",[Um]:"fire-gcs",[Wm]:"fire-gcs-compat",[Hm]:"fire-fst",[Vm]:"fire-fst-compat","fire-js":"fire-js",[jm]:"fire-js-all"};/**
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
 */const ii=new Map,jr=new Map;function Km(t,e){try{t.container.addComponent(e)}catch(n){tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ft(t){const e=t.name;if(jr.has(e))return tn.debug(`There were multiple attempts to register component ${e}.`),!1;jr.set(e,t);for(const n of ii.values())Km(n,t);return!0}function Ts(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const zm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ot=new Di("app","Firebase",zm);/**
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
 */class Ym{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new _t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}}/**
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
 */const Qm=qm;function Hu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Vr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ot.create("bad-app-name",{appName:String(i)});if(n||(n=Du()),!n)throw Ot.create("no-options");const r=ii.get(i);if(r){if(si(n,r.options)&&si(s,r.config))return r;throw Ot.create("duplicate-app",{appName:i})}const o=new sm(i);for(const a of jr.values())o.addComponent(a);const l=new Ym(n,s,o);return ii.set(i,l),l}function Vu(t=Vr){const e=ii.get(t);if(!e&&t===Vr&&Du())return Hu();if(!e)throw Ot.create("no-app",{appName:t});return e}function lt(t,e,n){var s;let i=(s=Gm[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tn.warn(l.join(" "));return}Ft(new _t(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Xm="firebase-heartbeat-database",Jm=1,_s="firebase-heartbeat-store";let ar=null;function ju(){return ar||(ar=gm(Xm,Jm,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_s)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ot.create("idb-open",{originalErrorMessage:t.message})})),ar}async function Zm(t){try{return await(await ju()).transaction(_s).objectStore(_s).get(qu(t))}catch(e){if(e instanceof un)tn.warn(e.message);else{const n=Ot.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tn.warn(n.message)}}}async function va(t,e){try{const s=(await ju()).transaction(_s,"readwrite");await s.objectStore(_s).put(e,qu(t)),await s.done}catch(n){if(n instanceof un)tn.warn(n.message);else{const s=Ot.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});tn.warn(s.message)}}}function qu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ey=1024,ty=30*24*60*60*1e3;class ny{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iy(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ea();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=ty}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ea(),{heartbeatsToSend:s,unsentEntries:i}=sy(this._heartbeatsCache.heartbeats),r=ti(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ea(){return new Date().toISOString().substring(0,10)}function sy(t,e=ey){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ba(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ba(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class iy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fu()?Bu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Zm(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return va(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return va(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ba(t){return ti(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function ry(t){Ft(new _t("platform-logger",e=>new vm(e),"PRIVATE")),Ft(new _t("heartbeat",e=>new ny(e),"PRIVATE")),lt(Hr,ya,t),lt(Hr,ya,"esm2017"),lt("fire-js","")}ry("");var Ca={};const wa="@firebase/database",Ia="1.0.2";/**
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
 */let Gu="";function oy(t){Gu=t}/**
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
 */class ly{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),de(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ps(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class ay{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return yt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ku=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ly(e)}}catch{}return new ay},Kt=Ku("localStorage"),qr=Ku("sessionStorage");/**
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
 */const Sn=new Po("@firebase/database"),cy=function(){let t=1;return function(){return t++}}(),zu=function(t){const e=Yg(t),n=new zg;n.update(e);const s=n.digest();return Ao.encodeByteArray(s)},Rs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Rs.apply(null,s):typeof s=="object"?e+=de(s):e+=s,e+=" "}return e};let Zt=null,Sa=!0;const uy=function(t,e){C(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Sn.logLevel=se.VERBOSE,Zt=Sn.log.bind(Sn),e&&qr.set("logging_enabled",!0)):typeof t=="function"?Zt=t:(Zt=null,qr.remove("logging_enabled"))},Ie=function(...t){if(Sa===!0&&(Sa=!1,Zt===null&&qr.get("logging_enabled")===!0&&uy(!0)),Zt){const e=Rs.apply(null,t);Zt(e)}},As=function(t){return function(...e){Ie(t,...e)}},Gr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Rs(...t);Sn.error(e)},gt=function(...t){const e=`FIREBASE FATAL ERROR: ${Rs(...t)}`;throw Sn.error(e),new Error(e)},ke=function(...t){const e="FIREBASE WARNING: "+Rs(...t);Sn.warn(e)},hy=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Yu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},fy=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Dn="[MIN_NAME]",nn="[MAX_NAME]",Wn=function(t,e){if(t===e)return 0;if(t===Dn||e===nn)return-1;if(e===Dn||t===nn)return 1;{const n=Ta(t),s=Ta(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},dy=function(t,e){return t===e?0:t<e?-1:1},Yn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+de(e))},Oo=function(t){if(typeof t!="object"||t===null)return de(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=de(e[s]),n+=":",n+=Oo(t[e[s]]);return n+="}",n},Qu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Fe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Xu=function(t){C(!Yu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},py=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},_y=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function gy(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const my=new RegExp("^-?(0*)\\d{1,10}$"),yy=-2147483648,vy=2147483647,Ta=function(t){if(my.test(t)){const e=Number(t);if(e>=yy&&e<=vy)return e}return null},Hn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},Ey=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},is=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class by{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Cy{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ie("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ke(e)}}class Tn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Tn.OWNER="owner";/**
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
 */const ko="5",Ju="v",Zu="s",eh="r",th="f",nh=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,sh="ls",ih="p",Kr="ac",rh="websocket",oh="long_polling";/**
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
 */class lh{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function wy(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ah(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let s;if(e===rh)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===oh)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);wy(t)&&(n.ns=t.namespace);const i=[];return Fe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Iy{constructor(){this.counters_={}}incrementCounter(e,n=1){yt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Ng(this.counters_)}}/**
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
 */const cr={},ur={};function Do(t){const e=t.toString();return cr[e]||(cr[e]=new Iy),cr[e]}function Sy(t,e){const n=t.toString();return ur[n]||(ur[n]=e()),ur[n]}/**
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
 */class Ty{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Hn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ra="start",Ry="close",Ay="pLPCommand",Ny="pRTLPCB",ch="id",uh="pw",hh="ser",Py="cb",xy="seg",Oy="ts",ky="d",Dy="dframe",fh=1870,dh=30,My=fh-dh,Ly=25e3,Fy=3e4;class En{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=As(e),this.stats_=Do(n),this.urlFn=a=>(this.appCheckToken&&(a[Kr]=this.appCheckToken),ah(n,oh,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Ty(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Fy)),fy(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Mo((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ra)this.id=l,this.password=a;else if(o===Ry)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ra]="t",s[hh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Py]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ju]=ko,this.transportSessionId&&(s[Zu]=this.transportSessionId),this.lastSessionId&&(s[sh]=this.lastSessionId),this.applicationId&&(s[ih]=this.applicationId),this.appCheckToken&&(s[Kr]=this.appCheckToken),typeof location<"u"&&location.hostname&&nh.test(location.hostname)&&(s[eh]=th);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){En.forceAllow_=!0}static forceDisallow(){En.forceDisallow_=!0}static isAvailable(){return En.forceAllow_?!0:!En.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!py()&&!_y()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=de(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=xu(n),i=Qu(s,My);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Dy]="t",s[ch]=e,s[uh]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=de(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Mo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=cy(),window[Ay+this.uniqueCallbackIdentifier]=e,window[Ny+this.uniqueCallbackIdentifier]=n,this.myIFrame=Mo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ie("frame writing exception"),l.stack&&Ie(l.stack),Ie(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ie("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ch]=this.myID,e[uh]=this.myPW,e[hh]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+dh+s.length<=fh;){const o=this.pendingSegs.shift();s=s+"&"+xy+i+"="+o.seg+"&"+Oy+i+"="+o.ts+"&"+ky+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Ly)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ie("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const By=16384,$y=45e3;let ri=null;typeof MozWebSocket<"u"?ri=MozWebSocket:typeof WebSocket<"u"&&(ri=WebSocket);class Ge{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=As(this.connId),this.stats_=Do(n),this.connURL=Ge.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Ju]=ko,typeof location<"u"&&location.hostname&&nh.test(location.hostname)&&(o[eh]=th),n&&(o[Zu]=n),s&&(o[sh]=s),i&&(o[Kr]=i),r&&(o[ih]=r),ah(e,rh,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kt.set("previous_websocket_failure",!0);try{let s;Lu(),this.mySock=new ri(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ge.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ri!==null&&!Ge.forceDisallow_}static previouslyFailed(){return Kt.isInMemoryStorage||Kt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Kt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ps(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=de(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Qu(n,By);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor($y))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ge.responsesRequiredToBeHealthy=2;Ge.healthyTimeout=3e4;/**
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
 */class gs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[En,Ge]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ge&&Ge.isAvailable();let s=n&&!Ge.previouslyFailed();if(e.webSocketOnly&&(n||ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ge];else{const i=this.transports_=[];for(const r of gs.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);gs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}gs.globalTransportInitialized_=!1;/**
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
 */const Uy=6e4,Wy=5e3,Hy=10*1024,Vy=100*1024,hr="t",Aa="d",jy="s",Na="r",qy="e",Pa="o",xa="a",Oa="n",ka="p",Gy="h";class Ky{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=As("c:"+this.id+":"),this.transportManager_=new gs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=is(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Vy?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Hy?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(hr in e){const n=e[hr];n===xa?this.upgradeIfSecondaryHealthy_():n===Na?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Pa&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Yn("t",e),s=Yn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ka,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:xa,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Oa,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Yn("t",e),s=Yn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Yn(hr,e);if(Aa in e){const s=e[Aa];if(n===Gy){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Oa){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===jy?this.onConnectionShutdown_(s):n===Na?this.onReset_(s):n===qy?Gr("Server Error: "+s):n===Pa?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Gr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ko!==s&&ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),is(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Uy))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):is(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Wy))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ka,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class ph{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class _h{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class oi extends _h{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Mu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new oi}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Da=32,Ma=768;class ne{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Y(){return new ne("")}function G(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Bt(t){return t.pieces_.length-t.pieceNum_}function ie(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ne(t.pieces_,e)}function gh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function zy(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function mh(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function yh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ne(e,0)}function pe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ne)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ne(n,0)}function j(t){return t.pieceNum_>=t.pieces_.length}function Ne(t,e){const n=G(t),s=G(e);if(n===null)return e;if(n===s)return Ne(ie(t),ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function vh(t,e){if(Bt(t)!==Bt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ze(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Bt(t)>Bt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Yy{constructor(e,n){this.errorPrefix_=n,this.parts_=mh(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Mi(this.parts_[s]);Eh(this)}}function Qy(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Mi(e),Eh(t)}function Xy(t){const e=t.parts_.pop();t.byteLength_-=Mi(e),t.parts_.length>0&&(t.byteLength_-=1)}function Eh(t){if(t.byteLength_>Ma)throw new Error(t.errorPrefix_+"has a key path longer than "+Ma+" bytes ("+t.byteLength_+").");if(t.parts_.length>Da)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Da+") or object contains a cycle "+qt(t))}function qt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Lo extends _h{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Lo}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Qn=1e3,Jy=60*5*1e3,La=30*1e3,Zy=1.3,ev=3e4,tv="server_kill",Fa=3;class pt extends ph{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=pt.nextPersistentConnectionId_++,this.log_=As("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Qn,this.maxReconnectDelay_=Jy,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Lu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Lo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&oi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(de(r)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ki,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;pt.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&yt(e,"w")){const s=kn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Gg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=La)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=qg(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+de(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Gr("Unrecognized action received from server: "+de(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Qn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Qn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ev&&(this.reconnectDelay_=Qn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Zy)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+pt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){C(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ie("getToken() completed but was canceled"):(Ie("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new Ky(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{ke(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(tv)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ke(h),a())}}}interrupt(e){Ie("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ie("Resuming connection for reason: "+e),delete this.interruptReasons_[e],fa(this.interruptReasons_)&&(this.reconnectDelay_=Qn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Oo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ne(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ie("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Fa&&(this.reconnectDelay_=La,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ie("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Fa&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Gu.replace(/\./g,"-")]=1,Mu()?e["framework.cordova"]=1:Ug()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=oi.getInstance().currentlyOnline();return fa(this.interruptReasons_)&&e}}pt.nextPersistentConnectionId_=0;pt.nextConnectionId_=0;/**
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
 */class V{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new V(e,n)}}/**
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
 */class Li{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new V(Dn,e),i=new V(Dn,n);return this.compare(s,i)!==0}minPost(){return V.MIN}}/**
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
 */let Us;class bh extends Li{static get __EMPTY_NODE(){return Us}static set __EMPTY_NODE(e){Us=e}compare(e,n){return Wn(e.name,n.name)}isDefinedOn(e){throw Un("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return V.MIN}maxPost(){return new V(nn,Us)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new V(e,Us)}toString(){return".key"}}const Rn=new bh;/**
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
 */class Ws{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ve{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ve.RED,this.left=i??Oe.EMPTY_NODE,this.right=r??Oe.EMPTY_NODE}copy(e,n,s,i,r){return new ve(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Oe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Oe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ve.RED=!0;ve.BLACK=!1;class nv{copy(e,n,s,i,r){return this}insert(e,n,s){return new ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Oe{constructor(e,n=Oe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Oe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ve.BLACK,null,null))}remove(e){return new Oe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ve.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ws(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ws(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ws(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ws(this.root_,null,this.comparator_,!0,e)}}Oe.EMPTY_NODE=new nv;/**
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
 */function sv(t,e){return Wn(t.name,e.name)}function Fo(t,e){return Wn(t,e)}/**
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
 */let zr;function iv(t){zr=t}const Ch=function(t){return typeof t=="number"?"number:"+Xu(t):"string:"+t},wh=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&yt(e,".sv"),"Priority must be a string or number.")}else C(t===zr||t.isEmpty(),"priority of unexpected type.");C(t===zr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ba;class ye{constructor(e,n=ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),wh(this.priorityNode_)}static set __childrenNodeConstructor(e){Ba=e}static get __childrenNodeConstructor(){return Ba}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:G(e)===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=G(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(C(s!==".priority"||Bt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ch(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Xu(this.value_):e+=this.value_,this.lazyHash_=zu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ye.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ye.VALUE_TYPE_ORDER.indexOf(n),r=ye.VALUE_TYPE_ORDER.indexOf(s);return C(i>=0,"Unknown leaf type: "+n),C(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ih,Sh;function rv(t){Ih=t}function ov(t){Sh=t}class lv extends Li{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Wn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return V.MIN}maxPost(){return new V(nn,new ye("[PRIORITY-POST]",Sh))}makePost(e,n){const s=Ih(e);return new V(n,new ye("[PRIORITY-POST]",s))}toString(){return".priority"}}const he=new lv;/**
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
 */const av=Math.log(2);class cv{constructor(e){const n=r=>parseInt(Math.log(r)/av,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const li=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=t[a],f=n?n(h):h,new ve(f,h.node,ve.BLACK,null,null);{const _=parseInt(u/2,10)+a,v=i(a,_),S=i(_+1,c);return h=t[_],f=n?n(h):h,new ve(f,h.node,ve.BLACK,v,S)}},r=function(a){let c=null,u=null,h=t.length;const f=function(v,S){const O=h-v,x=h;h-=v;const F=i(O+1,x),B=t[O],z=n?n(B):B;_(new ve(z,B.node,S,null,F))},_=function(v){c?(c.left=v,c=v):(u=v,c=v)};for(let v=0;v<a.count;++v){const S=a.nextBitIsOne(),O=Math.pow(2,a.count-(v+1));S?f(O,ve.BLACK):(f(O,ve.BLACK),f(O,ve.RED))}return u},o=new cv(t.length),l=r(o);return new Oe(s||e,l)};/**
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
 */let fr;const mn={};class ht{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(mn&&he,"ChildrenNode.ts has not been loaded"),fr=fr||new ht({".priority":mn},{".priority":he}),fr}get(e){const n=kn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Oe?n:null}hasIndex(e){return yt(this.indexSet_,e.toString())}addIndex(e,n){C(e!==Rn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(V.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=li(s,e.getCompare()):l=mn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new ht(u,c)}addToIndexes(e,n){const s=ni(this.indexes_,(i,r)=>{const o=kn(this.indexSet_,r);if(C(o,"Missing index implementation for "+r),i===mn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(V.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),li(l,o.getCompare())}else return mn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new V(e.name,l))),a.insert(e,e.node)}});return new ht(s,this.indexSet_)}removeFromIndexes(e,n){const s=ni(this.indexes_,i=>{if(i===mn)return i;{const r=n.get(e.name);return r?i.remove(new V(e.name,r)):i}});return new ht(s,this.indexSet_)}}/**
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
 */let Xn;class L{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&wh(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Xn||(Xn=new L(new Oe(Fo),null,ht.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Xn}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Xn:n}}getChild(e){const n=G(e);return n===null?this:this.getImmediateChild(n).getChild(ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new V(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Xn:this.priorityNode_;return new L(i,o,r)}}updateChild(e,n){const s=G(e);if(s===null)return n;{C(G(e)!==".priority"||Bt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ie(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(he,(o,l)=>{n[o]=l.val(e),s++,r&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ch(this.getPriority().val())+":"),this.forEachChild(he,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":zu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new V(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new V(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new V(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,V.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,V.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ns?-1:0}withIndex(e){if(e===Rn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Rn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(he),i=n.getIterator(he);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Rn?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class uv extends L{constructor(){super(new Oe(Fo),L.EMPTY_NODE,ht.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const Ns=new uv;Object.defineProperties(V,{MIN:{value:new V(Dn,L.EMPTY_NODE)},MAX:{value:new V(nn,Ns)}});bh.__EMPTY_NODE=L.EMPTY_NODE;ye.__childrenNodeConstructor=L;iv(Ns);ov(Ns);/**
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
 */const hv=!0;function Ee(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ye(n,Ee(e))}if(!(t instanceof Array)&&hv){const n=[];let s=!1;if(Fe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ee(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new V(o,a)))}}),n.length===0)return L.EMPTY_NODE;const r=li(n,sv,o=>o.name,Fo);if(s){const o=li(n,he.getCompare());return new L(r,Ee(e),new ht({".priority":o},{".priority":he}))}else return new L(r,Ee(e),ht.Default)}else{let n=L.EMPTY_NODE;return Fe(t,(s,i)=>{if(yt(t,s)&&s.substring(0,1)!=="."){const r=Ee(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ee(e))}}rv(Ee);/**
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
 */class fv extends Li{constructor(e){super(),this.indexPath_=e,C(!j(e)&&G(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Wn(e.name,n.name):r}makePost(e,n){const s=Ee(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,s);return new V(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,Ns);return new V(nn,e)}toString(){return mh(this.indexPath_,0).join("/")}}/**
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
 */class dv extends Li{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Wn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return V.MIN}maxPost(){return V.MAX}makePost(e,n){const s=Ee(e);return new V(n,s)}toString(){return".value"}}const pv=new dv;/**
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
 */function Th(t){return{type:"value",snapshotNode:t}}function Mn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ms(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ys(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function _v(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Bo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ms(n,l)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Mn(n,s)):o.trackChildChange(ys(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(he,(i,r)=>{n.hasChild(i)||s.trackChildChange(ms(i,r))}),n.isLeafNode()||n.forEachChild(he,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ys(i,r,o))}else s.trackChildChange(Mn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class vs{constructor(e){this.indexedFilter_=new Bo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=vs.getStartPost_(e),this.endPost_=vs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new V(n,s))||(s=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const r=this;return n.forEachChild(he,(o,l)=>{r.matches(new V(o,l))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class gv{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new vs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new V(n,s))||(s=L.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;C(l.numChildren()===this.limit_,"");const a=new V(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(ys(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ms(n,h));const S=l.updateImmediateChild(n,L.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Mn(f.name,f.node)),S.updateImmediateChild(f.name,f.node)):S}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(ms(c.name,c.node)),r.trackChildChange(Mn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,L.EMPTY_NODE)):e}}/**
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
 */class $o{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=he}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Dn}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:nn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===he}copy(){const e=new $o;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function mv(t){return t.loadsAllData()?new Bo(t.getIndex()):t.hasLimit()?new gv(t):new vs(t)}function $a(t){const e={};if(t.isDefault())return e;let n;if(t.index_===he?n="$priority":t.index_===pv?n="$value":t.index_===Rn?n="$key":(C(t.index_ instanceof fv,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=de(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=de(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+de(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=de(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+de(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ua(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==he&&(e.i=t.index_.toString()),e}/**
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
 */class ai extends ph{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=As("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ai.getListenId_(e,s),l={};this.listens_[o]=l;const a=$a(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),kn(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=ai.getListenId_(e,n);delete this.listens_[s]}get(e){const n=$a(e._queryParams),s=e._path.toString(),i=new ki;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Kg(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ps(l.responseText)}catch{ke("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&ke("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class yv{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ci(){return{value:null,children:new Map}}function Rh(t,e,n){if(j(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=G(e);t.children.has(s)||t.children.set(s,ci());const i=t.children.get(s);e=ie(e),Rh(i,e,n)}}function Yr(t,e,n){t.value!==null?n(e,t.value):vv(t,(s,i)=>{const r=new ne(e.toString()+"/"+s);Yr(i,r,n)})}function vv(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Ev{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Fe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Wa=10*1e3,bv=30*1e3,Cv=5*60*1e3;class wv{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Ev(e);const s=Wa+(bv-Wa)*Math.random();is(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Fe(e,(i,r)=>{r>0&&yt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),is(this.reportStats_.bind(this),Math.floor(Math.random()*2*Cv))}}/**
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
 */var Ye;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ye||(Ye={}));function Ah(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Uo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Wo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class ui{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ye.ACK_USER_WRITE,this.source=Ah()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ne(e));return new ui(Y(),n,this.revert)}}else return C(G(this.path)===e,"operationForChild called for unrelated child."),new ui(ie(this.path),this.affectedTree,this.revert)}}/**
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
 */class Es{constructor(e,n){this.source=e,this.path=n,this.type=Ye.LISTEN_COMPLETE}operationForChild(e){return j(this.path)?new Es(this.source,Y()):new Es(this.source,ie(this.path))}}/**
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
 */class sn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ye.OVERWRITE}operationForChild(e){return j(this.path)?new sn(this.source,Y(),this.snap.getImmediateChild(e)):new sn(this.source,ie(this.path),this.snap)}}/**
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
 */class bs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ye.MERGE}operationForChild(e){if(j(this.path)){const n=this.children.subtree(new ne(e));return n.isEmpty()?null:n.value?new sn(this.source,Y(),n.value):new bs(this.source,Y(),n)}else return C(G(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new bs(this.source,ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class $t{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const n=G(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Iv{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Sv(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(_v(o.childName,o.snapshotNode))}),Jn(t,i,"child_removed",e,s,n),Jn(t,i,"child_added",e,s,n),Jn(t,i,"child_moved",r,s,n),Jn(t,i,"child_changed",e,s,n),Jn(t,i,"value",e,s,n),i}function Jn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Rv(t,l,a)),o.forEach(l=>{const a=Tv(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Tv(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Rv(t,e,n){if(e.childName==null||n.childName==null)throw Un("Should only compare child_ events.");const s=new V(e.childName,e.snapshotNode),i=new V(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Fi(t,e){return{eventCache:t,serverCache:e}}function rs(t,e,n,s){return Fi(new $t(e,n,s),t.serverCache)}function Nh(t,e,n,s){return Fi(t.eventCache,new $t(e,n,s))}function hi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function rn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let dr;const Av=()=>(dr||(dr=new Oe(dy)),dr);class re{constructor(e,n=Av()){this.value=e,this.children=n}static fromObject(e){let n=new re(null);return Fe(e,(s,i)=>{n=n.set(new ne(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Y(),value:this.value};if(j(e))return null;{const s=G(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ie(e),n);return r!=null?{path:pe(new ne(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const n=G(e),s=this.children.get(n);return s!==null?s.subtree(ie(e)):new re(null)}}set(e,n){if(j(e))return new re(n,this.children);{const s=G(e),r=(this.children.get(s)||new re(null)).set(ie(e),n),o=this.children.insert(s,r);return new re(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new re(null):new re(null,this.children);{const n=G(e),s=this.children.get(n);if(s){const i=s.remove(ie(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new re(null):new re(this.value,r)}else return this}}get(e){if(j(e))return this.value;{const n=G(e),s=this.children.get(n);return s?s.get(ie(e)):null}}setTree(e,n){if(j(e))return n;{const s=G(e),r=(this.children.get(s)||new re(null)).setTree(ie(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new re(this.value,o)}}fold(e){return this.fold_(Y(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(pe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Y(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(j(e))return null;{const r=G(e),o=this.children.get(r);return o?o.findOnPath_(ie(e),pe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Y(),n)}foreachOnPath_(e,n,s){if(j(e))return this;{this.value&&s(n,this.value);const i=G(e),r=this.children.get(i);return r?r.foreachOnPath_(ie(e),pe(n,i),s):new re(null)}}foreach(e){this.foreach_(Y(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(pe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Xe{constructor(e){this.writeTree_=e}static empty(){return new Xe(new re(null))}}function os(t,e,n){if(j(e))return new Xe(new re(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ne(i,e);return r=r.updateChild(o,n),new Xe(t.writeTree_.set(i,r))}else{const i=new re(n),r=t.writeTree_.setTree(e,i);return new Xe(r)}}}function Ha(t,e,n){let s=t;return Fe(n,(i,r)=>{s=os(s,pe(e,i),r)}),s}function Va(t,e){if(j(e))return Xe.empty();{const n=t.writeTree_.setTree(e,new re(null));return new Xe(n)}}function Qr(t,e){return hn(t,e)!=null}function hn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ne(n.path,e)):null}function ja(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(he,(s,i)=>{e.push(new V(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new V(s,i.value))}),e}function kt(t,e){if(j(e))return t;{const n=hn(t,e);return n!=null?new Xe(new re(n)):new Xe(t.writeTree_.subtree(e))}}function Xr(t){return t.writeTree_.isEmpty()}function Ln(t,e){return Ph(Y(),t.writeTree_,e)}function Ph(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(C(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Ph(pe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(pe(t,".priority"),s)),n}}/**
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
 */function Bi(t,e){return Dh(e,t)}function Nv(t,e,n,s,i){C(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=os(t.visibleWrites,e,n)),t.lastWriteId=s}function Pv(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function xv(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Ov(l,s.path)?i=!1:ze(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return kv(t),!0;if(s.snap)t.visibleWrites=Va(t.visibleWrites,s.path);else{const l=s.children;Fe(l,a=>{t.visibleWrites=Va(t.visibleWrites,pe(s.path,a))})}return!0}else return!1}function Ov(t,e){if(t.snap)return ze(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ze(pe(t.path,n),e))return!0;return!1}function kv(t){t.visibleWrites=xh(t.allWrites,Dv,Y()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Dv(t){return t.visible}function xh(t,e,n){let s=Xe.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)ze(n,o)?(l=Ne(n,o),s=os(s,l,r.snap)):ze(o,n)&&(l=Ne(o,n),s=os(s,Y(),r.snap.getChild(l)));else if(r.children){if(ze(n,o))l=Ne(n,o),s=Ha(s,l,r.children);else if(ze(o,n))if(l=Ne(o,n),j(l))s=Ha(s,Y(),r.children);else{const a=kn(r.children,G(l));if(a){const c=a.getChild(ie(l));s=os(s,Y(),c)}}}else throw Un("WriteRecord should have .snap or .children")}}return s}function Oh(t,e,n,s,i){if(!s&&!i){const r=hn(t.visibleWrites,e);if(r!=null)return r;{const o=kt(t.visibleWrites,e);if(Xr(o))return n;if(n==null&&!Qr(o,Y()))return null;{const l=n||L.EMPTY_NODE;return Ln(o,l)}}}else{const r=kt(t.visibleWrites,e);if(!i&&Xr(r))return n;if(!i&&n==null&&!Qr(r,Y()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ze(c.path,e)||ze(e,c.path))},l=xh(t.allWrites,o,e),a=n||L.EMPTY_NODE;return Ln(l,a)}}}function Mv(t,e,n){let s=L.EMPTY_NODE;const i=hn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(he,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=kt(t.visibleWrites,e);return n.forEachChild(he,(o,l)=>{const a=Ln(kt(r,new ne(o)),l);s=s.updateImmediateChild(o,a)}),ja(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=kt(t.visibleWrites,e);return ja(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Lv(t,e,n,s,i){C(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=pe(e,n);if(Qr(t.visibleWrites,r))return null;{const o=kt(t.visibleWrites,r);return Xr(o)?i.getChild(n):Ln(o,i.getChild(n))}}function Fv(t,e,n,s){const i=pe(e,n),r=hn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=kt(t.visibleWrites,i);return Ln(o,s.getNode().getImmediateChild(n))}else return null}function Bv(t,e){return hn(t.visibleWrites,e)}function $v(t,e,n,s,i,r,o){let l;const a=kt(t.visibleWrites,e),c=hn(a,Y());if(c!=null)l=c;else if(n!=null)l=Ln(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function Uv(){return{visibleWrites:Xe.empty(),allWrites:[],lastWriteId:-1}}function fi(t,e,n,s){return Oh(t.writeTree,t.treePath,e,n,s)}function Ho(t,e){return Mv(t.writeTree,t.treePath,e)}function qa(t,e,n,s){return Lv(t.writeTree,t.treePath,e,n,s)}function di(t,e){return Bv(t.writeTree,pe(t.treePath,e))}function Wv(t,e,n,s,i,r){return $v(t.writeTree,t.treePath,e,n,s,i,r)}function Vo(t,e,n){return Fv(t.writeTree,t.treePath,e,n)}function kh(t,e){return Dh(pe(t.treePath,e),t.writeTree)}function Dh(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Hv{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ys(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ms(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Mn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ys(s,e.snapshotNode,i.oldSnap));else throw Un("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Vv{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Mh=new Vv;class jo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new $t(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Vo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:rn(this.viewCache_),r=Wv(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function jv(t){return{filter:t}}function qv(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Gv(t,e,n,s,i){const r=new Hv;let o,l;if(n.type===Ye.OVERWRITE){const c=n;c.source.fromUser?o=Jr(t,e,c.path,c.snap,s,i,r):(C(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!j(c.path),o=pi(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Ye.MERGE){const c=n;c.source.fromUser?o=zv(t,e,c.path,c.children,s,i,r):(C(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Zr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Ye.ACK_USER_WRITE){const c=n;c.revert?o=Xv(t,e,c.path,s,i,r):o=Yv(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Ye.LISTEN_COMPLETE)o=Qv(t,e,n.path,s,r);else throw Un("Unknown operation type: "+n.type);const a=r.getChanges();return Kv(e,o,a),{viewCache:o,changes:a}}function Kv(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=hi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Th(hi(e)))}}function Lh(t,e,n,s,i,r){const o=e.eventCache;if(di(s,n)!=null)return e;{let l,a;if(j(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=rn(e),u=c instanceof L?c:L.EMPTY_NODE,h=Ho(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=fi(s,rn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=G(n);if(c===".priority"){C(Bt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=qa(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ie(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=qa(s,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Vo(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return rs(e,l,o.isFullyInitialized()||j(n),t.filter.filtersNodes())}}function pi(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(j(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=G(n);if(!a.isCompleteForPath(n)&&Bt(n)>1)return e;const v=ie(n),O=a.getNode().getImmediateChild(_).updateChild(v,s);_===".priority"?c=u.updatePriority(a.getNode(),O):c=u.updateChild(a.getNode(),_,O,v,Mh,null)}const h=Nh(e,c,a.isFullyInitialized()||j(n),u.filtersNodes()),f=new jo(i,h,r);return Lh(t,h,n,i,f,l)}function Jr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new jo(i,e,r);if(j(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=rs(e,c,!0,t.filter.filtersNodes());else{const h=G(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=rs(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=ie(n),_=l.getNode().getImmediateChild(h);let v;if(j(f))v=s;else{const S=u.getCompleteChild(h);S!=null?gh(f)===".priority"&&S.getChild(yh(f)).isEmpty()?v=S:v=S.updateChild(f,s):v=L.EMPTY_NODE}if(_.equals(v))a=e;else{const S=t.filter.updateChild(l.getNode(),h,v,f,u,o);a=rs(e,S,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Ga(t,e){return t.eventCache.isCompleteForChild(e)}function zv(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=pe(n,a);Ga(e,G(u))&&(l=Jr(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=pe(n,a);Ga(e,G(u))||(l=Jr(t,l,u,c,i,r,o))}),l}function Ka(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Zr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;j(n)?c=s:c=new re(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),v=Ka(t,_,f);a=pi(t,a,new ne(h),v,i,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!_){const v=e.serverCache.getNode().getImmediateChild(h),S=Ka(t,v,f);a=pi(t,a,new ne(h),S,i,r,o,l)}}),a}function Yv(t,e,n,s,i,r,o){if(di(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(j(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return pi(t,e,n,a.getNode().getChild(n),i,r,l,o);if(j(n)){let c=new re(null);return a.getNode().forEachChild(Rn,(u,h)=>{c=c.set(new ne(u),h)}),Zr(t,e,n,c,i,r,l,o)}else return e}else{let c=new re(null);return s.foreach((u,h)=>{const f=pe(n,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),Zr(t,e,n,c,i,r,l,o)}}function Qv(t,e,n,s,i){const r=e.serverCache,o=Nh(e,r.getNode(),r.isFullyInitialized()||j(n),r.isFiltered());return Lh(t,o,n,s,Mh,i)}function Xv(t,e,n,s,i,r){let o;if(di(s,n)!=null)return e;{const l=new jo(s,e,i),a=e.eventCache.getNode();let c;if(j(n)||G(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=fi(s,rn(e));else{const h=e.serverCache.getNode();C(h instanceof L,"serverChildren would be complete if leaf node"),u=Ho(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=G(n);let h=Vo(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,ie(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,L.EMPTY_NODE,ie(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=fi(s,rn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||di(s,Y())!=null,rs(e,c,o,t.filter.filtersNodes())}}/**
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
 */class Jv{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Bo(s.getIndex()),r=mv(s);this.processor_=jv(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(L.EMPTY_NODE,l.getNode(),null),u=new $t(a,o.isFullyInitialized(),i.filtersNodes()),h=new $t(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Fi(h,u),this.eventGenerator_=new Iv(this.query_)}get query(){return this.query_}}function Zv(t){return t.viewCache_.serverCache.getNode()}function eE(t){return hi(t.viewCache_)}function tE(t,e){const n=rn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!j(e)&&!n.getImmediateChild(G(e)).isEmpty())?n.getChild(e):null}function za(t){return t.eventRegistrations_.length===0}function nE(t,e){t.eventRegistrations_.push(e)}function Ya(t,e,n){const s=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Qa(t,e,n,s){e.type===Ye.MERGE&&e.source.queryId!==null&&(C(rn(t.viewCache_),"We should always have a full cache before handling merges"),C(hi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Gv(t.processor_,i,e,n,s);return qv(t.processor_,r.viewCache),C(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Fh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function sE(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(he,(r,o)=>{s.push(Mn(r,o))}),n.isFullyInitialized()&&s.push(Th(n.getNode())),Fh(t,s,n.getNode(),e)}function Fh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Sv(t.eventGenerator_,e,n,i)}/**
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
 */let _i;class Bh{constructor(){this.views=new Map}}function iE(t){C(!_i,"__referenceConstructor has already been defined"),_i=t}function rE(){return C(_i,"Reference.ts has not been loaded"),_i}function oE(t){return t.views.size===0}function qo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return C(r!=null,"SyncTree gave us an op for an invalid query."),Qa(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Qa(o,e,n,s));return r}}function $h(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=fi(n,i?s:null),a=!1;l?a=!0:s instanceof L?(l=Ho(n,s),a=!1):(l=L.EMPTY_NODE,a=!1);const c=Fi(new $t(l,a,!1),new $t(s,i,!1));return new Jv(e,c)}return o}function lE(t,e,n,s,i,r){const o=$h(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),nE(o,n),sE(o,n)}function aE(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Ut(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Ya(c,n,s)),za(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Ya(a,n,s)),za(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Ut(t)&&r.push(new(rE())(e._repo,e._path)),{removed:r,events:o}}function Uh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Dt(t,e){let n=null;for(const s of t.views.values())n=n||tE(s,e);return n}function Wh(t,e){if(e._queryParams.loadsAllData())return $i(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Hh(t,e){return Wh(t,e)!=null}function Ut(t){return $i(t)!=null}function $i(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let gi;function cE(t){C(!gi,"__referenceConstructor has already been defined"),gi=t}function uE(){return C(gi,"Reference.ts has not been loaded"),gi}let hE=1;class Xa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new re(null),this.pendingWriteTree_=Uv(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Vh(t,e,n,s,i){return Nv(t.pendingWriteTree_,e,n,s,i),i?xs(t,new sn(Ah(),e,n)):[]}function zt(t,e,n=!1){const s=Pv(t.pendingWriteTree_,e);if(xv(t.pendingWriteTree_,e)){let r=new re(null);return s.snap!=null?r=r.set(Y(),!0):Fe(s.children,o=>{r=r.set(new ne(o),!0)}),xs(t,new ui(s.path,r,n))}else return[]}function Ps(t,e,n){return xs(t,new sn(Uo(),e,n))}function fE(t,e,n){const s=re.fromObject(n);return xs(t,new bs(Uo(),e,s))}function dE(t,e){return xs(t,new Es(Uo(),e))}function pE(t,e,n){const s=Ko(t,n);if(s){const i=zo(s),r=i.path,o=i.queryId,l=Ne(r,e),a=new Es(Wo(o),l);return Yo(t,r,a)}else return[]}function jh(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Hh(o,e))){const a=aE(o,e,n,s);oE(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,_)=>Ut(_));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=yE(f);for(let v=0;v<_.length;++v){const S=_[v],O=S.query,x=zh(t,S);t.listenProvider_.startListening(ls(O),Cs(t,O),x.hashFn,x.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(ls(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(Ui(f));t.listenProvider_.stopListening(ls(f),_)}))}vE(t,c)}return l}function qh(t,e,n,s){const i=Ko(t,s);if(i!=null){const r=zo(i),o=r.path,l=r.queryId,a=Ne(o,e),c=new sn(Wo(l),a,n);return Yo(t,o,c)}else return[]}function _E(t,e,n,s){const i=Ko(t,s);if(i){const r=zo(i),o=r.path,l=r.queryId,a=Ne(o,e),c=re.fromObject(n),u=new bs(Wo(l),a,c);return Yo(t,o,u)}else return[]}function gE(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const v=Ne(f,i);r=r||Dt(_,v),o=o||Ut(_)});let l=t.syncPointTree_.get(i);l?(o=o||Ut(l),r=r||Dt(l,Y())):(l=new Bh,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=L.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const S=Dt(v,Y());S&&(r=r.updateImmediateChild(_,S))}));const c=Hh(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=Ui(e);C(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=EE();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const u=Bi(t.pendingWriteTree_,i);let h=lE(l,e,n,u,r,a);if(!c&&!o&&!s){const f=Wh(l,e);h=h.concat(bE(t,e,f))}return h}function Go(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ne(o,e),c=Dt(l,a);if(c)return c});return Oh(i,e,r,n,!0)}function mE(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Ne(c,n);s=s||Dt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Dt(i,Y()):(i=new Bh,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new $t(s,!0,!1):null,l=Bi(t.pendingWriteTree_,e._path),a=$h(i,e,l,r?o.getNode():L.EMPTY_NODE,r);return eE(a)}function xs(t,e){return Gh(e,t.syncPointTree_,null,Bi(t.pendingWriteTree_,Y()))}function Gh(t,e,n,s){if(j(t.path))return Kh(t,e,n,s);{const i=e.get(Y());n==null&&i!=null&&(n=Dt(i,Y()));let r=[];const o=G(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=kh(s,o);r=r.concat(Gh(l,a,c,u))}return i&&(r=r.concat(qo(i,t,s,n))),r}}function Kh(t,e,n,s){const i=e.get(Y());n==null&&i!=null&&(n=Dt(i,Y()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=kh(s,o),u=t.operationForChild(o);u&&(r=r.concat(Kh(u,l,a,c)))}),i&&(r=r.concat(qo(i,t,s,n))),r}function zh(t,e){const n=e.query,s=Cs(t,n);return{hashFn:()=>(Zv(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?pE(t,n._path,s):dE(t,n._path);{const r=gy(i,n);return jh(t,n,null,r)}}}}function Cs(t,e){const n=Ui(e);return t.queryToTagMap.get(n)}function Ui(t){return t._path.toString()+"$"+t._queryIdentifier}function Ko(t,e){return t.tagToQueryMap.get(e)}function zo(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ne(t.substr(0,e))}}function Yo(t,e,n){const s=t.syncPointTree_.get(e);C(s,"Missing sync point for query tag that we're tracking");const i=Bi(t.pendingWriteTree_,e);return qo(s,n,i,null)}function yE(t){return t.fold((e,n,s)=>{if(n&&Ut(n))return[$i(n)];{let i=[];return n&&(i=Uh(n)),Fe(s,(r,o)=>{i=i.concat(o)}),i}})}function ls(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(uE())(t._repo,t._path):t}function vE(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ui(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function EE(){return hE++}function bE(t,e,n){const s=e._path,i=Cs(t,e),r=zh(t,n),o=t.listenProvider_.startListening(ls(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)C(!Ut(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!j(c)&&u&&Ut(u))return[$i(u).query];{let f=[];return u&&(f=f.concat(Uh(u).map(_=>_.query))),Fe(h,(_,v)=>{f=f.concat(v)}),f}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(ls(u),Cs(t,u))}}return o}/**
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
 */class Qo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Qo(n)}node(){return this.node_}}class Xo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=pe(this.path_,e);return new Xo(this.syncTree_,n)}node(){return Go(this.syncTree_,this.path_)}}const CE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ja=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return wE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return IE(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},wE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},IE=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&C(!1,"Unexpected increment value: "+s);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},SE=function(t,e,n,s){return Jo(e,new Xo(n,t),s)},Yh=function(t,e,n){return Jo(t,new Qo(e),n)};function Jo(t,e,n){const s=t.getPriority().val(),i=Ja(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Ja(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ye(l,Ee(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ye(i))),o.forEachChild(he,(l,a)=>{const c=Jo(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class Zo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function el(t,e){let n=e instanceof ne?e:new ne(e),s=t,i=G(n);for(;i!==null;){const r=kn(s.node.children,i)||{children:{},childCount:0};s=new Zo(i,s,r),n=ie(n),i=G(n)}return s}function Vn(t){return t.node.value}function Qh(t,e){t.node.value=e,eo(t)}function Xh(t){return t.node.childCount>0}function TE(t){return Vn(t)===void 0&&!Xh(t)}function Wi(t,e){Fe(t.node.children,(n,s)=>{e(new Zo(n,t,s))})}function Jh(t,e,n,s){n&&!s&&e(t),Wi(t,i=>{Jh(i,e,!0,s)}),n&&s&&e(t)}function RE(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Os(t){return new ne(t.parent===null?t.name:Os(t.parent)+"/"+t.name)}function eo(t){t.parent!==null&&AE(t.parent,t.name,t)}function AE(t,e,n){const s=TE(n),i=yt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,eo(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,eo(t))}/**
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
 */const NE=/[\[\].#$\/\u0000-\u001F\u007F]/,PE=/[\[\].#$\u0000-\u001F\u007F]/,pr=10*1024*1024,Zh=function(t){return typeof t=="string"&&t.length!==0&&!NE.test(t)},ef=function(t){return typeof t=="string"&&t.length!==0&&!PE.test(t)},xE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ef(t)},tf=function(t,e,n,s){s&&e===void 0||tl(No(t,"value"),e,n)},tl=function(t,e,n){const s=n instanceof ne?new Yy(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+qt(s));if(typeof e=="function")throw new Error(t+"contains a function "+qt(s)+" with contents = "+e.toString());if(Yu(e))throw new Error(t+"contains "+e.toString()+" "+qt(s));if(typeof e=="string"&&e.length>pr/3&&Mi(e)>pr)throw new Error(t+"contains a string greater than "+pr+" utf8 bytes "+qt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Fe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Zh(o)))throw new Error(t+" contains an invalid key ("+o+") "+qt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Qy(s,o),tl(t,l,s),Xy(s)}),i&&r)throw new Error(t+' contains ".value" child '+qt(s)+" in addition to actual children.")}},nf=function(t,e,n,s){if(!(s&&n===void 0)&&!ef(n))throw new Error(No(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},OE=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),nf(t,e,n,s)},nl=function(t,e){if(G(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},kE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Zh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!xE(n))throw new Error(No(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class DE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function sf(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!vh(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function at(t,e,n){sf(t,n),ME(t,s=>ze(s,e)||ze(e,s))}function ME(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(LE(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function LE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Zt&&Ie("event: "+n.toString()),Hn(s)}}}/**
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
 */const FE="repo_interrupt",BE=25;class $E{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new DE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ci(),this.transactionQueueTree_=new Zo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function UE(t,e,n){if(t.stats_=Do(t.repoInfo_),t.forceRestClient_||Ey())t.server_=new ai(t.repoInfo_,(s,i,r,o)=>{Za(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ec(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{de(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new pt(t.repoInfo_,e,(s,i,r,o)=>{Za(t,s,i,r,o)},s=>{ec(t,s)},s=>{WE(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Sy(t.repoInfo_,()=>new wv(t.stats_,t.server_)),t.infoData_=new yv,t.infoSyncTree_=new Xa({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Ps(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),il(t,"connected",!1),t.serverSyncTree_=new Xa({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);at(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function rf(t){const n=t.infoData_.getNode(new ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function sl(t){return CE({timestamp:rf(t)})}function Za(t,e,n,s,i){t.dataUpdateCount++;const r=new ne(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=ni(n,c=>Ee(c));o=_E(t.serverSyncTree_,r,a,i)}else{const a=Ee(n);o=qh(t.serverSyncTree_,r,a,i)}else if(s){const a=ni(n,c=>Ee(c));o=fE(t.serverSyncTree_,r,a)}else{const a=Ee(n);o=Ps(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Vi(t,r)),at(t.eventQueue_,l,o)}function ec(t,e){il(t,"connected",e),e===!1&&jE(t)}function WE(t,e){Fe(e,(n,s)=>{il(t,n,s)})}function il(t,e,n){const s=new ne("/.info/"+e),i=Ee(n);t.infoData_.updateSnapshot(s,i);const r=Ps(t.infoSyncTree_,s,i);at(t.eventQueue_,s,r)}function of(t){return t.nextWriteId_++}function HE(t,e,n){const s=mE(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Ee(i).withIndex(e._queryParams.getIndex());gE(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ps(t.serverSyncTree_,e._path,r);else{const l=Cs(t.serverSyncTree_,e);o=qh(t.serverSyncTree_,e._path,r,l)}return at(t.eventQueue_,e._path,o),jh(t.serverSyncTree_,e,n,null,!0),r},i=>(Hi(t,"get for query "+de(e)+" failed: "+i),Promise.reject(new Error(i))))}function VE(t,e,n,s,i){Hi(t,"set",{path:e.toString(),value:n,priority:s});const r=sl(t),o=Ee(n,s),l=Go(t.serverSyncTree_,e),a=Yh(o,l,r),c=of(t),u=Vh(t.serverSyncTree_,e,a,c,!0);sf(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const v=f==="ok";v||ke("set at "+e+" failed: "+f);const S=zt(t.serverSyncTree_,c,!v);at(t.eventQueue_,e,S),GE(t,i,f,_)});const h=hf(t,e);Vi(t,h),at(t.eventQueue_,h,[])}function jE(t){Hi(t,"onDisconnectEvents");const e=sl(t),n=ci();Yr(t.onDisconnect_,Y(),(i,r)=>{const o=SE(i,r,t.serverSyncTree_,e);Rh(n,i,o)});let s=[];Yr(n,Y(),(i,r)=>{s=s.concat(Ps(t.serverSyncTree_,i,r));const o=hf(t,i);Vi(t,o)}),t.onDisconnect_=ci(),at(t.eventQueue_,Y(),s)}function qE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(FE)}function Hi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ie(n,...e)}function GE(t,e,n,s){e&&Hn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function lf(t,e,n){return Go(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function rl(t,e=t.transactionQueueTree_){if(e||ji(t,e),Vn(e)){const n=cf(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&KE(t,Os(e),n)}else Xh(e)&&Wi(e,n=>{rl(t,n)})}function KE(t,e,n){const s=n.map(c=>c.currentWriteId),i=lf(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];C(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ne(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Hi(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(zt(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();ji(t,el(t.transactionQueueTree_,e)),rl(t,t.transactionQueueTree_),at(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Hn(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{ke("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Vi(t,e)}},o)}function Vi(t,e){const n=af(t,e),s=Os(n),i=cf(t,n);return zE(t,i,s),s}function zE(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Ne(n,a.path);let u=!1,h;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(zt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=BE)u=!0,h="maxretry",i=i.concat(zt(t.serverSyncTree_,a.currentWriteId,!0));else{const f=lf(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){tl("transaction failed: Data returned ",_,a.path);let v=Ee(_);typeof _=="object"&&_!=null&&yt(_,".priority")||(v=v.updatePriority(f.getPriority()));const O=a.currentWriteId,x=sl(t),F=Yh(v,f,x);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=F,a.currentWriteId=of(t),o.splice(o.indexOf(O),1),i=i.concat(Vh(t.serverSyncTree_,a.path,F,a.currentWriteId,a.applyLocally)),i=i.concat(zt(t.serverSyncTree_,O,!0))}else u=!0,h="nodata",i=i.concat(zt(t.serverSyncTree_,a.currentWriteId,!0))}at(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}ji(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Hn(s[l]);rl(t,t.transactionQueueTree_)}function af(t,e){let n,s=t.transactionQueueTree_;for(n=G(e);n!==null&&Vn(s)===void 0;)s=el(s,n),e=ie(e),n=G(e);return s}function cf(t,e){const n=[];return uf(t,e,n),n.sort((s,i)=>s.order-i.order),n}function uf(t,e,n){const s=Vn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Wi(e,i=>{uf(t,i,n)})}function ji(t,e){const n=Vn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Qh(e,n.length>0?n:void 0)}Wi(e,s=>{ji(t,s)})}function hf(t,e){const n=Os(af(t,e)),s=el(t.transactionQueueTree_,e);return RE(s,i=>{_r(t,i)}),_r(t,s),Jh(s,i=>{_r(t,i)}),n}function _r(t,e){const n=Vn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(zt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Qh(e,void 0):n.length=r+1,at(t.eventQueue_,Os(e),i);for(let o=0;o<s.length;o++)Hn(s[o])}}/**
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
 */function YE(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function QE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const tc=function(t,e){const n=XE(t),s=n.namespace;n.domain==="firebase.com"&&gt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&gt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||hy();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new lh(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ne(n.pathString)}},XE=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=YE(t.substring(u,h)));const f=QE(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");s=e.substring(0,v).toLowerCase(),n=e.substring(v+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */const nc="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",JE=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=nc.charAt(n%64),n=Math.floor(n/64);C(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=nc.charAt(e[i]);return C(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class ZE{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+de(this.snapshot.exportVal())}}class eb{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class tb{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ol{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return j(this._path)?null:gh(this._path)}get ref(){return new Et(this._repo,this._path)}get _queryIdentifier(){const e=Ua(this._queryParams),n=Oo(e);return n==="{}"?"default":n}get _queryObject(){return Ua(this._queryParams)}isEqual(e){if(e=vt(e),!(e instanceof ol))return!1;const n=this._repo===e._repo,s=vh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+zy(this._path)}}class Et extends ol{constructor(e,n){super(e,n,new $o,!1)}get parent(){const e=yh(this._path);return e===null?null:new Et(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ws{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ne(e),s=Is(this.ref,e);return new ws(this._node.getChild(n),s,he)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ws(i,Is(this.ref,s),he)))}hasChild(e){const n=new ne(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function nb(t,e){return t=vt(t),t._checkNotDeleted("ref"),e!==void 0?Is(t._root,e):t._root}function Is(t,e){return t=vt(t),G(t._path)===null?OE("child","path",e,!1):nf("child","path",e,!1),new Et(t._repo,pe(t._path,e))}function sb(t,e){t=vt(t),nl("push",t._path),tf("push",e,t._path,!0);const n=rf(t._repo),s=JE(n),i=Is(t,s),r=Is(t,s);let o;return e!=null?o=ll(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function ow(t){return nl("remove",t._path),ll(t,null)}function ll(t,e){t=vt(t),nl("set",t._path),tf("set",e,t._path,!1);const n=new ki;return VE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function lw(t){t=vt(t);const e=new tb(()=>{}),n=new al(e);return HE(t._repo,t,n).then(s=>new ws(s,new Et(t._repo,t._path),t._queryParams.getIndex()))}class al{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new ZE("value",this,new ws(e.snapshotNode,new Et(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new eb(this,e,n):null}matches(e){return e instanceof al?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}iE(Et);cE(Et);/**
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
 */const ib="FIREBASE_DATABASE_EMULATOR_HOST",to={};let rb=!1;function ob(t,e,n,s){t.repoInfo_=new lh(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function lb(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||gt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ie("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=tc(r,i),l=o.repoInfo,a,c;typeof process<"u"&&Ca&&(c=Ca[ib]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=tc(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new Tn(Tn.OWNER):new Cy(t.name,t.options,e);kE("Invalid Firebase Database URL",o),j(o.path)||gt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=cb(l,t,u,new by(t.name,n));return new ub(h,t)}function ab(t,e){const n=to[e];(!n||n[t.key]!==t)&&gt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),qE(t),delete n[t.key]}function cb(t,e,n,s){let i=to[e.name];i||(i={},to[e.name]=i);let r=i[t.toURLString()];return r&&gt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new $E(t,rb,n,s),i[t.toURLString()]=r,r}class ub{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(UE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Et(this._repo,Y())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ab(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&gt("Cannot call "+e+" on a deleted database.")}}function ff(t=Vu(),e){const n=Ts(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Lg("database");s&&hb(n,...s)}return n}function hb(t,e,n,s={}){t=vt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&gt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&gt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Tn(Tn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Fg(s.mockUserToken,t.app.options.projectId);r=new Tn(o)}ob(i,e,n,r)}/**
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
 */function fb(t){oy(Qm),Ft(new _t("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return lb(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),lt(wa,Ia,t),lt(wa,Ia,"esm2017")}pt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};pt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};fb();const qi=t=>(Kc("data-v-6eb4423d"),t=t(),zc(),t),db=qi(()=>ue("div",{class:"footer-social"},[ue("h2",null,"Follow us on Facebook"),ue("a",{href:"https://www.facebook.com/profile.php?id=61555159784777",target:"_blank"},[ue("i",{class:"fa-brands fa-square-facebook"})])],-1)),pb={class:"subscribe-form"},_b=qi(()=>ue("label",null,"Subscribe to our Newsletter",-1)),gb=qi(()=>ue("input",{class:"form-control",name:"signupemail",placeholder:"Enter Email Address"},null,-1)),mb=qi(()=>ue("button",{class:"btn",type:"submit"},"Subscribe",-1)),yb=[_b,gb,mb],vb=t=>{t.preventDefault();const e=ff(),n=t.target.signupemail.value,s=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,i=nb(e,"emails"),r=sb(i);s.test(n)?ll(r,{emailAddress:n}).then(()=>{alert("Successfully Subscribed to the ISK Newsletter!","success"),t.target.reset()},o=>{console.log("FAILED...",o.text)}):alert("Please enter a valid email address")},Eb={__name:"Footer",setup(t){return document.getElementById("liveAlertPlaceholder"),(e,n)=>($n(),Ni("footer",null,[db,ue("div",pb,[ue("form",{name:"newsletter-form",onSubmit:t_(vb,["prevent"])},yb,32)])]))}},bb=Ro(Eb,[["__scopeId","data-v-6eb4423d"]]),Cb={__name:"HomeView",setup(t){return(e,n)=>($n(),Ni(je,null,[be(yg),ue("main",null,[be(Tg)]),be(bb)],64))}},wb=lg({history:I_("/"),routes:[{path:"/",name:"home",component:Cb},{path:"/about",name:"about",component:()=>zn(()=>import("./AboutView-dV6qszPh.js"),__vite__mapDeps([0,1]))},{path:"/recipes",name:"recipes",component:()=>zn(()=>import("./RecipeView-aPAuKzeE.js"),__vite__mapDeps([2,3]))},{path:"/contact",name:"contact",component:()=>zn(()=>import("./ContactView-KIWAQzim.js"),__vite__mapDeps([4,5]))},{path:"/Pumpkinpie1",name:"admin",component:()=>zn(()=>import("./Admin-ygxAD_MV.js"),__vite__mapDeps([6,7]))},{path:"/livestock",name:"livestock",component:()=>zn(()=>import("./Livestock-_JSOk90F.js"),__vite__mapDeps([8,9]))}]});var Ib="firebase",Sb="10.7.2";/**
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
 */lt(Ib,Sb,"app");const Tb=(t,e)=>e.some(n=>t instanceof n);let sc,ic;function Rb(){return sc||(sc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ab(){return ic||(ic=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const df=new WeakMap,no=new WeakMap,pf=new WeakMap,gr=new WeakMap,cl=new WeakMap;function Nb(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Mt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&df.set(n,t)}).catch(()=>{}),cl.set(e,t),e}function Pb(t){if(no.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});no.set(t,e)}let so={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return no.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xb(t){so=t(so)}function Ob(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(mr(this),e,...n);return pf.set(s,e.sort?e.sort():[e]),Mt(s)}:Ab().includes(t)?function(...e){return t.apply(mr(this),e),Mt(df.get(this))}:function(...e){return Mt(t.apply(mr(this),e))}}function kb(t){return typeof t=="function"?Ob(t):(t instanceof IDBTransaction&&Pb(t),Tb(t,Rb())?new Proxy(t,so):t)}function Mt(t){if(t instanceof IDBRequest)return Nb(t);if(gr.has(t))return gr.get(t);const e=kb(t);return e!==t&&(gr.set(t,e),cl.set(e,t)),e}const mr=t=>cl.get(t);function Db(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Mt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Mt(o.result),a.oldVersion,a.newVersion,Mt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const Mb=["get","getKey","getAll","getAllKeys","count"],Lb=["put","add","delete","clear"],yr=new Map;function rc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yr.get(e))return yr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Lb.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Mb.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return yr.set(e,r),r}xb(t=>({...t,get:(e,n,s)=>rc(e,n)||t.get(e,n,s),has:(e,n)=>!!rc(e,n)||t.has(e,n)}));const _f="@firebase/installations",ul="0.6.4";/**
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
 */const gf=1e4,mf=`w:${ul}`,yf="FIS_v2",Fb="https://firebaseinstallations.googleapis.com/v1",Bb=60*60*1e3,$b="installations",Ub="Installations";/**
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
 */const Wb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},on=new Di($b,Ub,Wb);function vf(t){return t instanceof un&&t.code.includes("request-failed")}/**
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
 */function Ef({projectId:t}){return`${Fb}/projects/${t}/installations`}function bf(t){return{token:t.token,requestStatus:2,expiresIn:Vb(t.expiresIn),creationTime:Date.now()}}async function Cf(t,e){const s=(await e.json()).error;return on.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function wf({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Hb(t,{refreshToken:e}){const n=wf(t);return n.append("Authorization",jb(e)),n}async function If(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Vb(t){return Number(t.replace("s","000"))}function jb(t){return`${yf} ${t}`}/**
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
 */async function qb({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Ef(t),i=wf(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:yf,appId:t.appId,sdkVersion:mf},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await If(()=>fetch(s,l));if(a.ok){const c=await a.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:bf(c.authToken)}}else throw await Cf("Create Installation",a)}/**
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
 */function Sf(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Gb(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Kb=/^[cdef][\w-]{21}$/,io="";function zb(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Yb(t);return Kb.test(n)?n:io}catch{return io}}function Yb(t){return Gb(t).substr(0,22)}/**
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
 */function Gi(t){return`${t.appName}!${t.appId}`}/**
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
 */const Tf=new Map;function Rf(t,e){const n=Gi(t);Af(n,e),Qb(n,e)}function Af(t,e){const n=Tf.get(t);if(n)for(const s of n)s(e)}function Qb(t,e){const n=Xb();n&&n.postMessage({key:t,fid:e}),Jb()}let Yt=null;function Xb(){return!Yt&&"BroadcastChannel"in self&&(Yt=new BroadcastChannel("[Firebase] FID Change"),Yt.onmessage=t=>{Af(t.data.key,t.data.fid)}),Yt}function Jb(){Tf.size===0&&Yt&&(Yt.close(),Yt=null)}/**
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
 */const Zb="firebase-installations-database",eC=1,ln="firebase-installations-store";let vr=null;function hl(){return vr||(vr=Db(Zb,eC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ln)}}})),vr}async function mi(t,e){const n=Gi(t),i=(await hl()).transaction(ln,"readwrite"),r=i.objectStore(ln),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Rf(t,e.fid),e}async function Nf(t){const e=Gi(t),s=(await hl()).transaction(ln,"readwrite");await s.objectStore(ln).delete(e),await s.done}async function Ki(t,e){const n=Gi(t),i=(await hl()).transaction(ln,"readwrite"),r=i.objectStore(ln),o=await r.get(n),l=e(o);return l===void 0?await r.delete(n):await r.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&Rf(t,l.fid),l}/**
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
 */async function fl(t){let e;const n=await Ki(t.appConfig,s=>{const i=tC(s),r=nC(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===io?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function tC(t){const e=t||{fid:zb(),registrationStatus:0};return Pf(e)}function nC(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(on.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=sC(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:iC(t)}:{installationEntry:e}}async function sC(t,e){try{const n=await qb(t,e);return mi(t.appConfig,n)}catch(n){throw vf(n)&&n.customData.serverCode===409?await Nf(t.appConfig):await mi(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function iC(t){let e=await oc(t.appConfig);for(;e.registrationStatus===1;)await Sf(100),e=await oc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await fl(t);return s||n}return e}function oc(t){return Ki(t,e=>{if(!e)throw on.create("installation-not-found");return Pf(e)})}function Pf(t){return rC(t)?{fid:t.fid,registrationStatus:0}:t}function rC(t){return t.registrationStatus===1&&t.registrationTime+gf<Date.now()}/**
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
 */async function oC({appConfig:t,heartbeatServiceProvider:e},n){const s=lC(t,n),i=Hb(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:mf,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await If(()=>fetch(s,l));if(a.ok){const c=await a.json();return bf(c)}else throw await Cf("Generate Auth Token",a)}function lC(t,{fid:e}){return`${Ef(t)}/${e}/authTokens:generate`}/**
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
 */async function dl(t,e=!1){let n;const s=await Ki(t.appConfig,r=>{if(!xf(r))throw on.create("not-registered");const o=r.authToken;if(!e&&uC(o))return r;if(o.requestStatus===1)return n=aC(t,e),r;{if(!navigator.onLine)throw on.create("app-offline");const l=fC(r);return n=cC(t,l),l}});return n?await n:s.authToken}async function aC(t,e){let n=await lc(t.appConfig);for(;n.authToken.requestStatus===1;)await Sf(100),n=await lc(t.appConfig);const s=n.authToken;return s.requestStatus===0?dl(t,e):s}function lc(t){return Ki(t,e=>{if(!xf(e))throw on.create("not-registered");const n=e.authToken;return dC(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function cC(t,e){try{const n=await oC(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await mi(t.appConfig,s),n}catch(n){if(vf(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Nf(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await mi(t.appConfig,s)}throw n}}function xf(t){return t!==void 0&&t.registrationStatus===2}function uC(t){return t.requestStatus===2&&!hC(t)}function hC(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Bb}function fC(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function dC(t){return t.requestStatus===1&&t.requestTime+gf<Date.now()}/**
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
 */async function pC(t){const e=t,{installationEntry:n,registrationPromise:s}=await fl(e);return s?s.catch(console.error):dl(e).catch(console.error),n.fid}/**
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
 */async function _C(t,e=!1){const n=t;return await gC(n),(await dl(n,e)).token}async function gC(t){const{registrationPromise:e}=await fl(t);e&&await e}/**
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
 */function mC(t){if(!t||!t.options)throw Er("App Configuration");if(!t.name)throw Er("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Er(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Er(t){return on.create("missing-app-config-values",{valueName:t})}/**
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
 */const Of="installations",yC="installations-internal",vC=t=>{const e=t.getProvider("app").getImmediate(),n=mC(e),s=Ts(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},EC=t=>{const e=t.getProvider("app").getImmediate(),n=Ts(e,Of).getImmediate();return{getId:()=>pC(n),getToken:i=>_C(n,i)}};function bC(){Ft(new _t(Of,vC,"PUBLIC")),Ft(new _t(yC,EC,"PRIVATE"))}bC();lt(_f,ul);lt(_f,ul,"esm2017");/**
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
 */const yi="analytics",CC="firebase_id",wC="origin",IC=60*1e3,SC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",pl="https://www.googletagmanager.com/gtag/js";/**
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
 */const De=new Po("@firebase/analytics");/**
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
 */const TC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},$e=new Di("analytics","Analytics",TC);/**
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
 */function RC(t){if(!t.startsWith(pl)){const e=$e.create("invalid-gtag-resource",{gtagURL:t});return De.warn(e.message),""}return t}function kf(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function AC(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function NC(t,e){const n=AC("firebase-js-sdk-policy",{createScriptURL:RC}),s=document.createElement("script"),i=`${pl}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function PC(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function xC(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const a=(await kf(n)).find(c=>c.measurementId===i);a&&await e[a.appId]}}catch(l){De.error(l)}t("config",i,r)}async function OC(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await kf(n);for(const a of o){const c=l.find(h=>h.measurementId===a),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){De.error(r)}}function kC(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[l,a]=o;await OC(t,e,n,l,a)}else if(r==="config"){const[l,a]=o;await xC(t,e,n,s,l,a)}else if(r==="consent"){const[l]=o;t("consent","update",l)}else if(r==="get"){const[l,a,c]=o;t("get",l,a,c)}else if(r==="set"){const[l]=o;t("set",l)}else t(r,...o)}catch(l){De.error(l)}}return i}function DC(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=kC(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function MC(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(pl)&&n.src.includes(t))return n;return null}/**
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
 */const LC=30,FC=1e3;class BC{constructor(e={},n=FC){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Df=new BC;function $C(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function UC(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:$C(s)},r=SC.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((e=a.error)===null||e===void 0)&&e.message&&(l=a.error.message)}catch{}throw $e.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function WC(t,e=Df,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw $e.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw $e.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new jC;return setTimeout(async()=>{l.abort()},n!==void 0?n:IC),Mf({appId:s,apiKey:i,measurementId:r},o,l,e)}async function Mf(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=Df){var r;const{appId:o,measurementId:l}=t;try{await HC(s,e)}catch(a){if(l)return De.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:l};throw a}try{const a=await UC(t);return i.deleteThrottleMetadata(o),a}catch(a){const c=a;if(!VC(c)){if(i.deleteThrottleMetadata(o),l)return De.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw a}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?pa(n,i.intervalMillis,LC):pa(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),De.debug(`Calling attemptFetch again in ${u} millis`),Mf(t,h,s,i)}}function HC(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s($e.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function VC(t){if(!(t instanceof un)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class jC{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function qC(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
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
 */async function GC(){if(Fu())try{await Bu()}catch(t){return De.warn($e.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return De.warn($e.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function KC(t,e,n,s,i,r,o){var l;const a=WC(t);a.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&De.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>De.error(_)),e.push(a);const c=GC().then(_=>{if(_)return s.getId()}),[u,h]=await Promise.all([a,c]);MC(r)||NC(r,u.measurementId),i("js",new Date);const f=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return f[wC]="firebase",f.update=!0,h!=null&&(f[CC]=h),i("config",u.measurementId,f),u.measurementId}/**
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
 */class zC{constructor(e){this.app=e}_delete(){return delete as[this.app.options.appId],Promise.resolve()}}let as={},ac=[];const cc={};let br="dataLayer",YC="gtag",uc,Lf,hc=!1;function QC(){const t=[];if($g()&&t.push("This is a browser extension environment."),Wg()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=$e.create("invalid-analytics-context",{errorInfo:e});De.warn(n.message)}}function XC(t,e,n){QC();const s=t.options.appId;if(!s)throw $e.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)De.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw $e.create("no-api-key");if(as[s]!=null)throw $e.create("already-exists",{id:s});if(!hc){PC(br);const{wrappedGtag:r,gtagCore:o}=DC(as,ac,cc,br,YC);Lf=r,uc=o,hc=!0}return as[s]=KC(t,ac,cc,e,uc,br,n),new zC(t)}function JC(t=Vu()){t=vt(t);const e=Ts(t,yi);return e.isInitialized()?e.getImmediate():ZC(t)}function ZC(t,e={}){const n=Ts(t,yi);if(n.isInitialized()){const i=n.getImmediate();if(si(e,n.getOptions()))return i;throw $e.create("already-initialized")}return n.initialize({options:e})}function ew(t,e,n,s){t=vt(t),qC(Lf,as[t.app.options.appId],e,n,s).catch(i=>De.error(i))}const fc="@firebase/analytics",dc="0.10.0";function tw(){Ft(new _t(yi,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return XC(s,i,n)},"PUBLIC")),Ft(new _t("analytics-internal",t,"PRIVATE")),lt(fc,dc),lt(fc,dc,"esm2017");function t(e){try{const n=e.getProvider(yi).getImmediate();return{logEvent:(s,i,r)=>ew(n,s,i,r)}}catch(n){throw $e.create("interop-component-reg-failed",{reason:n})}}}tw();const nw={apiKey:"AIzaSyA6hqThcAUXeRWTlBLsQMTG2sw-W5Lx744",authDomain:"indianspringskatahdins-187d9.firebaseapp.com",projectId:"indianspringskatahdins-187d9",storageBucket:"indianspringskatahdins-187d9.appspot.com",messagingSenderId:"49980286736",appId:"1:49980286736:web:c4cc74994248b9a5ea6795",measurementId:"G-5C26L7CC6X",databaseURL:"https://indianspringskatahdins-187d9-default-rtdb.firebaseio.com/"},Ff=Hu(nw);JC(Ff);ff(Ff);const Bf=i_(cg);Bf.use(wb);Bf.mount("#app");export{je as F,yg as N,Ro as _,be as a,bp as b,Ni as c,bb as d,wi as e,qd as f,ff as g,ue as h,iw as i,lw as j,Is as k,rw as l,zc as m,sb as n,$n as o,Kc as p,ow as q,nb as r,ll as s,sw as t,t_ as w};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AboutView-dV6qszPh.js","assets/AboutView-vxUhViEV.css","assets/RecipeView-aPAuKzeE.js","assets/RecipeView-TKVVjyqy.css","assets/ContactView-KIWAQzim.js","assets/ContactView-nvuUNGgE.css","assets/Admin-ygxAD_MV.js","assets/Admin-WeX07HUe.css","assets/Livestock-_JSOk90F.js","assets/Livestock-QdZpVoBo.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
