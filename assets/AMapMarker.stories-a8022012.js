import{j as L,a as ut,F as ct}from"./jsx-runtime-91db03d0.js";import{o as Et,r as Dt}from"./index-4139ccbc.js";import{a as _t}from"./chunk-GOSXJPAJ-7233c8d1.js";import"./chunk-AY7I2SME-ea41228b.js";import{j as re,A as Tt}from"./AMapMouseTool-cd485c74.js";import{w as It}from"./withAutoFitView-024448ed.js";import{w as Ft}from"./withAMap-c26d0ec0.js";import{w as qt,a as zt}from"./withAPIContainer-cce0a859.js";var pt={exports:{}};/** @license React v16.14.0
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=Et,_=Dt;function p(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b=typeof Symbol=="function"&&Symbol.for,mt=b?Symbol.for("react.portal"):60106,le=b?Symbol.for("react.fragment"):60107,ft=b?Symbol.for("react.strict_mode"):60108,dt=b?Symbol.for("react.profiler"):60114,ue=b?Symbol.for("react.provider"):60109,ht=b?Symbol.for("react.context"):60110,Ot=b?Symbol.for("react.concurrent_mode"):60111,yt=b?Symbol.for("react.forward_ref"):60112,ce=b?Symbol.for("react.suspense"):60113,vt=b?Symbol.for("react.suspense_list"):60120,gt=b?Symbol.for("react.memo"):60115,wt=b?Symbol.for("react.lazy"):60116,Lt=b?Symbol.for("react.block"):60121,Nt=b?Symbol.for("react.fundamental"):60117,At=b?Symbol.for("react.scope"):60119;function Vt(e){if(e._status===-1){e._status=0;var r=e._ctor;r=r(),e._result=r,r.then(function(t){e._status===0&&(t=t.default,e._status=1,e._result=t)},function(t){e._status===0&&(e._status=2,e._result=t)})}}function A(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case le:return"Fragment";case mt:return"Portal";case dt:return"Profiler";case ft:return"StrictMode";case ce:return"Suspense";case vt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ht:return"Context.Consumer";case ue:return"Context.Provider";case yt:var r=e.render;return r=r.displayName||r.name||"",e.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case gt:return A(e.type);case Lt:return A(e.render);case wt:if(e=e._status===1?e._result:null)return A(e)}return null}var R=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;R.hasOwnProperty("ReactCurrentDispatcher")||(R.ReactCurrentDispatcher={current:null});R.hasOwnProperty("ReactCurrentBatchConfig")||(R.ReactCurrentBatchConfig={suspense:null});var bt={};function j(e,r){for(var t=e._threadCount|0;t<=r;t++)e[t]=e._currentValue2,e._threadCount=t+1}function Pt(e,r,t,n){if(n&&(n=e.contextType,typeof n=="object"&&n!==null))return j(n,t),n[t];if(e=e.contextTypes){t={};for(var s in e)t[s]=r[s];r=t}else r=bt;return r}for(var v=new Uint16Array(16),W=0;15>W;W++)v[W]=W+1;v[15]=0;var Rt=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,he=Object.prototype.hasOwnProperty,ye={},ve={};function xt(e){return he.call(ve,e)?!0:he.call(ye,e)?!1:Rt.test(e)?ve[e]=!0:(ye[e]=!0,!1)}function jt(e,r,t,n){if(t!==null&&t.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return n?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ht(e,r,t,n){if(r===null||typeof r>"u"||jt(e,r,t,n))return!0;if(n)return!1;if(t!==null)switch(t.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function x(e,r,t,n,s,a){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=n,this.attributeNamespace=s,this.mustUseProperty=t,this.propertyName=e,this.type=r,this.sanitizeURL=a}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){y[e]=new x(e,0,!1,e,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];y[r]=new x(r,1,!1,e[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){y[e]=new x(e,2,!1,e.toLowerCase(),null,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){y[e]=new x(e,2,!1,e,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){y[e]=new x(e,3,!1,e.toLowerCase(),null,!1)});["checked","multiple","muted","selected"].forEach(function(e){y[e]=new x(e,3,!0,e,null,!1)});["capture","download"].forEach(function(e){y[e]=new x(e,4,!1,e,null,!1)});["cols","rows","size","span"].forEach(function(e){y[e]=new x(e,6,!1,e,null,!1)});["rowSpan","start"].forEach(function(e){y[e]=new x(e,5,!1,e.toLowerCase(),null,!1)});var fe=/[\-:]([a-z])/g;function de(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(fe,de);y[r]=new x(r,1,!1,e,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(fe,de);y[r]=new x(r,1,!1,e,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(fe,de);y[r]=new x(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(e){y[e]=new x(e,1,!1,e.toLowerCase(),null,!1)});y.xlinkHref=new x("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(e){y[e]=new x(e,1,!1,e.toLowerCase(),null,!0)});var Wt=/["'&<>]/;function F(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var r=Wt.exec(e);if(r){var t="",n,s=0;for(n=r.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#x27;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}s!==n&&(t+=e.substring(s,n)),s=n+1,t+=r}e=s!==n?t+e.substring(s,n):t}return e}function Ut(e,r){var t=y.hasOwnProperty(e)?y[e]:null,n;return(n=e!=="style")&&(n=t!==null?t.type===0:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")),n||Ht(e,r,t,!1)?"":t!==null?(e=t.attributeName,n=t.type,n===3||n===4&&r===!0?e+'=""':(t.sanitizeURL&&(r=""+r),e+'="'+(F(r)+'"'))):xt(e)?e+'="'+(F(r)+'"'):""}function Bt(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var $t=typeof Object.is=="function"?Object.is:Bt,D=null,te=null,c=null,N=!1,pe=!1,I=null,ne=0;function q(){if(D===null)throw Error(p(321));return D}function ge(){if(0<ne)throw Error(p(312));return{memoizedState:null,queue:null,next:null}}function me(){return c===null?te===null?(N=!1,te=c=ge()):(N=!0,c=te):c.next===null?(N=!1,c=c.next=ge()):(N=!0,c=c.next),c}function kt(e,r,t,n){for(;pe;)pe=!1,ne+=1,c=null,t=e(r,n);return te=D=null,ne=0,c=I=null,t}function St(e,r){return typeof r=="function"?r(e):r}function we(e,r,t){if(D=q(),c=me(),N){var n=c.queue;if(r=n.dispatch,I!==null&&(t=I.get(n),t!==void 0)){I.delete(n),n=c.memoizedState;do n=e(n,t.action),t=t.next;while(t!==null);return c.memoizedState=n,[n,r]}return[c.memoizedState,r]}return e=e===St?typeof r=="function"?r():r:t!==void 0?t(r):r,c.memoizedState=e,e=c.queue={last:null,dispatch:null},e=e.dispatch=Zt.bind(null,D,e),[c.memoizedState,e]}function Zt(e,r,t){if(!(25>ne))throw Error(p(301));if(e===D)if(pe=!0,e={action:t,next:null},I===null&&(I=new Map),t=I.get(r),t===void 0)I.set(r,e);else{for(r=t;r.next!==null;)r=r.next;r.next=e}}function ae(){}var V=0,Jt={readContext:function(e){var r=V;return j(e,r),e[r]},useContext:function(e){q();var r=V;return j(e,r),e[r]},useMemo:function(e,r){if(D=q(),c=me(),r=r===void 0?null:r,c!==null){var t=c.memoizedState;if(t!==null&&r!==null){e:{var n=t[1];if(n===null)n=!1;else{for(var s=0;s<n.length&&s<r.length;s++)if(!$t(r[s],n[s])){n=!1;break e}n=!0}}if(n)return t[0]}}return e=e(),c.memoizedState=[e,r],e},useReducer:we,useRef:function(e){D=q(),c=me();var r=c.memoizedState;return r===null?(e={current:e},c.memoizedState=e):r},useState:function(e){return we(St,e)},useLayoutEffect:function(){},useCallback:function(e){return e},useImperativeHandle:ae,useEffect:ae,useDebugValue:ae,useResponder:function(e,r){return{props:r,responder:e}},useDeferredValue:function(e){return q(),e},useTransition:function(){return q(),[function(e){e()},!1]}},Xt={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Yt(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}var Ct={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Kt=E({menuitem:!0},Ct),P={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qt=["Webkit","ms","Moz","O"];Object.keys(P).forEach(function(e){Qt.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),P[r]=P[e]})});var Gt=/([A-Z])/g,er=/^ms-/,T=_.Children.toArray,se=R.ReactCurrentDispatcher,tr={listing:!0,pre:!0,textarea:!0},rr=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,be={},ie={};function nr(e){if(e==null)return e;var r="";return _.Children.forEach(e,function(t){t!=null&&(r+=t)}),r}var or=Object.prototype.hasOwnProperty,ar={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function xe(e,r){if(e===void 0)throw Error(p(152,A(r)||"Component"))}function sr(e,r,t){function n(i,l){var o=l.prototype&&l.prototype.isReactComponent,C=Pt(l,r,t,o),d=[],u=!1,m={isMounted:function(){return!1},enqueueForceUpdate:function(){if(d===null)return null},enqueueReplaceState:function(S,oe){u=!0,d=[oe]},enqueueSetState:function(S,oe){if(d===null)return null;d.push(oe)}};if(o){if(o=new l(i.props,C,m),typeof l.getDerivedStateFromProps=="function"){var g=l.getDerivedStateFromProps.call(null,i.props,o.state);g!=null&&(o.state=E({},o.state,g))}}else if(D={},o=l(i.props,C,m),o=kt(l,i.props,o,C),o==null||o.render==null){e=o,xe(e,l);return}if(o.props=i.props,o.context=C,o.updater=m,m=o.state,m===void 0&&(o.state=m=null),typeof o.UNSAFE_componentWillMount=="function"||typeof o.componentWillMount=="function")if(typeof o.componentWillMount=="function"&&typeof l.getDerivedStateFromProps!="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&typeof l.getDerivedStateFromProps!="function"&&o.UNSAFE_componentWillMount(),d.length){m=d;var h=u;if(d=null,u=!1,h&&m.length===1)o.state=m[0];else{g=h?m[0]:o.state;var k=!0;for(h=h?1:0;h<m.length;h++){var f=m[h];f=typeof f=="function"?f.call(o,g,i.props,C):f,f!=null&&(k?(k=!1,g=E({},g,f)):E(g,f))}o.state=g}}else d=null;if(e=o.render(),xe(e,l),typeof o.getChildContext=="function"&&(i=l.childContextTypes,typeof i=="object")){var M=o.getChildContext();for(var H in M)if(!(H in i))throw Error(p(108,A(l)||"Unknown",H))}M&&(r=E({},r,M))}for(;_.isValidElement(e);){var s=e,a=s.type;if(typeof a!="function")break;n(s,a)}return{child:e,context:r}}var ke=function(){function e(t,n){_.isValidElement(t)?t.type!==le?t=[t]:(t=t.props.children,t=_.isValidElement(t)?[t]:T(t)):t=T(t),t={type:null,domNamespace:Xt.html,children:t,childIndex:0,context:bt,footer:""};var s=v[0];if(s===0){var a=v;s=a.length;var i=2*s;if(!(65536>=i))throw Error(p(304));var l=new Uint16Array(i);for(l.set(a),v=l,v[0]=s+1,a=s;a<i-1;a++)v[a]=a+1;v[i-1]=0}else v[0]=v[s];this.threadID=s,this.stack=[t],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=n,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[]}var r=e.prototype;return r.destroy=function(){if(!this.exhausted){this.exhausted=!0,this.clearProviders();var t=this.threadID;v[t]=v[0],v[0]=t}},r.pushProvider=function(t){var n=++this.contextIndex,s=t.type._context,a=this.threadID;j(s,a);var i=s[a];this.contextStack[n]=s,this.contextValueStack[n]=i,s[a]=t.props.value},r.popProvider=function(){var t=this.contextIndex,n=this.contextStack[t],s=this.contextValueStack[t];this.contextStack[t]=null,this.contextValueStack[t]=null,this.contextIndex--,n[this.threadID]=s},r.clearProviders=function(){for(var t=this.contextIndex;0<=t;t--)this.contextStack[t][this.threadID]=this.contextValueStack[t]},r.read=function(t){if(this.exhausted)return null;var n=V;V=this.threadID;var s=se.current;se.current=Jt;try{for(var a=[""],i=!1;a[0].length<t;){if(this.stack.length===0){this.exhausted=!0;var l=this.threadID;v[l]=v[0],v[0]=l;break}var o=this.stack[this.stack.length-1];if(i||o.childIndex>=o.children.length){var C=o.footer;if(C!==""&&(this.previousWasTextNode=!1),this.stack.pop(),o.type==="select")this.currentSelectValue=null;else if(o.type!=null&&o.type.type!=null&&o.type.type.$$typeof===ue)this.popProvider(o.type);else if(o.type===ce){this.suspenseDepth--;var d=a.pop();if(i){i=!1;var u=o.fallbackFrame;if(!u)throw Error(p(303));this.stack.push(u),a[this.suspenseDepth]+="<!--$!-->";continue}else a[this.suspenseDepth]+=d}a[this.suspenseDepth]+=C}else{var m=o.children[o.childIndex++],g="";try{g+=this.render(m,o.context,o.domNamespace)}catch(h){throw h!=null&&typeof h.then=="function"?Error(p(294)):h}finally{}a.length<=this.suspenseDepth&&a.push(""),a[this.suspenseDepth]+=g}}return a[0]}finally{se.current=s,V=n}},r.render=function(t,n,s){if(typeof t=="string"||typeof t=="number")return s=""+t,s===""?"":this.makeStaticMarkup?F(s):this.previousWasTextNode?"<!-- -->"+F(s):(this.previousWasTextNode=!0,F(s));if(n=sr(t,n,this.threadID),t=n.child,n=n.context,t===null||t===!1)return"";if(!_.isValidElement(t)){if(t!=null&&t.$$typeof!=null)throw s=t.$$typeof,Error(s===mt?p(257):p(258,s.toString()));return t=T(t),this.stack.push({type:null,domNamespace:s,children:t,childIndex:0,context:n,footer:""}),""}var a=t.type;if(typeof a=="string")return this.renderDOM(t,n,s);switch(a){case ft:case Ot:case dt:case vt:case le:return t=T(t.props.children),this.stack.push({type:null,domNamespace:s,children:t,childIndex:0,context:n,footer:""}),"";case ce:throw Error(p(294))}if(typeof a=="object"&&a!==null)switch(a.$$typeof){case yt:D={};var i=a.render(t.props,t.ref);return i=kt(a.render,t.props,i,t.ref),i=T(i),this.stack.push({type:null,domNamespace:s,children:i,childIndex:0,context:n,footer:""}),"";case gt:return t=[_.createElement(a.type,E({ref:t.ref},t.props))],this.stack.push({type:null,domNamespace:s,children:t,childIndex:0,context:n,footer:""}),"";case ue:return a=T(t.props.children),s={type:t,domNamespace:s,children:a,childIndex:0,context:n,footer:""},this.pushProvider(t),this.stack.push(s),"";case ht:a=t.type,i=t.props;var l=this.threadID;return j(a,l),a=T(i.children(a[l])),this.stack.push({type:t,domNamespace:s,children:a,childIndex:0,context:n,footer:""}),"";case Nt:throw Error(p(338));case wt:switch(a=t.type,Vt(a),a._status){case 1:return t=[_.createElement(a._result,E({ref:t.ref},t.props))],this.stack.push({type:null,domNamespace:s,children:t,childIndex:0,context:n,footer:""}),"";case 2:throw a._result;default:throw Error(p(295))}case At:throw Error(p(343))}throw Error(p(130,a==null?a:typeof a,""))},r.renderDOM=function(t,n,s){var a=t.type.toLowerCase();if(!be.hasOwnProperty(a)){if(!rr.test(a))throw Error(p(65,a));be[a]=!0}var i=t.props;if(a==="input")i=E({type:void 0},i,{defaultChecked:void 0,defaultValue:void 0,value:i.value!=null?i.value:i.defaultValue,checked:i.checked!=null?i.checked:i.defaultChecked});else if(a==="textarea"){var l=i.value;if(l==null){l=i.defaultValue;var o=i.children;if(o!=null){if(l!=null)throw Error(p(92));if(Array.isArray(o)){if(!(1>=o.length))throw Error(p(93));o=o[0]}l=""+o}l==null&&(l="")}i=E({},i,{value:void 0,children:""+l})}else if(a==="select")this.currentSelectValue=i.value!=null?i.value:i.defaultValue,i=E({},i,{value:void 0});else if(a==="option"){o=this.currentSelectValue;var C=nr(i.children);if(o!=null){var d=i.value!=null?i.value+"":C;if(l=!1,Array.isArray(o)){for(var u=0;u<o.length;u++)if(""+o[u]===d){l=!0;break}}else l=""+o===d;i=E({selected:void 0,children:void 0},i,{selected:l,children:C})}}if(l=i){if(Kt[a]&&(l.children!=null||l.dangerouslySetInnerHTML!=null))throw Error(p(137,a,""));if(l.dangerouslySetInnerHTML!=null){if(l.children!=null)throw Error(p(60));if(!(typeof l.dangerouslySetInnerHTML=="object"&&"__html"in l.dangerouslySetInnerHTML))throw Error(p(61))}if(l.style!=null&&typeof l.style!="object")throw Error(p(62,""))}l=i,o=this.makeStaticMarkup,C=this.stack.length===1,d="<"+t.type;for(S in l)if(or.call(l,S)){var m=l[S];if(m!=null){if(S==="style"){u=void 0;var g="",h="";for(u in m)if(m.hasOwnProperty(u)){var k=u.indexOf("--")===0,f=m[u];if(f!=null){if(k)var M=u;else if(M=u,ie.hasOwnProperty(M))M=ie[M];else{var H=M.replace(Gt,"-$1").toLowerCase().replace(er,"-ms-");M=ie[M]=H}g+=h+M+":",h=u,k=f==null||typeof f=="boolean"||f===""?"":k||typeof f!="number"||f===0||P.hasOwnProperty(h)&&P[h]?(""+f).trim():f+"px",g+=k,h=";"}}m=g||null}u=null;e:if(k=a,f=l,k.indexOf("-")===-1)k=typeof f.is=="string";else switch(k){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":k=!1;break e;default:k=!0}k?ar.hasOwnProperty(S)||(u=S,u=xt(u)&&m!=null?u+'="'+(F(m)+'"'):""):u=Ut(S,m),u&&(d+=" "+u)}}o||C&&(d+=' data-reactroot=""');var S=d;l="",Ct.hasOwnProperty(a)?S+="/>":(S+=">",l="</"+t.type+">");e:{if(o=i.dangerouslySetInnerHTML,o!=null){if(o.__html!=null){o=o.__html;break e}}else if(o=i.children,typeof o=="string"||typeof o=="number"){o=F(o);break e}o=null}return o!=null?(i=[],tr.hasOwnProperty(a)&&o.charAt(0)===`
`&&(S+=`
`),S+=o):i=T(i.children),t=t.type,s=s==null||s==="http://www.w3.org/1999/xhtml"?Yt(t):s==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":s,this.stack.push({domNamespace:s,type:a,children:i,childIndex:0,context:n,footer:l}),this.previousWasTextNode=!1,S},e}(),Se={renderToString:function(e){e=new ke(e,!1);try{return e.read(1/0)}finally{e.destroy()}},renderToStaticMarkup:function(e){e=new ke(e,!0);try{return e.read(1/0)}finally{e.destroy()}},renderToNodeStream:function(){throw Error(p(207))},renderToStaticNodeStream:function(){throw Error(p(208))},version:"16.14.0"},ir=Se.default||Se;pt.exports=ir;var Mt=pt.exports;const w=_t("onHide","onShow","onClick","onDBLClick","onRightClick","onMousemove","onMousedown","onMouseup","onMouseover","onMouseout","onTouchstart","onTouchmove","onTouchend","onDragstart","onDragging","onDragend","onMoving","onMoveEnd","onMoveAlong"),yr={title:"组件(Components)/覆盖物(Overlay)/AMapMarker",component:re,decorators:[It,Ft(),qt,zt],args:{position:[116.39,39.9],title:"自定义的 Title",anchor:"center",onShow:w.onShow,onHide:w.onHide},argTypes:{position:{description:"点标记在地图上显示的位置",type:{required:!0,name:"array",value:{name:"number"}},table:{type:{summary:"LngLatLike"}},control:"object"},title:{description:"鼠标滑过点标记时的文字提示。不设置则鼠标滑过点标无文字提示。",type:{required:!1,name:"string"},table:{type:{summary:"string"}},control:"text"},content:{description:"点标记显示内容。可以是HTML要素字符串或者HTML DOM对象。content有效时，icon属性将被覆盖。",type:{required:!1,name:"string"},table:{type:{summary:"string | HTMLElement"}},control:"text"},icon:{description:"在点标记中显示的图标。有合法的 content 内容设置时，此属性无效。",type:{required:!1,name:"string"},table:{type:{summary:["AMap.Icon","string"].join("|")}},control:"text"},label:{description:"设置点标记文本标签内容",type:{required:!1,name:"object",value:{content:{name:"string"},direction:{name:"string"},offset:{name:"array",value:{name:"number"}}}},table:{type:{summary:"LabelOptions",detail:"具体字段参考高德 JS API 文档"}},control:!1},zooms:{description:"设置显示级别范围。注意：当前实现变更 zooms 时会触发重新创建实例。",type:{required:!1,name:"array",value:{name:"number"}},table:{type:{summary:"number[]"},defaultValue:{summary:"[2, 20]"}},control:"array"},clickable:{description:"点标记是否可点击",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},draggable:{description:"点标记是否可拖拽",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},cursor:{description:"指定鼠标悬停时的鼠标样式",type:{required:!1,name:"string"},table:{type:{summary:"string"}},control:"text"},extData:{description:"设置用户自定义属性",type:{required:!1,name:"object",value:{}},table:{type:{summary:"object"}},control:"object"},anchor:{description:"设置点标记锚点",type:{required:!1,name:"enum",value:["top-left","top-center","top-right","middle-left","center","middle-right","bottom-left","bottom-center","bottom-right"]},table:{type:{summary:["top-left","top-center","top-right","middle-left","center","middle-right","bottom-left","bottom-center","bottom-right"].join("|")},defaultValue:{summary:"center"}},options:["top-left","top-center","top-right","middle-left","center","middle-right","bottom-left","bottom-center","bottom-right"],control:"select"},offset:{description:"覆盖物偏移量",type:{required:!1,name:"union",value:[{name:"array",value:{name:"number"}},{name:"object",value:{x:{name:"number"},y:{name:"number"}}}]},table:{type:{summary:["Vector2","Pixel"].join("|")},defaultValue:{summary:"[0, 0]"}},control:"object"},angle:{description:"点标记的旋转角度",type:{required:!1,name:"number"},table:{type:{summary:"number"},defaultValue:{summary:0}},control:{type:"number",min:0,max:360}},size:{description:"尺寸",type:{required:!1,name:"union",value:[{name:"array",value:{name:"number"}},{name:"object",value:{width:{name:"number"},height:{name:"number"}}}]},table:{type:{summary:["AMap.Size","AMap.Vector2"].join("|")},defaultValue:{summary:"[36, 36]"}},control:"object"},zIndex:{description:"多边形覆盖物的叠加顺序",type:{required:!1,name:"number"},table:{type:{summary:"number"},defaultValue:{summary:12}},control:{type:"number",step:1}},visible:{description:"显示或隐藏",type:{required:!1,name:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},onShow:{description:"显示，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onHide:{description:"隐藏，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onClick:{description:"左键单击，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onDBLClick:{description:"左键双击，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onRightClick:{description:"右键单击，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMousemove:{description:"鼠标移动",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMousedown:{description:"鼠标按下，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMouseup:{description:"鼠标抬起，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMouseover:{description:"鼠标经过，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMouseout:{description:"鼠标移出，回调函数",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onTouchstart:{description:"触摸开始，回调函数，仅移动设备有效",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onTouchmove:{description:"触摸移动，回调函数，仅移动设备有效",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onTouchend:{description:"触摸结束，回调函数，仅移动设备有效",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onDragstart:{description:"开始拖拽点标记时触发事件",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onDragging:{description:"鼠标拖拽移动点标记时触发事件",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onDragend:{description:"点标记拖拽移动结束触发事件",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMoving:{description:"点标记在执行 `moveTo`，`moveAlong` 动画时触发事件",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMoveEnd:{description:"点标记在执行 `moveTo`，`moveAlong` 动画时触发事件",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1},onMoveAlong:{description:"点标记执行 moveAlong 动画一次后触发事件",type:{required:!1,name:"function"},table:{category:"事件",type:{summary:"(event: any) => void"}},control:!1}}},U={name:"一般使用"},B={name:"自定义标记图标",args:{icon:"//webapi.amap.com/theme/v1.3/markers/b/mark_r.png",size:[38,60]}},$={name:"自定义标记内容",args:{content:Mt.renderToString(L("span",{style:{color:"red"},children:"点"})),icon:"//webapi.amap.com/theme/v1.3/markers/b/mark_r.png",size:[38,60]}},Z={name:"自定义标签内容",args:{label:{content:Mt.renderToString(L("span",{style:{color:"red"},children:"标签内容"})),offset:[0,10],direction:"bottom"}}},J={name:"自定义可显示层级",args:{zooms:[14,18]},render:e=>ut(ct,{children:[L(Tt,{}),L(re,{...e})]})},X={name:"可拖拽",args:{draggable:!0,onDragstart:w.onDragstart,onDragging:w.onDragging,onDragend:w.onDragend}},Y={name:"自定义点标记锚点",args:{anchor:"bottom-center"}},z={name:"自定义偏移量",args:{offset:[300,300]}};z.storyName="自定义偏移量";z.args={offset:[300,300]};const O={name:"自定义旋转角度",args:{angle:45}};O.storyName="自定义旋转角度";O.args={angle:45};const K={name:"自定义 Marker 层级",args:{zIndex:13},render:e=>ut(ct,{children:[L(re,{...e}),L(re,{position:[116.39,39.9],icon:"//webapi.amap.com/theme/v1.3/markers/b/mark_r.png",size:[38,60],label:{content:"后 render 的 Marker",offset:[0,10],direction:"bottom"}})]})},Q={name:"点击事件（左单/左双/右单）",args:{onClick:w.onClick,onDBLClick:w.onDBLClick,onRightClick:w.onRightClick}},G={name:"鼠标事件（按下/抬起/经过/移出）",args:{onMousedown:w.onMousedown,onMouseup:w.onMouseup,onMouseover:w.onMouseover,onMouseout:w.onMouseout}},ee={name:"触摸事件（触摸开始/触摸移动/触摸结束）",args:{onTouchstart:w.onTouchstart,onTouchmove:w.onTouchmove,onTouchend:w.onTouchend}};var Ce,Me,Ee;U.parameters={...U.parameters,docs:{...(Ce=U.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: '一般使用'
}`,...(Ee=(Me=U.parameters)==null?void 0:Me.docs)==null?void 0:Ee.source}}};var De,_e,Te;B.parameters={...B.parameters,docs:{...(De=B.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: '自定义标记图标',
  args: {
    icon: '//webapi.amap.com/theme/v1.3/markers/b/mark_r.png',
    size: [38, 60]
  }
}`,...(Te=(_e=B.parameters)==null?void 0:_e.docs)==null?void 0:Te.source}}};var Ie,Fe,qe;$.parameters={...$.parameters,docs:{...(Ie=$.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: '自定义标记内容',
  args: {
    content: renderToString(<span style={{
      color: 'red'
    }}>点</span>),
    icon: '//webapi.amap.com/theme/v1.3/markers/b/mark_r.png',
    size: [38, 60]
  }
}`,...(qe=(Fe=$.parameters)==null?void 0:Fe.docs)==null?void 0:qe.source}}};var ze,Oe,Le;Z.parameters={...Z.parameters,docs:{...(ze=Z.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: '自定义标签内容',
  args: {
    label: {
      content: renderToString(<span style={{
        color: 'red'
      }}>标签内容</span>),
      offset: [0, 10],
      direction: 'bottom'
    }
  }
}`,...(Le=(Oe=Z.parameters)==null?void 0:Oe.docs)==null?void 0:Le.source}}};var Ne,Ae,Ve;J.parameters={...J.parameters,docs:{...(Ne=J.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: '自定义可显示层级',
  args: {
    zooms: [14, 18]
  },
  render: args => <>
      <AMapToolBar />
      <AMapMarker {...args} />
    </>
}`,...(Ve=(Ae=J.parameters)==null?void 0:Ae.docs)==null?void 0:Ve.source}}};var Pe,Re,je;X.parameters={...X.parameters,docs:{...(Pe=X.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: '可拖拽',
  args: {
    draggable: true,
    onDragstart: eventHandler.onDragstart,
    onDragging: eventHandler.onDragging,
    onDragend: eventHandler.onDragend
  }
}`,...(je=(Re=X.parameters)==null?void 0:Re.docs)==null?void 0:je.source}}};var He,We,Ue;Y.parameters={...Y.parameters,docs:{...(He=Y.parameters)==null?void 0:He.docs,source:{originalSource:`{
  name: '自定义点标记锚点',
  args: {
    anchor: 'bottom-center'
  }
}`,...(Ue=(We=Y.parameters)==null?void 0:We.docs)==null?void 0:Ue.source}}};var Be,$e,Ze;z.parameters={...z.parameters,docs:{...(Be=z.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: '自定义偏移量',
  args: {
    offset: [300, 300]
  }
}`,...(Ze=($e=z.parameters)==null?void 0:$e.docs)==null?void 0:Ze.source}}};var Je,Xe,Ye;O.parameters={...O.parameters,docs:{...(Je=O.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  name: '自定义旋转角度',
  args: {
    angle: 45
  }
}`,...(Ye=(Xe=O.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ke,Qe,Ge;K.parameters={...K.parameters,docs:{...(Ke=K.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  name: '自定义 Marker 层级',
  args: {
    zIndex: 13
  },
  render: args => <>
      <AMapMarker {...args} />
      <AMapMarker position={[116.39, 39.9]} icon="//webapi.amap.com/theme/v1.3/markers/b/mark_r.png" size={[38, 60]} label={{
      content: '后 render 的 Marker',
      offset: [0, 10],
      direction: 'bottom'
    }} />
    </>
}`,...(Ge=(Qe=K.parameters)==null?void 0:Qe.docs)==null?void 0:Ge.source}}};var et,tt,rt;Q.parameters={...Q.parameters,docs:{...(et=Q.parameters)==null?void 0:et.docs,source:{originalSource:`{
  name: '点击事件（左单/左双/右单）',
  args: {
    onClick: eventHandler.onClick,
    onDBLClick: eventHandler.onDBLClick,
    onRightClick: eventHandler.onRightClick
  }
}`,...(rt=(tt=Q.parameters)==null?void 0:tt.docs)==null?void 0:rt.source}}};var nt,ot,at;G.parameters={...G.parameters,docs:{...(nt=G.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  name: '鼠标事件（按下/抬起/经过/移出）',
  args: {
    onMousedown: eventHandler.onMousedown,
    onMouseup: eventHandler.onMouseup,
    onMouseover: eventHandler.onMouseover,
    onMouseout: eventHandler.onMouseout
  }
}`,...(at=(ot=G.parameters)==null?void 0:ot.docs)==null?void 0:at.source}}};var st,it,lt;ee.parameters={...ee.parameters,docs:{...(st=ee.parameters)==null?void 0:st.docs,source:{originalSource:`{
  name: '触摸事件（触摸开始/触摸移动/触摸结束）',
  args: {
    onTouchstart: eventHandler.onTouchstart,
    onTouchmove: eventHandler.onTouchmove,
    onTouchend: eventHandler.onTouchend
  }
}`,...(lt=(it=ee.parameters)==null?void 0:it.docs)==null?void 0:lt.source}}};const vr=["CommonUse","CustomIcon","CustomContent","CustomLabel","CustomZooms","Draggable","CustomAnchor","CustomOffset","CustomAngle","SameZIndex","ClickEvent","MouseEvent","TouchEvent"];export{Q as ClickEvent,U as CommonUse,Y as CustomAnchor,O as CustomAngle,$ as CustomContent,B as CustomIcon,Z as CustomLabel,z as CustomOffset,J as CustomZooms,X as Draggable,G as MouseEvent,K as SameZIndex,ee as TouchEvent,vr as __namedExportsOrder,yr as default};
//# sourceMappingURL=AMapMarker.stories-a8022012.js.map
