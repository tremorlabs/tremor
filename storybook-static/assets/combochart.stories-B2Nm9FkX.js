import{j as i}from"./jsx-runtime-CfatFE5O.js";import{R as p,r as Vr}from"./index-ClcD9ViR.js";import{L as Rr}from"./Label-DAouQbGm.js";import{S as zr}from"./Switch-RRnFbcgf.js";import{b as Yr,r as Jr}from"./index-BWmfHM-C.js";import{C as Mr,u as Hr}from"./useOnWindowResize-V8MZeDGR.js";import{c as Xe,g as Y,A as Ke}from"./chartColors-CTMckKCA.js";import{a as Xr,c as A}from"./cx-CYgzbKIn.js";import{X as Br,Y as Ve,g as Ze}from"./getYAxisDomain-G3OsYyu1.js";import{h as Ue}from"./hasOnlyOneValueForKey-CE3xIvgW.js";import{S as Qe,F as Zr,G as Ur,o as jr,H as Qr,c as z,k as Fe,l as ea,a as Ge,L as Q,I as et,A as at,b as se,e as rt,E as tt,J as nt,n as it,C as st,j as ot,u as lt,g as ct,B as Lr,f as ut,R as dt,p as De,T as mt,q as pt,D as aa}from"./generateCategoricalChart-DR9uWRoX.js";import{A as ft}from"./Area-DJv05xvA.js";import{L as Re}from"./Line-BEyJVF29.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BmTwYRFB.js";import"./index-DDVkbYHz.js";import"./index-ZuzByk-F.js";import"./index-ClVxAquS.js";import"./index-D-jls2fw.js";import"./index-sY83p_TZ.js";import"./index-DSWkTB7Z.js";import"./index-CF-iJ_jy.js";import"./focusRing-49zpLVVu.js";import"./tiny-invariant-CopsF_GD.js";function J(a){"@babel/helpers - typeof";return J=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(a)}function yt(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function gt(a,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,Or(r.key),r)}}function ht(a,e,t){return e&&gt(a.prototype,e),Object.defineProperty(a,"prototype",{writable:!1}),a}function bt(a,e,t){return e=Te(e),xt(a,Nr()?Reflect.construct(e,t||[],Te(a).constructor):e.apply(a,t))}function xt(a,e){if(e&&(J(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return vt(a)}function vt(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Nr(){try{var a=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Nr=function(){return!!a})()}function Te(a){return Te=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Te(a)}function St(a,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),e&&ze(a,e)}function ze(a,e){return ze=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},ze(a,e)}function Pr(a,e,t){return e=Or(e),e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function Or(a){var e=At(a,"string");return J(e)=="symbol"?e:e+""}function At(a,e){if(J(a)!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var r=t.call(a,e||"default");if(J(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}var We=function(a){function e(){return yt(this,e),bt(this,e,arguments)}return St(e,a),ht(e,[{key:"render",value:function(){return null}}])}(p.Component);Pr(We,"displayName","ZAxis");Pr(We,"defaultProps",{zAxisId:0,range:[64,64],scale:"auto",type:"number"});var wt=["option","isActive"];function ee(){return ee=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(a[r]=t[r])}return a},ee.apply(this,arguments)}function Ct(a,e){if(a==null)return{};var t=kt(a,e),r,n;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)r=s[n],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(a,r)&&(t[r]=a[r])}return t}function kt(a,e){if(a==null)return{};var t={};for(var r in a)if(Object.prototype.hasOwnProperty.call(a,r)){if(e.indexOf(r)>=0)continue;t[r]=a[r]}return t}function Bt(a){var e=a.option,t=a.isActive,r=Ct(a,wt);return typeof e=="string"?p.createElement(Qe,ee({option:p.createElement(Zr,ee({type:e},r)),isActive:t,shapeType:"symbols"},r)):p.createElement(Qe,ee({option:e,isActive:t,shapeType:"symbols"},r))}function M(a){"@babel/helpers - typeof";return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(a)}function ae(){return ae=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(a[r]=t[r])}return a},ae.apply(this,arguments)}function ra(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable})),t.push.apply(t,r)}return t}function T(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ra(Object(t),!0).forEach(function(r){K(a,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):ra(Object(t)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(t,r))})}return a}function jt(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function ta(a,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,Tr(r.key),r)}}function Lt(a,e,t){return e&&ta(a.prototype,e),t&&ta(a,t),Object.defineProperty(a,"prototype",{writable:!1}),a}function Nt(a,e,t){return e=Ee(e),Pt(a,Fr()?Reflect.construct(e,t||[],Ee(a).constructor):e.apply(a,t))}function Pt(a,e){if(e&&(M(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ot(a)}function Ot(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Fr(){try{var a=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Fr=function(){return!!a})()}function Ee(a){return Ee=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ee(a)}function Ft(a,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),e&&Ye(a,e)}function Ye(a,e){return Ye=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},Ye(a,e)}function K(a,e,t){return e=Tr(e),e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function Tr(a){var e=Tt(a,"string");return M(e)=="symbol"?e:e+""}function Tt(a,e){if(M(a)!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var r=t.call(a,e||"default");if(M(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}var $e=function(a){function e(){var t;jt(this,e);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return t=Nt(this,e,[].concat(n)),K(t,"state",{isAnimationFinished:!1}),K(t,"handleAnimationEnd",function(){t.setState({isAnimationFinished:!0})}),K(t,"handleAnimationStart",function(){t.setState({isAnimationFinished:!1})}),K(t,"id",lt("recharts-scatter-")),t}return Ft(e,a),Lt(e,[{key:"renderSymbolsStatically",value:function(r){var n=this,s=this.props,m=s.shape,f=s.activeShape,v=s.activeIndex,h=Ge(this.props,!1);return r.map(function(o,d){var b=v===d,y=b?f:m,g=T(T({},h),o);return p.createElement(Q,ae({className:"recharts-scatter-symbol",key:"symbol-".concat(o==null?void 0:o.cx,"-").concat(o==null?void 0:o.cy,"-").concat(o==null?void 0:o.size,"-").concat(d)},et(n.props,o,d),{role:"img"}),p.createElement(Bt,ae({option:y,isActive:b,key:"symbol-".concat(d)},g)))})}},{key:"renderSymbolsWithAnimation",value:function(){var r=this,n=this.props,s=n.points,m=n.isAnimationActive,f=n.animationBegin,v=n.animationDuration,h=n.animationEasing,o=n.animationId,d=this.state.prevPoints;return p.createElement(at,{begin:f,duration:v,isActive:m,easing:h,from:{t:0},to:{t:1},key:"pie-".concat(o),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(b){var y=b.t,g=s.map(function(c,C){var k=d&&d[C];if(k){var B=se(k.cx,c.cx),x=se(k.cy,c.cy),u=se(k.size,c.size);return T(T({},c),{},{cx:B(y),cy:x(y),size:u(y)})}var S=se(0,c.size);return T(T({},c),{},{size:S(y)})});return p.createElement(Q,null,r.renderSymbolsStatically(g))})}},{key:"renderSymbols",value:function(){var r=this.props,n=r.points,s=r.isAnimationActive,m=this.state.prevPoints;return s&&n&&n.length&&(!m||!rt(m,n))?this.renderSymbolsWithAnimation():this.renderSymbolsStatically(n)}},{key:"renderErrorBar",value:function(){var r=this.props.isAnimationActive;if(r&&!this.state.isAnimationFinished)return null;var n=this.props,s=n.points,m=n.xAxis,f=n.yAxis,v=n.children,h=jr(v,tt);return h?h.map(function(o,d){var b=o.props,y=b.direction,g=b.dataKey;return p.cloneElement(o,{key:"".concat(y,"-").concat(g,"-").concat(s[d]),data:s,xAxis:m,yAxis:f,layout:y==="x"?"vertical":"horizontal",dataPointFormatter:function(C,k){return{x:C.cx,y:C.cy,value:y==="x"?+C.node.x:+C.node.y,errorVal:Fe(C,k)}}})}):null}},{key:"renderLine",value:function(){var r=this.props,n=r.points,s=r.line,m=r.lineType,f=r.lineJointType,v=Ge(this.props,!1),h=Ge(s,!1),o,d;if(m==="joint")o=n.map(function(x){return{x:x.cx,y:x.cy}});else if(m==="fitting"){var b=nt(n),y=b.xmin,g=b.xmax,c=b.a,C=b.b,k=function(u){return c*u+C};o=[{x:y,y:k(y)},{x:g,y:k(g)}]}var B=T(T(T({},v),{},{fill:"none",stroke:v&&v.fill},h),{},{points:o});return p.isValidElement(s)?d=p.cloneElement(s,B):it(s)?d=s(B):d=p.createElement(st,ae({},B,{type:f})),p.createElement(Q,{className:"recharts-scatter-line",key:"recharts-scatter-line"},d)}},{key:"render",value:function(){var r=this.props,n=r.hide,s=r.points,m=r.line,f=r.className,v=r.xAxis,h=r.yAxis,o=r.left,d=r.top,b=r.width,y=r.height,g=r.id,c=r.isAnimationActive;if(n||!s||!s.length)return null;var C=this.state.isAnimationFinished,k=Xr("recharts-scatter",f),B=v&&v.allowDataOverflow,x=h&&h.allowDataOverflow,u=B||x,S=z(g)?this.id:g;return p.createElement(Q,{className:k,clipPath:u?"url(#clipPath-".concat(S,")"):null},B||x?p.createElement("defs",null,p.createElement("clipPath",{id:"clipPath-".concat(S)},p.createElement("rect",{x:B?o:o-b/2,y:x?d:d-y/2,width:B?b:b*2,height:x?y:y*2}))):null,m&&this.renderLine(),this.renderErrorBar(),p.createElement(Q,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!c||C)&&ot.renderCallByParent(this.props,s))}}],[{key:"getDerivedStateFromProps",value:function(r,n){return r.animationId!==n.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:n.curPoints}:r.points!==n.curPoints?{curPoints:r.points}:null}}])}(Vr.PureComponent);K($e,"displayName","Scatter");K($e,"defaultProps",{xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!Ur.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"});K($e,"getComposedData",function(a){var e=a.xAxis,t=a.yAxis,r=a.zAxis,n=a.item,s=a.displayedData,m=a.xAxisTicks,f=a.yAxisTicks,v=a.offset,h=n.props.tooltipType,o=jr(n.props.children,Qr),d=z(e.dataKey)?n.props.dataKey:e.dataKey,b=z(t.dataKey)?n.props.dataKey:t.dataKey,y=r&&r.dataKey,g=r?r.range:We.defaultProps.range,c=g&&g[0],C=e.scale.bandwidth?e.scale.bandwidth():0,k=t.scale.bandwidth?t.scale.bandwidth():0,B=s.map(function(x,u){var S=Fe(x,d),E=Fe(x,b),I=!z(y)&&Fe(x,y)||"-",re=[{name:z(e.dataKey)?n.props.name:e.name||e.dataKey,unit:e.unit||"",value:S,payload:x,dataKey:d,type:h},{name:z(t.dataKey)?n.props.name:t.name||t.dataKey,unit:t.unit||"",value:E,payload:x,dataKey:b,type:h}];I!=="-"&&re.push({name:r.name||r.dataKey,unit:r.unit||"",value:I,payload:x,dataKey:y,type:h});var j=ea({axis:e,ticks:m,bandSize:C,entry:x,index:u,dataKey:d}),w=ea({axis:t,ticks:f,bandSize:k,entry:x,index:u,dataKey:b}),H=I!=="-"?r.scale(I):c,G=Math.sqrt(Math.max(H,0)/Math.PI);return T(T({},x),{},{cx:j,cy:w,x:j-G,y:w-G,xAxis:e,yAxis:t,zAxis:r,width:2*G,height:2*G,size:H,node:{x:S,y:E,z:I},tooltipPayload:re,tooltipPosition:{x:j,y:w},payload:x},o&&o[u]&&o[u].props)});return T({points:B},v)});var Et=ct({chartName:"ComposedChart",GraphicalChild:[Re,ft,Lr,$e],axisComponents:[{axisType:"xAxis",AxisComp:Br},{axisType:"yAxis",AxisComp:Ve},{axisType:"zAxis",AxisComp:We}],formatAxisMap:ut});function Je(a,e){if(a===e)return!0;if(typeof a!="object"||typeof e!="object"||a===null||e===null)return!1;const t=Object.keys(a),r=Object.keys(e);if(t.length!==r.length)return!1;for(const n of t)if(!r.includes(n)||!Je(a[n],e[n]))return!1;return!0}const Wt=(a,e,t)=>{const{fillOpacity:r,name:n,payload:s,value:m,width:f,x:v}=a;let{y:h,height:o}=a;return o<0&&(h+=o,o=Math.abs(o)),i.jsx("rect",{x:v,y:h,width:f,height:o,opacity:e||t&&t!==n?Je(e,{...s,value:m})?r:.3:r})},$t=({name:a,color:e,onClick:t,activeLegend:r,chartType:n})=>{const s=!!t,m=Y(e,"bg");return i.jsxs("li",{className:A("group inline-flex flex-nowrap items-center gap-1.5 whitespace-nowrap rounded px-2 py-1 transition",s?"cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800":"cursor-default"),onClick:f=>{f.stopPropagation(),t==null||t(a,e)},children:[i.jsx("span",{className:A({"size-2 rounded-sm":n==="bar"},{"h-[3px] w-3.5 shrink-0 rounded-full":n==="line"},"shrink-0",m,r&&r!==a?"opacity-40":"opacity-100"),"aria-hidden":!0}),i.jsx("p",{className:A("truncate whitespace-nowrap text-xs","text-gray-700 dark:text-gray-300",s&&"group-hover:text-gray-900 dark:group-hover:text-gray-50",r&&r!==a?"opacity-40":"opacity-100"),children:a})]})},na=({icon:a,onClick:e,disabled:t})=>{const r=a,[n,s]=p.useState(!1),m=p.useRef(null);return p.useEffect(()=>(n?m.current=setInterval(()=>{e==null||e()},300):clearInterval(m.current),()=>clearInterval(m.current)),[n,e]),p.useEffect(()=>{t&&(clearInterval(m.current),s(!1))},[t]),i.jsx("button",{type:"button",className:A("group inline-flex size-5 items-center truncate rounded transition",t?"cursor-not-allowed text-gray-400 dark:text-gray-600":"cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-50"),disabled:t,onClick:f=>{f.stopPropagation(),e==null||e()},onMouseDown:f=>{f.stopPropagation(),s(!0)},onMouseUp:f=>{f.stopPropagation(),s(!1)},children:i.jsx(r,{className:"size-full","aria-hidden":"true"})})},Er=p.forwardRef((a,e)=>{const{categories:t,barCategoryColors:r,lineCategoryColors:n,onClickLegendItem:s,activeLegend:m,enableLegendSlider:f=!1,className:v,...h}=a,o=p.useRef(null),[d,b]=p.useState(null),[y,g]=p.useState(null),c=p.useRef(null),C=p.useCallback(()=>{const u=o==null?void 0:o.current;if(!u)return;const S=u.scrollLeft>0,E=u.scrollWidth-u.clientWidth>u.scrollLeft;b({left:S,right:E})},[b]),k=p.useCallback(u=>{const S=o==null?void 0:o.current,E=(S==null?void 0:S.clientWidth)??0;S&&f&&(S.scrollTo({left:u==="left"?S.scrollLeft-E:S.scrollLeft+E,behavior:"smooth"}),setTimeout(()=>{C()},400))},[f,C]);p.useEffect(()=>{const u=S=>{S==="ArrowLeft"?k("left"):S==="ArrowRight"&&k("right")};return y?(u(y),c.current=setInterval(()=>{u(y)},300)):clearInterval(c.current),()=>clearInterval(c.current)},[y,k]);const B=u=>{u.stopPropagation(),(u.key==="ArrowLeft"||u.key==="ArrowRight")&&(u.preventDefault(),g(u.key))},x=u=>{u.stopPropagation(),g(null)};return p.useEffect(()=>{const u=o==null?void 0:o.current;return f&&(C(),u==null||u.addEventListener("keydown",B),u==null||u.addEventListener("keyup",x)),()=>{u==null||u.removeEventListener("keydown",B),u==null||u.removeEventListener("keyup",x)}},[C,f]),i.jsxs("ol",{ref:e,className:A("relative overflow-hidden",v),...h,children:[i.jsx("div",{ref:o,className:A("flex h-full",f?d!=null&&d.right||d!=null&&d.left?"snap-mandatory items-center overflow-auto pl-4 pr-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden":"":"flex-wrap"),children:t.map((u,S)=>{const E=r.get(u.name),I=n.get(u.name);return i.jsx($t,{name:u.name,chartType:u.chartType,onClick:s,activeLegend:m,color:u.chartType==="bar"?E:I},`item-${S}`)})}),f&&(d!=null&&d.right||d!=null&&d.left)?i.jsx(i.Fragment,{children:i.jsxs("div",{className:A("absolute bottom-0 right-0 top-0 flex h-full items-center justify-center pr-1","bg-white dark:bg-gray-950"),children:[i.jsx(na,{icon:Yr,onClick:()=>{g(null),k("left")},disabled:!(d!=null&&d.left)}),i.jsx(na,{icon:Jr,onClick:()=>{g(null),k("right")},disabled:!(d!=null&&d.right)})]})}):null]})});Er.displayName="Legend";const It=({payload:a},e,t,r,n,s,m,f,v,h)=>{const o=p.useRef(null);Hr(()=>{var c;r((C=>C?Number(C)+15:60)((c=o.current)==null?void 0:c.clientHeight))});const d=a.filter(g=>g.type!=="none"),b=f==="left"&&v?v-8:0,y=(f==="right"||f===void 0)&&h?h-8:52;return i.jsx("div",{style:{paddingLeft:b,paddingRight:y},ref:o,className:A("flex items-center",{"justify-center":f==="center"},{"justify-start":f==="left"},{"justify-end":f==="right"}),children:i.jsx(Er,{categories:d.map(g=>({name:g.value,chartType:g.type==="rect"?"bar":g.type})),barCategoryColors:e,lineCategoryColors:t,onClickLegendItem:s,activeLegend:n,enableLegendSlider:m})})},_t=({active:a,payload:e,label:t,barValueFormatter:r=s=>s.toString(),lineValueFormatter:n=s=>s.toString()})=>{if(a&&e&&e.length){const s=e.filter(m=>m.type!=="none");return i.jsxs("div",{className:A("rounded-md border text-sm shadow-md","border-gray-200 dark:border-gray-800","bg-white dark:bg-gray-950"),children:[i.jsx("div",{className:A("border-b border-inherit px-4 py-2"),children:i.jsx("p",{className:A("font-medium","text-gray-900 dark:text-gray-50"),children:t})}),i.jsx("div",{className:A("space-y-1 px-4 py-2"),children:s.map(({value:m,category:f,barColor:v,lineColor:h,chartType:o},d)=>i.jsxs("div",{className:"flex items-center justify-between space-x-8",children:[i.jsxs("div",{className:"flex items-center space-x-2",children:[i.jsx("div",{className:"flex w-5 items-center justify-center",children:i.jsx("span",{"aria-hidden":"true",className:A({"size-2 rounded-sm":o==="bar"},{"h-[3px] w-3.5 shrink-0 rounded-full":o==="line"},"shrink-0",Y(o==="bar"?v:h,"bg"))})}),i.jsx("p",{className:A("whitespace-nowrap text-right","text-gray-700 dark:text-gray-300"),children:f})]}),i.jsx("p",{className:A("whitespace-nowrap text-right font-medium tabular-nums","text-gray-900 dark:text-gray-50"),children:o==="bar"?r(m):n(m)})]},`id-${d}`))})]})}return null},$=p.forwardRef((a,e)=>{const t={categories:[],colors:Ke,valueFormatter:l=>l.toString(),showYAxis:!0,yAxisWidth:56,yAxisLabel:void 0,allowDecimals:!0,type:"default",autoMinValue:!1,minValue:void 0,maxValue:void 0},r=t,n={...t,connectNulls:!1},{data:s=[],index:m,startEndOnly:f=!1,showXAxis:v=!0,showGridLines:h=!0,intervalType:o="equidistantPreserveStart",showTooltip:d=!0,showLegend:b=!0,legendPosition:y="right",enableLegendSlider:g=!1,onValueChange:c,tickGap:C=5,xAxisLabel:k,enableBiaxial:B=!1,barSeries:x=r,lineSeries:u=n,tooltipCallback:S,customTooltip:E,className:I,...re}=a,j={...r,...x},w={...n,...u},H=E,G=!v&&!j.showYAxis&&B&&!w.showYAxis||f&&!j.showYAxis&&B&&!w.showYAxis?0:20,[Wr,$r]=p.useState(60),[P,te]=p.useState(void 0),[W,q]=p.useState(void 0),Me=p.useRef(void 0),He=p.useRef(void 0),ne=Xe(j.categories,j.colors??Ke),X=Xe(w.categories,w.colors??Ke),[D,Z]=p.useState(void 0),Ir=Ze(j.autoMinValue??!1,j.minValue,j.maxValue),_r=Ze(w.autoMinValue??!1,w.minValue,w.maxValue),U=!!c,qr=x.type==="stacked";function Kr(l,L,N){var F,O,V,R;N.stopPropagation(),c&&(Je(D,{...l.payload,value:l.value})?(q(void 0),Z(void 0),c==null||c(null)):(q((O=(F=l.tooltipPayload)==null?void 0:F[0])==null?void 0:O.dataKey),Z({...l.payload,value:l.value}),c==null||c({eventType:"bar",categoryClicked:(R=(V=l.tooltipPayload)==null?void 0:V[0])==null?void 0:R.dataKey,...l.payload})))}function Gr(l,L){L.stopPropagation(),U&&(l.index===(P==null?void 0:P.index)&&l.dataKey===(P==null?void 0:P.dataKey)||Ue(s,l.dataKey)&&W&&W===l.dataKey?(q(void 0),te(void 0),c==null||c(null)):(Z(void 0),q(l.dataKey),te({index:l.index,dataKey:l.dataKey}),c==null||c({eventType:"dot",categoryClicked:l.dataKey,...l.payload})))}function Ie(l){var L,N;U&&(l===W&&!D&&!P?(q(void 0),c==null||c(null)):D&&((N=(L=D.tooltipPayload)==null?void 0:L[0])==null?void 0:N.dataKey)===l?(q(l),c==null||c({eventType:"category",categoryClicked:l})):(q(l),Z(void 0),te(void 0),c==null||c({eventType:"category",categoryClicked:l})))}return i.jsx("div",{ref:e,className:A("h-80 w-full",I),"tremor-id":"tremor-raw",...re,children:i.jsx(dt,{children:i.jsxs(Et,{data:s,onClick:U&&(W||D||P)?()=>{Z(void 0),te(void 0),q(void 0),c==null||c(null)}:void 0,margin:{bottom:k?30:void 0,left:j.yAxisLabel?20:void 0,right:w.yAxisLabel?20:void 0,top:5},children:[h?i.jsx(Mr,{className:A("stroke-gray-200 stroke-1 dark:stroke-gray-800"),horizontal:!0,vertical:!1}):null,i.jsx(Br,{hide:!v,tick:{transform:"translate(0, 6)"},fill:"",stroke:"",className:A("mt-4 text-xs","fill-gray-500 dark:fill-gray-500"),tickLine:!1,axisLine:!1,minTickGap:C,padding:{left:G,right:G},dataKey:m,interval:f?"preserveStartEnd":o,ticks:f?[s[0][m],s[s.length-1][m]]:void 0,children:k&&i.jsx(De,{position:"insideBottom",offset:-20,className:"fill-gray-800 text-sm font-medium dark:fill-gray-200",children:k})}),i.jsx(Ve,{yAxisId:B?"left":void 0,width:j.yAxisWidth,hide:!j.showYAxis,axisLine:!1,tickLine:!1,fill:"",stroke:"",className:A("text-xs","fill-gray-500 dark:fill-gray-500"),tick:{transform:"translate(-3, 0)"},type:"number",domain:Ir,tickFormatter:j.valueFormatter,allowDecimals:j.allowDecimals,children:j.yAxisLabel&&i.jsx(De,{position:"insideLeft",style:{textAnchor:"middle"},angle:-90,offset:-15,className:"fill-gray-800 text-sm font-medium dark:fill-gray-200",children:j.yAxisLabel})}),B?i.jsx(Ve,{yAxisId:"right",orientation:"right",width:w.yAxisWidth,hide:!w.showYAxis,axisLine:!1,tickLine:!1,fill:"",stroke:"",className:A("text-xs","fill-gray-500 dark:fill-gray-500"),tick:{transform:"translate(3, 0)"},type:"number",domain:_r,tickFormatter:w.valueFormatter,allowDecimals:w.allowDecimals,children:w.yAxisLabel&&i.jsx(De,{position:"insideRight",style:{textAnchor:"middle"},angle:-90,offset:-15,className:"fill-gray-800 text-sm font-medium dark:fill-gray-200",children:w.yAxisLabel})}):null,i.jsx(mt,{wrapperStyle:{outline:"none"},isAnimationActive:!0,animationDuration:100,cursor:{stroke:"#d1d5db",strokeWidth:1},offset:20,position:{y:0},content:({active:l,payload:L,label:N})=>{const F=L?L.map(O=>({category:O.dataKey,value:O.value,index:O.payload[m],barColor:ne.get(O.dataKey),lineColor:X.get(O.dataKey),chartType:ne.get(O.dataKey)?"bar":"line",type:O.type,payload:O.payload})):[];return S&&(l!==Me.current||N!==He.current)&&(S({active:l,payload:F,label:N}),Me.current=l,He.current=N),d&&l?H?i.jsx(H,{active:l,payload:F,label:N}):i.jsx(_t,{active:l,payload:F,label:N,barValueFormatter:j.valueFormatter,lineValueFormatter:w.valueFormatter}):null}}),b?i.jsx(pt,{verticalAlign:"top",height:Wr,content:({payload:l})=>It({payload:l},ne,X,$r,W,U?L=>Ie(L):void 0,g,y,j.yAxisWidth,w.yAxisWidth)}):null,j.categories.map(l=>i.jsx(Lr,{yAxisId:B?"left":void 0,className:A(Y(ne.get(l),"fill"),c?"cursor-pointer":""),name:l,type:"linear",dataKey:l,stackId:qr?"stack":void 0,isAnimationActive:!1,fill:"",shape:L=>Wt(L,D,W),onClick:Kr},l)),c?w.categories.map(l=>i.jsx(Re,{yAxisId:B?"right":void 0,className:A("cursor-pointer"),strokeOpacity:0,name:l,type:"linear",dataKey:l,stroke:"transparent",fill:"transparent",legendType:"none",tooltipType:"none",strokeWidth:12,connectNulls:w.connectNulls,onClick:(L,N)=>{N.stopPropagation();const{name:F}=L;Ie(F)}},l)):null,w.categories.map(l=>i.jsx(Re,{yAxisId:B?"right":void 0,className:A(Y(X.get(l),"stroke"),U&&"cursor-pointer"),strokeOpacity:P||W&&W!==l?.3:1,activeDot:L=>{const{cx:N,cy:F,stroke:O,strokeLinecap:V,strokeLinejoin:R,strokeWidth:_e,dataKey:qe}=L;return i.jsx(aa,{className:A("stroke-white dark:stroke-gray-950",c?"cursor-pointer":"",Y(X.get(qe),"fill")),cx:N,cy:F,r:5,fill:"",stroke:O,strokeLinecap:V,strokeLinejoin:R,strokeWidth:_e,onClick:(ie,Dr)=>Gr(L,Dr)})},dot:L=>{const{stroke:N,strokeLinecap:F,strokeLinejoin:O,strokeWidth:V,cx:R,cy:_e,dataKey:qe,index:ie}=L;return Ue(s,l)&&!(P||W&&W!==l)||(P==null?void 0:P.index)===ie&&(P==null?void 0:P.dataKey)===l?i.jsx(aa,{cx:R,cy:_e,r:5,stroke:N,fill:"",strokeLinecap:F,strokeLinejoin:O,strokeWidth:V,className:A("stroke-white dark:stroke-gray-950",c?"cursor-pointer":"",Y(X.get(qe),"fill"))},ie):i.jsx(p.Fragment,{},ie)},name:l,type:"linear",dataKey:l,stroke:"",strokeWidth:2,strokeLinejoin:"round",strokeLinecap:"round",isAnimationActive:!1,connectNulls:w.connectNulls,onClick:(L,N)=>{N.stopPropagation();const{name:F}=L;Ie(F)}},`${l}-line-id`))]})})})});$.displayName="ComboChart";$.__docgenInfo={description:"",methods:[],displayName:"ComboChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"}],raw:"Record<string, any>[]"},description:""},index:{required:!0,tsType:{name:"string"},description:""},startEndOnly:{required:!1,tsType:{name:"boolean"},description:""},showXAxis:{required:!1,tsType:{name:"boolean"},description:""},xAxisLabel:{required:!1,tsType:{name:"string"},description:""},showGridLines:{required:!1,tsType:{name:"boolean"},description:""},intervalType:{required:!1,tsType:{name:"union",raw:'"preserveStartEnd" | "equidistantPreserveStart"',elements:[{name:"literal",value:'"preserveStartEnd"'},{name:"literal",value:'"equidistantPreserveStart"'}]},description:""},showLegend:{required:!1,tsType:{name:"boolean"},description:""},showTooltip:{required:!1,tsType:{name:"boolean"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ComboChartEventProps) => void",signature:{arguments:[{type:{name:"union",raw:"BaseEventProps | null | undefined",elements:[{name:"signature",type:"object",raw:`{
  eventType: "category" | "bar" | "dot"
  categoryClicked: string
  [key: string]: number | string
}`,signature:{properties:[{key:"eventType",value:{name:"union",raw:'"category" | "bar" | "dot"',elements:[{name:"literal",value:'"category"'},{name:"literal",value:'"bar"'},{name:"literal",value:'"dot"'}],required:!0}},{key:"categoryClicked",value:{name:"string",required:!0}},{key:{name:"string"},value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}},{name:"null"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""},enableLegendSlider:{required:!1,tsType:{name:"boolean"},description:""},legendPosition:{required:!1,tsType:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}]},description:""},tickGap:{required:!1,tsType:{name:"number"},description:""},enableBiaxial:{required:!1,tsType:{name:"boolean"},description:""},tooltipCallback:{required:!1,tsType:{name:"signature",type:"function",raw:"(tooltipCallbackContent: TooltipProps) => void",signature:{arguments:[{type:{name:"Pick",elements:[{name:"ChartTooltipProps"},{name:"union",raw:'"active" | "payload" | "label"',elements:[{name:"literal",value:'"active"'},{name:"literal",value:'"payload"'},{name:"literal",value:'"label"'}]}],raw:'Pick<ChartTooltipProps, "active" | "payload" | "label">'},name:"tooltipCallbackContent"}],return:{name:"void"}}},description:""},customTooltip:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<TooltipProps>",elements:[{name:"Pick",elements:[{name:"ChartTooltipProps"},{name:"union",raw:'"active" | "payload" | "label"',elements:[{name:"literal",value:'"active"'},{name:"literal",value:'"payload"'},{name:"literal",value:'"label"'}]}],raw:'Pick<ChartTooltipProps, "active" | "payload" | "label">'}]},description:""},barSeries:{required:!0,tsType:{name:"intersection",raw:`ChartSeries & {
  type?: "default" | "stacked"
}`,elements:[{name:"signature",type:"object",raw:`{
  categories: string[]
  colors?: AvailableChartColorsKeys[]
  valueFormatter?: (value: number) => string
  showYAxis?: boolean
  yAxisWidth?: number
  allowDecimals?: boolean
  yAxisLabel?: string
  autoMinValue?: boolean
  minValue?: number
  maxValue?: number
}`,signature:{properties:[{key:"categories",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"colors",value:{name:"Array",elements:[{name:"unknown"}],raw:"AvailableChartColorsKeys[]",required:!1}},{key:"valueFormatter",value:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}},required:!1}},{key:"showYAxis",value:{name:"boolean",required:!1}},{key:"yAxisWidth",value:{name:"number",required:!1}},{key:"allowDecimals",value:{name:"boolean",required:!1}},{key:"yAxisLabel",value:{name:"string",required:!1}},{key:"autoMinValue",value:{name:"boolean",required:!1}},{key:"minValue",value:{name:"number",required:!1}},{key:"maxValue",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  type?: "default" | "stacked"
}`,signature:{properties:[{key:"type",value:{name:"union",raw:'"default" | "stacked"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"stacked"'}],required:!1}}]}}]},description:""},lineSeries:{required:!1,tsType:{name:"intersection",raw:`ChartSeries & {
  connectNulls?: boolean
}`,elements:[{name:"signature",type:"object",raw:`{
  categories: string[]
  colors?: AvailableChartColorsKeys[]
  valueFormatter?: (value: number) => string
  showYAxis?: boolean
  yAxisWidth?: number
  allowDecimals?: boolean
  yAxisLabel?: string
  autoMinValue?: boolean
  minValue?: number
  maxValue?: number
}`,signature:{properties:[{key:"categories",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"colors",value:{name:"Array",elements:[{name:"unknown"}],raw:"AvailableChartColorsKeys[]",required:!1}},{key:"valueFormatter",value:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}},required:!1}},{key:"showYAxis",value:{name:"boolean",required:!1}},{key:"yAxisWidth",value:{name:"number",required:!1}},{key:"allowDecimals",value:{name:"boolean",required:!1}},{key:"yAxisLabel",value:{name:"string",required:!1}},{key:"autoMinValue",value:{name:"boolean",required:!1}},{key:"minValue",value:{name:"number",required:!1}},{key:"maxValue",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  connectNulls?: boolean
}`,signature:{properties:[{key:"connectNulls",value:{name:"boolean",required:!1}}]}}]},description:""}}};const _=[{date:"Jan 23",SolarCells:2890,Glass:2338,Encapsulant:1450,BackSheet:1900,Frame:1600,JunctionBox:1800,Adhesive:1700,Small:50},{date:"Feb 23",SolarCells:2756,Glass:2103,Encapsulant:1200,BackSheet:1850,Frame:1700,JunctionBox:1750,Adhesive:1650,Small:51},{date:"Mar 23",SolarCells:3322,Glass:2194,Encapsulant:1300,BackSheet:2200,Frame:1400,JunctionBox:2e3,Adhesive:800,Small:55},{date:"Apr 23",SolarCells:3470,Glass:2108,Encapsulant:1400,BackSheet:1600,Frame:1800,JunctionBox:1900,Adhesive:-1950,Small:30},{date:"May 23",SolarCells:3475,Glass:1812,Encapsulant:1550,BackSheet:2300,Frame:1450,JunctionBox:2200,Adhesive:-1600,Small:60},{date:"Jun 23",SolarCells:3129,Glass:1726,Encapsulant:1350,BackSheet:2100,Frame:1750,JunctionBox:2050,Adhesive:-1700,Small:50},{date:"Jul 23",SolarCells:3490,Glass:1982,Encapsulant:1450,BackSheet:1950,Frame:1500,JunctionBox:2300,Adhesive:-1800,Small:57},{date:"Aug 23",SolarCells:2903,Glass:2012,Encapsulant:1250,BackSheet:1700,Frame:1850,JunctionBox:2150,Adhesive:-1900,Small:55},{date:"Sep 23",SolarCells:2643,Glass:2342,Encapsulant:1400,BackSheet:1600,Frame:1500,JunctionBox:2e3,Adhesive:-3750,Small:14},{date:"Oct 23",SolarCells:2837,Glass:2473,Encapsulant:1350,BackSheet:1850,Frame:1900,JunctionBox:2100,Adhesive:-2600,Small:21},{date:"Nov 23",SolarCells:2954,Glass:3848,Encapsulant:1200,BackSheet:2e3,Frame:1750,JunctionBox:2400,Adhesive:-2950,Small:29},{date:"Dec 23",SolarCells:3239,Glass:3736,Encapsulant:1550,BackSheet:1700,Frame:1600,JunctionBox:2250,Adhesive:-3800,Small:40}],un={title:"visualization/ComboChart",component:$,args:{data:_,index:"date"}},oe={render:()=>i.jsx($,{"data-testid":"combo-chart",data:_,index:"date",barSeries:{categories:["SolarCells"]},lineSeries:{categories:["Frame"],colors:["amber"]}})},le={render:()=>i.jsx($,{"data-testid":"combo-chart-biaxial",data:_,index:"date",enableBiaxial:!0,barSeries:{categories:["SolarCells"],yAxisLabel:"BarSeries"},lineSeries:{categories:["Frame"],showYAxis:!0,yAxisLabel:"LineSeries",colors:["amber"],yAxisWidth:70}})},ce={render:()=>i.jsx($,{"data-testid":"combo-chart-biaxial",data:_,index:"date",enableBiaxial:!0,barSeries:{categories:["SolarCells","Encapsulant"],yAxisLabel:"BarSeries"},lineSeries:{categories:["Frame"],showYAxis:!0,yAxisLabel:"LineSeries",colors:["amber"],yAxisWidth:70}})},ue={render:()=>i.jsx($,{data:_,index:"date",enableBiaxial:!0,barSeries:{categories:["SolarCells","Encapsulant"],yAxisLabel:"BarSeries",type:"stacked"},lineSeries:{categories:["Frame"],showYAxis:!0,yAxisLabel:"LineSeries",colors:["amber"],yAxisWidth:70}})},de={render:()=>i.jsx($,{data:_,index:"date",barSeries:{categories:["SolarCells","Encapsulant"],yAxisLabel:"BarSeries"},lineSeries:{categories:["Frame"],showYAxis:!0,yAxisLabel:"LineSeries",colors:["amber"],yAxisWidth:70}})},me={render:()=>i.jsx($,{data:_,index:"date",barSeries:{categories:["SolarCells","Encapsulant"],yAxisLabel:"BarSeries",type:"stacked"},lineSeries:{categories:["Frame"],showYAxis:!0,yAxisLabel:"LineSeries",colors:["amber"],yAxisWidth:70}})},pe={args:{barSeries:{categories:["Adhesive","SolarCells"]},lineSeries:{categories:["Adhesive","SolarCells"]}}},fe={args:{enableBiaxial:!0,barSeries:{categories:["Adhesive"],valueFormatter:a=>`$${Intl.NumberFormat("us").format(a).toString()}`},lineSeries:{colors:["amber"],categories:["SolarCells"],valueFormatter:a=>`$${Intl.NumberFormat("us").format(a).toString()}`}}},ye={args:{enableBiaxial:!0,barSeries:{categories:["Adhesive"],valueFormatter:a=>`$${Intl.NumberFormat("us").format(a).toString()}`,yAxisLabel:"BarSeries"},lineSeries:{colors:["amber"],categories:["SolarCells"],valueFormatter:a=>`$${Intl.NumberFormat("us").format(a).toString()}`,yAxisLabel:"BarSeries"}}},ge={args:{enableBiaxial:!0,barSeries:{categories:["Glass"],autoMinValue:!0},lineSeries:{colors:["amber"],categories:["SolarCells"],autoMinValue:!0}}},he={args:{enableBiaxial:!0,barSeries:{categories:["Glass"],minValue:800,maxValue:5e3},lineSeries:{colors:["amber"],categories:["SolarCells"],minValue:2500,maxValue:3500}}},be={args:{barSeries:{categories:["SolarCells","Glass","Encapsulant","BackSheet","Frame","JunctionBox","Adhesive"]}}},xe={args:{lineSeries:{categories:["SolarCells","Glass","Encapsulant","BackSheet","Frame","JunctionBox","Adhesive"]}}},ve={args:{barSeries:{categories:["Adhesive","SolarCells"]},lineSeries:{categories:["Adhesive","SolarCells"]},enableBiaxial:!0,legendPosition:"left"}},Se={args:{barSeries:{categories:["Adhesive","SolarCells"]},lineSeries:{categories:["Adhesive","SolarCells"]},enableBiaxial:!0,legendPosition:"center"}},Ae={args:{className:"max-w-md",barSeries:{categories:["SolarCells","Glass","Encapsulant","BackSheet","Frame","JunctionBox","Adhesive"]},lineSeries:{categories:["Adhesive","SolarCells"]},enableLegendSlider:!0,onValueChange:a=>console.log(a)}},we={args:{data:_.map((a,e)=>({date:a.date,Adhesive:a.Adhesive,SolarCells:e>5&&e<8?null:a.SolarCells})),barSeries:{categories:["Adhesive"]},lineSeries:{colors:["amber"],categories:["SolarCells"],connectNulls:!1}}},Ce={args:{enableBiaxial:!0,barSeries:{categories:["Glass"]},lineSeries:{colors:["amber"],categories:["SolarCells"]},startEndOnly:!0}},ke={args:{enableBiaxial:!0,barSeries:{categories:["Glass"],showYAxis:!1},lineSeries:{colors:["amber"],categories:["SolarCells"],showYAxis:!1}}},Be={args:{showGridLines:!1,enableBiaxial:!0,barSeries:{categories:["Glass"]},lineSeries:{colors:["amber"],categories:["SolarCells"]}}},je={args:{showLegend:!1,enableBiaxial:!0,barSeries:{categories:["Glass"]},lineSeries:{colors:["amber"],categories:["SolarCells"]}}},Le={args:{showTooltip:!1,enableBiaxial:!0,barSeries:{categories:["Glass"]},lineSeries:{colors:["amber"],categories:["SolarCells"]}}},Ne={args:{onValueChange:a=>console.log(a),enableBiaxial:!0,barSeries:{categories:["Glass"]},lineSeries:{colors:["amber"],categories:["SolarCells"]}}},Pe={args:{enableBiaxial:!0,customTooltip:a=>{const{payload:e,active:t,label:r}=a;if(!t||!e||e.length===0)return null;const n=e[0].payload,s=["Adhesive","SolarCells"];return i.jsxs("div",{className:"w-56 rounded-md border bg-white p-3 text-sm shadow-sm",children:[i.jsx("p",{className:"mb-2 font-medium text-gray-900",children:r}),i.jsx("div",{className:"flex flex-col space-y-2",children:s.map(m=>i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center space-x-2",children:[i.jsx("div",{className:`h-5 w-1 rounded-full ${m==="Adhesive"?"bg-blue-500":"bg-amber-500"}`}),i.jsx("p",{className:"text-gray-700",children:m})]}),i.jsx("p",{className:"font-medium text-gray-900",children:n[m]})]},m))})]})},barSeries:{categories:["Adhesive"],valueFormatter:a=>`$${Intl.NumberFormat("us").format(a).toString()}`},lineSeries:{colors:["amber"],categories:["SolarCells"],valueFormatter:a=>`$${Intl.NumberFormat("us").format(a).toString()}`}}},Oe={render:()=>{const[a,e]=p.useState(null),[t,r]=p.useState(!0);return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(Rr,{htmlFor:"a",children:"showTooltip"}),i.jsx(zr,{id:"a",checked:t,onCheckedChange:r})]}),i.jsx($,{data:_,index:"date",barSeries:{categories:["Adhesive"],valueFormatter:n=>`$${Intl.NumberFormat("us").format(n).toString()}`},lineSeries:{colors:["amber"],categories:["SolarCells"],valueFormatter:n=>`$${Intl.NumberFormat("us").format(n).toString()}`},tooltipCallback:n=>e(n),showTooltip:t}),i.jsx("pre",{className:"text-xs",children:JSON.stringify(a,null,2)})]})}};var ia,sa,oa;oe.parameters={...oe.parameters,docs:{...(ia=oe.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  render: () => <ComboChart data-testid="combo-chart" data={chartdata} index="date" barSeries={{
    categories: ["SolarCells"]
  }} lineSeries={{
    categories: ["Frame"],
    colors: ["amber"]
  }} />
}`,...(oa=(sa=oe.parameters)==null?void 0:sa.docs)==null?void 0:oa.source}}};var la,ca,ua;le.parameters={...le.parameters,docs:{...(la=le.parameters)==null?void 0:la.docs,source:{originalSource:`{
  render: () => <ComboChart data-testid="combo-chart-biaxial" data={chartdata} index="date" enableBiaxial={true} barSeries={{
    categories: ["SolarCells"],
    yAxisLabel: "BarSeries"
  }} lineSeries={{
    categories: ["Frame"],
    showYAxis: true,
    yAxisLabel: "LineSeries",
    colors: ["amber"],
    yAxisWidth: 70
  }} />
}`,...(ua=(ca=le.parameters)==null?void 0:ca.docs)==null?void 0:ua.source}}};var da,ma,pa;ce.parameters={...ce.parameters,docs:{...(da=ce.parameters)==null?void 0:da.docs,source:{originalSource:`{
  render: () => <ComboChart data-testid="combo-chart-biaxial" data={chartdata} index="date" enableBiaxial={true} barSeries={{
    categories: ["SolarCells", "Encapsulant"],
    yAxisLabel: "BarSeries"
  }} lineSeries={{
    categories: ["Frame"],
    showYAxis: true,
    yAxisLabel: "LineSeries",
    colors: ["amber"],
    yAxisWidth: 70
  }} />
}`,...(pa=(ma=ce.parameters)==null?void 0:ma.docs)==null?void 0:pa.source}}};var fa,ya,ga;ue.parameters={...ue.parameters,docs:{...(fa=ue.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  render: () => <ComboChart data={chartdata} index="date" enableBiaxial={true} barSeries={{
    categories: ["SolarCells", "Encapsulant"],
    yAxisLabel: "BarSeries",
    type: "stacked"
  }} lineSeries={{
    categories: ["Frame"],
    showYAxis: true,
    yAxisLabel: "LineSeries",
    colors: ["amber"],
    yAxisWidth: 70
  }} />
}`,...(ga=(ya=ue.parameters)==null?void 0:ya.docs)==null?void 0:ga.source}}};var ha,ba,xa;de.parameters={...de.parameters,docs:{...(ha=de.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  render: () => <ComboChart data={chartdata} index="date" barSeries={{
    categories: ["SolarCells", "Encapsulant"],
    yAxisLabel: "BarSeries"
  }} lineSeries={{
    categories: ["Frame"],
    showYAxis: true,
    yAxisLabel: "LineSeries",
    colors: ["amber"],
    yAxisWidth: 70
  }} />
}`,...(xa=(ba=de.parameters)==null?void 0:ba.docs)==null?void 0:xa.source}}};var va,Sa,Aa;me.parameters={...me.parameters,docs:{...(va=me.parameters)==null?void 0:va.docs,source:{originalSource:`{
  render: () => <ComboChart data={chartdata} index="date" barSeries={{
    categories: ["SolarCells", "Encapsulant"],
    yAxisLabel: "BarSeries",
    type: "stacked"
  }} lineSeries={{
    categories: ["Frame"],
    showYAxis: true,
    yAxisLabel: "LineSeries",
    colors: ["amber"],
    yAxisWidth: 70
  }} />
}`,...(Aa=(Sa=me.parameters)==null?void 0:Sa.docs)==null?void 0:Aa.source}}};var wa,Ca,ka;pe.parameters={...pe.parameters,docs:{...(wa=pe.parameters)==null?void 0:wa.docs,source:{originalSource:`{
  args: {
    barSeries: {
      categories: ["Adhesive", "SolarCells"]
    },
    lineSeries: {
      categories: ["Adhesive", "SolarCells"]
    }
  }
}`,...(ka=(Ca=pe.parameters)==null?void 0:Ca.docs)==null?void 0:ka.source}}};var Ba,ja,La;fe.parameters={...fe.parameters,docs:{...(Ba=fe.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
  args: {
    enableBiaxial: true,
    barSeries: {
      categories: ["Adhesive"],
      valueFormatter: v => \`$\${Intl.NumberFormat("us").format(v).toString()}\`
    },
    lineSeries: {
      colors: ["amber"],
      categories: ["SolarCells"],
      valueFormatter: v => \`$\${Intl.NumberFormat("us").format(v).toString()}\`
    }
  }
}`,...(La=(ja=fe.parameters)==null?void 0:ja.docs)==null?void 0:La.source}}};var Na,Pa,Oa;ye.parameters={...ye.parameters,docs:{...(Na=ye.parameters)==null?void 0:Na.docs,source:{originalSource:`{
  args: {
    enableBiaxial: true,
    barSeries: {
      categories: ["Adhesive"],
      valueFormatter: v => \`$\${Intl.NumberFormat("us").format(v).toString()}\`,
      yAxisLabel: "BarSeries"
    },
    lineSeries: {
      colors: ["amber"],
      categories: ["SolarCells"],
      valueFormatter: v => \`$\${Intl.NumberFormat("us").format(v).toString()}\`,
      yAxisLabel: "BarSeries"
    }
  }
}`,...(Oa=(Pa=ye.parameters)==null?void 0:Pa.docs)==null?void 0:Oa.source}}};var Fa,Ta,Ea;ge.parameters={...ge.parameters,docs:{...(Fa=ge.parameters)==null?void 0:Fa.docs,source:{originalSource:`{
  args: {
    enableBiaxial: true,
    barSeries: {
      categories: ["Glass"],
      autoMinValue: true
    },
    lineSeries: {
      colors: ["amber"],
      categories: ["SolarCells"],
      autoMinValue: true
    }
  }
}`,...(Ea=(Ta=ge.parameters)==null?void 0:Ta.docs)==null?void 0:Ea.source}}};var Wa,$a,Ia;he.parameters={...he.parameters,docs:{...(Wa=he.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
  args: {
    enableBiaxial: true,
    barSeries: {
      categories: ["Glass"],
      minValue: 800,
      maxValue: 5000
    },
    lineSeries: {
      colors: ["amber"],
      categories: ["SolarCells"],
      minValue: 2500,
      maxValue: 3500
    }
  }
}`,...(Ia=($a=he.parameters)==null?void 0:$a.docs)==null?void 0:Ia.source}}};var _a,qa,Ka;be.parameters={...be.parameters,docs:{...(_a=be.parameters)==null?void 0:_a.docs,source:{originalSource:`{
  args: {
    barSeries: {
      categories: ["SolarCells", "Glass", "Encapsulant", "BackSheet", "Frame", "JunctionBox", "Adhesive"]
    }
  }
}`,...(Ka=(qa=be.parameters)==null?void 0:qa.docs)==null?void 0:Ka.source}}};var Ga,Da,Va;xe.parameters={...xe.parameters,docs:{...(Ga=xe.parameters)==null?void 0:Ga.docs,source:{originalSource:`{
  args: {
    lineSeries: {
      categories: ["SolarCells", "Glass", "Encapsulant", "BackSheet", "Frame", "JunctionBox", "Adhesive"]
    }
  }
}`,...(Va=(Da=xe.parameters)==null?void 0:Da.docs)==null?void 0:Va.source}}};var Ra,za,Ya;ve.parameters={...ve.parameters,docs:{...(Ra=ve.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
  args: {
    barSeries: {
      categories: ["Adhesive", "SolarCells"]
    },
    lineSeries: {
      categories: ["Adhesive", "SolarCells"]
    },
    enableBiaxial: true,
    legendPosition: "left"
  }
}`,...(Ya=(za=ve.parameters)==null?void 0:za.docs)==null?void 0:Ya.source}}};var Ja,Ma,Ha;Se.parameters={...Se.parameters,docs:{...(Ja=Se.parameters)==null?void 0:Ja.docs,source:{originalSource:`{
  args: {
    barSeries: {
      categories: ["Adhesive", "SolarCells"]
    },
    lineSeries: {
      categories: ["Adhesive", "SolarCells"]
    },
    enableBiaxial: true,
    legendPosition: "center"
  }
}`,...(Ha=(Ma=Se.parameters)==null?void 0:Ma.docs)==null?void 0:Ha.source}}};var Xa,Za,Ua;Ae.parameters={...Ae.parameters,docs:{...(Xa=Ae.parameters)==null?void 0:Xa.docs,source:{originalSource:`{
  args: {
    className: "max-w-md",
    barSeries: {
      categories: ["SolarCells", "Glass", "Encapsulant", "BackSheet", "Frame", "JunctionBox", "Adhesive"]
    },
    lineSeries: {
      categories: ["Adhesive", "SolarCells"]
    },
    enableLegendSlider: true,
    onValueChange: v => console.log(v)
  }
}`,...(Ua=(Za=Ae.parameters)==null?void 0:Za.docs)==null?void 0:Ua.source}}};var Qa,er,ar;we.parameters={...we.parameters,docs:{...(Qa=we.parameters)==null?void 0:Qa.docs,source:{originalSource:`{
  args: {
    data: chartdata.map((item, index) => ({
      date: item.date,
      Adhesive: item.Adhesive,
      SolarCells: index > 5 && index < 8 ? null : item.SolarCells
    })),
    barSeries: {
      categories: ["Adhesive"]
    },
    lineSeries: {
      colors: ["amber"],
      categories: ["SolarCells"],
      connectNulls: false
    }
  }
}`,...(ar=(er=we.parameters)==null?void 0:er.docs)==null?void 0:ar.source}}};var rr,tr,nr;Ce.parameters={...Ce.parameters,docs:{...(rr=Ce.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  args: {
    enableBiaxial: true,
    barSeries: {
      categories: ["Glass"]
    },
    lineSeries: {
      colors: ["amber"],
      categories: ["SolarCells"]
    },
    startEndOnly: true
  }
}`,...(nr=(tr=Ce.parameters)==null?void 0:tr.docs)==null?void 0:nr.source}}};var ir,sr,or;ke.parameters={...ke.parameters,docs:{...(ir=ke.parameters)==null?void 0:ir.docs,source:{originalSource:`{
  args: {
    enableBiaxial: true,
    barSeries: {
      categories: ["Glass"],
      showYAxis: false
    },
    lineSeries: {
      colors: ["amber"],
      categories: ["SolarCells"],
      showYAxis: false
    }
  }
}`,...(or=(sr=ke.parameters)==null?void 0:sr.docs)==null?void 0:or.source}}};var lr,cr,ur;Be.parameters={...Be.parameters,docs:{...(lr=Be.parameters)==null?void 0:lr.docs,source:{originalSource:`{
  args: {
    showGridLines: false,
    enableBiaxial: true,
    barSeries: {
      categories: ["Glass"]
    },
    lineSeries: {
      colors: ["amber"],
      categories: ["SolarCells"]
    }
  }
}`,...(ur=(cr=Be.parameters)==null?void 0:cr.docs)==null?void 0:ur.source}}};var dr,mr,pr;je.parameters={...je.parameters,docs:{...(dr=je.parameters)==null?void 0:dr.docs,source:{originalSource:`{
  args: {
    showLegend: false,
    enableBiaxial: true,
    barSeries: {
      categories: ["Glass"]
    },
    lineSeries: {
      colors: ["amber"],
      categories: ["SolarCells"]
    }
  }
}`,...(pr=(mr=je.parameters)==null?void 0:mr.docs)==null?void 0:pr.source}}};var fr,yr,gr;Le.parameters={...Le.parameters,docs:{...(fr=Le.parameters)==null?void 0:fr.docs,source:{originalSource:`{
  args: {
    showTooltip: false,
    enableBiaxial: true,
    barSeries: {
      categories: ["Glass"]
    },
    lineSeries: {
      colors: ["amber"],
      categories: ["SolarCells"]
    }
  }
}`,...(gr=(yr=Le.parameters)==null?void 0:yr.docs)==null?void 0:gr.source}}};var hr,br,xr;Ne.parameters={...Ne.parameters,docs:{...(hr=Ne.parameters)==null?void 0:hr.docs,source:{originalSource:`{
  args: {
    onValueChange: v => console.log(v),
    enableBiaxial: true,
    barSeries: {
      categories: ["Glass"]
    },
    lineSeries: {
      colors: ["amber"],
      categories: ["SolarCells"]
    }
  }
}`,...(xr=(br=Ne.parameters)==null?void 0:br.docs)==null?void 0:xr.source}}};var vr,Sr,Ar;Pe.parameters={...Pe.parameters,docs:{...(vr=Pe.parameters)==null?void 0:vr.docs,source:{originalSource:`{
  args: {
    enableBiaxial: true,
    customTooltip: (props: TooltipProps) => {
      const {
        payload,
        active,
        label
      } = props;
      if (!active || !payload || payload.length === 0) return null;
      const data = payload[0].payload;
      const categoriesToShow = ["Adhesive", "SolarCells"];
      return <div className="w-56 rounded-md border bg-white p-3 text-sm shadow-sm">
          <p className="mb-2 font-medium text-gray-900">{label}</p>
          <div className="flex flex-col space-y-2">
            {categoriesToShow.map(category => <div key={category} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={\`h-5 w-1 rounded-full \${category === "Adhesive" ? "bg-blue-500" : "bg-amber-500"}\`} />
                  <p className="text-gray-700">{category}</p>
                </div>
                <p className="font-medium text-gray-900">{data[category]}</p>
              </div>)}
          </div>
        </div>;
    },
    barSeries: {
      categories: ["Adhesive"],
      valueFormatter: v => \`$\${Intl.NumberFormat("us").format(v).toString()}\`
    },
    lineSeries: {
      colors: ["amber"],
      categories: ["SolarCells"],
      valueFormatter: v => \`$\${Intl.NumberFormat("us").format(v).toString()}\`
    }
  }
}`,...(Ar=(Sr=Pe.parameters)==null?void 0:Sr.docs)==null?void 0:Ar.source}}};var wr,Cr,kr;Oe.parameters={...Oe.parameters,docs:{...(wr=Oe.parameters)==null?void 0:wr.docs,source:{originalSource:`{
  render: () => {
    const [callback, setCallBack] = React.useState<TooltipProps | null>(null);
    const [checked, setChecked] = React.useState(true);
    return <>
        <div className="flex items-center gap-3">
          <Label htmlFor="a">showTooltip</Label>
          <Switch id="a" checked={checked} onCheckedChange={setChecked} />
        </div>

        <ComboChart data={chartdata} index="date" barSeries={{
        categories: ["Adhesive"],
        valueFormatter: v => \`$\${Intl.NumberFormat("us").format(v).toString()}\`
      }} lineSeries={{
        colors: ["amber"],
        categories: ["SolarCells"],
        valueFormatter: v => \`$\${Intl.NumberFormat("us").format(v).toString()}\`
      }} tooltipCallback={cooltipContent => setCallBack(cooltipContent)} showTooltip={checked} />
        <pre className="text-xs">{JSON.stringify(callback, null, 2)}</pre>
      </>;
  }
}`,...(kr=(Cr=Oe.parameters)==null?void 0:Cr.docs)==null?void 0:kr.source}}};const dn=["Default","Biaxial","BiaxialDoubleBars","BiaxialDoubleBarsStacked","DoubleBars","DoubleBarsStacked","DefaultNegative","WithValueFormatterBiaxial","WithAxisLabelsBiaxial","WithAutoMinValueBiaxial","WithMinAndMaxValueBiaxial","AllColorsBarsBiaxial","AllColorsLinesBiaxial","WithLegendLeftBiaxial","WithLegendCenterBiaxial","WithLegendSliderBiaxial","WithConnectNullsFalseBiaxial","WithStartEndOnlyBiaxial","WithoutYAxisBiaxial","WithNoGridlinesBiaxial","WithNoLegendBiaxial","WithNoTooltipBiaxial","WithOnValueChangeBiaxial","CustomTooltip","WithTooltipCallback"];export{be as AllColorsBarsBiaxial,xe as AllColorsLinesBiaxial,le as Biaxial,ce as BiaxialDoubleBars,ue as BiaxialDoubleBarsStacked,Pe as CustomTooltip,oe as Default,pe as DefaultNegative,de as DoubleBars,me as DoubleBarsStacked,ge as WithAutoMinValueBiaxial,ye as WithAxisLabelsBiaxial,we as WithConnectNullsFalseBiaxial,Se as WithLegendCenterBiaxial,ve as WithLegendLeftBiaxial,Ae as WithLegendSliderBiaxial,he as WithMinAndMaxValueBiaxial,Be as WithNoGridlinesBiaxial,je as WithNoLegendBiaxial,Le as WithNoTooltipBiaxial,Ne as WithOnValueChangeBiaxial,Ce as WithStartEndOnlyBiaxial,Oe as WithTooltipCallback,fe as WithValueFormatterBiaxial,ke as WithoutYAxisBiaxial,dn as __namedExportsOrder,un as default};
