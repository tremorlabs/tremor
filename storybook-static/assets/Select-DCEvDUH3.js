import{j as r}from"./jsx-runtime-CfatFE5O.js";import{r as o,R as ee}from"./index-ClcD9ViR.js";import{r as Re}from"./index-ZuzByk-F.js";import{c as Ne}from"./index-BdQq_4o_.js";import{c as mt,a as P,u as $,d as ht,b as Pe}from"./index-D-jls2fw.js";import{c as gt}from"./index-D_eSFn5K.js";import{u as V,S as vt}from"./index-ClVxAquS.js";import{u as xt}from"./index-BCyXaPxf.js";import{D as St}from"./index-8isb7LcM.js";import{h as yt,u as wt,R as Ct,F as bt}from"./Combination-BH2yWiU8.js";import{u as Ie}from"./index-ZVc5Krty.js";import{c as _e,A as It,C as Tt,a as Nt,R as Pt}from"./index-a6sp4N9A.js";import{P as Rt}from"./index-B7xKYiWN.js";import{P as j}from"./index-DDVkbYHz.js";import{u as _t}from"./index-sY83p_TZ.js";import{V as Et}from"./index-DXJoflK3.js";import{d as jt,V as kt,i as Mt,s as At}from"./index-BWmfHM-C.js";import{c as L}from"./cx-CYgzbKIn.js";import{f as Ot}from"./focusInput-B1nbZ1LY.js";import{h as Dt}from"./hasErrorInput-DaEl1nS1.js";var Lt=[" ","Enter","ArrowUp","ArrowDown"],Vt=[" ","Enter"],ae="Select",[de,pe,Bt]=gt(ae),[oe,Bo]=mt(ae,[Bt,_e]),ue=_e(),[Ht,q]=oe(ae),[Ft,Wt]=oe(ae),Ee=t=>{const{__scopeSelect:n,children:e,open:i,defaultOpen:l,onOpenChange:p,value:s,defaultValue:c,onValueChange:a,dir:f,name:v,autoComplete:y,disabled:T,required:N,form:I}=t,d=ue(n),[g,w]=o.useState(null),[u,h]=o.useState(null),[k,M]=o.useState(!1),re=xt(f),[R=!1,O]=Pe({prop:i,defaultProp:l,onChange:p}),[K,X]=Pe({prop:s,defaultProp:c,onChange:a}),B=o.useRef(null),H=g?I||!!g.closest("form"):!0,[G,F]=o.useState(new Set),W=Array.from(G).map(_=>_.props.value).join(";");return r.jsx(Pt,{...d,children:r.jsxs(Ht,{required:N,scope:n,trigger:g,onTriggerChange:w,valueNode:u,onValueNodeChange:h,valueNodeHasChildren:k,onValueNodeHasChildrenChange:M,contentId:Ie(),value:K,onValueChange:X,open:R,onOpenChange:O,dir:re,triggerPointerDownPosRef:B,disabled:T,children:[r.jsx(de.Provider,{scope:n,children:r.jsx(Ft,{scope:t.__scopeSelect,onNativeOptionAdd:o.useCallback(_=>{F(D=>new Set(D).add(_))},[]),onNativeOptionRemove:o.useCallback(_=>{F(D=>{const U=new Set(D);return U.delete(_),U})},[]),children:e})}),H?r.jsxs(ot,{"aria-hidden":!0,required:N,tabIndex:-1,name:v,autoComplete:y,value:K,onChange:_=>X(_.target.value),disabled:T,form:I,children:[K===void 0?r.jsx("option",{value:""}):null,Array.from(G)]},W):null]})})};Ee.displayName=ae;var je="SelectTrigger",ke=o.forwardRef((t,n)=>{const{__scopeSelect:e,disabled:i=!1,...l}=t,p=ue(e),s=q(je,e),c=s.disabled||i,a=V(n,s.onTriggerChange),f=pe(e),v=o.useRef("touch"),[y,T,N]=rt(d=>{const g=f().filter(h=>!h.disabled),w=g.find(h=>h.value===s.value),u=nt(g,d,w);u!==void 0&&s.onValueChange(u.value)}),I=d=>{c||(s.onOpenChange(!0),N()),d&&(s.triggerPointerDownPosRef.current={x:Math.round(d.pageX),y:Math.round(d.pageY)})};return r.jsx(It,{asChild:!0,...p,children:r.jsx(j.button,{type:"button",role:"combobox","aria-controls":s.contentId,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:c,"data-disabled":c?"":void 0,"data-placeholder":tt(s.value)?"":void 0,...l,ref:a,onClick:P(l.onClick,d=>{d.currentTarget.focus(),v.current!=="mouse"&&I(d)}),onPointerDown:P(l.onPointerDown,d=>{v.current=d.pointerType;const g=d.target;g.hasPointerCapture(d.pointerId)&&g.releasePointerCapture(d.pointerId),d.button===0&&d.ctrlKey===!1&&d.pointerType==="mouse"&&(I(d),d.preventDefault())}),onKeyDown:P(l.onKeyDown,d=>{const g=y.current!=="";!(d.ctrlKey||d.altKey||d.metaKey)&&d.key.length===1&&T(d.key),!(g&&d.key===" ")&&Lt.includes(d.key)&&(I(),d.preventDefault())})})})});ke.displayName=je;var Me="SelectValue",Ae=o.forwardRef((t,n)=>{const{__scopeSelect:e,className:i,style:l,children:p,placeholder:s="",...c}=t,a=q(Me,e),{onValueNodeHasChildrenChange:f}=a,v=p!==void 0,y=V(n,a.onValueNodeChange);return $(()=>{f(v)},[f,v]),r.jsx(j.span,{...c,ref:y,style:{pointerEvents:"none"},children:tt(a.value)?r.jsx(r.Fragment,{children:s}):p})});Ae.displayName=Me;var Ut="SelectIcon",Oe=o.forwardRef((t,n)=>{const{__scopeSelect:e,children:i,...l}=t;return r.jsx(j.span,{"aria-hidden":!0,...l,ref:n,children:i||"▼"})});Oe.displayName=Ut;var Kt="SelectPortal",De=t=>r.jsx(Rt,{asChild:!0,...t});De.displayName=Kt;var Q="SelectContent",Le=o.forwardRef((t,n)=>{const e=q(Q,t.__scopeSelect),[i,l]=o.useState();if($(()=>{l(new DocumentFragment)},[]),!e.open){const p=i;return p?Re.createPortal(r.jsx(Ve,{scope:t.__scopeSelect,children:r.jsx(de.Slot,{scope:t.__scopeSelect,children:r.jsx("div",{children:t.children})})}),p):null}return r.jsx(Be,{...t,ref:n})});Le.displayName=Q;var A=10,[Ve,Y]=oe(Q),Gt="SelectContentImpl",Be=o.forwardRef((t,n)=>{const{__scopeSelect:e,position:i="item-aligned",onCloseAutoFocus:l,onEscapeKeyDown:p,onPointerDownOutside:s,side:c,sideOffset:a,align:f,alignOffset:v,arrowPadding:y,collisionBoundary:T,collisionPadding:N,sticky:I,hideWhenDetached:d,avoidCollisions:g,...w}=t,u=q(Q,e),[h,k]=o.useState(null),[M,re]=o.useState(null),R=V(n,m=>k(m)),[O,K]=o.useState(null),[X,B]=o.useState(null),H=pe(e),[G,F]=o.useState(!1),W=o.useRef(!1);o.useEffect(()=>{if(h)return yt(h)},[h]),wt();const _=o.useCallback(m=>{const[b,...E]=H().map(S=>S.ref.current),[C]=E.slice(-1),x=document.activeElement;for(const S of m)if(S===x||(S==null||S.scrollIntoView({block:"nearest"}),S===b&&M&&(M.scrollTop=0),S===C&&M&&(M.scrollTop=M.scrollHeight),S==null||S.focus(),document.activeElement!==x))return},[H,M]),D=o.useCallback(()=>_([O,h]),[_,O,h]);o.useEffect(()=>{G&&D()},[G,D]);const{onOpenChange:U,triggerPointerDownPosRef:z}=u;o.useEffect(()=>{if(h){let m={x:0,y:0};const b=C=>{var x,S;m={x:Math.abs(Math.round(C.pageX)-(((x=z.current)==null?void 0:x.x)??0)),y:Math.abs(Math.round(C.pageY)-(((S=z.current)==null?void 0:S.y)??0))}},E=C=>{m.x<=10&&m.y<=10?C.preventDefault():h.contains(C.target)||U(!1),document.removeEventListener("pointermove",b),z.current=null};return z.current!==null&&(document.addEventListener("pointermove",b),document.addEventListener("pointerup",E,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",b),document.removeEventListener("pointerup",E,{capture:!0})}}},[h,U,z]),o.useEffect(()=>{const m=()=>U(!1);return window.addEventListener("blur",m),window.addEventListener("resize",m),()=>{window.removeEventListener("blur",m),window.removeEventListener("resize",m)}},[U]);const[fe,le]=rt(m=>{const b=H().filter(x=>!x.disabled),E=b.find(x=>x.ref.current===document.activeElement),C=nt(b,m,E);C&&setTimeout(()=>C.ref.current.focus())}),me=o.useCallback((m,b,E)=>{const C=!W.current&&!E;(u.value!==void 0&&u.value===b||C)&&(K(m),C&&(W.current=!0))},[u.value]),he=o.useCallback(()=>h==null?void 0:h.focus(),[h]),te=o.useCallback((m,b,E)=>{const C=!W.current&&!E;(u.value!==void 0&&u.value===b||C)&&B(m)},[u.value]),ie=i==="popper"?Se:He,ne=ie===Se?{side:c,sideOffset:a,align:f,alignOffset:v,arrowPadding:y,collisionBoundary:T,collisionPadding:N,sticky:I,hideWhenDetached:d,avoidCollisions:g}:{};return r.jsx(Ve,{scope:e,content:h,viewport:M,onViewportChange:re,itemRefCallback:me,selectedItem:O,onItemLeave:he,itemTextRefCallback:te,focusSelectedItem:D,selectedItemText:X,position:i,isPositioned:G,searchRef:fe,children:r.jsx(Ct,{as:vt,allowPinchZoom:!0,children:r.jsx(bt,{asChild:!0,trapped:u.open,onMountAutoFocus:m=>{m.preventDefault()},onUnmountAutoFocus:P(l,m=>{var b;(b=u.trigger)==null||b.focus({preventScroll:!0}),m.preventDefault()}),children:r.jsx(St,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:p,onPointerDownOutside:s,onFocusOutside:m=>m.preventDefault(),onDismiss:()=>u.onOpenChange(!1),children:r.jsx(ie,{role:"listbox",id:u.contentId,"data-state":u.open?"open":"closed",dir:u.dir,onContextMenu:m=>m.preventDefault(),...w,...ne,onPlaced:()=>F(!0),ref:R,style:{display:"flex",flexDirection:"column",outline:"none",...w.style},onKeyDown:P(w.onKeyDown,m=>{const b=m.ctrlKey||m.altKey||m.metaKey;if(m.key==="Tab"&&m.preventDefault(),!b&&m.key.length===1&&le(m.key),["ArrowUp","ArrowDown","Home","End"].includes(m.key)){let C=H().filter(x=>!x.disabled).map(x=>x.ref.current);if(["ArrowUp","End"].includes(m.key)&&(C=C.slice().reverse()),["ArrowUp","ArrowDown"].includes(m.key)){const x=m.target,S=C.indexOf(x);C=C.slice(S+1)}setTimeout(()=>_(C)),m.preventDefault()}})})})})})})});Be.displayName=Gt;var zt="SelectItemAlignedPosition",He=o.forwardRef((t,n)=>{const{__scopeSelect:e,onPlaced:i,...l}=t,p=q(Q,e),s=Y(Q,e),[c,a]=o.useState(null),[f,v]=o.useState(null),y=V(n,R=>v(R)),T=pe(e),N=o.useRef(!1),I=o.useRef(!0),{viewport:d,selectedItem:g,selectedItemText:w,focusSelectedItem:u}=s,h=o.useCallback(()=>{if(p.trigger&&p.valueNode&&c&&f&&d&&g&&w){const R=p.trigger.getBoundingClientRect(),O=f.getBoundingClientRect(),K=p.valueNode.getBoundingClientRect(),X=w.getBoundingClientRect();if(p.dir!=="rtl"){const x=X.left-O.left,S=K.left-x,Z=R.left-S,J=R.width+Z,ge=Math.max(J,O.width),ve=window.innerWidth-A,xe=Ne(S,[A,Math.max(A,ve-ge)]);c.style.minWidth=J+"px",c.style.left=xe+"px"}else{const x=O.right-X.right,S=window.innerWidth-K.right-x,Z=window.innerWidth-R.right-S,J=R.width+Z,ge=Math.max(J,O.width),ve=window.innerWidth-A,xe=Ne(S,[A,Math.max(A,ve-ge)]);c.style.minWidth=J+"px",c.style.right=xe+"px"}const B=T(),H=window.innerHeight-A*2,G=d.scrollHeight,F=window.getComputedStyle(f),W=parseInt(F.borderTopWidth,10),_=parseInt(F.paddingTop,10),D=parseInt(F.borderBottomWidth,10),U=parseInt(F.paddingBottom,10),z=W+_+G+U+D,fe=Math.min(g.offsetHeight*5,z),le=window.getComputedStyle(d),me=parseInt(le.paddingTop,10),he=parseInt(le.paddingBottom,10),te=R.top+R.height/2-A,ie=H-te,ne=g.offsetHeight/2,m=g.offsetTop+ne,b=W+_+m,E=z-b;if(b<=te){const x=B.length>0&&g===B[B.length-1].ref.current;c.style.bottom="0px";const S=f.clientHeight-d.offsetTop-d.offsetHeight,Z=Math.max(ie,ne+(x?he:0)+S+D),J=b+Z;c.style.height=J+"px"}else{const x=B.length>0&&g===B[0].ref.current;c.style.top="0px";const Z=Math.max(te,W+d.offsetTop+(x?me:0)+ne)+E;c.style.height=Z+"px",d.scrollTop=b-te+d.offsetTop}c.style.margin=`${A}px 0`,c.style.minHeight=fe+"px",c.style.maxHeight=H+"px",i==null||i(),requestAnimationFrame(()=>N.current=!0)}},[T,p.trigger,p.valueNode,c,f,d,g,w,p.dir,i]);$(()=>h(),[h]);const[k,M]=o.useState();$(()=>{f&&M(window.getComputedStyle(f).zIndex)},[f]);const re=o.useCallback(R=>{R&&I.current===!0&&(h(),u==null||u(),I.current=!1)},[h,u]);return r.jsx(qt,{scope:e,contentWrapper:c,shouldExpandOnScrollRef:N,onScrollButtonChange:re,children:r.jsx("div",{ref:a,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:k},children:r.jsx(j.div,{...l,ref:y,style:{boxSizing:"border-box",maxHeight:"100%",...l.style}})})})});He.displayName=zt;var $t="SelectPopperPosition",Se=o.forwardRef((t,n)=>{const{__scopeSelect:e,align:i="start",collisionPadding:l=A,...p}=t,s=ue(e);return r.jsx(Tt,{...s,...p,ref:n,align:i,collisionPadding:l,style:{boxSizing:"border-box",...p.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Se.displayName=$t;var[qt,Te]=oe(Q,{}),ye="SelectViewport",Fe=o.forwardRef((t,n)=>{const{__scopeSelect:e,nonce:i,...l}=t,p=Y(ye,e),s=Te(ye,e),c=V(n,p.onViewportChange),a=o.useRef(0);return r.jsxs(r.Fragment,{children:[r.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:i}),r.jsx(de.Slot,{scope:e,children:r.jsx(j.div,{"data-radix-select-viewport":"",role:"presentation",...l,ref:c,style:{position:"relative",flex:1,overflow:"hidden auto",...l.style},onScroll:P(l.onScroll,f=>{const v=f.currentTarget,{contentWrapper:y,shouldExpandOnScrollRef:T}=s;if(T!=null&&T.current&&y){const N=Math.abs(a.current-v.scrollTop);if(N>0){const I=window.innerHeight-A*2,d=parseFloat(y.style.minHeight),g=parseFloat(y.style.height),w=Math.max(d,g);if(w<I){const u=w+N,h=Math.min(I,u),k=u-h;y.style.height=h+"px",y.style.bottom==="0px"&&(v.scrollTop=k>0?k:0,y.style.justifyContent="flex-end")}}}a.current=v.scrollTop})})})]})});Fe.displayName=ye;var We="SelectGroup",[Yt,Xt]=oe(We),Ue=o.forwardRef((t,n)=>{const{__scopeSelect:e,...i}=t,l=Ie();return r.jsx(Yt,{scope:e,id:l,children:r.jsx(j.div,{role:"group","aria-labelledby":l,...i,ref:n})})});Ue.displayName=We;var Ke="SelectLabel",Ge=o.forwardRef((t,n)=>{const{__scopeSelect:e,...i}=t,l=Xt(Ke,e);return r.jsx(j.div,{id:l.id,...i,ref:n})});Ge.displayName=Ke;var ce="SelectItem",[Zt,ze]=oe(ce),$e=o.forwardRef((t,n)=>{const{__scopeSelect:e,value:i,disabled:l=!1,textValue:p,...s}=t,c=q(ce,e),a=Y(ce,e),f=c.value===i,[v,y]=o.useState(p??""),[T,N]=o.useState(!1),I=V(n,u=>{var h;return(h=a.itemRefCallback)==null?void 0:h.call(a,u,i,l)}),d=Ie(),g=o.useRef("touch"),w=()=>{l||(c.onValueChange(i),c.onOpenChange(!1))};if(i==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return r.jsx(Zt,{scope:e,value:i,disabled:l,textId:d,isSelected:f,onItemTextChange:o.useCallback(u=>{y(h=>h||((u==null?void 0:u.textContent)??"").trim())},[]),children:r.jsx(de.ItemSlot,{scope:e,value:i,disabled:l,textValue:v,children:r.jsx(j.div,{role:"option","aria-labelledby":d,"data-highlighted":T?"":void 0,"aria-selected":f&&T,"data-state":f?"checked":"unchecked","aria-disabled":l||void 0,"data-disabled":l?"":void 0,tabIndex:l?void 0:-1,...s,ref:I,onFocus:P(s.onFocus,()=>N(!0)),onBlur:P(s.onBlur,()=>N(!1)),onClick:P(s.onClick,()=>{g.current!=="mouse"&&w()}),onPointerUp:P(s.onPointerUp,()=>{g.current==="mouse"&&w()}),onPointerDown:P(s.onPointerDown,u=>{g.current=u.pointerType}),onPointerMove:P(s.onPointerMove,u=>{var h;g.current=u.pointerType,l?(h=a.onItemLeave)==null||h.call(a):g.current==="mouse"&&u.currentTarget.focus({preventScroll:!0})}),onPointerLeave:P(s.onPointerLeave,u=>{var h;u.currentTarget===document.activeElement&&((h=a.onItemLeave)==null||h.call(a))}),onKeyDown:P(s.onKeyDown,u=>{var k;((k=a.searchRef)==null?void 0:k.current)!==""&&u.key===" "||(Vt.includes(u.key)&&w(),u.key===" "&&u.preventDefault())})})})})});$e.displayName=ce;var se="SelectItemText",qe=o.forwardRef((t,n)=>{const{__scopeSelect:e,className:i,style:l,...p}=t,s=q(se,e),c=Y(se,e),a=ze(se,e),f=Wt(se,e),[v,y]=o.useState(null),T=V(n,w=>y(w),a.onItemTextChange,w=>{var u;return(u=c.itemTextRefCallback)==null?void 0:u.call(c,w,a.value,a.disabled)}),N=v==null?void 0:v.textContent,I=o.useMemo(()=>r.jsx("option",{value:a.value,disabled:a.disabled,children:N},a.value),[a.disabled,a.value,N]),{onNativeOptionAdd:d,onNativeOptionRemove:g}=f;return $(()=>(d(I),()=>g(I)),[d,g,I]),r.jsxs(r.Fragment,{children:[r.jsx(j.span,{id:a.textId,...p,ref:T}),a.isSelected&&s.valueNode&&!s.valueNodeHasChildren?Re.createPortal(p.children,s.valueNode):null]})});qe.displayName=se;var Ye="SelectItemIndicator",Xe=o.forwardRef((t,n)=>{const{__scopeSelect:e,...i}=t;return ze(Ye,e).isSelected?r.jsx(j.span,{"aria-hidden":!0,...i,ref:n}):null});Xe.displayName=Ye;var we="SelectScrollUpButton",Ze=o.forwardRef((t,n)=>{const e=Y(we,t.__scopeSelect),i=Te(we,t.__scopeSelect),[l,p]=o.useState(!1),s=V(n,i.onScrollButtonChange);return $(()=>{if(e.viewport&&e.isPositioned){let c=function(){const f=a.scrollTop>0;p(f)};const a=e.viewport;return c(),a.addEventListener("scroll",c),()=>a.removeEventListener("scroll",c)}},[e.viewport,e.isPositioned]),l?r.jsx(Qe,{...t,ref:s,onAutoScroll:()=>{const{viewport:c,selectedItem:a}=e;c&&a&&(c.scrollTop=c.scrollTop-a.offsetHeight)}}):null});Ze.displayName=we;var Ce="SelectScrollDownButton",Je=o.forwardRef((t,n)=>{const e=Y(Ce,t.__scopeSelect),i=Te(Ce,t.__scopeSelect),[l,p]=o.useState(!1),s=V(n,i.onScrollButtonChange);return $(()=>{if(e.viewport&&e.isPositioned){let c=function(){const f=a.scrollHeight-a.clientHeight,v=Math.ceil(a.scrollTop)<f;p(v)};const a=e.viewport;return c(),a.addEventListener("scroll",c),()=>a.removeEventListener("scroll",c)}},[e.viewport,e.isPositioned]),l?r.jsx(Qe,{...t,ref:s,onAutoScroll:()=>{const{viewport:c,selectedItem:a}=e;c&&a&&(c.scrollTop=c.scrollTop+a.offsetHeight)}}):null});Je.displayName=Ce;var Qe=o.forwardRef((t,n)=>{const{__scopeSelect:e,onAutoScroll:i,...l}=t,p=Y("SelectScrollButton",e),s=o.useRef(null),c=pe(e),a=o.useCallback(()=>{s.current!==null&&(window.clearInterval(s.current),s.current=null)},[]);return o.useEffect(()=>()=>a(),[a]),$(()=>{var v;const f=c().find(y=>y.ref.current===document.activeElement);(v=f==null?void 0:f.ref.current)==null||v.scrollIntoView({block:"nearest"})},[c]),r.jsx(j.div,{"aria-hidden":!0,...l,ref:n,style:{flexShrink:0,...l.style},onPointerDown:P(l.onPointerDown,()=>{s.current===null&&(s.current=window.setInterval(i,50))}),onPointerMove:P(l.onPointerMove,()=>{var f;(f=p.onItemLeave)==null||f.call(p),s.current===null&&(s.current=window.setInterval(i,50))}),onPointerLeave:P(l.onPointerLeave,()=>{a()})})}),Jt="SelectSeparator",et=o.forwardRef((t,n)=>{const{__scopeSelect:e,...i}=t;return r.jsx(j.div,{"aria-hidden":!0,...i,ref:n})});et.displayName=Jt;var be="SelectArrow",Qt=o.forwardRef((t,n)=>{const{__scopeSelect:e,...i}=t,l=ue(e),p=q(be,e),s=Y(be,e);return p.open&&s.position==="popper"?r.jsx(Nt,{...l,...i,ref:n}):null});Qt.displayName=be;function tt(t){return t===""||t===void 0}var ot=o.forwardRef((t,n)=>{const{value:e,...i}=t,l=o.useRef(null),p=V(n,l),s=_t(e);return o.useEffect(()=>{const c=l.current,a=window.HTMLSelectElement.prototype,v=Object.getOwnPropertyDescriptor(a,"value").set;if(s!==e&&v){const y=new Event("change",{bubbles:!0});v.call(c,e),c.dispatchEvent(y)}},[s,e]),r.jsx(Et,{asChild:!0,children:r.jsx("select",{...i,ref:p,defaultValue:e})})});ot.displayName="BubbleSelect";function rt(t){const n=ht(t),e=o.useRef(""),i=o.useRef(0),l=o.useCallback(s=>{const c=e.current+s;n(c),function a(f){e.current=f,window.clearTimeout(i.current),f!==""&&(i.current=window.setTimeout(()=>a(""),1e3))}(c)},[n]),p=o.useCallback(()=>{e.current="",window.clearTimeout(i.current)},[]);return o.useEffect(()=>()=>window.clearTimeout(i.current),[]),[e,l,p]}function nt(t,n,e){const l=n.length>1&&Array.from(n).every(f=>f===n[0])?n[0]:n,p=e?t.indexOf(e):-1;let s=eo(t,Math.max(p,0));l.length===1&&(s=s.filter(f=>f!==e));const a=s.find(f=>f.textValue.toLowerCase().startsWith(l.toLowerCase()));return a!==e?a:void 0}function eo(t,n){return t.map((e,i)=>t[(n+i)%t.length])}var to=Ee,oo=ke,ro=Ae,no=Oe,so=De,ao=Le,lo=Fe,io=Ue,co=Ge,po=$e,uo=qe,fo=Xe,st=Ze,at=Je,mo=et;const ho=to;ho.displayName="Select";const go=io;go.displayName="SelectGroup";const vo=ro;vo.displayName="SelectValue";const xo=[L("group/trigger flex w-full select-none items-center justify-between gap-2 truncate rounded-md border px-3 py-2 shadow-sm outline-none transition sm:text-sm","border-gray-300 dark:border-gray-800","text-gray-900 dark:text-gray-50","data-[placeholder]:text-gray-500 data-[placeholder]:dark:text-gray-500","bg-white dark:bg-gray-950","hover:bg-gray-50 hover:dark:bg-gray-950/50","data-[disabled]:bg-gray-100 data-[disabled]:text-gray-400","data-[disabled]:dark:border-gray-700 data-[disabled]:dark:bg-gray-800 data-[disabled]:dark:text-gray-500",Ot)],lt=ee.forwardRef(({className:t,hasError:n,children:e,...i},l)=>r.jsxs(oo,{ref:l,className:L(xo,n?Dt:"",t),"tremor-id":"tremor-raw",...i,children:[r.jsx("span",{className:"truncate",children:e}),r.jsx(no,{asChild:!0,children:r.jsx(jt,{className:L("size-4 shrink-0","text-gray-400 dark:text-gray-600","group-data-[disabled]/trigger:text-gray-300 group-data-[disabled]/trigger:dark:text-gray-600")})})]}));lt.displayName="SelectTrigger";const it=ee.forwardRef(({className:t,...n},e)=>r.jsx(st,{ref:e,className:L("flex cursor-default items-center justify-center py-1",t),...n,children:r.jsx(kt,{className:"size-3 shrink-0","aria-hidden":"true"})}));it.displayName=st.displayName;const ct=ee.forwardRef(({className:t,...n},e)=>r.jsx(at,{ref:e,className:L("flex cursor-default items-center justify-center py-1",t),...n,children:r.jsx(Mt,{className:"size-3 shrink-0","aria-hidden":"true"})}));ct.displayName=at.displayName;const dt=ee.forwardRef(({className:t,position:n="popper",children:e,sideOffset:i=8,collisionPadding:l=10,...p},s)=>r.jsx(so,{children:r.jsxs(ao,{ref:s,className:L("relative z-50 overflow-hidden rounded-md border shadow-xl shadow-black/[2.5%]","min-w-[calc(var(--radix-select-trigger-width)-2px)] max-w-[95vw]","max-h-[--radix-select-content-available-height]","bg-white dark:bg-gray-950","text-gray-900 dark:text-gray-50","border-gray-200 dark:border-gray-800","will-change-[transform,opacity]","data-[state=closed]:animate-hide","data-[side=bottom]:animate-slideDownAndFade data-[side=left]:animate-slideLeftAndFade data-[side=right]:animate-slideRightAndFade data-[side=top]:animate-slideUpAndFade",t),sideOffset:i,position:n,collisionPadding:l,...p,children:[r.jsx(it,{}),r.jsx(lo,{className:L("p-1",n==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[calc(var(--radix-select-trigger-width))]"),children:e}),r.jsx(ct,{})]})}));dt.displayName="SelectContent";const pt=ee.forwardRef(({className:t,...n},e)=>r.jsx(co,{ref:e,className:L("px-3 py-2 text-xs font-medium tracking-wide","text-gray-500 dark:text-gray-500",t),...n}));pt.displayName="SelectGroupLabel";const ut=ee.forwardRef(({className:t,children:n,...e},i)=>r.jsxs(po,{ref:i,className:L("grid cursor-pointer grid-cols-[1fr_20px] gap-x-2 rounded px-3 py-2 outline-none transition-colors data-[state=checked]:font-semibold sm:text-sm","text-gray-900 dark:text-gray-50","data-[disabled]:pointer-events-none data-[disabled]:text-gray-400 data-[disabled]:hover:bg-none dark:data-[disabled]:text-gray-600","focus-visible:bg-gray-100 focus-visible:dark:bg-gray-900","hover:bg-gray-100 hover:dark:bg-gray-900",t),...e,children:[r.jsx(uo,{className:"flex-1 truncate",children:n}),r.jsx(fo,{children:r.jsx(At,{className:"size-5 shrink-0 text-gray-800 dark:text-gray-200","aria-hidden":"true"})})]}));ut.displayName="SelectItem";const ft=ee.forwardRef(({className:t,...n},e)=>r.jsx(mo,{ref:e,className:L("-mx-1 my-1 h-px","bg-gray-300 dark:bg-gray-700",t),...n}));ft.displayName="SelectSeparator";dt.__docgenInfo={description:"",methods:[],displayName:"SelectContent",props:{position:{defaultValue:{value:'"popper"',computed:!1},required:!1},sideOffset:{defaultValue:{value:"8",computed:!1},required:!1},collisionPadding:{defaultValue:{value:"10",computed:!1},required:!1}}};pt.__docgenInfo={description:"",methods:[],displayName:"SelectGroupLabel"};ut.__docgenInfo={description:"",methods:[],displayName:"SelectItem"};ft.__docgenInfo={description:"",methods:[],displayName:"SelectSeparator"};lt.__docgenInfo={description:"",methods:[],displayName:"SelectTrigger",props:{hasError:{required:!1,tsType:{name:"boolean"},description:""}}};export{ho as S,lt as a,vo as b,dt as c,ut as d,go as e,pt as f};
