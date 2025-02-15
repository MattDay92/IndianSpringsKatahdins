(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function co(t,e){const n=new Set(t.split(","));return e?s=>n.has(s.toLowerCase()):s=>n.has(s)}const oe={},Cn=[],He=()=>{},jf=()=>!1,bi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),uo=t=>t.startsWith("onUpdate:"),Ce=Object.assign,ho=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},qf=Object.prototype.hasOwnProperty,K=(t,e)=>qf.call(t,e),$=Array.isArray,wn=t=>Ci(t)==="[object Map]",vc=t=>Ci(t)==="[object Set]",H=t=>typeof t=="function",_e=t=>typeof t=="string",Bn=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",Ec=t=>(ce(t)||H(t))&&H(t.then)&&H(t.catch),bc=Object.prototype.toString,Ci=t=>bc.call(t),Gf=t=>Ci(t).slice(8,-1),Cc=t=>Ci(t)==="[object Object]",fo=t=>_e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Vs=co(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Kf=/-(\w)/g,Nn=wi(t=>t.replace(Kf,(e,n)=>n?n.toUpperCase():"")),zf=/\B([A-Z])/g,$n=wi(t=>t.replace(zf,"-$1").toLowerCase()),wc=wi(t=>t.charAt(0).toUpperCase()+t.slice(1)),Xi=wi(t=>t?`on${wc(t)}`:""),Lt=(t,e)=>!Object.is(t,e),js=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Qs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Sr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ba;const Ic=()=>ba||(ba=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function po(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=_e(s)?Jf(s):po(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(_e(t)||ce(t))return t}const Yf=/;(?![^(]*\))/g,Qf=/:([^]+)/,Xf=/\/\*[^]*?\*\//g;function Jf(t){const e={};return t.replace(Xf,"").split(Yf).forEach(n=>{if(n){const s=n.split(Qf);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function _o(t){let e="";if(_e(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=_o(t[n]);s&&(e+=s+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Zf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ed=co(Zf);function Sc(t){return!!t||t===""}const aw=t=>_e(t)?t:t==null?"":$(t)||ce(t)&&(t.toString===bc||!H(t.toString))?JSON.stringify(t,Tc,2):String(t),Tc=(t,e)=>e&&e.__v_isRef?Tc(t,e.value):wn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Ji(s,r)+" =>"]=i,n),{})}:vc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ji(n))}:Bn(e)?Ji(e):ce(e)&&!$(e)&&!Cc(e)?String(e):e,Ji=(t,e="")=>{var n;return Bn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let je;class td{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=je,!e&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=je;try{return je=this,e()}finally{je=n}}}on(){je=this}off(){je=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function nd(t,e=je){e&&e.active&&e.effects.push(t)}function sd(){return je}let Xt;class go{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=3,this._trackId=0,this._runnings=0,this._queryings=0,this._depsLength=0,nd(this,i)}get dirty(){if(this._dirtyLevel===1){this._dirtyLevel=0,this._queryings++,cn();for(const e of this.deps)if(e.computed&&(id(e.computed),this._dirtyLevel>=2))break;un(),this._queryings--}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?3:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Nt,n=Xt;try{return Nt=!0,Xt=this,this._runnings++,Ca(this),this.fn()}finally{wa(this),this._runnings--,Xt=n,Nt=e}}stop(){var e;this.active&&(Ca(this),wa(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function id(t){return t.value}function Ca(t){t._trackId++,t._depsLength=0}function wa(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Rc(t.deps[e],t);t.deps.length=t._depsLength}}function Rc(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Nt=!0,Tr=0;const Ac=[];function cn(){Ac.push(Nt),Nt=!1}function un(){const t=Ac.pop();Nt=t===void 0?!0:t}function mo(){Tr++}function yo(){for(Tr--;!Tr&&Rr.length;)Rr.shift()()}function Nc(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&Rc(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Rr=[];function xc(t,e,n){mo();for(const s of t.keys())if(!(!s.allowRecurse&&s._runnings)&&s._dirtyLevel<e&&(!s._runnings||e!==2)){const i=s._dirtyLevel;s._dirtyLevel=e,i===0&&(!s._queryings||e!==2)&&(s.trigger(),s.scheduler&&Rr.push(s.scheduler))}yo()}const Pc=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ar=new WeakMap,Jt=Symbol(""),Nr=Symbol("");function Me(t,e,n){if(Nt&&Xt){let s=Ar.get(t);s||Ar.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Pc(()=>s.delete(n))),Nc(Xt,i)}}function ft(t,e,n,s,i,r){const o=Ar.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||!Bn(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?fo(n)&&a.push(o.get("length")):(a.push(o.get(Jt)),wn(t)&&a.push(o.get(Nr)));break;case"delete":$(t)||(a.push(o.get(Jt)),wn(t)&&a.push(o.get(Nr)));break;case"set":wn(t)&&a.push(o.get(Jt));break}mo();for(const l of a)l&&xc(l,3);yo()}const rd=co("__proto__,__v_isRef,__isVue"),Oc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Bn)),Ia=od();function od(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Q(this);for(let r=0,o=this.length;r<o;r++)Me(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(Q)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){cn(),mo();const s=Q(this)[e].apply(this,n);return yo(),un(),s}}),t}function ad(t){const e=Q(this);return Me(e,"has",t),e.hasOwnProperty(t)}class kc{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const i=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Ed:Fc:r?Lc:Mc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=$(e);if(!i){if(o&&K(Ia,n))return Reflect.get(Ia,n,s);if(n==="hasOwnProperty")return ad}const a=Reflect.get(e,n,s);return(Bn(n)?Oc.has(n):rd(n))||(i||Me(e,"get",n),r)?a:Le(a)?o&&fo(n)?a:a.value:ce(a)?i?$c(a):Si(a):a}}class Dc extends kc{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._shallow){const l=xn(r);if(!Xs(s)&&!xn(s)&&(r=Q(r),s=Q(s)),!$(e)&&Le(r)&&!Le(s))return l?!1:(r.value=s,!0)}const o=$(e)&&fo(n)?Number(n)<e.length:K(e,n),a=Reflect.set(e,n,s,i);return e===Q(i)&&(o?Lt(s,r)&&ft(e,"set",n,s):ft(e,"add",n,s)),a}deleteProperty(e,n){const s=K(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&ft(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Bn(n)||!Oc.has(n))&&Me(e,"has",n),s}ownKeys(e){return Me(e,"iterate",$(e)?"length":Jt),Reflect.ownKeys(e)}}class ld extends kc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const cd=new Dc,ud=new ld,hd=new Dc(!0),vo=t=>t,Ii=t=>Reflect.getPrototypeOf(t);function Ms(t,e,n=!1,s=!1){t=t.__v_raw;const i=Q(t),r=Q(e);n||(Lt(e,r)&&Me(i,"get",e),Me(i,"get",r));const{has:o}=Ii(i),a=s?vo:n?Co:us;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Ls(t,e=!1){const n=this.__v_raw,s=Q(n),i=Q(t);return e||(Lt(t,i)&&Me(s,"has",t),Me(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Fs(t,e=!1){return t=t.__v_raw,!e&&Me(Q(t),"iterate",Jt),Reflect.get(t,"size",t)}function Sa(t){t=Q(t);const e=Q(this);return Ii(e).has.call(e,t)||(e.add(t),ft(e,"add",t,t)),this}function Ta(t,e){e=Q(e);const n=Q(this),{has:s,get:i}=Ii(n);let r=s.call(n,t);r||(t=Q(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Lt(e,o)&&ft(n,"set",t,e):ft(n,"add",t,e),this}function Ra(t){const e=Q(this),{has:n,get:s}=Ii(e);let i=n.call(e,t);i||(t=Q(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&ft(e,"delete",t,void 0),r}function Aa(){const t=Q(this),e=t.size!==0,n=t.clear();return e&&ft(t,"clear",void 0,void 0),n}function Bs(t,e){return function(s,i){const r=this,o=r.__v_raw,a=Q(o),l=e?vo:t?Co:us;return!t&&Me(a,"iterate",Jt),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function $s(t,e,n){return function(...s){const i=this.__v_raw,r=Q(i),o=wn(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?vo:e?Co:us;return!e&&Me(r,"iterate",l?Nr:Jt),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function wt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function fd(){const t={get(r){return Ms(this,r)},get size(){return Fs(this)},has:Ls,add:Sa,set:Ta,delete:Ra,clear:Aa,forEach:Bs(!1,!1)},e={get(r){return Ms(this,r,!1,!0)},get size(){return Fs(this)},has:Ls,add:Sa,set:Ta,delete:Ra,clear:Aa,forEach:Bs(!1,!0)},n={get(r){return Ms(this,r,!0)},get size(){return Fs(this,!0)},has(r){return Ls.call(this,r,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:Bs(!0,!1)},s={get(r){return Ms(this,r,!0,!0)},get size(){return Fs(this,!0)},has(r){return Ls.call(this,r,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:Bs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=$s(r,!1,!1),n[r]=$s(r,!0,!1),e[r]=$s(r,!1,!0),s[r]=$s(r,!0,!0)}),[t,n,e,s]}const[dd,pd,_d,gd]=fd();function Eo(t,e){const n=e?t?gd:_d:t?pd:dd;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(K(n,i)&&i in s?n:s,i,r)}const md={get:Eo(!1,!1)},yd={get:Eo(!1,!0)},vd={get:Eo(!0,!1)},Mc=new WeakMap,Lc=new WeakMap,Fc=new WeakMap,Ed=new WeakMap;function bd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cd(t){return t.__v_skip||!Object.isExtensible(t)?0:bd(Gf(t))}function Si(t){return xn(t)?t:bo(t,!1,cd,md,Mc)}function Bc(t){return bo(t,!1,hd,yd,Lc)}function $c(t){return bo(t,!0,ud,vd,Fc)}function bo(t,e,n,s,i){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Cd(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function In(t){return xn(t)?In(t.__v_raw):!!(t&&t.__v_isReactive)}function xn(t){return!!(t&&t.__v_isReadonly)}function Xs(t){return!!(t&&t.__v_isShallow)}function Uc(t){return In(t)||xn(t)}function Q(t){const e=t&&t.__v_raw;return e?Q(e):t}function Wc(t){return Qs(t,"__v_skip",!0),t}const us=t=>ce(t)?Si(t):t,Co=t=>ce(t)?$c(t):t;class Hc{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new go(()=>e(this._value),()=>xr(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=Q(this);return Vc(e),(!e._cacheable||e.effect.dirty)&&Lt(e._value,e._value=e.effect.run())&&xr(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function wd(t,e,n=!1){let s,i;const r=H(t);return r?(s=t,i=He):(s=t.get,i=t.set),new Hc(s,i,r||!i,n)}function Vc(t){Nt&&Xt&&(t=Q(t),Nc(Xt,t.dep||(t.dep=Pc(()=>t.dep=void 0,t instanceof Hc?t:void 0))))}function xr(t,e=3,n){t=Q(t);const s=t.dep;s&&xc(s,e)}function Le(t){return!!(t&&t.__v_isRef===!0)}function Id(t){return jc(t,!1)}function Sd(t){return jc(t,!0)}function jc(t,e){return Le(t)?t:new Td(t,e)}class Td{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Q(e),this._value=n?e:us(e)}get value(){return Vc(this),this._value}set value(e){const n=this.__v_isShallow||Xs(e)||xn(e);e=n?e:Q(e),Lt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:us(e),xr(this,3))}}function Zt(t){return Le(t)?t.value:t}const Rd={get:(t,e,n)=>Zt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Le(i)&&!Le(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function qc(t){return In(t)?t:new Proxy(t,Rd)}/**
* @vue/runtime-core v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Ti(r,e,n)}return i}function Xe(t,e,n,s){if(H(t)){const r=xt(t,e,n,s);return r&&Ec(r)&&r.catch(o=>{Ti(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Xe(t[r],e,n,s));return i}function Ti(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/errors/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){xt(l,null,10,[t,o,a]);return}}Ad(t,n,i,s)}function Ad(t,e,n,s=!0){console.error(t)}let hs=!1,Pr=!1;const Se=[];let ot=0;const Sn=[];let St=null,Gt=0;const Gc=Promise.resolve();let wo=null;function Kc(t){const e=wo||Gc;return t?e.then(this?t.bind(this):t):e}function Nd(t){let e=ot+1,n=Se.length;for(;e<n;){const s=e+n>>>1,i=Se[s],r=fs(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function Io(t){(!Se.length||!Se.includes(t,hs&&t.allowRecurse?ot+1:ot))&&(t.id==null?Se.push(t):Se.splice(Nd(t.id),0,t),zc())}function zc(){!hs&&!Pr&&(Pr=!0,wo=Gc.then(Qc))}function xd(t){const e=Se.indexOf(t);e>ot&&Se.splice(e,1)}function Pd(t){$(t)?Sn.push(...t):(!St||!St.includes(t,t.allowRecurse?Gt+1:Gt))&&Sn.push(t),zc()}function Na(t,e,n=hs?ot+1:0){for(;n<Se.length;n++){const s=Se[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;Se.splice(n,1),n--,s()}}}function Yc(t){if(Sn.length){const e=[...new Set(Sn)].sort((n,s)=>fs(n)-fs(s));if(Sn.length=0,St){St.push(...e);return}for(St=e,Gt=0;Gt<St.length;Gt++)St[Gt]();St=null,Gt=0}}const fs=t=>t.id==null?1/0:t.id,Od=(t,e)=>{const n=fs(t)-fs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Qc(t){Pr=!1,hs=!0,Se.sort(Od);try{for(ot=0;ot<Se.length;ot++){const e=Se[ot];e&&e.active!==!1&&xt(e,null,14)}}finally{ot=0,Se.length=0,Yc(),hs=!1,wo=null,(Se.length||Sn.length)&&Qc()}}function kd(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||oe;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||oe;f&&(i=n.map(_=>_e(_)?_.trim():_)),h&&(i=n.map(Sr))}let a,l=s[a=Xi(e)]||s[a=Xi(Nn(e))];!l&&r&&(l=s[a=Xi($n(e))]),l&&Xe(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Xe(c,t,6,i)}}function Xc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!H(t)){const l=c=>{const u=Xc(c,e,!0);u&&(a=!0,Ce(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ce(t)&&s.set(t,null),null):($(r)?r.forEach(l=>o[l]=null):Ce(o,r),ce(t)&&s.set(t,o),o)}function Ri(t,e){return!t||!bi(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,$n(e))||K(t,e))}let $e=null,Ai=null;function Js(t){const e=$e;return $e=t,Ai=t&&t.type.__scopeId||null,e}function Jc(t){Ai=t}function Zc(){Ai=null}function Dd(t,e=$e,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&$a(-1);const r=Js(e);let o;try{o=t(...i)}finally{Js(r),s._d&&$a(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Zi(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:_,ctx:v,inheritAttrs:S}=t;let O,P;const F=Js(t);try{if(n.shapeFlag&4){const z=i||s,fe=z;O=rt(u.call(fe,z,h,r,_,f,v)),P=l}else{const z=e;O=rt(z.length>1?z(r,{attrs:l,slots:a,emit:c}):z(r,null)),P=e.props?l:Md(l)}}catch(z){ns.length=0,Ti(z,t,1),O=be(tn)}let B=O;if(P&&S!==!1){const z=Object.keys(P),{shapeFlag:fe}=B;z.length&&fe&7&&(o&&z.some(uo)&&(P=Ld(P,o)),B=Pn(B,P))}return n.dirs&&(B=Pn(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),O=B,Js(F),O}const Md=t=>{let e;for(const n in t)(n==="class"||n==="style"||bi(n))&&((e||(e={}))[n]=t[n]);return e},Ld=(t,e)=>{const n={};for(const s in t)(!uo(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Fd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?xa(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Ri(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?xa(s,o,c):!0:!!o;return!1}function xa(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ri(n,r))return!0}return!1}function Bd({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const $d=Symbol.for("v-ndc"),Ud=t=>t.__isSuspense;function Wd(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):Pd(t)}const Hd=Symbol.for("v-scx"),Vd=()=>dt(Hd),Us={};function qs(t,e,n){return eu(t,e,n)}function eu(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:a}=oe){if(e&&r){const W=e;e=(...Te)=>{W(...Te),fe()}}const l=Ae,c=W=>s===!0?W:Kt(W,s===!1?1:void 0);let u,h=!1,f=!1;if(Le(t)?(u=()=>t.value,h=Xs(t)):In(t)?(u=()=>c(t),h=!0):$(t)?(f=!0,h=t.some(W=>In(W)||Xs(W)),u=()=>t.map(W=>{if(Le(W))return W.value;if(In(W))return c(W);if(H(W))return xt(W,l,2)})):H(t)?e?u=()=>xt(t,l,2):u=()=>(_&&_(),Xe(t,l,3,[v])):u=He,e&&s){const W=u;u=()=>Kt(W())}let _,v=W=>{_=B.onStop=()=>{xt(W,l,4),_=B.onStop=void 0}},S;if(ki)if(v=He,e?n&&Xe(e,l,3,[u(),f?[]:void 0,v]):u(),i==="sync"){const W=Vd();S=W.__watcherHandles||(W.__watcherHandles=[])}else return He;let O=f?new Array(t.length).fill(Us):Us;const P=()=>{if(!(!B.active||!B.dirty))if(e){const W=B.run();(s||h||(f?W.some((Te,We)=>Lt(Te,O[We])):Lt(W,O)))&&(_&&_(),Xe(e,l,3,[W,O===Us?void 0:f&&O[0]===Us?[]:O,v]),O=W)}else B.run()};P.allowRecurse=!!e;let F;i==="sync"?F=P:i==="post"?F=()=>Pe(P,l&&l.suspense):(P.pre=!0,l&&(P.id=l.uid),F=()=>Io(P));const B=new go(u,He,F),z=sd(),fe=()=>{B.stop(),z&&ho(z.effects,B)};return e?n?P():O=B.run():i==="post"?Pe(B.run.bind(B),l&&l.suspense):B.run(),S&&S.push(fe),fe}function jd(t,e,n){const s=this.proxy,i=_e(t)?t.includes(".")?tu(s,t):()=>s[t]:t.bind(s,s);let r;H(e)?r=e:(r=e.handler,n=e);const o=Ts(this),a=eu(i,r.bind(s),n);return o(),a}function tu(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Kt(t,e,n=0,s){if(!ce(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(s=s||new Set,s.has(t))return t;if(s.add(t),Le(t))Kt(t.value,e,n,s);else if($(t))for(let i=0;i<t.length;i++)Kt(t[i],e,n,s);else if(vc(t)||wn(t))t.forEach(i=>{Kt(i,e,n,s)});else if(Cc(t))for(const i in t)Kt(t[i],e,n,s);return t}function lw(t,e){if($e===null)return t;const n=Di($e)||$e.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=oe]=e[i];r&&(H(r)&&(r={mounted:r,updated:r}),r.deep&&Kt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Ht(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(cn(),Xe(l,n,8,[t.el,a,t,e]),un())}}/*! #__NO_SIDE_EFFECTS__ */function nu(t,e){return H(t)?Ce({name:t.name},e,{setup:t}):t}const Gs=t=>!!t.type.__asyncLoader,su=t=>t.type.__isKeepAlive;function qd(t,e){iu(t,"a",e)}function Gd(t,e){iu(t,"da",e)}function iu(t,e,n=Ae){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ni(e,s,n),n){let i=n.parent;for(;i&&i.parent;)su(i.parent.vnode)&&Kd(s,e,n,i),i=i.parent}}function Kd(t,e,n,s){const i=Ni(e,t,s,!0);ru(()=>{ho(s[e],i)},n)}function Ni(t,e,n=Ae,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;cn();const a=Ts(n),l=Xe(e,n,t,o);return a(),un(),l});return s?i.unshift(r):i.push(r),r}}const mt=t=>(e,n=Ae)=>(!ki||t==="sp")&&Ni(t,(...s)=>e(...s),n),zd=mt("bm"),Yd=mt("m"),Qd=mt("bu"),Xd=mt("u"),Jd=mt("bum"),ru=mt("um"),Zd=mt("sp"),ep=mt("rtg"),tp=mt("rtc");function np(t,e=Ae){Ni("ec",t,e)}function cw(t,e,n,s){let i;const r=n&&n[s];if($(t)||_e(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ce(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Or=t=>t?yu(t)?Di(t)||t.proxy:Or(t.parent):null,ts=Ce(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Or(t.parent),$root:t=>Or(t.root),$emit:t=>t.emit,$options:t=>So(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Io(t.update)}),$nextTick:t=>t.n||(t.n=Kc.bind(t.proxy)),$watch:t=>jd.bind(t)}),er=(t,e)=>t!==oe&&!t.__isScriptSetup&&K(t,e),sp={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(er(s,e))return o[e]=1,s[e];if(i!==oe&&K(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&K(c,e))return o[e]=3,r[e];if(n!==oe&&K(n,e))return o[e]=4,n[e];kr&&(o[e]=0)}}const u=ts[e];let h,f;if(u)return e==="$attrs"&&Me(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==oe&&K(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,K(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return er(i,e)?(i[e]=n,!0):s!==oe&&K(s,e)?(s[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==oe&&K(t,o)||er(e,o)||(a=r[0])&&K(a,o)||K(s,o)||K(ts,o)||K(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Pa(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let kr=!0;function ip(t){const e=So(t),n=t.proxy,s=t.ctx;kr=!1,e.beforeCreate&&Oa(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:v,activated:S,deactivated:O,beforeDestroy:P,beforeUnmount:F,destroyed:B,unmounted:z,render:fe,renderTracked:W,renderTriggered:Te,errorCaptured:We,serverPrefetch:dn,expose:et,inheritAttrs:bt,components:Wt,directives:tt,filters:qn}=e;if(c&&rp(c,s,null),o)for(const ee in o){const X=o[ee];H(X)&&(s[ee]=X.bind(n))}if(i){const ee=i.call(n,n);ce(ee)&&(t.data=Si(ee))}if(kr=!0,r)for(const ee in r){const X=r[ee],ct=H(X)?X.bind(n,n):H(X.get)?X.get.bind(n,n):He,Ct=!H(X)&&H(X.set)?X.set.bind(n):He,nt=Ge({get:ct,set:Ct});Object.defineProperty(s,ee,{enumerable:!0,configurable:!0,get:()=>nt.value,set:xe=>nt.value=xe})}if(a)for(const ee in a)ou(a[ee],s,n,ee);if(l){const ee=H(l)?l.call(n):l;Reflect.ownKeys(ee).forEach(X=>{Ks(X,ee[X])})}u&&Oa(u,t,"c");function ge(ee,X){$(X)?X.forEach(ct=>ee(ct.bind(n))):X&&ee(X.bind(n))}if(ge(zd,h),ge(Yd,f),ge(Qd,_),ge(Xd,v),ge(qd,S),ge(Gd,O),ge(np,We),ge(tp,W),ge(ep,Te),ge(Jd,F),ge(ru,z),ge(Zd,dn),$(et))if(et.length){const ee=t.exposed||(t.exposed={});et.forEach(X=>{Object.defineProperty(ee,X,{get:()=>n[X],set:ct=>n[X]=ct})})}else t.exposed||(t.exposed={});fe&&t.render===He&&(t.render=fe),bt!=null&&(t.inheritAttrs=bt),Wt&&(t.components=Wt),tt&&(t.directives=tt)}function rp(t,e,n=He){$(t)&&(t=Dr(t));for(const s in t){const i=t[s];let r;ce(i)?"default"in i?r=dt(i.from||s,i.default,!0):r=dt(i.from||s):r=dt(i),Le(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Oa(t,e,n){Xe($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ou(t,e,n,s){const i=s.includes(".")?tu(n,s):()=>n[s];if(_e(t)){const r=e[t];H(r)&&qs(i,r)}else if(H(t))qs(i,t.bind(n));else if(ce(t))if($(t))t.forEach(r=>ou(r,e,n,s));else{const r=H(t.handler)?t.handler.bind(n):e[t.handler];H(r)&&qs(i,r,t)}}function So(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Zs(l,c,o,!0)),Zs(l,e,o)),ce(e)&&r.set(e,l),l}function Zs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Zs(t,r,n,!0),i&&i.forEach(o=>Zs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=op[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const op={data:ka,props:Da,emits:Da,methods:es,computed:es,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:es,directives:es,watch:lp,provide:ka,inject:ap};function ka(t,e){return e?t?function(){return Ce(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function ap(t,e){return es(Dr(t),Dr(e))}function Dr(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Re(t,e){return t?[...new Set([].concat(t,e))]:e}function es(t,e){return t?Ce(Object.create(null),t,e):e}function Da(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:Ce(Object.create(null),Pa(t),Pa(e??{})):e}function lp(t,e){if(!t)return e;if(!e)return t;const n=Ce(Object.create(null),t);for(const s in e)n[s]=Re(t[s],e[s]);return n}function au(){return{app:null,config:{isNativeTag:jf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cp=0;function up(t,e){return function(s,i=null){H(s)||(s=Ce({},s)),i!=null&&!ce(i)&&(i=null);const r=au(),o=new WeakSet;let a=!1;const l=r.app={_uid:cp++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Mp,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&H(c.install)?(o.add(c),c.install(l,...u)):H(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=be(s,i);return f.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Di(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){ei=l;try{return c()}finally{ei=null}}};return l}}let ei=null;function Ks(t,e){if(Ae){let n=Ae.provides;const s=Ae.parent&&Ae.parent.provides;s===n&&(n=Ae.provides=Object.create(s)),n[t]=e}}function dt(t,e,n=!1){const s=Ae||$e;if(s||ei){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ei._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&H(e)?e.call(s&&s.proxy):e}}function hp(t,e,n,s=!1){const i={},r={};Qs(r,Oi,1),t.propsDefaults=Object.create(null),lu(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Bc(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function fp(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=Q(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ri(t.emitsOptions,f))continue;const _=e[f];if(l)if(K(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const v=Nn(f);i[v]=Mr(l,a,v,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{lu(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!K(e,h)&&((u=$n(h))===h||!K(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Mr(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!K(e,h))&&(delete r[h],c=!0)}c&&ft(t,"set","$attrs")}function lu(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Vs(l))continue;const c=e[l];let u;i&&K(i,u=Nn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ri(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=Q(n),c=a||oe;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Mr(i,l,h,c[h],t,!K(c,h))}}return o}function Mr(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=K(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&H(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Ts(i);s=c[n]=l.call(null,e),u()}}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===$n(n))&&(s=!0))}return s}function cu(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!H(t)){const u=h=>{l=!0;const[f,_]=cu(h,e,!0);Ce(o,f),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ce(t)&&s.set(t,Cn),Cn;if($(r))for(let u=0;u<r.length;u++){const h=Nn(r[u]);Ma(h)&&(o[h]=oe)}else if(r)for(const u in r){const h=Nn(u);if(Ma(h)){const f=r[u],_=o[h]=$(f)||H(f)?{type:f}:Ce({},f);if(_){const v=Ba(Boolean,_.type),S=Ba(String,_.type);_[0]=v>-1,_[1]=S<0||v<S,(v>-1||K(_,"default"))&&a.push(h)}}}const c=[o,a];return ce(t)&&s.set(t,c),c}function Ma(t){return t[0]!=="$"}function La(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Fa(t,e){return La(t)===La(e)}function Ba(t,e){return $(e)?e.findIndex(n=>Fa(n,t)):H(e)&&Fa(e,t)?0:-1}const uu=t=>t[0]==="_"||t==="$stable",To=t=>$(t)?t.map(rt):[rt(t)],dp=(t,e,n)=>{if(e._n)return e;const s=Dd((...i)=>To(e(...i)),n);return s._c=!1,s},hu=(t,e,n)=>{const s=t._ctx;for(const i in t){if(uu(i))continue;const r=t[i];if(H(r))e[i]=dp(i,r,s);else if(r!=null){const o=To(r);e[i]=()=>o}}},fu=(t,e)=>{const n=To(e);t.slots.default=()=>n},pp=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Q(e),Qs(e,"_",n)):hu(e,t.slots={})}else t.slots={},e&&fu(t,e);Qs(t.slots,Oi,1)},_p=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=oe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Ce(i,e),!n&&a===1&&delete i._):(r=!e.$stable,hu(e,i)),o=e}else e&&(fu(t,e),o={default:1});if(r)for(const a in i)!uu(a)&&o[a]==null&&delete i[a]};function Lr(t,e,n,s,i=!1){if($(t)){t.forEach((f,_)=>Lr(f,e&&($(e)?e[_]:e),n,s,i));return}if(Gs(s)&&!i)return;const r=s.shapeFlag&4?Di(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===oe?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(_e(c)?(u[c]=null,K(h,c)&&(h[c]=null)):Le(c)&&(c.value=null)),H(l))xt(l,a,12,[o,u]);else{const f=_e(l),_=Le(l);if(f||_){const v=()=>{if(t.f){const S=f?K(h,l)?h[l]:u[l]:l.value;i?$(S)&&ho(S,r):$(S)?S.includes(r)||S.push(r):f?(u[l]=[r],K(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,K(h,l)&&(h[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,Pe(v,n)):v()}}}const Pe=Wd;function gp(t){return mp(t)}function mp(t,e){const n=Ic();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=He,insertStaticContent:v}=t,S=(d,p,g,E=null,m=null,I=null,A=void 0,w=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!Kn(d,p)&&(E=y(d),xe(d,m,I,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:b,ref:x,shapeFlag:M}=p;switch(b){case xi:O(d,p,g,E);break;case tn:P(d,p,g,E);break;case zs:d==null&&F(p,g,E,A);break;case qe:Wt(d,p,g,E,m,I,A,w,T);break;default:M&1?fe(d,p,g,E,m,I,A,w,T):M&6?tt(d,p,g,E,m,I,A,w,T):(M&64||M&128)&&b.process(d,p,g,E,m,I,A,w,T,k)}x!=null&&m&&Lr(x,d&&d.ref,I,p||d,!p)},O=(d,p,g,E)=>{if(d==null)s(p.el=a(p.children),g,E);else{const m=p.el=d.el;p.children!==d.children&&c(m,p.children)}},P=(d,p,g,E)=>{d==null?s(p.el=l(p.children||""),g,E):p.el=d.el},F=(d,p,g,E)=>{[d.el,d.anchor]=v(d.children,p,g,E,d.el,d.anchor)},B=({el:d,anchor:p},g,E)=>{let m;for(;d&&d!==p;)m=f(d),s(d,g,E),d=m;s(p,g,E)},z=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),i(d),d=g;i(p)},fe=(d,p,g,E,m,I,A,w,T)=>{p.type==="svg"?A="svg":p.type==="math"&&(A="mathml"),d==null?W(p,g,E,m,I,A,w,T):dn(d,p,m,I,A,w,T)},W=(d,p,g,E,m,I,A,w)=>{let T,b;const{props:x,shapeFlag:M,transition:D,dirs:U}=d;if(T=d.el=o(d.type,I,x&&x.is,x),M&8?u(T,d.children):M&16&&We(d.children,T,null,E,m,tr(d,I),A,w),U&&Ht(d,null,E,"created"),Te(T,d,d.scopeId,A,E),x){for(const te in x)te!=="value"&&!Vs(te)&&r(T,te,null,x[te],I,d.children,E,m,we);"value"in x&&r(T,"value",null,x.value,I),(b=x.onVnodeBeforeMount)&&it(b,E,d)}U&&Ht(d,null,E,"beforeMount");const q=yp(m,D);q&&D.beforeEnter(T),s(T,p,g),((b=x&&x.onVnodeMounted)||q||U)&&Pe(()=>{b&&it(b,E,d),q&&D.enter(T),U&&Ht(d,null,E,"mounted")},m)},Te=(d,p,g,E,m)=>{if(g&&_(d,g),E)for(let I=0;I<E.length;I++)_(d,E[I]);if(m){let I=m.subTree;if(p===I){const A=m.vnode;Te(d,A,A.scopeId,A.slotScopeIds,m.parent)}}},We=(d,p,g,E,m,I,A,w,T=0)=>{for(let b=T;b<d.length;b++){const x=d[b]=w?Tt(d[b]):rt(d[b]);S(null,x,p,g,E,m,I,A,w)}},dn=(d,p,g,E,m,I,A)=>{const w=p.el=d.el;let{patchFlag:T,dynamicChildren:b,dirs:x}=p;T|=d.patchFlag&16;const M=d.props||oe,D=p.props||oe;let U;if(g&&Vt(g,!1),(U=D.onVnodeBeforeUpdate)&&it(U,g,p,d),x&&Ht(p,d,g,"beforeUpdate"),g&&Vt(g,!0),b?et(d.dynamicChildren,b,w,g,E,tr(p,m),I):A||X(d,p,w,null,g,E,tr(p,m),I,!1),T>0){if(T&16)bt(w,p,M,D,g,E,m);else if(T&2&&M.class!==D.class&&r(w,"class",null,D.class,m),T&4&&r(w,"style",M.style,D.style,m),T&8){const q=p.dynamicProps;for(let te=0;te<q.length;te++){const le=q[te],me=M[le],Ve=D[le];(Ve!==me||le==="value")&&r(w,le,me,Ve,m,d.children,g,E,we)}}T&1&&d.children!==p.children&&u(w,p.children)}else!A&&b==null&&bt(w,p,M,D,g,E,m);((U=D.onVnodeUpdated)||x)&&Pe(()=>{U&&it(U,g,p,d),x&&Ht(p,d,g,"updated")},E)},et=(d,p,g,E,m,I,A)=>{for(let w=0;w<p.length;w++){const T=d[w],b=p[w],x=T.el&&(T.type===qe||!Kn(T,b)||T.shapeFlag&70)?h(T.el):g;S(T,b,x,null,E,m,I,A,!0)}},bt=(d,p,g,E,m,I,A)=>{if(g!==E){if(g!==oe)for(const w in g)!Vs(w)&&!(w in E)&&r(d,w,g[w],null,A,p.children,m,I,we);for(const w in E){if(Vs(w))continue;const T=E[w],b=g[w];T!==b&&w!=="value"&&r(d,w,b,T,A,p.children,m,I,we)}"value"in E&&r(d,"value",g.value,E.value,A)}},Wt=(d,p,g,E,m,I,A,w,T)=>{const b=p.el=d?d.el:a(""),x=p.anchor=d?d.anchor:a("");let{patchFlag:M,dynamicChildren:D,slotScopeIds:U}=p;U&&(w=w?w.concat(U):U),d==null?(s(b,g,E),s(x,g,E),We(p.children||[],g,x,m,I,A,w,T)):M>0&&M&64&&D&&d.dynamicChildren?(et(d.dynamicChildren,D,g,m,I,A,w),(p.key!=null||m&&p===m.subTree)&&du(d,p,!0)):X(d,p,g,x,m,I,A,w,T)},tt=(d,p,g,E,m,I,A,w,T)=>{p.slotScopeIds=w,d==null?p.shapeFlag&512?m.ctx.activate(p,g,E,A,T):qn(p,g,E,m,I,A,T):pn(d,p,T)},qn=(d,p,g,E,m,I,A)=>{const w=d.component=Np(d,E,m);if(su(d)&&(w.ctx.renderer=k),xp(w),w.asyncDep){if(m&&m.registerDep(w,ge),!d.el){const T=w.subTree=be(tn);P(null,T,p,g)}}else ge(w,d,p,g,m,I,A)},pn=(d,p,g)=>{const E=p.component=d.component;if(Fd(d,p,g))if(E.asyncDep&&!E.asyncResolved){ee(E,p,g);return}else E.next=p,xd(E.update),E.effect.dirty=!0,E.update();else p.el=d.el,E.vnode=p},ge=(d,p,g,E,m,I,A)=>{const w=()=>{if(d.isMounted){let{next:x,bu:M,u:D,parent:U,vnode:q}=d;{const mn=pu(d);if(mn){x&&(x.el=q.el,ee(d,x,A)),mn.asyncDep.then(()=>{d.isUnmounted||w()});return}}let te=x,le;Vt(d,!1),x?(x.el=q.el,ee(d,x,A)):x=q,M&&js(M),(le=x.props&&x.props.onVnodeBeforeUpdate)&&it(le,U,x,q),Vt(d,!0);const me=Zi(d),Ve=d.subTree;d.subTree=me,S(Ve,me,h(Ve.el),y(Ve),d,m,I),x.el=me.el,te===null&&Bd(d,me.el),D&&Pe(D,m),(le=x.props&&x.props.onVnodeUpdated)&&Pe(()=>it(le,U,x,q),m)}else{let x;const{el:M,props:D}=p,{bm:U,m:q,parent:te}=d,le=Gs(p);if(Vt(d,!1),U&&js(U),!le&&(x=D&&D.onVnodeBeforeMount)&&it(x,te,p),Vt(d,!0),M&&ae){const me=()=>{d.subTree=Zi(d),ae(M,d.subTree,d,m,null)};le?p.type.__asyncLoader().then(()=>!d.isUnmounted&&me()):me()}else{const me=d.subTree=Zi(d);S(null,me,g,E,d,m,I),p.el=me.el}if(q&&Pe(q,m),!le&&(x=D&&D.onVnodeMounted)){const me=p;Pe(()=>it(x,te,me),m)}(p.shapeFlag&256||te&&Gs(te.vnode)&&te.vnode.shapeFlag&256)&&d.a&&Pe(d.a,m),d.isMounted=!0,p=g=E=null}},T=d.effect=new go(w,He,()=>Io(b),d.scope),b=d.update=()=>{T.dirty&&T.run()};b.id=d.uid,Vt(d,!0),b()},ee=(d,p,g)=>{p.component=d;const E=d.vnode.props;d.vnode=p,d.next=null,fp(d,p.props,E,g),_p(d,p.children,g),cn(),Na(d),un()},X=(d,p,g,E,m,I,A,w,T=!1)=>{const b=d&&d.children,x=d?d.shapeFlag:0,M=p.children,{patchFlag:D,shapeFlag:U}=p;if(D>0){if(D&128){Ct(b,M,g,E,m,I,A,w,T);return}else if(D&256){ct(b,M,g,E,m,I,A,w,T);return}}U&8?(x&16&&we(b,m,I),M!==b&&u(g,M)):x&16?U&16?Ct(b,M,g,E,m,I,A,w,T):we(b,m,I,!0):(x&8&&u(g,""),U&16&&We(M,g,E,m,I,A,w,T))},ct=(d,p,g,E,m,I,A,w,T)=>{d=d||Cn,p=p||Cn;const b=d.length,x=p.length,M=Math.min(b,x);let D;for(D=0;D<M;D++){const U=p[D]=T?Tt(p[D]):rt(p[D]);S(d[D],U,g,null,m,I,A,w,T)}b>x?we(d,m,I,!0,!1,M):We(p,g,E,m,I,A,w,T,M)},Ct=(d,p,g,E,m,I,A,w,T)=>{let b=0;const x=p.length;let M=d.length-1,D=x-1;for(;b<=M&&b<=D;){const U=d[b],q=p[b]=T?Tt(p[b]):rt(p[b]);if(Kn(U,q))S(U,q,g,null,m,I,A,w,T);else break;b++}for(;b<=M&&b<=D;){const U=d[M],q=p[D]=T?Tt(p[D]):rt(p[D]);if(Kn(U,q))S(U,q,g,null,m,I,A,w,T);else break;M--,D--}if(b>M){if(b<=D){const U=D+1,q=U<x?p[U].el:E;for(;b<=D;)S(null,p[b]=T?Tt(p[b]):rt(p[b]),g,q,m,I,A,w,T),b++}}else if(b>D)for(;b<=M;)xe(d[b],m,I,!0),b++;else{const U=b,q=b,te=new Map;for(b=q;b<=D;b++){const Be=p[b]=T?Tt(p[b]):rt(p[b]);Be.key!=null&&te.set(Be.key,b)}let le,me=0;const Ve=D-q+1;let mn=!1,ya=0;const Gn=new Array(Ve);for(b=0;b<Ve;b++)Gn[b]=0;for(b=U;b<=M;b++){const Be=d[b];if(me>=Ve){xe(Be,m,I,!0);continue}let st;if(Be.key!=null)st=te.get(Be.key);else for(le=q;le<=D;le++)if(Gn[le-q]===0&&Kn(Be,p[le])){st=le;break}st===void 0?xe(Be,m,I,!0):(Gn[st-q]=b+1,st>=ya?ya=st:mn=!0,S(Be,p[st],g,null,m,I,A,w,T),me++)}const va=mn?vp(Gn):Cn;for(le=va.length-1,b=Ve-1;b>=0;b--){const Be=q+b,st=p[Be],Ea=Be+1<x?p[Be+1].el:E;Gn[b]===0?S(null,st,g,Ea,m,I,A,w,T):mn&&(le<0||b!==va[le]?nt(st,g,Ea,2):le--)}}},nt=(d,p,g,E,m=null)=>{const{el:I,type:A,transition:w,children:T,shapeFlag:b}=d;if(b&6){nt(d.component.subTree,p,g,E);return}if(b&128){d.suspense.move(p,g,E);return}if(b&64){A.move(d,p,g,k);return}if(A===qe){s(I,p,g);for(let M=0;M<T.length;M++)nt(T[M],p,g,E);s(d.anchor,p,g);return}if(A===zs){B(d,p,g);return}if(E!==2&&b&1&&w)if(E===0)w.beforeEnter(I),s(I,p,g),Pe(()=>w.enter(I),m);else{const{leave:M,delayLeave:D,afterLeave:U}=w,q=()=>s(I,p,g),te=()=>{M(I,()=>{q(),U&&U()})};D?D(I,q,te):te()}else s(I,p,g)},xe=(d,p,g,E=!1,m=!1)=>{const{type:I,props:A,ref:w,children:T,dynamicChildren:b,shapeFlag:x,patchFlag:M,dirs:D}=d;if(w!=null&&Lr(w,null,g,d,!0),x&256){p.ctx.deactivate(d);return}const U=x&1&&D,q=!Gs(d);let te;if(q&&(te=A&&A.onVnodeBeforeUnmount)&&it(te,p,d),x&6)Ds(d.component,g,E);else{if(x&128){d.suspense.unmount(g,E);return}U&&Ht(d,null,p,"beforeUnmount"),x&64?d.type.remove(d,p,g,m,k,E):b&&(I!==qe||M>0&&M&64)?we(b,p,g,!1,!0):(I===qe&&M&384||!m&&x&16)&&we(T,p,g),E&&_n(d)}(q&&(te=A&&A.onVnodeUnmounted)||U)&&Pe(()=>{te&&it(te,p,d),U&&Ht(d,null,p,"unmounted")},g)},_n=d=>{const{type:p,el:g,anchor:E,transition:m}=d;if(p===qe){gn(g,E);return}if(p===zs){z(d);return}const I=()=>{i(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(d.shapeFlag&1&&m&&!m.persisted){const{leave:A,delayLeave:w}=m,T=()=>A(g,I);w?w(d.el,I,T):T()}else I()},gn=(d,p)=>{let g;for(;d!==p;)g=f(d),i(d),d=g;i(p)},Ds=(d,p,g)=>{const{bum:E,scope:m,update:I,subTree:A,um:w}=d;E&&js(E),m.stop(),I&&(I.active=!1,xe(A,d,p,g)),w&&Pe(w,p),Pe(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},we=(d,p,g,E=!1,m=!1,I=0)=>{for(let A=I;A<d.length;A++)xe(d[A],p,g,E,m)},y=d=>d.shapeFlag&6?y(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el);let N=!1;const R=(d,p,g)=>{d==null?p._vnode&&xe(p._vnode,null,null,!0):S(p._vnode||null,d,p,null,null,null,g),N||(N=!0,Na(),Yc(),N=!1),p._vnode=d},k={p:S,um:xe,m:nt,r:_n,mt:qn,mc:We,pc:X,pbc:et,n:y,o:t};let J,ae;return e&&([J,ae]=e(k)),{render:R,hydrate:J,createApp:up(R,J)}}function tr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Vt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function yp(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function du(t,e,n=!1){const s=t.children,i=e.children;if($(s)&&$(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Tt(i[r]),a.el=o.el),n||du(o,a)),a.type===xi&&(a.el=o.el)}}function vp(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function pu(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:pu(e)}const Ep=t=>t.__isTeleport,qe=Symbol.for("v-fgt"),xi=Symbol.for("v-txt"),tn=Symbol.for("v-cmt"),zs=Symbol.for("v-stc"),ns=[];let ze=null;function Un(t=!1){ns.push(ze=t?null:[])}function bp(){ns.pop(),ze=ns[ns.length-1]||null}let ds=1;function $a(t){ds+=t}function _u(t){return t.dynamicChildren=ds>0?ze||Cn:null,bp(),ds>0&&ze&&ze.push(t),t}function Pi(t,e,n,s,i,r){return _u(ue(t,e,n,s,i,r,!0))}function gu(t,e,n,s,i){return _u(be(t,e,n,s,i,!0))}function Fr(t){return t?t.__v_isVNode===!0:!1}function Kn(t,e){return t.type===e.type&&t.key===e.key}const Oi="__vInternal",mu=({key:t})=>t??null,Ys=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?_e(t)||Le(t)||H(t)?{i:$e,r:t,k:e,f:!!n}:t:null);function ue(t,e=null,n=null,s=0,i=null,r=t===qe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&mu(e),ref:e&&Ys(e),scopeId:Ai,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:$e};return a?(Ro(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=_e(n)?8:16),ds>0&&!o&&ze&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ze.push(l),l}const be=Cp;function Cp(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===$d)&&(t=tn),Fr(t)){const a=Pn(t,e,!0);return n&&Ro(a,n),ds>0&&!r&&ze&&(a.shapeFlag&6?ze[ze.indexOf(t)]=a:ze.push(a)),a.patchFlag|=-2,a}if(Dp(t)&&(t=t.__vccOpts),e){e=wp(e);let{class:a,style:l}=e;a&&!_e(a)&&(e.class=_o(a)),ce(l)&&(Uc(l)&&!$(l)&&(l=Ce({},l)),e.style=po(l))}const o=_e(t)?1:Ud(t)?128:Ep(t)?64:ce(t)?4:H(t)?2:0;return ue(t,e,n,s,i,o,r,!0)}function wp(t){return t?Uc(t)||Oi in t?Ce({},t):t:null}function Pn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Tp(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&mu(a),ref:e&&e.ref?n&&i?$(i)?i.concat(Ys(e)):[i,Ys(e)]:Ys(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qe?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pn(t.ssContent),ssFallback:t.ssFallback&&Pn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ip(t=" ",e=0){return be(xi,null,t,e)}function Sp(t,e){const n=be(zs,null,t);return n.staticCount=e,n}function uw(t="",e=!1){return e?(Un(),gu(tn,null,t)):be(tn,null,t)}function rt(t){return t==null||typeof t=="boolean"?be(tn):$(t)?be(qe,null,t.slice()):typeof t=="object"?Tt(t):be(xi,null,String(t))}function Tt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pn(t)}function Ro(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ro(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Oi in e)?e._ctx=$e:i===3&&$e&&($e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:$e},n=32):(e=String(e),s&64?(n=16,e=[Ip(e)]):n=8);t.children=e,t.shapeFlag|=n}function Tp(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=_o([e.class,s.class]));else if(i==="style")e.style=po([e.style,s.style]);else if(bi(i)){const r=e[i],o=s[i];o&&r!==o&&!($(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function it(t,e,n,s=null){Xe(t,e,7,[n,s])}const Rp=au();let Ap=0;function Np(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Rp,r={uid:Ap++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new td(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cu(s,i),emitsOptions:Xc(s,i),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:s.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=kd.bind(null,r),t.ce&&t.ce(r),r}let Ae=null,ti,Br;{const t=Ic(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};ti=e("__VUE_INSTANCE_SETTERS__",n=>Ae=n),Br=e("__VUE_SSR_SETTERS__",n=>ki=n)}const Ts=t=>{const e=Ae;return ti(t),t.scope.on(),()=>{t.scope.off(),ti(e)}},Ua=()=>{Ae&&Ae.scope.off(),ti(null)};function yu(t){return t.vnode.shapeFlag&4}let ki=!1;function xp(t,e=!1){e&&Br(e);const{props:n,children:s}=t.vnode,i=yu(t);hp(t,n,i,e),pp(t,s);const r=i?Pp(t,e):void 0;return e&&Br(!1),r}function Pp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Wc(new Proxy(t.ctx,sp));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?kp(t):null,r=Ts(t);cn();const o=xt(s,t,0,[t.props,i]);if(un(),r(),Ec(o)){if(o.then(Ua,Ua),e)return o.then(a=>{Wa(t,a,e)}).catch(a=>{Ti(a,t,0)});t.asyncDep=o}else Wa(t,o,e)}else vu(t,e)}function Wa(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=qc(e)),vu(t,n)}let Ha;function vu(t,e,n){const s=t.type;if(!t.render){if(!e&&Ha&&!s.render){const i=s.template||So(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ce(Ce({isCustomElement:r,delimiters:a},o),l);s.render=Ha(i,c)}}t.render=s.render||He}{const i=Ts(t);cn();try{ip(t)}finally{un(),i()}}}function Op(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Me(t,"get","$attrs"),e[n]}}))}function kp(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Op(t)},slots:t.slots,emit:t.emit,expose:e}}function Di(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(qc(Wc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ts)return ts[n](t)},has(e,n){return n in e||n in ts}}))}function Dp(t){return H(t)&&"__vccOpts"in t}const Ge=(t,e)=>wd(t,e,ki);function Eu(t,e,n){const s=arguments.length;return s===2?ce(e)&&!$(e)?Fr(e)?be(t,null,[e]):be(t,e):be(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Fr(n)&&(n=[n]),be(t,e,n))}const Mp="3.4.10";/**
* @vue/runtime-dom v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Lp="http://www.w3.org/2000/svg",Fp="http://www.w3.org/1998/Math/MathML",Rt=typeof document<"u"?document:null,Va=Rt&&Rt.createElement("template"),Bp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Rt.createElementNS(Lp,t):e==="mathml"?Rt.createElementNS(Fp,t):Rt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Rt.createTextNode(t),createComment:t=>Rt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Va.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=Va.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},$p=Symbol("_vtc");function Up(t,e,n){const s=t[$p];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Wp=Symbol("_vod"),Hp=Symbol("");function Vp(t,e,n){const s=t.style,i=s.display,r=_e(n);if(n&&!r){if(e&&!_e(e))for(const o in e)n[o]==null&&$r(s,o,"");for(const o in n)$r(s,o,n[o])}else if(r){if(e!==n){const o=s[Hp];o&&(n+=";"+o),s.cssText=n}}else e&&t.removeAttribute("style");Wp in t&&(s.display=i)}const ja=/\s*!important$/;function $r(t,e,n){if($(n))n.forEach(s=>$r(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=jp(t,e);ja.test(n)?t.setProperty($n(s),n.replace(ja,""),"important"):t[s]=n}}const qa=["Webkit","Moz","ms"],nr={};function jp(t,e){const n=nr[e];if(n)return n;let s=Nn(e);if(s!=="filter"&&s in t)return nr[e]=s;s=wc(s);for(let i=0;i<qa.length;i++){const r=qa[i]+s;if(r in t)return nr[e]=r}return e}const Ga="http://www.w3.org/1999/xlink";function qp(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ga,e.slice(6,e.length)):t.setAttributeNS(Ga,e,n);else{const r=ed(e);n==null||r&&!Sc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Gp(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Sc(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function vn(t,e,n,s){t.addEventListener(e,n,s)}function Kp(t,e,n,s){t.removeEventListener(e,n,s)}const Ka=Symbol("_vei");function zp(t,e,n,s,i=null){const r=t[Ka]||(t[Ka]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Yp(e);if(s){const c=r[e]=Jp(s,i);vn(t,a,c,l)}else o&&(Kp(t,a,o,l),r[e]=void 0)}}const za=/(?:Once|Passive|Capture)$/;function Yp(t){let e;if(za.test(t)){e={};let s;for(;s=t.match(za);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):$n(t.slice(2)),e]}let sr=0;const Qp=Promise.resolve(),Xp=()=>sr||(Qp.then(()=>sr=0),sr=Date.now());function Jp(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Xe(Zp(s,n.value),e,5,[s])};return n.value=t,n.attached=Xp(),n}function Zp(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Ya=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,e_=(t,e,n,s,i,r,o,a,l)=>{const c=i==="svg";e==="class"?Up(t,s,c):e==="style"?Vp(t,n,s):bi(e)?uo(e)||zp(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):t_(t,e,s,c))?Gp(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),qp(t,e,s,c))};function t_(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ya(e)&&H(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Ya(e)&&_e(n)?!1:e in t}const Qa=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>js(e,n):e};function n_(t){t.target.composing=!0}function Xa(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ir=Symbol("_assign"),hw={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[ir]=Qa(i);const r=s||i.props&&i.props.type==="number";vn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Sr(a)),t[ir](a)}),n&&vn(t,"change",()=>{t.value=t.value.trim()}),e||(vn(t,"compositionstart",n_),vn(t,"compositionend",Xa),vn(t,"change",Xa))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t[ir]=Qa(r),t.composing)return;const o=i||t.type==="number"?Sr(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===a)||(t.value=a))}},s_=["ctrl","shift","alt","meta"],i_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>s_.some(n=>t[`${n}Key`]&&!e.includes(n))},r_=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=i_[e[o]];if(a&&a(i,e))return}return t(i,...r)})},o_=Ce({patchProp:e_},Bp);let Ja;function a_(){return Ja||(Ja=gp(o_))}const l_=(...t)=>{const e=a_().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=u_(s);if(!i)return;const r=e._component;!H(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,c_(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function c_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function u_(t){return _e(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const En=typeof window<"u";function h_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Z=Object.assign;function rr(t,e){const n={};for(const s in e){const i=e[s];n[s]=Ze(i)?i.map(t):t(i)}return n}const ss=()=>{},Ze=Array.isArray,f_=/\/$/,d_=t=>t.replace(f_,"");function or(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=m_(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function p_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Za(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function __(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&On(e.matched[s],n.matched[i])&&bu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function On(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function bu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!g_(t[n],e[n]))return!1;return!0}function g_(t,e){return Ze(t)?el(t,e):Ze(e)?el(e,t):t===e}function el(t,e){return Ze(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function m_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var ps;(function(t){t.pop="pop",t.push="push"})(ps||(ps={}));var is;(function(t){t.back="back",t.forward="forward",t.unknown=""})(is||(is={}));function y_(t){if(!t)if(En){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),d_(t)}const v_=/^[^#]+#/;function E_(t,e){return t.replace(v_,"#")+e}function b_(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Mi=()=>({left:window.pageXOffset,top:window.pageYOffset});function C_(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=b_(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function tl(t,e){return(history.state?history.state.position-e:-1)+t}const Ur=new Map;function w_(t,e){Ur.set(t,e)}function I_(t){const e=Ur.get(t);return Ur.delete(t),e}let S_=()=>location.protocol+"//"+location.host;function Cu(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Za(l,"")}return Za(n,t)+s+i}function T_(t,e,n,s){let i=[],r=[],o=null;const a=({state:f})=>{const _=Cu(t,location),v=n.value,S=e.value;let O=0;if(f){if(n.value=_,e.value=f,o&&o===v){o=null;return}O=S?f.position-S.position:0}else s(_);i.forEach(P=>{P(n.value,v,{delta:O,type:ps.pop,direction:O?O>0?is.forward:is.back:is.unknown})})};function l(){o=n.value}function c(f){i.push(f);const _=()=>{const v=i.indexOf(f);v>-1&&i.splice(v,1)};return r.push(_),_}function u(){const{history:f}=window;f.state&&f.replaceState(Z({},f.state,{scroll:Mi()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function nl(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Mi():null}}function R_(t){const{history:e,location:n}=window,s={value:Cu(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:S_()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](f)}}function o(l,c){const u=Z({},e.state,nl(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=Z({},i.value,e.state,{forward:l,scroll:Mi()});r(u.current,u,!0);const h=Z({},nl(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function A_(t){t=y_(t);const e=R_(t),n=T_(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Z({location:"",base:t,go:s,createHref:E_.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function N_(t){return typeof t=="string"||t&&typeof t=="object"}function wu(t){return typeof t=="string"||typeof t=="symbol"}const It={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Iu=Symbol("");var sl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(sl||(sl={}));function kn(t,e){return Z(new Error,{type:t,[Iu]:!0},e)}function ut(t,e){return t instanceof Error&&Iu in t&&(e==null||!!(t.type&e))}const il="[^/]+?",x_={sensitive:!1,strict:!1,start:!0,end:!0},P_=/[.+*?^${}()[\]/\\]/g;function O_(t,e){const n=Z({},x_,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let _=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(P_,"\\$&"),_+=40;else if(f.type===1){const{value:v,repeatable:S,optional:O,regexp:P}=f;r.push({name:v,repeatable:S,optional:O});const F=P||il;if(F!==il){_+=10;try{new RegExp(`(${F})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${v}" (${F}): `+z.message)}}let B=S?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;h||(B=O&&c.length<2?`(?:/${B})`:"/"+B),O&&(B+="?"),i+=B,_+=20,O&&(_+=-8),S&&(_+=-20),F===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const _=u[f]||"",v=r[f-1];h[v.name]=_&&v.repeatable?_.split("/"):_}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of f)if(_.type===0)u+=_.value;else if(_.type===1){const{value:v,repeatable:S,optional:O}=_,P=v in c?c[v]:"";if(Ze(P)&&!S)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const F=Ze(P)?P.join("/"):P;if(!F)if(O)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=F}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function k_(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function D_(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=k_(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(rl(s))return 1;if(rl(i))return-1}return i.length-s.length}function rl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const M_={type:0,value:""},L_=/[a-zA-Z0-9_]/;function F_(t){if(!t)return[[]];if(t==="/")return[[M_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:L_.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function B_(t,e,n){const s=O_(F_(t.path),n),i=Z(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function $_(t,e){const n=[],s=new Map;e=ll({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const _=!f,v=U_(u);v.aliasOf=f&&f.record;const S=ll(e,u),O=[v];if("alias"in u){const B=typeof u.alias=="string"?[u.alias]:u.alias;for(const z of B)O.push(Z({},v,{components:f?f.record.components:v.components,path:z,aliasOf:f?f.record:v}))}let P,F;for(const B of O){const{path:z}=B;if(h&&z[0]!=="/"){const fe=h.record.path,W=fe[fe.length-1]==="/"?"":"/";B.path=h.record.path+(z&&W+z)}if(P=B_(B,h,S),f?f.alias.push(P):(F=F||P,F!==P&&F.alias.push(P),_&&u.name&&!al(P)&&o(u.name)),v.children){const fe=v.children;for(let W=0;W<fe.length;W++)r(fe[W],P,f&&f.children[W])}f=f||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&l(P)}return F?()=>{o(F)}:ss}function o(u){if(wu(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&D_(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Su(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!al(u)&&s.set(u.record.name,u)}function c(u,h){let f,_={},v,S;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw kn(1,{location:u});S=f.record.name,_=Z(ol(h.params,f.keys.filter(F=>!F.optional).map(F=>F.name)),u.params&&ol(u.params,f.keys.map(F=>F.name))),v=f.stringify(_)}else if("path"in u)v=u.path,f=n.find(F=>F.re.test(v)),f&&(_=f.parse(v),S=f.record.name);else{if(f=h.name?s.get(h.name):n.find(F=>F.re.test(h.path)),!f)throw kn(1,{location:u,currentLocation:h});S=f.record.name,_=Z({},h.params,u.params),v=f.stringify(_)}const O=[];let P=f;for(;P;)O.unshift(P.record),P=P.parent;return{name:S,path:v,params:_,matched:O,meta:H_(O)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function ol(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function U_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:W_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function W_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function al(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function H_(t){return t.reduce((e,n)=>Z(e,n.meta),{})}function ll(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Su(t,e){return e.children.some(n=>n===t||Su(t,n))}const Tu=/#/g,V_=/&/g,j_=/\//g,q_=/=/g,G_=/\?/g,Ru=/\+/g,K_=/%5B/g,z_=/%5D/g,Au=/%5E/g,Y_=/%60/g,Nu=/%7B/g,Q_=/%7C/g,xu=/%7D/g,X_=/%20/g;function Ao(t){return encodeURI(""+t).replace(Q_,"|").replace(K_,"[").replace(z_,"]")}function J_(t){return Ao(t).replace(Nu,"{").replace(xu,"}").replace(Au,"^")}function Wr(t){return Ao(t).replace(Ru,"%2B").replace(X_,"+").replace(Tu,"%23").replace(V_,"%26").replace(Y_,"`").replace(Nu,"{").replace(xu,"}").replace(Au,"^")}function Z_(t){return Wr(t).replace(q_,"%3D")}function eg(t){return Ao(t).replace(Tu,"%23").replace(G_,"%3F")}function tg(t){return t==null?"":eg(t).replace(j_,"%2F")}function ni(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function ng(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Ru," "),o=r.indexOf("="),a=ni(o<0?r:r.slice(0,o)),l=o<0?null:ni(r.slice(o+1));if(a in e){let c=e[a];Ze(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function cl(t){let e="";for(let n in t){const s=t[n];if(n=Z_(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ze(s)?s.map(r=>r&&Wr(r)):[s&&Wr(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function sg(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ze(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const ig=Symbol(""),ul=Symbol(""),No=Symbol(""),Pu=Symbol(""),Hr=Symbol("");function zn(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function At(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(kn(4,{from:n,to:e})):h instanceof Error?a(h):N_(h)?a(kn(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function ar(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(rg(a)){const c=(a.__vccOpts||a)[e];c&&i.push(At(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=h_(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&At(f,n,s,r,o)()}))}}return i}function rg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function hl(t){const e=dt(No),n=dt(Pu),s=Ge(()=>e.resolve(Zt(t.to))),i=Ge(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(On.bind(null,u));if(f>-1)return f;const _=fl(l[c-2]);return c>1&&fl(u)===_&&h[h.length-1].path!==_?h.findIndex(On.bind(null,l[c-2])):f}),r=Ge(()=>i.value>-1&&cg(n.params,s.value.params)),o=Ge(()=>i.value>-1&&i.value===n.matched.length-1&&bu(n.params,s.value.params));function a(l={}){return lg(l)?e[Zt(t.replace)?"replace":"push"](Zt(t.to)).catch(ss):Promise.resolve()}return{route:s,href:Ge(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const og=nu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hl,setup(t,{slots:e}){const n=Si(hl(t)),{options:s}=dt(No),i=Ge(()=>({[dl(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[dl(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Eu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),ag=og;function lg(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function cg(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Ze(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function fl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const dl=(t,e,n)=>t??e??n,ug=nu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=dt(Hr),i=Ge(()=>t.route||s.value),r=dt(ul,0),o=Ge(()=>{let c=Zt(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Ge(()=>i.value.matched[o.value]);Ks(ul,Ge(()=>o.value+1)),Ks(ig,a),Ks(Hr,i);const l=Id();return qs(()=>[l.value,a.value,t.name],([c,u,h],[f,_,v])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!On(u,_)||!f)&&(u.enterCallbacks[h]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return pl(n.default,{Component:f,route:c});const _=h.props[u],v=_?_===!0?c.params:typeof _=="function"?_(c):_:null,O=Eu(f,Z({},v,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return pl(n.default,{Component:O,route:c})||O}}});function pl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ou=ug;function hg(t){const e=$_(t.routes,t),n=t.parseQuery||ng,s=t.stringifyQuery||cl,i=t.history,r=zn(),o=zn(),a=zn(),l=Sd(It);let c=It;En&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=rr.bind(null,y=>""+y),h=rr.bind(null,tg),f=rr.bind(null,ni);function _(y,N){let R,k;return wu(y)?(R=e.getRecordMatcher(y),k=N):k=y,e.addRoute(k,R)}function v(y){const N=e.getRecordMatcher(y);N&&e.removeRoute(N)}function S(){return e.getRoutes().map(y=>y.record)}function O(y){return!!e.getRecordMatcher(y)}function P(y,N){if(N=Z({},N||l.value),typeof y=="string"){const p=or(n,y,N.path),g=e.resolve({path:p.path},N),E=i.createHref(p.fullPath);return Z(p,g,{params:f(g.params),hash:ni(p.hash),redirectedFrom:void 0,href:E})}let R;if("path"in y)R=Z({},y,{path:or(n,y.path,N.path).path});else{const p=Z({},y.params);for(const g in p)p[g]==null&&delete p[g];R=Z({},y,{params:h(p)}),N.params=h(N.params)}const k=e.resolve(R,N),J=y.hash||"";k.params=u(f(k.params));const ae=p_(s,Z({},y,{hash:J_(J),path:k.path})),d=i.createHref(ae);return Z({fullPath:ae,hash:J,query:s===cl?sg(y.query):y.query||{}},k,{redirectedFrom:void 0,href:d})}function F(y){return typeof y=="string"?or(n,y,l.value.path):Z({},y)}function B(y,N){if(c!==y)return kn(8,{from:N,to:y})}function z(y){return Te(y)}function fe(y){return z(Z(F(y),{replace:!0}))}function W(y){const N=y.matched[y.matched.length-1];if(N&&N.redirect){const{redirect:R}=N;let k=typeof R=="function"?R(y):R;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=F(k):{path:k},k.params={}),Z({query:y.query,hash:y.hash,params:"path"in k?{}:y.params},k)}}function Te(y,N){const R=c=P(y),k=l.value,J=y.state,ae=y.force,d=y.replace===!0,p=W(R);if(p)return Te(Z(F(p),{state:typeof p=="object"?Z({},J,p.state):J,force:ae,replace:d}),N||R);const g=R;g.redirectedFrom=N;let E;return!ae&&__(s,k,R)&&(E=kn(16,{to:g,from:k}),nt(k,k,!0,!1)),(E?Promise.resolve(E):et(g,k)).catch(m=>ut(m)?ut(m,2)?m:Ct(m):X(m,g,k)).then(m=>{if(m){if(ut(m,2))return Te(Z({replace:d},F(m.to),{state:typeof m.to=="object"?Z({},J,m.to.state):J,force:ae}),N||g)}else m=Wt(g,k,!0,d,J);return bt(g,k,m),m})}function We(y,N){const R=B(y,N);return R?Promise.reject(R):Promise.resolve()}function dn(y){const N=gn.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(y):y()}function et(y,N){let R;const[k,J,ae]=fg(y,N);R=ar(k.reverse(),"beforeRouteLeave",y,N);for(const p of k)p.leaveGuards.forEach(g=>{R.push(At(g,y,N))});const d=We.bind(null,y,N);return R.push(d),we(R).then(()=>{R=[];for(const p of r.list())R.push(At(p,y,N));return R.push(d),we(R)}).then(()=>{R=ar(J,"beforeRouteUpdate",y,N);for(const p of J)p.updateGuards.forEach(g=>{R.push(At(g,y,N))});return R.push(d),we(R)}).then(()=>{R=[];for(const p of ae)if(p.beforeEnter)if(Ze(p.beforeEnter))for(const g of p.beforeEnter)R.push(At(g,y,N));else R.push(At(p.beforeEnter,y,N));return R.push(d),we(R)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),R=ar(ae,"beforeRouteEnter",y,N),R.push(d),we(R))).then(()=>{R=[];for(const p of o.list())R.push(At(p,y,N));return R.push(d),we(R)}).catch(p=>ut(p,8)?p:Promise.reject(p))}function bt(y,N,R){a.list().forEach(k=>dn(()=>k(y,N,R)))}function Wt(y,N,R,k,J){const ae=B(y,N);if(ae)return ae;const d=N===It,p=En?history.state:{};R&&(k||d?i.replace(y.fullPath,Z({scroll:d&&p&&p.scroll},J)):i.push(y.fullPath,J)),l.value=y,nt(y,N,R,d),Ct()}let tt;function qn(){tt||(tt=i.listen((y,N,R)=>{if(!Ds.listening)return;const k=P(y),J=W(k);if(J){Te(Z(J,{replace:!0}),k).catch(ss);return}c=k;const ae=l.value;En&&w_(tl(ae.fullPath,R.delta),Mi()),et(k,ae).catch(d=>ut(d,12)?d:ut(d,2)?(Te(d.to,k).then(p=>{ut(p,20)&&!R.delta&&R.type===ps.pop&&i.go(-1,!1)}).catch(ss),Promise.reject()):(R.delta&&i.go(-R.delta,!1),X(d,k,ae))).then(d=>{d=d||Wt(k,ae,!1),d&&(R.delta&&!ut(d,8)?i.go(-R.delta,!1):R.type===ps.pop&&ut(d,20)&&i.go(-1,!1)),bt(k,ae,d)}).catch(ss)}))}let pn=zn(),ge=zn(),ee;function X(y,N,R){Ct(y);const k=ge.list();return k.length?k.forEach(J=>J(y,N,R)):console.error(y),Promise.reject(y)}function ct(){return ee&&l.value!==It?Promise.resolve():new Promise((y,N)=>{pn.add([y,N])})}function Ct(y){return ee||(ee=!y,qn(),pn.list().forEach(([N,R])=>y?R(y):N()),pn.reset()),y}function nt(y,N,R,k){const{scrollBehavior:J}=t;if(!En||!J)return Promise.resolve();const ae=!R&&I_(tl(y.fullPath,0))||(k||!R)&&history.state&&history.state.scroll||null;return Kc().then(()=>J(y,N,ae)).then(d=>d&&C_(d)).catch(d=>X(d,y,N))}const xe=y=>i.go(y);let _n;const gn=new Set,Ds={currentRoute:l,listening:!0,addRoute:_,removeRoute:v,hasRoute:O,getRoutes:S,resolve:P,options:t,push:z,replace:fe,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ge.add,isReady:ct,install(y){const N=this;y.component("RouterLink",ag),y.component("RouterView",Ou),y.config.globalProperties.$router=N,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Zt(l)}),En&&!_n&&l.value===It&&(_n=!0,z(i.location).catch(J=>{}));const R={};for(const J in It)Object.defineProperty(R,J,{get:()=>l.value[J],enumerable:!0});y.provide(No,N),y.provide(Pu,Bc(R)),y.provide(Hr,l);const k=y.unmount;gn.add(y),y.unmount=function(){gn.delete(y),gn.size<1&&(c=It,tt&&tt(),tt=null,l.value=It,_n=!1,ee=!1),k()}}};function we(y){return y.reduce((N,R)=>N.then(()=>dn(R)),Promise.resolve())}return Ds}function fg(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>On(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>On(c,l))||i.push(l))}return[n,s,i]}const dg={__name:"App",setup(t){return(e,n)=>(Un(),gu(Zt(Ou)))}},pg="modulepreload",_g=function(t){return"/"+t},_l={},Yn=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link");i=Promise.all(n.map(o=>{if(o=_g(o),o in _l)return;_l[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!s)for(let h=r.length-1;h>=0;h--){const f=r[h];if(f.href===o&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":pg,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},gg="/assets/ISKLogoText-5R0GjBnR.png",xo=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},mg={methods:{openNav(){const t=document.getElementById("mobile-nav-section");t.style.height==="0px"?(t.style.height="fit-content",t.style.opacity="1",t.style.pointerEvents="all"):(t.style.height="0",t.style.opacity="0",t.style.pointerEvents="none")},navClick(){const t=document.getElementsByClassName("mobile-nav-text");for(const e of t)e.style.pointerEvents="none"}}},yg={id:"nav"},vg=Sp('<div class="nav-section" data-v-dee55393><a class="nav-text" href="/about" data-v-dee55393>About</a><a class="nav-text" href="https://docs.google.com/document/d/e/2PACX-1vTe_sI1G2pWT-D4oTsGsDW-W-6cRxPwfUoAJWYUUMqqbWAFRUdsPDrMAvksfG6mpJtDrzcUolQTjD-H/pub" target="_blank" data-v-dee55393>Meat for Sale</a></div><a href="/" data-v-dee55393><img class="nav-logo" alt="Indian Springs Katahdins" src="'+gg+'" data-v-dee55393></a><div class="nav-section" data-v-dee55393><a class="nav-text" href="/livestock" data-v-dee55393>Livestock</a><a class="nav-text" href="/recipes" data-v-dee55393>Recipes</a><a class="nav-text" href="/contact" data-v-dee55393>Contact</a></div>',3),Eg={id:"mobile-nav-section",class:"mobile-nav-section",style:{height:"0px","pointer-events":"none"}};function bg(t,e,n,s,i,r){return Un(),Pi(qe,null,[ue("nav",yg,[vg,ue("i",{onClick:e[0]||(e[0]=(...o)=>r.openNav&&r.openNav(...o)),class:"fa-solid fa-bars"})]),ue("div",Eg,[ue("a",{onClick:e[1]||(e[1]=(...o)=>r.navClick&&r.navClick(...o)),class:"mobile-nav-text",href:"/about"},"About"),ue("a",{onClick:e[2]||(e[2]=(...o)=>r.navClick&&r.navClick(...o)),class:"mobile-nav-text",href:"https://docs.google.com/document/d/e/2PACX-1vTe_sI1G2pWT-D4oTsGsDW-W-6cRxPwfUoAJWYUUMqqbWAFRUdsPDrMAvksfG6mpJtDrzcUolQTjD-H/pub",target:"_blank"},"Meat for Sale"),ue("a",{onClick:e[3]||(e[3]=(...o)=>r.navClick&&r.navClick(...o)),class:"mobile-nav-text",href:"/livestock"},"Livestock"),ue("a",{onClick:e[4]||(e[4]=(...o)=>r.navClick&&r.navClick(...o)),class:"mobile-nav-text",href:"/recipes"},"Recipes"),ue("a",{onClick:e[5]||(e[5]=(...o)=>r.navClick&&r.navClick(...o)),class:"mobile-nav-text",href:"/contact"},"Contact")])],64)}const Cg=xo(mg,[["render",bg],["__scopeId","data-v-dee55393"]]),wg="/assets/ISKLogoTransparent-NojJMbXF.png",Ig={},ku=t=>(Jc("data-v-addfc409"),t=t(),Zc(),t),Sg={class:"banner"},Tg=ku(()=>ue("img",{class:"banner-img",alt:"Indian Springs Katahdins Logo",src:wg},null,-1)),Rg=ku(()=>ue("h1",{class:"banner-info"},"At Indian Springs, we raise 100% grass-fed Katahdin sheep, rotationally grazing them on our farm in Trafalgar, Indiana. We sell meat cuts, whole lambs for butcher, and commercial breeding stock.",-1)),Ag=[Tg,Rg];function Ng(t,e){return Un(),Pi("div",Sg,Ag)}const xg=xo(Ig,[["render",Ng],["__scopeId","data-v-addfc409"]]);var gl={};/**
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
 */const Du={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const C=function(t,e){if(!t)throw Wn(e)},Wn=function(t){return new Error("Firebase Database ("+Du.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Mu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Pg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Po={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(f=64)),s.push(n[u],n[h],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Mu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Pg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new Og;const f=r<<2|a>>4;if(s.push(f),c!==64){const _=a<<4&240|c>>2;if(s.push(_),h!==64){const v=c<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Og extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lu=function(t){const e=Mu(t);return Po.encodeByteArray(e,!0)},si=function(t){return Lu(t).replace(/\./g,"")},Vr=function(t){try{return Po.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function kg(t){return Fu(void 0,t)}function Fu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Dg(n)||(t[n]=Fu(t[n],e[n]));return t}function Dg(t){return t!=="__proto__"}/**
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
 */function Mg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Lg=()=>Mg().__FIREBASE_DEFAULTS__,Fg=()=>{if(typeof process>"u"||typeof gl>"u")return;const t=gl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Bg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vr(t[1]);return e&&JSON.parse(e)},Bu=()=>{try{return Lg()||Fg()||Bg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$g=t=>{var e,n;return(n=(e=Bu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ug=t=>{const e=$g(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},$u=()=>{var t;return(t=Bu())===null||t===void 0?void 0:t.config};/**
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
 */class Li{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Wg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[si(JSON.stringify(n)),si(JSON.stringify(o)),""].join(".")}/**
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
 */function Hg(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Hg())}function Vg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wu(){return Du.NODE_ADMIN===!0}function Hu(){try{return typeof indexedDB=="object"}catch{return!1}}function Vu(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function qg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Gg="FirebaseError";class hn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Gg,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fi.prototype.create)}}class Fi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Kg(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new hn(i,a,s)}}function Kg(t,e){return t.replace(zg,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const zg=/\{\$([^}]+)}/g;/**
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
 */function _s(t){return JSON.parse(t)}function de(t){return JSON.stringify(t)}/**
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
 */const ju=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=_s(Vr(r[0])||""),n=_s(Vr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Yg=function(t){const e=ju(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Qg=function(t){const e=ju(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function yt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Dn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ml(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ii(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ri(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(yl(r)&&yl(o)){if(!ri(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function yl(t){return t!==null&&typeof t=="object"}/**
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
 */function Xg(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class Jg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Oo(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Zg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,C(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Bi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const em=1e3,tm=2,nm=4*60*60*1e3,sm=.5;function vl(t,e=em,n=tm){const s=e*Math.pow(n,t),i=Math.round(sm*s*(Math.random()-.5)*2);return Math.min(nm,s+i)}/**
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
 */class im{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Li;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(om(e))try{this.getOrInitializeService({instanceIdentifier:jt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jt){return this.instances.has(e)}getOptions(e=jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:rm(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=jt){return this.component?this.component.multipleInstances?e:jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rm(t){return t===jt?void 0:t}function om(t){return t.instantiationMode==="EAGER"}/**
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
 */class am{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new im(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const lm={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},cm=se.INFO,um={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},hm=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=um[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ko{constructor(e){this.name=e,this._logLevel=cm,this._logHandler=hm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const fm=(t,e)=>e.some(n=>t instanceof n);let El,bl;function dm(){return El||(El=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pm(){return bl||(bl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qu=new WeakMap,jr=new WeakMap,Gu=new WeakMap,lr=new WeakMap,Do=new WeakMap;function _m(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Pt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qu.set(n,t)}).catch(()=>{}),Do.set(e,t),e}function gm(t){if(jr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});jr.set(t,e)}let qr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mm(t){qr=t(qr)}function ym(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(cr(this),e,...n);return Gu.set(s,e.sort?e.sort():[e]),Pt(s)}:pm().includes(t)?function(...e){return t.apply(cr(this),e),Pt(qu.get(this))}:function(...e){return Pt(t.apply(cr(this),e))}}function vm(t){return typeof t=="function"?ym(t):(t instanceof IDBTransaction&&gm(t),fm(t,dm())?new Proxy(t,qr):t)}function Pt(t){if(t instanceof IDBRequest)return _m(t);if(lr.has(t))return lr.get(t);const e=vm(t);return e!==t&&(lr.set(t,e),Do.set(e,t)),e}const cr=t=>Do.get(t);function Em(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Pt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Pt(o.result),l.oldVersion,l.newVersion,Pt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const bm=["get","getKey","getAll","getAllKeys","count"],Cm=["put","add","delete","clear"],ur=new Map;function Cl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ur.get(e))return ur.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Cm.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||bm.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ur.set(e,r),r}mm(t=>({...t,get:(e,n,s)=>Cl(e,n)||t.get(e,n,s),has:(e,n)=>!!Cl(e,n)||t.has(e,n)}));/**
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
 */class wm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Im(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Im(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gr="@firebase/app",wl="0.9.26";/**
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
 */const nn=new ko("@firebase/app"),Sm="@firebase/app-compat",Tm="@firebase/analytics-compat",Rm="@firebase/analytics",Am="@firebase/app-check-compat",Nm="@firebase/app-check",xm="@firebase/auth",Pm="@firebase/auth-compat",Om="@firebase/database",km="@firebase/database-compat",Dm="@firebase/functions",Mm="@firebase/functions-compat",Lm="@firebase/installations",Fm="@firebase/installations-compat",Bm="@firebase/messaging",$m="@firebase/messaging-compat",Um="@firebase/performance",Wm="@firebase/performance-compat",Hm="@firebase/remote-config",Vm="@firebase/remote-config-compat",jm="@firebase/storage",qm="@firebase/storage-compat",Gm="@firebase/firestore",Km="@firebase/firestore-compat",zm="firebase",Ym="10.7.2";/**
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
 */const Kr="[DEFAULT]",Qm={[Gr]:"fire-core",[Sm]:"fire-core-compat",[Rm]:"fire-analytics",[Tm]:"fire-analytics-compat",[Nm]:"fire-app-check",[Am]:"fire-app-check-compat",[xm]:"fire-auth",[Pm]:"fire-auth-compat",[Om]:"fire-rtdb",[km]:"fire-rtdb-compat",[Dm]:"fire-fn",[Mm]:"fire-fn-compat",[Lm]:"fire-iid",[Fm]:"fire-iid-compat",[Bm]:"fire-fcm",[$m]:"fire-fcm-compat",[Um]:"fire-perf",[Wm]:"fire-perf-compat",[Hm]:"fire-rc",[Vm]:"fire-rc-compat",[jm]:"fire-gcs",[qm]:"fire-gcs-compat",[Gm]:"fire-fst",[Km]:"fire-fst-compat","fire-js":"fire-js",[zm]:"fire-js-all"};/**
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
 */const oi=new Map,zr=new Map;function Xm(t,e){try{t.container.addComponent(e)}catch(n){nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ft(t){const e=t.name;if(zr.has(e))return nn.debug(`There were multiple attempts to register component ${e}.`),!1;zr.set(e,t);for(const n of oi.values())Xm(n,t);return!0}function Rs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Jm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ot=new Fi("app","Firebase",Jm);/**
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
 */class Zm{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new _t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}}/**
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
 */const ey=Ym;function Ku(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Kr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ot.create("bad-app-name",{appName:String(i)});if(n||(n=$u()),!n)throw Ot.create("no-options");const r=oi.get(i);if(r){if(ri(n,r.options)&&ri(s,r.config))return r;throw Ot.create("duplicate-app",{appName:i})}const o=new am(i);for(const l of zr.values())o.addComponent(l);const a=new Zm(n,s,o);return oi.set(i,a),a}function zu(t=Kr){const e=oi.get(t);if(!e&&t===Kr&&$u())return Ku();if(!e)throw Ot.create("no-app",{appName:t});return e}function at(t,e,n){var s;let i=(s=Qm[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nn.warn(a.join(" "));return}Ft(new _t(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ty="firebase-heartbeat-database",ny=1,gs="firebase-heartbeat-store";let hr=null;function Yu(){return hr||(hr=Em(ty,ny,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(gs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ot.create("idb-open",{originalErrorMessage:t.message})})),hr}async function sy(t){try{return await(await Yu()).transaction(gs).objectStore(gs).get(Qu(t))}catch(e){if(e instanceof hn)nn.warn(e.message);else{const n=Ot.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});nn.warn(n.message)}}}async function Il(t,e){try{const s=(await Yu()).transaction(gs,"readwrite");await s.objectStore(gs).put(e,Qu(t)),await s.done}catch(n){if(n instanceof hn)nn.warn(n.message);else{const s=Ot.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});nn.warn(s.message)}}}function Qu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const iy=1024,ry=30*24*60*60*1e3;class oy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ly(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Sl();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ry}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sl(),{heartbeatsToSend:s,unsentEntries:i}=ay(this._heartbeatsCache.heartbeats),r=si(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Sl(){return new Date().toISOString().substring(0,10)}function ay(t,e=iy){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Tl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Tl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ly{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hu()?Vu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await sy(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Il(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Il(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Tl(t){return si(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function cy(t){Ft(new _t("platform-logger",e=>new wm(e),"PRIVATE")),Ft(new _t("heartbeat",e=>new oy(e),"PRIVATE")),at(Gr,wl,t),at(Gr,wl,"esm2017"),at("fire-js","")}cy("");var Rl={};const Al="@firebase/database",Nl="1.0.2";/**
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
 */let Xu="";function uy(t){Xu=t}/**
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
 */class hy{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),de(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:_s(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class fy{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return yt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ju=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new hy(e)}}catch{}return new fy},zt=Ju("localStorage"),Yr=Ju("sessionStorage");/**
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
 */const Tn=new ko("@firebase/database"),dy=function(){let t=1;return function(){return t++}}(),Zu=function(t){const e=Zg(t),n=new Jg;n.update(e);const s=n.digest();return Po.encodeByteArray(s)},As=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=As.apply(null,s):typeof s=="object"?e+=de(s):e+=s,e+=" "}return e};let en=null,xl=!0;const py=function(t,e){C(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Tn.logLevel=se.VERBOSE,en=Tn.log.bind(Tn),e&&Yr.set("logging_enabled",!0)):typeof t=="function"?en=t:(en=null,Yr.remove("logging_enabled"))},Ie=function(...t){if(xl===!0&&(xl=!1,en===null&&Yr.get("logging_enabled")===!0&&py(!0)),en){const e=As.apply(null,t);en(e)}},Ns=function(t){return function(...e){Ie(t,...e)}},Qr=function(...t){const e="FIREBASE INTERNAL ERROR: "+As(...t);Tn.error(e)},gt=function(...t){const e=`FIREBASE FATAL ERROR: ${As(...t)}`;throw Tn.error(e),new Error(e)},ke=function(...t){const e="FIREBASE WARNING: "+As(...t);Tn.warn(e)},_y=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},eh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},gy=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Mn="[MIN_NAME]",sn="[MAX_NAME]",Hn=function(t,e){if(t===e)return 0;if(t===Mn||e===sn)return-1;if(e===Mn||t===sn)return 1;{const n=Pl(t),s=Pl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},my=function(t,e){return t===e?0:t<e?-1:1},Qn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+de(e))},Mo=function(t){if(typeof t!="object"||t===null)return de(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=de(e[s]),n+=":",n+=Mo(t[e[s]]);return n+="}",n},th=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Fe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const nh=function(t){C(!eh(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},yy=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},vy=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Ey(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const by=new RegExp("^-?(0*)\\d{1,10}$"),Cy=-2147483648,wy=2147483647,Pl=function(t){if(by.test(t)){const e=Number(t);if(e>=Cy&&e<=wy)return e}return null},Vn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},Iy=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},rs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Sy{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Ty{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ie("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ke(e)}}class Rn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Rn.OWNER="owner";/**
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
 */const Lo="5",sh="v",ih="s",rh="r",oh="f",ah=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,lh="ls",ch="p",Xr="ac",uh="websocket",hh="long_polling";/**
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
 */class fh{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=zt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&zt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Ry(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function dh(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let s;if(e===uh)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===hh)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ry(t)&&(n.ns=t.namespace);const i=[];return Fe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Ay{constructor(){this.counters_={}}incrementCounter(e,n=1){yt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return kg(this.counters_)}}/**
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
 */const fr={},dr={};function Fo(t){const e=t.toString();return fr[e]||(fr[e]=new Ay),fr[e]}function Ny(t,e){const n=t.toString();return dr[n]||(dr[n]=e()),dr[n]}/**
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
 */class xy{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Vn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ol="start",Py="close",Oy="pLPCommand",ky="pRTLPCB",ph="id",_h="pw",gh="ser",Dy="cb",My="seg",Ly="ts",Fy="d",By="dframe",mh=1870,yh=30,$y=mh-yh,Uy=25e3,Wy=3e4;class bn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ns(e),this.stats_=Fo(n),this.urlFn=l=>(this.appCheckToken&&(l[Xr]=this.appCheckToken),dh(n,hh,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new xy(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Wy)),gy(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Bo((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ol)this.id=a,this.password=l;else if(o===Py)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ol]="t",s[gh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Dy]=this.scriptTagHolder.uniqueCallbackIdentifier),s[sh]=Lo,this.transportSessionId&&(s[ih]=this.transportSessionId),this.lastSessionId&&(s[lh]=this.lastSessionId),this.applicationId&&(s[ch]=this.applicationId),this.appCheckToken&&(s[Xr]=this.appCheckToken),typeof location<"u"&&location.hostname&&ah.test(location.hostname)&&(s[rh]=oh);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){bn.forceAllow_=!0}static forceDisallow(){bn.forceDisallow_=!0}static isAvailable(){return bn.forceAllow_?!0:!bn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!yy()&&!vy()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=de(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Lu(n),i=th(s,$y);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[By]="t",s[ph]=e,s[_h]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=de(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Bo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=dy(),window[Oy+this.uniqueCallbackIdentifier]=e,window[ky+this.uniqueCallbackIdentifier]=n,this.myIFrame=Bo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ie("frame writing exception"),a.stack&&Ie(a.stack),Ie(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ie("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ph]=this.myID,e[_h]=this.myPW,e[gh]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+yh+s.length<=mh;){const o=this.pendingSegs.shift();s=s+"&"+My+i+"="+o.seg+"&"+Ly+i+"="+o.ts+"&"+Fy+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Uy)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ie("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Hy=16384,Vy=45e3;let ai=null;typeof MozWebSocket<"u"?ai=MozWebSocket:typeof WebSocket<"u"&&(ai=WebSocket);class Ke{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ns(this.connId),this.stats_=Fo(n),this.connURL=Ke.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[sh]=Lo,typeof location<"u"&&location.hostname&&ah.test(location.hostname)&&(o[rh]=oh),n&&(o[ih]=n),s&&(o[lh]=s),i&&(o[Xr]=i),r&&(o[ch]=r),dh(e,uh,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,zt.set("previous_websocket_failure",!0);try{let s;Wu(),this.mySock=new ai(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ke.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ai!==null&&!Ke.forceDisallow_}static previouslyFailed(){return zt.isInMemoryStorage||zt.get("previous_websocket_failure")===!0}markConnectionHealthy(){zt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=_s(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=de(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=th(n,Hy);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Vy))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ke.responsesRequiredToBeHealthy=2;Ke.healthyTimeout=3e4;/**
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
 */class ms{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[bn,Ke]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ke&&Ke.isAvailable();let s=n&&!Ke.previouslyFailed();if(e.webSocketOnly&&(n||ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ke];else{const i=this.transports_=[];for(const r of ms.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ms.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ms.globalTransportInitialized_=!1;/**
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
 */const jy=6e4,qy=5e3,Gy=10*1024,Ky=100*1024,pr="t",kl="d",zy="s",Dl="r",Yy="e",Ml="o",Ll="a",Fl="n",Bl="p",Qy="h";class Xy{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ns("c:"+this.id+":"),this.transportManager_=new ms(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=rs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ky?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Gy?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(pr in e){const n=e[pr];n===Ll?this.upgradeIfSecondaryHealthy_():n===Dl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ml&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Qn("t",e),s=Qn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Bl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ll,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Fl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Qn("t",e),s=Qn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Qn(pr,e);if(kl in e){const s=e[kl];if(n===Qy){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Fl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===zy?this.onConnectionShutdown_(s):n===Dl?this.onReset_(s):n===Yy?Qr("Server Error: "+s):n===Ml?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Qr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Lo!==s&&ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),rs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(jy))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):rs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qy))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Bl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(zt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class vh{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Eh{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class li extends Eh{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Uu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new li}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const $l=32,Ul=768;class ne{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Y(){return new ne("")}function G(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Bt(t){return t.pieces_.length-t.pieceNum_}function ie(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ne(t.pieces_,e)}function bh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Jy(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ch(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function wh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ne(e,0)}function pe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ne)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ne(n,0)}function j(t){return t.pieceNum_>=t.pieces_.length}function Ne(t,e){const n=G(t),s=G(e);if(n===null)return e;if(n===s)return Ne(ie(t),ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ih(t,e){if(Bt(t)!==Bt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ye(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Bt(t)>Bt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Zy{constructor(e,n){this.errorPrefix_=n,this.parts_=Ch(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Bi(this.parts_[s]);Sh(this)}}function ev(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Bi(e),Sh(t)}function tv(t){const e=t.parts_.pop();t.byteLength_-=Bi(e),t.parts_.length>0&&(t.byteLength_-=1)}function Sh(t){if(t.byteLength_>Ul)throw new Error(t.errorPrefix_+"has a key path longer than "+Ul+" bytes ("+t.byteLength_+").");if(t.parts_.length>$l)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+$l+") or object contains a cycle "+qt(t))}function qt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class $o extends Eh{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new $o}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Xn=1e3,nv=60*5*1e3,Wl=30*1e3,sv=1.3,iv=3e4,rv="server_kill",Hl=3;class pt extends vh{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=pt.nextPersistentConnectionId_++,this.log_=Ns("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xn,this.maxReconnectDelay_=nv,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Wu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$o.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&li.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(de(r)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Li,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;pt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&yt(e,"w")){const s=Dn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Qg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Wl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Yg(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+de(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Qr("Unrecognized action received from server: "+de(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>iv&&(this.reconnectDelay_=Xn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*sv)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+pt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){C(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ie("getToken() completed but was canceled"):(Ie("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new Xy(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{ke(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(rv)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ke(h),l())}}}interrupt(e){Ie("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ie("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ml(this.interruptReasons_)&&(this.reconnectDelay_=Xn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Mo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ne(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ie("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Hl&&(this.reconnectDelay_=Wl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ie("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Hl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Xu.replace(/\./g,"-")]=1,Uu()?e["framework.cordova"]=1:jg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=li.getInstance().currentlyOnline();return ml(this.interruptReasons_)&&e}}pt.nextPersistentConnectionId_=0;pt.nextConnectionId_=0;/**
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
 */class $i{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new V(Mn,e),i=new V(Mn,n);return this.compare(s,i)!==0}minPost(){return V.MIN}}/**
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
 */let Ws;class Th extends $i{static get __EMPTY_NODE(){return Ws}static set __EMPTY_NODE(e){Ws=e}compare(e,n){return Hn(e.name,n.name)}isDefinedOn(e){throw Wn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return V.MIN}maxPost(){return new V(sn,Ws)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new V(e,Ws)}toString(){return".key"}}const An=new Th;/**
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
 */class Hs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ve{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ve.RED,this.left=i??Oe.EMPTY_NODE,this.right=r??Oe.EMPTY_NODE}copy(e,n,s,i,r){return new ve(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Oe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Oe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ve.RED=!0;ve.BLACK=!1;class ov{copy(e,n,s,i,r){return this}insert(e,n,s){return new ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Oe{constructor(e,n=Oe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Oe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ve.BLACK,null,null))}remove(e){return new Oe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ve.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Hs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Hs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Hs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Hs(this.root_,null,this.comparator_,!0,e)}}Oe.EMPTY_NODE=new ov;/**
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
 */function av(t,e){return Hn(t.name,e.name)}function Uo(t,e){return Hn(t,e)}/**
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
 */let Jr;function lv(t){Jr=t}const Rh=function(t){return typeof t=="number"?"number:"+nh(t):"string:"+t},Ah=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&yt(e,".sv"),"Priority must be a string or number.")}else C(t===Jr||t.isEmpty(),"priority of unexpected type.");C(t===Jr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Vl;class ye{constructor(e,n=ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ah(this.priorityNode_)}static set __childrenNodeConstructor(e){Vl=e}static get __childrenNodeConstructor(){return Vl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:G(e)===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=G(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(C(s!==".priority"||Bt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Rh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=nh(this.value_):e+=this.value_,this.lazyHash_=Zu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ye.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ye.VALUE_TYPE_ORDER.indexOf(n),r=ye.VALUE_TYPE_ORDER.indexOf(s);return C(i>=0,"Unknown leaf type: "+n),C(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Nh,xh;function cv(t){Nh=t}function uv(t){xh=t}class hv extends $i{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Hn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return V.MIN}maxPost(){return new V(sn,new ye("[PRIORITY-POST]",xh))}makePost(e,n){const s=Nh(e);return new V(n,new ye("[PRIORITY-POST]",s))}toString(){return".priority"}}const he=new hv;/**
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
 */const fv=Math.log(2);class dv{constructor(e){const n=r=>parseInt(Math.log(r)/fv,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ci=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new ve(f,h.node,ve.BLACK,null,null);{const _=parseInt(u/2,10)+l,v=i(l,_),S=i(_+1,c);return h=t[_],f=n?n(h):h,new ve(f,h.node,ve.BLACK,v,S)}},r=function(l){let c=null,u=null,h=t.length;const f=function(v,S){const O=h-v,P=h;h-=v;const F=i(O+1,P),B=t[O],z=n?n(B):B;_(new ve(z,B.node,S,null,F))},_=function(v){c?(c.left=v,c=v):(u=v,c=v)};for(let v=0;v<l.count;++v){const S=l.nextBitIsOne(),O=Math.pow(2,l.count-(v+1));S?f(O,ve.BLACK):(f(O,ve.BLACK),f(O,ve.RED))}return u},o=new dv(t.length),a=r(o);return new Oe(s||e,a)};/**
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
 */let _r;const yn={};class ht{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(yn&&he,"ChildrenNode.ts has not been loaded"),_r=_r||new ht({".priority":yn},{".priority":he}),_r}get(e){const n=Dn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Oe?n:null}hasIndex(e){return yt(this.indexSet_,e.toString())}addIndex(e,n){C(e!==An,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(V.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=ci(s,e.getCompare()):a=yn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new ht(u,c)}addToIndexes(e,n){const s=ii(this.indexes_,(i,r)=>{const o=Dn(this.indexSet_,r);if(C(o,"Missing index implementation for "+r),i===yn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(V.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ci(a,o.getCompare())}else return yn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new V(e.name,a))),l.insert(e,e.node)}});return new ht(s,this.indexSet_)}removeFromIndexes(e,n){const s=ii(this.indexes_,i=>{if(i===yn)return i;{const r=n.get(e.name);return r?i.remove(new V(e.name,r)):i}});return new ht(s,this.indexSet_)}}/**
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
 */let Jn;class L{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ah(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Jn||(Jn=new L(new Oe(Uo),null,ht.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Jn}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Jn:n}}getChild(e){const n=G(e);return n===null?this:this.getImmediateChild(n).getChild(ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new V(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Jn:this.priorityNode_;return new L(i,o,r)}}updateChild(e,n){const s=G(e);if(s===null)return n;{C(G(e)!==".priority"||Bt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ie(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(he,(o,a)=>{n[o]=a.val(e),s++,r&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Rh(this.getPriority().val())+":"),this.forEachChild(he,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Zu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new V(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new V(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new V(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,V.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,V.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===xs?-1:0}withIndex(e){if(e===An||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===An||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(he),i=n.getIterator(he);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===An?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class pv extends L{constructor(){super(new Oe(Uo),L.EMPTY_NODE,ht.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const xs=new pv;Object.defineProperties(V,{MIN:{value:new V(Mn,L.EMPTY_NODE)},MAX:{value:new V(sn,xs)}});Th.__EMPTY_NODE=L.EMPTY_NODE;ye.__childrenNodeConstructor=L;lv(xs);uv(xs);/**
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
 */const _v=!0;function Ee(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ye(n,Ee(e))}if(!(t instanceof Array)&&_v){const n=[];let s=!1;if(Fe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ee(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new V(o,l)))}}),n.length===0)return L.EMPTY_NODE;const r=ci(n,av,o=>o.name,Uo);if(s){const o=ci(n,he.getCompare());return new L(r,Ee(e),new ht({".priority":o},{".priority":he}))}else return new L(r,Ee(e),ht.Default)}else{let n=L.EMPTY_NODE;return Fe(t,(s,i)=>{if(yt(t,s)&&s.substring(0,1)!=="."){const r=Ee(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ee(e))}}cv(Ee);/**
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
 */class gv extends $i{constructor(e){super(),this.indexPath_=e,C(!j(e)&&G(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Hn(e.name,n.name):r}makePost(e,n){const s=Ee(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,s);return new V(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,xs);return new V(sn,e)}toString(){return Ch(this.indexPath_,0).join("/")}}/**
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
 */class mv extends $i{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Hn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return V.MIN}maxPost(){return V.MAX}makePost(e,n){const s=Ee(e);return new V(n,s)}toString(){return".value"}}const yv=new mv;/**
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
 */function Ph(t){return{type:"value",snapshotNode:t}}function Ln(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ys(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function vs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function vv(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Wo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ys(n,a)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ln(n,s)):o.trackChildChange(vs(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(he,(i,r)=>{n.hasChild(i)||s.trackChildChange(ys(i,r))}),n.isLeafNode()||n.forEachChild(he,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(vs(i,r,o))}else s.trackChildChange(Ln(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Es{constructor(e){this.indexedFilter_=new Wo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Es.getStartPost_(e),this.endPost_=Es.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new V(n,s))||(s=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const r=this;return n.forEachChild(he,(o,a)=>{r.matches(new V(o,a))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Ev{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Es(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new V(n,s))||(s=L.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const a=e;C(a.numChildren()===this.limit_,"");const l=new V(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(vs(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ys(n,h));const S=a.updateImmediateChild(n,L.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Ln(f.name,f.node)),S.updateImmediateChild(f.name,f.node)):S}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(ys(c.name,c.node)),r.trackChildChange(Ln(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,L.EMPTY_NODE)):e}}/**
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
 */class Ho{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=he}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Mn}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:sn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===he}copy(){const e=new Ho;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function bv(t){return t.loadsAllData()?new Wo(t.getIndex()):t.hasLimit()?new Ev(t):new Es(t)}function jl(t){const e={};if(t.isDefault())return e;let n;if(t.index_===he?n="$priority":t.index_===yv?n="$value":t.index_===An?n="$key":(C(t.index_ instanceof gv,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=de(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=de(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+de(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=de(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+de(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ql(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==he&&(e.i=t.index_.toString()),e}/**
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
 */class ui extends vh{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ns("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ui.getListenId_(e,s),a={};this.listens_[o]=a;const l=jl(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Dn(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=ui.getListenId_(e,n);delete this.listens_[s]}get(e){const n=jl(e._queryParams),s=e._path.toString(),i=new Li;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Xg(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=_s(a.responseText)}catch{ke("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&ke("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Cv{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function hi(){return{value:null,children:new Map}}function Oh(t,e,n){if(j(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=G(e);t.children.has(s)||t.children.set(s,hi());const i=t.children.get(s);e=ie(e),Oh(i,e,n)}}function Zr(t,e,n){t.value!==null?n(e,t.value):wv(t,(s,i)=>{const r=new ne(e.toString()+"/"+s);Zr(i,r,n)})}function wv(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Iv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Fe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Gl=10*1e3,Sv=30*1e3,Tv=5*60*1e3;class Rv{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Iv(e);const s=Gl+(Sv-Gl)*Math.random();rs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Fe(e,(i,r)=>{r>0&&yt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),rs(this.reportStats_.bind(this),Math.floor(Math.random()*2*Tv))}}/**
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
 */var Qe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Qe||(Qe={}));function kh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function jo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class fi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Qe.ACK_USER_WRITE,this.source=kh()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ne(e));return new fi(Y(),n,this.revert)}}else return C(G(this.path)===e,"operationForChild called for unrelated child."),new fi(ie(this.path),this.affectedTree,this.revert)}}/**
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
 */class bs{constructor(e,n){this.source=e,this.path=n,this.type=Qe.LISTEN_COMPLETE}operationForChild(e){return j(this.path)?new bs(this.source,Y()):new bs(this.source,ie(this.path))}}/**
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
 */class rn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Qe.OVERWRITE}operationForChild(e){return j(this.path)?new rn(this.source,Y(),this.snap.getImmediateChild(e)):new rn(this.source,ie(this.path),this.snap)}}/**
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
 */class Cs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Qe.MERGE}operationForChild(e){if(j(this.path)){const n=this.children.subtree(new ne(e));return n.isEmpty()?null:n.value?new rn(this.source,Y(),n.value):new Cs(this.source,Y(),n)}else return C(G(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Cs(this.source,ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Av{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Nv(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(vv(o.childName,o.snapshotNode))}),Zn(t,i,"child_removed",e,s,n),Zn(t,i,"child_added",e,s,n),Zn(t,i,"child_moved",r,s,n),Zn(t,i,"child_changed",e,s,n),Zn(t,i,"value",e,s,n),i}function Zn(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Pv(t,a,l)),o.forEach(a=>{const l=xv(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function xv(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Pv(t,e,n){if(e.childName==null||n.childName==null)throw Wn("Should only compare child_ events.");const s=new V(e.childName,e.snapshotNode),i=new V(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Ui(t,e){return{eventCache:t,serverCache:e}}function os(t,e,n,s){return Ui(new $t(e,n,s),t.serverCache)}function Dh(t,e,n,s){return Ui(t.eventCache,new $t(e,n,s))}function di(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function on(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let gr;const Ov=()=>(gr||(gr=new Oe(my)),gr);class re{constructor(e,n=Ov()){this.value=e,this.children=n}static fromObject(e){let n=new re(null);return Fe(e,(s,i)=>{n=n.set(new ne(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Y(),value:this.value};if(j(e))return null;{const s=G(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ie(e),n);return r!=null?{path:pe(new ne(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const n=G(e),s=this.children.get(n);return s!==null?s.subtree(ie(e)):new re(null)}}set(e,n){if(j(e))return new re(n,this.children);{const s=G(e),r=(this.children.get(s)||new re(null)).set(ie(e),n),o=this.children.insert(s,r);return new re(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new re(null):new re(null,this.children);{const n=G(e),s=this.children.get(n);if(s){const i=s.remove(ie(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new re(null):new re(this.value,r)}else return this}}get(e){if(j(e))return this.value;{const n=G(e),s=this.children.get(n);return s?s.get(ie(e)):null}}setTree(e,n){if(j(e))return n;{const s=G(e),r=(this.children.get(s)||new re(null)).setTree(ie(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new re(this.value,o)}}fold(e){return this.fold_(Y(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(pe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Y(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(j(e))return null;{const r=G(e),o=this.children.get(r);return o?o.findOnPath_(ie(e),pe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Y(),n)}foreachOnPath_(e,n,s){if(j(e))return this;{this.value&&s(n,this.value);const i=G(e),r=this.children.get(i);return r?r.foreachOnPath_(ie(e),pe(n,i),s):new re(null)}}foreach(e){this.foreach_(Y(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(pe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Je{constructor(e){this.writeTree_=e}static empty(){return new Je(new re(null))}}function as(t,e,n){if(j(e))return new Je(new re(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ne(i,e);return r=r.updateChild(o,n),new Je(t.writeTree_.set(i,r))}else{const i=new re(n),r=t.writeTree_.setTree(e,i);return new Je(r)}}}function Kl(t,e,n){let s=t;return Fe(n,(i,r)=>{s=as(s,pe(e,i),r)}),s}function zl(t,e){if(j(e))return Je.empty();{const n=t.writeTree_.setTree(e,new re(null));return new Je(n)}}function eo(t,e){return fn(t,e)!=null}function fn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ne(n.path,e)):null}function Yl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(he,(s,i)=>{e.push(new V(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new V(s,i.value))}),e}function kt(t,e){if(j(e))return t;{const n=fn(t,e);return n!=null?new Je(new re(n)):new Je(t.writeTree_.subtree(e))}}function to(t){return t.writeTree_.isEmpty()}function Fn(t,e){return Mh(Y(),t.writeTree_,e)}function Mh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(C(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Mh(pe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(pe(t,".priority"),s)),n}}/**
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
 */function Wi(t,e){return $h(e,t)}function kv(t,e,n,s,i){C(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=as(t.visibleWrites,e,n)),t.lastWriteId=s}function Dv(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Mv(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Lv(a,s.path)?i=!1:Ye(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Fv(t),!0;if(s.snap)t.visibleWrites=zl(t.visibleWrites,s.path);else{const a=s.children;Fe(a,l=>{t.visibleWrites=zl(t.visibleWrites,pe(s.path,l))})}return!0}else return!1}function Lv(t,e){if(t.snap)return Ye(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ye(pe(t.path,n),e))return!0;return!1}function Fv(t){t.visibleWrites=Lh(t.allWrites,Bv,Y()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Bv(t){return t.visible}function Lh(t,e,n){let s=Je.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Ye(n,o)?(a=Ne(n,o),s=as(s,a,r.snap)):Ye(o,n)&&(a=Ne(o,n),s=as(s,Y(),r.snap.getChild(a)));else if(r.children){if(Ye(n,o))a=Ne(n,o),s=Kl(s,a,r.children);else if(Ye(o,n))if(a=Ne(o,n),j(a))s=Kl(s,Y(),r.children);else{const l=Dn(r.children,G(a));if(l){const c=l.getChild(ie(a));s=as(s,Y(),c)}}}else throw Wn("WriteRecord should have .snap or .children")}}return s}function Fh(t,e,n,s,i){if(!s&&!i){const r=fn(t.visibleWrites,e);if(r!=null)return r;{const o=kt(t.visibleWrites,e);if(to(o))return n;if(n==null&&!eo(o,Y()))return null;{const a=n||L.EMPTY_NODE;return Fn(o,a)}}}else{const r=kt(t.visibleWrites,e);if(!i&&to(r))return n;if(!i&&n==null&&!eo(r,Y()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ye(c.path,e)||Ye(e,c.path))},a=Lh(t.allWrites,o,e),l=n||L.EMPTY_NODE;return Fn(a,l)}}}function $v(t,e,n){let s=L.EMPTY_NODE;const i=fn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(he,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=kt(t.visibleWrites,e);return n.forEachChild(he,(o,a)=>{const l=Fn(kt(r,new ne(o)),a);s=s.updateImmediateChild(o,l)}),Yl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=kt(t.visibleWrites,e);return Yl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Uv(t,e,n,s,i){C(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=pe(e,n);if(eo(t.visibleWrites,r))return null;{const o=kt(t.visibleWrites,r);return to(o)?i.getChild(n):Fn(o,i.getChild(n))}}function Wv(t,e,n,s){const i=pe(e,n),r=fn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=kt(t.visibleWrites,i);return Fn(o,s.getNode().getImmediateChild(n))}else return null}function Hv(t,e){return fn(t.visibleWrites,e)}function Vv(t,e,n,s,i,r,o){let a;const l=kt(t.visibleWrites,e),c=fn(l,Y());if(c!=null)a=c;else if(n!=null)a=Fn(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function jv(){return{visibleWrites:Je.empty(),allWrites:[],lastWriteId:-1}}function pi(t,e,n,s){return Fh(t.writeTree,t.treePath,e,n,s)}function qo(t,e){return $v(t.writeTree,t.treePath,e)}function Ql(t,e,n,s){return Uv(t.writeTree,t.treePath,e,n,s)}function _i(t,e){return Hv(t.writeTree,pe(t.treePath,e))}function qv(t,e,n,s,i,r){return Vv(t.writeTree,t.treePath,e,n,s,i,r)}function Go(t,e,n){return Wv(t.writeTree,t.treePath,e,n)}function Bh(t,e){return $h(pe(t.treePath,e),t.writeTree)}function $h(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Gv{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,vs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ys(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Ln(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,vs(s,e.snapshotNode,i.oldSnap));else throw Wn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Kv{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Uh=new Kv;class Ko{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new $t(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Go(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:on(this.viewCache_),r=qv(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function zv(t){return{filter:t}}function Yv(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Qv(t,e,n,s,i){const r=new Gv;let o,a;if(n.type===Qe.OVERWRITE){const c=n;c.source.fromUser?o=no(t,e,c.path,c.snap,s,i,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!j(c.path),o=gi(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Qe.MERGE){const c=n;c.source.fromUser?o=Jv(t,e,c.path,c.children,s,i,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=so(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Qe.ACK_USER_WRITE){const c=n;c.revert?o=tE(t,e,c.path,s,i,r):o=Zv(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Qe.LISTEN_COMPLETE)o=eE(t,e,n.path,s,r);else throw Wn("Unknown operation type: "+n.type);const l=r.getChanges();return Xv(e,o,l),{viewCache:o,changes:l}}function Xv(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=di(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Ph(di(e)))}}function Wh(t,e,n,s,i,r){const o=e.eventCache;if(_i(s,n)!=null)return e;{let a,l;if(j(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=on(e),u=c instanceof L?c:L.EMPTY_NODE,h=qo(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=pi(s,on(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=G(n);if(c===".priority"){C(Bt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Ql(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ie(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Ql(s,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Go(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return os(e,a,o.isFullyInitialized()||j(n),t.filter.filtersNodes())}}function gi(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(j(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=G(n);if(!l.isCompleteForPath(n)&&Bt(n)>1)return e;const v=ie(n),O=l.getNode().getImmediateChild(_).updateChild(v,s);_===".priority"?c=u.updatePriority(l.getNode(),O):c=u.updateChild(l.getNode(),_,O,v,Uh,null)}const h=Dh(e,c,l.isFullyInitialized()||j(n),u.filtersNodes()),f=new Ko(i,h,r);return Wh(t,h,n,i,f,a)}function no(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Ko(i,e,r);if(j(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=os(e,c,!0,t.filter.filtersNodes());else{const h=G(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=os(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=ie(n),_=a.getNode().getImmediateChild(h);let v;if(j(f))v=s;else{const S=u.getCompleteChild(h);S!=null?bh(f)===".priority"&&S.getChild(wh(f)).isEmpty()?v=S:v=S.updateChild(f,s):v=L.EMPTY_NODE}if(_.equals(v))l=e;else{const S=t.filter.updateChild(a.getNode(),h,v,f,u,o);l=os(e,S,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Xl(t,e){return t.eventCache.isCompleteForChild(e)}function Jv(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=pe(n,l);Xl(e,G(u))&&(a=no(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=pe(n,l);Xl(e,G(u))||(a=no(t,a,u,c,i,r,o))}),a}function Jl(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function so(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;j(n)?c=s:c=new re(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),v=Jl(t,_,f);l=gi(t,l,new ne(h),v,i,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!_){const v=e.serverCache.getNode().getImmediateChild(h),S=Jl(t,v,f);l=gi(t,l,new ne(h),S,i,r,o,a)}}),l}function Zv(t,e,n,s,i,r,o){if(_i(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(j(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return gi(t,e,n,l.getNode().getChild(n),i,r,a,o);if(j(n)){let c=new re(null);return l.getNode().forEachChild(An,(u,h)=>{c=c.set(new ne(u),h)}),so(t,e,n,c,i,r,a,o)}else return e}else{let c=new re(null);return s.foreach((u,h)=>{const f=pe(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),so(t,e,n,c,i,r,a,o)}}function eE(t,e,n,s,i){const r=e.serverCache,o=Dh(e,r.getNode(),r.isFullyInitialized()||j(n),r.isFiltered());return Wh(t,o,n,s,Uh,i)}function tE(t,e,n,s,i,r){let o;if(_i(s,n)!=null)return e;{const a=new Ko(s,e,i),l=e.eventCache.getNode();let c;if(j(n)||G(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=pi(s,on(e));else{const h=e.serverCache.getNode();C(h instanceof L,"serverChildren would be complete if leaf node"),u=qo(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=G(n);let h=Go(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ie(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,L.EMPTY_NODE,ie(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=pi(s,on(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||_i(s,Y())!=null,os(e,c,o,t.filter.filtersNodes())}}/**
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
 */class nE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Wo(s.getIndex()),r=bv(s);this.processor_=zv(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(L.EMPTY_NODE,a.getNode(),null),u=new $t(l,o.isFullyInitialized(),i.filtersNodes()),h=new $t(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ui(h,u),this.eventGenerator_=new Av(this.query_)}get query(){return this.query_}}function sE(t){return t.viewCache_.serverCache.getNode()}function iE(t){return di(t.viewCache_)}function rE(t,e){const n=on(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!j(e)&&!n.getImmediateChild(G(e)).isEmpty())?n.getChild(e):null}function Zl(t){return t.eventRegistrations_.length===0}function oE(t,e){t.eventRegistrations_.push(e)}function ec(t,e,n){const s=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function tc(t,e,n,s){e.type===Qe.MERGE&&e.source.queryId!==null&&(C(on(t.viewCache_),"We should always have a full cache before handling merges"),C(di(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Qv(t.processor_,i,e,n,s);return Yv(t.processor_,r.viewCache),C(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Hh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function aE(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(he,(r,o)=>{s.push(Ln(r,o))}),n.isFullyInitialized()&&s.push(Ph(n.getNode())),Hh(t,s,n.getNode(),e)}function Hh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Nv(t.eventGenerator_,e,n,i)}/**
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
 */let mi;class Vh{constructor(){this.views=new Map}}function lE(t){C(!mi,"__referenceConstructor has already been defined"),mi=t}function cE(){return C(mi,"Reference.ts has not been loaded"),mi}function uE(t){return t.views.size===0}function zo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return C(r!=null,"SyncTree gave us an op for an invalid query."),tc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(tc(o,e,n,s));return r}}function jh(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=pi(n,i?s:null),l=!1;a?l=!0:s instanceof L?(a=qo(n,s),l=!1):(a=L.EMPTY_NODE,l=!1);const c=Ui(new $t(a,l,!1),new $t(s,i,!1));return new nE(e,c)}return o}function hE(t,e,n,s,i,r){const o=jh(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),oE(o,n),aE(o,n)}function fE(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Ut(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(ec(c,n,s)),Zl(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(ec(l,n,s)),Zl(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Ut(t)&&r.push(new(cE())(e._repo,e._path)),{removed:r,events:o}}function qh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Dt(t,e){let n=null;for(const s of t.views.values())n=n||rE(s,e);return n}function Gh(t,e){if(e._queryParams.loadsAllData())return Hi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Kh(t,e){return Gh(t,e)!=null}function Ut(t){return Hi(t)!=null}function Hi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let yi;function dE(t){C(!yi,"__referenceConstructor has already been defined"),yi=t}function pE(){return C(yi,"Reference.ts has not been loaded"),yi}let _E=1;class nc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new re(null),this.pendingWriteTree_=jv(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function zh(t,e,n,s,i){return kv(t.pendingWriteTree_,e,n,s,i),i?Os(t,new rn(kh(),e,n)):[]}function Yt(t,e,n=!1){const s=Dv(t.pendingWriteTree_,e);if(Mv(t.pendingWriteTree_,e)){let r=new re(null);return s.snap!=null?r=r.set(Y(),!0):Fe(s.children,o=>{r=r.set(new ne(o),!0)}),Os(t,new fi(s.path,r,n))}else return[]}function Ps(t,e,n){return Os(t,new rn(Vo(),e,n))}function gE(t,e,n){const s=re.fromObject(n);return Os(t,new Cs(Vo(),e,s))}function mE(t,e){return Os(t,new bs(Vo(),e))}function yE(t,e,n){const s=Qo(t,n);if(s){const i=Xo(s),r=i.path,o=i.queryId,a=Ne(r,e),l=new bs(jo(o),a);return Jo(t,r,l)}else return[]}function Yh(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Kh(o,e))){const l=fE(o,e,n,s);uE(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,_)=>Ut(_));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=CE(f);for(let v=0;v<_.length;++v){const S=_[v],O=S.query,P=Zh(t,S);t.listenProvider_.startListening(ls(O),ws(t,O),P.hashFn,P.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(ls(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(Vi(f));t.listenProvider_.stopListening(ls(f),_)}))}wE(t,c)}return a}function Qh(t,e,n,s){const i=Qo(t,s);if(i!=null){const r=Xo(i),o=r.path,a=r.queryId,l=Ne(o,e),c=new rn(jo(a),l,n);return Jo(t,o,c)}else return[]}function vE(t,e,n,s){const i=Qo(t,s);if(i){const r=Xo(i),o=r.path,a=r.queryId,l=Ne(o,e),c=re.fromObject(n),u=new Cs(jo(a),l,c);return Jo(t,o,u)}else return[]}function EE(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const v=Ne(f,i);r=r||Dt(_,v),o=o||Ut(_)});let a=t.syncPointTree_.get(i);a?(o=o||Ut(a),r=r||Dt(a,Y())):(a=new Vh,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=L.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const S=Dt(v,Y());S&&(r=r.updateImmediateChild(_,S))}));const c=Kh(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=Vi(e);C(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=IE();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const u=Wi(t.pendingWriteTree_,i);let h=hE(a,e,n,u,r,l);if(!c&&!o&&!s){const f=Gh(a,e);h=h.concat(SE(t,e,f))}return h}function Yo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ne(o,e),c=Dt(a,l);if(c)return c});return Fh(i,e,r,n,!0)}function bE(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Ne(c,n);s=s||Dt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Dt(i,Y()):(i=new Vh,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new $t(s,!0,!1):null,a=Wi(t.pendingWriteTree_,e._path),l=jh(i,e,a,r?o.getNode():L.EMPTY_NODE,r);return iE(l)}function Os(t,e){return Xh(e,t.syncPointTree_,null,Wi(t.pendingWriteTree_,Y()))}function Xh(t,e,n,s){if(j(t.path))return Jh(t,e,n,s);{const i=e.get(Y());n==null&&i!=null&&(n=Dt(i,Y()));let r=[];const o=G(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Bh(s,o);r=r.concat(Xh(a,l,c,u))}return i&&(r=r.concat(zo(i,t,s,n))),r}}function Jh(t,e,n,s){const i=e.get(Y());n==null&&i!=null&&(n=Dt(i,Y()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Bh(s,o),u=t.operationForChild(o);u&&(r=r.concat(Jh(u,a,l,c)))}),i&&(r=r.concat(zo(i,t,s,n))),r}function Zh(t,e){const n=e.query,s=ws(t,n);return{hashFn:()=>(sE(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?yE(t,n._path,s):mE(t,n._path);{const r=Ey(i,n);return Yh(t,n,null,r)}}}}function ws(t,e){const n=Vi(e);return t.queryToTagMap.get(n)}function Vi(t){return t._path.toString()+"$"+t._queryIdentifier}function Qo(t,e){return t.tagToQueryMap.get(e)}function Xo(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ne(t.substr(0,e))}}function Jo(t,e,n){const s=t.syncPointTree_.get(e);C(s,"Missing sync point for query tag that we're tracking");const i=Wi(t.pendingWriteTree_,e);return zo(s,n,i,null)}function CE(t){return t.fold((e,n,s)=>{if(n&&Ut(n))return[Hi(n)];{let i=[];return n&&(i=qh(n)),Fe(s,(r,o)=>{i=i.concat(o)}),i}})}function ls(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(pE())(t._repo,t._path):t}function wE(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Vi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function IE(){return _E++}function SE(t,e,n){const s=e._path,i=ws(t,e),r=Zh(t,n),o=t.listenProvider_.startListening(ls(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)C(!Ut(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!j(c)&&u&&Ut(u))return[Hi(u).query];{let f=[];return u&&(f=f.concat(qh(u).map(_=>_.query))),Fe(h,(_,v)=>{f=f.concat(v)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(ls(u),ws(t,u))}}return o}/**
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
 */class Zo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Zo(n)}node(){return this.node_}}class ea{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=pe(this.path_,e);return new ea(this.syncTree_,n)}node(){return Yo(this.syncTree_,this.path_)}}const TE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},sc=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return RE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return AE(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},RE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},AE=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&C(!1,"Unexpected increment value: "+s);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},NE=function(t,e,n,s){return ta(e,new ea(n,t),s)},ef=function(t,e,n){return ta(t,new Zo(e),n)};function ta(t,e,n){const s=t.getPriority().val(),i=sc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=sc(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ye(a,Ee(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ye(i))),o.forEachChild(he,(a,l)=>{const c=ta(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class na{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function sa(t,e){let n=e instanceof ne?e:new ne(e),s=t,i=G(n);for(;i!==null;){const r=Dn(s.node.children,i)||{children:{},childCount:0};s=new na(i,s,r),n=ie(n),i=G(n)}return s}function jn(t){return t.node.value}function tf(t,e){t.node.value=e,io(t)}function nf(t){return t.node.childCount>0}function xE(t){return jn(t)===void 0&&!nf(t)}function ji(t,e){Fe(t.node.children,(n,s)=>{e(new na(n,t,s))})}function sf(t,e,n,s){n&&!s&&e(t),ji(t,i=>{sf(i,e,!0,s)}),n&&s&&e(t)}function PE(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ks(t){return new ne(t.parent===null?t.name:ks(t.parent)+"/"+t.name)}function io(t){t.parent!==null&&OE(t.parent,t.name,t)}function OE(t,e,n){const s=xE(n),i=yt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,io(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,io(t))}/**
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
 */const kE=/[\[\].#$\/\u0000-\u001F\u007F]/,DE=/[\[\].#$\u0000-\u001F\u007F]/,mr=10*1024*1024,rf=function(t){return typeof t=="string"&&t.length!==0&&!kE.test(t)},of=function(t){return typeof t=="string"&&t.length!==0&&!DE.test(t)},ME=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),of(t)},af=function(t,e,n,s){s&&e===void 0||ia(Oo(t,"value"),e,n)},ia=function(t,e,n){const s=n instanceof ne?new Zy(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+qt(s));if(typeof e=="function")throw new Error(t+"contains a function "+qt(s)+" with contents = "+e.toString());if(eh(e))throw new Error(t+"contains "+e.toString()+" "+qt(s));if(typeof e=="string"&&e.length>mr/3&&Bi(e)>mr)throw new Error(t+"contains a string greater than "+mr+" utf8 bytes "+qt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Fe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!rf(o)))throw new Error(t+" contains an invalid key ("+o+") "+qt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ev(s,o),ia(t,a,s),tv(s)}),i&&r)throw new Error(t+' contains ".value" child '+qt(s)+" in addition to actual children.")}},lf=function(t,e,n,s){if(!(s&&n===void 0)&&!of(n))throw new Error(Oo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},LE=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),lf(t,e,n,s)},ra=function(t,e){if(G(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},FE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!rf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ME(n))throw new Error(Oo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class BE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function cf(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Ih(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function lt(t,e,n){cf(t,n),$E(t,s=>Ye(s,e)||Ye(e,s))}function $E(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(UE(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function UE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();en&&Ie("event: "+n.toString()),Vn(s)}}}/**
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
 */const WE="repo_interrupt",HE=25;class VE{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new BE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=hi(),this.transactionQueueTree_=new na,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function jE(t,e,n){if(t.stats_=Fo(t.repoInfo_),t.forceRestClient_||Iy())t.server_=new ui(t.repoInfo_,(s,i,r,o)=>{ic(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>rc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{de(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new pt(t.repoInfo_,e,(s,i,r,o)=>{ic(t,s,i,r,o)},s=>{rc(t,s)},s=>{qE(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Ny(t.repoInfo_,()=>new Rv(t.stats_,t.server_)),t.infoData_=new Cv,t.infoSyncTree_=new nc({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Ps(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),aa(t,"connected",!1),t.serverSyncTree_=new nc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);lt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function uf(t){const n=t.infoData_.getNode(new ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function oa(t){return TE({timestamp:uf(t)})}function ic(t,e,n,s,i){t.dataUpdateCount++;const r=new ne(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=ii(n,c=>Ee(c));o=vE(t.serverSyncTree_,r,l,i)}else{const l=Ee(n);o=Qh(t.serverSyncTree_,r,l,i)}else if(s){const l=ii(n,c=>Ee(c));o=gE(t.serverSyncTree_,r,l)}else{const l=Ee(n);o=Ps(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Gi(t,r)),lt(t.eventQueue_,a,o)}function rc(t,e){aa(t,"connected",e),e===!1&&zE(t)}function qE(t,e){Fe(e,(n,s)=>{aa(t,n,s)})}function aa(t,e,n){const s=new ne("/.info/"+e),i=Ee(n);t.infoData_.updateSnapshot(s,i);const r=Ps(t.infoSyncTree_,s,i);lt(t.eventQueue_,s,r)}function hf(t){return t.nextWriteId_++}function GE(t,e,n){const s=bE(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Ee(i).withIndex(e._queryParams.getIndex());EE(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ps(t.serverSyncTree_,e._path,r);else{const a=ws(t.serverSyncTree_,e);o=Qh(t.serverSyncTree_,e._path,r,a)}return lt(t.eventQueue_,e._path,o),Yh(t.serverSyncTree_,e,n,null,!0),r},i=>(qi(t,"get for query "+de(e)+" failed: "+i),Promise.reject(new Error(i))))}function KE(t,e,n,s,i){qi(t,"set",{path:e.toString(),value:n,priority:s});const r=oa(t),o=Ee(n,s),a=Yo(t.serverSyncTree_,e),l=ef(o,a,r),c=hf(t),u=zh(t.serverSyncTree_,e,l,c,!0);cf(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const v=f==="ok";v||ke("set at "+e+" failed: "+f);const S=Yt(t.serverSyncTree_,c,!v);lt(t.eventQueue_,e,S),QE(t,i,f,_)});const h=gf(t,e);Gi(t,h),lt(t.eventQueue_,h,[])}function zE(t){qi(t,"onDisconnectEvents");const e=oa(t),n=hi();Zr(t.onDisconnect_,Y(),(i,r)=>{const o=NE(i,r,t.serverSyncTree_,e);Oh(n,i,o)});let s=[];Zr(n,Y(),(i,r)=>{s=s.concat(Ps(t.serverSyncTree_,i,r));const o=gf(t,i);Gi(t,o)}),t.onDisconnect_=hi(),lt(t.eventQueue_,Y(),s)}function YE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(WE)}function qi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ie(n,...e)}function QE(t,e,n,s){e&&Vn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function ff(t,e,n){return Yo(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function la(t,e=t.transactionQueueTree_){if(e||Ki(t,e),jn(e)){const n=pf(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&XE(t,ks(e),n)}else nf(e)&&ji(e,n=>{la(t,n)})}function XE(t,e,n){const s=n.map(c=>c.currentWriteId),i=ff(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];C(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ne(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{qi(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Yt(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Ki(t,sa(t.transactionQueueTree_,e)),la(t,t.transactionQueueTree_),lt(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Vn(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{ke("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Gi(t,e)}},o)}function Gi(t,e){const n=df(t,e),s=ks(n),i=pf(t,n);return JE(t,i,s),s}function JE(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ne(n,l.path);let u=!1,h;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Yt(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=HE)u=!0,h="maxretry",i=i.concat(Yt(t.serverSyncTree_,l.currentWriteId,!0));else{const f=ff(t,l.path,o);l.currentInputSnapshot=f;const _=e[a].update(f.val());if(_!==void 0){ia("transaction failed: Data returned ",_,l.path);let v=Ee(_);typeof _=="object"&&_!=null&&yt(_,".priority")||(v=v.updatePriority(f.getPriority()));const O=l.currentWriteId,P=oa(t),F=ef(v,f,P);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=F,l.currentWriteId=hf(t),o.splice(o.indexOf(O),1),i=i.concat(zh(t.serverSyncTree_,l.path,F,l.currentWriteId,l.applyLocally)),i=i.concat(Yt(t.serverSyncTree_,O,!0))}else u=!0,h="nodata",i=i.concat(Yt(t.serverSyncTree_,l.currentWriteId,!0))}lt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Ki(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Vn(s[a]);la(t,t.transactionQueueTree_)}function df(t,e){let n,s=t.transactionQueueTree_;for(n=G(e);n!==null&&jn(s)===void 0;)s=sa(s,n),e=ie(e),n=G(e);return s}function pf(t,e){const n=[];return _f(t,e,n),n.sort((s,i)=>s.order-i.order),n}function _f(t,e,n){const s=jn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);ji(e,i=>{_f(t,i,n)})}function Ki(t,e){const n=jn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,tf(e,n.length>0?n:void 0)}ji(e,s=>{Ki(t,s)})}function gf(t,e){const n=ks(df(t,e)),s=sa(t.transactionQueueTree_,e);return PE(s,i=>{yr(t,i)}),yr(t,s),sf(s,i=>{yr(t,i)}),n}function yr(t,e){const n=jn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Yt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?tf(e,void 0):n.length=r+1,lt(t.eventQueue_,ks(e),i);for(let o=0;o<s.length;o++)Vn(s[o])}}/**
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
 */function ZE(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function eb(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const oc=function(t,e){const n=tb(t),s=n.namespace;n.domain==="firebase.com"&&gt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&gt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||_y();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new fh(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ne(n.pathString)}},tb=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=ZE(t.substring(u,h)));const f=eb(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");s=e.substring(0,v).toLowerCase(),n=e.substring(v+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const ac="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",nb=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=ac.charAt(n%64),n=Math.floor(n/64);C(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=ac.charAt(e[i]);return C(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class sb{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+de(this.snapshot.exportVal())}}class ib{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class rb{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ca{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return j(this._path)?null:bh(this._path)}get ref(){return new Et(this._repo,this._path)}get _queryIdentifier(){const e=ql(this._queryParams),n=Mo(e);return n==="{}"?"default":n}get _queryObject(){return ql(this._queryParams)}isEqual(e){if(e=vt(e),!(e instanceof ca))return!1;const n=this._repo===e._repo,s=Ih(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Jy(this._path)}}class Et extends ca{constructor(e,n){super(e,n,new Ho,!1)}get parent(){const e=wh(this._path);return e===null?null:new Et(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Is{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ne(e),s=Ss(this.ref,e);return new Is(this._node.getChild(n),s,he)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Is(i,Ss(this.ref,s),he)))}hasChild(e){const n=new ne(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ob(t,e){return t=vt(t),t._checkNotDeleted("ref"),e!==void 0?Ss(t._root,e):t._root}function Ss(t,e){return t=vt(t),G(t._path)===null?LE("child","path",e,!1):lf("child","path",e,!1),new Et(t._repo,pe(t._path,e))}function ab(t,e){t=vt(t),ra("push",t._path),af("push",e,t._path,!0);const n=uf(t._repo),s=nb(n),i=Ss(t,s),r=Ss(t,s);let o;return e!=null?o=ua(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function fw(t){return ra("remove",t._path),ua(t,null)}function ua(t,e){t=vt(t),ra("set",t._path),af("set",e,t._path,!1);const n=new Li;return KE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function dw(t){t=vt(t);const e=new rb(()=>{}),n=new ha(e);return GE(t._repo,t,n).then(s=>new Is(s,new Et(t._repo,t._path),t._queryParams.getIndex()))}class ha{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new sb("value",this,new Is(e.snapshotNode,new Et(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ib(this,e,n):null}matches(e){return e instanceof ha?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}lE(Et);dE(Et);/**
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
 */const lb="FIREBASE_DATABASE_EMULATOR_HOST",ro={};let cb=!1;function ub(t,e,n,s){t.repoInfo_=new fh(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function hb(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||gt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ie("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=oc(r,i),a=o.repoInfo,l,c;typeof process<"u"&&Rl&&(c=Rl[lb]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=oc(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Rn(Rn.OWNER):new Ty(t.name,t.options,e);FE("Invalid Firebase Database URL",o),j(o.path)||gt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=db(a,t,u,new Sy(t.name,n));return new pb(h,t)}function fb(t,e){const n=ro[e];(!n||n[t.key]!==t)&&gt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),YE(t),delete n[t.key]}function db(t,e,n,s){let i=ro[e.name];i||(i={},ro[e.name]=i);let r=i[t.toURLString()];return r&&gt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new VE(t,cb,n,s),i[t.toURLString()]=r,r}class pb{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(jE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Et(this._repo,Y())),this._rootInternal}_delete(){return this._rootInternal!==null&&(fb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&gt("Cannot call "+e+" on a deleted database.")}}function mf(t=zu(),e){const n=Rs(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Ug("database");s&&_b(n,...s)}return n}function _b(t,e,n,s={}){t=vt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&gt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&gt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Rn(Rn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Wg(s.mockUserToken,t.app.options.projectId);r=new Rn(o)}ub(i,e,n,r)}/**
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
 */function gb(t){uy(ey),Ft(new _t("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return hb(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),at(Al,Nl,t),at(Al,Nl,"esm2017")}pt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};pt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};gb();const zi=t=>(Jc("data-v-6eb4423d"),t=t(),Zc(),t),mb=zi(()=>ue("div",{class:"footer-social"},[ue("h2",null,"Follow us on Facebook"),ue("a",{href:"https://www.facebook.com/profile.php?id=61555159784777",target:"_blank"},[ue("i",{class:"fa-brands fa-square-facebook"})])],-1)),yb={class:"subscribe-form"},vb=zi(()=>ue("label",null,"Subscribe to our Newsletter",-1)),Eb=zi(()=>ue("input",{class:"form-control",name:"signupemail",placeholder:"Enter Email Address"},null,-1)),bb=zi(()=>ue("button",{class:"btn",type:"submit"},"Subscribe",-1)),Cb=[vb,Eb,bb],wb=t=>{t.preventDefault();const e=mf(),n=t.target.signupemail.value,s=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,i=ob(e,"emails"),r=ab(i);s.test(n)?ua(r,{emailAddress:n}).then(()=>{alert("Successfully Subscribed to the ISK Newsletter!","success"),t.target.reset()},o=>{console.log("FAILED...",o.text)}):alert("Please enter a valid email address")},Ib={__name:"Footer",setup(t){return document.getElementById("liveAlertPlaceholder"),(e,n)=>(Un(),Pi("footer",null,[mb,ue("div",yb,[ue("form",{name:"newsletter-form",onSubmit:r_(wb,["prevent"])},Cb,32)])]))}},Sb=xo(Ib,[["__scopeId","data-v-6eb4423d"]]),Tb={__name:"HomeView",setup(t){return(e,n)=>(Un(),Pi(qe,null,[be(Cg),ue("main",null,[be(xg)]),be(Sb)],64))}},Rb=hg({history:A_("/"),routes:[{path:"/",name:"home",component:Tb},{path:"/about",name:"about",component:()=>Yn(()=>import("./AboutView-GA0ugO0e.js"),__vite__mapDeps([0,1]))},{path:"/recipes",name:"recipes",component:()=>Yn(()=>import("./RecipeView-kcIHM0tO.js"),__vite__mapDeps([2,3]))},{path:"/contact",name:"contact",component:()=>Yn(()=>import("./ContactView-iS9WqBFh.js"),__vite__mapDeps([4,5]))},{path:"/Pumpkinpie1",name:"admin",component:()=>Yn(()=>import("./Admin-sBX8fSPn.js"),__vite__mapDeps([6,7]))},{path:"/livestock",name:"livestock",component:()=>Yn(()=>import("./Livestock-uHuVpVh5.js"),__vite__mapDeps([8,9]))}]});var Ab="firebase",Nb="10.7.2";/**
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
 */at(Ab,Nb,"app");const xb=(t,e)=>e.some(n=>t instanceof n);let lc,cc;function Pb(){return lc||(lc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ob(){return cc||(cc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yf=new WeakMap,oo=new WeakMap,vf=new WeakMap,vr=new WeakMap,fa=new WeakMap;function kb(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Mt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yf.set(n,t)}).catch(()=>{}),fa.set(e,t),e}function Db(t){if(oo.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});oo.set(t,e)}let ao={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return oo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Mb(t){ao=t(ao)}function Lb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Er(this),e,...n);return vf.set(s,e.sort?e.sort():[e]),Mt(s)}:Ob().includes(t)?function(...e){return t.apply(Er(this),e),Mt(yf.get(this))}:function(...e){return Mt(t.apply(Er(this),e))}}function Fb(t){return typeof t=="function"?Lb(t):(t instanceof IDBTransaction&&Db(t),xb(t,Pb())?new Proxy(t,ao):t)}function Mt(t){if(t instanceof IDBRequest)return kb(t);if(vr.has(t))return vr.get(t);const e=Fb(t);return e!==t&&(vr.set(t,e),fa.set(e,t)),e}const Er=t=>fa.get(t);function Bb(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Mt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Mt(o.result),l.oldVersion,l.newVersion,Mt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const $b=["get","getKey","getAll","getAllKeys","count"],Ub=["put","add","delete","clear"],br=new Map;function uc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(br.get(e))return br.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Ub.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||$b.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return br.set(e,r),r}Mb(t=>({...t,get:(e,n,s)=>uc(e,n)||t.get(e,n,s),has:(e,n)=>!!uc(e,n)||t.has(e,n)}));const Ef="@firebase/installations",da="0.6.4";/**
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
 */const bf=1e4,Cf=`w:${da}`,wf="FIS_v2",Wb="https://firebaseinstallations.googleapis.com/v1",Hb=60*60*1e3,Vb="installations",jb="Installations";/**
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
 */const qb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},an=new Fi(Vb,jb,qb);function If(t){return t instanceof hn&&t.code.includes("request-failed")}/**
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
 */function Sf({projectId:t}){return`${Wb}/projects/${t}/installations`}function Tf(t){return{token:t.token,requestStatus:2,expiresIn:Kb(t.expiresIn),creationTime:Date.now()}}async function Rf(t,e){const s=(await e.json()).error;return an.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Af({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Gb(t,{refreshToken:e}){const n=Af(t);return n.append("Authorization",zb(e)),n}async function Nf(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Kb(t){return Number(t.replace("s","000"))}function zb(t){return`${wf} ${t}`}/**
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
 */async function Yb({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Sf(t),i=Af(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:wf,appId:t.appId,sdkVersion:Cf},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Nf(()=>fetch(s,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Tf(c.authToken)}}else throw await Rf("Create Installation",l)}/**
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
 */function xf(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Qb(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Xb=/^[cdef][\w-]{21}$/,lo="";function Jb(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Zb(t);return Xb.test(n)?n:lo}catch{return lo}}function Zb(t){return Qb(t).substr(0,22)}/**
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
 */function Yi(t){return`${t.appName}!${t.appId}`}/**
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
 */const Pf=new Map;function Of(t,e){const n=Yi(t);kf(n,e),eC(n,e)}function kf(t,e){const n=Pf.get(t);if(n)for(const s of n)s(e)}function eC(t,e){const n=tC();n&&n.postMessage({key:t,fid:e}),nC()}let Qt=null;function tC(){return!Qt&&"BroadcastChannel"in self&&(Qt=new BroadcastChannel("[Firebase] FID Change"),Qt.onmessage=t=>{kf(t.data.key,t.data.fid)}),Qt}function nC(){Pf.size===0&&Qt&&(Qt.close(),Qt=null)}/**
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
 */const sC="firebase-installations-database",iC=1,ln="firebase-installations-store";let Cr=null;function pa(){return Cr||(Cr=Bb(sC,iC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ln)}}})),Cr}async function vi(t,e){const n=Yi(t),i=(await pa()).transaction(ln,"readwrite"),r=i.objectStore(ln),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Of(t,e.fid),e}async function Df(t){const e=Yi(t),s=(await pa()).transaction(ln,"readwrite");await s.objectStore(ln).delete(e),await s.done}async function Qi(t,e){const n=Yi(t),i=(await pa()).transaction(ln,"readwrite"),r=i.objectStore(ln),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Of(t,a.fid),a}/**
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
 */async function _a(t){let e;const n=await Qi(t.appConfig,s=>{const i=rC(s),r=oC(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===lo?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function rC(t){const e=t||{fid:Jb(),registrationStatus:0};return Mf(e)}function oC(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(an.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=aC(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:lC(t)}:{installationEntry:e}}async function aC(t,e){try{const n=await Yb(t,e);return vi(t.appConfig,n)}catch(n){throw If(n)&&n.customData.serverCode===409?await Df(t.appConfig):await vi(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function lC(t){let e=await hc(t.appConfig);for(;e.registrationStatus===1;)await xf(100),e=await hc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await _a(t);return s||n}return e}function hc(t){return Qi(t,e=>{if(!e)throw an.create("installation-not-found");return Mf(e)})}function Mf(t){return cC(t)?{fid:t.fid,registrationStatus:0}:t}function cC(t){return t.registrationStatus===1&&t.registrationTime+bf<Date.now()}/**
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
 */async function uC({appConfig:t,heartbeatServiceProvider:e},n){const s=hC(t,n),i=Gb(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:Cf,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Nf(()=>fetch(s,a));if(l.ok){const c=await l.json();return Tf(c)}else throw await Rf("Generate Auth Token",l)}function hC(t,{fid:e}){return`${Sf(t)}/${e}/authTokens:generate`}/**
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
 */async function ga(t,e=!1){let n;const s=await Qi(t.appConfig,r=>{if(!Lf(r))throw an.create("not-registered");const o=r.authToken;if(!e&&pC(o))return r;if(o.requestStatus===1)return n=fC(t,e),r;{if(!navigator.onLine)throw an.create("app-offline");const a=gC(r);return n=dC(t,a),a}});return n?await n:s.authToken}async function fC(t,e){let n=await fc(t.appConfig);for(;n.authToken.requestStatus===1;)await xf(100),n=await fc(t.appConfig);const s=n.authToken;return s.requestStatus===0?ga(t,e):s}function fc(t){return Qi(t,e=>{if(!Lf(e))throw an.create("not-registered");const n=e.authToken;return mC(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function dC(t,e){try{const n=await uC(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await vi(t.appConfig,s),n}catch(n){if(If(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Df(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await vi(t.appConfig,s)}throw n}}function Lf(t){return t!==void 0&&t.registrationStatus===2}function pC(t){return t.requestStatus===2&&!_C(t)}function _C(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Hb}function gC(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function mC(t){return t.requestStatus===1&&t.requestTime+bf<Date.now()}/**
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
 */async function yC(t){const e=t,{installationEntry:n,registrationPromise:s}=await _a(e);return s?s.catch(console.error):ga(e).catch(console.error),n.fid}/**
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
 */async function vC(t,e=!1){const n=t;return await EC(n),(await ga(n,e)).token}async function EC(t){const{registrationPromise:e}=await _a(t);e&&await e}/**
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
 */function bC(t){if(!t||!t.options)throw wr("App Configuration");if(!t.name)throw wr("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw wr(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function wr(t){return an.create("missing-app-config-values",{valueName:t})}/**
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
 */const Ff="installations",CC="installations-internal",wC=t=>{const e=t.getProvider("app").getImmediate(),n=bC(e),s=Rs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},IC=t=>{const e=t.getProvider("app").getImmediate(),n=Rs(e,Ff).getImmediate();return{getId:()=>yC(n),getToken:i=>vC(n,i)}};function SC(){Ft(new _t(Ff,wC,"PUBLIC")),Ft(new _t(CC,IC,"PRIVATE"))}SC();at(Ef,da);at(Ef,da,"esm2017");/**
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
 */const Ei="analytics",TC="firebase_id",RC="origin",AC=60*1e3,NC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ma="https://www.googletagmanager.com/gtag/js";/**
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
 */const De=new ko("@firebase/analytics");/**
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
 */const xC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ue=new Fi("analytics","Analytics",xC);/**
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
 */function PC(t){if(!t.startsWith(ma)){const e=Ue.create("invalid-gtag-resource",{gtagURL:t});return De.warn(e.message),""}return t}function Bf(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function OC(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function kC(t,e){const n=OC("firebase-js-sdk-policy",{createScriptURL:PC}),s=document.createElement("script"),i=`${ma}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function DC(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function MC(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await Bf(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){De.error(a)}t("config",i,r)}async function LC(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Bf(n);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){De.error(r)}}function FC(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[a,l]=o;await LC(t,e,n,a,l)}else if(r==="config"){const[a,l]=o;await MC(t,e,n,s,a,l)}else if(r==="consent"){const[a]=o;t("consent","update",a)}else if(r==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){De.error(a)}}return i}function BC(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=FC(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function $C(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ma)&&n.src.includes(t))return n;return null}/**
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
 */const UC=30,WC=1e3;class HC{constructor(e={},n=WC){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const $f=new HC;function VC(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function jC(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:VC(s)},r=NC.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Ue.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function qC(t,e=$f,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw Ue.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw Ue.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new zC;return setTimeout(async()=>{a.abort()},n!==void 0?n:AC),Uf({appId:s,apiKey:i,measurementId:r},o,a,e)}async function Uf(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=$f){var r;const{appId:o,measurementId:a}=t;try{await GC(s,e)}catch(l){if(a)return De.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await jC(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!KC(c)){if(i.deleteThrottleMetadata(o),a)return De.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?vl(n,i.intervalMillis,UC):vl(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),De.debug(`Calling attemptFetch again in ${u} millis`),Uf(t,h,s,i)}}function GC(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(Ue.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function KC(t){if(!(t instanceof hn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class zC{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function YC(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
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
 */async function QC(){if(Hu())try{await Vu()}catch(t){return De.warn(Ue.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return De.warn(Ue.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function XC(t,e,n,s,i,r,o){var a;const l=qC(t);l.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&De.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>De.error(_)),e.push(l);const c=QC().then(_=>{if(_)return s.getId()}),[u,h]=await Promise.all([l,c]);$C(r)||kC(r,u.measurementId),i("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[RC]="firebase",f.update=!0,h!=null&&(f[TC]=h),i("config",u.measurementId,f),u.measurementId}/**
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
 */class JC{constructor(e){this.app=e}_delete(){return delete cs[this.app.options.appId],Promise.resolve()}}let cs={},dc=[];const pc={};let Ir="dataLayer",ZC="gtag",_c,Wf,gc=!1;function ew(){const t=[];if(Vg()&&t.push("This is a browser extension environment."),qg()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=Ue.create("invalid-analytics-context",{errorInfo:e});De.warn(n.message)}}function tw(t,e,n){ew();const s=t.options.appId;if(!s)throw Ue.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)De.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ue.create("no-api-key");if(cs[s]!=null)throw Ue.create("already-exists",{id:s});if(!gc){DC(Ir);const{wrappedGtag:r,gtagCore:o}=BC(cs,dc,pc,Ir,ZC);Wf=r,_c=o,gc=!0}return cs[s]=XC(t,dc,pc,e,_c,Ir,n),new JC(t)}function nw(t=zu()){t=vt(t);const e=Rs(t,Ei);return e.isInitialized()?e.getImmediate():sw(t)}function sw(t,e={}){const n=Rs(t,Ei);if(n.isInitialized()){const i=n.getImmediate();if(ri(e,n.getOptions()))return i;throw Ue.create("already-initialized")}return n.initialize({options:e})}function iw(t,e,n,s){t=vt(t),YC(Wf,cs[t.app.options.appId],e,n,s).catch(i=>De.error(i))}const mc="@firebase/analytics",yc="0.10.0";function rw(){Ft(new _t(Ei,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return tw(s,i,n)},"PUBLIC")),Ft(new _t("analytics-internal",t,"PRIVATE")),at(mc,yc),at(mc,yc,"esm2017");function t(e){try{const n=e.getProvider(Ei).getImmediate();return{logEvent:(s,i,r)=>iw(n,s,i,r)}}catch(n){throw Ue.create("interop-component-reg-failed",{reason:n})}}}rw();const ow={apiKey:"AIzaSyA6hqThcAUXeRWTlBLsQMTG2sw-W5Lx744",authDomain:"indianspringskatahdins-187d9.firebaseapp.com",projectId:"indianspringskatahdins-187d9",storageBucket:"indianspringskatahdins-187d9.appspot.com",messagingSenderId:"49980286736",appId:"1:49980286736:web:c4cc74994248b9a5ea6795",measurementId:"G-5C26L7CC6X",databaseURL:"https://indianspringskatahdins-187d9-default-rtdb.firebaseio.com/"},Hf=Ku(ow);nw(Hf);mf(Hf);const Vf=l_(dg);Vf.use(Rb);Vf.mount("#app");export{qe as F,Cg as N,xo as _,be as a,Sp as b,Pi as c,Sb as d,Si as e,Yd as f,mf as g,ue as h,cw as i,dw as j,Ss as k,uw as l,Zc as m,Id as n,Un as o,Jc as p,Ip as q,ob as r,lw as s,aw as t,ab as u,hw as v,r_ as w,ua as x,fw as y};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AboutView-GA0ugO0e.js","assets/AboutView-vxUhViEV.css","assets/RecipeView-kcIHM0tO.js","assets/RecipeView-TKVVjyqy.css","assets/ContactView-iS9WqBFh.js","assets/ContactView-KL2ZftCH.css","assets/Admin-sBX8fSPn.js","assets/Admin-WeX07HUe.css","assets/Livestock-uHuVpVh5.js","assets/Livestock-QdZpVoBo.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
