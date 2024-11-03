import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as i,R}from"./index-ClcD9ViR.js";import{r as sr,s as ir,u as cr,w as dr,y as ur,Q as lr,I as tn,z as pr,B as ze,E as mr,C as hr,R as xr,D as fr,S as wr,F as Mr,n as gr,Z as Dr,H as vr,K as br,N as Cr,W as Sr}from"./index-BWmfHM-C.js";import{B as H}from"./Button-BKBEGp9E.js";import{c as on,a as w,d as Ce,b as an}from"./index-D-jls2fw.js";import{u as Q,c as sn,S as jr}from"./index-ClVxAquS.js";import{P as F,d as yr}from"./index-DDVkbYHz.js";import{c as Ir}from"./index-D_eSFn5K.js";import{u as Rr}from"./index-BCyXaPxf.js";import{D as Nr}from"./index-8isb7LcM.js";import{h as _r,u as kr,F as Pr,R as Ar}from"./Combination-BH2yWiU8.js";import{u as pe}from"./index-ZVc5Krty.js";import{c as cn,A as Er,C as Tr,a as Or,R as dn}from"./index-a6sp4N9A.js";import{P as Lr}from"./index-B7xKYiWN.js";import{P as fe}from"./index-CkP846ZC.js";import{c as un,R as Br,I as Gr}from"./index-CgiNqS2a.js";import{c as v}from"./cx-CYgzbKIn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CF-iJ_jy.js";import"./focusRing-49zpLVVu.js";import"./index-ZuzByk-F.js";import"./index-VEzCCWBB.js";import"./index-DSWkTB7Z.js";var be=["Enter"," "],zr=["ArrowDown","PageUp","Home"],ln=["ArrowUp","PageDown","End"],Fr=[...zr,...ln],Kr={ltr:[...be,"ArrowRight"],rtl:[...be,"ArrowLeft"]},Ur={ltr:["ArrowLeft"],rtl:["ArrowRight"]},J="Menu",[V,Wr,$r]=Ir(J),[E,pn]=on(J,[$r,cn,un]),ee=cn(),mn=un(),[hn,P]=E(J),[Vr,ne]=E(J),xn=n=>{const{__scopeMenu:t,open:r=!1,children:o,dir:a,onOpenChange:s,modal:d=!0}=n,u=ee(t),[m,f]=i.useState(null),p=i.useRef(!1),c=Ce(s),h=Rr(a);return i.useEffect(()=>{const g=()=>{p.current=!0,document.addEventListener("pointerdown",M,{capture:!0,once:!0}),document.addEventListener("pointermove",M,{capture:!0,once:!0})},M=()=>p.current=!1;return document.addEventListener("keydown",g,{capture:!0}),()=>{document.removeEventListener("keydown",g,{capture:!0}),document.removeEventListener("pointerdown",M,{capture:!0}),document.removeEventListener("pointermove",M,{capture:!0})}},[]),e.jsx(dn,{...u,children:e.jsx(hn,{scope:t,open:r,onOpenChange:c,content:m,onContentChange:f,children:e.jsx(Vr,{scope:t,onClose:i.useCallback(()=>c(!1),[c]),isUsingKeyboardRef:p,dir:h,modal:d,children:o})})})};xn.displayName=J;var Zr="MenuAnchor",Se=i.forwardRef((n,t)=>{const{__scopeMenu:r,...o}=n,a=ee(r);return e.jsx(Er,{...a,...o,ref:t})});Se.displayName=Zr;var je="MenuPortal",[qr,fn]=E(je,{forceMount:void 0}),wn=n=>{const{__scopeMenu:t,forceMount:r,children:o,container:a}=n,s=P(je,t);return e.jsx(qr,{scope:t,forceMount:r,children:e.jsx(fe,{present:r||s.open,children:e.jsx(Lr,{asChild:!0,container:a,children:o})})})};wn.displayName=je;var S="MenuContent",[Xr,ye]=E(S),Mn=i.forwardRef((n,t)=>{const r=fn(S,n.__scopeMenu),{forceMount:o=r.forceMount,...a}=n,s=P(S,n.__scopeMenu),d=ne(S,n.__scopeMenu);return e.jsx(V.Provider,{scope:n.__scopeMenu,children:e.jsx(fe,{present:o||s.open,children:e.jsx(V.Slot,{scope:n.__scopeMenu,children:d.modal?e.jsx(Yr,{...a,ref:t}):e.jsx(Hr,{...a,ref:t})})})})}),Yr=i.forwardRef((n,t)=>{const r=P(S,n.__scopeMenu),o=i.useRef(null),a=Q(t,o);return i.useEffect(()=>{const s=o.current;if(s)return _r(s)},[]),e.jsx(Ie,{...n,ref:a,trapFocus:r.open,disableOutsidePointerEvents:r.open,disableOutsideScroll:!0,onFocusOutside:w(n.onFocusOutside,s=>s.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>r.onOpenChange(!1)})}),Hr=i.forwardRef((n,t)=>{const r=P(S,n.__scopeMenu);return e.jsx(Ie,{...n,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>r.onOpenChange(!1)})}),Ie=i.forwardRef((n,t)=>{const{__scopeMenu:r,loop:o=!1,trapFocus:a,onOpenAutoFocus:s,onCloseAutoFocus:d,disableOutsidePointerEvents:u,onEntryFocus:m,onEscapeKeyDown:f,onPointerDownOutside:p,onFocusOutside:c,onInteractOutside:h,onDismiss:g,disableOutsideScroll:M,...A}=n,B=P(S,r),U=ne(S,r),re=ee(r),te=mn(r),Ee=Wr(r),[er,Te]=i.useState(null),oe=i.useRef(null),nr=Q(t,oe,B.onContentChange),ae=i.useRef(0),se=i.useRef(""),rr=i.useRef(0),Me=i.useRef(null),Oe=i.useRef("right"),ge=i.useRef(0),tr=M?Ar:i.Fragment,or=M?{as:jr,allowPinchZoom:!0}:void 0,ar=l=>{var z,Be;const C=se.current+l,j=Ee().filter(y=>!y.disabled),I=document.activeElement,De=(z=j.find(y=>y.ref.current===I))==null?void 0:z.textValue,ve=j.map(y=>y.textValue),Le=dt(ve,C,De),W=(Be=j.find(y=>y.textValue===Le))==null?void 0:Be.ref.current;(function y(Ge){se.current=Ge,window.clearTimeout(ae.current),Ge!==""&&(ae.current=window.setTimeout(()=>y(""),1e3))})(C),W&&setTimeout(()=>W.focus())};i.useEffect(()=>()=>window.clearTimeout(ae.current),[]),kr();const G=i.useCallback(l=>{var j,I;return Oe.current===((j=Me.current)==null?void 0:j.side)&&lt(l,(I=Me.current)==null?void 0:I.area)},[]);return e.jsx(Xr,{scope:r,searchRef:se,onItemEnter:i.useCallback(l=>{G(l)&&l.preventDefault()},[G]),onItemLeave:i.useCallback(l=>{var C;G(l)||((C=oe.current)==null||C.focus(),Te(null))},[G]),onTriggerLeave:i.useCallback(l=>{G(l)&&l.preventDefault()},[G]),pointerGraceTimerRef:rr,onPointerGraceIntentChange:i.useCallback(l=>{Me.current=l},[]),children:e.jsx(tr,{...or,children:e.jsx(Pr,{asChild:!0,trapped:a,onMountAutoFocus:w(s,l=>{var C;l.preventDefault(),(C=oe.current)==null||C.focus({preventScroll:!0})}),onUnmountAutoFocus:d,children:e.jsx(Nr,{asChild:!0,disableOutsidePointerEvents:u,onEscapeKeyDown:f,onPointerDownOutside:p,onFocusOutside:c,onInteractOutside:h,onDismiss:g,children:e.jsx(Br,{asChild:!0,...te,dir:U.dir,orientation:"vertical",loop:o,currentTabStopId:er,onCurrentTabStopIdChange:Te,onEntryFocus:w(m,l=>{U.isUsingKeyboardRef.current||l.preventDefault()}),preventScrollOnEntryFocus:!0,children:e.jsx(Tr,{role:"menu","aria-orientation":"vertical","data-state":Tn(B.open),"data-radix-menu-content":"",dir:U.dir,...re,...A,ref:nr,style:{outline:"none",...A.style},onKeyDown:w(A.onKeyDown,l=>{const j=l.target.closest("[data-radix-menu-content]")===l.currentTarget,I=l.ctrlKey||l.altKey||l.metaKey,De=l.key.length===1;j&&(l.key==="Tab"&&l.preventDefault(),!I&&De&&ar(l.key));const ve=oe.current;if(l.target!==ve||!Fr.includes(l.key))return;l.preventDefault();const W=Ee().filter(z=>!z.disabled).map(z=>z.ref.current);ln.includes(l.key)&&W.reverse(),it(W)}),onBlur:w(n.onBlur,l=>{l.currentTarget.contains(l.target)||(window.clearTimeout(ae.current),se.current="")}),onPointerMove:w(n.onPointerMove,Z(l=>{const C=l.target,j=ge.current!==l.clientX;if(l.currentTarget.contains(C)&&j){const I=l.clientX>ge.current?"right":"left";Oe.current=I,ge.current=l.clientX}}))})})})})})})});Mn.displayName=S;var Qr="MenuGroup",Re=i.forwardRef((n,t)=>{const{__scopeMenu:r,...o}=n;return e.jsx(F.div,{role:"group",...o,ref:t})});Re.displayName=Qr;var Jr="MenuLabel",gn=i.forwardRef((n,t)=>{const{__scopeMenu:r,...o}=n;return e.jsx(F.div,{...o,ref:t})});gn.displayName=Jr;var me="MenuItem",Fe="menu.itemSelect",we=i.forwardRef((n,t)=>{const{disabled:r=!1,onSelect:o,...a}=n,s=i.useRef(null),d=ne(me,n.__scopeMenu),u=ye(me,n.__scopeMenu),m=Q(t,s),f=i.useRef(!1),p=()=>{const c=s.current;if(!r&&c){const h=new CustomEvent(Fe,{bubbles:!0,cancelable:!0});c.addEventListener(Fe,g=>o==null?void 0:o(g),{once:!0}),yr(c,h),h.defaultPrevented?f.current=!1:d.onClose()}};return e.jsx(Dn,{...a,ref:m,disabled:r,onClick:w(n.onClick,p),onPointerDown:c=>{var h;(h=n.onPointerDown)==null||h.call(n,c),f.current=!0},onPointerUp:w(n.onPointerUp,c=>{var h;f.current||(h=c.currentTarget)==null||h.click()}),onKeyDown:w(n.onKeyDown,c=>{const h=u.searchRef.current!=="";r||h&&c.key===" "||be.includes(c.key)&&(c.currentTarget.click(),c.preventDefault())})})});we.displayName=me;var Dn=i.forwardRef((n,t)=>{const{__scopeMenu:r,disabled:o=!1,textValue:a,...s}=n,d=ye(me,r),u=mn(r),m=i.useRef(null),f=Q(t,m),[p,c]=i.useState(!1),[h,g]=i.useState("");return i.useEffect(()=>{const M=m.current;M&&g((M.textContent??"").trim())},[s.children]),e.jsx(V.ItemSlot,{scope:r,disabled:o,textValue:a??h,children:e.jsx(Gr,{asChild:!0,...u,focusable:!o,children:e.jsx(F.div,{role:"menuitem","data-highlighted":p?"":void 0,"aria-disabled":o||void 0,"data-disabled":o?"":void 0,...s,ref:f,onPointerMove:w(n.onPointerMove,Z(M=>{o?d.onItemLeave(M):(d.onItemEnter(M),M.defaultPrevented||M.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:w(n.onPointerLeave,Z(M=>d.onItemLeave(M))),onFocus:w(n.onFocus,()=>c(!0)),onBlur:w(n.onBlur,()=>c(!1))})})})}),et="MenuCheckboxItem",vn=i.forwardRef((n,t)=>{const{checked:r=!1,onCheckedChange:o,...a}=n;return e.jsx(yn,{scope:n.__scopeMenu,checked:r,children:e.jsx(we,{role:"menuitemcheckbox","aria-checked":he(r)?"mixed":r,...a,ref:t,"data-state":ke(r),onSelect:w(a.onSelect,()=>o==null?void 0:o(he(r)?!0:!r),{checkForDefaultPrevented:!1})})})});vn.displayName=et;var bn="MenuRadioGroup",[nt,rt]=E(bn,{value:void 0,onValueChange:()=>{}}),Cn=i.forwardRef((n,t)=>{const{value:r,onValueChange:o,...a}=n,s=Ce(o);return e.jsx(nt,{scope:n.__scopeMenu,value:r,onValueChange:s,children:e.jsx(Re,{...a,ref:t})})});Cn.displayName=bn;var Sn="MenuRadioItem",jn=i.forwardRef((n,t)=>{const{value:r,...o}=n,a=rt(Sn,n.__scopeMenu),s=r===a.value;return e.jsx(yn,{scope:n.__scopeMenu,checked:s,children:e.jsx(we,{role:"menuitemradio","aria-checked":s,...o,ref:t,"data-state":ke(s),onSelect:w(o.onSelect,()=>{var d;return(d=a.onValueChange)==null?void 0:d.call(a,r)},{checkForDefaultPrevented:!1})})})});jn.displayName=Sn;var Ne="MenuItemIndicator",[yn,tt]=E(Ne,{checked:!1}),In=i.forwardRef((n,t)=>{const{__scopeMenu:r,forceMount:o,...a}=n,s=tt(Ne,r);return e.jsx(fe,{present:o||he(s.checked)||s.checked===!0,children:e.jsx(F.span,{...a,ref:t,"data-state":ke(s.checked)})})});In.displayName=Ne;var ot="MenuSeparator",Rn=i.forwardRef((n,t)=>{const{__scopeMenu:r,...o}=n;return e.jsx(F.div,{role:"separator","aria-orientation":"horizontal",...o,ref:t})});Rn.displayName=ot;var at="MenuArrow",Nn=i.forwardRef((n,t)=>{const{__scopeMenu:r,...o}=n,a=ee(r);return e.jsx(Or,{...a,...o,ref:t})});Nn.displayName=at;var _e="MenuSub",[st,_n]=E(_e),kn=n=>{const{__scopeMenu:t,children:r,open:o=!1,onOpenChange:a}=n,s=P(_e,t),d=ee(t),[u,m]=i.useState(null),[f,p]=i.useState(null),c=Ce(a);return i.useEffect(()=>(s.open===!1&&c(!1),()=>c(!1)),[s.open,c]),e.jsx(dn,{...d,children:e.jsx(hn,{scope:t,open:o,onOpenChange:c,content:f,onContentChange:p,children:e.jsx(st,{scope:t,contentId:pe(),triggerId:pe(),trigger:u,onTriggerChange:m,children:r})})})};kn.displayName=_e;var $="MenuSubTrigger",Pn=i.forwardRef((n,t)=>{const r=P($,n.__scopeMenu),o=ne($,n.__scopeMenu),a=_n($,n.__scopeMenu),s=ye($,n.__scopeMenu),d=i.useRef(null),{pointerGraceTimerRef:u,onPointerGraceIntentChange:m}=s,f={__scopeMenu:n.__scopeMenu},p=i.useCallback(()=>{d.current&&window.clearTimeout(d.current),d.current=null},[]);return i.useEffect(()=>p,[p]),i.useEffect(()=>{const c=u.current;return()=>{window.clearTimeout(c),m(null)}},[u,m]),e.jsx(Se,{asChild:!0,...f,children:e.jsx(Dn,{id:a.triggerId,"aria-haspopup":"menu","aria-expanded":r.open,"aria-controls":a.contentId,"data-state":Tn(r.open),...n,ref:sn(t,a.onTriggerChange),onClick:c=>{var h;(h=n.onClick)==null||h.call(n,c),!(n.disabled||c.defaultPrevented)&&(c.currentTarget.focus(),r.open||r.onOpenChange(!0))},onPointerMove:w(n.onPointerMove,Z(c=>{s.onItemEnter(c),!c.defaultPrevented&&!n.disabled&&!r.open&&!d.current&&(s.onPointerGraceIntentChange(null),d.current=window.setTimeout(()=>{r.onOpenChange(!0),p()},100))})),onPointerLeave:w(n.onPointerLeave,Z(c=>{var g,M;p();const h=(g=r.content)==null?void 0:g.getBoundingClientRect();if(h){const A=(M=r.content)==null?void 0:M.dataset.side,B=A==="right",U=B?-5:5,re=h[B?"left":"right"],te=h[B?"right":"left"];s.onPointerGraceIntentChange({area:[{x:c.clientX+U,y:c.clientY},{x:re,y:h.top},{x:te,y:h.top},{x:te,y:h.bottom},{x:re,y:h.bottom}],side:A}),window.clearTimeout(u.current),u.current=window.setTimeout(()=>s.onPointerGraceIntentChange(null),300)}else{if(s.onTriggerLeave(c),c.defaultPrevented)return;s.onPointerGraceIntentChange(null)}})),onKeyDown:w(n.onKeyDown,c=>{var g;const h=s.searchRef.current!=="";n.disabled||h&&c.key===" "||Kr[o.dir].includes(c.key)&&(r.onOpenChange(!0),(g=r.content)==null||g.focus(),c.preventDefault())})})})});Pn.displayName=$;var An="MenuSubContent",En=i.forwardRef((n,t)=>{const r=fn(S,n.__scopeMenu),{forceMount:o=r.forceMount,...a}=n,s=P(S,n.__scopeMenu),d=ne(S,n.__scopeMenu),u=_n(An,n.__scopeMenu),m=i.useRef(null),f=Q(t,m);return e.jsx(V.Provider,{scope:n.__scopeMenu,children:e.jsx(fe,{present:o||s.open,children:e.jsx(V.Slot,{scope:n.__scopeMenu,children:e.jsx(Ie,{id:u.contentId,"aria-labelledby":u.triggerId,...a,ref:f,align:"start",side:d.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:p=>{var c;d.isUsingKeyboardRef.current&&((c=m.current)==null||c.focus()),p.preventDefault()},onCloseAutoFocus:p=>p.preventDefault(),onFocusOutside:w(n.onFocusOutside,p=>{p.target!==u.trigger&&s.onOpenChange(!1)}),onEscapeKeyDown:w(n.onEscapeKeyDown,p=>{d.onClose(),p.preventDefault()}),onKeyDown:w(n.onKeyDown,p=>{var g;const c=p.currentTarget.contains(p.target),h=Ur[d.dir].includes(p.key);c&&h&&(s.onOpenChange(!1),(g=u.trigger)==null||g.focus(),p.preventDefault())})})})})})});En.displayName=An;function Tn(n){return n?"open":"closed"}function he(n){return n==="indeterminate"}function ke(n){return he(n)?"indeterminate":n?"checked":"unchecked"}function it(n){const t=document.activeElement;for(const r of n)if(r===t||(r.focus(),document.activeElement!==t))return}function ct(n,t){return n.map((r,o)=>n[(t+o)%n.length])}function dt(n,t,r){const a=t.length>1&&Array.from(t).every(f=>f===t[0])?t[0]:t,s=r?n.indexOf(r):-1;let d=ct(n,Math.max(s,0));a.length===1&&(d=d.filter(f=>f!==r));const m=d.find(f=>f.toLowerCase().startsWith(a.toLowerCase()));return m!==r?m:void 0}function ut(n,t){const{x:r,y:o}=n;let a=!1;for(let s=0,d=t.length-1;s<t.length;d=s++){const u=t[s].x,m=t[s].y,f=t[d].x,p=t[d].y;m>o!=p>o&&r<(f-u)*(o-m)/(p-m)+u&&(a=!a)}return a}function lt(n,t){if(!t)return!1;const r={x:n.clientX,y:n.clientY};return ut(r,t)}function Z(n){return t=>t.pointerType==="mouse"?n(t):void 0}var pt=xn,mt=Se,ht=wn,xt=Mn,ft=Re,wt=gn,Mt=we,gt=vn,Dt=Cn,vt=jn,bt=In,Ct=Rn,St=Nn,jt=kn,yt=Pn,It=En,Pe="DropdownMenu",[Rt,Ro]=on(Pe,[pn]),D=pn(),[Nt,On]=Rt(Pe),Ln=n=>{const{__scopeDropdownMenu:t,children:r,dir:o,open:a,defaultOpen:s,onOpenChange:d,modal:u=!0}=n,m=D(t),f=i.useRef(null),[p=!1,c]=an({prop:a,defaultProp:s,onChange:d});return e.jsx(Nt,{scope:t,triggerId:pe(),triggerRef:f,contentId:pe(),open:p,onOpenChange:c,onOpenToggle:i.useCallback(()=>c(h=>!h),[c]),modal:u,children:e.jsx(pt,{...m,open:p,onOpenChange:c,dir:o,modal:u,children:r})})};Ln.displayName=Pe;var Bn="DropdownMenuTrigger",Gn=i.forwardRef((n,t)=>{const{__scopeDropdownMenu:r,disabled:o=!1,...a}=n,s=On(Bn,r),d=D(r);return e.jsx(mt,{asChild:!0,...d,children:e.jsx(F.button,{type:"button",id:s.triggerId,"aria-haspopup":"menu","aria-expanded":s.open,"aria-controls":s.open?s.contentId:void 0,"data-state":s.open?"open":"closed","data-disabled":o?"":void 0,disabled:o,...a,ref:sn(t,s.triggerRef),onPointerDown:w(n.onPointerDown,u=>{!o&&u.button===0&&u.ctrlKey===!1&&(s.onOpenToggle(),s.open||u.preventDefault())}),onKeyDown:w(n.onKeyDown,u=>{o||(["Enter"," "].includes(u.key)&&s.onOpenToggle(),u.key==="ArrowDown"&&s.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(u.key)&&u.preventDefault())})})})});Gn.displayName=Bn;var _t="DropdownMenuPortal",zn=n=>{const{__scopeDropdownMenu:t,...r}=n,o=D(t);return e.jsx(ht,{...o,...r})};zn.displayName=_t;var Fn="DropdownMenuContent",Kn=i.forwardRef((n,t)=>{const{__scopeDropdownMenu:r,...o}=n,a=On(Fn,r),s=D(r),d=i.useRef(!1);return e.jsx(xt,{id:a.contentId,"aria-labelledby":a.triggerId,...s,...o,ref:t,onCloseAutoFocus:w(n.onCloseAutoFocus,u=>{var m;d.current||(m=a.triggerRef.current)==null||m.focus(),d.current=!1,u.preventDefault()}),onInteractOutside:w(n.onInteractOutside,u=>{const m=u.detail.originalEvent,f=m.button===0&&m.ctrlKey===!0,p=m.button===2||f;(!a.modal||p)&&(d.current=!0)}),style:{...n.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Kn.displayName=Fn;var kt="DropdownMenuGroup",Un=i.forwardRef((n,t)=>{const{__scopeDropdownMenu:r,...o}=n,a=D(r);return e.jsx(ft,{...a,...o,ref:t})});Un.displayName=kt;var Pt="DropdownMenuLabel",Wn=i.forwardRef((n,t)=>{const{__scopeDropdownMenu:r,...o}=n,a=D(r);return e.jsx(wt,{...a,...o,ref:t})});Wn.displayName=Pt;var At="DropdownMenuItem",$n=i.forwardRef((n,t)=>{const{__scopeDropdownMenu:r,...o}=n,a=D(r);return e.jsx(Mt,{...a,...o,ref:t})});$n.displayName=At;var Et="DropdownMenuCheckboxItem",Vn=i.forwardRef((n,t)=>{const{__scopeDropdownMenu:r,...o}=n,a=D(r);return e.jsx(gt,{...a,...o,ref:t})});Vn.displayName=Et;var Tt="DropdownMenuRadioGroup",Zn=i.forwardRef((n,t)=>{const{__scopeDropdownMenu:r,...o}=n,a=D(r);return e.jsx(Dt,{...a,...o,ref:t})});Zn.displayName=Tt;var Ot="DropdownMenuRadioItem",qn=i.forwardRef((n,t)=>{const{__scopeDropdownMenu:r,...o}=n,a=D(r);return e.jsx(vt,{...a,...o,ref:t})});qn.displayName=Ot;var Lt="DropdownMenuItemIndicator",Xn=i.forwardRef((n,t)=>{const{__scopeDropdownMenu:r,...o}=n,a=D(r);return e.jsx(bt,{...a,...o,ref:t})});Xn.displayName=Lt;var Bt="DropdownMenuSeparator",Yn=i.forwardRef((n,t)=>{const{__scopeDropdownMenu:r,...o}=n,a=D(r);return e.jsx(Ct,{...a,...o,ref:t})});Yn.displayName=Bt;var Gt="DropdownMenuArrow",zt=i.forwardRef((n,t)=>{const{__scopeDropdownMenu:r,...o}=n,a=D(r);return e.jsx(St,{...a,...o,ref:t})});zt.displayName=Gt;var Ft=n=>{const{__scopeDropdownMenu:t,children:r,open:o,onOpenChange:a,defaultOpen:s}=n,d=D(t),[u=!1,m]=an({prop:o,defaultProp:s,onChange:a});return e.jsx(jt,{...d,open:u,onOpenChange:m,children:r})},Kt="DropdownMenuSubTrigger",Hn=i.forwardRef((n,t)=>{const{__scopeDropdownMenu:r,...o}=n,a=D(r);return e.jsx(yt,{...a,...o,ref:t})});Hn.displayName=Kt;var Ut="DropdownMenuSubContent",Qn=i.forwardRef((n,t)=>{const{__scopeDropdownMenu:r,...o}=n,a=D(r);return e.jsx(It,{...a,...o,ref:t,style:{...n.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Qn.displayName=Ut;var Wt=Ln,$t=Gn,Jn=zn,Vt=Kn,Zt=Un,qt=Wn,Xt=$n,Yt=Vn,Ht=Zn,Qt=qn,Jt=Xn,eo=Yn,no=Ft,ro=Hn,to=Qn;const T=Wt;T.displayName="DropdownMenu";const K=$t;K.displayName="DropdownMenuTrigger";const k=Zt;k.displayName="DropdownMenuGroup";const xe=no;xe.displayName="DropdownMenuSubMenu";const Ae=Ht;Ae.displayName="DropdownMenuRadioGroup";const q=i.forwardRef(({className:n,children:t,...r},o)=>e.jsxs(ro,{ref:o,className:v("relative flex cursor-default select-none items-center rounded py-1.5 pl-2 pr-1 outline-none transition-colors data-[state=checked]:font-semibold sm:text-sm","text-gray-900 dark:text-gray-50","data-[disabled]:pointer-events-none data-[disabled]:text-gray-400 data-[disabled]:hover:bg-none dark:data-[disabled]:text-gray-600","focus-visible:bg-gray-100 data-[state=open]:bg-gray-100 focus-visible:dark:bg-gray-900 data-[state=open]:dark:bg-gray-900","hover:bg-gray-100 hover:dark:bg-gray-900",n),...r,children:[t,e.jsx(sr,{className:"ml-auto size-4 shrink-0","aria-hidden":"true"})]}));q.displayName="DropdownMenuSubMenuTrigger";const X=i.forwardRef(({className:n,collisionPadding:t=8,...r},o)=>e.jsx(Jn,{children:e.jsx(to,{ref:o,collisionPadding:t,className:v("relative z-50 overflow-hidden rounded-md border p-1 shadow-xl shadow-black/[2.5%]","min-w-32","max-h-[var(--radix-popper-available-height)]","bg-white dark:bg-gray-950","text-gray-900 dark:text-gray-50","border-gray-200 dark:border-gray-800","will-change-[transform,opacity]","data-[state=closed]:animate-hide","data-[side=bottom]:animate-slideDownAndFade data-[side=left]:animate-slideLeftAndFade data-[side=right]:animate-slideRightAndFade data-[side=top]:animate-slideUpAndFade",n),...r})}));X.displayName="DropdownMenuSubMenuContent";const O=i.forwardRef(({className:n,sideOffset:t=8,collisionPadding:r=8,align:o="center",loop:a=!0,...s},d)=>e.jsx(Jn,{children:e.jsx(Vt,{ref:d,className:v("relative z-50 overflow-hidden rounded-md border p-1 shadow-xl shadow-black/[2.5%]","min-w-48","max-h-[var(--radix-popper-available-height)]","bg-white dark:bg-gray-950","text-gray-900 dark:text-gray-50","border-gray-200 dark:border-gray-800","will-change-[transform,opacity]","data-[state=closed]:animate-hide","data-[side=bottom]:animate-slideDownAndFade data-[side=left]:animate-slideLeftAndFade data-[side=right]:animate-slideRightAndFade data-[side=top]:animate-slideUpAndFade",n),sideOffset:t,align:o,collisionPadding:r,loop:a,...s})}));O.displayName="DropdownMenuContent";const x=i.forwardRef(({className:n,shortcut:t,hint:r,children:o,...a},s)=>e.jsxs(Xt,{ref:s,className:v("group/DropdownMenuItem relative flex cursor-pointer select-none items-center rounded py-1.5 pl-2 pr-1 outline-none transition-colors data-[state=checked]:font-semibold sm:text-sm","text-gray-900 dark:text-gray-50","data-[disabled]:pointer-events-none data-[disabled]:text-gray-400 data-[disabled]:hover:bg-none dark:data-[disabled]:text-gray-600","focus-visible:bg-gray-100 focus-visible:dark:bg-gray-900","hover:bg-gray-100 hover:dark:bg-gray-900",n),"tremor-id":"tremor-raw",...a,children:[o,r&&e.jsx("span",{className:v("ml-auto pl-2 text-sm text-gray-400 dark:text-gray-600"),children:r}),t&&e.jsx("span",{className:v("ml-auto pl-2 text-sm text-gray-400 dark:text-gray-600"),children:t})]}));x.displayName="DropdownMenuItem";const N=i.forwardRef(({className:n,hint:t,shortcut:r,children:o,checked:a,...s},d)=>e.jsxs(Yt,{ref:d,className:v("relative flex cursor-pointer select-none items-center gap-x-2 rounded py-1.5 pl-8 pr-1 outline-none transition-colors data-[state=checked]:font-semibold sm:text-sm","text-gray-900 dark:text-gray-50","data-[disabled]:pointer-events-none data-[disabled]:text-gray-400 data-[disabled]:hover:bg-none dark:data-[disabled]:text-gray-600","focus-visible:bg-gray-100 focus-visible:dark:bg-gray-900","hover:bg-gray-100 hover:dark:bg-gray-900",n),checked:a,...s,children:[e.jsx("span",{className:"absolute left-2 flex size-4 items-center justify-center",children:e.jsx(Jt,{children:e.jsx(ir,{"aria-hidden":"true",className:"size-full shrink-0 text-gray-800 dark:text-gray-200"})})}),o,t&&e.jsx("span",{className:v("ml-auto text-sm font-normal text-gray-400 dark:text-gray-600"),children:t}),r&&e.jsx("span",{className:v("ml-auto text-sm font-normal tracking-widest text-gray-400 dark:border-gray-800 dark:text-gray-600"),children:r})]}));N.displayName="DropdownMenuCheckboxItem";const _=i.forwardRef(({className:n,hint:t,shortcut:r,children:o,...a},s)=>e.jsxs(Qt,{ref:s,className:v("group/DropdownMenuRadioItem relative flex cursor-pointer select-none items-center gap-x-2 rounded py-1.5 pl-8 pr-1 outline-none transition-colors data-[state=checked]:font-semibold sm:text-sm","text-gray-900 dark:text-gray-50","data-[disabled]:pointer-events-none data-[disabled]:text-gray-400 data-[disabled]:hover:bg-none dark:data-[disabled]:text-gray-600","focus-visible:bg-gray-100 focus-visible:dark:bg-gray-900","hover:bg-gray-100 hover:dark:bg-gray-900",n),...a,children:[e.jsxs("span",{className:"absolute left-2 flex size-4 items-center justify-center",children:[e.jsx(cr,{"aria-hidden":"true",className:"size-full shrink-0 text-blue-500 group-data-[state=checked]/DropdownMenuRadioItem:flex group-data-[state=unchecked]/DropdownMenuRadioItem:hidden dark:text-blue-500"}),e.jsx(dr,{"aria-hidden":"true",className:"size-full shrink-0 text-gray-300 group-data-[state=unchecked]/DropdownMenuRadioItem:flex group-data-[state=checked]/DropdownMenuRadioItem:hidden dark:text-gray-700"})]}),o,t&&e.jsx("span",{className:v("ml-auto text-sm font-normal text-gray-400 dark:text-gray-600"),children:t}),r&&e.jsx("span",{className:v("ml-auto text-sm font-normal tracking-widest text-gray-400 dark:border-gray-800 dark:text-gray-600"),children:r})]}));_.displayName="DropdownMenuRadioItem";const L=i.forwardRef(({className:n,...t},r)=>e.jsx(qt,{ref:r,className:v("px-2 py-2 text-xs font-medium tracking-wide","text-gray-500 dark:text-gray-500",n),...t}));L.displayName="DropdownMenuLabel";const b=i.forwardRef(({className:n,...t},r)=>e.jsx(eo,{ref:r,className:v("-mx-1 my-1 h-px border-t border-gray-200 dark:border-gray-800",n),...t}));b.displayName="DropdownMenuSeparator";const Y=({className:n,...t})=>e.jsx("div",{className:v("text-gray-600 dark:text-gray-400","group-data-[disabled]/DropdownMenuItem:text-gray-400 group-data-[disabled]/DropdownMenuItem:dark:text-gray-700",n),...t});Y.displayName="DropdownMenuIconWrapper";q.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuSubMenuTrigger"};X.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuSubMenuContent",props:{collisionPadding:{defaultValue:{value:"8",computed:!1},required:!1}}};O.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuContent",props:{sideOffset:{defaultValue:{value:"8",computed:!1},required:!1},collisionPadding:{defaultValue:{value:"8",computed:!1},required:!1},align:{defaultValue:{value:'"center"',computed:!1},required:!1},loop:{defaultValue:{value:"true",computed:!1},required:!1}}};x.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuItem",props:{shortcut:{required:!1,tsType:{name:"string"},description:""},hint:{required:!1,tsType:{name:"string"},description:""}}};_.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuRadioItem",props:{shortcut:{required:!1,tsType:{name:"string"},description:""},hint:{required:!1,tsType:{name:"string"},description:""}}};N.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuCheckboxItem",props:{shortcut:{required:!1,tsType:{name:"string"},description:""},hint:{required:!1,tsType:{name:"string"},description:""}}};Y.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuIconWrapper"};L.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuLabel"};b.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuSeparator"};const No={title:"ui/DropdownMenu",component:T},ie={render:()=>{const[n,t]=R.useState("bottom"),[r,o]=R.useState(!0),[a,s]=R.useState(!1),[d,u]=R.useState(!1);return e.jsxs(T,{children:[e.jsx(K,{asChild:!0,children:e.jsx(H,{variant:"secondary",children:"Open"})}),e.jsxs(O,{align:"end",children:[e.jsx(L,{children:"My Account"}),e.jsx(b,{}),e.jsxs(k,{children:[e.jsx(x,{children:e.jsxs("span",{className:"flex items-center gap-x-2",children:[e.jsx(ur,{className:"size-4 text-blue-500"}),e.jsx("span",{className:"text-blue-500",children:"Upgrade"})]})}),e.jsx(x,{disabled:!0,shortcut:"⌘B",children:e.jsxs("span",{className:"flex items-center gap-x-2",children:[e.jsx(Y,{children:e.jsx(lr,{className:"size-4 text-inherit"})}),e.jsx("span",{children:"Billing"})]})}),e.jsx(x,{shortcut:"⌘S",children:e.jsxs("span",{className:"flex items-center gap-x-2",children:[e.jsx(Y,{children:e.jsx(tn,{className:"size-4 text-inherit"})}),e.jsx("span",{children:"Account Settings"})]})})]}),e.jsx(b,{}),e.jsxs(k,{children:[e.jsx(x,{hint:"Pro",children:e.jsxs("span",{className:"flex items-center gap-x-2",children:[e.jsx(pr,{className:"size-4 text-inherit"}),e.jsx("span",{children:"Manage workspace"})]})}),e.jsxs(xe,{children:[e.jsx(q,{children:e.jsxs("span",{className:"flex items-center gap-x-2",children:[e.jsx(ze,{className:"size-4 text-inherit"}),e.jsx("span",{children:"Invite users"})]})}),e.jsxs(X,{children:[e.jsx(x,{children:e.jsxs("span",{className:"flex items-center gap-x-2",children:[e.jsx(mr,{className:"size-4 text-inherit"}),e.jsx("span",{children:"Email"})]})}),e.jsxs(xe,{children:[e.jsx(q,{children:e.jsxs("span",{className:"flex items-center gap-x-2",children:[e.jsx(hr,{className:"size-4 text-inherit"}),e.jsx("span",{children:"Message"})]})}),e.jsxs(X,{children:[e.jsx(x,{children:e.jsxs("span",{className:"flex items-center gap-x-2",children:[e.jsx(xr,{className:"size-4 text-inherit"}),e.jsx("span",{children:"Whatsapp"})]})}),e.jsx(x,{children:e.jsxs("span",{className:"flex items-center gap-x-2",children:[e.jsx(fr,{className:"size-4 text-inherit"}),e.jsx("span",{children:"Telegram"})]})}),e.jsx(x,{children:e.jsxs("span",{className:"flex items-center gap-x-2",children:[e.jsx(wr,{className:"size-4 text-inherit"}),e.jsx("span",{children:"Discord"})]})}),e.jsx(x,{children:e.jsxs("span",{className:"flex items-center gap-x-2",children:[e.jsx(Mr,{className:"size-4 text-inherit"}),e.jsx("span",{children:"Slack"})]})})]})]}),e.jsx(b,{}),e.jsx(x,{children:e.jsxs("span",{className:"flex items-center gap-x-2",children:[e.jsx(ze,{className:"size-4 text-inherit"}),e.jsx("span",{children:"More..."})]})})]})]}),e.jsx(x,{shortcut:"⌘T",children:e.jsxs("span",{className:"flex items-center gap-x-2",children:[e.jsx(gr,{className:"size-4 text-inherit"}),e.jsx("span",{children:"New Workspace"})]})})]}),e.jsx(b,{}),e.jsxs(Ae,{value:n,onValueChange:t,children:[e.jsx(_,{value:"alpha",hint:"A-Z",children:"Alphabetical"}),e.jsx(_,{value:"alpha-reverse",hint:"Z-A",children:"Reverse Alphabetical"}),e.jsx(_,{value:"asc",hint:"1-99",children:"Created at"})]}),e.jsx(b,{}),e.jsx(N,{checked:r,onCheckedChange:o,children:"Public"}),e.jsx(N,{checked:a,onCheckedChange:s,children:"Private"}),e.jsx(N,{checked:d,onCheckedChange:u,disabled:!0,children:"Restricted"}),e.jsx(b,{}),e.jsx(x,{children:e.jsxs("span",{className:"flex items-center gap-x-2",children:[e.jsx(Dr,{className:"size-4 text-inherit"}),e.jsx("span",{children:"Support"})]})}),e.jsx(x,{shortcut:"⇧⌘Q",children:e.jsxs("span",{className:"flex items-center gap-x-2",children:[e.jsx(vr,{className:"size-4 text-inherit"}),e.jsx("span",{children:"Sign out"})]})})]})]})}},ce={render:()=>e.jsxs(T,{children:[e.jsx(K,{asChild:!0,children:e.jsx(H,{variant:"secondary",children:"Open"})}),e.jsxs(O,{children:[e.jsx(L,{children:"My Account"}),e.jsxs(k,{children:[e.jsx(x,{shortcut:"⇧⌘P",children:"Profile"}),e.jsx(x,{disabled:!0,shortcut:"⌘B",children:"Billing"}),e.jsx(x,{shortcut:"⌘S",children:"Settings"}),e.jsx(x,{shortcut:"⌘K",children:"Shortcuts"})]}),e.jsx(b,{}),e.jsxs(k,{children:[e.jsx(x,{hint:"Pro",children:"Team"}),e.jsxs(xe,{children:[e.jsx(q,{children:"Invite users"}),e.jsxs(X,{children:[e.jsx(x,{children:"Email"}),e.jsx(x,{children:"Message"}),e.jsx(b,{}),e.jsx(x,{children:"More..."})]})]}),e.jsx(x,{shortcut:"⌘+T",children:"New Team"})]})]})]})},de={render:()=>e.jsxs(T,{children:[e.jsx(K,{asChild:!0,children:e.jsx(H,{variant:"secondary",children:"Open"})}),e.jsxs(O,{children:[e.jsx(L,{children:"My Account"}),e.jsxs(k,{children:[e.jsx(x,{shortcut:"⌘W",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(br,{className:"size-4 text-gray-500"}),e.jsx("span",{children:"Workspaces"})]})}),e.jsx(x,{shortcut:"⌘M",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(Cr,{className:"size-4 text-gray-500"}),e.jsx("span",{children:"Metrics catalogue (with long edge case)"})]})}),e.jsx(x,{shortcut:"⌘S",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(tn,{className:"size-4 text-gray-500"}),e.jsx("span",{children:"Settings"})]})}),e.jsx(x,{disabled:!0,shortcut:"⌘U",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(Y,{children:e.jsx(Sr,{className:"size-4 text-inherit"})}),e.jsx("span",{children:"Invite users"})]})})]}),e.jsx(b,{}),e.jsx(k,{children:e.jsx(x,{children:"Log out all"})})]})]})},ue={render:()=>{const[n,t]=R.useState("alpha");return e.jsxs(T,{children:[e.jsx(K,{asChild:!0,children:e.jsx(H,{variant:"secondary",children:"Open"})}),e.jsxs(O,{children:[e.jsx(L,{children:"Sorting"}),e.jsx(b,{}),e.jsx(k,{children:e.jsxs(Ae,{value:n,onValueChange:t,children:[e.jsx(_,{value:"alpha",hint:"A–Z",children:"Alphabetical"}),e.jsx(_,{value:"alpha-reverse",hint:"Z-A",children:"Reverse Alphabetical"}),e.jsx(_,{value:"asc",hint:"1-99",children:"Created At"})]})})]})]})}},le={render:()=>{const[n,t]=R.useState(!0),[r,o]=R.useState(!0),[a,s]=R.useState(!1);return e.jsxs(T,{children:[e.jsx(K,{asChild:!0,children:e.jsx(H,{variant:"secondary",children:"Open"})}),e.jsxs(O,{children:[e.jsx(L,{children:"Layout"}),e.jsx(b,{}),e.jsx(N,{checked:n,onCheckedChange:t,hint:"Pro",children:"Show status bar"}),e.jsx(N,{checked:r,onCheckedChange:o,children:"Show activity bar"}),e.jsx(N,{checked:a,onCheckedChange:s,hint:"Base",children:"Show panel"})]})]})}};var Ke,Ue,We;ie.parameters={...ie.parameters,docs:{...(Ke=ie.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => {
    const [position, setPosition] = React.useState("bottom");
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
    const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
    const [showPanel, setShowPanel] = React.useState<Checked>(false);
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span className="flex items-center gap-x-2">
                <RiArrowUpCircleLine className="size-4 text-blue-500" />
                <span className="text-blue-500">Upgrade</span>
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem disabled shortcut="⌘B">
              <span className="flex items-center gap-x-2">
                <DropdownMenuIconWrapper>
                  <RiIdCardLine className="size-4 text-inherit" />
                </DropdownMenuIconWrapper>
                <span>Billing</span>
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem shortcut="⌘S">
              <span className="flex items-center gap-x-2">
                <DropdownMenuIconWrapper>
                  <RiSettings2Line className="size-4 text-inherit" />
                </DropdownMenuIconWrapper>
                <span>Account Settings</span>
              </span>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem hint="Pro">
              <span className="flex items-center gap-x-2">
                <RiUserSmileLine className="size-4 text-inherit" />
                <span>Manage workspace</span>
              </span>
            </DropdownMenuItem>

            <DropdownMenuSubMenu>
              <DropdownMenuSubMenuTrigger>
                <span className="flex items-center gap-x-2">
                  <RiAddCircleLine className="size-4 text-inherit" />
                  <span>Invite users</span>
                </span>
              </DropdownMenuSubMenuTrigger>
              <DropdownMenuSubMenuContent>
                <DropdownMenuItem>
                  <span className="flex items-center gap-x-2">
                    <RiMailAddLine className="size-4 text-inherit" />
                    <span>Email</span>
                  </span>
                </DropdownMenuItem>

                <DropdownMenuSubMenu>
                  <DropdownMenuSubMenuTrigger>
                    <span className="flex items-center gap-x-2">
                      <RiMessageLine className="size-4 text-inherit" />
                      <span>Message</span>
                    </span>
                  </DropdownMenuSubMenuTrigger>
                  <DropdownMenuSubMenuContent>
                    <DropdownMenuItem>
                      <span className="flex items-center gap-x-2">
                        <RiWhatsappLine className="size-4 text-inherit" />
                        <span>Whatsapp</span>
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span className="flex items-center gap-x-2">
                        <RiTelegramLine className="size-4 text-inherit" />
                        <span>Telegram</span>
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span className="flex items-center gap-x-2">
                        <RiDiscordLine className="size-4 text-inherit" />
                        <span>Discord</span>
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span className="flex items-center gap-x-2">
                        <RiSlackLine className="size-4 text-inherit" />
                        <span>Slack</span>
                      </span>
                    </DropdownMenuItem>
                  </DropdownMenuSubMenuContent>
                </DropdownMenuSubMenu>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span className="flex items-center gap-x-2">
                    <RiAddCircleLine className="size-4 text-inherit" />
                    <span>More...</span>
                  </span>
                </DropdownMenuItem>
              </DropdownMenuSubMenuContent>
            </DropdownMenuSubMenu>
            <DropdownMenuItem shortcut="⌘T">
              <span className="flex items-center gap-x-2">
                <RiAddLine className="size-4 text-inherit" />
                <span>New Workspace</span>
              </span>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="alpha" hint="A-Z">
              Alphabetical
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="alpha-reverse" hint="Z-A">
              Reverse Alphabetical
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="asc" hint="1-99">
              Created at
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator />

          <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
            Public
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar}>
            Private
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel} disabled>
            Restricted
          </DropdownMenuCheckboxItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <span className="flex items-center gap-x-2">
              <RiHeartPulseLine className="size-4 text-inherit" />
              <span>Support</span>
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem shortcut="⇧⌘Q">
            <span className="flex items-center gap-x-2">
              <RiLogoutBoxLine className="size-4 text-inherit" />
              <span>Sign out</span>
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>;
  }
}`,...(We=(Ue=ie.parameters)==null?void 0:Ue.docs)==null?void 0:We.source}}};var $e,Ve,Ze;ce.parameters={...ce.parameters,docs:{...($e=ce.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render: () => {
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem shortcut="⇧⌘P">Profile</DropdownMenuItem>
            <DropdownMenuItem disabled shortcut="⌘B">
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem shortcut="⌘S">Settings</DropdownMenuItem>
            <DropdownMenuItem shortcut="⌘K">Shortcuts</DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem hint="Pro">Team</DropdownMenuItem>
            <DropdownMenuSubMenu>
              <DropdownMenuSubMenuTrigger>
                Invite users
              </DropdownMenuSubMenuTrigger>
              <DropdownMenuSubMenuContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubMenuContent>
            </DropdownMenuSubMenu>
            <DropdownMenuItem shortcut="⌘+T">New Team</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>;
  }
}`,...(Ze=(Ve=ce.parameters)==null?void 0:Ve.docs)==null?void 0:Ze.source}}};var qe,Xe,Ye;de.parameters={...de.parameters,docs:{...(qe=de.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => {
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem shortcut="⌘W">
              <div className="flex items-center space-x-2">
                <RiStackLine className="size-4 text-gray-500" />
                <span>Workspaces</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem shortcut="⌘M">
              <div className="flex items-center space-x-2">
                <RiFolder5Line className="size-4 text-gray-500" />
                <span>Metrics catalogue (with long edge case)</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem shortcut="⌘S">
              <div className="flex items-center space-x-2">
                <RiSettings2Line className="size-4 text-gray-500" />
                <span>Settings</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem disabled shortcut="⌘U">
              <div className="flex items-center space-x-2">
                <DropdownMenuIconWrapper>
                  <RiUserAddLine className="size-4 text-inherit" />
                </DropdownMenuIconWrapper>
                <span>Invite users</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem>Log out all</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>;
  }
}`,...(Ye=(Xe=de.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var He,Qe,Je;ue.parameters={...ue.parameters,docs:{...(He=ue.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: () => {
    const [sort, setSort] = React.useState("alpha");
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Sorting</DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
              <DropdownMenuRadioItem value="alpha" hint="A–Z">
                Alphabetical
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="alpha-reverse" hint="Z-A">
                Reverse Alphabetical
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="asc" hint="1-99">
                Created At
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>;
  }
}`,...(Je=(Qe=ue.parameters)==null?void 0:Qe.docs)==null?void 0:Je.source}}};var en,nn,rn;le.parameters={...le.parameters,docs:{...(en=le.parameters)==null?void 0:en.docs,source:{originalSource:`{
  render: () => {
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
    const [showActivityBar, setShowActivityBar] = React.useState<Checked>(true);
    const [showPanel, setShowPanel] = React.useState<Checked>(false);
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Layout</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar} hint="Pro">
            Show status bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar}>
            Show activity bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel} hint="Base">
            Show panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>;
  }
}`,...(rn=(nn=le.parameters)==null?void 0:nn.docs)==null?void 0:rn.source}}};const _o=["Default","Simple","WithIcons","WithRadioItem","WithCheckboxItem"];export{ie as Default,ce as Simple,le as WithCheckboxItem,de as WithIcons,ue as WithRadioItem,_o as __namedExportsOrder,No as default};
