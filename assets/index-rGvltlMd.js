(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function rc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bu={exports:{}},br={},Wu={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yn=Symbol.for("react.element"),lc=Symbol.for("react.portal"),oc=Symbol.for("react.fragment"),ic=Symbol.for("react.strict_mode"),uc=Symbol.for("react.profiler"),sc=Symbol.for("react.provider"),ac=Symbol.for("react.context"),cc=Symbol.for("react.forward_ref"),dc=Symbol.for("react.suspense"),fc=Symbol.for("react.memo"),pc=Symbol.for("react.lazy"),Ri=Symbol.iterator;function hc(e){return e===null||typeof e!="object"?null:(e=Ri&&e[Ri]||e["@@iterator"],typeof e=="function"?e:null)}var Qu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gu=Object.assign,Yu={};function rn(e,t,n){this.props=e,this.context=t,this.refs=Yu,this.updater=n||Qu}rn.prototype.isReactComponent={};rn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};rn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ku(){}Ku.prototype=rn.prototype;function Uo(e,t,n){this.props=e,this.context=t,this.refs=Yu,this.updater=n||Qu}var Ao=Uo.prototype=new Ku;Ao.constructor=Uo;Gu(Ao,rn.prototype);Ao.isPureReactComponent=!0;var ji=Array.isArray,Xu=Object.prototype.hasOwnProperty,Ho={current:null},Ju={key:!0,ref:!0,__self:!0,__source:!0};function Zu(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Xu.call(t,r)&&!Ju.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:Yn,type:e,key:o,ref:i,props:l,_owner:Ho.current}}function mc(e,t){return{$$typeof:Yn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yn}function yc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Oi=/\/+/g;function vl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?yc(""+e.key):t.toString(36)}function gr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Yn:case lc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+vl(i,0):r,ji(l)?(n="",e!=null&&(n=e.replace(Oi,"$&/")+"/"),gr(l,t,n,"",function(c){return c})):l!=null&&(Vo(l)&&(l=mc(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Oi,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",ji(e))for(var u=0;u<e.length;u++){o=e[u];var s=r+vl(o,u);i+=gr(o,t,n,s,l)}else if(s=hc(e),typeof s=="function")for(e=s.call(e),u=0;!(o=e.next()).done;)o=o.value,s=r+vl(o,u++),i+=gr(o,t,n,s,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function er(e,t,n){if(e==null)return e;var r=[],l=0;return gr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function gc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ie={current:null},vr={transition:null},vc={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:vr,ReactCurrentOwner:Ho};I.Children={map:er,forEach:function(e,t,n){er(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return er(e,function(){t++}),t},toArray:function(e){return er(e,function(t){return t})||[]},only:function(e){if(!Vo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=rn;I.Fragment=oc;I.Profiler=uc;I.PureComponent=Uo;I.StrictMode=ic;I.Suspense=dc;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vc;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gu({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Ho.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)Xu.call(t,s)&&!Ju.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&u!==void 0?u[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){u=Array(s);for(var c=0;c<s;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:Yn,type:e.type,key:l,ref:o,props:r,_owner:i}};I.createContext=function(e){return e={$$typeof:ac,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sc,_context:e},e.Consumer=e};I.createElement=Zu;I.createFactory=function(e){var t=Zu.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:cc,render:e}};I.isValidElement=Vo;I.lazy=function(e){return{$$typeof:pc,_payload:{_status:-1,_result:e},_init:gc}};I.memo=function(e,t){return{$$typeof:fc,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=vr.transition;vr.transition={};try{e()}finally{vr.transition=t}};I.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};I.useCallback=function(e,t){return ie.current.useCallback(e,t)};I.useContext=function(e){return ie.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return ie.current.useDeferredValue(e)};I.useEffect=function(e,t){return ie.current.useEffect(e,t)};I.useId=function(){return ie.current.useId()};I.useImperativeHandle=function(e,t,n){return ie.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return ie.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return ie.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return ie.current.useMemo(e,t)};I.useReducer=function(e,t,n){return ie.current.useReducer(e,t,n)};I.useRef=function(e){return ie.current.useRef(e)};I.useState=function(e){return ie.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return ie.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return ie.current.useTransition()};I.version="18.2.0";Wu.exports=I;var $o=Wu.exports;const wc=rc($o);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sc=$o,kc=Symbol.for("react.element"),Ec=Symbol.for("react.fragment"),xc=Object.prototype.hasOwnProperty,Cc=Sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_c={key:!0,ref:!0,__self:!0,__source:!0};function qu(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)xc.call(t,r)&&!_c.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:kc,type:e,key:o,ref:i,props:l,_owner:Cc.current}}br.Fragment=Ec;br.jsx=qu;br.jsxs=qu;Bu.exports=br;var ze=Bu.exports,Wl={},bu={exports:{}},ge={},es={exports:{}},ts={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(x,T){var N=x.length;x.push(T);e:for(;0<N;){var B=N-1>>>1,K=x[B];if(0<l(K,T))x[B]=T,x[N]=K,N=B;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var T=x[0],N=x.pop();if(N!==T){x[0]=N;e:for(var B=0,K=x.length,qn=K>>>1;B<qn;){var mt=2*(B+1)-1,gl=x[mt],yt=mt+1,bn=x[yt];if(0>l(gl,N))yt<K&&0>l(bn,gl)?(x[B]=bn,x[yt]=N,B=yt):(x[B]=gl,x[mt]=N,B=mt);else if(yt<K&&0>l(bn,N))x[B]=bn,x[yt]=N,B=yt;else break e}}return T}function l(x,T){var N=x.sortIndex-T.sortIndex;return N!==0?N:x.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,u=i.now();e.unstable_now=function(){return i.now()-u}}var s=[],c=[],m=1,h=null,p=3,v=!1,w=!1,S=!1,O=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(x){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=x)r(c),T.sortIndex=T.expirationTime,t(s,T);else break;T=n(c)}}function y(x){if(S=!1,f(x),!w)if(n(s)!==null)w=!0,ml(E);else{var T=n(c);T!==null&&yl(y,T.startTime-x)}}function E(x,T){w=!1,S&&(S=!1,d(P),P=-1),v=!0;var N=p;try{for(f(T),h=n(s);h!==null&&(!(h.expirationTime>T)||x&&!_e());){var B=h.callback;if(typeof B=="function"){h.callback=null,p=h.priorityLevel;var K=B(h.expirationTime<=T);T=e.unstable_now(),typeof K=="function"?h.callback=K:h===n(s)&&r(s),f(T)}else r(s);h=n(s)}if(h!==null)var qn=!0;else{var mt=n(c);mt!==null&&yl(y,mt.startTime-T),qn=!1}return qn}finally{h=null,p=N,v=!1}}var C=!1,_=null,P=-1,$=5,z=-1;function _e(){return!(e.unstable_now()-z<$)}function un(){if(_!==null){var x=e.unstable_now();z=x;var T=!0;try{T=_(!0,x)}finally{T?sn():(C=!1,_=null)}}else C=!1}var sn;if(typeof a=="function")sn=function(){a(un)};else if(typeof MessageChannel<"u"){var Di=new MessageChannel,nc=Di.port2;Di.port1.onmessage=un,sn=function(){nc.postMessage(null)}}else sn=function(){O(un,0)};function ml(x){_=x,C||(C=!0,sn())}function yl(x,T){P=O(function(){x(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,ml(E))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(x){switch(p){case 1:case 2:case 3:var T=3;break;default:T=p}var N=p;p=T;try{return x()}finally{p=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,T){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var N=p;p=x;try{return T()}finally{p=N}},e.unstable_scheduleCallback=function(x,T,N){var B=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?B+N:B):N=B,x){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=N+K,x={id:m++,callback:T,priorityLevel:x,startTime:N,expirationTime:K,sortIndex:-1},N>B?(x.sortIndex=N,t(c,x),n(s)===null&&x===n(c)&&(S?(d(P),P=-1):S=!0,yl(y,N-B))):(x.sortIndex=K,t(s,x),w||v||(w=!0,ml(E))),x},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(x){var T=p;return function(){var N=p;p=T;try{return x.apply(this,arguments)}finally{p=N}}}})(ts);es.exports=ts;var Pc=es.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ns=$o,ye=Pc;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rs=new Set,zn={};function It(e,t){Jt(e,t),Jt(e+"Capture",t)}function Jt(e,t){for(zn[e]=t,e=0;e<t.length;e++)rs.add(t[e])}var We=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ql=Object.prototype.hasOwnProperty,Tc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mi={},Ui={};function Nc(e){return Ql.call(Ui,e)?!0:Ql.call(Mi,e)?!1:Tc.test(e)?Ui[e]=!0:(Mi[e]=!0,!1)}function Ic(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zc(e,t,n,r){if(t===null||typeof t>"u"||Ic(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){b[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];b[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){b[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){b[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){b[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){b[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){b[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){b[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){b[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bo=/[\-:]([a-z])/g;function Wo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Bo,Wo);b[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Bo,Wo);b[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Bo,Wo);b[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){b[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});b.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){b[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qo(e,t,n,r){var l=b.hasOwnProperty(t)?b[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zc(t,n,l,r)&&(n=null),r||l===null?Nc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ke=ns.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tr=Symbol.for("react.element"),Ft=Symbol.for("react.portal"),Dt=Symbol.for("react.fragment"),Go=Symbol.for("react.strict_mode"),Gl=Symbol.for("react.profiler"),ls=Symbol.for("react.provider"),os=Symbol.for("react.context"),Yo=Symbol.for("react.forward_ref"),Yl=Symbol.for("react.suspense"),Kl=Symbol.for("react.suspense_list"),Ko=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),is=Symbol.for("react.offscreen"),Ai=Symbol.iterator;function an(e){return e===null||typeof e!="object"?null:(e=Ai&&e[Ai]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,wl;function gn(e){if(wl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wl=t&&t[1]||""}return`
`+wl+e}var Sl=!1;function kl(e,t){if(!e||Sl)return"";Sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,u=o.length-1;1<=i&&0<=u&&l[i]!==o[u];)u--;for(;1<=i&&0<=u;i--,u--)if(l[i]!==o[u]){if(i!==1||u!==1)do if(i--,u--,0>u||l[i]!==o[u]){var s=`
`+l[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=u);break}}}finally{Sl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?gn(e):""}function Lc(e){switch(e.tag){case 5:return gn(e.type);case 16:return gn("Lazy");case 13:return gn("Suspense");case 19:return gn("SuspenseList");case 0:case 2:case 15:return e=kl(e.type,!1),e;case 11:return e=kl(e.type.render,!1),e;case 1:return e=kl(e.type,!0),e;default:return""}}function Xl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dt:return"Fragment";case Ft:return"Portal";case Gl:return"Profiler";case Go:return"StrictMode";case Yl:return"Suspense";case Kl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case os:return(e.displayName||"Context")+".Consumer";case ls:return(e._context.displayName||"Context")+".Provider";case Yo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ko:return t=e.displayName||null,t!==null?t:Xl(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return Xl(e(t))}catch{}}return null}function Fc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xl(t);case 8:return t===Go?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ct(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function us(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dc(e){var t=us(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function nr(e){e._valueTracker||(e._valueTracker=Dc(e))}function ss(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=us(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ir(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jl(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Hi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ct(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function as(e,t){t=t.checked,t!=null&&Qo(e,"checked",t,!1)}function Zl(e,t){as(e,t);var n=ct(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ql(e,t.type,n):t.hasOwnProperty("defaultValue")&&ql(e,t.type,ct(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ql(e,t,n){(t!=="number"||Ir(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var vn=Array.isArray;function Wt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ct(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function bl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(g(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $i(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(g(92));if(vn(n)){if(1<n.length)throw Error(g(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ct(n)}}function cs(e,t){var n=ct(t.value),r=ct(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ds(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ds(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var rr,fs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(rr=rr||document.createElement("div"),rr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=rr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ln(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var kn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rc=["Webkit","ms","Moz","O"];Object.keys(kn).forEach(function(e){Rc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),kn[t]=kn[e]})});function ps(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||kn.hasOwnProperty(e)&&kn[e]?(""+t).trim():t+"px"}function hs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ps(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var jc=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function to(e,t){if(t){if(jc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(g(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(g(61))}if(t.style!=null&&typeof t.style!="object")throw Error(g(62))}}function no(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ro=null;function Xo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lo=null,Qt=null,Gt=null;function Wi(e){if(e=Jn(e)){if(typeof lo!="function")throw Error(g(280));var t=e.stateNode;t&&(t=ll(t),lo(e.stateNode,e.type,t))}}function ms(e){Qt?Gt?Gt.push(e):Gt=[e]:Qt=e}function ys(){if(Qt){var e=Qt,t=Gt;if(Gt=Qt=null,Wi(e),t)for(e=0;e<t.length;e++)Wi(t[e])}}function gs(e,t){return e(t)}function vs(){}var El=!1;function ws(e,t,n){if(El)return e(t,n);El=!0;try{return gs(e,t,n)}finally{El=!1,(Qt!==null||Gt!==null)&&(vs(),ys())}}function Fn(e,t){var n=e.stateNode;if(n===null)return null;var r=ll(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(g(231,t,typeof n));return n}var oo=!1;if(We)try{var cn={};Object.defineProperty(cn,"passive",{get:function(){oo=!0}}),window.addEventListener("test",cn,cn),window.removeEventListener("test",cn,cn)}catch{oo=!1}function Oc(e,t,n,r,l,o,i,u,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var En=!1,zr=null,Lr=!1,io=null,Mc={onError:function(e){En=!0,zr=e}};function Uc(e,t,n,r,l,o,i,u,s){En=!1,zr=null,Oc.apply(Mc,arguments)}function Ac(e,t,n,r,l,o,i,u,s){if(Uc.apply(this,arguments),En){if(En){var c=zr;En=!1,zr=null}else throw Error(g(198));Lr||(Lr=!0,io=c)}}function zt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ss(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qi(e){if(zt(e)!==e)throw Error(g(188))}function Hc(e){var t=e.alternate;if(!t){if(t=zt(e),t===null)throw Error(g(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Qi(l),e;if(o===r)return Qi(l),t;o=o.sibling}throw Error(g(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,u=l.child;u;){if(u===n){i=!0,n=l,r=o;break}if(u===r){i=!0,r=l,n=o;break}u=u.sibling}if(!i){for(u=o.child;u;){if(u===n){i=!0,n=o,r=l;break}if(u===r){i=!0,r=o,n=l;break}u=u.sibling}if(!i)throw Error(g(189))}}if(n.alternate!==r)throw Error(g(190))}if(n.tag!==3)throw Error(g(188));return n.stateNode.current===n?e:t}function ks(e){return e=Hc(e),e!==null?Es(e):null}function Es(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Es(e);if(t!==null)return t;e=e.sibling}return null}var xs=ye.unstable_scheduleCallback,Gi=ye.unstable_cancelCallback,Vc=ye.unstable_shouldYield,$c=ye.unstable_requestPaint,W=ye.unstable_now,Bc=ye.unstable_getCurrentPriorityLevel,Jo=ye.unstable_ImmediatePriority,Cs=ye.unstable_UserBlockingPriority,Fr=ye.unstable_NormalPriority,Wc=ye.unstable_LowPriority,_s=ye.unstable_IdlePriority,el=null,Me=null;function Qc(e){if(Me&&typeof Me.onCommitFiberRoot=="function")try{Me.onCommitFiberRoot(el,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:Kc,Gc=Math.log,Yc=Math.LN2;function Kc(e){return e>>>=0,e===0?32:31-(Gc(e)/Yc|0)|0}var lr=64,or=4194304;function wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Dr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var u=i&~l;u!==0?r=wn(u):(o&=i,o!==0&&(r=wn(o)))}else i=n&~l,i!==0?r=wn(i):o!==0&&(r=wn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Le(t),l=1<<n,r|=e[n],t&=~l;return r}function Xc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Le(o),u=1<<i,s=l[i];s===-1?(!(u&n)||u&r)&&(l[i]=Xc(u,t)):s<=t&&(e.expiredLanes|=u),o&=~u}}function uo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ps(){var e=lr;return lr<<=1,!(lr&4194240)&&(lr=64),e}function xl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Le(t),e[t]=n}function Zc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Le(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function Zo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Le(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var F=0;function Ts(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ns,qo,Is,zs,Ls,so=!1,ir=[],nt=null,rt=null,lt=null,Dn=new Map,Rn=new Map,qe=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yi(e,t){switch(e){case"focusin":case"focusout":nt=null;break;case"dragenter":case"dragleave":rt=null;break;case"mouseover":case"mouseout":lt=null;break;case"pointerover":case"pointerout":Dn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rn.delete(t.pointerId)}}function dn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Jn(t),t!==null&&qo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function bc(e,t,n,r,l){switch(t){case"focusin":return nt=dn(nt,e,t,n,r,l),!0;case"dragenter":return rt=dn(rt,e,t,n,r,l),!0;case"mouseover":return lt=dn(lt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Dn.set(o,dn(Dn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Rn.set(o,dn(Rn.get(o)||null,e,t,n,r,l)),!0}return!1}function Fs(e){var t=wt(e.target);if(t!==null){var n=zt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ss(n),t!==null){e.blockedOn=t,Ls(e.priority,function(){Is(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ao(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ro=r,n.target.dispatchEvent(r),ro=null}else return t=Jn(n),t!==null&&qo(t),e.blockedOn=n,!1;t.shift()}return!0}function Ki(e,t,n){wr(e)&&n.delete(t)}function ed(){so=!1,nt!==null&&wr(nt)&&(nt=null),rt!==null&&wr(rt)&&(rt=null),lt!==null&&wr(lt)&&(lt=null),Dn.forEach(Ki),Rn.forEach(Ki)}function fn(e,t){e.blockedOn===t&&(e.blockedOn=null,so||(so=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,ed)))}function jn(e){function t(l){return fn(l,e)}if(0<ir.length){fn(ir[0],e);for(var n=1;n<ir.length;n++){var r=ir[n];r.blockedOn===e&&(r.blockedOn=null)}}for(nt!==null&&fn(nt,e),rt!==null&&fn(rt,e),lt!==null&&fn(lt,e),Dn.forEach(t),Rn.forEach(t),n=0;n<qe.length;n++)r=qe[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qe.length&&(n=qe[0],n.blockedOn===null);)Fs(n),n.blockedOn===null&&qe.shift()}var Yt=Ke.ReactCurrentBatchConfig,Rr=!0;function td(e,t,n,r){var l=F,o=Yt.transition;Yt.transition=null;try{F=1,bo(e,t,n,r)}finally{F=l,Yt.transition=o}}function nd(e,t,n,r){var l=F,o=Yt.transition;Yt.transition=null;try{F=4,bo(e,t,n,r)}finally{F=l,Yt.transition=o}}function bo(e,t,n,r){if(Rr){var l=ao(e,t,n,r);if(l===null)Dl(e,t,r,jr,n),Yi(e,r);else if(bc(l,e,t,n,r))r.stopPropagation();else if(Yi(e,r),t&4&&-1<qc.indexOf(e)){for(;l!==null;){var o=Jn(l);if(o!==null&&Ns(o),o=ao(e,t,n,r),o===null&&Dl(e,t,r,jr,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Dl(e,t,r,null,n)}}var jr=null;function ao(e,t,n,r){if(jr=null,e=Xo(r),e=wt(e),e!==null)if(t=zt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ss(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return jr=e,null}function Ds(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bc()){case Jo:return 1;case Cs:return 4;case Fr:case Wc:return 16;case _s:return 536870912;default:return 16}default:return 16}}var et=null,ei=null,Sr=null;function Rs(){if(Sr)return Sr;var e,t=ei,n=t.length,r,l="value"in et?et.value:et.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Sr=l.slice(e,1<r?1-r:void 0)}function kr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function Xi(){return!1}function ve(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ur:Xi,this.isPropagationStopped=Xi,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),t}var ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ti=ve(ln),Xn=H({},ln,{view:0,detail:0}),rd=ve(Xn),Cl,_l,pn,tl=H({},Xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ni,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pn&&(pn&&e.type==="mousemove"?(Cl=e.screenX-pn.screenX,_l=e.screenY-pn.screenY):_l=Cl=0,pn=e),Cl)},movementY:function(e){return"movementY"in e?e.movementY:_l}}),Ji=ve(tl),ld=H({},tl,{dataTransfer:0}),od=ve(ld),id=H({},Xn,{relatedTarget:0}),Pl=ve(id),ud=H({},ln,{animationName:0,elapsedTime:0,pseudoElement:0}),sd=ve(ud),ad=H({},ln,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cd=ve(ad),dd=H({},ln,{data:0}),Zi=ve(dd),fd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function md(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hd[e])?!!t[e]:!1}function ni(){return md}var yd=H({},Xn,{key:function(e){if(e.key){var t=fd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=kr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ni,charCode:function(e){return e.type==="keypress"?kr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?kr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gd=ve(yd),vd=H({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qi=ve(vd),wd=H({},Xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ni}),Sd=ve(wd),kd=H({},ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ed=ve(kd),xd=H({},tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cd=ve(xd),_d=[9,13,27,32],ri=We&&"CompositionEvent"in window,xn=null;We&&"documentMode"in document&&(xn=document.documentMode);var Pd=We&&"TextEvent"in window&&!xn,js=We&&(!ri||xn&&8<xn&&11>=xn),bi=" ",eu=!1;function Os(e,t){switch(e){case"keyup":return _d.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ms(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rt=!1;function Td(e,t){switch(e){case"compositionend":return Ms(t);case"keypress":return t.which!==32?null:(eu=!0,bi);case"textInput":return e=t.data,e===bi&&eu?null:e;default:return null}}function Nd(e,t){if(Rt)return e==="compositionend"||!ri&&Os(e,t)?(e=Rs(),Sr=ei=et=null,Rt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return js&&t.locale!=="ko"?null:t.data;default:return null}}var Id={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Id[e.type]:t==="textarea"}function Us(e,t,n,r){ms(r),t=Or(t,"onChange"),0<t.length&&(n=new ti("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Cn=null,On=null;function zd(e){Xs(e,0)}function nl(e){var t=Mt(e);if(ss(t))return e}function Ld(e,t){if(e==="change")return t}var As=!1;if(We){var Tl;if(We){var Nl="oninput"in document;if(!Nl){var nu=document.createElement("div");nu.setAttribute("oninput","return;"),Nl=typeof nu.oninput=="function"}Tl=Nl}else Tl=!1;As=Tl&&(!document.documentMode||9<document.documentMode)}function ru(){Cn&&(Cn.detachEvent("onpropertychange",Hs),On=Cn=null)}function Hs(e){if(e.propertyName==="value"&&nl(On)){var t=[];Us(t,On,e,Xo(e)),ws(zd,t)}}function Fd(e,t,n){e==="focusin"?(ru(),Cn=t,On=n,Cn.attachEvent("onpropertychange",Hs)):e==="focusout"&&ru()}function Dd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(On)}function Rd(e,t){if(e==="click")return nl(t)}function jd(e,t){if(e==="input"||e==="change")return nl(t)}function Od(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:Od;function Mn(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Ql.call(t,l)||!De(e[l],t[l]))return!1}return!0}function lu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ou(e,t){var n=lu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lu(n)}}function Vs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $s(){for(var e=window,t=Ir();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ir(e.document)}return t}function li(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Md(e){var t=$s(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vs(n.ownerDocument.documentElement,n)){if(r!==null&&li(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=ou(n,o);var i=ou(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ud=We&&"documentMode"in document&&11>=document.documentMode,jt=null,co=null,_n=null,fo=!1;function iu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fo||jt==null||jt!==Ir(r)||(r=jt,"selectionStart"in r&&li(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_n&&Mn(_n,r)||(_n=r,r=Or(co,"onSelect"),0<r.length&&(t=new ti("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=jt)))}function sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ot={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionend:sr("Transition","TransitionEnd")},Il={},Bs={};We&&(Bs=document.createElement("div").style,"AnimationEvent"in window||(delete Ot.animationend.animation,delete Ot.animationiteration.animation,delete Ot.animationstart.animation),"TransitionEvent"in window||delete Ot.transitionend.transition);function rl(e){if(Il[e])return Il[e];if(!Ot[e])return e;var t=Ot[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bs)return Il[e]=t[n];return e}var Ws=rl("animationend"),Qs=rl("animationiteration"),Gs=rl("animationstart"),Ys=rl("transitionend"),Ks=new Map,uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ft(e,t){Ks.set(e,t),It(t,[e])}for(var zl=0;zl<uu.length;zl++){var Ll=uu[zl],Ad=Ll.toLowerCase(),Hd=Ll[0].toUpperCase()+Ll.slice(1);ft(Ad,"on"+Hd)}ft(Ws,"onAnimationEnd");ft(Qs,"onAnimationIteration");ft(Gs,"onAnimationStart");ft("dblclick","onDoubleClick");ft("focusin","onFocus");ft("focusout","onBlur");ft(Ys,"onTransitionEnd");Jt("onMouseEnter",["mouseout","mouseover"]);Jt("onMouseLeave",["mouseout","mouseover"]);Jt("onPointerEnter",["pointerout","pointerover"]);Jt("onPointerLeave",["pointerout","pointerover"]);It("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));It("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));It("onBeforeInput",["compositionend","keypress","textInput","paste"]);It("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));It("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));It("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));function su(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ac(r,t,void 0,e),e.currentTarget=null}function Xs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var u=r[i],s=u.instance,c=u.currentTarget;if(u=u.listener,s!==o&&l.isPropagationStopped())break e;su(l,u,c),o=s}else for(i=0;i<r.length;i++){if(u=r[i],s=u.instance,c=u.currentTarget,u=u.listener,s!==o&&l.isPropagationStopped())break e;su(l,u,c),o=s}}}if(Lr)throw e=io,Lr=!1,io=null,e}function R(e,t){var n=t[go];n===void 0&&(n=t[go]=new Set);var r=e+"__bubble";n.has(r)||(Js(t,e,2,!1),n.add(r))}function Fl(e,t,n){var r=0;t&&(r|=4),Js(n,e,r,t)}var ar="_reactListening"+Math.random().toString(36).slice(2);function Un(e){if(!e[ar]){e[ar]=!0,rs.forEach(function(n){n!=="selectionchange"&&(Vd.has(n)||Fl(n,!1,e),Fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ar]||(t[ar]=!0,Fl("selectionchange",!1,t))}}function Js(e,t,n,r){switch(Ds(t)){case 1:var l=td;break;case 4:l=nd;break;default:l=bo}n=l.bind(null,t,n,e),l=void 0,!oo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Dl(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;i=i.return}for(;u!==null;){if(i=wt(u),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue e}u=u.parentNode}}r=r.return}ws(function(){var c=o,m=Xo(n),h=[];e:{var p=Ks.get(e);if(p!==void 0){var v=ti,w=e;switch(e){case"keypress":if(kr(n)===0)break e;case"keydown":case"keyup":v=gd;break;case"focusin":w="focus",v=Pl;break;case"focusout":w="blur",v=Pl;break;case"beforeblur":case"afterblur":v=Pl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ji;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=od;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Sd;break;case Ws:case Qs:case Gs:v=sd;break;case Ys:v=Ed;break;case"scroll":v=rd;break;case"wheel":v=Cd;break;case"copy":case"cut":case"paste":v=cd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=qi}var S=(t&4)!==0,O=!S&&e==="scroll",d=S?p!==null?p+"Capture":null:p;S=[];for(var a=c,f;a!==null;){f=a;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,d!==null&&(y=Fn(a,d),y!=null&&S.push(An(a,y,f)))),O)break;a=a.return}0<S.length&&(p=new v(p,w,null,n,m),h.push({event:p,listeners:S}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==ro&&(w=n.relatedTarget||n.fromElement)&&(wt(w)||w[Qe]))break e;if((v||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=c,w=w?wt(w):null,w!==null&&(O=zt(w),w!==O||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=c),v!==w)){if(S=Ji,y="onMouseLeave",d="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(S=qi,y="onPointerLeave",d="onPointerEnter",a="pointer"),O=v==null?p:Mt(v),f=w==null?p:Mt(w),p=new S(y,a+"leave",v,n,m),p.target=O,p.relatedTarget=f,y=null,wt(m)===c&&(S=new S(d,a+"enter",w,n,m),S.target=f,S.relatedTarget=O,y=S),O=y,v&&w)t:{for(S=v,d=w,a=0,f=S;f;f=Lt(f))a++;for(f=0,y=d;y;y=Lt(y))f++;for(;0<a-f;)S=Lt(S),a--;for(;0<f-a;)d=Lt(d),f--;for(;a--;){if(S===d||d!==null&&S===d.alternate)break t;S=Lt(S),d=Lt(d)}S=null}else S=null;v!==null&&au(h,p,v,S,!1),w!==null&&O!==null&&au(h,O,w,S,!0)}}e:{if(p=c?Mt(c):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var E=Ld;else if(tu(p))if(As)E=jd;else{E=Dd;var C=Fd}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=Rd);if(E&&(E=E(e,c))){Us(h,E,n,m);break e}C&&C(e,p,c),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&ql(p,"number",p.value)}switch(C=c?Mt(c):window,e){case"focusin":(tu(C)||C.contentEditable==="true")&&(jt=C,co=c,_n=null);break;case"focusout":_n=co=jt=null;break;case"mousedown":fo=!0;break;case"contextmenu":case"mouseup":case"dragend":fo=!1,iu(h,n,m);break;case"selectionchange":if(Ud)break;case"keydown":case"keyup":iu(h,n,m)}var _;if(ri)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Rt?Os(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(js&&n.locale!=="ko"&&(Rt||P!=="onCompositionStart"?P==="onCompositionEnd"&&Rt&&(_=Rs()):(et=m,ei="value"in et?et.value:et.textContent,Rt=!0)),C=Or(c,P),0<C.length&&(P=new Zi(P,e,null,n,m),h.push({event:P,listeners:C}),_?P.data=_:(_=Ms(n),_!==null&&(P.data=_)))),(_=Pd?Td(e,n):Nd(e,n))&&(c=Or(c,"onBeforeInput"),0<c.length&&(m=new Zi("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:c}),m.data=_))}Xs(h,t)})}function An(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Or(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Fn(e,n),o!=null&&r.unshift(An(e,o,l)),o=Fn(e,t),o!=null&&r.push(An(e,o,l))),e=e.return}return r}function Lt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function au(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var u=n,s=u.alternate,c=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&c!==null&&(u=c,l?(s=Fn(n,o),s!=null&&i.unshift(An(n,s,u))):l||(s=Fn(n,o),s!=null&&i.push(An(n,s,u)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var $d=/\r\n?/g,Bd=/\u0000|\uFFFD/g;function cu(e){return(typeof e=="string"?e:""+e).replace($d,`
`).replace(Bd,"")}function cr(e,t,n){if(t=cu(t),cu(e)!==t&&n)throw Error(g(425))}function Mr(){}var po=null,ho=null;function mo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yo=typeof setTimeout=="function"?setTimeout:void 0,Wd=typeof clearTimeout=="function"?clearTimeout:void 0,du=typeof Promise=="function"?Promise:void 0,Qd=typeof queueMicrotask=="function"?queueMicrotask:typeof du<"u"?function(e){return du.resolve(null).then(e).catch(Gd)}:yo;function Gd(e){setTimeout(function(){throw e})}function Rl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),jn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);jn(t)}function ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var on=Math.random().toString(36).slice(2),Oe="__reactFiber$"+on,Hn="__reactProps$"+on,Qe="__reactContainer$"+on,go="__reactEvents$"+on,Yd="__reactListeners$"+on,Kd="__reactHandles$"+on;function wt(e){var t=e[Oe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qe]||n[Oe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fu(e);e!==null;){if(n=e[Oe])return n;e=fu(e)}return t}e=n,n=e.parentNode}return null}function Jn(e){return e=e[Oe]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(g(33))}function ll(e){return e[Hn]||null}var vo=[],Ut=-1;function pt(e){return{current:e}}function j(e){0>Ut||(e.current=vo[Ut],vo[Ut]=null,Ut--)}function D(e,t){Ut++,vo[Ut]=e.current,e.current=t}var dt={},re=pt(dt),ce=pt(!1),Ct=dt;function Zt(e,t){var n=e.type.contextTypes;if(!n)return dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function de(e){return e=e.childContextTypes,e!=null}function Ur(){j(ce),j(re)}function pu(e,t,n){if(re.current!==dt)throw Error(g(168));D(re,t),D(ce,n)}function Zs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(g(108,Fc(e)||"Unknown",l));return H({},n,r)}function Ar(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dt,Ct=re.current,D(re,e),D(ce,ce.current),!0}function hu(e,t,n){var r=e.stateNode;if(!r)throw Error(g(169));n?(e=Zs(e,t,Ct),r.__reactInternalMemoizedMergedChildContext=e,j(ce),j(re),D(re,e)):j(ce),D(ce,n)}var He=null,ol=!1,jl=!1;function qs(e){He===null?He=[e]:He.push(e)}function Xd(e){ol=!0,qs(e)}function ht(){if(!jl&&He!==null){jl=!0;var e=0,t=F;try{var n=He;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}He=null,ol=!1}catch(l){throw He!==null&&(He=He.slice(e+1)),xs(Jo,ht),l}finally{F=t,jl=!1}}return null}var At=[],Ht=0,Hr=null,Vr=0,we=[],Se=0,_t=null,Ve=1,$e="";function gt(e,t){At[Ht++]=Vr,At[Ht++]=Hr,Hr=e,Vr=t}function bs(e,t,n){we[Se++]=Ve,we[Se++]=$e,we[Se++]=_t,_t=e;var r=Ve;e=$e;var l=32-Le(r)-1;r&=~(1<<l),n+=1;var o=32-Le(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Ve=1<<32-Le(t)+l|n<<l|r,$e=o+e}else Ve=1<<o|n<<l|r,$e=e}function oi(e){e.return!==null&&(gt(e,1),bs(e,1,0))}function ii(e){for(;e===Hr;)Hr=At[--Ht],At[Ht]=null,Vr=At[--Ht],At[Ht]=null;for(;e===_t;)_t=we[--Se],we[Se]=null,$e=we[--Se],we[Se]=null,Ve=we[--Se],we[Se]=null}var me=null,he=null,M=!1,Ie=null;function ea(e,t){var n=ke(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function mu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,me=e,he=ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,me=e,he=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_t!==null?{id:Ve,overflow:$e}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ke(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,me=e,he=null,!0):!1;default:return!1}}function wo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function So(e){if(M){var t=he;if(t){var n=t;if(!mu(e,t)){if(wo(e))throw Error(g(418));t=ot(n.nextSibling);var r=me;t&&mu(e,t)?ea(r,n):(e.flags=e.flags&-4097|2,M=!1,me=e)}}else{if(wo(e))throw Error(g(418));e.flags=e.flags&-4097|2,M=!1,me=e}}}function yu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;me=e}function dr(e){if(e!==me)return!1;if(!M)return yu(e),M=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!mo(e.type,e.memoizedProps)),t&&(t=he)){if(wo(e))throw ta(),Error(g(418));for(;t;)ea(e,t),t=ot(t.nextSibling)}if(yu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){he=ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}he=null}}else he=me?ot(e.stateNode.nextSibling):null;return!0}function ta(){for(var e=he;e;)e=ot(e.nextSibling)}function qt(){he=me=null,M=!1}function ui(e){Ie===null?Ie=[e]:Ie.push(e)}var Jd=Ke.ReactCurrentBatchConfig;function Te(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var $r=pt(null),Br=null,Vt=null,si=null;function ai(){si=Vt=Br=null}function ci(e){var t=$r.current;j($r),e._currentValue=t}function ko(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Kt(e,t){Br=e,si=Vt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ae=!0),e.firstContext=null)}function xe(e){var t=e._currentValue;if(si!==e)if(e={context:e,memoizedValue:t,next:null},Vt===null){if(Br===null)throw Error(g(308));Vt=e,Br.dependencies={lanes:0,firstContext:e}}else Vt=Vt.next=e;return t}var St=null;function di(e){St===null?St=[e]:St.push(e)}function na(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,di(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ge(e,r)}function Ge(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ze=!1;function fi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ra(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Be(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function it(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ge(e,n)}return l=r.interleaved,l===null?(t.next=t,di(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ge(e,n)}function Er(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zo(e,n)}}function gu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wr(e,t,n,r){var l=e.updateQueue;Ze=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var s=u,c=s.next;s.next=null,i===null?o=c:i.next=c,i=s;var m=e.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==i&&(u===null?m.firstBaseUpdate=c:u.next=c,m.lastBaseUpdate=s))}if(o!==null){var h=l.baseState;i=0,m=c=s=null,u=o;do{var p=u.lane,v=u.eventTime;if((r&p)===p){m!==null&&(m=m.next={eventTime:v,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var w=e,S=u;switch(p=t,v=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){h=w.call(v,h,p);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,p=typeof w=="function"?w.call(v,h,p):w,p==null)break e;h=H({},h,p);break e;case 2:Ze=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[u]:p.push(u))}else v={eventTime:v,lane:p,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(c=m=v,s=h):m=m.next=v,i|=p;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;p=u,u=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if(m===null&&(s=h),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Tt|=i,e.lanes=i,e.memoizedState=h}}function vu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(g(191,l));l.call(r)}}}var la=new ns.Component().refs;function Eo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var il={isMounted:function(e){return(e=e._reactInternals)?zt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=oe(),l=st(e),o=Be(r,l);o.payload=t,n!=null&&(o.callback=n),t=it(e,o,l),t!==null&&(Fe(t,e,l,r),Er(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=oe(),l=st(e),o=Be(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=it(e,o,l),t!==null&&(Fe(t,e,l,r),Er(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=oe(),r=st(e),l=Be(n,r);l.tag=2,t!=null&&(l.callback=t),t=it(e,l,r),t!==null&&(Fe(t,e,r,n),Er(t,e,r))}};function wu(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Mn(n,r)||!Mn(l,o):!0}function oa(e,t,n){var r=!1,l=dt,o=t.contextType;return typeof o=="object"&&o!==null?o=xe(o):(l=de(t)?Ct:re.current,r=t.contextTypes,o=(r=r!=null)?Zt(e,l):dt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=il,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Su(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&il.enqueueReplaceState(t,t.state,null)}function xo(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs=la,fi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=xe(o):(o=de(t)?Ct:re.current,l.context=Zt(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Eo(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&il.enqueueReplaceState(l,l.state,null),Wr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function hn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(g(309));var r=n.stateNode}if(!r)throw Error(g(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var u=l.refs;u===la&&(u=l.refs={}),i===null?delete u[o]:u[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(g(284));if(!n._owner)throw Error(g(290,e))}return e}function fr(e,t){throw e=Object.prototype.toString.call(t),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ku(e){var t=e._init;return t(e._payload)}function ia(e){function t(d,a){if(e){var f=d.deletions;f===null?(d.deletions=[a],d.flags|=16):f.push(a)}}function n(d,a){if(!e)return null;for(;a!==null;)t(d,a),a=a.sibling;return null}function r(d,a){for(d=new Map;a!==null;)a.key!==null?d.set(a.key,a):d.set(a.index,a),a=a.sibling;return d}function l(d,a){return d=at(d,a),d.index=0,d.sibling=null,d}function o(d,a,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<a?(d.flags|=2,a):f):(d.flags|=2,a)):(d.flags|=1048576,a)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function u(d,a,f,y){return a===null||a.tag!==6?(a=$l(f,d.mode,y),a.return=d,a):(a=l(a,f),a.return=d,a)}function s(d,a,f,y){var E=f.type;return E===Dt?m(d,a,f.props.children,y,f.key):a!==null&&(a.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Je&&ku(E)===a.type)?(y=l(a,f.props),y.ref=hn(d,a,f),y.return=d,y):(y=Nr(f.type,f.key,f.props,null,d.mode,y),y.ref=hn(d,a,f),y.return=d,y)}function c(d,a,f,y){return a===null||a.tag!==4||a.stateNode.containerInfo!==f.containerInfo||a.stateNode.implementation!==f.implementation?(a=Bl(f,d.mode,y),a.return=d,a):(a=l(a,f.children||[]),a.return=d,a)}function m(d,a,f,y,E){return a===null||a.tag!==7?(a=xt(f,d.mode,y,E),a.return=d,a):(a=l(a,f),a.return=d,a)}function h(d,a,f){if(typeof a=="string"&&a!==""||typeof a=="number")return a=$l(""+a,d.mode,f),a.return=d,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case tr:return f=Nr(a.type,a.key,a.props,null,d.mode,f),f.ref=hn(d,null,a),f.return=d,f;case Ft:return a=Bl(a,d.mode,f),a.return=d,a;case Je:var y=a._init;return h(d,y(a._payload),f)}if(vn(a)||an(a))return a=xt(a,d.mode,f,null),a.return=d,a;fr(d,a)}return null}function p(d,a,f,y){var E=a!==null?a.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return E!==null?null:u(d,a,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case tr:return f.key===E?s(d,a,f,y):null;case Ft:return f.key===E?c(d,a,f,y):null;case Je:return E=f._init,p(d,a,E(f._payload),y)}if(vn(f)||an(f))return E!==null?null:m(d,a,f,y,null);fr(d,f)}return null}function v(d,a,f,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(f)||null,u(a,d,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case tr:return d=d.get(y.key===null?f:y.key)||null,s(a,d,y,E);case Ft:return d=d.get(y.key===null?f:y.key)||null,c(a,d,y,E);case Je:var C=y._init;return v(d,a,f,C(y._payload),E)}if(vn(y)||an(y))return d=d.get(f)||null,m(a,d,y,E,null);fr(a,y)}return null}function w(d,a,f,y){for(var E=null,C=null,_=a,P=a=0,$=null;_!==null&&P<f.length;P++){_.index>P?($=_,_=null):$=_.sibling;var z=p(d,_,f[P],y);if(z===null){_===null&&(_=$);break}e&&_&&z.alternate===null&&t(d,_),a=o(z,a,P),C===null?E=z:C.sibling=z,C=z,_=$}if(P===f.length)return n(d,_),M&&gt(d,P),E;if(_===null){for(;P<f.length;P++)_=h(d,f[P],y),_!==null&&(a=o(_,a,P),C===null?E=_:C.sibling=_,C=_);return M&&gt(d,P),E}for(_=r(d,_);P<f.length;P++)$=v(_,d,P,f[P],y),$!==null&&(e&&$.alternate!==null&&_.delete($.key===null?P:$.key),a=o($,a,P),C===null?E=$:C.sibling=$,C=$);return e&&_.forEach(function(_e){return t(d,_e)}),M&&gt(d,P),E}function S(d,a,f,y){var E=an(f);if(typeof E!="function")throw Error(g(150));if(f=E.call(f),f==null)throw Error(g(151));for(var C=E=null,_=a,P=a=0,$=null,z=f.next();_!==null&&!z.done;P++,z=f.next()){_.index>P?($=_,_=null):$=_.sibling;var _e=p(d,_,z.value,y);if(_e===null){_===null&&(_=$);break}e&&_&&_e.alternate===null&&t(d,_),a=o(_e,a,P),C===null?E=_e:C.sibling=_e,C=_e,_=$}if(z.done)return n(d,_),M&&gt(d,P),E;if(_===null){for(;!z.done;P++,z=f.next())z=h(d,z.value,y),z!==null&&(a=o(z,a,P),C===null?E=z:C.sibling=z,C=z);return M&&gt(d,P),E}for(_=r(d,_);!z.done;P++,z=f.next())z=v(_,d,P,z.value,y),z!==null&&(e&&z.alternate!==null&&_.delete(z.key===null?P:z.key),a=o(z,a,P),C===null?E=z:C.sibling=z,C=z);return e&&_.forEach(function(un){return t(d,un)}),M&&gt(d,P),E}function O(d,a,f,y){if(typeof f=="object"&&f!==null&&f.type===Dt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case tr:e:{for(var E=f.key,C=a;C!==null;){if(C.key===E){if(E=f.type,E===Dt){if(C.tag===7){n(d,C.sibling),a=l(C,f.props.children),a.return=d,d=a;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Je&&ku(E)===C.type){n(d,C.sibling),a=l(C,f.props),a.ref=hn(d,C,f),a.return=d,d=a;break e}n(d,C);break}else t(d,C);C=C.sibling}f.type===Dt?(a=xt(f.props.children,d.mode,y,f.key),a.return=d,d=a):(y=Nr(f.type,f.key,f.props,null,d.mode,y),y.ref=hn(d,a,f),y.return=d,d=y)}return i(d);case Ft:e:{for(C=f.key;a!==null;){if(a.key===C)if(a.tag===4&&a.stateNode.containerInfo===f.containerInfo&&a.stateNode.implementation===f.implementation){n(d,a.sibling),a=l(a,f.children||[]),a.return=d,d=a;break e}else{n(d,a);break}else t(d,a);a=a.sibling}a=Bl(f,d.mode,y),a.return=d,d=a}return i(d);case Je:return C=f._init,O(d,a,C(f._payload),y)}if(vn(f))return w(d,a,f,y);if(an(f))return S(d,a,f,y);fr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,a!==null&&a.tag===6?(n(d,a.sibling),a=l(a,f),a.return=d,d=a):(n(d,a),a=$l(f,d.mode,y),a.return=d,d=a),i(d)):n(d,a)}return O}var bt=ia(!0),ua=ia(!1),Zn={},Ue=pt(Zn),Vn=pt(Zn),$n=pt(Zn);function kt(e){if(e===Zn)throw Error(g(174));return e}function pi(e,t){switch(D($n,t),D(Vn,e),D(Ue,Zn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:eo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=eo(t,e)}j(Ue),D(Ue,t)}function en(){j(Ue),j(Vn),j($n)}function sa(e){kt($n.current);var t=kt(Ue.current),n=eo(t,e.type);t!==n&&(D(Vn,e),D(Ue,n))}function hi(e){Vn.current===e&&(j(Ue),j(Vn))}var U=pt(0);function Qr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ol=[];function mi(){for(var e=0;e<Ol.length;e++)Ol[e]._workInProgressVersionPrimary=null;Ol.length=0}var xr=Ke.ReactCurrentDispatcher,Ml=Ke.ReactCurrentBatchConfig,Pt=0,A=null,G=null,X=null,Gr=!1,Pn=!1,Bn=0,Zd=0;function ee(){throw Error(g(321))}function yi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function gi(e,t,n,r,l,o){if(Pt=o,A=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xr.current=e===null||e.memoizedState===null?tf:nf,e=n(r,l),Pn){o=0;do{if(Pn=!1,Bn=0,25<=o)throw Error(g(301));o+=1,X=G=null,t.updateQueue=null,xr.current=rf,e=n(r,l)}while(Pn)}if(xr.current=Yr,t=G!==null&&G.next!==null,Pt=0,X=G=A=null,Gr=!1,t)throw Error(g(300));return e}function vi(){var e=Bn!==0;return Bn=0,e}function je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?A.memoizedState=X=e:X=X.next=e,X}function Ce(){if(G===null){var e=A.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=X===null?A.memoizedState:X.next;if(t!==null)X=t,G=e;else{if(e===null)throw Error(g(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},X===null?A.memoizedState=X=e:X=X.next=e}return X}function Wn(e,t){return typeof t=="function"?t(e):t}function Ul(e){var t=Ce(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=G,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var u=i=null,s=null,c=o;do{var m=c.lane;if((Pt&m)===m)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(u=s=h,i=r):s=s.next=h,A.lanes|=m,Tt|=m}c=c.next}while(c!==null&&c!==o);s===null?i=r:s.next=u,De(r,t.memoizedState)||(ae=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,A.lanes|=o,Tt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Al(e){var t=Ce(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);De(o,t.memoizedState)||(ae=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function aa(){}function ca(e,t){var n=A,r=Ce(),l=t(),o=!De(r.memoizedState,l);if(o&&(r.memoizedState=l,ae=!0),r=r.queue,wi(pa.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||X!==null&&X.memoizedState.tag&1){if(n.flags|=2048,Qn(9,fa.bind(null,n,r,l,t),void 0,null),J===null)throw Error(g(349));Pt&30||da(n,t,l)}return l}function da(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=A.updateQueue,t===null?(t={lastEffect:null,stores:null},A.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fa(e,t,n,r){t.value=n,t.getSnapshot=r,ha(t)&&ma(e)}function pa(e,t,n){return n(function(){ha(t)&&ma(e)})}function ha(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function ma(e){var t=Ge(e,1);t!==null&&Fe(t,e,1,-1)}function Eu(e){var t=je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:e},t.queue=e,e=e.dispatch=ef.bind(null,A,e),[t.memoizedState,e]}function Qn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=A.updateQueue,t===null?(t={lastEffect:null,stores:null},A.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ya(){return Ce().memoizedState}function Cr(e,t,n,r){var l=je();A.flags|=e,l.memoizedState=Qn(1|t,n,void 0,r===void 0?null:r)}function ul(e,t,n,r){var l=Ce();r=r===void 0?null:r;var o=void 0;if(G!==null){var i=G.memoizedState;if(o=i.destroy,r!==null&&yi(r,i.deps)){l.memoizedState=Qn(t,n,o,r);return}}A.flags|=e,l.memoizedState=Qn(1|t,n,o,r)}function xu(e,t){return Cr(8390656,8,e,t)}function wi(e,t){return ul(2048,8,e,t)}function ga(e,t){return ul(4,2,e,t)}function va(e,t){return ul(4,4,e,t)}function wa(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sa(e,t,n){return n=n!=null?n.concat([e]):null,ul(4,4,wa.bind(null,t,e),n)}function Si(){}function ka(e,t){var n=Ce();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ea(e,t){var n=Ce();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function xa(e,t,n){return Pt&21?(De(n,t)||(n=Ps(),A.lanes|=n,Tt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ae=!0),e.memoizedState=n)}function qd(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Ml.transition;Ml.transition={};try{e(!1),t()}finally{F=n,Ml.transition=r}}function Ca(){return Ce().memoizedState}function bd(e,t,n){var r=st(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_a(e))Pa(t,n);else if(n=na(e,t,n,r),n!==null){var l=oe();Fe(n,e,r,l),Ta(n,t,r)}}function ef(e,t,n){var r=st(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_a(e))Pa(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,u=o(i,n);if(l.hasEagerState=!0,l.eagerState=u,De(u,i)){var s=t.interleaved;s===null?(l.next=l,di(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=na(e,t,l,r),n!==null&&(l=oe(),Fe(n,e,r,l),Ta(n,t,r))}}function _a(e){var t=e.alternate;return e===A||t!==null&&t===A}function Pa(e,t){Pn=Gr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ta(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zo(e,n)}}var Yr={readContext:xe,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useInsertionEffect:ee,useLayoutEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useMutableSource:ee,useSyncExternalStore:ee,useId:ee,unstable_isNewReconciler:!1},tf={readContext:xe,useCallback:function(e,t){return je().memoizedState=[e,t===void 0?null:t],e},useContext:xe,useEffect:xu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Cr(4194308,4,wa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cr(4,2,e,t)},useMemo:function(e,t){var n=je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=bd.bind(null,A,e),[r.memoizedState,e]},useRef:function(e){var t=je();return e={current:e},t.memoizedState=e},useState:Eu,useDebugValue:Si,useDeferredValue:function(e){return je().memoizedState=e},useTransition:function(){var e=Eu(!1),t=e[0];return e=qd.bind(null,e[1]),je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=A,l=je();if(M){if(n===void 0)throw Error(g(407));n=n()}else{if(n=t(),J===null)throw Error(g(349));Pt&30||da(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,xu(pa.bind(null,r,o,e),[e]),r.flags|=2048,Qn(9,fa.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=je(),t=J.identifierPrefix;if(M){var n=$e,r=Ve;n=(r&~(1<<32-Le(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Bn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Zd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},nf={readContext:xe,useCallback:ka,useContext:xe,useEffect:wi,useImperativeHandle:Sa,useInsertionEffect:ga,useLayoutEffect:va,useMemo:Ea,useReducer:Ul,useRef:ya,useState:function(){return Ul(Wn)},useDebugValue:Si,useDeferredValue:function(e){var t=Ce();return xa(t,G.memoizedState,e)},useTransition:function(){var e=Ul(Wn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:aa,useSyncExternalStore:ca,useId:Ca,unstable_isNewReconciler:!1},rf={readContext:xe,useCallback:ka,useContext:xe,useEffect:wi,useImperativeHandle:Sa,useInsertionEffect:ga,useLayoutEffect:va,useMemo:Ea,useReducer:Al,useRef:ya,useState:function(){return Al(Wn)},useDebugValue:Si,useDeferredValue:function(e){var t=Ce();return G===null?t.memoizedState=e:xa(t,G.memoizedState,e)},useTransition:function(){var e=Al(Wn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:aa,useSyncExternalStore:ca,useId:Ca,unstable_isNewReconciler:!1};function tn(e,t){try{var n="",r=t;do n+=Lc(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Hl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Co(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var lf=typeof WeakMap=="function"?WeakMap:Map;function Na(e,t,n){n=Be(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xr||(Xr=!0,Ro=r),Co(e,t)},n}function Ia(e,t,n){n=Be(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Co(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Co(e,t),typeof r!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Cu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new lf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=wf.bind(null,e,t,n),t.then(e,e))}function _u(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Pu(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Be(-1,1),t.tag=2,it(n,t,1))),n.lanes|=1),e)}var of=Ke.ReactCurrentOwner,ae=!1;function le(e,t,n,r){t.child=e===null?ua(t,null,n,r):bt(t,e.child,n,r)}function Tu(e,t,n,r,l){n=n.render;var o=t.ref;return Kt(t,l),r=gi(e,t,n,r,o,l),n=vi(),e!==null&&!ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ye(e,t,l)):(M&&n&&oi(t),t.flags|=1,le(e,t,r,l),t.child)}function Nu(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Ni(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,za(e,t,o,r,l)):(e=Nr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Mn,n(i,r)&&e.ref===t.ref)return Ye(e,t,l)}return t.flags|=1,e=at(o,r),e.ref=t.ref,e.return=t,t.child=e}function za(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Mn(o,r)&&e.ref===t.ref)if(ae=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ae=!0);else return t.lanes=e.lanes,Ye(e,t,l)}return _o(e,t,n,r,l)}function La(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(Bt,pe),pe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(Bt,pe),pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,D(Bt,pe),pe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,D(Bt,pe),pe|=r;return le(e,t,l,n),t.child}function Fa(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _o(e,t,n,r,l){var o=de(n)?Ct:re.current;return o=Zt(t,o),Kt(t,l),n=gi(e,t,n,r,o,l),r=vi(),e!==null&&!ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ye(e,t,l)):(M&&r&&oi(t),t.flags|=1,le(e,t,n,l),t.child)}function Iu(e,t,n,r,l){if(de(n)){var o=!0;Ar(t)}else o=!1;if(Kt(t,l),t.stateNode===null)_r(e,t),oa(t,n,r),xo(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,u=t.memoizedProps;i.props=u;var s=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=xe(c):(c=de(n)?Ct:re.current,c=Zt(t,c));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||s!==c)&&Su(t,i,r,c),Ze=!1;var p=t.memoizedState;i.state=p,Wr(t,r,i,l),s=t.memoizedState,u!==r||p!==s||ce.current||Ze?(typeof m=="function"&&(Eo(t,n,m,r),s=t.memoizedState),(u=Ze||wu(t,n,u,r,p,s,c))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,ra(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:Te(t.type,u),i.props=c,h=t.pendingProps,p=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=xe(s):(s=de(n)?Ct:re.current,s=Zt(t,s));var v=n.getDerivedStateFromProps;(m=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==h||p!==s)&&Su(t,i,r,s),Ze=!1,p=t.memoizedState,i.state=p,Wr(t,r,i,l);var w=t.memoizedState;u!==h||p!==w||ce.current||Ze?(typeof v=="function"&&(Eo(t,n,v,r),w=t.memoizedState),(c=Ze||wu(t,n,c,r,p,w,s)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),i.props=r,i.state=w,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Po(e,t,n,r,o,l)}function Po(e,t,n,r,l,o){Fa(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&hu(t,n,!1),Ye(e,t,o);r=t.stateNode,of.current=t;var u=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=bt(t,e.child,null,o),t.child=bt(t,null,u,o)):le(e,t,u,o),t.memoizedState=r.state,l&&hu(t,n,!0),t.child}function Da(e){var t=e.stateNode;t.pendingContext?pu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pu(e,t.context,!1),pi(e,t.containerInfo)}function zu(e,t,n,r,l){return qt(),ui(l),t.flags|=256,le(e,t,n,r),t.child}var To={dehydrated:null,treeContext:null,retryLane:0};function No(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ra(e,t,n){var r=t.pendingProps,l=U.current,o=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),D(U,l&1),e===null)return So(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=cl(i,r,0,null),e=xt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=No(n),t.memoizedState=To,e):ki(t,i));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return uf(e,t,i,r,u,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,u=l.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=at(l,s),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?o=at(u,o):(o=xt(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?No(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=To,r}return o=e.child,e=o.sibling,r=at(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ki(e,t){return t=cl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function pr(e,t,n,r){return r!==null&&ui(r),bt(t,e.child,null,n),e=ki(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function uf(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Hl(Error(g(422))),pr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=cl({mode:"visible",children:r.children},l,0,null),o=xt(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&bt(t,e.child,null,i),t.child.memoizedState=No(i),t.memoizedState=To,o);if(!(t.mode&1))return pr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(g(419)),r=Hl(o,r,void 0),pr(e,t,i,r)}if(u=(i&e.childLanes)!==0,ae||u){if(r=J,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ge(e,l),Fe(r,e,l,-1))}return Ti(),r=Hl(Error(g(421))),pr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Sf.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,he=ot(l.nextSibling),me=t,M=!0,Ie=null,e!==null&&(we[Se++]=Ve,we[Se++]=$e,we[Se++]=_t,Ve=e.id,$e=e.overflow,_t=t),t=ki(t,r.children),t.flags|=4096,t)}function Lu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ko(e.return,t,n)}function Vl(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function ja(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(le(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lu(e,n,t);else if(e.tag===19)Lu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(U,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Qr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Vl(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Qr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Vl(t,!0,n,null,o);break;case"together":Vl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _r(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ye(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(g(153));if(t.child!==null){for(e=t.child,n=at(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=at(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sf(e,t,n){switch(t.tag){case 3:Da(t),qt();break;case 5:sa(t);break;case 1:de(t.type)&&Ar(t);break;case 4:pi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;D($r,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Ra(e,t,n):(D(U,U.current&1),e=Ye(e,t,n),e!==null?e.sibling:null);D(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ja(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,La(e,t,n)}return Ye(e,t,n)}var Oa,Io,Ma,Ua;Oa=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Io=function(){};Ma=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,kt(Ue.current);var o=null;switch(n){case"input":l=Jl(e,l),r=Jl(e,r),o=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":l=bl(e,l),r=bl(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Mr)}to(n,r);var i;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var u=l[c];for(i in u)u.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(zn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(u=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==u&&(s!=null||u!=null))if(c==="style")if(u){for(i in u)!u.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&u[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(zn.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&R("scroll",e),o||u===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Ua=function(e,t,n,r){n!==r&&(t.flags|=4)};function mn(e,t){if(!M)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function af(e,t,n){var r=t.pendingProps;switch(ii(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(t),null;case 1:return de(t.type)&&Ur(),te(t),null;case 3:return r=t.stateNode,en(),j(ce),j(re),mi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(dr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ie!==null&&(Mo(Ie),Ie=null))),Io(e,t),te(t),null;case 5:hi(t);var l=kt($n.current);if(n=t.type,e!==null&&t.stateNode!=null)Ma(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(g(166));return te(t),null}if(e=kt(Ue.current),dr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Oe]=t,r[Hn]=o,e=(t.mode&1)!==0,n){case"dialog":R("cancel",r),R("close",r);break;case"iframe":case"object":case"embed":R("load",r);break;case"video":case"audio":for(l=0;l<Sn.length;l++)R(Sn[l],r);break;case"source":R("error",r);break;case"img":case"image":case"link":R("error",r),R("load",r);break;case"details":R("toggle",r);break;case"input":Hi(r,o),R("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},R("invalid",r);break;case"textarea":$i(r,o),R("invalid",r)}to(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var u=o[i];i==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&cr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&cr(r.textContent,u,e),l=["children",""+u]):zn.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&R("scroll",r)}switch(n){case"input":nr(r),Vi(r,o,!0);break;case"textarea":nr(r),Bi(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Mr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ds(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Oe]=t,e[Hn]=r,Oa(e,t,!1,!1),t.stateNode=e;e:{switch(i=no(n,r),n){case"dialog":R("cancel",e),R("close",e),l=r;break;case"iframe":case"object":case"embed":R("load",e),l=r;break;case"video":case"audio":for(l=0;l<Sn.length;l++)R(Sn[l],e);l=r;break;case"source":R("error",e),l=r;break;case"img":case"image":case"link":R("error",e),R("load",e),l=r;break;case"details":R("toggle",e),l=r;break;case"input":Hi(e,r),l=Jl(e,r),R("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),R("invalid",e);break;case"textarea":$i(e,r),l=bl(e,r),R("invalid",e);break;default:l=r}to(n,l),u=l;for(o in u)if(u.hasOwnProperty(o)){var s=u[o];o==="style"?hs(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&fs(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Ln(e,s):typeof s=="number"&&Ln(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(zn.hasOwnProperty(o)?s!=null&&o==="onScroll"&&R("scroll",e):s!=null&&Qo(e,o,s,i))}switch(n){case"input":nr(e),Vi(e,r,!1);break;case"textarea":nr(e),Bi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ct(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Wt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Wt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Mr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return te(t),null;case 6:if(e&&t.stateNode!=null)Ua(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(g(166));if(n=kt($n.current),kt(Ue.current),dr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Oe]=t,(o=r.nodeValue!==n)&&(e=me,e!==null))switch(e.tag){case 3:cr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&cr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Oe]=t,t.stateNode=r}return te(t),null;case 13:if(j(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(M&&he!==null&&t.mode&1&&!(t.flags&128))ta(),qt(),t.flags|=98560,o=!1;else if(o=dr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(g(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(g(317));o[Oe]=t}else qt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;te(t),o=!1}else Ie!==null&&(Mo(Ie),Ie=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?Y===0&&(Y=3):Ti())),t.updateQueue!==null&&(t.flags|=4),te(t),null);case 4:return en(),Io(e,t),e===null&&Un(t.stateNode.containerInfo),te(t),null;case 10:return ci(t.type._context),te(t),null;case 17:return de(t.type)&&Ur(),te(t),null;case 19:if(j(U),o=t.memoizedState,o===null)return te(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)mn(o,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Qr(e),i!==null){for(t.flags|=128,mn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(U,U.current&1|2),t.child}e=e.sibling}o.tail!==null&&W()>nn&&(t.flags|=128,r=!0,mn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Qr(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!M)return te(t),null}else 2*W()-o.renderingStartTime>nn&&n!==1073741824&&(t.flags|=128,r=!0,mn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=W(),t.sibling=null,n=U.current,D(U,r?n&1|2:n&1),t):(te(t),null);case 22:case 23:return Pi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?pe&1073741824&&(te(t),t.subtreeFlags&6&&(t.flags|=8192)):te(t),null;case 24:return null;case 25:return null}throw Error(g(156,t.tag))}function cf(e,t){switch(ii(t),t.tag){case 1:return de(t.type)&&Ur(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return en(),j(ce),j(re),mi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return hi(t),null;case 13:if(j(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(g(340));qt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(U),null;case 4:return en(),null;case 10:return ci(t.type._context),null;case 22:case 23:return Pi(),null;case 24:return null;default:return null}}var hr=!1,ne=!1,df=typeof WeakSet=="function"?WeakSet:Set,k=null;function $t(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function zo(e,t,n){try{n()}catch(r){V(e,t,r)}}var Fu=!1;function ff(e,t){if(po=Rr,e=$s(),li(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,u=-1,s=-1,c=0,m=0,h=e,p=null;t:for(;;){for(var v;h!==n||l!==0&&h.nodeType!==3||(u=i+l),h!==o||r!==0&&h.nodeType!==3||(s=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(v=h.firstChild)!==null;)p=h,h=v;for(;;){if(h===e)break t;if(p===n&&++c===l&&(u=i),p===o&&++m===r&&(s=i),(v=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=v}n=u===-1||s===-1?null:{start:u,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ho={focusedElem:e,selectionRange:n},Rr=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,O=w.memoizedState,d=t.stateNode,a=d.getSnapshotBeforeUpdate(t.elementType===t.type?S:Te(t.type,S),O);d.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(y){V(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return w=Fu,Fu=!1,w}function Tn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&zo(t,n,o)}l=l.next}while(l!==r)}}function sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Lo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Aa(e){var t=e.alternate;t!==null&&(e.alternate=null,Aa(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Oe],delete t[Hn],delete t[go],delete t[Yd],delete t[Kd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ha(e){return e.tag===5||e.tag===3||e.tag===4}function Du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ha(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Mr));else if(r!==4&&(e=e.child,e!==null))for(Fo(e,t,n),e=e.sibling;e!==null;)Fo(e,t,n),e=e.sibling}function Do(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Do(e,t,n),e=e.sibling;e!==null;)Do(e,t,n),e=e.sibling}var Z=null,Ne=!1;function Xe(e,t,n){for(n=n.child;n!==null;)Va(e,t,n),n=n.sibling}function Va(e,t,n){if(Me&&typeof Me.onCommitFiberUnmount=="function")try{Me.onCommitFiberUnmount(el,n)}catch{}switch(n.tag){case 5:ne||$t(n,t);case 6:var r=Z,l=Ne;Z=null,Xe(e,t,n),Z=r,Ne=l,Z!==null&&(Ne?(e=Z,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Z.removeChild(n.stateNode));break;case 18:Z!==null&&(Ne?(e=Z,n=n.stateNode,e.nodeType===8?Rl(e.parentNode,n):e.nodeType===1&&Rl(e,n),jn(e)):Rl(Z,n.stateNode));break;case 4:r=Z,l=Ne,Z=n.stateNode.containerInfo,Ne=!0,Xe(e,t,n),Z=r,Ne=l;break;case 0:case 11:case 14:case 15:if(!ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&zo(n,t,i),l=l.next}while(l!==r)}Xe(e,t,n);break;case 1:if(!ne&&($t(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){V(n,t,u)}Xe(e,t,n);break;case 21:Xe(e,t,n);break;case 22:n.mode&1?(ne=(r=ne)||n.memoizedState!==null,Xe(e,t,n),ne=r):Xe(e,t,n);break;default:Xe(e,t,n)}}function Ru(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new df),t.forEach(function(r){var l=kf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,u=i;e:for(;u!==null;){switch(u.tag){case 5:Z=u.stateNode,Ne=!1;break e;case 3:Z=u.stateNode.containerInfo,Ne=!0;break e;case 4:Z=u.stateNode.containerInfo,Ne=!0;break e}u=u.return}if(Z===null)throw Error(g(160));Va(o,i,l),Z=null,Ne=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){V(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$a(t,e),t=t.sibling}function $a(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),Re(e),r&4){try{Tn(3,e,e.return),sl(3,e)}catch(S){V(e,e.return,S)}try{Tn(5,e,e.return)}catch(S){V(e,e.return,S)}}break;case 1:Pe(t,e),Re(e),r&512&&n!==null&&$t(n,n.return);break;case 5:if(Pe(t,e),Re(e),r&512&&n!==null&&$t(n,n.return),e.flags&32){var l=e.stateNode;try{Ln(l,"")}catch(S){V(e,e.return,S)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&as(l,o),no(u,i);var c=no(u,o);for(i=0;i<s.length;i+=2){var m=s[i],h=s[i+1];m==="style"?hs(l,h):m==="dangerouslySetInnerHTML"?fs(l,h):m==="children"?Ln(l,h):Qo(l,m,h,c)}switch(u){case"input":Zl(l,o);break;case"textarea":cs(l,o);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Wt(l,!!o.multiple,v,!1):p!==!!o.multiple&&(o.defaultValue!=null?Wt(l,!!o.multiple,o.defaultValue,!0):Wt(l,!!o.multiple,o.multiple?[]:"",!1))}l[Hn]=o}catch(S){V(e,e.return,S)}}break;case 6:if(Pe(t,e),Re(e),r&4){if(e.stateNode===null)throw Error(g(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(S){V(e,e.return,S)}}break;case 3:if(Pe(t,e),Re(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{jn(t.containerInfo)}catch(S){V(e,e.return,S)}break;case 4:Pe(t,e),Re(e);break;case 13:Pe(t,e),Re(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ci=W())),r&4&&Ru(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ne=(c=ne)||m,Pe(t,e),ne=c):Pe(t,e),Re(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(k=e,m=e.child;m!==null;){for(h=k=m;k!==null;){switch(p=k,v=p.child,p.tag){case 0:case 11:case 14:case 15:Tn(4,p,p.return);break;case 1:$t(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(S){V(r,n,S)}}break;case 5:$t(p,p.return);break;case 22:if(p.memoizedState!==null){Ou(h);continue}}v!==null?(v.return=p,k=v):Ou(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{l=h.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=h.stateNode,s=h.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=ps("display",i))}catch(S){V(e,e.return,S)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){V(e,e.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Pe(t,e),Re(e),r&4&&Ru(e);break;case 21:break;default:Pe(t,e),Re(e)}}function Re(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ha(n)){var r=n;break e}n=n.return}throw Error(g(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Ln(l,""),r.flags&=-33);var o=Du(e);Do(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,u=Du(e);Fo(e,u,i);break;default:throw Error(g(161))}}catch(s){V(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pf(e,t,n){k=e,Ba(e)}function Ba(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var l=k,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||hr;if(!i){var u=l.alternate,s=u!==null&&u.memoizedState!==null||ne;u=hr;var c=ne;if(hr=i,(ne=s)&&!c)for(k=l;k!==null;)i=k,s=i.child,i.tag===22&&i.memoizedState!==null?Mu(l):s!==null?(s.return=i,k=s):Mu(l);for(;o!==null;)k=o,Ba(o),o=o.sibling;k=l,hr=u,ne=c}ju(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,k=o):ju(e)}}function ju(e){for(;k!==null;){var t=k;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ne||sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ne)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Te(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&vu(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}vu(t,i,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&jn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}ne||t.flags&512&&Lo(t)}catch(p){V(t,t.return,p)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function Ou(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function Mu(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{sl(4,t)}catch(s){V(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){V(t,l,s)}}var o=t.return;try{Lo(t)}catch(s){V(t,o,s)}break;case 5:var i=t.return;try{Lo(t)}catch(s){V(t,i,s)}}}catch(s){V(t,t.return,s)}if(t===e){k=null;break}var u=t.sibling;if(u!==null){u.return=t.return,k=u;break}k=t.return}}var hf=Math.ceil,Kr=Ke.ReactCurrentDispatcher,Ei=Ke.ReactCurrentOwner,Ee=Ke.ReactCurrentBatchConfig,L=0,J=null,Q=null,q=0,pe=0,Bt=pt(0),Y=0,Gn=null,Tt=0,al=0,xi=0,Nn=null,se=null,Ci=0,nn=1/0,Ae=null,Xr=!1,Ro=null,ut=null,mr=!1,tt=null,Jr=0,In=0,jo=null,Pr=-1,Tr=0;function oe(){return L&6?W():Pr!==-1?Pr:Pr=W()}function st(e){return e.mode&1?L&2&&q!==0?q&-q:Jd.transition!==null?(Tr===0&&(Tr=Ps()),Tr):(e=F,e!==0||(e=window.event,e=e===void 0?16:Ds(e.type)),e):1}function Fe(e,t,n,r){if(50<In)throw In=0,jo=null,Error(g(185));Kn(e,n,r),(!(L&2)||e!==J)&&(e===J&&(!(L&2)&&(al|=n),Y===4&&be(e,q)),fe(e,r),n===1&&L===0&&!(t.mode&1)&&(nn=W()+500,ol&&ht()))}function fe(e,t){var n=e.callbackNode;Jc(e,t);var r=Dr(e,e===J?q:0);if(r===0)n!==null&&Gi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Gi(n),t===1)e.tag===0?Xd(Uu.bind(null,e)):qs(Uu.bind(null,e)),Qd(function(){!(L&6)&&ht()}),n=null;else{switch(Ts(r)){case 1:n=Jo;break;case 4:n=Cs;break;case 16:n=Fr;break;case 536870912:n=_s;break;default:n=Fr}n=Za(n,Wa.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wa(e,t){if(Pr=-1,Tr=0,L&6)throw Error(g(327));var n=e.callbackNode;if(Xt()&&e.callbackNode!==n)return null;var r=Dr(e,e===J?q:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Zr(e,r);else{t=r;var l=L;L|=2;var o=Ga();(J!==e||q!==t)&&(Ae=null,nn=W()+500,Et(e,t));do try{gf();break}catch(u){Qa(e,u)}while(!0);ai(),Kr.current=o,L=l,Q!==null?t=0:(J=null,q=0,t=Y)}if(t!==0){if(t===2&&(l=uo(e),l!==0&&(r=l,t=Oo(e,l))),t===1)throw n=Gn,Et(e,0),be(e,r),fe(e,W()),n;if(t===6)be(e,r);else{if(l=e.current.alternate,!(r&30)&&!mf(l)&&(t=Zr(e,r),t===2&&(o=uo(e),o!==0&&(r=o,t=Oo(e,o))),t===1))throw n=Gn,Et(e,0),be(e,r),fe(e,W()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(g(345));case 2:vt(e,se,Ae);break;case 3:if(be(e,r),(r&130023424)===r&&(t=Ci+500-W(),10<t)){if(Dr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){oe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=yo(vt.bind(null,e,se,Ae),t);break}vt(e,se,Ae);break;case 4:if(be(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Le(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=W()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hf(r/1960))-r,10<r){e.timeoutHandle=yo(vt.bind(null,e,se,Ae),r);break}vt(e,se,Ae);break;case 5:vt(e,se,Ae);break;default:throw Error(g(329))}}}return fe(e,W()),e.callbackNode===n?Wa.bind(null,e):null}function Oo(e,t){var n=Nn;return e.current.memoizedState.isDehydrated&&(Et(e,t).flags|=256),e=Zr(e,t),e!==2&&(t=se,se=n,t!==null&&Mo(t)),e}function Mo(e){se===null?se=e:se.push.apply(se,e)}function mf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!De(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function be(e,t){for(t&=~xi,t&=~al,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Le(t),r=1<<n;e[n]=-1,t&=~r}}function Uu(e){if(L&6)throw Error(g(327));Xt();var t=Dr(e,0);if(!(t&1))return fe(e,W()),null;var n=Zr(e,t);if(e.tag!==0&&n===2){var r=uo(e);r!==0&&(t=r,n=Oo(e,r))}if(n===1)throw n=Gn,Et(e,0),be(e,t),fe(e,W()),n;if(n===6)throw Error(g(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vt(e,se,Ae),fe(e,W()),null}function _i(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(nn=W()+500,ol&&ht())}}function Nt(e){tt!==null&&tt.tag===0&&!(L&6)&&Xt();var t=L;L|=1;var n=Ee.transition,r=F;try{if(Ee.transition=null,F=1,e)return e()}finally{F=r,Ee.transition=n,L=t,!(L&6)&&ht()}}function Pi(){pe=Bt.current,j(Bt)}function Et(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wd(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(ii(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ur();break;case 3:en(),j(ce),j(re),mi();break;case 5:hi(r);break;case 4:en();break;case 13:j(U);break;case 19:j(U);break;case 10:ci(r.type._context);break;case 22:case 23:Pi()}n=n.return}if(J=e,Q=e=at(e.current,null),q=pe=t,Y=0,Gn=null,xi=al=Tt=0,se=Nn=null,St!==null){for(t=0;t<St.length;t++)if(n=St[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}St=null}return e}function Qa(e,t){do{var n=Q;try{if(ai(),xr.current=Yr,Gr){for(var r=A.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Gr=!1}if(Pt=0,X=G=A=null,Pn=!1,Bn=0,Ei.current=null,n===null||n.return===null){Y=1,Gn=t,Q=null;break}e:{var o=e,i=n.return,u=n,s=t;if(t=q,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,m=u,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=_u(i);if(v!==null){v.flags&=-257,Pu(v,i,u,o,t),v.mode&1&&Cu(o,c,t),t=v,s=c;var w=t.updateQueue;if(w===null){var S=new Set;S.add(s),t.updateQueue=S}else w.add(s);break e}else{if(!(t&1)){Cu(o,c,t),Ti();break e}s=Error(g(426))}}else if(M&&u.mode&1){var O=_u(i);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Pu(O,i,u,o,t),ui(tn(s,u));break e}}o=s=tn(s,u),Y!==4&&(Y=2),Nn===null?Nn=[o]:Nn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=Na(o,s,t);gu(o,d);break e;case 1:u=s;var a=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof a.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ut===null||!ut.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=Ia(o,u,t);gu(o,y);break e}}o=o.return}while(o!==null)}Ka(n)}catch(E){t=E,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function Ga(){var e=Kr.current;return Kr.current=Yr,e===null?Yr:e}function Ti(){(Y===0||Y===3||Y===2)&&(Y=4),J===null||!(Tt&268435455)&&!(al&268435455)||be(J,q)}function Zr(e,t){var n=L;L|=2;var r=Ga();(J!==e||q!==t)&&(Ae=null,Et(e,t));do try{yf();break}catch(l){Qa(e,l)}while(!0);if(ai(),L=n,Kr.current=r,Q!==null)throw Error(g(261));return J=null,q=0,Y}function yf(){for(;Q!==null;)Ya(Q)}function gf(){for(;Q!==null&&!Vc();)Ya(Q)}function Ya(e){var t=Ja(e.alternate,e,pe);e.memoizedProps=e.pendingProps,t===null?Ka(e):Q=t,Ei.current=null}function Ka(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cf(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,Q=null;return}}else if(n=af(n,t,pe),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);Y===0&&(Y=5)}function vt(e,t,n){var r=F,l=Ee.transition;try{Ee.transition=null,F=1,vf(e,t,n,r)}finally{Ee.transition=l,F=r}return null}function vf(e,t,n,r){do Xt();while(tt!==null);if(L&6)throw Error(g(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(g(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Zc(e,o),e===J&&(Q=J=null,q=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mr||(mr=!0,Za(Fr,function(){return Xt(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ee.transition,Ee.transition=null;var i=F;F=1;var u=L;L|=4,Ei.current=null,ff(e,n),$a(n,e),Md(ho),Rr=!!po,ho=po=null,e.current=n,pf(n),$c(),L=u,F=i,Ee.transition=o}else e.current=n;if(mr&&(mr=!1,tt=e,Jr=l),o=e.pendingLanes,o===0&&(ut=null),Qc(n.stateNode),fe(e,W()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Xr)throw Xr=!1,e=Ro,Ro=null,e;return Jr&1&&e.tag!==0&&Xt(),o=e.pendingLanes,o&1?e===jo?In++:(In=0,jo=e):In=0,ht(),null}function Xt(){if(tt!==null){var e=Ts(Jr),t=Ee.transition,n=F;try{if(Ee.transition=null,F=16>e?16:e,tt===null)var r=!1;else{if(e=tt,tt=null,Jr=0,L&6)throw Error(g(331));var l=L;for(L|=4,k=e.current;k!==null;){var o=k,i=o.child;if(k.flags&16){var u=o.deletions;if(u!==null){for(var s=0;s<u.length;s++){var c=u[s];for(k=c;k!==null;){var m=k;switch(m.tag){case 0:case 11:case 15:Tn(8,m,o)}var h=m.child;if(h!==null)h.return=m,k=h;else for(;k!==null;){m=k;var p=m.sibling,v=m.return;if(Aa(m),m===c){k=null;break}if(p!==null){p.return=v,k=p;break}k=v}}}var w=o.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var O=S.sibling;S.sibling=null,S=O}while(S!==null)}}k=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,k=i;else e:for(;k!==null;){if(o=k,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Tn(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,k=d;break e}k=o.return}}var a=e.current;for(k=a;k!==null;){i=k;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,k=f;else e:for(i=a;k!==null;){if(u=k,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:sl(9,u)}}catch(E){V(u,u.return,E)}if(u===i){k=null;break e}var y=u.sibling;if(y!==null){y.return=u.return,k=y;break e}k=u.return}}if(L=l,ht(),Me&&typeof Me.onPostCommitFiberRoot=="function")try{Me.onPostCommitFiberRoot(el,e)}catch{}r=!0}return r}finally{F=n,Ee.transition=t}}return!1}function Au(e,t,n){t=tn(n,t),t=Na(e,t,1),e=it(e,t,1),t=oe(),e!==null&&(Kn(e,1,t),fe(e,t))}function V(e,t,n){if(e.tag===3)Au(e,e,n);else for(;t!==null;){if(t.tag===3){Au(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ut===null||!ut.has(r))){e=tn(n,e),e=Ia(t,e,1),t=it(t,e,1),e=oe(),t!==null&&(Kn(t,1,e),fe(t,e));break}}t=t.return}}function wf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=oe(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(q&n)===n&&(Y===4||Y===3&&(q&130023424)===q&&500>W()-Ci?Et(e,0):xi|=n),fe(e,t)}function Xa(e,t){t===0&&(e.mode&1?(t=or,or<<=1,!(or&130023424)&&(or=4194304)):t=1);var n=oe();e=Ge(e,t),e!==null&&(Kn(e,t,n),fe(e,n))}function Sf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xa(e,n)}function kf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(g(314))}r!==null&&r.delete(t),Xa(e,n)}var Ja;Ja=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ce.current)ae=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ae=!1,sf(e,t,n);ae=!!(e.flags&131072)}else ae=!1,M&&t.flags&1048576&&bs(t,Vr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;_r(e,t),e=t.pendingProps;var l=Zt(t,re.current);Kt(t,n),l=gi(null,t,r,e,l,n);var o=vi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,de(r)?(o=!0,Ar(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,fi(t),l.updater=il,t.stateNode=l,l._reactInternals=t,xo(t,r,e,n),t=Po(null,t,r,!0,o,n)):(t.tag=0,M&&o&&oi(t),le(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(_r(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=xf(r),e=Te(r,e),l){case 0:t=_o(null,t,r,e,n);break e;case 1:t=Iu(null,t,r,e,n);break e;case 11:t=Tu(null,t,r,e,n);break e;case 14:t=Nu(null,t,r,Te(r.type,e),n);break e}throw Error(g(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),_o(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Iu(e,t,r,l,n);case 3:e:{if(Da(t),e===null)throw Error(g(387));r=t.pendingProps,o=t.memoizedState,l=o.element,ra(e,t),Wr(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=tn(Error(g(423)),t),t=zu(e,t,r,n,l);break e}else if(r!==l){l=tn(Error(g(424)),t),t=zu(e,t,r,n,l);break e}else for(he=ot(t.stateNode.containerInfo.firstChild),me=t,M=!0,Ie=null,n=ua(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qt(),r===l){t=Ye(e,t,n);break e}le(e,t,r,n)}t=t.child}return t;case 5:return sa(t),e===null&&So(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,mo(r,l)?i=null:o!==null&&mo(r,o)&&(t.flags|=32),Fa(e,t),le(e,t,i,n),t.child;case 6:return e===null&&So(t),null;case 13:return Ra(e,t,n);case 4:return pi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bt(t,null,r,n):le(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Tu(e,t,r,l,n);case 7:return le(e,t,t.pendingProps,n),t.child;case 8:return le(e,t,t.pendingProps.children,n),t.child;case 12:return le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,D($r,r._currentValue),r._currentValue=i,o!==null)if(De(o.value,i)){if(o.children===l.children&&!ce.current){t=Ye(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){i=o.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Be(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?s.next=s:(s.next=m.next,m.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ko(o.return,n,t),u.lanes|=n;break}s=s.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(g(341));i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),ko(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}le(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Kt(t,n),l=xe(l),r=r(l),t.flags|=1,le(e,t,r,n),t.child;case 14:return r=t.type,l=Te(r,t.pendingProps),l=Te(r.type,l),Nu(e,t,r,l,n);case 15:return za(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),_r(e,t),t.tag=1,de(r)?(e=!0,Ar(t)):e=!1,Kt(t,n),oa(t,r,l),xo(t,r,l,n),Po(null,t,r,!0,e,n);case 19:return ja(e,t,n);case 22:return La(e,t,n)}throw Error(g(156,t.tag))};function Za(e,t){return xs(e,t)}function Ef(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ke(e,t,n,r){return new Ef(e,t,n,r)}function Ni(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xf(e){if(typeof e=="function")return Ni(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Yo)return 11;if(e===Ko)return 14}return 2}function at(e,t){var n=e.alternate;return n===null?(n=ke(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Nr(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Ni(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Dt:return xt(n.children,l,o,t);case Go:i=8,l|=8;break;case Gl:return e=ke(12,n,t,l|2),e.elementType=Gl,e.lanes=o,e;case Yl:return e=ke(13,n,t,l),e.elementType=Yl,e.lanes=o,e;case Kl:return e=ke(19,n,t,l),e.elementType=Kl,e.lanes=o,e;case is:return cl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ls:i=10;break e;case os:i=9;break e;case Yo:i=11;break e;case Ko:i=14;break e;case Je:i=16,r=null;break e}throw Error(g(130,e==null?e:typeof e,""))}return t=ke(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function xt(e,t,n,r){return e=ke(7,e,r,t),e.lanes=n,e}function cl(e,t,n,r){return e=ke(22,e,r,t),e.elementType=is,e.lanes=n,e.stateNode={isHidden:!1},e}function $l(e,t,n){return e=ke(6,e,null,t),e.lanes=n,e}function Bl(e,t,n){return t=ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xl(0),this.expirationTimes=xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ii(e,t,n,r,l,o,i,u,s){return e=new Cf(e,t,n,u,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ke(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fi(o),e}function _f(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ft,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qa(e){if(!e)return dt;e=e._reactInternals;e:{if(zt(e)!==e||e.tag!==1)throw Error(g(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(de(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(g(171))}if(e.tag===1){var n=e.type;if(de(n))return Zs(e,n,t)}return t}function ba(e,t,n,r,l,o,i,u,s){return e=Ii(n,r,!0,e,l,o,i,u,s),e.context=qa(null),n=e.current,r=oe(),l=st(n),o=Be(r,l),o.callback=t??null,it(n,o,l),e.current.lanes=l,Kn(e,l,r),fe(e,r),e}function dl(e,t,n,r){var l=t.current,o=oe(),i=st(l);return n=qa(n),t.context===null?t.context=n:t.pendingContext=n,t=Be(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=it(l,t,i),e!==null&&(Fe(e,l,i,o),Er(e,l,i)),i}function qr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zi(e,t){Hu(e,t),(e=e.alternate)&&Hu(e,t)}function Pf(){return null}var ec=typeof reportError=="function"?reportError:function(e){console.error(e)};function Li(e){this._internalRoot=e}fl.prototype.render=Li.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(g(409));dl(e,t,null,null)};fl.prototype.unmount=Li.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nt(function(){dl(null,e,null,null)}),t[Qe]=null}};function fl(e){this._internalRoot=e}fl.prototype.unstable_scheduleHydration=function(e){if(e){var t=zs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qe.length&&t!==0&&t<qe[n].priority;n++);qe.splice(n,0,e),n===0&&Fs(e)}};function Fi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vu(){}function Tf(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=qr(i);o.call(c)}}var i=ba(t,r,e,0,null,!1,!1,"",Vu);return e._reactRootContainer=i,e[Qe]=i.current,Un(e.nodeType===8?e.parentNode:e),Nt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var c=qr(s);u.call(c)}}var s=Ii(e,0,!1,null,null,!1,!1,"",Vu);return e._reactRootContainer=s,e[Qe]=s.current,Un(e.nodeType===8?e.parentNode:e),Nt(function(){dl(t,s,n,r)}),s}function hl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var u=l;l=function(){var s=qr(i);u.call(s)}}dl(t,i,e,l)}else i=Tf(n,t,e,l,r);return qr(i)}Ns=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wn(t.pendingLanes);n!==0&&(Zo(t,n|1),fe(t,W()),!(L&6)&&(nn=W()+500,ht()))}break;case 13:Nt(function(){var r=Ge(e,1);if(r!==null){var l=oe();Fe(r,e,1,l)}}),zi(e,1)}};qo=function(e){if(e.tag===13){var t=Ge(e,134217728);if(t!==null){var n=oe();Fe(t,e,134217728,n)}zi(e,134217728)}};Is=function(e){if(e.tag===13){var t=st(e),n=Ge(e,t);if(n!==null){var r=oe();Fe(n,e,t,r)}zi(e,t)}};zs=function(){return F};Ls=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};lo=function(e,t,n){switch(t){case"input":if(Zl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ll(r);if(!l)throw Error(g(90));ss(r),Zl(r,l)}}}break;case"textarea":cs(e,n);break;case"select":t=n.value,t!=null&&Wt(e,!!n.multiple,t,!1)}};gs=_i;vs=Nt;var Nf={usingClientEntryPoint:!1,Events:[Jn,Mt,ll,ms,ys,_i]},yn={findFiberByHostInstance:wt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},If={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ks(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||Pf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{el=yr.inject(If),Me=yr}catch{}}ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nf;ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fi(t))throw Error(g(200));return _f(e,t,null,n)};ge.createRoot=function(e,t){if(!Fi(e))throw Error(g(299));var n=!1,r="",l=ec;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ii(e,1,!1,null,null,n,!1,r,l),e[Qe]=t.current,Un(e.nodeType===8?e.parentNode:e),new Li(t)};ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=ks(t),e=e===null?null:e.stateNode,e};ge.flushSync=function(e){return Nt(e)};ge.hydrate=function(e,t,n){if(!pl(t))throw Error(g(200));return hl(null,e,t,!0,n)};ge.hydrateRoot=function(e,t,n){if(!Fi(e))throw Error(g(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=ec;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=ba(t,null,e,1,n??null,l,!1,o,i),e[Qe]=t.current,Un(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new fl(t)};ge.render=function(e,t,n){if(!pl(t))throw Error(g(200));return hl(null,e,t,!1,n)};ge.unmountComponentAtNode=function(e){if(!pl(e))throw Error(g(40));return e._reactRootContainer?(Nt(function(){hl(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};ge.unstable_batchedUpdates=_i;ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!pl(n))throw Error(g(200));if(e==null||e._reactInternals===void 0)throw Error(g(38));return hl(e,t,n,!1,r)};ge.version="18.2.0-next-9e3b772b8-20220608";function tc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tc)}catch(e){console.error(e)}}tc(),bu.exports=ge;var zf=bu.exports,$u=zf;Wl.createRoot=$u.createRoot,Wl.hydrateRoot=$u.hydrateRoot;const Lf=[{title:"Git: Configuration and SSH Key Setup",id:"0001",tech:"Git",body:`
            <ol>
                <li>
                    <h2>Configuring Git</h2>
                    <ul>
                        <li>Open a command prompt or terminal on your computer.</li>
                        <li>
                            Set your username using the following command, replacing "Your
                            Name" with your actual name:
                            <br />
                            <code>git config --global user.name "Your Name"</code>
                        </li>
                        <li>
                            Set your email address using the following command, replacing
                            "your.email@example.com" with your actual email address:
                            <br />
                            <code
                                >git config --global user.email your.email@example.com</code
                            >
                        </li>
                        <li>
                            These configurations will be associated with your commits in
                            Git.
                        </li>
                    </ul>
                </li>
                <li>
                    <h2>Setting up an SSH key</h2>
                    <ul>
                        <li>Open a command prompt or terminal on your computer.</li>
                        <li>
                            Run the following command to generate a new SSH key:
                            <br />
                            <code
                                >ssh-keygen -t rsa -b 4096 -C "your.email@example.com"</code
                            >
                            <br />
                            Replace "your.email@example.com" with the same email address you
                            used in the previous step.
                        </li>
                        <li>
                            You will be prompted to choose a location to save the SSH key.
                            Press Enter to accept the default location
                            (UsersYourUsername.sshid_rsa). You can also provide a custom
                            location if desired.
                        </li>
                        <li>
                            Next, you will be prompted to enter a passphrase. You can either
                            enter a passphrase for extra security or press Enter to leave it
                            blank (not recommended).
                        </li>
                        <li>
                            The SSH key pair (a private key and a public key) will be
                            generated and saved in the specified location.
                        </li>
                        <li>
                            Run the following command to start the SSH agent:
                            <br />
                            <code>eval $(ssh-agent -s)</code>
                        </li>
                        <li>
                            Add your private key to the SSH agent by running the following
                            command, replacing the path with the location where you saved
                            the key:
                            <br />
                            <code>ssh-add path	oyourprivatekey</code>
                            <br />
                            For example, if you accepted the default location, the command
                            would be:
                            <br />
                            <code>ssh-add ~/.ssh/id_rsa</code>
                        </li>
                    </ul>
                </li>
              
            </ol>
            `},{title:"Git: Useful Commands",id:"0002",tech:"Git",body:`
            <ul>
                <li>
                    <h2>To display your Git configurations (name and email):</h2>
                    <code>git config --global --list</code>
                    <p>This command will list all the global configurations set in Git.</p>
                </li>
                <li>
                    <h2>To display your Git username:</h2>
                    <code>git config user.name</code>
                    <p>Running this command will show your configured username.</p>
                </li>
                <li>
                    <h2>To display your Git email:</h2>
                    <code>git config user.email</code>
                    <p>This command will display the email address you've configured.</p>
                </li>
                <li>
                    <h2>To display your SSH key fingerprint:</h2>
                    <code>ssh-keygen -lf ~/.ssh/id_rsa.pub</code>
                    <p>
                        This command will show the fingerprint of your SSH key. It can be
                        useful for verifying the correct key is associated with your GitHub
                        account.
                    </p>
                </li>
                <li>
                    <h2>To check the status of your Git repository:</h2>
                    <code>git status</code>
                    <p>
                        Running this command within a Git repository will display
                        information about modified, added, and deleted files, as well as the
                        current branch.
                    </p>
                </li>
                <li>
                    <h2>To display the commit history:</h2>
                    <code>git log</code>
                    <p>
                        This command will show a list of commits in the repository,
                        including the commit message, author, date, and commit hash.
                    </p>
                </li>
                <li>
                    <h2>
                        To display the remote repositories (such as GitHub) configured for
                        your repository:
                    </h2>
                    <code>git remote -v</code>
                    <p>
                        Running this command will list the remote repositories and their
                        associated URLs.
                    </p>
                </li>
            </ul>
            <p>
                Additionally, here are a few more commonly used Git commands:
            </p>
            <ul>
                <li>
                    <h3>Stage changes for commit:</h3>
                    <code>git add</code>
                </li>
                <li>
                    <h3>Create a new commit with the staged changes:</h3>
                    <code>git commit</code>
                </li>
                <li>
                    <h3>Push commits to a remote repository:</h3>
                    <code>git push</code>
                </li>
                <li>
                    <h3>Fetch and merge changes from a remote repository:</h3>
                    <code>git pull</code>
                </li>
                <li>
                    <h3>List, create, or delete branches:</h3>
                    <code>git branch</code>
                </li>
                <li>
                    <h3>Switch branches or restore files from a commit:</h3>
                    <code>git checkout</code>
                </li>
                <li>
                    <h3>Merge changes from one branch into another:</h3>
                    <code>git merge</code>
                </li>
                <li>
                    <h3>Create a local copy of a remote repository:</h3>
                    <code>git clone</code>
                </li>
            </ul>
            `},{title:"General: Code Types",id:"0003",tech:"General",body:`
        <ul>
            <li>
                <strong> Monolithic Code: </strong>
                This term is often used in the context of applications as a
                whole. A monolithic application is built as a single, unified
                unit. Any change to any part of the system requires rebuilding
                and deploying the entire application. This approach contrasts
                with modular or microservices architectures, where different
                functionalities are separated into individual services or
                modules.
            </li>
            <li>
                <strong> Procedural Code: </strong>

                This refers to the programming paradigm based on the concept of
                procedure calls. Procedures (or functions) are blocks of code
                that can be abstracted and called as needed. Procedural
                programming is characterized by a linear and top-down structure,
                where there's a clear sequence of code execution. This contrasts
                with object-oriented programming, where code is organized around
                objects.
            </li>
            <li>
                When code is written in a single file without any clear
                organization, patterns, or modules, it's often just referred to
                as <strong> "spaghetti code" </strong>. This term is informal
                and often used pejoratively, indicating that the code is tangled
                and hard to follow or maintain.
            </li>
            <li>
                Using design patterns like <strong> M-V-C </strong> or
                modularizing the code is recommended for larger projects because
                it offers several benefits, such as improved maintainability,
                easier debugging, and better collaboration among developers.
                However, for very small scripts or quick prototypes, a simple
                linear or procedural approach might be sufficient.
            </li>
        </ul>
        `},{title:"General: Code Refactoring",id:"0004",tech:"General",body:`
        <p>
            Here's a general approach to refactoring for readability and
            optimization:
        </p>
        <p>
            <strong> Modularize the Code: </strong> Group related functionality
            into functions or modules. This makes the code easier to read and
            understand at a glance.
        </p>
        <p>
            <strong> Use Descriptive Variable and Function Names: </strong>
            Names should be self-explanatory. A developer should be able to
            understand the purpose of a variable or function based on its name.
        </p>
        <p>
            <strong> Avoid Magic Values: </strong> Use named constants instead
            of hard-coded values. For instance, instead of directly using a
            string like "actionItems", you can define a constant
            COLLECTION_NAME.
        </p>
        <p>
            <strong> Comments and Documentation: </strong> While the code should
            be as self-explanatory as possible, judicious use of comments can
            help explain the purpose of a piece of code, any intricacies, or
            reasons for specific implementations.
        </p>
        <p>
            <strong> Consistent Formatting: </strong> Ensure consistent
            indentation, use of spaces, and other formatting conventions. This
            makes the code visually clean.
        </p>
        <p>
            <strong> Error Handling: </strong> Ensure that all possible error
            scenarios are handled. This includes not only handling Firestore
            errors but also potential issues like trying to access properties on
            undefined or null.
        </p>
        <p>
            <strong> Optimize for Performance: </strong> While this isn't
            strictly about readability, sometimes refactoring can help improve
            performance. For example, avoid unnecessary DOM updates or Firestore
            reads.
        </p>

        <ol>
            <li>
                <h3>Modularize the Code:</h3>
                <ul>
                    <li>
                        Group related functions together. For instance, all
                        utility functions like generateUniqueId can be placed
                        together. Similarly, group event handlers together.
                    </li>
                    <li>
                        Consider using an IIFE (Immediately Invoked Function
                        Expression) to prevent global namespace pollution.
                    </li>
                </ul>
            </li>
            <li>
                <h3>Use Descriptive Variable and Function Names:</h3>
                <ul>
                    <li>
                        Most of your variable names are descriptive, but ensure
                        this consistency throughout. For instance, names like
                        newItemInputNode give a clear understanding of what the
                        variable is for.
                    </li>
                </ul>
            </li>
            <li>
                <h3>Avoid Magic Values:</h3>
                <ul>
                    <li>
                        For strings or values that are used multiple times,
                        consider defining them as constants at the top of your
                        script. This not only makes the code more readable but
                        also easier to maintain.
                    </li>
                </ul>
            </li>
            <li>
                <h3>Comments and Documentation:</h3>
                <ul>
                    <li>
                        You've done a good job commenting the different sections
                        of your code. Continue this practice, especially for
                        complex logic. Remember, comments should explain the
                        "why" and not the "what" (code itself tells the "what").
                    </li>
                </ul>
            </li>
            <li>
                <h3>Consistent Formatting:</h3>
                <ul>
                    <li>
                        Ensure consistent use of spaces, indentation, and
                        newline breaks. This will make the code easier to scan
                        and read.
                    </li>
                </ul>
            </li>
            <li>
                <h3>Error Handling:</h3>
                <ul>
                    <li>
                        You've incorporated error handling for Firestore
                        operations. Ensure that other potential points of
                        failure, like DOM manipulations or array operations, are
                        also handled gracefully.
                    </li>
                </ul>
            </li>
            <li>
                <h3>Optimize for Performance:</h3>
                <ul>
                    <li>
                        If there are repetitive DOM lookups, consider caching
                        the element in a variable.
                    </li>
                    <li>
                        For operations that could be resource-intensive or
                        repeated often, consider if there are more efficient
                        ways to achieve the same result.
                    </li>
                </ul>
            </li>
            <li>
                <h3>Additional Suggestions:</h3>
                <ul>
                    <li>
                        Event Delegation: Instead of attaching event listeners
                        to each item, consider using event delegation. This
                        means you attach an event listener to a parent element
                        and use logic inside the handler to determine which
                        child was clicked. This is especially useful for lists
                        where items can be dynamically added or removed.
                    </li>
                    <li>
                        Data Manipulation: When dealing with arrays like
                        actionItems, consider using functional programming
                        methods like map, filter, and reduce for
                        transformations. They make the code more readable and
                        declarative.
                    </li>
                </ul>
            </li>
        </ol>
        `},{title:"General: Error Handling",id:"0005",tech:"General",body:`
        <p>
            Proper error handling is crucial to ensure that your application
            behaves predictably and provides useful feedback, even when
            unexpected scenarios occur.
        </p>
        <p>
            Here are some specific areas in your code that could benefit from
            improved error handling:
        </p>
        <h3>DOM Element References:</h3>
        <p>
            When querying for DOM elements, there's a chance that an element
            might not be found (e.g., if there's a typo in the ID or class name,
            or if the HTML structure changes). For instance:
        </p>
        <code>
            const newItemInputNode = document.getElementById('newItemInput');
        </code>
        <p>
            Before using newItemInputNode, you might want to check if it's not
            null:
            <code>
                if (!newItemInputNode) { console.error("Couldn't find the input
                element with ID 'newItemInput'"); return; }
            </code>
        </p>
        <h3>Event Handlers:</h3>
        <p>
            Event handlers can sometimes be sources of unexpected behavior,
            especially when making assumptions about the event object or the
            state of the application. Consider wrapping the body of event
            handlers in try/catch to capture any unforeseen issues:
        </p>
        <code>
            function handleSomeEvent(event) { try { // ... event handling logic
            } catch (error) { console.error("Error handling the event:", error);
            } }
        </code>
        <h3>Array or Object Manipulations:</h3>
        <p>
            When accessing properties on objects or manipulating arrays, ensure
            you check for existence or length before proceeding. For instance,
            before accessing someArray[0], you might check if someArray.length >
            0.
        </p>
        <h3>Feedback to Users:</h3>
        <p>
            While logging errors to the console is useful during development,
            end users will likely not check the console. Consider providing
            feedback to users when errors occur, either via alerts, UI
            notifications, or other visual cues.
        </p>
        <h3>External Libraries or APIs:</h3>
        <p>
            If you integrate external libraries or APIs in the future, ensure
            you handle potential failures or inconsistencies in their behavior.
        </p>
        <h3>Asynchronous Operations:</h3>
        <p>
            For asynchronous operations, especially promises, ensure you handle
            both the success and failure cases. The .catch() method on promises
            or the catch block for async/await is crucial.
        </p>
        `},{title:"JavaScript: Function Types",id:"0006",tech:"JavaScript",body:`
        <p>
            In JavaScript, functions are blocks of code that can be defined and
            executed when called upon. They are used to perform specific tasks
            or calculations and are an essential part of the language. The
            syntax of JavaScript functions consists of three main parts:
        </p>
        <h3>Function Declaration:</h3>
        <p>
            The most common and traditional way to define a function is using
            the function declaration. It has the following syntax:
        </p>
        <code
            >function functionName(parameters) {<br />
            // Function body (code block)<br />
            // This is where the function&#x27;s logic resides<br />
            // It performs the desired operations when the function is called<br />
            return someValue; // Optional, used to return a result<br />
            }</code
        >
        <p>Example:</p>
        <code
            >function add(a, b) {<br />
            return a + b;<br />
            }</code
        >
        <h3>Function Expression:</h3>
        <p>
            In JavaScript, functions are also treated as first-class objects,
            which means they can be assigned to variables. This is known as a
            function expression. It has the following syntax:
        </p>
        <code>
            const functionName = function(parameters) {<br />
            // Function body (code block)<br />
            return someValue; // Optional, used to return a result<br />
            };
        </code>
        <p>Example:</p>
        <code>
            const subtract = function(a, b) {<br />
            return a - b;<br />
            };<br />
        </code>
        <h3>Arrow Function Expression:</h3>
        <p>
            Introduced in ECMAScript 6 (ES6), arrow functions provide a more
            concise syntax for defining functions, especially when the function
            is short. They also have some differences in how they handle the
            <strong>'this'</strong> keyword compared to regular functions. The
            syntax for an arrow function is as follows:
        </p>
        <code>
            const functionName = (parameters) =&gt; {<br />
            // Function body (code block)<br />
            return someValue; // Optional, used to return a result<br />
            };<br />
        </code>
        <p>Example:</p>
        <code>
            const multiply = (a, b) =&gt; {<br />
            return a * b;<br />
            };<br />
        </code>
        <h3>Differences between these three methods:</h3>
        <strong>Hoisting:</strong>
        <p>
            Function declarations are hoisted, meaning you can call them before
            their actual definition in the code.
        </p>
        <p>
            Function expressions and arrow functions are not hoisted, so you
            must define them before calling.
        </p>
        <strong>'this' context:</strong>
        <p>
            In regular function declarations and expressions, the value of
            <strong>'this'</strong> is dynamically determined based on how the
            function is called. It can vary depending on the context.
        </p>
        <p>
            In arrow functions, <strong>'this'</strong> is lexically scoped,
            which means it takes the value of <strong>'this'</strong> from its
            enclosing function or scope.
        </p>
        <strong>Syntax length:</strong>
        <p>
            Arrow functions provide a more concise syntax, especially for
            one-liner functions.
        </p>
        <p>
            Which method to use depends on the situation. Function declarations
            are generally used for named functions, whereas function expressions
            and arrow functions are often used for anonymous functions or when
            you need to pass functions as arguments to other functions (e.g., in
            higher-order functions).
        </p>
        <h3>Differences:</h3>
        <p>
            The main difference lies in when you define the function in your
            code:
        </p>
        <h3>Function Declaration:</h3>
        <p>
            Function declarations are hoisted, which means they are available
            throughout the scope they are defined in, even before the actual
            declaration in the code.
        </p>
        <p>
            You can call a function declared using the function keyword at any
            point in your code, even before the line where the function is
            declared.
        </p>
        <p>Example:</p>
        <code>
            // Calling the &#x27;add&#x27; function before its declaration<br />
            const result = add(5, 10);<br />
            console.log(result); // Output: 15<br />
            <br />
            // Function declaration<br />
            function add(a, b) {<br />
            return a + b;<br />
            }
        </code>
        <h3>Function Expression:</h3>
        <p>
            Function expressions are not hoisted, so you need to define them
            before calling them.
        </p>
        <p>
            If you try to call an expressed function before its definition, you
            will get an error.
        </p>
        <p>Example:</p>
        <code>
            // This will cause an error: &quot;TypeError: subtract is not a
            function&quot;<br />
            const result = subtract(10, 5);<br />
            <br />
            // Function expression<br />
            const subtract = function(a, b) {<br />
            return a - b;<br />
            };
        </code>
        <p>
            To avoid errors with function expressions, make sure you define the
            function before you attempt to call it.
        </p>
        <h3>Arrow Function Expression:</h3>
        <p>
            Like function expressions, arrow functions are also not hoisted, so
            they should be defined before calling.
        </p>
        <p>
            The same rule applies here: define the arrow function before calling
            it.
        </p>
        <p>Example:</p>
        <code>
            // This will cause an error: &quot;TypeError: multiply is not a
            function&quot; <br />
            const result = multiply(2, 3);<br />
            // Arrow function expression<br />
            const multiply = (a, b) =&gt; {<br />
            return a * b;<br />
            };
        </code>
        <p>
            So, the importance of expressing a function before calling it
            applies to both function expressions and arrow functions, as you
            need to ensure the function is defined and available in memory at
            the time of the call.
        </p>
        `},{title:"JavaScript: Functions IIFE",id:"0007",tech:"JavaScript",body:`
        <p>
            An Immediately Invoked Function Expression (IIFE, pronounced as
            "iffy") is a JavaScript function that runs as soon as it is defined.
            It's a design pattern that's particularly useful in JavaScript when
            you want to create a new scope to avoid polluting the global
            namespace. Why use an IIFE?
        </p>
        <p>
            Avoid Global Namespace Pollution: JavaScript has a global namespace
            where everything defined outside of a function lives. If you have
            multiple scripts or large applications, there's a risk of
            overwriting or misusing variables/functions if they share the same
            names. An IIFE provides a way to encapsulate your code, creating a
            private scope, thus avoiding any unintentional interactions with
            other scripts.
        </p>
        <p>
            Data Privacy: Since the code inside an IIFE is in its own scope, it
            provides data privacy. Variables and functions defined inside the
            IIFE cannot be accessed from outside it. How does an IIFE look?
        </p>
        <p>Here's the basic syntax of an IIFE:</p>
        <code> (function() { // Your code here })(); </code>
        <p>You can also pass arguments to an IIFE:</p>
        <code>
            (function(window, document) { // Your code here })(window,
            document);
        </code>
        <p>How to use an IIFE in your code?</p>
        <p>
            For your application, you can wrap your entire script inside an
            IIFE. By doing this, any variables or functions you define won't be
            added to the global namespace, but your event listeners and other
            functionalities will still work as expected because they're still
            executed immediately.
        </p>
        <code>
            (function() { <br />
            // Constants and Global Variables <br />
            // ... <br />
            // DOM Elements <br />
            // ... <br />
            // Utility Functions <br />
            // ... <br />
            // Event Handlers <br />
            // ...<br />
            // Main <br />
            // ... <br />
            })();
        </code>
        <p>
            By wrapping your code in an IIFE, you're ensuring that you don't
            accidentally introduce conflicts with other scripts or libraries
            that might be included on the same page.
        </p>
        <p>
            Do note that while IIFEs are a great way to avoid global namespace
            pollution, modern JavaScript development often uses tools and
            techniques like modules, bundlers (e.g., Webpack, Rollup), and
            transpilers (e.g., Babel) to manage and isolate code. However, for
            smaller applications or scripts, an IIFE is a simple and effective
            solution.
        </p>
        `},{title:"JavaScript: Generate Unique ID",id:"0008",tech:"JavaScript",body:`
        <p>
            There are several approaches you can take to generate unique IDs for
            your app elements. Here's a breakdown:
        </p>
        <h3>Firestore's Built-in IDs:</h3>
        <p>
            Firestore itself can generate unique IDs when you create a document
            without specifying an ID. These IDs are longer than 10 characters
            but are guaranteed to be unique within a collection.
        </p>
        <code>
            let newDocRef = db.collection('customers').doc(); <br />
            let uniqueID = newDocRef.id; // This gives you a unique ID generated
            by Firestore
        </code>
        <h3>Shortid Library:</h3>
        <p>
            Shortid is a popular library that creates amazingly short
            non-sequential URL-friendly unique IDs. Perfect for URL slugs,
            MongoDB, and Redis keys, among others.
        </p>
        <p>Installation:</p>
        <code> npm install shortid</code>
        <p>Usage:</p>
        <code>
            const shortid = require('shortid'); <br />
            console.log(shortid.generate()); // Produces a short unique ID
        </code>
        <h3>Nano ID:</h3>
        <p>
            Nano ID is another library that is a size-efficient URL-friendly
            unique string ID generator.
        </p>
        <p>Installation:</p>
        <code> npm install nanoid </code>
        <p>Usage:</p>
        <code>
            const { nanoid } = require('nanoid'); <br />
            const id = nanoid(10); // Produces a 10-character unique ID
        </code>
        <h3>UUID:</h3>
        <p>
            UUID library assists to generate long unique IDs in a format of
            "a449e3ec-a602-4020-abeb-91f680a0128d", that might work for as a
            strong password for majority of applications.
        </p>
        <p>Installation:</p>
        <code>npm install uuid</code>
        <p>Usage:</p>
        <code>
            import { v4 as uuidv4 } from "uuid";<br />
            uuidv4();
        </code>
        <h3>Custom Function:</h3>
        <p>If you want to roll out your own function, here's a simple one:</p>
        <code>
            function generateUID(length) { <br />
            return [...Array(length)].map(() => (~~(Math.random() *
            36)).toString(36)).join(''); <br />
            } console.log(generateUID(10)); // Produces a 10-character unique ID
        </code>
        <p>
            This function generates an ID of a given length using numbers and
            lowercase letters.
        </p>
        `},{title:"Node.js: Installation (macOS)",id:"0009",tech:"Node.js",body:`
        <p>
            Visit the official Node.js website at
            <a href="https://nodejs.org/en/">https://nodejs.org/en/</a> in your
            web browser.
        </p>
        <p>
            On the homepage, you'll see two download options: LTS (Long-Term
            Support) and Current. For most users, it's recommended to download
            the LTS version as it provides a more stable and reliable
            environment. Click on the "LTS" button to download the macOS
            installer.
        </p>
        <p>
            Once the installer is downloaded, double-click on it to launch the
            installation package.
        </p>
        <p>
            Follow the prompts in the installation package and accept the
            license agreement. Leave the default settings as they are unless you
            have specific requirements.
        </p>
        <p>
            The installer will copy the necessary files and set up Node.js on
            your macOS system.
        </p>
        <p>
            Once the installation is complete, open the Terminal application.
            You can find it by going to Applications → Utilities → Terminal.
        </p>
        <p>
            In the Terminal, type the following command to verify the
            installation:
        </p>
        <pre><code>node -v</code></pre>
        <p>
            If you see the version number, it means Node.js is installed
            correctly.
        </p>
        <p>
            Additionally, you can also check the version of npm by running the
            following command in the Terminal:
        </p>
        <pre><code>npm -v</code></pre>
        <p>This will display the version of npm installed on your system.</p>
        `},{title:"Node.js: Installation (Windows)",id:"0010",tech:"Node.js",body:`
        <p>
            Visit the official Node.js website at
            <a href="https://nodejs.org/en/">https://nodejs.org/en/</a> in your
            web browser.
        </p>
        <p>
            On the homepage, you'll see two download options: LTS (Long-Term
            Support) and Current. For most users, it's recommended to download
            the LTS version as it provides a more stable and reliable
            environment. Click on the "LTS" button to download the installer.
        </p>
        <p>
            Once the installer is downloaded, double-click on it to launch the
            installation wizard.
        </p>
        <p>
            In the installation wizard, follow the prompts and accept the
            license agreement. Leave the default settings as they are unless you
            have specific requirements.
        </p>
        <p>
            On the "Select components" screen, make sure the checkboxes next to
            "Node.js runtime" and "npm package manager" are selected. You can
            also choose to install additional tools if needed.
        </p>
        <p>
            Choose the installation location where you want Node.js to be
            installed. By default, it will be installed in the "Program Files"
            folder.
        </p>
        <p>
            Click the "Next" button and proceed with the installation. The
            installer will copy the necessary files and set up Node.js on your
            computer.
        </p>
        <p>
            Once the installation is complete, open the Command Prompt and type
            the following command to verify the installation:
        </p>
        <pre><code>node -v</code></pre>
        <p>
            If you see the version number, it means Node.js is installed
            correctly.
        </p>
        <p>
            Additionally, you can also check the version of npm by running the
            following command in the Command Prompt:
        </p>
        <pre><code>npm -v</code></pre>
        <p>This will display the version of npm installed on your system.</p>
        `},{title:"Parcel: Installing and Running Parcel in Project Directory",id:"0011",tech:"Parcel",body:`
            <ol>
                <li>
                    <strong>Step 1: Initialize an npm project</strong>
                    <p>
                        Open your terminal or command prompt and navigate to
                        your project directory:
                    </p>
                    <pre><code>cd /path/to/your/project</code></pre>
                    <p>
                        Run the following command to initialize a new npm
                        project:
                    </p>
                    <pre><code>npm init -y</code></pre>
                </li>

                <li>
                    <strong
                        >Step 2: Install Parcel as a development
                        dependency</strong
                    >
                    <p>
                        After navigating to your project directory, install
                        Parcel by running the following command:
                    </p>
                    <pre><code>npm install parcel-bundler --save-dev</code></pre>
                </li>

                <li>
                    <strong>Step 3: Create project files</strong>
                    <p>
                        Create an HTML file (e.g., <code>index.html</code>) in
                        your project directory. Add your HTML, CSS, and
                        JavaScript code to the appropriate files.
                    </p>
                </li>

                <li>
                    <strong>Step 4: Configure package.json</strong>
                    <p>
                        Open the <code>package.json</code> file in a text
                        editor. Add the following line to the
                        <code>scripts</code> section:
                    </p>
                    <pre><code>"build": "parcel build src/index.html"</code></pre>
                </li>

                <li>
                    <strong>Step 5: Start the Parcel server</strong>
                    <p>
                        To start the Parcel server and bundle your project
                        files, use the following command:
                    </p>
                    <pre><code>npx parcel src/index.html</code></pre>
                    <p>
                        Replace <code>src/index.html</code> with the path to
                        your entry HTML file if it's located in a different
                        directory.
                    </p>
                </li>

                <li>
                    <strong>Step 6: View your project</strong>
                    <p>
                        The server will start, and you should see output
                        indicating the server is running at
                        <code>http://localhost:1234</code> (or a different port
                        if 1234 is already in use). Open your web browser and
                        visit the URL to see your project running.
                    </p>
                </li>
            </ol>
            <p>
                Remember to stop the server when you're done by pressing "Ctrl +
                C" in the terminal or command prompt.
            </p>
        `},{title:"Parcel: Installing and Running Parcel (ver 2)",id:"0012",tech:"Parcel",body:`
            <ol>
                <li>
                    <strong>Step 1: Initialize an npm project</strong>
                    <p>
                        Open your terminal or command prompt and navigate to
                        your project directory:
                    </p>
                    <pre><code>cd /path/to/your/project</code></pre>
                    <p>
                        Run the following command to initialize a new npm
                        project:
                    </p>
                    <pre><code>npm init -y</code></pre>
                </li>

                <li>
                    <strong
                        >Step 2: Install Parcel as a development
                        dependency</strong
                    >
                    <p>
                        After navigating to your project directory, install
                        Parcel v2 by running the following command:
                    </p>
                    <pre><code>npm install parcel --save-dev</code></pre>
                </li>

                <li>
                    <strong>Step 3: Create project files</strong>
                    <p>
                        Create an HTML file (e.g., <code>index.html</code>) in
                        your project directory. Add your HTML, CSS, and
                        JavaScript code to the appropriate files.
                    </p>
                </li>

                <li>
                    <strong>Step 4: Configure package.json</strong>
                    <p>
                        Open the <code>package.json</code> file in a text
                        editor. You can add one of the following lines to the
                        <code>scripts</code> section for building your project:
                    </p>
                    <pre><code>"build": "parcel build src/index.html"</code></pre>
                    <p>or, for more advanced configurations:</p>
                    <pre><code>"build": "parcel build --no-source-maps --dist-dir prod"</code></pre>
                    <p>
                        The first command is a basic build, while the second
                        disables source maps and outputs to a directory named
                        <code>prod</code>.
                    </p>
                </li>

                <li>
                    <strong>Step 5: Start the Parcel server</strong>
                    <p>
                        To start the Parcel server and bundle your project
                        files, use the following command:
                    </p>
                    <pre><code>npm run start</code></pre>
                    <p>
                        This command will start the development server using the
                        entry file you specified in the
                        <code>package.json</code> scripts.
                    </p>
                </li>

                <li>
                    <strong>Step 6: View your project</strong>
                    <p>
                        The server will start, and you should see output
                        indicating the server is running at
                        <code>http://localhost:1234</code> (or a different port
                        if 1234 is already in use). Open your web browser and
                        visit the URL to see your project running.
                    </p>
                </li>
            </ol>

            <p>
                Remember to stop the server when you're done by pressing "Ctrl +
                C" in the terminal or command prompt.
            </p>
            <br />
            <strong>GitHub Hosting Suggestions</strong>
            <p>
                For hosting at GitHub Pages use 'docs' folder for production
                files AND check references (should be
                href="./index.19b52dcd.css" instead of
                href="/index.19b52dcd.css")
            </p>
            <p>
                To solve the issue while building production files you may use:
            </p>
            <p>for Parcel v.1</p>
            <code>
                "scripts": { "build": "parcel build src/index.html --public-url
                ./ --out-dir docs" }
            </code>
            <p>for Parcel v.2</p>
            <code>
                "scripts": { "build": "npx parcel build src/index.html
                --public-url ./ --dist-dir docs" }
            </code>
            <p>After modifying the script, simply run:</p>
            <code>npm run build</code>
        `},{title:"Parcel: Reset",id:"0013",tech:"Parcel",body:`
        <p>
            You can manually delete the .parcel-cache folder in your project
            directory to clear the cache. The .parcel-cache folder stores cached
            data used by Parcel during the build process. By deleting it, Parcel
            will regenerate the cache when you run the build or start commands
            again.
        </p>
        <p>To delete the .parcel-cache folder, follow these steps:</p>
        <p>Close the current running Parcel server, if any.</p>
        <p>
            Navigate to your project directory using the terminal or file
            explorer.
        </p>
        <p>
            Locate the .parcel-cache folder, which is typically located in the
            root of your project directory.
        </p>
        <p>
            Delete the .parcel-cache folder. You can do this manually using your
            file explorer or use the terminal with the following command:
        </p>
        <code> rm -rf .parcel-cache </code>
        <p>If you're on Windows, you can use the rmdir command:</p>
        <code> rmdir /s /q .parcel-cache </code>
        <p>
            After deleting the .parcel-cache folder, you can try running the npm
            run start command again to see if the issue is resolved.
        </p>
        <p>
            Manually deleting the .parcel-cache folder should not cause any
            issues, as Parcel will recreate it as needed during the build
            process.
        </p>
        `},{title:"VS Code: Installation",id:"0020",tech:"VS Code",body:`
        <ol>
          <li>
            <p>
              Go to the official VS Code website: 
              <a href="https://code.visualstudio.com/" target="_blank">https://code.visualstudio.com/</a>
            </p>
          </li>
          <li>
            <p>
              Click on the "Download for [Your Operating System]" button. For example, if you're using Windows, click on "Download for Windows".
            </p>
          </li>
          <li>
            <p>
              Once the download is complete, run the installer.
            </p>
          </li>
          <li>
            <p>
              Follow the instructions in the installer to complete the installation process.
            </p>
          </li>
          <li>
            <p>
              After the installation is finished, launch Visual Studio Code.
            </p>
          </li>
        </ol>
        `}];function Ff({itemTitle:e}){return ze.jsx("li",{className:"list-item",children:ze.jsx("button",{className:"list-item-btn",children:e})})}function Df({articles:e}){return ze.jsx("ul",{id:"csList",className:"cs-list",children:e.map(t=>ze.jsx(Ff,{itemTitle:t.title},t.id))})}function Rf(){return ze.jsx(ze.Fragment,{children:ze.jsxs("div",{className:"container",children:[ze.jsx("h1",{children:"WebDev Cheat Sheets"}),ze.jsx(Df,{articles:Lf})]})})}Wl.createRoot(document.getElementById("root")).render(ze.jsx(wc.StrictMode,{children:ze.jsx(Rf,{})}));
