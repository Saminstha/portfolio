(function(){const T=document.createElement("link").relList;if(T&&T.supports&&T.supports("modulepreload"))return;for(const O of document.querySelectorAll('link[rel="modulepreload"]'))m(O);new MutationObserver(O=>{for(const C of O)if(C.type==="childList")for(const k of C.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&m(k)}).observe(document,{childList:!0,subtree:!0});function A(O){const C={};return O.integrity&&(C.integrity=O.integrity),O.referrerPolicy&&(C.referrerPolicy=O.referrerPolicy),O.crossOrigin==="use-credentials"?C.credentials="include":O.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function m(O){if(O.ep)return;O.ep=!0;const C=A(O);fetch(O.href,C)}})();var ff={exports:{}},zn={};var b0;function o1(){if(b0)return zn;b0=1;var h=Symbol.for("react.transitional.element"),T=Symbol.for("react.fragment");function A(m,O,C){var k=null;if(C!==void 0&&(k=""+C),O.key!==void 0&&(k=""+O.key),"key"in O){C={};for(var q in O)q!=="key"&&(C[q]=O[q])}else C=O;return O=C.ref,{$$typeof:h,type:m,key:k,ref:O!==void 0?O:null,props:C}}return zn.Fragment=T,zn.jsx=A,zn.jsxs=A,zn}var v0;function s1(){return v0||(v0=1,ff.exports=o1()),ff.exports}var f=s1(),of={exports:{}},X={};var x0;function r1(){if(x0)return X;x0=1;var h=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),k=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),et=Symbol.iterator;function Ot(r){return r===null||typeof r!="object"?null:(r=et&&r[et]||r["@@iterator"],typeof r=="function"?r:null)}var Mt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yt=Object.assign,Ol={};function $t(r,E,_){this.props=r,this.context=E,this.refs=Ol,this.updater=_||Mt}$t.prototype.isReactComponent={},$t.prototype.setState=function(r,E){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,E,"setState")},$t.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Fl(){}Fl.prototype=$t.prototype;function wt(r,E,_){this.props=r,this.context=E,this.refs=Ol,this.updater=_||Mt}var fl=wt.prototype=new Fl;fl.constructor=wt,yt(fl,$t.prototype),fl.isPureReactComponent=!0;var jl=Array.isArray;function Xt(){}var $={H:null,A:null,T:null,S:null},Lt=Object.prototype.hasOwnProperty;function El(r,E,_){var H=_.ref;return{$$typeof:h,type:r,key:E,ref:H!==void 0?H:null,props:_}}function Qe(r,E){return El(r.type,E,r.props)}function Tl(r){return typeof r=="object"&&r!==null&&r.$$typeof===h}function Qt(r){var E={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(_){return E[_]})}var ze=/\/+/g;function Dl(r,E){return typeof r=="object"&&r!==null&&r.key!=null?Qt(""+r.key):E.toString(36)}function vl(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(Xt,Xt):(r.status="pending",r.then(function(E){r.status==="pending"&&(r.status="fulfilled",r.value=E)},function(E){r.status==="pending"&&(r.status="rejected",r.reason=E)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function S(r,E,_,H,L){var V=typeof r;(V==="undefined"||V==="boolean")&&(r=null);var at=!1;if(r===null)at=!0;else switch(V){case"bigint":case"string":case"number":at=!0;break;case"object":switch(r.$$typeof){case h:case T:at=!0;break;case Y:return at=r._init,S(at(r._payload),E,_,H,L)}}if(at)return L=L(r),at=H===""?"."+Dl(r,0):H,jl(L)?(_="",at!=null&&(_=at.replace(ze,"$&/")+"/"),S(L,E,_,"",function(_a){return _a})):L!=null&&(Tl(L)&&(L=Qe(L,_+(L.key==null||r&&r.key===L.key?"":(""+L.key).replace(ze,"$&/")+"/")+at)),E.push(L)),1;at=0;var Yt=H===""?".":H+":";if(jl(r))for(var bt=0;bt<r.length;bt++)H=r[bt],V=Yt+Dl(H,bt),at+=S(H,E,_,V,L);else if(bt=Ot(r),typeof bt=="function")for(r=bt.call(r),bt=0;!(H=r.next()).done;)H=H.value,V=Yt+Dl(H,bt++),at+=S(H,E,_,V,L);else if(V==="object"){if(typeof r.then=="function")return S(vl(r),E,_,H,L);throw E=String(r),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return at}function M(r,E,_){if(r==null)return r;var H=[],L=0;return S(r,H,"","",function(V){return E.call(_,V,L++)}),H}function G(r){if(r._status===-1){var E=r._result;E=E(),E.then(function(_){(r._status===0||r._status===-1)&&(r._status=1,r._result=_)},function(_){(r._status===0||r._status===-1)&&(r._status=2,r._result=_)}),r._status===-1&&(r._status=0,r._result=E)}if(r._status===1)return r._result.default;throw r._result}var ut=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},st={map:M,forEach:function(r,E,_){M(r,function(){E.apply(this,arguments)},_)},count:function(r){var E=0;return M(r,function(){E++}),E},toArray:function(r){return M(r,function(E){return E})||[]},only:function(r){if(!Tl(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return X.Activity=U,X.Children=st,X.Component=$t,X.Fragment=A,X.Profiler=O,X.PureComponent=wt,X.StrictMode=m,X.Suspense=N,X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,X.__COMPILER_RUNTIME={__proto__:null,c:function(r){return $.H.useMemoCache(r)}},X.cache=function(r){return function(){return r.apply(null,arguments)}},X.cacheSignal=function(){return null},X.cloneElement=function(r,E,_){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var H=yt({},r.props),L=r.key;if(E!=null)for(V in E.key!==void 0&&(L=""+E.key),E)!Lt.call(E,V)||V==="key"||V==="__self"||V==="__source"||V==="ref"&&E.ref===void 0||(H[V]=E[V]);var V=arguments.length-2;if(V===1)H.children=_;else if(1<V){for(var at=Array(V),Yt=0;Yt<V;Yt++)at[Yt]=arguments[Yt+2];H.children=at}return El(r.type,L,H)},X.createContext=function(r){return r={$$typeof:k,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:C,_context:r},r},X.createElement=function(r,E,_){var H,L={},V=null;if(E!=null)for(H in E.key!==void 0&&(V=""+E.key),E)Lt.call(E,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(L[H]=E[H]);var at=arguments.length-2;if(at===1)L.children=_;else if(1<at){for(var Yt=Array(at),bt=0;bt<at;bt++)Yt[bt]=arguments[bt+2];L.children=Yt}if(r&&r.defaultProps)for(H in at=r.defaultProps,at)L[H]===void 0&&(L[H]=at[H]);return El(r,V,L)},X.createRef=function(){return{current:null}},X.forwardRef=function(r){return{$$typeof:q,render:r}},X.isValidElement=Tl,X.lazy=function(r){return{$$typeof:Y,_payload:{_status:-1,_result:r},_init:G}},X.memo=function(r,E){return{$$typeof:x,type:r,compare:E===void 0?null:E}},X.startTransition=function(r){var E=$.T,_={};$.T=_;try{var H=r(),L=$.S;L!==null&&L(_,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(Xt,ut)}catch(V){ut(V)}finally{E!==null&&_.types!==null&&(E.types=_.types),$.T=E}},X.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},X.use=function(r){return $.H.use(r)},X.useActionState=function(r,E,_){return $.H.useActionState(r,E,_)},X.useCallback=function(r,E){return $.H.useCallback(r,E)},X.useContext=function(r){return $.H.useContext(r)},X.useDebugValue=function(){},X.useDeferredValue=function(r,E){return $.H.useDeferredValue(r,E)},X.useEffect=function(r,E){return $.H.useEffect(r,E)},X.useEffectEvent=function(r){return $.H.useEffectEvent(r)},X.useId=function(){return $.H.useId()},X.useImperativeHandle=function(r,E,_){return $.H.useImperativeHandle(r,E,_)},X.useInsertionEffect=function(r,E){return $.H.useInsertionEffect(r,E)},X.useLayoutEffect=function(r,E){return $.H.useLayoutEffect(r,E)},X.useMemo=function(r,E){return $.H.useMemo(r,E)},X.useOptimistic=function(r,E){return $.H.useOptimistic(r,E)},X.useReducer=function(r,E,_){return $.H.useReducer(r,E,_)},X.useRef=function(r){return $.H.useRef(r)},X.useState=function(r){return $.H.useState(r)},X.useSyncExternalStore=function(r,E,_){return $.H.useSyncExternalStore(r,E,_)},X.useTransition=function(){return $.H.useTransition()},X.version="19.2.4",X}var S0;function hf(){return S0||(S0=1,of.exports=r1()),of.exports}var Tt=hf(),sf={exports:{}},jn={},rf={exports:{}},df={};var z0;function d1(){return z0||(z0=1,(function(h){function T(S,M){var G=S.length;S.push(M);t:for(;0<G;){var ut=G-1>>>1,st=S[ut];if(0<O(st,M))S[ut]=M,S[G]=st,G=ut;else break t}}function A(S){return S.length===0?null:S[0]}function m(S){if(S.length===0)return null;var M=S[0],G=S.pop();if(G!==M){S[0]=G;t:for(var ut=0,st=S.length,r=st>>>1;ut<r;){var E=2*(ut+1)-1,_=S[E],H=E+1,L=S[H];if(0>O(_,G))H<st&&0>O(L,_)?(S[ut]=L,S[H]=G,ut=H):(S[ut]=_,S[E]=G,ut=E);else if(H<st&&0>O(L,G))S[ut]=L,S[H]=G,ut=H;else break t}}return M}function O(S,M){var G=S.sortIndex-M.sortIndex;return G!==0?G:S.id-M.id}if(h.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var C=performance;h.unstable_now=function(){return C.now()}}else{var k=Date,q=k.now();h.unstable_now=function(){return k.now()-q}}var N=[],x=[],Y=1,U=null,et=3,Ot=!1,Mt=!1,yt=!1,Ol=!1,$t=typeof setTimeout=="function"?setTimeout:null,Fl=typeof clearTimeout=="function"?clearTimeout:null,wt=typeof setImmediate<"u"?setImmediate:null;function fl(S){for(var M=A(x);M!==null;){if(M.callback===null)m(x);else if(M.startTime<=S)m(x),M.sortIndex=M.expirationTime,T(N,M);else break;M=A(x)}}function jl(S){if(yt=!1,fl(S),!Mt)if(A(N)!==null)Mt=!0,Xt||(Xt=!0,Qt());else{var M=A(x);M!==null&&vl(jl,M.startTime-S)}}var Xt=!1,$=-1,Lt=5,El=-1;function Qe(){return Ol?!0:!(h.unstable_now()-El<Lt)}function Tl(){if(Ol=!1,Xt){var S=h.unstable_now();El=S;var M=!0;try{t:{Mt=!1,yt&&(yt=!1,Fl($),$=-1),Ot=!0;var G=et;try{l:{for(fl(S),U=A(N);U!==null&&!(U.expirationTime>S&&Qe());){var ut=U.callback;if(typeof ut=="function"){U.callback=null,et=U.priorityLevel;var st=ut(U.expirationTime<=S);if(S=h.unstable_now(),typeof st=="function"){U.callback=st,fl(S),M=!0;break l}U===A(N)&&m(N),fl(S)}else m(N);U=A(N)}if(U!==null)M=!0;else{var r=A(x);r!==null&&vl(jl,r.startTime-S),M=!1}}break t}finally{U=null,et=G,Ot=!1}M=void 0}}finally{M?Qt():Xt=!1}}}var Qt;if(typeof wt=="function")Qt=function(){wt(Tl)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,Dl=ze.port2;ze.port1.onmessage=Tl,Qt=function(){Dl.postMessage(null)}}else Qt=function(){$t(Tl,0)};function vl(S,M){$=$t(function(){S(h.unstable_now())},M)}h.unstable_IdlePriority=5,h.unstable_ImmediatePriority=1,h.unstable_LowPriority=4,h.unstable_NormalPriority=3,h.unstable_Profiling=null,h.unstable_UserBlockingPriority=2,h.unstable_cancelCallback=function(S){S.callback=null},h.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Lt=0<S?Math.floor(1e3/S):5},h.unstable_getCurrentPriorityLevel=function(){return et},h.unstable_next=function(S){switch(et){case 1:case 2:case 3:var M=3;break;default:M=et}var G=et;et=M;try{return S()}finally{et=G}},h.unstable_requestPaint=function(){Ol=!0},h.unstable_runWithPriority=function(S,M){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var G=et;et=S;try{return M()}finally{et=G}},h.unstable_scheduleCallback=function(S,M,G){var ut=h.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ut+G:ut):G=ut,S){case 1:var st=-1;break;case 2:st=250;break;case 5:st=1073741823;break;case 4:st=1e4;break;default:st=5e3}return st=G+st,S={id:Y++,callback:M,priorityLevel:S,startTime:G,expirationTime:st,sortIndex:-1},G>ut?(S.sortIndex=G,T(x,S),A(N)===null&&S===A(x)&&(yt?(Fl($),$=-1):yt=!0,vl(jl,G-ut))):(S.sortIndex=st,T(N,S),Mt||Ot||(Mt=!0,Xt||(Xt=!0,Qt()))),S},h.unstable_shouldYield=Qe,h.unstable_wrapCallback=function(S){var M=et;return function(){var G=et;et=M;try{return S.apply(this,arguments)}finally{et=G}}}})(df)),df}var j0;function m1(){return j0||(j0=1,rf.exports=d1()),rf.exports}var mf={exports:{}},qt={};var E0;function h1(){if(E0)return qt;E0=1;var h=hf();function T(N){var x="https://react.dev/errors/"+N;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var Y=2;Y<arguments.length;Y++)x+="&args[]="+encodeURIComponent(arguments[Y])}return"Minified React error #"+N+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function A(){}var m={d:{f:A,r:function(){throw Error(T(522))},D:A,C:A,L:A,m:A,X:A,S:A,M:A},p:0,findDOMNode:null},O=Symbol.for("react.portal");function C(N,x,Y){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:U==null?null:""+U,children:N,containerInfo:x,implementation:Y}}var k=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function q(N,x){if(N==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return qt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,qt.createPortal=function(N,x){var Y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(T(299));return C(N,x,null,Y)},qt.flushSync=function(N){var x=k.T,Y=m.p;try{if(k.T=null,m.p=2,N)return N()}finally{k.T=x,m.p=Y,m.d.f()}},qt.preconnect=function(N,x){typeof N=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,m.d.C(N,x))},qt.prefetchDNS=function(N){typeof N=="string"&&m.d.D(N)},qt.preinit=function(N,x){if(typeof N=="string"&&x&&typeof x.as=="string"){var Y=x.as,U=q(Y,x.crossOrigin),et=typeof x.integrity=="string"?x.integrity:void 0,Ot=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;Y==="style"?m.d.S(N,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:U,integrity:et,fetchPriority:Ot}):Y==="script"&&m.d.X(N,{crossOrigin:U,integrity:et,fetchPriority:Ot,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},qt.preinitModule=function(N,x){if(typeof N=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var Y=q(x.as,x.crossOrigin);m.d.M(N,{crossOrigin:Y,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&m.d.M(N)},qt.preload=function(N,x){if(typeof N=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var Y=x.as,U=q(Y,x.crossOrigin);m.d.L(N,Y,{crossOrigin:U,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},qt.preloadModule=function(N,x){if(typeof N=="string")if(x){var Y=q(x.as,x.crossOrigin);m.d.m(N,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:Y,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else m.d.m(N)},qt.requestFormReset=function(N){m.d.r(N)},qt.unstable_batchedUpdates=function(N,x){return N(x)},qt.useFormState=function(N,x,Y){return k.H.useFormState(N,x,Y)},qt.useFormStatus=function(){return k.H.useHostTransitionStatus()},qt.version="19.2.4",qt}var T0;function g1(){if(T0)return mf.exports;T0=1;function h(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h)}catch(T){console.error(T)}}return h(),mf.exports=h1(),mf.exports}var A0;function p1(){if(A0)return jn;A0=1;var h=m1(),T=hf(),A=g1();function m(t){var l="https://react.dev/errors/"+t;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)l+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function O(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function C(t){var l=t,e=t;if(t.alternate)for(;l.return;)l=l.return;else{t=l;do l=t,(l.flags&4098)!==0&&(e=l.return),t=l.return;while(t)}return l.tag===3?e:null}function k(t){if(t.tag===13){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function q(t){if(t.tag===31){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function N(t){if(C(t)!==t)throw Error(m(188))}function x(t){var l=t.alternate;if(!l){if(l=C(t),l===null)throw Error(m(188));return l!==t?null:t}for(var e=t,a=l;;){var n=e.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){e=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===e)return N(n),t;if(i===a)return N(n),l;i=i.sibling}throw Error(m(188))}if(e.return!==a.return)e=n,a=i;else{for(var u=!1,c=n.child;c;){if(c===e){u=!0,e=n,a=i;break}if(c===a){u=!0,a=n,e=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===e){u=!0,e=i,a=n;break}if(c===a){u=!0,a=i,e=n;break}c=c.sibling}if(!u)throw Error(m(189))}}if(e.alternate!==a)throw Error(m(190))}if(e.tag!==3)throw Error(m(188));return e.stateNode.current===e?t:l}function Y(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t;for(t=t.child;t!==null;){if(l=Y(t),l!==null)return l;t=t.sibling}return null}var U=Object.assign,et=Symbol.for("react.element"),Ot=Symbol.for("react.transitional.element"),Mt=Symbol.for("react.portal"),yt=Symbol.for("react.fragment"),Ol=Symbol.for("react.strict_mode"),$t=Symbol.for("react.profiler"),Fl=Symbol.for("react.consumer"),wt=Symbol.for("react.context"),fl=Symbol.for("react.forward_ref"),jl=Symbol.for("react.suspense"),Xt=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),El=Symbol.for("react.activity"),Qe=Symbol.for("react.memo_cache_sentinel"),Tl=Symbol.iterator;function Qt(t){return t===null||typeof t!="object"?null:(t=Tl&&t[Tl]||t["@@iterator"],typeof t=="function"?t:null)}var ze=Symbol.for("react.client.reference");function Dl(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ze?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case yt:return"Fragment";case $t:return"Profiler";case Ol:return"StrictMode";case jl:return"Suspense";case Xt:return"SuspenseList";case El:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Mt:return"Portal";case wt:return t.displayName||"Context";case Fl:return(t._context.displayName||"Context")+".Consumer";case fl:var l=t.render;return t=t.displayName,t||(t=l.displayName||l.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $:return l=t.displayName||null,l!==null?l:Dl(t.type)||"Memo";case Lt:l=t._payload,t=t._init;try{return Dl(t(l))}catch{}}return null}var vl=Array.isArray,S=T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=A.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},ut=[],st=-1;function r(t){return{current:t}}function E(t){0>st||(t.current=ut[st],ut[st]=null,st--)}function _(t,l){st++,ut[st]=t.current,t.current=l}var H=r(null),L=r(null),V=r(null),at=r(null);function Yt(t,l){switch(_(V,l),_(L,t),_(H,null),l.nodeType){case 9:case 11:t=(t=l.documentElement)&&(t=t.namespaceURI)?Xr(t):0;break;default:if(t=l.tagName,l=l.namespaceURI)l=Xr(l),t=Lr(l,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}E(H),_(H,t)}function bt(){E(H),E(L),E(V)}function _a(t){t.memoizedState!==null&&_(at,t);var l=H.current,e=Lr(l,t.type);l!==e&&(_(L,t),_(H,e))}function Tn(t){L.current===t&&(E(H),E(L)),at.current===t&&(E(at),bn._currentValue=G)}var Qi,pf;function je(t){if(Qi===void 0)try{throw Error()}catch(e){var l=e.stack.trim().match(/\n( *(at )?)/);Qi=l&&l[1]||"",pf=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qi+t+pf}var Zi=!1;function Vi(t,l){if(!t||Zi)return"";Zi=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(l){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(b){var y=b}Reflect.construct(t,[],j)}else{try{j.call()}catch(b){y=b}t.call(j.prototype)}}else{try{throw Error()}catch(b){y=b}(j=t())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(b){if(b&&y&&typeof b.stack=="string")return[b.stack,y.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var o=u.split(`
`),p=c.split(`
`);for(n=a=0;a<o.length&&!o[a].includes("DetermineComponentFrameRoot");)a++;for(;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;if(a===o.length||n===p.length)for(a=o.length-1,n=p.length-1;1<=a&&0<=n&&o[a]!==p[n];)n--;for(;1<=a&&0<=n;a--,n--)if(o[a]!==p[n]){if(a!==1||n!==1)do if(a--,n--,0>n||o[a]!==p[n]){var v=`
`+o[a].replace(" at new "," at ");return t.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",t.displayName)),v}while(1<=a&&0<=n);break}}}finally{Zi=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?je(e):""}function G0(t,l){switch(t.tag){case 26:case 27:case 5:return je(t.type);case 16:return je("Lazy");case 13:return t.child!==l&&l!==null?je("Suspense Fallback"):je("Suspense");case 19:return je("SuspenseList");case 0:case 15:return Vi(t.type,!1);case 11:return Vi(t.type.render,!1);case 1:return Vi(t.type,!0);case 31:return je("Activity");default:return""}}function yf(t){try{var l="",e=null;do l+=G0(t,e),e=t,t=t.return;while(t);return l}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ki=Object.prototype.hasOwnProperty,Ji=h.unstable_scheduleCallback,ki=h.unstable_cancelCallback,X0=h.unstable_shouldYield,L0=h.unstable_requestPaint,It=h.unstable_now,Q0=h.unstable_getCurrentPriorityLevel,bf=h.unstable_ImmediatePriority,vf=h.unstable_UserBlockingPriority,An=h.unstable_NormalPriority,Z0=h.unstable_LowPriority,xf=h.unstable_IdlePriority,V0=h.log,K0=h.unstable_setDisableYieldValue,Na=null,Pt=null;function $l(t){if(typeof V0=="function"&&K0(t),Pt&&typeof Pt.setStrictMode=="function")try{Pt.setStrictMode(Na,t)}catch{}}var tl=Math.clz32?Math.clz32:W0,J0=Math.log,k0=Math.LN2;function W0(t){return t>>>=0,t===0?32:31-(J0(t)/k0|0)|0}var Mn=256,_n=262144,Nn=4194304;function Ee(t){var l=t&42;if(l!==0)return l;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function On(t,l,e){var a=t.pendingLanes;if(a===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?n=Ee(a):(u&=c,u!==0?n=Ee(u):e||(e=c&~t,e!==0&&(n=Ee(e))))):(c=a&~i,c!==0?n=Ee(c):u!==0?n=Ee(u):e||(e=a&~t,e!==0&&(n=Ee(e)))),n===0?0:l!==0&&l!==n&&(l&i)===0&&(i=n&-n,e=l&-l,i>=e||i===32&&(e&4194048)!==0)?l:n}function Oa(t,l){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&l)===0}function F0(t,l){switch(t){case 1:case 2:case 4:case 8:case 64:return l+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sf(){var t=Nn;return Nn<<=1,(Nn&62914560)===0&&(Nn=4194304),t}function Wi(t){for(var l=[],e=0;31>e;e++)l.push(t);return l}function Da(t,l){t.pendingLanes|=l,l!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function $0(t,l,e,a,n,i){var u=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var c=t.entanglements,o=t.expirationTimes,p=t.hiddenUpdates;for(e=u&~e;0<e;){var v=31-tl(e),j=1<<v;c[v]=0,o[v]=-1;var y=p[v];if(y!==null)for(p[v]=null,v=0;v<y.length;v++){var b=y[v];b!==null&&(b.lane&=-536870913)}e&=~j}a!==0&&zf(t,a,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~l))}function zf(t,l,e){t.pendingLanes|=l,t.suspendedLanes&=~l;var a=31-tl(l);t.entangledLanes|=l,t.entanglements[a]=t.entanglements[a]|1073741824|e&261930}function jf(t,l){var e=t.entangledLanes|=l;for(t=t.entanglements;e;){var a=31-tl(e),n=1<<a;n&l|t[a]&l&&(t[a]|=l),e&=~n}}function Ef(t,l){var e=l&-l;return e=(e&42)!==0?1:Fi(e),(e&(t.suspendedLanes|l))!==0?0:e}function Fi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function $i(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Tf(){var t=M.p;return t!==0?t:(t=window.event,t===void 0?32:r0(t.type))}function Af(t,l){var e=M.p;try{return M.p=t,l()}finally{M.p=e}}var Il=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Il,Zt="__reactProps$"+Il,Ze="__reactContainer$"+Il,Ii="__reactEvents$"+Il,I0="__reactListeners$"+Il,P0="__reactHandles$"+Il,Mf="__reactResources$"+Il,Ua="__reactMarker$"+Il;function Pi(t){delete t[Dt],delete t[Zt],delete t[Ii],delete t[I0],delete t[P0]}function Ve(t){var l=t[Dt];if(l)return l;for(var e=t.parentNode;e;){if(l=e[Ze]||e[Dt]){if(e=l.alternate,l.child!==null||e!==null&&e.child!==null)for(t=Wr(t);t!==null;){if(e=t[Dt])return e;t=Wr(t)}return l}t=e,e=t.parentNode}return null}function Ke(t){if(t=t[Dt]||t[Ze]){var l=t.tag;if(l===5||l===6||l===13||l===31||l===26||l===27||l===3)return t}return null}function Ha(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t.stateNode;throw Error(m(33))}function Je(t){var l=t[Mf];return l||(l=t[Mf]={hoistableStyles:new Map,hoistableScripts:new Map}),l}function _t(t){t[Ua]=!0}var _f=new Set,Nf={};function Te(t,l){ke(t,l),ke(t+"Capture",l)}function ke(t,l){for(Nf[t]=l,t=0;t<l.length;t++)_f.add(l[t])}var td=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Of={},Df={};function ld(t){return Ki.call(Df,t)?!0:Ki.call(Of,t)?!1:td.test(t)?Df[t]=!0:(Of[t]=!0,!1)}function Dn(t,l,e){if(ld(l))if(e===null)t.removeAttribute(l);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(l);return;case"boolean":var a=l.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(l);return}}t.setAttribute(l,""+e)}}function Un(t,l,e){if(e===null)t.removeAttribute(l);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttribute(l,""+e)}}function Ul(t,l,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(l,e,""+a)}}function ol(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Uf(t){var l=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function ed(t,l,e){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,l);if(!t.hasOwnProperty(l)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(t,l,{configurable:!0,get:function(){return n.call(this)},set:function(u){e=""+u,i.call(this,u)}}),Object.defineProperty(t,l,{enumerable:a.enumerable}),{getValue:function(){return e},setValue:function(u){e=""+u},stopTracking:function(){t._valueTracker=null,delete t[l]}}}}function tu(t){if(!t._valueTracker){var l=Uf(t)?"checked":"value";t._valueTracker=ed(t,l,""+t[l])}}function Hf(t){if(!t)return!1;var l=t._valueTracker;if(!l)return!0;var e=l.getValue(),a="";return t&&(a=Uf(t)?t.checked?"true":"false":t.value),t=a,t!==e?(l.setValue(t),!0):!1}function Hn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ad=/[\n"\\]/g;function sl(t){return t.replace(ad,function(l){return"\\"+l.charCodeAt(0).toString(16)+" "})}function lu(t,l,e,a,n,i,u,c){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),l!=null?u==="number"?(l===0&&t.value===""||t.value!=l)&&(t.value=""+ol(l)):t.value!==""+ol(l)&&(t.value=""+ol(l)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),l!=null?eu(t,u,ol(l)):e!=null?eu(t,u,ol(e)):a!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+ol(c):t.removeAttribute("name")}function Rf(t,l,e,a,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),l!=null||e!=null){if(!(i!=="submit"&&i!=="reset"||l!=null)){tu(t);return}e=e!=null?""+ol(e):"",l=l!=null?""+ol(l):e,c||l===t.value||(t.value=l),t.defaultValue=l}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=c?t.checked:!!a,t.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),tu(t)}function eu(t,l,e){l==="number"&&Hn(t.ownerDocument)===t||t.defaultValue===""+e||(t.defaultValue=""+e)}function We(t,l,e,a){if(t=t.options,l){l={};for(var n=0;n<e.length;n++)l["$"+e[n]]=!0;for(e=0;e<t.length;e++)n=l.hasOwnProperty("$"+t[e].value),t[e].selected!==n&&(t[e].selected=n),n&&a&&(t[e].defaultSelected=!0)}else{for(e=""+ol(e),l=null,n=0;n<t.length;n++){if(t[n].value===e){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}l!==null||t[n].disabled||(l=t[n])}l!==null&&(l.selected=!0)}}function Cf(t,l,e){if(l!=null&&(l=""+ol(l),l!==t.value&&(t.value=l),e==null)){t.defaultValue!==l&&(t.defaultValue=l);return}t.defaultValue=e!=null?""+ol(e):""}function Bf(t,l,e,a){if(l==null){if(a!=null){if(e!=null)throw Error(m(92));if(vl(a)){if(1<a.length)throw Error(m(93));a=a[0]}e=a}e==null&&(e=""),l=e}e=ol(l),t.defaultValue=e,a=t.textContent,a===e&&a!==""&&a!==null&&(t.value=a),tu(t)}function Fe(t,l){if(l){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=l;return}}t.textContent=l}var nd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wf(t,l,e){var a=l.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?a?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="":a?t.setProperty(l,e):typeof e!="number"||e===0||nd.has(l)?l==="float"?t.cssFloat=e:t[l]=(""+e).trim():t[l]=e+"px"}function qf(t,l,e){if(l!=null&&typeof l!="object")throw Error(m(62));if(t=t.style,e!=null){for(var a in e)!e.hasOwnProperty(a)||l!=null&&l.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in l)a=l[n],l.hasOwnProperty(n)&&e[n]!==a&&wf(t,n,a)}else for(var i in l)l.hasOwnProperty(i)&&wf(t,i,l[i])}function au(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var id=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ud=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rn(t){return ud.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Hl(){}var nu=null;function iu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $e=null,Ie=null;function Yf(t){var l=Ke(t);if(l&&(t=l.stateNode)){var e=t[Zt]||null;t:switch(t=l.stateNode,l.type){case"input":if(lu(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),l=e.name,e.type==="radio"&&l!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+sl(""+l)+'"][type="radio"]'),l=0;l<e.length;l++){var a=e[l];if(a!==t&&a.form===t.form){var n=a[Zt]||null;if(!n)throw Error(m(90));lu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(l=0;l<e.length;l++)a=e[l],a.form===t.form&&Hf(a)}break t;case"textarea":Cf(t,e.value,e.defaultValue);break t;case"select":l=e.value,l!=null&&We(t,!!e.multiple,l,!1)}}}var uu=!1;function Gf(t,l,e){if(uu)return t(l,e);uu=!0;try{var a=t(l);return a}finally{if(uu=!1,($e!==null||Ie!==null)&&(Si(),$e&&(l=$e,t=Ie,Ie=$e=null,Yf(l),t)))for(l=0;l<t.length;l++)Yf(t[l])}}function Ra(t,l){var e=t.stateNode;if(e===null)return null;var a=e[Zt]||null;if(a===null)return null;e=a[l];t:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(m(231,l,typeof e));return e}var Rl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cu=!1;if(Rl)try{var Ca={};Object.defineProperty(Ca,"passive",{get:function(){cu=!0}}),window.addEventListener("test",Ca,Ca),window.removeEventListener("test",Ca,Ca)}catch{cu=!1}var Pl=null,fu=null,Cn=null;function Xf(){if(Cn)return Cn;var t,l=fu,e=l.length,a,n="value"in Pl?Pl.value:Pl.textContent,i=n.length;for(t=0;t<e&&l[t]===n[t];t++);var u=e-t;for(a=1;a<=u&&l[e-a]===n[i-a];a++);return Cn=n.slice(t,1<a?1-a:void 0)}function Bn(t){var l=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&l===13&&(t=13)):t=l,t===10&&(t=13),32<=t||t===13?t:0}function wn(){return!0}function Lf(){return!1}function Vt(t){function l(e,a,n,i,u){this._reactName=e,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(e=t[c],this[c]=e?e(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?wn:Lf,this.isPropagationStopped=Lf,this}return U(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),l}var Ae={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qn=Vt(Ae),Ba=U({},Ae,{view:0,detail:0}),cd=Vt(Ba),ou,su,wa,Yn=U({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wa&&(wa&&t.type==="mousemove"?(ou=t.screenX-wa.screenX,su=t.screenY-wa.screenY):su=ou=0,wa=t),ou)},movementY:function(t){return"movementY"in t?t.movementY:su}}),Qf=Vt(Yn),fd=U({},Yn,{dataTransfer:0}),od=Vt(fd),sd=U({},Ba,{relatedTarget:0}),ru=Vt(sd),rd=U({},Ae,{animationName:0,elapsedTime:0,pseudoElement:0}),dd=Vt(rd),md=U({},Ae,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hd=Vt(md),gd=U({},Ae,{data:0}),Zf=Vt(gd),pd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vd(t){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(t):(t=bd[t])?!!l[t]:!1}function du(){return vd}var xd=U({},Ba,{key:function(t){if(t.key){var l=pd[t.key]||t.key;if(l!=="Unidentified")return l}return t.type==="keypress"?(t=Bn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yd[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(t){return t.type==="keypress"?Bn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sd=Vt(xd),zd=U({},Yn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vf=Vt(zd),jd=U({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),Ed=Vt(jd),Td=U({},Ae,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ad=Vt(Td),Md=U({},Yn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_d=Vt(Md),Nd=U({},Ae,{newState:0,oldState:0}),Od=Vt(Nd),Dd=[9,13,27,32],mu=Rl&&"CompositionEvent"in window,qa=null;Rl&&"documentMode"in document&&(qa=document.documentMode);var Ud=Rl&&"TextEvent"in window&&!qa,Kf=Rl&&(!mu||qa&&8<qa&&11>=qa),Jf=" ",kf=!1;function Wf(t,l){switch(t){case"keyup":return Dd.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ff(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pe=!1;function Hd(t,l){switch(t){case"compositionend":return Ff(l);case"keypress":return l.which!==32?null:(kf=!0,Jf);case"textInput":return t=l.data,t===Jf&&kf?null:t;default:return null}}function Rd(t,l){if(Pe)return t==="compositionend"||!mu&&Wf(t,l)?(t=Xf(),Cn=fu=Pl=null,Pe=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return Kf&&l.locale!=="ko"?null:l.data;default:return null}}var Cd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $f(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l==="input"?!!Cd[t.type]:l==="textarea"}function If(t,l,e,a){$e?Ie?Ie.push(a):Ie=[a]:$e=a,l=_i(l,"onChange"),0<l.length&&(e=new qn("onChange","change",null,e,a),t.push({event:e,listeners:l}))}var Ya=null,Ga=null;function Bd(t){Cr(t,0)}function Gn(t){var l=Ha(t);if(Hf(l))return t}function Pf(t,l){if(t==="change")return l}var to=!1;if(Rl){var hu;if(Rl){var gu="oninput"in document;if(!gu){var lo=document.createElement("div");lo.setAttribute("oninput","return;"),gu=typeof lo.oninput=="function"}hu=gu}else hu=!1;to=hu&&(!document.documentMode||9<document.documentMode)}function eo(){Ya&&(Ya.detachEvent("onpropertychange",ao),Ga=Ya=null)}function ao(t){if(t.propertyName==="value"&&Gn(Ga)){var l=[];If(l,Ga,t,iu(t)),Gf(Bd,l)}}function wd(t,l,e){t==="focusin"?(eo(),Ya=l,Ga=e,Ya.attachEvent("onpropertychange",ao)):t==="focusout"&&eo()}function qd(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gn(Ga)}function Yd(t,l){if(t==="click")return Gn(l)}function Gd(t,l){if(t==="input"||t==="change")return Gn(l)}function Xd(t,l){return t===l&&(t!==0||1/t===1/l)||t!==t&&l!==l}var ll=typeof Object.is=="function"?Object.is:Xd;function Xa(t,l){if(ll(t,l))return!0;if(typeof t!="object"||t===null||typeof l!="object"||l===null)return!1;var e=Object.keys(t),a=Object.keys(l);if(e.length!==a.length)return!1;for(a=0;a<e.length;a++){var n=e[a];if(!Ki.call(l,n)||!ll(t[n],l[n]))return!1}return!0}function no(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function io(t,l){var e=no(t);t=0;for(var a;e;){if(e.nodeType===3){if(a=t+e.textContent.length,t<=l&&a>=l)return{node:e,offset:l-t};t=a}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=no(e)}}function uo(t,l){return t&&l?t===l?!0:t&&t.nodeType===3?!1:l&&l.nodeType===3?uo(t,l.parentNode):"contains"in t?t.contains(l):t.compareDocumentPosition?!!(t.compareDocumentPosition(l)&16):!1:!1}function co(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var l=Hn(t.document);l instanceof t.HTMLIFrameElement;){try{var e=typeof l.contentWindow.location.href=="string"}catch{e=!1}if(e)t=l.contentWindow;else break;l=Hn(t.document)}return l}function pu(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l&&(l==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||l==="textarea"||t.contentEditable==="true")}var Ld=Rl&&"documentMode"in document&&11>=document.documentMode,ta=null,yu=null,La=null,bu=!1;function fo(t,l,e){var a=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;bu||ta==null||ta!==Hn(a)||(a=ta,"selectionStart"in a&&pu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),La&&Xa(La,a)||(La=a,a=_i(yu,"onSelect"),0<a.length&&(l=new qn("onSelect","select",null,l,e),t.push({event:l,listeners:a}),l.target=ta)))}function Me(t,l){var e={};return e[t.toLowerCase()]=l.toLowerCase(),e["Webkit"+t]="webkit"+l,e["Moz"+t]="moz"+l,e}var la={animationend:Me("Animation","AnimationEnd"),animationiteration:Me("Animation","AnimationIteration"),animationstart:Me("Animation","AnimationStart"),transitionrun:Me("Transition","TransitionRun"),transitionstart:Me("Transition","TransitionStart"),transitioncancel:Me("Transition","TransitionCancel"),transitionend:Me("Transition","TransitionEnd")},vu={},oo={};Rl&&(oo=document.createElement("div").style,"AnimationEvent"in window||(delete la.animationend.animation,delete la.animationiteration.animation,delete la.animationstart.animation),"TransitionEvent"in window||delete la.transitionend.transition);function _e(t){if(vu[t])return vu[t];if(!la[t])return t;var l=la[t],e;for(e in l)if(l.hasOwnProperty(e)&&e in oo)return vu[t]=l[e];return t}var so=_e("animationend"),ro=_e("animationiteration"),mo=_e("animationstart"),Qd=_e("transitionrun"),Zd=_e("transitionstart"),Vd=_e("transitioncancel"),ho=_e("transitionend"),go=new Map,xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xu.push("scrollEnd");function xl(t,l){go.set(t,l),Te(l,[t])}var Xn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var l=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(l))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},rl=[],ea=0,Su=0;function Ln(){for(var t=ea,l=Su=ea=0;l<t;){var e=rl[l];rl[l++]=null;var a=rl[l];rl[l++]=null;var n=rl[l];rl[l++]=null;var i=rl[l];if(rl[l++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&po(e,n,i)}}function Qn(t,l,e,a){rl[ea++]=t,rl[ea++]=l,rl[ea++]=e,rl[ea++]=a,Su|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function zu(t,l,e,a){return Qn(t,l,e,a),Zn(t)}function Ne(t,l){return Qn(t,null,null,l),Zn(t)}function po(t,l,e){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e);for(var n=!1,i=t.return;i!==null;)i.childLanes|=e,a=i.alternate,a!==null&&(a.childLanes|=e),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&l!==null&&(n=31-tl(e),t=i.hiddenUpdates,a=t[n],a===null?t[n]=[l]:a.push(l),l.lane=e|536870912),i):null}function Zn(t){if(50<rn)throw rn=0,Dc=null,Error(m(185));for(var l=t.return;l!==null;)t=l,l=t.return;return t.tag===3?t.stateNode:null}var aa={};function Kd(t,l,e,a){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function el(t,l,e,a){return new Kd(t,l,e,a)}function ju(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Cl(t,l){var e=t.alternate;return e===null?(e=el(t.tag,l,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=l,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&65011712,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,l=t.dependencies,e.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function yo(t,l){t.flags&=65011714;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=l,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,l=e.dependencies,t.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext}),t}function Vn(t,l,e,a,n,i){var u=0;if(a=t,typeof t=="function")ju(t)&&(u=1);else if(typeof t=="string")u=$m(t,e,H.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case El:return t=el(31,e,l,n),t.elementType=El,t.lanes=i,t;case yt:return Oe(e.children,n,i,l);case Ol:u=8,n|=24;break;case $t:return t=el(12,e,l,n|2),t.elementType=$t,t.lanes=i,t;case jl:return t=el(13,e,l,n),t.elementType=jl,t.lanes=i,t;case Xt:return t=el(19,e,l,n),t.elementType=Xt,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case wt:u=10;break t;case Fl:u=9;break t;case fl:u=11;break t;case $:u=14;break t;case Lt:u=16,a=null;break t}u=29,e=Error(m(130,t===null?"null":typeof t,"")),a=null}return l=el(u,e,l,n),l.elementType=t,l.type=a,l.lanes=i,l}function Oe(t,l,e,a){return t=el(7,t,a,l),t.lanes=e,t}function Eu(t,l,e){return t=el(6,t,null,l),t.lanes=e,t}function bo(t){var l=el(18,null,null,0);return l.stateNode=t,l}function Tu(t,l,e){return l=el(4,t.children!==null?t.children:[],t.key,l),l.lanes=e,l.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},l}var vo=new WeakMap;function dl(t,l){if(typeof t=="object"&&t!==null){var e=vo.get(t);return e!==void 0?e:(l={value:t,source:l,stack:yf(l)},vo.set(t,l),l)}return{value:t,source:l,stack:yf(l)}}var na=[],ia=0,Kn=null,Qa=0,ml=[],hl=0,te=null,Al=1,Ml="";function Bl(t,l){na[ia++]=Qa,na[ia++]=Kn,Kn=t,Qa=l}function xo(t,l,e){ml[hl++]=Al,ml[hl++]=Ml,ml[hl++]=te,te=t;var a=Al;t=Ml;var n=32-tl(a)-1;a&=~(1<<n),e+=1;var i=32-tl(l)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,Al=1<<32-tl(l)+n|e<<n|a,Ml=i+t}else Al=1<<i|e<<n|a,Ml=t}function Au(t){t.return!==null&&(Bl(t,1),xo(t,1,0))}function Mu(t){for(;t===Kn;)Kn=na[--ia],na[ia]=null,Qa=na[--ia],na[ia]=null;for(;t===te;)te=ml[--hl],ml[hl]=null,Ml=ml[--hl],ml[hl]=null,Al=ml[--hl],ml[hl]=null}function So(t,l){ml[hl++]=Al,ml[hl++]=Ml,ml[hl++]=te,Al=l.id,Ml=l.overflow,te=t}var Ut=null,dt=null,I=!1,le=null,gl=!1,_u=Error(m(519));function ee(t){var l=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Za(dl(l,t)),_u}function zo(t){var l=t.stateNode,e=t.type,a=t.memoizedProps;switch(l[Dt]=t,l[Zt]=a,e){case"dialog":J("cancel",l),J("close",l);break;case"iframe":case"object":case"embed":J("load",l);break;case"video":case"audio":for(e=0;e<mn.length;e++)J(mn[e],l);break;case"source":J("error",l);break;case"img":case"image":case"link":J("error",l),J("load",l);break;case"details":J("toggle",l);break;case"input":J("invalid",l),Rf(l,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":J("invalid",l);break;case"textarea":J("invalid",l),Bf(l,a.value,a.defaultValue,a.children)}e=a.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||l.textContent===""+e||a.suppressHydrationWarning===!0||Yr(l.textContent,e)?(a.popover!=null&&(J("beforetoggle",l),J("toggle",l)),a.onScroll!=null&&J("scroll",l),a.onScrollEnd!=null&&J("scrollend",l),a.onClick!=null&&(l.onclick=Hl),l=!0):l=!1,l||ee(t,!0)}function jo(t){for(Ut=t.return;Ut;)switch(Ut.tag){case 5:case 31:case 13:gl=!1;return;case 27:case 3:gl=!0;return;default:Ut=Ut.return}}function ua(t){if(t!==Ut)return!1;if(!I)return jo(t),I=!0,!1;var l=t.tag,e;if((e=l!==3&&l!==27)&&((e=l===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||Kc(t.type,t.memoizedProps)),e=!e),e&&dt&&ee(t),jo(t),l===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(317));dt=kr(t)}else if(l===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(317));dt=kr(t)}else l===27?(l=dt,pe(t.type)?(t=$c,$c=null,dt=t):dt=l):dt=Ut?yl(t.stateNode.nextSibling):null;return!0}function De(){dt=Ut=null,I=!1}function Nu(){var t=le;return t!==null&&(Wt===null?Wt=t:Wt.push.apply(Wt,t),le=null),t}function Za(t){le===null?le=[t]:le.push(t)}var Ou=r(null),Ue=null,wl=null;function ae(t,l,e){_(Ou,l._currentValue),l._currentValue=e}function ql(t){t._currentValue=Ou.current,E(Ou)}function Du(t,l,e){for(;t!==null;){var a=t.alternate;if((t.childLanes&l)!==l?(t.childLanes|=l,a!==null&&(a.childLanes|=l)):a!==null&&(a.childLanes&l)!==l&&(a.childLanes|=l),t===e)break;t=t.return}}function Uu(t,l,e,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var c=i;i=n;for(var o=0;o<l.length;o++)if(c.context===l[o]){i.lanes|=e,c=i.alternate,c!==null&&(c.lanes|=e),Du(i.return,e,t),a||(u=null);break t}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(m(341));u.lanes|=e,i=u.alternate,i!==null&&(i.lanes|=e),Du(u,e,t),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function ca(t,l,e,a){t=null;for(var n=l,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(m(387));if(u=u.memoizedProps,u!==null){var c=n.type;ll(n.pendingProps.value,u.value)||(t!==null?t.push(c):t=[c])}}else if(n===at.current){if(u=n.alternate,u===null)throw Error(m(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(bn):t=[bn])}n=n.return}t!==null&&Uu(l,t,e,a),l.flags|=262144}function Jn(t){for(t=t.firstContext;t!==null;){if(!ll(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function He(t){Ue=t,wl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ht(t){return Eo(Ue,t)}function kn(t,l){return Ue===null&&He(t),Eo(t,l)}function Eo(t,l){var e=l._currentValue;if(l={context:l,memoizedValue:e,next:null},wl===null){if(t===null)throw Error(m(308));wl=l,t.dependencies={lanes:0,firstContext:l},t.flags|=524288}else wl=wl.next=l;return e}var Jd=typeof AbortController<"u"?AbortController:function(){var t=[],l=this.signal={aborted:!1,addEventListener:function(e,a){t.push(a)}};this.abort=function(){l.aborted=!0,t.forEach(function(e){return e()})}},kd=h.unstable_scheduleCallback,Wd=h.unstable_NormalPriority,St={$$typeof:wt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hu(){return{controller:new Jd,data:new Map,refCount:0}}function Va(t){t.refCount--,t.refCount===0&&kd(Wd,function(){t.controller.abort()})}var Ka=null,Ru=0,fa=0,oa=null;function Fd(t,l){if(Ka===null){var e=Ka=[];Ru=0,fa=wc(),oa={status:"pending",value:void 0,then:function(a){e.push(a)}}}return Ru++,l.then(To,To),l}function To(){if(--Ru===0&&Ka!==null){oa!==null&&(oa.status="fulfilled");var t=Ka;Ka=null,fa=0,oa=null;for(var l=0;l<t.length;l++)(0,t[l])()}}function $d(t,l){var e=[],a={status:"pending",value:null,reason:null,then:function(n){e.push(n)}};return t.then(function(){a.status="fulfilled",a.value=l;for(var n=0;n<e.length;n++)(0,e[n])(l)},function(n){for(a.status="rejected",a.reason=n,n=0;n<e.length;n++)(0,e[n])(void 0)}),a}var Ao=S.S;S.S=function(t,l){or=It(),typeof l=="object"&&l!==null&&typeof l.then=="function"&&Fd(t,l),Ao!==null&&Ao(t,l)};var Re=r(null);function Cu(){var t=Re.current;return t!==null?t:rt.pooledCache}function Wn(t,l){l===null?_(Re,Re.current):_(Re,l.pool)}function Mo(){var t=Cu();return t===null?null:{parent:St._currentValue,pool:t}}var sa=Error(m(460)),Bu=Error(m(474)),Fn=Error(m(542)),$n={then:function(){}};function _o(t){return t=t.status,t==="fulfilled"||t==="rejected"}function No(t,l,e){switch(e=t[e],e===void 0?t.push(l):e!==l&&(l.then(Hl,Hl),l=e),l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,Do(t),t;default:if(typeof l.status=="string")l.then(Hl,Hl);else{if(t=rt,t!==null&&100<t.shellSuspendCounter)throw Error(m(482));t=l,t.status="pending",t.then(function(a){if(l.status==="pending"){var n=l;n.status="fulfilled",n.value=a}},function(a){if(l.status==="pending"){var n=l;n.status="rejected",n.reason=a}})}switch(l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,Do(t),t}throw Be=l,sa}}function Ce(t){try{var l=t._init;return l(t._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Be=e,sa):e}}var Be=null;function Oo(){if(Be===null)throw Error(m(459));var t=Be;return Be=null,t}function Do(t){if(t===sa||t===Fn)throw Error(m(483))}var ra=null,Ja=0;function In(t){var l=Ja;return Ja+=1,ra===null&&(ra=[]),No(ra,t,l)}function ka(t,l){l=l.props.ref,t.ref=l!==void 0?l:null}function Pn(t,l){throw l.$$typeof===et?Error(m(525)):(t=Object.prototype.toString.call(l),Error(m(31,t==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":t)))}function Uo(t){function l(d,s){if(t){var g=d.deletions;g===null?(d.deletions=[s],d.flags|=16):g.push(s)}}function e(d,s){if(!t)return null;for(;s!==null;)l(d,s),s=s.sibling;return null}function a(d){for(var s=new Map;d!==null;)d.key!==null?s.set(d.key,d):s.set(d.index,d),d=d.sibling;return s}function n(d,s){return d=Cl(d,s),d.index=0,d.sibling=null,d}function i(d,s,g){return d.index=g,t?(g=d.alternate,g!==null?(g=g.index,g<s?(d.flags|=67108866,s):g):(d.flags|=67108866,s)):(d.flags|=1048576,s)}function u(d){return t&&d.alternate===null&&(d.flags|=67108866),d}function c(d,s,g,z){return s===null||s.tag!==6?(s=Eu(g,d.mode,z),s.return=d,s):(s=n(s,g),s.return=d,s)}function o(d,s,g,z){var B=g.type;return B===yt?v(d,s,g.props.children,z,g.key):s!==null&&(s.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Lt&&Ce(B)===s.type)?(s=n(s,g.props),ka(s,g),s.return=d,s):(s=Vn(g.type,g.key,g.props,null,d.mode,z),ka(s,g),s.return=d,s)}function p(d,s,g,z){return s===null||s.tag!==4||s.stateNode.containerInfo!==g.containerInfo||s.stateNode.implementation!==g.implementation?(s=Tu(g,d.mode,z),s.return=d,s):(s=n(s,g.children||[]),s.return=d,s)}function v(d,s,g,z,B){return s===null||s.tag!==7?(s=Oe(g,d.mode,z,B),s.return=d,s):(s=n(s,g),s.return=d,s)}function j(d,s,g){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=Eu(""+s,d.mode,g),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case Ot:return g=Vn(s.type,s.key,s.props,null,d.mode,g),ka(g,s),g.return=d,g;case Mt:return s=Tu(s,d.mode,g),s.return=d,s;case Lt:return s=Ce(s),j(d,s,g)}if(vl(s)||Qt(s))return s=Oe(s,d.mode,g,null),s.return=d,s;if(typeof s.then=="function")return j(d,In(s),g);if(s.$$typeof===wt)return j(d,kn(d,s),g);Pn(d,s)}return null}function y(d,s,g,z){var B=s!==null?s.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return B!==null?null:c(d,s,""+g,z);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ot:return g.key===B?o(d,s,g,z):null;case Mt:return g.key===B?p(d,s,g,z):null;case Lt:return g=Ce(g),y(d,s,g,z)}if(vl(g)||Qt(g))return B!==null?null:v(d,s,g,z,null);if(typeof g.then=="function")return y(d,s,In(g),z);if(g.$$typeof===wt)return y(d,s,kn(d,g),z);Pn(d,g)}return null}function b(d,s,g,z,B){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return d=d.get(g)||null,c(s,d,""+z,B);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Ot:return d=d.get(z.key===null?g:z.key)||null,o(s,d,z,B);case Mt:return d=d.get(z.key===null?g:z.key)||null,p(s,d,z,B);case Lt:return z=Ce(z),b(d,s,g,z,B)}if(vl(z)||Qt(z))return d=d.get(g)||null,v(s,d,z,B,null);if(typeof z.then=="function")return b(d,s,g,In(z),B);if(z.$$typeof===wt)return b(d,s,g,kn(s,z),B);Pn(s,z)}return null}function D(d,s,g,z){for(var B=null,P=null,R=s,Z=s=0,F=null;R!==null&&Z<g.length;Z++){R.index>Z?(F=R,R=null):F=R.sibling;var tt=y(d,R,g[Z],z);if(tt===null){R===null&&(R=F);break}t&&R&&tt.alternate===null&&l(d,R),s=i(tt,s,Z),P===null?B=tt:P.sibling=tt,P=tt,R=F}if(Z===g.length)return e(d,R),I&&Bl(d,Z),B;if(R===null){for(;Z<g.length;Z++)R=j(d,g[Z],z),R!==null&&(s=i(R,s,Z),P===null?B=R:P.sibling=R,P=R);return I&&Bl(d,Z),B}for(R=a(R);Z<g.length;Z++)F=b(R,d,Z,g[Z],z),F!==null&&(t&&F.alternate!==null&&R.delete(F.key===null?Z:F.key),s=i(F,s,Z),P===null?B=F:P.sibling=F,P=F);return t&&R.forEach(function(Se){return l(d,Se)}),I&&Bl(d,Z),B}function w(d,s,g,z){if(g==null)throw Error(m(151));for(var B=null,P=null,R=s,Z=s=0,F=null,tt=g.next();R!==null&&!tt.done;Z++,tt=g.next()){R.index>Z?(F=R,R=null):F=R.sibling;var Se=y(d,R,tt.value,z);if(Se===null){R===null&&(R=F);break}t&&R&&Se.alternate===null&&l(d,R),s=i(Se,s,Z),P===null?B=Se:P.sibling=Se,P=Se,R=F}if(tt.done)return e(d,R),I&&Bl(d,Z),B;if(R===null){for(;!tt.done;Z++,tt=g.next())tt=j(d,tt.value,z),tt!==null&&(s=i(tt,s,Z),P===null?B=tt:P.sibling=tt,P=tt);return I&&Bl(d,Z),B}for(R=a(R);!tt.done;Z++,tt=g.next())tt=b(R,d,Z,tt.value,z),tt!==null&&(t&&tt.alternate!==null&&R.delete(tt.key===null?Z:tt.key),s=i(tt,s,Z),P===null?B=tt:P.sibling=tt,P=tt);return t&&R.forEach(function(f1){return l(d,f1)}),I&&Bl(d,Z),B}function ot(d,s,g,z){if(typeof g=="object"&&g!==null&&g.type===yt&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ot:t:{for(var B=g.key;s!==null;){if(s.key===B){if(B=g.type,B===yt){if(s.tag===7){e(d,s.sibling),z=n(s,g.props.children),z.return=d,d=z;break t}}else if(s.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Lt&&Ce(B)===s.type){e(d,s.sibling),z=n(s,g.props),ka(z,g),z.return=d,d=z;break t}e(d,s);break}else l(d,s);s=s.sibling}g.type===yt?(z=Oe(g.props.children,d.mode,z,g.key),z.return=d,d=z):(z=Vn(g.type,g.key,g.props,null,d.mode,z),ka(z,g),z.return=d,d=z)}return u(d);case Mt:t:{for(B=g.key;s!==null;){if(s.key===B)if(s.tag===4&&s.stateNode.containerInfo===g.containerInfo&&s.stateNode.implementation===g.implementation){e(d,s.sibling),z=n(s,g.children||[]),z.return=d,d=z;break t}else{e(d,s);break}else l(d,s);s=s.sibling}z=Tu(g,d.mode,z),z.return=d,d=z}return u(d);case Lt:return g=Ce(g),ot(d,s,g,z)}if(vl(g))return D(d,s,g,z);if(Qt(g)){if(B=Qt(g),typeof B!="function")throw Error(m(150));return g=B.call(g),w(d,s,g,z)}if(typeof g.then=="function")return ot(d,s,In(g),z);if(g.$$typeof===wt)return ot(d,s,kn(d,g),z);Pn(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,s!==null&&s.tag===6?(e(d,s.sibling),z=n(s,g),z.return=d,d=z):(e(d,s),z=Eu(g,d.mode,z),z.return=d,d=z),u(d)):e(d,s)}return function(d,s,g,z){try{Ja=0;var B=ot(d,s,g,z);return ra=null,B}catch(R){if(R===sa||R===Fn)throw R;var P=el(29,R,null,d.mode);return P.lanes=z,P.return=d,P}}}var we=Uo(!0),Ho=Uo(!1),ne=!1;function wu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qu(t,l){t=t.updateQueue,l.updateQueue===t&&(l.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ie(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ue(t,l,e){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(lt&2)!==0){var n=a.pending;return n===null?l.next=l:(l.next=n.next,n.next=l),a.pending=l,l=Zn(t),po(t,null,e),l}return Qn(t,a,l,e),Zn(t)}function Wa(t,l,e){if(l=l.updateQueue,l!==null&&(l=l.shared,(e&4194048)!==0)){var a=l.lanes;a&=t.pendingLanes,e|=a,l.lanes=e,jf(t,e)}}function Yu(t,l){var e=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,e===a)){var n=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var u={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,e=e.next}while(e!==null);i===null?n=i=l:i=i.next=l}else n=i=l;e={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=l:t.next=l,e.lastBaseUpdate=l}var Gu=!1;function Fa(){if(Gu){var t=oa;if(t!==null)throw t}}function $a(t,l,e,a){Gu=!1;var n=t.updateQueue;ne=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var o=c,p=o.next;o.next=null,u===null?i=p:u.next=p,u=o;var v=t.alternate;v!==null&&(v=v.updateQueue,c=v.lastBaseUpdate,c!==u&&(c===null?v.firstBaseUpdate=p:c.next=p,v.lastBaseUpdate=o))}if(i!==null){var j=n.baseState;u=0,v=p=o=null,c=i;do{var y=c.lane&-536870913,b=y!==c.lane;if(b?(W&y)===y:(a&y)===y){y!==0&&y===fa&&(Gu=!0),v!==null&&(v=v.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var D=t,w=c;y=l;var ot=e;switch(w.tag){case 1:if(D=w.payload,typeof D=="function"){j=D.call(ot,j,y);break t}j=D;break t;case 3:D.flags=D.flags&-65537|128;case 0:if(D=w.payload,y=typeof D=="function"?D.call(ot,j,y):D,y==null)break t;j=U({},j,y);break t;case 2:ne=!0}}y=c.callback,y!==null&&(t.flags|=64,b&&(t.flags|=8192),b=n.callbacks,b===null?n.callbacks=[y]:b.push(y))}else b={lane:y,tag:c.tag,payload:c.payload,callback:c.callback,next:null},v===null?(p=v=b,o=j):v=v.next=b,u|=y;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;b=c,c=b.next,b.next=null,n.lastBaseUpdate=b,n.shared.pending=null}}while(!0);v===null&&(o=j),n.baseState=o,n.firstBaseUpdate=p,n.lastBaseUpdate=v,i===null&&(n.shared.lanes=0),re|=u,t.lanes=u,t.memoizedState=j}}function Ro(t,l){if(typeof t!="function")throw Error(m(191,t));t.call(l)}function Co(t,l){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)Ro(e[t],l)}var da=r(null),ti=r(0);function Bo(t,l){t=Jl,_(ti,t),_(da,l),Jl=t|l.baseLanes}function Xu(){_(ti,Jl),_(da,da.current)}function Lu(){Jl=ti.current,E(da),E(ti)}var al=r(null),pl=null;function ce(t){var l=t.alternate;_(vt,vt.current&1),_(al,t),pl===null&&(l===null||da.current!==null||l.memoizedState!==null)&&(pl=t)}function Qu(t){_(vt,vt.current),_(al,t),pl===null&&(pl=t)}function wo(t){t.tag===22?(_(vt,vt.current),_(al,t),pl===null&&(pl=t)):fe()}function fe(){_(vt,vt.current),_(al,al.current)}function nl(t){E(al),pl===t&&(pl=null),E(vt)}var vt=r(0);function li(t){for(var l=t;l!==null;){if(l.tag===13){var e=l.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||Wc(e)||Fc(e)))return l}else if(l.tag===19&&(l.memoizedProps.revealOrder==="forwards"||l.memoizedProps.revealOrder==="backwards"||l.memoizedProps.revealOrder==="unstable_legacy-backwards"||l.memoizedProps.revealOrder==="together")){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var Yl=0,Q=null,ct=null,zt=null,ei=!1,ma=!1,qe=!1,ai=0,Ia=0,ha=null,Id=0;function gt(){throw Error(m(321))}function Zu(t,l){if(l===null)return!1;for(var e=0;e<l.length&&e<t.length;e++)if(!ll(t[e],l[e]))return!1;return!0}function Vu(t,l,e,a,n,i){return Yl=i,Q=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,S.H=t===null||t.memoizedState===null?xs:uc,qe=!1,i=e(a,n),qe=!1,ma&&(i=Yo(l,e,a,n)),qo(t),i}function qo(t){S.H=ln;var l=ct!==null&&ct.next!==null;if(Yl=0,zt=ct=Q=null,ei=!1,Ia=0,ha=null,l)throw Error(m(300));t===null||jt||(t=t.dependencies,t!==null&&Jn(t)&&(jt=!0))}function Yo(t,l,e,a){Q=t;var n=0;do{if(ma&&(ha=null),Ia=0,ma=!1,25<=n)throw Error(m(301));if(n+=1,zt=ct=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}S.H=Ss,i=l(e,a)}while(ma);return i}function Pd(){var t=S.H,l=t.useState()[0];return l=typeof l.then=="function"?Pa(l):l,t=t.useState()[0],(ct!==null?ct.memoizedState:null)!==t&&(Q.flags|=1024),l}function Ku(){var t=ai!==0;return ai=0,t}function Ju(t,l,e){l.updateQueue=t.updateQueue,l.flags&=-2053,t.lanes&=~e}function ku(t){if(ei){for(t=t.memoizedState;t!==null;){var l=t.queue;l!==null&&(l.pending=null),t=t.next}ei=!1}Yl=0,zt=ct=Q=null,ma=!1,Ia=ai=0,ha=null}function Gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?Q.memoizedState=zt=t:zt=zt.next=t,zt}function xt(){if(ct===null){var t=Q.alternate;t=t!==null?t.memoizedState:null}else t=ct.next;var l=zt===null?Q.memoizedState:zt.next;if(l!==null)zt=l,ct=t;else{if(t===null)throw Q.alternate===null?Error(m(467)):Error(m(310));ct=t,t={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},zt===null?Q.memoizedState=zt=t:zt=zt.next=t}return zt}function ni(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pa(t){var l=Ia;return Ia+=1,ha===null&&(ha=[]),t=No(ha,t,l),l=Q,(zt===null?l.memoizedState:zt.next)===null&&(l=l.alternate,S.H=l===null||l.memoizedState===null?xs:uc),t}function ii(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Pa(t);if(t.$$typeof===wt)return Ht(t)}throw Error(m(438,String(t)))}function Wu(t){var l=null,e=Q.updateQueue;if(e!==null&&(l=e.memoCache),l==null){var a=Q.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(l={data:a.data.map(function(n){return n.slice()}),index:0})))}if(l==null&&(l={data:[],index:0}),e===null&&(e=ni(),Q.updateQueue=e),e.memoCache=l,e=l.data[l.index],e===void 0)for(e=l.data[l.index]=Array(t),a=0;a<t;a++)e[a]=Qe;return l.index++,e}function Gl(t,l){return typeof l=="function"?l(t):l}function ui(t){var l=xt();return Fu(l,ct,t)}function Fu(t,l,e){var a=t.queue;if(a===null)throw Error(m(311));a.lastRenderedReducer=e;var n=t.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}l.baseQueue=n=i,a.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{l=n.next;var c=u=null,o=null,p=l,v=!1;do{var j=p.lane&-536870913;if(j!==p.lane?(W&j)===j:(Yl&j)===j){var y=p.revertLane;if(y===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),j===fa&&(v=!0);else if((Yl&y)===y){p=p.next,y===fa&&(v=!0);continue}else j={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},o===null?(c=o=j,u=i):o=o.next=j,Q.lanes|=y,re|=y;j=p.action,qe&&e(i,j),i=p.hasEagerState?p.eagerState:e(i,j)}else y={lane:j,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},o===null?(c=o=y,u=i):o=o.next=y,Q.lanes|=j,re|=j;p=p.next}while(p!==null&&p!==l);if(o===null?u=i:o.next=c,!ll(i,t.memoizedState)&&(jt=!0,v&&(e=oa,e!==null)))throw e;t.memoizedState=i,t.baseState=u,t.baseQueue=o,a.lastRenderedState=i}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function $u(t){var l=xt(),e=l.queue;if(e===null)throw Error(m(311));e.lastRenderedReducer=t;var a=e.dispatch,n=e.pending,i=l.memoizedState;if(n!==null){e.pending=null;var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);ll(i,l.memoizedState)||(jt=!0),l.memoizedState=i,l.baseQueue===null&&(l.baseState=i),e.lastRenderedState=i}return[i,a]}function Go(t,l,e){var a=Q,n=xt(),i=I;if(i){if(e===void 0)throw Error(m(407));e=e()}else e=l();var u=!ll((ct||n).memoizedState,e);if(u&&(n.memoizedState=e,jt=!0),n=n.queue,tc(Qo.bind(null,a,n,t),[t]),n.getSnapshot!==l||u||zt!==null&&zt.memoizedState.tag&1){if(a.flags|=2048,ga(9,{destroy:void 0},Lo.bind(null,a,n,e,l),null),rt===null)throw Error(m(349));i||(Yl&127)!==0||Xo(a,l,e)}return e}function Xo(t,l,e){t.flags|=16384,t={getSnapshot:l,value:e},l=Q.updateQueue,l===null?(l=ni(),Q.updateQueue=l,l.stores=[t]):(e=l.stores,e===null?l.stores=[t]:e.push(t))}function Lo(t,l,e,a){l.value=e,l.getSnapshot=a,Zo(l)&&Vo(t)}function Qo(t,l,e){return e(function(){Zo(l)&&Vo(t)})}function Zo(t){var l=t.getSnapshot;t=t.value;try{var e=l();return!ll(t,e)}catch{return!0}}function Vo(t){var l=Ne(t,2);l!==null&&Ft(l,t,2)}function Iu(t){var l=Gt();if(typeof t=="function"){var e=t;if(t=e(),qe){$l(!0);try{e()}finally{$l(!1)}}}return l.memoizedState=l.baseState=t,l.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gl,lastRenderedState:t},l}function Ko(t,l,e,a){return t.baseState=e,Fu(t,ct,typeof a=="function"?a:Gl)}function tm(t,l,e,a,n){if(oi(t))throw Error(m(485));if(t=l.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};S.T!==null?e(!0):i.isTransition=!1,a(i),e=l.pending,e===null?(i.next=l.pending=i,Jo(l,i)):(i.next=e.next,l.pending=e.next=i)}}function Jo(t,l){var e=l.action,a=l.payload,n=t.state;if(l.isTransition){var i=S.T,u={};S.T=u;try{var c=e(n,a),o=S.S;o!==null&&o(u,c),ko(t,l,c)}catch(p){Pu(t,l,p)}finally{i!==null&&u.types!==null&&(i.types=u.types),S.T=i}}else try{i=e(n,a),ko(t,l,i)}catch(p){Pu(t,l,p)}}function ko(t,l,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(a){Wo(t,l,a)},function(a){return Pu(t,l,a)}):Wo(t,l,e)}function Wo(t,l,e){l.status="fulfilled",l.value=e,Fo(l),t.state=e,l=t.pending,l!==null&&(e=l.next,e===l?t.pending=null:(e=e.next,l.next=e,Jo(t,e)))}function Pu(t,l,e){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do l.status="rejected",l.reason=e,Fo(l),l=l.next;while(l!==a)}t.action=null}function Fo(t){t=t.listeners;for(var l=0;l<t.length;l++)(0,t[l])()}function $o(t,l){return l}function Io(t,l){if(I){var e=rt.formState;if(e!==null){t:{var a=Q;if(I){if(dt){l:{for(var n=dt,i=gl;n.nodeType!==8;){if(!i){n=null;break l}if(n=yl(n.nextSibling),n===null){n=null;break l}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){dt=yl(n.nextSibling),a=n.data==="F!";break t}}ee(a)}a=!1}a&&(l=e[0])}}return e=Gt(),e.memoizedState=e.baseState=l,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:l},e.queue=a,e=ys.bind(null,Q,a),a.dispatch=e,a=Iu(!1),i=ic.bind(null,Q,!1,a.queue),a=Gt(),n={state:l,dispatch:null,action:t,pending:null},a.queue=n,e=tm.bind(null,Q,n,i,e),n.dispatch=e,a.memoizedState=t,[l,e,!1]}function Po(t){var l=xt();return ts(l,ct,t)}function ts(t,l,e){if(l=Fu(t,l,$o)[0],t=ui(Gl)[0],typeof l=="object"&&l!==null&&typeof l.then=="function")try{var a=Pa(l)}catch(u){throw u===sa?Fn:u}else a=l;l=xt();var n=l.queue,i=n.dispatch;return e!==l.memoizedState&&(Q.flags|=2048,ga(9,{destroy:void 0},lm.bind(null,n,e),null)),[a,i,t]}function lm(t,l){t.action=l}function ls(t){var l=xt(),e=ct;if(e!==null)return ts(l,e,t);xt(),l=l.memoizedState,e=xt();var a=e.queue.dispatch;return e.memoizedState=t,[l,a,!1]}function ga(t,l,e,a){return t={tag:t,create:e,deps:a,inst:l,next:null},l=Q.updateQueue,l===null&&(l=ni(),Q.updateQueue=l),e=l.lastEffect,e===null?l.lastEffect=t.next=t:(a=e.next,e.next=t,t.next=a,l.lastEffect=t),t}function es(){return xt().memoizedState}function ci(t,l,e,a){var n=Gt();Q.flags|=t,n.memoizedState=ga(1|l,{destroy:void 0},e,a===void 0?null:a)}function fi(t,l,e,a){var n=xt();a=a===void 0?null:a;var i=n.memoizedState.inst;ct!==null&&a!==null&&Zu(a,ct.memoizedState.deps)?n.memoizedState=ga(l,i,e,a):(Q.flags|=t,n.memoizedState=ga(1|l,i,e,a))}function as(t,l){ci(8390656,8,t,l)}function tc(t,l){fi(2048,8,t,l)}function em(t){Q.flags|=4;var l=Q.updateQueue;if(l===null)l=ni(),Q.updateQueue=l,l.events=[t];else{var e=l.events;e===null?l.events=[t]:e.push(t)}}function ns(t){var l=xt().memoizedState;return em({ref:l,nextImpl:t}),function(){if((lt&2)!==0)throw Error(m(440));return l.impl.apply(void 0,arguments)}}function is(t,l){return fi(4,2,t,l)}function us(t,l){return fi(4,4,t,l)}function cs(t,l){if(typeof l=="function"){t=t();var e=l(t);return function(){typeof e=="function"?e():l(null)}}if(l!=null)return t=t(),l.current=t,function(){l.current=null}}function fs(t,l,e){e=e!=null?e.concat([t]):null,fi(4,4,cs.bind(null,l,t),e)}function lc(){}function os(t,l){var e=xt();l=l===void 0?null:l;var a=e.memoizedState;return l!==null&&Zu(l,a[1])?a[0]:(e.memoizedState=[t,l],t)}function ss(t,l){var e=xt();l=l===void 0?null:l;var a=e.memoizedState;if(l!==null&&Zu(l,a[1]))return a[0];if(a=t(),qe){$l(!0);try{t()}finally{$l(!1)}}return e.memoizedState=[a,l],a}function ec(t,l,e){return e===void 0||(Yl&1073741824)!==0&&(W&261930)===0?t.memoizedState=l:(t.memoizedState=e,t=rr(),Q.lanes|=t,re|=t,e)}function rs(t,l,e,a){return ll(e,l)?e:da.current!==null?(t=ec(t,e,a),ll(t,l)||(jt=!0),t):(Yl&42)===0||(Yl&1073741824)!==0&&(W&261930)===0?(jt=!0,t.memoizedState=e):(t=rr(),Q.lanes|=t,re|=t,l)}function ds(t,l,e,a,n){var i=M.p;M.p=i!==0&&8>i?i:8;var u=S.T,c={};S.T=c,ic(t,!1,l,e);try{var o=n(),p=S.S;if(p!==null&&p(c,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var v=$d(o,a);tn(t,l,v,cl(t))}else tn(t,l,a,cl(t))}catch(j){tn(t,l,{then:function(){},status:"rejected",reason:j},cl())}finally{M.p=i,u!==null&&c.types!==null&&(u.types=c.types),S.T=u}}function am(){}function ac(t,l,e,a){if(t.tag!==5)throw Error(m(476));var n=ms(t).queue;ds(t,n,l,G,e===null?am:function(){return hs(t),e(a)})}function ms(t){var l=t.memoizedState;if(l!==null)return l;l={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gl,lastRenderedState:G},next:null};var e={};return l.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gl,lastRenderedState:e},next:null},t.memoizedState=l,t=t.alternate,t!==null&&(t.memoizedState=l),l}function hs(t){var l=ms(t);l.next===null&&(l=t.alternate.memoizedState),tn(t,l.next.queue,{},cl())}function nc(){return Ht(bn)}function gs(){return xt().memoizedState}function ps(){return xt().memoizedState}function nm(t){for(var l=t.return;l!==null;){switch(l.tag){case 24:case 3:var e=cl();t=ie(e);var a=ue(l,t,e);a!==null&&(Ft(a,l,e),Wa(a,l,e)),l={cache:Hu()},t.payload=l;return}l=l.return}}function im(t,l,e){var a=cl();e={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},oi(t)?bs(l,e):(e=zu(t,l,e,a),e!==null&&(Ft(e,t,a),vs(e,l,a)))}function ys(t,l,e){var a=cl();tn(t,l,e,a)}function tn(t,l,e,a){var n={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(oi(t))bs(l,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=l.lastRenderedReducer,i!==null))try{var u=l.lastRenderedState,c=i(u,e);if(n.hasEagerState=!0,n.eagerState=c,ll(c,u))return Qn(t,l,n,0),rt===null&&Ln(),!1}catch{}if(e=zu(t,l,n,a),e!==null)return Ft(e,t,a),vs(e,l,a),!0}return!1}function ic(t,l,e,a){if(a={lane:2,revertLane:wc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},oi(t)){if(l)throw Error(m(479))}else l=zu(t,e,a,2),l!==null&&Ft(l,t,2)}function oi(t){var l=t.alternate;return t===Q||l!==null&&l===Q}function bs(t,l){ma=ei=!0;var e=t.pending;e===null?l.next=l:(l.next=e.next,e.next=l),t.pending=l}function vs(t,l,e){if((e&4194048)!==0){var a=l.lanes;a&=t.pendingLanes,e|=a,l.lanes=e,jf(t,e)}}var ln={readContext:Ht,use:ii,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useLayoutEffect:gt,useInsertionEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useSyncExternalStore:gt,useId:gt,useHostTransitionStatus:gt,useFormState:gt,useActionState:gt,useOptimistic:gt,useMemoCache:gt,useCacheRefresh:gt};ln.useEffectEvent=gt;var xs={readContext:Ht,use:ii,useCallback:function(t,l){return Gt().memoizedState=[t,l===void 0?null:l],t},useContext:Ht,useEffect:as,useImperativeHandle:function(t,l,e){e=e!=null?e.concat([t]):null,ci(4194308,4,cs.bind(null,l,t),e)},useLayoutEffect:function(t,l){return ci(4194308,4,t,l)},useInsertionEffect:function(t,l){ci(4,2,t,l)},useMemo:function(t,l){var e=Gt();l=l===void 0?null:l;var a=t();if(qe){$l(!0);try{t()}finally{$l(!1)}}return e.memoizedState=[a,l],a},useReducer:function(t,l,e){var a=Gt();if(e!==void 0){var n=e(l);if(qe){$l(!0);try{e(l)}finally{$l(!1)}}}else n=l;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=im.bind(null,Q,t),[a.memoizedState,t]},useRef:function(t){var l=Gt();return t={current:t},l.memoizedState=t},useState:function(t){t=Iu(t);var l=t.queue,e=ys.bind(null,Q,l);return l.dispatch=e,[t.memoizedState,e]},useDebugValue:lc,useDeferredValue:function(t,l){var e=Gt();return ec(e,t,l)},useTransition:function(){var t=Iu(!1);return t=ds.bind(null,Q,t.queue,!0,!1),Gt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,l,e){var a=Q,n=Gt();if(I){if(e===void 0)throw Error(m(407));e=e()}else{if(e=l(),rt===null)throw Error(m(349));(W&127)!==0||Xo(a,l,e)}n.memoizedState=e;var i={value:e,getSnapshot:l};return n.queue=i,as(Qo.bind(null,a,i,t),[t]),a.flags|=2048,ga(9,{destroy:void 0},Lo.bind(null,a,i,e,l),null),e},useId:function(){var t=Gt(),l=rt.identifierPrefix;if(I){var e=Ml,a=Al;e=(a&~(1<<32-tl(a)-1)).toString(32)+e,l="_"+l+"R_"+e,e=ai++,0<e&&(l+="H"+e.toString(32)),l+="_"}else e=Id++,l="_"+l+"r_"+e.toString(32)+"_";return t.memoizedState=l},useHostTransitionStatus:nc,useFormState:Io,useActionState:Io,useOptimistic:function(t){var l=Gt();l.memoizedState=l.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return l.queue=e,l=ic.bind(null,Q,!0,e),e.dispatch=l,[t,l]},useMemoCache:Wu,useCacheRefresh:function(){return Gt().memoizedState=nm.bind(null,Q)},useEffectEvent:function(t){var l=Gt(),e={impl:t};return l.memoizedState=e,function(){if((lt&2)!==0)throw Error(m(440));return e.impl.apply(void 0,arguments)}}},uc={readContext:Ht,use:ii,useCallback:os,useContext:Ht,useEffect:tc,useImperativeHandle:fs,useInsertionEffect:is,useLayoutEffect:us,useMemo:ss,useReducer:ui,useRef:es,useState:function(){return ui(Gl)},useDebugValue:lc,useDeferredValue:function(t,l){var e=xt();return rs(e,ct.memoizedState,t,l)},useTransition:function(){var t=ui(Gl)[0],l=xt().memoizedState;return[typeof t=="boolean"?t:Pa(t),l]},useSyncExternalStore:Go,useId:gs,useHostTransitionStatus:nc,useFormState:Po,useActionState:Po,useOptimistic:function(t,l){var e=xt();return Ko(e,ct,t,l)},useMemoCache:Wu,useCacheRefresh:ps};uc.useEffectEvent=ns;var Ss={readContext:Ht,use:ii,useCallback:os,useContext:Ht,useEffect:tc,useImperativeHandle:fs,useInsertionEffect:is,useLayoutEffect:us,useMemo:ss,useReducer:$u,useRef:es,useState:function(){return $u(Gl)},useDebugValue:lc,useDeferredValue:function(t,l){var e=xt();return ct===null?ec(e,t,l):rs(e,ct.memoizedState,t,l)},useTransition:function(){var t=$u(Gl)[0],l=xt().memoizedState;return[typeof t=="boolean"?t:Pa(t),l]},useSyncExternalStore:Go,useId:gs,useHostTransitionStatus:nc,useFormState:ls,useActionState:ls,useOptimistic:function(t,l){var e=xt();return ct!==null?Ko(e,ct,t,l):(e.baseState=t,[t,e.queue.dispatch])},useMemoCache:Wu,useCacheRefresh:ps};Ss.useEffectEvent=ns;function cc(t,l,e,a){l=t.memoizedState,e=e(a,l),e=e==null?l:U({},l,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var fc={enqueueSetState:function(t,l,e){t=t._reactInternals;var a=cl(),n=ie(a);n.payload=l,e!=null&&(n.callback=e),l=ue(t,n,a),l!==null&&(Ft(l,t,a),Wa(l,t,a))},enqueueReplaceState:function(t,l,e){t=t._reactInternals;var a=cl(),n=ie(a);n.tag=1,n.payload=l,e!=null&&(n.callback=e),l=ue(t,n,a),l!==null&&(Ft(l,t,a),Wa(l,t,a))},enqueueForceUpdate:function(t,l){t=t._reactInternals;var e=cl(),a=ie(e);a.tag=2,l!=null&&(a.callback=l),l=ue(t,a,e),l!==null&&(Ft(l,t,e),Wa(l,t,e))}};function zs(t,l,e,a,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,u):l.prototype&&l.prototype.isPureReactComponent?!Xa(e,a)||!Xa(n,i):!0}function js(t,l,e,a){t=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(e,a),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(e,a),l.state!==t&&fc.enqueueReplaceState(l,l.state,null)}function Ye(t,l){var e=l;if("ref"in l){e={};for(var a in l)a!=="ref"&&(e[a]=l[a])}if(t=t.defaultProps){e===l&&(e=U({},e));for(var n in t)e[n]===void 0&&(e[n]=t[n])}return e}function Es(t){Xn(t)}function Ts(t){console.error(t)}function As(t){Xn(t)}function si(t,l){try{var e=t.onUncaughtError;e(l.value,{componentStack:l.stack})}catch(a){setTimeout(function(){throw a})}}function Ms(t,l,e){try{var a=t.onCaughtError;a(e.value,{componentStack:e.stack,errorBoundary:l.tag===1?l.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function oc(t,l,e){return e=ie(e),e.tag=3,e.payload={element:null},e.callback=function(){si(t,l)},e}function _s(t){return t=ie(t),t.tag=3,t}function Ns(t,l,e,a){var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;t.payload=function(){return n(i)},t.callback=function(){Ms(l,e,a)}}var u=e.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Ms(l,e,a),typeof n!="function"&&(de===null?de=new Set([this]):de.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function um(t,l,e,a,n){if(e.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(l=e.alternate,l!==null&&ca(l,e,n,!0),e=al.current,e!==null){switch(e.tag){case 31:case 13:return pl===null?zi():e.alternate===null&&pt===0&&(pt=3),e.flags&=-257,e.flags|=65536,e.lanes=n,a===$n?e.flags|=16384:(l=e.updateQueue,l===null?e.updateQueue=new Set([a]):l.add(a),Rc(t,a,n)),!1;case 22:return e.flags|=65536,a===$n?e.flags|=16384:(l=e.updateQueue,l===null?(l={transitions:null,markerInstances:null,retryQueue:new Set([a])},e.updateQueue=l):(e=l.retryQueue,e===null?l.retryQueue=new Set([a]):e.add(a)),Rc(t,a,n)),!1}throw Error(m(435,e.tag))}return Rc(t,a,n),zi(),!1}if(I)return l=al.current,l!==null?((l.flags&65536)===0&&(l.flags|=256),l.flags|=65536,l.lanes=n,a!==_u&&(t=Error(m(422),{cause:a}),Za(dl(t,e)))):(a!==_u&&(l=Error(m(423),{cause:a}),Za(dl(l,e))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=dl(a,e),n=oc(t.stateNode,a,n),Yu(t,n),pt!==4&&(pt=2)),!1;var i=Error(m(520),{cause:a});if(i=dl(i,e),sn===null?sn=[i]:sn.push(i),pt!==4&&(pt=2),l===null)return!0;a=dl(a,e),e=l;do{switch(e.tag){case 3:return e.flags|=65536,t=n&-n,e.lanes|=t,t=oc(e.stateNode,a,t),Yu(e,t),!1;case 1:if(l=e.type,i=e.stateNode,(e.flags&128)===0&&(typeof l.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(de===null||!de.has(i))))return e.flags|=65536,n&=-n,e.lanes|=n,n=_s(n),Ns(n,t,e,a),Yu(e,n),!1}e=e.return}while(e!==null);return!1}var sc=Error(m(461)),jt=!1;function Rt(t,l,e,a){l.child=t===null?Ho(l,null,e,a):we(l,t.child,e,a)}function Os(t,l,e,a,n){e=e.render;var i=l.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return He(l),a=Vu(t,l,e,u,i,n),c=Ku(),t!==null&&!jt?(Ju(t,l,n),Xl(t,l,n)):(I&&c&&Au(l),l.flags|=1,Rt(t,l,a,n),l.child)}function Ds(t,l,e,a,n){if(t===null){var i=e.type;return typeof i=="function"&&!ju(i)&&i.defaultProps===void 0&&e.compare===null?(l.tag=15,l.type=i,Us(t,l,i,a,n)):(t=Vn(e.type,null,a,l,l.mode,n),t.ref=l.ref,t.return=l,l.child=t)}if(i=t.child,!bc(t,n)){var u=i.memoizedProps;if(e=e.compare,e=e!==null?e:Xa,e(u,a)&&t.ref===l.ref)return Xl(t,l,n)}return l.flags|=1,t=Cl(i,a),t.ref=l.ref,t.return=l,l.child=t}function Us(t,l,e,a,n){if(t!==null){var i=t.memoizedProps;if(Xa(i,a)&&t.ref===l.ref)if(jt=!1,l.pendingProps=a=i,bc(t,n))(t.flags&131072)!==0&&(jt=!0);else return l.lanes=t.lanes,Xl(t,l,n)}return rc(t,l,e,a,n)}function Hs(t,l,e,a){var n=a.children,i=t!==null?t.memoizedState:null;if(t===null&&l.stateNode===null&&(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((l.flags&128)!==0){if(i=i!==null?i.baseLanes|e:e,t!==null){for(a=l.child=t.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,l.child=null;return Rs(t,l,i,e,a)}if((e&536870912)!==0)l.memoizedState={baseLanes:0,cachePool:null},t!==null&&Wn(l,i!==null?i.cachePool:null),i!==null?Bo(l,i):Xu(),wo(l);else return a=l.lanes=536870912,Rs(t,l,i!==null?i.baseLanes|e:e,e,a)}else i!==null?(Wn(l,i.cachePool),Bo(l,i),fe(),l.memoizedState=null):(t!==null&&Wn(l,null),Xu(),fe());return Rt(t,l,n,e),l.child}function en(t,l){return t!==null&&t.tag===22||l.stateNode!==null||(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.sibling}function Rs(t,l,e,a,n){var i=Cu();return i=i===null?null:{parent:St._currentValue,pool:i},l.memoizedState={baseLanes:e,cachePool:i},t!==null&&Wn(l,null),Xu(),wo(l),t!==null&&ca(t,l,a,!0),l.childLanes=n,null}function ri(t,l){return l=mi({mode:l.mode,children:l.children},t.mode),l.ref=t.ref,t.child=l,l.return=t,l}function Cs(t,l,e){return we(l,t.child,null,e),t=ri(l,l.pendingProps),t.flags|=2,nl(l),l.memoizedState=null,t}function cm(t,l,e){var a=l.pendingProps,n=(l.flags&128)!==0;if(l.flags&=-129,t===null){if(I){if(a.mode==="hidden")return t=ri(l,a),l.lanes=536870912,en(null,t);if(Qu(l),(t=dt)?(t=Jr(t,gl),t=t!==null&&t.data==="&"?t:null,t!==null&&(l.memoizedState={dehydrated:t,treeContext:te!==null?{id:Al,overflow:Ml}:null,retryLane:536870912,hydrationErrors:null},e=bo(t),e.return=l,l.child=e,Ut=l,dt=null)):t=null,t===null)throw ee(l);return l.lanes=536870912,null}return ri(l,a)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(Qu(l),n)if(l.flags&256)l.flags&=-257,l=Cs(t,l,e);else if(l.memoizedState!==null)l.child=t.child,l.flags|=128,l=null;else throw Error(m(558));else if(jt||ca(t,l,e,!1),n=(e&t.childLanes)!==0,jt||n){if(a=rt,a!==null&&(u=Ef(a,e),u!==0&&u!==i.retryLane))throw i.retryLane=u,Ne(t,u),Ft(a,t,u),sc;zi(),l=Cs(t,l,e)}else t=i.treeContext,dt=yl(u.nextSibling),Ut=l,I=!0,le=null,gl=!1,t!==null&&So(l,t),l=ri(l,a),l.flags|=4096;return l}return t=Cl(t.child,{mode:a.mode,children:a.children}),t.ref=l.ref,l.child=t,t.return=l,t}function di(t,l){var e=l.ref;if(e===null)t!==null&&t.ref!==null&&(l.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(m(284));(t===null||t.ref!==e)&&(l.flags|=4194816)}}function rc(t,l,e,a,n){return He(l),e=Vu(t,l,e,a,void 0,n),a=Ku(),t!==null&&!jt?(Ju(t,l,n),Xl(t,l,n)):(I&&a&&Au(l),l.flags|=1,Rt(t,l,e,n),l.child)}function Bs(t,l,e,a,n,i){return He(l),l.updateQueue=null,e=Yo(l,a,e,n),qo(t),a=Ku(),t!==null&&!jt?(Ju(t,l,i),Xl(t,l,i)):(I&&a&&Au(l),l.flags|=1,Rt(t,l,e,i),l.child)}function ws(t,l,e,a,n){if(He(l),l.stateNode===null){var i=aa,u=e.contextType;typeof u=="object"&&u!==null&&(i=Ht(u)),i=new e(a,i),l.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=fc,l.stateNode=i,i._reactInternals=l,i=l.stateNode,i.props=a,i.state=l.memoizedState,i.refs={},wu(l),u=e.contextType,i.context=typeof u=="object"&&u!==null?Ht(u):aa,i.state=l.memoizedState,u=e.getDerivedStateFromProps,typeof u=="function"&&(cc(l,e,u,a),i.state=l.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&fc.enqueueReplaceState(i,i.state,null),$a(l,a,i,n),Fa(),i.state=l.memoizedState),typeof i.componentDidMount=="function"&&(l.flags|=4194308),a=!0}else if(t===null){i=l.stateNode;var c=l.memoizedProps,o=Ye(e,c);i.props=o;var p=i.context,v=e.contextType;u=aa,typeof v=="object"&&v!==null&&(u=Ht(v));var j=e.getDerivedStateFromProps;v=typeof j=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=l.pendingProps!==c,v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||p!==u)&&js(l,i,a,u),ne=!1;var y=l.memoizedState;i.state=y,$a(l,a,i,n),Fa(),p=l.memoizedState,c||y!==p||ne?(typeof j=="function"&&(cc(l,e,j,a),p=l.memoizedState),(o=ne||zs(l,e,o,a,y,p,u))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(l.flags|=4194308)):(typeof i.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=a,l.memoizedState=p),i.props=a,i.state=p,i.context=u,a=o):(typeof i.componentDidMount=="function"&&(l.flags|=4194308),a=!1)}else{i=l.stateNode,qu(t,l),u=l.memoizedProps,v=Ye(e,u),i.props=v,j=l.pendingProps,y=i.context,p=e.contextType,o=aa,typeof p=="object"&&p!==null&&(o=Ht(p)),c=e.getDerivedStateFromProps,(p=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==j||y!==o)&&js(l,i,a,o),ne=!1,y=l.memoizedState,i.state=y,$a(l,a,i,n),Fa();var b=l.memoizedState;u!==j||y!==b||ne||t!==null&&t.dependencies!==null&&Jn(t.dependencies)?(typeof c=="function"&&(cc(l,e,c,a),b=l.memoizedState),(v=ne||zs(l,e,v,a,y,b,o)||t!==null&&t.dependencies!==null&&Jn(t.dependencies))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,b,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,b,o)),typeof i.componentDidUpdate=="function"&&(l.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&y===t.memoizedState||(l.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&y===t.memoizedState||(l.flags|=1024),l.memoizedProps=a,l.memoizedState=b),i.props=a,i.state=b,i.context=o,a=v):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&y===t.memoizedState||(l.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&y===t.memoizedState||(l.flags|=1024),a=!1)}return i=a,di(t,l),a=(l.flags&128)!==0,i||a?(i=l.stateNode,e=a&&typeof e.getDerivedStateFromError!="function"?null:i.render(),l.flags|=1,t!==null&&a?(l.child=we(l,t.child,null,n),l.child=we(l,null,e,n)):Rt(t,l,e,n),l.memoizedState=i.state,t=l.child):t=Xl(t,l,n),t}function qs(t,l,e,a){return De(),l.flags|=256,Rt(t,l,e,a),l.child}var dc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mc(t){return{baseLanes:t,cachePool:Mo()}}function hc(t,l,e){return t=t!==null?t.childLanes&~e:0,l&&(t|=ul),t}function Ys(t,l,e){var a=l.pendingProps,n=!1,i=(l.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(vt.current&2)!==0),u&&(n=!0,l.flags&=-129),u=(l.flags&32)!==0,l.flags&=-33,t===null){if(I){if(n?ce(l):fe(),(t=dt)?(t=Jr(t,gl),t=t!==null&&t.data!=="&"?t:null,t!==null&&(l.memoizedState={dehydrated:t,treeContext:te!==null?{id:Al,overflow:Ml}:null,retryLane:536870912,hydrationErrors:null},e=bo(t),e.return=l,l.child=e,Ut=l,dt=null)):t=null,t===null)throw ee(l);return Fc(t)?l.lanes=32:l.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(fe(),n=l.mode,c=mi({mode:"hidden",children:c},n),a=Oe(a,n,e,null),c.return=l,a.return=l,c.sibling=a,l.child=c,a=l.child,a.memoizedState=mc(e),a.childLanes=hc(t,u,e),l.memoizedState=dc,en(null,a)):(ce(l),gc(l,c))}var o=t.memoizedState;if(o!==null&&(c=o.dehydrated,c!==null)){if(i)l.flags&256?(ce(l),l.flags&=-257,l=pc(t,l,e)):l.memoizedState!==null?(fe(),l.child=t.child,l.flags|=128,l=null):(fe(),c=a.fallback,n=l.mode,a=mi({mode:"visible",children:a.children},n),c=Oe(c,n,e,null),c.flags|=2,a.return=l,c.return=l,a.sibling=c,l.child=a,we(l,t.child,null,e),a=l.child,a.memoizedState=mc(e),a.childLanes=hc(t,u,e),l.memoizedState=dc,l=en(null,a));else if(ce(l),Fc(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var p=u.dgst;u=p,a=Error(m(419)),a.stack="",a.digest=u,Za({value:a,source:null,stack:null}),l=pc(t,l,e)}else if(jt||ca(t,l,e,!1),u=(e&t.childLanes)!==0,jt||u){if(u=rt,u!==null&&(a=Ef(u,e),a!==0&&a!==o.retryLane))throw o.retryLane=a,Ne(t,a),Ft(u,t,a),sc;Wc(c)||zi(),l=pc(t,l,e)}else Wc(c)?(l.flags|=192,l.child=t.child,l=null):(t=o.treeContext,dt=yl(c.nextSibling),Ut=l,I=!0,le=null,gl=!1,t!==null&&So(l,t),l=gc(l,a.children),l.flags|=4096);return l}return n?(fe(),c=a.fallback,n=l.mode,o=t.child,p=o.sibling,a=Cl(o,{mode:"hidden",children:a.children}),a.subtreeFlags=o.subtreeFlags&65011712,p!==null?c=Cl(p,c):(c=Oe(c,n,e,null),c.flags|=2),c.return=l,a.return=l,a.sibling=c,l.child=a,en(null,a),a=l.child,c=t.child.memoizedState,c===null?c=mc(e):(n=c.cachePool,n!==null?(o=St._currentValue,n=n.parent!==o?{parent:o,pool:o}:n):n=Mo(),c={baseLanes:c.baseLanes|e,cachePool:n}),a.memoizedState=c,a.childLanes=hc(t,u,e),l.memoizedState=dc,en(t.child,a)):(ce(l),e=t.child,t=e.sibling,e=Cl(e,{mode:"visible",children:a.children}),e.return=l,e.sibling=null,t!==null&&(u=l.deletions,u===null?(l.deletions=[t],l.flags|=16):u.push(t)),l.child=e,l.memoizedState=null,e)}function gc(t,l){return l=mi({mode:"visible",children:l},t.mode),l.return=t,t.child=l}function mi(t,l){return t=el(22,t,null,l),t.lanes=0,t}function pc(t,l,e){return we(l,t.child,null,e),t=gc(l,l.pendingProps.children),t.flags|=2,l.memoizedState=null,t}function Gs(t,l,e){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l),Du(t.return,l,e)}function yc(t,l,e,a,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:a,tail:e,tailMode:n,treeForkCount:i}:(u.isBackwards=l,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=e,u.tailMode=n,u.treeForkCount=i)}function Xs(t,l,e){var a=l.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=vt.current,c=(u&2)!==0;if(c?(u=u&1|2,l.flags|=128):u&=1,_(vt,u),Rt(t,l,a,e),a=I?Qa:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=l.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gs(t,e,l);else if(t.tag===19)Gs(t,e,l);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break t;for(;t.sibling===null;){if(t.return===null||t.return===l)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(e=l.child,n=null;e!==null;)t=e.alternate,t!==null&&li(t)===null&&(n=e),e=e.sibling;e=n,e===null?(n=l.child,l.child=null):(n=e.sibling,e.sibling=null),yc(l,!1,n,e,i,a);break;case"backwards":case"unstable_legacy-backwards":for(e=null,n=l.child,l.child=null;n!==null;){if(t=n.alternate,t!==null&&li(t)===null){l.child=n;break}t=n.sibling,n.sibling=e,e=n,n=t}yc(l,!0,e,null,i,a);break;case"together":yc(l,!1,null,null,void 0,a);break;default:l.memoizedState=null}return l.child}function Xl(t,l,e){if(t!==null&&(l.dependencies=t.dependencies),re|=l.lanes,(e&l.childLanes)===0)if(t!==null){if(ca(t,l,e,!1),(e&l.childLanes)===0)return null}else return null;if(t!==null&&l.child!==t.child)throw Error(m(153));if(l.child!==null){for(t=l.child,e=Cl(t,t.pendingProps),l.child=e,e.return=l;t.sibling!==null;)t=t.sibling,e=e.sibling=Cl(t,t.pendingProps),e.return=l;e.sibling=null}return l.child}function bc(t,l){return(t.lanes&l)!==0?!0:(t=t.dependencies,!!(t!==null&&Jn(t)))}function fm(t,l,e){switch(l.tag){case 3:Yt(l,l.stateNode.containerInfo),ae(l,St,t.memoizedState.cache),De();break;case 27:case 5:_a(l);break;case 4:Yt(l,l.stateNode.containerInfo);break;case 10:ae(l,l.type,l.memoizedProps.value);break;case 31:if(l.memoizedState!==null)return l.flags|=128,Qu(l),null;break;case 13:var a=l.memoizedState;if(a!==null)return a.dehydrated!==null?(ce(l),l.flags|=128,null):(e&l.child.childLanes)!==0?Ys(t,l,e):(ce(l),t=Xl(t,l,e),t!==null?t.sibling:null);ce(l);break;case 19:var n=(t.flags&128)!==0;if(a=(e&l.childLanes)!==0,a||(ca(t,l,e,!1),a=(e&l.childLanes)!==0),n){if(a)return Xs(t,l,e);l.flags|=128}if(n=l.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),_(vt,vt.current),a)break;return null;case 22:return l.lanes=0,Hs(t,l,e,l.pendingProps);case 24:ae(l,St,t.memoizedState.cache)}return Xl(t,l,e)}function Ls(t,l,e){if(t!==null)if(t.memoizedProps!==l.pendingProps)jt=!0;else{if(!bc(t,e)&&(l.flags&128)===0)return jt=!1,fm(t,l,e);jt=(t.flags&131072)!==0}else jt=!1,I&&(l.flags&1048576)!==0&&xo(l,Qa,l.index);switch(l.lanes=0,l.tag){case 16:t:{var a=l.pendingProps;if(t=Ce(l.elementType),l.type=t,typeof t=="function")ju(t)?(a=Ye(t,a),l.tag=1,l=ws(null,l,t,a,e)):(l.tag=0,l=rc(null,l,t,a,e));else{if(t!=null){var n=t.$$typeof;if(n===fl){l.tag=11,l=Os(null,l,t,a,e);break t}else if(n===$){l.tag=14,l=Ds(null,l,t,a,e);break t}}throw l=Dl(t)||t,Error(m(306,l,""))}}return l;case 0:return rc(t,l,l.type,l.pendingProps,e);case 1:return a=l.type,n=Ye(a,l.pendingProps),ws(t,l,a,n,e);case 3:t:{if(Yt(l,l.stateNode.containerInfo),t===null)throw Error(m(387));a=l.pendingProps;var i=l.memoizedState;n=i.element,qu(t,l),$a(l,a,null,e);var u=l.memoizedState;if(a=u.cache,ae(l,St,a),a!==i.cache&&Uu(l,[St],e,!0),Fa(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},l.updateQueue.baseState=i,l.memoizedState=i,l.flags&256){l=qs(t,l,a,e);break t}else if(a!==n){n=dl(Error(m(424)),l),Za(n),l=qs(t,l,a,e);break t}else for(t=l.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,dt=yl(t.firstChild),Ut=l,I=!0,le=null,gl=!0,e=Ho(l,null,a,e),l.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(De(),a===n){l=Xl(t,l,e);break t}Rt(t,l,a,e)}l=l.child}return l;case 26:return di(t,l),t===null?(e=Pr(l.type,null,l.pendingProps,null))?l.memoizedState=e:I||(e=l.type,t=l.pendingProps,a=Ni(V.current).createElement(e),a[Dt]=l,a[Zt]=t,Ct(a,e,t),_t(a),l.stateNode=a):l.memoizedState=Pr(l.type,t.memoizedProps,l.pendingProps,t.memoizedState),null;case 27:return _a(l),t===null&&I&&(a=l.stateNode=Fr(l.type,l.pendingProps,V.current),Ut=l,gl=!0,n=dt,pe(l.type)?($c=n,dt=yl(a.firstChild)):dt=n),Rt(t,l,l.pendingProps.children,e),di(t,l),t===null&&(l.flags|=4194304),l.child;case 5:return t===null&&I&&((n=a=dt)&&(a=qm(a,l.type,l.pendingProps,gl),a!==null?(l.stateNode=a,Ut=l,dt=yl(a.firstChild),gl=!1,n=!0):n=!1),n||ee(l)),_a(l),n=l.type,i=l.pendingProps,u=t!==null?t.memoizedProps:null,a=i.children,Kc(n,i)?a=null:u!==null&&Kc(n,u)&&(l.flags|=32),l.memoizedState!==null&&(n=Vu(t,l,Pd,null,null,e),bn._currentValue=n),di(t,l),Rt(t,l,a,e),l.child;case 6:return t===null&&I&&((t=e=dt)&&(e=Ym(e,l.pendingProps,gl),e!==null?(l.stateNode=e,Ut=l,dt=null,t=!0):t=!1),t||ee(l)),null;case 13:return Ys(t,l,e);case 4:return Yt(l,l.stateNode.containerInfo),a=l.pendingProps,t===null?l.child=we(l,null,a,e):Rt(t,l,a,e),l.child;case 11:return Os(t,l,l.type,l.pendingProps,e);case 7:return Rt(t,l,l.pendingProps,e),l.child;case 8:return Rt(t,l,l.pendingProps.children,e),l.child;case 12:return Rt(t,l,l.pendingProps.children,e),l.child;case 10:return a=l.pendingProps,ae(l,l.type,a.value),Rt(t,l,a.children,e),l.child;case 9:return n=l.type._context,a=l.pendingProps.children,He(l),n=Ht(n),a=a(n),l.flags|=1,Rt(t,l,a,e),l.child;case 14:return Ds(t,l,l.type,l.pendingProps,e);case 15:return Us(t,l,l.type,l.pendingProps,e);case 19:return Xs(t,l,e);case 31:return cm(t,l,e);case 22:return Hs(t,l,e,l.pendingProps);case 24:return He(l),a=Ht(St),t===null?(n=Cu(),n===null&&(n=rt,i=Hu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=e),n=i),l.memoizedState={parent:a,cache:n},wu(l),ae(l,St,n)):((t.lanes&e)!==0&&(qu(t,l),$a(l,null,null,e),Fa()),n=t.memoizedState,i=l.memoizedState,n.parent!==a?(n={parent:a,cache:a},l.memoizedState=n,l.lanes===0&&(l.memoizedState=l.updateQueue.baseState=n),ae(l,St,a)):(a=i.cache,ae(l,St,a),a!==n.cache&&Uu(l,[St],e,!0))),Rt(t,l,l.pendingProps.children,e),l.child;case 29:throw l.pendingProps}throw Error(m(156,l.tag))}function Ll(t){t.flags|=4}function vc(t,l,e,a,n){if((l=(t.mode&32)!==0)&&(l=!1),l){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(gr())t.flags|=8192;else throw Be=$n,Bu}else t.flags&=-16777217}function Qs(t,l){if(l.type!=="stylesheet"||(l.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!n0(l))if(gr())t.flags|=8192;else throw Be=$n,Bu}function hi(t,l){l!==null&&(t.flags|=4),t.flags&16384&&(l=t.tag!==22?Sf():536870912,t.lanes|=l,va|=l)}function an(t,l){if(!I)switch(t.tailMode){case"hidden":l=t.tail;for(var e=null;l!==null;)l.alternate!==null&&(e=l),l=l.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?l||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function mt(t){var l=t.alternate!==null&&t.alternate.child===t.child,e=0,a=0;if(l)for(var n=t.child;n!==null;)e|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)e|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=e,l}function om(t,l,e){var a=l.pendingProps;switch(Mu(l),l.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(l),null;case 1:return mt(l),null;case 3:return e=l.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),l.memoizedState.cache!==a&&(l.flags|=2048),ql(St),bt(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(ua(l)?Ll(l):t===null||t.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,Nu())),mt(l),null;case 26:var n=l.type,i=l.memoizedState;return t===null?(Ll(l),i!==null?(mt(l),Qs(l,i)):(mt(l),vc(l,n,null,a,e))):i?i!==t.memoizedState?(Ll(l),mt(l),Qs(l,i)):(mt(l),l.flags&=-16777217):(t=t.memoizedProps,t!==a&&Ll(l),mt(l),vc(l,n,t,a,e)),null;case 27:if(Tn(l),e=V.current,n=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==a&&Ll(l);else{if(!a){if(l.stateNode===null)throw Error(m(166));return mt(l),null}t=H.current,ua(l)?zo(l):(t=Fr(n,a,e),l.stateNode=t,Ll(l))}return mt(l),null;case 5:if(Tn(l),n=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==a&&Ll(l);else{if(!a){if(l.stateNode===null)throw Error(m(166));return mt(l),null}if(i=H.current,ua(l))zo(l);else{var u=Ni(V.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[Dt]=l,i[Zt]=a;t:for(u=l.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===l)break t;for(;u.sibling===null;){if(u.return===null||u.return===l)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}l.stateNode=i;t:switch(Ct(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&Ll(l)}}return mt(l),vc(l,l.type,t===null?null:t.memoizedProps,l.pendingProps,e),null;case 6:if(t&&l.stateNode!=null)t.memoizedProps!==a&&Ll(l);else{if(typeof a!="string"&&l.stateNode===null)throw Error(m(166));if(t=V.current,ua(l)){if(t=l.stateNode,e=l.memoizedProps,a=null,n=Ut,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[Dt]=l,t=!!(t.nodeValue===e||a!==null&&a.suppressHydrationWarning===!0||Yr(t.nodeValue,e)),t||ee(l,!0)}else t=Ni(t).createTextNode(a),t[Dt]=l,l.stateNode=t}return mt(l),null;case 31:if(e=l.memoizedState,t===null||t.memoizedState!==null){if(a=ua(l),e!==null){if(t===null){if(!a)throw Error(m(318));if(t=l.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(557));t[Dt]=l}else De(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;mt(l),t=!1}else e=Nu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=e),t=!0;if(!t)return l.flags&256?(nl(l),l):(nl(l),null);if((l.flags&128)!==0)throw Error(m(558))}return mt(l),null;case 13:if(a=l.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=ua(l),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(m(318));if(n=l.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(317));n[Dt]=l}else De(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;mt(l),n=!1}else n=Nu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return l.flags&256?(nl(l),l):(nl(l),null)}return nl(l),(l.flags&128)!==0?(l.lanes=e,l):(e=a!==null,t=t!==null&&t.memoizedState!==null,e&&(a=l.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),e!==t&&e&&(l.child.flags|=8192),hi(l,l.updateQueue),mt(l),null);case 4:return bt(),t===null&&Xc(l.stateNode.containerInfo),mt(l),null;case 10:return ql(l.type),mt(l),null;case 19:if(E(vt),a=l.memoizedState,a===null)return mt(l),null;if(n=(l.flags&128)!==0,i=a.rendering,i===null)if(n)an(a,!1);else{if(pt!==0||t!==null&&(t.flags&128)!==0)for(t=l.child;t!==null;){if(i=li(t),i!==null){for(l.flags|=128,an(a,!1),t=i.updateQueue,l.updateQueue=t,hi(l,t),l.subtreeFlags=0,t=e,e=l.child;e!==null;)yo(e,t),e=e.sibling;return _(vt,vt.current&1|2),I&&Bl(l,a.treeForkCount),l.child}t=t.sibling}a.tail!==null&&It()>vi&&(l.flags|=128,n=!0,an(a,!1),l.lanes=4194304)}else{if(!n)if(t=li(i),t!==null){if(l.flags|=128,n=!0,t=t.updateQueue,l.updateQueue=t,hi(l,t),an(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!I)return mt(l),null}else 2*It()-a.renderingStartTime>vi&&e!==536870912&&(l.flags|=128,n=!0,an(a,!1),l.lanes=4194304);a.isBackwards?(i.sibling=l.child,l.child=i):(t=a.last,t!==null?t.sibling=i:l.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=It(),t.sibling=null,e=vt.current,_(vt,n?e&1|2:e&1),I&&Bl(l,a.treeForkCount),t):(mt(l),null);case 22:case 23:return nl(l),Lu(),a=l.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(l.flags|=8192):a&&(l.flags|=8192),a?(e&536870912)!==0&&(l.flags&128)===0&&(mt(l),l.subtreeFlags&6&&(l.flags|=8192)):mt(l),e=l.updateQueue,e!==null&&hi(l,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),a=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),a!==e&&(l.flags|=2048),t!==null&&E(Re),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),l.memoizedState.cache!==e&&(l.flags|=2048),ql(St),mt(l),null;case 25:return null;case 30:return null}throw Error(m(156,l.tag))}function sm(t,l){switch(Mu(l),l.tag){case 1:return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 3:return ql(St),bt(),t=l.flags,(t&65536)!==0&&(t&128)===0?(l.flags=t&-65537|128,l):null;case 26:case 27:case 5:return Tn(l),null;case 31:if(l.memoizedState!==null){if(nl(l),l.alternate===null)throw Error(m(340));De()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 13:if(nl(l),t=l.memoizedState,t!==null&&t.dehydrated!==null){if(l.alternate===null)throw Error(m(340));De()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 19:return E(vt),null;case 4:return bt(),null;case 10:return ql(l.type),null;case 22:case 23:return nl(l),Lu(),t!==null&&E(Re),t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 24:return ql(St),null;case 25:return null;default:return null}}function Zs(t,l){switch(Mu(l),l.tag){case 3:ql(St),bt();break;case 26:case 27:case 5:Tn(l);break;case 4:bt();break;case 31:l.memoizedState!==null&&nl(l);break;case 13:nl(l);break;case 19:E(vt);break;case 10:ql(l.type);break;case 22:case 23:nl(l),Lu(),t!==null&&E(Re);break;case 24:ql(St)}}function nn(t,l){try{var e=l.updateQueue,a=e!==null?e.lastEffect:null;if(a!==null){var n=a.next;e=n;do{if((e.tag&t)===t){a=void 0;var i=e.create,u=e.inst;a=i(),u.destroy=a}e=e.next}while(e!==n)}}catch(c){it(l,l.return,c)}}function oe(t,l,e){try{var a=l.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=l;var o=e,p=c;try{p()}catch(v){it(n,o,v)}}}a=a.next}while(a!==i)}}catch(v){it(l,l.return,v)}}function Vs(t){var l=t.updateQueue;if(l!==null){var e=t.stateNode;try{Co(l,e)}catch(a){it(t,t.return,a)}}}function Ks(t,l,e){e.props=Ye(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(a){it(t,l,a)}}function un(t,l){try{var e=t.ref;if(e!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof e=="function"?t.refCleanup=e(a):e.current=a}}catch(n){it(t,l,n)}}function _l(t,l){var e=t.ref,a=t.refCleanup;if(e!==null)if(typeof a=="function")try{a()}catch(n){it(t,l,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(n){it(t,l,n)}else e.current=null}function Js(t){var l=t.type,e=t.memoizedProps,a=t.stateNode;try{t:switch(l){case"button":case"input":case"select":case"textarea":e.autoFocus&&a.focus();break t;case"img":e.src?a.src=e.src:e.srcSet&&(a.srcset=e.srcSet)}}catch(n){it(t,t.return,n)}}function xc(t,l,e){try{var a=t.stateNode;Um(a,t.type,e,l),a[Zt]=l}catch(n){it(t,t.return,n)}}function ks(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&pe(t.type)||t.tag===4}function Sc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||ks(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&pe(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zc(t,l,e){var a=t.tag;if(a===5||a===6)t=t.stateNode,l?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(t,l):(l=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.appendChild(t),e=e._reactRootContainer,e!=null||l.onclick!==null||(l.onclick=Hl));else if(a!==4&&(a===27&&pe(t.type)&&(e=t.stateNode,l=null),t=t.child,t!==null))for(zc(t,l,e),t=t.sibling;t!==null;)zc(t,l,e),t=t.sibling}function gi(t,l,e){var a=t.tag;if(a===5||a===6)t=t.stateNode,l?e.insertBefore(t,l):e.appendChild(t);else if(a!==4&&(a===27&&pe(t.type)&&(e=t.stateNode),t=t.child,t!==null))for(gi(t,l,e),t=t.sibling;t!==null;)gi(t,l,e),t=t.sibling}function Ws(t){var l=t.stateNode,e=t.memoizedProps;try{for(var a=t.type,n=l.attributes;n.length;)l.removeAttributeNode(n[0]);Ct(l,a,e),l[Dt]=t,l[Zt]=e}catch(i){it(t,t.return,i)}}var Ql=!1,Et=!1,jc=!1,Fs=typeof WeakSet=="function"?WeakSet:Set,Nt=null;function rm(t,l){if(t=t.containerInfo,Zc=Bi,t=co(t),pu(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var a=e.getSelection&&e.getSelection();if(a&&a.rangeCount!==0){e=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{e.nodeType,i.nodeType}catch{e=null;break t}var u=0,c=-1,o=-1,p=0,v=0,j=t,y=null;l:for(;;){for(var b;j!==e||n!==0&&j.nodeType!==3||(c=u+n),j!==i||a!==0&&j.nodeType!==3||(o=u+a),j.nodeType===3&&(u+=j.nodeValue.length),(b=j.firstChild)!==null;)y=j,j=b;for(;;){if(j===t)break l;if(y===e&&++p===n&&(c=u),y===i&&++v===a&&(o=u),(b=j.nextSibling)!==null)break;j=y,y=j.parentNode}j=b}e=c===-1||o===-1?null:{start:c,end:o}}else e=null}e=e||{start:0,end:0}}else e=null;for(Vc={focusedElem:t,selectionRange:e},Bi=!1,Nt=l;Nt!==null;)if(l=Nt,t=l.child,(l.subtreeFlags&1028)!==0&&t!==null)t.return=l,Nt=t;else for(;Nt!==null;){switch(l=Nt,i=l.alternate,t=l.flags,l.tag){case 0:if((t&4)!==0&&(t=l.updateQueue,t=t!==null?t.events:null,t!==null))for(e=0;e<t.length;e++)n=t[e],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,e=l,n=i.memoizedProps,i=i.memoizedState,a=e.stateNode;try{var D=Ye(e.type,n);t=a.getSnapshotBeforeUpdate(D,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(w){it(e,e.return,w)}}break;case 3:if((t&1024)!==0){if(t=l.stateNode.containerInfo,e=t.nodeType,e===9)kc(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":kc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(m(163))}if(t=l.sibling,t!==null){t.return=l.return,Nt=t;break}Nt=l.return}}function $s(t,l,e){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Vl(t,e),a&4&&nn(5,e);break;case 1:if(Vl(t,e),a&4)if(t=e.stateNode,l===null)try{t.componentDidMount()}catch(u){it(e,e.return,u)}else{var n=Ye(e.type,l.memoizedProps);l=l.memoizedState;try{t.componentDidUpdate(n,l,t.__reactInternalSnapshotBeforeUpdate)}catch(u){it(e,e.return,u)}}a&64&&Vs(e),a&512&&un(e,e.return);break;case 3:if(Vl(t,e),a&64&&(t=e.updateQueue,t!==null)){if(l=null,e.child!==null)switch(e.child.tag){case 27:case 5:l=e.child.stateNode;break;case 1:l=e.child.stateNode}try{Co(t,l)}catch(u){it(e,e.return,u)}}break;case 27:l===null&&a&4&&Ws(e);case 26:case 5:Vl(t,e),l===null&&a&4&&Js(e),a&512&&un(e,e.return);break;case 12:Vl(t,e);break;case 31:Vl(t,e),a&4&&tr(t,e);break;case 13:Vl(t,e),a&4&&lr(t,e),a&64&&(t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(e=xm.bind(null,e),Gm(t,e))));break;case 22:if(a=e.memoizedState!==null||Ql,!a){l=l!==null&&l.memoizedState!==null||Et,n=Ql;var i=Et;Ql=a,(Et=l)&&!i?Kl(t,e,(e.subtreeFlags&8772)!==0):Vl(t,e),Ql=n,Et=i}break;case 30:break;default:Vl(t,e)}}function Is(t){var l=t.alternate;l!==null&&(t.alternate=null,Is(l)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(l=t.stateNode,l!==null&&Pi(l)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ht=null,Kt=!1;function Zl(t,l,e){for(e=e.child;e!==null;)Ps(t,l,e),e=e.sibling}function Ps(t,l,e){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Na,e)}catch{}switch(e.tag){case 26:Et||_l(e,l),Zl(t,l,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Et||_l(e,l);var a=ht,n=Kt;pe(e.type)&&(ht=e.stateNode,Kt=!1),Zl(t,l,e),gn(e.stateNode),ht=a,Kt=n;break;case 5:Et||_l(e,l);case 6:if(a=ht,n=Kt,ht=null,Zl(t,l,e),ht=a,Kt=n,ht!==null)if(Kt)try{(ht.nodeType===9?ht.body:ht.nodeName==="HTML"?ht.ownerDocument.body:ht).removeChild(e.stateNode)}catch(i){it(e,l,i)}else try{ht.removeChild(e.stateNode)}catch(i){it(e,l,i)}break;case 18:ht!==null&&(Kt?(t=ht,Vr(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.stateNode),Ma(t)):Vr(ht,e.stateNode));break;case 4:a=ht,n=Kt,ht=e.stateNode.containerInfo,Kt=!0,Zl(t,l,e),ht=a,Kt=n;break;case 0:case 11:case 14:case 15:oe(2,e,l),Et||oe(4,e,l),Zl(t,l,e);break;case 1:Et||(_l(e,l),a=e.stateNode,typeof a.componentWillUnmount=="function"&&Ks(e,l,a)),Zl(t,l,e);break;case 21:Zl(t,l,e);break;case 22:Et=(a=Et)||e.memoizedState!==null,Zl(t,l,e),Et=a;break;default:Zl(t,l,e)}}function tr(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ma(t)}catch(e){it(l,l.return,e)}}}function lr(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ma(t)}catch(e){it(l,l.return,e)}}function dm(t){switch(t.tag){case 31:case 13:case 19:var l=t.stateNode;return l===null&&(l=t.stateNode=new Fs),l;case 22:return t=t.stateNode,l=t._retryCache,l===null&&(l=t._retryCache=new Fs),l;default:throw Error(m(435,t.tag))}}function pi(t,l){var e=dm(t);l.forEach(function(a){if(!e.has(a)){e.add(a);var n=Sm.bind(null,t,a);a.then(n,n)}})}function Jt(t,l){var e=l.deletions;if(e!==null)for(var a=0;a<e.length;a++){var n=e[a],i=t,u=l,c=u;t:for(;c!==null;){switch(c.tag){case 27:if(pe(c.type)){ht=c.stateNode,Kt=!1;break t}break;case 5:ht=c.stateNode,Kt=!1;break t;case 3:case 4:ht=c.stateNode.containerInfo,Kt=!0;break t}c=c.return}if(ht===null)throw Error(m(160));Ps(i,u,n),ht=null,Kt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(l.subtreeFlags&13886)for(l=l.child;l!==null;)er(l,t),l=l.sibling}var Sl=null;function er(t,l){var e=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Jt(l,t),kt(t),a&4&&(oe(3,t,t.return),nn(3,t),oe(5,t,t.return));break;case 1:Jt(l,t),kt(t),a&512&&(Et||e===null||_l(e,e.return)),a&64&&Ql&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?a:e.concat(a))));break;case 26:var n=Sl;if(Jt(l,t),kt(t),a&512&&(Et||e===null||_l(e,e.return)),a&4){var i=e!==null?e.memoizedState:null;if(a=t.memoizedState,e===null)if(a===null)if(t.stateNode===null){t:{a=t.type,e=t.memoizedProps,n=n.ownerDocument||n;l:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Ua]||i[Dt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Ct(i,a,e),i[Dt]=t,_t(i),a=i;break t;case"link":var u=e0("link","href",n).get(a+(e.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&i.getAttribute("rel")===(e.rel==null?null:e.rel)&&i.getAttribute("title")===(e.title==null?null:e.title)&&i.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){u.splice(c,1);break l}}i=n.createElement(a),Ct(i,a,e),n.head.appendChild(i);break;case"meta":if(u=e0("meta","content",n).get(a+(e.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(e.content==null?null:""+e.content)&&i.getAttribute("name")===(e.name==null?null:e.name)&&i.getAttribute("property")===(e.property==null?null:e.property)&&i.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&i.getAttribute("charset")===(e.charSet==null?null:e.charSet)){u.splice(c,1);break l}}i=n.createElement(a),Ct(i,a,e),n.head.appendChild(i);break;default:throw Error(m(468,a))}i[Dt]=t,_t(i),a=i}t.stateNode=a}else a0(n,t.type,t.stateNode);else t.stateNode=l0(n,a,t.memoizedProps);else i!==a?(i===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):i.count--,a===null?a0(n,t.type,t.stateNode):l0(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&xc(t,t.memoizedProps,e.memoizedProps)}break;case 27:Jt(l,t),kt(t),a&512&&(Et||e===null||_l(e,e.return)),e!==null&&a&4&&xc(t,t.memoizedProps,e.memoizedProps);break;case 5:if(Jt(l,t),kt(t),a&512&&(Et||e===null||_l(e,e.return)),t.flags&32){n=t.stateNode;try{Fe(n,"")}catch(D){it(t,t.return,D)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,xc(t,n,e!==null?e.memoizedProps:n)),a&1024&&(jc=!0);break;case 6:if(Jt(l,t),kt(t),a&4){if(t.stateNode===null)throw Error(m(162));a=t.memoizedProps,e=t.stateNode;try{e.nodeValue=a}catch(D){it(t,t.return,D)}}break;case 3:if(Ui=null,n=Sl,Sl=Oi(l.containerInfo),Jt(l,t),Sl=n,kt(t),a&4&&e!==null&&e.memoizedState.isDehydrated)try{Ma(l.containerInfo)}catch(D){it(t,t.return,D)}jc&&(jc=!1,ar(t));break;case 4:a=Sl,Sl=Oi(t.stateNode.containerInfo),Jt(l,t),kt(t),Sl=a;break;case 12:Jt(l,t),kt(t);break;case 31:Jt(l,t),kt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,pi(t,a)));break;case 13:Jt(l,t),kt(t),t.child.flags&8192&&t.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(bi=It()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,pi(t,a)));break;case 22:n=t.memoizedState!==null;var o=e!==null&&e.memoizedState!==null,p=Ql,v=Et;if(Ql=p||n,Et=v||o,Jt(l,t),Et=v,Ql=p,kt(t),a&8192)t:for(l=t.stateNode,l._visibility=n?l._visibility&-2:l._visibility|1,n&&(e===null||o||Ql||Et||Ge(t)),e=null,l=t;;){if(l.tag===5||l.tag===26){if(e===null){o=e=l;try{if(i=o.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=o.stateNode;var j=o.memoizedProps.style,y=j!=null&&j.hasOwnProperty("display")?j.display:null;c.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(D){it(o,o.return,D)}}}else if(l.tag===6){if(e===null){o=l;try{o.stateNode.nodeValue=n?"":o.memoizedProps}catch(D){it(o,o.return,D)}}}else if(l.tag===18){if(e===null){o=l;try{var b=o.stateNode;n?Kr(b,!0):Kr(o.stateNode,!1)}catch(D){it(o,o.return,D)}}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===t)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break t;for(;l.sibling===null;){if(l.return===null||l.return===t)break t;e===l&&(e=null),l=l.return}e===l&&(e=null),l.sibling.return=l.return,l=l.sibling}a&4&&(a=t.updateQueue,a!==null&&(e=a.retryQueue,e!==null&&(a.retryQueue=null,pi(t,e))));break;case 19:Jt(l,t),kt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,pi(t,a)));break;case 30:break;case 21:break;default:Jt(l,t),kt(t)}}function kt(t){var l=t.flags;if(l&2){try{for(var e,a=t.return;a!==null;){if(ks(a)){e=a;break}a=a.return}if(e==null)throw Error(m(160));switch(e.tag){case 27:var n=e.stateNode,i=Sc(t);gi(t,i,n);break;case 5:var u=e.stateNode;e.flags&32&&(Fe(u,""),e.flags&=-33);var c=Sc(t);gi(t,c,u);break;case 3:case 4:var o=e.stateNode.containerInfo,p=Sc(t);zc(t,p,o);break;default:throw Error(m(161))}}catch(v){it(t,t.return,v)}t.flags&=-3}l&4096&&(t.flags&=-4097)}function ar(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var l=t;ar(l),l.tag===5&&l.flags&1024&&l.stateNode.reset(),t=t.sibling}}function Vl(t,l){if(l.subtreeFlags&8772)for(l=l.child;l!==null;)$s(t,l.alternate,l),l=l.sibling}function Ge(t){for(t=t.child;t!==null;){var l=t;switch(l.tag){case 0:case 11:case 14:case 15:oe(4,l,l.return),Ge(l);break;case 1:_l(l,l.return);var e=l.stateNode;typeof e.componentWillUnmount=="function"&&Ks(l,l.return,e),Ge(l);break;case 27:gn(l.stateNode);case 26:case 5:_l(l,l.return),Ge(l);break;case 22:l.memoizedState===null&&Ge(l);break;case 30:Ge(l);break;default:Ge(l)}t=t.sibling}}function Kl(t,l,e){for(e=e&&(l.subtreeFlags&8772)!==0,l=l.child;l!==null;){var a=l.alternate,n=t,i=l,u=i.flags;switch(i.tag){case 0:case 11:case 15:Kl(n,i,e),nn(4,i);break;case 1:if(Kl(n,i,e),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(p){it(a,a.return,p)}if(a=i,n=a.updateQueue,n!==null){var c=a.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)Ro(o[n],c)}catch(p){it(a,a.return,p)}}e&&u&64&&Vs(i),un(i,i.return);break;case 27:Ws(i);case 26:case 5:Kl(n,i,e),e&&a===null&&u&4&&Js(i),un(i,i.return);break;case 12:Kl(n,i,e);break;case 31:Kl(n,i,e),e&&u&4&&tr(n,i);break;case 13:Kl(n,i,e),e&&u&4&&lr(n,i);break;case 22:i.memoizedState===null&&Kl(n,i,e),un(i,i.return);break;case 30:break;default:Kl(n,i,e)}l=l.sibling}}function Ec(t,l){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(t=l.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&Va(e))}function Tc(t,l){t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&Va(t))}function zl(t,l,e,a){if(l.subtreeFlags&10256)for(l=l.child;l!==null;)nr(t,l,e,a),l=l.sibling}function nr(t,l,e,a){var n=l.flags;switch(l.tag){case 0:case 11:case 15:zl(t,l,e,a),n&2048&&nn(9,l);break;case 1:zl(t,l,e,a);break;case 3:zl(t,l,e,a),n&2048&&(t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&Va(t)));break;case 12:if(n&2048){zl(t,l,e,a),t=l.stateNode;try{var i=l.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,l.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(o){it(l,l.return,o)}}else zl(t,l,e,a);break;case 31:zl(t,l,e,a);break;case 13:zl(t,l,e,a);break;case 23:break;case 22:i=l.stateNode,u=l.alternate,l.memoizedState!==null?i._visibility&2?zl(t,l,e,a):cn(t,l):i._visibility&2?zl(t,l,e,a):(i._visibility|=2,pa(t,l,e,a,(l.subtreeFlags&10256)!==0||!1)),n&2048&&Ec(u,l);break;case 24:zl(t,l,e,a),n&2048&&Tc(l.alternate,l);break;default:zl(t,l,e,a)}}function pa(t,l,e,a,n){for(n=n&&((l.subtreeFlags&10256)!==0||!1),l=l.child;l!==null;){var i=t,u=l,c=e,o=a,p=u.flags;switch(u.tag){case 0:case 11:case 15:pa(i,u,c,o,n),nn(8,u);break;case 23:break;case 22:var v=u.stateNode;u.memoizedState!==null?v._visibility&2?pa(i,u,c,o,n):cn(i,u):(v._visibility|=2,pa(i,u,c,o,n)),n&&p&2048&&Ec(u.alternate,u);break;case 24:pa(i,u,c,o,n),n&&p&2048&&Tc(u.alternate,u);break;default:pa(i,u,c,o,n)}l=l.sibling}}function cn(t,l){if(l.subtreeFlags&10256)for(l=l.child;l!==null;){var e=t,a=l,n=a.flags;switch(a.tag){case 22:cn(e,a),n&2048&&Ec(a.alternate,a);break;case 24:cn(e,a),n&2048&&Tc(a.alternate,a);break;default:cn(e,a)}l=l.sibling}}var fn=8192;function ya(t,l,e){if(t.subtreeFlags&fn)for(t=t.child;t!==null;)ir(t,l,e),t=t.sibling}function ir(t,l,e){switch(t.tag){case 26:ya(t,l,e),t.flags&fn&&t.memoizedState!==null&&Im(e,Sl,t.memoizedState,t.memoizedProps);break;case 5:ya(t,l,e);break;case 3:case 4:var a=Sl;Sl=Oi(t.stateNode.containerInfo),ya(t,l,e),Sl=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=fn,fn=16777216,ya(t,l,e),fn=a):ya(t,l,e));break;default:ya(t,l,e)}}function ur(t){var l=t.alternate;if(l!==null&&(t=l.child,t!==null)){l.child=null;do l=t.sibling,t.sibling=null,t=l;while(t!==null)}}function on(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var e=0;e<l.length;e++){var a=l[e];Nt=a,fr(a,t)}ur(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)cr(t),t=t.sibling}function cr(t){switch(t.tag){case 0:case 11:case 15:on(t),t.flags&2048&&oe(9,t,t.return);break;case 3:on(t);break;case 12:on(t);break;case 22:var l=t.stateNode;t.memoizedState!==null&&l._visibility&2&&(t.return===null||t.return.tag!==13)?(l._visibility&=-3,yi(t)):on(t);break;default:on(t)}}function yi(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var e=0;e<l.length;e++){var a=l[e];Nt=a,fr(a,t)}ur(t)}for(t=t.child;t!==null;){switch(l=t,l.tag){case 0:case 11:case 15:oe(8,l,l.return),yi(l);break;case 22:e=l.stateNode,e._visibility&2&&(e._visibility&=-3,yi(l));break;default:yi(l)}t=t.sibling}}function fr(t,l){for(;Nt!==null;){var e=Nt;switch(e.tag){case 0:case 11:case 15:oe(8,e,l);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var a=e.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Va(e.memoizedState.cache)}if(a=e.child,a!==null)a.return=e,Nt=a;else t:for(e=t;Nt!==null;){a=Nt;var n=a.sibling,i=a.return;if(Is(a),a===e){Nt=null;break t}if(n!==null){n.return=i,Nt=n;break t}Nt=i}}}var mm={getCacheForType:function(t){var l=Ht(St),e=l.data.get(t);return e===void 0&&(e=t(),l.data.set(t,e)),e},cacheSignal:function(){return Ht(St).controller.signal}},hm=typeof WeakMap=="function"?WeakMap:Map,lt=0,rt=null,K=null,W=0,nt=0,il=null,se=!1,ba=!1,Ac=!1,Jl=0,pt=0,re=0,Xe=0,Mc=0,ul=0,va=0,sn=null,Wt=null,_c=!1,bi=0,or=0,vi=1/0,xi=null,de=null,At=0,me=null,xa=null,kl=0,Nc=0,Oc=null,sr=null,rn=0,Dc=null;function cl(){return(lt&2)!==0&&W!==0?W&-W:S.T!==null?wc():Tf()}function rr(){if(ul===0)if((W&536870912)===0||I){var t=_n;_n<<=1,(_n&3932160)===0&&(_n=262144),ul=t}else ul=536870912;return t=al.current,t!==null&&(t.flags|=32),ul}function Ft(t,l,e){(t===rt&&(nt===2||nt===9)||t.cancelPendingCommit!==null)&&(Sa(t,0),he(t,W,ul,!1)),Da(t,e),((lt&2)===0||t!==rt)&&(t===rt&&((lt&2)===0&&(Xe|=e),pt===4&&he(t,W,ul,!1)),Nl(t))}function dr(t,l,e){if((lt&6)!==0)throw Error(m(327));var a=!e&&(l&127)===0&&(l&t.expiredLanes)===0||Oa(t,l),n=a?ym(t,l):Hc(t,l,!0),i=a;do{if(n===0){ba&&!a&&he(t,l,0,!1);break}else{if(e=t.current.alternate,i&&!gm(e)){n=Hc(t,l,!1),i=!1;continue}if(n===2){if(i=l,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){l=u;t:{var c=t;n=sn;var o=c.current.memoizedState.isDehydrated;if(o&&(Sa(c,u).flags|=256),u=Hc(c,u,!1),u!==2){if(Ac&&!o){c.errorRecoveryDisabledLanes|=i,Xe|=i,n=4;break t}i=Wt,Wt=n,i!==null&&(Wt===null?Wt=i:Wt.push.apply(Wt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Sa(t,0),he(t,l,0,!0);break}t:{switch(a=t,i=n,i){case 0:case 1:throw Error(m(345));case 4:if((l&4194048)!==l)break;case 6:he(a,l,ul,!se);break t;case 2:Wt=null;break;case 3:case 5:break;default:throw Error(m(329))}if((l&62914560)===l&&(n=bi+300-It(),10<n)){if(he(a,l,ul,!se),On(a,0,!0)!==0)break t;kl=l,a.timeoutHandle=Qr(mr.bind(null,a,e,Wt,xi,_c,l,ul,Xe,va,se,i,"Throttled",-0,0),n);break t}mr(a,e,Wt,xi,_c,l,ul,Xe,va,se,i,null,-0,0)}}break}while(!0);Nl(t)}function mr(t,l,e,a,n,i,u,c,o,p,v,j,y,b){if(t.timeoutHandle=-1,j=l.subtreeFlags,j&8192||(j&16785408)===16785408){j={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hl},ir(l,i,j);var D=(i&62914560)===i?bi-It():(i&4194048)===i?or-It():0;if(D=Pm(j,D),D!==null){kl=i,t.cancelPendingCommit=D(Sr.bind(null,t,l,i,e,a,n,u,c,o,v,j,null,y,b)),he(t,i,u,!p);return}}Sr(t,l,i,e,a,n,u,c,o)}function gm(t){for(var l=t;;){var e=l.tag;if((e===0||e===11||e===15)&&l.flags&16384&&(e=l.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var a=0;a<e.length;a++){var n=e[a],i=n.getSnapshot;n=n.value;try{if(!ll(i(),n))return!1}catch{return!1}}if(e=l.child,l.subtreeFlags&16384&&e!==null)e.return=l,l=e;else{if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function he(t,l,e,a){l&=~Mc,l&=~Xe,t.suspendedLanes|=l,t.pingedLanes&=~l,a&&(t.warmLanes|=l),a=t.expirationTimes;for(var n=l;0<n;){var i=31-tl(n),u=1<<i;a[i]=-1,n&=~u}e!==0&&zf(t,e,l)}function Si(){return(lt&6)===0?(dn(0),!1):!0}function Uc(){if(K!==null){if(nt===0)var t=K.return;else t=K,wl=Ue=null,ku(t),ra=null,Ja=0,t=K;for(;t!==null;)Zs(t.alternate,t),t=t.return;K=null}}function Sa(t,l){var e=t.timeoutHandle;e!==-1&&(t.timeoutHandle=-1,Cm(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),kl=0,Uc(),rt=t,K=e=Cl(t.current,null),W=l,nt=0,il=null,se=!1,ba=Oa(t,l),Ac=!1,va=ul=Mc=Xe=re=pt=0,Wt=sn=null,_c=!1,(l&8)!==0&&(l|=l&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=l;0<a;){var n=31-tl(a),i=1<<n;l|=t[n],a&=~i}return Jl=l,Ln(),e}function hr(t,l){Q=null,S.H=ln,l===sa||l===Fn?(l=Oo(),nt=3):l===Bu?(l=Oo(),nt=4):nt=l===sc?8:l!==null&&typeof l=="object"&&typeof l.then=="function"?6:1,il=l,K===null&&(pt=1,si(t,dl(l,t.current)))}function gr(){var t=al.current;return t===null?!0:(W&4194048)===W?pl===null:(W&62914560)===W||(W&536870912)!==0?t===pl:!1}function pr(){var t=S.H;return S.H=ln,t===null?ln:t}function yr(){var t=S.A;return S.A=mm,t}function zi(){pt=4,se||(W&4194048)!==W&&al.current!==null||(ba=!0),(re&134217727)===0&&(Xe&134217727)===0||rt===null||he(rt,W,ul,!1)}function Hc(t,l,e){var a=lt;lt|=2;var n=pr(),i=yr();(rt!==t||W!==l)&&(xi=null,Sa(t,l)),l=!1;var u=pt;t:do try{if(nt!==0&&K!==null){var c=K,o=il;switch(nt){case 8:Uc(),u=6;break t;case 3:case 2:case 9:case 6:al.current===null&&(l=!0);var p=nt;if(nt=0,il=null,za(t,c,o,p),e&&ba){u=0;break t}break;default:p=nt,nt=0,il=null,za(t,c,o,p)}}pm(),u=pt;break}catch(v){hr(t,v)}while(!0);return l&&t.shellSuspendCounter++,wl=Ue=null,lt=a,S.H=n,S.A=i,K===null&&(rt=null,W=0,Ln()),u}function pm(){for(;K!==null;)br(K)}function ym(t,l){var e=lt;lt|=2;var a=pr(),n=yr();rt!==t||W!==l?(xi=null,vi=It()+500,Sa(t,l)):ba=Oa(t,l);t:do try{if(nt!==0&&K!==null){l=K;var i=il;l:switch(nt){case 1:nt=0,il=null,za(t,l,i,1);break;case 2:case 9:if(_o(i)){nt=0,il=null,vr(l);break}l=function(){nt!==2&&nt!==9||rt!==t||(nt=7),Nl(t)},i.then(l,l);break t;case 3:nt=7;break t;case 4:nt=5;break t;case 7:_o(i)?(nt=0,il=null,vr(l)):(nt=0,il=null,za(t,l,i,7));break;case 5:var u=null;switch(K.tag){case 26:u=K.memoizedState;case 5:case 27:var c=K;if(u?n0(u):c.stateNode.complete){nt=0,il=null;var o=c.sibling;if(o!==null)K=o;else{var p=c.return;p!==null?(K=p,ji(p)):K=null}break l}}nt=0,il=null,za(t,l,i,5);break;case 6:nt=0,il=null,za(t,l,i,6);break;case 8:Uc(),pt=6;break t;default:throw Error(m(462))}}bm();break}catch(v){hr(t,v)}while(!0);return wl=Ue=null,S.H=a,S.A=n,lt=e,K!==null?0:(rt=null,W=0,Ln(),pt)}function bm(){for(;K!==null&&!X0();)br(K)}function br(t){var l=Ls(t.alternate,t,Jl);t.memoizedProps=t.pendingProps,l===null?ji(t):K=l}function vr(t){var l=t,e=l.alternate;switch(l.tag){case 15:case 0:l=Bs(e,l,l.pendingProps,l.type,void 0,W);break;case 11:l=Bs(e,l,l.pendingProps,l.type.render,l.ref,W);break;case 5:ku(l);default:Zs(e,l),l=K=yo(l,Jl),l=Ls(e,l,Jl)}t.memoizedProps=t.pendingProps,l===null?ji(t):K=l}function za(t,l,e,a){wl=Ue=null,ku(l),ra=null,Ja=0;var n=l.return;try{if(um(t,n,l,e,W)){pt=1,si(t,dl(e,t.current)),K=null;return}}catch(i){if(n!==null)throw K=n,i;pt=1,si(t,dl(e,t.current)),K=null;return}l.flags&32768?(I||a===1?t=!0:ba||(W&536870912)!==0?t=!1:(se=t=!0,(a===2||a===9||a===3||a===6)&&(a=al.current,a!==null&&a.tag===13&&(a.flags|=16384))),xr(l,t)):ji(l)}function ji(t){var l=t;do{if((l.flags&32768)!==0){xr(l,se);return}t=l.return;var e=om(l.alternate,l,Jl);if(e!==null){K=e;return}if(l=l.sibling,l!==null){K=l;return}K=l=t}while(l!==null);pt===0&&(pt=5)}function xr(t,l){do{var e=sm(t.alternate,t);if(e!==null){e.flags&=32767,K=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!l&&(t=t.sibling,t!==null)){K=t;return}K=t=e}while(t!==null);pt=6,K=null}function Sr(t,l,e,a,n,i,u,c,o){t.cancelPendingCommit=null;do Ei();while(At!==0);if((lt&6)!==0)throw Error(m(327));if(l!==null){if(l===t.current)throw Error(m(177));if(i=l.lanes|l.childLanes,i|=Su,$0(t,e,i,u,c,o),t===rt&&(K=rt=null,W=0),xa=l,me=t,kl=e,Nc=i,Oc=n,sr=a,(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,zm(An,function(){return Ar(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(l.flags&13878)!==0,(l.subtreeFlags&13878)!==0||a){a=S.T,S.T=null,n=M.p,M.p=2,u=lt,lt|=4;try{rm(t,l,e)}finally{lt=u,M.p=n,S.T=a}}At=1,zr(),jr(),Er()}}function zr(){if(At===1){At=0;var t=me,l=xa,e=(l.flags&13878)!==0;if((l.subtreeFlags&13878)!==0||e){e=S.T,S.T=null;var a=M.p;M.p=2;var n=lt;lt|=4;try{er(l,t);var i=Vc,u=co(t.containerInfo),c=i.focusedElem,o=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&uo(c.ownerDocument.documentElement,c)){if(o!==null&&pu(c)){var p=o.start,v=o.end;if(v===void 0&&(v=p),"selectionStart"in c)c.selectionStart=p,c.selectionEnd=Math.min(v,c.value.length);else{var j=c.ownerDocument||document,y=j&&j.defaultView||window;if(y.getSelection){var b=y.getSelection(),D=c.textContent.length,w=Math.min(o.start,D),ot=o.end===void 0?w:Math.min(o.end,D);!b.extend&&w>ot&&(u=ot,ot=w,w=u);var d=io(c,w),s=io(c,ot);if(d&&s&&(b.rangeCount!==1||b.anchorNode!==d.node||b.anchorOffset!==d.offset||b.focusNode!==s.node||b.focusOffset!==s.offset)){var g=j.createRange();g.setStart(d.node,d.offset),b.removeAllRanges(),w>ot?(b.addRange(g),b.extend(s.node,s.offset)):(g.setEnd(s.node,s.offset),b.addRange(g))}}}}for(j=[],b=c;b=b.parentNode;)b.nodeType===1&&j.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<j.length;c++){var z=j[c];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}Bi=!!Zc,Vc=Zc=null}finally{lt=n,M.p=a,S.T=e}}t.current=l,At=2}}function jr(){if(At===2){At=0;var t=me,l=xa,e=(l.flags&8772)!==0;if((l.subtreeFlags&8772)!==0||e){e=S.T,S.T=null;var a=M.p;M.p=2;var n=lt;lt|=4;try{$s(t,l.alternate,l)}finally{lt=n,M.p=a,S.T=e}}At=3}}function Er(){if(At===4||At===3){At=0,L0();var t=me,l=xa,e=kl,a=sr;(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?At=5:(At=0,xa=me=null,Tr(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(de=null),$i(e),l=l.stateNode,Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Na,l,void 0,(l.current.flags&128)===128)}catch{}if(a!==null){l=S.T,n=M.p,M.p=2,S.T=null;try{for(var i=t.onRecoverableError,u=0;u<a.length;u++){var c=a[u];i(c.value,{componentStack:c.stack})}}finally{S.T=l,M.p=n}}(kl&3)!==0&&Ei(),Nl(t),n=t.pendingLanes,(e&261930)!==0&&(n&42)!==0?t===Dc?rn++:(rn=0,Dc=t):rn=0,dn(0)}}function Tr(t,l){(t.pooledCacheLanes&=l)===0&&(l=t.pooledCache,l!=null&&(t.pooledCache=null,Va(l)))}function Ei(){return zr(),jr(),Er(),Ar()}function Ar(){if(At!==5)return!1;var t=me,l=Nc;Nc=0;var e=$i(kl),a=S.T,n=M.p;try{M.p=32>e?32:e,S.T=null,e=Oc,Oc=null;var i=me,u=kl;if(At=0,xa=me=null,kl=0,(lt&6)!==0)throw Error(m(331));var c=lt;if(lt|=4,cr(i.current),nr(i,i.current,u,e),lt=c,dn(0,!1),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Na,i)}catch{}return!0}finally{M.p=n,S.T=a,Tr(t,l)}}function Mr(t,l,e){l=dl(e,l),l=oc(t.stateNode,l,2),t=ue(t,l,2),t!==null&&(Da(t,2),Nl(t))}function it(t,l,e){if(t.tag===3)Mr(t,t,e);else for(;l!==null;){if(l.tag===3){Mr(l,t,e);break}else if(l.tag===1){var a=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(de===null||!de.has(a))){t=dl(e,t),e=_s(2),a=ue(l,e,2),a!==null&&(Ns(e,a,l,t),Da(a,2),Nl(a));break}}l=l.return}}function Rc(t,l,e){var a=t.pingCache;if(a===null){a=t.pingCache=new hm;var n=new Set;a.set(l,n)}else n=a.get(l),n===void 0&&(n=new Set,a.set(l,n));n.has(e)||(Ac=!0,n.add(e),t=vm.bind(null,t,l,e),l.then(t,t))}function vm(t,l,e){var a=t.pingCache;a!==null&&a.delete(l),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,rt===t&&(W&e)===e&&(pt===4||pt===3&&(W&62914560)===W&&300>It()-bi?(lt&2)===0&&Sa(t,0):Mc|=e,va===W&&(va=0)),Nl(t)}function _r(t,l){l===0&&(l=Sf()),t=Ne(t,l),t!==null&&(Da(t,l),Nl(t))}function xm(t){var l=t.memoizedState,e=0;l!==null&&(e=l.retryLane),_r(t,e)}function Sm(t,l){var e=0;switch(t.tag){case 31:case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(e=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(m(314))}a!==null&&a.delete(l),_r(t,e)}function zm(t,l){return Ji(t,l)}var Ti=null,ja=null,Cc=!1,Ai=!1,Bc=!1,ge=0;function Nl(t){t!==ja&&t.next===null&&(ja===null?Ti=ja=t:ja=ja.next=t),Ai=!0,Cc||(Cc=!0,Em())}function dn(t,l){if(!Bc&&Ai){Bc=!0;do for(var e=!1,a=Ti;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-tl(42|t)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(e=!0,Ur(a,i))}else i=W,i=On(a,a===rt?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Oa(a,i)||(e=!0,Ur(a,i));a=a.next}while(e);Bc=!1}}function jm(){Nr()}function Nr(){Ai=Cc=!1;var t=0;ge!==0&&Rm()&&(t=ge);for(var l=It(),e=null,a=Ti;a!==null;){var n=a.next,i=Or(a,l);i===0?(a.next=null,e===null?Ti=n:e.next=n,n===null&&(ja=e)):(e=a,(t!==0||(i&3)!==0)&&(Ai=!0)),a=n}At!==0&&At!==5||dn(t),ge!==0&&(ge=0)}function Or(t,l){for(var e=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-tl(i),c=1<<u,o=n[u];o===-1?((c&e)===0||(c&a)!==0)&&(n[u]=F0(c,l)):o<=l&&(t.expiredLanes|=c),i&=~c}if(l=rt,e=W,e=On(t,t===l?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,e===0||t===l&&(nt===2||nt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&ki(a),t.callbackNode=null,t.callbackPriority=0;if((e&3)===0||Oa(t,e)){if(l=e&-e,l===t.callbackPriority)return l;switch(a!==null&&ki(a),$i(e)){case 2:case 8:e=vf;break;case 32:e=An;break;case 268435456:e=xf;break;default:e=An}return a=Dr.bind(null,t),e=Ji(e,a),t.callbackPriority=l,t.callbackNode=e,l}return a!==null&&a!==null&&ki(a),t.callbackPriority=2,t.callbackNode=null,2}function Dr(t,l){if(At!==0&&At!==5)return t.callbackNode=null,t.callbackPriority=0,null;var e=t.callbackNode;if(Ei()&&t.callbackNode!==e)return null;var a=W;return a=On(t,t===rt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(dr(t,a,l),Or(t,It()),t.callbackNode!=null&&t.callbackNode===e?Dr.bind(null,t):null)}function Ur(t,l){if(Ei())return null;dr(t,l,!0)}function Em(){Bm(function(){(lt&6)!==0?Ji(bf,jm):Nr()})}function wc(){if(ge===0){var t=fa;t===0&&(t=Mn,Mn<<=1,(Mn&261888)===0&&(Mn=256)),ge=t}return ge}function Hr(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Rn(""+t)}function Rr(t,l){var e=l.ownerDocument.createElement("input");return e.name=l.name,e.value=l.value,t.id&&e.setAttribute("form",t.id),l.parentNode.insertBefore(e,l),t=new FormData(t),e.parentNode.removeChild(e),t}function Tm(t,l,e,a,n){if(l==="submit"&&e&&e.stateNode===n){var i=Hr((n[Zt]||null).action),u=a.submitter;u&&(l=(l=u[Zt]||null)?Hr(l.formAction):u.getAttribute("formAction"),l!==null&&(i=l,u=null));var c=new qn("action","action",null,a,n);t.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ge!==0){var o=u?Rr(n,u):new FormData(n);ac(e,{pending:!0,data:o,method:n.method,action:i},null,o)}}else typeof i=="function"&&(c.preventDefault(),o=u?Rr(n,u):new FormData(n),ac(e,{pending:!0,data:o,method:n.method,action:i},i,o))},currentTarget:n}]})}}for(var qc=0;qc<xu.length;qc++){var Yc=xu[qc],Am=Yc.toLowerCase(),Mm=Yc[0].toUpperCase()+Yc.slice(1);xl(Am,"on"+Mm)}xl(so,"onAnimationEnd"),xl(ro,"onAnimationIteration"),xl(mo,"onAnimationStart"),xl("dblclick","onDoubleClick"),xl("focusin","onFocus"),xl("focusout","onBlur"),xl(Qd,"onTransitionRun"),xl(Zd,"onTransitionStart"),xl(Vd,"onTransitionCancel"),xl(ho,"onTransitionEnd"),ke("onMouseEnter",["mouseout","mouseover"]),ke("onMouseLeave",["mouseout","mouseover"]),ke("onPointerEnter",["pointerout","pointerover"]),ke("onPointerLeave",["pointerout","pointerover"]),Te("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Te("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Te("onBeforeInput",["compositionend","keypress","textInput","paste"]),Te("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Te("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Te("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_m=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mn));function Cr(t,l){l=(l&4)!==0;for(var e=0;e<t.length;e++){var a=t[e],n=a.event;a=a.listeners;t:{var i=void 0;if(l)for(var u=a.length-1;0<=u;u--){var c=a[u],o=c.instance,p=c.currentTarget;if(c=c.listener,o!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=p;try{i(n)}catch(v){Xn(v)}n.currentTarget=null,i=o}else for(u=0;u<a.length;u++){if(c=a[u],o=c.instance,p=c.currentTarget,c=c.listener,o!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=p;try{i(n)}catch(v){Xn(v)}n.currentTarget=null,i=o}}}}function J(t,l){var e=l[Ii];e===void 0&&(e=l[Ii]=new Set);var a=t+"__bubble";e.has(a)||(Br(l,t,2,!1),e.add(a))}function Gc(t,l,e){var a=0;l&&(a|=4),Br(e,t,a,l)}var Mi="_reactListening"+Math.random().toString(36).slice(2);function Xc(t){if(!t[Mi]){t[Mi]=!0,_f.forEach(function(e){e!=="selectionchange"&&(_m.has(e)||Gc(e,!1,t),Gc(e,!0,t))});var l=t.nodeType===9?t:t.ownerDocument;l===null||l[Mi]||(l[Mi]=!0,Gc("selectionchange",!1,l))}}function Br(t,l,e,a){switch(r0(l)){case 2:var n=e1;break;case 8:n=a1;break;default:n=ef}e=n.bind(null,l,e,t),n=void 0,!cu||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(l,e,{capture:!0,passive:n}):t.addEventListener(l,e,!0):n!==void 0?t.addEventListener(l,e,{passive:n}):t.addEventListener(l,e,!1)}function Lc(t,l,e,a,n){var i=a;if((l&1)===0&&(l&2)===0&&a!==null)t:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=a.return;u!==null;){var o=u.tag;if((o===3||o===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=Ve(c),u===null)return;if(o=u.tag,o===5||o===6||o===26||o===27){a=i=u;continue t}c=c.parentNode}}a=a.return}Gf(function(){var p=i,v=iu(e),j=[];t:{var y=go.get(t);if(y!==void 0){var b=qn,D=t;switch(t){case"keypress":if(Bn(e)===0)break t;case"keydown":case"keyup":b=Sd;break;case"focusin":D="focus",b=ru;break;case"focusout":D="blur",b=ru;break;case"beforeblur":case"afterblur":b=ru;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=od;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Ed;break;case so:case ro:case mo:b=dd;break;case ho:b=Ad;break;case"scroll":case"scrollend":b=cd;break;case"wheel":b=_d;break;case"copy":case"cut":case"paste":b=hd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Vf;break;case"toggle":case"beforetoggle":b=Od}var w=(l&4)!==0,ot=!w&&(t==="scroll"||t==="scrollend"),d=w?y!==null?y+"Capture":null:y;w=[];for(var s=p,g;s!==null;){var z=s;if(g=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||g===null||d===null||(z=Ra(s,d),z!=null&&w.push(hn(s,z,g))),ot)break;s=s.return}0<w.length&&(y=new b(y,D,null,e,v),j.push({event:y,listeners:w}))}}if((l&7)===0){t:{if(y=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",y&&e!==nu&&(D=e.relatedTarget||e.fromElement)&&(Ve(D)||D[Ze]))break t;if((b||y)&&(y=v.window===v?v:(y=v.ownerDocument)?y.defaultView||y.parentWindow:window,b?(D=e.relatedTarget||e.toElement,b=p,D=D?Ve(D):null,D!==null&&(ot=C(D),w=D.tag,D!==ot||w!==5&&w!==27&&w!==6)&&(D=null)):(b=null,D=p),b!==D)){if(w=Qf,z="onMouseLeave",d="onMouseEnter",s="mouse",(t==="pointerout"||t==="pointerover")&&(w=Vf,z="onPointerLeave",d="onPointerEnter",s="pointer"),ot=b==null?y:Ha(b),g=D==null?y:Ha(D),y=new w(z,s+"leave",b,e,v),y.target=ot,y.relatedTarget=g,z=null,Ve(v)===p&&(w=new w(d,s+"enter",D,e,v),w.target=g,w.relatedTarget=ot,z=w),ot=z,b&&D)l:{for(w=Nm,d=b,s=D,g=0,z=d;z;z=w(z))g++;z=0;for(var B=s;B;B=w(B))z++;for(;0<g-z;)d=w(d),g--;for(;0<z-g;)s=w(s),z--;for(;g--;){if(d===s||s!==null&&d===s.alternate){w=d;break l}d=w(d),s=w(s)}w=null}else w=null;b!==null&&wr(j,y,b,w,!1),D!==null&&ot!==null&&wr(j,ot,D,w,!0)}}t:{if(y=p?Ha(p):window,b=y.nodeName&&y.nodeName.toLowerCase(),b==="select"||b==="input"&&y.type==="file")var P=Pf;else if($f(y))if(to)P=Gd;else{P=qd;var R=wd}else b=y.nodeName,!b||b.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?p&&au(p.elementType)&&(P=Pf):P=Yd;if(P&&(P=P(t,p))){If(j,P,e,v);break t}R&&R(t,y,p),t==="focusout"&&p&&y.type==="number"&&p.memoizedProps.value!=null&&eu(y,"number",y.value)}switch(R=p?Ha(p):window,t){case"focusin":($f(R)||R.contentEditable==="true")&&(ta=R,yu=p,La=null);break;case"focusout":La=yu=ta=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,fo(j,e,v);break;case"selectionchange":if(Ld)break;case"keydown":case"keyup":fo(j,e,v)}var Z;if(mu)t:{switch(t){case"compositionstart":var F="onCompositionStart";break t;case"compositionend":F="onCompositionEnd";break t;case"compositionupdate":F="onCompositionUpdate";break t}F=void 0}else Pe?Wf(t,e)&&(F="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(F="onCompositionStart");F&&(Kf&&e.locale!=="ko"&&(Pe||F!=="onCompositionStart"?F==="onCompositionEnd"&&Pe&&(Z=Xf()):(Pl=v,fu="value"in Pl?Pl.value:Pl.textContent,Pe=!0)),R=_i(p,F),0<R.length&&(F=new Zf(F,t,null,e,v),j.push({event:F,listeners:R}),Z?F.data=Z:(Z=Ff(e),Z!==null&&(F.data=Z)))),(Z=Ud?Hd(t,e):Rd(t,e))&&(F=_i(p,"onBeforeInput"),0<F.length&&(R=new Zf("onBeforeInput","beforeinput",null,e,v),j.push({event:R,listeners:F}),R.data=Z)),Tm(j,t,p,e,v)}Cr(j,l)})}function hn(t,l,e){return{instance:t,listener:l,currentTarget:e}}function _i(t,l){for(var e=l+"Capture",a=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ra(t,e),n!=null&&a.unshift(hn(t,n,i)),n=Ra(t,l),n!=null&&a.push(hn(t,n,i))),t.tag===3)return a;t=t.return}return[]}function Nm(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function wr(t,l,e,a,n){for(var i=l._reactName,u=[];e!==null&&e!==a;){var c=e,o=c.alternate,p=c.stateNode;if(c=c.tag,o!==null&&o===a)break;c!==5&&c!==26&&c!==27||p===null||(o=p,n?(p=Ra(e,i),p!=null&&u.unshift(hn(e,p,o))):n||(p=Ra(e,i),p!=null&&u.push(hn(e,p,o)))),e=e.return}u.length!==0&&t.push({event:l,listeners:u})}var Om=/\r\n?/g,Dm=/\u0000|\uFFFD/g;function qr(t){return(typeof t=="string"?t:""+t).replace(Om,`
`).replace(Dm,"")}function Yr(t,l){return l=qr(l),qr(t)===l}function ft(t,l,e,a,n,i){switch(e){case"children":typeof a=="string"?l==="body"||l==="textarea"&&a===""||Fe(t,a):(typeof a=="number"||typeof a=="bigint")&&l!=="body"&&Fe(t,""+a);break;case"className":Un(t,"class",a);break;case"tabIndex":Un(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Un(t,e,a);break;case"style":qf(t,a,i);break;case"data":if(l!=="object"){Un(t,"data",a);break}case"src":case"href":if(a===""&&(l!=="a"||e!=="href")){t.removeAttribute(e);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(e);break}a=Rn(""+a),t.setAttribute(e,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(e==="formAction"?(l!=="input"&&ft(t,l,"name",n.name,n,null),ft(t,l,"formEncType",n.formEncType,n,null),ft(t,l,"formMethod",n.formMethod,n,null),ft(t,l,"formTarget",n.formTarget,n,null)):(ft(t,l,"encType",n.encType,n,null),ft(t,l,"method",n.method,n,null),ft(t,l,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(e);break}a=Rn(""+a),t.setAttribute(e,a);break;case"onClick":a!=null&&(t.onclick=Hl);break;case"onScroll":a!=null&&J("scroll",t);break;case"onScrollEnd":a!=null&&J("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(e=a.__html,e!=null){if(n.children!=null)throw Error(m(60));t.innerHTML=e}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}e=Rn(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,""+a):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":a===!0?t.setAttribute(e,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,a):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(e,a):t.removeAttribute(e);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(e):t.setAttribute(e,a);break;case"popover":J("beforetoggle",t),J("toggle",t),Dn(t,"popover",a);break;case"xlinkActuate":Ul(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ul(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ul(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ul(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ul(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ul(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ul(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ul(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ul(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Dn(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=id.get(e)||e,Dn(t,e,a))}}function Qc(t,l,e,a,n,i){switch(e){case"style":qf(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(e=a.__html,e!=null){if(n.children!=null)throw Error(m(60));t.innerHTML=e}}break;case"children":typeof a=="string"?Fe(t,a):(typeof a=="number"||typeof a=="bigint")&&Fe(t,""+a);break;case"onScroll":a!=null&&J("scroll",t);break;case"onScrollEnd":a!=null&&J("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Hl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Nf.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(n=e.endsWith("Capture"),l=e.slice(2,n?e.length-7:void 0),i=t[Zt]||null,i=i!=null?i[e]:null,typeof i=="function"&&t.removeEventListener(l,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(l,a,n);break t}e in t?t[e]=a:a===!0?t.setAttribute(e,""):Dn(t,e,a)}}}function Ct(t,l,e){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":J("error",t),J("load",t);var a=!1,n=!1,i;for(i in e)if(e.hasOwnProperty(i)){var u=e[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,l));default:ft(t,l,i,u,e,null)}}n&&ft(t,l,"srcSet",e.srcSet,e,null),a&&ft(t,l,"src",e.src,e,null);return;case"input":J("invalid",t);var c=i=u=n=null,o=null,p=null;for(a in e)if(e.hasOwnProperty(a)){var v=e[a];if(v!=null)switch(a){case"name":n=v;break;case"type":u=v;break;case"checked":o=v;break;case"defaultChecked":p=v;break;case"value":i=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(m(137,l));break;default:ft(t,l,a,v,e,null)}}Rf(t,i,c,o,p,u,n,!1);return;case"select":J("invalid",t),a=u=i=null;for(n in e)if(e.hasOwnProperty(n)&&(c=e[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:ft(t,l,n,c,e,null)}l=i,e=u,t.multiple=!!a,l!=null?We(t,!!a,l,!1):e!=null&&We(t,!!a,e,!0);return;case"textarea":J("invalid",t),i=n=a=null;for(u in e)if(e.hasOwnProperty(u)&&(c=e[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(m(91));break;default:ft(t,l,u,c,e,null)}Bf(t,a,n,i);return;case"option":for(o in e)e.hasOwnProperty(o)&&(a=e[o],a!=null)&&(o==="selected"?t.selected=a&&typeof a!="function"&&typeof a!="symbol":ft(t,l,o,a,e,null));return;case"dialog":J("beforetoggle",t),J("toggle",t),J("cancel",t),J("close",t);break;case"iframe":case"object":J("load",t);break;case"video":case"audio":for(a=0;a<mn.length;a++)J(mn[a],t);break;case"image":J("error",t),J("load",t);break;case"details":J("toggle",t);break;case"embed":case"source":case"link":J("error",t),J("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in e)if(e.hasOwnProperty(p)&&(a=e[p],a!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,l));default:ft(t,l,p,a,e,null)}return;default:if(au(l)){for(v in e)e.hasOwnProperty(v)&&(a=e[v],a!==void 0&&Qc(t,l,v,a,e,void 0));return}}for(c in e)e.hasOwnProperty(c)&&(a=e[c],a!=null&&ft(t,l,c,a,e,null))}function Um(t,l,e,a){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,o=null,p=null,v=null;for(b in e){var j=e[b];if(e.hasOwnProperty(b)&&j!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":o=j;default:a.hasOwnProperty(b)||ft(t,l,b,null,a,j)}}for(var y in a){var b=a[y];if(j=e[y],a.hasOwnProperty(y)&&(b!=null||j!=null))switch(y){case"type":i=b;break;case"name":n=b;break;case"checked":p=b;break;case"defaultChecked":v=b;break;case"value":u=b;break;case"defaultValue":c=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(m(137,l));break;default:b!==j&&ft(t,l,y,b,a,j)}}lu(t,u,c,o,p,v,i,n);return;case"select":b=u=c=y=null;for(i in e)if(o=e[i],e.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":b=o;default:a.hasOwnProperty(i)||ft(t,l,i,null,a,o)}for(n in a)if(i=a[n],o=e[n],a.hasOwnProperty(n)&&(i!=null||o!=null))switch(n){case"value":y=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==o&&ft(t,l,n,i,a,o)}l=c,e=u,a=b,y!=null?We(t,!!e,y,!1):!!a!=!!e&&(l!=null?We(t,!!e,l,!0):We(t,!!e,e?[]:"",!1));return;case"textarea":b=y=null;for(c in e)if(n=e[c],e.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ft(t,l,c,null,a,n)}for(u in a)if(n=a[u],i=e[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":y=n;break;case"defaultValue":b=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(m(91));break;default:n!==i&&ft(t,l,u,n,a,i)}Cf(t,y,b);return;case"option":for(var D in e)y=e[D],e.hasOwnProperty(D)&&y!=null&&!a.hasOwnProperty(D)&&(D==="selected"?t.selected=!1:ft(t,l,D,null,a,y));for(o in a)y=a[o],b=e[o],a.hasOwnProperty(o)&&y!==b&&(y!=null||b!=null)&&(o==="selected"?t.selected=y&&typeof y!="function"&&typeof y!="symbol":ft(t,l,o,y,a,b));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var w in e)y=e[w],e.hasOwnProperty(w)&&y!=null&&!a.hasOwnProperty(w)&&ft(t,l,w,null,a,y);for(p in a)if(y=a[p],b=e[p],a.hasOwnProperty(p)&&y!==b&&(y!=null||b!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(m(137,l));break;default:ft(t,l,p,y,a,b)}return;default:if(au(l)){for(var ot in e)y=e[ot],e.hasOwnProperty(ot)&&y!==void 0&&!a.hasOwnProperty(ot)&&Qc(t,l,ot,void 0,a,y);for(v in a)y=a[v],b=e[v],!a.hasOwnProperty(v)||y===b||y===void 0&&b===void 0||Qc(t,l,v,y,a,b);return}}for(var d in e)y=e[d],e.hasOwnProperty(d)&&y!=null&&!a.hasOwnProperty(d)&&ft(t,l,d,null,a,y);for(j in a)y=a[j],b=e[j],!a.hasOwnProperty(j)||y===b||y==null&&b==null||ft(t,l,j,y,a,b)}function Gr(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Hm(){if(typeof performance.getEntriesByType=="function"){for(var t=0,l=0,e=performance.getEntriesByType("resource"),a=0;a<e.length;a++){var n=e[a],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&Gr(u)){for(u=0,c=n.responseEnd,a+=1;a<e.length;a++){var o=e[a],p=o.startTime;if(p>c)break;var v=o.transferSize,j=o.initiatorType;v&&Gr(j)&&(o=o.responseEnd,u+=v*(o<c?1:(c-p)/(o-p)))}if(--a,l+=8*(i+u)/(n.duration/1e3),t++,10<t)break}}if(0<t)return l/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Zc=null,Vc=null;function Ni(t){return t.nodeType===9?t:t.ownerDocument}function Xr(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lr(t,l){if(t===0)switch(l){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&l==="foreignObject"?0:t}function Kc(t,l){return t==="textarea"||t==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.children=="bigint"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var Jc=null;function Rm(){var t=window.event;return t&&t.type==="popstate"?t===Jc?!1:(Jc=t,!0):(Jc=null,!1)}var Qr=typeof setTimeout=="function"?setTimeout:void 0,Cm=typeof clearTimeout=="function"?clearTimeout:void 0,Zr=typeof Promise=="function"?Promise:void 0,Bm=typeof queueMicrotask=="function"?queueMicrotask:typeof Zr<"u"?function(t){return Zr.resolve(null).then(t).catch(wm)}:Qr;function wm(t){setTimeout(function(){throw t})}function pe(t){return t==="head"}function Vr(t,l){var e=l,a=0;do{var n=e.nextSibling;if(t.removeChild(e),n&&n.nodeType===8)if(e=n.data,e==="/$"||e==="/&"){if(a===0){t.removeChild(n),Ma(l);return}a--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")a++;else if(e==="html")gn(t.ownerDocument.documentElement);else if(e==="head"){e=t.ownerDocument.head,gn(e);for(var i=e.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[Ua]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||e.removeChild(i),i=u}}else e==="body"&&gn(t.ownerDocument.body);e=n}while(e);Ma(l)}function Kr(t,l){var e=t;t=0;do{var a=e.nextSibling;if(e.nodeType===1?l?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(l?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),a&&a.nodeType===8)if(e=a.data,e==="/$"){if(t===0)break;t--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||t++;e=a}while(e)}function kc(t){var l=t.firstChild;for(l&&l.nodeType===10&&(l=l.nextSibling);l;){var e=l;switch(l=l.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":kc(e),Pi(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function qm(t,l,e,a){for(;t.nodeType===1;){var n=e;if(t.nodeName.toLowerCase()!==l.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Ua])switch(l){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(l==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=yl(t.nextSibling),t===null)break}return null}function Ym(t,l,e){if(l==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=yl(t.nextSibling),t===null))return null;return t}function Jr(t,l){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=yl(t.nextSibling),t===null))return null;return t}function Wc(t){return t.data==="$?"||t.data==="$~"}function Fc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Gm(t,l){var e=t.ownerDocument;if(t.data==="$~")t._reactRetry=l;else if(t.data!=="$?"||e.readyState!=="loading")l();else{var a=function(){l(),e.removeEventListener("DOMContentLoaded",a)};e.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function yl(t){for(;t!=null;t=t.nextSibling){var l=t.nodeType;if(l===1||l===3)break;if(l===8){if(l=t.data,l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"||l==="F!"||l==="F")break;if(l==="/$"||l==="/&")return null}}return t}var $c=null;function kr(t){t=t.nextSibling;for(var l=0;t;){if(t.nodeType===8){var e=t.data;if(e==="/$"||e==="/&"){if(l===0)return yl(t.nextSibling);l--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||l++}t=t.nextSibling}return null}function Wr(t){t=t.previousSibling;for(var l=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(l===0)return t;l--}else e!=="/$"&&e!=="/&"||l++}t=t.previousSibling}return null}function Fr(t,l,e){switch(l=Ni(e),t){case"html":if(t=l.documentElement,!t)throw Error(m(452));return t;case"head":if(t=l.head,!t)throw Error(m(453));return t;case"body":if(t=l.body,!t)throw Error(m(454));return t;default:throw Error(m(451))}}function gn(t){for(var l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Pi(t)}var bl=new Map,$r=new Set;function Oi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Wl=M.d;M.d={f:Xm,r:Lm,D:Qm,C:Zm,L:Vm,m:Km,X:km,S:Jm,M:Wm};function Xm(){var t=Wl.f(),l=Si();return t||l}function Lm(t){var l=Ke(t);l!==null&&l.tag===5&&l.type==="form"?hs(l):Wl.r(t)}var Ea=typeof document>"u"?null:document;function Ir(t,l,e){var a=Ea;if(a&&typeof l=="string"&&l){var n=sl(l);n='link[rel="'+t+'"][href="'+n+'"]',typeof e=="string"&&(n+='[crossorigin="'+e+'"]'),$r.has(n)||($r.add(n),t={rel:t,crossOrigin:e,href:l},a.querySelector(n)===null&&(l=a.createElement("link"),Ct(l,"link",t),_t(l),a.head.appendChild(l)))}}function Qm(t){Wl.D(t),Ir("dns-prefetch",t,null)}function Zm(t,l){Wl.C(t,l),Ir("preconnect",t,l)}function Vm(t,l,e){Wl.L(t,l,e);var a=Ea;if(a&&t&&l){var n='link[rel="preload"][as="'+sl(l)+'"]';l==="image"&&e&&e.imageSrcSet?(n+='[imagesrcset="'+sl(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(n+='[imagesizes="'+sl(e.imageSizes)+'"]')):n+='[href="'+sl(t)+'"]';var i=n;switch(l){case"style":i=Ta(t);break;case"script":i=Aa(t)}bl.has(i)||(t=U({rel:"preload",href:l==="image"&&e&&e.imageSrcSet?void 0:t,as:l},e),bl.set(i,t),a.querySelector(n)!==null||l==="style"&&a.querySelector(pn(i))||l==="script"&&a.querySelector(yn(i))||(l=a.createElement("link"),Ct(l,"link",t),_t(l),a.head.appendChild(l)))}}function Km(t,l){Wl.m(t,l);var e=Ea;if(e&&t){var a=l&&typeof l.as=="string"?l.as:"script",n='link[rel="modulepreload"][as="'+sl(a)+'"][href="'+sl(t)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Aa(t)}if(!bl.has(i)&&(t=U({rel:"modulepreload",href:t},l),bl.set(i,t),e.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(yn(i)))return}a=e.createElement("link"),Ct(a,"link",t),_t(a),e.head.appendChild(a)}}}function Jm(t,l,e){Wl.S(t,l,e);var a=Ea;if(a&&t){var n=Je(a).hoistableStyles,i=Ta(t);l=l||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(pn(i)))c.loading=5;else{t=U({rel:"stylesheet",href:t,"data-precedence":l},e),(e=bl.get(i))&&Ic(t,e);var o=u=a.createElement("link");_t(o),Ct(o,"link",t),o._p=new Promise(function(p,v){o.onload=p,o.onerror=v}),o.addEventListener("load",function(){c.loading|=1}),o.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Di(u,l,a)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function km(t,l){Wl.X(t,l);var e=Ea;if(e&&t){var a=Je(e).hoistableScripts,n=Aa(t),i=a.get(n);i||(i=e.querySelector(yn(n)),i||(t=U({src:t,async:!0},l),(l=bl.get(n))&&Pc(t,l),i=e.createElement("script"),_t(i),Ct(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Wm(t,l){Wl.M(t,l);var e=Ea;if(e&&t){var a=Je(e).hoistableScripts,n=Aa(t),i=a.get(n);i||(i=e.querySelector(yn(n)),i||(t=U({src:t,async:!0,type:"module"},l),(l=bl.get(n))&&Pc(t,l),i=e.createElement("script"),_t(i),Ct(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Pr(t,l,e,a){var n=(n=V.current)?Oi(n):null;if(!n)throw Error(m(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(l=Ta(e.href),e=Je(n).hoistableStyles,a=e.get(l),a||(a={type:"style",instance:null,count:0,state:null},e.set(l,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=Ta(e.href);var i=Je(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(pn(t)))&&!i._p&&(u.instance=i,u.state.loading=5),bl.has(t)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},bl.set(t,e),i||Fm(n,t,e,u.state))),l&&a===null)throw Error(m(528,""));return u}if(l&&a!==null)throw Error(m(529,""));return null;case"script":return l=e.async,e=e.src,typeof e=="string"&&l&&typeof l!="function"&&typeof l!="symbol"?(l=Aa(e),e=Je(n).hoistableScripts,a=e.get(l),a||(a={type:"script",instance:null,count:0,state:null},e.set(l,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,t))}}function Ta(t){return'href="'+sl(t)+'"'}function pn(t){return'link[rel="stylesheet"]['+t+"]"}function t0(t){return U({},t,{"data-precedence":t.precedence,precedence:null})}function Fm(t,l,e,a){t.querySelector('link[rel="preload"][as="style"]['+l+"]")?a.loading=1:(l=t.createElement("link"),a.preload=l,l.addEventListener("load",function(){return a.loading|=1}),l.addEventListener("error",function(){return a.loading|=2}),Ct(l,"link",e),_t(l),t.head.appendChild(l))}function Aa(t){return'[src="'+sl(t)+'"]'}function yn(t){return"script[async]"+t}function l0(t,l,e){if(l.count++,l.instance===null)switch(l.type){case"style":var a=t.querySelector('style[data-href~="'+sl(e.href)+'"]');if(a)return l.instance=a,_t(a),a;var n=U({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),_t(a),Ct(a,"style",n),Di(a,e.precedence,t),l.instance=a;case"stylesheet":n=Ta(e.href);var i=t.querySelector(pn(n));if(i)return l.state.loading|=4,l.instance=i,_t(i),i;a=t0(e),(n=bl.get(n))&&Ic(a,n),i=(t.ownerDocument||t).createElement("link"),_t(i);var u=i;return u._p=new Promise(function(c,o){u.onload=c,u.onerror=o}),Ct(i,"link",a),l.state.loading|=4,Di(i,e.precedence,t),l.instance=i;case"script":return i=Aa(e.src),(n=t.querySelector(yn(i)))?(l.instance=n,_t(n),n):(a=e,(n=bl.get(i))&&(a=U({},e),Pc(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),_t(n),Ct(n,"link",a),t.head.appendChild(n),l.instance=n);case"void":return null;default:throw Error(m(443,l.type))}else l.type==="stylesheet"&&(l.state.loading&4)===0&&(a=l.instance,l.state.loading|=4,Di(a,e.precedence,t));return l.instance}function Di(t,l,e){for(var a=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===l)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(l=e.nodeType===9?e.head:e,l.insertBefore(t,l.firstChild))}function Ic(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.title==null&&(t.title=l.title)}function Pc(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.integrity==null&&(t.integrity=l.integrity)}var Ui=null;function e0(t,l,e){if(Ui===null){var a=new Map,n=Ui=new Map;n.set(e,a)}else n=Ui,a=n.get(e),a||(a=new Map,n.set(e,a));if(a.has(t))return a;for(a.set(t,null),e=e.getElementsByTagName(t),n=0;n<e.length;n++){var i=e[n];if(!(i[Ua]||i[Dt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(l)||"";u=t+u;var c=a.get(u);c?c.push(i):a.set(u,[i])}}return a}function a0(t,l,e){t=t.ownerDocument||t,t.head.insertBefore(e,l==="title"?t.querySelector("head > title"):null)}function $m(t,l,e){if(e===1||l.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof l.precedence!="string"||typeof l.href!="string"||l.href==="")break;return!0;case"link":if(typeof l.rel!="string"||typeof l.href!="string"||l.href===""||l.onLoad||l.onError)break;return l.rel==="stylesheet"?(t=l.disabled,typeof l.precedence=="string"&&t==null):!0;case"script":if(l.async&&typeof l.async!="function"&&typeof l.async!="symbol"&&!l.onLoad&&!l.onError&&l.src&&typeof l.src=="string")return!0}return!1}function n0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Im(t,l,e,a){if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var n=Ta(a.href),i=l.querySelector(pn(n));if(i){l=i._p,l!==null&&typeof l=="object"&&typeof l.then=="function"&&(t.count++,t=Hi.bind(t),l.then(t,t)),e.state.loading|=4,e.instance=i,_t(i);return}i=l.ownerDocument||l,a=t0(a),(n=bl.get(n))&&Ic(a,n),i=i.createElement("link"),_t(i);var u=i;u._p=new Promise(function(c,o){u.onload=c,u.onerror=o}),Ct(i,"link",a),e.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(e,l),(l=e.state.preload)&&(e.state.loading&3)===0&&(t.count++,e=Hi.bind(t),l.addEventListener("load",e),l.addEventListener("error",e))}}var tf=0;function Pm(t,l){return t.stylesheets&&t.count===0&&Ci(t,t.stylesheets),0<t.count||0<t.imgCount?function(e){var a=setTimeout(function(){if(t.stylesheets&&Ci(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+l);0<t.imgBytes&&tf===0&&(tf=62500*Hm());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ci(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>tf?50:800)+l);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Hi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ci(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ri=null;function Ci(t,l){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ri=new Map,l.forEach(t1,t),Ri=null,Hi.call(t))}function t1(t,l){if(!(l.state.loading&4)){var e=Ri.get(t);if(e)var a=e.get(null);else{e=new Map,Ri.set(t,e);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(e.set(u.dataset.precedence,u),a=u)}a&&e.set(null,a)}n=l.instance,u=n.getAttribute("data-precedence"),i=e.get(u)||a,i===a&&e.set(null,n),e.set(u,n),this.count++,a=Hi.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),l.state.loading|=4}}var bn={$$typeof:wt,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function l1(t,l,e,a,n,i,u,c,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.hiddenUpdates=Wi(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function i0(t,l,e,a,n,i,u,c,o,p,v,j){return t=new l1(t,l,e,u,o,p,v,j,c),l=1,i===!0&&(l|=24),i=el(3,null,null,l),t.current=i,i.stateNode=t,l=Hu(),l.refCount++,t.pooledCache=l,l.refCount++,i.memoizedState={element:a,isDehydrated:e,cache:l},wu(i),t}function u0(t){return t?(t=aa,t):aa}function c0(t,l,e,a,n,i){n=u0(n),a.context===null?a.context=n:a.pendingContext=n,a=ie(l),a.payload={element:e},i=i===void 0?null:i,i!==null&&(a.callback=i),e=ue(t,a,l),e!==null&&(Ft(e,t,l),Wa(e,t,l))}function f0(t,l){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<l?e:l}}function lf(t,l){f0(t,l),(t=t.alternate)&&f0(t,l)}function o0(t){if(t.tag===13||t.tag===31){var l=Ne(t,67108864);l!==null&&Ft(l,t,67108864),lf(t,67108864)}}function s0(t){if(t.tag===13||t.tag===31){var l=cl();l=Fi(l);var e=Ne(t,l);e!==null&&Ft(e,t,l),lf(t,l)}}var Bi=!0;function e1(t,l,e,a){var n=S.T;S.T=null;var i=M.p;try{M.p=2,ef(t,l,e,a)}finally{M.p=i,S.T=n}}function a1(t,l,e,a){var n=S.T;S.T=null;var i=M.p;try{M.p=8,ef(t,l,e,a)}finally{M.p=i,S.T=n}}function ef(t,l,e,a){if(Bi){var n=af(a);if(n===null)Lc(t,l,a,wi,e),d0(t,a);else if(i1(n,t,l,e,a))a.stopPropagation();else if(d0(t,a),l&4&&-1<n1.indexOf(t)){for(;n!==null;){var i=Ke(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Ee(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var o=1<<31-tl(u);c.entanglements[1]|=o,u&=~o}Nl(i),(lt&6)===0&&(vi=It()+500,dn(0))}}break;case 31:case 13:c=Ne(i,2),c!==null&&Ft(c,i,2),Si(),lf(i,2)}if(i=af(a),i===null&&Lc(t,l,a,wi,e),i===n)break;n=i}n!==null&&a.stopPropagation()}else Lc(t,l,a,null,e)}}function af(t){return t=iu(t),nf(t)}var wi=null;function nf(t){if(wi=null,t=Ve(t),t!==null){var l=C(t);if(l===null)t=null;else{var e=l.tag;if(e===13){if(t=k(l),t!==null)return t;t=null}else if(e===31){if(t=q(l),t!==null)return t;t=null}else if(e===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;t=null}else l!==t&&(t=null)}}return wi=t,null}function r0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q0()){case bf:return 2;case vf:return 8;case An:case Z0:return 32;case xf:return 268435456;default:return 32}default:return 32}}var uf=!1,ye=null,be=null,ve=null,vn=new Map,xn=new Map,xe=[],n1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function d0(t,l){switch(t){case"focusin":case"focusout":ye=null;break;case"dragenter":case"dragleave":be=null;break;case"mouseover":case"mouseout":ve=null;break;case"pointerover":case"pointerout":vn.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":xn.delete(l.pointerId)}}function Sn(t,l,e,a,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:l,domEventName:e,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},l!==null&&(l=Ke(l),l!==null&&o0(l)),t):(t.eventSystemFlags|=a,l=t.targetContainers,n!==null&&l.indexOf(n)===-1&&l.push(n),t)}function i1(t,l,e,a,n){switch(l){case"focusin":return ye=Sn(ye,t,l,e,a,n),!0;case"dragenter":return be=Sn(be,t,l,e,a,n),!0;case"mouseover":return ve=Sn(ve,t,l,e,a,n),!0;case"pointerover":var i=n.pointerId;return vn.set(i,Sn(vn.get(i)||null,t,l,e,a,n)),!0;case"gotpointercapture":return i=n.pointerId,xn.set(i,Sn(xn.get(i)||null,t,l,e,a,n)),!0}return!1}function m0(t){var l=Ve(t.target);if(l!==null){var e=C(l);if(e!==null){if(l=e.tag,l===13){if(l=k(e),l!==null){t.blockedOn=l,Af(t.priority,function(){s0(e)});return}}else if(l===31){if(l=q(e),l!==null){t.blockedOn=l,Af(t.priority,function(){s0(e)});return}}else if(l===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qi(t){if(t.blockedOn!==null)return!1;for(var l=t.targetContainers;0<l.length;){var e=af(t.nativeEvent);if(e===null){e=t.nativeEvent;var a=new e.constructor(e.type,e);nu=a,e.target.dispatchEvent(a),nu=null}else return l=Ke(e),l!==null&&o0(l),t.blockedOn=e,!1;l.shift()}return!0}function h0(t,l,e){qi(t)&&e.delete(l)}function u1(){uf=!1,ye!==null&&qi(ye)&&(ye=null),be!==null&&qi(be)&&(be=null),ve!==null&&qi(ve)&&(ve=null),vn.forEach(h0),xn.forEach(h0)}function Yi(t,l){t.blockedOn===l&&(t.blockedOn=null,uf||(uf=!0,h.unstable_scheduleCallback(h.unstable_NormalPriority,u1)))}var Gi=null;function g0(t){Gi!==t&&(Gi=t,h.unstable_scheduleCallback(h.unstable_NormalPriority,function(){Gi===t&&(Gi=null);for(var l=0;l<t.length;l+=3){var e=t[l],a=t[l+1],n=t[l+2];if(typeof a!="function"){if(nf(a||e)===null)continue;break}var i=Ke(e);i!==null&&(t.splice(l,3),l-=3,ac(i,{pending:!0,data:n,method:e.method,action:a},a,n))}}))}function Ma(t){function l(o){return Yi(o,t)}ye!==null&&Yi(ye,t),be!==null&&Yi(be,t),ve!==null&&Yi(ve,t),vn.forEach(l),xn.forEach(l);for(var e=0;e<xe.length;e++){var a=xe[e];a.blockedOn===t&&(a.blockedOn=null)}for(;0<xe.length&&(e=xe[0],e.blockedOn===null);)m0(e),e.blockedOn===null&&xe.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(a=0;a<e.length;a+=3){var n=e[a],i=e[a+1],u=n[Zt]||null;if(typeof i=="function")u||g0(e);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Zt]||null)c=u.formAction;else if(nf(n)!==null)continue}else c=u.action;typeof c=="function"?e[a+1]=c:(e.splice(a,3),a-=3),g0(e)}}}function p0(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function l(){n!==null&&(n(),n=null),a||setTimeout(e,20)}function e(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",l),navigation.addEventListener("navigateerror",l),setTimeout(e,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",l),navigation.removeEventListener("navigateerror",l),n!==null&&(n(),n=null)}}}function cf(t){this._internalRoot=t}Xi.prototype.render=cf.prototype.render=function(t){var l=this._internalRoot;if(l===null)throw Error(m(409));var e=l.current,a=cl();c0(e,a,t,l,null,null)},Xi.prototype.unmount=cf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var l=t.containerInfo;c0(t.current,2,null,t,null,null),Si(),l[Ze]=null}};function Xi(t){this._internalRoot=t}Xi.prototype.unstable_scheduleHydration=function(t){if(t){var l=Tf();t={blockedOn:null,target:t,priority:l};for(var e=0;e<xe.length&&l!==0&&l<xe[e].priority;e++);xe.splice(e,0,t),e===0&&m0(t)}};var y0=T.version;if(y0!=="19.2.4")throw Error(m(527,y0,"19.2.4"));M.findDOMNode=function(t){var l=t._reactInternals;if(l===void 0)throw typeof t.render=="function"?Error(m(188)):(t=Object.keys(t).join(","),Error(m(268,t)));return t=x(l),t=t!==null?Y(t):null,t=t===null?null:t.stateNode,t};var c1={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Li.isDisabled&&Li.supportsFiber)try{Na=Li.inject(c1),Pt=Li}catch{}}return jn.createRoot=function(t,l){if(!O(t))throw Error(m(299));var e=!1,a="",n=Es,i=Ts,u=As;return l!=null&&(l.unstable_strictMode===!0&&(e=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(n=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(u=l.onRecoverableError)),l=i0(t,1,!1,null,null,e,a,null,n,i,u,p0),t[Ze]=l.current,Xc(t),new cf(l)},jn.hydrateRoot=function(t,l,e){if(!O(t))throw Error(m(299));var a=!1,n="",i=Es,u=Ts,c=As,o=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.formState!==void 0&&(o=e.formState)),l=i0(t,1,!0,l,e??null,a,n,o,i,u,c,p0),l.context=u0(null),e=l.current,a=cl(),a=Fi(a),n=ie(a),n.callback=null,ue(e,n,a),e=a,l.current.lanes=e,Da(l,e),Nl(l),t[Ze]=l.current,Xc(t),new Xi(l)},jn.version="19.2.4",jn}var M0;function y1(){if(M0)return sf.exports;M0=1;function h(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h)}catch(T){console.error(T)}}return h(),sf.exports=p1(),sf.exports}var b1=y1();function v1(){const[h,T]=Tt.useState("home"),[A,m]=Tt.useState(!1),[O,C]=Tt.useState(!1);Tt.useEffect(()=>{const q=()=>m(window.scrollY>20);return window.addEventListener("scroll",q),()=>window.removeEventListener("scroll",q)},[]),Tt.useEffect(()=>{const q=["home","about","projects","skills","contact"],N=[];return q.forEach(x=>{const Y=document.getElementById(x);if(!Y)return;const U=new IntersectionObserver(([et])=>{et.isIntersecting&&T(x)},{threshold:.3,rootMargin:"-80px 0px 0px 0px"});U.observe(Y),N.push(U)}),()=>N.forEach(x=>x.disconnect())},[]);const k=["home","about","projects","skills","contact"];return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .nav-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          font-family: 'DM Sans', sans-serif;
        }

        .nav-root.scrolled {
          background: rgba(8, 12, 24, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(99, 179, 237, 0.1);
          box-shadow: 0 4px 40px rgba(0,0,0,0.4);
        }

        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.25rem;
          color: #fff;
          letter-spacing: -0.5px;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .nav-logo-dot {
          width: 8px;
          height: 8px;
          background: #63b3ed;
          border-radius: 50%;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.6; }
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 4px;
          margin: 0;
          padding: 0;
        }

        .nav-links li {
          position: relative;
        }

        .nav-links li a {
          text-decoration: none;
          color: rgba(255,255,255,0.5);
          font-size: 0.875rem;
          font-weight: 400;
          letter-spacing: 0.4px;
          text-transform: capitalize;
          padding: 8px 18px;
          border-radius: 100px;
          transition: color 0.25s ease, background 0.25s ease;
          position: relative;
          display: inline-block;
        }

        /* Sliding underline */
        .nav-links li a::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: calc(100% - 36px);
          height: 2px;
          background: linear-gradient(90deg, #3182ce, #63b3ed);
          border-radius: 2px;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: center;
        }

        .nav-links li a:hover {
          color: rgba(255,255,255,0.85);
        }

        .nav-links li a:hover::after {
          transform: translateX(-50%) scaleX(1);
        }

        /* Active state */
        .nav-links li a.active {
          color: #fff;
          background: rgba(99, 179, 237, 0.1);
        }

        .nav-links li a.active::after {
          transform: translateX(-50%) scaleX(1);
        }

        /* Contact CTA button */
        .nav-links li a.nav-cta {
          background: linear-gradient(135deg, #3182ce, #63b3ed);
          color: #fff !important;
          font-weight: 500;
          box-shadow: 0 4px 16px rgba(49,130,206,0.3);
          transition: all 0.25s ease;
        }

        .nav-links li a.nav-cta::after {
          display: none;
        }

        .nav-links li a.nav-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(49,130,206,0.45);
          background: linear-gradient(135deg, #2b77cb, #90cdf4);
        }

        .nav-links li a.nav-cta.active {
          background: linear-gradient(135deg, #3182ce, #63b3ed);
        }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: background 0.2s;
        }

        .hamburger:hover { background: rgba(255,255,255,0.08); }

        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .mobile-menu {
          display: none;
          flex-direction: column;
          gap: 4px;
          padding: 16px 24px 24px;
          background: rgba(8, 12, 24, 0.97);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(99, 179, 237, 0.1);
        }

        .mobile-menu.open { display: flex; }

        .mobile-menu a {
          text-decoration: none;
          color: rgba(255,255,255,0.6);
          font-size: 1rem;
          padding: 12px 16px;
          border-radius: 10px;
          transition: all 0.2s ease;
          text-transform: capitalize;
          font-family: 'DM Sans', sans-serif;
          position: relative;
        }

        .mobile-menu a.active {
          color: #63b3ed;
          background: rgba(99,179,237,0.08);
        }

        .mobile-menu a:hover { background: rgba(99,179,237,0.07); color: #63b3ed; }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .nav-inner { padding: 16px 24px; }
        }
      `}),f.jsxs("nav",{className:`nav-root ${A?"scrolled":""}`,children:[f.jsxs("div",{className:"nav-inner",children:[f.jsxs("a",{href:"#home",className:"nav-logo",children:[f.jsx("span",{className:"nav-logo-dot"}),"Samin Shrestha"]}),f.jsx("ul",{className:"nav-links",children:k.map(q=>f.jsx("li",{children:f.jsx("a",{href:`#${q}`,className:`${h===q?"active":""} ${q==="contact"?"nav-cta":""}`,onClick:()=>T(q),children:q})},q))}),f.jsxs("button",{className:`hamburger ${O?"open":""}`,onClick:()=>C(!O),"aria-label":"Toggle menu",children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]})]}),f.jsx("div",{className:`mobile-menu ${O?"open":""}`,children:k.map(q=>f.jsx("a",{href:`#${q}`,className:h===q?"active":"",onClick:()=>C(!1),children:q},q))})]})]})}const x1=[{name:"Django",icon:"🎸",color:"#44B78B",angle:0},{name:"Python",icon:"🐍",color:"#FFD43B",angle:72},{name:"React",icon:"⚛️",color:"#61DAFB",angle:144},{name:"Git",icon:"🔀",color:"#F05032",angle:216},{name:"ML",icon:"🧠",color:"#f472b6",angle:288}],S1=[{name:"HTML5",icon:"🌐",color:"#E44D26",angle:30},{name:"CSS3",icon:"🎨",color:"#1572B6",angle:150},{name:"JS",icon:"⚡",color:"#F7DF1E",angle:270}];function z1(){const h=Tt.useRef(null);return Tt.useEffect(()=>{let T,A=0;const m=()=>{A+=.003;const O=h.current;if(!O)return;const C=O.querySelectorAll(".orbit-card-outer");C.forEach((q,N)=>{const Y=N/C.length*Math.PI*2+A,U=190,et=145,Ot=Math.cos(Y)*U,Mt=Math.sin(Y)*et;q.style.transform=`translate(calc(-50% + ${Ot}px), calc(-50% + ${Mt}px))`;const yt=(Math.sin(Y)+1)/2;q.style.opacity=.5+yt*.5,q.style.zIndex=Math.round(yt*10)});const k=O.querySelectorAll(".orbit-card-inner");k.forEach((q,N)=>{const Y=N/k.length*Math.PI*2-A*1.4,U=105,et=80,Ot=Math.cos(Y)*U,Mt=Math.sin(Y)*et;q.style.transform=`translate(calc(-50% + ${Ot}px), calc(-50% + ${Mt}px))`;const yt=(Math.sin(Y)+1)/2;q.style.opacity=.45+yt*.55,q.style.zIndex=Math.round(yt*10)}),T=requestAnimationFrame(m)};return m(),()=>cancelAnimationFrame(T)},[]),f.jsxs("div",{className:"orbital-rig",ref:h,children:[f.jsx("div",{className:"orbit-ring orbit-ring-outer"}),f.jsx("div",{className:"orbit-ring orbit-ring-inner"}),f.jsxs("div",{className:"orbit-core",children:[f.jsx("div",{className:"orbit-core-pulse"}),f.jsx("span",{className:"orbit-core-icon",children:"💻"})]}),x1.map((T,A)=>f.jsxs("div",{className:"orbit-card orbit-card-outer",style:{"--accent":T.color},children:[f.jsx("span",{className:"orbit-card-icon",children:T.icon}),f.jsx("span",{className:"orbit-card-name",children:T.name})]},`outer-${A}`)),S1.map((T,A)=>f.jsxs("div",{className:"orbit-card orbit-card-inner",style:{"--accent":T.color},children:[f.jsx("span",{className:"orbit-card-icon",style:{fontSize:"1rem"},children:T.icon}),f.jsx("span",{className:"orbit-card-name",style:{fontSize:"0.6rem"},children:T.name})]},`inner-${A}`))]})}function j1(){const h=Tt.useRef(null);return Tt.useEffect(()=>{const T=h.current;if(!T)return;T.querySelectorAll(".hero-animate").forEach((m,O)=>{m.style.animationDelay=`${O*.15}s`})},[]),f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        .hero-section {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 120px 10% 80px;
          gap: 40px;
          font-family: 'DM Sans', sans-serif;
        }

        /* Background effects */
        .hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 70% at 70% 40%, rgba(49,130,206,0.1) 0%, transparent 65%),
            radial-gradient(ellipse 40% 50% at 20% 80%, rgba(99,179,237,0.06) 0%, transparent 55%);
          animation: hero-bg-shift 10s ease-in-out infinite alternate;
        }

        @keyframes hero-bg-shift {
          0% { opacity: 0.8; }
          100% { opacity: 1; }
        }

        .hero-grid-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(99,179,237,0.12) 1px, transparent 1px);
          background-size: 36px 36px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 10%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 10%, transparent 80%);
        }

        /* ── Left content column ── */
        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 600px;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(99,179,237,0.1);
          border: 1px solid rgba(99,179,237,0.25);
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 0.75rem;
          color: #90cdf4;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          font-weight: 500;
          margin-bottom: 28px;
        }

        .hero-tag-dot {
          width: 6px;
          height: 6px;
          background: #63b3ed;
          border-radius: 50%;
          animation: pulse-dot 1.8s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.6; }
        }

        .hero-name {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2.8rem, 5.5vw, 5rem);
          line-height: 1.02;
          letter-spacing: -2px;
          color: #fff;
          margin-bottom: 6px;
        }

        .hero-name .accent {
          background: linear-gradient(135deg, #63b3ed 0%, #90cdf4 50%, #3182ce 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-role {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.2rem, 2.5vw, 1.9rem);
          font-weight: 600;
          color: rgba(255,255,255,0.3);
          letter-spacing: -0.5px;
          margin-bottom: 28px;
        }

        .hero-role .highlight { color: rgba(99,179,237,0.65); }

        .hero-desc {
          font-size: 1rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.8;
          max-width: 500px;
          font-weight: 300;
          margin-bottom: 44px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          align-items: center;
          margin-bottom: 56px;
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 30px;
          background: linear-gradient(135deg, #3182ce, #63b3ed);
          color: #fff;
          text-decoration: none;
          border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(49,130,206,0.35);
        }

        .hero-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 48px rgba(49,130,206,0.5);
        }

        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-size: 0.95rem;
          border: 1px solid rgba(255,255,255,0.12);
          transition: all 0.25s ease;
        }

        .hero-btn-secondary:hover {
          color: #fff;
          border-color: rgba(99,179,237,0.4);
          background: rgba(99,179,237,0.06);
        }

        .hero-stats {
          display: flex;
          gap: 36px;
          padding-top: 36px;
          border-top: 1px solid rgba(255,255,255,0.06);
          flex-wrap: wrap;
        }

        .hero-stat-value {
          font-family: 'Syne', sans-serif;
          font-size: 1.7rem;
          font-weight: 700;
          color: #63b3ed;
          line-height: 1;
        }

        .hero-stat-label {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.5px;
          margin-top: 4px;
        }

        /* Animate in */
        .hero-animate {
          opacity: 0;
          transform: translateY(28px);
          animation: hero-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes hero-in {
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── Right orbital column ── */
        .hero-visual {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 500px;
        }

        /* Orbital rig */
        .orbital-rig {
          position: relative;
          width: 420px;
          height: 420px;
          flex-shrink: 0;
        }

        /* Elliptical orbit rings */
        .orbit-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px solid rgba(99,179,237,0.1);
          pointer-events: none;
        }

        .orbit-ring-outer {
          width: 400px;
          height: 302px;
          border-style: dashed;
        }

        .orbit-ring-inner {
          width: 222px;
          height: 168px;
          border-color: rgba(99,179,237,0.07);
        }

        /* Center core */
        .orbit-core {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(49,130,206,0.25) 0%, rgba(8,12,24,0.8) 70%);
          border: 1px solid rgba(99,179,237,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          z-index: 5;
          box-shadow: 0 0 32px rgba(99,179,237,0.2), inset 0 0 20px rgba(99,179,237,0.05);
        }

        .orbit-core-pulse {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 1px solid rgba(99,179,237,0.2);
          animation: core-pulse 2.4s ease-in-out infinite;
        }

        @keyframes core-pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.15); opacity: 0.15; }
        }

        .orbit-core-icon {
          font-size: 1.8rem;
          position: relative;
          z-index: 1;
        }

        /* Orbit cards */
        .orbit-card {
          position: absolute;
          top: 50%;
          left: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          background: rgba(8,12,24,0.85);
          border: 1px solid color-mix(in srgb, var(--accent) 30%, rgba(255,255,255,0.06));
          border-radius: 14px;
          padding: 10px 14px;
          min-width: 64px;
          backdrop-filter: blur(12px);
          transition: opacity 0.1s linear;
          cursor: default;
          box-shadow: 0 4px 20px rgba(0,0,0,0.4);
          will-change: transform, opacity;
        }

        .orbit-card:hover {
          background: rgba(20,30,55,0.95);
          border-color: color-mix(in srgb, var(--accent) 60%, rgba(255,255,255,0.1));
          box-shadow: 0 8px 28px rgba(0,0,0,0.5), 0 0 16px color-mix(in srgb, var(--accent) 20%, transparent);
        }

        .orbit-card-icon {
          font-size: 1.3rem;
          line-height: 1;
        }

        .orbit-card-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
          white-space: nowrap;
          letter-spacing: 0.3px;
        }

        /* Scroll indicator */
        .hero-scroll {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.2);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          z-index: 2;
        }

        .hero-scroll-line {
          width: 1px;
          height: 44px;
          background: linear-gradient(to bottom, rgba(99,179,237,0.5), transparent);
          animation: scroll-bounce 2s ease-in-out infinite;
        }

        @keyframes scroll-bounce {
          0%, 100% { transform: scaleY(1); opacity: 0.5; }
          50% { transform: scaleY(0.6); opacity: 1; }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-section {
            grid-template-columns: 1fr;
            padding-top: 140px;
            text-align: center;
          }

          .hero-content { max-width: 100%; }
          .hero-desc { max-width: 100%; }
          .hero-tag { margin: 0 auto 28px; }
          .hero-actions { justify-content: center; }
          .hero-stats { justify-content: center; }

          .hero-visual {
            height: 360px;
          }

          .orbital-rig {
            width: 320px;
            height: 320px;
          }

          .orbit-ring-outer { width: 310px; height: 234px; }
          .orbit-ring-inner { width: 172px; height: 130px; }
        }

        @media (max-width: 640px) {
          .hero-visual { height: 300px; }
          .orbital-rig { width: 280px; height: 280px; }
          .orbit-ring-outer { width: 270px; height: 204px; }
          .orbit-ring-inner { width: 150px; height: 114px; }
        }
      `}),f.jsxs("section",{id:"home",className:"hero-section",ref:h,children:[f.jsx("div",{className:"hero-bg"}),f.jsx("div",{className:"hero-grid-dots"}),f.jsxs("div",{className:"hero-content",children:[f.jsxs("div",{className:"hero-tag hero-animate",children:[f.jsx("span",{className:"hero-tag-dot"}),"Available for opportunities"]}),f.jsxs("h1",{className:"hero-name hero-animate",children:["Hi, I'm",f.jsx("br",{}),f.jsx("span",{className:"accent",children:"Samin Shrestha"})]}),f.jsxs("p",{className:"hero-role hero-animate",children:[f.jsx("span",{className:"highlight",children:"Django"})," Web Developer"]}),f.jsx("p",{className:"hero-desc hero-animate",children:"Computer Engineering student and passionate backend developer building modern, scalable web applications. I turn ideas into real-world solutions with clean code and thoughtful design."}),f.jsxs("div",{className:"hero-actions hero-animate",children:[f.jsx("a",{href:"#projects",className:"hero-btn-primary",children:"View My Work ↗"}),f.jsx("a",{href:"#contact",className:"hero-btn-secondary",children:"Let's Connect"})]}),f.jsxs("div",{className:"hero-stats hero-animate",children:[f.jsxs("div",{children:[f.jsx("div",{className:"hero-stat-value",children:"3+"}),f.jsx("div",{className:"hero-stat-label",children:"Years Learning"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"hero-stat-value",children:"5+"}),f.jsx("div",{className:"hero-stat-label",children:"Projects Built"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"hero-stat-value",children:"AI"}),f.jsx("div",{className:"hero-stat-label",children:"& ML Experience"})]})]})]}),f.jsx("div",{className:"hero-visual hero-animate",children:f.jsx(z1,{})}),f.jsxs("div",{className:"hero-scroll",children:[f.jsx("div",{className:"hero-scroll-line"}),"scroll"]})]})]})}const E1="/assets/samin-CWbbcB8q.png";function T1(){const h=[{icon:"🎓",label:"4th Year CE Student"},{icon:"⚙️",label:"Django & Python"},{icon:"🤖",label:"AI / ML Projects"},{icon:"🌐",label:"Full-Stack Builder"}];return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        .about-section {
          padding: 120px 10%;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .about-section::before {
          content: 'ABOUT';
          position: absolute;
          top: 60px;
          right: -20px;
          font-family: 'Syne', sans-serif;
          font-size: 10rem;
          font-weight: 800;
          color: rgba(99,179,237,0.03);
          letter-spacing: -4px;
          pointer-events: none;
          user-select: none;
          white-space: nowrap;
        }

        .about-header {
          margin-bottom: 72px;
        }

        .section-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.75rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #63b3ed;
          font-weight: 500;
          margin-bottom: 16px;
        }

        .section-eyebrow::before {
          content: '';
          display: inline-block;
          width: 28px;
          height: 1px;
          background: #63b3ed;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 800;
          letter-spacing: -1.5px;
          color: #fff;
          line-height: 1.05;
        }

        .about-layout {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 80px;
          align-items: start;
        }

        /* Image column */
        .about-image-col {
          position: relative;
        }

        .about-img-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
        }

        .about-img-wrapper::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, rgba(99,179,237,0.4), transparent 50%, rgba(49,130,206,0.2));
          border-radius: 20px;
          z-index: 0;
        }

        .about-img-wrapper::after {
          content: '';
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 80%;
          height: 80%;
          border: 1px solid rgba(99,179,237,0.15);
          border-radius: 20px;
          z-index: -1;
        }

        .about-img-wrapper img {
          width: 100%;
          max-width: 360px;
          height: 440px;
          object-fit: cover;
          object-position: top;
          border-radius: 18px;
          display: block;
          position: relative;
          z-index: 1;
          filter: grayscale(20%) contrast(1.05);
          transition: filter 0.4s ease;
        }

        .about-img-wrapper:hover img {
          filter: grayscale(0%) contrast(1.08);
        }

        /* Floating badge */
        .about-badge {
          position: absolute;
          bottom: 24px;
          right: -16px;
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(99,179,237,0.2);
          padding: 14px 20px;
          border-radius: 14px;
          z-index: 2;
          box-shadow: 0 16px 40px rgba(0,0,0,0.4);
        }

        .about-badge-label {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.4);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .about-badge-value {
          font-family: 'Syne', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: #63b3ed;
          margin-top: 2px;
        }

        /* Text column */
        .about-text-col {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .about-highlights {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 8px;
        }

        .about-highlight-item {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.6);
          transition: all 0.25s ease;
        }

        .about-highlight-item:hover {
          background: rgba(99,179,237,0.07);
          border-color: rgba(99,179,237,0.2);
          color: rgba(255,255,255,0.9);
          transform: translateY(-2px);
        }

        .about-highlight-icon {
          font-size: 1.1rem;
        }

        .about-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .about-paragraphs p {
          font-size: 0.97rem;
          line-height: 1.85;
          color: rgba(255,255,255,0.5);
          font-weight: 300;
        }

        .about-paragraphs p strong {
          color: rgba(255,255,255,0.85);
          font-weight: 500;
        }

        .about-cta-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          padding-top: 8px;
        }

        .about-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 26px;
          border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .about-btn-primary {
          background: linear-gradient(135deg, #3182ce, #63b3ed);
          color: #fff;
          box-shadow: 0 6px 24px rgba(49, 130, 206, 0.3);
        }

        .about-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(49, 130, 206, 0.45);
        }

        .about-btn-ghost {
          color: rgba(255,255,255,0.55);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .about-btn-ghost:hover {
          color: #fff;
          border-color: rgba(99,179,237,0.3);
          background: rgba(99,179,237,0.06);
        }

        @media (max-width: 900px) {
          .about-layout {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .about-img-wrapper img {
            max-width: 100%;
            height: 360px;
          }

          .about-badge { right: 16px; }

          .about-highlights {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 480px) {
          .about-highlights { grid-template-columns: 1fr; }
        }
      `}),f.jsxs("section",{id:"about",className:"about-section",children:[f.jsxs("div",{className:"about-header",children:[f.jsx("div",{className:"section-eyebrow",children:"Who I am"}),f.jsx("h2",{className:"section-title",children:"About Me"})]}),f.jsxs("div",{className:"about-layout",children:[f.jsx("div",{className:"about-image-col",children:f.jsxs("div",{className:"about-img-wrapper",children:[f.jsx("img",{src:E1,alt:"Samin Shrestha"}),f.jsxs("div",{className:"about-badge",children:[f.jsx("div",{className:"about-badge-label",children:"Currently"}),f.jsx("div",{className:"about-badge-value",children:"4th Year CE"})]})]})}),f.jsxs("div",{className:"about-text-col",children:[f.jsx("div",{className:"about-highlights",children:h.map((T,A)=>f.jsxs("div",{className:"about-highlight-item",children:[f.jsx("span",{className:"about-highlight-icon",children:T.icon}),T.label]},A))}),f.jsxs("div",{className:"about-paragraphs",children:[f.jsxs("p",{children:["I'm a ",f.jsx("strong",{children:"fourth-year Computer Engineering student"})," with a strong interest in web development and backend technologies. My primary stack includes",f.jsx("strong",{children:" Django, Python, Bootstrap"}),", and modern web technologies."]}),f.jsxs("p",{children:["I enjoy building full-stack applications such as ",f.jsx("strong",{children:"social media platforms"})," and management systems, focusing on creating scalable and user-friendly web solutions."]}),f.jsxs("p",{children:["Beyond web development, I've explored ",f.jsx("strong",{children:"Artificial Intelligence and Machine Learning"})," — working with deep learning, computer vision, and real-time data analysis to build meaningful, intelligent systems."]}),f.jsx("p",{children:"I'm always eager to learn new technologies and improve by working on practical projects that solve real-world problems."})]}),f.jsxs("div",{className:"about-cta-row",children:[f.jsx("a",{href:"#projects",className:"about-btn about-btn-primary",children:"View Projects ↗"}),f.jsx("a",{href:"#contact",className:"about-btn about-btn-ghost",children:"Let's Talk"})]})]})]})]})]})}const O0=(...h)=>h.filter((T,A,m)=>!!T&&T.trim()!==""&&m.indexOf(T)===A).join(" ").trim();const A1=h=>h.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const M1=h=>h.replace(/^([A-Z])|[\s-_]+(\w)/g,(T,A,m)=>m?m.toUpperCase():A.toLowerCase());const _0=h=>{const T=M1(h);return T.charAt(0).toUpperCase()+T.slice(1)};var _1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const N1=h=>{for(const T in h)if(T.startsWith("aria-")||T==="role"||T==="title")return!0;return!1};const O1=Tt.forwardRef(({color:h="currentColor",size:T=24,strokeWidth:A=2,absoluteStrokeWidth:m,className:O="",children:C,iconNode:k,...q},N)=>Tt.createElement("svg",{ref:N,..._1,width:T,height:T,stroke:h,strokeWidth:m?Number(A)*24/Number(T):A,className:O0("lucide",O),...!C&&!N1(q)&&{"aria-hidden":"true"},...q},[...k.map(([x,Y])=>Tt.createElement(x,Y)),...Array.isArray(C)?C:[C]]));const Le=(h,T)=>{const A=Tt.forwardRef(({className:m,...O},C)=>Tt.createElement(O1,{ref:C,iconNode:T,className:O0(`lucide-${A1(_0(h))}`,`lucide-${h}`,m),...O}));return A.displayName=_0(h),A};const D1=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],U1=Le("facebook",D1);const H1=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],D0=Le("github",H1);const R1=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],C1=Le("instagram",R1);const B1=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],w1=Le("linkedin",B1);const q1=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Y1=Le("mail",q1);const G1=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],X1=Le("phone",G1);const L1=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Q1=Le("send",L1),N0=[{title:"Automatic Number Plate Recognition",category:"Computer Vision · AI",description:"Built a computer vision system using YOLO to detect vehicle license plates in real-time and automatically extract plate numbers from images.",tech:["Python","YOLO","OpenCV","Deep Learning"],github:"https://github.com/Saminstha/automatic-number-plate-detection",icon:"🚗",color:"rgba(99,179,237,0.08)",accent:"#63b3ed",ongoing:!1},{title:"Instagram Clone",category:"Full-Stack · Social",description:"A social media web application built with Django where users can create accounts, upload posts, follow other users, like and comment on posts in a dynamic feed.",tech:["Django","Python","PostgreSQL","Bootstrap"],github:"https://github.com/Saminstha/instaclone-django",icon:"📸",color:"rgba(154,120,255,0.08)",accent:"#9a78ff",ongoing:!1},{title:"Student Management System",category:"Web App · Backend",description:"A web-based system developed to manage student records, including adding, updating, and tracking academic information in an organized database-driven platform.",tech:["Django","Python","SQLite","HTML/CSS"],github:"https://github.com/Saminstha/student-management-system",icon:"🎓",color:"rgba(72,187,120,0.08)",accent:"#48bb78",ongoing:!1},{title:"News Portal Web Application",category:"Full-Stack · CMS",description:"A full-stack news portal built using Django that allows users to browse news articles organized by categories with a dynamic content management system and responsive interface.",tech:["Django","Python","CMS","Bootstrap"],github:"https://github.com/Saminstha/News_portal",icon:"📰",color:"rgba(251,191,36,0.08)",accent:"#fbbf24",ongoing:!1},{title:"Event Manager Web Application",category:"Web App · Management",description:"A Django-based event management system that allows users to create, manage, and track events with features like event scheduling, attendance tracking, and a responsive UI.",tech:["Django","Python","SQLite","HTML/CSS"],github:"https://github.com/Saminstha/event_manager",icon:"📅",color:"rgba(249,115,22,0.08)",accent:"#f97316",ongoing:!1},{title:"VioLens: Real-time Violence Detection System",category:"AI · Surveillance",description:"An AI-powered surveillance system that detects violent activities in real-time using CNN and LSTM models. The system analyzes CCTV footage to identify suspicious behavior and trigger alerts, helping improve public safety and security monitoring.",tech:["Python","CNN","LSTM","Deep Learning","OpenCV"],github:"https://github.com/YOUR_USERNAME/violens",icon:"🛡️",color:"rgba(239,68,68,0.08)",accent:"#ef4444",ongoing:!0}];function Z1(){return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .projects-section {
          padding: 120px 10%;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .projects-section::before {
          content: 'WORK';
          position: absolute;
          top: 60px;
          left: -20px;
          font-family: 'Syne', sans-serif;
          font-size: 10rem;
          font-weight: 800;
          color: rgba(99,179,237,0.025);
          letter-spacing: -4px;
          pointer-events: none;
          user-select: none;
        }

        .projects-header {
          margin-bottom: 72px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 24px;
        }

        .section-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.75rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #63b3ed;
          font-weight: 500;
          margin-bottom: 16px;
        }

        .section-eyebrow::before {
          content: '';
          display: inline-block;
          width: 28px;
          height: 1px;
          background: #63b3ed;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 800;
          letter-spacing: -1.5px;
          color: #fff;
          line-height: 1.05;
        }

        .projects-count {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.3);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .project-grid-new {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .project-card-new {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          cursor: default;
        }

        .project-card-new:hover {
          transform: translateY(-6px);
          border-color: rgba(99,179,237,0.2);
          box-shadow: 0 24px 60px rgba(0,0,0,0.3);
        }

        /* Ongoing card special border pulse */
        .project-card-new.ongoing {
          border-color: rgba(239,68,68,0.25);
        }

        .project-card-new.ongoing:hover {
          border-color: rgba(239,68,68,0.45);
          box-shadow: 0 24px 60px rgba(239,68,68,0.12);
        }

        /* Ongoing badge */
        .ongoing-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(239,68,68,0.12);
          border: 1px solid rgba(239,68,68,0.3);
          color: #fca5a5;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 100px;
          width: fit-content;
        }

        .ongoing-dot {
          width: 6px;
          height: 6px;
          background: #ef4444;
          border-radius: 50%;
          animation: ongoing-pulse 1.6s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes ongoing-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.6; }
        }

        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .project-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          border: 1px solid rgba(255,255,255,0.08);
          flex-shrink: 0;
        }

        .project-category {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.3);
          letter-spacing: 1px;
          text-transform: uppercase;
          text-align: right;
          margin-top: 4px;
          line-height: 1.6;
        }

        .project-title-new {
          font-family: 'Syne', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.3px;
          line-height: 1.3;
        }

        .project-desc-new {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.42);
          line-height: 1.8;
          font-weight: 300;
          flex: 1;
        }

        .project-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .project-tag {
          font-size: 0.7rem;
          padding: 4px 12px;
          border-radius: 100px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.3px;
          font-weight: 400;
          transition: all 0.2s ease;
        }

        .project-card-new:hover .project-tag {
          border-color: rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.65);
        }

        .project-footer {
          display: flex;
          gap: 12px;
          padding-top: 4px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.82rem;
          font-weight: 500;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.08);
          transition: all 0.25s ease;
        }

        .project-link:hover {
          color: #fff;
          border-color: rgba(99,179,237,0.35);
          background: rgba(99,179,237,0.08);
        }

        .project-link-primary {
          background: rgba(99,179,237,0.1);
          border-color: rgba(99,179,237,0.2);
          color: #90cdf4;
        }

        .project-link-primary:hover {
          background: rgba(99,179,237,0.18);
          color: #fff;
        }

        .project-number {
          position: absolute;
          top: 16px;
          right: 20px;
          font-family: 'Syne', sans-serif;
          font-size: 5rem;
          font-weight: 800;
          color: rgba(255,255,255,0.02);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        @media (max-width: 1024px) {
          .project-grid-new { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .project-grid-new { grid-template-columns: 1fr; }
          .projects-header { flex-direction: column; align-items: flex-start; }
        }
      `}),f.jsxs("section",{id:"projects",className:"projects-section",children:[f.jsxs("div",{className:"projects-header",children:[f.jsxs("div",{children:[f.jsx("div",{className:"section-eyebrow",children:"My Work"}),f.jsx("h2",{className:"section-title",children:"Projects"})]}),f.jsxs("div",{className:"projects-count",children:[N0.length," projects"]})]}),f.jsx("div",{className:"project-grid-new",children:N0.map((h,T)=>f.jsxs("div",{className:`project-card-new ${h.ongoing?"ongoing":""}`,style:{background:`linear-gradient(135deg, ${h.color}, rgba(255,255,255,0.01))`},children:[f.jsxs("div",{className:"project-number",children:["0",T+1]}),f.jsxs("div",{className:"project-top",children:[f.jsx("div",{className:"project-icon-box",style:{background:h.color,borderColor:`${h.accent}30`},children:h.icon}),f.jsx("div",{className:"project-category",children:h.category.split(" · ").map((A,m)=>f.jsx("div",{children:A},m))})]}),h.ongoing&&f.jsxs("div",{className:"ongoing-badge",children:[f.jsx("span",{className:"ongoing-dot"}),"In Progress"]}),f.jsx("div",{className:"project-title-new",children:h.title}),f.jsx("div",{className:"project-desc-new",children:h.description}),f.jsx("div",{className:"project-tech-stack",children:h.tech.map((A,m)=>f.jsx("span",{className:"project-tag",children:A},m))}),f.jsx("div",{className:"project-footer",children:f.jsxs("a",{href:h.github,target:"_blank",rel:"noopener noreferrer",className:"project-link project-link-primary",children:[f.jsx(D0,{size:14})," GitHub"]})})]},T))})]})]})}const V1=[{name:"HTML5",icon:f.jsxs("svg",{viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"38",height:"38",children:[f.jsx("path",{d:"M6 2l2.4 26.4L16 30l7.6-1.6L26 2H6z",fill:"#E44D26"}),f.jsx("path",{d:"M16 27.6V4.4H24.1L22 25.2 16 27.6z",fill:"#F16529"}),f.jsx("path",{d:"M11.2 13.6H16v3.2h-1.6l.4 4.4 1.2.3v3.3l-4.4-1.2-.3-3.6h3.1l.1 1.5 1.5.4.1-2.8H10.6l-.4-4.8H16V10.4h-5.2l-.4-4.4H16V2.6H7.6L9.2 20 11.2 13.6z",fill:"#EBEBEB"}),f.jsx("path",{d:"M16 10.4v3.2h4.6l-.4 4.4-4.2 1.1v3.3l4.3-1.2.3-4H16v-3.2h4.9l.4-4.4H16V2.6h8.4L22.8 20 16 21.9v3.3l7.6-2.1L26 2h-10v8.4z",fill:"#fff"})]}),color:"#E44D26",bg:"rgba(228,77,38,0.08)",border:"rgba(228,77,38,0.22)",glow:"rgba(228,77,38,0.14)"},{name:"CSS3",icon:f.jsxs("svg",{viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"38",height:"38",children:[f.jsx("path",{d:"M6 2l2.4 26.4L16 30l7.6-1.6L26 2H6z",fill:"#1572B6"}),f.jsx("path",{d:"M16 27.6V4.4H24.1L22 25.2 16 27.6z",fill:"#33A9DC"}),f.jsx("path",{d:"M11 6H16v3.4H10.6l-.4-3.4zm-.7 7.4H16v3.2h-4.6l.3 3.3 4.3 1.1v3.4l-4.4-1.2-.3-4.1h-1.5l-.4-4.7-.4-1.1.8.1z",fill:"#EBEBEB"}),f.jsx("path",{d:"M16 6v3.4h5.4l-.4 3.4H16v3.2h4.6l-.45 4.9-4.15 1.1V25.3l4.3-1.2.6-6.7H16v-3.2h5.4L22 6H16z",fill:"#fff"})]}),color:"#1572B6",bg:"rgba(21,114,182,0.08)",border:"rgba(21,114,182,0.22)",glow:"rgba(21,114,182,0.14)"},{name:"JavaScript",icon:f.jsxs("svg",{viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"38",height:"38",children:[f.jsx("rect",{x:"2",y:"2",width:"28",height:"28",rx:"3",fill:"#F7DF1E"}),f.jsx("path",{d:"M10 24.8l2.1-1.28c.42.74.8 1.37 1.7 1.37.87 0 1.42-.34 1.42-1.66V14.4h2.6v8.88c0 2.73-1.6 3.97-3.94 3.97-2.1 0-3.33-1.09-3.95-2.42zM19.2 24.5l2.1-1.3c.55.9 1.27 1.57 2.54 1.57 1.07 0 1.75-.53 1.75-1.27 0-.88-.7-1.2-1.88-1.7l-.64-.28c-1.87-.8-3.1-1.8-3.1-3.9 0-1.94 1.48-3.42 3.8-3.42 1.65 0 2.84.58 3.7 2.08l-2.02 1.3c-.45-.8-.93-1.12-1.68-1.12-.76 0-1.25.48-1.25 1.12 0 .78.49 1.1 1.62 1.58l.64.27c2.2.95 3.44 1.92 3.44 4.1 0 2.35-1.85 3.6-4.33 3.6-2.43 0-4-1.16-4.75-2.7z",fill:"#323330"})]}),color:"#F7DF1E",bg:"rgba(247,223,30,0.07)",border:"rgba(247,223,30,0.22)",glow:"rgba(247,223,30,0.12)"},{name:"React",icon:f.jsxs("svg",{viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"38",height:"38",children:[f.jsx("circle",{cx:"16",cy:"16",r:"2.6",fill:"#61DAFB"}),f.jsx("ellipse",{cx:"16",cy:"16",rx:"13.5",ry:"5.2",stroke:"#61DAFB",strokeWidth:"1.4",fill:"none"}),f.jsx("ellipse",{cx:"16",cy:"16",rx:"13.5",ry:"5.2",stroke:"#61DAFB",strokeWidth:"1.4",fill:"none",transform:"rotate(60 16 16)"}),f.jsx("ellipse",{cx:"16",cy:"16",rx:"13.5",ry:"5.2",stroke:"#61DAFB",strokeWidth:"1.4",fill:"none",transform:"rotate(120 16 16)"})]}),color:"#61DAFB",bg:"rgba(97,218,251,0.07)",border:"rgba(97,218,251,0.22)",glow:"rgba(97,218,251,0.12)"},{name:"Python",icon:f.jsxs("svg",{viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"38",height:"38",children:[f.jsx("path",{d:"M15.9 2C11.5 2 11.9 3.9 11.9 3.9V8H16v1H7.8S4 8.5 4 12.9c0 4.4 3.5 4.2 3.5 4.2H10v-2.2S9.8 11.3 13.4 11.3h7.1c0 0 3.3.1 3.3-3.1V5C23.8 5 24.3 2 15.9 2z",fill:"url(#pyg1)"}),f.jsx("path",{d:"M16.1 30c4.4 0 4-1.9 4-1.9V24H16v-1h8.2S28 23.5 28 19.1c0-4.4-3.5-4.2-3.5-4.2H22v2.2s.2 3.6-3.4 3.6h-7.1c0 0-3.3-.1-3.3 3.1V27c0 0-.5 3 8.1 3h-.2z",fill:"url(#pyg2)"}),f.jsx("circle",{cx:"13.5",cy:"5.5",r:"1.1",fill:"white"}),f.jsx("circle",{cx:"18.5",cy:"26.5",r:"1.1",fill:"white"}),f.jsxs("defs",{children:[f.jsxs("linearGradient",{id:"pyg1",x1:"4",y1:"2",x2:"24",y2:"11",gradientUnits:"userSpaceOnUse",children:[f.jsx("stop",{stopColor:"#5A9FD4"}),f.jsx("stop",{offset:"1",stopColor:"#306998"})]}),f.jsxs("linearGradient",{id:"pyg2",x1:"8",y1:"21",x2:"28",y2:"30",gradientUnits:"userSpaceOnUse",children:[f.jsx("stop",{stopColor:"#FFD43B"}),f.jsx("stop",{offset:"1",stopColor:"#FFE873"})]})]})]}),color:"#FFD43B",bg:"rgba(255,212,59,0.07)",border:"rgba(255,212,59,0.22)",glow:"rgba(255,212,59,0.12)"},{name:"Django",icon:f.jsxs("svg",{viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"38",height:"38",children:[f.jsx("rect",{width:"32",height:"32",rx:"5",fill:"#092E20"}),f.jsx("path",{d:"M17.4 5.5h3.4V20c-1.7.34-2.95.47-4.3.47-4.1 0-6.2-1.86-6.2-5.43 0-3.45 2.26-5.7 5.63-5.7.56 0 .98.05 1.47.18V5.5zm0 7.82c-.38-.14-.7-.2-1.08-.2-1.65 0-2.6 1.04-2.6 2.76 0 1.68.9 2.62 2.54 2.62.35 0 .65-.02 1.14-.1v-5.08z",fill:"#44B78B"}),f.jsx("path",{d:"M22.5 10.6H26v13.4h-3.5V10.6zM22.5 5.5H26v3.4h-3.5V5.5z",fill:"#44B78B"})]}),color:"#44B78B",bg:"rgba(68,183,139,0.08)",border:"rgba(68,183,139,0.22)",glow:"rgba(68,183,139,0.14)"},{name:"Machine Learning",icon:f.jsxs("svg",{viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"38",height:"38",children:[f.jsx("circle",{cx:"16",cy:"16",r:"3.2",fill:"#a78bfa"}),f.jsx("circle",{cx:"6.5",cy:"10",r:"2.4",fill:"#7c3aed",opacity:"0.85"}),f.jsx("circle",{cx:"25.5",cy:"10",r:"2.4",fill:"#7c3aed",opacity:"0.85"}),f.jsx("circle",{cx:"6.5",cy:"22",r:"2.4",fill:"#7c3aed",opacity:"0.85"}),f.jsx("circle",{cx:"25.5",cy:"22",r:"2.4",fill:"#7c3aed",opacity:"0.85"}),f.jsx("circle",{cx:"16",cy:"4",r:"2",fill:"#c4b5fd"}),f.jsx("circle",{cx:"16",cy:"28",r:"2",fill:"#c4b5fd"}),f.jsx("line",{x1:"16",y1:"12.8",x2:"8.5",y2:"10.8",stroke:"#a78bfa",strokeWidth:"1.3",opacity:"0.7"}),f.jsx("line",{x1:"16",y1:"12.8",x2:"23.5",y2:"10.8",stroke:"#a78bfa",strokeWidth:"1.3",opacity:"0.7"}),f.jsx("line",{x1:"16",y1:"19.2",x2:"8.5",y2:"21.2",stroke:"#a78bfa",strokeWidth:"1.3",opacity:"0.7"}),f.jsx("line",{x1:"16",y1:"19.2",x2:"23.5",y2:"21.2",stroke:"#a78bfa",strokeWidth:"1.3",opacity:"0.7"}),f.jsx("line",{x1:"16",y1:"12.8",x2:"16",y2:"6",stroke:"#a78bfa",strokeWidth:"1.3",opacity:"0.7"}),f.jsx("line",{x1:"16",y1:"19.2",x2:"16",y2:"26",stroke:"#a78bfa",strokeWidth:"1.3",opacity:"0.7"})]}),color:"#a78bfa",bg:"rgba(167,139,250,0.08)",border:"rgba(167,139,250,0.22)",glow:"rgba(167,139,250,0.14)"},{name:"Git",icon:f.jsx("svg",{viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"38",height:"38",children:f.jsx("path",{d:"M29.47 14.53L17.47 2.53a1.8 1.8 0 00-2.55 0l-2.53 2.53 3.2 3.2a2.14 2.14 0 012.7 2.7l3.08 3.08a2.14 2.14 0 11-1.28 1.28L17 12.23V20a2.14 2.14 0 11-1.72 0v-7.94a2.14 2.14 0 01-1.16-2.8l-3.15-3.15L2.53 14.47a1.8 1.8 0 000 2.55l12 12a1.8 1.8 0 002.55 0l12.4-12.4a1.8 1.8 0 00-.01-2.09z",fill:"#F05032"})}),color:"#F05032",bg:"rgba(240,80,50,0.08)",border:"rgba(240,80,50,0.22)",glow:"rgba(240,80,50,0.14)"}];function K1(){return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .skills-section {
          padding: 120px 10%;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .skills-section::before {
          content: 'SKILLS';
          position: absolute;
          bottom: 20px;
          right: -30px;
          font-family: 'Syne', sans-serif;
          font-size: 9rem;
          font-weight: 800;
          color: rgba(99,179,237,0.025);
          letter-spacing: -4px;
          pointer-events: none;
          user-select: none;
          white-space: nowrap;
        }

        .skills-header {
          margin-bottom: 64px;
        }

        .section-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.75rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #63b3ed;
          font-weight: 500;
          margin-bottom: 16px;
        }

        .section-eyebrow::before {
          content: '';
          display: inline-block;
          width: 28px;
          height: 1px;
          background: #63b3ed;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 800;
          letter-spacing: -1.5px;
          color: #fff;
          line-height: 1.05;
        }

        /* Skills grid — exactly 3 columns */
        .skills-grid-new {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .skill-card {
          background: rgba(255,255,255,0.02);
          border-radius: 22px;
          padding: 44px 24px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          transition: all 0.38s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: default;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .skill-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 28px 64px rgba(0,0,0,0.38);
        }

        .skill-icon-box {
          width: 88px;
          height: 88px;
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
          transition: transform 0.38s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
        }

        .skill-card:hover .skill-icon-box {
          transform: scale(1.12);
        }

        .skill-name {
          font-size: 1rem;
          font-weight: 500;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.2px;
          position: relative;
          z-index: 1;
          transition: color 0.25s ease;
          line-height: 1.3;
        }

        .skill-card:hover .skill-name {
          color: rgba(255,255,255,0.95);
        }

        /* Glow overlay */
        .skill-card-glow {
          position: absolute;
          inset: 0;
          border-radius: 22px;
          opacity: 0;
          transition: opacity 0.38s ease;
          pointer-events: none;
        }

        @media (max-width: 900px) {
          .skills-grid-new {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
          }
        }

        @media (max-width: 520px) {
          .skills-grid-new {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          .skill-icon-box { width: 68px; height: 68px; }
          .skill-card { padding: 32px 16px 26px; gap: 16px; }
          .skill-name { font-size: 0.88rem; }
        }
      `}),f.jsxs("section",{id:"skills",className:"skills-section",children:[f.jsxs("div",{className:"skills-header",children:[f.jsx("div",{className:"section-eyebrow",children:"What I know"}),f.jsx("h2",{className:"section-title",children:"Technical Skills"})]}),f.jsx("div",{className:"skills-grid-new",children:V1.map((h,T)=>f.jsxs("div",{className:"skill-card",style:{border:`1px solid ${h.border}`},onMouseEnter:A=>{A.currentTarget.querySelector(".skill-card-glow").style.opacity="1"},onMouseLeave:A=>{A.currentTarget.querySelector(".skill-card-glow").style.opacity="0"},children:[f.jsx("div",{className:"skill-card-glow",style:{background:`radial-gradient(ellipse 100% 60% at 50% 0%, ${h.glow} 0%, transparent 70%)`}}),f.jsx("div",{className:"skill-icon-box",style:{background:h.bg,border:`1px solid ${h.border}`},children:h.icon}),f.jsx("div",{className:"skill-name",children:h.name})]},T))})]})]})}class En{constructor(T=0,A="Network Error"){this.status=T,this.text=A}}const J1=()=>{if(!(typeof localStorage>"u"))return{get:h=>Promise.resolve(localStorage.getItem(h)),set:(h,T)=>Promise.resolve(localStorage.setItem(h,T)),remove:h=>Promise.resolve(localStorage.removeItem(h))}},Bt={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:J1()},gf=h=>h?typeof h=="string"?{publicKey:h}:h.toString()==="[object Object]"?h:{}:{},k1=(h,T="https://api.emailjs.com")=>{if(!h)return;const A=gf(h);Bt.publicKey=A.publicKey,Bt.blockHeadless=A.blockHeadless,Bt.storageProvider=A.storageProvider,Bt.blockList=A.blockList,Bt.limitRate=A.limitRate,Bt.origin=A.origin||T},U0=async(h,T,A={})=>{const m=await fetch(Bt.origin+h,{method:"POST",headers:A,body:T}),O=await m.text(),C=new En(m.status,O);if(m.ok)return C;throw C},H0=(h,T,A)=>{if(!h||typeof h!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!T||typeof T!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!A||typeof A!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},W1=h=>{if(h&&h.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},R0=h=>h.webdriver||!h.languages||h.languages.length===0,C0=()=>new En(451,"Unavailable For Headless Browser"),F1=(h,T)=>{if(!Array.isArray(h))throw"The BlockList list has to be an array";if(typeof T!="string")throw"The BlockList watchVariable has to be a string"},$1=h=>!h.list?.length||!h.watchVariable,I1=(h,T)=>h instanceof FormData?h.get(T):h[T],B0=(h,T)=>{if($1(h))return!1;F1(h.list,h.watchVariable);const A=I1(T,h.watchVariable);return typeof A!="string"?!1:h.list.includes(A)},w0=()=>new En(403,"Forbidden"),P1=(h,T)=>{if(typeof h!="number"||h<0)throw"The LimitRate throttle has to be a positive number";if(T&&typeof T!="string")throw"The LimitRate ID has to be a non-empty string"},th=async(h,T,A)=>{const m=Number(await A.get(h)||0);return T-Date.now()+m},q0=async(h,T,A)=>{if(!T.throttle||!A)return!1;P1(T.throttle,T.id);const m=T.id||h;return await th(m,T.throttle,A)>0?!0:(await A.set(m,Date.now().toString()),!1)},Y0=()=>new En(429,"Too Many Requests"),lh=async(h,T,A,m)=>{const O=gf(m),C=O.publicKey||Bt.publicKey,k=O.blockHeadless||Bt.blockHeadless,q=O.storageProvider||Bt.storageProvider,N={...Bt.blockList,...O.blockList},x={...Bt.limitRate,...O.limitRate};return k&&R0(navigator)?Promise.reject(C0()):(H0(C,h,T),W1(A),A&&B0(N,A)?Promise.reject(w0()):await q0(location.pathname,x,q)?Promise.reject(Y0()):U0("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:C,service_id:h,template_id:T,template_params:A}),{"Content-type":"application/json"}))},eh=h=>{if(!h||h.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},ah=h=>typeof h=="string"?document.querySelector(h):h,nh=async(h,T,A,m)=>{const O=gf(m),C=O.publicKey||Bt.publicKey,k=O.blockHeadless||Bt.blockHeadless,q=Bt.storageProvider||O.storageProvider,N={...Bt.blockList,...O.blockList},x={...Bt.limitRate,...O.limitRate};if(k&&R0(navigator))return Promise.reject(C0());const Y=ah(A);H0(C,h,T),eh(Y);const U=new FormData(Y);return B0(N,U)?Promise.reject(w0()):await q0(location.pathname,x,q)?Promise.reject(Y0()):(U.append("lib_version","4.4.1"),U.append("service_id",h),U.append("template_id",T),U.append("user_id",C),U0("/api/v1.0/email/send-form",U))},ih={init:k1,send:lh,sendForm:nh,EmailJSResponseStatus:En};function uh(){const h=Tt.useRef(),[T,A]=Tt.useState(""),[m,O]=Tt.useState(""),[C,k]=Tt.useState(!1);Tt.useEffect(()=>{if(T){const x=setTimeout(()=>A(""),4e3);return()=>clearTimeout(x)}},[T]);const q=x=>{x.preventDefault(),k(!0),ih.sendForm("service_5xwiwts","template_ad7lcio",h.current,"gFrg8igwOukMicwu-").then(()=>{A("success"),x.target.reset()}).catch(()=>{A("error")}).finally(()=>k(!1))},N=[{icon:f.jsx(D0,{size:18}),href:"https://github.com/Saminstha",label:"GitHub"},{icon:f.jsx(w1,{size:18}),href:"https://linkedin.com/in/samin-shrestha-553567236",label:"LinkedIn"},{icon:f.jsx(U1,{size:18}),href:"https://facebook.com/samiin.shrestha",label:"Facebook"},{icon:f.jsx(C1,{size:18}),href:"https://instagram.com/_samiin_10/",label:"Instagram"}];return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .contact-section {
          padding: 120px 10% 80px;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .contact-section::before {
          content: 'HELLO';
          position: absolute;
          top: 50px;
          right: -40px;
          font-family: 'Syne', sans-serif;
          font-size: 10rem;
          font-weight: 800;
          color: rgba(99,179,237,0.025);
          letter-spacing: -4px;
          pointer-events: none;
          user-select: none;
          white-space: nowrap;
        }

        /* Glow background */
        .contact-glow {
          position: absolute;
          bottom: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(49,130,206,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .contact-header {
          margin-bottom: 72px;
          text-align: center;
        }

        .section-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.75rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #63b3ed;
          font-weight: 500;
          margin-bottom: 16px;
        }

        .section-eyebrow::before {
          content: '';
          display: inline-block;
          width: 28px;
          height: 1px;
          background: #63b3ed;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 800;
          letter-spacing: -1.5px;
          color: #fff;
          line-height: 1.05;
          margin-bottom: 16px;
        }

        .contact-subtitle {
          font-size: 1rem;
          color: rgba(255,255,255,0.38);
          font-weight: 300;
          max-width: 420px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 60px;
          align-items: start;
          position: relative;
          z-index: 1;
        }

        /* Left info panel */
        .contact-info-panel {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .contact-info-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 24px;
          transition: all 0.3s ease;
        }

        .contact-info-card:hover {
          border-color: rgba(99,179,237,0.2);
          background: rgba(99,179,237,0.04);
        }

        .contact-info-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.25);
          margin-bottom: 16px;
          font-weight: 600;
        }

        .contact-info-row {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255,255,255,0.6);
          font-size: 0.9rem;
          padding: 8px 0;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        a.contact-info-row:hover { color: #90cdf4; }

        .contact-info-icon {
          width: 34px;
          height: 34px;
          background: rgba(99,179,237,0.08);
          border: 1px solid rgba(99,179,237,0.12);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #63b3ed;
          flex-shrink: 0;
        }

        /* Social links */
        .socials-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .social-card {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02);
          text-decoration: none;
          color: rgba(255,255,255,0.5);
          font-size: 0.82rem;
          font-weight: 500;
          transition: all 0.25s ease;
        }

        .social-card:hover {
          background: rgba(99,179,237,0.08);
          border-color: rgba(99,179,237,0.25);
          color: #90cdf4;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }

        .social-card-icon {
          color: rgba(255,255,255,0.35);
          transition: color 0.25s ease;
        }

        .social-card:hover .social-card-icon { color: #63b3ed; }

        /* Right form panel */
        .contact-form-panel {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 24px;
          padding: 40px;
        }

        .contact-form-new {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-label {
          font-size: 0.72rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          font-weight: 500;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 14px 18px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 300;
          outline: none;
          transition: all 0.25s ease;
          resize: none;
          box-sizing: border-box;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: rgba(99,179,237,0.45);
          background: rgba(99,179,237,0.04);
          box-shadow: 0 0 0 4px rgba(99,179,237,0.07);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: rgba(255,255,255,0.18);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #3182ce, #63b3ed);
          color: #fff;
          border: none;
          border-radius: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(49, 130, 206, 0.3);
          letter-spacing: 0.3px;
          margin-top: 8px;
        }

        .form-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 16px 48px rgba(49, 130, 206, 0.45);
        }

        .form-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .form-submit.loading {
          background: rgba(49,130,206,0.5);
        }

        /* Status messages */
        .status-msg {
          padding: 14px 20px;
          border-radius: 12px;
          font-size: 0.875rem;
          font-weight: 400;
          display: flex;
          align-items: center;
          gap: 10px;
          animation: status-in 0.3s ease;
        }

        @keyframes status-in {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .status-success {
          background: rgba(72, 187, 120, 0.1);
          border: 1px solid rgba(72, 187, 120, 0.25);
          color: #68d391;
        }

        .status-error {
          background: rgba(245, 101, 101, 0.1);
          border: 1px solid rgba(245, 101, 101, 0.2);
          color: #fc8181;
        }

        /* Spin animation for loading */
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        /* Footer strip */
        .contact-footer {
          margin-top: 80px;
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .contact-footer-text {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.2);
          font-weight: 300;
        }

        .contact-footer-text span {
          color: rgba(99,179,237,0.5);
        }

        @media (max-width: 900px) {
          .contact-layout { grid-template-columns: 1fr; gap: 40px; }
          .contact-header { text-align: left; }
          .contact-subtitle { margin: 0; }
          .form-row { grid-template-columns: 1fr; }
          .contact-form-panel { padding: 28px 24px; }
        }
      `}),f.jsxs("section",{id:"contact",className:"contact-section",children:[f.jsx("div",{className:"contact-glow"}),f.jsxs("div",{className:"contact-header",children:[f.jsx("div",{className:"section-eyebrow",children:"Reach Out"}),f.jsx("h2",{className:"section-title",children:"Get In Touch"}),f.jsx("p",{className:"contact-subtitle",children:"Have a project in mind or just want to say hello? My inbox is always open."})]}),f.jsxs("div",{className:"contact-layout",children:[f.jsxs("div",{className:"contact-info-panel",children:[f.jsxs("div",{className:"contact-info-card",children:[f.jsx("div",{className:"contact-info-card-title",children:"Direct Contact"}),f.jsxs("a",{href:"tel:+9779843473968",className:"contact-info-row",children:[f.jsx("div",{className:"contact-info-icon",children:f.jsx(X1,{size:15})}),"+977-9843473968"]}),f.jsxs("a",{href:"mailto:saminshrestha7@gmail.com",className:"contact-info-row",children:[f.jsx("div",{className:"contact-info-icon",children:f.jsx(Y1,{size:15})}),"saminshrestha7@gmail.com"]})]}),f.jsxs("div",{className:"contact-info-card",children:[f.jsx("div",{className:"contact-info-card-title",children:"Follow Me"}),f.jsx("div",{className:"socials-grid",children:N.map((x,Y)=>f.jsxs("a",{href:x.href,target:"_blank",rel:"noopener noreferrer",className:"social-card",children:[f.jsx("span",{className:"social-card-icon",children:x.icon}),x.label]},Y))})]})]}),f.jsx("div",{className:"contact-form-panel",children:f.jsxs("form",{ref:h,onSubmit:q,className:"contact-form-new",children:[f.jsxs("div",{className:"form-row",children:[f.jsxs("div",{className:"form-field",children:[f.jsx("label",{className:"form-label",children:"Your Name"}),f.jsx("input",{className:"form-input",type:"text",name:"name",placeholder:"Samin Shrestha",required:!0})]}),f.jsxs("div",{className:"form-field",children:[f.jsx("label",{className:"form-label",children:"Your Email"}),f.jsx("input",{className:"form-input",type:"email",name:"email",placeholder:"hello@example.com",required:!0})]})]}),f.jsxs("div",{className:"form-field",children:[f.jsx("label",{className:"form-label",children:"Message"}),f.jsx("textarea",{className:"form-textarea",name:"message",rows:"6",placeholder:"Tell me about your project or just say hello...",required:!0})]}),T==="success"&&f.jsx("div",{className:"status-msg status-success",children:"✅ Message sent successfully! I'll get back to you soon."}),T==="error"&&f.jsx("div",{className:"status-msg status-error",children:"❌ Failed to send message. Please try again or email me directly."}),f.jsx("button",{type:"submit",className:`form-submit ${C?"loading":""}`,disabled:C,children:C?f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"spinner"})," Sending..."]}):f.jsxs(f.Fragment,{children:[f.jsx(Q1,{size:16})," Send Message"]})})]})})]}),f.jsxs("div",{className:"contact-footer",children:[f.jsxs("div",{className:"contact-footer-text",children:["© 2025 ",f.jsx("span",{children:"Samin Shrestha"}),". Designed & Built with ❤️"]}),f.jsxs("div",{className:"contact-footer-text",children:["Computer Engineering Student · ",f.jsx("span",{children:"Django Developer"})]})]})]})]})}function ch(){return f.jsxs(f.Fragment,{children:[f.jsx(v1,{}),f.jsx(j1,{}),f.jsx(T1,{}),f.jsx(Z1,{}),f.jsx(K1,{}),f.jsx(uh,{})]})}b1.createRoot(document.getElementById("root")).render(f.jsx(Tt.StrictMode,{children:f.jsx(ch,{})}));
